let Guest_List:string[] = ["Ali","Zaid","Fahad","Yahya",];

for(let i = 0; i<Guest_List.length; i++){

    console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}

let absent_Guest:string = "Ali";

let new_Guest:string = "mohsin";

Guest_List[0] = new_Guest;

for(let i = 0; i<Guest_List.length; i++){

    console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}
console.log(`${absent_Guest} is not coming to our party.`);
