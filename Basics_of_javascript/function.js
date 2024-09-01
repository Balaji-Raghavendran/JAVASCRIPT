// program to create a function in javascript

function function_name()
{
    console.log("This is JavaScript Function")
}

function_name()

// program to add two numbers using function

var a = 10
var b = 20 // creating the variables in global scope

function add()
{
    var total = a+b
    console.log(total)
}

add()


//another function example program

fav_movie = "Avengers Infinity War"
fav_food = "Mushroom Biriyani"
fav_music = "rock genre"

function favourite()
{
    console.log("favourite movie : "+fav_movie)
    console.log("favourite food : "+fav_food)
    console.log("favourite music : "+fav_music)
}

favourite()


// program to create a function using parameter in function creation

function area(length,breadth)
{
    product = length*breadth
    console.log("Area is : "+product+" sq.m")
}

area(35,7)


// program to create a function using return statement

function add(a,b)
{
    return(a+b)
}

var total=add(24,16)
console.log("sum is : "+total)


