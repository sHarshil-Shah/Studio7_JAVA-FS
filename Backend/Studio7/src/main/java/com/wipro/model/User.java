package com.wipro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(unique = true)
	private String email;
	private String pass;
	private String country;
	private boolean isAdmin;
	private String history;
	private String WatchList;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getHistory() {
		return history;
	}

	public void setHistory(String history) {
		this.history = history;
	}

	public String getWatchList() {
		return WatchList;
	}

	public void setWatchList(String watchList) {
		WatchList = watchList;
	}

	public User(Long id, String email, String pass, String country, boolean isAdmin, String history, String watchList) {
		super();
		this.id = id;
		this.email = email;
		this.pass = pass;
		this.country = country;
		this.isAdmin = isAdmin;
		this.history = history;
		WatchList = watchList;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", pass=" + pass + ", country=" + country + ", isAdmin="
				+ isAdmin + ", history=" + history + ", WatchList=" + WatchList + "]";
	}

}