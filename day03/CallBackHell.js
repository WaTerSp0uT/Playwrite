function getINtoCar( callBack){
    console.log("Get into Car");
    callBack();
}

function startCar(callBack){
    console.log("Car Started");
    callBack();
}

function drive(callBack){
    console.log( "Driving the car");
    callBack();
}


getINtoCar( function()  {
    startCar( function () {
        drive( function() {
            console.log("Reached the destination !");
        } )
    } )
}); // Call back hell