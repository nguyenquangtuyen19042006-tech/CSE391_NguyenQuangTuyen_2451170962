let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let maxAttempts = 7;

let guessedNumbers = [];

while(attempts < maxAttempts){

    let input = prompt("Nhập số từ 1-100:");

    let guess = Number(input);

    // validate

    if(isNaN(guess) || guess < 1 || guess > 100){
        alert("Vui lòng nhập số từ 1-100");
        continue;
    }

    // kiểm tra đoán trùng

    if(guessedNumbers.includes(guess)){
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);

    attempts++;

    // kiểm tra

    if(guess === randomNumber){

        alert(`Bạn đoán đúng sau ${attempts} lần!`);

        break;
    }
    else if(guess < randomNumber){

        alert("Cao hơn");
    }
    else{

        alert("Thấp hơn");
    }

}

// thua

if(attempts === maxAttempts && guessedNumbers[guessedNumbers.length - 1] !== randomNumber){

    alert(`Bạn đã thua! Đáp án là ${randomNumber}`);

}