package com.thenewstatistician.api.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.thenewstatistician.api.payloads.LinkedInBlogPost;
import retrofit2.Call;
import retrofit2.http.*;


public interface LinkedInService {

  String accessTokenUrl = "https://www.linkedin.com/oauth/v2/accessToken";

  @FormUrlEncoded
  @POST(accessTokenUrl)
  Call<String> refreshToken(
    @Field("grant_type") String grantType,
    @Field("refresh_token") String refreshToken,
    @Field("client_id") String clientId,
    @Field("client_secret") String clientSecret
    );



}
