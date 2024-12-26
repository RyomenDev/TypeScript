// loose form of class

interface User {
    readonly _id:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrail=()=>string // return type
    startTrail():string,
    getCoupon(couponName:string,value:number):number,
}

const user1:User={_id:12,
    email:"Ab@.com",
    userId:2211,
    startTrail:()=>{
    return "trail started",
    },
    getCoupon:(name:"abc", off:10)=>{
        return 10;
    },
}

