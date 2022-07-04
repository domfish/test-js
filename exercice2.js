function sommepos(arr){
    arr.sort()
    var somme =0;
    for (let i = 0; i < arr.length; i++) {
       if(arr [i] > 0 ){
        somme = somme + arr[i]
       }
        
    }
   console.log(somme); 
}
sommepos([1,-4,7,12]) 