package com.wipro.service;

import org.springframework.stereotype.Service;

import com.wipro.entity.Content;
import com.wipro.entity.User;
import com.wipro.model.ContentModel;
import com.wipro.model.UserModel;
import com.wipro.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public UserModel getUser(Long id) {
		if (userRepository.findById(id).isPresent()) {
			User user = userRepository.findById(id).get();
			return convertUserToUserModel(user);
		} else
			return null;
	}

	public List<UserModel> getUsers() {
		List<User> userList = (List<User>) userRepository.findAll();
		if (userList.size() > 0) {
			List<UserModel> userModels = new ArrayList<>();
			for (User user : userList) {
				userModels.add(convertUserToUserModel(user));
			}
			return userModels;
		} else
			return new ArrayList<UserModel>();
	}

	public UserModel findUserByEmail(String email) {
		return convertUserToUserModel(userRepository.findUserByEmail(email).get(0));
	}

	public UserModel convertUserToUserModel(User user) {
		UserModel userModel = new UserModel();
		userModel.setId(user.getId());
		userModel.setEmail(user.getEmail());
		userModel.setPass(user.getPass());
		userModel.setCountry(user.getCountry());
		userModel.setAdmin(user.isAdmin());
		userModel.setWatchList(getWatchList(user));

		return userModel;
	}

	private List<ContentModel> getWatchList(User user) {
		List<ContentModel> roleList = new ArrayList<>();
		Set<Content> watchSet = user.getWatchList();
		List<Content> watchList = new ArrayList<>();
		for (Content x : watchSet)
			watchList.add(x);
		for (int i = 0; i < watchList.size(); i++) {
			ContentModel contentModel = new ContentModel();
			contentModel.setId(watchList.get(i).getId());
			contentModel.setName(watchList.get(i).getName());

			contentModel.setDiscription(watchList.get(i).getDiscription());
			contentModel.setGenere(watchList.get(i).getGenere());
			contentModel.setLanguage(watchList.get(i).getLanguage());
			contentModel.setMovie(watchList.get(i).isMovie());
			contentModel.setRating(watchList.get(i).getRating());
			contentModel.setCast(watchList.get(i).getCast());
			contentModel.setTrailer(watchList.get(i).getTrailer());
			contentModel.setContentLink(watchList.get(i).getContentLink());

			roleList.add(contentModel);
		}
		return roleList;
	}
}