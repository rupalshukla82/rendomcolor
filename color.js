const getcolorNmae = () =>{
    const randomNumber = Math.floor(Math.random()*16777215) // genrete random numbers using math.random
    const randomcode ="#" + randomNumber.toString(16); //this convert numbers into the hexadecimal form here 16 stands for hexdesimal form 
    document.body.style.backgroundColor = randomcode; //select default body background color and change into the randomcolor
    document.getElementById("code").innerHTML= randomcode;
   console.log(randomNumber,randomcode);

 
   let copyBtn = document.getElementById("copybtn");
   copyBtn.addEventListener("click",function() {
    navigator.clipboard.writeText(randomcode)  //copy into clipboard
    .then(() =>{
        console.log("code copy succesfully");
    } )
    .catch(err => {
        console.error(" Error copy code: ",err); //when claicked button not copy anything then error show
    })
   }
      );
    
}
document.getElementById("btn").addEventListener(
    "click",
    getcolorNmae  //getcolorname function call with button click eventlistner
)

getcolorNmae(); //this is called function when button clicked

