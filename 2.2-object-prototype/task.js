function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        let sound = animal.sound;
        return sound;
    }
}

function getAverageMark(marks) {
    console.log(marks);
    if (marks.length === 1 && marks[0]=== "") {
        return 0;
    } else {
        let totalSum = 0;
        for (let i = 0; i < marks.length; i++) { 
            if (isNaN(parseInt(marks[i]) === true)) {
                return "Ошибка, в массиве встречается не число";
    }

        totalSum = totalSum + parseInt(marks[i]);
        
    }
    let average = totalSum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
    }
}

function checkBirthday(birthday) {
    let checkDate = new Date(birthday);
    let today = new Date()
    let now = new Date().getTime();
    let diff = now - checkDate.getTime();  
    if (checkDate.getMonth() === today.getMonth() && checkDate.getDay() === today.getDay() && (today.getFullYear() - checkDate.getFullYear()) === 18) {
        return true;
    } else {
        let age = diff / 1000 / 3600 / 24 / 365.25
        if (age >= 18) {
            return true;
        } else {
            return false;
        }
    }
}