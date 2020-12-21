function openNav() {
  document.getElementById("myNav").style.width="100%";
}

function closeNav() {
  document.getElementById("myNav").style.width="0%";
}

function openSubNav() {
  document.getElementById("subNav").style.display="block";
}

function closeSubNav() {
  document.getElementById("subNav").style.display="none";
}

function myFunction(x) {
  x.classList.toggle("fa-sun");
  var ele = document.body;
  ele.classList.toggle('dark-mode');
  if (x.classList[2]!=null){
    document.getElementById('main-a-Nav').style.color='white';
    document.getElementById('full-head').style.animation='none';
    document.getElementById('react').src="assets/img/w-react.png";
    document.getElementById('angular').src="assets/img/w-angular.png";
    document.getElementById('html5').src="assets/img/w-html5.png";
    document.getElementById('css').src="assets/img/w-css.png";
    document.getElementById('js').src="assets/img/w-js.png";
    document.getElementById('php').src="assets/img/w-php.png";
    document.getElementById('python').src="assets/img/w-python.png";
    document.getElementById('java').src="assets/img/w-java.png";
    document.getElementById('node').src="assets/img/w-node.png";
    document.getElementById('rails').src="assets/img/w-rails.png";
    document.getElementById('ios').src="assets/img/w-ios.png";
    document.getElementById('android').src="assets/img/w-android.png";
    document.getElementById('react1').src="assets/img/w-react1.png";
    document.getElementById('flutter').src="assets/img/w-flutter.png";
    document.getElementById('wordpress').src="assets/img/w-wordpress.png";
    document.getElementById('magento').src="assets/img/w-magento.png";
    document.getElementById('shopify').src="assets/img/w-shopify.png";
    document.getElementById('mysql').src="assets/img/w-sql.png";
    document.getElementById('mongodb').src="assets/img/w-mongodb.png";
    document.getElementById('oracle').src="assets/img/w-oracle.png";
    document.getElementById('firebase').src="assets/img/w-firebase.png";
    document.getElementById('mob-values').style.background='white';
    document.getElementById('dddd-values').style.color='white';
  }
  if (x.classList[2] == null){
    document.getElementById('main-a-Nav').style.color='black';
    document.getElementById('full-head').style.animation='animate 15s ease-in-out infinite';
    document.getElementById('react').src="assets/img/react.png";
    document.getElementById('angular').src="assets/img/angular.png";
    document.getElementById('html5').src="assets/img/html5.png";
    document.getElementById('css').src="assets/img/css.png";
    document.getElementById('js').src="assets/img/js.png";
    document.getElementById('php').src="assets/img/php.png";
    document.getElementById('python').src="assets/img/python.png";
    document.getElementById('java').src="assets/img/java.png";
    document.getElementById('node').src="assets/img/node.png";
    document.getElementById('rails').src="assets/img/rails.png";
    document.getElementById('ios').src="assets/img/ios.png";
    document.getElementById('android').src="assets/img/android.png";
    document.getElementById('react1').src="assets/img/react.png";
    document.getElementById('flutter').src="assets/img/flutter.png";
    document.getElementById('wordpress').src="assets/img/wordpress.png";
    document.getElementById('magento').src="assets/img/magento.png";
    document.getElementById('shopify').src="assets/img/shopify.png";
    document.getElementById('mysql').src="assets/img/mysql.png";
    document.getElementById('mongodb').src="assets/img/mongodb.png";
    document.getElementById('oracle').src="assets/img/oracle.png";
    document.getElementById('firebase').src="assets/img/firebase.png";
    document.getElementById('mob-values').style.background='#000011';
    document.getElementById('dddd-values').style.color='white';
  }
}

// text typing effect
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// NUMBER COUNT INCREMENT
//Animate my counter from 0 to set number (6)
$({counter: 0}).animate({counter: 13}, {
  //Animate over a period of 2seconds
  duration: 3000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.project').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});
$({counter: 0}).animate({counter: 80}, {
  //Animate over a period of 2seconds
  duration: 4000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.business').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});
$({counter: 0}).animate({counter: 8}, {
  //Animate over a period of 2seconds
  duration: 3000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.states').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});
$({counter: 0}).animate({counter: 11}, {
  //Animate over a period of 2seconds
  duration: 3000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.size').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});