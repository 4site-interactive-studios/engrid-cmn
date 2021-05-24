const tippy = require('tippy.js').default;

document.onreadystatechange = () => {    
    if(document.readyState === "interactive" || document.readyState === "complete"){
        // Render Critical because it moves DOM elements that can be above the fold
        // Has also been added to the Page Template after main.js in a <script> tag that fires after DomContentLoaded
        let inlineMonthlyUpsell = document.querySelectorAll('.move-after-transaction-recurrfreq')[0];
        let recurrFrequencyField = document.querySelectorAll('.en__field--recurrfreq')[0];
        if (inlineMonthlyUpsell && recurrFrequencyField) {
          recurrFrequencyField.insertAdjacentElement("beforeend", inlineMonthlyUpsell);
          // inlineMonthlyUpsell.style.visibility='visible';
        }

        let inlineDonationAmountHeader = document.querySelectorAll('.move-before-transaction-donationamt')[0];
        let donationAmtField = document.querySelectorAll('.en__field--donationAmt')[0];
        if (inlineDonationAmountHeader && donationAmtField) {
          donationAmtField.insertAdjacentElement("afterbegin", inlineDonationAmountHeader);
          // inlineGiftAmountHeader.style.visibility='visible';
        }

        // Add placeholder to Phone Field
        let enFieldPhone = document.querySelectorAll('#en__field_supporter_phoneNumber')[0];
        if(enFieldPhone){
          enFieldPhone.placeholder = "Phone Number";
        }

        // Add placeholder to Other Amount Field
        let enOtherAmount = document.querySelectorAll('.en__field--donationAmt input.en__field__input--other')[0];
        if(enOtherAmount){
          enOtherAmount.placeholder = "Other";
        }

        // Add placeholder to Zip Code Field
        let enFieldZip = document.querySelectorAll('#en__field_supporter_postcode')[0];
        if(enFieldZip){
          enFieldZip.placeholder = "00000";
        }

        // Add "what's this" markup to the CVV field
        let ccvvLabel = document.querySelectorAll('.en__field--ccvv > label')[0];
        if(ccvvLabel){
            let el = document.createElement('span');
            let childEl = document.createElement('a');
            childEl.href='#';
            childEl.id = 'ccv-popcorn';
            childEl.className="whats-this";
            childEl.tabIndex="-1";
            childEl.innerText="What's this?";
            childEl.addEventListener('click',e=>e.preventDefault());
            el.appendChild(childEl);
            ccvvLabel.appendChild(el);
            tippy("#ccv-popcorn", {
              content:
                "The three or four digit security code on your debit or credit card",
            });
        }


  }
};