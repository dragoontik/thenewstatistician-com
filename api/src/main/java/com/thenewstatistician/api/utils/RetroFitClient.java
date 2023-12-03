package com.thenewstatistician.api.utils;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.RequestBody;
import retrofit2.Converter;
import retrofit2.Retrofit;
import retrofit2.converter.jackson.JacksonConverterFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;


public class RetroFitClient {

  private String baseUrl;

  private Retrofit.Builder builder = new Retrofit.Builder();

  private OkHttpClient.Builder httpClient = new OkHttpClient.Builder();


  public RetroFitClient(String baseUrl) {
    this.baseUrl = baseUrl;

  }

  /**
   Get base url of retrofit client
   */
  public String getBaseUrl() {

    return baseUrl;
  }

  /**
   Set base url of retrofit client
   */
  public void setBaseUrl(String baseUrl) {
    this.baseUrl = baseUrl;
  }


  // Return retrofit Object
  public Retrofit getConfiguredRetroFitClient(Converter.Factory factory) {

    return this.builder
      .baseUrl(this.baseUrl)
      .addConverterFactory(factory)
      .addConverterFactory(JacksonConverterFactory.create()) // Added custom converter
      .client(this.httpClient.build()).build();
  }


//  MultipartBody.Part
public static MultipartBody.Part setMultiPartBodyImageFile(File file) {

    String imageID = UUID.randomUUID().toString() + "_image.jpg";

  // create RequestBody instance from file
  RequestBody requestFile =
    RequestBody.create(
      MediaType.parse("image/*"),  file);

  // MultipartBody.Part is used to send also the actual file name
  MultipartBody.Part body =
    MultipartBody.Part.createFormData("imageFile", imageID, requestFile);

    return body;
}


  public static JsonNode responseToJsonNode(String responseBody) throws IOException {
    ObjectMapper mapper = new ObjectMapper();
    JsonFactory factory = mapper.getFactory();

    JsonParser parser = factory.createParser(responseBody);
    JsonNode parsedResponse = mapper.readTree(parser);

    return parsedResponse;
  }


  public static JsonNode responseToJsonNode(InputStream responseBody) throws IOException {
    ObjectMapper mapper = new ObjectMapper();
    JsonFactory factory = mapper.getFactory();

    JsonParser parser = factory.createParser(responseBody);
    JsonNode parsedResponse = mapper.readTree(parser);

    return parsedResponse;
  }

// MultipartBody.Part Video File - TikTok Specific
  public static MultipartBody.Part setMultiPartBodyTikTokVideoFile(File file, String videoFileName) {

    RequestBody requestFile =
      RequestBody.create(
        MediaType.parse("video/mp4, video/WebM"), file);

    MultipartBody.Part body =
      MultipartBody.Part.createFormData("tiktokVideoFile", videoFileName, requestFile);

    return body;
  }





}
