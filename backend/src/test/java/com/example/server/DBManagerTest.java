package com.example.server;

import org.junit.jupiter.api.Test;

import java.sql.BatchUpdateException;
import java.sql.SQLException;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

class DBManagerTest {
    private final String validConString = "jdbc:mysql://localhost:3306/trial?serverTimezone=UTC";
    private final String validUsername = "root";
    private final String validPassword = "root";

    private final String inValidUsername = "test";

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
        testInput.put("color", "255.10000032323, 255, 255");
        testInput.put("country", "Sweden");
        return testInput;
    }

    @Test
    void openValidConnection() {
        DBManager dbManger = new DBManager();
        //Connect with VALID username
        assertDoesNotThrow(() -> dbManger.openDBConnection(this.validConString, this.validUsername, this.validPassword));
    }

    @Test
    void openInvalidConnection() {
        DBManager dbManger = new DBManager();
        //Connect with INVALID username
        assertThrows(SQLException.class, () -> dbManger.openDBConnection(this.validConString, this.inValidUsername, this.validPassword));
    }

    @Test
    void insertValidInput() {
        DBManager dbManager = new DBManager();
        boolean isValidInsertion = dbManager.addBox(this.generateValidInput());
        //Insert VALID input to DB
        assertTrue(isValidInsertion);
    }

    @Test
    void insertInvalidInput() {
        DBManager dbManager = new DBManager();
        boolean isValidInsertion = dbManager.addBox(this.generateInvalidInput());
        //Insert INVALID input to DB
        assertFalse(isValidInsertion);
    }
}