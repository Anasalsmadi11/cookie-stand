'use strict';


let divTag = document.getElementById('div');

let fullHours = ['6 am' , '7 am' , '8 am' , '9 am' , '10 am' , '11 am' , '12 pm' , '1 pm' , '2 pm' , '3 pm' , '4 pm' , '5 pm' , '6 pm' , '7 pm' ];

let seatle = {

  name : 'seatle' ,

  minCust: 23,

  maxCust: 65,

  CoookiesperCust:  6.3,

  cookiePerHour:[],

  total: 0,

  randomCustomer: function(){



    for( let i = 0 ; i< fullHours.length ; i++){

      let totalPerHour = Math.ceil (getRandomCust(this.minCust,this.maxCust) * this.CoookiesperCust); // Math.ceil : to remove the decimele to the higher number

      this.cookiePerHour.push (totalPerHour);

      this.total += totalPerHour;
    }

  },

  render : function(){

    let creatArticle = document.createElement('article');

    divTag.appendChild(creatArticle);

    let h2 = document.createElement('h2');

    creatArticle.appendChild(h2);

    h2.textContent = this.name;

    let ul = document.createElement('ul');

    creatArticle.appendChild(ul);

    for( let k = 0 ; k < fullHours.length ; k++){

      let li = document.createElement('li');

      ul.appendChild(li);

      li.textContent = `${fullHours[k]} : ${this.cookiePerHour[k]} cookies`;
    }

    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total : ${this.total} cookies`;
  }

};

function getRandomCust(minCust, maxCust) {

  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}


seatle.randomCustomer();
seatle.render();



let Tokyo = {

  name : 'Tokyo' ,

  minCust: 3,

  maxCust: 24,

  CoookiesperCust:  1.2,

  cookiePerHour:[],

  total: 0,

  randomCustomer: function(){



    for( let i = 0 ; i< fullHours.length ; i++){

      let totalPerHour = Math.ceil (getRandomCust(this.minCust,this.maxCust) * this.CoookiesperCust); // Math.ceil : to remove the decimele to the higher number

      this.cookiePerHour.push (totalPerHour);

      this.total += totalPerHour;
    }

  },

  render : function(){

    let creatArticle = document.createElement('article');

    divTag.appendChild(creatArticle);

    let h2 = document.createElement('h2');

    creatArticle.appendChild(h2);

    h2.textContent = this.name;

    let ul = document.createElement('ul');

    creatArticle.appendChild(ul);

    for( let k = 0 ; k < fullHours.length ; k++){

      let li = document.createElement('li');

      ul.appendChild(li);

      li.textContent = `${fullHours[k]} : ${this.cookiePerHour[k]} cookies`;
    }

    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total : ${this.total} cookies`;
  }

};



Tokyo.randomCustomer();
Tokyo.render();



let Dubai = {

  name : 'Dubai' ,

  minCust: 11,

  maxCust: 38,

  CoookiesperCust:  3.7,

  cookiePerHour:[],

  total: 0,

  randomCustomer: function(){



    for( let i = 0 ; i< fullHours.length ; i++){

      let totalPerHour = Math.ceil (getRandomCust(this.minCust,this.maxCust) * this.CoookiesperCust); // Math.ceil : to remove the decimele to the higher number

      this.cookiePerHour.push (totalPerHour);

      this.total += totalPerHour;
    }

  },

  render : function(){

    let creatArticle = document.createElement('article');

    divTag.appendChild(creatArticle);

    let h2 = document.createElement('h2');

    creatArticle.appendChild(h2);

    h2.textContent = this.name;

    let ul = document.createElement('ul');

    creatArticle.appendChild(ul);

    for( let k = 0 ; k < fullHours.length ; k++){

      let li = document.createElement('li');

      ul.appendChild(li);

      li.textContent = `${fullHours[k]} : ${this.cookiePerHour[k]} cookies`;
    }

    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total : ${this.total} cookies`;
  }

};



Dubai.randomCustomer();
Dubai.render();


let Paris = {

  name : 'Paris' ,

  minCust: 3,

  maxCust: 24,

  CoookiesperCust:  1.2,

  cookiePerHour:[],

  total: 0,

  randomCustomer: function(){



    for( let i = 0 ; i< fullHours.length ; i++){

      let totalPerHour = Math.ceil (getRandomCust(this.minCust,this.maxCust) * this.CoookiesperCust); // Math.ceil : to remove the decimele to the higher number

      this.cookiePerHour.push (totalPerHour);

      this.total += totalPerHour;
    }

  },

  render : function(){

    let creatArticle = document.createElement('article');

    divTag.appendChild(creatArticle);

    let h2 = document.createElement('h2');

    creatArticle.appendChild(h2);

    h2.textContent = this.name;

    let ul = document.createElement('ul');

    creatArticle.appendChild(ul);

    for( let k = 0 ; k < fullHours.length ; k++){

      let li = document.createElement('li');

      ul.appendChild(li);

      li.textContent = `${fullHours[k]} : ${this.cookiePerHour[k]} cookies`;
    }

    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total : ${this.total} cookies`;
  }

};



Paris.randomCustomer();
Paris.render();




let Lima = {

  name : 'Lima' ,

  minCust: 2,

  maxCust: 16,

  CoookiesperCust:  4.6,

  cookiePerHour:[],

  total: 0,

  randomCustomer: function(){



    for( let i = 0 ; i< fullHours.length ; i++){

      let totalPerHour = Math.ceil (getRandomCust(this.minCust,this.maxCust) * this.CoookiesperCust); // Math.ceil : to remove the decimele to the higher number

      this.cookiePerHour.push (totalPerHour);

      this.total += totalPerHour;
    }

  },

  render : function(){

    let creatArticle = document.createElement('article');

    divTag.appendChild(creatArticle);

    let h2 = document.createElement('h2');

    creatArticle.appendChild(h2);

    h2.textContent = this.name;

    let ul = document.createElement('ul');

    creatArticle.appendChild(ul);

    for( let k = 0 ; k < fullHours.length ; k++){

      let li = document.createElement('li');

      ul.appendChild(li);

      li.textContent = `${fullHours[k]} : ${this.cookiePerHour[k]} cookies`;
    }

    let li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = `Total : ${this.total} cookies`;
  }

};



Lima.randomCustomer();
Lima.render();

