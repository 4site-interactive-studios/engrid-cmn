const tippy = require('tippy.js').default;

document.onreadystatechange = () => {    
    if(document.readyState === "complete"){
        let paypal = document.querySelectorAll('.en__field__item.paypal label');
        let donationAmountField = document.querySelectorAll('.en__field--donationAmt')[0];
        let giftAmountHeader = document.querySelectorAll('.section-header.gift-amount')[0];
        let recurrFrequencyField = document.querySelectorAll('.en__field--recurrfreq')[0];
        let inlineMonthly = document.querySelectorAll('.inline-monthly-upsell')[0];
        let ccvvLabel = document.querySelectorAll('.en__field--ccvv > label')[0];
        let menuBtn = document.querySelectorAll('.menu-btn + a')[0];

        [].forEach.call(paypal, e=>{
            e.innerHTML = e.innerHTML + '<span></span>';
        });

        if(giftAmountHeader && donationAmountField){
            // donationAmountField.insertAdjacentElement("beforebegin", giftAmountHeader);
        }

        if (inlineMonthly && recurrFrequencyField) {
          recurrFrequencyField.insertAdjacentElement("beforeend", inlineMonthly);
        //   giftAmountHeader.style.visibility='visible';
        }

        if(ccvvLabel){
            let el = document.createElement('span');
            let childEl = document.createElement('a');
            childEl.href='#';
            childEl.id = 'ccv-popcorn';
            childEl.className="whats-this";
            childEl.innerText="What's this?";
            childEl.addEventListener('click',e=>e.preventDefault());
            el.appendChild(childEl);
            ccvvLabel.appendChild(el);
            tippy("#ccv-popcorn", {
              content:
                "The three or four digit security code on your debit or credit card",
            });
        }

        if(menuBtn){
            menuBtn.addEventListener('click',e=>{
                e.preventDefault();
            });
        }
    }

};

