// JavaScript Document
/*  jslint browser:true */
"use strict";

// A Function that generates a random integer using a value sent to it as the upper limit.
function generateRandom(top) {
    var x = Math.random();
    x = x * top;
    x = (Math.floor(x)) + 1;
    return x;
}

// Switch statement that converts a number between 1 and 12 to the month name.
function setMonth(sort) {
var month = generateRandom(12);

switch(sort) { 
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";                  
    } // end of switch
    return month;
}  // end of function  


// Switch statement that converts a number between 1 and 5
function setFortune(sort) {
var fortune = generateRandom(5);
switch(sort) { 
    case 1:
        fortune = "don't panic!";
        break;
    case 2:
        fortune = "you will experience an uncomfortable situation.";
        break;
    case 3:
        fortune = "you will succeed with your coding skills.";
        break;
    case 4:
        fortune = "you will find a wallet full of cash.";
        break;
    case 5:
        fortune = "the world will see the stock market crash.";
                   
    } // end of switch
    return fortune;
}  // end of function  


// Assigning all the variables to the month, day, and fortune
// Set Random Month
var sortMonth = generateRandom(12);
var month = setMonth(sortMonth);

// Set Random Day
var day = generateRandom(30);

// Set Random Fortune
var sortFortune = generateRandom(5);
var fortune = setFortune(sortFortune);

// Connecting all the values into a string
var feedbackMessage = "On " + month + " " + day + ", " + fortune;
document.getElementById('feedback').innerHTML = feedbackMessage;
