// TASK-O
function calculateSumOfNumbers(arr: (number | string | { number: number } | boolean)[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        const value = arr[i];
        if (typeof value === 'number' || (typeof value === 'string' && !isNaN(parseFloat(value)))) {
            sum += parseFloat(value as string);
        } else if (typeof value === 'object' && 'number' in value) {
            sum += value.number;
        }
    }
    return sum;
}

// Example usage:
console.log(calculateSumOfNumbers([10, "10", {number: 10}, true, 35])); 
console.log(calculateSumOfNumbers([20, "20", {number: 20}, true, 45]));












































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



// // TASK K

// function countVowels(str: string): number {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

// // Call
// console.log(countVowels("football")); 
// console.log(countVowels("string")); 




// TASK-L

// function reverseSentence(sentence: string): string {
//     const words = sentence.split(" ");
    
//     const reversedWords = words.map(word => {
//         return word.split('').reverse().join('');
//     });
    
//     return reversedWords.join(" ");
// }

// // CALL
// console.log(reverseSentence("I love my family!")); 


// // TASK_M

// function getSquareNumbers(array: number[]): { number: number, square: number }[] {
//     return array.map((number: number) => {
//         return {
//             number: number,
//             square: number * number
//         };
//     });
// }

// // CALL
// console.log(getSquareNumbers([3, 4, 5])); 


// // TASK-N

// function palindromeCheck(str: string): boolean {
//     // Raqam va harflarni ajratib olib, faqat harflarni qoldiramiz va katta-kichik harflarga aylantiramiz
//     const cleanStr: string = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Chapdan va o'ngdan belgilarni solishtirib chiqamiz
//     for (let i: number = 0; i < cleanStr.length / 2; i++) {
//         if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true; 
// }

// // CALL
// console.log(palindromeCheck("dad")); 
// console.log(palindromeCheck("number")); 
// console.log(palindromeCheck("aziza")); 












    





















