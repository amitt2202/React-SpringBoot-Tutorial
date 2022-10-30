package com.fullstack.rest.basic.auth;

public class AuthenticationBean {
	String user;

	public AuthenticationBean(String user) {
		super();
		this.user = user;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
}
