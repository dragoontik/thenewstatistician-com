package com.thenewstatistician.api.payloads;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class BlogPayload {

  Long blog_id;

  String blog_title;

  String blog_url;

  Date publish_date;

  String blog_body;
}
