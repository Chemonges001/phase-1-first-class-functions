function receivesAFunction(callback) {
console.log(callback())
}
function returnsANamedFunction(){
    return function namedFunction(){console.log("This is a named fucntion")}
}
const  returnsAnAnonymousFunction =() => {
        return()=>
        console.log("This is an anonymous function")
    


}