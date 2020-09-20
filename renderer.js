// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

async function run() {
  function ready() {
    return new Promise((resolve) => {
      function loaded() {
        window.removeEventListener("load", loaded);
        resolve();
      }

      if (document.readyState !== "complete") {
        window.addEventListener("load", loaded);
        return;
      }

      loaded();
    });
  }

  await ready();
  await navigator.serviceWorker.register("sw.js");

  const res = await fetch("https://demo-sw-api.jimminikin.vercel.app/?serviceWorker", {
    method: "POST",
  }).then((res) => res.json());
  console.log("Result from renderer", res);
}

window.addEventListener("load", (event) => {
  run();
});
