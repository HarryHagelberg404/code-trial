package com.example.server;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CountryToWeightConverterTest {
    private final String validCountry = "Sweden";
    private final String invalidCountry = "Denmark";

    private final Double testWeight = 20.099;

    @Test
    void convertValidCountry() {
        CountryToWeightConverter converter = new CountryToWeightConverter();
        assertDoesNotThrow(() -> converter.stringToConvert(this.validCountry, this.testWeight));
    }

    @Test
    void convertInvalidCountry() {
        CountryToWeightConverter converter = new CountryToWeightConverter();
        assertThrows(IllegalArgumentException.class, () -> converter.stringToConvert(this.invalidCountry, this.testWeight));
    }
}