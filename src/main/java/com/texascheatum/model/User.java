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
	private int currentGame;
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
			int currentGame, int totalGames, int totalWins) {
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
	public int getCurrentGame() {
		return currentGame;
	}
	public void setCurrentGame(int currentGame) {
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(balance);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + currentGame;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + superuser;
		result = prime * result + totalGames;
		result = prime * result + totalWins;
		result = prime * result + userId;
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (Double.doubleToLongBits(balance) != Double.doubleToLongBits(other.balance))
			return false;
		if (currentGame != other.currentGame)
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (superuser != other.superuser)
			return false;
		if (totalGames != other.totalGames)
			return false;
		if (totalWins != other.totalWins)
			return false;
		if (userId != other.userId)
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", balance=" + balance + ", email=" + email
				+ ", password=" + password + ", superuser=" + superuser + ", currentGame=" + currentGame
				+ ", totalGames=" + totalGames + ", totalWins=" + totalWins + "]";
	}
	
}
