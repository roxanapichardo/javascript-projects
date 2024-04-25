// Declare and assign the variables below
let nameofshuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination");
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars=distanceToMarsKm*milesPerKm;
let hoursToMars=milesToMars/shuttleSpeedMph;
let daysToMars=hoursToMars/24


// Print the results of the space mission calculations below
console.log(daysToMars);
console.log(nameofshuttle+" will take "+ daysToMars+ " to reach Mars.");
// Calculate a trip to the moon below
let milestoMoon=distanceToMoonKm*milesPerKm;
let hourstoMoon=milestoMoon/shuttleSpeedMph
let daystoMoon=hoursToMars/24

// Print the results of the trip to the moon below
console.log(nameofshuttle+ "will take"+ daystoMoon+ "to reach the Moon.");