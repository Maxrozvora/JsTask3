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

    getRandomCityIndex(cities) {
        return this.randomInteger(0, cities.length - 1);
    },

    getArriveCity() {
        const n = prompt('Введіть кількість поїздів', 20);

        const usedCities = [];

        while (data.length < n && n <= 20) {
            const randDepartureCity = this.getRandomCityIndex(cities);

            const randArrivalCity = this.getRandomCityIndex(cities);

            let departureCity = cities[randDepartureCity];

            let arrivalCity = cities[randArrivalCity];


            if (randDepartureCity == randArrivalCity) {
                continue
            }

            if (!usedCities.includes(departureCity + arrivalCity)) {
                usedCities.push(departureCity + arrivalCity);
                data.push(this.createScreduleItem(randDepartureCity, randArrivalCity))
            }
        }

    },

    createScreduleItem(randDepartureCity, randArrivalCity) {

        const date = new Date(this.randomInteger(new Date().getTime(), new Date().getTime() + 604800000));

        const distance = this.getDistance(randDepartureCity, randArrivalCity);

        const data = new Date(date);

        const averageSpeed = this.randomInteger(80, 120);

        const arriveTime = data.addHours(this.getTravelTime(distance, averageSpeed));

        const cost = (distance / averageSpeed * 40.251).toFixed(2);


        return  {
            'from': cities[randDepartureCity],
            'to': cities[randArrivalCity],
            'number': this.getNumberOfTrain(),
            'day': dayOfWeek[date.getDay()],
            'departure': {
                'day': this.getDayOfWeek(date),
                'time': this.getTimeFormat(date)
            },
            'arrive': {
                'day': this.getDayOfWeek(arriveTime),
                'time': this.getTimeFormat(arriveTime)
            },
            'cost': cost
        };
    },

    getNumberOfTrain() {
        return Math.floor(Math.random() * (999 - 100 + 1) + 100) + Math.random().toString(36).substring(12, 15).toUpperCase();
    },

    randomInteger(min, max) {
        const rand = min - 0.5 + Math.random() * (max - min + 1);
        return  Math.round(rand);

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

    getTravelTime(distance, averageSpeed) {
        const result = (distance / averageSpeed).toFixed(2) * 60;
        const hours = result / 60 | 0;
        const minutes = (result % 60).toFixed();
        return [hours,parseInt(minutes)]
    },

    getTimeFormat(time) {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if(minutes < 9) {
            minutes = `0${time.getMinutes()}`
        }
        if(hours < 9) {
            hours = `0${time.getHours()}`
        }
        return `${hours} : ${minutes}`
    },

    getDistance(from, to) {
        return distances[from][to];        
    },


    renderTable(data) {
        let tr = '';
        for (let item of data) {
            const itemRow = `<tr>
      <td>${item.number}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td>${item.day}</td>
      <td>
        <div>${item.departure.day}</div>
        <div>${item.departure.time}</div>
        </td>
      <td>
        <div>${item.arrive.day}</div>
        <div>${item.arrive.time}</div>
        </td>
      <td>${item.cost}</td>
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

schredule.renderTable(data);









