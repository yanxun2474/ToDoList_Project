const input = document.querySelector(".input");
const addBtn = document.querySelector(".addItemBtn");
const list = document.querySelector(".list");


let data = [
    {
        title:"刷牙",
        isChecked:false
    },
    {
        title:"睡覺",
        isChecked:false
    },
];


function init(){
    renderList(data);
    addItem(data);
    delItem(data);
}
init();

//渲染列表
function renderList(data){
    let tmpStr = "";
    data.forEach((item,index)=>{
        tmpStr += `<li>           
        <label class="checkbox" for="">
        <input type="checkbox">
        <span>${item.title}</span>
        </label>
        <a href="#" class="delete" data-index="${index}"></a>
        </li>`;
    });
    list.innerHTML = tmpStr;
}

//新增事項功能
function addItem(data){
    addBtn.addEventListener("click",(e)=>{
    if(input.value.trim() === ""){
        alert("請輸入文字!!!");
        return;
    }
    let tmpObj = {
        title:input.value.trim(),
        isChecked:false
    };
    data.unshift(tmpObj);
    renderList(data);
    input.value = "";
});
}

//刪除事項
function delItem(data){
    list.addEventListener("click",e=>{
    if(e.target.getAttribute("class") !== "delete"){
        return;
    }
    let index = e.target.getAttribute("data-index");
    data.splice(index,1);
    renderList(data);
});
}

//篩選事項

//切換篩選標籤
const filter = document.querySelector(".filter");
const filter_Li = document.querySelectorAll(".filter li");
console.log(filter);
console.log(filter_Li);
filter.addEventListener("click",e=>{
    if(e.target.nodeName !== "LI"){
        return;
    }
    filter_Li.forEach((item)=>{
        item.setAttribute("class","");
    });
    e.target.setAttribute("class","active");
});