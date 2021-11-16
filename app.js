//Question no:1

// function dateFunction(){
// var date = new Date();
// document.write(date);

// }
// dateFunction();

//Question no:2

// function greeting() {
//     var firstNmae ="Uzma";
//     var lastNmae = "Uzzi";
//     var fullName = firstNmae + " " + lastNmae;
//     document.write("Hello " + fullName)

// }
// greeting()

//Question no:3

// function add() {

//     var num1 = +prompt("Enter number");
//     var num2 = +prompt("Enter number");
//     var sum = num1 + num2;
//     return sum;

// }
// var sum =0
// document.write(add(sum));


//Question no:4


// function subtract(n1, n2) {



//     document.write(n1 - n2)
// }

// subtract(12, 78);



//Question no:5

// function squar(number){

//     var sqr = number**2;

//     return sqr;

// }

// var num = +prompt("Enter number");
// var result=  (squar(num));
// document.write(result);


//Question no:6


// function factorial() {
//     var num = +prompt("Enter a number")
//     var factrial = 1;
//     if (num < 0) {
//         document.write("Can't compute the factorial")

//     }
//     else {
//         for (i = 1; i <= num; i++) {
//             factrial = factrial*i;
//             console.log(factrial)
//         }

//         document.write(num+"!"+ "= "+ factrial)

//     }

// }

// factorial()


//Question no:7


// function counting() {
//     var start = +prompt("Enter start number");
//     var end = +prompt("Enter end number");

//     for (i = start; i <= end; i++) {

//         document.write(i + "<br>");
//     }

// }

// counting();


//Question no:8

// function hyp(b, h) {

//     function sqr(x) {
//         return (x * x)

//     }

//     return Math.sqrt(sqr(b) + sqr(h));


// }
// var num1 = +prompt("Enter base");
// var num2 = +prompt("Enter perp");
// var result = hyp(num1, num2);
// document.write(result);



//Question no:9


// function area(weidth,hight){

// return weidth*hight;

// }
// var hight =20;
// var ar = area(23,hight);
// document.write(ar);

//Question no:10

// function palindrome() {
//     var check = "";
//     var plWord = prompt("Enter Word");
//     for (i = plWord.length-1; i >= 0; i--) {
//         check += plWord[i];

//     }

//     if(check===plWord){
//         document.write("it's palindrome word ");
//     }
//     else{
//         document.write("it's not palindrome word");
//     }
// }

// palindrome();



//Question no:11



//Question no:12

// function longestword(str) {
//     document.write(str + "<br>")
//     var arr = str.split(" ");
//     var lgword = "";

//     for (i = 0; i < arr.length; i++) {
//         var ind = arr[i];
//         console.log(ind);
//         if (ind.length > lgword.length) {
//             lgword = ind;
//             console.log(lgword);
//         }
//     }


//     return lgword;

// }

// var rs = longestword("Web development Tutorial");
// document.write(rs);

//Question no:13


// function counter(string, letter) {

//     var cout = "";
//     for (i = 0; i < string.length; i++) {
//         if (string.charAt(i) === letter) {

//             cout++;
//         }

//     }
//     return cout;

// }



// var ct = counter("JSResource.com", "o");
// document.write(ct);

//Question no:14

// function circumfrance() {

//     var radius = 20;
//     var pai = 3.142;
//     var circle = 2 * pai * radius
//     document.write("Circumference of circle " + circle)

// }
// circumfrance();


// function area(){

//     var radius = 20;
//     var pai = 3.142;
//     var area = 2*pai*radius**2; 
//     document.write(area);

// }
// area();
