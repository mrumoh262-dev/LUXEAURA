function getCart(){return JSON.parse(localStorage.getItem('cart')||'[]');}
function addToCart(id){const c=getCart();c.push(id);localStorage.setItem('cart',JSON.stringify(c));updateCartCount();}
function updateCartCount(){const e=document.getElementById('cart-count');if(e)e.textContent=getCart().length;}
updateCartCount();
