// CHANING VALUE OF MATH.PI
// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
// writable is set to false

// IF ENUMERABLE IS SET TO FALSE
// then we won't be able to iterate over the object using a loop

let user = {
    name: "chinu",
    age: 21,
    intro: function(){
        console.log(`Hi I am ${this.name} I am ${this.age} years old`);
    },
};
console.log(Object.getOwnPropertyDescriptor(user,'name'));
// iterating over the propertyes of an object using for of loop
Object.defineProperty(user,'name',{ // now name is not iterable
    enumerable : false
})
Object.defineProperty(user,'age',{ // now age is not writable
    writable : false
})
user.age = 22;
for(let [kee,valu] of Object.entries(user))
{
    if(typeof valu != 'function')
    {
        console.log(`${kee} : ${valu}`)
    }
}