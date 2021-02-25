package com.example.server.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.SQLException;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

class AddControllerTest {
    public HashMap generateValidInput() {
        HashMap<String, String> testInput = new HashMap<>();
        testInput.put("name", "TestName");
        testInput.put("weight", "10");
        testInput.put("color", "255, 255, 255");
        testInput.put("country", "Sweden");
        return testInput;
    }

    public HashMap generateInvalidInput() {
        HashMap<String, String> testInput = new HashMap<>();
        testInput.put("name", "TestName");
        testInput.put("weight", "10");
        testInput.put("color", "255, 255, 255");
        testInput.put("country", "Denmark");
        return testInput;
    }

    @Test
    void isValidRequest() {

    }

    @Test
    void addBoxValidInput() {
        HashMap<String, String> testData = generateValidInput();

        AddController controller = new AddController();
        boolean isValidInsertion = controller.addBoxToDB(testData);

        assertTrue(isValidInsertion);
    }

    @Test
    void addBoxInValidInput() {
        HashMap testData = generateInvalidInput();

        AddController controller = new AddController();
        boolean response = controller.addBoxToDB(testData);

        assertFalse(response);
    }

    @Test
    void respondToRequestTrue() {
        ResponseEntity shouldBeEqual = new ResponseEntity("Box has been added", HttpStatus.OK);

        AddController controller = new AddController();
        ResponseEntity response = controller.respondToRequest(true);

        assertEquals(shouldBeEqual, response);
    }

    @Test
    void respondToRequestFalse() {
        ResponseEntity shouldNotBeEqual = new ResponseEntity("Box has been added", HttpStatus.BAD_REQUEST);

        AddController controller = new AddController();
        ResponseEntity response = controller.respondToRequest(false);

        assertNotEquals(shouldNotBeEqual, response);
    }
}