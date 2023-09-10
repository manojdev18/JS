// If Else Statement
let age = 2;
if(age >= 18){
    // code to be executed if condition is true 
    console.log('You can vote in Election')
}
else{
    // code to be executed if none of above condition is true 
    console.log('You Cannot vote in Election')
}


// If Else Statement
let brand = 'Brand 2';
if (brand =='Amravati Chakki Aatta'){
    console.log('I have a Amravati Chakki Aatta')
}
else{
    console.log('I have not Amravati Chakki Aatta')
}

// Else If Statement 
let trafficLight = 'Yellow';
if(trafficLight == 'Green'){
    console.log('Go Head')
} 
else if (trafficLight == 'Yellow'){
    console.log('Slow Down')
}
else if(trafficLight == 'Red'){
    console.log('Stop')
}
else{
    console.log('Invalid Signal')
}

// EVEN OR ODD Number's
var num = 0;
if (num === 0){
    console.log('Zero is neither an ODD Number nor an EVEN Number')
}else if(num % 2 === 0){
    console.log('This Given is an EVEN Number ')
}else{
    console.log('This Given is an ODD Number')
}

// Switch Statement 
let Day = 7;
switch (Day){
    case 1: {
        //case to be executed
        console.log('Sunday')
        break;
    }
    case 2: {
        //case to be executed
        console.log('Monday')
        break;
    }
    case 3: {
         //case to be executed
        console.log('Tuesday')
        break;
    }
    case 4: {
        //case to be executed
        console.log('Wednesday')
        break;
    }
    case 5: {
        //case to be executed
        console.log('Thursday')
        break;
    }
    case 6: {
        //case to be executed
        console.log('Friday')
        break;
    }
    case 7: {
        //case to be executed
        console.log('Saturday')
        break;
    }
    default: {
        //case to be executed
        console.log('Invalid Number')
    }
}

// Ternary Operators VS If-Else Condition

// Using If-Else Codition
let isUserLoggedIn = false;
if (isUserLoggedIn) {
    console.log('PW Skills Lab Access Granted')
} else{
    console.log('PW Skills Lab Access Denied')
}

// Using Ternary Operator 
isUserLoggedIn ? console.log('PW Skills Lab Access Granted') : console.log('PW Skills Lab Access Denied') ;

// Complexity ternary Operator 
let userLoggedIn = false;
let userCoursePurchased = true;

userLoggedIn ? (
    userCoursePurchased ? console.log('Access Granted') : console.log('Access Denied')
) : console.log('Not Logged in !');




