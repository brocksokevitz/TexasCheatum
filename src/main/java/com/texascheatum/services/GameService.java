package com.texascheatum.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
	
	
	
	public static String compareHands(Map<String,String[]> playerMap) {
		String winner = "";
		int[] highestScore = {0,0,0,0};
		int[] currentScore = {0,0,0,0};
		String[] tableCards = playerMap.remove("table");
		
		List<String> listOfNames = new ArrayList<String>(playerMap.keySet());
		
		for(int i = 0; i < listOfNames.size(); i++) {
			currentScore = getScore(ArrayUtils.addAll(playerMap.get(listOfNames.get(i)), tableCards));
			

			//System.out.println(ArrayUtils.toString(currentScore));
			
			if(currentScore[0]==highestScore[0] && currentScore[1]==highestScore[1] 
					&& currentScore[2]==highestScore[2] && currentScore[3]==highestScore[3]) { // this is a tie
				winner = "tie";
			}else if(currentScore[0]>highestScore[0]) { //check hand type
				winner = listOfNames.get(i);
				highestScore = currentScore;
			} else if(currentScore[0]==highestScore[0]) { //there was a tie with hand type, but the hands aren't a tie
				
				switch(currentScore[0]) {
				case 1: //pair
					
					if(currentScore[2]>highestScore[2]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}else if(currentScore[2] == highestScore[2] && currentScore[1]>highestScore[1]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					
					break;
				case 2: //two pair
					
					if(currentScore[2]>highestScore[2]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}else if(currentScore[2] == highestScore[2] && currentScore[3]>highestScore[3]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					} else  if(currentScore[2] == highestScore[2] && currentScore[1]>highestScore[1]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					
					break;
				case 3: //three of a kind
					
					if(currentScore[2]>highestScore[2]) { //check the value of the three
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}else if(currentScore[2] == highestScore[2] && currentScore[1]>highestScore[1]) {//check for high card
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					
					break;
				case 4: //straight
					
					if(currentScore[1]>highestScore[1]) { //check the value of the three
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					
					break;
				case 5: //flush
					if(currentScore[1]>highestScore[1]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					break;
				case 6: //full house
					if(currentScore[1]>highestScore[1]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}else if(currentScore[1] == highestScore[1] && currentScore[2]>highestScore[2]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					} 
					break;
				case 7: // 4 of a kind
					if(currentScore[1]>highestScore[1]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					break;
				case 8: //straight flush
					if(currentScore[2]>highestScore[2]) { //check the value of the three
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					break;
				case 9: //royal flush
					winner = "tie";
					highestScore = currentScore;
					break;
				default: //nothing
					if(currentScore[1]>highestScore[1]) {
						winner = listOfNames.get(i);
						highestScore = currentScore;
					}
					break;
				}
				
			}
		}
		
		return winner;
	}
	
	/**
	 * 
	 * @param hand
	 * get all possible combinations for 7 choose 5 and send them to check hand.
	 * @return int[] highestScore = {handType, highestCard, highest pair, lowest pair}
	 */
	public static int[] getScore(String[] hand) {
		
		int[] highestScore = {0,0,0,0};
		int[] currentScore = {0,0,0,0};
		String[] newHand = new String[5];
		
		//create all possible 5 card hands
		
		//i is the first card we're removing
		for(int i = 0; i<hand.length-1; i++) {
			
			//j is the second card we're removing	
			for(int j = i+1; j<hand.length; j++) {
				
				//h is the position of the card we're taking from the old hand and g is the position the card will have in the new hand
				for(int h = 0, g = 0; h<7; h++) {
					
					if(h != i && h != j) {
						newHand[g]= hand[h];
						g++;
					}
				}
				//at this point we have a 5 card hand and can pass it to check hand and check for one of the winning hands
				currentScore = checkHand(newHand);
				
				if(currentScore[0]>=highestScore[0]) {
					
					//change the highest card
					if(currentScore[0]>highestScore[0] || currentScore[1]>highestScore[1]) {
					highestScore[1]=currentScore[1];		
					}
					
					//change the hand type
						highestScore[0]=currentScore[0];
					
					//only used for pairs and 2 pairs for highest pair
						if(currentScore[2]>highestScore[2]) {
							highestScore[2]=currentScore[2];		
							}				
					
					//only used for the lowest pair for 2 pair
						if(currentScore[3]>highestScore[3]) {
							highestScore[3]=currentScore[3];		
							}
					
				}
				
			} //end of nested for loop
		} //end of outer for loop
		
		return highestScore;		
	}
	
	/**
	 * 
	 * @param hand
	 * highest hand type wins
	 * highest card only comes into play for ties
	 * highest pair is used for pair, two pair, and fullhouse(in case of highest card tie)
	 * lowest pair is only used for two pair ties
	 * @return int[] highestScore = {handType, highestCard, highest pair, lowest pair}
	 */
	public static int[] checkHand(String[] hand) {
		
		int[] highestScore = {0,0,0,0};
		int[] handHistogram = new int[13];
		int[] suitHistogram = new int[4];
		boolean flush = false;		
			
			for(int k = 0; k<hand.length; k++) {
				
				//check whether it's a digit
				if(Character.isDigit(hand[k].charAt(0))) {
					//every digit except 0 can be placed based on their value into the histogram
					//0 is technically 10, so it needs to be handled specially for the histogram
					if(Character.getNumericValue(hand[k].charAt(0)) > 0) {
						
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
				
			} //end of for
			
			//find highest card for draws and straights
			for(int z = handHistogram.length; z > 0; z--) {
				if(handHistogram[z%handHistogram.length]==1 && z+1>highestScore[1]) {
					highestScore[1] = z+1;
				}
			}
			//suit histogram for flushes
			for(int k = 0; k<hand.length; k++) {
				switch(hand[k].charAt(1)) {
				case 'D':
					suitHistogram[0]++;
					break;
				case 'H':
					suitHistogram[1]++;
					break;
				case 'C':
					suitHistogram[2]++;
					break;
				case 'S':
					suitHistogram[3]++;
					break;
				default:
					break;
				
				}
			}
			//System.out.println(Arrays.toString(handHistogram));
	
		if(ArrayUtils.contains(handHistogram, 4)) {
			
			highestScore[0]=7;			
			
		}else if(ArrayUtils.contains(handHistogram, 3) && ArrayUtils.contains(handHistogram, 2)) {
			
			highestScore[0]=6;
			highestScore[1]=ArrayUtils.indexOf(handHistogram, 3)+1;
			highestScore[2]=ArrayUtils.indexOf(handHistogram, 2)+1;
			
		}else if(ArrayUtils.contains(handHistogram, 3) && ArrayUtils.contains(handHistogram, 1)) {
			
			highestScore[0]=3;
			highestScore[2]=ArrayUtils.indexOf(handHistogram, 3)+1;
			
		}else if(ArrayUtils.contains(handHistogram, 2) && !ArrayUtils.contains(handHistogram, 3)) {
			
			int count = 0;
			int highestPair=-7;
			int lowestPair=-5;
			
			for(int m = handHistogram.length; m>0 ;m--) {
				if(handHistogram[m%handHistogram.length]==2) {
					count++;
					if(count==1) {
						highestPair=m+1;
					}else if(count==2){
						lowestPair=m+1;
					}
				}
			}
			
			if(count==2) {
				highestScore[0]=2;
				highestScore[2]=highestPair;
				highestScore[3]=lowestPair;
			}else {
				highestScore[0]=1;
				highestScore[2]=highestPair;
			}
			
		}else {
			
			//if there are no multiples, then it could be a flush
			if(ArrayUtils.contains(suitHistogram, 5)) {
				
				flush=true;
				highestScore[0]=5;
				
			}	
			
			//and/or a straight
			for(int y = 0; y < handHistogram.length-3; y++) {
				
				if(handHistogram[y]==1 && handHistogram[y+1]==1 && handHistogram[y+2]==1 
						&& handHistogram[y+3]==1 && handHistogram[(y+4)%handHistogram.length]==1) {
					
					if(flush && y==9){
						
						highestScore[0]=9;	
						
					}else if(flush) {
						
						highestScore[0]=8;
						highestScore[1]=y+5;
						
					}else if(highestScore[0] <= 4){
						
						highestScore[0]=4;
						highestScore[1]=y+5;
						
					}
					
				}
				
			}
			
		}
		
		//System.out.println(ArrayUtils.toString(handHistogram));
		return highestScore;		
	}
}
