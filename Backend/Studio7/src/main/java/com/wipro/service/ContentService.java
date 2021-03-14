package com.wipro.service;

import org.springframework.stereotype.Service;

import com.wipro.controller.RatingController;
import com.wipro.entity.Content;
import com.wipro.model.ContentModel;
import com.wipro.repository.ContentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContentService {

	private ContentRepository contentRepository;
	private RatingController ratingController;

	public ContentService(ContentRepository contentRepository, RatingController ratingController) {
		this.contentRepository = contentRepository;
		this.ratingController = ratingController;
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
		System.out.println(content.getId());
		contentModel.setRating(ratingController.getRatingforContent(content.getId()));
		contentModel.setCast(content.getCast());
		contentModel.setTrailer(content.getTrailer());
		contentModel.setContentLink(content.getContentLink());

		return contentModel;
	}
}