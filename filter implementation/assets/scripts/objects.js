const addbtn = document.getElementById("add-movie-btn");
const searchbtn = document.getElementById("search-btn");
const array = [];



function render( value=""){
   let movielist =  document.getElementById("movie-list");
  
   if(movielist ===0)
   {
   movielist.classList.remove("visible");
   return;
}
   else{
movielist.classList.add("visible");
      
   }  

  let filter;
  if (value =="")
  filter=array;
  else
  {
     filter = array.filter((item)=>{
        return item.info.title.includes(value);
     });
        
     }
     movielist.innerHTML=""; 
   
   for(const arr of filter){
      const newel = document.createElement("li");
     let text = arr.info.title;
     for(const obj in arr.info){
        if(obj!="title"){
           text=text+`- ${obj} ${arr.info[obj]}`;
           newel.textContent=text;
           movielist.append(newel);

        }
         }
      }
}

function moviehandler(){
   const title = document.getElementById("title").value;
   const key = document.getElementById("extra-name").value;
   const value = document.getElementById("extra-value").value;
    if(title.trim()==="" || key.trim()==="" || value.trim()==="")
    {
    alert("error");
    }

    else{
    const object ={info:{title,[key]:value},id:Math.random()};
    array.push(object);
    render();
  
}
}

function filterhandler(){
   const search = document.getElementById("filter-title").value;
   if (search=="")
   alert("type something and filter")
   else 
  render(search);

  
}

addbtn.addEventListener("click",moviehandler);
searchbtn.addEventListener("click",filterhandler);

