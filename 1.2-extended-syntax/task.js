

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let x = [];
    let d = Math.pow(b, 2) - 4*a*c;
    console.log(` Дискриминант = ${d}`);
    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2*a);
        x[1] = (-b -Math.sqrt(d)) / (2*a);
        console.log(`Уравнение имеет 2 корня: ${x}`); 
    } else if (d = 0) {
        x[0] = -b / (2*a);
        console.log(`уравнение имеет 1 корень: ${x}`);
    } else {
        console.log ("Корней нет");
        x = [];
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let marksSum = 0;
    console.log (marks);
    if (marks.length > 5) {
        marks.splice(5, marks.length + 1); // намеренно указываю число больше длины массива, чтобы обрезать все элементы после 5-го
        console.log(marks);
        for (let i = 0; i <= marks.length - 1; i++) {
            marksSum = marksSum + marks[i];
        }
     
    }  else {
        for (let i = 0; i <= marks.length - 1; i++) {
            marksSum = marksSum + marks[i];
        }
        
    }
    let averageMarkValue = marksSum / marks.length;
     return averageMarkValue;
}
function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}