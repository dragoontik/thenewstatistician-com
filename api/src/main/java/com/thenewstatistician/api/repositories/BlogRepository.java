package com.thenewstatistician.api.repositories;

import com.thenewstatistician.api.models.BlogModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Collection;


@EnableJpaRepositories
public interface BlogRepository extends CrudRepository<BlogModel, Long> {


  // Fetch blogs the top 5 blogs by desc publish date
  ArrayList<BlogModel.BlogPayload> findByOrderByPublishDateDesc();


  // Fetch blogs by title name
  ArrayList<BlogModel.BlogPayload> findByBlogTitleContains(String blogTitle);

  @Query("select b from BlogModel b where b.subject = ?1")
  ArrayList<BlogModel.BlogPayload> findBySubject(String subject);

  ArrayList<BlogModel.BlogPayload> findBySubjectIn(Collection<String> subjects);

  @Query(nativeQuery = true, value = "SELECT * FROM blogs ORDER BY RAND() LIMIT 1;")
  BlogModel fetchRandomBlog();


  @Query("select b from BlogModel b where b.blogId = ?1 and b.blogTitleSlug = ?2")
  BlogModel.BlogBodyPayload findByBlogIdAndBlogTitleSlug(Long id, String titleSlug);




  // Fetch blogs by Topic





}
