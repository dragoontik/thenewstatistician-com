package com.thenewstatistician.api.repositories;


import com.thenewstatistician.api.models.YouTubeVideoModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface YouTubeVideoRepository extends CrudRepository<YouTubeVideoModel, Integer> {

  @Query(nativeQuery = true, value = "SELECT * FROM youtube_videos ORDER BY RAND() LIMIT 1;")
  YouTubeVideoModel fetchRandomVideo();

}
