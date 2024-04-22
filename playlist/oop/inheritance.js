class User
{
    constructor(username)
    {
        this.username = username;
    }
    sayName()
    {
        console.log(`Hi I am ${this.username}`);
    }
    static createID()
    {
        return `123`;
    }
}
class Teacher extends User
{
    constructor(username,teacherid)
    {
        super(username);
        this.teacherid = teacherid;
    }
    sayTeacherId()
    {
        console.log(`I am teacher ${this.teacherid}`)
    }
}
let user1 = new Teacher('chinu','257');
user1.sayName();
user1.sayTeacherId();

// STATIC PROPERTIES & METHODS
// belong to the class and not to any particular instance of an object
console.log(user1.createID()); // this will throw an error