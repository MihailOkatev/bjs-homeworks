function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
function sum(...arguments) {
    let argsArr = Array.from(arguments);
    let totalSum = 0;
    for (let i = 0; i < argsArr.length; i++) {
        totalSum += argsArr[i];
    }
    // console.log(totalSum);
    return totalSum;
}

function multi(...arguments) {
    let argsArr = Array.from(arguments);
    let totalMulti = 1;
    for (let i = 0; i < argsArr.length; i++) {
        totalMulti *= argsArr[i];
    }
    // console.log(totalMulti);

    return totalMulti;
}

function discriminant(...arguments) {
    let argsArr = Array.from(arguments);
    //Сначала нужно предусмотреть ситуацию, когда в массиве меньше аргументов, чем нужно 
    //для вычисления дискриминанта или наоборот больше
        while(argsArr.length < 3) {
            argsArr.push(0);
        }
        while(argsArr > 3) {
            argsArr.pop()
        }
        const d = Math.pow(arguments[1],2) - 4 * arguments[0] * arguments[2] // b^2 - 4ac
        return d;
    } 


const compareArrays = ((arr1, arr2) =>  arr1.every((n, i) => n === arr2[i]));
function memorize (fn, limit) {
    let results = [];
    return function () {
        const searchingInMemory = results.find(result => compareArrays(result.args, Array.from(arguments))) 
        if(searchingInMemory) {
            // console.log(`Результат из памяти`);
            return searchingInMemory.result;

        }
            if(results.length <= limit) {
                results.splice(0,1);
            
        }
        results.push({ args: Array.from(arguments), result: fn(...arguments) });
            return results[results.length - 1].result;
    }

    
}
let argsArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

function testCase(testFunction,label) {
    console.time(label);
    for(let i = 0; i < 1000; i++) {
        argsArray.forEach(elem =>testFunction(...elem));
        
    }
    console.timeEnd(label);
}
const mSum = memorize(sum,5);
const mMulti = memorize(multi,5);
const mDiscriminant = memorize(discriminant, 5)

testCase(sum,"счетчик обычной функции sum");
testCase(mSum,"счетчик memorizeSum");
testCase(multi, "Счетчик обычной Multi");
testCase(mMulti,"Счетчик MemorizeMulty");
testCase(discriminant, "Cчетчик для обычной функции дискриминанта");
testCase(mDiscriminant,"Счетчик mDiscriminant");