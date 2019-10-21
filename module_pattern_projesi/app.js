// Uygulama parça modüllerden oluşacak ve istenilen farklı işleme ilgili modülden ulaşılacaktır.
// Modüllerin ayrı bir scope ve çalışma alanı vardır.

// Storage Controller (Modül)
const StorageController = (function () {
    return {
        storeProduct: function (product) {
            let products;
            if (localStorage.getItem('products') === null) { // local storage'da products isimli verilere sahip bir yapı var mı?
                products = [];
                products.push(product);
            } else {
                products = JSON.parse(localStorage.getItem('products')); // local storage'dan alınan veri json tipe çevrildi.
                products.push(product);
            }
            localStorage.setItem('products', JSON.stringify(products)); // Local Storage'a json string'i şeklinde veri gönderildi.
        },
        getProducts: function () {
            let products;
            if (localStorage.getItem('products') === null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem('products'));
            }
            console.log(products);
            return products;
        },
        updateProduct: function (product) {
            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function (prd, index) {
                if (prd.id === product.id) {
                    products.splice(index, 1, product);
                }
            })
            localStorage.setItem('products', JSON.stringify(products));
        },
        deleteProduct: function (id) {
            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function (prd, index) {
                if (prd.id == id) {
                    products.splice(index, 1);
                }
            })
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
})();

// Product Controller (Modül)
// Product Controller içerisinde veri yapısı oluşturulacak ve AppController içerisinde kullanılacaktır.
const ProductController = (function () {
    // private members
    const Product = function (id, name, price) { // Constructor
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Yukarıdaki yapıyı da kullanarak bir veri listesi oluşturalım;
    const data = { // uygulama içerisindeki verileri tutacak olan veri yapısı.
        products: StorageController.getProducts(),
        selectedProduct: null, // uygulamada bir işlem yapmak için seçili olan ürünü tutacak olan selectedProduct nesnesi.
        totalPrice: 0
    }
    return {
        // public members
        // yukarıdaki veri yapısını dışarıya taşımak için;
        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },
        getProductById: function (id) {
            let product = null;
            data.products.forEach(function (prd) {
                if (prd.id == id) {
                    product = prd;
                }
            });
            return product;
        },
        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },
        getCurrentProduct: function () {
            return data.selectedProduct;
        },
        addProduct: function (name, price) {
            let id;
            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            } else {
                id = 0;
            }
            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        getTotal: function () {
            let total = 0;
            data.products.forEach(function (prd) {
                total += prd.price;
            });
            data.totalPrice = total;
            return data.totalPrice;
        },
        updateProduct: function (productName, productPrice) {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = productName;
                    prd.price = parseFloat(productPrice);
                    product = prd;
                }
            });
            return product;
        },
        deleteProduct: function (product) {
            data.products.forEach((prd, index) => {
                if (prd.id == product.id) {
                    data.products.splice(index, 1);
                }
            });
        }

    }
})();

// UI Controller (Modül); HTML ile ilgili işlemlerin yapılacağı modüldür.
const UIController = (function () {
    // Değişiklikleri merkezi bir noktadan kontrol etmemiz için Selectors yapısı kuruldu.
    const Selectors = {
        productList: "#item-list",
        productListItems: "#item-list tr", // item list altındaki tr elementlerinin tümü alınır.
        addButton: ".addBtn",
        updateButton: ".updateBtn",
        deleteButton: ".deleteBtn",
        cancelButton: ".cancelBtn",
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL: '#total-tl',
        totalDolar: '#total-dolar'
    }
    return {
        createProductList: function (products) {
            let html = '';
            products.forEach(prd => {
                html += `
                </tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
                `;
            });
            document.querySelector(Selectors.productList).innerHTML = html;

        },
        getSelectors: function () {
            return Selectors;
        },
        addProduct: function (newProduct) {
            document.querySelector(Selectors.productCard).style.display = 'block';
            document.querySelector(Selectors.productList).innerHTML += `
            </tr>
                <td>${newProduct.id}</td>
                <td>${newProduct.name}</td>
                <td>${newProduct.price} $</td>
                <td class="text-right">
                    <i class="far fa-edit edit-product"></i>
                </td>
            </tr>
            `;
        },
        updateProduct: function (prd) {
            let updatedItem = null;
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) { // seçilmiş olan element mi ?
                    item.children[1].textContent = prd.name; // 0 id, 1 name, 2 price
                    item.children[2].textContent = prd.price + ' $';
                    updatedItem = item;
                }
            })
            return updatedItem;
        },
        deleteProduct: function () {
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                if (item.classList.contains('bg-warning')) { // seçilmiş olan element mi ?
                    item.remove();
                }
            })
        },
        clearInputs: function () {
            document.querySelector('#productName').value = '';
            document.querySelector('#productPrice').value = '';
        },
        hideCard: function () {
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal: function (total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total * 5.5;
        },
        addProductToForm: function () {
            const product = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = product.name; // Input olduğu için textContent yerine value kullanıldı.
            document.querySelector(Selectors.productPrice).value = product.price;
        },
        addingState: function (item) {
            UIController.clearWarnings();
            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display = 'inline';
            document.querySelector(Selectors.updateButton).style.display = 'none';
            document.querySelector(Selectors.deleteButton).style.display = 'none';
            document.querySelector(Selectors.cancelButton).style.display = 'none';
        },
        editState: function (tr) {
            tr.classList.add('bg-warning'); // seçilen tr elementi üzerine bg-warning bootstrap class'ı eklendi.
            document.querySelector(Selectors.addButton).style.display = 'none';
            document.querySelector(Selectors.updateButton).style.display = 'inline';
            document.querySelector(Selectors.deleteButton).style.display = 'inline';
            document.querySelector(Selectors.cancelButton).style.display = 'inline';
        },
        clearWarnings: function () {
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function (item) {
                item.classList.remove('bg-warning');
            })
        }
    }

})();
// App Controller: Ana modüldür. İstenilen modülün alınıp kullanılacağı kısımdır. Uygulamanın giriş aşamasıdır.
const App = (function (ProductCtrl, UICtrl, StorageCtrl) {
    const UISelectors = UICtrl.getSelectors(); // App içerisinden Selectors'lara ulaşılabilir.

    // Load Event Listeners; App modül çalıştırıldığında event listenerlar çağrılsın.
    const loadEventListeners = function () {
        // add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);
        // edit product click
        document.querySelector(UISelectors.productList).addEventListener('click', productEditClick);
        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener('click', editProductSubmit);
        // cancel button clicked
        document.querySelector(UISelectors.cancelButton).addEventListener('click', cancelUpdate);
        // delete button clicked
        document.querySelector(UISelectors.deleteButton).addEventListener('click', deleteProductSubmit);

    }
    const productAddSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        if (productName !== '' && productPrice !== '') {
            const newProduct = ProductCtrl.addProduct(productName, productPrice); // Add product
            //console.log(newProduct);
            UICtrl.addProduct(newProduct); // add item to list
            StorageCtrl.storeProduct(newProduct); // add new product to Local Storage
            const total = ProductCtrl.getTotal();
            //console.log(total);
            // show total in UI
            UICtrl.showTotal(total);
            UICtrl.clearInputs();
        }
        e.preventDefault();
    }
    const productEditClick = function (e) {


        if (e.target.classList.contains('edit-product')) {
            // console.log(e.target); // i elementi gönderilir. Buradan da id ile veri yapısında ilgili ürüne ulaşılır.
            const id = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const product = ProductCtrl.getProductById(id);
            //console.log(product);
            ProductCtrl.setCurrentProduct(product);
            UIController.addProductToForm(); // add product to UI
            UICtrl.clearWarnings();
            UICtrl.editState(e.target.parentNode.parentNode);
        }
        e.preventDefault(); // submit durduruldu. Sayfanın refresh olması engellenir.
    }
    const editProductSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        if (productName !== "" && productPrice !== "") {
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);
            let item = UICtrl.updateProduct(updatedProduct); // update ui, item -> tr objesi 
            const total = ProductCtrl.getTotal();
            //console.log(total);
            // show total in UI
            UICtrl.showTotal(total);
            StorageCtrl.updateProduct(updatedProduct);
            UICtrl.addingState();
        }
        e.preventDefault();
    }
    const cancelUpdate = function (e) {
        UICtrl.addingState();
        UICtrl.clearWarnings();
        e.preventDefault();
    }
    const deleteProductSubmit = function (e) {
        // get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();
        // delete Product
        ProductCtrl.deleteProduct(selectedProduct);
        // delete product from ui
        UICtrl.deleteProduct(selectedProduct);
        const total = ProductCtrl.getTotal();
        //console.log(total);
        // show total in UI
        UICtrl.showTotal(total);
        // delete from local storage
        StorageCtrl.deleteProduct(selectedProduct.id);
        UICtrl.addingState();
        if (total == 0) {
            UICtrl.hideCard();
        }
        e.preventDefault();
    }
    // Diğer modüller bu modüle parametre olarak gelmektedir.
    return {
        init: function () {
            console.log('starting app...'); // app modülünün başlangıç aşaması, diğer modüllerin tetiklenmesini sağlamaktadır.
            UICtrl.addingState();
            UICtrl.showTotal(ProductCtrl.getTotal());
            const products = ProductCtrl.getProducts();
            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UIController.createProductList(products);
            }

            loadEventListeners(); // load Event Listeners.
        }
    }

})(ProductController, UIController, StorageController);

App.init();