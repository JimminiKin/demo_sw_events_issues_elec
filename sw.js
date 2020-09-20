console.log("SW Ready");

self.addEventListener("install", function (event) {
  console.log("SW Installed");
});

self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.url.includes("bypassSW")) {
    console.log(`Bypassing SW for ${req.url}`);
  } else {
    console.log(`Fetching from SW for ${req.url}`);
    event.respondWith(fetch(req));
  }
});
