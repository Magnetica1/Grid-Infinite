    function scrollDuplicate() {
        for (let index = 0; index < 1000; index++){
            //Get the card
            var card = document.querySelector("#card-1");
            //Create the copy of card
            const clone = card.cloneNode(true)    
            //Add it to the DOM 
            card.after(clone);
        }
    }

    scrollDuplicate()

const scroller = document.querySelector("#scroller");

scroller.addEventListener("scroll", (event) => {
  console.log(scroller.scrollTop);
});
