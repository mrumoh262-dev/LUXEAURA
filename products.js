const products=[
{id:1,name:'Luxury Lip Gloss',price:19.99,category:'Cosmetics'},
{id:2,name:'Gold Necklace',price:49.99,category:'Jewelry'}
];
const c=document.getElementById('products');
if(c){c.innerHTML=products.map(p=>`<div>${p.name} - $${p.price} <button onclick="addToCart(${p.id})">Add</button></div>`).join('');}
