const cities = ['Київ', 'Харків', 'Львів', 'Одеса', 'Дніпро'];

const distances = [
  [0,200,250,300,350],
  [200,250,300,350,0],
  [250,300,350,0,200],
  [300,350,0,200,250],
  [350,0,200,250,300]
];

const dayOfWeek = [	"Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];


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
       
        const time = `${date.getHours()}:${date.getMinutes()}`;
        console.log(day, 'day'); // TODO console.log
        console.log(dayOfWeek[day], 'day'); // TODO console.log


        
        let obj = {
          'from': cities[city],
          'to': cities[departures],
          'number': this.getNumberOfTrain(),
          'day': dayOfWeek[day]
        };

        data.push(obj)
      }
    }
  },

  getNumberOfTrain() {
    return Math.floor(Math.random()*(999-100+1)+100) + Math.random().toString(36).substring(12, 15).toUpperCase();
  },

  // getStartDate() {
  //   function randomInteger(min, max) {
  //     var rand = min - 0.5 + Math.random() * (max - min + 1)
  //     rand = Math.round(rand);
  //     return rand;
  //   }
  // },
  randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
},
  
  renderTable(data) {
    let tr;
    for(let item of data) {
      console.log(item);
      const itemRow = `<tr>
      <td>${item.number}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td>${item.day}</td>
      <td></td>
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

// console.log(schredule.getStartDate());
console.log(new Date(schredule.randomInteger(new Date().getTime(), new Date().getTime() + 604800000))); // TODO console.log





