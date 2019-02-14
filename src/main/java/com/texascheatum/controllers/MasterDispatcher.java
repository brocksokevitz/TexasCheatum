package com.texascheatum.controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.texascheatum.services.DeckService;
import com.texascheatum.services.PlayerService;

public class MasterDispatcher {
	private MasterDispatcher() { }
	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	
	public static void processPOST(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];
		
		switch(uri) {
		case "register":
			PlayerService.register(request, response);
			break;
		case "login":
			PlayerService.login(request, response);
			break;
		case "start":
			break;
		case "join":
			break;
		default:
			log.error("URI not recognized");
		}
	}
	
	public static void processGET(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];
		
		switch(uri) {
		case "logout":
			PlayerService.logout(request, response);
			break;
		case "getHand":
			DeckService.getHand(request, response);
			break;
		case "getFlop":
			DeckService.flop(request, response);
			break;
		case "getTurn":
			DeckService.turn_river(request, response);
			break;
		case "getRiver":
			DeckService.turn_river(request, response);
			break;
		case "cheat":
			break;
		default:
			log.error("URI not recognized");
		}
	}
}
