//countries
var countries = ['Canada', 'Chile', 'France', 'UAE', 'Brazil'];

var askerFunction = function (question) {
  // console.log(question, ' the questions');
  var asker = prompt(question, 'im prompting');
  //   userGuess.push(question);
  // var smallObj.asker = question[];
  // console.log(question,'smallObj.asker[i]');
  return asker;
};


firstObj = {
  country : 'Canada',
  correctAnswer : 'yes',
  boolCorrect : false,
  userGuess : askerFunction(this.country),
  attempts : [],
  correctMessage : 'yep, ive been to Canada',
  wrongMessage : 'sorry, guess again',
  hints : ['maple syrup', 'hockey','moose']
};






//something like this
// var ask = askedFunction () {var asked = prompt('have I been to' + firstObj.country) return asked};

//eventually it'll look something like this.
// firstObj.prototype.askerFunction = {
//     if (if userGuess.includes(correctAnswer)){
//     this.boolCorrect = true;
//     this.attempts++;
//     };



//look in the read me file for 2 examples of smallObject examples that could go in the big objects.



// these global vars ought to be migrated into each small object.
CorrectAnswer = ['y', 'n,', 'y', 'y'];
boolCorrect = false;
var correctCounter = [];
userGuess = [];

var bigObj = {};
var smallObj = {
  asker : [],
};

//pseudocode for the concept of setting smallObj.asker equal to the first question in the array of countries
//
// smallObj.asker = CorrectAnswer[0];


//testing for loop
for (var j = 0; i < countries.length; i++) {
  console.log(countries[j]);
}
// for loop test passes, which of course it would, the problem was further down the line


for (var i = 0; i < countries.length; i++) {
  // console.log(countries[i], 'show');

  // i can comment out this askerFunction since i migrated it to the top... think about a good place to put it.
  // -------------askerFunction-------------------
  var askerFunction = function (question) {
    // console.log(question, ' the questions');
    var asker = prompt(question, 'im prompting');
    userGuess.push(question);

    // var smallObj.asker = question[];
    // console.log(question,'smallObj.asker[i]');

    return asker;
  };

//-----------------<<<askerFunction-----------------------------------

// ???-------------does smallObj need an [i]?
// well, it depends on how to think about the small objects, if each smallObject is single collection of a question, answer, bool, userGuess, etc... then no, it wouldn't need an iterator, but if considering another class of small objects, like a smallObject that just has an array of questions, then might consider an iterator, but the goal is to get away from the iterator and use methods like .includes to replace iteration.    
// ???------<<<----does smallObj need an [i]?-------------------------



//------------------------- smallObject vs. bigObject distinction---------------------------
// in coming back later and looking at this, it looks like the following pseudocode is the idea of the bigObject, not small, the iterator implies that a for loop is going to create a new key value pair for each country, correctAnswer, etc, but that's the job of the bigObject, to contain collections of info, while smallObjects, just contain single instances for simplicity and are managed collectively with bigObjects.

  // smallObj = {
  //     countries[i]: [i],
  //     CorrectAnswer[i]: [i],
  //     'boolCorrect': boolCorrect;
  //     userResponse: userGuess[i];
  // }

//-------------<<<--------- smallObject vs. bigObject distinction---------------------------



//------------------------thinking of ways to feed smallObjects info into big objects-------
//   let xHolder = [];
//     let [i] = Object.entries( smallObj.asker);
//     xHolder.push(i);
// //   bigObj[i] = xholder[i];
//-------------<<<--------thinking of ways to feed smallObjects info into big objects-------


//-------------an array iterator way of thinking of calling askerFunction on countries
// The smallObject version is to call ask function internally as a key that calls the value
// which is a call on askerFunction, passing this.country
//   askerFunction(countries[i]);
//-------------an array iterator way of thinking of calling askerFunction on countries

//-------------------------- overburdening a for loop---------------------------
// this is shoving too much in a for loop, need to think about discrete smallObjects, bigObjects, functions and loops that will streamline, and make naked for loops much more targeted. 
//----------<<<------------- overburdening a for loop---------------------------

}


//askerFunctionPrompt
// console.log(askerFunction(countries[0]));




//   askerFunction(countries[i]);



//     //checking countries , countries if they inclue the user response
//   var functionPromptedEval = function (prompted, countries, bool) {
//     if (countries.includes(prompted === a[a]))
//       bool = true;
//     correctResponse.push(prompted);
//     alert('you got it!');

//   };



// }
// //for
// // functionPromptedEval(askerFunction(prompted, countries, boolCorrect));

// //




// var myObj = {};
// for (var i = 0; i < countries.length; i++) {
//   myObj[i] = countries[i];
// }




//takes in a guess and see if that guess is included in the smallobjs countries list, should return true if that guess is in the array
// var isItThere = function (guess) {
//   var doesItInclude = countries.includes(guess);
//   console.log(doesItInclude);
//   return doesItInclude;
// };


// isItThere(userGuess[i]);

// isItThere[i] contains a boolean of whether the user guess was true or not, that var is called doesItInclude.

//the global variable array that holds it is called boolCorrect

// boolCorrect;

//function if boolCorrect[i] = true, then push it into userGuess.
// userGuess;


// var AreTheyRight = function(userGuess)
// if (isItThere(userGuess[i] === true)) {
//     alert('there!');
//     console.log(userGuess[i])
//     correctCounter ++;


// } else if (isItThere(!userGuess)) {
//     alert('your guess is not there');
// }

// AreTheyRight(userGuess[i])






//   !!!!!!!!!!!!!!!!!!     smallObjt



// smallObjcheck = {countries[0] : 0, CorrectAnswer[i] : 0. boolCorrect[0] : userGuess[0]}

//     bigObj[i] = smallObj;



// for(var i = 0; i < countries.length; i ++){
//     var checker = [];
//     checker.length = countries.length;
//     var RightIterator = countries[i];
//     var right = RightIterator.includes('Canada');
//     console.log(right);

// }