package com.example.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ListController {

    @GetMapping("/listbox")
    public ResponseTransfer listBox() {

        return new ResponseTransfer("Thanks For Posting!!!");
    }
}