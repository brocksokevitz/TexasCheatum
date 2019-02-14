package com.texascheatum.services;

import java.io.IOException;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.dao.GameDaoImplementation;
import com.texascheatum.model.User;

public class DeckService {
	private DeckService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	private static final String USER_AGENT =
			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
	
	public static void startGame(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String gameID = getNewGameID();
		if (gameID != null) {
			GameDaoImplementation.getGameDao().createGame(gameID,
					((User) request.getSession().getAttribute("user")).getUsername());
			request.getSession().setAttribute("gameID", gameID);
			response.getWriter().write(gameID);
		}
	}
	private static String getNewGameID() throws IOException {
		JsonNode apiResp = makeHttpRequest("new/shuffle/?deck_count=1");
		return apiResp.get("deck_id").asText();
	}
	
	public static void getGame(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		getHand(request, response);
		getTable(request, response);
	}

	public static void getHand(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode apiResp = makeHttpRequest(
				request.getSession().getAttribute("gameID")
				+ "/pile/" + ((User) request.getSession().getAttribute("user")).getUsername()
				+ "/list");

		response.setHeader("Content-Type", "text/plain");
		JsonNode piles = apiResp.get("piles");
		if (piles.has(((User) request.getSession().getAttribute("user")).getUsername()))
			response.getWriter().write(
					getCardString(piles.get(((User) request.getSession().getAttribute("user")).getUsername())));
		else
			response.getWriter().write(drawHand(request));
	}
	private static String drawHand(HttpServletRequest request) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				request.getSession().getAttribute("gameID")
				+ "/draw/?count=2");
		
		String cards = getCardString(apiResp);
		addCardsToPile(request, ((User) request.getSession().getAttribute("user")).getUsername(), cards.toString());
		return cards;
	}
	
	public static void getTable(HttpServletRequest request, HttpServletResponse response) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				request.getSession().getAttribute("gameID")
				+ "/pile/table/list");

		response.setHeader("Content-Type", "text/plain");
		JsonNode piles = apiResp.get("piles");
		if (piles.has("table"))
			response.getWriter().write(getCardString(piles.get("table")));
	}
	
	public static void flop(HttpServletRequest request, HttpServletResponse response) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				request.getSession().getAttribute("gameID")
				+ "/draw/?count=3");
		
		addCardsToPile(request, "table", getCardString(apiResp));
		getTable(request, response);
	}
	public static void turn_river(HttpServletRequest request, HttpServletResponse response) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				request.getSession().getAttribute("gameID")
				+ "/draw/?count=1");
		
		addCardsToPile(request, "table", getCardString(apiResp));
		getTable(request, response);
	}
	
	private static void addCardsToPile(HttpServletRequest request, String pile, String cards) throws IOException {
		makeHttpRequest(
				request.getSession().getAttribute("gameID")
				+ "/pile/" + pile
				+ "/add/?cards=" + cards);
	}
	private static JsonNode makeHttpRequest(String uri) throws IOException {
		String url = "https://deckofcardsapi.com/api/deck/" + uri;
		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

		con.setRequestMethod("GET");
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
		
		int responseCode = con.getResponseCode();
		
		if (responseCode >= 200 && responseCode <= 299)
			return mapper.readTree(con.getInputStream());
		else
			return null;
	}
	private static String getCardString(JsonNode cardsNode) {
		StringBuilder cards = new StringBuilder();
		for (JsonNode card : cardsNode.get("cards"))
			cards.append(card.get("Code").asText() + ",");
		cards.deleteCharAt(cards.length() - 1);
		return cards.toString();
	}
}
