///
let names = new String("Nishat")
console.log(names.length);
// jokon nam.length e log kora hoi tokon seta new string namok constructor function er bitore length namok function ta lika ase then se hisab kore amader dei

//tobe amra aeta nea besi kaj korbo/

// charAt() , charcodeAt() , stringNameat() , string[indexNumber] , slice() , .toUppeerCase() , .toLowerCase() ,.concat(), .trim() ,.padstart() , .tostring , .stringrepeat() , .replace() , .replaceAll() , .repeat() , .repeatAll(/word/gi , "string")



let nam = "Nishat"
// console.log(nam.charAt(2)); // output: s
// console.log(nam.charCodeAt("N")); // N er asci value 78: 
// console.log(nam.charCodeAt(0)); //  0 no index er  asci value 78: 
console.log(nam.charCodeAt("Nishat")); //  0 no index er  asci value 78: 
// console.log(nam.charCodeAt(1)); //  0 no index er  asci value 78: 

let text = "Hello world"
console.log(text.charCodeAt(4));// 4 no index er value 111 , aeta protita index er jonno change hoi 
console.log(text.charCodeAt("Hello world")); // aeta value : 72 , purata 72 othoba single kore dorle 72 e asbe
console.log(text.charCodeAt("o")); // aetar asci value 72

const namess = "nishat"
 console.log(namess.at(2)); // aetar value : s

 const na ="nishat"
 console.log(na[2]); // aetar value   : s

 let sliceName = "Software Engineer"
 console.log(sliceName.slice(0,8)); // 0 theke 7 porjonto katba , and setai output dekaba //output : Software
 console.log(sliceName.slice(3)); // 0 theke  2 porjonto katba , and jehoto simana nai , tai se bakitoko dekabe 
  //output : tware Engineer

  let textS = "Apple, Banana, Kiwi";
  console.log(textS.length); // 19
  console.log(textS.slice(-4)); // tar mane se i=-1 , w-2, i=-3 , k=-4 porjonto dekabe bakita dekabe na

  let AnotherSlice = "Mern Stack Developement"
  console.log(AnotherSlice.length); // 23
  console.log(AnotherSlice.slice(-12)); // Developement 

  let cases = "Hello world"
  console.log(cases.toLowerCase()); // sob choto : hello world
  console.log(cases.toUpperCase()); // sob boro : HELLO WORLD

  let casess = "Hello world"
  let namef = "welcome to my arena"
  let namef2 = " welcome to my arena"
    console.log(casess.concat(namef)); // 2ta eksate jog kore sentence toiri kore : Hello worldwelcome to my arena 
    console.log(casess.concat(namef2)); // namef2 = " welcome to my arena" tai aeta asce  : Hello world welcome to my arena

// ciele text o concat korte pari mane text o jog korte pari 
let text1 = "My name is "
console.log(text1.concat("Mahmudur Nishat")); // My name is Mahmudur Nishat 

// unwanted space remover both (leftside And rightside)
let text8 = " Hello World      "
console.log(text8.trim()); // output : Hello World
console.log(text8.trimStart()); // output : Hello World , trimStart basically deleletd the space from left
console.log(text8.trimEnd()); // output :  Hello World  trimStart basically deleletd the space from right

// paddig dite string er aage 
let text2 = "Hello Frontend developer"
let padded = text2.padStart(5,"c")
console.log(padded);

// number ke string e convert kora

let text3 = 55;
console.log(text3.toString());

// string ke jotobar repeat korate chan 

let text4 = " Hello Mahmudur Nishat, A Modern Frontend Developer"
console.log(text4.repeat(20)); 
//output : Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hell
// o Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mah
// mudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur
//  Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nish
// at, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A
//  Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer Hello Mahmudur Nishat, A Mode
// rn Frontend Developer Hello Mahmudur Nishat, A Modern Frontend Developer

// .replace() string er kicu ongso ke replace kore

let text5 = " Hello Ui developer"
console.log(text5.replace("Ui","Frontend")); // output :  Hello Frontend developer

//.replaceAll()

let text6 = "Hello Ui developer Hello Ui developer Hello Ui developer Hello Ui developer"
let newText = text6.replaceAll("Ui","Frontend")
console.log(newText); // output : Hello Frontend developer Hello Frontend developer Hello Frontend developer Hello Frontend developer // kintu ui jodi konota chota hoter hoto tai le 

// jodi choto hater and boro hater hoi taile oi word er aage /word/gi den  . kono string use koiren na .
let text7 = "Hello Ui developer Hello ui developer Hello ui developer Hello ui developer"
let newText1 = text7.replaceAll(/UI/gi, "Frontend" ) // ui er pore gi delam jate se sob capital and small 2tae nei.
console.log(newText1) // Hello Frontend developer Hello Frontend developer Hello Frontend developer Hello Frontend developer


/// convert string to array 
// jekono url name obiously string hobe , then seta split korle seta  array return korbe 
// then element gulo access korte paren

const url = "https://www.youtube.com/home/feed/blog"
console.log(url.split("/")); // output : [ 'https:', '', 'www.youtube.com', 'home', 'feed', 'blog' ] 


const url1 = "https://www.youtube.com/home/feed/blog"
 let url2 = url.split("/"); 
 console.log(url2.length);
 console.log(url2[5]); 
 console.log(url2[url2.length - 1]); // doren apni length na ber korei , just ses upadan dekte chan .

 // kono ekta string koto number index e ase ta ber kore dei , 
 let text9 = "Hello Mango people"
 console.log(text9.indexOf("Mango")); // Mango ase 6 nunber index e 
 //.search er kaj o eki 

 // match and matchALl kemne kaj kore deken 

 let text10 = "Hello mango people"
 console.log(text10.includes("mango")); //output : true , mango ase ,


//ek e rokom .startwith() je start hello dea hocce kina  


// ===================== Array method  =================================

//array length , .tostring() , array[arrayindex] , 

let x = [1, "banana", 65, 78, 98]
console.log(x.length); // 5 
console.log(x.toString()); // 1,banana,65,78,98


let x1 = [1, "banana", 65, 78, 98]
console.log(x1[3]); // 3number index er value 78
// alternate 
console.log(x1.at(3)); // 3number index er value 78




//.join() , .pop()
//=======================================
let x2 = ["nishat", "banana", 65, 78, 98]
console.log(x2.join(" => ")); 
console.log(x2.pop()); // answer : 98 array last element deleted  kore
console.log(x2);[ 'nishat', 'banana', 65, 78 ]

//.push() , .pop()
//=======================================
let x3 = ["nishat", "banana", 65, 78, 98]
let x4 = x3.push(25); // array last upadan e probes korai 
console.log(x3); //  [ 'nishat', 'banana', 65, 78, 98, 25 ]
console.log(x3.pop());
console.log(x3); // [ 'nishat', 'banana', 65, 78, 98 ]

// .shift() , .unsift()
//=======================================\

// shift er kalato vai  = pop()
let x6 = ["nishat", "banana", 65, 78, 98];
console.log(x6.shift()); // pop er kalato vai  ,  just protom theke del kore
console.log(x6); // [ 'banana', 65, 78, 98 ]

// unshift er kalato vai  = push()
let x7 = ["nishat", "banana", 65, 78, 98];
console.log(x7.unshift("ikra")); // push er kalato vai  ,  just protom theke add kore 
console.log(x7); // [ 'ikra', 'nishat', 'banana', 65, 78, 98 ]

/// shadow delete er kaj 

let x8 = ["nishat", "banana", 65, 78, 98];
delete x8[1]
console.log(x8); // shadow del [ 'nishat', <1 empty item>, 65, 78, 98 ] // not permanent del 

// permanent del er kaj  == splice()
// splice (1 ,2) == 1 number index theke suru hoba , 2ta item katba i,e :  1number item and 2nd number item 
// splice (1 ,2,"hello") == 1 number index theke suru hoba , 2ta item katba i,e :  1number item and 2nd number item and then 1 number index e hello bosaba . 

let x9 = ["nishat", "banana", 65, 78, 98];
let x10 = x9.splice(1,2)

console.log(x10); // ja katce taholo [ 'banana', 65 ]
console.log(x9); // [ 'nishat', 78, 98 ]


// ekon x9 = ["nishat", "banana", 65, 78, 98]
let x11 = x9.splice(1,2,"hello")
console.log(x9); // [ 'nishat', 'hello' ]

// mostly important : kono aaray maje jodi element add korte cie tahole 
// use splice(1,0,"Ikra", "zoom")
let x12 = ["nishat", "banana", 65, 78, 98];
x12.splice(1,0,"ikra", "zoom"); // 1number index e jaw , 0 mane kono element del korba na and "Ikra", "zoom" 2ta element bosa
// banana tarpor automatic bosbe
console.log(x12); // [ 'nishat', 'ikra', 'zoom', 'banana', 65, 78, 98 ]

// oke ami cie 1number index del hoe oi 2ta bosbe 
let x13 = ["nishat", "banana", 65, 78, 98];
x13.splice(1,1,"ikra", "zoom"); // 1number index e jaw , 0 mane kono element del korba na and "Ikra", "zoom" 2ta element bosa
console.log(x13); // [ 'nishat', 'ikra', 'zoom', 65, 78, 98 ]


let x14 = ["nishat", "banana", 65, 78, 98];
let x15 = x14.slice(3); // by default se 0,1,2 ke del kore dise , and bakitoko, [ 78, 98 ]
console.log(x15); // [ 78, 98 ]

// arravajavaja korte taufik69 deken 

// fill

let x16 = ["nishat", "banana", 65, 78, 98];
console.log(x16.fill("ikra"));// [ 'ikra', 'ikra', 'ikra', 'ikra', 'ikra' ]

let x17 = ["nishat", "banana", 65, 78, 98];
console.log(x17.fill("ikra",1));// [ 'nishat', 'ikra', 'ikra', 'ikra', 'ikra' ]


// mostly important : foreach() ,.map()


let x18 = ["nishat", "banana", 65, 78, 98];
x18.forEach((item) =>{
console.log(item);
}

)
// proti itme indiviually deka jacce 
// nishat
// banana
// 65
// 78
// 98

// let x19 = ["nishat", "banana", 65, 78, 98];
// x19.forEach((item,index) =>{
// console.log(item,index);
// }

// )
// nishat 0
// banana 1
// 65 2
// 78 3
// 98 4

// for each function : foreach new aarray create kore na
// for each function dom e loop korte pare
// array and node list 2 ta kei loop korate pare foreach
let x20 = ["nishat", "is", "frontend", "developer"]
x20.forEach((item,index,arr)=> {
    console.log(item,index,arr);
}
)
/**
 * nishat 0 [ 'nishat', 'is', 'frontend', 'developer' ] // nishat 0 number index a  , sate array o dekai dise
is 1 [ 'nishat', 'is', 'frontend', 'developer' ] // is 1 number index a  , sate array o dekai dise
frontend 2 [ 'nishat', 'is', 'frontend', 'developer' ] etc
developer 3 [ 'nishat', 'is', 'frontend', 'developer' ] etc
 *
 */

let x21 = ["nishat", "frontend", "developer"]
x21.forEach((item,index,arr)=>{
    console.log(item,index,arr);
}

)
/***
 * nishat 0 [ 'nishat', 'frontend', 'developer' ]
frontend 1 [ 'nishat', 'frontend', 'developer' ]
developer 2 [ 'nishat', 'frontend', 'developer' ]
 */

// map function : map create new array 
// map function dom e loop korte pare na
// array list ke parle o nodelist ke pare na foreach

let x22 = ["nishat", "will" , "be", "Modern"]
x22.map((item,index,arr)=>{
console.log(item,index,arr);
}

)

/**
 * nishat 0 [ 'nishat', 'will', 'be', 'Modern' ]
will 1 [ 'nishat', 'will', 'be', 'Modern' ]
be 2 [ 'nishat', 'will', 'be', 'Modern' ]
Modern 3 [ 'nishat', 'will', 'be', 'Modern' ]
 */

let studentNames =["jhon", "patrik", "rifu"]
studentNames.map(names=> console.log(names.toLowerCase())) 
// jhon 
//patrik
// rifu

let studentNamess =["jhon", "patrik", "rifu"]
studentNamess.forEach(names=> console.log(names.toLowerCase())) 
// jhon 
//patrik
// rifu

// whats the difference ?

let studentNamesss =["jhon", "patrik", "rifu"]
console.log(studentNamesss.forEach(names => names.toLowerCase())); // undefined ,  foreach new array dei na
console.log(studentNamesss.map(names=> names.toLowerCase())); // [ 'jhon', 'patrik', 'rifu' ] , new array dei


let studentName2 =["jhon", "patrik", "rifu"]
let forEachfunc = studentName2.forEach(names=> names.toUpperCase())
console.log(studentName2); // [ 'jhon', 'patrik', 'rifu' ]
console.log(forEachfunc); // undefined

let studentName3 =["jhon", "patrik", "rifu"]
let forEachfunc1 = studentName3.map(names=> names.toUpperCase())
console.log(studentName3); // [ 'jhon', 'patrik', 'rifu' ] 
console.log(forEachfunc1); // [ 'JHON', 'PATRIK', 'RIFU' ] just parent ke change korse
console.log(studentName3); // [ 'jhon', 'patrik', 'rifu' ] parent er array kintu change hoi nai

let x50 = ["nishat", "banana", 65, 78, 98]
        let x51 = x50.splice(1,2,"hello")
        console.log(x51); //  [ 'banana', 65 ] 
        console.log(x50); // [ 'nishat', 'hello', 78, 98 ]