module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.
function succeed(item) {
 if(checkItem(item)){
   if(item.enhancement === 20){
     return null;
   } else {
     return item.enhancement ++ ;
   }
 } else {
   return null;
 }
}

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
function fail(item) {
  if(checkItem(item)){
    if( item.enhancement < 15) {
      return item.durability - 5; 
    } else if(item.enhancement >= 15) {
      return item.durability - 10;
    } else if(item.enhancement > 16) {
      return item.enhancement --;
    } else {
      return null;
    }
  } else {
      return null;
    }
}

// accepts an item object and returns a new item with the durability restored to 100.
function repair(item) {
  if(checkItem(item)){
    return  item.durability = 100;
  } else {
    return undefined;
  }
}

function get(item) {
  return { ...item };
}

// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.
function checkItem(item) {
  if(item.name && Number(item.durability)  && Number(item.enhancement)){
     return item.enhancement <= 20 && item.enhancement >= 0 &&
    item.durability <= 100 && item.durability >= 0;
  } else if(item.name !== typeof("string") ||
        item.durability !== typeof(Number) || 
        item.enhancement !== typeof(Number)
 ) {
   return console.log("Please provide a number for durability and enhancement. Name is a string ")
   } else {
    return console.log("we have a problem", item.name, item.enhancement, item.durability)
  }
} 

