const cities = ['Київ', 'Харків', 'Львів', 'Одеса', 'Дніпро'];

const distances = [
    [0, 200, 250, 300, 350],
    [200, 250, 300, 350, 0],
    [250, 300, 350, 0, 200],
    [300, 350, 0, 200, 250],
    [350, 0, 200, 250, 300]
];

const dayOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];


const data = [];


const schredule = {
    getArriveCity() {
        for (let city in cities) {
            for (departures in cities) {
                if (cities[city] == cities[departures]) {
                    continue
                }

                const date = new Date(this.randomInteger(new Date().getTime(), new Date().getTime() + 604800000));

                const day = date.getDay();
                console.log(date.getDate()); // TODO console.log

                const time = `${date.getHours()}:${date.getMinutes()}`;

                console.log(date.toLocaleTimeString()); // TODO console.log

                let obj = {
                    'from': cities[city],
                    'to': cities[departures],
                    'number': this.getNumberOfTrain(),
                    'day': dayOfWeek[date.getDay()],
                    'departure': {
                        'day': this.getDayOfWeek(date),
                        'time': date.toLocaleTimeString()
                    },
                };

                data.push(obj)
            }
        }
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


    getTime(date) {

    },

    renderTable(data) {
        let tr;
        for (let item of data) {
            console.log(item);
            const itemRow = `<tr>
      <td>${item.number}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td>${item.day}</td>
      <td>
        ${item.departure.day}
        ${item.departure.time}
</td>
      <td></td>
      <td></td>
    </tr>`

            tr = tr + itemRow;

        }

        document.querySelector('tbody').innerHTML = tr
    }
};

schredule.getArriveCity();
schredule.getNumberOfTrain();

console.log(schredule.getNumberOfTrain());
schredule.renderTable(data);






