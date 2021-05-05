function withVar(){
    var num = 1;
    if(num == 1){
      var num2 = ++num;
    }
    return num2;
  }
  function withLet(){
    let num = 1;
    if(num == 1){
      let num2 = ++num;
    }
    return num2;
  }
  
  console.log("dengan var hasilnya : "+withVar());
  console.log("dengan let hasilnya : "+withLet());

  // singkatnya var bisa di bilamg adalah sebuah variable global dan let adalah variable loca.