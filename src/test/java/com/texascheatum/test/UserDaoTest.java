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
		Assert.assertEquals("fuksyr@gmail.com", testUser.getEmail());
		Assert.assertEquals(25, testUser.getSuperuser());
	}
}
