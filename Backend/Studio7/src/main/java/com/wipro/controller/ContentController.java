package com.wipro.controller;

import com.wipro.entity.Content;
import com.wipro.model.ContentModel;
import com.wipro.repository.ContentRepository;
import com.wipro.service.ContentService;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ContentController {

	private final ContentRepository contentRepository;
	private final ContentService contentService;

	public ContentController(ContentRepository contentRepository, ContentService contentService) {
		this.contentRepository = contentRepository;
		this.contentService = contentService;
	}

	@GetMapping("/contents")
	public List<ContentModel> getContents() {
		return (List<ContentModel>) contentService.getContents();
	}

	@GetMapping("/contents/{id}")
	public ContentModel getContentById(@PathVariable("id") Long id) {
		return contentService.getContent(id);
	}

	@PostMapping("/contents")
	void addOrUpdateContent(@RequestBody Content content) {
		System.out.println(content);
		contentRepository.save(content);
	}

	@DeleteMapping("/contents/{id}")
	void deleteContent(@PathVariable("id") Long id) {
		contentRepository.deleteById(id);
	}
}
