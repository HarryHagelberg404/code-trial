package com.example.server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Box {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String _name;
    private int _weight;
    private String _color;
    private String _country;

    public String get_name() { return this._name; }
    public void set_name(String name) { this._name = name; }

    public int get_weight() { return this._weight; }
    public void set_weight(int weight) { this._weight = weight; }

    public String get_color() { return this._color; }
    public void set_color(String color) { this._color = color; }

    public String get_country() { return this._country; }
    public void set_country(String country) { this._country = country; }
}
