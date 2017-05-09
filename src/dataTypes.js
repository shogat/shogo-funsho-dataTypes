const dataTypes=(myVar)=>{
  if(typeof myVar==='string'){
    return myVar.length;
  }
  else if(typeof myVar==='undefined'||myVar===null){
    return 'no value';
  }
  else if(typeof myVar==='boolean'){
    return myVar;
  }
  else if(typeof myVar==='number'){
    if(myVar>100){
      return 'more than 100';
    }
    else if(myVar===100){
      return 'equal to 100';
    }
    else{
      return 'less than 100';
    }
  }
  else if (myVar instanceof Array){
    return myVar[2];
  }
  else if(typeof myVar==='function'){
    return myVar(true);
  }
  
};