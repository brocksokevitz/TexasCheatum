package com.texascheatum.test;

import org.junit.Assert;
import org.junit.Test;

import com.texascheatum.dao.UserDaoImplementation;
import com.texascheatum.model.User;

public class UserDaoTest {

	
	
	@Test
	public void testGetUser() {
		User testUser = UserDaoImplementation.getUserDao().getUser("super", "superpass");
		Assert.assertEquals(1, testUser.getUserId());
		Assert.assertEquals("super", testUser.getUsername());
		Assert.assertEquals(0, Double.compare(10000, testUser.getBalance()));
		Assert.assertEquals("fuksyr@gmail.com", testUser.getEmail());
		Assert.assertEquals(25, testUser.getSuperuser());
	}
	
	@Test
	public void testFailInsertUser() {
		boolean insertStatus = UserDaoImplementation.getUserDao().insertUser("super","fuksyr@gmail.com" ,"superpass");
		Assert.assertFalse(insertStatus);
	}
	
	@Test
	public void testFailInvalidUser() {
		boolean insertStatus = UserDaoImplementation.getUserDao().insertUser("","" ,"");
		Assert.assertFalse(insertStatus);
	}
}
