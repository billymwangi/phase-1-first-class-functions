
function receivesAFunction(fn){
    fn();
}
function returnsANamedFunction(){
    return function fn(){
        console.log('Named function')
    }
}
function returnsAnAnonymousFunction(){
    return function () {
        console.log('Anonymous fuction')
    }
}