package com.example.server;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ResponseBody {
    private String _message = "";
    private List<Box> _listOfBoxes = new ArrayList<>();
    private HashMap _listOfLinks = new HashMap();

    private final String _messageKey = "message";
    private final String _boxListKey = "boxes";
    private final String _linkListKey = "_links";

    public HashMap returnBody() {
        HashMap body = new HashMap<>();
        body.put(this._messageKey, this._message);
        body.put(this._boxListKey, this._listOfBoxes);
        body.put(this._linkListKey, this._listOfLinks);
        return body;
    }

    public void addBox(Box box) {
        this._listOfBoxes.add(box);
    }

    public void addLink(String linkName, String linkHref) {
        HashMap<String, String> linkMap = new HashMap<>();
        linkMap.put("href", linkHref);
        // TODO add description to links
        this._listOfLinks.put(linkName, linkMap);
    }

    public void set_message(String _message) {
        this._message = _message;
    }
}
