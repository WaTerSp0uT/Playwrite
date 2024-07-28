function getINtoCar( ){
    return new Promise ( (resolve) =>{
        console.log("Get into Car");
        resolve();
    } )

}

function startCar(){
    return new Promise ( (resolve) =>{
        console.log("Car Started");
        resolve();
    } )

}

function drive(){
    return new Promise ( (resolve) =>{
        console.log( "Driving the car");
        resolve();
    } )
    
}

getINtoCar()
    .then( ()=> startCar())
    .then( () => drive())
    .finally( ()=>{
        console.log("Reached the destination!");
    });
