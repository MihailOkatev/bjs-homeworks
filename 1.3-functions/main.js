"use strict";
console.log(`===Задача 1===`);
function getSolutions(a, b, c) {
    console.log(`Решаем уранение ${a}х^2 + ${b} + ${c}`);
    let d = Math.pow(b, 2) - 4*a*c;
    console.log(`Значение дискриминанта= ${d}`);
    if (d < 0) {
        return d;
    } else if (d == 0) {
        let x1 = -b/(2*a);
        let solution = {roots:x1, d:d};
        return solution;
    } else {
        let x1 = (-b - Math.sqrt(d))/(2*a);
        let x2 = (-b + Math.sqrt(d))/(2*a);
        let solution = {roots:[x1, x2], d:d};
        return solution;
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);
    if(result.roots == undefined) {
        console.log(`уравнение не имеет вещественных корней`);
    } else if (result.roots != undefined && result.roots[1] == undefined) {
            console.log(`Уравнение имеет 1 корень x1 = ${result.roots}`);
    } else if(result.roots[0] != undefined && result.roots[1] != undefined) {
        console.log(`Уравнение имеет 2 корня: x1 = ${result.roots[0]} x2 = ${result.roots[1]}`);
    }
    
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log(`Задача 2`);
// Данная функция работает независимо от количества предметов и количества оценок для каждого из них

function averageCounting(data,prop) {
    let marksSum = 0;
    for (let i = 0; i <= data[prop].length - 1; i++) {
        marksSum = marksSum + data[prop][i];  
         
        }
         return marksSum / data[prop].length;
}

function getAverageScore(data) {
    let averageMarksArray = {};
    for (let prop in data) {
        averageMarksArray[prop] = averageCounting(data,prop);
      }
      let marksSum = 0;
      for (let prop in averageMarksArray) {
        marksSum = marksSum + averageMarksArray[prop];
        averageMarksArray.average = marksSum / (Object.keys(averageMarksArray).length - 1);
      }
      console.log(averageMarksArray);   
}

getAverageScore({algebra:[2,3,4,6,7,3,3,3],
geometry:[5,4,4,2,3,5,5,5],
russian: [5,5,3,4],
physics:[5,3,4,4,5],
music:[3,3,2,4],
english:[4,4,3],
poetry:[5,5,4,5],
chemistry:[2,3],
french:[5,5,4,5,4,5,5]});

// Задача 3
console.log(`Задача 3`);
function decoder(secretData, prop) {
    if(secretData[prop] === 0) {
        return "Родриго";
    } else if(secretData[prop] === 1) {
        return "Эмилио";
    } else {
        return "Неверный формат вводимых данных";
    }
}

function getPersonData (secretData) {
    let decodedData = {firstName: "Terra", lastName: "Incognito"};
    for (let prop in secretData) {
        decodedData = {firstName: decoder(secretData,prop), lastName: decoder(secretData,prop)};
    }
    console.log(decodedData);
}

getPersonData({aaa:0, bbb:0});
getPersonData({aaa:1, bbb:1});
getPersonData({aaa:0, bbb:1});
getPersonData({aaa:1, bbb:0});
getPersonData({aaa:5, bbb:5});

