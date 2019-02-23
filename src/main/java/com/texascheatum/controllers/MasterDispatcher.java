package com.texascheatum.controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.texascheatum.services.DeckService;
import com.texascheatum.services.OddsService;
import com.texascheatum.services.PlayerService;

public class MasterDispatcher {
	private MasterDispatcher() { }
	private static final Logger log = Logger.getLogger(MasterDispatcher.class);
	
	public static void processPOST(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String[] uriStrings = request.getRequestURI().split("/");
		String uri = uriStrings[uriStrings.length - 1];
		
//		response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
//		response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
//		response.setDateHeader("Expires", 0); // Proxies.
//		response.setContentType("application/json");
		
		switch(uri) {
		case "register":
			PlayerService.register(request, response);
			break;
		case "login":
			PlayerService.login(request, response);
			break;
		case "start":
			DeckService.startGame(request, response);
			break;
		case "join":
			DeckService.joinGame(request, response);
			break;
		case "action":
			DeckService.action(request, response);
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
		case "getTable":
			DeckService.getTable(request, response);
			break;
		case "cheat":
			OddsService.cheat(request, response);
			break;
		case "status":
			DeckService.getGame(request, response);
			break;
		default:
			log.error("URI not recognized");
		}
	}
}
