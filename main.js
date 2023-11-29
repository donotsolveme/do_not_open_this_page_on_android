function onLoad() {
  let os = document.querySelector("#os");
  let ua = document.querySelector("#ua");
  os.textContent = os.textContent.replace(
    "_",
    platform.os.toString(),
  );
  ua.textContent = ua.textContent.replace("_", navigator.userAgent);
}

window.addEventListener("load", onLoad);
