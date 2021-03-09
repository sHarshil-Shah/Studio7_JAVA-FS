package com.wipro.service;

import org.springframework.stereotype.Service;

import com.wipro.entity.Content;
import com.wipro.model.ContentModel;
import com.wipro.repository.ContentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContentService {

	private ContentRepository contentRepository;

	public ContentService(ContentRepository contentRepository) {
		this.contentRepository = contentRepository;
	}

	public ContentModel getContent(Long id) {
		if (contentRepository.findById(id).isPresent()) {
			Content content = contentRepository.findById(id).get();
			return convertContentToContentModel(content);
		} else
			return null;
	}

	public List<ContentModel> getContents() {
		List<Content> contentList = (List<Content>) contentRepository.findAll();
		if (contentList.size() > 0) {
			List<ContentModel> contentModels = new ArrayList<>();
			for (Content content : contentList) {
				contentModels.add(convertContentToContentModel(content));
			}
			return contentModels;
		} else
			return new ArrayList<ContentModel>();
	}

	public ContentModel convertContentToContentModel(Content content) {

		ContentModel contentModel = new ContentModel();
		contentModel.setId(content.getId());
		contentModel.setName(content.getName());

		contentModel.setDiscription(content.getDiscription());
		contentModel.setGenere(content.getGenere());
		contentModel.setLanguage(content.getLanguage());
		contentModel.setMovie(content.isMovie());
		contentModel.setRating(content.getRating());
		contentModel.setCast(content.getCast());
		contentModel.setTrailer(content.getTrailer());
		contentModel.setContentLink(content.getContentLink());

		return contentModel;
	}

//	private List<UserModel> getWatchUserList(Content content) {
//		List<UserModel> userList = new ArrayList<>();
//		List<User> watchUsers = content.getWatchUsers();
//		for (int i = 0; i < watchUsers.size(); i++) {
//			UserModel userModel = new UserModel();
//			userModel.setEmail(watchUsers.get(i).getEmail());
//			userModel.setPass(watchUsers.get(i).getPass());
//			userModel.setCountry(watchUsers.get(i).getCountry());
//			userModel.setAdmin(watchUsers.get(i).isAdmin());
//
//			userList.add(userModel);
//		}
//		return userList;
//	}
}