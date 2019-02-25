package com.texascheatum.services;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.dao.GameDaoImplementation;
import com.texascheatum.dao.UserDaoImplementation;
import com.texascheatum.model.Game;
import com.texascheatum.model.User;

public class DeckService {
	private DeckService() { }
	private static final Logger log = Logger.getLogger(DeckService.class);
	private static final ObjectMapper mapper = new ObjectMapper();
	private static final String USER_AGENT =
			"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
	
	public static void startGame(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String gameID = getNewGameID();
		if (gameID != null) {
			GameDaoImplementation.getGameDao().createGame(gameID,
					((User) request.getSession().getAttribute("user")).getUsername());
			((User) request.getSession().getAttribute("user")).setCurrentGame(gameID);
			((User) request.getSession().getAttribute("user")).setTurnNumber(0);
			drawHand(request);
			
			response.setHeader("Content-Type", "text/plain");
			response.getWriter().write(gameID);
		}
	}
	private static String getNewGameID() throws IOException {
		JsonNode apiResp = makeHttpRequest("new/shuffle/?deck_count=1");
		return apiResp.get("deck_id").asText();
	}
	
	public static void beginGame(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		GameDaoImplementation.getGameDao().startGame(((User) request.getSession().getAttribute("user")).getCurrentGame());
		assignTurns(request, response);
	}
	private static void assignTurns(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("called");
		List<User> users = UserDaoImplementation.getUserDao().getUsers(
				((User) request.getSession().getAttribute("user")).getCurrentGame());
		List<Integer> turnNumbers = new ArrayList<>();
		for (int i = 0; i < users.size(); i++)
			turnNumbers.add(i);
		Random rando = new Random();
		for (User user : users) {
			int turnNumber = turnNumbers.get(rando.nextInt(turnNumbers.size()));
			turnNumbers.remove(Integer.valueOf(turnNumber));
			UserDaoImplementation.getUserDao().assignTurnOrder(turnNumber, user.getUsername());
		}
	}
	
	public static void joinGame(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String gameID = GameDaoImplementation.getGameDao().readGame(
				mapper.readTree(request.getReader().readLine()).get("gameID").asText()).getGameID();
		int success = GameDaoImplementation.getGameDao().joinGame(
				gameID,
				((User) request.getSession().getAttribute("user")).getUsername());
		if (success > 0) {
			System.out.println(success);
			if (success == 4)
				assignTurns(request, response);
			((User) request.getSession().getAttribute("user")).setCurrentGame(gameID);
			((User) request.getSession().getAttribute("user")).setTurnNumber(0);
			getGame(request, response);
		}
		else {
			response.setHeader("Content-Type", "application/json");
			response.getWriter().write("");
		}
	}
	public static void getGame(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		Game game = GameDaoImplementation.getGameDao().readGame(
				((User) request.getSession().getAttribute("user")).getCurrentGame());

		System.out.println(game.getStatus().equals("closed") + ":" + (((User) request.getSession().getAttribute("user")).getRoundBet() == -1));
		if (game.getStatus().equals("closed")
				&& ((User) request.getSession().getAttribute("user")).getRoundBet() == -1) {
			System.out.println("closing game");
			
			((User) request.getSession().getAttribute("user")).setRoundBet(0);
			String winners = UserDaoImplementation.getUserDao().getUsernameForTurn(
					((User) request.getSession().getAttribute("user")).getCurrentGame());

			if (winners.contains(((User) request.getSession().getAttribute("user")).getUsername()))
				((User) request.getSession().getAttribute("user")).setBalance(
						((User) request.getSession().getAttribute("user")).getBalance()
						+ game.getPot());
		}
		
		response.getWriter().write("{");
		
		response.getWriter().write("\"game\" : ");
		response.getWriter().write("\"" + ((User) request.getSession().getAttribute("user")).getCurrentGame() + "\"");
		response.getWriter().write(",");
		
		response.getWriter().write("\"status\" : ");
		response.getWriter().write("\"" + game.getStatus() + "\"");
		response.getWriter().write(",");
		
		response.getWriter().write("\"hand\" : ");
		getHand(request, response);
		response.getWriter().write(",");
		
		response.getWriter().write("\"table\" : ");
		getTable(request, response);
		response.getWriter().write(",");
		
		response.getWriter().write("\"player\" : ");
		response.getWriter().write("\"" + ((User) request.getSession().getAttribute("user")).getUsername() + "\"");
		response.getWriter().write(",");
		
		response.getWriter().write("\"turn\" : ");
		response.getWriter().write("\"" +  UserDaoImplementation.getUserDao().getUsernameForTurn(
				((User) request.getSession().getAttribute("user")).getCurrentGame()) + "\"");
		response.getWriter().write(",");
		
		response.getWriter().write("\"balance\" : ");
		response.getWriter().write("" + ((User) request.getSession().getAttribute("user")).getBalance());
		response.getWriter().write(",");
		
		response.getWriter().write("\"playerBet\" : ");
		response.getWriter().write("" + ((User) request.getSession().getAttribute("user")).getRoundBet());
		response.getWriter().write(",");
		
		response.getWriter().write("\"folded\" : ");
		response.getWriter().write(""
				+ (((User) request.getSession().getAttribute("user")).getTurnNumber() == -1));
		response.getWriter().write(",");
		
		response.getWriter().write("\"pot\" : ");
		response.getWriter().write("" + game.getPot());
		response.getWriter().write(",");
		
		response.getWriter().write("\"minimum\" : ");
		response.getWriter().write("" + game.getCurrentTarget());
		
		response.getWriter().write("}");
	}

	public static void getHand(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode apiResp = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/pile/" + ((User) request.getSession().getAttribute("user")).getUsername()
				+ "/list");

		response.setHeader("Content-Type", "application/json");
		JsonNode piles = apiResp.get("piles");
		if (piles.has(((User) request.getSession().getAttribute("user")).getUsername()))
			response.getWriter().write(
					getCardString(piles.get(((User) request.getSession().getAttribute("user")).getUsername())));
		else
			response.getWriter().write(drawHand(request));
	}
	private static String drawHand(HttpServletRequest request) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/draw/?count=2");
		
		String cards = getCardString(apiResp);
		addCardsToPile(request, ((User) request.getSession().getAttribute("user")).getUsername(), cards.toString());
		return cards;
	}
	
	public static void getTable(HttpServletRequest request, HttpServletResponse response) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/pile/table/list");

		response.setHeader("Content-Type", "application/json");
		JsonNode piles = apiResp.get("piles");
		if (piles.has("table"))
			response.getWriter().write(getCardString(piles.get("table")));
		else
			response.getWriter().write("[]");
	}
	
	public static void action(HttpServletRequest request, HttpServletResponse response) throws IOException {
		JsonNode actionJson = mapper.readTree(request.getReader().readLine());
		double difference;
		
		log.info(actionJson.get("action").asText());
		difference = GameDaoImplementation.getGameDao().makeBet(
				((User) request.getSession().getAttribute("user")).getCurrentGame(),
				((User) request.getSession().getAttribute("user")).getUsername(),
				actionJson.has("amount") ? actionJson.get("amount").asDouble() : 0.0,
						actionJson.get("action").asText());
		
		log.info(difference);
		if (difference < 0) {
			((User) request.getSession().getAttribute("user")).setRoundBet(0);
			
			String changeString = Double.toString(difference);
			if (changeString.charAt(changeString.length() - 1) == '1') {
				difference += 0.001;
				if (getTableCardNum(request) == 0)
					flop(request, response);
				else
					turn_river(request, response);
			} else {
				difference += 0.002;
				endGame(request, response);
			}
			difference *= -1;
		} else
			((User) request.getSession().getAttribute("user")).setRoundBet(
					((User) request.getSession().getAttribute("user")).getRoundBet() + difference);

		log.info(difference);
		((User) request.getSession().getAttribute("user")).setBalance(
				((User) request.getSession().getAttribute("user")).getBalance()
				- difference);
		if (actionJson.get("action").asText().equals("fold"))
			((User) request.getSession().getAttribute("user")).setTurnNumber(-1);
	}
	public static int getTableCardNum(HttpServletRequest request) throws IOException {
		JsonNode apiResp = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/pile/table/list");

		JsonNode piles = apiResp.get("piles");
		if (piles.has("table"))
			return piles.get("table").get("cards").size();
		else
			return 0;
	}
	public static void flop(HttpServletRequest request, HttpServletResponse response) throws IOException {
		log.info("flop");
		JsonNode apiResp = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/draw/?count=3");
		
		addCardsToPile(request, "table", getCardString(apiResp));
	}
	public static void turn_river(HttpServletRequest request, HttpServletResponse response) throws IOException {
		log.info("turn_river");
		JsonNode apiResp = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/draw/?count=1");
		
		addCardsToPile(request, "table", getCardString(apiResp));
	}
	
	private static void endGame(HttpServletRequest request, HttpServletResponse response) throws IOException {
		Map<String, String[]> cardPiles = new HashMap<>();
		
		JsonNode cards_Table = makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/pile/table/list").get("piles").get("table").get("cards");
		cardPiles.put("table", new String[cards_Table.size()]);
		for (int i = 0; i < cards_Table.size(); i++)
			cardPiles.get("table")[i] = cards_Table.get(i).get("code").asText();
		
		List<User> players = UserDaoImplementation.getUserDao().getUsers(
				((User) request.getSession().getAttribute("user")).getCurrentGame());
		for (User player : players) {
			if (player.getTurnNumber() >= 0) {
				JsonNode cards_Player = makeHttpRequest(
						((User) request.getSession().getAttribute("user")).getCurrentGame()
						+ "/pile/" + player.getUsername() + "/list").get("piles").get(player.getUsername()).get("cards");
				cardPiles.put(player.getUsername(), new String[cards_Player.size()]);
				for (int i = 0; i < cards_Player.size(); i++)
					cardPiles.get(player.getUsername())[i] = cards_Player.get(i).get("code").asText();
			}
		}
		
		List<String> winners = GameService.compareHands(cardPiles);
		GameDaoImplementation.getGameDao().endGame(
				((User) request.getSession().getAttribute("user")).getCurrentGame(), winners);
		((User) request.getSession().getAttribute("user")).setRoundBet(-1);
	}
	
	private static void addCardsToPile(HttpServletRequest request, String pile, String cards) throws IOException {
		JsonNode cardJson = mapper.readTree(cards);
		String cardString = String.join(",", cardJson.findValuesAsText("value"));
		log.info(cardString);
		makeHttpRequest(
				((User) request.getSession().getAttribute("user")).getCurrentGame()
				+ "/pile/" + pile
				+ "/add/?cards=" + cardString);
	}
	private static JsonNode makeHttpRequest(String uri) throws IOException {
		String url = "https://deckofcardsapi.com/api/deck/" + uri;
		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
		log.info(url);

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
		StringBuilder cards = new StringBuilder("[");
		for (JsonNode card : cardsNode.get("cards")) {
			cards.append("{");
			cards.append("\"value\" : \"" + card.get("code").asText() + "\"");
			cards.append(",");
			cards.append("\"image\" : \"" + card.get("image").asText() + "\"");
			cards.append("},");
		}
		cards.deleteCharAt(cards.length() - 1);
		cards.append("]");
		return cards.toString();
	}
}
