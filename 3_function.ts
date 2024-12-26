const ArrorFunc = (s:string):string=>{
    return "";
}

const heros = ["thor", "spiderman"];
heros.map(hero=>{ // auto infer
    return `hero is ${heo}`;
})
heros.map(hero=>:string{ //string only
    return `hero is ${heo}`;
})

function consoleError(errMsg:string):void {
    console.log(errMsg);  
}

function fail(errMsg:string):never{  // throw exception or terminate execution
    throw new Error(errMsg);
}