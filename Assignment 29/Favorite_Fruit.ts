/*Favorite Fruit: Make a array of your favorite fruits,
 and then write a series of independent if statements that check for certain fruits in your array.*/

//Make a array of your three favorite fruits and call it favorite_fruits.

/*Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let FavoriteFruit : string[] = ["Apple","Banana","Orange"];

if(FavoriteFruit.includes("Apple")){
    console.log(" I really like Apple");
}

if(FavoriteFruit.includes("Banana")){
    console.log(" I really like Banana");
}

if(FavoriteFruit.includes("Orange")){
    console.log(" I really like Orange");
}

if(FavoriteFruit.includes("Watermelon")){
    console.log(" I really like Watermelon");
}

if(FavoriteFruit.includes("Mango")){
    console.log(" I really like Mango");
}