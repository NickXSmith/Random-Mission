//set up list of cities in array
const cities = ["Paris, France", "Berlin, Germany", "Moscow, Russia", "London, England" , "Washignton D.C., USA", "Cairo, Egypt", "Stockholm, Sweden"]
//set up list of contacts
const contacts = ["a woman with a large red hat and black scarf.", "a suited man with umbrella and breifcase.", "a man with a large scar across his left eye and an orange tie.", "a woman with wire-rimmed glasses and a sunhat.", "a woman in a flowered dress and missing her right ring finger.", "a man with a black trenchcoat across from the hot-dog stand."]
//set up passcode
const passcodes = ["The weather is brisk and nippy today.", "Did you catch the A-13 bus to get here?", "Have you tried Megliani's spaghetti?", "Did I see you at the dentist yesterday?"]
//function to randomly pick a random number wihtin the array length and assign them to a variable
function randomNumber(arr) {
    let length = arr.length;
    let randomN = Math.floor(Math.random() * length)
    return randomN;
}
//assign each array a random number
const city = cities[randomNumber(cities)];
const contact = contacts[randomNumber(contacts)];
const passcode = passcodes[randomNumber(passcodes)];
//print message
console.log("Your mission, should you choose to accept is, is:")
console.log(`Travel to ${city}.`);
console.log(`Once there you will meet your contact, look for ${contact}.`);
console.log(`The passphrase is ${passcode}.`);
console.log("The primary target is highly classified information on an encrypted drive. You will need to infiltrate and obtain.");
console.log("The contact will have further details.");



//timer function
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  delay(1500).then(() => console.log('This message will self-destruct in: 10...'));
  delay(2500).then(() => console.log('9...'));
  delay(3500).then(() => console.log('8...'));
  delay(4500).then(() => console.log('7...'));
  delay(5500).then(() => console.log('6...'));
  delay(6500).then(() => console.log('5...'));
  delay(7500).then(() => console.log('4...'));
  delay(8500).then(() => console.log('3...'));
  delay(9500).then(() => console.log('2...'));
  delay(10500).then(() => console.log('1...'));
  delay(11500).then(() => console.log("BOOM!"));