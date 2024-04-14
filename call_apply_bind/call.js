function one(naam){
    this.name = naam;
    console.log("one called");
}
function two(naam,umar)
{
    // one(naam); first step doesn't work because this.name is set to naam for the one not for the two
    // one.call(naam); // second step to doesn't work because we haven't set the reference
    one.call(this,naam); // this works because now we have specified that the reference is of this object
    this.age = umar;
}
const user1 = new two("chinu",21);
console.log(user1);