
/*mobile-navbar*/

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');

});



let previewContainer = document.querySelector('.products-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');


document.querySelectorAll('.container .card').forEach(card => {
  card.onclick = () => {
  
    previewContainer.style.display = 'flex';
    let name = card.getAttribute('data-name');
    

    previewBoxes.forEach(preview => {
      let dataTarget = preview.getAttribute('data-target');      
      
      if (name === dataTarget) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');      
      }
    });
  };
});


/*product-preview*/

document.querySelectorAll('.preview .bx-x').forEach(closeIcon => {
  closeIcon.onclick = () => {
    previewContainer.style.display = 'none'; 
  };
});

document.querySelectorAll('.remove').forEach(closeIcon => {
  closeIcon.onclick = () => {
    previewContainer.style.display = 'none'; 
  };
});

  /* Close the preview */

  function closePreviewAndChangeImage(confirmButton, fileName) {
    const previewContainer = document.querySelector('.products-preview');
    previewContainer.style.display = 'none'; 
  
    /* Change the image */

    let img = document.querySelector("#open-cart-btn");
    img.setAttribute('src', fileName);  
  }
  






/*quantity*/

function stepper(btn, inputId) {
  let quantityInput = document.getElementById(inputId);
  let currentQuantity = parseInt(quantityInput.value);

  if (btn.classList.contains("increment")) {    
      if (currentQuantity < parseInt(quantityInput.getAttribute("max"))) {
          quantityInput.value = (currentQuantity + 1).toString();
      }
  } else if (btn.classList.contains("decrement")) {     
      if (currentQuantity > parseInt(quantityInput.getAttribute("min"))) {
          quantityInput.value = (currentQuantity - 1).toString();
      }
  }
}

/*sidecart-open*/

const openBtn = document.getElementById('open-cart-btn');
const cart = document.getElementById('sidecart'); 
const closeBtn = document.getElementById('close-btn');
const backdrop = document.querySelector('.backdrop');


openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
backdrop.addEventListener('click', closeCart);

function openCart(){
  cart.classList.add('open')
  backdrop.classList.add('show')
}
function closeCart(){
  cart.classList.remove('open')
  backdrop.classList.remove('show')
}


const cartItems = document.querySelectorAll('.cart-item');
cartItems.forEach((cartItem) => {
  const removeButton = cartItem.querySelector('.remove-item');

  removeButton.addEventListener('click', () => {
  
    cartItem.remove(); 
    updateCartTotal();
  });
});


/*orders-price*/

function updateCartTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let subtotal = 0;

  cartItems.forEach((cartItem) => {
    const priceElement = cartItem.querySelector('.price');
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    subtotal += price;
  });


  const subtotalPriceElement = document.getElementById('subtotal-price');
  subtotalPriceElement.textContent = subtotal.toFixed(2);

 
  const total = subtotal; 
  const totalPriceElement = document.getElementById('subtotal-price');
  totalPriceElement.textContent = total.toFixed(2);
}

  
  function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block"; 

    
    var sidecart = document.getElementById("sidecart");
    sidecart.style.display = "none"; 
  }

  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none"; 

   
  }

  var orderBtn = document.getElementById("order-btn");
  orderBtn.addEventListener("click", openPopup);


  



  


