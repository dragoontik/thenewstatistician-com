package com.thenewstatistician.api.controllers;


import com.thenewstatistician.api.models.BlogModel;
import com.thenewstatistician.api.models.ProgramModel;
import com.thenewstatistician.api.repositories.ProgramModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping(path = "/programs")
public class ProgramController {

  @Autowired
  ProgramModelRepository programModelRepository;

  @GetMapping(path = "/default/list")
  public ArrayList<ProgramModel.ProgramPayload> getDefaultTopBlogs() {
    ArrayList<ProgramModel.ProgramPayload> programsList =  programModelRepository.returnAllPrograms();
    return programsList;
  }



}
