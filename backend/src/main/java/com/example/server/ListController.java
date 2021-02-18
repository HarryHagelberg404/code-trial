package com.example.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ListController {
    private DBManager _dbManager = new DBManager();

    @GetMapping("/listbox")
    public ResponseTransfer listBox() {
        String respMessage = this._dbManager.listBox();

        return new ResponseTransfer(respMessage);
    }
}