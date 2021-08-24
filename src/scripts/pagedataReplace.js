// Only run on e-cards
if (
  window.hasOwnProperty("pageJson") &&
  pageJson.hasOwnProperty("pageType") &&
  pageJson.pageType === "e-card"
) {
  // Get the form element
  const formElement = document.querySelector("form.en__component");
  // Get Search Parameters
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach(function (value, key) {
    console.log(value, key);
    formElement.innerHTML = formElement.innerHTML.replace(`{${key}}`, value);
  });

  const pageDataUrl =
    location.protocol + "//" + location.host + location.pathname + "/pagedata";
  fetch(pageDataUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // Loop through the json object
      for (const key in json) {
        if (json.hasOwnProperty(key) && json[key] !== null) {
          console.log(key, json[key]);
          // Replace the form element with the json data
          formElement.innerHTML = formElement.innerHTML.replace(
            `{${key}}`,
            json[key]
          );
        } else {
          // Clear the form element key
          formElement.innerHTML = formElement.innerHTML.replace(`{${key}}`, "");
        }
      }
    })
    .catch((error) => {
      console.error("PageData Error:", error);
    });
}
