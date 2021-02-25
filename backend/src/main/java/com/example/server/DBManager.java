package com.example.server;

import org.json.JSONArray;
import org.json.JSONObject;

import javax.swing.plaf.nimbus.State;
import javax.xml.transform.Result;
import java.sql.*;
import java.util.HashMap;

public class DBManager {
    private final String connectionString = "jdbc:mysql://localhost:3306/trial?serverTimezone=UTC";
    private final String username = "root";
    private final String password = "root";

    public DBManager() {
        this.init();
    }

    public void init() {
        try {
            Connection con = this.openDBConnection(this.connectionString, this.username, this.password);
            con.createStatement();
            String queryString = "CREATE TABLE IF NOT EXISTS boxes(name varchar(40), weight double, color varchar(18), shipping double)";
            PreparedStatement preparedStatement = con.prepareStatement(queryString);
            preparedStatement.execute();
            con.close();
        } catch (SQLException e) {
            //Exit with code 1 to see error
            System.exit(1);
        }
    }

    public Connection openDBConnection(String connectString, String userName, String passWord) throws SQLException {
        return DriverManager.getConnection(
                connectString, userName, passWord
        );
    }

    public boolean addBox(HashMap<String, String> dataMap) {
        try {
            Connection con = this.openDBConnection(this.connectionString, this.username, this.password);
            String queryString = "INSERT INTO boxes(name, weight, color, shipping) VALUES(?, ?, ?, ?)";
            PreparedStatement preparedStatement = con.prepareStatement(queryString);

            String name = (String) dataMap.get("name");
            double weight = Double.parseDouble((String) dataMap.get("weight"));
            String color = (String) dataMap.get("color");
            String country = (String) dataMap.get("country");

            CountryToWeightConverter converter = new CountryToWeightConverter();
            double shipping = converter.stringToConvert(country, weight);

            preparedStatement.setString(1, name);
            preparedStatement.setDouble(2, weight);
            preparedStatement.setString(3, color);
            preparedStatement.setDouble(4, shipping);

            int queryResult = preparedStatement.executeUpdate();
            con.close();

            return true;
        } catch (IllegalArgumentException | SQLException e) {
            return false;
        }
    }

    public JSONArray listBoxes() {
        try {
            Connection con = this.openDBConnection(this.connectionString, this.username, this.password);
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
            resultset.close();
            con.close();
            return returnArr;
        } catch (SQLException e) {
            return new JSONArray();
        }
    }
}
