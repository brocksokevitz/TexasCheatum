package com.texascheatum.test;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;

import com.texascheatum.dao.GameDao;
import com.texascheatum.dao.GameDaoImplementation;
import com.texascheatum.dao.UserDaoImplementation;
import com.texascheatum.model.User;
import com.texascheatum.services.GameService;
import com.texascheatum.utils.TomcatConnectionPool;

public class UserDaoTest {

	
	
//	@Test
//	public void testGetUser() {
//		User testUser = UserDaoImplementation.getUserDao().getUser("super", "superpass");
//		Assert.assertEquals(1, testUser.getUserId());
//		Assert.assertEquals("super", testUser.getUsername());
//		Assert.assertEquals(0, Double.compare(10000, testUser.getBalance()));
//		Assert.assertEquals("fuksyr@gmail.com", testUser.getEmail());
//		Assert.assertEquals(25, testUser.getSuperuser());
//	}
	
//	@Test
//	public void testFailInsertUser() {
//		boolean insertStatus = UserDaoImplementation.getUserDao().insertUser("super","fuksyr@gmail.com" ,"superpass");
//		Assert.assertFalse(insertStatus);
//	}
	
//	@Test
//	public void testFailInvalidUser() {
//		boolean insertStatus = UserDaoImplementation.getUserDao().insertUser("","" ,"");
//		Assert.assertFalse(insertStatus);
//	}
	
//	@Test
//	public void testWinGame() {
//		boolean winStatus = UserDaoImplementation.getUserDao().wonGame("super");
//		Assert.assertTrue(winStatus);
//	}
	
//	@Test
//	public void testGetUsersByGame() {
//		List<User> users = UserDaoImplementation.getUserDao().getUsers("1234");
//
//		Assert.assertEquals(1, users.size());
//		Assert.assertEquals("super", users.get(0).getUsername());
//		Assert.assertEquals("1234", users.get(0).getCurrentGame());
//		Assert.assertEquals(1, users.get(0).getUserId());
//	}
	
//	@Test
//	public void testLoseGame() {
//		String[] array = {"super"};
//		boolean loseStatus = UserDaoImplementation.getUserDao().lostGame(array);
//		Assert.assertTrue(loseStatus);
//	}
	
//	@Test
//	public void testUpdateGame() {
//		boolean gameStatus = GameDaoImplementation.getGameDao().updateGame("1234", "closed");
//		Assert.assertTrue(gameStatus);
//	}
	
	@Test
	public void testNothing() {
		String[] hand = {"AC","2C","4C","9S","5H","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(0,score[0]);
		Assert.assertEquals(14,score[1]);
	}
	
	@Test
	public void testSinglePair() {
		String[] hand = {"AC","2C","4C","4S","5H","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(1,score[0]);
	}
	
	@Test
	public void testTwoPair() {
		String[] hand = {"2S","2C","4C","4S","5H","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(2,score[0]);
		Assert.assertEquals(7,score[1]);
		Assert.assertEquals(4,score[2]);
		Assert.assertEquals(2,score[3]);
	}
	
	@Test
	public void testThreeOfAkind() {
		String[] hand = {"AC","4H","4C","4S","5H","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(3,score[0]);
		Assert.assertEquals(14,score[1]);
	}
	
	@Test
	public void testStraight() {
		String[] hand = {"AH","2C","3H","4H","5C","6S","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(4,score[0]);
		Assert.assertEquals(7,score[1]);
	}
	
	@Test
	public void testFlush() {
		String[] hand = {"AH","4H","5H","KH","9C","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(5,score[0]);
		Assert.assertEquals(14,score[1]);
	}
	
	@Test
	public void testFullHouse() {
		String[] hand = {"KC","4H","4C","4S","KH","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(6,score[0]);
		Assert.assertEquals(4,score[1]);
		Assert.assertEquals(13,score[2]);
	}
	
	@Test
	public void testFourOfAKind() {
		String[] hand = {"4D","4H","4C","4S","5H","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(7,score[0]);
		Assert.assertEquals(7,score[1]);
	}
	
	@Test
	public void testStraightFlush() {
		String[] hand = {"AH","2H","3H","4H","5H","6H","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(8,score[0]);
		Assert.assertEquals(7,score[1]);
	}
	
	@Test
	public void testLowerStraightFlush() {
		String[] hand = {"AH","2H","3H","4H","5H","6S","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(8,score[0]);
		Assert.assertEquals(5,score[1]);
	}
	
	@Test
	public void testRoyalFlush() {
		String[] hand = {"0H","KH","JH","QH","AH","6S","7H"};
		int[] score = GameService.getScore(hand);
		Assert.assertEquals(9,score[0]);
	}
	
	@Test
	public void testCompareNothing() {
		String[] table = {"0C","2C","3C","4C","8S"};
		String[] hand = {"6H","KH"};
		String[] hand2 = {"6S","7S"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareNothingTie() {
		String[] table = {"0C","2C","3C","4C","8S"};
		String[] hand = {"6H","7H"};
		String[] hand2 = {"6S","7S"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testComparePair() {
		String[] table = {"AC","2C","3C","4C","8S"};
		String[] hand = {"6H","AH"};
		String[] hand2 = {"0H","2H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testComparePairTieHighCardWins() {
		String[] table = {"AC","2C","3C","4C","8S"};
		String[] hand = {"6H","AH"};
		String[] hand2 = {"0H","AS"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testComparePairTie() {
		String[] table = {"AC","2C","3C","4C","8S"};
		String[] hand = {"0S","AH"};
		String[] hand2 = {"0H","AS"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareTwoPair() {
		String[] table = {"AC","2C","3C","4C","8S"};
		String[] hand = {"2S","3H"};
		String[] hand2 = {"AH","4S"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testCompareTwoPairTieLowPairWins() {
		String[] table = {"AC","2C","3C","AS","8S"};
		String[] hand = {"2S","3H"};
		String[] hand2 = {"8H","4S"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testCompareTwoPairTieHighCardWins() {
		String[] table = {"AC","2C","3C","AS","8S"};
		String[] hand = {"6S","8C"};
		String[] hand2 = {"8H","2S"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareTwoPairTie() {
		String[] table = {"AC","2C","3C","AS","8S"};
		String[] hand = {"6S","8C"};
		String[] hand2 = {"8H","6H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareThreesOfAKind() {
		String[] hand = {"2S","6H"};
		String[] hand2 = {"3S","4C"};		
		String[] table = {"AC","2C","2C","3S","3H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testCompareThreesOfAKindTieHighCardWins() {
		String[] hand = {"3S","AH"};
		String[] hand2 = {"3S","4C"};		
		String[] table = {"6C","2C","7C","3S","3H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareThreesOfAKindTie() {
		String[] hand = {"3S","0H"};
		String[] hand2 = {"3S","0C"};		
		String[] table = {"6C","2C","7C","3S","3H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareStraights() {
		String[] hand = {"3S","6H"};
		String[] hand2 = {"3S","2C"};		
		String[] table = {"AC","2C","4C","4S","5H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareStraightsTie() {
		String[] hand = {"3S","2H"};
		String[] hand2 = {"3S","2S"};		
		String[] table = {"AC","2C","4C","4S","5H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareFlushes() {
		String[] hand = {"3S","6C"};
		String[] hand2 = {"3S","2C"};		
		String[] table = {"AC","2C","4C","4S","5C"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareFlushesTie() {
		String[] hand = {"5C","6C"};
		String[] hand2 = {"3C","2C"};		
		String[] table = {"AC","2H","4C","KC","5H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareFullHouseHighTripleWins() {
		String[] hand = {"AD","5C"};
		String[] hand2 = {"7H","7S"};		
		String[] table = {"AC","AH","4C","7C","5H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareFullHouseLowPairWins() {
		String[] hand = {"AS","7S"};
		String[] hand2 = {"AD","5C"};		
		String[] table = {"AC","AH","4C","7C","5H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareFourOfAKind() {
		String[] hand = {"AS","AD"};
		String[] hand2 = {"7D","7S"};		
		String[] table = {"AC","AH","4C","7C","7H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("1", winner);
	}
	
	@Test
	public void testCompareFourOfAKindTieHighCardWins() {
		String[] hand = {"7D","7S"};
		String[] hand2 = {"0S","0D"};		
		String[] table = {"AC","AH","AC","AC","7H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testCompareFourOfAKindTie() {
		String[] hand = {"0D","7S"};
		String[] hand2 = {"0S","7D"};		
		String[] table = {"AC","AH","AC","AC","7H"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareStraightFlush() {
		String[] hand = {"0D","7S"};
		String[] hand2 = {"6C","7C"};		
		String[] table = {"AC","2C","3C","4C","5C"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testCompareStraightFlushTie() {
		String[] hand = {"0D","7S"};
		String[] hand2 = {"6H","7H"};		
		String[] table = {"AC","2C","3C","4C","5C"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
	@Test
	public void testCompareRoyalFlush() {
		String[] hand = {"0D","7S"};
		String[] hand2 = {"AC","7H"};		
		String[] table = {"0C","KC","QC","JC","9C"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("2", winner);
	}
	
	@Test
	public void testCompareRoyalFlushTie() {
		String[] hand = {"0D","7S"};
		String[] hand2 = {"AH","7H"};		
		String[] table = {"AC","KC","QC","JC","0C"};
		Map<String, String[]> map = new HashMap<>();
		map.put("1", hand);
		map.put("2", hand2);
		map.put("table", table);
		
		String winner = GameService.compareHands(map);
		Assert.assertEquals("tie", winner);
	}
	
//	
//	@Test
//	public void testCompareStraightFlushVsRoyalFlush() {
//		String[] hand = {"AC","2C","3C","4C","5C","6H","7H"};
//		String[] hand2 = {"AC","2C","0H","JH","QH","KH","AH"};
//		String[] names = {"1", "2"};
//		Map<String, String[]> map = new HashMap<>();
//		map.put("1", hand);
//		map.put("2", hand2);
//		
//		String winner = GameService.compareHands(names, map);
//		Assert.assertEquals("2", winner);
//	}
	
//	@Test
//	public void testTomcatConnectionPool() throws SQLException {
//		TomcatConnectionPool pool = TomcatConnectionPool.getInstance();
//		Connection conn = pool.getConnection();
//		Assert.assertTrue(conn instanceof Connection);
//	}
}
