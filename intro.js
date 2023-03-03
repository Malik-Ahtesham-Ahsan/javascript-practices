console.log("This is tutorial 37");

// // Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student){
//     return new Promise(function(resolve,reject)
//     {
//         setTimeout(function() {
//             students.push(student);
//             console.log("Student has been enrolled");
//             const error=false;
//             if(!error)
//             {
//                 resolve();
//             }
//             else{
//                 reject();
//             }

//     })

//     }, 2000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 1000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent).then(getStudents).catch
// (function(){console.log("some error occur");
// });
// getStudents();


// function func1()
// {
//     return new Promise(function(resolve,reject)
//     {
//     setTimeout(() => {
//         const error=false;
//         if(!error)
//         {
//             console.log("resolved promise")
//             resolve();
//         }
//         else{
//             console.log('promise reject')
//             reject("soory rejected");
//         }
//     }, 2000);
//  } )
// }
// func1().then(function()
// {
//     console.log("harry:hnak for resolving")
// }).catch(function(error){
//     console.log("harry:very bad bro.Reason:",error)
// })

// const great =(name,end)=>"goodmorning"+name+end;
// console.log(great('harry','byyy'))
// console.log('This is my tutorial 42');

// // Button with id myBtn
// let myBtn = document.getElementById("myBtn");

// div with id content 
// let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// // console.log("Before running getData")
// // getData()
// // console.log("After running getData")
// postData() 

// async function malik()
// {
//     const response=await fetch('https://api.github.com/users');
//     const users=await response.json();
//     console.log("usre resolved")
//     return users;
// }
// let a=malik()
// console.log(a);
// a.then(data=>console.log(data)) 
// let a="harry"
// // try {
// //     console.log("insude")
// //     functionmalik();
// // } catch (error) {
// //     console.log("are okay")
// //     console.log(error.name)
// // }finally{
// //     console.log("final run tis")
// // }
// a=undefined;
// if(a!=undefined)
// {
//     throw new error('this not define');
// }
// else{
//     console.log("thisi ius undefined")
// }
// console.log("This is tutorial 45");

// const myJson = `{
//     "word": "example",
//     "results": [
//       {
//         "definition": "a representative form or pattern",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "model"
//         ],
//         "typeOf": [
//           "representation",
//           "internal representation",
//           "mental representation"
//         ],
//         "hasTypes": [
//           "prefiguration",
//           "archetype",
//           "epitome",
//           "guide",
//           "holotype",
//           "image",
//           "loadstar",
//           "lodestar",
//           "microcosm",
//           "original",
//           "paradigm",
//           "pilot",
//           "prototype",
//           "template",
//           "templet",
//           "type specimen"
//         ],
//         "derivation": [
//           "exemplify"
//         ],
//         "examples": [
//           "I profited from his example"
//         ]
//       },
//       {
//         "definition": "something to be imitated",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "exemplar",
//           "good example",
//           "model"
//         ],
//         "typeOf": [
//           "ideal"
//         ],
//         "hasTypes": [
//           "pacemaker",
//           "pattern",
//           "beauty",
//           "prodigy",
//           "beaut",
//           "pacesetter"
//         ],
//         "derivation": [
//           "exemplify",
//           "exemplary"
//         ]
//       },
//       {
//         "definition": "an occurrence of something",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "case",
//           "instance"
//         ],
//         "typeOf": [
//           "happening",
//           "natural event",
//           "occurrence",
//           "occurrent"
//         ],
//         "hasTypes": [
//           "clip",
//           "mortification",
//           "piece",
//           "time",
//           "humiliation",
//           "bit"
//         ],
//         "derivation": [
//           "exemplify"
//         ],
//         "examples": [
//           "but there is always the famous example of the Smiths"
//         ]
//       },
//       {
//         "definition": "an item of information that is typical of a class or group",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "illustration",
//           "instance",
//           "representative"
//         ],
//         "typeOf": [
//           "information"
//         ],
//         "hasTypes": [
//           "excuse",
//           "apology",
//           "specimen",
//           "case in point",
//           "sample",
//           "exception",
//           "quintessence",
//           "precedent"
//         ],
//         "derivation": [
//           "exemplify",
//           "exemplary"
//         ],
//         "examples": [
//           "this patient provides a typical example of the syndrome",
//           "there is an example on page 10"
//         ]
//       },
//       {
//         "definition": "punishment intended as a warning to others",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "deterrent example",
//           "lesson",
//           "object lesson"
//         ],
//         "typeOf": [
//           "monition",
//           "admonition",
//           "word of advice",
//           "warning"
//         ],
//         "derivation": [
//           "exemplary"
//         ],
//         "examples": [
//           "they decided to make an example of him"
//         ]
//       },
//       {
//         "definition": "a task performed or problem solved in order to develop skill or understanding",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "exercise"
//         ],
//         "typeOf": [
//           "lesson"
//         ],
//         "examples": [
//           "you must work the examples at the end of each chapter in the textbook"
//         ]
//       }
//     ],
//     "syllables": {
//       "count": 3,
//       "list": [
//         "ex",
//         "am",
//         "ple"
//       ]
//     },
//     "pronunciation": {
//       "all": "ɪɡ'zæmpəl"
//     },
//     "frequency": 4.67
//   }`;

// const myObj = JSON.parse(myJson);
// console.log('The object is  :', myObj);
// console.log('The results in the object are  :', myObj['results']);

// let meanings = document.getElementById('meanings')
// meanings.addEventListener('click', ()=>{
//     console.log('someone clicked meanings');
//     populate();
// })

// function populate() {
//     let results = myObj['results'];
//     let html = "";
//     results.forEach(element => {
//         html += `<li class="list-group-item list-group-item-light">One of the definitions of example is ${element.definition} </li>`;
//     });
//     let defs = document.getElementById('defs');
//     defs.innerHTML = html;
    
// }

// let reg=/harry/g;
// console.log(reg)
// console.log(reg.source);

// let a="thsi is coe harry "
// //let res=reg.exec(a)
// // let res1=reg.test(a);
// //  let res2=a.search(reg);
// // let res3=a.match(reg)
// // let res4=a.replace(reg,'malik');

// console.log(res4)

// let reg=/h[a-z]rry/
// reg=/^harry/
// reg=/harry&/
// reg=/h.rry/
//reg=/h*ry/
// reg=/ha?rryi?/
// let str="hhyyrry is harry";
// let res=reg.exec(str);
// console.log("this result from exec is",res)
// if(reg.test(str))
// {
//     console.log(`this ${str} is match ${reg.source}`);
// }
// else{
//     console.log(`this ${str} is not match ${reg.source}`);
// }

// console.log('The file is tutorial 51');
// // Iterators

// function fruitsIterator(values) {
//     let nextIndex = 0;
//     // we will return an object
//     return {
//         next: function () {
//             if (nextIndex < values.length) {
//                 // We will return below object
//                 return {
//                     value: values[nextIndex++],
//                     done: false
//                 }
//             }
//             else {
//                 // We will return below object with only done
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
// const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
// console.log("My array is ", myArray)

// // Using the iterator
// const fruits = fruitsIterator(myArray);
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)

// function* numgen()
// {
//    let i=0;
//    while(true)
//    {
//     yield i++;
//    }
// }
// const gen=numgen()
// console.log(gen.next().value)

// console.log(gen.next().value)

// console.log(gen.next().value)

//  obj=
// {
//     langyage: "javascript",
//     work :"i unu",
//     names: "ali"
// }
// for(let key in obj)
// {
//     console.log(obj[key]);
// }
// let people=["ao","ad","adfs","adsf"];
// for( let name of people)
// {
//     console.log(name);
// }

// const myset=new Set();

// console.log("myset is :",myset)
// myset.add('this');
// myset.add('ehy arre ');
// myset.add('this');
// myset.add(34)
// console.log("this is L:::",myset);
// console.log(myset.has(34))
// myset.delete('this')
// console.log(myset)

// for(item of myset)
// {
//     console.log("item off",item);
// }

// const k1=Symbol("identifier for k1");
// const k2=Symbol("fpr k2 is")

// myobj={};
// myobj[k1]="malik";
// myobj[k2]="ahteshma";
// myobj["name"]="good boy";
// console.log(myobj);
// console.log(myobj[k1]);
// console.log(myobj[k2]);
// console.log(myobj[k1]);

// for(key in myobj)
// {
//     console.log(key,myobj[key])
// }

// let a,b;
// [a,b]=[34,564]
// console.log(a,b);
// [a,b,c,...d]=[1,2,3,4,5,6,7,8,9];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

const fruits=['apple','banan','mango'];
[a,b,c]=fruits;
console.log(a,b,c)