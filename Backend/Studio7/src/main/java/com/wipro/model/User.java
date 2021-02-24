package com.wipro.model;

import java.util.*;
import javax.persistence.*;

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

	@ManyToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "content_id") })
	private List<Content> history = new ArrayList<>();

	@ManyToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "content_id") })
	private List<Content> watchList = new ArrayList<>();

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Long id, String email, String pass, String country, boolean isAdmin, List<Content> history,
			List<Content> watchList) {
		super();
		this.id = id;
		this.email = email;
		this.pass = pass;
		this.country = country;
		this.isAdmin = isAdmin;
		this.history = history;
		this.watchList = watchList;
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

	public List<Content> getHistory() {
		return history;
	}

	public void setHistory(List<Content> history) {
		this.history = history;
	}

	public List<Content> getWatchList() {
		return watchList;
	}

	public void setWatchList(List<Content> watchList) {
		this.watchList = watchList;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", pass=" + pass + ", country=" + country + ", isAdmin="
				+ isAdmin + ", history=" + history + ", watchList=" + watchList + "]";
	}

}