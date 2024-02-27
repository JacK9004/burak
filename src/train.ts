// TASK-H

function musbatSonlar(arr: number[]): string 
    {
        const musbatQiymatlar = arr.filter(num => num > 0);
        const natija = musbatQiymatlar.join('');
        return natija;
    }

    console.log(musbatSonlar([1, -4, 2]));
    console.log(musbatSonlar([21, 14, -6]));










    





















// // TASK-H

// function teskariOqish(a: string): string {
//     return a.split('').reverse().join('');
// }

// console.log(teskariOqish("jushkin"));
// console.log(teskariOqish("hello"));