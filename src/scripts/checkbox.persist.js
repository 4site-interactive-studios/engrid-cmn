/*
  _  _  ____  _ _         ____  _             _ _
 | || |/ ___|(_) |_ ___  / ___|| |_ _   _  __| (_) ___  ___
 | || |\___ \| | __/ _ \ \___ \| __| | | |/ _` | |/ _ \/ __|
 |__   _|__) | | ||  __/  ___) | |_| |_| | (_| | | (_) \__ \
    |_||____/|_|\__\___| |____/ \__|\__,_|\__,_|_|\___/|___/

 */

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

// If there's any checkbox on the page
const checkboxes = document.querySelectorAll("input[type='checkbox']");

if (checkboxes.length) {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", (event) => {
      localStorage.setObj(event.target.name, event.target.checked);
    });
    localStorage.setObj(checkboxes[i].name, checkboxes[i].checked);
  }
}
