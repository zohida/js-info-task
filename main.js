//////////1/////////
// let name,
//     admin;

//     name = "John";
//     admin = name;
//     alert(admin);

////////--------------------2--------------------------------//////
// let planet = 'Earth';
// let visitor = prompt(name);
// alert(planet, name);

////////--------------------3--------------------------------//////

// let name = "Ilya";

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // hello Ilya


////////--------------------4--------------------------------//////
// let name = prompt("What's your name?");
// alert(name);


////////--------------------5--------------------------------//////
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// console.log(c,d);


////////--------------------6--------------------------------//////
// let a = 2;

// let x = 1 + (a *= 2); 
// a=2; x=5

////////--------------------7--------------------------------//////
// "" + 1 + 0  //"10"
// "" - 1 + 0 // -1
// true + false //1
// 6 / "3" // 2
// "2" * "3" //6
// 4 + 5 + "px" //"9px"
// "$" + 4 + 5 //"$45"
// "4" - 2 //2
// "4px" - 2 //NaN
// "  -9  " + 5 //"-95 "
// "  -9  " - 5 //-14
// null + 1  //1
// undefined + 1 //NaN
// " \t \n" - 2 //-2

////////--------------------8--------------------------------//////


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + +b);

////////--------------------8--------------------------------//////


// 5 > 4  //true
// "apple" > "pineapple" //false
// "2" > "12"  //true
// undefined == null  // true
// undefined === null  // false
// null == "\n0\n" //false



// if ("0") {
//     alert( 'Hello' );
//   }  //==> true because 0 is in the string


// let value = prompt('What is the "official" name of JavaScript?', '');

//     if (value == 'ECMAScript') {
//       alert('Right!');
//     } else {
//       alert("You don't know? ECMAScript!");
//     }


// let value = prompt('Type a number');

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }


// let result;
//  result = (a + b < 4) ? "Below" : "Over";


// let message = (login == "Employee") ? "Hello" :
//             (login == "Director") ? "Greetings" :
//             (login == "") ? "NO login"   : 
//             "";

// alert( null || 2 || undefined ); //2

// alert( 1 && null && 2 ); // null

// alert( alert(1) && alert(2) ) // 1