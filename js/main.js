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
renderList(data);

//新增事項功能
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

//刪除事項
list.addEventListener("click",e=>{
    
    if(e.target.getAttribute("class") !== "delete"){
        alert("1");
        return;
    }
    let index = e.target.getAttribute("data-index");
    console.log(index);
    data.splice(index,1);
    renderList(data);
})

//篩選事項

