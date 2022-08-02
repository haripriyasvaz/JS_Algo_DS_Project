function rot13(str) {
  let arr=[];
  let charcode=0;
  arr=str.split("");
  for(let i=0;i<arr.length;i++){
   charcode=arr[i].charCodeAt();
   if(charcode>=65 && charcode<=90)//Capital letters
   {
     if (charcode > 77) {
        charcode = charcode - 13;
      }
      else {
        charcode = charcode + 13;
      }
      arr.splice(i,1,String.fromCharCode(charcode));
//Replacing character at that index using splice with the new ASCII code
   }

  }
   return arr.join('');
}


rot13("SERR PBQR PNZC");