function MyArray(){

    Object.defineProperty(this,'length',{
        value : 0,
        Writable : true,
        enumerable : false,
    })

    this.length=arguments.length
    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i]
    }
}

let arr= new MyArray(1,2,3,5,5)
console.log(Object.values(arr) )
MyArray.prototype.push= function (value){
    this[this.length] = value;
   this.length++;
}

arr.push(7)
arr.push(7,8)
console.log('arr',arr)