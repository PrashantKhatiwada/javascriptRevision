// var is availabe=le throughout the function in which they're declared

// let is block-scoped

// const to declare constants and cannot be reassigned

function scopeCheck() {
  var num = 12;
  let num2 = 34;
  const num3 = 45;
  console.log(num, num2, num3, num4);

  {
    var num4 = 55;
    let num5 = 78;
    console.log(num, num2, num3, num4, num5);
  }
}

scopeCheck();
