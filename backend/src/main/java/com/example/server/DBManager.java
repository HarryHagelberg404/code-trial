package com.example.server;

import org.json.JSONArray;
import org.json.JSONObject;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

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

    public boolean addBox(Box box) {
        try {
            Connection con = this.openDBConnection(this.connectionString, this.username, this.password);
            String queryString = "INSERT INTO boxes(name, weight, color, shipping) VALUES(?, ?, ?, ?)";
            PreparedStatement preparedStatement = con.prepareStatement(queryString);

            preparedStatement.setString(1, box.get_boxName());
            preparedStatement.setDouble(2, box.get_boxWeight());
            preparedStatement.setString(3, box.get_boxColor());
            preparedStatement.setDouble(4, box.get_boxShipping());

            preparedStatement.executeUpdate();
            con.close();

            return true;
        } catch (SQLException e) {
            return false;
        }
    }

    public List<Box> listBoxes() {
        List<Box> returnList = new ArrayList<>();
        try {
            Connection con = this.openDBConnection(this.connectionString, this.username, this.password);
            String queryString = "SELECT * FROM boxes";
            PreparedStatement preparedStatement = con.prepareStatement(queryString);
            ResultSet resultset = preparedStatement.executeQuery(queryString);

            while (resultset.next()) {
                Box boxToAdd = new Box();
                boxToAdd.set_boxName(resultset.getString("name"));
                boxToAdd.set_boxWeight(resultset.getDouble("weight"));
                boxToAdd.set_boxColor(resultset.getString("color"));
                boxToAdd.set_boxShipping(resultset.getDouble("shipping"));

                returnList.add(boxToAdd);
            }
            resultset.close();
            con.close();
            return returnList;
        } catch (SQLException e) {
            return returnList;
        }
    }
}
