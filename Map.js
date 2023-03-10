function rollDie(){
    let isWon = false;
    let dictionary = {};
    let random
    while(!isWon){
        random =  Math.floor(Math.random() * 10) % 6 + 1;

        if(dictionary[random]){
            dictionary[random]++;
            if(dictionary[random] === 10){
                isWon = true;
            }
        } else {
            dictionary[random] =1;
        }
    }
    console.log(" scores are ")
    console.log(dictionary)
    console.log(random + " won")

    let smallest  = 10;
    let smallestKey;

    Object.keys(dictionary).forEach(key=>{
        if(dictionary[key] < smallest){
            smallest = dictionary[key];
            smallestKey = key;
        }
    })

    console.log(smallestKey + " got less frequency")

}

rollDie()

function generateBirthMonths(){
    let dictionary = {};

    for(let i=0;i<50;i++){
        random =  Math.floor(Math.random() * 13) % 12 + 1;
        if(dictionary[random]){
            dictionary[random]++;
        } else {
            dictionary[random] = 1;
        }
    }

    console.log(dictionary)
}

generateBirthMonths()