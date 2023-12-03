package com.thenewstatistician.api.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "programs")
public class ProgramModel {

  @Id
  @Column(name = "program_id")
  Long programId;

  @Column(name = "program_name")
  String programName;

  @Column(name = "program_name_slug")
  String programNameSlug;

  @Column(name = "program_site")
  String programSite;

  @Column(name = "program_site_url")
  String programSiteUrl;

  @Column(name = "program_site_logo")
  String programSiteLogo;

  @Column(name = "social_pitch")
  String socialMediaPitch;

  @Column(name = "social_media_tags")
  String socialMediaTags;

  @Column(name = "subject")
  String subject;

  @Column(name = "last_post_time")
  Instant lastPostTime;

  @Column(name = "program_description")
  String programDescription;

  @Column(name = "program_site_url_short")
  String programSiteUrlShort;




  @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
  public interface ProgramPayload {

    Long getProgramId();

    String getProgramName();

    String getProgramNameSlug();

    String getProgramSiteUrl();

    String getProgramSiteLogo();

    String getProgramDescription();

    String getProgramSiteUrlShort();
  }


}
