package com.example.server;

public class Box {
    private String _boxName = "";
    private double _boxWeight = 0;
    private String _boxColor = "";
    private double _boxShipping = 0;

    public String get_boxName() {
        return this._boxName;
    }

    public double get_boxWeight() {
        return this._boxWeight;
    }

    public String get_boxColor() {
        return this._boxColor;
    }

    public double get_boxShipping() {
        return this._boxShipping;
    }

    public void set_boxName(String _boxName) {
        this._boxName = _boxName;
    }

    public void set_boxColor(String _boxColor) {
        this._boxColor = _boxColor;
    }

    public void set_boxWeight(double _boxWeight) {
        this._boxWeight = _boxWeight;
    }

    public void set_boxShipping(double boxShipping) {
        this._boxShipping = boxShipping;
    }
}
