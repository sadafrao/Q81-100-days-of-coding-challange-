// Q81
// this function show every details about object
function logobjectproperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, " : ").concat(obj[property]));
    }
}
// using a person with a car objec
logobjectproperties({ make: "toyota", model: "corolla", year: 2024, color: "red" });
