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

if (
  button1.disabled === true &&
  button2.disabled === true &&
  button3.disabled === true
) {
  ///
}

button1.addEventListener("click", function () {
  const currentVersion = Number(versionCategory1.innerText);
  if (currentVersion === 14) {
    button1.disabled = true;
    return;
  }

  let newVersion = currentVersion + 1;
  versionCategory1.innerText = newVersion;
});
