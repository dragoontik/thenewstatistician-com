package com.thenewstatistician.api.repositories;


import com.thenewstatistician.api.models.ProgramModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface ProgramModelRepository extends CrudRepository<ProgramModel, Long> {


  @Query("select p from ProgramModel p")
  ArrayList<ProgramModel.ProgramPayload> returnAllPrograms();

  @Query(nativeQuery = true, value = "SELECT * FROM programs ORDER BY RAND() LIMIT 1;")
  ProgramModel fetchRandomProgram();


}
