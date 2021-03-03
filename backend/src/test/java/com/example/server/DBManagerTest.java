package com.example.server;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class DBManagerTest {
    private final String validConString = "jdbc:mysql://localhost:3306/trial?serverTimezone=UTC";
    private final String validUsername = "root";
    private final String validPassword = "root";

    private final String inValidUsername = "test";

    public Box generateValidInput() {
        Box testBox = new Box();
        testBox.set_boxName("TestName");
        testBox.set_boxWeight(10);
        testBox.set_boxColor("255, 255, 255");
        testBox.set_boxShipping(10);
        return testBox;
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
    void retrieveBoxes() {
        DBManager dbManager = new DBManager();
        List<Box> boxList = dbManager.listBoxes();
        //Retrieve list of boxes NON empty
        assertTrue(boxList.size() > 0);
    }
}