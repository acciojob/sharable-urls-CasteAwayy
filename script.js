const form = document.querySelector("form");
const url = document.querySelector("#url");

let URL = `https://localhost:8080/`;
url.textContent = URL;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let buildUrl = "";
  URL = `https://localhost:8080/`;
  const formData = new FormData(this);
  if (formData.get("name") && formData.get("year")) {
    buildUrl = `?name=${formData.get("name")}&year=${formData.get("year")}`;
  } else if (formData.get("name")) {
    buildUrl = `?name=${formData.get("name")}`;
  } else if (formData.get("year")) {
    buildUrl = `?year=${formData.get("year")}`;
  }
  URL = URL + buildUrl;
  url.textContent = URL;
});