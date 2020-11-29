const htmlEl = document.querySelector("html");

const url = new URL(window.location.href);
const entries = url.searchParams.entries();

const urlParams = {};

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  urlParams[key] = value;
}

if (urlParams.t == 1) {
  htmlEl.classList.add("dark-theme");
}

window.addEventListener("load", function () {
  if (urlParams.t == 1) {
    const aEls = document.querySelectorAll("a");

    for (const aEl of aEls) {
      aEl.href = aEl.href.replace(/\?.*/, "") + "?t=1";
    }
  }
});
