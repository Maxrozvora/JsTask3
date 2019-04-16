const cities = ['Київ', 'Харків', 'Львів', 'Одеса', 'Дніпро'];

const distances = [
  [0,200,250,300,350],
  [200,250,300,350,0],
  [250,300,350,0,200],
  [300,350,0,200,250],
  [350,0,200,250,300]
];


const data = [];


const schredule = {
  getArriveCity() {
    for (let city in cities) { 
      for (departures in cities) {
        if (cities[city] == cities[departures]) {
          continue
        }
        

        let obj = {
          'from': cities[city],
          'to': cities[departures],
          'number': this.getNumberOfTrain(),
          'arrive': this.getStartDate().getDay(),
          

        }

        data.push(obj)
      }
    }
  },

  getNumberOfTrain() {
    return Math.floor(Math.random()*(999-100+1)+100) + Math.random().toString(36).substring(12, 15).toUpperCase();
  },

  getStartDate() {
    const start = new Date(2019, 04, 15);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  },
  
  renderTable(data) {
    let tr;
    for(let item of data) {
      console.log(item);
      const itemRow = `<tr>
      <td>${item.number}</td>
      <td>${item.from}</td>
      <td>${item.to}</td>
      <td></td>
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

console.log(schredule.getStartDate());






