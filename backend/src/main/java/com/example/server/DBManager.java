package com.example.server;

import org.json.JSONArray;
import org.json.JSONObject;
import java.sql.*;
import java.util.HashMap;

public class DBManager {

    public DBManager() {
        this.init();
    }

    public void init() {
        try {
            Connection con = this.openDBConnection();
            Statement stmt = con.createStatement();
            String queryString = "CREATE TABLE IF NOT EXISTS boxes(name varchar(40), weight double, color varchar(15), shipping double)";
            PreparedStatement preparedStatement = con.prepareStatement(queryString);
            preparedStatement.execute();
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    private Connection openDBConnection() throws SQLException {
        return DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/trial?serverTimezone=UTC", "root", "root"
        );
    }

    public String addBox(HashMap dataMap) {
        try {
            Connection con = this.openDBConnection();
            String queryString = "INSERT INTO boxes(name, weight, color, shipping) VALUES(?, ?, ?, ?)";
            PreparedStatement preparedStatement = con.prepareStatement(queryString);

            String name = (String) dataMap.get("name");
            double weight = Double.parseDouble((String) dataMap.get("weight"));
            String color = (String) dataMap.get("color");
            String country = (String) dataMap.get("country");

            CountryToDoubleConverter converter = new CountryToDoubleConverter();
            double shipping = converter.stringToConvert(country, weight);

            preparedStatement.setString(1, name);
            preparedStatement.setDouble(2, weight);
            preparedStatement.setString(3, color);
            preparedStatement.setDouble(4, shipping);

            preparedStatement.execute();
            con.close();

            return "Box has been added!";
        } catch (Exception e) {
            System.out.println(e);
            return "Could not add box!";
        }
    }

    public JSONArray listBoxes() throws SQLException {
        Connection con = this.openDBConnection();
        String queryString = "SELECT * FROM boxes";
        PreparedStatement preparedStatement = con.prepareStatement(queryString);
        ResultSet resultset = preparedStatement.executeQuery(queryString);

        JSONArray returnArr = new JSONArray();
        while (resultset.next()) {
            JSONObject currEntity = new JSONObject();

            currEntity.put("name", resultset.getString("name"));
            currEntity.put("weight", resultset.getDouble("weight"));
            currEntity.put("color", resultset.getString("color"));
            currEntity.put("shipping", resultset.getDouble("shipping"));
            returnArr.put(currEntity);

        }
        con.close();
        return returnArr;
    }
}
