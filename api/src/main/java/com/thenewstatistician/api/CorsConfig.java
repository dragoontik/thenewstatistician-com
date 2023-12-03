package com.thenewstatistician.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

  @Value("${FRONTEND_DOMAIN}")
  private String FRONTEND_DOMAIN;

  @Value("${BACKEND_DOMAIN}")
  private String BACKEND_DOMAIN;

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    System.out.println("Cores Configuration is enabled");
    System.out.println(FRONTEND_DOMAIN);
    registry
      .addMapping("/**")
      .allowedOrigins(FRONTEND_DOMAIN, "https://www.thenewstatistician.com", "https://thenewstatistician.com")
      .allowedOriginPatterns("/**");
  }
}
