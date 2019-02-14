package com.texascheatum.controllers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.servlets.DefaultServlet;
import org.apache.log4j.Logger;

public class FrontController extends DefaultServlet {
	private static final long serialVersionUID = -8870267947467247584L;
	private static final Logger log = Logger.getLogger(FrontController.class);
	
	@Override
	public void init() throws ServletException {
		super.init();
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String uri = request.getRequestURI();
		log.info(request.getMethod() + " " + uri);
		
		if (uri.contains("/servlet/"))
			MasterDispatcher.processPOST(request, response);
		else if (uri.equals("/TexasCheatum/") || uri.equals("/TexasCheatum"))
			request.getRequestDispatcher("/ng/index.html").forward(request, response);
		else
			super.doGet(request, response);
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		String uri = request.getRequestURI();
		log.info(request.getMethod() + " " + uri);
		
		if (uri.contains("/servlet/"))
			MasterDispatcher.processGET(request, response);
		else if (uri.equals("/TexasCheatum/") || uri.equals("/TexasCheatum"))
			request.getRequestDispatcher("/ng/index.html").forward(request, response);
		else
			super.doGet(request, response);
	}
}
