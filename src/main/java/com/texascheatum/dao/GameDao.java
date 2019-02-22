package com.texascheatum.dao;

public interface GameDao {
	public boolean createGame(String gameId, String username);
	public boolean updateGame(String gameId, String status);
	public boolean updateTarget(String gameId, double newTarget);
	public boolean updatePot(String gameId);
}
