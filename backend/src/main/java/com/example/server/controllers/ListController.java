package com.example.server.controllers;

import com.example.server.Box;
import com.example.server.DBManager;
import com.example.server.ResponseBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@RestController
public class ListController {
    private final String _linkToSelf = "http://localhost:8081/api/listboxes";
    private final String _linkToAddBoxes = "http://localhost:8081/api/addbox";

    private final String _validRequestString = "Here is a list of the boxes you requested";
    private final String _invalidRequestString = "Could not retrieve the boxes you requested";

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/api/listbox")
    public ResponseEntity listBox() {
        return this.respondToRequest(this.getBoxesFromDB());
    }

    public List<Box> getBoxesFromDB() {
        return new DBManager().listBoxes();
    }

    public ResponseEntity respondToRequest(List<Box> retrievedData) {
        ResponseBody bodyContent = new ResponseBody();
        bodyContent.addLink("self", this._linkToSelf);
        bodyContent.addLink("addboxes", this._linkToAddBoxes);
        if (retrievedData.isEmpty()) {
            bodyContent.set_message(this._invalidRequestString);
            return ResponseEntity.badRequest().body(bodyContent.returnBody());
        } else {
            bodyContent.set_message(this._validRequestString);
            for(int i = 0; i < retrievedData.size(); i++) {
                Box boxToAdd = retrievedData.get(i);
                bodyContent.addBox(boxToAdd);
            }
            return ResponseEntity.accepted().body(bodyContent.returnBody());
        }
    }
}