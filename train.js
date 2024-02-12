console.log('TRAIN AREA')
//TASK-B










    /*
    //TASK-A: 
    
    Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
    MASALAN countLetter("e", "engineer") 3ni return qiladi.
    
    1. engineer => forEach || map || for
    2. condition malumotlarni solishtirish
    3. return qilish
    4. result
    
    //SOLUTION
    function countLetter(letter, word) {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === letter) {
                count++;
            }
        } return count;
    }
    const result = countLetter("e", "engineer");
    console.log(result); // Output : 3
    */



// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "ozingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //50-60
//     "endi dam oling, foydasi yoq"
// ];

// //CALLBACK
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 & a <= 30) callback(null, list[1]);
//     else if (a > 30 & a <= 40) callback(null, list[2]);
//     else if (a > 40 & a <= 50) callback(null, list[3]);
//     else if (a > 50 & a <= 60) callback(null, list[4]);

//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// };

// console.log("passed here 0");
// maslahatBering(25, (err, data) => {
//     if (err) console.error("Eror:", err);
//     else console.log(data);
// })
// console.log("passed here 1");


// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 & a <= 30) return list[1];
//     else if (a > 30 & a <= 40) return list[2];
//     else if (a > 40 & a <= 50) return list[3];
//     else if (a > 50 & a <= 60) return list[4];

//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);

// setTimeout(function () {
//     return list[5];
// }, 5000);
//         });
//     }
// }
//call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//     .then((data) => { console.log(`Javob: ${data}`) })
//     .catch((err) => { console.error("Error: ", err) });
// console.log("passed here 1");

//call via SCYNC/AWAIT
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(`Javob: ${javob}`);
//     javob = await maslahatBering(35);
//     console.log(`Javob: ${javob}`);
// }
// run();