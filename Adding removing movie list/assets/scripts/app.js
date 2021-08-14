const mainadd = document.querySelector("header button");
const modal = document.querySelector(".modal");
const backdrop =document.getElementById("backdrop");
const cancel = document.querySelector(".btn--passive")
const addbtn = document.querySelector(".btn--success")
const inputvalue=document.querySelectorAll("input");
const getsection = document.getElementById("entry-text");
const render = document.querySelector("#movie-list");
const divclass=document.querySelector(".movie-element__image");
let yes = document.querySelector(".btn--danger");
const no = document.querySelector(".btnpassive");
const confirmation  = document.querySelector(".confirmation");
const array = [];

const deleteitem = itemid =>{
  
  let data = 0;
  for(const arr of array){
    if(arr.id == itemid){
      break;
    }
    data++;
  }
  
 
 array.splice(data,1);
 render.removeChild(render.children[data]);
 deletetab();
 updateui();
}

const showtab = ()=>{
  confirmation.classList.add("visible");
};
const remover = ()=>{
  deletetab();
  backdropfunc();
};
const deletetab = ()=>
{confirmation.classList.remove("visible");};

const  removeitem = (identy) => {
backdropfunc();
showtab();
no.removeEventListener("click",remover);
no.addEventListener("click",remover);
 yes.replaceWith(yes.cloneNode(true));
 
 yes=document.querySelector(".btn--danger");
 console.log(yes);
   

 yes.addEventListener("click",()=>{
   deleteitem(identy);
   deletetab();
   backdropfunc();
   updateui();
 });




};


const resetinput = () => {
  for(arr of inputvalue){
    arr.value = "";
  }
};
const renderhtml = (title,url,review,id) => {
 const createli = document.createElement("li");
 createli.className = "movie-element";
 createli.innerHTML=`
 <div class="movie-element__image">
 <img src="${url}" alt="${title}">
 </div>
 <div class="movie-element__info">
 <h2>${title}</h2>
 <p>${review}/5</p> `;
 createli.addEventListener("click",removeitem.bind(null,id));
render.appendChild(createli);
updateui();



};

const updateui = () => {
  if(array.length === 0){
    getsection.style.display="block";
  }
  else{
    getsection.style.display="none";
  }
}

const inputhandler = ()=>{
const Title = inputvalue[0].value;
const Img = inputvalue[1].value;
const Review = +inputvalue[2].value;


const object = {
  title:Title,imageurl:Img,review:Review,id:Math.floor((Math.random()*10)+1).toString()
};
if((Title.trim() === "" || Img.trim()==="") || (Review <1 || Review>5)){
  alert("fill the form correctly");


}
else{
  array.push(object);
  console.log(array);
  resetinput();
  backdropfunc();
  modal.classList.toggle("visible");
 

  
  renderhtml(Title,Img,Review,object.id);
  
};
};
const deletemodal= () =>{
  modal.classList.remove("visible");
}

const backdropfunc = () =>{
  backdrop.classList.toggle("visible")
};

const addmodal = () =>{
modal.classList.add("visible");

};

const backdrophandler = ()=>{
 backdropfunc();
 deletemodal();
 deletetab();
 resetinput();

};


mainadd.addEventListener("click",()=>{
  
  backdropfunc();
  addmodal();

  
});

backdrop.addEventListener("click",backdrophandler);
cancel.addEventListener("click",()=>{
  backdropfunc();
  modal.classList.toggle("visible");

 
});

addbtn.addEventListener("click",inputhandler);


