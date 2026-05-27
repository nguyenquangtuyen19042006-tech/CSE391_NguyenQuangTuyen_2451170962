// Đoạn 1

console.log(x);

var x = 5;

// Output:
// undefined



// Đoạn 2

try{

    console.log(y);

    let y = 10;

}
catch(error){

    console.log(error.message);

}

// Output:
// Cannot access 'y' before initialization



// Đoạn 3

try{

    const z = 15;

    z = 20;

    console.log(z);

}
catch(error){

    console.log(error.message);

}

// Output:
// Assignment to constant variable.



// Đoạn 4

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// Output:
// [1, 2, 3, 4]



// Đoạn 5

let a = 1;

{
    let a = 2;

    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);

// Output:
// Trong block: 2
// Ngoài block: 1