let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
    //if array has only element
    if(start >= end){
      return true;
    }

    //if start is equal to end
    if(arr[start] === arr[end]){
      //call the same function
      return palindromeArray(arr, start + 1, end - 1);
    }else{
      //else not palindrome
      return false;
    }
}

console.log(palindromeArray([1,2,3,2,1]));
console.log(palindromeArray([1,2,3,2,2]));
