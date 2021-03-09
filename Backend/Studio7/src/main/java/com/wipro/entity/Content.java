package com.wipro.entity;

import java.util.*;
import javax.persistence.*;

@Entity
public class Content {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String discription;
	private String genere;
	private float rating;
	private String language;
	private String trailer;
	private String contentLink;
	private boolean isMovie;
	private String cast;
	@ManyToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "history")
	private Set<User> histUsers = new HashSet<>();

	@ManyToMany(targetEntity = User.class, mappedBy = "watchList", cascade = { CascadeType.PERSIST, CascadeType.DETACH,
			CascadeType.MERGE, CascadeType.REFRESH })
	private Set<User> watchUsers = new HashSet<>();

	public Content() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Content(Long id, String name, String discription, String genere, float rating, String language,
			String trailer, String contentLink, boolean isMovie, String cast, Set<User> histUsers,
			Set<User> watchUsers) {
		super();
		this.id = id;
		this.name = name;
		this.discription = discription;
		this.genere = genere;
		this.rating = rating;
		this.language = language;
		this.trailer = trailer;
		this.contentLink = contentLink;
		this.isMovie = isMovie;
		this.cast = cast;
		this.histUsers = histUsers;
		this.watchUsers = watchUsers;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDiscription() {
		return discription;
	}

	public void setDiscription(String discription) {
		this.discription = discription;
	}

	public String getGenere() {
		return genere;
	}

	public void setGenere(String genere) {
		this.genere = genere;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getTrailer() {
		return trailer;
	}

	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}

	public boolean isMovie() {
		return isMovie;
	}

	public void setMovie(boolean isMovie) {
		this.isMovie = isMovie;
	}

	public String getCast() {
		return cast;
	}

	public void setCast(String cast) {
		this.cast = cast;
	}

	public String getContentLink() {
		return contentLink;
	}

	public void setContentLink(String contentLink) {
		this.contentLink = contentLink;
	}

	public Set<User> getHistUsers() {
		return histUsers;
	}

	public void setHistUsers(Set<User> histUsers) {
		this.histUsers = histUsers;
	}

	public Set<User> getWatchUsers() {
		return watchUsers;
	}

	public void setWatchUsers(Set<User> watchUsers) {
		this.watchUsers = watchUsers;
	}

	@Override
	public String toString() {
		return "Content [id=" + id + ", name=" + name + ", discription=" + discription + ", genere=" + genere
				+ ", rating=" + rating + ", language=" + language + ", trailer=" + trailer + ", contentLink="
				+ contentLink + ", isMovie=" + isMovie + ", cast=" + cast + "]";
	}

}
