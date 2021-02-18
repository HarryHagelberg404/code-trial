package com.example.server;

public class ResponseTransfer {
    private String _text;

    public ResponseTransfer(String text) {
        setText(text);
    }
    public String getText() { return this._text; }
    public void setText(String text) { this._text = text; }
}