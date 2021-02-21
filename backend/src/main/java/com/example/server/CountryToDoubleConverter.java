package com.example.server;

public class CountryToDoubleConverter {
    final String _sweden = "Sweden";
    final String _china = "China";
    final String _brazil = "Brazil";
    final String _australia = "Australia";

    final double _swMultiplier = 1.3;
    final double _chMultiplier = 4;
    final double _brMultiplier = 8.6;
    final double _auMultiplier = 7.2;

    public double stringToConvert(String countryString, double weight) {
        double shippingCost = 0;

        if (countryString.equals(this._sweden)) shippingCost = weight * this._swMultiplier;
        else if (countryString.equals(this._china)) shippingCost = weight * this._chMultiplier;
        else if (countryString.equals(this._brazil)) shippingCost = weight * this._brMultiplier;
        else if (countryString.equals(this._australia)) shippingCost = weight * this._auMultiplier;

        return shippingCost;
    }
}
