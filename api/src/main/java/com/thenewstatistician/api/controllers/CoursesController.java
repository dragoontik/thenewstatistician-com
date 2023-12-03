package com.thenewstatistician.api.controllers;

import com.thenewstatistician.api.models.CourseModel;
import com.thenewstatistician.api.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(path = "/courses")
public class CoursesController {

  @Autowired
  CourseRepository courseRepository;


  @GetMapping(path = "/default/list")
  public ArrayList<CourseModel.CoursePayload> defaultCourseList() {
    ArrayList<CourseModel.CoursePayload> defaultCourseList = courseRepository.returnAllCourses();
    Collections.shuffle(defaultCourseList);
    return defaultCourseList;
  }

  @GetMapping(path = "/featured")
  public ArrayList<CourseModel.CoursePayload> featuredCourseList() {

    ArrayList<CourseModel.CoursePayload> featuredCourseList = courseRepository.returnAllCourses();
    Collections.shuffle(featuredCourseList);
    ArrayList<CourseModel.CoursePayload> rList = new ArrayList<>(featuredCourseList.subList(0, 7));
    return rList;
  }


  @GetMapping(path = "/search/course")
  public ArrayList<CourseModel.CoursePayload> getCourses(@RequestParam(name = "name", required = false) String name) {
    ArrayList<CourseModel.CoursePayload> courseByName = courseRepository.findByCourseNameContains(name);
    Collections.shuffle(courseByName);
    return courseByName;
  }


  @GetMapping(path = "/search/platform")
  public ArrayList<CourseModel.CoursePayload> getCoursesByPlatform(@RequestParam(name = "platform", defaultValue = "")
                                                                   List<String> platform) {

  ArrayList<CourseModel.CoursePayload> returnableList = new ArrayList<>();
  ArrayList<CourseModel.CoursePayload> coursesByPlatform =  courseRepository.findByPlatformNameIn(platform);
  returnableList = coursesByPlatform;
  if (platform.isEmpty()) {
    ArrayList<CourseModel.CoursePayload> defaultCourseList = courseRepository.returnAllCourses();
    returnableList = defaultCourseList;
  }
    Collections.shuffle(returnableList);

  return returnableList;
}


  @GetMapping(path = "/search/subject")
  public ArrayList<CourseModel.CoursePayload> getCoursesBySubject(@RequestParam(name = "subject", defaultValue = "")
                                                                    List<String> subject) {
    ArrayList<CourseModel.CoursePayload> returnableList = new ArrayList<>();
    ArrayList<CourseModel.CoursePayload> coursesBySubject =  courseRepository.findBySubjectIn(subject);
    returnableList = coursesBySubject;
    if (subject.isEmpty()) {
      ArrayList<CourseModel.CoursePayload> defaultCourseList = courseRepository.returnAllCourses();
      returnableList = defaultCourseList;
    }

    return returnableList;
  }



}
