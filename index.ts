const isOpen: boolean = false;

const myName: string = 'Dev';

const myAge: number = 23.04;

const list: number[] = [0,1,2]; // array type

const me: [string, number, boolean] = ["Dev", 23, false];

enum Job {
    student, 
    intern, 
    WebDev
}
const job: Job = Job.student;
// any can be used to accept any param type
const phone: any = "iphone";
const tablet: any = 1;

// functions in typescript
// ? for optional param 

// const sayWord = (word?: string): string => {
//     console.log(word || 'hello ');
//     return word || 'hello';
// };

// sayWord();

// //defualt params
// const sayWord = (word = 'hello', ...otherstuff): string => {
//     console.log(otherstuff);
//     return word;
// };

// sayWord('Dev', 'Vin');

//rest params work as expected
const sayWord = (word = 'hello', ...otherstuff: string[]): string => {
    console.log(otherstuff);
    return word;
};

sayWord('Dev', 'Vin');

//implicit types
let newName = 'Dev';
newName = 'Vin';
//newName = 10; - typescript can tell the differnece between string an int.
// ^ gives you an error because newName is a strong not an int
