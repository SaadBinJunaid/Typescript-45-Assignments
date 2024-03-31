 let Guest_List:string[] = ["Ali","Zaid","Fahad","Yahya",];

/* for(let i = 0; i<Guest_List.length; i++){

     console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
 }*/

let absent_Guest:string = "Ali";

let new_Guest:string = "mohsin";

Guest_List[0] = new_Guest;

for(let i = 0; i<Guest_List.length; i++){

    console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}
console.log(`${absent_Guest} is not coming to our party.\n`);

console.log("Good news! we have found a big table so now we can invite 3 more guests.");

Guest_List.unshift("ahsan");
Guest_List.splice(2,0,"fayaz");
Guest_List.push("faiz");

for(let i = 0; i<Guest_List.length; i++){

    console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}
