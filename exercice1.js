// function sommepos(arr){
//    var somme =0;
//     arr.sort()
//     somme = arr[0]+arr[1]
//     console.log(somme);
   
// }
// sommepos([10, 343445353, 3453445, 3453545353453])

function smallest_pair(arr)
{
  let min = Number.MAX_VALUE,
  secondMin = Number.MAX_VALUE;
  for (let j = 0; j < arr.length; j++)
  {
    if (arr[j] < min)
    {
      secondMin = min;
      min = arr[j];
    }
    else if ((arr[j] < secondMin) &&
        arr[j] != min)
      secondMin = arr[j];
  }
  var sum = secondMin + min
  
  console.log(sum);
}
smallest_pair([1,2,3]); 


