package com.wipro.controller;

import com.wipro.entity.Combine;
import com.wipro.entity.User;
import com.wipro.model.UserModel;
import com.wipro.repository.ContentRepository;
import com.wipro.repository.UserRepository;
import com.wipro.service.UserService;

import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	private UserService userService;

	private final UserRepository userRepository;
	private final ContentRepository contentRepository;

	public UserController(UserRepository userRepository, ContentRepository contentRepository, UserService userService) {
		this.contentRepository = contentRepository;
		this.userRepository = userRepository;
		this.userService = userService;
	}

	@Bean
	public JavaMailSender getJavaMailSender() {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost("smtp.gmail.com");
		mailSender.setPort(587);

		mailSender.setUsername("tempggl1@gmail.com");
		mailSender.setPassword("gglpassword1");

		Properties props = mailSender.getJavaMailProperties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");

		return mailSender;
	}

	@Autowired
	private JavaMailSender emailSender;

	@PostMapping("/users/sendmail/{emailid}")
	public void sendEmail(@RequestBody String msg, @PathVariable String emailid) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("noreply@harshil.com");
		message.setTo(emailid);
		message.setSubject("Recommandation for you");
		message.setText("Check out " + msg);
		emailSender.send(message);
	}

	@GetMapping("/users")
	public List<UserModel> getUsers() {
		return userService.getUsers();
	}

	@GetMapping("/users/{id}")
	public UserModel getUserById(@PathVariable("id") Long id) {
		return userService.getUser(id);
	}

	@PostMapping("/users")
	void addOrUpdateUser(@RequestBody User user) {
		System.out.println("Here-----------------------------");
		System.out.println(user);
		userRepository.save(user);
		System.out.println("Completed");
	}

	@PostMapping("/users/updateUser")
	void updateUser(@RequestBody Combine combine) {
		long userID = combine.userID;
		long contentID = combine.contentID;
		User user = userRepository.findById(userID).get();
		user.getWatchList().add(contentRepository.findById(contentID).get());
		userRepository.save(user);
		System.out.println("WatchList Updated");
	}

	@DeleteMapping("/users/{id}")
	void deleteUser(@PathVariable("id") Long id) {
		userRepository.deleteById(id);
	}

	@GetMapping("/users/email/{email}")
	public UserModel getUserByEmail(@PathVariable("email") String email) {
		return userService.findUserByEmail(email);
	}
}
