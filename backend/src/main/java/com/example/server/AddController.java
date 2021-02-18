package com.example.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class AddController {
    private DBManager _dbManager = new DBManager();

    @PostMapping("/addbox")
    public ResponseTransfer addBox(String name, int weight, String color, String country) {
        String respMessage = this._dbManager.addBox(new Box(name, weight, color, country));

        return new ResponseTransfer(respMessage);
    }
}