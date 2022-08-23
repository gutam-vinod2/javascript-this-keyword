//create an object:
const person = {
    firstName : "vinod",
    lastName  : "kumar",
     id :123,
   fullName : function() {
    return this.firstName +"  " +this.lastName;
   }
};

document.getElementById("demo").innerHTML = person.fullName();
