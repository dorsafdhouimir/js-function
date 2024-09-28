//creation d'un array
const numbers = [1, 2, 3, 4, 5];

//fonction qui calc la somme de tt les nbr
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(numbers))
//---------------------------------------------------------------------
const age=[18,20,14,24];
function countAdults(arr){
    let calc= 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 18) {
            calc++;
        }
    }
    return calc;
}

console.log(countAdults(age)); 
//---------------------------------------------------------------------------
let students = [
    {name: 'Alice', score: 90},
    {name: 'Bob', score: 85},
    {name: 'Charlie', score: 88}
];
function averageScore(students ){
    var acc = 0
    for (let i = 0; i < arr.length; i++){
        acc +=students[i].score
    }
    return acc/students.length
}
//----------------------------------------------------------------------------
function maxNumber(arr){
    let max=0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]>max)
            max=arr[i]
    }
}

return max;
//-------------------------------------------------------------------------------
Create an array of objects representing products, each with a name and price. Write a function filterExpensiveProducts that returns an array of products with a price greater than a given value.


let products = [
    {name: 'Laptop', price: 1000},
    {name: 'Mouse', price: 25},
    {name: 'Keyboard', price: 75},
    {name: 'Monitor', price: 300}
];

function filterExpensiveProducts(products, givenvalue) {
    morexpensive=0
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].price > givenvalue) 
            moreExpensive.push(products[i]);
    }
    return moreExpensive; 

}

console.log(filterExpensiveProducts(products, 100))
//-------------------------------------------------
let books = [
    {title: 'Book One', pages: 300},
    {title: 'Book Two', pages: 150},
    {title: 'Book Three', pages: 200}
];

function totalPages(books) {
    let totalpages = 0;
    for (let i = 0; i < books.length; i++) {
        totalpages += books[i].pages;
    }
    return totalpages;
}

console.log(totalPages(books));
//------------------------------------------------
let employees = [
    {name: 'John', salary: 50000},
    {name: 'Jane', salary: 60000},
    {name: 'Jim', salary: 55000}
];
function highestsalary(employees){
    let  high=employees[0];
    for (let i = 0; i < employees.length; i++){
        if(employees[i].salary>high.salary)
            high=employees[i]
    }
    return high

}
console.log( highestsalary(employees))
//---------------------------------------------------------------------
let students = [
    {name: 'Alice', grades: [90, 85, 88]},
    {name: 'Bob', grades: [80, 75, 78]},
    {name: 'Charlie', grades: [95, 92, 90]}
];
function studentWithHighestAverage(students){
    let  high=students[0];
    for (let i = 0; i < employees.length; i++){
        if(students[i].grades>high.grades)
            high=students[i]

    }

    return high


}
console.log(studentWithHighestAverage(students));
//---------------------------------------------------------------------
let  products = [
    {
      name: "T-shirt",
      price: 19.99,
      quantity: 100
    },
    {
      name: "Jeans",
      price: 50.00,
      quantity: 80
    },
    {
      name: "Sneakers",
      price: 100.00,
      quantity: 30
    }
   
  ];

  function totalInventoryValue(products){
   var totv=0
    for (let i = 0; i < products.length; i++){
        console.log(products[i])
        totv+= products[i].price *products[i].quantity;
    }
    return totv

  }
  console.log(totalInventoryValue(products))
  //----------------------------------------------------------
  let athletes = [
    {
      name: "azer",
      scores: [85, 90, 78, 88]
    },
    {
      name: "abedlhmid",
      scores: [92, 88, 84, 91]
    },
    {
      name: "bouraoui",
      scores: [75, 80, 72, 79]
    },
    {
      name: "ali",
      scores: [88, 94, 89, 92]
    },
    {
      name: "chouchou",
      scores: [82, 87, 85, 83]
    }
    
  ];
  function child (calculate score){
    var tot=0
    for loop{
        tot+=ele
    }
  }
  function topAthlete(athletes){
    var bestathletes=athletes[0]
    var bestscore =child(athletes[0.score])
    for(let i = 0; i < athletes.length; i++){
        let tot = calculateTotalScore(athletes[i].scores);
        if (bestathletes>bestscore){
            bestscore=bestathletes
            topAthlete = athletes[i];

        }
    
    }
    
    

  }
  //------------------------------------------
  function isDuplicated(arr, str) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        count++;
      }
    }
    return count
  }
  
  // Example usage:
  const myArray = ['apple', 'banana', 'apple', 'orange'];
  const myString = 'apple';
  
  console.log(isDuplicated(myArray, myString));
  
//-------------------------------------------------
function nbr(arr){
    var obj={}
    count=0
    for (let i = 0; i < arr.length; i++){
        if(arr[i]<=2){
            obj+=arr[i]
            count++
        }
    

    }
    return o


}
//-------------------------------------------
function nbrocc(arr){
    var obj={}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]===undefined) {
            obj[arr[i]]=1
        } else {
            obj[arr[i]] ++;
        }
    }
    return obj;

}
//----------------------------------------------------------------------µ
let name1='dorsaf'
let age1='20'
console.log(`hi,my name is ,${name1},and iam ,${age1}`)
//-------------------------------------------------------
 calc =(length,width)=>{
    length*width
}
//------------------------------------------------------
const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
    }
  };
  
  const CLValues = (obj) => {
    for (const elem in obj) {
      if (typeof obj[elem] === 'object') {
        CLValues(obj[elem]); 
      }
    }
  };
  
  CLValues(user);
//-----------------------------------------------
const person = { name: 'Alice', age: 30, city: 'Paris' };
const personinfo=(obj)=>{
    return ('my ${name},is ${age},years old, and lives in ${city}')


}
console.log(personinfo(person))
//---------------------------------------------------
const items = ['Apples', 'Bananas', 'Oranges'];

const list = `Grocery List:
- ${items[0]}
- ${items[1]}
- ${items[2]}`;

console.log(list);
//---------------------------------------------------
const user = {
    id: 1,
    profile: {
      name: "John Doe",
      email: "john.doe@example.com"
    }
  };
  
  const { id, profile: { name, email } } = user;
  
  console.log(id); 
  console.log(name); 
  console.log(email); 
//------------------------------------------------------
const array1=[1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);
console.log(map1);
//-----------------------------------------------------------
const people = [
    { firstName: 'Dorsaf', lastName: 'Dhouimir' },
    { firstName: 'habil', lastName: 'dhouimir' },

  ];
  
  const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); 
//-------------------------------------------------------------
const nbr=[1, 4, 9, 16];
const evenumber=nbr.filter (nbr=>nbr%2===0)
console.log (evenumber)
//-----------------------------------------------------------
const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 40 },
    { name: 'David', age: 25 },
  ];
  const ageover30=people.filter(peaple=>peaple.age>30)
  console.log(ageover30)
//---------------------------------------------------------------
const numbers=[1, 4, 9, 16,20,24];
const squared=numbers.map(nbr=>nbr**2)
const ageover=squared.filter(num=>num>20)
console.log(ageover)



  










