package com.texascheatum.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import org.apache.log4j.Logger;

import com.texascheatum.model.User;
import com.texascheatum.utils.ConnectionUtil;

public class UserDaoImplementation implements UserDao{

	private static UserDaoImplementation userDao;
	private static ConnectionUtil cu = ConnectionUtil.getInstance();
	final static Logger log = Logger.getLogger(UserDaoImplementation.class);

	private UserDaoImplementation() {
		// TODO Auto-generated constructor stub
	}
	
	public static UserDaoImplementation getReimbursementDao() {
		
		if(userDao == null)
			userDao = new UserDaoImplementation();
		
		return userDao;
	}

	@Override
	public boolean insertUser(String username, String email, String password) {
		Connection conn = null;
		conn = cu.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call insert_user(?,?,?)}");	
			cs.setString(1, username);
			cs.setString(2, email);
			cs.setString(3, password);
			boolean output = cs.execute();
			

			return output;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
	return false;
	}

	@Override
	public User getUser(String username, String password) {
		Connection conn = null;
		conn = cu.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call get_user(?,?,?,?,?,?)}");	
			cs.setString(1, username);
			cs.setString(2, password);
			cs.registerOutParameter(3, Types.INTEGER);
			cs.registerOutParameter(4, Types.VARCHAR);
			cs.registerOutParameter(5, Types.INTEGER);
			cs.registerOutParameter(6, Types.INTEGER);
			cs.execute();
			
			int userId = cs.getInt(3);
			String email = cs.getString(4);
			int superuser = cs.getInt(5);
			int currentGame = cs.getInt(6);
			
			return new User(userId, username, email, superuser, currentGame);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
	return new User();
	}
	
	@Override
	public boolean promoteUser(String username) {
		Connection conn = null;
		conn = cu.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call promote_user(?)}");	
			cs.setString(1, username);
			boolean output = cs.execute();
			

			return output;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
	return false;
	}
	
	@Override
	public boolean deleteUser(String username) {
		Connection conn = null;
		conn = cu.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call delete_user(?)}");	
			cs.setString(1, username);
			boolean output = cs.execute();
			

			return output;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
	return false;
	}
	
}
