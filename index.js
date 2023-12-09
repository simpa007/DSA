//CALL , APPLY AND BLIND METHOD IN JAVASCRIPT
let printFullName = function (city, state) {
	console.log(
		`${this.firstName} ${this.lastName} lives in ${city} in ${state}`
	);
};
let name = {
	firstName: "John",
	lastName: "Doe",
};

let name2 = {
	firstName: "simpa",
	lastName: "Emmanuel",
};
printFullName.call(name, "Asokoro", "Abuja");
printFullName.apply(name2, ["Ikeja", "Lagos"]);
let value = printFullName.bind(name, "Dallas", "Texas");
value();
