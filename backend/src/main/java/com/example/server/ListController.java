package com.example.server;

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
        JSONArray respMessage = new DBManager().listBoxes();
        return new ResponseEntity<>(respMessage.toList(), HttpStatus.OK);
    }
}