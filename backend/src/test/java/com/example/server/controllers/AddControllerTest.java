package com.example.server.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

class AddControllerTest {
    private final String validStatusCode = "202 ACCEPTED";

    private HashMap<String, String> generateValidInput() {
        HashMap<String, String> testBox = new HashMap();
        testBox.put("name", "Test");
        testBox.put("weight", "20");
        testBox.put("color", "255, 255, 255");
        testBox.put("country", "Sweden");
        return testBox;
    }

    private HashMap<String, String> generateInvalidInput() {
        HashMap<String, String> testBox = new HashMap();
        testBox.put("name", "Test");
        testBox.put("weight", "20");
        testBox.put("color", "255, 255, 255");
        testBox.put("country", "Denmark");
        return testBox;
    }

    @Test
    void createBoxValidInput() {
        HashMap testBox = generateValidInput();

        AddController controller = new AddController();
        assertDoesNotThrow(() -> controller.createBox(testBox));
    }

    @Test
    void createBoxInValidInput() {
        HashMap testBox = generateInvalidInput();

        AddController controller = new AddController();

        assertThrows(IllegalArgumentException.class, () -> controller.createBox(testBox));
    }

    @Test
    void respondToRequestTrue() {
        HashMap testBox = generateValidInput();
        AddController controller = new AddController();
        ResponseEntity response = controller.addBox(testBox);
        assertEquals(this.validStatusCode, response.getStatusCode().toString());
    }

    @Test
    void respondToRequestFalse() {
        AddController controller = new AddController();
        ResponseEntity response = controller.respondToRequest(false);
        assertNotEquals(this.validStatusCode, response.getStatusCode().toString());
    }
}