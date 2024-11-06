// let user = new User("Vlad");
// function User(name = "Alex") {
//   (this.name = name), (this.age = 10);
// }

// console.log(user.name);

// function SmallUser() {
//   this.name = "John";

//   return;
// }

// alert(new SmallUser().name);

// let userInfo = {
//   name: "Вася",
//   age: 10,
// };

// userInfo.color = "blue";

// console.log(userInfo.color);

// userInfo["likes js"] = false;

// console.log(userInfo["likes js"]);

// userInfo["newAge"] = 1;

// console.log(userInfo);

// let firstPart = "likes ";
// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   [firstPart + "JavaScript"]: true,
// };

// console.log(userInfo["likes JavaScript"]);
// let firstPart = "likes ";
// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   [firstPart]: true,
// };

// console.log(userInfo[firstPart]);

// let key = "name";
// console.log(userInfo[key]);

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   address: {
//     city: "Moscow",
//     street: "Freedom",
//   },
// };
// console.log(userInfo);
// console.log(userInfo.address);
// console.log(userInfo.address.city);

// function makeUserInfo(name, age) {
//   return {
//     name,
//     new,
//   };
// }
// let user = makeUserInfo("Vlad", 30);
// user["Privet Vlad"] = "Hello";
// console.log(user);

// const key = { a: 1 };
// const key2 = { b: 2 };

// const obj = {};

// obj[key] = 123;
// obj[key2] = 456;

// console.log(obj[key]); // 456
// console.log(obj[key2]); // 456

// let userInfo = {
//   name: "Vlad",
// };

// console.log(userInfo);

// userInfo.age = 30;

// console.log(userInfo);

// userInfo["likes js"] = true;
// console.log(userInfo);

// userInfo.address = {
//   city: "Moscow",
//   street: "Freedom",
// };
// console.log(userInfo);

// let key = "name";
// console.log(userInfo[key]);

// let userInfo = {};

// userInfo["love soda"] = true;

// console.log(userInfo);

// let newUser = userInfo;

// console.log(newUser);

// newUser["love soda"] = false;
// console.log(userInfo);

// userInfo.moreInfo = {
//   name: "Vlad",
//   age: 30,
// };

// console.log(newUser.moreInfo.name);

// newUser.moreInfo = {
//   name: "dima"
// }

// console.log(userInfo.moreInfo);

// let user2 = userInfo

// user2[4] = 10

// console.log(user2);

// user2[2 + 2] = 20

// console.log(user2);

// user2['5'] = 30

// console.log(user2);

// let userInfo = {
//   name: "Вася",
//   age:30,
// }

// let user = Object.assign({}, userInfo)

// user.age = 18
// user.name = "Vlad"

// console.log(userInfo);
// console.log(user);

// let userInfo = {
//   name: "Вася",
//   age: 30,
// };

// Object.assign(userInfo, { ["likes js"]: true, city: "Moscow" });
// console.log(userInfo);

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   // adress: {
//   //   city: "Moscow",
//   //   street: 'freedom',
//   // }
// };

// // console.log(userInfo.adress.street);
// console.log(userInfo.?adress?.street);

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   adress: {
//     city: "Moscow",
//     street: "freedom",
//   },
// };

// if ("name" in userInfo) {
//   console.log(userInfo.name);
// }

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   adress: {
//     city: "Moscow",
//     street: "freedom",
//   },
// };

// for (let key in userInfo) {
//   console.log(key); //ключи
//   console.log("fff");
//   console.log(userInfo[key]); // значения ключей
// }

// for (let key in userInfo.adress) {
//   console.log(key); //ключи
//   console.log(userInfo.adress[key]); // значения ключей
// }

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   adress: {
//     city: "Moscow",
//     street: "freedom",
//   },
//   showInfo: function () {
//     console.log(
//       `${userInfo.name}, ${userInfo.age} лет. Адрес: г. ${userInfo.city}, улица: ${userInfo.street}`
//     );

//     //showInfo() {}
//   },
// };
// userInfo.showInfo();

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   adress: {
//     city: "Moscow",
//     street: "freedom",
//   },
//   showInfo: function () {
//     //БУДЕТ ОШИЬКА ПОСКОЛЬКО У show НЕТ ТАКИХ СВ-В
//     // function show() {
//     //   console.log(
//     //     `${this.name}, ${this.age} лет. Адрес: г. ${this.city}, улица: ${this.street}`
//     //   );
//     // }
//     //showInfo() {}
//     //СТРЕЛОЧНАЯ ФУНКЦИЯ БУДЕТ РАБОТАТЬ - БЕРЕТ ЗНАЧЕНИЕ ИЗВНЕ

//     let show = () =>
//       console.log(
//         `${this.name}, ${this.age} лет. Адрес: г. ${this.city}, улица: ${this.street}`
//       );
//     show();
//   },
// };
// userInfo.showInfo();

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   adress: {
//     city: "Moscow",
//     street: "freedom",
//   },
//   showInfo() {
//     console.log(
//       // БДУЕТ ОШИЬКА ЕСЛИ ОБРАЩАТЬСЯ ЧЕРЕЗ userInfo.name и так далее
//       `${this.name}, ${this.age} лет. Адрес: г. ${this.city}, улица: ${this.street}`
//     );
//   },
// };
// userInfo.showInfo();

// let user = userInfo;
// userInfo = null;
// user.showInfo();

//КОНСТРУКТОР
//ОБЯЗАТЕЛЬНО БОЛЬШАЯ БУКВА
// function UserInfo(name) {
//   //this = {}, Создается пустой объект (неявно)
//   this.name = name;
//   this.age = 30;

//   //return this; Возвращается объект (неявно)
// }
// //ОБЯЗАТЕЛЬНО new
// console.log(new UserInfo("Vlad"));
// console.log(new UserInfo("Masha"));
// let user = new UserInfo("Pasha");
// console.log(user.name);
// user.age = 40;
// console.log(user);

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   '58': 'Значение св-ва'
// }
// console.log(userInfo[58]);

// let userInfo = {
//   name: "Vlad",
//   age: 30,
// };
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age);

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   showInfo() {
//     console.log(`${this.name}`);
//   },
// };
// let user = userInfo;
// userInfo = null;
// user.showInfo();

// let userInfo = {
//   name: "Vlad",
//   age: 30,
// };

// for (const key in userInfo) {
//   const value = userInfo[key];
//   console.log(key);
//   console.log(value);
// }

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   adress: {
//     city: 'Moscow'
//   }
// };

// for(const key in userInfo.adress) {
//   console.log(userInfo.adress[key]);
// }

// let userInfo = {
//   name: "Vlad",
//   age: 30,
//   "likes js": true,
// };
// console.log(userInfo['likes js']);

// let userInfo = {};
// userInfo.name = "Vlad";
// userInfo.age = 30;
// userInfo.name = "Lena";
// delete userInfo.name;
// console.log(userInfo);

// let user = {
//   name: "Vlad",
//   age: 30,
//   want() {
//     console.log(`${this.name} go for a walk`);
//   },
// };
// user.want();

// function MakeUser(name, age) {
//   this.name = "Vlad";
//   this.age = age;
// }

// let user = new MakeUser(name, 30);

// console.log(user);