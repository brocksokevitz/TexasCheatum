package com.texascheatum.services;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.dao.UserDaoImplementation;
import com.texascheatum.model.User;

public class PlayerService {
	private PlayerService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	
	public static void register(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode userJson = mapper.readTree(request.getReader());
		if (UserDaoImplementation.getUserDao().insertUser(
				userJson.get("username").asText(),
				userJson.get("email").asText(),
				userJson.get("password").asText())) {
			User user = UserDaoImplementation.getUserDao().getUser(
					userJson.get("username").asText(),
					userJson.get("password").asText());
			request.getSession().setAttribute("user", user);
			request.getSession().setAttribute("gameID", user.getUsername());
		}
	}
	
	public static void login(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode userJson = mapper.readTree(request.getReader());
		User user = UserDaoImplementation.getUserDao().getUser(
				userJson.get("username").asText(),
				userJson.get("password").asText());
		
		if (user.getUsername() != null && !user.getUsername().equals("")) {
			request.getSession().setAttribute("user", user);
			request.getSession().setAttribute("gameID", user.getUsername());
			
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
