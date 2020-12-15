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
    const submitEl = document.querySelector("button[type=submit]");

    for (const aEl of aEls) {
      aEl.href = aEl.href.replace(/\?.*/, "") + "?t=1";
    }

    if (submitEl) {
      submitEl.addEventListener("click", (e) => {
        e.preventDefault();
        window.location = window.location;
      });
    }
  }
});
