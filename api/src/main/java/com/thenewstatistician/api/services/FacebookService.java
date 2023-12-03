package com.thenewstatistician.api.services;

import retrofit2.Call;
import retrofit2.http.*;

public interface FacebookService {

  String accessTokenUrl = "https://graph.facebook.com/";

  // Get Long Term User Access Token
  @GET("/oauth/access_token")
  Call<String> refreshToken(
    @Header("facebook-api-version") String version,
    @Query("grant_type") String grantType,
    @Query("client_id") String clientId,
    @Query("client_secret") String clientSecret,
    @Query("fb_exchange_token") String exchangeToken
  );

  // Get Page Access Token
  @GET("/TheNewStat1")
  Call<String> getPageAccessToken(
    @Header("facebook-api-version") String version,
    @Query("fields") String field,
    @Query("access_token") String userAccessToken
  );


}
