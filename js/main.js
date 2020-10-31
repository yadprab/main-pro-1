//main-fun
function mainFn(){
    //get bars icon
    const hamBurgerIcon = document.querySelector('#hamburger-icon');
    const closeButton = document.querySelector('#close-icon');
     //get button section
     const icons = document.querySelector('.icon--section');
      //get nav-links
      const navLinks = document.querySelector('.nav-links');
      console.log(navLinks);
      //get label 
      const label = document.querySelector('label');


    //navToggle-Fn
    function navToggle(e) {
        e.preventDefault();
        //add  class
        navLinks.classList.add('toggle');
        icons.classList.add('show')
       


        
    }
    //close toggleFn
    function closeToggle(e) {
        e.preventDefault();
        //remove classes
        icons.classList.remove('show');
        navLinks.classList.remove('toggle');
    }

    //toggleFn
    function toggleFn(e){
        e.preventDefault();
        //get toggle section
        const toggleSect = document.querySelector('.toggle-section');
        //get h2 from toggleSect
        const h2 = toggleSect.querySelectorAll('h2');
        //get toggle button
        const toggleBut = label.querySelector('button');
        //monthly price arr
        const monthlyPrice = ['$19.00','$39.00', '$99.00'];
        //annual price
        const annualPrice = ['$199.00','$399.00', '$999.00'];

        //get prices
        const prices = document.querySelectorAll('.price')



       function priceFn(price, index){
           if(price.classList.contains('monthly')){
                  //remove that class
                  price.classList.remove('monthly');

                  //text-content
                  price.textContent = `${annualPrice[index]}`


           }else{
                 //remove that class
                 price.classList.add('monthly');

                 //text-content
                 price.textContent = `${monthlyPrice[index]}`
           }
          

       }
       
       
       
       
        //toggle current class
        h2.forEach(title=> title.classList.toggle('current'));
        toggleBut.classList.toggle('toggle-but');
        prices.forEach(priceFn);
      





    }






    //mainFn -events

    hamBurgerIcon.addEventListener('click', navToggle);
    closeButton.addEventListener('click', closeToggle);
    label.addEventListener('click', toggleFn);
}







//add dom content loaded to window object
window.addEventListener("DOMContentLoaded", mainFn);