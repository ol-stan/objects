// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let automobile = {
    manufacturer: 'shkoda',
    model: 'octavia',
    issue: 2017,
    speed: 180,
}

let parametersAuto = '';
getParemetersAuto = () => {
    for (let key in automobile) {
        parametersAuto += (`${key} - ${automobile[key]}`) + '\n';
    }
    console.log(parametersAuto)
}
getParemetersAuto();

getTimeMove = (km) => {
    let timeMove = km / automobile.speed;
    let timeRest = 0;
    if (timeMove > 4) {
        for (let i = 4; i < timeMove; i += 4) {
            timeRest++;
        }
    } else {
        return timeMove;
    }
    return timeMove + timeRest;
}
console.log(getTimeMove(800));


// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

let drob = {
    chislennyk: 1,
    znamennyk: 4
}

getSum = () => {
    return (drob.chislennyk + drob.chislennyk) + '/' + (drob.znamennyk + drob.znamennyk);
}

console.log(getSum());

getMinus = () => {
    return (drob.chislennyk - drob.chislennyk) + '/' + (drob.znamennyk - drob.znamennyk);
}

console.log(getMinus());

getMultiplications = () => {
    return (drob.chislennyk * drob.chislennyk) + '/' + (drob.znamennyk * drob.znamennyk);
}

console.log(getMultiplications());

getDivisions = () => {
    return (drob.chislennyk * drob.znamennyk) + '/' + (drob.znamennyk * drob.chislennyk);
}

console.log(getDivisions());

getReductions = () => {
    while (drob.znamennyk) {
        let temp = drob.znamennyk;
        drob.znamennyk = drob.chislennyk % drob.znamennyk;
        drob.chislennyk = temp;
    }
    return drob.chislennyk;
}

console.log(getReductions());

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

time = {
    hours: 14,
    minutes: 48,
    seconds: 55
}


getTime = () => {
    let timeN = '';
    for (let key in time) {
        if (time[key] == time.seconds) {
            timeN += (time[key])
        } else {
            timeN += (time[key]) + ':';
        }
    }
    console.log(timeN);
}

getTime();

changeSec = (sec) => {
    let mewSec = time.seconds + sec;
    time.seconds = Math.trunc(mewSec % 60);
    if (mewSec < 0) {
        time.seconds += 60;
        time.minutes += Math.trunc(mewSec / 60);
    } else if (mewSec >= 60) {
        time.minutes += Math.trunc(mewSec / 60);
    } else {
        time.seconds = mewSec;
    }
    return getTime();
}

changeSec(76);

changeMin = (min) => {
    let mewMin = time.minutes + min;
    time.minutes = Math.trunc(mewMin % 60);
    if (mewMin < 0) {
        time.minutes += 60;
        time.hours += Math.trunc(mewMin / 60);
    } else if (mewMin >= 60) {
        time.hours += Math.trunc(mewMin / 60);
    } else {
        time.minutes = mewMin;
    }
    return getTime();
}

changeMin(28);

changeHour = (hour) => {
    let mewHour = time.hours + hour;
    // time.hours = Math.trunc(mewHour % 24);
    // if (mewHour >= 24) {
    //     time.hours += Math.trunc(mewHour / 24);
    // } else {
    time.hours = mewHour;
    // }
    return getTime();
}

changeHour(5);