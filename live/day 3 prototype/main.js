// let obj={
//     name : 'bike'
// }
// //console.log(obj)
// var obj2= Object.create(obj)
// console.log(obj2.name)

// const catlog={
//     brand : 'nike',
//     logo : 'nike',
//     seller : 'flipkart'

// }

// let product1= Object.create(catlog,{name:{value:'casual'}})
// console.log(product1)

// function Product(type){
//     this.type=type
//     this.brand='nike',
//     this.logo='url',
//     this.seller='flipkart'
// }

// Product.prototype.discount=function(){
//     console.log('discount 50%')
// }
// let p1= new Product()
// console.log(p1)
// let p2= new Product()
// console.log(p2)
let arr=[1,2,4,5]

let arr2= new Array(1,2,4)
console.log(arr2)

function myArray(){
    this.length = arguments.length;
}
