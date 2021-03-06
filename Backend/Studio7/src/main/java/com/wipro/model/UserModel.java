package com.wipro.model;

import java.util.ArrayList;
import java.util.List;

public class UserModel {

	private long id;
	private String email;
	private String pass;
	private String country;
	private boolean isAdmin;

	private List<ContentModel> history = new ArrayList<>();

	private List<ContentModel> watchList = new ArrayList<>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public List<ContentModel> getHistory() {
		return history;
	}

	public void setHistory(List<ContentModel> history) {
		this.history = history;
	}

	public List<ContentModel> getWatchList() {
		return watchList;
	}

	public void setWatchList(List<ContentModel> watchList) {
		this.watchList = watchList;
	}

}