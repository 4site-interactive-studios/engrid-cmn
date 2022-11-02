const tippy = require("tippy.js").default;

document.onreadystatechange = () => {
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    const enAddInputPlaceholder = document.querySelector(
      "[data-engrid-add-input-placeholders]"
    );

    // Add placeholder to Phone Field
    let enFieldPhone = document.querySelectorAll(
      "#en__field_supporter_phoneNumber"
    )[0];
    if (enAddInputPlaceholder && enFieldPhone) {
      enFieldPhone.placeholder = "Phone Number";
    }

    // Add placeholder to Other Amount Field
    let enOtherAmount = document.querySelectorAll(
      ".en__field--donationAmt input.en__field__input--other"
    )[0];
    if (enAddInputPlaceholder && enOtherAmount) {
      enOtherAmount.placeholder = "Other";
    }

    // Add placeholder to Zip Code Field
    let enFieldZip = document.querySelectorAll(
      "#en__field_supporter_postcode"
    )[0];
    if (enAddInputPlaceholder && enFieldZip) {
      enFieldZip.placeholder = "00000";
    }

    // Add "what's this" markup to the CVV field
    let ccvvLabel = document.querySelectorAll(".en__field--ccvv > label")[0];
    if (ccvvLabel) {
      let el = document.createElement("span");
      let childEl = document.createElement("a");
      childEl.href = "#";
      childEl.id = "ccv-popcorn";
      childEl.className = "whats-this";
      childEl.tabIndex = "-1";
      childEl.innerText = "What's this?";
      childEl.addEventListener("click", (e) => e.preventDefault());
      el.appendChild(childEl);
      ccvvLabel.appendChild(el);
      tippy("#ccv-popcorn", {
        content:
          "The three or four digit security code on your debit or credit card",
      });
    }
  }
};
