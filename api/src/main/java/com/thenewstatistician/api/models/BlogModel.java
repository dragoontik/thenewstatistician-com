package com.thenewstatistician.api.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "blogs")
public class BlogModel {

  @Id
  @Column(name = "blog_id")
  Long blogId;

  @Column(name = "blog_title")
  String blogTitle;

  @Column(name = "blog_url")
  String blogUrl;

  @Column(name = "subject")
  String subject;

  @Column(name = "blog_site_domain")
  String blogSiteDomain;

  @Column(name = "publish_date")
  Date publishDate;

  @Column(name = "blog_body")
  String blogBody;

  @Column(name = "blog_intro")
  String blogIntro;

  @Column(name = "blog_medium_url")
  String blogMediumUrl;

  @Column(name = "blog_image")
  String blogImage;

  @Column(name = "social_media_pitch")
  String socialMediaPitch;

  @Column(name = "blog_hashtags")
  String blogHashTags;

  @Column(name = "blog_title_slug")
  String blogTitleSlug;

  @Column(name = "last_post_time")
  Instant lastPostTime;


// Returnable for Webpage
  @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public interface BlogPayload {
    Long getBlogId();

    String getBlogTitle();

    String getBlogUrl();

    String getSubject();

    String getPublishDate();

    String getBlogImage();

    String getBlogIntro();

    String getBlogTitleSlug();


  }

  @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
  public interface BlogBodyPayload {
    Long getBlogId();

    String getBlogTitle();

    String getPublishDate();

    String getBlogBody();

    String getBlogTitleSlug();

    String getBlogUrl();

    String getblogImage();
  }
}
