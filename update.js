// define buttons
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

// define section to update version
const versionCategory1 = document.getElementById("cat-vers-1");
const versionCategory2 = document.getElementById("cat-vers-2");
const versionCategory3 = document.getElementById("cat-vers-3");

// define update-notifier section
const displayIfUpdatesAvailable = document.getElementById("should-disappear");

versionCategory1.innerText = "11";
versionCategory2.innerText = "09";
versionCategory3.innerText = "01";

check4Updates();

console.log(button1.disabled);
console.log(button2.disabled);
console.log(button3.disabled);

button1.addEventListener("click", (event) =>
  clickHandler(event.target, versionCategory1)
);

button2.addEventListener("click", (event) =>
  clickHandler(event.target, versionCategory2)
);

button3.addEventListener("click", (event) =>
  clickHandler(event.target, versionCategory3)
);

function clickHandler(button, defaultVersion) {
  const currentVersion = Number(defaultVersion.innerText);
  button.disabled = true;

  let newVersion = currentVersion + 1;

  newVersion > 9
    ? (defaultVersion.innerText = newVersion)
    : (defaultVersion.innerText = "0" + newVersion);

  check4Updates();
}

function check4Updates() {
  if (
    button1.disabled === true &&
    button2.disabled === true &&
    button3.disabled === true
  ) {
    displayIfUpdatesAvailable.classList.add("hidden");
  }
}
