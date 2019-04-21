const cities = ['Київ', 'Харків', 'Львів', 'Одеса', 'Дніпро'];

const distances = [
    [0, 200, 250, 300, 350],
    [200, 0, 300, 350, 400],
    [250, 300, 0, 400, 200],
    [300, 350, 400, 0, 250],
    [350, 400, 200, 250, 0]
];

const dayOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];


const data = [];


const schredule = {

    getRandomiseArr(arr, n) {

        const randIndx = [];
        const randArr = [];

        while (randIndx.length < n) {
            let random = this.randomInteger(0, arr.length - 1);

            if (!randIndx.includes(random)) {
                randIndx.push(random);
                randArr.push(arr[random])
            }
        }
        return randArr;
    },

    getRandomCity(cities) {
        const random = this.randomInteger(0, cities.length - 1);
        return cities[random];
    },

    getArriveCity() {
        const n = prompt('Введіть кількість поїздів', 20);

        const departureCities = this.getRandomiseArr(cities, cities.length);
        const arrivalCities = this.getRandomiseArr(cities, cities.length);

        const usedCities = [];

        while (data.length < n && n <= 20) {
            let departureCity = this.getRandomCity(cities);
            let arrivalCity = this.getRandomCity(cities);

            if (departureCity == arrivalCity) {
                continue
            }

            if (!usedCities.includes(departureCity + arrivalCity)) {
                usedCities.push(departureCity + arrivalCity);
                data.push(this.createScreduleItem(departureCity, arrivalCity))
            }
        }

    },

    createScreduleItem(departureCity, arrivalCity) {

        const date = new Date(this.randomInteger(new Date().getTime(), new Date().getTime() + 604800000));

        const distance = this.getDistance(departureCity, arrivalCity);

        const data = new Date(date);

        const arriveTime = data.addHours(this.getTravelTime(distance));
console.log(this.getArriveTime(arriveTime)); // TODO console.log

        let obj = {
            'from': departureCity,
            'to': arrivalCity,
            'number': this.getNumberOfTrain(),
            'day': dayOfWeek[date.getDay()],
            'departure': {
                'day': this.getDayOfWeek(date),
                'time': date.toLocaleTimeString()
            },
            'arrive': {
                'day': this.getDayOfWeek(arriveTime),
                'time': this.getArriveTime(arriveTime)
            },
        };

        return obj;

    },

    getNumberOfTrain() {
        return Math.floor(Math.random() * (999 - 100 + 1) + 100) + Math.random().toString(36).substring(12, 15).toUpperCase();
    },

    randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    },

    getDayOfWeek(date) {
        if (date.getDate() === new Date().getDate()) {
            return 'Сьгодні'
        } else if (date.getDate() === new Date().getDate() + 1) {
            return 'Завтра'
        } else {
            return dayOfWeek[date.getDay()]
        }
    },

    getTravelTime(distance) {
        const averageSpeed = this.randomInteger(80, 120);
        const result = (distance / averageSpeed).toFixed(2) * 60;
        const hours = result / 60 | 0;
        const minutes = (result % 60).toFixed();
        return [hours,parseInt(minutes)]
    },

    getArriveTime(arriveTime) {
        return `${arriveTime.getHours()} : ${arriveTime.getMinutes()}`
    },

    getDistance(city, dapartures) {
        console.log(city, dapartures); // TODO console.log
        return 100;
    },


    getTime(date) {

    },

    renderTable(data) {
        let tr;
        for (let item of data) {
            const itemRow = `<tr>
      <td>${item.number}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td>${item.day}</td>
      <td>
        ${item.departure.day}
        ${item.departure.time}
        </td>
      <td>
        ${item.arrive.day}
        ${item.arrive.time}
        </td>
      <td></td>
    </tr>`

            tr = tr + itemRow;

        }

        document.querySelector('tbody').innerHTML = tr
    }
};

Date.prototype.addHours = function(time){
    this.setHours(this.getHours()+time[0]);
    this.setMinutes(this.getMinutes()+time[1]);
    return this;
};

schredule.getArriveCity();
schredule.getNumberOfTrain();

console.log(schredule.getNumberOfTrain());
schredule.renderTable(data);









