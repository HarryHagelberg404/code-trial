# Backend assumptions

In this artifact I talk about my assumptions, problems faced as well as alternative solutions that I didn't take use of.

#### Requirements:

- **Java**
- **MySQL**

#### Spring as a web server

I took use of the application framework **Spring** as it's a very popular framework when building web applications. Spring makes it relatively simple to handle requests as well as creating responses for the client. The backend server was created to comply with the principles of **REST**.

#### Setting up database

I hosted my **MySQL** Database on PHPMyAdmin for convenience when developing.
For the application to function the person who tests it needs to have a local DB available, ex. PHPMyAdmin.

#### Receiving client requests

When recieving requests I took use of Sping's @RestController as well as its @PostMapping import to intercept the requests (In this case "/api/addbox"). I declared the @RequestBody as a HashMap<String, String> to be able to get the key value pairs from the body.

The @GetMapping

#### Converting country type to shipping cost

I converted the selected country type into a shipping cost accordingly:

- I declared a class called CountryToIntConverter
- I declared constants for the request "country-string" to be checked such as for example:

```
final String _sweden = "Sweden";
final double _swMultiplier = 1.3;
```

The method "stringToConvert" took a String countryString and an double weight as parameters then sent the string through an if-statement checking which country the user selected. After the correct country comparison was decided the countries corresponding multiplier was applied to the weight.

#### Responding to client

If the database insertion was made correctly the user would be responded with the data "Box has been added" and the correct status code which it could present in the client. Else it would be responded with "Could not add box" and the correct status code.

If the database selection of all entities where made correct the user would be responded with JSON containing the entities.

#### Alternative solutions:

I initially used my database initialization in static method on application startup but later changed it and separeated the connection to a separate method that every method in need could take use of.

I initially thought to use hibernte as its an easy to use database-framework wich translates OO models to database entities. The requirements specifically said: "As we don't use ORM frameworks or query builders, we expect you to write your own SQL statements." thus I didn't use hibernate.
