package com.texascheatum.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

import org.apache.log4j.Logger;

import com.texascheatum.model.Game;
import com.texascheatum.model.User;
import com.texascheatum.utils.TomcatConnectionPool;

public class GameDaoImplementation implements GameDao{

	private static GameDaoImplementation gameDao;
	private static TomcatConnectionPool pool = TomcatConnectionPool.getInstance();
	final static Logger log = Logger.getLogger(GameDaoImplementation.class);

	private GameDaoImplementation() {
		// TODO Auto-generated constructor stub
	}
	
	public static GameDaoImplementation getGameDao() {
		
		if(gameDao == null)
			gameDao = new GameDaoImplementation();
		
		return gameDao;
	}

	@Override
	public boolean createGame(String gameId, String username) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call create_game(?,?)}");) {
			cs.setString(1, gameId);
			cs.setString(2, username);

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
	public Game readGame(String gameIdOrUsername) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try(PreparedStatement cs = conn.prepareStatement("select current_game from users where username=?");){
			cs.setString(1, gameIdOrUsername);
			ResultSet results = cs.executeQuery();
			if (results.next()) {
				gameIdOrUsername = results.getString(1);
				System.out.println(gameIdOrUsername);
			}
			
		}catch(SQLException e){
			log.error(e.getMessage());
		}
		
		Game foundGame = null;
		try (PreparedStatement cs = conn.prepareStatement("select * from games where game_id=?");) {
			cs.setString(1, gameIdOrUsername);

			ResultSet results = cs.executeQuery();
			if (results.next())
				foundGame = new Game(
					results.getString(1),
					results.getString(2),
					results.getDouble(3),
					results.getDouble(4),
					results.getInt(5));
			
		} catch (SQLException e) {
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
		return foundGame;
	}

	@Override
	public int joinGame(String gameId, String userId) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try(PreparedStatement cs = conn.prepareStatement("select current_game from users where username=?");){
			cs.setString(1, gameId);
			ResultSet results = cs.executeQuery();
			if (results.next()) {
				gameId = results.getString(1);
			}
			System.out.println(gameId);
		}catch(SQLException e){
			log.error(e.getMessage());
		}
		
		try (CallableStatement cs = conn.prepareCall("{call join_game(?,?,?)}");) {
			cs.setString(1, gameId);
			cs.setString(2, userId);
			cs.registerOutParameter(3, Types.INTEGER);

			cs.execute();
			
			cs.getInt(3);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	return 0;
	}

	@Override
	public boolean startGame(String gameId) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call start_game(?,?)}");) {
			cs.setString(1, gameId);
			cs.registerOutParameter(2, Types.VARCHAR);

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
	public double makeBet(String gameId, String userId, double amount, String inAction) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call make_bet(?,?,?,?,?)}");) {
			cs.setString(1, gameId);
			cs.setString(2, userId);
			cs.setDouble(3, amount);
			cs.setString(4, inAction);
			cs.registerOutParameter(5, Types.DECIMAL);

			cs.execute();

			return cs.getDouble(5);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
		return 0.0;
	}

	@Override
	public void endGame(String gameId, List<String> winners) {
		List<User> players = UserDaoImplementation.getUserDao().getUsers(gameId);
		System.out.println(players.size());
		StringBuilder winningNumbers = new StringBuilder("");
		for (User player : players)
			if (winners.contains(player.getUsername()))
				winningNumbers.append(player.getTurnNumber());
		if (winningNumbers.charAt(0) == '0')
			winningNumbers.reverse();
		
		Connection conn = null;
		conn = pool.getConnection();
		
		try (CallableStatement cs = conn.prepareCall("{call end_game(?,?)}");) {
			cs.setString(1, gameId);
			cs.setString(2, winningNumbers.toString());

			cs.execute();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}finally {
			pool.freeConnection(conn);
		}
	}
}
