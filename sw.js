console.log("SW Ready");
fetch("https://demo-sw-api.jimminikin.vercel.app/?serviceWorker", {
  method: "POST",
})
  .then((res) => res.json())
  .then((res) => {
    console.log("Result from SW", res);
  });
