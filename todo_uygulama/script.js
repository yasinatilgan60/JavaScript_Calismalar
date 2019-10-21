// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');

const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
//const items = ['item1', 'item2', 'İtem3', 'item4'];
let items;
// load items
loadItems();
//call event listener
eventListeners();
function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);
    // delete an item
    taskList.addEventListener('click', deleteItem);
    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}
function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    })
}
// get items from local storage
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}
// set item to local storage
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
    // JSON stringfy ile [] ile string olarak aktarıldı.

}
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1); // 2. parametre kaç tane eleman silinmesi gerektiğini söylemektedir.
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}
function createItem(text) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(text));
    li.className = 'list-group-item list-group-item-secondary';
    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    // li ile a 'yı ilişkilendirmek için.
    li.appendChild(a); // add a to li
    // add li to ul
    taskList.appendChild(li);
}
// add new item
function addNewItem(e) {

    //console.log('submit');
    //console.log(input.value);
    if (input.value === '') {
        alert('Add new item');
    }
    //create li
    createItem(input.value);
    // item add to local storage
    setItemToLS(input.value);
    //console.log(li);
    input.value = '';
    e.preventDefault(); // Formun varsayılan olarak submit olması engellendi. Sayfa refresh olmaz.
}
//delete an item
function deleteItem(e) {
    //console.log(e);
    //console.log(e.target);

    // ikona tıklayıp tıklanmadığına bakmak için;
    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            //console.log(e.target);
            e.target.parentElement.parentElement.remove(); // i - a - li
            // delete item from local storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);

        }
    }
    e.preventDefault(); //scroll bar sabitlendi.
}
//delete all items
// a etiketi refresh olmaya eğilimli olduğundan, preventDefault kullanılmadır.
function deleteAllItems(e) {
    if (confirm('Aree you sure?')) {
        taskList.innerHTML = '';
        //console.log(taskList.children); // Html collection geriye dönderilir.
        //console.log(taskList.childNodes); 
        // node list geriye dönderilir. 
        // ! Node list'in html collection'dan farkı textler de geri dönderilir.
        // taskList.childNodes.forEach(function (item) {
        //     if (item.nodeType === 1) { // gelen item element
        //         item.remove();
        //     }
        // });
        while(taskList.firstChild){ // first child olduğu sürece bu döngü döner.
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}

