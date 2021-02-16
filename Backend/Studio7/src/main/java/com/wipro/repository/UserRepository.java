package com.wipro.repository;

import com.wipro.model.User;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
    List<User> findUserByEmail(String email);

}