'use strict';


let fullHours = ['6 am' , '7 am' , '8 am' , '9 am' , '10 am' , '11 am' , '12 pm' , '1 pm' , '2 pm' , '3 pm' , '4 pm' , '5 pm' , '6 pm' , '7 pm' ];



function cookieNum(minCustomer , maxCustomer ){

  minCustomer = Math.ceil(minCustomer);

  maxCustomer = Math.floor(maxCustomer);

  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}

let seatle = {

  cityName : 'seatle',

  minCustomer : 23,

  maxCustomer : 65,

  averageCookie : 6.3 ,

  averageCookiePerHour :[],

  cookiesSold : 0 ,

  countCookiePerHour : function(){

    for( let i = 0 ; i <fullHours.length ; i++){

      let Customer = cookieNum(this.maxCustomer , this.maxCustomer);

      let cookiesNumber = Math.ceil(Customer * this.averageCookiePerHour);

      this.averageCookiePerHour[i] = cookiesNumber;

      let total = this.averageCookiePerHour;

      this.cookiesSold = total;

    }
  },



  render : function(){


    let divIdentifire = document.getElementById('divIdentifire');


    let articleElement = document.createElement('article');

    divIdentifire.appendChild(articleElement);


    let creatHeader = document.createElement('h2');

    articleElement.appendChild(creatHeader);

    creatHeader.textContent = 'Seattle';

    let hourList = document.createElement('ul');

    articleElement.appendChild(hourList);



    for(let i = 0 ; i <fullHours.length ; i++){

      let listItem = document.createElement('li');

      hourList.appendChild(listItem);

      listItem.textContent =fullHours[i];
    }
  }
};

seatle.render();
seatle.countCookiePerHour();
