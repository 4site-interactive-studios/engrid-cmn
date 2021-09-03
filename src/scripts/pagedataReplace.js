// Only run on e-cards
if (
  window.hasOwnProperty("pageJson") &&
  pageJson.hasOwnProperty("pageType") &&
  pageJson.pageType === "e-card"
) {
  // Get the form elements
  const formElements = document.querySelectorAll(
    "input[type='text'], textarea"
  );
  // Get Search Parameters
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach(function (value, key) {
    console.log(value, key);
    formElements.forEach(function (element) {
      element.value = element.value.replace(`{${key}}`, value);
    });
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
          formElements.forEach(function (element) {
            element.value = element.value.replace(`{${key}}`, json[key]);
          });
        } else {
          // Clear the form element
          formElements.forEach(function (element) {
            element.value = element.value.replace(`{${key}}`, "");
          });
        }
      }
    })
    .catch((error) => {
      console.error("PageData Error:", error);
    });
}