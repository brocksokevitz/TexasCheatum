package com.texascheatum.services;

import java.io.IOException;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.texascheatum.dao.UserDaoImplementation;
import com.texascheatum.model.AbstractUser;
import com.texascheatum.model.User;

public class PlayerService {
	
	final static Logger log = Logger.getLogger(PlayerService.class);
	
	private PlayerService() { }
	private static final ObjectMapper mapper = new ObjectMapper();
	
	public static void register(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode userJson = mapper.readTree(request.getReader());
		UserDaoImplementation.getUserDao().insertUser(
				userJson.get("username").asText(),
				userJson.get("email").asText(),
				userJson.get("password").asText());
		
		sendEmail(userJson.get("username").asText(),
				userJson.get("email").asText(),
				userJson.get("password").asText());
	}
	
	public static void login(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		JsonNode userJson = mapper.readTree(request.getReader());
//		User user = UserDaoImplementation.getUserDao().getUser(
//				userJson.get("username").asText(),
//				userJson.get("password").asText());
		
		AbstractUser abstractUser = UserDaoImplementation.getUserDao().getUser(
				userJson.get("username").asText(),
				userJson.get("password").asText());
		
		if (abstractUser.isValid()) {
			User user = (User)abstractUser;
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
//		request.logout();
		response.setHeader("status", "200");
	}
	
	public static boolean sendEmail(String username,String password,String email) {
		
		final String senderEmail = "erstestemail7@gmail.com";// change with your sender email
		final String senderPassword = "p4ssw0rd.";// change with your sender password
		
		String title = "new user";
		
		String to = email;
		
		String body = "<!DOCTYPE html>" + 
				"<html>" + 
				"<body>"
				+ "<p>Username: "+username+"<br>Password: "+password+"<br><br>Please have fun playing poker at <a href=\"http://ec2-18-218-85-44.us-east-2.compute.amazonaws.com:8080/TexasCheatum/\">Texas Cheatum</a>!"
						+ "<b>This email was formatted using HTML.</p>"
						+ "</body>"
						+ "</html>";

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(senderEmail, senderPassword);
			}
		});

		try {
			// create message using session
			MimeMessage message = new MimeMessage(session);
			message.setContent(body, "text/html; charset=utf-8");
			message.saveChanges();
			message.setFrom(new InternetAddress(senderEmail));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			message.setSubject(title);
			// sending message
			Transport.send(message);
			return true;
		} catch (AddressException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			log.error(e.getMessage());
		} catch(NullPointerException e) {
			log.error(e.getMessage());
		}
		return false;
	}
}
