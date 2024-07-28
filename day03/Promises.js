

let checkEligibleToVote = (age) => {

    return new Promise( (resolve, reject) => {
        if(age >= 18){
            resolve("Eligible to vote!");
        }else{
            reject("Not eligible to vote!");
        }
    });
    
}


checkEligibleToVote(15)
    .then( () =>{ 
        console.log('Voting for Joe! or Trump');
    } ) 
    .catch( () => {
        console.log("You can NOT VOTE TODAY");
    }) ;

    /*
    Promises can help us avoid using:
        Nested callbacks of functions
        CallBack Hell

    */