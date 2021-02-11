package com.wipro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.wipro.model.User;
import com.wipro.repository.UserRepository;
import java.util.stream.Stream;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Studio7Application {

	public static void main(String[] args) {
		SpringApplication.run(Studio7Application.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			Stream.of("Admin").forEach(name -> {
				User user = new User(name + "@mail.com", "pass", "India", true);
				userRepository.save(user);
			});
			userRepository.findAll().forEach(System.out::println);
		};
	}
}
