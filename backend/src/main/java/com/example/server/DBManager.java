package com.example.server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DBManager {

    public DBManager() {

    }

    public static void init() {
        try {
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/trial?serverTimezone=UTC", "root", "root"
            );
            Statement stmt = con.createStatement();
            String queryString = "CREATE TABLE boxes(name varchar(20), weight int, color varchar(10), country varchar(20))";
            ResultSet rs = stmt.executeUpdate(queryString);
            @Modifying
            @Transactional
            @Query
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public String addBox(Box box) {
        return "Box has been added!";
    }

    public String listBox() {
        return "Giving you a list of boxes";
    }
}
