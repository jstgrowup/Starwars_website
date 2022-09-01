let id;
async function searchChar(val) {
  try {
    let url = `https://swapi.dev/api/people/?search=${val}`;
    let res = await fetch(url);
    let data = await res.json();

    return data.results;
  } catch {
    console.log("something wrong");
  }
}

async function main() {
  let val = document.querySelector("#myin").value;
  let response = searchChar(val);
  let data = await response;
  //   console.log("data:", data);
  display(data);
}
function display(data) {
  document.querySelector("#searchbar").innerHTML = null;
  if (data === undefined) {
    return false;
  }
  data.forEach(function (el) {
    let name = document.createElement("p");
    name.innerHTML = el.name;
    name.setAttribute("class", "searchres");
    name.addEventListener("click", function () {
      myfun(el);
    });
    document.querySelector("#searchbar").append(name);
  });
  //  console.log('data:', data)
}
function debouce(fun, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    fun();
  }, delay);
}
function myfun(el) {
  document.getElementById("main").innerHTML = "";
  let char = document.createElement("h1");
  char.innerHTML = el.name;
  let maindiv = document.createElement("div");
  maindiv.setAttribute("id", "maindiv");
  maindiv.style.border = "2px solid rgb(255, 235, 0)";
  let birth = document.createElement("p");
  birth.innerHTML = "Birth Year : " + el.birth_year;
  let gender = document.createElement("p");
  gender.innerHTML = "Gender : " + el.gender;
  let height = document.createElement("p");
  height.innerHTML = "Height : " + el.height;
  let eye_color = document.createElement("p");
  eye_color.innerHTML = "Eye Color : " + el.eye_color;
  let weight = document.createElement("p");
  weight.innerHTML = "Mass : " + el.mass;
  let hair = document.createElement("p");
  hair.innerHTML = "Hair Color : " + el.hair_color;
  let skin = document.createElement("p");
  skin.innerHTML = "Skin Color : " + el.skin_color;
  maindiv.append(birth, gender, height, eye_color, weight, hair, skin);
  let btn = document.createElement("button");
  btn.innerHTML = "Go Back";
  btn.setAttribute("id", "go");
  btn.addEventListener("click", function () {
    goback();
  });
  document.querySelector("#main").append(char, maindiv, btn);

  //   console.log(el);
}
function goback() {
  window.location.reload();
}
