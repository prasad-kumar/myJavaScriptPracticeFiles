//  Promises in JavaScript


const  fridge = ['sugar', 'vegetables', 'salt', 'salt' ];

const makeFriedRice = new Promise((resolve, reject) => {
    if(fridge.includes('rice') && fridge.includes('vegetables') && fridge.includes('salt')){
        resolve('Friedrice ready');
    }else{
        reject('Soory, could not make fried rice');
    }
});


makeFriedRice.then((result)=>{
    console.log(result);
}).catch((error)=> {
    console.log(error);
});




