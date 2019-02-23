package com.texascheatum.dao;

import com.texascheatum.model.Game;

public interface GameDao {
	public boolean createGame(String gameId, String username);
	public Game readGame(String gameId);
	public boolean joinGame(String gameId, String userId);
	public double makeBet(String gameId, String userId, double amount);
}
