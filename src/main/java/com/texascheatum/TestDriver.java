package com.texascheatum;

import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TestDriver {
	private static final ObjectMapper mapper = new ObjectMapper();
	private static final String USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
	
	public static void main(String[] args) throws Exception {
		String url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
		URL obj = new URL(url);
		HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

		con.setRequestMethod("GET");
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");
		
		int responseCode = con.getResponseCode();
		System.out.println("\nSending 'POST' request to URL : " + url);
		System.out.println("Response Code : " + responseCode);

		JsonNode apiResp = mapper.readTree(con.getInputStream());
		System.out.println(apiResp.get("deck_id"));
	}
}
