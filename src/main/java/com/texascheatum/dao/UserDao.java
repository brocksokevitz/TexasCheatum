package com.texascheatum.dao;

import com.texascheatum.model.User;

public interface UserDao {
	
	public boolean insertUser(String username, String email, String password);
	public User getUser(String username, String password);
	public boolean promoteUser(String username);
	public boolean deleteUser(String username);
	//public boolean promoteUser(String username);
	//public boolean demoteUser(String username);
	
}
