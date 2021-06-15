'use strict';

//let divTag = document.getElementById('div');
let table = document.getElementById('table');




let fullHours = ['6 am' , '7 am' , '8 am' , '9 am' , '10 am' , '11 am' , '12 pm' , '1 pm' , '2 pm' , '3 pm' , '4 pm' , '5 pm' , '6 pm' , '7 pm' ];

function City (name , min , max , averCookie ){

  this.name = name;
  this.minCust = min;
  this.maxCust = max ;
  this.averCookie = averCookie;
  this.cookiePerHour = [] ;
  this.total = 0 ;
  City.Cookies.push (this);

}

City.Cookies =[];

let Seatle = new City ('Seatle' , 23 , 65 , 6.3 );
let Tokyo = new City ('Tokyo' , 3 , 24 , 1.2 );
let Dubai = new City ('Dubai' , 11 , 38 , 3.7 , [] , 0);
let Paris = new City ('Paris' , 20 , 38 , 2.3 , [] , 0);
let Lima = new City ('Lima' , 2 , 16 , 4.6 , [] , 0);



City.prototype.randomCustomer = function(){



  for( let i = 0 ; i< fullHours.length ; i++){

    let totalPerHour = Math.ceil (getRandomCust(this.minCust, this.maxCust) * this.averCookie); // Math.ceil : to remove the decimele to the higher number

    this.cookiePerHour.push (totalPerHour);

    this.total += totalPerHour;
  }


};


function headTable(){

  let tr = document.createElement('tr');

  table.appendChild(tr);

  let th =document.createElement('th');

  tr.appendChild(th);

  th.textContent = '';

  for(let i = 0 ; i < fullHours.length ; i++){

    let th =document.createElement('th');

    tr.appendChild(th);

    th.textContent = fullHours[i];

  }

  let total =document.createElement('th');

  tr.appendChild(total);

  total.textContent = 'Daily totals';

}


City.prototype.render = function(){

  let tr = document.createElement('tr');

  table.appendChild(tr);

  let th = document.createElement('th');

  tr.appendChild(th);

  th.textContent = this.name;


  for( let k = 0 ; k < fullHours.length ; k++){

    let td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = this.cookiePerHour[k];
  }

  let td1 = document.createElement('th');

  tr.appendChild(td1);

  td1.textContent = this.total;
};


function footerTable(){

  let tr = document.createElement('tr');

  table.appendChild(tr);

  let th =document.createElement('th');

  tr.appendChild(th);

  th.textContent = 'total';


  let hourTot = 0;
  let totalOfTotals = 0;
  for(let i = 0 ; i < fullHours.length ; i++){
    hourTot = 0;
    for(let k = 0 ; k < City.Cookies.length ; k++){

      let total = City.Cookies[k].cookiePerHour[i];
      hourTot += total;
      totalOfTotals += total;
    }

    let th =document.createElement('th');

    tr.appendChild(th);

    th.textContent = hourTot;

  }

  let th3 =document.createElement('th');

  tr.appendChild(th3);

  th3.textContent = totalOfTotals;


}


function getRandomCust(min, max) {

  return Math.floor(Math.random() * (max - min +1) + min); //The maximum is exclusive and the minimum is inclusive
}
Tokyo.randomCustomer();
headTable();
Tokyo.render();


Paris.randomCustomer();
Paris.render();


Seatle.randomCustomer();
Seatle.render();

Dubai.randomCustomer();
Dubai.render();


Lima.randomCustomer();
Lima.render();
footerTable();
