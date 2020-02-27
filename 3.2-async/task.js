class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

//   getCurrentFormattedTime() {
//     return `${new Date().getHours()}: ${new Date().getMinutes()}`;
//   }

getCurrentFormattedTime() {
    return new Date().toTimeString().substr(0,5);
}
  addClock(time, needlyFunc, id) {
    if (id === undefined) {
      return console.error("ID будильника не задан");
    }
    if (this.alarmCollection.find(alarm => alarm.id === id) != undefined) {
      return console.error("Звонок с таким id уже существует");
    }
    this.alarmCollection.push({ time, needlyFunc, id });
  }
  removeClock(id) {
      let index = this.alarmCollection.findIndex(alarm => alarm.id === id);
    if (index != undefined) {
      this.alarmCollection.splice(index, 1);
      console.log(`звонок с id ${id} удален` );
      return true;
    } else {
      console.log("Звонок с таким id не обнаружен.")
    }
  }
  printAlarms() {
      this.alarmCollection.forEach(alarm => console.log(`Звонок с id ${alarm.id} назначен на ${alarm.time}`));
  }
  clearAlarms() {
     this.stop();
      this.alarmCollection = [];
  }
  
  
  start() {
    const checkClock = (alarm) => {
      if(alarm.time === new Date().toTimeString().substr(0,5)) {
        alarm.needlyFunc("трындыдындын");
          return true;
          } 
      }  
    const periodicalCheck = () => this.alarmCollection.forEach(checkClock);
    this.timerId = setInterval(periodicalCheck,20000);
    

  }


stop() {
    this.timerId = null;
  }
}
function testCase() {
  let clock = new AlarmClock;
  clock.addClock("12:00",console.log, "Тестовый будильник");
  clock.addClock("12:10", console.log,"Тестовый будильник 2");
  clock.addClock("12:11", console.log);
  clock.addClock("12:12", console.log,"Тестовый будильник 3");
  clock.printAlarms();
  clock.removeClock("Тестовый будильник 2");
  clock.printAlarms();
  clock.clearAlarms();
  clock.addClock("12:15", console.log,"Тестовый будильник 4");
  clock.start();
  
  


}

testCase();