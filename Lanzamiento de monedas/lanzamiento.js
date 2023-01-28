function tossCoin() {
    return Math.random() > 0.5 ? "cara" : "cruz";
}

/*function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );*/

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // tu código aquí!
        let headsCount =0;
        let attempts = 0;
        while(headsCount < 5){
            attempts++;
            let result = tossCoin();
            console.log(`${result} fue volteado`);
            if(result === "cara") {
                headsCount++;
            } else {
                headsCount = 0;
            }    
            if (attempts > 100) {
                reject("Has alcanzado 100 intentos");
            }
            resolve(`Se necesitaron ${attempts} para que salgan cinco "caras"`);
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
