 let selectoption=document.querySelectorAll("select")
 let result=document.getElementById("output-text")
 selectoption.forEach(selecttag =>{
    console.log(selecttag.id)
    for(const country_code in countries){
      
    let option =document.createElement("option");
    
    option.text=countries[country_code]
    option.value=country_code
    if( selecttag.id=="first" && option.text=="English"){
        option.selected="English"
    }
    if( selecttag.id=="second" && option.text=="Hindi"){
        option.selected="Hindi"
    }
    selecttag.add(option)

   }})

function genrate(){
    let text=document.getElementById("input-text").value
    let option1=document.getElementById("first").value
    let option2=document.getElementById("second").value
     if(text.trim() != ""){
        let apilink=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${option1}&tl=${option2}&dt=t&q=${text
       
      }`
        fetch(apilink).then(Response => Response.json()).then(data=>{
        
            result.value=data[0][[0]][[0]]
        
            
        })
        
      }
      else{
        result.value=""
          
      }
     
    
    
}



let exchange=document.querySelector("i");
exchange.addEventListener("click",()=>{

let firstoption=document.getElementById("first").value
let secondoption=document.getElementById("second").value

document.getElementById("first").value=secondoption
document.getElementById("second").value=firstoption

})

