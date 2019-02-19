package com.texascheatum.utils;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.apache.log4j.Logger;

public class TomcatConnectionPool {
	
	final static Logger log = Logger.getLogger(TomcatConnectionPool.class);

	private DataSource dataSource;
	
	private static TomcatConnectionPool connectionpool;

	private TomcatConnectionPool() {

		try {
			Context initialContext = new InitialContext();
			Context environmentContext = (Context) initialContext.lookup("java:comp/env");
			dataSource = (DataSource) environmentContext.lookup("jdbc/TexasCheatum");
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		}
		
	}
	
	public static void setupConnection() {
		connectionpool = new TomcatConnectionPool();
	}
	
	public static Connection getConnection() throws SQLException{
		
				return connectionpool.dataSource.getConnection();

	}
	
}
