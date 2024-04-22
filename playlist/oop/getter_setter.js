class User{
    constructor(name,age,password)
    {
        this.age = age;
        this.name = name;
        this.password = password;
    }
    get password()
    {
        return this._password.toUpperCase()+"chinu";
    }
    set password(password)
    {
        this._password = password;
    }
}
let chinu = new User("chinu",21,"abc");
console.log(chinu.password);
// if we are defining getter then we need to defining setter also
// after defining getter and setter for age we need to remove the this.age = age from the constructor
// but this is ....
// so we will do this._age in setter
// using getter and setter what we can do is, we can store some x data in the database but show y data to the one who tries to access
// the name of the property, the getter and the setter should be the same

