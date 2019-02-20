package com.texascheatum.test;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

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
	
	@Test
	public void testUpdateGame() {
		boolean gameStatus = GameDaoImplementation.getGameDao().updateGame("1234", "closed");
		Assert.assertTrue(gameStatus);
	}
	
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
	
//	@Test
//	public void testTomcatConnectionPool() throws SQLException {
//		TomcatConnectionPool pool = TomcatConnectionPool.getInstance();
//		Connection conn = pool.getConnection();
//		Assert.assertTrue(conn instanceof Connection);
//	}
}
