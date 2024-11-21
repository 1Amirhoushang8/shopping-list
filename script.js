const itemForm = document.getElementById("item_form")
const itemList = document.querySelector("ul")
itemForm.addEventListener("submit", addListItem);

itemList.addEventListener("click", removeItem);

//<ul class="w-50  h-25 list-group m-auto mt-3">
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             ITEM
//             <i class="bi bi-x-diamond-fill"></i>
//         </li>
//     </ul>


function addListItem(event) {
    event.preventDefault();

    
    const formData = new FormData(itemForm);
    const value = formData.get("item-name");
     if (value.trim() === "") {
         alert("Please enter a valid product");
         return 0;
     }


    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");
    li.classList.add("align-items-center");


    const i = document.createElement("i");
    i.classList.add("bi");
    i.classList.add("bi-x-diamond-fill");
    i.classList.add("red");


    
    const text = document.createTextNode(value);


    li.appendChild(text);
    li.appendChild(i);
    itemList.appendChild(li);



}


function removeItem(event) {
    event.preventDefault();
    if (event.target.classList.contains("bi")) {
        event.target.parentElement.remove();
    }
}