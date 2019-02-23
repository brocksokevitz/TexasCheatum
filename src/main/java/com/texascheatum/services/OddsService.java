package com.texascheatum.services;

import java.io.IOException;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.model.User;

public class OddsService {
	private OddsService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	private static final String USER_AGENT =
			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";

	public static void cheat(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode apiResp_Deck_Hand = makeHttpRequest_Deck(
				request.getSession().getAttribute("gameID")
				+ "/pile/" + ((User) request.getSession().getAttribute("user")).getUsername()
				+ "/list");
		String hand = getCardString(apiResp_Deck_Hand.get("piles")
				.get(((User) request.getSession().getAttribute("user")).getUsername()), true);
		
		JsonNode apiResp_Deck_Table = makeHttpRequest_Deck(
				request.getSession().getAttribute("gameID")
				+ "/pile/table/list");

		JsonNode apiResp_Odds = null;
		String oddsString = "";
		if (apiResp_Deck_Table.get("piles").has("table")) {
			String table = getCardString(apiResp_Deck_Table.get("piles")
					.get("table"), false);
			switch(apiResp_Deck_Table.get("piles").get("table").get("remaining").asInt()) {
			case 3:
				System.out.println("flop" + hand + table);
				apiResp_Odds = makeHttpRequest_Odds("flop" + hand + table);
				break;
			case 4:
				System.out.println("turn" + hand + table);
				apiResp_Odds = makeHttpRequest_Odds("turn" + hand + table);
				break;
			}
			oddsString = getOddsString(apiResp_Odds, false);
		}
		else {
			System.out.println("pre-flop" + hand);
			apiResp_Odds = makeHttpRequest_Odds("pre-flop" + hand);
			oddsString = getOddsString(apiResp_Odds, true);
		}
		
		response.setHeader("Content-Type", "application/json");
		response.getWriter().write(oddsString);
	}
	
	private static JsonNode makeHttpRequest_Deck(String uri) throws IOException {
		String url = "https://deckofcardsapi.com/api/deck/" + uri;
		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

		con.setRequestMethod("GET");
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
		
		int responseCode = con.getResponseCode();
		System.out.println(responseCode);
		
		if (responseCode >= 200 && responseCode <= 299)
			return mapper.readTree(con.getInputStream());
		else
			return null;
	}
	private static JsonNode makeHttpRequest_Odds(String uri) throws IOException {
		String url = "https://sf-api-on-demand-poker-odds-v1.p.rapidapi.com/" + uri;
		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

		con.setRequestMethod("GET");
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
		con.setRequestProperty("X-RapidAPI-Key", "1d95a66c75msh21130080aae1bc5p16ce1cjsnc37a36087fbf");
		
		int responseCode = con.getResponseCode();
		System.out.println(responseCode);
		
		if (responseCode >= 200 && responseCode <= 299)
			return mapper.readTree(con.getInputStream());
		else
			return null;
	}
	private static String getCardString(JsonNode cardsNode, boolean isHand) {
		StringBuilder cards = new StringBuilder("");
		if (isHand)
			cards.append("?hole=");
		else
			cards.append("&board=");
		for (JsonNode card : cardsNode.get("cards")) {
			cards.append(card.get("code").asText());
			cards.append("%2C");
		}
		cards.delete(cards.length() - 3, cards.length());
		return cards.toString();
	}
	private static String getOddsString(JsonNode oddsNode, boolean isPreflop) throws JsonProcessingException {
		StringBuilder oddsString = new StringBuilder("[");
		if (isPreflop)
			oddsNode.get("data").get("hit_at_least").fields().forEachRemaining(
					pair -> oddsString.append("[\"" + pair.getKey() + "\"," + pair.getValue().asDouble() + "],"));
		else
			oddsNode.get("data").get("me").get("hit_at_least").fields().forEachRemaining(
					pair -> oddsString.append("[\"" + pair.getKey() + "\"," + pair.getValue().asDouble() + "],"));
		oddsString.deleteCharAt(oddsString.length() - 1);
		oddsString.append("]");
		
		return oddsString.toString();
	}
}
