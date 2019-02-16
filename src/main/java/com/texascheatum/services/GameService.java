package com.texascheatum.services;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.ArrayUtils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.dao.GameDaoImplementation;

public class GameService {
	private GameService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	
	public static void createGame(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode gameJson = mapper.readTree(request.getReader());
		GameDaoImplementation.getGameDao().createGame(
				gameJson.get("gameId").asText(),
				gameJson.get("username").asText());
	}
	
	public static int checkHand(String[] hand) {
		
		int highestScore = 0;
		int currentScore = 0;
		int[] handHistogram = new int[13];
		boolean flush = false;
		
		if(hand.length >5) {
			//remove random element and send it through check hand again until it meets hand size
			for(int i = 0; i<hand.length; i++) {
				
				String[] newHand = new String[hand.length-1];
				
				for(int j = 0; j<hand.length-1; j++) {
					
					newHand[j] = hand[(i+j)%(hand.length)];
				} //end of nested for loop
				
				currentScore = checkHand(newHand);
				
				if(currentScore>highestScore) {
					
					highestScore=currentScore;
					
				}
			} //end of outer for loop
			
		}else {
			
			for(int k = 0; k<hand.length; k++) {
				
				//check whether it's a digit
				if(Character.isDigit(hand[k].charAt(0))) {
					//every digit except 0 can be placed based on their value into the histogram
					//0 is technically 10, so it needs to be handled specially for the histogram
					if(Character.getNumericValue(hand[k].charAt(0))>0) {
						
						handHistogram[Character.getNumericValue(hand[k].charAt(0))-1]++;
						
					}else {
						handHistogram[9]++;
					}
					
				}else { //if it's not a number it's an Ace, Jack, Queen, or King
					
					if(hand[k].charAt(0) == 'A') {
						
						handHistogram[0]++;
						
					}else if(hand[k].charAt(0) == 'J'){
						
						handHistogram[10]++;
						
					}else if(hand[k].charAt(0) == 'Q'){
						
						handHistogram[11]++;
						
					}else if(hand[k].charAt(0) == 'K') {
						
						handHistogram[12]++;
						
					}
					
				}
				
			}
			//System.out.println(Arrays.toString(handHistogram));
		}
		
		if(ArrayUtils.contains(handHistogram, 4)) {
			
			
			
		}else if(ArrayUtils.contains(handHistogram, 3) && ArrayUtils.contains(handHistogram, 2)) {
			
		}else if(ArrayUtils.contains(handHistogram, 3) && ArrayUtils.contains(handHistogram, 1)) {
			
		}else if(ArrayUtils.contains(handHistogram, 2) && !ArrayUtils.contains(handHistogram, 3)) {
			int count = 0;
			int highestPair=-7;
			int lowestPair=-5;
			for(int m = 0; m<handHistogram.length;m++ ) {
				if(handHistogram[m]==2) {
					count++;
					if(count==1) {
						highestPair=m;
					}else{
						lowestPair=highestPair;
						highestPair=m;
					}
				}
			}
			
		}
		
		return highestScore;		
	}
}
