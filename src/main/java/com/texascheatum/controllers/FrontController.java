package com.texascheatum.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.servlets.DefaultServlet;
import org.apache.log4j.Logger;

public class FrontController extends DefaultServlet {
	private static final long serialVersionUID = -8870267947467247584L;
	private static final Logger log = Logger.getLogger(FrontController.class);
	
	private static List<String> fileExts = new ArrayList<>();
	
	@Override
	public void init() throws ServletException {
		super.init();
		fileExts.add(".html");
		fileExts.add(".js");
		fileExts.add(".ico");
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String uri = request.getRequestURI();
		log.info(request.getMethod() + " " + uri);
		
		if (uri.equals("/TexasCheatum/") || uri.equals("/TexasCheatum"))
			request.getRequestDispatcher("/ng").forward(request, response);
		else if (uri.lastIndexOf('.') > -1
				&& fileExts.contains(uri.substring(uri.lastIndexOf('.'))))
			super.doGet(request, response);
		else
			MasterDispatcher.processGET(request, response);
	}
}