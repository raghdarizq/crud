
let titel = document.getElementById("titel");
let price = document.getElementById("price");
let textes = document.getElementById("textes");
let ads = document.getElementById("ads");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let sumbit = document.getElementById("sumbit");
function gettotal(){
  if (price.value != "") {
        let result =( +price.value + +textes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "#040";
      } else {
        total.innerHTML = "";
        total.style.background = "red";
      }
}

let datapro;
if(localStorage.Product != null){
  datapro=JSON.parse(localStorage.Product)
}
else{
  datapro=[];
}
sumbit.onclick = function () {
    let newpro = {
      titel: titel.value,
      price: price.value,
      textes: textes.value,
      ads: ads.value,
      discount: discount.value,
      total: total.innerHTML,
      count: count.value,
      category: category.value,
    };
    datapro.push(newpro);
    localStorage.setItem("Product", JSON.stringify(datapro));
    
  };
  console.log("j")
/*
// let discount = document.getElementById("discount");
// let mood = "create";
// let temp;
// //get total
// function gettotal() {
//   if (price.value != "") {
//     let result = +price.value + +textes.value + +ads.value - +discount.value;
//     total.innerHTML = result;
//     total.style.background = "#040";
//   } else {
//     total.innerHTML = "";
//     total.style.background = "red";
//   }
// }
// //localStorage
// let datapro;
// if(localStorage.Product != null){
//   datapro=JSON.parse(localStorage.Product)
// }
// else{
//   datapro=[];
// }
// sumbit.onclick = function () {
//   let newpro = {
//     titel: titel.value,
//     price: price.value,
//     textes: textes.value,
//     ads: ads.value,
//     discount: discount.value,
//     total: total.innerHTML,
//     count: count.value,
//     category: category.value,
//   };
//   datapro.push(newpro);
//   localStorage.setItem("Product", JSON.stringify(datapro));
//   console.log(datapro);
//   cleardata(); 
// };
// cleardata()
// function cleardata() {
//   (titel.value = ""),
//     (price.value = ""),
//     (textes.value = ""),
//     (ads.value = ""),
//     (discount.value = ""),
//     (total.innerHTML = ""),
//     (count.value = ""),
//     (category.value = "");
}
//rea

/*
//get total
function gettotal() {
  if (price.value != "") {
    let result = (+price.value + +textes.value + +ads.value) - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "red";
  }
}
//create pro
//
let datapro;
if (localStorage.Product != null) {
  datapro = JSON.parse(localStorage.Product);
} else {
  datapro = [];
}
sumbit.onclick = function () {
  let newpro = {
    titel: titel.value.toLowerCase(),
    price: price.value,
    textes: textes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };
  //mood
  if (mood === "create") {
    //count
    if (newpro.count > 1) {
      for (let i = 0; i < newpro.count; i++) {
        datapro.push(newpro);
      }
    } else {
      datapro.push(newpro);
    }
  }
  else{
    datapro[temp]=newpro;
    mood="create";
    sumbit.innerHTML="create";
    count.style.display="block"
  }

  //save
  localStorage.setItem("Product", JSON.stringify(datapro));
  cleardata();
  showData();
};

//clear inputs
function cleardata() {
  (titel.value = ""),
    (price.value = ""),
    (textes.value = ""),
    (ads.value = ""),
    (discount.value = ""),
    (total.innerHTML = ""),
    (count.value = ""),
    (category.value = "");
}
//read
function showData() {
  gettotal();
  let table = "";
  for (let i = 0; i < datapro.length; i++) {
    table += ` <tr>
    <td>${i}</td>
    <td>${datapro[i].titel}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].textes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <th>${datapro[i].total}</th>
    <td>${datapro[i].category}</td>
    <td><button id="update" onclick="updatepro(${i})">update</button></td>
    <td> <button id="delete" onclick="deletepro(${i})">delete</button></td>
</tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  //delete all
  let deleteall = document.getElementById("deleteall");
  if (datapro.length > 0) {
    deleteall.innerHTML = `
    <button onclick="deleteallpro()">deleteall</button>
    `;
  } else {
    deleteall.innerHTML = ``;
  }
}

showData();
//delete
function deletepro(i) {
  datapro.splice(i, 1);
  localStorage.Product = JSON.stringify(datapro);
  showData();
}
//deleteall
function deleteallpro() {
  localStorage.clear();
  datapro.splice(0);
  showData();
}

//count

//update
function updatepro(i) {
  titel.value = datapro[i].titel;
  price.value = datapro[i].price;
  textes.value = datapro[i].textes;
  ads.value = datapro[i].ads;
  discount.value = datapro[i].discount;
  total.value = datapro[i].total;
  gettotal();
  datapro.value = datapro[i].datapro;
  count.style.display = "none";
  sumbit.innerHTML = "update";
  mood = "update";
  temp=i;
  scroll({
    top:0,
    behavior:"smooth"
  } )
  console.log(i);
}
//search
let searchmood ="titel";
function getsearchmood(id){
  if(id==="searchtitle"){
    let search=document.getElementById('search');
    searchmood ="titel";
  }
  else{
    searchmood ="category";
  }
  search.placeholder="search by "+searchmood;
  search.focus()
  search.value="";
  showData()
}
function searchdata(value){
  let table=''
  if(searchmood=="titel"){
    for(let i=0; i<datapro.length; i++){
      if(datapro[i].titel.includes(value.toLowerCase())){
        table += ` <tr>
        <td>${i}</td>
        <td>${datapro[i].titel}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].textes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <th>${datapro[i].total}</th>
        <td>${datapro[i].category}</td>
        <td><button id="update" onclick="updatepro(${i})">update</button></td>
        <td> <button id="delete" onclick="deletepro(${i})">delete</button></td>
    </tr>`
      }
    }
  }else{
    for(let i=0; i<datapro.length; i++){
      if(datapro[i].category.includes(value.toLowerCase())){
        table += ` <tr>
        <td>${i}</td>
        <td>${datapro[i].titel}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].textes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <th>${datapro[i].total}</th>
        <td>${datapro[i].category}</td>
        <td><button id="update" onclick="updatepro(${i})">update</button></td>
        <td> <button id="delete" onclick="deletepro(${i})">delete</button></td>
    </tr>`
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
  //console.log(value);
}
//clean data*/
