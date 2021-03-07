package com.wipro.controller;

import com.wipro.model.Content;
import com.wipro.repository.ContentRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ContentController {

	private final ContentRepository contentRepository;

	public ContentController(ContentRepository contentRepository) {
		this.contentRepository = contentRepository;
	}

	@GetMapping("/contents")
	public List<Content> getContents() {
		return (List<Content>) contentRepository.findAll();
	}

	@GetMapping("/contents/{id}")
	public Content getContentById(@PathVariable("id") Long id) {
		return contentRepository.findById(id).get();
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
