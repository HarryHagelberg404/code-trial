package com.example.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class AddController {
    private DBManager _dbManager = new DBManager();

    @PostMapping("/addbox")
    public ResponseTransfer addBox(String name, int weight, String color, String country) {
        Box box = new Box();
        box.set_name(name);
        box.set_weight(weight);
        box.set_color(color);
        box.set_country(country);
        String respMessage = this._dbManager.addBox(box);

        return new ResponseTransfer(respMessage);
    }
}