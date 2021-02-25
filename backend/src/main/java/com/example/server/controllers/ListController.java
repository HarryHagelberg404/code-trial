package com.example.server.controllers;

import com.example.server.DBManager;
import org.json.JSONArray;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import java.sql.SQLException;

@RestController
public class ListController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/listbox")
    public ResponseEntity listBox() throws SQLException {
        JSONArray retrievedBoxes = this.getBoxesFromDB();
        return this.respondToRequest(retrievedBoxes);
    }

    public JSONArray getBoxesFromDB() throws SQLException {
        return new DBManager().listBoxes();
    }

    public ResponseEntity respondToRequest(JSONArray retrievedData) {
        return new ResponseEntity<>(retrievedData.toList(), HttpStatus.OK);
    }
}