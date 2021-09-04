var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  

const hellobye = () =>{
    names.forEach((names)=>{
if (typeof names !== "string") return;
if (names.charAt(0).toLowerCase()=== "j"){
  console.log("Good Bye " +  names);
}else{
  console.log("Hello " + names);
}
});
  };
  hellobye();
