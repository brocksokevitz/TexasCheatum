package com.texascheatum.utils;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.apache.log4j.Logger;

public class TomcatConnectionPool {
	
	   private static TomcatConnectionPool pool = null;
	    private static DataSource dataSource = null;

	    private TomcatConnectionPool() {
	        try {
	            InitialContext initialContext = new InitialContext();
	            Context environmentContext = (Context) initialContext.lookup("java:comp/env");
				dataSource = (DataSource) environmentContext.lookup("jdbc/TexasCheatum");
	            System.out.print(dataSource);
	        } catch (NamingException e) {
	            System.out.println(e);
	        }
	    }

	    public static synchronized TomcatConnectionPool getInstance() {
	        if (pool == null) {
	            pool = new TomcatConnectionPool();
	        }
	        return pool;
	    }

	    public Connection getConnection() {
	        try {
	            return dataSource.getConnection();
	        } catch (SQLException e) {
	            System.out.println(e);
	            return null;
	        }
	    }

	    public void freeConnection(Connection c) {
	        try {
	            c.close();
	        } catch (SQLException e) {
	            System.out.println(e);
	        }
	    }
	
}
