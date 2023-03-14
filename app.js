
//Завдання 1 a

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {
 
    if (arr.length == 1 ){
      return arr[0];
    } 
      return arr[0] + sum(arr.slice(1));
  }
   
  console.log(sum(arr));
//Завдання 1 b
  function sum(arr){
    return arr.length == 1 ? arr[0] : arr[0] + sum(arr.slice(1));
  }
  console.log(sum(arr));

// Завдання 2 a

let arr = [];
let count = 0;

function deepCount(arr) {
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      count++;
      deepCount(elem);
    }else {
      count++
    }
  }
  return count
}
console.log(deepCount([[[[]]]]))

// Завдання 2 b
let arr = [];
let count = 0;

function deepCount(arr){
    for (const elem of arr) {
        Array.isArray(elem)
            ?( count++  ,
                deepCount(elem)) 
            : count++
    }
    return count
}
console.log(deepCount([[[[]]]]))

//Завдання 3


let employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 2500}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers:[{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            internet_marketers:[{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers: [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Max', salary: 900}]
}

function takeSumSallary(){
    let sum = 0 ;
return function sumSallary(obj){
    for(let key in obj){
        if (Array.isArray(obj[key])){
            obj[key].forEach(employee =>  sum += employee.salary);
             
        } else {
             sumSallary(obj[key]);
             
        }
        
    }
    return sum
}
}
takeSumSallary()
console.log(takeSumSallary()(employees))



//Завдання 4

let arr1 = [2, 15, 7, 3]
let arr2 = [9, 3, 17, 12, 4, 8]
let arr3 = [6, 11, 16, 15, 11]
 
console.log(Math.max(...arr1, ...arr2, ...arr3))

