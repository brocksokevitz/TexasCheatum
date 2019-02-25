package com.texascheatum.dao;

import java.util.List;

import com.texascheatum.model.Game;

public interface GameDao {
	public boolean createGame(String gameId, String username);
	public Game readGame(String gameId);
	public int joinGame(String gameId, String userId);
	public boolean startGame(String gameId);
	public double makeBet(String gameId, String userId, double amount, String inAction);
	public void endGame(String gameId, List<String> winners);
}
