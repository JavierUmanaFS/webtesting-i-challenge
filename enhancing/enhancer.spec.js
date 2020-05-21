const  { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe("enhancer", () => {
  describe("repair(item)", () => {
    // Accepts  an item object and returns a new item with the durability restored to 100
    it("Should accept and item object and return a new item with the durability retored to 100", () =>{
      const item = { name: "steve", durability: 4, enhancement: 20}
      // console.log("Before repair",item.durability, "After repair" , repair(item));
      repair(item);
      expect(item.durability).toBe(100);
    })
    it("strings as number value", () =>{
      const item = { name: "javi", durability:"fsfag", enhancement:"3fsa3f"}
      // console.log("String as number => durability", item.durability, "=> enhancement", item.enhancement, repair(item));
      expect(item.durability && item.enhancement === Number).toBe(false)
    })
    it("Should throw an error if the argument is not an object", () =>{
      const array = [];
      // expect(() => { repair(array)}).toThrow();
      expect()
    })
  })
  
//     // Accepts an item object  
//     // returns a new item object modified according to the rules,
//     //  defined by the client for enhancement success
//   describe("succeed(item)", () =>{
//    it("Should return increase items enhancement by +1", () =>{
//       const item = { name: "javi", durability: 5, enhancement: 19}
//       expect(succeed(item));
//       expect(item.enhancement).toBe(20);
//     })

//     it("Should not change the enhancement level when at max level 20", () =>{
//       const item = { name: "javi", durability: 5, enhancement: 20}
//       expect(succeed(item));
//       expect(item.enhancement).toBe(20);
//     });

//     it.todo("Should not change durability");
//   })


// // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// // If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
//   describe("fail(item)", () => {
//     it.todo("Should decrease durability by 5 if enhancement is less than 15")
//     it.todo("Should decrease durability by 10")
//     // it.todo()
//   })
})