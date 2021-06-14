'use strict';

let table = document.createElement('table');
let divTag = document.getElementById('div');
divTag.appendChild(table);


let hour = ['','6 am  ' , '7 am  ' , '8 am  ' , '9 am  ' , '10 am  ' , '11 am  ' , '12 pm  ' , '1 pm  ' , '2 pm  ' , '3 pm  ' , '4 pm  ' , '5 pm  ' , '6 pm  ' , '7 pm  ', 'Daily Location Total' ];

let fullHours = ['6 am' , '7 am' , '8 am' , '9 am' , '10 am' , '11 am' , '12 pm' , '1 pm' , '2 pm' , '3 pm' , '4 pm' , '5 pm' , '6 pm' , '7 pm' ];

function City (name , minCust , maxCust , CoookiesperCust , cookiePerHour , total){

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust ;
  this.CoookiesperCust = CoookiesperCust;
  this.cookiePerHour = cookiePerHour ;
  this.total = total ;

}

let seatle = new City ('Seatle' , 23 , 65 , 6.3 , [] , 0);
let Tokyo = new City ('Tokyo' , 3 , 24 , 1.2 , [] , 0);
let Dubai = new City ('Dubai' , 11 , 38 , 3.7 , [] , 0);
let Paris = new City ('Paris' , 20 , 38 , 2.3 , [] , 0);
let Lima = new City ('Lima' , 2 , 16 , 4.6 , [] , 0);


City.prototype.getRandomCust = function(minCust ,maxCust) {

  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
};



City.prototype.randomCustomer = function(){


  for( let i = 0 ; i< fullHours.length ; i++){

    let totalPerHour = Math.ceil (this.getRandomCust(this.minCust , this.maxCust) * this.CoookiesperCust); // Math.ceil : to remove the decimele to the higher number

    this.cookiePerHour.push (totalPerHour);

    this.total += totalPerHour;
  }


};

City.prototype.header = function(){

  let hour = ['','6am ' , '7am ' , '8am ' , '9am' , '10am ' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm', 'Daily Location Total' ];

  let th = document.createElement('th');

  table.appendChild(th);

  for(let j = 0 ;j < hour.length ; j++){

    let td = document.createElement('td');
    th.appendChild(td);
    td.textContent = hour[j];

  }
};

City.prototype.render =function(){



  let firstRaw =  document.createElement('tr');

  table.appendChild(firstRaw);

  for(let j = 0 ;j < hour.length ; j++){


    let td = document.createElement('td');

    firstRaw.appendChild(td);

    td.textContent = this.cookiePerHour[j];
  }
};




seatle.getRandomCust(23,65);

seatle.randomCustomer();
seatle.header();
seatle.render();


Tokyo.getRandomCust(23,65);
Tokyo.randomCustomer();
Tokyo.render();


Dubai.getRandomCust(23,65);
Dubai.randomCustomer();
Dubai.render();


Paris.getRandomCust(23,65);
Paris.randomCustomer();
Paris.render();

Lima.getRandomCust(23,65);
Lima.randomCustomer();
Lima.render();
