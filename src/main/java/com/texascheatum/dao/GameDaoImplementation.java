package com.texascheatum.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.texascheatum.utils.ConnectionUtil;

public class GameDaoImplementation implements GameDao{

	private static GameDaoImplementation gameDao;
	private static ConnectionUtil cu = ConnectionUtil.getInstance();
	final static Logger log = Logger.getLogger(GameDaoImplementation.class);

	private GameDaoImplementation() {
		// TODO Auto-generated constructor stub
	}
	
	public static GameDaoImplementation getReimbursementDao() {
		
		if(gameDao == null)
			gameDao = new GameDaoImplementation();
		
		return gameDao;
	}

	@Override
	public boolean createGame(int gameId, String username) {
		Connection conn = null;
		conn = cu.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call create_game(?,?)}");	
			cs.setInt(1, gameId);
			cs.setString(2, username);

			boolean output = cs.execute();
			

			return output;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
	return false;
	}

	@Override
	public boolean updateGame(int gameId, String status) {
		Connection conn = null;
		conn = cu.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call update_game(?,?)}");	
			cs.setInt(1, gameId);
			cs.setString(2, status);

			boolean output = cs.execute();
			

			return output;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
	return false;
	}
	
}
