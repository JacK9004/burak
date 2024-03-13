// TASK K

function countVowels(str: string): number {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Call
console.log(countVowels("football")); 
console.log(countVowels("string")); 
















































/*Project standarts:
    -Logging standarts
    -Naming standarts 
        function, method, variable => Camel     goHome
        class => Paskal                         MemberService
        folder => Kebab                         router-admin
        css => SNAKE                            button_style
    
    -Error handling
*/


/* API request:
Traditional API
Rest API
GraphQL API
...
*/




/* FrontEnd ikki xil usulda develop qilinadi

Traditional FD  => BSSR (Backend Server Side Rendering)(ADMIN project)  => EJS freamwork orqali amalga oshiriladi
Modern FD       => SPA  (Singe Page Application) {User application}     => REACT freamwork orqali amalga oshiriladi
*/




/* AUTHINTIFICATION SESSIONS
request join
self destroy
*/


/* VALIDATION
FrontEnd validation
Backend validation
Database validation
pipe frontend va backent oraligidagi validation
*/








// // TASK-H

// function musbatSonlar(arr: number[]): string 
//     {
//         const musbatQiymatlar = arr.filter(num => num > 0);
//         const natija = musbatQiymatlar.join('');
//         return natija;
//     }

//     console.log(musbatSonlar([1, -4, 2]));
//     console.log(musbatSonlar([21, 14, -6]));

// //TASK - I

// function raqamlarniOlish(str: string): string {
//     return str.match(/\d/g)!.join(''); 
//                             //\d - Bu regular expression patterni barcha raqamlarni ifodalaydi.
//                             //g - Bu flag, barcha raqamlarni qidirish uchun global qidirishni belgilaydi.

// }

// console.log(raqamlarniOlish("m14i1t"));
// console.log(raqamlarniOlish("Salom11"));


// // TASK-H

// function teskariOqish(a: string): string {
//     return a.split('').reverse().join('');
// }

// console.log(teskariOqish("jushkin"));
// console.log(teskariOqish("hello"));


// // TASK-J

// function findLongestWord(sentence: string): string {
//     const words = sentence.split(" ");
//     let longestWord = "";

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// // Call
// console.log(findLongestWord("I come from Uzbekistan"));





















    





















