async function lagarta(){
    let lagarta = "()()()()(00)";
    let ampliar = "( )( )( )( )(00)";
    let espaco = " ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }
    
    for(let i = 0; i < 20; i++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
            ampliar = espaco + ampliar);
        await sleep (500);
        console.clear();
    }
}
lagarta();