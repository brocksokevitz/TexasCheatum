package com.texascheatum.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.texascheatum.utils.ConnectionUtil;
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
		
		try {
			CallableStatement cs = conn.prepareCall("{call create_game(?,?)}");	
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
	public boolean updateGame(String gameId, String status) {
		Connection conn = null;
		conn = pool.getConnection();
		
		try {
			CallableStatement cs = conn.prepareCall("{call update_game(?,?)}");	
			cs.setString(1, gameId);
			cs.setString(2, status);

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
	public boolean updatePot(String gameId, String status) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
