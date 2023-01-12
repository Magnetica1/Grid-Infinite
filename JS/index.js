window.addEventListener("scroll", function(event) {
  
    var top = this.scrollY

        console.log(top);

        if(top > 100) {
            for (let index = 0; index < 99; index++){
                //Get the card
                var card = document.querySelector("#card-1");
                //Create the copy of card
                const clone = card.cloneNode(true)    
                //Add it to the DOM 
                card.after(clone);
            }
            for (let x = 0; x < 98; x++) {
            //Removes element
            card.remove()
            }
        }
}, false);
