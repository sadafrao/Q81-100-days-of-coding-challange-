// Q81
// This function show every details about object
function logobjectproperties (obj : object){
for (let property in obj) {
    console.log(`${property} : ${obj[property]}`)
    }
}
// using a person with a car objec
logobjectproperties({make : "toyota",model : "corolla" , year : 2024 , color : "red"});

