"use strict";
document.addEventListener("DOMContentLoaded", function () {

// active menu
const path = location.pathname;
const menuList = document.querySelectorAll(".menu");
const subMenuList = document.querySelectorAll(".subMenuItem");

menuList && menuList.forEach((menu) => {
  const href = menu.getAttribute("href");
  
  // Extract base URL from href by removing './' and everything after the last '/'
  const newBaseUrl = href.replace("./", "").replace(/\/[^\/]*$/, "");

  // Check if the current page's pathname ends with the newBaseUrl
  if (path.endsWith(newBaseUrl)) {
    menu.classList.add("activeHeaderMenu");
  }
});

subMenuList && subMenuList.forEach((subMenu) => {
  const href = subMenu.getAttribute("href");
  
  // Extract base URL from href by removing './' and everything after the last '/'
  const newBaseUrl = href.replace("./", "").replace(/\/[^\/]*$/, "");

  // Check if the current page's pathname ends with the newBaseUrl
  if (path.endsWith(newBaseUrl)) {
    subMenu.classList.add("activeMenuText");

    const parentDiv = subMenu.closest("div")

    parentDiv.querySelector(".subMenuTitle").classList.add("activeHeaderMenu")
    
  }
});



// header position set
  window.addEventListener('scroll', function() {
    const mainHeader = document.querySelector(".header")
    const scrollButton = document.querySelector(".scrollButton")
    if(mainHeader){
      if(window.scrollY > 100) {

        mainHeader.classList.add("headerFixed")
        mainHeader.classList.remove("headerAbsolute")
      }else {
        mainHeader.classList.add("headerAbsolute")
        mainHeader.classList.remove("headerFixed")
      }
    }

    if(scrollButton){
      if(window.scrollY > 200) {
        scrollButton.classList.remove("scrollButtonShow")
        scrollButton.classList.add("scrollButtonShow")
      }else {
        scrollButton.classList.remove("scrollButtonShow")
        scrollButton.classList.add("scrollButtonHide")
      }
    }
    
  });


  // Mobile Menu Toggle

  const mobileMenuOpenButton = document.querySelector(".mobileMenuOpenButton")

  mobileMenuOpenButton && mobileMenuOpenButton.addEventListener("click", () => {
    const mobileMenuBg = document.querySelector(".mobileMenuBg")
    const mobileMenu = document.querySelector(".mobileMenu")

    mobileMenuBg.classList.add("mobileMenuBgOpen")
    mobileMenuBg.classList.remove("mobileMenuBgClose")

    mobileMenu.classList.add("mobileMenuOpen")
    mobileMenu.classList.remove("mobileMenuClose")

  })

  const mobileMenuCloseButton = document.querySelector(".mobileMenuCloseButton")

  mobileMenuCloseButton && mobileMenuCloseButton.addEventListener("click", () => {
    const mobileMenuBg = document.querySelector(".mobileMenuBg")
    const mobileMenu = document.querySelector(".mobileMenu")

    mobileMenuBg.classList.remove("mobileMenuBgOpen")
    mobileMenuBg.classList.add("mobileMenuBgClose")

    mobileMenu.classList.remove("mobileMenuOpen")
    mobileMenu.classList.add("mobileMenuClose")

  })

  const mobileSubMenu = document.querySelectorAll(".subMenuToggle")

  mobileSubMenu &&  mobileSubMenu.forEach((el)=> el.addEventListener("click", () => {
    const activeSubMenu = document.querySelector(".subMenuOpen")
    const toggleClass = el.querySelector(".subMenu")

    if(toggleClass.classList.contains("subMenuOpen")){
      toggleClass.classList.add("subMenuClose")
    toggleClass.classList.remove("subMenuOpen")
    }else{
      activeSubMenu?.classList.remove("subMenuOpen")
      activeSubMenu?.classList.add("subMenuClose")
      toggleClass.classList.remove("subMenuClose")
      toggleClass.classList.add("subMenuOpen")
    }

   
  }))
  

 // pricing button switch animation
const priceButton = document.querySelectorAll(".pricingTabLinks");
// Add onclick event listener to each element
priceButton && priceButton.forEach(el => el.addEventListener("click", function(){
  document.querySelector(".pricingButtonActive")?.classList.remove("pricingButtonActive")

  //pricing change
const mValue = document.querySelectorAll(".monthlyPrice")

const monthlyPrice = [10,20,40]
const yearlyPrice = [120,240,480]

if(el.innerHTML.toLowerCase() === "yearly") {
  mValue.forEach((e,idx)=> {
    let price= yearlyPrice[idx]
  e.innerHTML = price.toString()
  })
}else(
  mValue.forEach((e,idx)=> {
    let price = monthlyPrice[idx]
  e.innerHTML = price.toString()
  })
)




  if(el.classList.contains("pricingButtonActive")){
    el.classList.remove("pricingButtonActive")
  }else{
    el.classList.add("pricingButtonActive")
  }
}));

 // Get all elements with class "favorite"
 const priceButtonBg = document.querySelector(".pricingBg")

 priceButtonBg && priceButtonBg.addEventListener("click", function() {

   if(priceButtonBg.querySelector(".pricingButtonActive").textContent === "Yearly"){
    priceButtonBg.classList.add("pricingButtonAfterRight")
   } else {
    priceButtonBg.classList.remove("pricingButtonAfterRight")
   }

   if(priceButtonBg.querySelector(".pricingButtonActive").textContent.trim() === "Monthly"){
    priceButtonBg.classList.add("pricingButtonAfterLeft")
   } else {

    priceButtonBg.classList.remove("pricingButtonAfterLeft")
   }
})

//odometer in view function
let odometerElement = document.querySelectorAll(".odometer")

odometerElement && odometerElement.forEach((el) => {
  const odometerElementHeight = el.clientHeight
  
  document.addEventListener('scroll', odometerFunction)

  function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY
    
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = el.getBoundingClientRect().top + scrollY + odometerElementHeight;
    
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
      return true;
    }
    
    return false;
  }
  
  function odometerFunction() {
    // is element in view?
    if (inView()) {
      el.textContent = el.getAttribute("data-odometer-final");
    }
  }
})


//faq Toggle

const faqItems = document.querySelectorAll(".faqItem")


faqItems && faqItems.forEach((el)=> el.addEventListener("click",()=> {
  const faqAnswer = el.querySelector(".faqAnswer")
  const faqIcon = el.querySelector(".faqIcon")

  //active faq item
  const activeFaqItem = document.querySelector(".faqItemOpen")
  const activeAnswer = document.querySelector(".faqOpen")
  const activeFaqIcon = document.querySelector(".faqInvisible")

  if(el.classList.contains("faqItemOpen")){
    faqAnswer.classList.remove("faqOpen")
    faqAnswer.classList.add("faqClose")

    faqIcon.classList.add("rotate45deg")
    faqIcon.classList.remove("faqInvisible")

    el.classList.remove("faqItemOpen")
    el.classList.add("faqItemClose")
  }else {
    activeFaqItem?.classList.remove("faqItemOpen")
    activeFaqItem?.classList.add("faqItemClose")
    activeAnswer?.classList.remove("faqOpen")
    activeAnswer?.classList.add("faqClose")
    activeFaqIcon?.classList.remove("faqInvisible")
    activeFaqIcon?.classList.add("rotate45deg")

    faqAnswer.classList.remove("faqClose")
    faqAnswer.classList.add("faqOpen")

    faqIcon.classList.remove("rotate45deg")
    faqIcon.classList.add("faqInvisible")

    el.classList.remove("faqItemClose")
    el.classList.add("faqItemOpen")
  }
}))



//video modal

const videoModalBg = document.querySelector(".videoModalBg")
const videoModalButtonOpen = document.querySelector(".videoModalButtonOpen")
const videoModalButtonClose = document.querySelector(".videoModalButtonClose")
const videoModalItem = document.querySelector(".videoModal")

videoModalButtonOpen && videoModalButtonOpen.addEventListener("click", ()=> {
  videoModalItem.classList.remove("videoModalClose")
  videoModalBg.classList.remove("videoModalBgClose")
  videoModalBg.classList.add("videoModalBgOpen")
  videoModalItem.classList.add("videoModalOpen")
})

videoModalButtonClose && videoModalButtonClose.addEventListener("click", ()=> {
  videoModalItem.classList.remove("videoModalOpen")
  videoModalBg.classList.remove("videoModalBgOpen")
  videoModalBg.classList.add("videoModalBgClose")
  videoModalItem.classList.add("videoModalClose")
})

//personal details in view line animation
let experienctElement = document.querySelectorAll(".experience")
if (experienctElement) {
  const observer = new IntersectionObserver((bars) => {
    bars.forEach((bar) => {
      if (bar.isIntersecting) {
        bar.target.classList.add("w75");
      } else {
        bar.target.classList.remove("w75");
      }
    });
  });
  experienctElement.forEach((bar) => observer.observe(bar));
}


// product description

const productDescriptionTab = document.querySelectorAll(".productDescriptionTab")

productDescriptionTab && productDescriptionTab.forEach( (e)=> e.addEventListener("click", () => {
  const tabName = e.innerHTML.trim().toLowerCase()
  const productDesc= document.querySelector(".productDescription")
  const productReview= document.querySelector(".productReview")

  productDescriptionTab.forEach((e)=> {
    e?.classList.remove("borderPrimary")
  })
  
  if( tabName === "description") {
    e?.classList.remove("border-b-transparent")
    e?.classList.add("borderPrimary")
   productDesc.classList.remove("prouctDesctiptionInActive")
   productDesc.classList.add("prouctDesctiptionActive")

   productReview.classList.add("prouctReviewInActive")
   productReview.classList.remove("prouctReviewActive")
  }else{
    productDesc.classList.add("prouctDesctiptionInActive")
    productDesc.classList.remove("prouctDesctiptionActive")

    productReview.classList.remove("prouctReviewInActive")
      productReview.classList.add("prouctReviewActive")
    e?.classList.remove("borderPrimary")
  }


  if(tabName === "reviews") {
    e?.classList.remove("border-b-transparent")
      e.classList.add("borderPrimary")
      
     }
}))


// appointment dropdown

const appointmentDropDown = document.querySelector(".appointMentDropdown")

appointmentDropDown && appointmentDropDown.addEventListener("click",()=> {

  const modal = document.querySelector(".appointmentModal")
  const modalItem = document.querySelectorAll(".modalItem")

  if(modal?.classList.contains("modalActive")){
    modal.classList.remove("modalActive")
    modal.classList.add("modalInActive")
  }else{
    modal.classList.add("modalActive")
    modal.classList.remove("modalInActive")
  }

  modalItem.forEach((e)=> e.addEventListener("click",()=> {
    modal.classList.remove("modalActive")
    modal.classList.add("modalInActive")
  }))

})

// country dropdown

const countryDropDown = document.querySelector(".countryDropDown")

countryDropDown && countryDropDown.addEventListener("click",()=> {

  const modal = document.querySelector(".countryModal")
  const modalItem = document.querySelectorAll(".modalItem")

  if(modal?.classList.contains("modalActive")){
    modal.classList.remove("modalActive")
    modal.classList.add("modalInActive")
  }else{
    modal.classList.add("modalActive")
    modal.classList.remove("modalInActive")
  }

  modalItem.forEach((e)=> e.addEventListener("click",()=> {
    modal.classList.remove("modalActive")
    modal.classList.add("modalInActive")
  }))

})

// state dropdown

const stateDropDown = document.querySelector(".stateDropDown")

stateDropDown && stateDropDown.addEventListener("click",()=> {

  const modal = document.querySelector(".stateModal")
  const modalItem = document.querySelectorAll(".modalItem")

  if(modal?.classList.contains("modalActive")){
    modal.classList.remove("modalActive")
    modal.classList.add("modalInActive")
  }else{
    modal.classList.add("modalActive")
    modal.classList.remove("modalInActive")
  }

  modalItem.forEach((e)=> e.addEventListener("click",()=> {
    modal.classList.remove("modalActive")
    modal.classList.add("modalInActive")
  }))

})


// add remove functionality

const addButton = document.querySelector(".add")
const removeButton = document.querySelector(".remove")
const count = document.querySelector(".count")

let value = count ? parseInt(count.innerHTML.trim()) : 0;
addButton && addButton.addEventListener("click", () => {

  value++;

  count.innerHTML = value.toString();
});


removeButton && removeButton.addEventListener("click", () => {

  if(value > 1) --value

  count.innerHTML = value.toString();
});


 const scrollButton = document.querySelector(".scrollButton")

scrollButton && scrollButton.addEventListener("click",()=> {
  window.scrollTo({ top: 0, behavior: "smooth" });
})


});
