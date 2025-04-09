function task1() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  console.log("3");
}

 task1(); // 1 3 2

 //2

function task2() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  Promise.resolve().then(() => {
    console.log("3");
  });

  console.log("4");
}

 task2(); // 1 4 3 2

 //3

function task3() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  setTimeout(() => {
    console.log("3");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("4");
    })
    .then(() => {
      console.log("5");
    });

  console.log("6");
}

 task3(); //1 6 4 5 2 3
//4

function task4() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("3");
    })
    .then(() => {
      console.log("4");
    });

  console.log("5");

  setTimeout(() => {
    console.log("6");
  }, 100);
}

 task4(); // 1 5 3 4 2 6


 //5

function task5() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  setTimeout(() => {
    console.log("3");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("4");
    })
    .then(() => {
      console.log("5");
    });

  Promise.resolve().then(() => {
    console.log("6");
  });

  console.log("7");
}
 task5(); // 1 7 4 6 5 2 3

 //6

function task6() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  async function asyncFunc() {
    console.log("3");
    await Promise.resolve();
    console.log("4");
  }

  asyncFunc();

  setTimeout(() => {
    console.log("5");
  }, 0);
 
  console.log("6");
}

 task6(); // 1 3 6 4 2 5

 //7

function task7() {
  console.log("1");

  async function asyncFunc1() {
    console.log("2");
    await asyncFunc2();
    console.log("3");
  }

  async function asyncFunc2() {
    console.log("4");
    return Promise.resolve().then(() => {
      console.log("5");
    });
  }

  asyncFunc1();

  setTimeout(() => {
    console.log("6");
  }, 0);

  Promise.resolve().then(() => {
    console.log("7");
  });

  console.log("8");
}

 task7(); // 1 2 4 8 5 7 3 6 

 //8

function task8() {
  console.log("1");
 
   async function asyncFunc1() {
     console.log("2");
     await asyncFunc2();
     console.log("3");
   }
 
   async function asyncFunc2() {
     console.log("4");
     await Promise.resolve();
     console.log("5");
   }
 
   asyncFunc1();
 
   setTimeout(() => {
     console.log("6");
   }, 0);
 
   Promise.resolve()
     .then(() => {
       console.log("7");
     })
     .then(() => {
       console.log("8");
     });
 
   console.log("9");
 }
 
 task8(); // 1 2 4 9 5 7 3 8 6

 //9

function task9() {
  console.log("1");
  async function asyncFunc1() {
    console.log("2");
    await asyncFunc2();
    console.log("3");
  }
  async function asyncFunc2() {
    console.log("4");
    await Promise.resolve();
    console.log("5");
  }
  asyncFunc1();
  setTimeout(() => {
    console.log("6");
  }, 0);
  Promise.resolve()
    .then(() => {
      console.log("7");
    })
    .then(() => {
      console.log("8");
    });
  setTimeout(() => {
    console.log("9");
  }, 0);
  console.log("10");
}

 task9(); // 1 2 4 10 5 7 3 8 6 9

 //10

function task10() {
  console.log('1');
async function asyncFunc1() {
console.log('2');
await asyncFunc2();
console.log('3');
}
async function asyncFunc2() {
console.log('4');
await new Promise(resolve => {
  console.log('5');
  resolve();
});
console.log('6');
}
setTimeout(() => {
console.log('7');
}, 100);
asyncFunc1();
new Promise((resolve) => {
console.log('8');
resolve();
}).then(() => {
console.log('9');
}).then(() => {
console.log('10');
});
setTimeout(() => {
console.log('11');
}, 0);
console.log('12');
};

task10(); //1 2 4 5 8 12 6 9 3 10 11 7

// 11

console.log('A');

setTimeout(() => {
  console.log('B');
  
  Promise.resolve().then(() => {
    console.log('C');
  });

}, 0);

queueMicrotask(() => {
  console.log('D');
});

Promise.resolve().then(() => {
  console.log('E');
});

(async function() {
  console.log('F');
  await Promise.resolve();
  console.log('G');
})();

setTimeout(() => {
  console.log('H');
}, 10);

console.log('I');

// a f i d e g b c h

// 12

console.log('1');

setTimeout(() => {
  console.log('2');

  Promise.resolve().then(() => {
    console.log('3');
  });

  queueMicrotask(() => {
    console.log('4');
  });

}, 0);

Promise.resolve().then(() => {
  console.log('5');

  setTimeout(() => {
    console.log('6');
  }, 0);
});

queueMicrotask(() => {
  console.log('7');
});

(async function () {
  console.log('8');
  await null;
  console.log('9');
})();

console.log('10');

// 1 8 10 5 7 9 2 3 4  6