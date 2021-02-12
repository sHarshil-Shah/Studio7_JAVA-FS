package com.wipro.controller;

import com.wipro.model.User;
import com.wipro.repository.UserRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	private final UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable("id") Long id) {
		return userRepository.findById(id).get();
	}

	@PostMapping("/users")
	void addOrUpdateUser(@RequestBody User user) {
		userRepository.save(user);
	}

	@DeleteMapping("/users/{id}")
	void deleteUser(@PathVariable("id") Long id) {
		userRepository.deleteById(id);
	}
}