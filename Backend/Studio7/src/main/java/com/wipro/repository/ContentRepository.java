package com.wipro.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wipro.entity.Content;

@Repository
public interface ContentRepository extends CrudRepository<Content, Long> {
}