package com.texascheatum.model;

import java.io.Serializable;

public class Game implements Serializable {
	private static final long serialVersionUID = 5813930392517750792L;
	
	private String gameID;
	private String status;
	private double pot;
	private double currentTarget;
	private int currentTurn;
	public Game() {
		super();
	}
	public Game(String gameID, String status, double pot, double currentTarget, int currentTurn) {
		super();
		this.gameID = gameID;
		this.status = status;
		this.pot = pot;
		this.currentTarget = currentTarget;
		this.currentTurn = currentTurn;
	}
	public String getGameID() {
		return gameID;
	}
	public void setGameID(String gameID) {
		this.gameID = gameID;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getPot() {
		return pot;
	}
	public void setPot(double pot) {
		this.pot = pot;
	}
	public double getCurrentTarget() {
		return currentTarget;
	}
	public void setCurrentTarget(double currentTarget) {
		this.currentTarget = currentTarget;
	}
	public int getCurrentTurn() {
		return currentTurn;
	}
	public void setCurrentTurn(int currentTurn) {
		this.currentTurn = currentTurn;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
