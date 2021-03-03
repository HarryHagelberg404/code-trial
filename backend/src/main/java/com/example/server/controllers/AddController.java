package com.example.server.controllers;

import com.example.server.Box;
import com.example.server.CountryToWeightConverter;
import com.example.server.DBManager;
import com.example.server.ResponseBody;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
public class AddController {
    private final String boxNameKey = "name";
    private final String boxWeightKey = "weight";
    private final String boxColorKey = "color";
    private final String boxCountryKey = "country";

    private final String _linkToSelf = "http://localhost:8081/api/addbox";
    private final String _linkToListBoxes = "http://localhost:8081/api/listboxes";

    private final String _validRequestString = "Box has been added";
    private final String _invalidRequestString = "Could not add box, check your input";

    private Box _requestBox;

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/api/addbox")
    public ResponseEntity addBox(@RequestBody HashMap<String, String> body) {
        try {
            if (body.isEmpty()) return this.respondToRequest(false);

            Box newBox = createBox(body);
            boolean isValidInsertion = this.addBoxToDB(newBox);
            return this.respondToRequest(isValidInsertion);
        } catch (IllegalArgumentException e) {
            return this.respondToRequest(false);
        }
    }

    public Box createBox(HashMap<String, String> body) throws IllegalArgumentException {
            Box box = new Box();
            box.set_boxName(body.get(this.boxNameKey));
            box.set_boxColor(body.get(this.boxColorKey));

            double weight = Double.parseDouble(body.get(this.boxWeightKey));
            box.set_boxWeight(weight);

            String boxCountry = body.get(this.boxCountryKey);
            CountryToWeightConverter converter = new CountryToWeightConverter();
            double shipping = converter.stringToConvert(boxCountry, weight);
            box.set_boxShipping(shipping);

            this._requestBox = box;
            return box;
    }

    boolean addBoxToDB(Box boxToAdd) {
        return new DBManager().addBox(boxToAdd);
    }

    public ResponseEntity<?> respondToRequest(boolean isValidResponse) {
        //Create response body with REST-ful principles
        ResponseBody bodyContent = new ResponseBody();
        bodyContent.addBox(this._requestBox);
        bodyContent.addLink("self", this._linkToSelf);
        bodyContent.addLink("listboxes", this._linkToListBoxes);

        if (isValidResponse) {
            bodyContent.set_message(this._validRequestString);
            return ResponseEntity.accepted().body(bodyContent.returnBody());
        }
        else {
            bodyContent.set_message(this._invalidRequestString);
            return ResponseEntity.badRequest().body(bodyContent.returnBody());
        }
    }
}