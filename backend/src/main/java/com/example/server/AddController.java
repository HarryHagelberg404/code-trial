package com.example.server;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.HashMap;

@RestController
public class AddController {

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/addbox")
    public ResponseEntity addBox(@RequestBody HashMap<String, String> body) {
        String respMessage = new DBManager().addBox(body);
        return new ResponseEntity(respMessage, HttpStatus.OK);
    }
}