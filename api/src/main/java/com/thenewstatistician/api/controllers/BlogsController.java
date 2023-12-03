package com.thenewstatistician.api.controllers;


import com.thenewstatistician.api.models.BlogModel;
import com.thenewstatistician.api.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping(path = "/blogs")
public class BlogsController {


  @Autowired
  BlogRepository blogRepository;

  // Get the default List of Recent 5 Blogs
  @GetMapping(path = "/default/list")
  public ArrayList<BlogModel.BlogPayload> getDefaultTopBlogs() {
    ArrayList<BlogModel.BlogPayload> blogsTop5 = blogRepository.findByOrderByPublishDateDesc();

    return blogsTop5;
  }


  // Get blog articles by title
  // TODO: Update api to also search and filter by body text
  @GetMapping(path = "/search/title")
  public ArrayList<BlogModel.BlogPayload> getBlogArticles(@RequestParam(name = "title",  required = false) String title) {
    ArrayList<BlogModel.BlogPayload> blogsByTitle = blogRepository.findByBlogTitleContains(title);
    return blogsByTitle;
  }

  @GetMapping(path = "/search/subject")
  public ArrayList<BlogModel.BlogPayload> getBlogArticles(@RequestParam(name = "subjects", defaultValue = "") List<String> subject) {
    System.out.println("Request accepted");

    ArrayList<BlogModel.BlogPayload> returnableList = new ArrayList<>();
    ArrayList<BlogModel.BlogPayload> blogsBySubject = blogRepository.findBySubjectIn(subject);
    returnableList = blogsBySubject;
    if (subject.isEmpty()) {
      ArrayList<BlogModel.BlogPayload> blogsDefault = blogRepository.findByOrderByPublishDateDesc();
      returnableList = blogsDefault;
    }

    return returnableList;
  }

  @GetMapping(path = "/article/data")
  public BlogModel.BlogBodyPayload getBlogContent(@RequestParam(name = "id") Long id,
                                                  @RequestParam(name = "title_slug") String titleSlug) {
    ArrayList<BlogModel.BlogBodyPayload> returnableList = new ArrayList<>();
    BlogModel.BlogBodyPayload blogData = blogRepository.findByBlogIdAndBlogTitleSlug(id, titleSlug);
    return blogData;
  }

}
