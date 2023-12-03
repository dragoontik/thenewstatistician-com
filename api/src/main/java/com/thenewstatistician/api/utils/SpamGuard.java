package com.thenewstatistician.api.utils;

import com.echobox.api.linkedin.types.TimeInterval;
import com.echobox.api.linkedin.types.TimeRange;
import jdk.swing.interop.SwingInterOpUtils;

import java.time.Instant;
import java.time.temporal.ChronoField;

public class SpamGuard {


  public static boolean repeatedPostByHour(Instant lastPost, Instant now, int hoursThreshold) {
    System.out.println("Run Spam Guard");

    if (lastPost == null) {
      lastPost = Instant.ofEpochSecond(now.getLong(ChronoField.INSTANT_SECONDS) + hoursThreshold* 3600L);
    }

    System.out.println(lastPost);
    // Get the difference in Seconds
    long diff =  now.getLong(ChronoField.INSTANT_SECONDS) - lastPost.getLong(ChronoField.INSTANT_SECONDS);

    // Compute difference in Hours
    float deltaInHours = diff / 3600F;


    if (deltaInHours < hoursThreshold) {
      System.out.println("Post is recent Rerun");
      return true;
    }
    else {
      System.out.println("Post is old enough Re-Post it");
      return false;
    }

  }





  public static boolean repeatedPostByMinute(Instant lastPost, Instant now, int minThreshold) {
    System.out.println("Run Spam Guard");

    if (lastPost == null) {
      lastPost = Instant.ofEpochSecond(now.getLong(ChronoField.INSTANT_SECONDS) + minThreshold* 60L);
    }

    System.out.println(lastPost);
    // Get the difference in Seconds
    long diff =  now.getLong(ChronoField.INSTANT_SECONDS) - lastPost.getLong(ChronoField.INSTANT_SECONDS);

    // Compute difference in Hours
    float deltaInMinutes = diff / 60F;
    if (deltaInMinutes < minThreshold) {
      System.out.println("Minutes LESS than post");
      return true;
    }
    else {
      System.out.println("Minutes MORE than post");
      return false;
    }

  }

}
