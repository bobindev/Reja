console.log('TRAIN AREA')
/*D-TASK: 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

@MITASK
*/
/*
1. "Shop" degan class yaratish 
2. controctor qismida 3ta object yaratamiz: non, lagmon, va cola
3. classning 3ta methodini tashkil qilamiz: qoldiq, sotish, va qabul, 

4. return qismida hozirgi vaqt va qolgan mahsulotlar namoyon bolsin.
*/

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }


    //methods

    qoldiq() {
        const d = new Date();
        const current_time = d.getHours() + ":" + d.getMinutes();
        this.current_time = current_time;
        console.log(`Hozir hozir ${this.current_time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`)
    }


    sotish(item, amount) {
        const d = new Date();
        const current_time = d.getHours() + ":" + d.getMinutes();
        this.current_time = current_time;

        if (item === 'non') {
            this.non -= amount;
            //console.log(`Hozir hozir ${this.current_time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`)
        } 

    }

    qabul(item, amount) {
        const d = new Date();
        const current_time = d.getHours() + ":" + d.getMinutes();
        this.current_time = current_time;

        if (item === 'cola') {
            this.cola += amount;
           // console.log(`Hozir hozir ${this.current_time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`)

        }
    }
}

const shop = new Shop(4, 5, 2);
//shop.qoldiq();

shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq();






/*
B-TASK:
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

//SOLUTION
function countDigits(str) {
    let = str.split();
    let regex = /[0-9]/g;
    console.log(str.match(regex).length);
    }

  countDigits("H5r3ello829");

*/


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