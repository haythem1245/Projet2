function inverse(ch){
  var ch2="";
  var i;
  for(i=ch.length-1;i>=0;i--){
    ch2+=ch[i];
  }
  return ch2;
}
console.log(inverse("haythem"));