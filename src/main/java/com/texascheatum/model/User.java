package com.texascheatum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class User {

	private int userId;
	private String username;
	private double balance;
	private String email;
	
	@JsonIgnore
	private String password;
	
	private int superuser;
	private String currentGame;
	private int totalGames;
	private int totalWins;
	public User() {
		super();
	}
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public User(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}
	public User(int userId, String username, double balance, String email, String password, int superuser,
			String currentGame, int totalGames, int totalWins) {
		super();
		this.userId = userId;
		this.username = username;
		this.balance = balance;
		this.email = email;
		this.password = password;
		this.superuser = superuser;
		this.currentGame = currentGame;
		this.totalGames = totalGames;
		this.totalWins = totalWins;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getSuperuser() {
		return superuser;
	}
	public void setSuperuser(int superuser) {
		this.superuser = superuser;
	}
	public String getCurrentGame() {
		return currentGame;
	}
	public void setCurrentGame(String currentGame) {
		this.currentGame = currentGame;
	}
	public int getTotalGames() {
		return totalGames;
	}
	public void setTotalGames(int totalGames) {
		this.totalGames = totalGames;
	}
	public int getTotalWins() {
		return totalWins;
	}
	public void setTotalWins(int totalWins) {
		this.totalWins = totalWins;
	}
	
}
