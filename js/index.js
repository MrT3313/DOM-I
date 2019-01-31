const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// -- // Get anchor Tags
let GETnavTitles = document.querySelectorAll('a');
  // update anchor tags
  GETnavTitles[0].textContent = 'Services'  ;
  GETnavTitles[1].textContent = 'Product'   ;
  GETnavTitles[2].textContent = 'Vision'    ;
  GETnavTitles[3].textContent = 'Features'  ;
  GETnavTitles[4].textContent = 'About'     ;
  GETnavTitles[5].textContent = 'Contact'   ;

// -- // Get Section -1- Text --> CLASS
let getCta = document.querySelector('.cta-text h1')
  // Update Text Content
  getCta.textContent = siteContent.cta.h1

// -- // Get Button 
let GETbutton = document.querySelector('.cta-text button')
  console.log(GETbutton);
  GETbutton.textContent = siteContent.cta.button

// -- // Get Section -1- Image --> ID
let GETctaIMG = document.querySelector('#cta-img')
  // Update IMG SRC
  GETctaIMG.src = 'img/header-img.png';

// -- // Get Main Content
let GETmainContent_h4 = document.querySelectorAll('.text-content h4')
let GETmainContent_p = document.querySelectorAll('.text-content p')

  GETmainContent_h4[0].textContent = siteContent["main-content"]["features-h4"]
    GETmainContent_p[0].textContent = siteContent["main-content"]["features-content"]
  
  GETmainContent_h4[1].textContent = siteContent["main-content"]["about-h4"]
    GETmainContent_p[1].textContent = siteContent["main-content"]["about-content"]
  
  GETmainContent_h4[2].textContent = siteContent["main-content"]["services-h4"]
    GETmainContent_p[2].textContent = siteContent["main-content"]["services-content"]
  
  GETmainContent_h4[3].textContent = siteContent["main-content"]["product-h4"]
    GETmainContent_p[3].textContent = siteContent["main-content"]["product-content"]
  
  GETmainContent_h4[4].textContent = siteContent["main-content"]["vision-h4"]
    GETmainContent_p[4].textContent = siteContent["main-content"]["vision-content"]

// -- // Get Second Img
let img2 = document.querySelector('#middle-img');
img2.src = 'img/mid-page-accent.jpg';

// -- // Get Contact
let GETcontact_h4 = document.querySelector('.contact h4');
  GETcontact_h4.textContent = siteContent.contact["contact-h4"]
let GETcontact_p = document.querySelectorAll('.contact p');
GETcontact_p[0].textContent = siteContent.contact.address
GETcontact_p[1].textContent = siteContent.contact.phone
GETcontact_p[2].textContent = siteContent.contact.email
console.log(GETcontact_p);

// -- // Get Footer
let GETfooter = document.querySelector('footer p')
GETfooter.textContent = siteContent.footer.copyright