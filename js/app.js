const htmlEl = document.querySelector("html");

const url = new URL(window.location.href);
const entries = url.searchParams.entries();

const urlParams = {};

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  urlParams[key] = value;
}

if (urlParams.t) {
  htmlEl.classList.add("dark-theme");
}
