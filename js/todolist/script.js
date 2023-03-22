const inputText=document.querySelector('#task');
const list=document.querySelector('#list');
const eklebtn=document.querySelector('#liveToastBtn');
const dltbtn=document.querySelector('#deletebtn');
let todoarr=[];

if(localStorage.getItem('Tasks')!==null){
  todoarr=JSON.parse(localStorage.getItem('Tasks'));
  showElement(todoarr);
}
eklebtn.addEventListener('click',newElement);
function newElement(e){
  let girdi=inputText.value;
  if(girdi===''){
      alert("lütfen görev giriniz")
    }else{
       todoarr.push({ "id": todoarr.length + 1, gorevAdi: `${girdi}`, check: "false" })
       showElement(todoarr);
       localStorage.setItem('Tasks',JSON.stringify(todoarr));
    }
    e.preventDefault();
}

function showElement(todoarr){
  list.innerHTML='';
    let html='';
    for(a of todoarr){
     
    let completed=a.check=='completed' ?'checked':'';
    html=` <li class="list-group-item d-flex justify-content-between align-items-center">
       <div class="form-check">
        <input onclick="kontrol(this)" id="${a.id}" class="form-check-input" type="checkbox" value="" ${completed}>
        <label class="form-check-label" for="${a.id}" ${completed}>
          ${a.gorevAdi}
        </label>
       </div>
       <div>
       <span onclick="sil(${a.id})"><i class="fa fa-solid fa-delete-left"></i><span>
       </div>
     </li>`;
     list.insertAdjacentHTML('beforeend',html);
    }
    
   
}

function kontrol(checkbox){
   console.log(checkbox);
   let check;
  //  let label=checkbox.nextElementSibling;
  if(checkbox.checked){
      check="completed";
  }else{
    check="false";
  }
  for(a of todoarr){
    if(checkbox.id==a.id){
      a.check=check;
    }
  }
  localStorage.setItem('Tasks',JSON.stringify(todoarr));
}
dltbtn.addEventListener('click',Delete);
function Delete(){
  todoarr.splice(0,todoarr.length);
  showElement(todoarr);
  localStorage.setItem('Tasks',JSON.stringify(todoarr));
}
function sil(id){
    let gorevindex=todoarr.findIndex(a=>{a.id==id})
    todoarr.splice(gorevindex,1);
    showElement(todoarr);
    localStorage.setItem('Tasks',JSON.stringify(todoarr));
}
