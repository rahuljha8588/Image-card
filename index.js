let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let play = document.querySelector(".play");
let img = document.querySelector("img");
let header = document.querySelector("h2")
var count = 1;
var head = "";

//for next image

next.addEventListener("click", function () {
  if (count < 5) {
    count++;
  } else {
    count = 1;
  }
  switch (count) {
    case 1:
      head = "birds";
      break;
    case 2:
      head = "butterfly";
      break;
    case 3:
      head = "hilly's";
      break;
    case 4:
      head = "greenary";
      break;
    case 5:
      head = "houses";
      break;
  }
  var source = "images/img" + count + ".jpg";
  var a = img.setAttribute("src", source);
  header.innerHTML = head;
});

// for previous image
prev.addEventListener("click", function () {
  if (count > 1) {
    count--;
  } else {
    count = 1;
  }
  switch (count) {
    case 1:
      head = "birds";
      break;
    case 2:
      head = "butterfly";
      break;
    case 3:
      head = "hilly's";
      break;
    case 4:
      head = "greenary";
      break;
    case 5:
      head = "houses";
      break;
  }
  var source = "images/img" + count + ".jpg";
  var a = img.setAttribute("src", source);
  header.innerHTML = head;

});
