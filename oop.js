/* var john = {
    name: 'John',
    yearOfBirth: 1952,
    job: 'transporter'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.lastName = this.name;
    this.calculateAge = function() {
        console.log(2016 - this.yearOfBirth)
    }
}


var john = new Person('john', 1952, 'business man')
var jane = new Person('jane', 1973, 'cheff')
var mark = new Person('mark', 1981, 'super market manager')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()


console.log(jane.lastName)
 */

//object.create


/* var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth  = '1952';
john.job = 'Business man';

var georgegoldman = Object.create(personProto, {
    name: {value: 'George goldman Onyedikachi John'},
    yearOfBirth: {value: 1997},
    job: {value: 'computer programmer'},
})

georgegoldman.calculateAge() */
/* 
var a = 23;
var b  = a;

var a = 46;

console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 23,
}

var obj2 = obj1
obj1.age = 26;

console.log(obj1.age);
console.log(obj2.age);
 */
//function 

// var age = 27;
// var obj = {
//     name: 'georgegoldman',
//     city: 'lagos'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'auntero';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city)

/* var year = [1997, 1996, 1973, 1952, 2005, 1998]

function arrayCalc(arr, fn) {

    var arrRes = [];

    for (i = 0; i < arr.length; i++){

        arrRes.push(fn(arr[i]));

    }
    return arrRes
}

function calculateAge(el) {
    
    return 2019 - el;
}

function isAdult(el) {

    return el >= 18;
}

function maxHeartRate(el) {

    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));

    }else {
        return -1;
    }
}

var ages = arrayCalc(year, calculateAge);
var ageBracket = arrayCalc(ages, isAdult);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(ageBracket);
console.log(rates); */


/* function interviewQuestion(job) {
    if (job === 'designer') {

        return function(name) {
            console.log(name + ' can you please explain what UX design is?')
        }
    }else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach, ' +name+ ' ?')
        }
    }else {
        return function(name) {
            console.log('hello '+ name+ ' what do you do ?');
        }
    }
}

var teacherQuestion  = interviewQuestion('teacher');
var designerQuestion  = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('George goldman');
designerQuestion('Jerry');
designerQuestion('Azibike');
designerQuestion('Oga max');

interviewQuestion('teacher')('matthew'); */


// function game() {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// }
// game()

//IIFE

// (function () {
//     var score   = Math.random() * 10;
//     console.log(score>= 5);
// })();

/* function retirement(retirementAge) {

    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
//closure 

var retirementUs = retirement(66);
retirementUs(1952);

var retirementGermany = retirement(65);
retirementGermany(1997);

var retirementIceland = retirement(67)
retirementIceland(1997)


function interviewQuestion(job) {
    return function(name) {
        if (job === 'teacher') {
            console.log('what subject do you teach, ' +name+ ' ?');
        }else if (job === 'designer') {
            console.log(name + ' can you please explain what UX design is?');
        }else{
            console.log('hello '+ name+ ' what do you do ?');
        }
    }
}

var teacherQuestion  = interviewQuestion('teacher');
var designerQuestion  = interviewQuestion('designer');

designerQuestion('Austin');
teacherQuestion('Mark'); */


// var george  = {
//     name: 'george goldman ',
//     age: 22,
//     job: 'programmer',
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good'+timeOfDay+', ladies and gentle men, I\'m '+ this.name + ',  I\'m a ' + this.job + ', I\'m '+this.age +' years old');

//         }else if(style === 'friendly'){
//             console.log('Hey what\'s up? I\'m  ' + this.name + ',  I\'m a ' + this.job + ', I\'m '+this.age +' years old. have a nice '+ timeOfDay+ '.')
//         }
//     }
// }

// george.presentation('formal', 'afternoon');

// var elizabeth = {
//     name: 'Elizabeth',
//     age: 23,
//     job: 'design',
// }
// george.presentation.call(elizabeth, 'friendly', 'Morining');
// george.presentation.apply(elizabeth, ['formal', 'afternoon'])

// var georgeFriendly = george.presentation.bind(elizabeth, 'friendly')
// georgeFriendly('morning')

var john = {
    name: 'george goldman',
    age: 22,
    job: 'programmer',
    presentation: function(style, timeOfDay) {

    }
}