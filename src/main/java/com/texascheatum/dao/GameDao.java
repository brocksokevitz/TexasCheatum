package com.texascheatum.dao;

public interface GameDao {
	public boolean createGame(String gameId, String username);
	public boolean updateGame(String gameId, String status);
	public boolean updatePot(String gameId, String status);
}
