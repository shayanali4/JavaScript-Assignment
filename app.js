//           Chapter # 1 : Question # 1

alert("Welcome to my website");

//           Chapter # 1 : Question # 2

alert("Error ! Please enter a valid password.");

//           Chapter # 1 : Question # 3

alert("Welcome to JS Land... \n Happy Coding !");

//           Chapter # 1 : Question # 4

alert("Welcome to JS Land...");
alert("Happy Coding !");

//           Chapter # 1 : Question # 5

// write this line of code in browser developer console 

alert("Hello... I can run JS through my web browser's console");

//           Chapter # 1 : Question # 6
//           Chapter # 1 : Question # 7 (a)

// write this code in head section of html file

/* <script text\javascript>
alert("hello");
</script> */

//           Chapter # 1 : Question # 7 (b)

// write this code in starting of body section of html file

// <script text\javascript>
// alert("hello");
// </script>

//           Chapter # 1 : Question # 7 (b)

// write this code in middle of body section of html file

// <script text\javascript>
// alert("hello");
// </script>

//           Chapter # 1 : Question # 7 (d)

// write this code in end of body section of html file

// <script text\javascript>
// alert("hello");
// </script>

//                 End of chapter # 1

//                 Start of chapter # 2

//           Chapter # 2 : Question # 1

var username ='';

//           Chapter # 2 : Question # 2

var myName = 'Shayan Ali Shaikh';
alert(myName);

//           Chapter # 2 : Question # 3

var message = 'Hello World';
alert(message);

//           Chapter # 2 : Question # 4

var name = 'Shayan Ali Shaikh';
var age = 21;
var course = 'Certified Mobile Application Development';
alert(name);
alert(age);
alert(course);

//           Chapter # 2 : Question # 5

alert(' PIZZA \n PIZZ \n PIZ \n PI \n P');


//           Chapter # 2 : Question # 6

var email = 'shayana803@gmail.com';
alert('My Email Address is '+email);

//           Chapter # 2 : Question # 7

var book = 'A smarter way to learn JvaScript';
alert('Iam trying to learn from the Book '+book);


//           Chapter # 2 : Question # 8

document.write(' <h1>Yeh! I can write HTML content through JavaScript </h1>');

//           Chapter # 2 : Question # 9

//                 End of chapter # 2

//                 Start of chapter # 3

//           Chapter # 3 : Question # 1

var age = 21;
alert("Iam "+age+" years old");

//           Chapter # 3 : Question # 2



//           Chapter # 3 : Question # 3

var birthYear = 1999;
document.write("My Birth Year is "+birthYear+ "<br> Data Type of my declared variable is " +typeof(birthYear)  );


//           Chapter # 3 : Question # 4

var userName=prompt("Enter Your Name ");
var product=prompt("Enter the name of Product You want to order ");
var quantity=+prompt("Enter quantity ");
document.write(userName + "ordered " +quantity +" " +product+ "(s) on XYZ Clothing Store");


//                 End of chapter # 3

//                 Start of chapter # 4

//               Chapter # 4 : Question # 1

var i,j,k; 

//               Chapter # 4 : Question # 2


var ali 1 = 5;               // space error
var &ali = 5.0;              // illegal variables
var alI = 5;    
alert(ali);                  // case sensitive error
var 9num = "ali";            // variable can not start from Number
shAheer = 9.0;
var 34 = ali;
var ali = &&&&;


//               Chapter # 4 : Question # 3

var shayanAli = 4.0;      // camel case allowed
var ali = 4.0 ;           // legal variable
var $shayan = "shayan";
alert( $shayan);
var ali = 34;


//               Chapter # 4 : Question # 5


document.write("<h1> Rules for naming JS variables </h1>"+"<br><br><br>");
document.write("Variable name can contain $ $my_1stVariable" + "<br>"); 
document.write("Variable must begin with letter ,  $ or _. for example : $my_first Variable" + "<br>");
document.write( "d" + " " + "Rules for naming JS variables" + "<br>");
document.write(  "a" + " " + "Variable names should not be JS");

//                 End of chapter # 4

//                 Start of chapter # 5

//           Chapter # 5 : Question # 1

var a=3;
var b=5;
var c=a+b;
document.write("Sum of "+a+ " and " +b+ " is " +c);

//           Chapter # 5 : Question # 2

var a=6;
var b=5;
var c=a-b;
document.write("Difference of "+a+ " and " +b+ " is " +c);

var a=6;
var b=5;
var c=a*b;
document.write("Multiplication of "+a+ " and " +b+ " is " +c);

var a=6;
var b=5;
var c=a/b;
document.write("Division of "+a+ " and " +b+ " is " +c);

var a=6;
var b=5;
var c=a%b;
document.write("Modulus of "+a+ " and " +b+ " is " +c);

//           Chapter # 5 : Question # 3

var a;
document.write("Value after variable declaration is: " +a);
a=5;
document.write("<br> Initial value after declaration is :" +a);
a++;
document.write("<br> Value after increment is : " +a);
a=a+7;
document.write("<br> Value after addition of 7 is : " +a);
a--;
document.write("<br> Value after decrement is : " +a);
a=a%3;
document.write("<br> The Remainder is : " +a);

//           Chapter # 5 : Question # 4

var ticketCost = 600;
document.write("Total cost to buy 5 tickets to movie is "+ticketCost*5+"PKR")

//           Chapter # 5 : Question # 5

var table=+prompt("Which math table you want to learn ?");
var i;
for(i=1; i<=10; i++)
{
    document.write(table+" x "+i+" = " +table*i +"<br>");
} 

//           Chapter # 5 : Question # 6

var celsius=+prompt("Enter temperature value in celsius :");
var farenheit=+prompt("Enter temperature value in celsius :");

var f = (celsius*(9/5)+32);
var c = (farenheit-32)*(5/9);
    document.write(celsius+"<sup>o</sup>C is "+f+"<sup>o</sup>F "+"<br>");
    document.write(farenheit+"<sup>o</sup>F is "+c+"<sup>o</sup>C "+"<br>");

//           Chapter # 5 : Question # 7

var item1 = 650;
var item2 = 100;
var quantity1 = +prompt("Enter a quantity of Item 1 :");
var quantity2 = +prompt("Enter a quantity of Item 2 :");
var total = item1*quantity1 +item2*quantity2 +100;

document.write("Price of Item 1 is "+item1+"<br>");
document.write("Quantity of Item 1 is "+quantity1+"<br>");
document.write("Price of Item 2 is "+item2+"<br>");
document.write("Quantity of Item 2 is "+quantity2+"<br>");
document.write("Shipping Charges "+100+"<br><br>");
document.write("Total cost of your order is " +total)


//           Chapter # 5 : Question # 8


var totalMarks = +prompt("Enter total marks :");
var obtainedMarks = +prompt("Enter obtained marks :");
var percentage = (obtainedMarks/totalMarks)*100;

document.write("<h1>Marksheet</h1><br><br>");
document.write("Total Marks are : "+totalMarks+"<br>");
document.write("Marks Obtained are : "+obtainedMarks+"<br>");
document.write("Your Percentage is : "+percentage+"%"+"<br>");

//           Chapter # 5 : Question # 9


var usd = +prompt("How many USD you have :");
var riyals = +prompt("How many Saudi Riyals you have :");
var currency = (usd*156) +(riyals*43);

document.write("<h1>Currency in PKR</h1><br><br>");
document.write("Total Currency in PKR is : "+currency+"<br>");

//           Chapter # 5 : Question # 10

var a = 5;
var b = (((a+5)*10)/2); 
alert(b);

//           Chapter # 5 : Question # 11

var currentYear = 2020;
var birthYear = +prompt("Enter Your Birth Year :");
var age = currentYear - birthYear ;

document.write("<h1>Age Calculator</h1><br><br>");
document.write("Your Birth Year is : "+birthYear+"<br>");
document.write("Your Age is either "+age+ " years or "+(age+1)+" years <br>");

//           Chapter # 5 : Question # 12

var pi = 22/7;
var radius = +prompt("Enter Your Radius of Circle :");
var circumference = 2*pi*radius ;
var area = pi*radius*radius;

document.write("<h1>The Geometrizer</h1><br><br>");
document.write("Radius of circle is : "+radius+"<br>");
document.write("The Circumference is : "+circumference+ "<br>");
document.write("The Area is : "+area+ "<br>");

//           Chapter # 5 : Question # 13

var snack = prompt("Enter your Favourite Snack ");
var currentAge = +prompt("Enter Your Current Age ");
var maximumAge = +prompt("Enter Your Current Age ");
var amount = +prompt("Enter Estimated Amount/day ");
var amountNeeded = (maximumAge - currentAge)*365*amount ;

document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("Favourite Snack : "+snack+"<br>");
document.write("Current Age : "+currentAge+ "<br>");
document.write("Estimated Maximum Age : "+maximumAge+ "<br>");
document.write("Amount of Snack per Day : "+amount+ "<br>");
document.write("You will need "+amountNeeded+ " "+snack+ " to last you until the ripe old age of "+maximumAge+ "<br>");


//                 End of chapter # 5

//                 Start of chapter # 6-9

//           Chapter # 6 - 9 : Question # 1


var a = 10;
document.write("The value of a is" + " " + a + "<br>");
 a = ++a;
document.write("The value of a  after pre incremental operation is ++a is "+a+ "<br>");
a = a++;
b = ++a;
document.write("The value of a  after post incremental operation is a++ is "+b+"<br>");
 a = --a;
document.write("The value of a  after pre decremental operation is --a is "+ a+"<br>");
a = a--;
document.write("The value of a  after pre decremental operation is a-- is "+a+ "<br>");

//           Chapter # 6 - 9 : Question # 2

var a =2;
var b = 1;
var result = (--a - --b + ++b + b--);
document.write(result + "   is result <br><br>");
document.write("the value at --a is 1 "+"<br><br>");
document.write("the value at --a - --b is 1 "  + "<br><br>");
document.write("the value at  --a - --b + ++b is 2"+"<br><br>");
document.write("the value at --a - --b + ++b +b-- is 3"+"<br><br>");



//           Chapter # 6 - 9 : Question # 3

var input =prompt("Enter Your Name");
document.write(input+"! Welcome to our page");

//           Chapter # 6 - 9 : Question # 5

var number = +prompt("Enter your number");
alert(number);
for(var i = 1; i <= 10; i++)
{
    document.write(number+" x "+i+" = " +" "+(number*i)+"<br><br>");
}

//           Chapter # 6 - 9 : Question # 6


var subject1 = +prompt("Enter your English Marks");
var subject2 = +prompt("Enter your Sst Marks");
var subject3 = +prompt("Enter your Islamiyat Marks");
var total = 100;

  obtmark1 = (subject1);
  obtmark2 = (subject2);
  obtmark3 = (subject3);
  document.write(" Obtained Marks % ");
  percentage1 = (obtmark1/total)*100;
  percentage2 = (obtmark2/total)*100;
  percentage3 = (obtmark3/total)*100;

  document.write(percentage + " % ");

document.write(" Subject "+" Total Marks" + " " + " " + "Obtained Marks" + " "  + "percentage" + "%" +"<br>"+"<br>")
document.write(" English "+total + " " + " " + obtmark1 + " "  + percentage1 + " " + "%" +"<br>" + "<br>");
document.write("   Sst   "+total + " " + " " + obtmark2 + " "  + percentage2 + "%" + "<br>" + "<br>");
document.write(" Islamiat"+total + " " + " " + obtmark3 + " "  + percentage3 + "%" +   +"<br>" + "<br>");

//               End of chapter # 6 - 9 

//                 Start of chapter # 12

//           Chapter # 12 - 13 : Question # 1


var input = prompt("Enter any Character you want to check ");

var i = input.codePointAt(0);

if (i > 64 && i <91)
{
    alert("Character is Uppercase Alphabet");
}
else if (i > 96 && i <123)
{
    alert("Character is Lowercase Alphabet");
}
else if (i > 47 && i <58)
{
    alert("Character is digit ");
}
else{
    alert("You have entered any special character ");
}

//           Chapter # 12 - 13 : Question # 2

var input1 = prompt("Enter First Digit ");
var input2 = prompt("Enter Second Digit ");

if (input1 > input2)
{
    alert(input1+" is greater than " +input2);
}
else if (input1 < input2)
{
    alert(input1+" is less than " +input2);
}
else{
    alert("Both Numbers are Equal ");
}

//           Chapter # 12 - 13 : Question # 3

var input = +prompt("Enter Any Number ");

if (input > 0)
{
    alert("+"+input+" is positive Number ");
}
else if (input < 0)
{
    alert(input+" is negative Number ");
}
else{
    alert(input+" is equal to 0 ");
}

//           Chapter # 12 - 13 : Question # 4

var input = prompt("Enter Any Character ");

switch (input)
{
case "A": {
    alert(input+" is Vowel ");
    break;
}
case "E": {
    alert(input+" is Vowel ");
    break;
}
case "I": {
    alert(input+" is Vowel ");
    break;
}
case "O": {
    alert(input+" is Vowel ");
    break;
}
case "U": {
    alert(input+" is Vowel ");
    break;
}
case "a": {
    alert(input+" is Vowel ");
    break;
}
case "e": {
    alert(input+" is Vowel ");
    break;
}
case "i": {
    alert(input+" is Vowel ");
    break;
}
case "o": {
    alert(input+" is Vowel ");
    break;
}
case "u": {
    alert(input+" is Vowel ");
    break;
}
default :
{
    alert(input+" is Consonant ");
    break; 
}
}

//           Chapter # 12 - 13 : Question # 5
//           Chapter # 12 - 13 : Question # 6

var greeting; 
var hour = 13; 
if (hour < 18) 
{ 
    greeting = "Good day"; 
    alert(greeting);
}
    else 
    {
    greeting = "Good evening";
    alert(greeting);
 }

//           Chapter # 12 - 13 : Question # 7

var timeInput = +prompt("Enter time in 24 hours format \n write like 1300 hours,1400 hours");

switch (timeInput)
{
    case 100 :
        {
            alert("The time is 1 am");
            break;
        }
        case 200 :
            {
                alert("The time is 2 am");
                break;
            }
        case 300 :
        {
            alert("The time is 3 am");
            break;
        }
        case 400 :
            {
                alert("The time is 4 am");
                break;
            }
            case 500 :
        {
            alert("The time is 5 am");
            break;
        }
        case 600 :
            {
                alert("The time is 6 am");
                break;
            } 
        case 700 :
            {
               alert("The time is 7 am");
                break;
            }
        case 800 :
        {
            alert("The time is 8 am");
            break;
        }
        case 900 :
            {
                alert("The time is 9 am");
                break;
            }
        case 1000 :
        {
            alert("The time is 10 am");
            break;
        }
        case 1100 :
            {
                alert("The time is 11 am");
                break;
            }
        case 1200 :
        {
            alert("The time is 12 pm");
            break;
        }

    case 1300 :
    {
        alert("The time is 1 pm");
        break;
    }
    case 1400 :
        {
            alert("The time is 2 pm");
            break;
        }
    case 1500 :
    {
        alert("The time is 3 pm");
        break;
    }
    case 1600 :
        {
            alert("The time is 4 pm");
            break;
        }
        case 1700 :
    {
        alert("The time is 5 pm");
        break;
    }
    case 1800 :
        {
            alert("The time is 6 pm");
            break;
        } 
    case 1900 :
        {
           alert("The time is 7 pm");
            break;
        }
    case 2000 :
    {
        alert("The time is 8 pm");
        break;
    }
    case 2100 :
        {
            alert("The time is 9 pm");
            break;
        }
    case 2200 :
    {
        alert("The time is 10 pm");
        break;
    }
    case 2300 :
        {
            alert("The time is 11 pm");
            break;
        }
    case 2400 :
    {
        alert("The time is 12 am");
        break;
    }
    default :
    {
        alert("Time Format is not correct");
        break;
    }           
}

//                 End of chapter # 12 - 13

//                 Start of chapter # 14 - 16


//                Chapter # 14 - 16 : Question # 1
var a =[""];

 
document.write(a + "<br>");
for(var i = 0;  i < 4; i++) {
    var input = prompt("Enter Your Name");
    a.push(input);
  
}
document.write("Items In Your Array : "+a);


//                Chapter # 14 - 16 : Question # 2

var array =+[""];
array.push(1);
document.write(array); 


//                Chapter # 14 - 16 : Question # 3



//                Chapter # 14 - 16 : Question # 7

var a =[""];

a.push("SSC","HSC","BCS","BS","B.Com","MS","M.Phil","PHD") ;
document.write(a[1] + "<br>");
document.write(a[2] + "<br>");
document.write(a[3] + "<br>");
document.write(a[4] + "<br>");
document.write(a[5] + "<br>");
document.write(a[6] + "<br>");
document.write(a[7] + "<br>");

//                Chapter # 14 - 16 : Question # 8


    document.write(a + "<br>");
    for(var i = 0;  i < 3; i++) {
    var input = prompt("Enter Your Name");
    a.push(input);
    var input1 = +prompt("Enter Your Marks");
    b.push(input1);
}
 var percentage1 =((b[1]/500)*100);
 var percentage2 =((b[2]/500)*100);
 var percentage3 =((b[3]/500)*100);
 document.write("Score of "+a[1]+" is "+b[1]+" and percentage is"+ percentage1+" %<br><br>");
 document.write("Score of "+a[2]+" is "+b[2]+" and percentage is"+ percentage2+" %<br><br>");
 document.write("Score of "+a[3]+" is "+b[3]+" and percentage is"+ percentage3+" %<br><br>");

//                Chapter # 14 - 16 : Question # 9

 var colors =["Blue","Green","Purple","White"];
 alert("your colors are" + "\n" + colors);
 
 
 begining =prompt("What colors do you want to add in Begining")
 colors.unshift(begining);
 
 alert(colors);
 
 end =prompt("What colors do you want to  add in End ")
 colors.push(end);
 alert(colors);
 begining1 =prompt("What 1 colour do you want to add in beginning")
 begining2 =prompt("What 2 colour do you want to add in beginning")
 colors.unshift(begining1,begining2);
 alert(colors);
 
 del1 =prompt("What 1 colour do you want to del in beginning")
colors.shift(del1);
alert(colors);
del2 =prompt("What 1 colour do you want to del from end")
colors.shift(del2);
alert(colors);
 
add4 =prompt("enter the position  after you want a new colour to be added position start from 0");
add5 =prompt("which colour do you want to add")
colors.splice(1,add4,add5);

alert(colors);
 add6 =prompt("how many no you want to separate from list" + "\n" + "take care of one thing position index start from 1");
 
 
var y =colors.slice(0,add6)
  

 alert(y);

//                Chapter # 14 - 16 : Question # 10

var array=[""];
for(var i = 1; i <= 4; i++)    task 10
{

student =prompt("Enter Score of "+i + " Student");
array.push(student);

}
document.write( "Score of Students "+array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + array[4]);



//                Chapter # 14 - 16 : Question # 11

var city =["China","Pakistan","India","France"]; 
alert(city);
var lili=prompt("Enter your number how many city you want to select" + "\n"+ "enter starting index which start from 0 ends on 4 ")

var name=prompt("Enter your number how many city you want to select  ending index position of last city  is 4 and first city is  1");

var select = city.slice(lili,name);
alert(select);
document.write("all cities" + "(" +  " " + city + " )" + " " + "<br>");
document.write("selected cities" +   "(" + " "  +    select + ")" + "<br>");

//                Chapter # 14 - 16 : Question # 12


  var array =["Ali:","Mohammad","Jinnah","Google"];
  document.write(array + "<br>" + "<br>" + "FIFO RULE" + "<br>") 
  for(var i = 0; i <= 3; i++){
    
 document.write(  array.shift([i]) + " " + "<br>");}
 document.write(array);

//                Chapter # 14 - 16 : Question # 13

var array =["Ali:","Mohammad","Jinnah","Google"];
document.write(array + "<br>" + "<br>" + "FIFO RULE" + "<br>")            
for(var i = 0; i <= 3; i++){   
  
 document.write(  array.pop([i]) + " " + "<br>");}
document.write(array);


//                 Start of chapter # 17 - 20

//           Chapter # 17 - 20 : Question # 1

var arr1 = new Array();
arr1[0] = new Array();
arr1[1] = new Array();

//           Chapter # 17 - 20 : Question # 2

var matrix = new Array();
matrix[0] = new Array(0,1,2,3);
matrix[1] = new Array(1,0,2,3);
matrix[2] = new Array(2,1,2,3);
document.write(matrix[0] +"<br>");
document.write(matrix[1] +"<br>");
document.write(matrix[2] +"<br>");

//           Chapter # 17 - 20 : Question # 3

for(var i=1;i<=10;i++)
{
    document.write(i + "<br>")
}

//           Chapter # 17 - 20 : Question # 4

var table=+prompt("Which math table you want to learn ?");
var tableLength=+prompt("Enter the table length");

document.write("<h1>Multiplication Table of "+table+ "with Length of " +tableLength +"</h1>");

var i;
for(i=1; i<=tableLength; i++)
{
    document.write(table+" x "+i+" = " +table*i +"<br>");
} 

//           Chapter # 17 - 20 : Question # 5

fruits = ["apple","banana","mango","orange","strawberry"];
for(var i=0;i<fruits.length;i++)
{
    document.write("<h3>"+fruits[i]+"</h3>")
}
for(var i=0;i<fruits.length;i++)
{
    document.write("<h2> Element at index "+i+" is "+fruits[i]+"</h2>")
}


//           Chapter # 17 - 20 : Question # 6

document.write("<h3>Counting : ");
for(var i=1;i<=15;i++)
{
    document.write(i+" , ");
}
document.write("</h3>");
document.write("<h3> Reverse Counting : ");
for(var j=10;j>=1;j--)
{
    document.write(j+" , ");
}
document.write("</h3>");
document.write("<h3> Even Numbers : ");
for(var i=1;i<=10;i++)
{
    document.write(i*2+" , ");
}
document.write("</h3>");
document.write("<h3> Odd Numbers : ");
for(var i=1;i<=10;i++)
{
    document.write(((i*2)-1)+" , ");
}
document.write("</h3>");
document.write("<h3> Series : ");
for(var i=1;i<=10;i++)
{
    document.write(i*2+"k , ");
}
document.write("</h3>");

//           Chapter # 17 - 20 : Question # 7

var arr = ["cake","applepie","cookie","chips","patties"];
var name = prompt("Welcome ! \n Enter Your Name");
var product = prompt("Welcome to ABC Bakery ! \n What do you want to order "+name+" ?");
for(var i=0;i<arr.length;i++)
{
    if(arr[i]===product)
    {
        document.write(product +" is <b>available</b> at index "+i+" in our bakery");
        if(arr[i] != product)
        {
            document.write("Sorry"+product +" <b>not available</b> ");
        }
    }
}

//           Chapter # 17 - 20 : Question # 8

var num = [24,53,78,91,12];
var largeNumber =Math.max.apply(null, num);
document.write( "The Largest Number in the Array is "+largeNumber)



//           Chapter # 17 - 20 : Question # 9

var num = [24,53,78,91,12];
var largeNumber =Math.min.apply(null, num);
document.write( "The Largest Number in the Array is "+largeNumber)



//           Chapter # 17 - 20 : Question # 10

for(var i=5;i<=100;i=i+5)
document.write(i+" , ")
