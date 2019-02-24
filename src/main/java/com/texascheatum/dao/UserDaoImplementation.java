package com.texascheatum.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.texascheatum.model.AbstractUser;
import com.texascheatum.model.InvalidUser;
import com.texascheatum.model.User;
import com.texascheatum.utils.TomcatConnectionPool;

public class UserDaoImplementation implements UserDao{

	private static UserDaoImplementation userDao;
	private static TomcatConnectionPool pool = TomcatConnectionPool.getInstance();
	final static Logger log = Logger.getLogger(UserDaoImplementation.class);

	private UserDaoImplementation() {
		// TODO Auto-generated constructor stub
	}
	
	public static UserDaoImplementation getUserDao() {
		
		if(userDao == null)
			userDao = new UserDaoImplementation();
		
		return userDao;
	}
	

	@Override
	public boolean insertUser(String username, String email, String password) {
		Connection conn = null;
		System.out.println(1);
		conn = pool.getConnection();
		System.out.println(2);
		try (CallableStatement cs = conn.prepareCall("{call insert_user(?,?,?)}");) {
			cs.setString(1, username);
			cs.setString(2, email);
			cs.setString(3, password);
			cs.execute();

			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return false;
	}

	@Override
	public AbstractUser getUser(String username, String password) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call get_user(?,?,?,?,?,?,?,?,?)}");) {
			cs.setString(1, username);
			cs.setString(2, password);
			cs.registerOutParameter(3, Types.INTEGER);
			cs.registerOutParameter(4, Types.VARCHAR);
			cs.registerOutParameter(5, Types.INTEGER);
			cs.registerOutParameter(6, Types.VARCHAR);
			cs.registerOutParameter(7, Types.DOUBLE);
			cs.registerOutParameter(8, Types.INTEGER);
			cs.registerOutParameter(9, Types.INTEGER);
			cs.execute();
			
			int userId = cs.getInt(3);
			String email = cs.getString(4);
			int superuser = cs.getInt(5);
			String currentGame = cs.getString(6);
			double balance = cs.getDouble(7);
			int totalGames = cs.getInt(8);
			int totalWins = cs.getInt(9);
			return new User(userId, username, balance, email, password, superuser, currentGame, totalGames, totalWins);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return new InvalidUser();
	}
	@Override
	public String getUsernameForTurn(String gameID) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (PreparedStatement cs = conn.prepareStatement("select current_turn from games where game_id=?");
			PreparedStatement cs2 = conn.prepareStatement("select username from users where current_game=? and current_turn=?");) {
			cs.setString(1, gameID);
			ResultSet turnNumbers = cs.executeQuery();
			if (turnNumbers.next()) {
				StringBuilder names = new StringBuilder("");
				String turnString = Integer.toString(turnNumbers.getInt(1));
				for (int i = 0; i < turnString.length(); i++) {
					cs2.setString(1, gameID);
					cs2.setInt(2, Integer.valueOf(turnString.substring(i, i + 1)));

					ResultSet username = cs.executeQuery();
					username.next();
					names.append(username.getString(1) + ",");
				}
				names.deleteCharAt(names.length() - 1);
				return names.toString();
			}
			return "";
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return null;
	}
	
	@Override
	public List<User> getUsers(String gameId) {
		Connection conn = null;
		conn = pool.getConnection();

		try (PreparedStatement ps = conn.prepareStatement("select * from users where current_game = ?");) {
			ps.setString(1, gameId);
			ResultSet results = ps.executeQuery();
			
			List<User> allUsers = new ArrayList<>();
			while(results.next()) {				
				allUsers.add(new User(results.getInt("user_id"), results.getString("username"), results.getDouble("balance"), results.getString("email"), "n/a", 
						results.getInt("superuser"), results.getString("current_game"),results.getInt("total_games"),results.getInt("total_wins")));
			}
			return allUsers;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
		
	return new ArrayList<>();
	}
	
	@Override
	public boolean promoteUser(String username) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call promote_user(?)}");) {
			cs.setString(1, username);
			cs.execute();
			

			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return false;
	}
	
	@Override
	public boolean assignTurnOrder(int turnNumber, String username) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (PreparedStatement cs = conn.prepareStatement("update users set turn_number=? where username=?");) {
			cs.setInt(1, turnNumber);
			cs.setString(2, username);
			int output = cs.executeUpdate();
			

			return output > 1;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return false;
	}
	
	@Override
	public boolean deleteUser(String username) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call delete_user(?)}");) {
			cs.setString(1, username);
			boolean output = cs.execute();
			

			return output;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return false;
	}

	@Override
	public boolean wonGame(String username) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call won_game(?)}");) {
			cs.setString(1, username);
			cs.execute();
			

			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return false;
	}

	@Override
	public boolean lostGame(String[] username) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call lost_game(?)}");) {
			for(int i = 0; i < username.length; i++) {
				cs.setString(1, username[i]);
				cs.execute();
			}

			return true;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return false;
	}
	
}
