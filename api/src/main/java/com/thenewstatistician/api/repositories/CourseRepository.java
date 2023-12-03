package com.thenewstatistician.api.repositories;


import com.thenewstatistician.api.models.CourseModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Collection;

public interface CourseRepository extends CrudRepository<CourseModel, Long> {

  @Query("select c from CourseModel c")
  ArrayList<CourseModel.CoursePayload> returnAllCourses();

  ArrayList<CourseModel.CoursePayload> findByCourseNameContains(String courseName);

  ArrayList<CourseModel.CoursePayload> findByPlatformNameIn(Collection<String> platforms);

  ArrayList<CourseModel.CoursePayload> findBySubjectIn(Collection<String> subjects);

  @Query(nativeQuery = true, value = "SELECT * FROM courses ORDER BY RAND() LIMIT 1;")
  CourseModel fetchRandomCourse();

  @Query(nativeQuery = true, value = "SELECT * FROM courses ORDER BY RAND() LIMIT 10;")
  ArrayList<CourseModel> getFeaturedCourseList();



}
