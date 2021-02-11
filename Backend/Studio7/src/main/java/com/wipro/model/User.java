package com.wipro.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	private String email;
	private String pass;
	private String country;
	private boolean isAdmin;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String email, String pass, String country, boolean isAdmin) {
		super();
		this.email = email;
		this.pass = pass;
		this.country = country;
		this.isAdmin = isAdmin;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	@Override
	public String toString() {
		return "User [email=" + email + ", pass=" + pass + ", country=" + country + ", isAdmin=" + isAdmin + "]";
	}

}