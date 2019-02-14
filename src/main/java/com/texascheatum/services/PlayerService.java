package com.texascheatum.services;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.dao.UserDaoImplementation;
import com.texascheatum.model.User;

public class PlayerService {
	private PlayerService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	
	public static void login(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		User user = mapper.readValue(request.getReader(), User.class);
		user = UserDaoImplementation.getUserDao().getUser(user.getUsername(), user.getPassword());
		
		if (user.getUsername() != null && !user.getUsername().equals("")) {
			request.getSession().setAttribute("user", user);
			request.getSession().setAttribute("gameID", user.getCurrentGame());
			
			String json = mapper.writeValueAsString(user);
			response.setHeader("Content-Type", "application/json");
			response.getWriter().write(json);
		} else
			response.getWriter().write("");
	}
	
	public static void logout(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.getSession().invalidate();
		response.setHeader("status", "200");
	}
}
