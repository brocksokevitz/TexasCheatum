package com.texascheatum.dao;

public interface GameDao {
	public boolean createGame(int gameId, String username);
	public boolean updateGame(int gameId, String status);
}
