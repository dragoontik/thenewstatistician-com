package com.thenewstatistician.api.models;

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
@Table(name = "youtube_videos")
public class YouTubeVideoModel {

  @Id
  @Column(name = "video_id")
  Long videoId;

  @Column(name = "video_name")
  String videoName;

  @Column(name = "video_page_url")
  String videoPageUrl;

  @Column(name = "social_pitch")
  String socialPitch;

  @Column(name = "social_media_tags")
  String socialMediaTags;

  @Column(name = "last_post_time")
  Instant lastPostTime;

}
