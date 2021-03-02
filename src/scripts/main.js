// import { createPopper } from "popper.js";

document.onreadystatechange = () => {    
    if(document.readyState === "complete"){
        let paypal = document.querySelectorAll('.en__field__item.paypal label');
        let ga = document.querySelectorAll('.section-header.gift-amount')[0];
        let recurrF = document.querySelectorAll('.en__field--recurrfreq')[0];
        let inlineMonthly = document.querySelectorAll('.inline-monthly-upsell')[0];
        let ccvvLabel = document.querySelectorAll('.en__field--ccvv > label')[0];

        [].forEach.call(paypal, e=>{
            e.innerHTML = e.innerHTML + '<span></span>';
        });

        if(ga && recurrF){
            recurrF.appendChild(ga.parentNode);
        }

        if (inlineMonthly && recurrF) {
          ga.insertAdjacentElement("beforebegin", inlineMonthly);
        }

        if(ccvvLabel){
            let el = document.createElement('span');
            let childEl = document.createElement('a');
            childEl.id = 'ccv-popcorn';
            childEl.className="whats-this";
            childEl.innerText="What's this?";
            let div = document.createElement('div');
            div.id = 'ccv-tooltip';
            div.innerText = 'CCVs are needed and cool';
            div.style.display = 'none';
            el.appendChild(childEl);
            ccvvLabel.appendChild(el);
            ccvvLabel.appendChild(div);
            // createPopper(childEl,div, {
            //     placement: 'top'
            // })
        }
    }

};

