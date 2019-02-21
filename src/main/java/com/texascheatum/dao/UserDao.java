package com.texascheatum.dao;

import java.util.List;

import com.texascheatum.model.AbstractUser;
import com.texascheatum.model.User;

public interface UserDao {
	
	public boolean insertUser(String username, String email, String password);
	public AbstractUser getUser(String username, String password);
	public List<User> getUsers(String gameId);
	public boolean promoteUser(String username);
	public boolean deleteUser(String username);
	public boolean wonGame(String username);
	public boolean lostGame(String[] username);
	
}
