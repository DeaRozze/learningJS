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
  console.log("1");
  async function asyncFunc1() {
    console.log("2");
    await asyncFunc2();
    console.log("3");
  }
  async function asyncFunc2() {
    console.log("4");
    await new Promise((resolve) => {
      console.log("5");
      resolve();
    });
    console.log("6");
  }
  setTimeout(() => {
    console.log("7");
  }, 100);
  asyncFunc1();
  new Promise((resolve) => {
    console.log("8");
    resolve();
  })
    .then(() => {
      console.log("9");
    })
    .then(() => {
      console.log("10");
    });
  setTimeout(() => {
    console.log("11");
  }, 0);
  console.log("12");
}

task10(); //1 2 4 5 8 12 6 9 3 10 11 7

// 11

console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

queueMicrotask(() => {
  console.log("4");
});

Promise.resolve().then(() => {
  console.log("5");
});

(async function () {
  console.log("6");
  await Promise.resolve();
  console.log("7");
})();

setTimeout(() => {
  console.log("8");
}, 10);

console.log("9");

//1 6 9 4 5 7 2 3 8

// 12

console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

  queueMicrotask(() => {
    console.log("4");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("5");

  setTimeout(() => {
    console.log("6");
  }, 0);
});

queueMicrotask(() => {
  console.log("7");
});

(async function () {
  console.log("8");
  await null;
  console.log("9");
})();

console.log("10");

// 1 8 10 5 7 9 2 3 4  6

//13

console.log("start");

setTimeout(() => {
  console.log("timeout 1");

  Promise.resolve().then(() => {
    console.log("promise in timeout");
  });
}, 0);

queueMicrotask(() => {
  console.log("microtask 1");

  queueMicrotask(() => {
    console.log("microtask 2");
  });
});

Promise.resolve()
  .then(() => {
    console.log("promise 1");
    return Promise.resolve().then(() => {
      console.log("promise 2");
    });
  })
  .then(() => {
    console.log("promise 3");
  });

(async function () {
  console.log("async start");
  await Promise.resolve();
  console.log("async after await");

  setTimeout(() => {
    console.log("timeout in async");
  }, 0);
})();

console.log("end");
//start async start end microtask 1 promise 1 async after await microtask 2 promise 2 promise 3 timeout 1 promise in timeout timeout in async

// 14

console.log("a");

(async () => {
  console.log("b");

  await await Promise.resolve();

  console.log("c");
})();

Promise.resolve().then(() => {
  console.log("d");
});

queueMicrotask(() => {
  console.log("e");
});

console.log("f");

//a  b  f  d  e  c

// 15

console.log("A");

Promise.resolve("B")
  .then()
  .then((value) => {
    console.log(value);
    return "C";
  })
  .then(console.log);

Promise.reject("D")
  .then()
  .catch((err) => {
    console.log("caught:", err);
  });

console.log("E");

//A  E  B  caught: D  C

console.log("A");

Promise.resolve()
  .then(console.log("B"))
  .then(() => console.log("C"));

Promise.resolve().then(() => console.log("D"));

console.log("E");

// A B E D C


// next = previous * 16807 % 2147483647
// Если мы используем 1 как зерно, то значения будут:

// 16807
// 282475249
// 1622650073
// …и так далее…
// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

// Пример использования:
function* pseudoRandom(seed) {
  yield (seed * 16807) % 2147483647;
  yield (seed * 16807 * 16807) % 2147483647;
  yield (seed * 16807 * 16807) * 16807 % 2147483647;                                             
}
let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073