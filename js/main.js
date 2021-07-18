function togglehide(item, item2='null') {
    var x = document.getElementById(item);
    var y = document.getElementById(item2);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
  function getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
      }
      else
      {
          begin += 2;
          var end = document.cookie.indexOf(";", begin);
          if (end == -1) {
          end = dc.length;
          }
      }
      // because unescape has been deprecated, replaced with decodeURI
      //return unescape(dc.substring(begin + prefix.length, end));
      return decodeURI(dc.substring(begin + prefix.length, end));
  } 

  function darkmodetoggle() {
      var myCookie = getCookie("darkmodepref");
      darkmodebutton = document.getElementById('darkmodebutton')
      if (myCookie.includes('False')){
        document.cookie = "darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC";
        darkmodebutton.innerText = 'Light Mode'
      } else if (myCookie.includes('True')){
        document.cookie = "darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC";
        darkmodebutton.innerText = 'Dark Mode'
      }
      document.body.classList.toggle("darkmode");
      }
  function checkdarkmode() {
    darkmodebutton = document.getElementById('darkmodebutton')
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    var myCookie = getCookie("darkmodepref");
    if (myCookie == null){
          if (prefersDarkScheme.matches) {
                document.cookie = "darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC";
                document.body.classList.toggle("darkmode");
                darkmodebutton.innerText = 'Light Mode'
          }
      } else if (myCookie.includes('True')){
        document.body.classList.toggle("darkmode");
        darkmodebutton.innerText = 'Light Mode'
      } else {
        darkmodebutton.innerText = 'Dark Mode'
        document.cookie = "darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC";
      }
  }
  function clickID(itemid) {
    document.getElementById(itemid).click();
  }

function togglefade(elementID){
    var element = document.getElementById(elementID)
    if (element.classList.contains('faded')){
      element.classList.remove('faded')
    } else {
      element.classList.add('faded')
    }
}

function home(){
  var buttoncontainters = document.getElementsByClassName('fillpage')
  var arrayLength = buttoncontainters.length;
  for (var i = 0; i < arrayLength; i++) {
    if (buttoncontainters[i].id == 'index'){
      continue
    }
    if (!buttoncontainters[i].classList.contains('faded')){
      buttoncontainters[i].classList.add('faded')
    }
  }
}

function unfade(elementID){
  var element = document.getElementById(elementID)
  if (element.classList.contains('faded')){
    element.classList.remove('faded')
  }
}

function fade(elementID){
  var element = document.getElementById(elementID)
  if (!element.classList.contains('faded')){
    element.classList.add('faded')
  }
}

function addbackbutton(){
  var backbutton = document.getElementById('backbutton')
  if (backbutton.classList.contains('hideitem')){
    backbutton.classList.remove('hideitem')
  }
}

function goBack() {
  window.history.back();
}

function ismobile(){
  console.log(window.outerWidth)
    return ( ( window.outerWidth <= 900 ));
}

function mobilefix(){
  var hscroller = document.getElementById('hscroller')
  if (ismobile()) {
    console.log('is')
    hscroller.classList.remove("hscroll");   
  }
}