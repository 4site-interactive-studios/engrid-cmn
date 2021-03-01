document.onreadystatechange = () => {
    if(document.readyState === "complete"){
        let paypal = document.querySelectorAll('.en__field__item.paypal label');
        let ga = document.querySelectorAll('.section-header.gift-amount')[0];
        let recurrF = document.querySelectorAll('.en__field--recurrfreq')[0];


        [].forEach.call(paypal, e=>{
            e.innerHTML = e.innerHTML + '<span></span>';
        });

        if(ga && recurrF){
            recurrF.appendChild(ga.parentNode);
        }
    }

};

