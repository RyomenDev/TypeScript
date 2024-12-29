
function 16A <T,U>(val1:T,val2:U):object{
    // return object
    return {
        val1,
        val2
    }
}


function 16B <T,U extends number>(val1:T,val2:U):object{
    // return object
    return {
        val1,
        val2
    }
}

interface Database{
    connection:string,
    key:number,
}


function 16C <T,U extends Database>(val1:T,val2:U):object{
    // return object
    return {
        val1,
        val2
    }
}

16C(3,{}); 

interface quiz {
    name:string,
    //...
}

interface Course {
    name:string,
    subject:string,
    //
}

class Sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product);
    }
}