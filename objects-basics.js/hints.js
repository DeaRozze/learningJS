let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    return hint == "string" 
  }
};

alert(user); 
alert(+user);
alert(user + 500);