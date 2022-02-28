// NUMBER

// let myNum = 425;
// console.log(myNum);
//
// let myNegativeNum = -425;
// console.log(myNegativeNum);
//
// let myFloat = 4.25;
// console.log(myFloat);
//
// let myNegativeFloat = -4.25;
// console.log(myNegativeFloat);

// let myMillon = 1e6;
// console.log(myMillon); // 1000000
//
// let myNegativeLittleNum = 1e-6;
// console.log(myNegativeLittleNum) // 0.000001

                        //BigInt

// let myBigInt = 1234567890123456789012345678901234567890n;
// console.log(myBigInt);
// let myBigInt2 = "1234567890123456789012345678901234567890n";
// console.log(myBigInt2);


        // OKRUGLENIE CHISEL

// let myFloat = 5.42421;
// console.log(Math.round(myFloat)); // 6 je 4
// console.log(Math.floor(myFloat)); // 5;
// console.log(Math.ceil(myFloat)); // 6
// console.log(Math.trunc(myFloat)); // 5


// let myFloat=5.614517;
// console.log(myFloat.toFixed(2)); //5.61
// console.log(myFloat.toFixed(3)); //5.615

// // Арифметические операторы
//
// //Сложение +
//
// console.log(15 + 15);
//
// //Вычитание
//
// console.log(15 - 15);
//
// //Умножение
//
// console.log(15 * 15);
//
// //Деление
//
// console.log(15 / 15);
//
// //Взятие остатка от деления
//
// console.log(3 % 2);
//
// //Возведение в степень.
//
// console.log(2 ** 5);


    //Инкремент ++,

// let x = 3;
// console.log(++x); //4
// console.log(x); //4

// let x = 3;
// console.log(x++); //3
// console.log(x); //4


       //Декремент - -

// let x = 3;
// console.log(--x); //2
// console.log(x); //2

// let x = 3;
// console.log(x--); //3
// console.log(x); //2



    //Унарный минус

// let x = -5;
// console.log(x);

    // Унарный плюс

//
// let x = "5";
// console.log(typeof x); // string
// // x = +x;
// console.log(typeof x); //number


          // exercise

// let roomLength = prompt('Type your room length!');
// let roomWidth = prompt('Type your room width!');
//
// let roomArea = roomLength * roomWidth;
//
// document.write(`Your room area is ${roomArea.toFixed(2)}`);


                   //hometask
//
// let nurserySchoolLength = prompt('type nursery school length!');
// let nurserySchoolWidth = prompt('type nursery school width!');
//
// let foot = nurserySchoolLength * nurserySchoolWidth;
// let acra = foot / 43560;
//
// document.write(acra.toFixed(2));


// let bottle = prompt("How many do you have such as bottles as 1 liter?" );
// let bottle2 = prompt("How many do you have such as bottles as more 1 liter ?" );
//
// let resultBottle = bottle * 0.10;
// let resultBottle2 = bottle2 * 0.25;
//
// let result = resultBottle + resultBottle2;
//
// document.write(`<h3>Your 1 liter bottle is ${bottle} </h3>`);
// document.write(`<h3> The total of bottle is ${resultBottle}</h3>`);
//
// document.write(`<h3>Your more than 1 liter bottle is ${bottle2}</h3>`);
// document.write(`<h3> The total of bottle is ${resultBottle2}</h3>`);
//
// document.write(`<h3> The total of all bottles is ${result}$</h3>`);


// let order = prompt('Sum of order!')
//
// let tip = order * 0.18;
// document.write(`The tip of waiters is ${tip} <br/>`);
//
// let tax = order * 0.12;
// document.write(`The tax is ${tax} <br/>`);
//
// document.write(`The total is ${order - tip - tax} <br/>` );
// document.write(`The total is ${}` );



            //HOMETASK
//
// let n = prompt('Type your number!');
//
// let count = n * (n + 1) / 2;
// console.log(count);

//Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г.
// Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий
// вес посылки.
//
// let souvenir = prompt('How many souvenirs?');
// let baubles = prompt('How many baubles?');
//
// let weightSouvenir = souvenir * 75;
// let weightBaubles = baubles * 112;
//
// document.write(`<h3>The weight sold Souvenirs:</h3> ${weightSouvenir} <br/>`);
// document.write(`<h3>The weight sold baubles:</h3> ${weightBaubles} <br/>`);
//
// document.write(`<h3>The total weight sold baubles and souvenirs:<h3/> ${weightSouvenir + weightBaubles}`);


// Представьте, что вы открыли в банке сберегательный счет под 4 % годовых. Проценты банк рассчитывает
// в конце года и добавляет к сумме счета. Напишите программу, которая запрашивает у пользователя сумму
// первоначального депозита, после чего рассчитывает и выводит на экран сумму на счету в конце первого,
//     второго и третьего годов. Все суммы должны быть округлены до двух знаков после запятой.
//
// let initial = prompt("There is your initial fee!");
//
// initial = +initial
//
// let deposit = (initial * 0.04) * 3;
// let sum = initial + deposit
//
// document.write(`<h3>Your account is </h3> ${sum.toFixed(3)}`);

// let a = prompt('Choose some number!');
// let b = prompt('Choose some number!');
//
//
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b);
// console.log(a % b);