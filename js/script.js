class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }




  $(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav.navbar').addClass('black');
    }
    else{
        $('nav.navbar').removeClass('black');
    }
  });







// const anchors = document.querySelectorAll('a[href="#"]')

// for (let anchor of anchors){
//     anchor.addEventListener("click", function(){
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smoth",
//             block:"start"
//         })
//     })
// }






// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0){
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll(params){
//     for(let index = 0; index < animItems.length; index++){
//       const animItems = animItems[index];
//       const animItems = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;


//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight){
//         animItemPoint = window.innerHeight - animItemHeight / animStart;
//       }

//       if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//         animItem.classList.add('active');
//       }else{
//         animItem.classList.remove('active');
//       }
//     }
//   }

//   function offset(el){
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }
// }