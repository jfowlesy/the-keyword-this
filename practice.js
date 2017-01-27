//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
    //The this reference ALWAYS refers to (and holds the value of) an
    //object—a singular object—and it is usually used inside a function or a method,
    //although it can be used outside a function in the global scope.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // By default, this refers to the global object.
//1- When a function is called as a property on a parent object,
// this refers to the parent object inside that function.
//2 - When a function is called with the new operator, this refers to the newly created
//object inside that function.
//3 - When a function is called using call or apply, this refers to the first argument
//passed to call or apply.
//4- If the first argument is null or not an object, this refers to the global object.

  // 3) What is the difference between call and apply?

      //Answer
// The difference is that apply lets you invoke the function with arguments as an array;
//call requires the parameters be listed explicitly.
//A useful mnemonic is "A for array and C for comma."
  // 4) What does .bind do?

      //Answer
// We use the Bind () method primarily to call a function with the this value set explicitly.
//In other words, bind () allows us to easily set which specific object will
// be bound to this when a function or method is invoked.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user ={
  username: 'Gunnar',
  email: 'baDuh@hello.com',
  getUsername: function (){
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
    return this.year += 10;
  };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here

  var pruisYear = getYear.call(prius);
  var mustangYear = getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
