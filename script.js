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




