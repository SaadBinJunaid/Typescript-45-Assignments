"use strict";
let Guest_List = ["Ali", "Zaid", "Fahad", "Yahya",];
/* for(let i = 0; i<Guest_List.length; i++){

     console.log("\nDear Mr." +Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
 }*/
let absent_Guest = "Ali";
let new_Guest = "mohsin";
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log("\nDear Mr." + Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}
console.log(`${absent_Guest} is not coming to our party.\n`);
console.log("Good news! we have found a big table so now we can invite 3 more guests.");
Guest_List.unshift("ahsan");
Guest_List.splice(2, 0, "fayaz");
Guest_List.push("faiz");
for (let i = 0; i < Guest_List.length; i++) {
    console.log("\nDear Mr." + Guest_List[i] + ",\n\nit is our pleasure to invite you to in our party.\n\nThank You!\n");
}
console.log("\nsorry you are not invited because we can't arrange big table,but two peoples are still invited.\n");
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`sorry Mr. ${remove_Guest} ,you are not invited for dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log("\nDear Mr." + Guest_List[i] + ",\n\nyou are still invited in the party.\n\nThank You!\n");
}
Guest_List.splice(0, 2);
console.log(Guest_List);
