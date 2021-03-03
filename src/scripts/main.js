import tippy from "tippy.js";

document.onreadystatechange = () => {    
    if(document.readyState === "complete"){
        let paypal = document.querySelectorAll('.en__field__item.paypal label');
        let ga = document.querySelectorAll('.section-header.gift-amount')[0];
        let recurrF = document.querySelectorAll('.en__field--recurrfreq')[0];
        let inlineMonthly = document.querySelectorAll('.inline-monthly-upsell')[0];
        let ccvvLabel = document.querySelectorAll('.en__field--ccvv > label')[0];
        let menuBtn = document.querySelectorAll('.menu-btn + a')[0];

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
            childEl.href='#';
            childEl.id = 'ccv-popcorn';
            childEl.className="whats-this";
            childEl.innerText="What's this?";
            childEl.addEventListener('click',e=>e.preventDefault());
            el.appendChild(childEl);
            ccvvLabel.appendChild(el);
            tippy('#ccv-popcorn',{
                content: "CCVs are needed and cool"
            });
        }

        if(menuBtn){
            menuBtn.addEventListener('click',e=>{
                e.preventDefault();
            });
        }
    }

};

