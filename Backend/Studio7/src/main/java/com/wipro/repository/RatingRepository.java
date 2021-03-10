package com.wipro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wipro.entity.Combine;
import com.wipro.entity.Rating;

public interface RatingRepository extends JpaRepository<Rating, Combine> {
	@Query(value = "SELECT avg(r.rating) FROM rating r WHERE r.content_id =?1 ", nativeQuery = true)
	float getRatingforContent(Long id);

}