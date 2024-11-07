// FAQ Accordion


document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    
    groupBody.classList.toggle('open');

    
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  const links = document.querySelectorAll('.mobile-menu ul li a');
  links.forEach((e)=> {
    e.addEventListener('click', ()=> {
      mobileMenu.classList.toggle('active')
    })
  })


 

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );

  
});





Fancybox.bind('[data-fancybox]', {
  // Custom options for all galleries
});


// Email JS


function sendMail() {
  (function(){
    emailjs.init(
      "xDvENqCHqnvTXFfGl"
    )
  });

  let serviceID = "service_dnkyml7"; 
  let templateID = "template_m9z5mri";

  let params = {
    name: document.getElementById('name').value, 
    email: document.getElementById('email').value, 
    phone: document.getElementById('phone').value, 
    message: document.getElementById('message').value,
  }

  emailjs.send(serviceID, templateID, params)
  .then(res => {
    alert('Заявка оставлена')
  })
  .catch();
}
