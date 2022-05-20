let arr= JSON.parse(localStorage.getItem('products'))|| [];

function Product(name,category,image,price,gender,sold){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}

function submitProduct(e){
 e.preventDefault();
 let product=document.getElementById('product');
 let name=product.name.value;
 let category=product.category.value;
 let image=product.image.value;
 let price=product.price.value;
 let gender=product.gender.value;
 let sold=product.sold.value;
let p= new Product(name,category,image,price,gender,sold)
arr.push(p)
localStorage.setItem('products',JSON.stringify(arr))
console.log(arr)
}