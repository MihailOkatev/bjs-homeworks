

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
    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2*a);
        x[1] = (-b -Math.sqrt(d)) / (2*a);
    } else if (d === 0) {
        x[0] = -b / (2*a);
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
    if (marks.length > 5) {
        marks.splice(5); 
    }
    for (let i = 0; i <= marks.length - 1; i++) {
        marksSum = marksSum + marks[i];
    }
        return marksSum/ marks.length;
    }

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    if ( new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`; 
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    return result;
}