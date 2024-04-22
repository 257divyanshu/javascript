// AFTER ES6

// constructor is called by the new keyword
// class User{
//     constructor(username,email,password)
//     {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){ // a method
//         return `${this.password}abc`;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const user1 = new User('chinu','chinu@chinu.com',"123");
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

// BTS
function User(username, email,password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
let user1 = new User("chinu","chinu@chinu.com",321);
console.log(user1.encryptPassword());