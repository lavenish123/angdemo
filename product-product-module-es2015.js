(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/add-product/add-product.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/add-product/add-product.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n\n\n    <ng-container *ngFor=\"let repo of repos | async; let i=index\">\n\n      <div class=\"col-md-3\"> {{repo.name}} </div> \n       \n    </ng-container>\n\n\n\n\n\n\n    <div class=\"col-md-6 mx-auto\">\n      <br />\n      <br />\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2 class=\"form-signin-heading\">login</h2>\n        </div>\n        <div class=\"card-body\">\n  \n          <form #login=\"ngForm\" (ngSubmit)=\"login.form.valid && signIn(login)\" novalidate>\n  \n  \n            <!-- <div class=\"alert\" [hidden]=\"!messageInfo\"  \n                  [class.alert-success]=\"formSuccess\"  \n                  [class.alert-danger]=\"formError\">\n                  <strong>{{MessageType}}</strong> {{messageInfo}}\n              </div> -->\n  \n        \n  \n  \n  \n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input required=\"required\"  [(ngModel)]=\"loginUserData.email\" name=\"email\"\n                #email='ngModel' [ngClass]=\"!email.valid &&  (email.touched || login.submitted) ? 'input-error' : '' \"\n                id=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\">\n              <!--start-form-error-->\n       \n              <!--end-form-error-->\n            </div>\n            <!--end-form-group -->\n  \n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input required=\"required\"  [(ngModel)]=\"loginUserData.password\" name=\"password\"\n                #password='ngModel'\n                [ngClass]=\"!password.valid &&  (password.touched || login.submitted) ? 'input-error' : '' \"\n                id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Password\">\n        \n              <!--end-form-error-->\n            </div>\n  \n  \n            <br />\n            <p>{{login.value | json}} </p>\n            <div class=\"form-group\">\n              <!-- [disabled]=\"!login.valid\" -->\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </div>\n          </form>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n        </div>\n  \n      </div>\n  \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/list-product/list-product.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/list-product/list-product.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n   <div *ngIf=\"errorMsg\">{{errorMsg}} </div>\n    <ng-container *ngFor=\"let post of products; let i=index\">\n        <div class=\"col\">\n            <app-product-card [product]=\"post\"> </app-product-card>\n        </div>\n        <div *ngIf=\"(i+1) % 3 === 0\" class=\"w-100\"></div>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/product-card/product-card.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/product-card/product-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card productcart\">\n  <div class=\"productcartimg\" *ngIf=\"product.imgUrl\">\n    <a routerLink=\"{{product._id}}\">\n      <img class=\"card-img-top promain\" class=\"mx-auto d-block img-responsive img-fluid\" [src]=\"product.imgUrl\"\n        [alt]=\"product.title\">\n    </a>\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{product.title | uppercase}}</h5>\n    <div class=\"card-text\">$ {{product.price  | currencyFormat }} </div>\n    <div class=\"card-text\"><b>{{product.category}}</b></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/product-detail/product-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/product-detail/product-detail.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card prodetail\">\n  <div class=\"container-fliud\">\n    <div class=\"wrapper row\">\n      <div class=\"preview col-md-6\">\n        <div class=\"product-gallery\">\n          <div class=\"bigimg\">\n            <img class=\"img-thumbnail\" src=\"{{singleProduct.imgUrl}}\" alt=\"{{singleProduct.title}}\">\n          </div>\n          <div class=\"imgthumbnail\">\n            <div class=\"thumbs\" (click)=\"progallery(thumb.src)\" *ngFor=\"let thumb of imgthumbnail\">\n              <img src=\"{{thumb.src}}\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"details col-md-6\">\n        <h3 class=\"product-title\">{{singleProduct.title}}</h3>\n\n<div class=\"detailpri\"> \n    <div class=\"prisec\"> \n  <div class=\"detailprisec\">Price: <span> ${{singleProduct.price | currencyFormat}}</span></div>\n\n  <div class=\"detailprisec\">Quantity: \n    <input type=\"number\"  min=\"1\" max=\"\"#quantity name=\"quantity\" value=\"1\" size=\"4\" pattern=\"[0-9]*\">\n  </div>\n</div>\n  <div class=\"action\">\n    <button (click)=\"addtocart(singleProduct,quantity)\" class=\" btn btn-primary\" type=\"button\">Add to Cart</button>\n    <a class=\" btn btn-secondary\"  routerLink=\"/product/viewcart\">View Cart</a>\n  </div>\n\n</div>\n\n\n        <div class=\"product-description\">\n            <p>For Cats and Small Animals</p>\n            <p>Made from the soft core of hemp’s stem, Phyto Animal Health’s Hemp Bedding & Litter offers greater absorbency and superior qualities than any other bedding available on the market. This premium, all-natural hemp-based bedding is naturally resistant to microbes, fungi, bacteria, and virus, making it an ideal alternative for litter boxes. Available to absorb 4x its own weight, Hemp Bedding & Litter requires less labor to service and reduces waste and disposal.</p>\n\n\n            <ul>\n                <li>Premium, All-Natural Hemp Bedding</li>\n                <li>Produced From Soft Core of Hemp Stem</li>\n                <li>High Absorbency, Low Dust, Reduced Ammonia Smell</li>\n                <li>No Chemical Residues, No Damaging Phenols</li>\n                <li>Available in 2.5 lbs bags</li>\n                </ul>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/viewcart/viewcart.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/viewcart/viewcart.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img style=\"width: 100%;\nmargin-top: -58px;\nmargin-bottom: 40px;\"\n  src=\"https://assets.ajio.com/medias/sys_master/images/images/h32/h09/14012091301918/cart-page-banner-mobile-FB.jpg\" />\n\n\n<div class=\"row\">\n  <div class=\"col-sm-8\">\n    <div class=\"pb-5\">\n      <div class=\" p5 bg-white rounded shadow-sm mb-5\">\n        <!-- Shopping cart table -->\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead *ngIf=\"productService.buyItem()\">\n              <tr>\n                <th scope=\"col\" class=\"border-0 bg-light\">\n                  <div class=\"p-2 px-3 text-uppercase\">Product</div>\n                </th>\n                <th scope=\"col\" class=\"border-0 bg-light\">\n                  <div class=\"py-2 text-uppercase\">Price</div>\n                </th>\n                <th scope=\"col\" class=\"border-0 bg-light\">\n                  <div class=\"py-2 text-uppercase\">Quantity</div>\n                </th>\n                <th scope=\"col\" class=\"border-0 bg-light\">\n                  <div class=\"py-2 text-uppercase\">Update</div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let item of productService.buyItem(); let i=index\">\n                <tr *ngIf=\"!item == 0\">\n                  <th scope=\"row\">\n                    <div class=\"p-2\">\n                      <img src=\"{{item.imgUrl}}\" alt=\"{{item.title}}\" width=\"70\" class=\"img-fluid rounded shadow-sm\">\n                      <div class=\"ml-3 d-inline-block align-middle\">\n                        <h5 class=\"mb-0\">\n                          <a href=\"#\" class=\"text-dark d-inline-block\">{{item.title}}</a></h5>\n                        <span class=\"text-muted font-weight-normal font-italic\">Category: {{item.category}}</span>\n                      </div>\n                    </div>\n                  </th>\n                  <td class=\"align-middle\"><strong>$ {{item.price * item.quantity }} </strong></td>\n                  <td class=\"align-middle\"><strong>\n                      <input type=\"number\" min=\"1\" max=\"\"#quantity name=\"quantity\" [value]=\"item.quantity\" size=\"4\" pattern=\"[0-9]\">\n                  </strong></td>\n                  <td class=\"align-middle\">\n                    <button class=\"btn btn-primary\"  (click)=\"addtocart(i,quantity)\" class=\"text-dark\">\n                      Update Cart\n                    </button>\n                  </td>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </div>\n        <!-- End -->\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"pb-5\">\n      <div class=\"p5 bg-white rounded shadow-sm mb-5\">\n        <div class=\"cart_totals \">\n          <h2>Cart totals</h2>\n\n          <table cellspacing=\"0\" class=\"shop_table shop_table_responsive\">\n            <tbody>\n              <tr class=\"cart-subtotal\">\n                <th>Subtotal</th>\n                <td><span> $ {{productService.totalCartPrice()}}   </span></td>\n              </tr>\n              <tr>\n                <th>Shipping</th>\n                <td>Enter your address to view shipping options.\n                </td>\n              </tr>\n              <tr class=\"order-total\">\n                <th>Total</th>\n                <td><strong><span>$ {{productService.totalCartPrice()}}</span></strong></td>\n              </tr>\n            </tbody>\n          </table>\n          \n          <div class=\"wc-proceed-to-checkout\">\n            <a href=\"\" class=\"btn btn-primary btn-block\">Proceed to shipping</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/product/component/add-product/add-product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/product/component/add-product/add-product.component.ts ***!
  \************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AddProductComponent = class AddProductComponent {
    constructor(http) {
        this.http = http;
        this.loginUserData = {
            email: '',
            password: ''
        };
        const path = 'https://api.github.com/search/repositories?q=angular';
        this.repos = http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data.items));
    }
    ngOnInit() {
    }
    signIn(newCourse) {
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/add-product/add-product.component.html")).default
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/product/component/list-product/list-product.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/product/component/list-product/list-product.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductComponent", function() { return ListProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListProductComponent = class ListProductComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ngOnInit() {
        // this.localObj = [
        //   {title:'pro title 0'},
        //   {title:'pro title 1'}
        // ];
        // localStorage.setItem('myObj', JSON.stringify(this.localObj));
        // console.log('localStorage.setItem1', JSON.parse(localStorage.getItem('myObj')));
        // this.localObj[2] = {
        //   title:'pro title 2'
        // }
        // localStorage.setItem('myObj', JSON.stringify(this.localObj));
        // console.log('localStorage.setItem2', JSON.parse(localStorage.getItem('myObj')));
        this.productService.getAll('products')
            .subscribe(res => {
            this.products = res;
        }, (error) => {
            this.errorMsg = error;
        });
    }
};
ListProductComponent.ctorParameters = () => [
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/list-product/list-product.component.html")).default
    })
], ListProductComponent);



/***/ }),

/***/ "./src/app/product/component/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/product/component/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductCardComponent = class ProductCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')
], ProductCardComponent.prototype, "product", void 0);
ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/product-card/product-card.component.html")).default
    })
], ProductCardComponent);



/***/ }),

/***/ "./src/app/product/component/product-detail/product-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/product/component/product-detail/product-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");




let ProductDetailComponent = class ProductDetailComponent {
    constructor(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.singleProduct = {
            category: '',
            imgUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/fun_facts_fruits_and_vegetables_slideshow/thinkstock_rf_photo_of_variety_of_apples.jpg',
            price: '',
            title: '',
        };
        this.imgthumbnail = [
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgI36ghAwKyN2kiVS1nibwimneA222caJ8cM5eclWZ1hz094FI" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpfT6CQ1X1f0j0y53Zk_WRY85spN_pVYxhHLL1lnBdThwflNd" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJBFU46dwBC1cLwsGdKCeOWtM-Y61clfgxN7twjgLa23HS2NH" },
        ];
        this.localObj = [];
        this.activatedRoute.paramMap
            .subscribe(params => {
            this.paramId = params.get('_id');
            if (this.paramId) {
                this.singleProductDetail(this.paramId);
            }
            // console.log(this.paramId);
        });
        this.cartItem = JSON.parse(localStorage.getItem('myObj'));
        //console.log('this.cartItem', this.cartItem  );
    }
    ngOnInit() { }
    singleProductDetail(_id) {
        this.productService.getSingleProduct('products/' + _id)
            .subscribe(res => {
            this.singleProduct._id = res._id,
                this.singleProduct.title = res.title,
                this.singleProduct.price = res.price,
                this.singleProduct.imgUrl = res.imgUrl,
                this.singleProduct.category = res.category;
        });
    }
    progallery(thumbImg) { this.singleProduct.imgUrl = thumbImg; }
    addtocart(cartProduct, quantity) {
        let objIndex;
        if (JSON.parse(localStorage.getItem('myObj'))) {
            objIndex = JSON.parse(localStorage.getItem('myObj')).length;
            this.localObj = JSON.parse(localStorage.getItem('myObj'));
            let changeObj = 0;
            for (let i = 0; objIndex > i; i++) {
                if (this.localObj[i]._id == cartProduct._id) {
                    console.log('same Id', i);
                    this.localObj[i].quantity = quantity.value;
                    changeObj = 1;
                }
            }
            if (changeObj == 0) {
                console.log('diffrent Id with storege');
                this.localObj[objIndex] = {
                    _id: cartProduct._id,
                    title: cartProduct.title,
                    price: cartProduct.price,
                    imgUrl: cartProduct.imgUrl,
                    category: cartProduct.category,
                    quantity: quantity.value
                };
            }
        }
        else {
            objIndex = 0;
            console.log('new Id without storege');
            this.localObj[objIndex] = {
                _id: cartProduct._id,
                title: cartProduct.title,
                price: cartProduct.price,
                imgUrl: cartProduct.imgUrl,
                category: cartProduct.category,
                quantity: quantity.value
            };
        }
        //console.log("objIndex", objIndex);
        localStorage.setItem('myObj', JSON.stringify(this.localObj));
        console.log('localStorage.setItem2', JSON.parse(localStorage.getItem('myObj')));
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/product-detail/product-detail.component.html")).default
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/product/component/viewcart/viewcart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product/component/viewcart/viewcart.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcartComponent", function() { return ViewcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");



let ViewcartComponent = class ViewcartComponent {
    constructor(productService) {
        this.productService = productService;
        this.totalprice = 0;
        // totalCartPrice() {
        //   let totalCartPrice = JSON.parse(localStorage.getItem('myObj'));
        //   let sum: number = 0;
        //   if (totalCartPrice) {
        //     for (let i = 0; totalCartPrice.length > i; i++) {
        //       this.totalprice += parseInt(totalCartPrice[i].price) *  parseInt(totalCartPrice[i].quantity) ;
        //     }
        //   }
        // }
        this.localObj = [];
        //this.totalCartPrice();
    }
    ngOnInit() { }
    addtocart(num, quantity) {
        this.localObj = JSON.parse(localStorage.getItem('myObj'));
        this.localObj[num].quantity = quantity.value;
        localStorage.setItem('myObj', JSON.stringify(this.localObj));
        console.log('localStorage.setItem2', JSON.parse(localStorage.getItem('myObj')));
    }
};
ViewcartComponent.ctorParameters = () => [
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ViewcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewcart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewcart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/component/viewcart/viewcart.component.html")).default
    })
], ViewcartComponent);



/***/ }),

/***/ "./src/app/product/product-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_viewcart_viewcart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/viewcart/viewcart.component */ "./src/app/product/component/viewcart/viewcart.component.ts");
/* harmony import */ var _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/product-detail/product-detail.component */ "./src/app/product/component/product-detail/product-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/add-product/add-product.component */ "./src/app/product/component/add-product/add-product.component.ts");
/* harmony import */ var _component_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/list-product/list-product.component */ "./src/app/product/component/list-product/list-product.component.ts");







const routes = [
    { path: "", component: _component_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_6__["ListProductComponent"] },
    { path: "viewcart", component: _component_viewcart_viewcart_component__WEBPACK_IMPORTED_MODULE_1__["ViewcartComponent"] },
    { path: "add", component: _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"] },
    { path: ":_id", component: _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"] }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/add-product/add-product.component */ "./src/app/product/component/add-product/add-product.component.ts");
/* harmony import */ var _component_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/list-product/list-product.component */ "./src/app/product/component/list-product/list-product.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/product/product-routing.module.ts");
/* harmony import */ var _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/product-card/product-card.component */ "./src/app/product/component/product-card/product-card.component.ts");
/* harmony import */ var _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/product-detail/product-detail.component */ "./src/app/product/component/product-detail/product-detail.component.ts");
/* harmony import */ var _component_viewcart_viewcart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/viewcart/viewcart.component */ "./src/app/product/component/viewcart/viewcart.component.ts");










let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_component_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_5__["ListProductComponent"], _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"], _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"], _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"], _component_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"], _component_viewcart_viewcart_component__WEBPACK_IMPORTED_MODULE_9__["ViewcartComponent"]],
        imports: [
            _product_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        exports: [
            _component_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"]
        ],
        providers: [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]],
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map