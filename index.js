let arr =[1,1,2,3,1,5,6,1,2,5,7,8,8,8];

let coppies = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++)
        if (arr[j] === arr[i]) {
            coppies.push(arr[i]);}
            
    }

 console.log(coppies);

 for (let index = 0; index < coppies.length; index++) {
       if( coppies[index] === coppies[index-1]){
        coppies.splice(index,1);
                index--;
            }
        }
console.log(coppies);

