package com.example.server.controllers;

import com.example.server.DBManager;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
public class AddController {

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/addbox")
    public ResponseEntity<?> addBox(@RequestBody HashMap<String, String> body) {
        if (body.isEmpty()) return this.respondToRequest(false);

        boolean isValidInsertion = this.addBoxToDB(body);
        return this.respondToRequest(isValidInsertion);
    }

    boolean addBoxToDB(HashMap<String, String> body) {
        return new DBManager().addBox(body);
    }

    public ResponseEntity<?> respondToRequest(boolean isValidResponse) {
        if (isValidResponse) return new ResponseEntity<>("Box has been added", HttpStatus.OK);
        else return new ResponseEntity<>("Could not add box", HttpStatus.BAD_REQUEST);
    }
}