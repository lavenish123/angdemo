(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./product/product.module": [
		"./src/app/product/product.module.ts",
		"product-product-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n\n\n\n    <app-header-nav></app-header-nav>\n    <div class=\"container\"> \n<br/><br/>\n\n  <router-outlet></router-outlet>\n\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/buycourse/buycourse.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/buycourse/buycourse.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-8 mx-auto\">\n    <div style=\"text-align: center\" [style.display]=\"isActive ? 'block':'none'\">\n      <img width=\"100\" src=\"http://www.theappguruz.com/public/assets/admin/images/loaders/p10.gif\" />\n    </div>\n    <br />\n    <br />\n    <div class=\"card\" [style.display]=\"formActive ? 'block':'none'\">\n      <div class=\"card-header\">\n        <h2 class=\"form-signin-heading\">Buy Product</h2>\n      </div>\n      <div class=\"card-body\" >\n        <form #customer=\"ngForm\" (ngSubmit)=\"customer.form.valid && createCutomer(customer)\" novalidate>\n\n\n          <!-- <div class=\"alert\" [hidden]=\"!messageInfo\"  \n                  [class.alert-success]=\"formSuccess\"  \n                  [class.alert-danger]=\"formError\">\n                  <strong>{{MessageType}}</strong> {{messageInfo}}\n              </div> -->\n\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"firstName\">Name</label>\n                <input required=\"required\" [pattern]=\"regex.alphaRegex\" [(ngModel)]=\"cutomerForm.firstName\"\n                  name=\"firstName\" #firstName='ngModel'\n                  [ngClass]=\"!firstName.valid &&  (firstName.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"firstName\" class=\"form-control\" type=\"text\" placeholder=\"firstName\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!firstName.valid && (firstName.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"firstName.errors.required\">\n                    firstName is required\n                  </div>\n                  <div class=\"inputerror\" *ngIf=\"firstName.errors.pattern\">\n                    firstName doesn't match the pattern\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"lastName\">last Name</label>\n                <input required=\"required\" [pattern]=\"regex.alphaRegex\" [(ngModel)]=\"cutomerForm.lastName\"\n                  name=\"lastName\" #lastName='ngModel'\n                  [ngClass]=\"!lastName.valid &&  (lastName.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"lastName\" class=\"form-control\" type=\"text\" placeholder=\"Last Name\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!lastName.valid && (lastName.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"lastName.errors.required\">\n                    last lastName is required\n                  </div>\n                  <div class=\"inputerror\" *ngIf=\"lastName.errors.pattern\">\n                    last lastName doesn't match the pattern\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input required=\"required\" [pattern]=\"regex.email\" [(ngModel)]=\"cutomerForm.email\" name=\"email\"\n                  #email='ngModel'\n                  [ngClass]=\"!email.valid &&  (email.touched || customer.submitted) ? 'input-error' : '' \" id=\"email\"\n                  class=\"form-control\" type=\"email\" placeholder=\"Email\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!email.valid && (email.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"email.errors.required\">\n                    Email is required\n                  </div>\n                  <div class=\"inputerror\" *ngIf=\"email.errors.pattern\">\n                    Email doesn't match the pattern\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"address\">address</label>\n                <input required=\"required\" [(ngModel)]=\"cutomerForm.address\" name=\"address\" #address='ngModel'\n                  [ngClass]=\"!address.valid &&  (address.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"address\" class=\"form-control\" type=\"text\" placeholder=\"Name\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!address.valid && (address.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"address.errors.required\">\n                    address name is required\n                  </div>\n\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n          </div>\n\n          <h4> Card Information</h4>\n\n          <br />\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"accountHolderName\">Card Holder Name</label>\n                <input required=\"required\" [pattern]=\"regex.alphaRegex\" [(ngModel)]=\"cutomerForm.accountHolderName\"\n                  name=\"accountHolderName\" #accountHolderName='ngModel'\n                  [ngClass]=\"!accountHolderName.valid &&  (accountHolderName.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"accountHolderName\" class=\"form-control\" type=\"text\" placeholder=\"Card Holder Name\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!accountHolderName.valid && (accountHolderName.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"accountHolderName.errors.required\">\n                    Card Holder name is required\n                  </div>\n                  <div class=\"inputerror\" *ngIf=\"accountHolderName.errors.pattern\">\n                    Card Holder name doesn't match the pattern\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n\n\n\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"accountNumber\">Card Number (4893772401803792)</label>\n                <input required=\"required\" [(ngModel)]=\"cutomerForm.accountNumber\" name=\"accountNumber\"\n                  #accountNumber='ngModel'\n                  [ngClass]=\"!accountNumber.valid &&  (accountNumber.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"accountNumber\" class=\"form-control\" type=\"text\" placeholder=\"4893772401803792\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!accountNumber.valid && (accountNumber.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"accountNumber.errors.required\">\n                    Card Holder name is required\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n\n\n\n\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"expiryMonth\">Expiry Month</label>\n                <input required=\"required\" [(ngModel)]=\"cutomerForm.expiryMonth\" name=\"expiryMonth\"\n                  #expiryMonth='ngModel'\n                  [ngClass]=\"!expiryMonth.valid &&  (expiryMonth.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"expiryMonth\" class=\"form-control\" type=\"text\" placeholder=\"01\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!expiryMonth.valid && (expiryMonth.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"expiryMonth.errors.required\">\n                    Expiry Month is required\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n\n\n\n\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"expiryYear\">Expiry Year</label>\n                <input required=\"required\" [(ngModel)]=\"cutomerForm.expiryYear\" name=\"expiryYear\" #expiryYear='ngModel'\n                  [ngClass]=\"!expiryYear.valid &&  (expiryYear.touched || customer.submitted) ? 'input-error' : '' \"\n                  id=\"expiryYear\" class=\"form-control\" type=\"text\" placeholder=\"22\">\n                <!--start-form-error-->\n                <div class=\"form-error alert alert-danger errorcont \"\n                  *ngIf=\"!expiryYear.valid && (expiryYear.touched || (customer.submitted && customer.touched) )\">\n                  <div class=\"inputerror\" *ngIf=\"expiryYear.errors.required\">\n                    expiryYear name is required\n                  </div>\n                </div>\n                <!--end-form-error-->\n              </div>\n              <!--end-form-group -->\n            </div>\n\n          </div>\n\n          <br />\n          <!-- <p>{{customer.value | json}} </p> -->\n          <div class=\"form-group\">\n            <!-- [disabled]=\"!login.valid\" -->\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </div>\n        </form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/invoice-list/invoice-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/invoice-list/invoice-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"row\">\n  <div class=\"col-sm-6\"><h2>Invoice list</h2></div>\n  <div class=\"col-sm-6 text-right\"> \n    <button class=\"btn btn-info\">Total Payment Received = {{totalPaymentReceived}}</button>\n  </div>\n</div>\n\n\n\n<br/>\n\n\n\n\n<table class=\"table table-bordered table-sm\">\n    <thead>\n      <tr class=\"table-active\">\n        <th>Plan Name</th>\n        <th>CustomerId</th>\n        <th>SubscriptionId</th>\n        <!-- <th>documentNumber</th> -->\n        <th>Price</th>\n        <th> Currency</th>\n        <th>Start Date</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let inList of invoiceList; let i=index\">\n        <td>{{inList.subscriptionName}}</td>\n        <td>{{inList.customerId}}</td>\n        <td>{{inList.subscriptionId}}</td>\n        <!-- <td>{{invoicedata.documentNumber}} </td> -->\n        <td>{{inList.amount.value}} </td>\n        <td>{{inList.amount.currency}} </td>\n        <td>{{inList.date}} </td>\n      </tr>\n    </tbody>\n  </table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n\n\n\n<div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <br />\n          <br />\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h2 class=\"form-signin-heading\">login</h2>\n            </div>\n            <div class=\"card-body\">\n              <form #login=\"ngForm\" (ngSubmit)=\"login.form.valid && loginIn(login)\" novalidate>\n      \n      \n                <!-- <div class=\"alert\" [hidden]=\"!messageInfo\"  \n                      [class.alert-success]=\"formSuccess\"  \n                      [class.alert-danger]=\"formError\">\n                      <strong>{{MessageType}}</strong> {{messageInfo}}\n                  </div> -->\n      \n            \n      \n      \n      \n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input required=\"required\" [pattern]=\"regex.email\" [(ngModel)]=\"loginUserData.email\" name=\"email\"\n                    #email='ngModel' [ngClass]=\"!email.valid &&  (email.touched || login.submitted) ? 'input-error' : '' \"\n                    id=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\">\n                  <!--start-form-error-->\n                  <div class=\"form-error alert alert-danger errorcont \"\n                    *ngIf=\"!email.valid && (email.touched || (login.submitted && login.touched) )\">\n                    <div class=\"inputerror\" *ngIf=\"email.errors.required\">\n                      Email is required\n                    </div>\n                    <div class=\"inputerror\" *ngIf=\"email.errors.pattern\">\n                      Email doesn't match the pattern\n                    </div>\n                  </div>\n                  <!--end-form-error-->\n                </div>\n                <!--end-form-group -->\n      \n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input required=\"required\" [pattern]=\"regex.pwd\" [(ngModel)]=\"loginUserData.password\" name=\"password\"\n                    #password='ngModel'\n                    [ngClass]=\"!password.valid &&  (password.touched || login.submitted) ? 'input-error' : '' \"\n                    id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Password\">\n                  <div class=\"form-error alert alert-danger errorcont\"\n                    *ngIf=\"!password.valid && (password.touched || (login.submitted && login.touched))\">\n                    <div class=\"inputerror\" *ngIf=\"password.errors.required\">\n                      password is required\n                    </div>\n                    <div class=\"inputerror\" *ngIf=\"password.errors.pattern\">\n                      password doesn't match the pattern\n                    </div>\n                  </div>\n                  <!--end-form-error-->\n                </div>\n      \n      \n                <br />\n                <p>{{login.value | json}} </p>\n                <div class=\"form-group\">\n                  <!-- [disabled]=\"!login.valid\" -->\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </div>\n              </form>\n      \n      \n      \n      \n      \n      \n      \n      \n      \n            </div>\n      \n          </div>\n      \n        </div>\n      </div>\n      \n\n\n\n\n\n\n\n\n\n\n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/pay/pay.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/pay/pay.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- <button (click)=\"payment()\"> Pay</button> -->\n\n<!-- <button (click)=\"pricingPlans()\"> plan</button> -->\n\n\n\n<div class=\"row\">\n    <div class=\"col-sm-6\"><h1>Pricing Plans </h1></div>\n    <div class=\"col-sm-6 text-right\"> \n      <a   routerLink=\"/invoicelist\" class=\"btn btn-info\">Check Total Payment </a>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n<div style=\"text-align: center\" [style.display]=\"isActive ? 'block':'none'\"> \n    <img  width=\"100\" src=\"http://www.theappguruz.com/public/assets/admin/images/loaders/p10.gif\"/>\n    </div>\n\n<div class=\"row\"> \n<div  class=\"col-sm-5\" *ngFor=\"let plan of planFullData; let i=index\">\n    <div class=\"card\" style=\"width:20rem;margin:20px 0 24px 0\">\n      <img class=\"card-img-top\"\n        src=\"http://mycfo.websitedevelopermelbourne.net.au/wp-content/uploads/2018/10/home-pic.jpg\" alt=\"image\"\n        style=\"width:100%\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{plan.name | uppercase}}</h4>\n        <p class=\"card-text\">Plan Id: {{plan.id}} </p>\n        <p class=\"card-text\">Price: {{plan.amount.currency}} {{plan.amount.value}}</p>\n        <a    routerLink=\"/buycourse\"  [queryParams]=\"{plan:plan.id,amount:plan.amount.value}\"  class=\"btn btn-primary\">Buy Now</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- <br> <br> <br>\n<h2>Customer</h2>\n<p>List a customer </p>            \n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Id</th>\n      <td>Plan Name</td>\n      <td>Start Date</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let customer of showPlancustomer; let i=index\">\n      <td>{{customer.firstName}} {{customer.lastName}}</td>\n      <td>{{customer.email}}</td>\n      <td>{{customer.id}}</td>\n      <td>{{customer.name}} </td>\n      <td>{{customer.startDate}} </td>\n    </tr>\n  </tbody>\n</table> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/payment-success/payment-success.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/payment-success/payment-success.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<h2>Payment Status {{paymentStatus}}</h2>\n\n<br><br>\n\n<table class=\"table table-bordered\" style=\"text-align: left\">\n  <thead>\n    <tr class=\"table-active\">\n      <th width=\"30%\">Plan Name</th>\n      <th width=\"35%\">CustomerId</th>\n      <th>SubscriptionId</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>{{invoicedata.subscriptionName}}</td>\n      <td>{{invoicedata.customerId}}</td>\n      <td>{{invoicedata.subscriptionId}}</td>\n    </tr>\n  </tbody>\n</table>\n\n<br> <br>\n\n<table class=\"table table-bordered\">\n  <thead>\n    <tr class=\"table-success\">\n      <th width=\"30%\">Amount Value</th>\n      <th width=\"35%\">Amount Currency</th>\n      <th>Start Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>{{invoicedata.value}} </td>\n      <td>{{invoicedata.currency}} </td>\n      <td>{{invoicedata.date}} </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/register/register.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/register/register.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ddddddddddd");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/component/home/home.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/component/home/home.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n\n<!-- <app-add-product> </app-add-product> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header-nav/header-nav.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header-nav/header-nav.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-header\">\n  <div class=\"container\">\n    <div class=\"topnav\">\n      <nav class=\"navbar navbar-expand-lg navbar-light\">\n        <a routerLink=\"/\" class=\"navbar-brand\">\n          <img width=\"130\" src=\"http://mycfo.websitedevelopermelbourne.net.au/wp-content/themes/mycfo/images/logo.png\" alt=\"Ajio\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n\n          <!-- <div class=\"authnav\">\n            <ul>\n\n                \n\n              <li class=\"nav-item\" >\n                <a class=\"nav-link\" (click)=\"registerModal(registerForm)\"> Register</a>\n              </li>\n\n              <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\" routerLinkActive=\"active current\">\n                <a class=\"nav-link\" routerLink=\"/login\">Login </a>\n              </li>\n\n              <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"\" (click)=\"authService.logout()\">\n                  Logout </a>\n              </li>\n\n\n              <li class=\"nav-item\" routerLinkActive=\"active current\">\n                <a class=\"nav-link\" routerLink=\"product\"> Customer Care</a>\n              </li>\n            </ul>\n          </div> -->\n\n\n\n          <ul class=\"navbar-nav ml-auto\">\n\n              <li class=\"nav-item\" routerLinkActive=\"active current\">\n                  <a class=\"nav-link\" routerLink=\"/\">Pay</a>\n                </li>\n\n            <!-- <li class=\"nav-item\" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"/\">Home</a>\n            </li>\n\n            <li class=\"nav-item\" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"product\">Product</a>\n            </li> -->\n\n            <!-- <li class=\"nav-item cartdrop\" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"product\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i></a>\n\n              <div class=\"dropcart\">\n                  <div class=\"setcart\" *ngFor=\"let post of productService.buyItem(); let i=index\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-5\"> \n                        <img class=\"img-thumbnail\" [src]=\"post.imgUrl\"> \n                      </div>\n                      <div class=\"col-sm-7\">\n                        <div class=\"carttitle\"> {{post.title}} </div>\n                        <div class=\"cratprice\">Rs  <span>{{post.price}}</span> </div>\n                        <div class=\"cartqut\"> Qty  <span>{{post.quantity}}</span> </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n\n            </li> -->\n\n\n\n          </ul>\n\n        </div>\n\n      </nav>\n    </div>\n  </div>\n</div>\n\n<div class=\"headerspace\"> </div>\n\n\n<!-- <button (click)=\"formOpen(loginForm,registerForm)\">  hhhhhh </button> -->\n\n\n\n<ng-template #registerForm let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss(registerForm)\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <app-register> </app-register>\n\n      <button (click)=\"loginModal(loginForm,registerForm)\"> Login </button>\n\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n  \n\n\n\n<ng-template #loginForm let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss(resultloginForm)\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <app-login> </app-login>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n</ng-template>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/component/payment/payment.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/component/payment/payment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payment works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/no-access/no-access.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/no-access/no-access.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>no-access works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/component/home/home.component */ "./src/app/layout/component/home/home.component.ts");
/* harmony import */ var _shared_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/component/no-access/no-access.component */ "./src/app/shared/component/no-access/no-access.component.ts");
/* harmony import */ var _shared_component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/component/page-not-found/page-not-found.component */ "./src/app/shared/component/page-not-found/page-not-found.component.ts");






const appRoutes = [
    { path: "home", component: _layout_component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'product', loadChildren: './product/product.module#ProductModule' },
    { path: 'no-access', component: _shared_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_4__["NoAccessComponent"] },
    { path: '**', component: _shared_component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'myProject';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/server-request.service */ "./src/app/shared/services/server-request.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _shared_component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/component/page-not-found/page-not-found.component */ "./src/app/shared/component/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/component/no-access/no-access.component */ "./src/app/shared/component/no-access/no-access.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_layout_component_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/layout/component/home/home.component */ "./src/app/layout/component/home/home.component.ts");
/* harmony import */ var _directive_input_format_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directive/input-format.directive */ "./src/app/directive/input-format.directive.ts");
/* harmony import */ var src_app_layout_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/layout/header-nav/header-nav.component */ "./src/app/layout/header-nav/header-nav.component.ts");
/* harmony import */ var _payment_component_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/component/payment/payment.component */ "./src/app/payment/component/payment/payment.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            src_app_layout_component_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _directive_input_format_directive__WEBPACK_IMPORTED_MODULE_11__["InputFormatDirective"], _shared_component_no_access_no_access_component__WEBPACK_IMPORTED_MODULE_5__["NoAccessComponent"], _shared_component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], src_app_layout_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_12__["HeaderNavComponent"], _payment_component_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        ],
        providers: [_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_2__["ServerRequestService"], src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] }]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/invoice-list/invoice-list.component */ "./src/app/auth/component/invoice-list/invoice-list.component.ts");
/* harmony import */ var _component_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/payment-success/payment-success.component */ "./src/app/auth/component/payment-success/payment-success.component.ts");
/* harmony import */ var _component_buycourse_buycourse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/buycourse/buycourse.component */ "./src/app/auth/component/buycourse/buycourse.component.ts");
/* harmony import */ var _component_pay_pay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/pay/pay.component */ "./src/app/auth/component/pay/pay.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/auth/component/login/login.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/auth/component/register/register.component.ts");









const appRoutes = [
    { path: "login", component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "register", component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: "", component: _component_pay_pay_component__WEBPACK_IMPORTED_MODULE_4__["PayComponent"] },
    { path: "buycourse", component: _component_buycourse_buycourse_component__WEBPACK_IMPORTED_MODULE_3__["BuycourseComponent"] },
    { path: "paymentsuccess", component: _component_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_2__["PaymentSuccessComponent"] },
    { path: "invoicelist", component: _component_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceListComponent"] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(appRoutes)],
        exports: []
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/auth/component/login/login.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/auth/component/register/register.component.ts");
/* harmony import */ var _component_pay_pay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/pay/pay.component */ "./src/app/auth/component/pay/pay.component.ts");
/* harmony import */ var _component_buycourse_buycourse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/buycourse/buycourse.component */ "./src/app/auth/component/buycourse/buycourse.component.ts");
/* harmony import */ var _component_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/payment-success/payment-success.component */ "./src/app/auth/component/payment-success/payment-success.component.ts");
/* harmony import */ var _component_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/invoice-list/invoice-list.component */ "./src/app/auth/component/invoice-list/invoice-list.component.ts");










let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _component_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _component_pay_pay_component__WEBPACK_IMPORTED_MODULE_6__["PayComponent"], _component_buycourse_buycourse_component__WEBPACK_IMPORTED_MODULE_7__["BuycourseComponent"], _component_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_8__["PaymentSuccessComponent"], _component_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_9__["InvoiceListComponent"]],
        imports: [
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        exports: [_component_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        providers: [],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/component/buycourse/buycourse.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/component/buycourse/buycourse.component.ts ***!
  \*****************************************************************/
/*! exports provided: BuycourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuycourseComponent", function() { return BuycourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_regex_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/regex.service */ "./src/app/shared/services/regex.service.ts");
/* harmony import */ var src_app_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/server-request.service */ "./src/app/shared/services/server-request.service.ts");






let BuycourseComponent = class BuycourseComponent {
    constructor(regexService, activatedRoute, serverRequest, router) {
        this.regexService = regexService;
        this.activatedRoute = activatedRoute;
        this.serverRequest = serverRequest;
        this.router = router;
        this.formActive = true;
        this.isActive = false;
        this.cutomerForm = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            cName: '',
            cNumber: '',
            expiryMonth: '',
            expiryYear: '',
            accountHolderName: '',
            accountNumber: '',
            countryCode: 'AU',
            termAndConditionAgreed: 'true'
        };
        this.regex = {
            alpha: regexService.alphaRegex, email: regexService.emailRegex, pwd: regexService.pwdRegex,
            number: regexService.numberRegex, zip: regexService.zipRegex
        };
    }
    ngOnInit() {
        //this.Subscriptions();
        this.activatedRoute.queryParamMap
            .subscribe(params => {
            // console.log('params',params);
            this.planId = params.get('plan');
            this.amount = params.get('amount');
            console.log('amount', this.amount);
        });
    }
    createCutomer(newCourse) {
        console.log('newCourse', newCourse.form.value);
        console.log('this.cutomerForm', this.cutomerForm);
        let newCustomer = {
            firstName: this.cutomerForm.firstName,
            lastName: this.cutomerForm.lastName,
            email: this.cutomerForm.email,
            address1: this.cutomerForm.address
        };
        console.log('newCustomer', newCustomer);
        this.formActive = false;
        this.isActive = true;
        this.serverRequest.createCustomerService('https://api-sandbox.ezypay.com/v2/billing/customers', newCustomer)
            .subscribe(res => {
            this.customer_Id = res;
            this.customer_Id = this.customer_Id.id;
            console.log('res', res);
            if (res) {
                this.carddetail = {
                    accountHolderName: this.cutomerForm.accountHolderName,
                    accountNumber: this.cutomerForm.accountNumber,
                    expiryYear: this.cutomerForm.expiryYear,
                    expiryMonth: this.cutomerForm.expiryMonth,
                    countryCode: this.cutomerForm.countryCode,
                    termAndConditionAgreed: this.cutomerForm.termAndConditionAgreed
                };
                this.vaultPayment(this.carddetail, this.customer_Id);
            }
            else {
                this.formActive = true;
                this.isActive = false;
            }
        });
    }
    //=======================================================
    vaultPayment(cardDetail, customerId) {
        console.log('cardDetail', cardDetail);
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        this.serverRequest.vaultCard('https://vault-sandbox.ezypay.com/v2/vault/paymentmethodtokens/card', cardDetail)
            .subscribe(res => {
            if (!res) {
                this.formActive = true;
                this.isActive = false;
            }
            console.log('customerId', customerId);
            this.Subscriptions(customerId);
            // this.vaultPay = res;
            // this.vaultPay = this.vaultPay.paymentMethodToken;
        });
    }
    // Subscriptions() {
    // paymentMethodToken: "a3381868-810f-4feb-98e1-43fdd232f1f1"
    // customerId: "db1d6b3f-8613-48fd-bf1c-2008a37cb125"
    // planId = 672448b9-9607-4e7d-8a9b-1b6573075e72
    // "customerId":"55220ffc-bc5a-4f50-adaf-fa58c061ebd1",
    // "planId":"8ff2e3ea-aaa9-4978-8e2a-319d67e8f302",
    // "paymentMethodToken":"8dbf38bf-81c6-40d6-be1f-6aa80736d5bb",
    // amount.currency
    // amount.value
    // "startDate":"2019-03-11"
    //}
    Subscriptions(customerId) {
        var ausdate = new Date().toLocaleDateString("AUS", { timeZone: "Australia/sydney" });
        var resDate = ausdate.split("/");
        let today = resDate[2] + '-' + resDate[0] + '-' + resDate[1];
        console.log('todayy', today);
        let carddetail = {
            "customerId": customerId,
            "planId": this.planId,
            "amount": {
                "currency": "AUD",
                "value": parseInt(this.amount)
            },
            "accountingCode": null,
            "billingEndValue": null,
            "startDate": today
        };
        this.serverRequest.SubscriptionsPlan('https://api-sandbox.ezypay.com/v2/billing/subscriptions', carddetail)
            .subscribe(res => {
            console.log(res);
            if (res) {
                this.router.navigate(['/paymentsuccess'], { queryParams: { customerId: customerId } });
            }
            else {
                this.formActive = true;
                this.isActive = false;
            }
        });
    }
};
BuycourseComponent.ctorParameters = () => [
    { type: src_app_shared_services_regex_service__WEBPACK_IMPORTED_MODULE_4__["RegexService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_5__["ServerRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BuycourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buycourse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buycourse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/buycourse/buycourse.component.html")).default
    })
], BuycourseComponent);



/***/ }),

/***/ "./src/app/auth/component/invoice-list/invoice-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/component/invoice-list/invoice-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/server-request.service */ "./src/app/shared/services/server-request.service.ts");




let InvoiceListComponent = class InvoiceListComponent {
    constructor(activatedRoute, serverRequest) {
        this.activatedRoute = activatedRoute;
        this.serverRequest = serverRequest;
        this.totalPaymentReceived = 0;
    }
    ngOnInit() {
        this.invoicesList();
    }
    invoicesList() {
        this.serverRequest.invoices('https://api-sandbox.ezypay.com/v2/billing/invoices?limit=50')
            .subscribe(res => {
            if (res) {
                this.invoiceList = res;
                this.invoiceList = this.invoiceList.data;
                console.log(' this.invoiceList', this.invoiceList);
                for (let i = 0; i < this.invoiceList.length; i++) {
                    this.totalPaymentReceived += this.invoiceList[i].amount.value;
                }
                console.log('totalPaymentReceived', this.totalPaymentReceived);
            }
        });
    }
};
InvoiceListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: src_app_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_3__["ServerRequestService"] }
];
InvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-invoice-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/invoice-list/invoice-list.component.html")).default
    })
], InvoiceListComponent);



/***/ }),

/***/ "./src/app/auth/component/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/component/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_regex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/regex.service */ "./src/app/shared/services/regex.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(regexService, authService, activatedRoute, router) {
        this.regexService = regexService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loginUserData = {
            email: '',
            password: ''
        };
        this.regex = {
            alpha: regexService.alphaRegex, email: regexService.emailRegex, pwd: regexService.pwdRegex,
            number: regexService.numberRegex, zip: regexService.zipRegex
        };
    }
    ngOnInit() { }
    loginIn(newCourse) {
        console.log(this.loginUserData);
        this.authService.login('auth', this.loginUserData)
            .subscribe(res => {
            if (res) {
                newCourse.reset();
                this.isLogin = this.authService.isLoggedIn();
                const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
                this.router.navigate([returnUrl || './product']);
            }
            else {
                // this.invalidLogin = true;
            }
        }, (error) => {
            console.log(error);
            newCourse.reset();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shared_services_regex_service__WEBPACK_IMPORTED_MODULE_3__["RegexService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/login/login.component.html")).default,
        styles: ["./login.component.scss"]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/component/pay/pay.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/component/pay/pay.component.ts ***!
  \*****************************************************/
/*! exports provided: PayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayComponent", function() { return PayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/server-request.service */ "./src/app/shared/services/server-request.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PayComponent = class PayComponent {
    constructor(serverRequest) {
        this.serverRequest = serverRequest;
        this.url = 'https://identity-sandbox.ezypay.com/token';
        this.isActive = true;
    }
    ngOnInit() {
        //  this.plan();
        this.createToken();
    }
    createCustomer() {
        let newCustomerDetail = {
            firstName: "Malkit",
            lastName: "Singh",
            customerNumber: null,
            email: "ashish@gmail.com",
            gender: null,
            address1: "9415138923",
            homePhone: null,
            mobilePhone: null,
            companyName: null,
            dateOfBirth: null,
            referenceCode: null,
            metadata: {
                foo: "bar"
            }
        };
        this.serverRequest.createCustomerService('https://api-sandbox.ezypay.com/v2/billing/customers', newCustomerDetail)
            .subscribe(res => {
            console.log('createCustomer', res);
        });
    }
    vaultPayment() {
        let carddetail = {
            accountHolderName: "Malkit Singh",
            accountNumber: "4893772401803792",
            expiryYear: "22",
            expiryMonth: "01",
            type: "VISA",
            last4: "1111",
            first6: "411111",
            countryCode: "AU",
            termAndConditionAgreed: "true"
        };
        // paymentMethodToken: "5b355d35-609c-4fb4-8992-948bbabc8333"
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        //.set('client_secret', '_Il-2iJfEvk01NlPn7Rg8MYXtVf3rd29BLSulp98');
        this.serverRequest.vaultCard('https://vault-sandbox.ezypay.com/v2/vault/paymentmethodtokens/card', carddetail)
            .subscribe(res => {
            this.vaultPay = res;
            this.vaultPay = this.vaultPay.paymentMethodToken;
            // this.Subscriptions(this.vaultPay)
        });
    }
    createToken() {
        if (localStorage.getItem('ezypayToken')) {
            localStorage.removeItem('ezypayToken');
        }
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('grant_type', 'password')
            .set('client_id', '0oamghaynu90oh7Zg0h7')
            .set('client_secret', '_Il-2iJfEvk01NlPn7Rg8MYXtVf3rd29BLSulp98')
            .set('username', 'prasad@mlkgroup.com.au')
            .set('password', 'AUmlk1234!!')
            .set('scope', 'integrator offline_access billing_profile create_payment_method');
        this.serverRequest.create(this.url, body)
            .subscribe(res => {
            console.log(res);
            this.mainToken = res;
            if (res && this.mainToken.access_token) {
                localStorage.setItem('ezypayToken', this.mainToken.access_token);
                this.pricingPlans();
                // this.AllCustomer()
                // this.Subscriptions();
                return true;
            }
        });
    }
    // Subscriptions(){
    //     let carddetail = {
    //       "customerId": "e7900f8a-6ea8-4c83-a4b0-28bed675e19f",
    //       "planId":"242cc0d9-88cb-4b81-8b89-12e16cecf084",
    //       "paymentMethodToken":"2d4861bf-3930-43ad-9798-9c65b4998a00",
    //       "amount": {
    //         "currency": "AUD",
    //         "value": 200,
    //         "type": "CARD"
    //     },
    //     "firstBillingAmount": {
    //       "currency": "AUD",
    //       "value": 200,
    //   },
    //     "accountingCode":null,
    //     "billingEndValue":null,
    //     "startDate":"2019-09-22"
    //   }
    //   this.serverRequest.SubscriptionsPlan('https://api-sandbox.ezypay.com/v2/billing/subscriptions',carddetail)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
    //   }
    pricingPlans() {
        this.serverRequest.pricingPlansService('https://api-sandbox.ezypay.com/v2/billing/plans')
            .subscribe(res => {
            if (res) {
                this.planData = res;
                this.planFullData = this.planData.data;
                this.isActive = false;
            }
            // console.log(res);
        });
    }
    AllCustomer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.serverRequest.pricingPlansService('https://api-sandbox.ezypay.com/v2/billing/customers')
            // .subscribe(res => {
            //   this.AllCustomerData = res;
            //   this.AllCustomerList= this.AllCustomerData.data;
            //    for(let i = 0; this.AllCustomerList.length > i; i++ ){
            //     this.checkplan(this.AllCustomerList[i].id).then( result => {
            //       this.showPlancustomer  = result;
            //       console.log('result',result);
            // this.yesPlan = result;
            // for(let a = 0; this.AllCustomerList.length > a; a++ )
            // {
            //   console.log('no',this.AllCustomerList[a].id);
            //   if(this.yesPlan[0].customerId == this.AllCustomerList[a].id){
            //     for(let b = 0; this.yesPlan.length > b; b++ )
            //     {
            //       console.log('b',[b]);
            //       //this.AllCustomerList[a].push( this.yesPlan[b].name);
            //       //this.AllCustomerList[a]
            //       // add Object fileds
            //       console.log('array',this.AllCustomerList[a]);
            //     }
            //     this.showPlancustomer.push(this.AllCustomerList[a]);
            //     console.log('yes',[a]);
            //   }
            // }
            // console.log(`CheckPlan${i}`,this.yesPlan);
            //   })
            //   }
            // });
        });
    }
};
PayComponent.ctorParameters = () => [
    { type: _shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_1__["ServerRequestService"] }
];
PayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pay',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/pay/pay.component.html")).default,
        styles: ["./pay.component.scss"]
    })
], PayComponent);



/***/ }),

/***/ "./src/app/auth/component/payment-success/payment-success.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/auth/component/payment-success/payment-success.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/server-request.service */ "./src/app/shared/services/server-request.service.ts");




let PaymentSuccessComponent = class PaymentSuccessComponent {
    constructor(activatedRoute, serverRequest) {
        this.activatedRoute = activatedRoute;
        this.serverRequest = serverRequest;
        this.paymentStatus = 'Waiting...';
        this.invoicedata = {
            subscriptionName: '',
            customerId: '',
            subscriptionId: '',
            documentNumber: '',
            value: '',
            currency: '',
            date: '',
        };
    }
    ngOnInit() {
        this.activatedRoute.queryParamMap
            .subscribe(params => {
            // console.log('params',params);
            this.customerId = params.get('customerId');
            console.log('customerId', this.customerId);
        });
        this.invoicesPayment();
    }
    invoicesPayment() {
        this.serverRequest.invoices('https://api-sandbox.ezypay.com/v2/billing/invoices')
            .subscribe(res => {
            this.invoiceList = res;
            this.invoiceList = this.invoiceList.data;
            if (this.invoiceList) {
                let index = this.invoiceList.findIndex(x => x.customerId === this.customerId);
                this.invoiceList = this.invoiceList[index];
                this.invoicedata = {
                    subscriptionName: this.invoiceList.subscriptionName,
                    customerId: this.invoiceList.customerId,
                    subscriptionId: this.invoiceList.subscriptionId,
                    documentNumber: this.invoiceList.documentNumber,
                    value: this.invoiceList.amount.value,
                    currency: this.invoiceList.amount.currency,
                    date: this.invoiceList.date,
                };
                console.log('this.invoiceList', this.invoiceList);
                this.paymentStatus = 'Success';
            }
        });
    }
};
PaymentSuccessComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: src_app_shared_services_server_request_service__WEBPACK_IMPORTED_MODULE_3__["ServerRequestService"] }
];
PaymentSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-payment-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/payment-success/payment-success.component.html")).default
    })
], PaymentSuccessComponent);



/***/ }),

/***/ "./src/app/auth/component/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/component/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/component/register/register.component.html")).default
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/directive/input-format.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directive/input-format.directive.ts ***!
  \*****************************************************/
/*! exports provided: InputFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormatDirective", function() { return InputFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputFormatDirective = class InputFormatDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onFocus() {
        console.log('On Focus');
    }
    onBlur() {
        let value = this.elementRef.nativeElement.value;
        this.elementRef.nativeElement.value = value.toLowerCase();
        console.log('On Blur');
    }
};
InputFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')
], InputFormatDirective.prototype, "onFocus", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')
], InputFormatDirective.prototype, "onBlur", null);
InputFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appInputFormat]'
    })
], InputFormatDirective);



/***/ }),

/***/ "./src/app/layout/component/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/component/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/component/home/home.component.html")).default
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/layout/header-nav/header-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/header-nav/header-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let HeaderNavComponent = class HeaderNavComponent {
    constructor(authService, productService, modalService) {
        this.authService = authService;
        this.productService = productService;
        this.modalService = modalService;
        // Bootstrap Model Animation Effect
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"].prototype['c'] = _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"].prototype.close;
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"].prototype.close = function (reason) {
            document.querySelector('.modal-backdrop').classList.remove('show');
            document.querySelector('.modal').classList.remove('show');
            setTimeout(() => {
                this['c'](reason);
            }, 300);
        };
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"].prototype['d'] = _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"].prototype.dismiss;
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"].prototype.dismiss = function (reason) {
            document.querySelector('.modal-backdrop').classList.remove('show');
            document.querySelector('.modal').classList.remove('show');
            setTimeout(() => {
                this['d'](reason);
            }, 300);
        };
        // End Bootstrap Model Animation Effect
    }
    ngOnInit() {
        // console.log(this.productService.buyItem());
    }
    registerModal(content) {
        this.modalService.open(content);
    }
    loginModal(login, register) {
        this.loginForm = this.modalService.open(login);
        // this.loginForm.close(register);
    }
    formOpen(login, register) {
        this.modalService.open(login, { ariaLabelledBy: 'modal-basic-title' });
    }
};
HeaderNavComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
HeaderNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header-nav/header-nav.component.html")).default
    })
], HeaderNavComponent);



/***/ }),

/***/ "./src/app/payment/component/payment/payment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment/component/payment/payment.component.ts ***!
  \****************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentComponent = class PaymentComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/component/payment/payment.component.html")).default
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/shared/component/no-access/no-access.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/no-access/no-access.component.ts ***!
  \*******************************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoAccessComponent = class NoAccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-access',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-access.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/no-access/no-access.component.html")).default
    })
], NoAccessComponent);



/***/ }),

/***/ "./src/app/shared/component/page-not-found/page-not-found.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/component/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/page-not-found/page-not-found.component.html")).default
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/pipe/currency-format.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipe/currency-format.pipe.ts ***!
  \*****************************************************/
/*! exports provided: CurrencyFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatPipe", function() { return CurrencyFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CurrencyFormatPipe = class CurrencyFormatPipe {
    transform(value) {
        //  console.log(value)
        return this.formatMoney(value);
    }
    // currencyFormat
    formatMoney(number) {
        var decPlaces, decSep, thouSep;
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
            decSep = typeof decSep === "undefined" ? "." : decSep;
        thouSep = typeof thouSep === "undefined" ? "," : thouSep;
        var sign = number < 0 ? "-" : "";
        let i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
        var j = (j = i.length) > 3 ? j % 3 : 0;
        return sign +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    }
};
CurrencyFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'currencyFormat'
    })
], CurrencyFormatPipe);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






// npm install --save rxjs-compat
// npm install @angular/http@latest
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl;
    }
    //======== Post Login Api =================================
    login(endpoint, resource) {
        return this.http.post(this.url + endpoint, JSON.stringify(resource), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            //   console.log('response', response);
            const result = response;
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                return true;
            }
            return false;
        }));
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('myObj');
    }
    isLoggedIn() {
        // console.log('tokenNotExpired', tokenNotExpired())
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])();
        // const jwtHelper = new JwtHelper();
        // const token = localStorage.getItem('token');
        // if (!token) {
        //   console.log('token', token);
        //   return false;
        // }
        // const expirationDate = jwtHelper.getTokenExpirationDate(token);
        // const isExpired = jwtHelper.isTokenExpired(token);
        // console.log('expirationDate', jwtHelper.getTokenExpirationDate(token));
        // console.log('isExpired', isExpired);
        // console.log('token isExpired', token);
        // return !isExpired;
    }
    get currentUser() {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        const jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
        if (jwtHelper.decodeToken(token)) {
            const isAdmin = jwtHelper.decodeToken(token);
            return isAdmin.tokenpro.admin;
        }
        else {
            return null;
        }
        // console.log(jwtHelper.decodeToken(token));
        // return jwtHelper.decodeToken(token);
    }
    getToken() {
        // console.log('getItem token', localStorage.getItem('token'));
        const token = localStorage.getItem('token');
        return token;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// @Injectable({
//   providedIn: 'root'
// })
class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    // Get Service===============================================================
    pricingPlansService(endpoint) {
        //  console.log(`Bearer ${localStorage.getItem('ezypayToken')}`);
        return this.http.get(endpoint, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
                'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // createCustomerService ===============================================================
    createCustomerService(endpoint, resource) {
        console.log(resource);
        return this.http.post(endpoint, resource, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                //  'Content-Type': 'application/json',
                'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
                'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // createCustomerService ===============================================================
    vaultCard(endpoint, resource) {
        console.log(resource);
        return this.http.post(endpoint, resource, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
                'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create Service===============================================================
    SubscriptionsPlan(endpoint, resource) {
        return this.http.post(endpoint, resource, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
                'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Get Service===============================================================
    invoices(endpoint) {
        //  console.log(`Bearer ${localStorage.getItem('ezypayToken')}`);
        return this.http.get(endpoint, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'merchant': 'cc4d2aa1-e61c-4ac6-9799-73df99856d0b',
                'Authorization': `Bearer ${localStorage.getItem('ezypayToken')}`
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create Service===============================================================
    create2(endpoint, resource) {
        return this.http.post(endpoint, resource, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJraWQiOiIzd0dCZkhqcG9jMzM5WElXVzhkQmw5SE5aNnpqTXhmQTFlam9OUEpXYk80IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjV2YVd6VnJPdWxpZFBTcUktMGZqbXdDNF8ySDRmOVBLMWlpUVhTc3ZVRDAuQUJkNUZ1SEhwTkJ0TXpvQW5qOGZRL0huY0pSZ2JoelY3QzljdUlLeGx4UT0iLCJpc3MiOiJodHRwczovL2V6eXBheS5va3RhcHJldmlldy5jb20vb2F1dGgyL2F1c2k4aHJ5ajg1a21hSnlJMGg3IiwiYXVkIjoiZXp5cGF5IiwiaWF0IjoxNTY5MTM3ODQ4LCJleHAiOjE1NjkxNDE3NDgsImNpZCI6IjBvYW1naGF5bnU5MG9oN1pnMGg3IiwidWlkIjoiMDB1bWhwZGRrYmxDSzE2WFcwaDciLCJzY3AiOlsiaW50ZWdyYXRvciIsIm9mZmxpbmVfYWNjZXNzIiwiYmlsbGluZ19wcm9maWxlIiwiY3JlYXRlX3BheW1lbnRfbWV0aG9kIl0sInN1YiI6InByYXNhZEBtbGtncm91cC5jb20uYXUiLCJyb2xlIjpbIkV2ZXJ5b25lIiwiZmM0NmI4NDEtZmZkNS00NDZjLWIwZTEtZWQxN2VkOTEwZGIxIiwiVUkgTG9naW4gRGlzYWJsZWQiLCJVU0VSIl0sIm1lcmNoYW50X2lkIjoiY2M0ZDJhYTEtZTYxYy00YWM2LTk3OTktNzNkZjk5ODU2ZDBiIiwiaW50ZWdyYXRvcl9pZCI6ImZjNDZiODQxLWZmZDUtNDQ2Yy1iMGUxLWVkMTdlZDkxMGRiMSJ9.SIlrcWMuHsK8rJq5WDOsxO6b9LB1kAlVz4qJX2KZHwrRo0sBXQwQg1dKxi9TqFAl9Tm0b7aMuSbBuuSEGrIizFuIlH16ll8-yFmx1W5GCsDf8drrKhrhbVeUpy2VRbuBbbp-ej90GaTdAp-bDlzTre3W4wobmKLyyNhyJLZUlFdx6p31uwY3K5nHQsarDzpKkkFLlo5hy6NuYqQdhNBZsaZw0izeigNCqeCe9sqaJrB_OlhEPLwJ87pumm97_AzKgR_-fu5y-t52xVMKpivJv2BzuJefo81nu3CCemJgjZuQq9e2N9o_7UbKTonq7htgN1lqPFZrk5KshM42IlKwdA'
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Create Service===============================================================
    create(endpoint, resource) {
        return this.http.post(endpoint, resource, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // update Service===============================================================
    update(endpoint, resource) {
        return this.http.put(this.url + endpoint, JSON.stringify(resource), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // Delete Service===============================================================
    delete(endpoint, deleteId) {
        return this.http.delete(this.url + endpoint + '/' + deleteId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        alert(error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
    }
}


/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ApiUrl;
    }
    //======== Get All  Product =================================
    getAll(endpoint) {
        return this.http.get(this.url + endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //======== Get All  Product =================================
    getSingleProduct(endpoint) {
        return this.http.get(this.url + endpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    buyItem() {
        return JSON.parse(localStorage.getItem('myObj'));
    }
    totalCartPrice() {
        let totalprice = 0;
        let totalCartPrice = JSON.parse(localStorage.getItem('myObj'));
        let sum = 0;
        if (totalCartPrice) {
            for (let i = 0; totalCartPrice.length > i; i++) {
                totalprice += parseInt(totalCartPrice[i].price) * parseInt(totalCartPrice[i].quantity);
            }
        }
        return totalprice;
    }
    handleError(error) {
        alert(error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.message);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/shared/services/regex.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/regex.service.ts ***!
  \**************************************************/
/*! exports provided: RegexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexService", function() { return RegexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegexService = class RegexService {
    constructor() {
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.pwdRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!#%*?&]{8,}/;
        this.alphaRegex = /^[a-zA-z ]{1,}$/;
        this.numberRegex = /^[0-9]{10,10}$/;
        this.zipRegex = /^[0-9]{5,6}$/;
    }
    getRegex() {
        return [this.emailRegex, this.pwdRegex, this.alphaRegex, this.numberRegex, this.zipRegex];
    }
};
RegexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegexService);



/***/ }),

/***/ "./src/app/shared/services/server-request.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/server-request.service.ts ***!
  \***********************************************************/
/*! exports provided: ServerRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerRequestService", function() { return ServerRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ServerRequestService = class ServerRequestService extends _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] {
    // private local = 'http://localhost:3000/api/';
    // private server = 'https://jsonplaceholder.typicode.com/posts';
    constructor(http) {
        super(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ApiUrl, http);
    }
};
ServerRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ServerRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    })
], ServerRequestService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pipe_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/currency-format.pipe */ "./src/app/shared/pipe/currency-format.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_pipe_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__["CurrencyFormatPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _pipe_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__["CurrencyFormatPipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    bgColor: 'green',
    // ApiUrl : 'https://identity-sandbox.ezypay.com/token',
    //ApiUrl : 'http://localhost:3000/api/',
    ApiUrl: 'https://myproductdev.herokuapp.com/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Akshit\Desktop\angular-shopping-latest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map