package com.wipro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.wipro.model.*;
import com.wipro.repository.*;
import java.util.ArrayList;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan(basePackages = "com.wipro")
public class Studio7Application {

	public static void main(String[] args) {
		SpringApplication.run(Studio7Application.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository, ContentRepository contentRepository) {
		return args -> {
			User user = new User(1L, "admin@mail.com", "pass", "India", true, new ArrayList<>(), new ArrayList<>());
			userRepository.save(user);
			user = new User(2L, "user@mail.com", "pass", "USA", false, new ArrayList<>(), new ArrayList<>());
			userRepository.save(user);
			userRepository.findAll().forEach(System.out::println);

			Content content = new Content(1L, "con1", "disc1", "Action", 0, "English", "link1", true, "cast1, cast2",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con2", "disc2", "Drama", 0, "Hindi", "link2", false, "cast3, cast4",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con3", "disc3", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);

			content = new Content(1L, "con4", "disc4", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);

			content = new Content(1L, "ten4", "disc4", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			
			content = new Content(1L, "con5", "disc5", "Drama", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);

			content = new Content(1L, "con6", "disc6", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con6", "disc6", "Drama", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con6", "disc6", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con6", "disc6", "Drama", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con6", "disc6", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con6", "disc6", "Action", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			content = new Content(1L, "con6", "disc6", "Drama", 0, "Hindi", "link3", false, "cast5, cast6",
					new ArrayList<>(), new ArrayList<>());
			contentRepository.save(content);
			contentRepository.findAll().forEach(System.out::println);
		};
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**");
			}
		};
	}
}
