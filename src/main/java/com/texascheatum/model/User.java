package com.texascheatum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class User {

	private int userId;
	private String username;
	private String email;
	
	@JsonIgnore
	private String password;
	
	private int superuser;
	private int currentGame;
	
	public User() {
		super();
	}

	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public User(String username, String email, String password, int superuser, int currentGame) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.superuser = superuser;
		this.currentGame = currentGame;
	}

	public User(int userId, String username, String email, int superuser, int currentGame) {
		super();
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.superuser = superuser;
		this.currentGame = currentGame;
	}
	
	public User(int userId, String username, String email, String password, int superuser, int currentGame) {
		super();
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.password = password;
		this.superuser = superuser;
		this.currentGame = currentGame;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + currentGame;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + superuser;
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
		return "User [userId=" + userId + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", superuser=" + superuser + ", currentGame=" + currentGame + "]";
	}
	
}
