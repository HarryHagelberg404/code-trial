package com.example.server;

public class Box {
    private String _name;
    private int _weight;
    private String _color;
    private String _country;
    public Box(String name, int weight, String color, String country) {
        this.set_name(name);
        this.set_weight(weight);
        this.set_color(color);
        this.set_country(country);
    }

    public String get_name() { return this._name; }
    public void set_name(String name) { this._name = name; }

    public int get_weight() { return this._weight; }
    public void set_weight(int weight) { this._weight = weight; }

    public String get_color() { return this._color; }
    public void set_color(String color) { this._color = color; }

    public String get_country() { return this._country; }
    public void set_country(String country) { this._country = country; }
}
