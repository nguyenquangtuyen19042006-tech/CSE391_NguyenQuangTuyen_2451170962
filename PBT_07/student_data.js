const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let trungbinh = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;

let maleTotal = 0;
let femaleTotal = 0;
let maleCount = 0;
let femaleCount = 0;

console.log("| STT | Tên | TB | Xếp loại |");

for(let i = 0; i < students.length; i++){

    let s = students[i];

    let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;

    avg = avg.toFixed(1);

    let rank = "";

    if(avg >= 8){
        rank = "Giỏi";
        gioi++;
    }
    else if(avg >= 6.5){
        rank = "Khá";
        kha++;
    }
    else if(avg >= 5){
        rank = "Trung bình";
        trungbinh++;
    }
    else{
        rank = "Yếu";
        yeu++;
    }

    console.log(`| ${i+1} | ${s.name} | ${avg} | ${rank} |`);

    // max min

    if(maxStudent === null || avg > maxStudent.avg){
        maxStudent = {
            name: s.name,
            avg: avg
        };
    }

    if(minStudent === null || avg < minStudent.avg){
        minStudent = {
            name: s.name,
            avg: avg
        };
    }

    // tổng môn

    totalMath += s.math;
    totalPhysics += s.physics;
    totalCs += s.cs;

    // gender

    if(s.gender === "M"){
        maleTotal += Number(avg);
        maleCount++;
    }
    else{
        femaleTotal += Number(avg);
        femaleCount++;
    }

}

console.log("\nSố SV Giỏi:", gioi);
console.log("Số SV Khá:", kha);
console.log("Số SV Trung bình:", trungbinh);
console.log("Số SV Yếu:", yeu);

console.log("\nSV điểm cao nhất:", maxStudent.name, "-", maxStudent.avg);

console.log("SV điểm thấp nhất:", minStudent.name, "-", minStudent.avg);

console.log("\nTB môn Toán:", (totalMath / students.length).toFixed(1));

console.log("TB môn Lý:", (totalPhysics / students.length).toFixed(1));

console.log("TB môn CS:", (totalCs / students.length).toFixed(1));

// bonus

console.log("\nTB Nam:", (maleTotal / maleCount).toFixed(1));

console.log("TB Nữ:", (femaleTotal / femaleCount).toFixed(1));