const display_area = document.getElementById("display_area");
const insertValues = (value) => {
  let previous_value = display_area.value;
  display_area.value = previous_value + value;
};

const deleteValues = () => {
  let previous_value = display_area.value;
  display_area.value = previous_value.slice(0, -1);
};
document.getElementById("backspace").addEventListener("click", deleteValues);

//shift keys function
let shift_keys = document.getElementsByClassName("shift_keys");

shift_keys[0].addEventListener("click", (e) => {
  if (e.target.style.backgroundColor) e.target.style.backgroundColor = "";
  else e.target.style.backgroundColor = "blue";
});

shift_keys[1].addEventListener("click", () => {
  if (e.target.style.backgroundColor) e.target.style.backgroundColor = "";
  else e.target.style.backgroundColor = "blue";
});

document.getElementById("enter").addEventListener("click", () => {
  // console.log('display_area');
});

let numbers = [
  ["`", "~"],
  ["1", "!"],
  ["2", "@"],
  ["3", "#"],
  ["4", "$"],
  ["5", "%"],
  ["6", "^"],
  ["7", "&"],
  ["8", "*"],
  ["9", "("],
  [0, ")"],
  ["-", "_"],
  ["=", "+"],
];
let alphabet = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "{[",
  "}]",
  "|\\",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ":;",
  "'",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "<,",
  ">.",
  "?/",
];

numbers.map((number) => {
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p1.textContent = number[0];
  p2.textContent = number[1];
  p1.classList.add("square_shaped_keys");
  p2.classList.add("square_shaped_keys");
  div.classList.add("multifunctional_keys");
  div.appendChild(p2);
  div.appendChild(p1);
  document.getElementById("number_keys").appendChild(div);
});

//alphabet rows
for (let i = 0; i <= 12; i++) {
  const p = document.createElement("p");
  p.textContent = alphabet[i][0];
  p.classList.add("square_shaped_keys");
  const div = document.createElement("div");
  div.appendChild(p);
  if (alphabet[i][1]) {
    let p2 = document.createElement("p");
    p2.textContent = alphabet[i][1];
    p2.classList.add("square_shaped_keys");
    div.classList.add("multifunctional_keys");
    div.appendChild(p2);
  }
  div.addEventListener("click", () =>
    insertValues(
      shift_keys[0].style.backgroundColor || shift_keys[1].style.backgroundColor
        ? alphabet[i][1]
        : alphabet[i][0]
    )
  );
  document.getElementById("alphabets_row1").appendChild(div);
}
for (let i = 13; i <= 23; i++) {
  const p = document.createElement("p");
  p.textContent = alphabet[i][0];
  p.classList.add("square_shaped_keys");
  const div = document.createElement("div");
  div.append(p);
  if (alphabet[i][1]) {
    let p2 = document.createElement("p");
    p2.textContent = alphabet[i][1];
    p2.classList.add("square_shaped_keys");
    div.classList.add("multifunctional_keys");
    div.appendChild(p2);
  }
  div.addEventListener("click", () =>
    insertValues(
      shift_keys[0].style.backgroundColor || shift_keys[1].style.backgroundColor
        ? alphabet[i][1]
        : alphabet[i][0]
    )
  );
  document.getElementById("alphabets_row2").appendChild(div);
}
for (let i = 24; i <= 35; i++) {
  const p = document.createElement("p");
  p.textContent = alphabet[i][0];
  p.classList.add("square_shaped_keys");
  const div = document.createElement("div");
  div.append(p);
  if (alphabet[i][1]) {
    let p2 = document.createElement("p");
    p2.textContent = alphabet[i][1];
    p2.classList.add("square_shaped_keys");
    div.classList.add("multifunctional_keys");
    div.appendChild(p2);
  }
  div.addEventListener("click", () =>
    insertValues(
      shift_keys[0].style.backgroundColor || shift_keys[1].style.backgroundColor
        ? alphabet[i][1]
        : alphabet[i][0]
    )
  );
  document.getElementById("alphabets_row3").appendChild(div);
}
