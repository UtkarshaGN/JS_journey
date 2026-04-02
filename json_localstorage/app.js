// Local Storage
let dataBox = document.querySelector("#data")
let listBox = document.querySelector("#list")
let names =[]
function addName(){
   names.push(dataBox.value)
   localStorage.setItem("names", JSON.stringify(names));
   //console.log(names)

   let li = document.createElement("li");
   li.innerText = dataBox.value;
   listBox.append(li)


}



//JSON - stringify()
 let students = [  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   }
]

console.log(students)


//array of object convert to string 
let jsonString =JSON.stringify(students)
console.log(jsonString)

//convert object to strings
let student = {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   }

   let objectCon = JSON.stringify(student)
   console.log(objectCon)


   //JSON - parse()

   const jsonStri = '{"name":"raja","gender":"Male","physics":30,"maths":25,"english":40}';
   console.log(jsonStri)

   const stu = JSON.parse(jsonStri)
   console.log(stu)