package com.thenewstatistician.api.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.google.api.client.util.DateTime;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Time;
import java.time.Instant;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "courses")
public class CourseModel {

  @Id
  @Column(name = "course_id")
  Long courseId;

  @Column(name = "course_name")
  String courseName;

  @Column(name = "course_name_slug")
  String courseNameSlug;

  @Column(name = "course_site")
  String courseSite;

  @Column(name = "raw_course_url")
  String rawCourseUrl;

  @Column(name = "course_page_url")
  String coursePageUrl;

  @Column(name = "course_page_url_short")
  String coursePageUrlShort;

  @Column(name = "site_logo_url")
  String siteLogoUrl;

  @Column(name = "platform_name")
  String platformName;

  @Column(name = "course_logo_url")
  String courseLogoUrl;

  @Column(name = "social_pitch")
  String socialPitch;

  @Column(name = "social_media_tags")
  String socialMediaTags;

  @Column(name = "subject")
  String subject;

  @Column(name = "course_description")
  String courseDescription;

  @Column(name = "last_post_time")
  Instant lastPostTime;


  // Returnable for Webpage
  @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
  public interface CoursePayload {

    Long getCourseId();

    String getCourseName();

    String getCourseNameSlug();

    String getCoursePageUrl();

    String getCoursePageUrlShort();

    String getSiteLogoUrl();

    String getPlatformName();

    String getCourseLogoUrl();

    String getSubject();

    String getCourseDescription();

  }

}
