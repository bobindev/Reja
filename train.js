console.log('TRAIN AREA')

/*F-TASK: 

Shunday findDoublers function tuzing, 
unga faqat bitta string argument pass bolib, 
agar stringda bir hil harf qatnashgan bolsa true, 
qatnashmasa false qaytarishi kerak.
MASALAN: findDoublers("hello") return true return qiladi

@MITASK
*/


function findDoublers(str) {
   for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
         return true;
      } 
   } return false;
}

const new_finder = findDoublers("hello");
console.log(new_finder);

