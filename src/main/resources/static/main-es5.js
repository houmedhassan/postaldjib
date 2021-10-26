(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+34J":
    /*!*************************************************************************!*\
      !*** ./src/app/apps/envoi/colis/nouveaucolis/nouveaucolis.component.ts ***!
      \*************************************************************************/

    /*! exports provided: NouveaucolisComponent */

    /***/
    function J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveaucolisComponent", function () {
        return NouveaucolisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveaucolis_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveaucolis.component.html */
      "QOVP");
      /* harmony import */


      var _nouveaucolis_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveaucolis.component.css */
      "qZmL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveaucolisComponent = /*#__PURE__*/function () {
        function NouveaucolisComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveaucolisComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'COLIS - CP';
          this.disabled = true;
          this.envoidto = {};
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveaucolisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.colisForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/type/activite/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this.typeactivites = [];
              response.forEach(function (element) {
                if (element['name'] == 'COLIS - CP') {
                  _this.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - colis ");
            });
          }
        }, {
          key: "save",
          value: function save(colisForm) {
            var _this2 = this;

            console.log(colisForm);
            this.envoidto.reference = colisForm['reference'];
            this.envoidto.name = 'COLIS - CP';
            this.envoidto.type = colisForm['typearticle'];
            this.envoidto.adresse = colisForm['adresse'];
            this.envoidto.nomsender = colisForm['nomsender'];
            this.envoidto.telexpediteur = colisForm['telexpediteur'];
            this.envoidto.namerecipient = colisForm['namerecipient'];
            this.envoidto.telrecipient = colisForm['telrecipient'];
            this.envoidto.typearticle = this.typeactivite.code;
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/save", this.envoidto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this2.showSuccess("Vous avez enregistrer avec success votre colis  !!! ");
            }, function (error) {
              _this2.showError(" une erreur c'est produit et le système n'a pas enregitré votre colis - La raison est voici : " + error.getMessage());
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveaucolisComponent;
      }();

      NouveaucolisComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      NouveaucolisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouveau-colis',
        template: _raw_loader_nouveaucolis_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_nouveaucolis_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveaucolisComponent);
      /***/
    },

    /***/
    "+fQU":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/tableaubordreception/tableaubordreception.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fQU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"dashboard p-grid\">     \n\n\n    <div class=\"p-col-12 p-lg-6\">\n        <p-chart type=\"pie\" [data]=\"tableaubord1\" [options]=\"chartOptions\"  [style]=\"{'width': '40%'}\"></p-chart>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <p-chart type=\"line\" [data]=\"basicData\" [options]=\"basicOptions\"></p-chart>\n    </div>\n    <hr/>\n\n    \n            <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/recommande/nouveau?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Reception RECOMMANDE - RR \"class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td> {{ems.datereception}} </td>\n                        <td>  <span *ngIf=\"ems.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                        </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n\n</div>";
      /***/
    },

    /***/
    "+rFO":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/stocks/tableaubordstocks/tableaubordstocks.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>tableaubordstocks works!</p>\n";
      /***/
    },

    /***/
    "/XrQ":
    /*!****************************************************************************************!*\
      !*** ./src/app/apps/envoi/recommande/nouveaurecommande/nouveaurecommande.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: NouveaurecommandeComponent */

    /***/
    function XrQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveaurecommandeComponent", function () {
        return NouveaurecommandeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveaurecommande_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveaurecommande.component.html */
      "iLKO");
      /* harmony import */


      var _nouveaurecommande_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveaurecommande.component.css */
      "Ppy5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveaurecommandeComponent = /*#__PURE__*/function () {
        function NouveaurecommandeComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveaurecommandeComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'RECOMMANDE - RR';
          this.disabled = true;
          this.envoidto = {};
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveaurecommandeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.recommandeForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/type/activite/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this3.typeactivites = [];
              response.forEach(function (element) {
                if (element['name']) {
                  _this3.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this3.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this3.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - recommande ");
            });
          }
        }, {
          key: "save",
          value: function save(recommandeForm) {
            var _this4 = this;

            console.log(recommandeForm);
            this.envoidto.reference = recommandeForm['reference'];
            this.envoidto.name = 'COLIS RECOMMANDE';
            this.envoidto.type = recommandeForm['typearticle'];
            this.envoidto.adresse = recommandeForm['adresse'];
            this.envoidto.nomsender = recommandeForm['nomsender'];
            this.envoidto.telexpediteur = recommandeForm['telexpediteur'];
            this.envoidto.namerecipient = recommandeForm['namerecipient'];
            this.envoidto.telrecipient = recommandeForm['telrecipient'];
            this.envoidto.typearticle = this.typeactivite.code;
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/save", this.envoidto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this4.showSuccess("Vous avez enregistrer avec success votre recommande  !!! ");
            }, function (error) {
              _this4.showError(" une erreur c'est produit et le système n'a pas enregitré votre recommande - La raison est voici : " + error.getMessage());
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveaurecommandeComponent;
      }();

      NouveaurecommandeComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      NouveaurecommandeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouveau-recommande',
        template: _raw_loader_nouveaurecommande_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_nouveaurecommande_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveaurecommandeComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! H:\Developpement JS\Angular\Version 1\e-postal\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "04hL":
    /*!*************************************************!*\
      !*** ./src/app/demo/service/customerservice.ts ***!
      \*************************************************/

    /*! exports provided: CustomerService */

    /***/
    function hL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomerService = /*#__PURE__*/function () {
        function CustomerService(http) {
          _classCallCheck(this, CustomerService);

          this.http = http;
        }

        _createClass(CustomerService, [{
          key: "getCustomersSmall",
          value: function getCustomersSmall() {
            return this.http.get('assets/demo/data/customers-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getCustomersMedium",
          value: function getCustomersMedium() {
            return this.http.get('assets/demo/data/customers-medium.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getCustomersLarge",
          value: function getCustomersLarge() {
            return this.http.get('assets/demo/data/customers-large.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CustomerService);
      /***/
    },

    /***/
    "0drB":
    /*!********************************************************************************!*\
      !*** ./src/app/apps/livraison/nouveaulivraison/nouveaulivraison.component.css ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function drB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdXZlYXVsaXZyYWlzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Im5vdXZlYXVsaXZyYWlzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmRvbW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5vbmVuZG9tbWFnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "1jHi":
    /*!*************************************************************************!*\
      !*** ./src/app/apps/parametrage/utilisateurs/utilisateurs.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UtilisateursComponent */

    /***/
    function jHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilisateursComponent", function () {
        return UtilisateursComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_utilisateurs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./utilisateurs.component.html */
      "hNcx");
      /* harmony import */


      var _utilisateurs_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utilisateurs.component.css */
      "DBnK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UtilisateursComponent = /*#__PURE__*/function () {
        function UtilisateursComponent() {
          _classCallCheck(this, UtilisateursComponent);
        }

        _createClass(UtilisateursComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UtilisateursComponent;
      }();

      UtilisateursComponent.ctorParameters = function () {
        return [];
      };

      UtilisateursComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-utilisateurs',
        template: _raw_loader_utilisateurs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_utilisateurs_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UtilisateursComponent);
      /***/
    },

    /***/
    "1sSu":
    /*!*******************************************************************************!*\
      !*** ./src/app/apps/livraison/nouveaulivraison/nouveaulivraison.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: NouveaulivraisonComponent */

    /***/
    function sSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveaulivraisonComponent", function () {
        return NouveaulivraisonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveaulivraison_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveaulivraison.component.html */
      "svKR");
      /* harmony import */


      var _nouveaulivraison_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveaulivraison.component.css */
      "0drB");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveaulivraisonComponent = /*#__PURE__*/function () {
        /**
         *
         * @param formBuilder
         * @param messageService
         * @param httpClient
         * @param router
         * @param tokenStorage
         */
        function NouveaulivraisonComponent(formBuilder, messageService, httpClient, router, tokenStorage, activeroute, confirmationService) {
          _classCallCheck(this, NouveaulivraisonComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.activeroute = activeroute;
          this.confirmationService = confirmationService;
          /**
           * VARIABLE
           */

          this.msgs = [];
          this.string = undefined;
          this.article = undefined;
          this.reference = undefined;
          this.parametre = undefined;
          this.displayBasic = false;
          this.commentaire = undefined;
          this.livraisonechoue = undefined;
        }

        _createClass(NouveaulivraisonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.rechercheForm = this.formBuilder.group({
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            this.commentaireForm = this.formBuilder.group({
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
          }
          /**
           * Confirmation de la validation
           */

        }, {
          key: "confirm",
          value: function confirm() {
            var _this5 = this;

            console.log("referenece *** " + this.reference);
            this.confirmationService.confirm({
              message: 'Etes-vous sur de vouloir effectuer la livraison ?',
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this5.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/livraison/sucess?param=' + _this5.reference, {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Authorization': 'Bearer ' + _this5.tokenStorage.getToken()
                  })
                }).subscribe(function (response) {
                  _this5.article = undefined;

                  _this5.rechercheForm.patchValue({
                    reference: undefined
                  });

                  _this5.reference = undefined;

                  _this5.messageService.add({
                    severity: 'success',
                    summary: 'Confirmation',
                    detail: 'Vous avez livré avec success l\'article ! Merci .'
                  });
                }, function (err) {
                  _this5.showError("La recherche n'est pas operationnel car une erreur c'est produit. Veuillez verifier que tout les services sont operationnels.*** voici l'erreur generer par le systeme :" + err.message);
                });
              },
              reject: function reject(type) {
                _this5.messageService.add({
                  severity: 'warn',
                  summary: 'Confirmation',
                  detail: 'Vous avez rejecté la livraison.'
                });
              }
            });
          }
          /**
           * Confirmation de la validation
           */

        }, {
          key: "declinaison",
          value: function declinaison() {
            var _this6 = this;

            console.log("referenece *** " + this.reference);
            this.confirmationService.confirm({
              message: 'Etes-vous sur de vouloir declarer l\'echec de la livraison ?',
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this6.displayBasic = true;
                /*
                this.httpClient.get(environment.url+'/api/postal/reception/livraison/echec?param='+this.reference,  {headers: new HttpHeaders({
                  'Authorization': 'Bearer '+this.tokenStorage.getToken()
                  })
                }).subscribe(  response =>{
                  this.article = undefined;
                    this.rechercheForm.patchValue({reference: undefined});
                    this.reference = undefined;
                         this.messageService.add({severity:'success', summary:'Confirmation', detail:'Le colis n\' a pas été livré et doit etre retourné en stock! Merci .'});
                     }, err=>{
                         this.showError("La recherche n'est pas operationnel car une erreur c'est produit. Veuillez verifier que tout les services sont operationnels.*** voici l'erreur generer par le systeme :"+err.message);
                     }
                 );
                */
              },
              reject: function reject(type) {
                _this6.messageService.add({
                  severity: 'warn',
                  summary: 'Confirmation',
                  detail: 'Vous avez rejecté la livraison.'
                });
              }
            });
          }
        }, {
          key: "savecommentaire",
          value: function savecommentaire(value) {
            var _this7 = this;

            this.livraisonechoue = {};
            this.livraisonechoue.param = this.reference;
            this.livraisonechoue.commentaire = value['commentaire'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/livraison/echec', this.livraisonechoue, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this7.article = undefined;

              _this7.rechercheForm.patchValue({
                reference: undefined
              });

              _this7.reference = undefined;
              _this7.displayBasic = false;

              _this7.messageService.add({
                severity: 'success',
                summary: 'Confirmation',
                detail: 'Le colis n\' a pas été livré et doit etre retourné en stock! Merci .'
              });
            }, function (err) {
              _this7.showError("La recherche n'est pas operationnel car une erreur c'est produit. Veuillez verifier que tout les services sont operationnels.*** voici l'erreur generer par le systeme :" + err.message);
            });
          }
          /**
           * Fonction pour recherche une reference
           * @param event
           */

        }, {
          key: "searchByReference",
          value: function searchByReference(event) {
            var _this8 = this;

            console.log(event);
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/stock/recherche/livraison?param=' + event.query, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this8.string = response;
            }, function (err) {
              _this8.showError("La recherche n'est pas operationnel car une erreur c'est produit. Veuillez verifier que tout les services sont operationnels.*** voici l'erreur generer par le systeme :" + err.message);
            });
          }
        }, {
          key: "findResultat",
          value: function findResultat(reference) {
            var _this9 = this;

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/stock/recherche/resultat?param=' + reference['reference'], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this9.article = response;
              _this9.reference = reference['reference'];

              _this9.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this9.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
          }
          /**
          *  costumisation des erreurs
          */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveaulivraisonComponent;
      }();

      NouveaulivraisonComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]
        }];
      };

      NouveaulivraisonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouveaulivraison',
        template: _raw_loader_nouveaulivraison_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]],
        styles: [_nouveaulivraison_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveaulivraisonComponent);
      /***/
    },

    /***/
    "3WtB":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/apps/reception/colisreception/nouveaucolisreception/nouveaucolisreception.component.css ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WtB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1Y29saXNyZWNlcHRpb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "3aQ+":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.crud.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function aQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\n\t\t<p-toast></p-toast>\n\n\t\t<div class=\"card\">\n\t\t\t<p-toolbar styleClass=\"p-mb-4\">\n\t\t\t\t<ng-template pTemplate=\"left\">\n\t\t\t\t\t<button pButton pRipple label=\"New\" icon=\"pi pi-plus\" class=\"p-button-success p-mr-2 p-mb-2\" (click)=\"openNew()\"></button>\n\t\t\t\t\t<button pButton pRipple label=\"Delete\" icon=\"pi pi-trash\" class=\"p-button-danger p-mb-2\" (click)=\"deleteSelectedProducts()\" [disabled]=\"!selectedProducts || !selectedProducts.length\"></button>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<ng-template pTemplate=\"right\">\n\t\t\t\t\t<p-fileUpload mode=\"basic\" accept=\"image/*\" [maxFileSize]=\"1000000\" label=\"Import\" chooseLabel=\"Import\" class=\"p-mr-2 p-mb-2 p-d-inline-block\"></p-fileUpload>\n\t\t\t\t\t<button pButton pRipple label=\"Export\" icon=\"pi pi-upload\" class=\"p-button-help p-mb-2\" (click)=\"dt.exportCSV()\"></button>\n\t\t\t\t</ng-template>\n\t\t\t</p-toolbar>\n\n\t\t\t<p-table #dt [value]=\"products\" [columns]=\"cols\" [rows]=\"10\" [paginator]=\"true\" [globalFilterFields]=\"['name','country.name','representative.name','status']\"\n\t\t\t\t\t [(selection)]=\"selectedProducts\" [rowHover]=\"true\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\"\n\t\t\t\t\t currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\" [showCurrentPageReport]=\"true\">\n\t\t\t\t<ng-template pTemplate=\"caption\">\n\t\t\t\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n\t\t\t\t\t\t<h5 class=\"p-m-0\">Manage Products</h5>\n\t\t\t\t\t\t<span class=\"p-input-icon-left\">\n                        <i class=\"pi pi-search\"></i>\n                        <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Search...\" />\n                    </span>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"header\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th style=\"width: 3rem\">\n\t\t\t\t\t\t\t<p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th pSortableColumn=\"name\">Name <p-sortIcon field=\"name\"></p-sortIcon></th>\n\t\t\t\t\t\t<th>Image</th>\n\t\t\t\t\t\t<th pSortableColumn=\"price\">Price <p-sortIcon field=\"price\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"category\">Category <p-sortIcon field=\"category\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"rating\">Reviews <p-sortIcon field=\"rating\"></p-sortIcon></th>\n\t\t\t\t\t\t<th pSortableColumn=\"inventoryStatus\">Status <p-sortIcon field=\"inventoryStatus\"></p-sortIcon></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"body\" let-product>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p-tableCheckbox [value]=\"product\"></p-tableCheckbox>\n\t\t\t\t\t\t</td>\n                        <td><span class=\"p-column-title\">Name</span>\n                            {{product.name}}\n                        </td>\n                        <td><span class=\"p-column-title\">Image</span>\n                            <img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.name\" width=\"100\" class=\"p-shadow-4\" />\n                        </td>\n                        <td><span class=\"p-column-title\">Price</span>\n                            {{product.price | currency:'USD'}}\n                        </td>\n                        <td><span class=\"p-column-title\">Category</span>\n                            {{product.category}}\n                        </td>\n                        <td><span class=\"p-column-title\">Reviews</span>\n                            <p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating>\n                        </td>\n                        <td><span class=\"p-column-title\">Status</span>\n                            <span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span>\n                        </td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button pButton pRipple icon=\"pi pi-pencil\" class=\"p-button-rounded p-button-success p-mr-2\" (click)=\"editProduct(product)\"></button>\n\t\t\t\t\t\t\t<button pButton pRipple icon=\"pi pi-trash\" class=\"p-button-rounded p-button-warning\" (click)=\"deleteProduct(product)\"></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template pTemplate=\"summary\">\n\t\t\t\t\t<div class=\"p-d-flex p-ai-center p-jc-between\">\n\t\t\t\t\t\tIn total there are {{products ? products.length : 0 }} products.\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</p-table>\n\t\t</div>\n\n\t\t<p-dialog [(visible)]=\"productDialog\" [style]=\"{width: '450px'}\" header=\"Product Details\" [modal]=\"true\" styleClass=\"p-fluid\">\n\t\t\t<ng-template pTemplate=\"content\">\n\t\t\t\t<img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.image\" class=\"product-image\" *ngIf=\"product.image\">\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t<input type=\"text\" pInputText id=\"name\" [(ngModel)]=\"product.name\" required autofocus />\n\t\t\t\t\t<small class=\"p-invalid\" *ngIf=\"submitted && !product.name\">Name is required.</small>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"description\">Description</label>\n\t\t\t\t\t<textarea id=\"description\" pInputTextarea [(ngModel)]=\"product.description\" required rows=\"3\" cols=\"20\"></textarea>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label class=\"p-mb-3\">Category</label>\n\t\t\t\t\t<div class=\"p-formgrid p-grid\">\n\t\t\t\t\t\t<div class=\"p-field-radiobutton p-col-6\">\n\t\t\t\t\t\t\t<p-radioButton id=\"category1\" name=\"category\" value=\"Accessories\" [(ngModel)]=\"product.category\"></p-radioButton>\n\t\t\t\t\t\t\t<label for=\"category1\">Accessories</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field-radiobutton p-col-6\">\n\t\t\t\t\t\t\t<p-radioButton id=\"category2\" name=\"category\" value=\"Clothing\" [(ngModel)]=\"product.category\"></p-radioButton>\n\t\t\t\t\t\t\t<label for=\"category2\">Clothing</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field-radiobutton p-col-6\">\n\t\t\t\t\t\t\t<p-radioButton id=\"category3\" name=\"category\" value=\"Electronics\" [(ngModel)]=\"product.category\"></p-radioButton>\n\t\t\t\t\t\t\t<label for=\"category3\">Electronics</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field-radiobutton p-col-6\">\n\t\t\t\t\t\t\t<p-radioButton id=\"category4\" name=\"category\" value=\"Fitness\" [(ngModel)]=\"product.category\"></p-radioButton>\n\t\t\t\t\t\t\t<label for=\"category4\">Fitness</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"p-formgrid p-grid\">\n\t\t\t\t\t<div class=\"p-field p-col\">\n\t\t\t\t\t\t<label for=\"price\">Price</label>\n\t\t\t\t\t\t<p-inputNumber id=\"price\" [(ngModel)]=\"product.price\" mode=\"currency\" currency=\"USD\" locale=\"en-US\"></p-inputNumber>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"p-field p-col\">\n\t\t\t\t\t\t<label for=\"quantity\">Quantity</label>\n\t\t\t\t\t\t<p-inputNumber id=\"quantity\" [(ngModel)]=\"product.quantity\"></p-inputNumber>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\n\t\t\t<ng-template pTemplate=\"footer\">\n\t\t\t\t<button pButton pRipple label=\"Cancel\" icon=\"pi pi-times\" class=\"p-button-text\" (click)=\"hideDialog()\"></button>\n\t\t\t\t<button pButton pRipple label=\"Save\" icon=\"pi pi-check\" class=\"p-button-text\" (click)=\"saveProduct()\"></button>\n\t\t\t</ng-template>\n\t\t</p-dialog>\n\n\t\t<p-confirmDialog [style]=\"{width: '450px'}\"></p-confirmDialog>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "3e/o":
    /*!***************************************************************************************!*\
      !*** ./src/app/apps/reception/tableaubordreception/tableaubordreception.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TableaubordreceptionComponent */

    /***/
    function eO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableaubordreceptionComponent", function () {
        return TableaubordreceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tableaubordreception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tableaubordreception.component.html */
      "+fQU");
      /* harmony import */


      var _tableaubordreception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tableaubordreception.component.css */
      "lQIM");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var TableaubordreceptionComponent = /*#__PURE__*/function () {
        /**
         *
         * @param formBuilder
         * @param messageService
         * @param httpClient
         * @param router
         * @param tokenStorage
         */
        function TableaubordreceptionComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, TableaubordreceptionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          /***
           *
           */

          this.msgs = [];
          this.tableaubord1 = undefined;
          this.basicData = undefined;
          this.listems = undefined;
        }

        _createClass(TableaubordreceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/tableau/bord1", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this10.tableaubord1 = {
                labels: ['A', 'B', 'C'],
                datasets: [{
                  data: [300, 50, 100],
                  backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
                  hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"]
                }]
              };
            }, function (error) {
              _this10.showWarn(" une erreur c'est produit et le système selectionner le type de ventes - La raison est voici : " + error.message);
            });
            this.basicData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
              }, {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#FFA726',
                tension: .4
              }]
            };
            /**
            *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
            */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/reception/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this10.listems = response;
              console.log(_this10.listems);
            }, function (error) {
              _this10.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return TableaubordreceptionComponent;
      }();

      TableaubordreceptionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      TableaubordreceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tableaubord',
        template: _raw_loader_tableaubordreception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_tableaubordreception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TableaubordreceptionComponent);
      /***/
    },

    /***/
    "3haZ":
    /*!******************************************************************!*\
      !*** ./src/app/apps/reception/ordinaire/ordinaire.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function haZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGluYWlyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoib3JkaW5haXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5kb21tYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub25lbmRvbW1hZ2Vcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "48V0":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/formlayoutdemo.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function V0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"p-grid\">\n\t<div class=\"p-col-12 p-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Vertical</h5>\n\t\t\t<div class=\"p-fluid\">\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"firstname1\">Name</label>\n\t\t\t\t\t<input id=\"firstname1\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"lastname1\">Email</label>\n\t\t\t\t\t<input id=\"lastname1\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"age1\">Age</label>\n\t\t\t\t\t<input id=\"age1\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<h5>Vertical Grid</h5>\n\t\t\t<div class=\"p-fluid p-formgrid p-grid\">\n\t\t\t\t<div class=\"p-field p-col\">\n\t\t\t\t\t<label for=\"firstname2\">Name</label>\n\t\t\t\t\t<input id=\"firstname2\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-col\">\n\t\t\t\t\t<label for=\"lastname2\">Email</label>\n\t\t\t\t\t<input id=\"lastname2\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12 p-md-6\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Horizontal</h5>\n\t\t\t<div class=\"p-fluid\">\n\t\t\t\t<div class=\"p-field p-grid\">\n\t\t\t\t\t<label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Name</label>\n\t\t\t\t\t<div class=\"p-col-12 p-md-10\">\n\t\t\t\t\t\t<input id=\"firstname4\" type=\"text\" pInputText>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-grid\">\n\t\t\t\t\t<label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Email</label>\n\t\t\t\t\t<div class=\"p-col-12 p-md-10\">\n\t\t\t\t\t\t<input id=\"lastname4\" type=\"text\" pInputText>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<h5>Inline</h5>\n\t\t\t<div class=\"p-formgroup-inline\">\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"firstname5\" class=\"p-sr-only\">Firstname</label>\n\t\t\t\t\t<input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Firstname\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t<label for=\"lastname5\" class=\"p-sr-only\">Lastname</label>\n\t\t\t\t\t<input id=\"lastname5\" type=\"text\" pInputText placeholder=\"Lastname\">\n\t\t\t\t</div>\n\t\t\t\t<button pButton pRipple type=\"button\" label=\"Submit\"></button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<h5>Help Text</h5>\n\t\t\t<div class=\"p-field p-fluid\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\">\n\t\t\t\t<small id=\"username-help\">Enter your username to reset your password.</small>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Advanced</h5>\n\t\t\t<div class=\"p-fluid p-formgrid p-grid\">\n\t\t\t\t<div class=\"p-field p-col-12 p-md-6\">\n\t\t\t\t\t<label for=\"firstname6\">Firstname</label>\n\t\t\t\t\t<input id=\"firstname6\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-col-12 p-md-6\">\n\t\t\t\t\t<label for=\"lastname6\">Lastname</label>\n\t\t\t\t\t<input id=\"lastname6\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-col-12\">\n\t\t\t\t\t<label for=\"address\">Address</label>\n\t\t\t\t\t<textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-col-12 p-md-6\">\n\t\t\t\t\t<label for=\"city\">City</label>\n\t\t\t\t\t<input id=\"city\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-col-12 p-md-3\">\n\t\t\t\t\t<label for=\"state\">State</label>\n\t\t\t\t\t<p-dropdown inputId=\"state\" [options]=\"states\" [(ngModel)]=\"selectedState\" placeholder=\"Select\" optionLabel=\"name\"></p-dropdown>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"p-field p-col-12 p-md-3\">\n\t\t\t\t\t<label for=\"zip\">Zip</label>\n\t\t\t\t\t<input id=\"zip\" type=\"text\" pInputText>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "4Sr2":
    /*!*********************************************!*\
      !*** ./src/app/demo/service/iconservice.ts ***!
      \*********************************************/

    /*! exports provided: IconService */

    /***/
    function Sr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconService", function () {
        return IconService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var IconService = /*#__PURE__*/function () {
        function IconService(http) {
          _classCallCheck(this, IconService);

          this.http = http;
          this.apiUrl = 'assets/demo/data/icons.json';
        }

        _createClass(IconService, [{
          key: "getIcons",
          value: function getIcons() {
            var _this11 = this;

            return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              _this11.icons = response.icons;
              return _this11.icons;
            }));
          }
        }]);

        return IconService;
      }();

      IconService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      IconService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IconService);
      /***/
    },

    /***/
    "4VL1":
    /*!********************************************************************!*\
      !*** ./src/app/apps/vente/nouveauvente/nouveauvente.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function VL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1dmVudGUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "4YMt":
    /*!******************************************************************************!*\
      !*** ./src/app/apps/livraison/livraisonechoue/livraisonechoue.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function YMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZyYWlzb25lY2hvdWUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "5ewr":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/apps/reception/recommandereception/nouveaurecommandereception/nouveaurecommandereception.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: NouveaurecommandereceptionComponent */

    /***/
    function ewr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveaurecommandereceptionComponent", function () {
        return NouveaurecommandereceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveaurecommandereception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveaurecommandereception.component.html */
      "bSVr");
      /* harmony import */


      var _nouveaurecommandereception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveaurecommandereception.component.css */
      "Xf1K");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveaurecommandereceptionComponent = /*#__PURE__*/function () {
        function NouveaurecommandereceptionComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveaurecommandereceptionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'RECOMMANDE - RR';
          this.disabled = true;
          this.receptiondto = {};
          this.dateactuel = new Date();
          this.dommage = false;
          this.commentdommage = "N/A";
          this.envoisms = false;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveaurecommandereceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.recommandeForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'datereception': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'dommage': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('N/A', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'envoisms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysdestinateur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/type/reception/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this12.typeactivites = [];
              response.forEach(function (element) {
                if (element['name'] == 'RECOMMANDE - RR') {
                  _this12.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this12.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this12.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - recommande ");
            });
            /**
            *  -- REQUETE POUR RECUPERER LA LISTE DES PAYS
            */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/pays/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this12.countries = [];
              response.forEach(function (element) {
                _this12.countries.push({
                  name: element['name'],
                  code: element['code']
                });
              });
            }, function (error) {
              _this12.showWarn("La liste des pays n'a pas pu etre chargé ");
            });
          }
        }, {
          key: "save",
          value: function save(recommandeForm) {
            var _this13 = this;

            console.log(recommandeForm);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            this.receptiondto.reference = recommandeForm['reference'];
            this.receptiondto.name = 'recommande - EXPRESS MAIL SERVICE';
            this.receptiondto.type = recommandeForm['typearticle'];
            this.receptiondto.adresse = recommandeForm['adresse'];
            this.receptiondto.nomsender = recommandeForm['nomsender'];
            this.receptiondto.telexpediteur = recommandeForm['telexpediteur'];
            this.receptiondto.namerecipient = recommandeForm['namerecipient'];
            this.receptiondto.telrecipient = recommandeForm['telrecipient'];
            this.receptiondto.email = recommandeForm['email'];
            this.receptiondto.datereception = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(recommandeForm['datereception'], format, locale);
            this.receptiondto.typearticle = this.typeactivite.code;
            this.receptiondto.dommage = this.dommage;
            this.receptiondto.commentaire = recommandeForm['commentaire'];
            this.receptiondto.envoisms = this.envoisms;
            this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
            this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/save", this.receptiondto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this13.showSuccess("Vous avez enregistrer avec success votre recommande  !!! ");
            }, function (error) {
              _this13.showError(" une erreur c'est produit et le système n'a pas enregitré votre recommande - La raison est voici : " + error.message);
            });
          }
          /**
          *
          * @param $event
          */

        }, {
          key: "dommageSelect",
          value: function dommageSelect($event) {
            console.log($event);

            if ($event.checked) {
              this.commentdommage = undefined;
            } else {
              this.commentdommage = 'N/A';
              this.recommandeForm.patchValue({
                commentaire: this.commentdommage
              });
            }
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveaurecommandereceptionComponent;
      }();

      NouveaurecommandereceptionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }];
      };

      NouveaurecommandereceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nouveaurecommandereception',
        template: _raw_loader_nouveaurecommandereception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        styles: [_nouveaurecommandereception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveaurecommandereceptionComponent);
      /***/
    },

    /***/
    "5s3B":
    /*!************************************************************************!*\
      !*** ./src/app/apps/reception/emsreception/emsreception.component.css ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function s3B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtc3JlY2VwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoiZW1zcmVjZXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5kb21tYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub25lbmRvbW1hZ2Vcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "66gQ":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/dashboard.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function gQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n<div class=\"dashboard p-grid\">\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"widget-overview overview-box-1\">\n            <div class=\"overview-box-title\">\n                <i class=\"pi pi-inbox\"></i>\n                <span>Unread Messages</span>\n            </div>\n            <div class=\"overview-box-count\">150</div>\n            <div class=\"overview-box-stats\">12 less than yesterday</div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"widget-overview overview-box-2\">\n            <div class=\"overview-box-title\">\n                <i class=\"pi pi-map-marker\"></i>\n                <span>Check-ins</span>\n            </div>\n            <div class=\"overview-box-count\">532</div>\n            <div class=\"overview-box-stats\">46 more than yesterday</div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"widget-overview overview-box-3\">\n            <div class=\"overview-box-title\">\n                <i class=\"pi pi-folder\"></i>\n                <span>Files</span>\n            </div>\n            <div class=\"overview-box-count\">450</div>\n            <div class=\"overview-box-stats\">30 more than yesterday</div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"widget-overview overview-box-4\">\n            <div class=\"overview-box-title\">\n                <i class=\"pi pi-user\"></i>\n                <span>Users</span>\n            </div>\n            <div class=\"overview-box-count\">532</div>\n            <div class=\"overview-box-stats\">250 more than yesterday</div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card widget-sale-table\">\n            <h5>Global Sales</h5>\n            <table>\n                <thead>\n                <tr>\n                    <th></th>\n                    <th></th>\n                    <th></th>\n                    <th>Total Sales</th>\n                    <th>Change</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                    <td>1</td>\n                    <td><img alt=\"Brazil Flag\" src=\"assets/layout/images/dashboard/flag-brazil.png\" width=\"45\" /></td>\n                    <td>BRAZIL</td>\n                    <td>4234</td>\n                    <td>+35%</td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td><img alt=\"China Flag\" src=\"assets/layout/images/dashboard/flag-china.png\" width=\"45\" /></td>\n                    <td>CHINA</td>\n                    <td>3214</td>\n                    <td>-25%</td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td><img alt=\"Belgium Flag\" src=\"assets/layout/images/dashboard/flag-belgium.png\" width=\"45\" /></td>\n                    <td>BELGIUM</td>\n                    <td>2842</td>\n                    <td>+28%</td>\n                </tr>\n                <tr>\n                    <td>4</td>\n                    <td><img alt=\"France Flag\" src=\"assets/layout/images/dashboard/flag-france.png\" width=\"45\" /></td>\n                    <td>FRANCE</td>\n                    <td>1942</td>\n                    <td>+15%</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card widget-statistics\">\n            <h5>Product Statistics</h5>\n            <table>\n                <tbody>\n                <tr>\n                    <td class=\"col-overview col-wait\">\n                        <div>W</div>\n                    </td>\n                    <td class=\"col-status\">\n                        <span class=\"status-time\">Last Update: 12m ago</span>\n                        <span class=\"status-text\">Currently Waiting</span>\n                    </td>\n                    <td class=\"col-numbers\">\n                        <div>253 <span>Shipments</span></div>\n                        <div>584 <span>Orders</span></div>\n                    </td>\n                </tr>\n                <tr>\n                    <td class=\"col-overview col-success\">\n                        <div>S</div>\n                    </td>\n                    <td class=\"col-status\">\n                        <span class=\"status-time\">Last Update: 12m ago</span>\n                        <span class=\"status-text\">Successfully Completed</span>\n                    </td>\n                    <td class=\"col-numbers\">\n                        <div>312 <span>Shipments</span></div>\n                        <div>409 <span>Orders</span></div>\n                    </td>\n                </tr>\n                <tr>\n                    <td class=\"col-overview col-delay\">\n                        <div>D</div>\n                    </td>\n                    <td class=\"col-status\">\n                        <span class=\"status-time\">Last Update: 6m ago</span>\n                        <span class=\"status-text\">Delayed</span>\n                    </td>\n                    <td class=\"col-numbers\">\n                        <div>122 <span>Shipments</span></div>\n                        <div>341 <span>Orders</span></div>\n                    </td>\n                </tr>\n                <tr>\n                    <td class=\"col-overview col-preorder\">\n                        <div>P</div>\n                    </td>\n                    <td class=\"col-status\">\n                        <span class=\"status-time\">Last Update: 15m ago</span>\n                        <span class=\"status-text\">Preordered</span>\n                    </td>\n                    <td class=\"col-numbers\">\n                        <div>221 <span>Shipments</span></div>\n                        <div>332 <span>Orders</span></div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"widget-graph\">\n            <div class=\"p-grid\">\n                <div class=\"p-col-4\">\n                    <span class=\"graph-title\">Logins</span>\n                    <span class=\"graph-value\">52003</span>\n                    <span class=\"graph-change\">+32</span>\n                </div>\n                <div class=\"p-col-8\">\n                    <img alt=\"Chart 1\" src=\"assets/layout/images/dashboard/graph-1.svg\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"widget-graph\">\n            <div class=\"p-grid\">\n                <div class=\"p-col-4\">\n                    <span class=\"graph-title\">Views</span>\n                    <span class=\"graph-value\">532</span>\n                    <span class=\"graph-change\">+24792</span>\n                </div>\n                <div class=\"p-col-8\">\n                    <img alt=\"Chart 2\" src=\"assets/layout/images/dashboard/graph-2.svg\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"widget-graph\">\n            <div class=\"p-grid\">\n                <div class=\"p-col-4\">\n                    <span class=\"graph-title\">Sales</span>\n                    <span class=\"graph-value\">$5521</span>\n                    <span class=\"graph-change\">+243</span>\n                </div>\n                <div class=\"p-col-8\">\n                    <img alt=\"Chart 3\" src=\"assets/layout/images/dashboard/graph-3.svg\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-4\">\n        <div class=\"card widget-task-list\">\n            <h5>Tasks</h5>\n            <ul>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Sales Reports</span>\n                    <i class=\"pi pi-briefcase\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Pay Invoices</span>\n                    <i class=\"pi pi-money-bill\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Dinner with Tony</span>\n                    <i class=\"pi pi-comments\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Client Meeting</span>\n                    <i class=\"pi pi-user\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">New Theme</span>\n                    <i class=\"pi pi-palette\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Flight Ticket</span>\n                    <i class=\"pi pi-ticket\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Generate Charts</span>\n                    <i class=\"pi pi-chart-bar\"></i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Call Client</span>\n                    <i class=\"pi pi-mobile\"></i>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-4\">\n        <div class=\"card p-fluid widget-contact-form\">\n            <h5>Contact Us</h5>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12\">\n                    <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select City\" [autoDisplayFirst]=\"false\"></p-dropdown>\n                </div>\n                <div class=\"p-col-12\">\n                    <input type=\"text\" pInputText placeholder=\"Name\" >\n                </div>\n                <div class=\"p-col-12\">\n                    <input type=\"text\" pInputText placeholder=\"Age\" >\n                </div>\n                <div class=\"p-col-12\">\n                    <input type=\"text\" pInputText placeholder=\"Email\">\n                </div>\n                <div class=\"p-col-12\">\n                    <textarea type=\"text\" pInputTextarea placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"p-col-12\">\n                    <button type=\"button\" label=\"Send\" icon=\"pi pi-check\" pButton></button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card widget-contacts\">\n            <h5>Team</h5>\n            <ul>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Madison Hughes (me)</span>\n                        <span class=\"location\">jane@pn-manhattan.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status online\">online</span>\n                        <i class=\"pi pi-fw pi-comment\"></i>\n                        <i class=\"pi pi-fw pi-reply\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar1.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Joshua Williams</span>\n                        <span class=\"location\">joshua@pn-manhattan.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status online\">online</span>\n                        <i class=\"pi pi-fw pi-comment\"></i>\n                        <i class=\"pi pi-fw pi-reply\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar2.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Emily Clark</span>\n                        <span class=\"location\">emily@pn-manhattan.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status offline\">offline</span>\n                        <i class=\"pi pi-fw pi-comment\"></i>\n                        <i class=\"pi pi-fw pi-reply\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar3.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">Tim Johnson</span>\n                        <span class=\"location\">tim@pn-manhattan.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status online\">online</span>\n                        <i class=\"pi pi-fw pi-comment\"></i>\n                        <i class=\"pi pi-fw pi-reply\"></i>\n                    </div>\n                </li>\n                <li class=\"clearfix\">\n                    <img src=\"assets/layout/images/avatar4.png\" width=\"45\">\n                    <div class=\"contact-info\">\n                        <span class=\"name\">David Stark</span>\n                        <span class=\"location\">kelly@pn-manhattan.com</span>\n                    </div>\n                    <div class=\"contact-actions\">\n                        <span class=\"connection-status offline\">offline</span>\n                        <i class=\"pi pi-fw pi-comment\"></i>\n                        <i class=\"pi pi-fw pi-reply\"></i>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-8\">\n        <div class=\"card widget-chat\">\n            <h5>Chat</h5>\n            <ul>\n                <li class=\"clearfix message-from\">\n                    <img src=\"assets/layout/images/avatar2.png\">\n                    <span>Retro occupy organic, stumptown shabby chic pour-over roof party DIY normcore.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <img src=\"assets/layout/images/avatar.png\">\n                    <span>Actually artisan organic occupy, Wes Anderson ugh whatever pour-over gastropub selvage.</span>\n                </li>\n                <li class=\"clearfix message-from\">\n                    <img src=\"assets/layout/images/avatar2.png\">\n                    <span>Chillwave craft beer tote bag stumptown quinoa hashtag.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <img src=\"assets/layout/images/avatar.png\">\n                    <span>Dreamcatcher locavore iPhone chillwave, occupy trust fund slow-carb distillery art party narwhal.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <span>Sed ut perspiciatis unde omnis iste natus.</span>\n                </li>\n                <li class=\"clearfix message-from\">\n                    <img src=\"assets/layout/images/avatar2.png\">\n                    <span>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</span>\n                </li>\n                <li class=\"clearfix message-own\">\n                    <img src=\"assets/layout/images/avatar.png\">\n                    <span>At vero eos et accusamus.</span>\n                </li>\n            </ul>\n            <div class=\"new-message\">\n                <div class=\"message-attachment\">\n                    <i class=\"pi pi-paperclip\"></i>\n                </div>\n                <div class=\"message-input\">\n                    <input type=\"text\" placeholder=\"Write a message\" class=\"p-inputtext\" />\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h5>Products</h5>\n            <p-table [value]=\"products\" [paginator]=\"true\" [rows]=\"5\" styleClass=\"p-datatable-customers\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>\n                            Image\n                        </th>\n                        <th pSortableColumn=\"name\">Name\n                            <p-sortIcon field=\"name\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"category\">Category\n                            <p-sortIcon field=\"category\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"price\">Price\n                            <p-sortIcon field=\"price\"></p-sortIcon>\n                        </th>\n                        <th pSortableColumn=\"view\">View\n                            <p-sortIcon field=\"view\"></p-sortIcon>\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-product>\n                    <tr>\n                        <td>\n                            <span class=\"p-column-title\">Image</span>\n                            <img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.image\" width=\"50px\" />\n                        </td>\n                        <td>\n                            <span class=\"p-column-title\">Name</span>\n                            {{product.name}}\n                        </td>\n                        <td>\n                            <span class=\"p-column-title\">Category</span>\n                            {{product.category}}\n                        </td>\n                        <td>\n                            <span class=\"p-column-title\">Price</span>\n                            {{product.price | currency:'USD'}}\n                        </td>\n                        <td>\n                            <button pButton type=\"button\" icon=\"pi pi-search\" class=\"p-button-success p-mr-2 p-mb-1\"></button>\n                            <button pButton type=\"button\" icon=\"pi pi-times\" class=\"p-button-danger p-mb-1\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-4\">\n        <div class=\"card widget-timeline p-fluid\">\n            <div class=\"p-grid\">\n                <div class=\"p-col-3\">\n                    <span class=\"event-time\">just now</span>\n                    <i class=\"pi pi-globe\" style=\"color:#3984b8\"></i>\n                </div>\n                <div class=\"p-col-9\">\n                    <span class=\"event-owner\" style=\"color:#3984b8\">Katherine May</span>\n                    <span class=\"event-text\">Lorem ipsun dolor amet</span>\n                    <div class=\"event-content\">\n                        <img src=\"assets/layout/images/dashboard/bridge.png\" width=\"100\"/>\n                    </div>\n                </div>\n\n                <div class=\"p-col-3\">\n                    <span class=\"event-time\">12h ago</span>\n                    <i class=\"pi pi-star\" style=\"color:#f6ac2b\"></i>\n                </div>\n                <div class=\"p-col-9\">\n                    <span class=\"event-owner\" style=\"color:#f6ac2b\">Brandon Santos</span>\n                    <span class=\"event-text\">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>\n                </div>\n\n                <div class=\"p-col-3\">\n                    <span class=\"event-time\">15h ago</span>\n                    <i class=\"pi pi-comment\" style=\"color:#7e8dcd\"></i>\n                </div>\n                <div class=\"p-col-9\">\n                    <span class=\"event-owner\" style=\"color:#7e8dcd\">Stephan Ward</span>\n                    <span class=\"event-text\">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>\n                </div>\n\n                <div class=\"p-col-3\">\n                    <span class=\"event-time\">2d ago</span>\n                    <i class=\"pi pi-map-marker\" style=\"color:#e175a0\"></i>\n                </div>\n                <div class=\"p-col-9\">\n                    <span class=\"event-owner\" style=\"color:#e175a0\">Jason Smith</span>\n                    <span class=\"event-text\">Laudantium, repudiandae, similique!</span>\n                    <div class=\"event-content\">\n                        <img src=\"assets/layout/images/dashboard/map.png\" />\n                    </div>\n                </div>\n\n                <div class=\"p-col-3\">\n                    <span class=\"event-time\">1w ago</span>\n                    <i class=\"pi pi-heart\" style=\"color:#39b8b6\"></i>\n                </div>\n                <div class=\"p-col-9\">\n                    <span class=\"event-owner\">Kevin Cox</span>\n                    <span class=\"event-text\">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>\n                </div>\n\n                <div class=\"p-col-3\">\n                    <span class=\"event-time\">2w ago</span>\n                    <i class=\"pi pi-compass\" style=\"color:#3eb839\"></i>\n                </div>\n                <div class=\"p-col-9\">\n                    <span class=\"event-owner\" style=\"color:#3eb839\">Walter White</span>\n                    <span class=\"event-text\">I am the one who knocks!</span>\n                </div>\n\n                <div class=\"p-col-12\">\n                    <button type=\"button\" pButton label=\"Refresh\" icon=\"pi pi-refresh\" class=\"rounded-btn raised-btn\"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Calendar</h5>\n            <p-fullCalendar [events]=\"events\" [options]=\"fullcalendarOptions\" ></p-fullCalendar>\n        </div>\n    </div>\n</div>\n-->";
      /***/
    },

    /***/
    "6M6E":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/livraison/livraison/livraison.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LivraisonComponent */

    /***/
    function M6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LivraisonComponent", function () {
        return LivraisonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_livraison_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./livraison.component.html */
      "HflD");
      /* harmony import */


      var _livraison_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./livraison.component.css */
      "Qd+X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LivraisonComponent = /*#__PURE__*/function () {
        function LivraisonComponent() {
          _classCallCheck(this, LivraisonComponent);
        }

        _createClass(LivraisonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LivraisonComponent;
      }();

      LivraisonComponent.ctorParameters = function () {
        return [];
      };

      LivraisonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-livraison',
        template: _raw_loader_livraison_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_livraison_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LivraisonComponent);
      /***/
    },

    /***/
    "7APR":
    /*!*****************************************!*\
      !*** ./src/app/app.topbar.component.ts ***!
      \*****************************************/

    /*! exports provided: AppTopBarComponent */

    /***/
    function APR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppTopBarComponent", function () {
        return AppTopBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/token-storage.service */
      "dZLz");

      var AppTopBarComponent = /*#__PURE__*/function () {
        function AppTopBarComponent(app, appMain, token, router) {
          _classCallCheck(this, AppTopBarComponent);

          this.app = app;
          this.appMain = appMain;
          this.token = token;
          this.router = router;
        }

        _createClass(AppTopBarComponent, [{
          key: "logout",
          value: function logout($event) {
            this.info = {
              token: this.token.getToken(),
              username: this.token.getUsername(),
              authorities: this.token.getAuthorities()
            };
            this.token.signOut();
            window.location.reload();
          }
        }]);

        return AppTopBarComponent;
      }();

      AppTopBarComponent.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        }, {
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_4__["AppMainComponent"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AppTopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: "\n        <div class=\"topbar clearfix\">\n            <div class=\"topbar-left\">\n                <a routerLink=\"/\">\n                    <img src=\"assets/layout/images/logo.png\" class=\"topbar-logo\" routerLink=\"/\" />\n                </a>\n            </div>\n\n            <div class=\"topbar-right\">\n                <a id=\"menu-button\" href=\"#\" (click)=\"appMain.onMenuButtonClick($event)\"\n                   [ngClass]=\"{'menu-button-rotate': appMain.rotateMenuButton}\">\n                    <i class=\"pi pi-angle-left\"></i>\n                </a>\n\n                <a id=\"topbar-menu-button\" href=\"#\" (click)=\"appMain.onTopbarMenuButtonClick($event)\">\n                    <i class=\"pi pi-bars\"></i>\n                </a>\n\n                <ul class=\"topbar-items fadeInDown\" [ngClass]=\"{'topbar-items-visible': appMain.topbarMenuActive}\">\n                    <li #profile class=\"profile-item\" *ngIf=\"app.profileMode==='top'|| appMain.isHorizontal()\"\n                        [ngClass]=\"{'active-top-menu':appMain.activeTopbarItem === profile}\">\n\n                        <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event,profile)\">\n                            <img class=\"profile-image\" src=\"assets/layout/images/avatar.jpg\" />\n                            <span class=\"topbar-item-name\">Houmed Hassan</span>\n                            <span class=\"topbar-item-role\">Marketing</span>\n                        </a>\n                        <ul class=\"layout-menu\" [ngClass]=\"{'fadeInDown':!appMain.isMobile()}\">\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-user\"></i>\n                                    <span>Profile</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-lock\"></i>\n                                    <span>Privacy</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-cog\"></i>\n                                    <span>Settings</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\"  (click)=\"logout($event)\">\n                                    <i class=\"pi pi-fw pi-sign-out\"></i>\n                                    <span>Logout</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <!--\n                    <li #settings [ngClass]=\"{'active-top-menu':appMain.activeTopbarItem === settings}\">\n                        <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event,settings)\">\n                            <i class=\"topbar-icon pi pi-cog\"></i>\n                            <span class=\"topbar-item-name\">Settings</span>\n                        </a>\n                        <ul class=\"layout-menu\" [ngClass]=\"{'fadeInDown':!appMain.isMobile()}\">\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-palette\"></i>\n                                    <span>Change Theme</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-star-o\"></i>\n                                    <span>Favorites</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-lock\"></i>\n                                    <span>Lock Screen</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-image\"></i>\n                                    <span>Wallpaper</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li #messages [ngClass]=\"{'active-top-menu':appMain.activeTopbarItem === messages}\">\n                        <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event,messages)\">\n                            <i class=\"topbar-icon animated swing pi pi-fw pi-envelope\"></i>\n                            <span class=\"topbar-badge animated rubberBand\">5</span>\n                            <span class=\"topbar-item-name\">Messages</span>\n                        </a>\n                        <ul class=\"layout-menu\" [ngClass]=\"{'fadeInDown':!appMain.isMobile()}\">\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <img src=\"assets/layout/images/avatar1.png\" width=\"35\"/>\n                                    <span>Give me a call</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <img src=\"assets/layout/images/avatar2.png\" width=\"35\"/>\n                                    <span>Sales reports attached</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <img src=\"assets/layout/images/avatar3.png\" width=\"35\"/>\n                                    <span>About your invoice</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <img src=\"assets/layout/images/avatar2.png\" width=\"35\"/>\n                                    <span>Meeting today at 10pm</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <img src=\"assets/layout/images/avatar4.png\" width=\"35\"/>\n                                    <span>Out of office</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li #notifications [ngClass]=\"{'active-top-menu':appMain.activeTopbarItem === notifications}\">\n                        <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event,notifications)\">\n                            <i class=\"topbar-icon pi pi-fw pi-bell\"></i>\n                            <span class=\"topbar-badge animated rubberBand\">4</span>\n                            <span class=\"topbar-item-name\">Notifications</span>\n                        </a>\n                        <ul class=\"layout-menu\" [ngClass]=\"{'fadeInDown':!appMain.isMobile()}\">\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-sliders-h\"></i>\n                                    <span>Pending tasks</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-calendar\"></i>\n                                    <span>Meeting today at 3pm</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-download\"></i>\n                                    <span>Download documents</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                    <i class=\"pi pi-fw pi-bookmark\"></i>\n                                    <span>Book flight</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li #search class=\"search-item\" [ngClass]=\"{'active-top-menu':appMain.activeTopbarItem === search}\"\n                        (click)=\"appMain.onTopbarItemClick($event,search)\">\n                        <div class=\"topbar-search\">\n                            <input type=\"text\" placeholder=\"Search\" />\n                            <i class=\"pi pi-search\"></i>\n                        </div>\n                    </li>\n                    -->\n                </ul>\n            </div>\n        </div>\n    "
      })], AppTopBarComponent);
      /***/
    },

    /***/
    "7RVm":
    /*!********************************************************************************************************!*\
      !*** ./src/app/apps/reception/colisreception/nouveaucolisreception/nouveaucolisreception.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: NouveaucolisreceptionComponent */

    /***/
    function RVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveaucolisreceptionComponent", function () {
        return NouveaucolisreceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveaucolisreception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveaucolisreception.component.html */
      "hSu1");
      /* harmony import */


      var _nouveaucolisreception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveaucolisreception.component.css */
      "3WtB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveaucolisreceptionComponent = /*#__PURE__*/function () {
        function NouveaucolisreceptionComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveaucolisreceptionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'COLIS - CP';
          this.disabled = true;
          this.receptiondto = {};
          this.dateactuel = new Date();
          this.dommage = false;
          this.commentdommage = "N/A";
          this.envoisms = false;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveaucolisreceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.colisForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'datereception': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'dommage': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('N/A', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'envoisms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysdestinateur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/type/reception/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this14.typeactivites = [];
              response.forEach(function (element) {
                if (element['name'] == 'COLIS - CP') {
                  _this14.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this14.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this14.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - colis ");
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES PAYS
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/pays/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this14.countries = [];
              response.forEach(function (element) {
                _this14.countries.push({
                  name: element['name'],
                  code: element['code']
                });
              });
            }, function (error) {
              _this14.showWarn("La liste des pays n'a pas pu etre chargé ");
            });
          }
        }, {
          key: "save",
          value: function save(colisForm) {
            var _this15 = this;

            console.log(colisForm);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            this.receptiondto.reference = colisForm['reference'];
            this.receptiondto.name = 'COLIS - PERSONNEL';
            this.receptiondto.type = colisForm['typearticle'];
            this.receptiondto.adresse = colisForm['adresse'];
            this.receptiondto.nomsender = colisForm['nomsender'];
            this.receptiondto.telexpediteur = colisForm['telexpediteur'];
            this.receptiondto.namerecipient = colisForm['namerecipient'];
            this.receptiondto.telrecipient = colisForm['telrecipient'];
            this.receptiondto.email = colisForm['email'];
            this.receptiondto.datereception = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(colisForm['datereception'], format, locale);
            this.receptiondto.typearticle = this.typeactivite.code;
            this.receptiondto.dommage = this.dommage;
            this.receptiondto.commentaire = colisForm['commentaire'];
            this.receptiondto.envoisms = this.envoisms;
            this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
            this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/save", this.receptiondto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this15.showSuccess("Vous avez enregistrer avec success votre colis  !!! ");
            }, function (error) {
              _this15.showError(" une erreur c'est produit et le système n'a pas enregitré votre colis - La raison est voici : " + error.message);
            });
          }
          /**
           *
           * @param $event
           */

        }, {
          key: "dommageSelect",
          value: function dommageSelect($event) {
            console.log($event);

            if ($event.checked) {
              this.commentdommage = undefined;
            } else {
              this.commentdommage = 'N/A';
              this.colisForm.patchValue({
                commentaire: this.commentdommage
              });
            }
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveaucolisreceptionComponent;
      }();

      NouveaucolisreceptionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }];
      };

      NouveaucolisreceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nouveau-colisreception',
        template: _raw_loader_nouveaucolisreception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        styles: [_nouveaucolisreception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveaucolisreceptionComponent);
      /***/
    },

    /***/
    "7YNy":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/emsreception/nouveauemsreception/nouveauemsreception.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YNy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'une reception EMS\">\n                <form [formGroup]=\"emsForm\" (ngSubmit)=\"save(emsForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouvelle Reception - EMS (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!emsForm.controls['reference'].valid&&emsForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['nomsender'].valid&&emsForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!emsForm.controls['telexpediteur'].valid&&emsForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['namerecipient'].valid&&emsForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!emsForm.controls['telrecipient'].valid&&emsForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                      \n                                <li *ngIf=\"!emsForm.controls['datereception'].valid&&emsForm.controls['datereception'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir la date de reception car il est obligatoire\" ></p-message>   </li>\n                                                  \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date Reception <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-calendar [(ngModel)]=\"dateactuel\" name=\"datereception\" class=\"form-control\" formControlName=\"datereception\" ></p-calendar>                                \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom de l'expediteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                                                      \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur</label>\n                                                    <div class=\"p-col-12 p-md-12\">   \n                                                        <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays Expediteur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountryexpediteur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysexpediteur\">\n                                                        </p-dropdown>  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n                                \n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">                               \n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-md-12\">      \n                                            <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse mail </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"email\" pInputText   class=\"form-control\" formControlName=\"email\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\"> \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur  <span class=\"required\">*</span> </label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays du destinateur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">  \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountrydestinateur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysdestinateur\">\n                                                            \n                                                        </p-dropdown>                              \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Colis dommage</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"dommage\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"dommage\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Envoyé un sms de reception du colis</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"envoisms\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"envoisms\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\" *ngIf=\"dommage\">\n                                    <div class=\"p-col-12\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <textarea rows=\"5\"  pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentdommage\" formControlName=\"commentaire\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!emsForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "82Sa":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.notfound.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body notfound\">\n    <div class=\"exception-text\">\n        <div class=\"notfound-box\">\n            <span>Page</span>\n        </div>\n        <span class=\"notfound-text\">Not Found</span>\n    </div>\n    <div class=\"exception-panel\">\n        <div class=\"exception-image\">\n            <img src=\"assets/layout/images/exception/icon-error.png\" alt=\"avalon-ng\"/>\n        </div>\n        <div class=\"exception-panel-content\">\n            <div class=\"information-text\">\n                <h3>Page Not Found.</h3>\n                <p>Please contact system administrator.</p>\n            </div>\n            <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Go To DashBoard\"></button>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "8Gg0":
    /*!*****************************************************************************!*\
      !*** ./src/app/apps/vente/parametrage-vente/parametrage-vente.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ParametrageVenteComponent */

    /***/
    function Gg0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParametrageVenteComponent", function () {
        return ParametrageVenteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parametrage_vente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parametrage-vente.component.html */
      "lXEK");
      /* harmony import */


      var _parametrage_vente_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parametrage-vente.component.css */
      "dq/4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var ParametrageVenteComponent = /*#__PURE__*/function () {
        /**
         *
         * @param formBuilder
         * @param messageService
         * @param httpClient
         * @param router
         * @param tokenStorage
         */
        function ParametrageVenteComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, ParametrageVenteComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          /***
           *
           */

          this.msgs = [];
          this.itemsventes = [];
          /**
          *  Partie item
          */

          this.item = undefined;
          this.items = [];
          this.displayDialogitem = false;
        }

        _createClass(ParametrageVenteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.venteForm = this.formBuilder.group({
              'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'prix': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              'penalite': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
            this.itemventeForm = this.formBuilder.group({
              'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'prix': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              'penalite': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
          }
          /**
           *
           * @param typevente
           */

        }, {
          key: "save",
          value: function save(typevente) {
            var _this16 = this;

            var typeVente = {};
            typeVente.nom = typevente['type'];
            typeVente.prix = typevente['prix'];
            typeVente.penalite = typevente['penalite'];
            typeVente.items = this.items;
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/vente/parametrage/save", typeVente, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this16.venteForm.patchValue({
                type: undefined
              });

              _this16.venteForm.patchValue({
                prix: undefined
              });

              _this16.venteForm.patchValue({
                penalite: undefined
              });

              _this16.items = [];

              _this16.showSuccess("Vous avez enregistrer avec success votre colis  !!! ");
            }, function (error) {
              _this16.showError(" une erreur c'est produit et le système n'a pas enregitré votre colis - La raison est voici : " + error.message);
            });
          }
          /**
           *  Partie item
           */

        }, {
          key: "showDialogToAdditem",
          value: function showDialogToAdditem() {
            this.newitem = true;
            this.item = {};
            this.displayDialogitem = true;
          }
        }, {
          key: "saveitem",
          value: function saveitem() {
            var items = _toConsumableArray(this.items);

            if (this.newitem) {
              console.log(this.item);
              items.push(this.item);
            } else {
              items[this.items.indexOf(this.selecteditem)] = this.item;
            }

            this.items = items;
            this.item = null;
            console.log(this.items);
            this.displayDialogitem = false;
          }
        }, {
          key: "deleteitem",
          value: function deleteitem() {
            var index = this.items.indexOf(this.selecteditem);
            this.items = this.items.filter(function (val, i) {
              return i != index;
            });
            this.item = null;
            this.displayDialogitem = false;
          }
        }, {
          key: "onRowSelect",
          value: function onRowSelect(event) {
            this.newitem = false; //console.log(event);

            this.item = this.cloneitem(event.data);
            console.log(this.item);
            this.displayDialogitem = true;
          }
        }, {
          key: "cloneitem",
          value: function cloneitem(c) {
            var item = {};

            for (var prop in c) {
              item[prop] = c[prop];
            }

            console.log(item);
            return item;
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return ParametrageVenteComponent;
      }();

      ParametrageVenteComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      ParametrageVenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-parametrage-vente',
        template: _raw_loader_parametrage_vente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_parametrage_vente_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParametrageVenteComponent);
      /***/
    },

    /***/
    "8H/n":
    /*!****************************************************************!*\
      !*** ./src/app/apps/stocks/defaillant/defaillant.component.ts ***!
      \****************************************************************/

    /*! exports provided: DefaillantComponent */

    /***/
    function HN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaillantComponent", function () {
        return DefaillantComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_defaillant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./defaillant.component.html */
      "g0a/");
      /* harmony import */


      var _defaillant_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./defaillant.component.css */
      "dly9");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var DefaillantComponent = /*#__PURE__*/function () {
        function DefaillantComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, DefaillantComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.liststocks = undefined;
        }

        _createClass(DefaillantComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/stock/defaillant/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this17.liststocks = response;
              console.log(_this17.liststocks);
            }, function (error) {
              _this17.showWarn("Les articles en stocks  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
        }, {
          key: "search",
          value: function search(value) {
            console.log(value);
            this.router.navigate(['gestion/stocks/recherche?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869'], {
              queryParams: {
                id: '' + value["reference"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return DefaillantComponent;
      }();

      DefaillantComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      DefaillantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-defaillant',
        template: _raw_loader_defaillant_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_defaillant_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DefaillantComponent);
      /***/
    },

    /***/
    "8KQc":
    /*!***************************************************************************!*\
      !*** ./src/app/apps/vente/tableaubordvente/tableaubordvente.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TableaubordventeComponent */

    /***/
    function KQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableaubordventeComponent", function () {
        return TableaubordventeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tableaubordvente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tableaubordvente.component.html */
      "9uQL");
      /* harmony import */


      var _tableaubordvente_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tableaubordvente.component.css */
      "rOO2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TableaubordventeComponent = /*#__PURE__*/function () {
        function TableaubordventeComponent() {
          _classCallCheck(this, TableaubordventeComponent);
        }

        _createClass(TableaubordventeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TableaubordventeComponent;
      }();

      TableaubordventeComponent.ctorParameters = function () {
        return [];
      };

      TableaubordventeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tableaubordvente',
        template: _raw_loader_tableaubordvente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tableaubordvente_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TableaubordventeComponent);
      /***/
    },

    /***/
    "9Sdb":
    /*!*************************************************************************!*\
      !*** ./src/app/apps/reception/editreception/editreception.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EditreceptionComponent */

    /***/
    function Sdb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditreceptionComponent", function () {
        return EditreceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editreception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editreception.component.html */
      "TxMg");
      /* harmony import */


      var _editreception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editreception.component.css */
      "Sfeg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var EditreceptionComponent = /*#__PURE__*/function () {
        function EditreceptionComponent(formBuilder, messageService, tokenStorage, httpClient, router, activeroute, confirmationService) {
          _classCallCheck(this, EditreceptionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.tokenStorage = tokenStorage;
          this.httpClient = httpClient;
          this.router = router;
          this.activeroute = activeroute;
          this.confirmationService = confirmationService;
          this.typeactivites = [];
          this.msgs = []; //typearticle = 'EMS - EE';

          this.disabled = true;
          this.receptiondto = {};
          this.value = undefined;
          this.dateactuel = new Date();
          this.dommage = false;
          this.commentdommage = "N/A";
          this.envoisms = false;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(EditreceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.activeroute.queryParams.subscribe(function (params) {
              _this18.value = params.id;
            });
            this.emsForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'datereception': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'dommage': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('N/A', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'envoisms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysdestinateur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            var format = 'dd-MM-yyyy';
            var format_date = 'dd';
            var locale = 'en-US';
            var date = 'dd';
            var mont = 'MM';
            var year = 'yyyy';
            var reponse = this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/edit?gkey=" + this.value, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this18.receptiondto.reference = response['reference'];
              _this18.receptiondto.type = response['type'];
              _this18.receptiondto.adresse = response['adresse'];
              _this18.dommage = response['dommage'];
              _this18.envoisms = response['envoisms'];
              _this18.datereception = new Date(response['datereception']);
              console.log(_this18.datereception);
              _this18.receptiondto.nomsender = response['nomsender'];
              _this18.receptiondto.telexpediteur = response['telexpediteur'];
              _this18.receptiondto.namerecipient = response['namerecipient'];
              _this18.receptiondto.telrecipient = response['telrecipient'];
              _this18.receptiondto.dommage = _this18.dommage;
              _this18.receptiondto.commentaire = response['commentaire'];
              _this18.receptiondto.envoisms = _this18.envoisms;
              /*
              this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
              this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
              */

              _this18.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/pays/all", {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                  'Authorization': 'Bearer ' + _this18.tokenStorage.getToken()
                })
              }).subscribe(function () {
                var response2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                console.log(response2);
                _this18.countries = [];
                response2.forEach(function (element) {
                  if (element['code'] == response['paysexpediteur']) {
                    console.log(" je suis i dans selectedCountry expediteur");
                    _this18.selectedCountryexpediteur = {
                      name: element['name'],
                      code: element['code']
                    };
                  }

                  if (element['code'] == response['paysrecipient']) {
                    console.log(" je suis i dans selectedCountry destinateur");
                    _this18.selectedCountrydestinateur = {
                      name: element['name'],
                      code: element['code']
                    };
                  }

                  _this18.countries.push({
                    name: element['name'],
                    code: element['code']
                  });
                });
              }, function (error) {
                _this18.showWarn("La liste des pays n'a pas pu etre chargé ");
              });
            }, function (error) {
              _this18.showWarn("L'article a modifié n'a pas pu etre chargé, Voici la raison " + error.message);
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES PAYS
             */

            Promise.all([reponse]).then(function () {});
          }
        }, {
          key: "save",
          value: function save(emsForm) {
            var _this19 = this;

            console.log(emsForm);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            this.receptiondto.reference = emsForm['reference'];
            this.receptiondto.type = emsForm['typearticle'];
            this.receptiondto.adresse = emsForm['adresse'];
            this.receptiondto.nomsender = emsForm['nomsender'];
            this.receptiondto.telexpediteur = emsForm['telexpediteur'];
            this.receptiondto.namerecipient = emsForm['namerecipient'];
            this.receptiondto.telrecipient = emsForm['telrecipient'];
            this.receptiondto.email = emsForm['email'];
            this.receptiondto.datereception = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.datereception, format, locale);
            this.receptiondto.dommage = this.dommage;
            this.receptiondto.commentaire = emsForm['commentaire'];
            this.receptiondto.envoisms = this.envoisms;
            this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
            this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
            console.log(this.receptiondto);
            var reponse = this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/edit?id=" + this.value, this.receptiondto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this19.showSuccess("L'article a été mise à jour avec success !!! ");
            }, function (error) {
              _this19.showError(" une erreur c'est produit et le système n'a pas enregitré votre EMS - La raison est voici : " + error.message);
            });
          }
          /**
          *
          * @param $event
          */

        }, {
          key: "dommageSelect",
          value: function dommageSelect($event) {
            console.log($event);

            if ($event.checked) {
              this.commentdommage = undefined;
            } else {
              this.commentdommage = 'N/A';
              this.emsForm.patchValue({
                commentaire: this.commentdommage
              });
            }
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return EditreceptionComponent;
      }();

      EditreceptionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]
        }];
      };

      EditreceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-editreception',
        template: _raw_loader_editreception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]],
        styles: [_editreception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditreceptionComponent);
      /***/
    },

    /***/
    "9uQL":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/vente/tableaubordvente/tableaubordvente.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uQL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>tableaubordvente works!</p>\n";
      /***/
    },

    /***/
    "A8DN":
    /*!*****************************************************************************!*\
      !*** ./src/app/apps/reception/esuuq/nouveauesuuq/nouveauesuuq.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NouveauesuuqComponent */

    /***/
    function A8DN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauesuuqComponent", function () {
        return NouveauesuuqComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveauesuuq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveauesuuq.component.html */
      "bVFO");
      /* harmony import */


      var _nouveauesuuq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveauesuuq.component.css */
      "OwpF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveauesuuqComponent = /*#__PURE__*/function () {
        function NouveauesuuqComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveauesuuqComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'ESUUQ';
          this.disabled = true;
          this.receptiondto = {};
          this.dateactuel = new Date();
          this.dommage = false;
          this.commentdommage = "N/A";
          this.envoisms = false;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveauesuuqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.esuuqForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'datereception': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'dommage': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('N/A', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'envoisms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysdestinateur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/type/reception/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this20.typeactivites = [];
              response.forEach(function (element) {
                console.log(element);

                if (element['name'] == 'ESUUQ') {
                  _this20.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this20.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this20.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - esuuq ");
            });
            /**
            *  -- REQUETE POUR RECUPERER LA LISTE DES PAYS
            */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/pays/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this20.countries = [];
              response.forEach(function (element) {
                _this20.countries.push({
                  name: element['name'],
                  code: element['code']
                });
              });
            }, function (error) {
              _this20.showWarn("La liste des pays n'a pas pu etre chargé ");
            });
          }
        }, {
          key: "save",
          value: function save(esuuqForm) {
            var _this21 = this;

            console.log(esuuqForm);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            this.receptiondto.reference = esuuqForm['reference'];
            this.receptiondto.name = 'ESUUQ';
            this.receptiondto.type = esuuqForm['typearticle'];
            this.receptiondto.adresse = esuuqForm['adresse'];
            this.receptiondto.nomsender = esuuqForm['nomsender'];
            this.receptiondto.telexpediteur = esuuqForm['telexpediteur'];
            this.receptiondto.namerecipient = esuuqForm['namerecipient'];
            this.receptiondto.telrecipient = esuuqForm['telrecipient'];
            this.receptiondto.email = esuuqForm['email'];
            this.receptiondto.datereception = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(esuuqForm['datereception'], format, locale);
            this.receptiondto.typearticle = this.typeactivite.code;
            this.receptiondto.dommage = this.dommage;
            this.receptiondto.commentaire = esuuqForm['commentaire'];
            this.receptiondto.envoisms = this.envoisms;
            this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
            this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/save", this.receptiondto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this21.showSuccess("Vous avez enregistrer avec success votre esuuq  !!! ");
            }, function (error) {
              _this21.showError(" une erreur c'est produit et le système n'a pas enregitré votre esuuq - La raison est voici : " + error.message);
            });
          }
          /**
          *
          * @param $event
          */

        }, {
          key: "dommageSelect",
          value: function dommageSelect($event) {
            console.log($event);

            if ($event.checked) {
              this.commentdommage = undefined;
            } else {
              this.commentdommage = 'N/A';
              this.esuuqForm.patchValue({
                commentaire: this.commentdommage
              });
            }
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveauesuuqComponent;
      }();

      NouveauesuuqComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }];
      };

      NouveauesuuqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nouveauesuuq',
        template: _raw_loader_nouveauesuuq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        styles: [_nouveauesuuq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveauesuuqComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular-cli.json`.


      var environment = {
        production: false,
        url: 'http://localhost:8845'
      };
      /***/
    },

    /***/
    "B4RA":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/colisreception/colisreception.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B4RA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception EMS</h5>\n            <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/colis/nouveau?7a3239ca19232f36f9c478bd8a7d4108f5be5df856fe2d95570b150090e98596\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Reception COLIS - CP \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td> {{ems.datereception}} </td>\n                        <td>  <span *ngIf=\"ems.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                        </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "B9Hl":
    /*!****************************************************************!*\
      !*** ./src/app/apps/envoi/recommande/recommande.component.css ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function B9Hl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbW1hbmRlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "BqQa":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/reception/ordinaire/ordinaire.component.ts ***!
      \*****************************************************************/

    /*! exports provided: OrdinaireComponent */

    /***/
    function BqQa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdinaireComponent", function () {
        return OrdinaireComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ordinaire_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ordinaire.component.html */
      "M3UH");
      /* harmony import */


      var _ordinaire_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ordinaire.component.css */
      "3haZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var OrdinaireComponent = /*#__PURE__*/function () {
        function OrdinaireComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, OrdinaireComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listems = undefined;
        }

        _createClass(OrdinaireComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/ordinaire", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this22.listems = response;
              console.log(_this22.listems);
            }, function (error) {
              _this22.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/reception/edition?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return OrdinaireComponent;
      }();

      OrdinaireComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      OrdinaireComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ordinairereception',
        template: _raw_loader_ordinaire_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_ordinaire_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrdinaireComponent);
      /***/
    },

    /***/
    "Bxr+":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.help.component.ts ***!
      \*********************************************/

    /*! exports provided: AppHelpComponent */

    /***/
    function Bxr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHelpComponent", function () {
        return AppHelpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_help_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.help.component.html */
      "J7uU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppHelpComponent = function AppHelpComponent() {
        _classCallCheck(this, AppHelpComponent);
      };

      AppHelpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-help',
        template: _raw_loader_app_help_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppHelpComponent);
      /***/
    },

    /***/
    "CfVz":
    /*!*******************************************************!*\
      !*** ./src/app/demo/view/formlayoutdemo.component.ts ***!
      \*******************************************************/

    /*! exports provided: FormLayoutDemoComponent */

    /***/
    function CfVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormLayoutDemoComponent", function () {
        return FormLayoutDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formlayoutdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formlayoutdemo.component.html */
      "48V0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormLayoutDemoComponent = function FormLayoutDemoComponent() {
        _classCallCheck(this, FormLayoutDemoComponent);

        this.selectedState = null;
        this.states = [{
          name: 'Arizona',
          code: 'Arizona'
        }, {
          name: 'California',
          value: 'California'
        }, {
          name: 'Florida',
          code: 'Florida'
        }, {
          name: 'Ohio',
          code: 'Ohio'
        }, {
          name: 'Washington',
          code: 'Washington'
        }];
        this.cities1 = [];
        this.cities2 = [];
        this.city1 = null;
        this.city2 = null;
      };

      FormLayoutDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_formlayoutdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FormLayoutDemoComponent);
      /***/
    },

    /***/
    "CuUz":
    /*!************************************************!*\
      !*** ./src/app/demo/service/countryservice.ts ***!
      \************************************************/

    /*! exports provided: CountryService */

    /***/
    function CuUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CountryService = /*#__PURE__*/function () {
        function CountryService(http) {
          _classCallCheck(this, CountryService);

          this.http = http;
        }

        _createClass(CountryService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.http.get('assets/demo/data/countries.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CountryService;
      }();

      CountryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CountryService);
      /***/
    },

    /***/
    "DBnK":
    /*!**************************************************************************!*\
      !*** ./src/app/apps/parametrage/utilisateurs/utilisateurs.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function DBnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1dGlsaXNhdGV1cnMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "DByU":
    /*!***************************************!*\
      !*** ./src/app/app.menu.component.ts ***!
      \***************************************/

    /*! exports provided: AppMenuComponent */

    /***/
    function DByU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function () {
        return AppMenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppMenuComponent = /*#__PURE__*/function () {
        function AppMenuComponent() {
          _classCallCheck(this, AppMenuComponent);
        }

        _createClass(AppMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model = [{
              label: 'Favorites',
              icon: 'pi pi-home',
              items: [{
                label: 'Dashboards',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/dashboards'],
                items: [{
                  label: 'Generic',
                  icon: 'pi pi-fw pi-home',
                  routerLink: ['/dashboards/generic']
                }]
              }]
            },
            /*
            {
                label: 'Start', icon: 'pi pi-download',
                items: [
                    {
                        label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/login']
                    },
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
                    }
                ]
            },
            */

            /**
             * Gestion de parametrage
             */
            {
              label: 'Parametrage',
              icon: 'pi pi-step-forward-alt',
              items: [{
                label: 'Utilisateurs',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/parametrage/utilisateurs']
              }, {
                label: 'Gestion d\'access ',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/parametrage/gestion/access']
              }, {
                label: 'Categorie',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/parametrage/categorie']
              }]
            },
            /**
             * Gestion d'envoi
             */
            {
              label: 'Envoie de Colis',
              icon: 'pi pi-step-forward-alt',
              items: [{
                label: 'EMS - EE',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/gestion/envoi/ems?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4']
              }, {
                label: 'Colis - CP',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/envoi/colis?3898a49c054648fde86b609be6c7ae3f6fae4ee84cde8bc11e3310599d5df9eb']
              }, {
                label: 'Recommandé',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/envoi/recommande?b592fc0e8889a74aa96f3d2ff8999acc1fd6bfba03f6c8d05d0ec19c3454a136']
              }, {
                label: 'Tableau de bord',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/envoi/tableau de bord?7b7934aa5a94823fdb1a27b4a19bf73b515d43e487bd0b78c8bc7ecfc6ca67e3']
              }]
            },
            /**
             * Gestion de reception
             */
            {
              label: 'Reception',
              icon: 'pi pi-step-forward-alt',
              items: [{
                label: 'EMS - EE',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/gestion/reception/ems?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4']
              }, {
                label: 'Colis - CP',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/colis?7a3239ca19232f36f9c478bd8a7d4108f5be5df856fe2d95570b150090e98596']
              }, {
                label: 'Recommandé - RR',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/recommande?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50']
              }, {
                label: 'Ordinaire - N/A',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/ordinaire?28660c74f421a0d5636ae1716a62433e14a6a19fd672f93b9bd98b6b177d07ff']
              }, {
                label: 'Esuuq',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/esuuq?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50']
              }, {
                label: 'Tableau de bord',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/tableau de bord?3e8429afaf5fc4d9770e124842011a54abaf8f61f157d86c14112ce91ca0194b']
              }]
            },
            /**
             * Gestion de reception
             */
            {
              label: 'Inventaire',
              icon: 'pi pi-step-forward-alt',
              items: [{
                label: 'Recherche un produit',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/gestion/stocks/recherche?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869']
              }, {
                label: 'En stock',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/gestion/stocks/en stock?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869']
              }, {
                label: 'Colis defaillant',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/stocks/defaillant?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869']
              }, {
                label: 'Tableau de bord',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/colis en stocks']
              }]
            },
            /**
             * Gestion de reception--
             */
            {
              label: 'Livraison',
              icon: 'pi pi-step-forward-alt',
              items: [{
                label: 'Nouveau Livraison',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/gestion/reception/livraison/nouveau?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab']
              }, {
                label: 'Livraison Reussi',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/livraison/reussi?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab']
              }, {
                label: 'Livraison echoué',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/reception/livraison/echoue?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab']
              }, {
                label: 'Tableau de bord',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/colis en stocks']
              }]
            },
            /**
             * Gestion d'inventaire
             */
            {
              label: 'Ventes',
              icon: 'pi pi-step-forward-alt',
              items: [{
                label: 'Parametrage',
                icon: 'pi pi-fw pi-forward',
                routerLink: ['/gestion/vente/parametrage?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda']
              }, {
                label: 'Nouveau vente',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/vente/nouveau?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda']
              }, {
                label: 'Rapports',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/vente/rapports?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda']
              }, {
                label: 'Tabbleau de bord',
                icon: 'pi pi-fw pi-fast-backward',
                routerLink: ['/gestion/vente/tableau de bord?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda']
              }]
            }];
          }
        }]);

        return AppMenuComponent;
      }();

      AppMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: "\n    <ul class=\"layout-menu layout-main-menu clearfix\">\n        <li app-menuitem *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\"></li>\n    </ul>\n    "
      })], AppMenuComponent);
      /***/
    },

    /***/
    "EPQX":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/stocks/enstock/enstock.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EPQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception stocks</h5>\n            <p-table #dt [value]=\"liststocks\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/ordinaire/nouveau?28660c74f421a0d5636ae1716a62433e14a6a19fd672f93b9bd98b6b177d07ff\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Articles en stocks \" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th style=\"width: 10%;\"> Reference </th>\n                        <th style=\"width: 8%;\">Date </th>\n                        <th style=\"width: 5%;\"> Etat </th>\n                        <th style=\"width: 10%;\"> Type </th>\n                        <th style=\"width: 15%;\"> Adresse </th>\n                        <th style=\"width: 10%;\"> Expediteur </th>\n                        <th  style=\"width: 10%;\"> Destinateur </th>\n                        <th  style=\"width: 10%;\"> Telephone 2 </th>\n                        \n                        <th  style=\"width: 10%;\"> Editeur </th>\n                        <th style=\"width: 10%;\"> Edition </th>\n                        \n                        <th style=\"width: 5%\" ></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-stocks>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{stocks.reference}} </td>\n                        <td> {{stocks.datereception}} </td>\n                        <td>\n                            <span *ngIf=\"stocks.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n\n                        </td>\n                        <td>  {{stocks.type}} </td>\n                        <td>  {{stocks.adresse}} </td>\n                        <td>  {{stocks.nomsender}} </td>\n                        <td>  {{stocks.namerecipient}} </td>\n                        <td>  {{stocks.telrecipient}} </td>\n\n                        <td>  {{stocks.updated.username}} </td>\n                        <td style=\"width: 8%;\">  {{stocks.updatedat}} </td>\n\n                        <td style=\"text-align: center\" style=\"width: 5%;\">\n                            <button (click)=\"search(stocks)\" pButton type=\"button\" class=\"p-button-primary\" icon=\"pi pi-eye\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "EX1s":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/colis/reception/reception.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EX1s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>reception works!</p>\n";
      /***/
    },

    /***/
    "EbaP":
    /*!**************************************************************************!*\
      !*** ./src/app/apps/envoi/colis/editioncolis/editioncolis.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function EbaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0aW9uY29saXMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "FLHs":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/livraison/livraisonreussi/livraisonreussi.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FLHs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Livraison  reussi </h5>\n            <p-table #dt [value]=\"liste\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['reference.reference']\">\n               \n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-livre>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{livre.reference}} </td>\n                        <td> {{livre.reception.datesortie}} </td>\n                        \n                        <td>  {{livre.etat}} </td> \n                        <td>  {{livre.reception.type}} </td> \n                        \n                        <td>  {{livre.reception.namerecipient}} </td>\n                        <td>  {{livre.reception.telrecipient}} </td>\n\n                        <td> \n                            \n                            <span *ngIf=\"livre.updated; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span >{{livre.updated.username}}  </span></ng-template>\n                            <ng-template #elseBlock><span>{{livre.created.username}} </span></ng-template>\n\n                        </td>\n                        <td> \n                            \n                            <span *ngIf=\"livre.updatedat; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span >{{livre.updatedat}}  </span></ng-template>\n                            <ng-template #elseBlock><span>{{livre.createdat}} </span></ng-template>\n                        </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(livre)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "FZSD":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/vente/parametrage/parametrage.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FZSD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>parametrage works!</p>\n";
      /***/
    },

    /***/
    "G5Hk":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.login.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function G5Hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"login-body\">\n    <div class=\"login-image\"></div>\n    <div class=\"card login-panel p-fluid\">\n        <div class=\"login-panel-content\">            \n            <form id=\"login-form\" [formGroup]=\"authForm\" (ngSubmit)=\"connexion(authForm.value);\" >   \n                <div class=\"p-grid\">\n                    <div class=\"p-col-5\" style=\"text-align:left;\">\n                        <img src=\"assets/layout/images/logo.png\"  class=\"logo\" alt=\"avalon-ng\"/>\n                    </div>\n                    <div class=\"p-col-12\" style=\"text-align:left;\">\n                        <h2 class=\"welcome-text\">Bienvenue sur E-Postal Djibouti</h2>\n                        <span class=\"guest-sign-in\">Connecté vous sur le reseau e-postal </span>\n                    </div>\n                    <div class=\"p-col-12\" style=\"text-align:left;\">\n                        <label class=\"login-label\">Username</label>\n                        <div class=\"login-input\">\n                            <input type=\"text\" placeholder=\"Username\" class=\"form-control\" name=\"username\"  formControlName=\"username\"   required  pInputText />\n                        </div>\n                    </div>\n                    <div class=\"p-col-12\" style=\"text-align:left;\">\n                        <label class=\"login-label\">Password</label>\n                        <div class=\"login-input\">\n                            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" name=\"password\"   formControlName=\"password\" required pPassword />\n                        </div>\n                    </div>\n                    <div *ngIf=\"isLoginFailed\">\n                        <span style=\"color:red;\"> Veuillez revoir votre mot de passe ou le username</span>\n                    </div>\n\n                    <div class=\"p-col-12 p-md-6 button-pane\">\n                        <button pButton  label=\"Sign In\"></button>\n                    </div>\n                    <div class=\"p-col-12 p-md-6 link-pane\">\n                        <button class=\"p-link\">J'ai oublié mon mot de passe ?</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "GFK6":
    /*!*********************************************************!*\
      !*** ./src/app/apps/reception/esuuq/esuuq.component.ts ***!
      \*********************************************************/

    /*! exports provided: EsuuqComponent */

    /***/
    function GFK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EsuuqComponent", function () {
        return EsuuqComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_esuuq_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./esuuq.component.html */
      "L8Tk");
      /* harmony import */


      var _esuuq_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./esuuq.component.css */
      "rfDl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var EsuuqComponent = /*#__PURE__*/function () {
        function EsuuqComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, EsuuqComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listesuuq = undefined;
        }

        _createClass(EsuuqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/esuuq", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this23.listesuuq = response;
              console.log(_this23.listesuuq);
            }, function (error) {
              _this23.showWarn("Les articles esuuq  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer esuuq - Redirection vers la page de edition d'un nouveau esuuq
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/reception/edition?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return EsuuqComponent;
      }();

      EsuuqComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      EsuuqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-esuuq',
        template: _raw_loader_esuuq_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_esuuq_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EsuuqComponent);
      /***/
    },

    /***/
    "GKnm":
    /*!************************************************!*\
      !*** ./src/app/pages/app.invoice.component.ts ***!
      \************************************************/

    /*! exports provided: AppInvoiceComponent */

    /***/
    function GKnm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInvoiceComponent", function () {
        return AppInvoiceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.invoice.component.html */
      "vGzH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppInvoiceComponent = /*#__PURE__*/function () {
        function AppInvoiceComponent() {
          _classCallCheck(this, AppInvoiceComponent);
        }

        _createClass(AppInvoiceComponent, [{
          key: "print",
          value: function print() {
            window.print();
          }
        }]);

        return AppInvoiceComponent;
      }();

      AppInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-invoice',
        template: _raw_loader_app_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppInvoiceComponent);
      /***/
    },

    /***/
    "GgHU":
    /*!*********************************************************************!*\
      !*** ./src/app/apps/vente/rapportsvente/rapportsvente.component.ts ***!
      \*********************************************************************/

    /*! exports provided: RapportsventeComponent */

    /***/
    function GgHU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RapportsventeComponent", function () {
        return RapportsventeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rapportsvente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rapportsvente.component.html */
      "Ilpl");
      /* harmony import */


      var _rapportsvente_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rapportsvente.component.css */
      "isJU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RapportsventeComponent = /*#__PURE__*/function () {
        function RapportsventeComponent() {
          _classCallCheck(this, RapportsventeComponent);
        }

        _createClass(RapportsventeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RapportsventeComponent;
      }();

      RapportsventeComponent.ctorParameters = function () {
        return [];
      };

      RapportsventeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rapportsvente',
        template: _raw_loader_rapportsvente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rapportsvente_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RapportsventeComponent);
      /***/
    },

    /***/
    "HNsU":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/ems/ems.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function HNsU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Envoie EMS</h5>\n            <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/envoi/ems/nouveau?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Envoie EMS -EE \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th> Nom </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Telephone 1 </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td>  {{ems.name}} </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.telexpediteur}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" class=\"p-button-success\" pButton type=\"button\"  icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "HflD":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/livraison/livraison/livraison.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HflD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>livraison works!</p>\n";
      /***/
    },

    /***/
    "IFMV":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/recommande/recommande.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IFMV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Envoie Recommande</h5>\n            <p-table #dt [value]=\"listrecommande\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/envoi/recommande/nouveau?b592fc0e8889a74aa96f3d2ff8999acc1fd6bfba03f6c8d05d0ec19c3454a136\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Envoie recommande -RR \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th> Nom </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Telephone 1 </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-recommande>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{recommande.reference}} </td>\n                        <td>  {{recommande.name}} </td>\n                        <td>  {{recommande.type}} </td>\n                        <td>  {{recommande.adresse}} </td>\n                        <td>  {{recommande.nomsender}} </td>\n                        <td>  {{recommande.telexpediteur}} </td>\n                        <td>  {{recommande.namerecipient}} </td>\n                        <td>  {{recommande.telrecipient}} </td>\n\n                        <td>  {{recommande.updated.username}} </td>\n                        <td>  {{recommande.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(recommande)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "IX92":
    /*!*******************************************************!*\
      !*** ./src/app/apps/stocks/suivi/suivi.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function IX92(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWl2aS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "IXcB":
    /*!******************************************************************!*\
      !*** ./src/app/apps/vente/parametrage/parametrage.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function IXcB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0cmFnZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Ilpl":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/vente/rapportsvente/rapportsvente.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ilpl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>rapportsvente works!</p>\n";
      /***/
    },

    /***/
    "J7uU":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.help.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function J7uU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid help-page\">\n    <div class=\"p-col-12\">\n        <div class=\"card help-search\">\n            <div class=\"help-search-content\">\n                <h1>We are here to help</h1>\n                <div class=\"search-container\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" placeholder=\"Search\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n\t\t\t\t<h4>General</h4>\n                <p-accordion>\n                    <p-accordionTab header=\"Header I\" [selected]=\"true\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\t\t\t\t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t\t\t\t\t\tExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Header II\">\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n\t\t\t\t\t\t\tarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n\t\t\t\t\t\t\tvoluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Header III\">\n                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n\t\t\t\t\t\t\tcupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n\t\t\t\t\t\t\tNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n                    </p-accordionTab>\n                </p-accordion>\n\n                <h4>FAQ</h4>\n                <p-accordion>\n                    <p-accordionTab header=\"FAQ I\" [selected]=\"true\">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\t\t\t\t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\t\t\t\t\t\t\tExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </p-accordionTab>\n                    <p-accordionTab header=\"FAQ II\">\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n\t\t\t\t\t\t\tarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\n\t\t\t\t\t\t\tvoluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\n                    </p-accordionTab>\n                    <p-accordionTab header=\"FAQ III\">\n                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\n\t\t\t\t\t\t\tcupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\n\t\t\t\t\t\t\tNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\n                    </p-accordionTab>\n                </p-accordion>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h4>System Status</h4>\n            <p>All services are operational.</p>\n            <div class=\"status-bars\">\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar status-bar-failure\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n                <div class=\"status-bar\"></div>\n            </div>\n            <div class=\"status-bar-footer\">\n                <span>30 Days Ago</span>\n                <span>Today</span>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h4>Articles</h4>\n            <p>Recent articles from our team.</p>\n            <div class=\"blog-posts\">\n                <div class=\"blog-post\">\n                    <div class=\"blog-text\">\n                        <h1>Building Revenue With Confidence</h1>\n                        <span>And avoiding failures</span>\n                    </div>\n                    <div class=\"blog-profile\">\n                        <img src=\"assets/demo/images/avatar/amyelsner.png\" alt=\"apollo\" />\n                    </div>\n                </div>\n\n                <div class=\"blog-post\">\n                    <div class=\"blog-text\">\n                        <h1>Latest Marketing Trends</h1>\n                        <span>Don't miss out our tips</span>\n                    </div>\n                    <div class=\"blog-profile\">\n                        <img src=\"assets/demo/images/avatar/annafali.png\" alt=\"apollo\" />\n                    </div>\n                </div>\n\n                <div class=\"blog-post\">\n                    <div class=\"blog-text\">\n                        <h1>How To Reach Your Audience</h1>\n                        <span>10 ways to increase your efficiency</span>\n                    </div>\n                    <div class=\"blog-profile\">\n                        <img src=\"assets/demo/images/avatar/stephenshaw.png\" alt=\"apollo\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n </div>\n";
      /***/
    },

    /***/
    "JL6J":
    /*!*******************************************************************!*\
      !*** ./src/app/apps/vente/nouveauvente/nouveauvente.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NouveauventeComponent */

    /***/
    function JL6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauventeComponent", function () {
        return NouveauventeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveauvente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveauvente.component.html */
      "asCk");
      /* harmony import */


      var _nouveauvente_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveauvente.component.css */
      "4VL1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveauventeComponent = /*#__PURE__*/function () {
        //datevente:Date = {};

        /**
         *
         * @param formBuilder
         * @param messageService
         * @param httpClient
         * @param router
         * @param tokenStorage
         */
        function NouveauventeComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveauventeComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          /***
           *
           */

          this.msgs = [];
          this.typeventes = undefined;
          this.typevente = undefined;
          this.listventes = undefined;
          this.itemstypeventes = undefined;
          this.itemstypevente = undefined;
          this.penalite = false;
          this.disabled = true;
        }

        _createClass(NouveauventeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.venteForm = this.formBuilder.group({
              //'nom': new FormControl('', Validators.required),
              'datevente': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'typevente': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'itemstypevente': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'prix': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'penalite': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'penalitemontant': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/vente/parametrage/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this24.typeventes = [];
              response.forEach(function (element) {
                _this24.typeventes.push({
                  code: element,
                  name: element['nom']
                });
              });
            }, function (error) {
              _this24.showError(" une erreur c'est produit et le système selectionner le type de ventes - La raison est voici : " + error.message);
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/vente/by/day", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this24.listventes = response;
            }, function (error) {
              _this24.showError(" une erreur c'est produit et le système selectionner le type de ventes - La raison est voici : " + error.message);
            });
          }
        }, {
          key: "change",
          value: function change($event) {
            var _this25 = this;

            /**
             *  -- liste items
             */
            this.itemstypeventes = [];
            $event.value.code['items'].forEach(function (element) {
              _this25.itemstypeventes.push({
                code: element,
                name: element['nom']
              });
            });
          }
        }, {
          key: "penaliteEvent",
          value: function penaliteEvent($event) {
            console.log($event);
            console.log(this.penalite);

            if ($event.checked) {
              this.disabled = false;
            } else {
              this.disabled = true;
            }
          }
        }, {
          key: "save",
          value: function save(value) {
            var _this26 = this;

            console.log(value);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            var vente = {};
            vente.typevente = value['typevente']['code'];
            vente.datevente = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(value['datevente'], format, locale);

            if (value['itemstypevente']) {
              vente.itemstypevente = value['itemstypevente']['code'];
              vente.nom = value['itemstypevente']['name'];
            } else {
              vente.nom = value['typevente']['name'];
            }

            vente.prix = value['prix'];

            if (value['penalitemontant']) {
              vente.penalite = value['penalitemontant'];
            }

            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/vente/save", vente, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this26.venteForm.patchValue({
                type: undefined
              });

              _this26.venteForm.patchValue({
                prix: undefined
              });

              _this26.venteForm.patchValue({
                penalite: undefined
              });

              _this26.typevente = undefined;
              _this26.itemstypevente = undefined; //this.items = [];

              _this26.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/vente/by/day", {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                  'Authorization': 'Bearer ' + _this26.tokenStorage.getToken()
                })
              }).subscribe(function (response) {
                _this26.listventes = response;
              }, function (error) {
                _this26.showError(" une erreur c'est produit et le système selectionner le type de ventes - La raison est voici : " + error.message);
              });

              _this26.showSuccess("Vous avez enregistrer avec success votre colis  !!! ");
            }, function (error) {
              _this26.showError(" une erreur c'est produit et le système n'a pas enregitré votre colis - La raison est voici : " + error.message);
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveauventeComponent;
      }();

      NouveauventeComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }];
      };

      NouveauventeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nouveau-vente',
        template: _raw_loader_nouveauvente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        styles: [_nouveauvente_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveauventeComponent);
      /***/
    },

    /***/
    "JL7W":
    /*!**************************************************************!*\
      !*** ./src/app/apps/envoi/ems/nouveau/nouveau.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function JL7W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".required{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdXZlYXUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJub3V2ZWF1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWR7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "JN9M":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/stocks/recherche/recherche.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JN9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p-fieldset legend=\"Formulaire de creation d'une reception recherche\">\n    <form [formGroup]=\"rechercheForm\" (ngSubmit)=\"findResultat(rechercheForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n        <p-panel header=\"Recherche un article \" class=\"panel-work\">\n            <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                <span class=\"required\">* : champs obligatoire à remplir</span> \n                <ul>\n                    <li *ngIf=\"!rechercheForm.controls['reference'].valid&&rechercheForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                \n                </ul>\n                <div class=\"p-fluid\">\n                    <div class=\"p-field p-grid\">\n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-6\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">                                           \n                                        <p-autoComplete  ngModel name=\"reference\" class=\"ui-g-12\" [suggestions]=\"string\" (completeMethod)=\"searchByReference($event)\" [minLength]=\"3\" formControlName=\"reference\">\n                                        </p-autoComplete>                                   \n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"p-col-2\">                              \n                                <div class=\"p-field p-grid\">\n                                    <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!rechercheForm.valid\"></button>\n                                </div>\n                            </div>\n\n                        \n                    </div>\n                </div>\n\n                <hr/>\n\n                             \n            </div>\n        </p-panel>\n    </form>\n    <div class=\"p-fluid\"  *ngIf=\"article\"  [multiple]=\"true\">\n        <p-accordion>\n            <p-accordionTab header=\"Statut Actuel de l'article\" [selected]=\"true\">\n               \n               <div class=\"p-fluid\">\n                   \n                    <div class=\"p-field p-grid\">\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Etat du Colis <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-4\">\n                            <span *ngIf=\"article.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                            \n                        </div>\n                    </div>\n\n                   <div class=\"p-field p-grid\">\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                           \n                        <div class=\"p-col-4\">\n                            {{article.reference}}\n                        </div>\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Categorie <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                           \n                        <div class=\"p-col-2\">\n                            {{article.type}}\n                        </div>\n                    </div>\n\n                    \n                   <div class=\"p-field p-grid\">\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date de reception  <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-4\">\n                            {{article.datereception}}\n                        </div>\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date de sortie <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-2\">\n                            {{article.datesortie}}\n                        </div>\n                    </div>\n\n                    <div class=\"p-field p-grid\">\n                         <div class=\"p-col-2\">\n                             <div class=\"p-field p-grid\">\n                                 <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom d'expediteur  <span class=\"required\">*</span></label>\n                             </div>\n                         </div>\n                         \n                         <div class=\"p-col-4\">\n                             {{article.nomsender}}\n                         </div>\n                         <div class=\"p-col-2\">\n                             <div class=\"p-field p-grid\">\n                                 <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur </label>\n                             </div>\n                         </div>\n                         \n                         <div class=\"p-col-2\">\n                             {{article.telexpediteur}}\n                         </div>\n                     </div>\n\n                     <div class=\"p-field p-grid\">\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse mail de lexpediteur </label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-4\">\n                            {{article.email}}\n                        </div>\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse de l'expediteur </label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-2\">\n                            {{article.adresse}}\n                        </div>\n                    </div>\n\n\n                    <div class=\"p-field p-grid\">\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur  <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-4\">\n                            {{article.namerecipient}}\n                        </div>\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur </label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-2\">\n                            {{article.telrecipient}}\n                        </div>\n                    </div>\n\n                    <div class=\"p-field p-grid\" *ngIf=\"article.dommage\">\n                        <div class=\"p-col-2\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Commentaire  <span class=\"required\">*</span></label>\n                            </div>\n                        </div>\n                        \n                        <div class=\"p-col-6\" class=\"required\">\n                            {{article.commentaire}}\n                        </div>\n                    </div>\n                </div>\n                           \n            </p-accordionTab>\n            <p-accordionTab header=\"Historique \">\n                <p-table #dt [value]=\"historiques\" >\n\n                    <ng-template pTemplate=\"header\">\n                        <tr>               \n                            <th style=\"size:20%\"> Reference </th>\n                            <th> Type reception </th>\n                            <th> Statut </th>\n                            <th> Commentaire </th>\n                            <th> Utilistaeur </th>\n                            <th> Cteated at </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-historique>\n                        <tr class=\"p-selectable-row\">\n                            <td  style=\"size:20%\"> {{historique.reference}} </td>\n                            <td> {{historique.article.name}} </td>\n                            <td> {{historique.statut}} </td>\n                            <td> {{historique.commentaire}} </td>\n\n                            <td> {{historique.created.username}} </td>\n                            <td> {{historique.createdat}} </td>\n    \n                        </tr>\n                    </ng-template>\n                    \n                </p-table>\n\n            </p-accordionTab>\n            <p-accordionTab header=\"Alarme associe à l'article\">\n                \n                <p-table #dt [value]=\"alarmes\" >\n\n                    <ng-template pTemplate=\"header\">\n                        <tr>               \n                            <th style=\"size:20%\"> Reference </th>\n                            <th> Type reception </th>\n                            <th> Statut </th>\n                            <th> Type Arlame </th>\n                            <th> Utilistaeur </th>\n                            <th> Cteated at </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-alarme>\n                        <tr class=\"p-selectable-row\" >\n                            <td  style=\"size:20%\"> {{alarme.reference}} </td>\n                            <td> {{alarme.article.type}} </td>\n                            <td>\n                                <span *ngIf=\"alarme.status; then thenBlock else elseBlock\"> </span>\n                                <ng-template #thenBlock> <span style=\"background-color:brown;\">{{alarme.status}} </span></ng-template>\n                                <ng-template #elseBlock><span >{{alarme.status}} </span></ng-template>\n    \n                            </td>\n                            <td> {{alarme.typeAlarme}} </td>\n\n                            <td> {{alarme.created.username}} </td>\n                            <td> {{alarme.createdat}} </td>\n    \n                        </tr>\n                    </ng-template>\n                    \n                </p-table>   \n            </p-accordionTab>\n        </p-accordion>\n    </div>\n\n</p-fieldset>";
      /***/
    },

    /***/
    "KaQX":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.accessdenied.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function KaQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body access\">\n    <div class=\"exception-text\">\n        <div class=\"exception-box\">\n            <span>Access</span>\n        </div>\n        <span>Denied</span>\n    </div>\n    <div class=\"exception-panel\">\n        <div class=\"exception-image\">\n            <img src=\"assets/layout/images/exception/icon-error.png\" alt=\"avalon-ng\"/>\n        </div>\n        <div class=\"exception-panel-content\">\n            <div class=\"information-text\">\n                <h3>Access denied to this resource.</h3>\n                <p>You don't have the necessary permission.</p>\n            </div>\n            <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Go To DashBoard\"></button>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "KgBC":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/tableaubord/tableaubord.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KgBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n\n\n<div class=\"dashboard p-grid\">    \n \n\n\n    <div class=\"p-col-12 p-lg-6\">\n        <p-chart type=\"pie\" [data]=\"tableaubord1\" [options]=\"chartOptions\"  [style]=\"{'width': '40%'}\"></p-chart>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <p-chart type=\"line\" [data]=\"basicData\" [options]=\"basicOptions\"></p-chart>\n    </div>\n    <hr/>\n    <div class=\"p-col-12 p-lg-12\">\n        <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/envoi/ems/nouveau?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Envoie EMS -EE \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th> Nom </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Telephone 1 </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td>  {{ems.name}} </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.telexpediteur}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" class=\"p-button-success\" pButton type=\"button\"  icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n</div>\n";
      /***/
    },

    /***/
    "L7Y2":
    /*!******************************************************************************!*\
      !*** ./src/app/apps/stocks/tableaubordstocks/tableaubordstocks.component.ts ***!
      \******************************************************************************/

    /*! exports provided: TableaubordstocksComponent */

    /***/
    function L7Y2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableaubordstocksComponent", function () {
        return TableaubordstocksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tableaubordstocks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tableaubordstocks.component.html */
      "+rFO");
      /* harmony import */


      var _tableaubordstocks_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tableaubordstocks.component.css */
      "g06s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TableaubordstocksComponent = /*#__PURE__*/function () {
        function TableaubordstocksComponent() {
          _classCallCheck(this, TableaubordstocksComponent);
        }

        _createClass(TableaubordstocksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TableaubordstocksComponent;
      }();

      TableaubordstocksComponent.ctorParameters = function () {
        return [];
      };

      TableaubordstocksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tableaubordstocks',
        template: _raw_loader_tableaubordstocks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tableaubordstocks_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TableaubordstocksComponent);
      /***/
    },

    /***/
    "L8Tk":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/esuuq/esuuq.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L8Tk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception esuuq</h5>\n            <p-table #dt [value]=\"listesuuq\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/esuuq/nouveau?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Reception esuuq -EE \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-esuuq>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{esuuq.reference}} </td>\n                        <td> {{esuuq.datereception}} </td>\n                        <td>\n                            <span *ngIf=\"esuuq.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n\n                        </td>\n                        <td>  {{esuuq.type}} </td>\n                        <td>  {{esuuq.adresse}} </td>\n                        <td>  {{esuuq.nomsender}} </td>\n                        <td>  {{esuuq.namerecipient}} </td>\n                        <td>  {{esuuq.telrecipient}} </td>\n\n                        <td>  {{esuuq.updated.username}} </td>\n                        <td>  {{esuuq.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(esuuq)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "LwCC":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.error.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function LwCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body error\">\n    <div class=\"exception-text\">\n        <div class=\"exception-box\">\n            <span>Error</span>\n        </div>\n        <span>Occured</span>\n    </div>\n    <div class=\"exception-panel\">\n        <div class=\"exception-image\">\n            <img src=\"assets/layout/images/exception/icon-error.png\" alt=\"avalon-ng\"/>\n        </div>\n        <div class=\"exception-panel-content\">\n            <div class=\"information-text\">\n                <h3>An error occured.</h3>\n                <p>Please contact system administrator.</p>\n            </div>\n            <button pButton type=\"button\" [routerLink]=\"['/']\" label=\"Go To DashBoard\"></button>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "M3UH":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/ordinaire/ordinaire.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M3UH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception EMS</h5>\n            <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/ordinaire/nouveau?28660c74f421a0d5636ae1716a62433e14a6a19fd672f93b9bd98b6b177d07ff\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Reception Ordinaire - N/A \" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td> {{ems.datereception}} </td>\n                        <td>  <span *ngIf=\"ems.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                        </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "MBEb":
    /*!******************************************!*\
      !*** ./src/app/demo/view/tabledemo.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function MBEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep {\n  /* Responsive */\n}\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers:not(.p-datatable-gridlines) .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXVESSxlQUFBO0FBckRKO0FBQVE7RUFDSSxpQkFBQTtBQUVaO0FBRUk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUVRO0VBQ0kseUJBQUE7QUFBWjtBQUlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFLUTtFQUNJLGdCQUFBO0FBSFo7QUFRUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTlo7QUFTUTtFQUNJLGFBQUE7QUFQWjtBQVVRO0VBQ0ksZ0JBQUE7QUFSWjtBQVdRO0VBQ0kseUJBQUE7QUFUWjtBQWNRO0VBQ0ksWUFBQTtBQVpaO0FBaUJJO0VBQ0ksYUFBQTtBQWZSO0FBbUJBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFoQko7QUFrQkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFoQlI7QUFtQkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFqQlI7QUFvQkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFsQlI7QUFxQkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFuQlI7QUFzQkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFwQlI7QUF1Qkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFyQlI7QUF5QkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXRCSjtBQXdCSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQXRCUjtBQXlCSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQXZCUjtBQTBCSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQXhCUjtBQTRCQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBekJKO0FBMkJJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBekJSO0FBNEJJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBMUJSO0FBNkJJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBM0JSO0FBOEJJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBNUJSO0FBZ0NBO0VBSWdCOztJQUVJLHdCQUFBO0VBaENsQjtFQW1DYztJQUNJLHlDQUFBO0VBakNsQjtFQW1Da0I7SUFDSSxnQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBakN0QjtFQW1Dc0I7SUFDSSxlQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtFQWpDMUI7RUFvQ3NCO0lBQ0ksa0JBQUE7RUFsQzFCO0FBQ0YiLCJmaWxlIjoidGFibGVkZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAgIC5wLXBhZ2luYXRvciB7XG4gICAgICAgIC5wLXBhZ2luYXRvci1jdXJyZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICBoZWlnaHQ6IC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xuXG4gICAgICAgIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5wLWNhbGVuZGFyIC5wLWRhdGVwaWNrZXIge1xuICAgICAgICBtaW4td2lkdGg6IDI1cmVtO1xuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzIHtcbiAgICAgICAgLnAtZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtcGFnaW5hdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzOm5vdCgucC1kYXRhdGFibGUtZ3JpZGxpbmVzKSB7XG4gICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogUmVzcG9uc2l2ZSAqL1xuICAgIC5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmN1c3RvbWVyLWJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogLjI1ZW0gLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcblxuICAgICYuc3RhdHVzLXF1YWxpZmllZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNDOEU2Qzk7XG4gICAgICAgIGNvbG9yOiAjMjU2MDI5O1xuICAgIH1cblxuICAgICYuc3RhdHVzLXVucXVhbGlmaWVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQ0REMjtcbiAgICAgICAgY29sb3I6ICNDNjM3Mzc7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtbmVnb3RpYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkVFREFGO1xuICAgICAgICBjb2xvcjogIzhBNTM0MDtcbiAgICB9XG5cbiAgICAmLnN0YXR1cy1uZXcge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQjNFNUZDO1xuICAgICAgICBjb2xvcjogIzIzNTQ3QjtcbiAgICB9XG5cbiAgICAmLnN0YXR1cy1yZW5ld2FsIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0VDQ0ZGRjtcbiAgICAgICAgY29sb3I6ICM2OTQzODI7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtcHJvcG9zYWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZEOEIyO1xuICAgICAgICBjb2xvcjogIzgwNUIzNjtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWJhZGdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcGFkZGluZzogLjI1ZW0gLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcblxuICAgICYuc3RhdHVzLWluc3RvY2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQzhFNkM5O1xuICAgICAgICBjb2xvcjogIzI1NjAyOTtcbiAgICB9XG5cbiAgICAmLnN0YXR1cy1vdXRvZnN0b2NrIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQ0REMjtcbiAgICAgICAgY29sb3I6ICNDNjM3Mzc7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtbG93c3RvY2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkVFREFGO1xuICAgICAgICBjb2xvcjogIzhBNTM0MDtcbiAgICB9XG59XG5cbi5vcmRlci1iYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IC4yNWVtIC41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG5cbiAgICAmLm9yZGVyLWRlbGl2ZXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNDOEU2Qzk7XG4gICAgICAgIGNvbG9yOiAjMjU2MDI5O1xuICAgIH1cblxuICAgICYub3JkZXItY2FuY2VsbGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQ0REMjtcbiAgICAgICAgY29sb3I6ICNDNjM3Mzc7XG4gICAgfVxuXG4gICAgJi5vcmRlci1wZW5kaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZFRURBRjtcbiAgICAgICAgY29sb3I6ICM4QTUzNDA7XG4gICAgfVxuXG4gICAgJi5vcmRlci1yZXR1cm5lZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFQ0NGRkY7XG4gICAgICAgIGNvbG9yOiAjNjk0MzgyO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICA6aG9zdCA6Om5nLWRlZXAge1xuICAgICAgICAucC1kYXRhdGFibGUge1xuICAgICAgICAgICAgJi5wLWRhdGF0YWJsZS1jdXN0b21lcnMge1xuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xuXG4gICAgICAgICAgICAgICAgICAgID4gdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wLWNvbHVtbi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLS40cmVtIDFyZW0gLS40cmVtIC0uNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "NG6J":
    /*!*****************************************************!*\
      !*** ./src/app/pages/app.timelinedemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: AppTimelineDemoComponent */

    /***/
    function NG6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppTimelineDemoComponent", function () {
        return AppTimelineDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_timelinedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.timelinedemo.component.html */
      "OM+n");
      /* harmony import */


      var _app_timelinedemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.timelinedemo.scss */
      "OyBH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var AppTimelineDemoComponent = /*#__PURE__*/function () {
        function AppTimelineDemoComponent() {
          _classCallCheck(this, AppTimelineDemoComponent);
        }

        _createClass(AppTimelineDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customEvents = [{
              status: 'Ordered',
              date: '15/10/2020 10:30',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].SHOPPING_CART,
              color: '#9C27B0',
              image: 'game-controller.jpg'
            }, {
              status: 'Processing',
              date: '15/10/2020 14:00',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].COG,
              color: '#673AB7'
            }, {
              status: 'Shipped',
              date: '15/10/2020 16:15',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].ENVELOPE,
              color: '#FF9800'
            }, {
              status: 'Delivered',
              date: '16/10/2020 10:00',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].CHECK,
              color: '#607D8B'
            }];
            this.horizontalEvents = ['2020', '2021', '2022', '2023'];
          }
        }]);

        return AppTimelineDemoComponent;
      }();

      AppTimelineDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_app_timelinedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_timelinedemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppTimelineDemoComponent);
      /***/
    },

    /***/
    "Nc2I":
    /*!*****************************************************************************!*\
      !*** ./src/app/apps/livraison/livraisonechoue/livraisonechoue.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LivraisonechoueComponent */

    /***/
    function Nc2I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LivraisonechoueComponent", function () {
        return LivraisonechoueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_livraisonechoue_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./livraisonechoue.component.html */
      "oF4A");
      /* harmony import */


      var _livraisonechoue_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./livraisonechoue.component.css */
      "4YMt");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var LivraisonechoueComponent = /*#__PURE__*/function () {
        function LivraisonechoueComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, LivraisonechoueComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.liste = undefined;
        }

        _createClass(LivraisonechoueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/livraison/echec", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this27.liste = response;
              console.log(_this27.liste);
            }, function (error) {
              _this27.showWarn("La liste n'a pas pu etre affiché !!! voici la raison - " + error.message);
            });
          }
          /**
          *  costumisation des erreurs
          */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return LivraisonechoueComponent;
      }();

      LivraisonechoueComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      LivraisonechoueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-livraisonechoue',
        template: _raw_loader_livraisonechoue_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_livraisonechoue_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LivraisonechoueComponent);
      /***/
    },

    /***/
    "O2fg":
    /*!*********************************************************************!*\
      !*** ./src/app/apps/parametrage/gestion/access/access.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AccessComponent */

    /***/
    function O2fg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessComponent", function () {
        return AccessComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./access.component.html */
      "j0ow");
      /* harmony import */


      var _access_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./access.component.css */
      "mBE1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AccessComponent = /*#__PURE__*/function () {
        function AccessComponent() {
          _classCallCheck(this, AccessComponent);
        }

        _createClass(AccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccessComponent;
      }();

      AccessComponent.ctorParameters = function () {
        return [];
      };

      AccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-access',
        template: _raw_loader_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_access_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccessComponent);
      /***/
    },

    /***/
    "O8Ab":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/vente/parametrage/parametrage.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ParametrageComponent */

    /***/
    function O8Ab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParametrageComponent", function () {
        return ParametrageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parametrage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parametrage.component.html */
      "FZSD");
      /* harmony import */


      var _parametrage_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parametrage.component.css */
      "IXcB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ParametrageComponent = /*#__PURE__*/function () {
        function ParametrageComponent() {
          _classCallCheck(this, ParametrageComponent);
        }

        _createClass(ParametrageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ParametrageComponent;
      }();

      ParametrageComponent.ctorParameters = function () {
        return [];
      };

      ParametrageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parametrage',
        template: _raw_loader_parametrage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parametrage_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParametrageComponent);
      /***/
    },

    /***/
    "OB6j":
    /*!******************************************!*\
      !*** ./src/app/app.profile.component.ts ***!
      \******************************************/

    /*! exports provided: AppProfileComponent */

    /***/
    function OB6j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppProfileComponent", function () {
        return AppProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppProfileComponent = /*#__PURE__*/function () {
        function AppProfileComponent(token, router) {
          _classCallCheck(this, AppProfileComponent);

          this.token = token;
          this.router = router;
        }

        _createClass(AppProfileComponent, [{
          key: "onClick",
          value: function onClick(event) {
            this.active = !this.active;
            event.preventDefault();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token.signOut();
            window.location.reload();
          }
        }]);

        return AppProfileComponent;
      }();

      AppProfileComponent.ctorParameters = function () {
        return [{
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AppProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inline-profile',
        template: "\n        <div class=\"profile\" [ngClass]=\"{'profile-expanded':active}\">\n            <a href=\"#\" (click)=\"onClick($event)\">\n                <img class=\"profile-image\" src=\"assets/layout/images/avatar.jpg\" />\n                <span class=\"profile-name\">Houmed Hassan Mohamed </span>\n                <i class=\"pi pi-fw pi-chevron-down\"></i>\n                <span class=\"profile-role\">Marketing</span>\n            </a>\n        </div>\n\n        <ul id=\"profile-menu\" class=\"layout-menu\" [@menu]=\"active ? 'visible' : 'hidden'\">\n            <li role=\"menuitem\">\n                <a href=\"#\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"pi pi-user\"></i>\n                    <span>Profile</span>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">Profile</div>\n                </div>\n            </li>\n            <li role=\"menuitem\">\n                <a href=\"#\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"pi pi-fw pi-lock\"></i>\n                    <span>Privacy</span>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">Privacy</div>\n                </div>\n            </li>\n            <li role=\"menuitem\">\n                <a href=\"#\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"pi pi-cog\"></i>\n                    <span>Settings</span>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">Settings</div>\n                </div>\n            </li>\n            <li role=\"menuitem\">\n                <a  (onClick)=\"logout()\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"pi pi-sign-out\"></i>\n                    <span>Logout</span>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">Logout</div>\n                </div>\n            </li>\n        </ul>\n    ",
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menu', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      })], AppProfileComponent);
      /***/
    },

    /***/
    "OM+n":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.timelinedemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h4>Timeline</h4>\n\n            <h5>Custom Timeline</h5>\n            <p-timeline [value]=\"customEvents\" align=\"alternate\" styleClass=\"customized-timeline\">\n                <ng-template pTemplate=\"marker\" let-event>\n                <span class=\"custom-marker p-shadow-2\" [style.backgroundColor]=\"event.color\">\n                    <i [ngClass]=\"event.icon\"></i>\n                </span>\n                </ng-template>\n                <ng-template pTemplate=\"content\" let-event>\n                    <p-card [header]=\"event.status\" [subheader]=\"event.date\">\n                        <img *ngIf=\"event.image\" [src]=\"'assets/demo/images/product/' + event.image\" [alt]=\"event.name\" width=\"200\" class=\"p-shadow-2\" />\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n                        <button pButton label=\"Read more\" class=\"p-button-text\"></button>\n                    </p-card>\n                </ng-template>\n            </p-timeline>\n\n            <h5 style=\"margin-top: 5em\">Horizontal - Alternate Align</h5>\n            <p-timeline [value]=\"horizontalEvents\" layout=\"horizontal\" align=\"alternate\">\n                <ng-template pTemplate=\"content\" let-event>\n                    {{event}}\n                </ng-template>\n                <ng-template pTemplate=\"opposite\" let-event>\n                    &nbsp;\n                </ng-template>\n            </p-timeline>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "OUbL":
    /*!**************************************************************!*\
      !*** ./src/app/apps/colis/reception/reception.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function OUbL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlcHRpb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "OnSs":
    /*!**********************************************!*\
      !*** ./src/app/pages/app.login.component.ts ***!
      \**********************************************/

    /*! exports provided: AppLoginComponent */

    /***/
    function OnSs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLoginComponent", function () {
        return AppLoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.login.component.html */
      "G5Hk");
      /* harmony import */


      var _app_login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.login.component.scss */
      "gVIG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _auth_models_login_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../auth/models/login-info */
      "u2iu");
      /* harmony import */


      var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../auth/token-storage.service */
      "dZLz");

      var AppLoginComponent = /*#__PURE__*/function () {
        function AppLoginComponent(auth, messageService, authService, tokenStorage, router, formbuilder) {
          _classCallCheck(this, AppLoginComponent);

          this.auth = auth;
          this.messageService = messageService;
          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.formbuilder = formbuilder;
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.errorMessage = '';
          this.roles = [];
          this.msgs = [];
        }

        _createClass(AppLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getToken()) {
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getAuthorities();
              this.router.navigate(['/accueil']);
            }

            this.authForm = this.formbuilder.group({
              'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "connexion",
          value: function connexion(value) {
            var _this28 = this;

            this.loginInfo = new _auth_models_login_info__WEBPACK_IMPORTED_MODULE_8__["AuthLoginInfo"](value['username'], value['password']);
            this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
              _this28.tokenStorage.saveToken(data.accessToken);

              _this28.tokenStorage.saveUsername(data.username);

              _this28.tokenStorage.saveAuthorities(data.authorities);

              _this28.isLoginFailed = false;
              _this28.isLoggedIn = true;
              _this28.roles = _this28.tokenStorage.getAuthorities(); //this.reloadPage();

              _this28.router.navigate(['/accueil']);
            }, function (error) {
              _this28.errorMessage = error.error.message;

              _this28.showError(_this28.errorMessage);

              _this28.isLoginFailed = true;
            });
          }
        }, {
          key: "reloadPage",
          value: function reloadPage() {
            window.location.reload();
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return AppLoginComponent;
      }();

      AppLoginComponent.ctorParameters = function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      AppLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_app_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_app_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppLoginComponent);
      /***/
    },

    /***/
    "OwpF":
    /*!******************************************************************************!*\
      !*** ./src/app/apps/reception/esuuq/nouveauesuuq/nouveauesuuq.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function OwpF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1ZXN1dXEuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "OyBH":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.timelinedemo.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function OyBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-marker {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n::ng-deep .p-timeline-event-content,\n::ng-deep .p-timeline-event-opposite {\n  line-height: 1;\n}\n\n@media screen and (max-width: 960px) {\n  ::ng-deep .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  ::ng-deep .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  ::ng-deep .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n  ::ng-deep .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC50aW1lbGluZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUk7O0VBRUksY0FBQTtBQURSOztBQUtBO0VBR1k7SUFDSSw4QkFBQTtFQUpkO0VBTWM7SUFDSSwyQkFBQTtFQUpsQjtFQVFVO0lBQ0ksT0FBQTtFQU5kO0VBU1U7SUFDSSxnQkFBQTtFQVBkO0FBQ0YiLCJmaWxlIjoiYXBwLnRpbWVsaW5lZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy90aW1lbGluZVxuLmN1c3RvbS1tYXJrZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbjo6bmctZGVlcCB7XG4gICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCxcbiAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuY3VzdG9taXplZC10aW1lbGluZSB7XG4gICAgICAgICAgICAucC10aW1lbGluZS1ldmVudDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnAtY2FyZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "PVz2":
    /*!******************************************************!*\
      !*** ./src/app/apps/envoi/colis/colis.component.css ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function PVz2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xpcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Ppy5":
    /*!*****************************************************************************************!*\
      !*** ./src/app/apps/envoi/recommande/nouveaurecommande/nouveaurecommande.component.css ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ppy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1cmVjb21tYW5kZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Pv7A":
    /*!******************************************************!*\
      !*** ./src/app/demo/view/documentation.component.ts ***!
      \******************************************************/

    /*! exports provided: DocumentationComponent */

    /***/
    function Pv7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
        return DocumentationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./documentation.component.html */
      "a6dQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DocumentationComponent = function DocumentationComponent() {
        _classCallCheck(this, DocumentationComponent);
      };

      DocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .docs h1 {\n            margin-top: 30px;\n        }\n\n        .docs p {\n            line-height: 1.5;\n        }\n\n        .docs pre.doc-command {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }"]
      })], DocumentationComponent);
      /***/
    },

    /***/
    "Q3cR":
    /*!******************************************************************************!*\
      !*** ./src/app/apps/livraison/livraisonreussi/livraisonreussi.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Q3cR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZyYWlzb25yZXVzc2kuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "QOVP":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/colis/nouveaucolis/nouveaucolis.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QOVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'un envoi colis\">\n                <form [formGroup]=\"colisForm\" (ngSubmit)=\"save(colisForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouveau - colis (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <ul>\n                                <li *ngIf=\"!colisForm.controls['reference'].valid&&colisForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!colisForm.controls['nomsender'].valid&&colisForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!colisForm.controls['telexpediteur'].valid&&colisForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!colisForm.controls['namerecipient'].valid&&colisForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!colisForm.controls['telrecipient'].valid&&colisForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                    \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference</label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom de l'expediiteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone de l'expediteur</label>\n                                            <div class=\"p-col-12 p-md-12\">   \n                                                <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                        \n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                    <div class=\"p-col-12 p-md-12\">      \n                                        <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone du destinateur </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!colisForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "Qd+X":
    /*!******************************************************************!*\
      !*** ./src/app/apps/livraison/livraison/livraison.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function QdX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZyYWlzb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "Qlwb":
    /*!********************************************************************!*\
      !*** ./src/app/apps/parametrage/categorie/categorie.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function Qlwb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "R5e8":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/emsreception/emsreception.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R5e8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception EMS</h5>\n            <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/ems/nouveau?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Reception EMS -EE \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td> {{ems.datereception}} </td>\n                        <td>  <span *ngIf=\"ems.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                        </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Rx9r":
    /*!*******************************************************************!*\
      !*** ./src/app/apps/parametrage/categorie/categorie.component.ts ***!
      \*******************************************************************/

    /*! exports provided: CategorieComponent */

    /***/
    function Rx9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategorieComponent", function () {
        return CategorieComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_categorie_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./categorie.component.html */
      "uoAt");
      /* harmony import */


      var _categorie_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categorie.component.css */
      "Qlwb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CategorieComponent = /*#__PURE__*/function () {
        function CategorieComponent() {
          _classCallCheck(this, CategorieComponent);
        }

        _createClass(CategorieComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategorieComponent;
      }();

      CategorieComponent.ctorParameters = function () {
        return [];
      };

      CategorieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categorie',
        template: _raw_loader_categorie_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categorie_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategorieComponent);
      /***/
    },

    /***/
    "Sfeg":
    /*!**************************************************************************!*\
      !*** ./src/app/apps/reception/editreception/editreception.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function Sfeg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0cmVjZXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/auth.service */
      "qXBG");
      /* harmony import */


      var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth/token-storage.service */
      "dZLz");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(primengConfig, auth, tokenStorage, router) {
          _classCallCheck(this, AppComponent);

          this.primengConfig = primengConfig;
          this.auth = auth;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.layoutMode = 'horizontal';
          this.darkMenu = false;
          this.profileMode = 'inline';
          this.ripple = true;
          this.inputStyle = 'outlined';
          this.themeColor = 'Joomla';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.primengConfig.ripple = true;

            if (!this.tokenStorage.getToken()) {
              this.router.navigate(['/login']);
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "T4wd":
    /*!***************************************************************!*\
      !*** ./src/app/apps/envoi/recommande/recommande.component.ts ***!
      \***************************************************************/

    /*! exports provided: RecommandeComponent */

    /***/
    function T4wd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecommandeComponent", function () {
        return RecommandeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recommande_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recommande.component.html */
      "IFMV");
      /* harmony import */


      var _recommande_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recommande.component.css */
      "B9Hl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var RecommandeComponent = /*#__PURE__*/function () {
        function RecommandeComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, RecommandeComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listrecommande = undefined;
        }

        _createClass(RecommandeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/envoi/recommande", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this29.listrecommande = response;
              console.log(_this29.listrecommande);
            }, function (error) {
              _this29.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/envoi/ems/edition?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return RecommandeComponent;
      }();

      RecommandeComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      RecommandeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-recommande',
        template: _raw_loader_recommande_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_recommande_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecommandeComponent);
      /***/
    },

    /***/
    "TxMg":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/editreception/editreception.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TxMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'un reception\">\n                <form [formGroup]=\"emsForm\" (ngSubmit)=\"save(emsForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Mise à jour  - {{receptiondto.type}}\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <ul>\n                                <li *ngIf=\"!emsForm.controls['reference'].valid&&emsForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['nomsender'].valid&&emsForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!emsForm.controls['telexpediteur'].valid&&emsForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['namerecipient'].valid&&emsForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!emsForm.controls['telrecipient'].valid&&emsForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                    \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"receptiondto.type\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\" [(ngModel)]=\"receptiondto.reference\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date Reception <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-calendar [(ngModel)]=\"datereception\" name=\"datereception\" class=\"form-control\" formControlName=\"datereception\" ></p-calendar>                                \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                               \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom de l'expediteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\"  [(ngModel)]=\"receptiondto.nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                                                      \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur</label>\n                                                    <div class=\"p-col-12 p-md-12\">   \n                                                        <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\"  [(ngModel)]=\"receptiondto.telexpediteur\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays Expediteur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountryexpediteur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysexpediteur\">\n                                                        </p-dropdown>  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                        \n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">                               \n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-4 p-md-4 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-md-12\">      \n                                            <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\" [(ngModel)]=\"receptiondto.adresse\">                                    \n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Adresse mail </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"email\" pInputText   class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"receptiondto.email\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\" [(ngModel)]=\"receptiondto.namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\"> \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur  <span class=\"required\">*</span> </label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\" [(ngModel)]=\"receptiondto.telrecipient\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays du destinateur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">  \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountrydestinateur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysdestinateur\">\n                                                            \n                                                        </p-dropdown>                              \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Colis dommage</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"dommage\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"dommage\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Envoyé un sms de reception du colis</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"envoisms\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"envoisms\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\" *ngIf=\"dommage\">\n                                    <div class=\"p-col-12\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <textarea rows=\"5\"  pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentdommage\" formControlName=\"commentaire\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!emsForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "WCqc":
    /*!*********************************************!*\
      !*** ./src/app/demo/service/nodeservice.ts ***!
      \*********************************************/

    /*! exports provided: NodeService */

    /***/
    function WCqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeService", function () {
        return NodeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NodeService = /*#__PURE__*/function () {
        function NodeService(http) {
          _classCallCheck(this, NodeService);

          this.http = http;
        }

        _createClass(NodeService, [{
          key: "getFiles",
          value: function getFiles() {
            return this.http.get('assets/demo/data/files.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getLazyFiles",
          value: function getLazyFiles() {
            return this.http.get('assets/demo/data/files-lazy.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getFilesystem",
          value: function getFilesystem() {
            return this.http.get('assets/demo/data/filesystem.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getLazyFilesystem",
          value: function getLazyFilesystem() {
            return this.http.get('assets/demo/data/filesystem-lazy.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }]);

        return NodeService;
      }();

      NodeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      NodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], NodeService);
      /***/
    },

    /***/
    "WerS":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/recommandereception/recommandereception.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WerS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception EMS</h5>\n            <p-table #dt [value]=\"listems\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/recommande/nouveau?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Reception RECOMMANDE - RR \"class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-ems>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{ems.reference}} </td>\n                        <td> {{ems.datereception}} </td>\n                        <td>  <span *ngIf=\"ems.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                        </td>\n                        <td>  {{ems.type}} </td>\n                        <td>  {{ems.adresse}} </td>\n                        <td>  {{ems.nomsender}} </td>\n                        <td>  {{ems.namerecipient}} </td>\n                        <td>  {{ems.telrecipient}} </td>\n\n                        <td>  {{ems.updated.username}} </td>\n                        <td>  {{ems.updatedat}} </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(ems)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "X5gR":
    /*!*************************************************************************************!*\
      !*** ./src/app/apps/reception/recommandereception/recommandereception.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RecommandereceptionComponent */

    /***/
    function X5gR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecommandereceptionComponent", function () {
        return RecommandereceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recommandereception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recommandereception.component.html */
      "WerS");
      /* harmony import */


      var _recommandereception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recommandereception.component.css */
      "sCma");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var RecommandereceptionComponent = /*#__PURE__*/function () {
        function RecommandereceptionComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, RecommandereceptionComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listems = undefined;
        }

        _createClass(RecommandereceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/recommande", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this30.listems = response;
              console.log(_this30.listems);
            }, function (error) {
              _this30.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/reception/edition?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return RecommandereceptionComponent;
      }();

      RecommandereceptionComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      RecommandereceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-recommandereception',
        template: _raw_loader_recommandereception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_recommandereception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecommandereceptionComponent);
      /***/
    },

    /***/
    "XAKf":
    /*!******************************************************!*\
      !*** ./src/app/apps/stocks/suivi/suivi.component.ts ***!
      \******************************************************/

    /*! exports provided: SuiviComponent */

    /***/
    function XAKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuiviComponent", function () {
        return SuiviComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_suivi_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./suivi.component.html */
      "zOYX");
      /* harmony import */


      var _suivi_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./suivi.component.css */
      "IX92");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SuiviComponent = /*#__PURE__*/function () {
        function SuiviComponent() {
          _classCallCheck(this, SuiviComponent);
        }

        _createClass(SuiviComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuiviComponent;
      }();

      SuiviComponent.ctorParameters = function () {
        return [];
      };

      SuiviComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-suivi',
        template: _raw_loader_suivi_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_suivi_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SuiviComponent);
      /***/
    },

    /***/
    "Xf1K":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/apps/reception/recommandereception/nouveaurecommandereception/nouveaurecommandereception.component.css ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xf1K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1cmVjb21tYW5kZXJlY2VwdGlvbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "Y0Zo":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.crud.component.ts ***!
      \*********************************************/

    /*! exports provided: AppCrudComponent */

    /***/
    function Y0Zo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCrudComponent", function () {
        return AppCrudComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_crud_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.crud.component.html */
      "3aQ+");
      /* harmony import */


      var _demo_view_tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../demo/view/tabledemo.scss */
      "MBEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_service_productservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../demo/service/productservice */
      "ibcK");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var AppCrudComponent = /*#__PURE__*/function () {
        function AppCrudComponent(productService, messageService, confirmationService) {
          _classCallCheck(this, AppCrudComponent);

          this.productService = productService;
          this.messageService = messageService;
          this.confirmationService = confirmationService;
        }

        _createClass(AppCrudComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this.productService.getProducts().then(function (data) {
              return _this31.products = data;
            });
            this.cols = [{
              field: 'name',
              header: 'Name'
            }, {
              field: 'price',
              header: 'Price'
            }, {
              field: 'category',
              header: 'Category'
            }, {
              field: 'rating',
              header: 'Reviews'
            }, {
              field: 'inventoryStatus',
              header: 'Status'
            }];
          }
        }, {
          key: "openNew",
          value: function openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
          }
        }, {
          key: "deleteSelectedProducts",
          value: function deleteSelectedProducts() {
            var _this32 = this;

            this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selected products?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this32.products = _this32.products.filter(function (val) {
                  return !_this32.selectedProducts.includes(val);
                });
                _this32.selectedProducts = null;

                _this32.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Products Deleted',
                  life: 3000
                });
              }
            });
          }
        }, {
          key: "editProduct",
          value: function editProduct(product) {
            this.product = Object.assign({}, product);
            this.productDialog = true;
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(product) {
            var _this33 = this;

            this.confirmationService.confirm({
              message: 'Are you sure you want to delete ' + product.name + '?',
              header: 'Confirm',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this33.products = _this33.products.filter(function (val) {
                  return val.id !== product.id;
                });
                _this33.product = {};

                _this33.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Deleted',
                  life: 3000
                });
              }
            });
          }
        }, {
          key: "hideDialog",
          value: function hideDialog() {
            this.productDialog = false;
            this.submitted = false;
          }
        }, {
          key: "saveProduct",
          value: function saveProduct() {
            this.submitted = true;

            if (this.product.name.trim()) {
              if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Updated',
                  life: 3000
                });
              } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({
                  severity: 'success',
                  summary: 'Successful',
                  detail: 'Product Created',
                  life: 3000
                });
              }

              this.products = _toConsumableArray(this.products);
              this.productDialog = false;
              this.product = {};
            }
          }
        }, {
          key: "findIndexById",
          value: function findIndexById(id) {
            var index = -1;

            for (var i = 0; i < this.products.length; i++) {
              if (this.products[i].id === id) {
                index = i;
                break;
              }
            }

            return index;
          }
        }, {
          key: "createId",
          value: function createId() {
            var id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 5; i++) {
              id += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            return id;
          }
        }]);

        return AppCrudComponent;
      }();

      AppCrudComponent.ctorParameters = function () {
        return [{
          type: _demo_service_productservice__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]
        }];
      };

      AppCrudComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_app_crud_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]],
        styles: ["\n        :host ::ng-deep .p-dialog .product-image {\n            width: 150px;\n            margin: 0 auto 2rem auto;\n            display: block;\n        }\n\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {\n                text-align: center;\n            }\n\n            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:nth-child(6) {\n                display: flex;\n            }\n        }\n\n    ", _demo_view_tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppCrudComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/accordion */
      "7LiV");
      /* harmony import */


      var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/autocomplete */
      "V5BG");
      /* harmony import */


      var primeng_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/avatar */
      "+F6F");
      /* harmony import */


      var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/avatargroup */
      "sKsN");
      /* harmony import */


      var primeng_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/badge */
      "fqaE");
      /* harmony import */


      var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/breadcrumb */
      "URcr");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/carousel */
      "LwO5");
      /* harmony import */


      var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/cascadeselect */
      "A1Di");
      /* harmony import */


      var primeng_chart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/chart */
      "I5S5");
      /* harmony import */


      var primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/checkbox */
      "Ji6n");
      /* harmony import */


      var primeng_chip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/chip */
      "wxlm");
      /* harmony import */


      var primeng_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/chips */
      "RGqm");
      /* harmony import */


      var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/codehighlighter */
      "yjSK");
      /* harmony import */


      var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/confirmdialog */
      "Nf9I");
      /* harmony import */


      var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/confirmpopup */
      "RTT/");
      /* harmony import */


      var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/colorpicker */
      "bv7W");
      /* harmony import */


      var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/contextmenu */
      "yNBN");
      /* harmony import */


      var primeng_dataview__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/dataview */
      "8CEF");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var primeng_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! primeng/divider */
      "lUkA");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! primeng/dropdown */
      "arFO");
      /* harmony import */


      var primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! primeng/fieldset */
      "fk4S");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! primeng/fileupload */
      "NCSE");
      /* harmony import */


      var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! primeng/fullcalendar */
      "9R/8");
      /* harmony import */


      var primeng_galleria__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! primeng/galleria */
      "2art");
      /* harmony import */


      var primeng_inplace__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! primeng/inplace */
      "QvPt");
      /* harmony import */


      var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! primeng/inputnumber */
      "Ks7X");
      /* harmony import */


      var primeng_inputmask__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! primeng/inputmask */
      "CwEU");
      /* harmony import */


      var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! primeng/inputswitch */
      "rLzU");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var primeng_knob__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! primeng/knob */
      "EbAv");
      /* harmony import */


      var primeng_lightbox__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! primeng/lightbox */
      "LnpQ");
      /* harmony import */


      var primeng_listbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! primeng/listbox */
      "+07z");
      /* harmony import */


      var primeng_megamenu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! primeng/megamenu */
      "BAkx");
      /* harmony import */


      var primeng_menu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! primeng/menu */
      "1SLH");
      /* harmony import */


      var primeng_menubar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! primeng/menubar */
      "b1Ni");
      /* harmony import */


      var primeng_messages__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! primeng/messages */
      "dts7");
      /* harmony import */


      var primeng_message__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! primeng/message */
      "FMpt");
      /* harmony import */


      var primeng_multiselect__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! primeng/multiselect */
      "lVkt");
      /* harmony import */


      var primeng_orderlist__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! primeng/orderlist */
      "cQJI");
      /* harmony import */


      var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! primeng/organizationchart */
      "dQiQ");
      /* harmony import */


      var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! primeng/overlaypanel */
      "z8Lm");
      /* harmony import */


      var primeng_paginator__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! primeng/paginator */
      "6t4m");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! primeng/panelmenu */
      "kSmT");
      /* harmony import */


      var primeng_password__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! primeng/password */
      "+YxP");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");
      /* harmony import */


      var primeng_progressbar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! primeng/progressbar */
      "+DzE");
      /* harmony import */


      var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! primeng/radiobutton */
      "LuMj");
      /* harmony import */


      var primeng_rating__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! primeng/rating */
      "Js94");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! primeng/ripple */
      "Q4Mo");
      /* harmony import */


      var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! primeng/scrollpanel */
      "SSqW");
      /* harmony import */


      var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! primeng/scrolltop */
      "JD6B");
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! primeng/selectbutton */
      "5o1E");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! primeng/sidebar */
      "jLSX");
      /* harmony import */


      var primeng_skeleton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! primeng/skeleton */
      "jeV5");
      /* harmony import */


      var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! primeng/slidemenu */
      "3k5r");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! primeng/splitbutton */
      "Wq6t");
      /* harmony import */


      var primeng_splitter__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! primeng/splitter */
      "ZZi9");
      /* harmony import */


      var primeng_steps__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! primeng/steps */
      "KcHJ");
      /* harmony import */


      var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! primeng/tabmenu */
      "c+7h");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! primeng/tabview */
      "dPl2");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");
      /* harmony import */


      var primeng_terminal__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! primeng/terminal */
      "6s7b");
      /* harmony import */


      var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! primeng/tieredmenu */
      "B16f");
      /* harmony import */


      var primeng_timeline__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! primeng/timeline */
      "mgTN");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! primeng/toast */
      "Gxio");
      /* harmony import */


      var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! primeng/togglebutton */
      "Y+ZO");
      /* harmony import */


      var primeng_toolbar__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! primeng/toolbar */
      "5EWq");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! primeng/tooltip */
      "xlun");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! primeng/tree */
      "g9iH");
      /* harmony import */


      var primeng_treetable__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! primeng/treetable */
      "EVgl");
      /* harmony import */


      var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! primeng/virtualscroller */
      "+/m8");
      /* harmony import */


      var _app_code_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! ./app.code.component */
      "ZnEj");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _app_config_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! ./app.config.component */
      "jaM/");
      /* harmony import */


      var _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! ./pages/app.notfound.component */
      "xBH+");
      /* harmony import */


      var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
      /*! ./pages/app.error.component */
      "anCR");
      /* harmony import */


      var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
      /*! ./pages/app.accessdenied.component */
      "pRB7");
      /* harmony import */


      var _pages_app_login_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
      /*! ./pages/app.login.component */
      "OnSs");
      /* harmony import */


      var _app_menu_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
      /*! ./app.menu.component */
      "DByU");
      /* harmony import */


      var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
      /*! ./app.menuitem.component */
      "kA7y");
      /* harmony import */


      var _app_topbar_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
      /*! ./app.topbar.component */
      "7APR");
      /* harmony import */


      var _app_footer_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
      /*! ./app.footer.component */
      "ffRT");
      /* harmony import */


      var _app_profile_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
      /*! ./app.profile.component */
      "OB6j");
      /* harmony import */


      var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
      /*! ./demo/view/dashboarddemo.component */
      "yd5u");
      /* harmony import */


      var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
      /*! ./demo/view/documentation.component */
      "Pv7A");
      /* harmony import */


      var _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
      /*! ./demo/service/countryservice */
      "CuUz");
      /* harmony import */


      var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(
      /*! ./demo/service/eventservice */
      "fgiE");
      /* harmony import */


      var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(
      /*! ./demo/service/nodeservice */
      "WCqc");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _demo_service_customerservice__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(
      /*! ./demo/service/customerservice */
      "04hL");
      /* harmony import */


      var _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(
      /*! ./demo/service/photoservice */
      "xLnY");
      /* harmony import */


      var _demo_service_productservice__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(
      /*! ./demo/service/productservice */
      "ibcK");
      /* harmony import */


      var _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(
      /*! ./demo/service/iconservice */
      "4Sr2");
      /* harmony import */


      var _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(
      /*! ./demo/view/formlayoutdemo.component */
      "CfVz");
      /* harmony import */


      var _pages_app_crud_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(
      /*! ./pages/app.crud.component */
      "Y0Zo");
      /* harmony import */


      var _pages_app_calendar_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(
      /*! ./pages/app.calendar.component */
      "fFyx");
      /* harmony import */


      var _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(
      /*! ./pages/app.timelinedemo.component */
      "NG6J");
      /* harmony import */


      var _pages_app_invoice_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(
      /*! ./pages/app.invoice.component */
      "GKnm");
      /* harmony import */


      var _pages_app_help_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(
      /*! ./pages/app.help.component */
      "Bxr+");
      /* harmony import */


      var _apps_colis_reception_reception_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(
      /*! ./apps/colis/reception/reception.component */
      "riBK");
      /* harmony import */


      var _apps_parametrage_categorie_categorie_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(
      /*! ./apps/parametrage/categorie/categorie.component */
      "Rx9r");
      /* harmony import */


      var _apps_parametrage_utilisateurs_utilisateurs_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(
      /*! ./apps/parametrage/utilisateurs/utilisateurs.component */
      "1jHi");
      /* harmony import */


      var _apps_parametrage_gestion_access_access_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(
      /*! ./apps/parametrage/gestion/access/access.component */
      "O2fg");
      /* harmony import */


      var _apps_envoi_ems_ems_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(
      /*! ./apps/envoi/ems/ems.component */
      "rbu+");
      /* harmony import */


      var _apps_envoi_colis_colis_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(
      /*! ./apps/envoi/colis/colis.component */
      "d4o+");
      /* harmony import */


      var _apps_envoi_recommande_recommande_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(
      /*! ./apps/envoi/recommande/recommande.component */
      "T4wd");
      /* harmony import */


      var _apps_envoi_tableaubord_tableaubord_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(
      /*! ./apps/envoi/tableaubord/tableaubord.component */
      "ojSt");
      /* harmony import */


      var _apps_reception_ordinaire_ordinaire_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(
      /*! ./apps/reception/ordinaire/ordinaire.component */
      "BqQa");
      /* harmony import */


      var _apps_reception_emsreception_emsreception_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(
      /*! ./apps/reception/emsreception/emsreception.component */
      "urcB");
      /* harmony import */


      var _apps_reception_tableaubordreception_tableaubordreception_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(
      /*! ./apps/reception/tableaubordreception/tableaubordreception.component */
      "3e/o");
      /* harmony import */


      var _apps_reception_recommandereception_recommandereception_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(
      /*! ./apps/reception/recommandereception/recommandereception.component */
      "X5gR");
      /* harmony import */


      var _apps_reception_colisreception_colisreception_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(
      /*! ./apps/reception/colisreception/colisreception.component */
      "prZE");
      /* harmony import */


      var _apps_envoi_ems_nouveau_nouveau_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(
      /*! ./apps/envoi/ems/nouveau/nouveau.component */
      "pJhg");
      /* harmony import */


      var _apps_envoi_ems_edition_edition_component__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(
      /*! ./apps/envoi/ems/edition/edition.component */
      "bIAB");
      /* harmony import */


      var _apps_envoi_colis_nouveaucolis_nouveaucolis_component__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(
      /*! ./apps/envoi/colis/nouveaucolis/nouveaucolis.component */
      "+34J");
      /* harmony import */


      var _apps_envoi_colis_editioncolis_editioncolis_component__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(
      /*! ./apps/envoi/colis/editioncolis/editioncolis.component */
      "seg4");
      /* harmony import */


      var _apps_envoi_recommande_nouveaurecommande_nouveaurecommande_component__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(
      /*! ./apps/envoi/recommande/nouveaurecommande/nouveaurecommande.component */
      "/XrQ");
      /* harmony import */


      var _apps_reception_emsreception_nouveauemsreception_nouveauemsreception_component__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(
      /*! ./apps/reception/emsreception/nouveauemsreception/nouveauemsreception.component */
      "bGFz");
      /* harmony import */


      var _apps_reception_editreception_editreception_component__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(
      /*! ./apps/reception/editreception/editreception.component */
      "9Sdb");
      /* harmony import */


      var _apps_reception_colisreception_nouveaucolisreception_nouveaucolisreception_component__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(
      /*! ./apps/reception/colisreception/nouveaucolisreception/nouveaucolisreception.component */
      "7RVm");
      /* harmony import */


      var _apps_reception_recommandereception_nouveaurecommandereception_nouveaurecommandereception_component__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(
      /*! ./apps/reception/recommandereception/nouveaurecommandereception/nouveaurecommandereception.component */
      "5ewr");
      /* harmony import */


      var _apps_reception_ordinaire_nouveauordinairereception_nouveauordinairereception_component__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(
      /*! ./apps/reception/ordinaire/nouveauordinairereception/nouveauordinairereception.component */
      "y76H");
      /* harmony import */


      var _apps_stocks_suivi_suivi_component__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(
      /*! ./apps/stocks/suivi/suivi.component */
      "XAKf");
      /* harmony import */


      var _apps_stocks_tableaubordstocks_tableaubordstocks_component__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(
      /*! ./apps/stocks/tableaubordstocks/tableaubordstocks.component */
      "L7Y2");
      /* harmony import */


      var _apps_stocks_recherche_recherche_component__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(
      /*! ./apps/stocks/recherche/recherche.component */
      "lEO1");
      /* harmony import */


      var _apps_stocks_enstock_enstock_component__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(
      /*! ./apps/stocks/enstock/enstock.component */
      "odXu");
      /* harmony import */


      var _apps_reception_esuuq_esuuq_component__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(
      /*! ./apps/reception/esuuq/esuuq.component */
      "GFK6");
      /* harmony import */


      var _apps_reception_esuuq_nouveauesuuq_nouveauesuuq_component__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(
      /*! ./apps/reception/esuuq/nouveauesuuq/nouveauesuuq.component */
      "A8DN");
      /* harmony import */


      var _apps_stocks_defaillant_defaillant_component__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(
      /*! ./apps/stocks/defaillant/defaillant.component */
      "8H/n");
      /* harmony import */


      var _apps_livraison_livraison_livraison_component__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(
      /*! ./apps/livraison/livraison/livraison.component */
      "6M6E");
      /* harmony import */


      var _apps_livraison_nouveaulivraison_nouveaulivraison_component__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(
      /*! ./apps/livraison/nouveaulivraison/nouveaulivraison.component */
      "1sSu");
      /* harmony import */


      var _apps_livraison_livraisonreussi_livraisonreussi_component__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(
      /*! ./apps/livraison/livraisonreussi/livraisonreussi.component */
      "six9");
      /* harmony import */


      var _apps_livraison_livraisonechoue_livraisonechoue_component__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(
      /*! ./apps/livraison/livraisonechoue/livraisonechoue.component */
      "Nc2I");
      /* harmony import */


      var _apps_vente_parametrage_parametrage_component__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(
      /*! ./apps/vente/parametrage/parametrage.component */
      "O8Ab");
      /* harmony import */


      var _apps_vente_parametrage_vente_parametrage_vente_component__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(
      /*! ./apps/vente/parametrage-vente/parametrage-vente.component */
      "8Gg0");
      /* harmony import */


      var _apps_vente_nouveauvente_nouveauvente_component__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(
      /*! ./apps/vente/nouveauvente/nouveauvente.component */
      "JL6J");
      /* harmony import */


      var _apps_vente_rapportsvente_rapportsvente_component__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(
      /*! ./apps/vente/rapportsvente/rapportsvente.component */
      "GgHU");
      /* harmony import */


      var _apps_vente_tableaubordvente_tableaubordvente_component__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(
      /*! ./apps/vente/tableaubordvente/tableaubordvente.component */
      "8KQc");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoCompleteModule"], primeng_avatar__WEBPACK_IMPORTED_MODULE_10__["AvatarModule"], primeng_avatargroup__WEBPACK_IMPORTED_MODULE_11__["AvatarGroupModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_12__["BadgeModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"], primeng_card__WEBPACK_IMPORTED_MODULE_16__["CardModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"], primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_18__["CascadeSelectModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_19__["ChartModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_20__["CheckboxModule"], primeng_chip__WEBPACK_IMPORTED_MODULE_21__["ChipModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_22__["ChipsModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_23__["CodeHighlighterModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"], primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_25__["ConfirmPopupModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_26__["ColorPickerModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_27__["ContextMenuModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_28__["DataViewModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_29__["DialogModule"], primeng_divider__WEBPACK_IMPORTED_MODULE_30__["DividerModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__["DropdownModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_32__["FieldsetModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__["FileUploadModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_34__["FullCalendarModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_35__["GalleriaModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_36__["InplaceModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_37__["InputNumberModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_38__["InputMaskModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_39__["InputSwitchModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_40__["InputTextModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_41__["InputTextareaModule"], primeng_knob__WEBPACK_IMPORTED_MODULE_42__["KnobModule"], primeng_lightbox__WEBPACK_IMPORTED_MODULE_43__["LightboxModule"], primeng_listbox__WEBPACK_IMPORTED_MODULE_44__["ListboxModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_45__["MegaMenuModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_46__["MenuModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_47__["MenubarModule"], primeng_message__WEBPACK_IMPORTED_MODULE_49__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_48__["MessagesModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_50__["MultiSelectModule"], primeng_orderlist__WEBPACK_IMPORTED_MODULE_51__["OrderListModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_52__["OrganizationChartModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_53__["OverlayPanelModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_54__["PaginatorModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_55__["PanelModule"], primeng_panelmenu__WEBPACK_IMPORTED_MODULE_56__["PanelMenuModule"], primeng_password__WEBPACK_IMPORTED_MODULE_57__["PasswordModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_58__["PickListModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_59__["ProgressBarModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_60__["RadioButtonModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_61__["RatingModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_62__["RippleModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_63__["ScrollPanelModule"], primeng_scrolltop__WEBPACK_IMPORTED_MODULE_64__["ScrollTopModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_65__["SelectButtonModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_66__["SidebarModule"], primeng_skeleton__WEBPACK_IMPORTED_MODULE_67__["SkeletonModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_68__["SlideMenuModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_69__["SliderModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_70__["SplitButtonModule"], primeng_splitter__WEBPACK_IMPORTED_MODULE_71__["SplitterModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_72__["StepsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_74__["TableModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_73__["TabMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_75__["TabViewModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_76__["TagModule"], primeng_terminal__WEBPACK_IMPORTED_MODULE_77__["TerminalModule"], primeng_timeline__WEBPACK_IMPORTED_MODULE_79__["TimelineModule"], primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_78__["TieredMenuModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_80__["ToastModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_81__["ToggleButtonModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_82__["ToolbarModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_83__["TooltipModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_84__["TreeModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_85__["TreeTableModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_86__["VirtualScrollerModule"], _app_code_component__WEBPACK_IMPORTED_MODULE_87__["AppCodeModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_88__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_89__["AppMainComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_95__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_96__["AppMenuitemComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_97__["AppTopBarComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_98__["AppFooterComponent"], _app_profile_component__WEBPACK_IMPORTED_MODULE_99__["AppProfileComponent"], _app_config_component__WEBPACK_IMPORTED_MODULE_90__["AppConfigComponent"], _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_100__["DashboardDemoComponent"], _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_101__["DocumentationComponent"], _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_110__["FormLayoutDemoComponent"], _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_91__["AppNotfoundComponent"], _pages_app_error_component__WEBPACK_IMPORTED_MODULE_92__["AppErrorComponent"], _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_93__["AppAccessdeniedComponent"], _pages_app_login_component__WEBPACK_IMPORTED_MODULE_94__["AppLoginComponent"], _pages_app_crud_component__WEBPACK_IMPORTED_MODULE_111__["AppCrudComponent"], _pages_app_calendar_component__WEBPACK_IMPORTED_MODULE_112__["AppCalendarComponent"], _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_113__["AppTimelineDemoComponent"], _pages_app_invoice_component__WEBPACK_IMPORTED_MODULE_114__["AppInvoiceComponent"], _pages_app_help_component__WEBPACK_IMPORTED_MODULE_115__["AppHelpComponent"], _apps_colis_reception_reception_component__WEBPACK_IMPORTED_MODULE_116__["ReceptionComponent"], _apps_stocks_recherche_recherche_component__WEBPACK_IMPORTED_MODULE_141__["RechercheComponent"], _apps_stocks_enstock_enstock_component__WEBPACK_IMPORTED_MODULE_142__["EnstockComponent"], _apps_parametrage_categorie_categorie_component__WEBPACK_IMPORTED_MODULE_117__["CategorieComponent"], _apps_parametrage_utilisateurs_utilisateurs_component__WEBPACK_IMPORTED_MODULE_118__["UtilisateursComponent"], _apps_parametrage_gestion_access_access_component__WEBPACK_IMPORTED_MODULE_119__["AccessComponent"], _apps_envoi_ems_ems_component__WEBPACK_IMPORTED_MODULE_120__["EmsComponent"], _apps_envoi_colis_colis_component__WEBPACK_IMPORTED_MODULE_121__["ColisComponent"], _apps_envoi_recommande_recommande_component__WEBPACK_IMPORTED_MODULE_122__["RecommandeComponent"], _apps_envoi_tableaubord_tableaubord_component__WEBPACK_IMPORTED_MODULE_123__["TableaubordComponent"], _apps_reception_ordinaire_ordinaire_component__WEBPACK_IMPORTED_MODULE_124__["OrdinaireComponent"], _apps_reception_emsreception_emsreception_component__WEBPACK_IMPORTED_MODULE_125__["EmsreceptionComponent"], _apps_reception_tableaubordreception_tableaubordreception_component__WEBPACK_IMPORTED_MODULE_126__["TableaubordreceptionComponent"], _apps_reception_recommandereception_recommandereception_component__WEBPACK_IMPORTED_MODULE_127__["RecommandereceptionComponent"], _apps_reception_colisreception_colisreception_component__WEBPACK_IMPORTED_MODULE_128__["ColisreceptionComponent"], _apps_envoi_ems_nouveau_nouveau_component__WEBPACK_IMPORTED_MODULE_129__["NouveauComponent"], _apps_envoi_ems_edition_edition_component__WEBPACK_IMPORTED_MODULE_130__["EditionComponent"], _apps_envoi_colis_nouveaucolis_nouveaucolis_component__WEBPACK_IMPORTED_MODULE_131__["NouveaucolisComponent"], _apps_envoi_colis_editioncolis_editioncolis_component__WEBPACK_IMPORTED_MODULE_132__["EditioncolisComponent"], _apps_envoi_recommande_nouveaurecommande_nouveaurecommande_component__WEBPACK_IMPORTED_MODULE_133__["NouveaurecommandeComponent"], _apps_reception_emsreception_nouveauemsreception_nouveauemsreception_component__WEBPACK_IMPORTED_MODULE_134__["NouveauemsreceptionComponent"], _apps_reception_editreception_editreception_component__WEBPACK_IMPORTED_MODULE_135__["EditreceptionComponent"], _apps_reception_colisreception_nouveaucolisreception_nouveaucolisreception_component__WEBPACK_IMPORTED_MODULE_136__["NouveaucolisreceptionComponent"], _apps_reception_recommandereception_nouveaurecommandereception_nouveaurecommandereception_component__WEBPACK_IMPORTED_MODULE_137__["NouveaurecommandereceptionComponent"], _apps_reception_ordinaire_nouveauordinairereception_nouveauordinairereception_component__WEBPACK_IMPORTED_MODULE_138__["NouveauordinairereceptionComponent"], _apps_stocks_suivi_suivi_component__WEBPACK_IMPORTED_MODULE_139__["SuiviComponent"], _apps_stocks_tableaubordstocks_tableaubordstocks_component__WEBPACK_IMPORTED_MODULE_140__["TableaubordstocksComponent"], _apps_reception_esuuq_esuuq_component__WEBPACK_IMPORTED_MODULE_143__["EsuuqComponent"], _apps_reception_esuuq_nouveauesuuq_nouveauesuuq_component__WEBPACK_IMPORTED_MODULE_144__["NouveauesuuqComponent"], _apps_stocks_defaillant_defaillant_component__WEBPACK_IMPORTED_MODULE_145__["DefaillantComponent"], _apps_livraison_livraison_livraison_component__WEBPACK_IMPORTED_MODULE_146__["LivraisonComponent"], _apps_livraison_nouveaulivraison_nouveaulivraison_component__WEBPACK_IMPORTED_MODULE_147__["NouveaulivraisonComponent"], _apps_livraison_livraisonreussi_livraisonreussi_component__WEBPACK_IMPORTED_MODULE_148__["LivraisonreussiComponent"], _apps_livraison_livraisonechoue_livraisonechoue_component__WEBPACK_IMPORTED_MODULE_149__["LivraisonechoueComponent"], _apps_vente_parametrage_parametrage_component__WEBPACK_IMPORTED_MODULE_150__["ParametrageComponent"], _apps_vente_parametrage_vente_parametrage_vente_component__WEBPACK_IMPORTED_MODULE_151__["ParametrageVenteComponent"], _apps_vente_nouveauvente_nouveauvente_component__WEBPACK_IMPORTED_MODULE_152__["NouveauventeComponent"], _apps_vente_rapportsvente_rapportsvente_component__WEBPACK_IMPORTED_MODULE_153__["RapportsventeComponent"], _apps_vente_tableaubordvente_tableaubordvente_component__WEBPACK_IMPORTED_MODULE_154__["TableaubordventeComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
        }, _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_102__["CountryService"], _demo_service_customerservice__WEBPACK_IMPORTED_MODULE_106__["CustomerService"], _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_103__["EventService"], _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_109__["IconService"], _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_104__["NodeService"], _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_107__["PhotoService"], _demo_service_productservice__WEBPACK_IMPORTED_MODULE_108__["ProductService"], _app_menu_service__WEBPACK_IMPORTED_MODULE_105__["MenuService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_88__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZETH":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.calendar.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZETH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n\t<div class=\"p-col-12\">\n\t\t<div class=\"card\">\n\t\t\t<h5>Calendar</h5>\n\t\t\t<p-fullCalendar [events]=\"events\" [options]=\"options\"></p-fullCalendar>\n\n\t\t\t<p-dialog [(visible)]=\"eventDialog\" [style]=\"{width: '450px'}\" header=\"Event Details\" [modal]=\"true\" [closable]=\"true\">\n\t\t\t\t<ng-template pTemplate=\"content\">\n\t\t\t\t\t<div class=\"p-fluid\">\n\t\t\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t\t\t<label for=\"title\">Title</label>\n\t\t\t\t\t\t\t<input id=\"title\" type=\"text\" pInputText *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.title\" [required]=\"true\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t\t\t<label for=\"start\">From</label>\n\t\t\t\t\t\t\t<p-calendar id=\"start\" *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.start\" [showTime]=\"true\" appendTo=\"body\"></p-calendar>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field\">\n\t\t\t\t\t\t\t<label for=\"end\">To</label>\n\t\t\t\t\t\t\t<p-calendar id=\"end\" *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.end\" [showTime]=\"true\" appendTo=\"body\"></p-calendar>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-field-checkbox\">\n\t\t\t\t\t\t\t<p-checkbox id=\"allday\" *ngIf=\"clickedEvent\" [(ngModel)]=\"changedEvent.allday\"></p-checkbox>\n\t\t\t\t\t\t\t<label for=\"allday\">All Day</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\t\t\t\t<ng-template pTemplate=\"footer\">\n\t\t\t\t\t<button pButton label=\"Save\" icon=\"pi pi-check\" class=\"p-button-text\" (click)=\"save()\"></button>\n\t\t\t\t\t<button pButton label=\"Reset\" icon=\"pi pi-refresh\" class=\"p-button-text\" (click)=\"reset()\"></button>\n\t\t\t\t</ng-template>\n\t\t\t</p-dialog>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    "ZTfH":
    /*!**************************************************************!*\
      !*** ./src/app/apps/envoi/ems/edition/edition.component.css ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function ZTfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "ZnEj":
    /*!***************************************!*\
      !*** ./src/app/app.code.component.ts ***!
      \***************************************/

    /*! exports provided: AppCodeComponent, AppCodeModule */

    /***/
    function ZnEj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCodeComponent", function () {
        return AppCodeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCodeModule", function () {
        return AppCodeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _app_code_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.code.component.scss */
      "rI0q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppCodeComponent = /*#__PURE__*/function () {
        function AppCodeComponent(el) {
          _classCallCheck(this, AppCodeComponent);

          this.el = el;
          this.lang = 'markup';
        }

        _createClass(AppCodeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (window['Prism']) {
              window['Prism'].highlightElement(this.codeViewChild.nativeElement);
            }
          }
        }]);

        return AppCodeComponent;
      }();

      AppCodeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      AppCodeComponent.propDecorators = {
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        codeViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['code']
        }]
      };
      AppCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-code',
        template: "\n        <pre [ngClass]=\"'language-' + lang\"><code #code><ng-content></ng-content>\n</code></pre>\n    ",
        styles: [_app_code_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AppCodeComponent);

      var AppCodeModule = function AppCodeModule() {
        _classCallCheck(this, AppCodeModule);
      };

      AppCodeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [AppCodeComponent],
        declarations: [AppCodeComponent]
      })], AppCodeModule);
      /***/
    },

    /***/
    "a6dQ":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/documentation.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function a6dQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card docs\">\n\n            <h4>Current Version</h4>\n            <p>Angular 11 and PrimeNG 11</p>\n\n            <h4>Dependencies</h4>\n            <p>Avalon has no direct dependency. More information about dependencies is available at <a href=\"https://www.primefaces.org/why-primeng-templates/\">Why PrimeNG Templates</a> article.</p>\n\n            <h4>Getting Started</h4>\n            <p>Avalon is a true native application template for Angular and is distributed as a CLI project. If you don't have CLI installed already run the following commands to set it up. In case\n            you have an application that do not use CLI, skip the <a href=\"#noncli\">Integration with an Existing Non CLI Application</a> part.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nnpm install -g @angular/cli\n</app-code>\n\n            <p>Once CLI is ready in your system, extract the contents of the avalon zip file distribution, cd to the directory,\n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment at http://localhost:4200/.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\ncd avalon\nnpm install\nng serve\n</app-code>\n\n            <p>That's it, you may now start with the development of your application.</p>\n\n            <h4>Important CLI Commands</h4>\n            <p>Following commands are derived from CLI.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n</app-code>\n\n            <h4>Structure</h4>\n            <p>avalon consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout,\n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder.\n            </p>\n\n            <h4>Template</h4>\n            <p>Main layout is the html view of the app.component.ts, it is divided into a couple of sections such as topbar, profile, menu and footer. Here is the code for\n                the main template. The component class app.component.ts implements the logic such as opening menus, managing layout modes and so on.\n            </p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\n&lt;div class=\"layout-wrapper\" (click)=\"onLayoutClick()\"\n    [ngClass]=\"&#123;'menu-layout-static': app.layoutMode !== 'overlay',\n\t\t\t\t'menu-layout-overlay': app.layoutMode === 'overlay',\n\t\t\t\t'layout-menu-overlay-active': overlayMenuActive,\n\t\t\t\t'menu-layout-slim': app.layoutMode === 'slim',\n\t\t\t\t'menu-layout-horizontal': app.layoutMode === 'horizontal',\n\t\t\t\t'layout-menu-static-inactive': this.staticMenuDesktopInactive,\n\t\t\t\t'layout-menu-static-active': staticMenuMobileActive,\n                'p-input-filled': app.inputStyle === 'filled',\n                'p-ripple-disabled': !app.ripple&#125;\"&gt;\n\n    &lt;app-topbar&gt;&lt;/app-topbar&gt;\n\n    &lt;div class=\"layout-menu-container\" [ngClass]=\"&#123;'layout-menu-dark':app.darkMenu&#125;\" (click)=\"onMenuClick($event)\"&gt;\n        &lt;div class=\"menu-scroll-content\"&gt;\n            &lt;inline-profile *ngIf=\"app.profileMode=='inline'&&!isHorizontal()\"&gt;&lt;/inline-profile&gt;\n            &lt;app-menu&gt;&lt;/app-menu&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"layout-main\"&gt;\n        &lt;router-outlet&gt;&lt;/router-outlet&gt;\n    &lt;/div&gt;\n\n    &lt;div class=\"layout-mask\"&gt;&lt;/div&gt;\n\n    &lt;app-config&gt;&lt;/app-config&gt;\n\n    &lt;app-footer&gt;&lt;/app-footer&gt;\n\n&lt;/div&gt;\n</app-code>\n\n            <h4>Menu</h4>\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems,\n            navigate to this file and define your own model as a nested structure. Here is the menu component from the sample application.</p>\n<div style=\"height:400px;overflow: auto;\">\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\nimport &#123;Component, OnInit&#125; from '@angular/core';\n\n@Component(&#123;\n    selector: 'app-menu',\n    template: `\n    &lt;ul class=&quot;layout-menu layout-main-menu clearfix&quot;&gt;\n        &lt;li app-menuitem *ngFor=&quot;let item of model; let i = index;&quot; [item]=&quot;item&quot; [index]=&quot;i&quot; [root]=&quot;true&quot;&gt;&lt;/li&gt;\n    &lt;/ul&gt;\n    `\n&#125;)\nexport class AppMenuComponent implements OnInit &#123;\n\n    model: any[];\n\n    ngOnInit() &#123;\n        this.model = [\n            &#123;\n                label: 'Favorites', icon: 'pi pi-home',\n                items: [\n                    &#123;\n                        label: 'Dashboards', icon: 'pi pi-fw pi-home', routerLink: ['/dashboards'],\n                        items: [\n                            &#123;label: 'Generic', icon: 'pi pi-fw pi-home', routerLink: ['/dashboards/generic']&#125;,\n                            &#123;label: 'Banking', icon: 'pi pi-fw pi-money-bill', routerLink: ['/dashboards/dashboard_banking']&#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],\n                items: [\n                    &#123;label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']&#125;,\n                    &#123;label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']&#125;,\n                    &#123;label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/uikit/floatlabel']&#125;,\n                    &#123;label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/uikit/invalidstate']&#125;,\n                    &#123;label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'&#125;,\n                    &#123;label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']&#125;,\n                    &#123;label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']&#125;,\n                    &#123;label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']&#125;,\n                    &#123;label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']&#125;,\n                    &#123;label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']&#125;,\n                    &#123;label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']&#125;,\n                    &#123;label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']&#125;,\n                    &#123;label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']&#125;,\n                    &#123;label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']&#125;,\n                    &#123;label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],\n                items: [\n                    &#123;label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']&#125;,\n                    &#123;label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']&#125;,\n                    &#123;label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']&#125;,\n                    &#123;label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']&#125;,\n                    &#123;label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']&#125;,\n                    &#123;label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']&#125;,\n                    &#123;label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']&#125;,\n                    &#123;label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']&#125;,\n                    &#123;label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Pages', icon: 'pi pi-fw pi-clone', routerLink: ['/pages'],\n                items: [\n                    &#123;label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']&#125;,\n                    &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']&#125;,\n                    &#123;label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']&#125;,\n                    &#123;label: 'Landing Page', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank'&#125;,\n                    &#123;label: 'Login Page', icon: 'pi pi-fw pi-question-circle', routerLink: ['/login'], target: '_blank'&#125;,\n                    &#123;label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']&#125;,\n                    &#123;label: 'Wizard', icon: 'pi pi-fw pi-star', routerLink: ['/wizard']&#125;,\n                    &#123;label: 'Help Page', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']&#125;,\n                    &#123;label: 'Error Page', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error'], target: '_blank'&#125;,\n                    &#123;label: 'Not Found Page', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound'], target: '_blank'&#125;,\n                    &#123;label: 'Access Denied Page', icon: 'pi pi-fw pi-lock', routerLink: ['/accessdenied'], target: '_blank'&#125;,\n                    &#123;label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt',\n                items: [\n                    &#123;\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-circle-off',\n                        items: [\n                            &#123;\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-circle-off',\n                                items: [\n                                    &#123;label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                    &#123;label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                    &#123;label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-circle-off',\n                                items: [\n                                    &#123;label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                    &#123;label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-circle-off'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-circle-off',\n                        items: [\n                            &#123;\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-circle-off',\n                                items: [\n                                    &#123;label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                    &#123;label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                    &#123;label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-circle-off',\n                                items: [\n                                    &#123;label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-circle-off'&#125;,\n                                    &#123;label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-circle-off'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Start', icon: 'pi pi-download',\n                items: [\n                    &#123;\n                        label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']\n                    &#125;,\n                    &#123;\n                        label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']\n                    &#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</app-code>\n</div>\n\n\n            <h4>Integration with an Existing CLI Project</h4>\n            <p>To setup avalon in an existing project, copy the <i>src/assets</i> folder to your projects folder with the same name\n                and replace the contents of app.component.ts, app.component.html with their counterparts in avalon under <i>src/app</i> folder.</p>\n\n            <p>Install PrimeNG</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nnpm install primeng@latest --save\nnpm install primeicons@latest --save\n</app-code>\n\n            <p>Add PrimeNG CSS at styles section in angular.json.</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\n\"styles\": [\n    \"styles.scss\"                                               //your styles and overrides\n],\n</app-code>\n\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>\n\n            <h4 id=\"noncli\">Integration with an Existing Non-CLI Project</h4>\n            <p>For an existing project that do not use CLI, setup steps are more or less similar. Start with installing the dependencies listed above in package.json</p>\n            <p>Copy the <i>src/assets</i> folder to your application and include the resources listed above with a module bundler like webpack or using link-script tags.</p>\n            <p>Finally copy the contents of app.component.html to your application's main component template such as <i>app/application.html</i> along\n            with the sub components which are app.menu.component.ts, app.profile.components.ts, app.topbar.component.ts and app.footer.component.ts.</p>\n\n            <h4>Theme</h4>\n            <p>Avalon provides 15 PrimeNG themes out of the box, setup of a theme simple including the css of theme to your application. All themes are located inside are located inside assets/theme folder.</p>\n\n            <ul>\n                <li>theme-amber</li>\n                <li>theme-blue</li>\n                <li>theme-brown</li>\n                <li>theme-cyan</li>\n                <li>theme-darkgrey</li>\n                <li>theme-deeppurple</li>\n                <li>theme-green</li>\n                <li>theme-indigo</li>\n                <li>theme-lightblue</li>\n                <li>theme-lightgreen</li>\n                <li>theme-lime</li>\n                <li>theme-orange</li>\n                <li>theme-pink</li>\n                <li>theme-purple</li>\n                <li>theme-teal</li>\n            </ul>\n\n            <p>A custom theme can be developed by the following steps.</p>\n            <ul>\n                <li>Choose a custom theme name such as theme-myown.</li>\n                <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>\n                <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Include the generated theme.css to your page.</li>\n            </ul>\n\n            <p>Here are the variables required to create a theme, you may need to change the last line according to the\n                relative path of the sass folder in your application.</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n$primaryLightColor: rgba(38,143,255,.5);\n$primaryColor: #007bff;\n$primaryDarkColor: #0069d9;\n$primaryDarkerColor: #0062cc;\n$primaryTextColor: #ffffff;\n\n$highlightBg: $primaryColor;\n$highlightTextColor: $primaryTextColor;\n\n@import '../sass/theme/_theme';\n</app-code>\n\n            <p> An example sass command to compile the css would be;</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nsass src/assets/theme/theme-myown.scss src/assets/theme/theme-myown.css\n</app-code>\n\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\nsass --watch src/:src/ --no-source-map\n</app-code>\n\n            <p>Same can also be applied to layout itself;</p>\n            <ul>\n                <li>Choose a layout name such as layout-myown.</li>\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\n            </ul>\n\n            <p>Here are the variables required to create a layout, you may need to change the last line according to the\n                relative path of the sass folder in your application.</p>\n\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n$topbarLeftGradientStartBgColor:#ff8f00;\n$topbarLeftGradientEndBgColor:#ffb300;\n$topbarRightGradientStartBgColor:#ff8f00;\n$topbarRightGradientEndBgColor:#ffb300;\n$topbarTextColor:#ffffff;\n$menuGradientStartBgColor:#ffffff;\n$menuGradientEndBgColor:#ffffff;\n$menuitemHoverBgColor:#e8e8e8;\n$menuitemActiveColor: #ff8f00;\n$menuitemActiveBgColor:#e8e8e8;\n$menuButtonBgColor:#ffffff;\n$menuButtonColor:#ff6f00;\n$badgeBgColor:#3eb839;\n$badgeColor:#ffffff;\n$darkMenuGradientStartBgColor:#363a41;\n$darkMenuGradientEndBgColor:#363a41;\n$darkMenuHoverBgColor:#4a4d54;\n$darkMenuMenuitemColor:#ffffff;\n$darkMenuMenuitemActiveColor:#ffe57f;\n$darkMenuMenuitemActiveBgColor:#282b30;\n\n@import '../../sass/layout/_layout';\n</app-code>\n\n            <h4>Common SASS Variables</h4>\n            <p>In case you'd like to customize common variables, the _common.scss under sass variables folder is where the core variables (e.g. font size, paddings) for the layout are defined.</p>\n\n<h5>sass/layout/_variables.scss</h5>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n$fontFamily:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\n$fontSize:14px;\n$textColor:#292B2C;\n$textSecondaryColor:#777777;\n$borderRadius:4px;\n$dividerColor:#e5e5e5;\n$transitionDuration:.3s;\n$disabledBgColor:#eeeeee;\n\n/* Predefined Colors */\n$lightestGray:#f5f5f5;\n$lightGray:#cccccc;\n$gray:#999999;\n$darkGray:#777777;\n$white:#ffffff;\n\n$blue:#007bff;\n$purple:#9189fd;\n$orange:#ffbf79;\n$lightBlue:#8dc8ff;\n$pink:#f790c8;\n$indigo:#6610f2;\n$green:#3e9018;\n$red:#da2f31;\n$orange:#ffb200;\n$teal:#599597;\n$black:#000000;\n$yellow:#ffd644;\n\n\n$inputInvalidBorderColor:#b94a48;\n$inputInvalidBgColor:#ffffff;\n</app-code>\n\n            <h5>sass/theme/_variables.scss</h5>\n<div style=\"height:400px;overflow: auto;\">\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\n//reused color variables\n$shade000:#ffffff;              //surface\n$shade100:rgba(0,0,0,.03);      //header background\n$shade200:#e9ecef;              //hover background\n$shade300:#dee2e6;              //border, divider\n$shade400:#ced4da;              //input border\n$shade500:#adb5bd;              //unused\n$shade600:#6c757d;              //text secondary color\n$shade700:#495057;              //input text color\n$shade800:#343a40;              //unused\n$shade900:#212529;              //text color\n\n//global\n$fontFamily:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n$fontSize:1rem;\n$fontWeight:normal;\n$textColor:$shade900;\n$textSecondaryColor:$shade600;\n$borderRadius:4px;\n$transitionDuration:.15s;\n$formElementTransition:background-color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration;\n$actionIconTransition:box-shadow $transitionDuration;\n$listItemTransition:box-shadow $transitionDuration;\n$primeIconFontSize:1rem;\n$divider:1px solid $shade300;\n$inlineSpacing:.5rem;\n$disabledOpacity:.65;\n$maskBg:rgba(0, 0, 0, 0.4);\n$loadingIconFontSize:2rem;\n$errorColor:#dc3545;\n\n//scale\n$scaleSM:0.875;\n$scaleLG:1.25;\n\n//focus\n$focusOutlineColor:$primaryLightColor;\n$focusOutline:0 none;\n$focusOutlineOffset:0;\n$focusShadow:0 0 0 0.2rem $focusOutlineColor;\n\n//action icons\n$actionIconWidth:2rem;\n$actionIconHeight:2rem;\n$actionIconBg:transparent;\n$actionIconBorder:0 none;\n$actionIconColor:$shade600;\n$actionIconHoverBg:transparent;\n$actionIconHoverBorderColor:transparent;\n$actionIconHoverColor:$shade700;\n$actionIconBorderRadius:50%;\n\n//input field (e.g. inputtext, spinner, inputmask)\n$inputPadding:.5rem .75rem;\n$inputTextFontSize:1rem;\n$inputBg:$shade000;\n$inputTextColor:$shade700;\n$inputIconColor:$shade700;\n$inputBorder:1px solid $shade400;\n$inputHoverBorderColor:$shade400;\n$inputFocusBorderColor:$primaryColor;\n$inputErrorBorderColor:$errorColor;\n$inputPlaceholderTextColor:$shade600;\n$inputFilledBg:$shade100;\n$inputFilledHoverBg:$shade100;\n$inputFilledFocusBg:$shade100;\n\n//input groups\n$inputGroupBg:$shade200;\n$inputGroupTextColor:$shade700;\n$inputGroupAddOnMinWidth:2.357rem;\n\n//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)\n$inputListBg:$shade000;\n$inputListTextColor:$shade900;\n$inputListBorder:$inputBorder;\n$inputListPadding:.5rem 0;\n$inputListItemPadding:.5rem 1.5rem;\n$inputListItemBg:transparent;\n$inputListItemTextColor:$shade900;\n$inputListItemHoverBg:$shade200;\n$inputListItemTextHoverColor:$shade900;\n$inputListItemBorder:0 none;\n$inputListItemBorderRadius:0;\n$inputListItemMargin:0;\n$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor;\n$inputListHeaderPadding:.75rem 1.5rem;\n$inputListHeaderMargin:0;\n$inputListHeaderBg:$shade100;\n$inputListHeaderTextColor:$shade900;\n$inputListHeaderBorder:1px solid $shade300;\n\n//inputs with overlays (e.g. autocomplete, dropdown, multiselect)\n$inputOverlayBg:$inputListBg;\n$inputOverlayHeaderBg:$inputListHeaderBg;\n$inputOverlayBorder:1px solid rgba(0,0,0,.15);\n$inputOverlayShadow:none;\n\n//button\n$buttonPadding:.5rem .75rem;\n$buttonIconOnlyWidth:2.357rem;\n$buttonIconOnlyPadding:.5rem 0;\n$buttonBg:$primaryColor;\n$buttonTextColor:$primaryTextColor;\n$buttonBorder:1px solid $primaryColor;\n$buttonHoverBg:$primaryDarkColor;\n$buttonTextHoverColor:$primaryTextColor;\n$buttonHoverBorderColor:$primaryDarkColor;\n$buttonActiveBg:$primaryDarkerColor;\n$buttonTextActiveColor:$primaryTextColor;\n$buttonActiveBorderColor:$primaryDarkerColor;\n$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n$roundedButtonBorderRadius:2rem;\n\n$textButtonHoverBgOpacity:.04;\n$textButtonActiveBgOpacity:.16;\n$outlinedButtonBorder:1px solid;\n$plainButtonTextColor:$textSecondaryColor;\n$plainButtonHoverBgColor:$shade200;\n$plainButtonActiveBgColor:$shade300;\n\n$secondaryButtonBg:#6c757d;\n$secondaryButtonTextColor:#ffffff;\n$secondaryButtonBorder:1px solid #6c757d;\n$secondaryButtonHoverBg:#5a6268;\n$secondaryButtonTextHoverColor:#ffffff;\n$secondaryButtonHoverBorderColor:#5a6268;\n$secondaryButtonActiveBg:#545b62;\n$secondaryButtonTextActiveColor:#ffffff;\n$secondaryButtonActiveBorderColor:#4e555b;\n$secondaryButtonFocusShadow:0 0 0 0.2rem rgba(130,138,145,.5);\n\n$infoButtonBg:#17a2b8;\n$infoButtonTextColor:#ffffff;\n$infoButtonBorder:1px solid #17a2b8;\n$infoButtonHoverBg:#138496;\n$infoButtonTextHoverColor:#ffffff;\n$infoButtonHoverBorderColor:#117a8b;\n$infoButtonActiveBg:#138496;\n$infoButtonTextActiveColor:#ffffff;\n$infoButtonActiveBorderColor:#117a8b;\n$infoButtonFocusShadow:0 0 0 0.2rem rgba(58,176,195,.5);\n\n$successButtonBg:#28a745;\n$successButtonTextColor:#ffffff;\n$successButtonBorder:1px solid #28a745;\n$successButtonHoverBg:#218838;\n$successButtonTextHoverColor:#ffffff;\n$successButtonHoverBorderColor:#1e7e34;\n$successButtonActiveBg:#1e7e34;\n$successButtonTextActiveColor:#ffffff;\n$successButtonActiveBorderColor:#1c7430;\n$successButtonFocusShadow:0 0 0 0.2rem rgba(72,180,97,.5);\n\n$warningButtonBg:#ffc107;\n$warningButtonTextColor:#212529;\n$warningButtonBorder:1px solid #ffc107;\n$warningButtonHoverBg:#e0a800;\n$warningButtonTextHoverColor:#212529;\n$warningButtonHoverBorderColor:#d39e00;\n$warningButtonActiveBg:#d39e00;\n$warningButtonTextActiveColor:#212529;\n$warningButtonActiveBorderColor:#c69500;\n$warningButtonFocusShadow:0 0 0 0.2rem rgba(222,170,12,.5);\n\n$helpButtonBg:#6f42c1;\n$helpButtonTextColor:#ffffff;\n$helpButtonBorder:1px solid #6f42c1;\n$helpButtonHoverBg:#633bad;\n$helpButtonTextHoverColor:#ffffff;\n$helpButtonHoverBorderColor:#58349a;\n$helpButtonActiveBg:#58349a;\n$helpButtonTextActiveColor:#ffffff;\n$helpButtonActiveBorderColor:#4d2e87;\n$helpButtonFocusShadow:0 0 0 0.2rem #d3c6ec;\n\n$dangerButtonBg:#dc3545;\n$dangerButtonTextColor:#ffffff;\n$dangerButtonBorder:1px solid #dc3545;\n$dangerButtonHoverBg:#c82333;\n$dangerButtonTextHoverColor:#ffffff;\n$dangerButtonHoverBorderColor:#bd2130;\n$dangerButtonActiveBg:#bd2130;\n$dangerButtonTextActiveColor:#ffffff;\n$dangerButtonActiveBorderColor:#b21f2d;\n$dangerButtonFocusShadow:0 0 0 0.2rem rgba(225,83,97,.5);\n\n$linkButtonColor:$primaryColor;\n$linkButtonHoverColor:$primaryDarkColor;\n$linkButtonTextHoverDecoration:underline;\n$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor;\n\n//checkbox\n$checkboxWidth:20px;\n$checkboxHeight:20px;\n$checkboxBorder:2px solid $shade400;\n$checkboxIconFontSize:14px;\n$checkboxActiveBorderColor:$primaryColor;\n$checkboxActiveBg:$primaryColor;\n$checkboxIconActiveColor:$primaryTextColor;\n$checkboxActiveHoverBg:$primaryDarkerColor;\n$checkboxIconActiveHoverColor:$primaryTextColor;\n$checkboxActiveHoverBorderColor:$primaryDarkerColor;\n\n//radiobutton\n$radiobuttonWidth:20px;\n$radiobuttonHeight:20px;\n$radiobuttonBorder:2px solid $shade400;\n$radiobuttonIconSize:12px;\n$radiobuttonActiveBorderColor:$primaryColor;\n$radiobuttonActiveBg:$primaryColor;\n$radiobuttonIconActiveColor:$primaryTextColor;\n$radiobuttonActiveHoverBg:$primaryDarkerColor;\n$radiobuttonIconActiveHoverColor:$primaryTextColor;\n$radiobuttonActiveHoverBorderColor:$primaryDarkerColor;\n\n//colorpicker\n$colorPickerPreviewWidth:2rem;\n$colorPickerPreviewHeight:2rem;\n$colorPickerBg:#212529;\n$colorPickerBorderColor:#212529;\n$colorPickerHandleColor:$shade000;\n\n//togglebutton\n$toggleButtonBg:#6c757d;\n$toggleButtonBorder:1px solid #6c757d;\n$toggleButtonTextColor:#ffffff;\n$toggleButtonIconColor:#ffffff;\n$toggleButtonHoverBg:#5a6268;\n$toggleButtonHoverBorderColor:#545b62;\n$toggleButtonTextHoverColor:#ffffff;\n$toggleButtonIconHoverColor:#ffffff;\n$toggleButtonActiveBg:#545b62;\n$toggleButtonActiveBorderColor:#4e555b;\n$toggleButtonTextActiveColor:#ffffff;\n$toggleButtonIconActiveColor:#ffffff;\n$toggleButtonActiveHoverBg:#545b62;\n$toggleButtonActiveHoverBorderColor:#4e555b;\n$toggleButtonTextActiveHoverColor:#ffffff;\n$toggleButtonIconActiveHoverColor:#ffffff;\n\n//inplace\n$inplacePadding:$inputPadding;\n$inplaceHoverBg:$shade200;\n$inplaceTextHoverColor:$shade900;\n\n//rating\n$ratingIconFontSize:1.143rem;\n$ratingCancelIconColor:#dc3545;\n$ratingCancelIconHoverColor:#dc3545;\n$ratingStarIconOffColor:$shade700;\n$ratingStarIconOnColor:$primaryColor;\n$ratingStarIconHoverColor:$primaryColor;\n\n//slider\n$sliderBg:$shade200;\n$sliderBorder:0 none;\n$sliderHorizontalHeight:.286rem;\n$sliderVerticalWidth:0.286rem;\n$sliderHandleWidth:1.143rem;\n$sliderHandleHeight:1.143rem;\n$sliderHandleBg:$primaryColor;\n$sliderHandleBorder:2px solid $primaryColor;\n$sliderHandleBorderRadius:$borderRadius;\n$sliderHandleHoverBorderColor:$primaryDarkColor;\n$sliderHandleHoverBg:$primaryDarkColor;\n$sliderRangeBg:$primaryColor;\n\n//calendar\n$calendarTableMargin:.5rem 0;\n$calendarPadding:0;\n$calendarBg:$shade000;\n$calendarInlineBg:$calendarBg;\n$calendarTextColor:$shade900;\n$calendarBorder:$inputListBorder;\n$calendarOverlayBorder:$inputOverlayBorder;\n\n$calendarHeaderPadding:.5rem;\n$calendarHeaderBg:$shade100;\n$calendarInlineHeaderBg:$calendarBg;\n$calendarHeaderBorder:1px solid $shade300;\n$calendarHeaderTextColor:$shade900;\n$calendarHeaderFontWeight:600;\n$calendarHeaderCellPadding:.5rem;\n\n$calendarCellDatePadding:.5rem;\n$calendarCellDateWidth:2.5rem;\n$calendarCellDateHeight:2.5rem;\n$calendarCellDateBorderRadius:$borderRadius;\n$calendarCellDateBorder:1px solid transparent;\n$calendarCellDateHoverBg:$shade200;\n$calendarCellDateTodayBg:$shade400;\n$calendarCellDateTodayBorderColor:transparent;\n$calendarCellDateTodayTextColor:$shade900;\n\n$calendarButtonBarPadding:1rem 0;\n$calendarTimePickerPadding:.5rem;\n$calendarTimePickerElementPadding:0 .5rem;\n$calendarTimePickerTimeFontSize:1.25rem;\n\n$calendarBreakpoint:769px;\n$calendarCellDatePaddingSM:0;\n\n//input switch\n$inputSwitchWidth:3rem;\n$inputSwitchHeight:1.75rem;\n$inputSwitchBorderRadius:$borderRadius;\n$inputSwitchHandleWidth:1.250rem;\n$inputSwitchHandleHeight:1.250rem;\n$inputSwitchHandleBorderRadius:$borderRadius;\n$inputSwitchSliderPadding:.25rem;\n$inputSwitchSliderOffBg:$shade400;\n$inputSwitchHandleOffBg:$shade000;\n$inputSwitchSliderOffHoverBg:$shade400;\n$inputSwitchSliderOnBg:$primaryColor;\n$inputSwitchSliderOnHoverBg:$primaryColor;\n$inputSwitchHandleOnBg:$shade000;\n\n//panel\n$panelHeaderBorder:1px solid $shade300;\n$panelHeaderBg:$shade100;\n$panelHeaderTextColor:$shade900;\n$panelHeaderFontWeight:600;\n$panelHeaderPadding:1rem 1.25rem;\n$panelToggleableHeaderPadding:.5rem 1.25rem;\n\n$panelHeaderHoverBg:$shade200;\n$panelHeaderHoverBorderColor:$shade300;\n$panelHeaderTextHoverColor:$shade900;\n\n$panelContentBorder:1px solid $shade300;\n$panelContentBg:$shade000;\n$panelContentTextColor:$shade900;\n$panelContentPadding:1.25rem;\n\n$panelFooterBorder:1px solid $shade300;\n$panelFooterBg:$shade000;\n$panelFooterTextColor:$shade900;\n$panelFooterPadding:.5rem 1.25rem;\n\n//accordion\n$accordionSpacing:0;\n$accordionHeaderBorder:$panelHeaderBorder;\n$accordionHeaderBg:$panelHeaderBg;\n$accordionHeaderTextColor:$panelHeaderTextColor;\n$accordionHeaderFontWeight:$panelHeaderFontWeight;\n$accordionHeaderPadding:$panelHeaderPadding;\n\n$accordionHeaderHoverBg:$shade200;\n$accordionHeaderHoverBorderColor:$shade300;\n$accordionHeaderTextHoverColor:$shade900;\n\n$accordionHeaderActiveBg:$panelHeaderBg;\n$accordionHeaderActiveBorderColor:$shade300;\n$accordionHeaderTextActiveColor:$shade900;\n\n$accordionHeaderActiveHoverBg:$shade200;\n$accordionHeaderActiveHoverBorderColor:$shade300;\n$accordionHeaderTextActiveHoverColor:$shade900;\n\n$accordionContentBorder:$panelContentBorder;\n$accordionContentBg:$panelContentBg;\n$accordionContentTextColor:$panelContentTextColor;\n$accordionContentPadding:$panelContentPadding;\n\n//tabview\n$tabviewNavBorder:1px solid #dee2e6;\n$tabviewNavBorderWidth:0 0 1px 0;\n$tabviewNavBg:transparent;\n\n$tabviewHeaderSpacing:0;\n$tabviewHeaderBorder:solid;\n$tabviewHeaderBorderWidth:1px;\n$tabviewHeaderBorderColor:$shade000 $shade000 #dee2e6 $shade000;\n$tabviewHeaderBg:$shade000;\n$tabviewHeaderTextColor:$shade600;\n$tabviewHeaderFontWeight:$panelHeaderFontWeight;\n$tabviewHeaderPadding:.75rem 1rem;\n$tabviewHeaderMargin:0 0 -1px 0;\n\n$tabviewHeaderHoverBg:$shade000;\n$tabviewHeaderHoverBorderColor:#dee2e6;\n$tabviewHeaderTextHoverColor:$shade600;\n\n$tabviewHeaderActiveBg:$shade000;\n$tabviewHeaderActiveBorderColor:#dee2e6 #dee2e6 $shade000 #dee2e6;\n$tabviewHeaderTextActiveColor:$shade700;\n\n$tabviewContentBorder:0 none;\n$tabviewContentBg:$panelContentBg;\n$tabviewContentTextColor:$panelContentTextColor;\n$tabviewContentPadding:$panelContentPadding;\n\n//upload\n$fileUploadProgressBarHeight:.25rem;\n$fileUploadContentPadding:2rem 1rem;\n\n//scrollpanel\n$scrollPanelTrackBorder:0 none;\n$scrollPanelTrackBg:$shade100;\n\n//card\n$cardBodyPadding:1.5rem;\n$cardTitleFontSize:1.5rem;\n$cardTitleFontWeight:700;\n$cardSubTitleFontWeight:400;\n$cardSubTitleColor:$shade600;\n$cardContentPadding:1rem 0;\n$cardFooterPadding:1rem 0 0 0;\n$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n\n//editor\n$editorToolbarBg:$panelHeaderBg;\n$editorToolbarBorder:$panelHeaderBorder;\n$editorToolbarPadding:$panelHeaderPadding;\n$editorToolbarIconColor:$textSecondaryColor;\n$editorToolbarIconHoverColor:$textColor;\n$editorIconActiveColor:$primaryColor;\n$editorContentBorder:$panelContentBorder;\n$editorContentBg:$panelContentBg;\n\n//paginator\n$paginatorBg:$shade000;\n$paginatorTextColor:$primaryColor;\n$paginatorBorder:solid $shade300;\n$paginatorBorderWidth:0;\n$paginatorPadding:.75rem;\n$paginatorElementWidth:$buttonIconOnlyWidth;\n$paginatorElementHeight:$buttonIconOnlyWidth;\n$paginatorElementBg:$shade000;\n$paginatorElementBorder:1px solid #dee2e6;\n$paginatorElementIconColor:$primaryColor;\n$paginatorElementHoverBg:$shade200;\n$paginatorElementHoverBorderColor:#dee2e6;\n$paginatorElementIconHoverColor:$primaryColor;\n$paginatorElementBorderRadius:0;\n$paginatorElementMargin:0 0 0 -1px;\n$paginatorElementPadding:0;\n\n//table\n$tableHeaderBorder:solid #dee2e6;\n$tableHeaderBorderWidth:1px 0 0 0;\n$tableHeaderBg:$shade100;\n$tableHeaderTextColor:$shade900;\n$tableHeaderFontWeight:600;\n$tableHeaderPadding:1rem 1rem;\n\n$tableHeaderCellPadding:1rem 1rem;\n$tableHeaderCellBg:$shade000;\n$tableHeaderCellTextColor:$shade900;\n$tableHeaderCellFontWeight:600;\n$tableHeaderCellBorder:1px solid #dee2e6;\n$tableHeaderCellBorderWidth:1px 0 2px 0;\n$tableHeaderCellHoverBg:$shade200;\n$tableHeaderCellTextHoverColor:$shade900;\n$tableHeaderCellIconColor:$shade600;\n$tableHeaderCellIconHoverColor:$shade600;\n$tableHeaderCellHighlightBg:$shade000;\n$tableHeaderCellHighlightTextColor:$primaryColor;\n$tableHeaderCellHighlightHoverBg:$shade200;\n$tableHeaderCellHighlightTextHoverColor:$primaryColor;\n$tableSortableColumnBadgeSize:1.143rem;\n\n$tableBodyRowBg:$shade000;\n$tableBodyRowTextColor:$shade900;\n$tableBodyRowEvenBg:rgba(0,0,0,.05);\n$tableBodyRowHoverBg:$shade200;\n$tableBodyRowTextHoverColor:$shade900;\n$tableBodyCellBorder:1px solid #dee2e6;\n$tableBodyCellBorderWidth:1px 0 0 0;\n$tableBodyCellPadding:1rem 1rem;\n\n$tableFooterCellPadding:1rem 1rem;\n$tableFooterCellBg:$shade000;\n$tableFooterCellTextColor:$shade900;\n$tableFooterCellFontWeight:600;\n$tableFooterCellBorder:1px solid #dee2e6;\n$tableFooterCellBorderWidth:1px 0 1px 0;\n$tableResizerHelperBg:$primaryColor;\n\n$tableFooterBorder:1px solid #dee2e6;\n$tableFooterBorderWidth:1px 0 1px 0;\n$tableFooterBg:$shade100;\n$tableFooterTextColor:$shade900;\n$tableFooterFontWeight:600;\n$tableFooterPadding:1rem 1rem;\n\n$tableCellContentAlignment:left;\n$tableTopPaginatorBorderWidth:1px 0 0 0;\n$tableBottomPaginatorBorderWidth:1px 0 0 0;\n\n$tableScaleSM:0.5;\n$tableScaleLG:1.25;\n\n//dataview\n$dataViewContentPadding:0;\n$dataViewContentBorder:0 none;\n$dataViewListItemBorder:1px solid $shade300;\n$dataViewListItemBorderWidth:1px 0 0 0;\n\n//orderlist, picklist\n$orderListBreakpoint:769px;\n$pickListBreakpoint:769px;\n\n//schedule\n$fullCalendarEventBg:$primaryDarkColor;\n$fullCalendarEventBorder:1px solid $primaryDarkColor;\n$fullCalendarEventTextColor:$primaryTextColor;\n\n//tree\n$treeContainerPadding:0.286rem;\n$treeNodePadding:0.143rem;\n$treeNodeContentPadding:.5rem;\n$treeNodeChildrenPadding:0 0 0 1rem;\n$treeNodeIconColor:$shade600;\n\n//org chart\n$organizationChartConnectorColor:$shade300;\n\n//message\n$messageMargin:1rem 0;\n$messagePadding:1rem 1.25rem;\n$messageBorderWidth:1px;\n$messageIconFontSize:1.5rem;\n$messageTextFontSize:1rem;\n$messageTextFontWeight:500;\n\n//inline message\n$inlineMessagePadding:$inputPadding;\n$inlineMessageMargin:0;\n$inlineMessageIconFontSize:1rem;\n$inlineMessageTextFontSize:1rem;\n$inlineMessageBorderWidth:0px;\n\n//toast\n$toastIconFontSize:2rem;\n$toastMessageTextMargin:0 0 0 1rem;\n$toastMargin:0 0 1rem 0;\n$toastPadding:1rem;\n$toastBorderWidth:0;\n$toastShadow:0 0.25rem 0.75rem rgba(0,0,0,.1);\n$toastOpacity:1;\n$toastTitleFontWeight:700;\n$toastDetailMargin:$inlineSpacing 0 0 0;\n\n//severities\n$infoMessageBg:#cce5ff;\n$infoMessageBorder:solid #b8daff;\n$infoMessageTextColor:#004085;\n$infoMessageIconColor:#004085;\n$successMessageBg:#d4edda;\n$successMessageBorder:solid #c3e6cb;\n$successMessageTextColor:#155724;\n$successMessageIconColor:#155724;\n$warningMessageBg:#fff3cd;\n$warningMessageBorder:solid #ffeeba;\n$warningMessageTextColor:#856404;\n$warningMessageIconColor:#856404;\n$errorMessageBg:#f8d7da;\n$errorMessageBorder:solid #f5c6cb;\n$errorMessageTextColor:#721c24;\n$errorMessageIconColor:#721c24;\n\n//overlays\n$overlayContentBorder:1px solid rgba(0,0,0,.2);\n$overlayContentBg:$panelContentBg;\n$overlayContainerShadow:none;\n\n//dialog\n$dialogHeaderBg:$shade000;\n$dialogHeaderBorder:1px solid $shade200;\n$dialogHeaderTextColor:$shade900;\n$dialogHeaderFontWeight:600;\n$dialogHeaderFontSize:1.25rem;\n$dialogHeaderPadding:1rem;\n$dialogContentPadding:1rem;\n$dialogFooterBorder:1px solid $shade200;\n$dialogFooterPadding:1rem;\n\n//tooltip\n$tooltipBg:$shade900;\n$tooltipTextColor:$shade000;\n$tooltipPadding:$inputPadding;\n\n//steps\n$stepsItemBg:transparent;\n$stepsItemBorder:1px solid $shade300;\n$stepsItemTextColor:$shade600;\n$stepsItemNumberWidth:2rem;\n$stepsItemNumberHeight:2rem;\n$stepsItemNumberFontSize:1.143rem;\n$stepsItemNumberColor:$shade900;\n$stepsItemNumberBorderRadius:$borderRadius;\n$stepsItemActiveFontWeight:600;\n\n//progressbar\n$progressBarHeight:1.5rem;\n$progressBarBorder:0 none;\n$progressBarBg:$shade200;\n$progressBarValueBg:$primaryColor;\n\n//menu (e.g. menu, menubar, tieredmenu)\n$menuWidth:12.5rem;\n$menuBg:$shade000;\n$menuBorder:1px solid $shade300;\n$menuTextColor:$shade900;\n$menuitemPadding:.75rem 1rem;\n$menuitemBorderRadius:0;\n$menuitemTextColor:$shade900;\n$menuitemIconColor:$shade900;\n$menuitemTextHoverColor:$shade900;\n$menuitemIconHoverColor:$shade900;\n$menuitemHoverBg:$shade200;\n$menuitemTextActiveColor:$shade900;\n$menuitemIconActiveColor:$shade900;\n$menuitemActiveBg:$shade200;\n$menuitemSubmenuIconFontSize:.875rem;\n$submenuHeaderMargin:0;\n$submenuHeaderPadding:.75rem 1rem;\n$submenuHeaderBg:$shade000;\n$submenuHeaderTextColor:$shade900;\n$submenuHeaderBorderRadius:0;\n$submenuHeaderFontWeight:600;\n$overlayMenuBg:$menuBg;\n$overlayMenuBorder:1px solid rgba(0,0,0,.15);\n$overlayMenuShadow:none;\n$verticalMenuPadding:.5rem 0;\n$menuSeparatorMargin:.5rem 0;\n\n$breadcrumbPadding:1rem;\n$breadcrumbBg:$shade100;\n$breadcrumbBorder:0 none;\n$breadcrumbItemTextColor:$primaryColor;\n$breadcrumbItemIconColor:$primaryColor;\n$breadcrumbLastItemTextColor:$shade600;\n$breadcrumbLastItemIconColor:$shade600;\n$breadcrumbSeparatorColor:$shade600;\n\n$horizontalMenuPadding:.5rem 1rem;\n$horizontalMenuBg:$shade100;\n$horizontalMenuBorder:0 none;\n$horizontalMenuTextColor:rgba(0,0,0,.9);\n$horizontalMenuRootMenuitemPadding:1rem;\n$horizontalMenuRootMenuitemBorderRadius:$borderRadius;\n$horizontalMenuRootMenuitemTextColor:rgba(0,0,0,.5);\n$horizontalMenuRootMenuitemIconColor:rgba(0,0,0,.5);\n$horizontalMenuRootMenuitemTextHoverColor:rgba(0,0,0,.7);\n$horizontalMenuRootMenuitemIconHoverColor:rgba(0,0,0,.7);\n$horizontalMenuRootMenuitemHoverBg:transparent;\n$horizontalMenuRootMenuitemTextActiveColor:rgba(0,0,0,.9);\n$horizontalMenuRootMenuitemIconActiveColor:rgba(0,0,0,.9);\n$horizontalMenuRootMenuitemActiveBg:transparent;\n\n//badge and tag\n$badgeBg:$primaryColor;\n$badgeTextColor:$primaryTextColor;\n$badgeMinWidth:1.5rem;\n$badgeHeight:1.5rem;\n$badgeFontWeight:700;\n$badgeFontSize:.75rem;\n\n$tagPadding:.25rem .4rem;\n\n//carousel\n$carouselIndicatorsPadding:1rem;\n$carouselIndicatorBg:$shade200;\n$carouselIndicatorHoverBg:$shade300;\n$carouselIndicatorBorderRadius:0;\n$carouselIndicatorWidth:2rem;\n$carouselIndicatorHeight:.5rem;\n\n//galleria\n$galleriaMaskBg:rgba(0,0,0,0.9);\n$galleriaCloseIconMargin:.5rem;\n$galleriaCloseIconFontSize:2rem;\n$galleriaCloseIconBg:transparent;\n$galleriaCloseIconColor:$shade100;\n$galleriaCloseIconHoverBg:rgba(255,255,255,0.1);\n$galleriaCloseIconHoverColor:$shade100;\n$galleriaCloseIconWidth:4rem;\n$galleriaCloseIconHeight:4rem;\n$galleriaCloseIconBorderRadius:$borderRadius;\n\n$galleriaItemNavigatorBg:transparent;\n$galleriaItemNavigatorColor:$shade100;\n$galleriaItemNavigatorMargin:0 .5rem;\n$galleriaItemNavigatorFontSize:2rem;\n$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1);\n$galleriaItemNavigatorHoverColor:$shade100;\n$galleriaItemNavigatorWidth:4rem;\n$galleriaItemNavigatorHeight:4rem;\n$galleriaItemNavigatorBorderRadius:$borderRadius;\n\n$galleriaCaptionBg:rgba(0,0,0,.5);\n$galleriaCaptionTextColor:$shade100;\n$galleriaCaptionPadding:1rem;\n\n$galleriaIndicatorsPadding:1rem;\n$galleriaIndicatorBg:$shade200;\n$galleriaIndicatorHoverBg:$shade300;\n$galleriaIndicatorBorderRadius:$borderRadius;\n$galleriaIndicatorWidth:1rem;\n$galleriaIndicatorHeight:1rem;\n$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5);\n$galleriaIndicatorBgOnItem:rgba(255,255,255,.4);\n$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6);\n\n$galleriaThumbnailContainerBg:rgba(0,0,0,.9);\n$galleriaThumbnailContainerPadding:1rem .25rem;\n$galleriaThumbnailNavigatorBg:transparent;\n$galleriaThumbnailNavigatorColor:$shade100;\n$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1);\n$galleriaThumbnailNavigatorHoverColor:$shade100;\n$galleriaThumbnailNavigatorBorderRadius:$borderRadius;\n$galleriaThumbnailNavigatorWidth:2rem;\n$galleriaThumbnailNavigatorHeight:2rem;\n\n//divider\n$dividerHorizontalMargin:1rem 0;\n$dividerHorizontalPadding:0 1rem;\n$dividerVerticalMargin:0 1rem;\n$dividerVerticalPadding:1rem 0;\n$dividerSize:1px;\n$dividerColor:$shade300;\n\n//avatar\n$avatarBg:$shade300;\n$avatarTextColor:$textColor;\n\n//chip\n$chipBg:$shade300;\n$chipTextColor:$textColor;\n$chipBorderRadius: 16px;\n\n//scrollTop\n$scrollTopBg:rgba(0,0,0,0.7);\n$scrollTopHoverBg:rgba(0,0,0,0.8);\n$scrollTopWidth:3rem;\n$scrollTopHeight:3rem;\n$scrollTopBorderRadius:$borderRadius;\n$scrollTopFontSize:1.5rem;\n$scrollTopTextColor:$shade100;\n\n//skeleton\n$skeletonBg:$shade200;\n$skeletonAnimationBg:rgba(255,255,255,0.4);\n\n//splitter\n$splitterGutterBg:$shade100;\n$splitterGutterHandleBg:$shade300;\n\n:root &#123;\n    --surface-a:#&#123;$shade000&#125;;\n    --surface-b:#&#123;$shade100&#125;;\n    --surface-c:#&#123;$shade200&#125;;\n    --surface-d:#&#123;$shade300&#125;;\n    --surface-e:#&#123;$shade000&#125;;\n    --surface-f:#&#123;$shade000&#125;;\n    --text-color:#&#123;$shade900&#125;;\n    --text-color-secondary:#&#123;$shade600&#125;;\n    --primary-color:#&#123;$primaryColor&#125;;\n    --primary-color-text:#&#123;$primaryTextColor&#125;;\n    --font-family:#&#123;$fontFamily&#125;;\n&#125;\n</app-code>\n</div>\n\n            <h4>Menu Modes</h4>\n            <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in application.html is used to define which mode to use by adding specific classes. List\n            below indicates the style classes for each mode. In addition menu</p>\n            <ul>\n                <li>Static: \"layout-wrapper menu-layout-static\"</li>\n                <li>Overlay: \"layout-wrapper menu-layout-overlay\"</li>\n                <li>Slim: \"layout-wrapper menu-layout-static menu-layout-slim\"</li>\n                <li>Horizontal: \"layout-wrapper menu-layout-static menu-layout-horizontal\"</li>\n            </ul>\n\n            <p>For example to create a horizontal menu, the div element should be in following form;</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\n&lt;div class=\"layout-wrapper menu-layout-static menu-layout-horizontal\"&gt;\n</app-code>\n\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\n            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>\n\n            <h4>Dark Menu</h4>\n            <p>Default color scheme of menu is light and alternative dark mode can be activated by adding layout-menu-dark style class to the menu container that\n                is an element having .layout-menu as its class.</p>\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\n&lt;div class=\"layout-menu-container layout-menu-dark\"&gt;\n</app-code>\n\n            <h4>Profile Modes</h4>\n            <p>There are two possible locations for the user profile menu, first version is inline located inside the main menu and second option is the topbar menu. For inline mode,\n            profile content should be placed above the menu and for inline mode content goes in topbar-items list. The sample demo application provides examples for\n            both cases.</p>\n\n            <h4>Grid CSS</h4>\n            <p>Avalon uses PrimeNG Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Ultima Layout itself does not depend on PrimeFlex CSS.</p>\n\n            <h4>Customizing Styles</h4>\n            <p>It is suggested to add your customizations in the following sass files under the override folder instead of adding them to the\n                scss files under sass folder to avoid maintenance issues after an update.</p>\n\n            <ul>\n                <li><b>_layout_variables</b>: Variables of the layout.</li>\n                <li><b>_layout_styles</b>: Styles for the layout.</li>\n                <li><b>_theme_variables</b>: Variables of the theme.</li>\n                <li><b>_theme_styles</b>: Styles for the theme.</li>\n            </ul>\n\n            <h4>Migration Guide</h4>\n            <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "anCR":
    /*!**********************************************!*\
      !*** ./src/app/pages/app.error.component.ts ***!
      \**********************************************/

    /*! exports provided: AppErrorComponent */

    /***/
    function anCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppErrorComponent", function () {
        return AppErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.error.component.html */
      "LwCC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppErrorComponent = function AppErrorComponent() {
        _classCallCheck(this, AppErrorComponent);
      };

      AppErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-error',
        template: _raw_loader_app_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppErrorComponent);
      /***/
    },

    /***/
    "asCk":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/vente/nouveauvente/nouveauvente.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function asCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        \n        <p-panel header=\"Nouveau vente\" class=\"panel-work\">\n            <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n                <p-fieldset legend=\"Formulaire de creation d'une reception colis\">\n                    <form [formGroup]=\"venteForm\" (ngSubmit)=\"save(venteForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!venteForm.controls['typevente'].valid&&venteForm.controls['typevente'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une type de vente car elle est obligatoire\" ></p-message>   </li>\n                                           \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Type de vente <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-9 p-p-md-9\">   \n                                                        <p-dropdown [options]=\"typeventes\" [(ngModel)]=\"typevente\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Selectionner un type de vente \" (onChange)=\"change($event)\"  formControlName=\"typevente\">\n                                                        </p-dropdown>                                   \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Type de vente <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-9 p-p-md-9\">   \n                                                        <p-dropdown [options]=\"itemstypeventes\" [(ngModel)]=\"itemstypevente\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Selectionner un items de vente \"  formControlName=\"itemstypevente\">\n                                                        </p-dropdown>                                   \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Date de vente <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-9 p-p-md-9\">  \n                                                        <p-calendar name=\"datevente\" class=\"form-control\" formControlName=\"datevente\" ></p-calendar>                                                      \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Penalité vente </label>\n                                                    <div class=\"p-col-9 p-p-md-9\">      \n                                                        <p-checkbox [(ngModel)]=\"penalite\" binary=\"true\" (onChange)=\"penaliteEvent($event)\" inputId=\"binary\" formControlName=\"penalite\"></p-checkbox>                                                                                  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Prix total <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-9 p-p-md-9\">  \n                                                        <input type=\"number\" name=\"prix\" pInputText   class=\"form-control\" formControlName=\"prix\"> \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Montant de penalité </label>\n                                                    <div class=\"p-col-9 p-p-md-9\">   \n                                                        <input type=\"number\" name=\"penalitemontant\" pInputText  [disabled]=\"disabled\"  class=\"form-control\" formControlName=\"penalitemontant\"> \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n                                \n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!venteForm.valid\"></button>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </form>\n                </p-fieldset>\n                \n                <p-table [value]=\"listventes\" responsiveLayout=\"scroll\" >\n                    <ng-template pTemplate=\"header\">\n                        <tr>\n                            <th>Vente</th>\n                            <th>Date de vente</th>\n                            <th>Prix Fixe</th>\n                            <th>Penalité</th>\n                            <th>Total</th>\n                            <th>Mise à jour</th>\n                            <th> Date</th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-product>\n                        <tr>\n                            <td>{{product.nom}}</td>\n                            <td>{{product.datevente}}</td>\n                            <td>{{product.prix}}</td>\n                            <td>{{product.penalite}}</td>\n                            <td>{{product.prixtotal}}</td>\n                            <td>{{product.updated.username}}</td>\n                            <td>{{product.updatedat}}</td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>        \n        </p-panel>\n    </div>";
      /***/
    },

    /***/
    "axq9":
    /*!*************************************!*\
      !*** ./src/app/app.menu.service.ts ***!
      \*************************************/

    /*! exports provided: MenuService */

    /***/
    function axq9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuService", function () {
        return MenuService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MenuService = /*#__PURE__*/function () {
        function MenuService() {
          _classCallCheck(this, MenuService);

          this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.menuSource$ = this.menuSource.asObservable();
          this.resetSource$ = this.resetSource.asObservable();
        }

        _createClass(MenuService, [{
          key: "onMenuStateChange",
          value: function onMenuStateChange(key) {
            this.menuSource.next(key);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.resetSource.next();
          }
        }]);

        return MenuService;
      }();

      MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MenuService);
      /***/
    },

    /***/
    "bGFz":
    /*!**************************************************************************************************!*\
      !*** ./src/app/apps/reception/emsreception/nouveauemsreception/nouveauemsreception.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: NouveauemsreceptionComponent */

    /***/
    function bGFz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauemsreceptionComponent", function () {
        return NouveauemsreceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveauemsreception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveauemsreception.component.html */
      "7YNy");
      /* harmony import */


      var _nouveauemsreception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveauemsreception.component.css */
      "bXBM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveauemsreceptionComponent = /*#__PURE__*/function () {
        function NouveauemsreceptionComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveauemsreceptionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'EMS - EE';
          this.disabled = true;
          this.receptiondto = {};
          this.dateactuel = new Date();
          this.dommage = false;
          this.commentdommage = "N/A";
          this.envoisms = false;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveauemsreceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this34 = this;

            this.emsForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'datereception': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'dommage': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('N/A', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'envoisms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysdestinateur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/type/reception/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this34.typeactivites = [];
              response.forEach(function (element) {
                console.log(element);

                if (element['name'] == 'EMS - EE') {
                  _this34.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this34.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this34.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - EMS ");
            });
            /**
            *  -- REQUETE POUR RECUPERER LA LISTE DES PAYS
            */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/pays/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this34.countries = [];
              response.forEach(function (element) {
                _this34.countries.push({
                  name: element['name'],
                  code: element['code']
                });
              });
            }, function (error) {
              _this34.showWarn("La liste des pays n'a pas pu etre chargé ");
            });
          }
        }, {
          key: "save",
          value: function save(emsForm) {
            var _this35 = this;

            console.log(emsForm);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            this.receptiondto.reference = emsForm['reference'];
            this.receptiondto.name = 'EMS - EXPRESS MAIL SERVICE';
            this.receptiondto.type = emsForm['typearticle'];
            this.receptiondto.adresse = emsForm['adresse'];
            this.receptiondto.nomsender = emsForm['nomsender'];
            this.receptiondto.telexpediteur = emsForm['telexpediteur'];
            this.receptiondto.namerecipient = emsForm['namerecipient'];
            this.receptiondto.telrecipient = emsForm['telrecipient'];
            this.receptiondto.email = emsForm['email'];
            this.receptiondto.datereception = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(emsForm['datereception'], format, locale);
            this.receptiondto.typearticle = this.typeactivite.code;
            this.receptiondto.dommage = this.dommage;
            this.receptiondto.commentaire = emsForm['commentaire'];
            this.receptiondto.envoisms = this.envoisms;
            this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
            this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/save", this.receptiondto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this35.showSuccess("Vous avez enregistrer avec success votre EMS  !!! ");
            }, function (error) {
              _this35.showError(" une erreur c'est produit et le système n'a pas enregitré votre EMS - La raison est voici : " + error.message);
            });
          }
          /**
          *
          * @param $event
          */

        }, {
          key: "dommageSelect",
          value: function dommageSelect($event) {
            console.log($event);

            if ($event.checked) {
              this.commentdommage = undefined;
            } else {
              this.commentdommage = 'N/A';
              this.emsForm.patchValue({
                commentaire: this.commentdommage
              });
            }
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveauemsreceptionComponent;
      }();

      NouveauemsreceptionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }];
      };

      NouveauemsreceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nouveau-receptionems',
        template: _raw_loader_nouveauemsreception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        styles: [_nouveauemsreception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveauemsreceptionComponent);
      /***/
    },

    /***/
    "bIAB":
    /*!*************************************************************!*\
      !*** ./src/app/apps/envoi/ems/edition/edition.component.ts ***!
      \*************************************************************/

    /*! exports provided: EditionComponent */

    /***/
    function bIAB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditionComponent", function () {
        return EditionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edition_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edition.component.html */
      "cQlw");
      /* harmony import */


      var _edition_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edition.component.css */
      "ZTfH");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var EditionComponent = /*#__PURE__*/function () {
        function EditionComponent(formBuilder, messageService, tokenStorage, httpClient, router, activeroute, confirmationService) {
          _classCallCheck(this, EditionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.tokenStorage = tokenStorage;
          this.httpClient = httpClient;
          this.router = router;
          this.activeroute = activeroute;
          this.confirmationService = confirmationService;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'EMS - EE';
          this.disabled = true;
          this.envoidto = {};
          this.value = undefined;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(EditionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this36 = this;

            this.activeroute.queryParams.subscribe(function (params) {
              _this36.value = params.id;
            });
            this.emsForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/edit?gkey=" + this.value, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this36.envoidto.reference = response['reference'];
              _this36.envoidto.type = response['type'];
              _this36.envoidto.adresse = response['adresse'];
              _this36.envoidto.nomsender = response['nomsender'];
              _this36.envoidto.telexpediteur = response['telexpediteur'];
              _this36.envoidto.namerecipient = response['namerecipient'];
              _this36.envoidto.telrecipient = response['telrecipient'];
            }, function (error) {
              _this36.showWarn("L'article a modifié n'a pas pu etre chargé, Voici la raison " + error.message);
            });
          }
        }, {
          key: "save",
          value: function save(emsForm) {
            var _this37 = this;

            console.log(emsForm);
            this.envoidto.reference = emsForm['reference'];
            this.envoidto.name = 'EMS - EXPRESS MAIL SERVICE';
            this.envoidto.type = emsForm['typearticle'];
            this.envoidto.adresse = emsForm['adresse'];
            this.envoidto.nomsender = emsForm['nomsender'];
            this.envoidto.telexpediteur = emsForm['telexpediteur'];
            this.envoidto.namerecipient = emsForm['namerecipient'];
            this.envoidto.telrecipient = emsForm['telrecipient'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/edit?id=" + this.value, this.envoidto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this37.showSuccess("L'article a été mise à jour avec success !!! ");
            }, function (error) {
              _this37.showError(" une erreur c'est produit et le système n'a pas enregitré votre EMS - La raison est voici : " + error.getMessage());
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return EditionComponent;
      }();

      EditionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]
        }];
      };

      EditionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edition',
        template: _raw_loader_edition_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]],
        styles: [_edition_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditionComponent);
      /***/
    },

    /***/
    "bIlz":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/ems/nouveau/nouveau.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bIlz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'un envoi EMS\">\n                <form [formGroup]=\"emsForm\" (ngSubmit)=\"save(emsForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouveau - EMS (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <ul>\n                                <li *ngIf=\"!emsForm.controls['reference'].valid&&emsForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['nomsender'].valid&&emsForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!emsForm.controls['telexpediteur'].valid&&emsForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['namerecipient'].valid&&emsForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!emsForm.controls['telrecipient'].valid&&emsForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                    \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference</label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom de l'expediiteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone de l'expediteur</label>\n                                            <div class=\"p-col-12 p-md-12\">   \n                                                <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                        \n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                    <div class=\"p-col-12 p-md-12\">      \n                                        <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone du destinateur </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!emsForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "bSVr":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/recommandereception/nouveaurecommandereception/nouveaurecommandereception.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bSVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'une reception recommande\">\n                <form [formGroup]=\"recommandeForm\" (ngSubmit)=\"save(recommandeForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouvelle Reception - recommande (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!recommandeForm.controls['reference'].valid&&recommandeForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!recommandeForm.controls['nomsender'].valid&&recommandeForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!recommandeForm.controls['telexpediteur'].valid&&recommandeForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!recommandeForm.controls['namerecipient'].valid&&recommandeForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!recommandeForm.controls['telrecipient'].valid&&recommandeForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                      \n                                <li *ngIf=\"!recommandeForm.controls['datereception'].valid&&recommandeForm.controls['datereception'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir la date de reception car il est obligatoire\" ></p-message>   </li>\n                                                  \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date Reception <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-calendar [(ngModel)]=\"dateactuel\" name=\"datereception\" class=\"form-control\" formControlName=\"datereception\" ></p-calendar>                                \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom de l'expediteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                                                      \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur</label>\n                                                    <div class=\"p-col-12 p-md-12\">   \n                                                        <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays Expediteur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountryexpediteur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysexpediteur\">\n                                                        </p-dropdown>  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n                                \n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">                               \n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-md-12\">      \n                                            <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse mail </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"email\" pInputText   class=\"form-control\" formControlName=\"email\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\"> \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur  <span class=\"required\">*</span> </label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays du destinateur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">  \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountrydestinateur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysdestinateur\">\n                                                            \n                                                        </p-dropdown>                              \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Colis dommage</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"dommage\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"dommage\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Envoyé un sms de reception du colis</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"envoisms\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"envoisms\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\" *ngIf=\"dommage\">\n                                    <div class=\"p-col-12\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <textarea rows=\"5\"  pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentdommage\" formControlName=\"commentaire\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!recommandeForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "bVFO":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/esuuq/nouveauesuuq/nouveauesuuq.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'une reception esuuq\">\n                <form [formGroup]=\"esuuqForm\" (ngSubmit)=\"save(esuuqForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouvelle Reception - esuuq (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!esuuqForm.controls['reference'].valid&&esuuqForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!esuuqForm.controls['nomsender'].valid&&esuuqForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!esuuqForm.controls['telexpediteur'].valid&&esuuqForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!esuuqForm.controls['namerecipient'].valid&&esuuqForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!esuuqForm.controls['telrecipient'].valid&&esuuqForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                      \n                                <li *ngIf=\"!esuuqForm.controls['datereception'].valid&&esuuqForm.controls['datereception'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir la date de reception car il est obligatoire\" ></p-message>   </li>\n                                                  \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date Reception <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-calendar [(ngModel)]=\"dateactuel\" name=\"datereception\" class=\"form-control\" formControlName=\"datereception\" ></p-calendar>                                \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom de l'expediteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                                                      \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur</label>\n                                                    <div class=\"p-col-12 p-md-12\">   \n                                                        <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays Expediteur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountryexpediteur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysexpediteur\">\n                                                        </p-dropdown>  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n                                \n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">                               \n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-md-12\">      \n                                            <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse mail </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"email\" pInputText   class=\"form-control\" formControlName=\"email\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\"> \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur  <span class=\"required\">*</span> </label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays du destinateur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">  \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountrydestinateur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysdestinateur\">\n                                                            \n                                                        </p-dropdown>                              \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Colis dommage</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"dommage\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"dommage\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Envoyé un sms de reception du colis</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"envoisms\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"envoisms\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\" *ngIf=\"dommage\">\n                                    <div class=\"p-col-12\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <textarea rows=\"5\"  pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentdommage\" formControlName=\"commentaire\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!esuuqForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "bXBM":
    /*!***************************************************************************************************!*\
      !*** ./src/app/apps/reception/emsreception/nouveauemsreception/nouveauemsreception.component.css ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bXBM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1ZW1zcmVjZXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "cQlw":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/ems/edition/edition.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cQlw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'un envoi\">\n                <form [formGroup]=\"emsForm\" (ngSubmit)=\"save(emsForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Mise à jour  - {{envoidto.type}}\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <ul>\n                                <li *ngIf=\"!emsForm.controls['reference'].valid&&emsForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['nomsender'].valid&&emsForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!emsForm.controls['telexpediteur'].valid&&emsForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!emsForm.controls['namerecipient'].valid&&emsForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!emsForm.controls['telrecipient'].valid&&emsForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                    \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"envoidto.type\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference</label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\" [(ngModel)]=\"envoidto.reference\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom de l'expediiteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\" [(ngModel)]=\"envoidto.nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone de l'expediteur</label>\n                                            <div class=\"p-col-12 p-md-12\">   \n                                                <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\" [(ngModel)]=\"envoidto.telexpediteur\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                        \n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                    <div class=\"p-col-12 p-md-12\">      \n                                        <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\" [(ngModel)]=\"envoidto.adresse\">                                    \n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\" [(ngModel)]=\"envoidto.namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone du destinateur </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\" [(ngModel)]=\"envoidto.telrecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!emsForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "cxbk":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function cxbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        url: 'http://localhost:8845'
      };
      /***/
    },

    /***/
    "d4o+":
    /*!*****************************************************!*\
      !*** ./src/app/apps/envoi/colis/colis.component.ts ***!
      \*****************************************************/

    /*! exports provided: ColisComponent */

    /***/
    function d4o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColisComponent", function () {
        return ColisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_colis_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./colis.component.html */
      "xPEa");
      /* harmony import */


      var _colis_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./colis.component.css */
      "PVz2");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var ColisComponent = /*#__PURE__*/function () {
        function ColisComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, ColisComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listcolis = undefined;
        }

        _createClass(ColisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/envoi/colis", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this38.listcolis = response;
              console.log(_this38.listcolis);
            }, function (error) {
              _this38.showWarn("Les article  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/envoi/ems/edition?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return ColisComponent;
      }();

      ColisComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      ColisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-colis',
        template: _raw_loader_colis_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_colis_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ColisComponent);
      /***/
    },

    /***/
    "dZLz":
    /*!***********************************************!*\
      !*** ./src/app/auth/token-storage.service.ts ***!
      \***********************************************/

    /*! exports provided: TokenStorageService */

    /***/
    function dZLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
        return TokenStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TOKEN_KEY = 'AuthToken';
      var USERNAME_KEY = 'AuthUsername';
      var AUTHORITIES_KEY = 'AuthAuthorities';

      var TokenStorageService = /*#__PURE__*/function () {
        function TokenStorageService() {
          _classCallCheck(this, TokenStorageService);

          this.roles = [];
        }

        _createClass(TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
          }
          /**
           *
           * @returns
           */

        }, {
          key: "getToken",
          value: function getToken() {
            return sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveUsername",
          value: function saveUsername(username) {
            window.sessionStorage.removeItem(USERNAME_KEY);
            window.sessionStorage.setItem(USERNAME_KEY, username);
          }
          /**
           *
           * @returns
           */

        }, {
          key: "getUsername",
          value: function getUsername() {
            return sessionStorage.getItem(USERNAME_KEY);
          }
        }, {
          key: "saveAuthorities",
          value: function saveAuthorities(authorities) {
            window.sessionStorage.removeItem(AUTHORITIES_KEY);
            window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
          }
        }, {
          key: "getAuthorities",
          value: function getAuthorities() {
            var _this39 = this;

            this.roles = [];

            if (sessionStorage.getItem(TOKEN_KEY)) {
              JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this39.roles.push(authority.authority);
              });
            }

            return this.roles;
          }
        }]);

        return TokenStorageService;
      }();

      TokenStorageService.ctorParameters = function () {
        return [];
      };

      TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TokenStorageService);
      /***/
    },

    /***/
    "dly9":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/stocks/defaillant/defaillant.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function dly9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmFpbGxhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImRlZmFpbGxhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmRvbW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5vbmVuZG9tbWFnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "dq/4":
    /*!******************************************************************************!*\
      !*** ./src/app/apps/vente/parametrage-vente/parametrage-vente.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function dq4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0cmFnZS12ZW50ZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "fFyx":
    /*!*************************************************!*\
      !*** ./src/app/pages/app.calendar.component.ts ***!
      \*************************************************/

    /*! exports provided: AppCalendarComponent */

    /***/
    function fFyx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCalendarComponent", function () {
        return AppCalendarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.calendar.component.html */
      "ZETH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../demo/service/eventservice */
      "fgiE");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "PN1e");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fullcalendar/timegrid */
      "PjKf");
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      "ogxq");
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__);

      var AppCalendarComponent = /*#__PURE__*/function () {
        function AppCalendarComponent(eventService) {
          _classCallCheck(this, AppCalendarComponent);

          this.eventService = eventService;
          this.clickedEvent = null;
        }

        _createClass(AppCalendarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.eventService.getEvents().then(function (events) {
              _this40.events = events;
            });
            this.changedEvent = {
              title: '',
              start: null,
              end: '',
              allDay: null
            };
            this.options = {
              plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default.a],
              defaultDate: '2017-02-01',
              header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              editable: true,
              eventClick: function eventClick(e) {
                _this40.eventDialog = true;
                _this40.clickedEvent = e.event;
                _this40.changedEvent.title = _this40.clickedEvent.title;
                _this40.changedEvent.start = _this40.clickedEvent.start;
                _this40.changedEvent.end = _this40.clickedEvent.end;
              }
            };
          }
        }, {
          key: "save",
          value: function save() {
            this.eventDialog = false;
            this.clickedEvent.setProp('title', this.changedEvent.title);
            this.clickedEvent.setStart(this.changedEvent.start);
            this.clickedEvent.setEnd(this.changedEvent.end);
            this.clickedEvent.setAllDay(this.changedEvent.allDay);
            this.changedEvent = {
              title: '',
              start: null,
              end: '',
              allDay: null
            };
          }
        }, {
          key: "reset",
          value: function reset() {
            this.changedEvent.title = this.clickedEvent.title;
            this.changedEvent.start = this.clickedEvent.start;
            this.changedEvent.end = this.clickedEvent.end;
          }
        }]);

        return AppCalendarComponent;
      }();

      AppCalendarComponent.ctorParameters = function () {
        return [{
          type: _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"]
        }];
      };

      AppCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_app_calendar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .fc-header-toolbar {\n                display: flex;\n                flex-wrap: wrap;\n            }\n        }\n    "]
      })], AppCalendarComponent);
      /***/
    },

    /***/
    "ffRT":
    /*!*****************************************!*\
      !*** ./src/app/app.footer.component.ts ***!
      \*****************************************/

    /*! exports provided: AppFooterComponent */

    /***/
    function ffRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
        return AppFooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppFooterComponent = function AppFooterComponent() {
        _classCallCheck(this, AppFooterComponent);
      };

      AppFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: "\n        <div class=\"layout-footer\">\n            <span class=\"footer-text-left\">\n                <img src=\"assets/layout/images/logo-dark.png\" />\n            </span>\n            <span class=\"footer-text-right\">\n                <a href=\"#\"><i class=\"pi pi-facebook\"></i></a>\n                <a href=\"#\"><i class=\"pi pi-twitter\"></i></a>\n                <a href=\"#\"><i class=\"pi pi-github\"></i></a>\n            </span>\n        </div>\n    "
      })], AppFooterComponent);
      /***/
    },

    /***/
    "fgiE":
    /*!**********************************************!*\
      !*** ./src/app/demo/service/eventservice.ts ***!
      \**********************************************/

    /*! exports provided: EventService */

    /***/
    function fgiE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EventService = /*#__PURE__*/function () {
        function EventService(http) {
          _classCallCheck(this, EventService);

          this.http = http;
        }

        _createClass(EventService, [{
          key: "getEvents",
          value: function getEvents() {
            return this.http.get('assets/demo/data/scheduleevents.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return EventService;
      }();

      EventService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], EventService);
      /***/
    },

    /***/
    "fkzr":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.main.component.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function fkzr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-wrapper\" (click)=\"onLayoutClick()\"\n     [ngClass]=\"{'menu-layout-static': app.layoutMode !== 'overlay',\n\t\t\t\t'menu-layout-overlay': app.layoutMode === 'overlay',\n\t\t\t\t'layout-menu-overlay-active': overlayMenuActive,\n\t\t\t\t'menu-layout-slim': app.layoutMode === 'slim',\n\t\t\t\t'menu-layout-horizontal': app.layoutMode === 'horizontal',\n\t\t\t\t'layout-menu-static-inactive': this.staticMenuDesktopInactive,\n\t\t\t\t'layout-menu-static-active': staticMenuMobileActive,\n                'p-input-filled': app.inputStyle === 'filled',\n                'p-ripple-disabled': !app.ripple}\">\n\n    <app-topbar></app-topbar>\n\n    <div class=\"layout-menu-container\" [ngClass]=\"{'layout-menu-dark': app.darkMenu}\" (click)=\"onMenuClick($event)\">\n        <div class=\"menu-scroll-content\">\n            <app-inline-profile *ngIf=\"app.profileMode=='inline' && !isHorizontal()\"></app-inline-profile>\n            <app-menu></app-menu>\n        </div>\n    </div>\n\n    <div class=\"layout-main\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"layout-mask\"></div>\n\n    <app-config></app-config>\n\n    <app-footer></app-footer>\n\n</div>\n";
      /***/
    },

    /***/
    "g06s":
    /*!*******************************************************************************!*\
      !*** ./src/app/apps/stocks/tableaubordstocks/tableaubordstocks.component.css ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function g06s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZWF1Ym9yZHN0b2Nrcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "g0a/":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/stocks/defaillant/defaillant.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g0a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Reception stocks</h5>\n            <p-table #dt [value]=\"liststocks\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/reception/ordinaire/nouveau?28660c74f421a0d5636ae1716a62433e14a6a19fd672f93b9bd98b6b177d07ff\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Articles en stocks \" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                           placeholder=\"Global Search\"/>\n                </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th style=\"width: 10%;\"> Reference </th>\n                        <th style=\"width: 8%;\">Date </th>\n                        <th style=\"width: 5%;\"> Etat </th>\n                        <th style=\"width: 10%;\"> Type </th>\n                        <th style=\"width: 15%;\"> Adresse </th>\n                        <th style=\"width: 10%;\"> Expediteur </th>\n                        <th  style=\"width: 10%;\"> Destinateur </th>\n                        <th  style=\"width: 10%;\"> Telephone 2 </th>\n                        \n                        <th  style=\"width: 10%;\"> Editeur </th>\n                        <th style=\"width: 10%;\"> Edition </th>\n                        \n                        <th style=\"width: 5%\" ></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-stocks>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{stocks.reference}} </td>\n                        <td> {{stocks.datereception}} </td>\n                        <td>\n                            <span *ngIf=\"stocks.dommage; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                            <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n\n                        </td>\n                        <td>  {{stocks.type}} </td>\n                        <td>  {{stocks.adresse}} </td>\n                        <td>  {{stocks.nomsender}} </td>\n                        <td>  {{stocks.namerecipient}} </td>\n                        <td>  {{stocks.telrecipient}} </td>\n\n                        <td>  {{stocks.updated.username}} </td>\n                        <td style=\"width: 8%;\">  {{stocks.updatedat}} </td>\n\n                        <td style=\"text-align: center\" style=\"width: 5%;\">\n                            <button (click)=\"search(stocks)\" pButton type=\"button\" class=\"p-button-primary\" icon=\"pi pi-eye\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "gVIG":
    /*!************************************************!*\
      !*** ./src/app/pages/app.login.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function gVIG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img.logo {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJhcHAubG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcubG9nbyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "hNcx":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/parametrage/utilisateurs/utilisateurs.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hNcx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>utilisateurs works!</p>\n";
      /***/
    },

    /***/
    "hSu1":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/colisreception/nouveaucolisreception/nouveaucolisreception.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hSu1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'une reception colis\">\n                <form [formGroup]=\"colisForm\" (ngSubmit)=\"save(colisForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouvelle Reception - colis (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!colisForm.controls['reference'].valid&&colisForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!colisForm.controls['nomsender'].valid&&colisForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!colisForm.controls['telexpediteur'].valid&&colisForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!colisForm.controls['namerecipient'].valid&&colisForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!colisForm.controls['telrecipient'].valid&&colisForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                      \n                                <li *ngIf=\"!colisForm.controls['datereception'].valid&&colisForm.controls['datereception'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir la date de reception car il est obligatoire\" ></p-message>   </li>\n                                                  \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date Reception <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-calendar [(ngModel)]=\"dateactuel\" name=\"datereception\" class=\"form-control\" formControlName=\"datereception\" ></p-calendar>                                \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom de l'expediteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                                                      \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur</label>\n                                                    <div class=\"p-col-12 p-md-12\">   \n                                                        <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays Expediteur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountryexpediteur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysexpediteur\">\n                                                        </p-dropdown>  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n                                \n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">                               \n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-md-12\">      \n                                            <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse mail </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"email\" pInputText   class=\"form-control\" formControlName=\"email\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\"> \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur  <span class=\"required\">*</span> </label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays du destinateur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">  \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountrydestinateur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysdestinateur\">\n                                                            \n                                                        </p-dropdown>                              \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Colis dommage</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"dommage\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"dommage\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Envoyé un sms de reception du colis</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"envoisms\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"envoisms\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\" *ngIf=\"dommage\">\n                                    <div class=\"p-col-12\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <textarea rows=\"5\"  pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentdommage\" formControlName=\"commentaire\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!colisForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "i3Xd":
    /*!***********************************************************!*\
      !*** ./src/app/apps/stocks/enstock/enstock.component.css ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function i3Xd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuc3RvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImVuc3RvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmRvbW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5vbmVuZG9tbWFnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "iLKO":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/recommande/nouveaurecommande/nouveaurecommande.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iLKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'un envoi recommande\">\n                <form [formGroup]=\"recommandeForm\" (ngSubmit)=\"save(recommandeForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouveau - recommande (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <ul>\n                                <li *ngIf=\"!recommandeForm.controls['reference'].valid&&recommandeForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!recommandeForm.controls['nomsender'].valid&&recommandeForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!recommandeForm.controls['telexpediteur'].valid&&recommandeForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!recommandeForm.controls['namerecipient'].valid&&recommandeForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!recommandeForm.controls['telrecipient'].valid&&recommandeForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                    \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference</label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom de l'expediiteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone de l'expediteur</label>\n                                            <div class=\"p-col-12 p-md-12\">   \n                                                <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                        \n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                    <div class=\"p-col-12 p-md-12\">      \n                                        <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Telephone du destinateur </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!recommandeForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n\n                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "ibcK":
    /*!************************************************!*\
      !*** ./src/app/demo/service/productservice.ts ***!
      \************************************************/

    /*! exports provided: ProductService */

    /***/
    function ibcK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
        }

        _createClass(ProductService, [{
          key: "getProductsSmall",
          value: function getProductsSmall() {
            return this.http.get('assets/demo/data/products-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            return this.http.get('assets/demo/data/products.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsMixed",
          value: function getProductsMixed() {
            return this.http.get('assets/demo/data/products-mixed.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsWithOrdersSmall",
          value: function getProductsWithOrdersSmall() {
            return this.http.get('assets/demo/data/products-orders-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return ProductService;
      }();

      ProductService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProductService);
      /***/
    },

    /***/
    "isJU":
    /*!**********************************************************************!*\
      !*** ./src/app/apps/vente/rapportsvente/rapportsvente.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function isJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXBwb3J0c3ZlbnRlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "j0ow":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/parametrage/gestion/access/access.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j0ow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>access works!</p>\n";
      /***/
    },

    /***/
    "jaM/":
    /*!*****************************************!*\
      !*** ./src/app/app.config.component.ts ***!
      \*****************************************/

    /*! exports provided: AppConfigComponent */

    /***/
    function jaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function () {
        return AppConfigComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppConfigComponent = /*#__PURE__*/function () {
        function AppConfigComponent(app, appMain) {
          _classCallCheck(this, AppConfigComponent);

          this.app = app;
          this.appMain = appMain;
          this.version = 'v4';
          this.themeColor = 'blue';
          this.layout = 'blue';
        }

        _createClass(AppConfigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.flatLayoutColors = [{
              name: 'Blue',
              file: 'blue',
              color: '#146fd7'
            }, {
              name: 'Cyan',
              file: 'cyan',
              color: '#0A616F'
            }, {
              name: 'Indigo',
              file: 'indigo',
              color: '#470EA2'
            }, {
              name: 'Purple',
              file: 'purple',
              color: '#391F68'
            }, {
              name: 'Teal',
              file: 'teal',
              color: '#136E52'
            }, {
              name: 'Pink',
              file: 'pink',
              color: '#771340'
            }, {
              name: 'Lime',
              file: 'lime',
              color: '#407916'
            }, {
              name: 'Green',
              file: 'green',
              color: '#1F8E38'
            }, {
              name: 'Amber',
              file: 'amber',
              color: '#7A5E06'
            }, {
              name: 'Brown',
              file: 'brown',
              color: '#593E22'
            }, {
              name: 'Orange',
              file: 'orange',
              color: '#904100'
            }, {
              name: 'Deep Purple',
              file: 'deeppurple',
              color: '#341A64'
            }, {
              name: 'Light Blue',
              file: 'lightblue',
              color: '#14569D'
            }, {
              name: 'Light Green',
              file: 'lightgreen',
              color: '#2E8942'
            }, {
              name: 'Dark Grey',
              file: 'darkgrey',
              color: '#343A40'
            }];
            this.specialLayoutColors = [{
              name: 'Influenza',
              file: 'influenza',
              color1: '#a83279',
              color2: '#f38e00'
            }, {
              name: 'Calm',
              file: 'calm',
              color1: '#5f2c82',
              color2: '#0DA9A4'
            }, {
              name: 'Crimson',
              file: 'crimson',
              color1: '#521c52',
              color2: '#c6426e'
            }, {
              name: 'Night',
              file: 'night',
              color1: '#2c0747',
              color2: '#6441a5'
            }, {
              name: 'Skyline',
              file: 'skyline',
              color1: '#2b32b2',
              color2: '#1488cc'
            }, {
              name: 'Sunkist',
              file: 'sunkist',
              color1: '#ee8a21',
              color2: '#f2c94c'
            }, {
              name: 'Little Leaf',
              file: 'littleleaf',
              color1: '#4DB865',
              color2: '#80D293'
            }, {
              name: 'Joomla',
              file: 'joomla',
              color1: '#1e3c72',
              color2: '#2a5298'
            }, {
              name: 'Firewatch',
              file: 'firewatch',
              color1: '#cb2d3e',
              color2: '#ef473a'
            }, {
              name: 'Suzy',
              file: 'suzy',
              color1: '#834d9b',
              color2: '#d04ed6'
            }];
            this.themes = [{
              name: 'Amber',
              file: 'amber',
              color: '#F8BD0C'
            }, {
              name: 'Blue',
              file: 'blue',
              color: '#007bff'
            }, {
              name: 'Cyan',
              file: 'cyan',
              color: '#17A2B8'
            }, {
              name: 'Indigo',
              file: 'indigo',
              color: '#6610F2'
            }, {
              name: 'Purple',
              file: 'purple',
              color: '#883cae'
            }, {
              name: 'Teal',
              file: 'teal',
              color: '#20C997'
            }, {
              name: 'Orange',
              file: 'orange',
              color: '#FD7E14'
            }, {
              name: 'Deep Purple',
              file: 'deeppurple',
              color: '#612FBE'
            }, {
              name: 'Light Blue',
              file: 'lightblue',
              color: '#4DA3FF'
            }, {
              name: 'Green',
              file: 'green',
              color: '#28A745'
            }, {
              name: 'Light Green',
              file: 'lightgreen',
              color: '#61CC79'
            }, {
              name: 'Brown',
              file: 'brown',
              color: '#986839'
            }, {
              name: 'Dark Grey',
              file: 'darkgrey',
              color: '#6C757D'
            }, {
              name: 'Pink',
              file: 'pink',
              color: '#E83E8C'
            }, {
              name: 'Lime',
              file: 'lime',
              color: '#74CD32'
            }];
            this.changeLayout('joomla', true);
          }
        }, {
          key: "changeLayout",
          value: function changeLayout(layout, special) {
            if (special) {
              this.app.darkMenu = special;
            }

            this.changeStyleSheetsColor('layout-css', 'layout-' + layout + '.css');
            this.layout = layout;
          }
        }, {
          key: "changeComponentTheme",
          value: function changeComponentTheme(theme) {
            this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
            this.themeColor = theme;
          }
        }, {
          key: "changeVersion",
          value: function changeVersion(version) {
            this.changeStyleSheetsColor('theme-css', 'theme-' + this.themeColor + '.css');
            this.changeStyleSheetsColor('layout-css', 'layout-' + this.layout + '.css');
          }
        }, {
          key: "changeStyleSheetsColor",
          value: function changeStyleSheetsColor(id, value) {
            var element = document.getElementById(id);
            var urlTokens = element.getAttribute('href').split('/');
            urlTokens[urlTokens.length - 1] = value;
            var newURL = urlTokens.join('/');
            this.replaceLink(element, newURL);
          }
        }, {
          key: "replaceLink",
          value: function replaceLink(linkElement, href) {
            if (this.isIE()) {
              linkElement.setAttribute('href', href);
            } else {
              var id = linkElement.getAttribute('id');
              var cloneLinkElement = linkElement.cloneNode(true);
              cloneLinkElement.setAttribute('href', href);
              cloneLinkElement.setAttribute('id', id + '-clone');
              linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
              cloneLinkElement.addEventListener('load', function () {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
              });
            }
          }
        }, {
          key: "isIE",
          value: function isIE() {
            return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
          }
        }, {
          key: "onProfileModeClick",
          value: function onProfileModeClick(mode) {
            if (this.app.layoutMode === 'horizontal') {
              return;
            }

            this.app.profileMode = mode;
          }
        }, {
          key: "onConfigButtonClick",
          value: function onConfigButtonClick(event) {
            this.appMain.configActive = !this.appMain.configActive;
            event.preventDefault();
          }
        }, {
          key: "onConfigCloseClick",
          value: function onConfigCloseClick(event) {
            this.appMain.configActive = false;
            event.preventDefault();
          }
        }]);

        return AppConfigComponent;
      }();

      AppConfigComponent.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }, {
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]
        }];
      };

      AppConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config',
        template: "\n        <div class=\"layout-config\" [ngClass]=\"{'layout-config-active': appMain.configActive}\" (click)=\"appMain.onConfigClick($event)\">\n            <a style=\"cursor: pointer\" id=\"layout-config-button\" class=\"layout-config-button\" (click)=\"onConfigButtonClick($event)\">\n                <i class=\"pi pi-cog\"></i>\n            </a>\n            <a style=\"cursor: pointer\" class=\"layout-config-close\" (click)=\"onConfigCloseClick($event)\">\n                <i class=\"pi pi-times\"></i>\n            </a>\n            <div class=\"layout-config-content\">\n                <h5>Menu Mode</h5>\n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"static\" name=\"layoutMode\" value=\"static\" [(ngModel)]=\"app.layoutMode\"></p-radioButton>\n                            <label for=\"static\">Static</label>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"overlay\" name=\"layoutMode\" value=\"overlay\" [(ngModel)]=\"app.layoutMode\"></p-radioButton>\n                            <label for=\"overlay\">Overlay</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"horizontal\" name=\"layoutMode\" value=\"horizontal\" [(ngModel)]=\"app.layoutMode\" (onClick)=\"app.profileMode = 'top'\"></p-radioButton>\n                            <label for=\"horizontal\">Horizontal</label>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"slim\" name=\"layoutMode\" value=\"slim\" [(ngModel)]=\"app.layoutMode\"></p-radioButton>\n                            <label for=\"slim\">Slim</label>\n                        </div>\n                    </div>\n                </div>\n\n                <h5 style=\"margin-top: 0;\">Menu Theme</h5>\n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"dark\" name=\"menuColor\" [value]=\"true\" [(ngModel)]=\"app.darkMenu\"></p-radioButton>\n                            <label for=\"dark\">Dark</label>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"light\" name=\"menuColor\" [value]=\"false\" [(ngModel)]=\"app.darkMenu\"></p-radioButton>\n                            <label for=\"light\">Light</label>\n                        </div>\n                    </div>\n                </div>\n\n                <h5 style=\"margin-top: 0;\">User Profile Mode</h5>\n                <div class=\"p-grid\">\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"inline\" name=\"profileMode\" value=\"inline\" [(ngModel)]=\"app.profileMode\"[disabled]=\"appMain.isHorizontal()\"></p-radioButton>\n                            <label for=\"inline\">Inline</label>\n                        </div>\n                    </div>\n                    <div class=\"p-col-6\">\n                        <div class=\"p-field-radiobutton\">\n                            <p-radioButton inputId=\"top\" name=\"profileMode\" value=\"top\" [(ngModel)]=\"app.profileMode\" [disabled]=\"appMain.isHorizontal()\"></p-radioButton>\n                            <label for=\"top\">Overlay</label>\n                        </div>\n                    </div>\n                </div>\n\n                <h5 style=\"margin-top: 0\">Input Background</h5>\n                <div class=\"p-formgroup-inline\">\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"input_outlined\" name=\"inputstyle\" [(ngModel)]=\"app.inputStyle\"  value=\"outlined\"></p-radioButton>\n                        <label for=\"input_outlined\">Outlined</label>\n                    </div>\n                    <div class=\"p-field-radiobutton\">\n                        <p-radioButton inputId=\"input_filled\" name=\"inputstyle\" [(ngModel)]=\"app.inputStyle\" value=\"filled\"></p-radioButton>\n                        <label for=\"input_filled\">Filled</label>\n                    </div>\n                </div>\n\n                <h5 style=\"margin-top: 0;\">Ripple Effect</h5>\n                <p-inputSwitch [ngModel]=\"app.ripple\" (onChange)=\"appMain.onRippleChange($event)\"></p-inputSwitch>\n\n                <h5>Flat Layout Colors</h5>\n                <div class=\"layout-themes\">\n                    <div *ngFor=\"let flatLayoutColor of flatLayoutColors\">\n                        <a style=\"cursor: pointer\" (click)=\"changeLayout(flatLayoutColor.file, false)\"  [ngStyle]=\"{'background-color': flatLayoutColor.color}\">\n                            <i class=\"pi pi-check\" *ngIf=\"layout === flatLayoutColor.file\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <h5>Special Layout Colors</h5>\n                <div class=\"layout-themes\">\n                    <div *ngFor=\"let specialLayoutColor of specialLayoutColors\">\n                        <a style=\"cursor: pointer\" (click)=\"changeLayout(specialLayoutColor.file, true)\" [ngStyle]=\"{'background-image': 'linear-gradient(to right,' + specialLayoutColor.color1 + ',' + specialLayoutColor.color2 + ')'}\">\n                            <i class=\"pi pi-check\" *ngIf=\"layout === specialLayoutColor.file\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <h5>Component Themes</h5>\n                <div class=\"layout-themes\">\n                    <div *ngFor=\"let t of themes\">\n                        <a style=\"cursor: pointer\" (click)=\"changeComponentTheme(t.file)\" [ngStyle]=\"{'background-color': t.color}\">\n                            <i class=\"pi pi-check\" *ngIf=\"themeColor === t.file\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
      })], AppConfigComponent);
      /***/
    },

    /***/
    "kA7y":
    /*!*******************************************!*\
      !*** ./src/app/app.menuitem.component.ts ***!
      \*******************************************/

    /*! exports provided: AppMenuitemComponent */

    /***/
    function kA7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuitemComponent", function () {
        return AppMenuitemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppMenuitemComponent = /*#__PURE__*/function () {
        function AppMenuitemComponent(appMain, router, cd, menuService) {
          var _this41 = this;

          _classCallCheck(this, AppMenuitemComponent);

          this.appMain = appMain;
          this.router = router;
          this.cd = cd;
          this.menuService = menuService;
          this.active = false;
          this.menuSourceSubscription = this.menuService.menuSource$.subscribe(function (key) {
            // deactivate current active menu
            if (_this41.active && _this41.key !== key && key.indexOf(_this41.key) !== 0) {
              _this41.active = false;
            }
          });
          this.menuResetSubscription = this.menuService.resetSource$.subscribe(function () {
            _this41.active = false;
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (params) {
            if (_this41.appMain.isHorizontal() || _this41.appMain.isSlim()) {
              _this41.active = false;
            } else {
              if (_this41.item.routerLink) {
                _this41.updateActiveStateFromRoute();
              } else {
                _this41.active = false;
              }
            }
          });
        }

        _createClass(AppMenuitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!(this.appMain.isHorizontal() || this.appMain.isSlim()) && this.item.routerLink) {
              this.updateActiveStateFromRoute();
            }

            this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
          }
        }, {
          key: "updateActiveStateFromRoute",
          value: function updateActiveStateFromRoute() {
            this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
          }
        }, {
          key: "itemClick",
          value: function itemClick(event) {
            // avoid processing disabled items
            if (this.item.disabled) {
              event.preventDefault();
              return true;
            } // navigate with hover in horizontal mode


            if (this.root) {
              this.appMain.menuHoverActive = !this.appMain.menuHoverActive;
            } // notify other items


            this.menuService.onMenuStateChange(this.key); // execute command

            if (this.item.command) {
              this.item.command({
                originalEvent: event,
                item: this.item
              });
            } // toggle active state


            if (this.item.items) {
              this.active = !this.active;
            } else {
              // activate item
              this.active = true; // hide overlay menus

              if (this.appMain.isMobile()) {
                this.appMain.overlayMenuActive = false;
                this.appMain.staticMenuMobileActive = false;
              } // reset horizontal menu


              if (this.appMain.isHorizontal() || this.appMain.isSlim()) {
                this.menuService.reset();
              }

              this.appMain.menuHoverActive = false;
              var ink = this.getInk(event.currentTarget);

              if (ink) {
                this.removeClass(ink, 'p-ink-active');
              }
            }
          }
        }, {
          key: "getInk",
          value: function getInk(el) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < el.children.length; i++) {
              if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
                return el.children[i];
              }
            }

            return null;
          }
        }, {
          key: "removeClass",
          value: function removeClass(element, className) {
            if (element.classList) {
              element.classList.remove(className);
            } else {
              element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            // activate item on hover
            if (this.root && this.appMain.menuHoverActive && (this.appMain.isHorizontal() || this.appMain.isSlim()) && this.appMain.isDesktop()) {
              this.menuService.onMenuStateChange(this.key);
              this.active = true;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.menuSourceSubscription) {
              this.menuSourceSubscription.unsubscribe();
            }

            if (this.menuResetSubscription) {
              this.menuResetSubscription.unsubscribe();
            }
          }
        }]);

        return AppMenuitemComponent;
      }();

      AppMenuitemComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _app_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }];
      };

      AppMenuitemComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        root: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        parentKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      AppMenuitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        /* tslint:disable:component-selector */
        selector: '[app-menuitem]',

        /* tslint:enable:component-selector */
        template: "\n        <ng-container>\n            <div *ngIf=\"root\" class=\"layout-menuitem-root-text\">{{item.label}}</div>\n            <a [attr.href]=\"item.url\" (click)=\"itemClick($event)\" *ngIf=\"!item.routerLink || item.items\" (mouseenter)=\"onMouseEnter()\"\n               (keydown.enter)=\"itemClick($event)\" [attr.target]=\"item.target\" [attr.tabindex]=\"0\" [ngClass]=\"item.class\" pRipple>\n                <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n                <span>{{item.label}}</span>\n                <i class=\"pi pi-fw pi-angle-down menuitem-toggle-icon\" *ngIf=\"item.items\"></i>\n                <span class=\"menuitem-badge\" *ngIf=\"item.badge\">{{item.badge}}</span>\n            </a>\n            <a (click)=\"itemClick($event)\" (mouseenter)=\"onMouseEnter()\" *ngIf=\"item.routerLink && !item.items\"\n               [routerLink]=\"item.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [ngClass]=\"item.class\" pRipple\n               [routerLinkActiveOptions]=\"{exact: true}\" [attr.target]=\"item.target\" [attr.tabindex]=\"0\">\n                <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n                <span>{{item.label}}</span>\n                <i class=\"pi pi-fw pi-angle-down menuitem-toggle-icon\" *ngIf=\"item.items\"></i>\n                <span class=\"menuitem-badge\" *ngIf=\"item.badge\">{{item.badge}}</span>\n            </a>\n            <div class=\"submenu-arrow\" *ngIf=\"item.items\"></div>\n            <ul *ngIf=\"(item.items && root) || (item.items && active) \"\n                [@children]=\"(root ? 'visible' :active ? 'visibleAnimated' : 'hiddenAnimated')\">\n                <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"item.items\">\n                    <li app-menuitem [item]=\"child\" [index]=\"i\" [parentKey]=\"key\" [class]=\"child.badgeClass\"></li>\n                </ng-template>\n            </ul>\n        </ng-container>\n    ",
        host: {
          '[class.layout-root-menuitem]': 'root',
          '[class.active-menuitem]': 'active'
        },
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '*',
          'z-index': 100
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px',
          'z-index': '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visibleAnimated, visibleAnimated => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      })], AppMenuitemComponent);
      /***/
    },

    /***/
    "l1Gi":
    /*!**************************************************!*\
      !*** ./src/app/apps/envoi/ems/ems.component.css ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function l1Gi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".required{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6ImVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVke1xyXG4gICAgY29sb3I6cmVkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "lEO1":
    /*!**************************************************************!*\
      !*** ./src/app/apps/stocks/recherche/recherche.component.ts ***!
      \**************************************************************/

    /*! exports provided: RechercheComponent */

    /***/
    function lEO1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RechercheComponent", function () {
        return RechercheComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recherche_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recherche.component.html */
      "JN9M");
      /* harmony import */


      var _recherche_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recherche.component.css */
      "oTs1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var RechercheComponent = /*#__PURE__*/function () {
        /**
         *
         * @param formBuilder
         * @param messageService
         * @param httpClient
         * @param router
         * @param tokenStorage
         */
        function RechercheComponent(formBuilder, messageService, httpClient, router, tokenStorage, activeroute) {
          _classCallCheck(this, RechercheComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.activeroute = activeroute;
          /**
           * VARIABLE
           */

          this.msgs = [];
          this.string = undefined;
          this.article = undefined;
          this.historiques = undefined;
          this.alarmes = undefined;
          this.parametre = undefined;
        }

        _createClass(RechercheComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this42 = this;

            this.activeroute.queryParams.subscribe(function (params) {
              _this42.parametre = params.id;

              _this42.serchByreferenceReceiveinparam(_this42.parametre);
            });
            this.rechercheForm = this.formBuilder.group({
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
          }
        }, {
          key: "serchByreferenceReceiveinparam",
          value: function serchByreferenceReceiveinparam(value) {
            var _this43 = this;

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/stock/recherche/resultat?param=' + value, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this43.article = response;

              _this43.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this43.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/historique?param=' + value, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this43.historiques = response;

              _this43.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this43.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/alarme?param=' + value, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this43.alarmes = response;

              _this43.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this43.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
          }
          /**
           * Fonction pour recherche une reference
           * @param event
           */

        }, {
          key: "searchByReference",
          value: function searchByReference(event) {
            var _this44 = this;

            console.log(event);
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/stock/recherche?param=' + event.query, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this44.string = response;
            }, function (err) {
              _this44.showError("La recherche n'est pas operationnel car une erreur c'est produit. Veuillez verifier que tout les services sont operationnels.*** voici l'erreur generer par le systeme :" + err.message);
            });
          }
        }, {
          key: "findResultat",
          value: function findResultat(reference) {
            var _this45 = this;

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/stock/recherche/resultat?param=' + reference['reference'], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this45.article = response;

              _this45.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this45.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/historique?param=' + reference['reference'], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this45.historiques = response;

              _this45.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this45.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + '/api/postal/reception/alarme?param=' + reference['reference'], {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this45.alarmes = response;

              _this45.showInfo("Le chargement de l'information c'est deroulé avec success");
            }, function (error) {
              _this45.showWarn("Une erreur c'est produit lors du chargement de l'information, veuillez contatcter l'administrateur systeme  et voici l'erreur  " + error.message);
            });
          }
          /**
          *  costumisation des erreurs
          */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return RechercheComponent;
      }();

      RechercheComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      };

      RechercheComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-recherche',
        template: _raw_loader_recherche_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_recherche_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RechercheComponent);
      /***/
    },

    /***/
    "lQIM":
    /*!****************************************************************************************!*\
      !*** ./src/app/apps/reception/tableaubordreception/tableaubordreception.component.css ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function lQIM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dashboard{\r\n    background-color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlYXVib3JkcmVjZXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoidGFibGVhdWJvcmRyZWNlcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "lXEK":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/vente/parametrage-vente/parametrage-vente.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lXEK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        \n        <p-panel header=\"Nouvelle Reception - colis (Express Mail Service)\" class=\"panel-work\">\n            <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n                <p-fieldset legend=\"Formulaire de creation d'une reception colis\">\n                    <form [formGroup]=\"venteForm\" (ngSubmit)=\"save(venteForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!venteForm.controls['type'].valid&&venteForm.controls['type'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                           \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-12\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Type de vente <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-9 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"type\" pInputText   class=\"form-control\" formControlName=\"type\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-12\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Prix Fixe</label>\n                                                    <div class=\"p-col-9 p-p-md-9\">   \n                                                        <input type=\"number\" name=\"prix\" pInputText   class=\"form-control\" formControlName=\"prix\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-12\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Penalité</label>\n                                                    <div class=\"p-col-9 p-p-md-9\">   \n                                                        <input type=\"number\" name=\"penalite\" pInputText   class=\"form-control\" formControlName=\"penalite\">                                  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-12\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-10\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">\n                                                        <p-button (click)=\"showDialogToAdditem()\" icon=\"pi pi-external-link\" label=\"Ajouter des Items\"></p-button>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"items\">\n                                    <p-table [value]=\"items\" responsiveLayout=\"scroll\" >\n                                        <ng-template pTemplate=\"header\">\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Prix Fixe</th>\n                                                <th>Penalité</th>\n                                            </tr>\n                                        </ng-template>\n                                        <ng-template pTemplate=\"body\" let-product>\n                                            <tr>\n                                                <td>{{product.nom}}</td>\n                                                <td>{{product.prix}}</td>\n                                                <td>{{product.penalite}}</td>\n                                            </tr>\n                                        </ng-template>\n                                    </p-table>\n                                </div>\n                                <br/>\n                                <hr/>\n                                \n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!venteForm.valid\"></button>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </form>\n                </p-fieldset>\n            </div>        \n        </p-panel>\n    </div>\n\n\n    <p-dialog header=\"Ajouter un items de type vente\" [(visible)]=\"displayDialogitem\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"  [style]=\"{width: '500px'}\">\n        <div class=\"ui-g ui-fluid\" *ngIf=\"item\">\n            <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                <span class=\"required\">* : champs obligatoire à remplir</span> \n\n                <div class=\"p-fluid\">\n                    <div class=\"p-field p-grid\">\n\n                        <div class=\"p-col-12\">                                        \n                            <div class=\"p-field p-grid\">\n                                <div class=\"p-col-10\">\n                                    <div class=\"p-field p-grid\">\n                                        <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Type de vente <span class=\"required\">*</span></label>\n                                        <div class=\"p-col-9 p-p-md-9\">   \n                                            <input type=\"text\" name=\"nom\" pInputText   class=\"form-control\"  [(ngModel)]=\"item.nom\" >                                    \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    \n                    <div class=\"p-field p-grid\">\n\n                        <div class=\"p-col-12\">                                        \n                            <div class=\"p-field p-grid\">\n                                <div class=\"p-col-10\">\n                                    <div class=\"p-field p-grid\">\n                                        <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Prix Fixe</label>\n                                        <div class=\"p-col-9 p-p-md-9\">   \n                                            <input type=\"number\" name=\"prix\" pInputText   class=\"form-control\"   [(ngModel)]=\"item.prix\" >                                    \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    \n                    <div class=\"p-field p-grid\">\n\n                        <div class=\"p-col-12\">                                        \n                            <div class=\"p-field p-grid\">\n                                <div class=\"p-col-10\">\n                                    <div class=\"p-field p-grid\">\n                                        <label for=\"lastname4\" class=\"p-col-4 p-mb-3 p-md-3 p-mb-md-0\">Penalité</label>\n                                        <div class=\"p-col-9 p-p-md-9\">   \n                                            <input type=\"number\" name=\"penalite\" pInputText   class=\"form-control\"    [(ngModel)]=\"item.penalite\" >                                    \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"deleteitem()\" label=\"Supprimer\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"saveitem()\" label=\"Enregistrer\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n    ";
      /***/
    },

    /***/
    "mBE1":
    /*!**********************************************************************!*\
      !*** ./src/app/apps/parametrage/gestion/access/access.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function mBE1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "mqcR":
    /*!***************************************!*\
      !*** ./src/app/app.main.component.ts ***!
      \***************************************/

    /*! exports provided: AppMainComponent */

    /***/
    function mqcR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMainComponent", function () {
        return AppMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.main.component.html */
      "fkzr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppMainComponent = /*#__PURE__*/function () {
        function AppMainComponent(renderer, menuService, primengConfig, app) {
          _classCallCheck(this, AppMainComponent);

          this.renderer = renderer;
          this.menuService = menuService;
          this.primengConfig = primengConfig;
          this.app = app;
        }

        _createClass(AppMainComponent, [{
          key: "onLayoutClick",
          value: function onLayoutClick() {
            if (!this.topbarItemClick) {
              this.activeTopbarItem = null;
              this.topbarMenuActive = false;
            }

            if (!this.menuClick) {
              if (this.isHorizontal() || this.isSlim()) {
                this.menuService.reset();
              }

              if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
              }

              this.menuHoverActive = false;
            }

            if (this.configActive && !this.configClick) {
              this.configActive = false;
            }

            this.configClick = false;
            this.topbarItemClick = false;
            this.menuClick = false;
          }
        }, {
          key: "onMenuButtonClick",
          value: function onMenuButtonClick(event) {
            this.menuClick = true;
            this.rotateMenuButton = !this.rotateMenuButton;
            this.topbarMenuActive = false;

            if (this.app.layoutMode === 'overlay') {
              this.overlayMenuActive = !this.overlayMenuActive;
            } else {
              if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
              } else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
              }
            }

            event.preventDefault();
          }
        }, {
          key: "onMenuClick",
          value: function onMenuClick($event) {
            this.menuClick = true;
          }
        }, {
          key: "onTopbarMenuButtonClick",
          value: function onTopbarMenuButtonClick(event) {
            this.topbarItemClick = true;
            this.topbarMenuActive = !this.topbarMenuActive;
            this.hideOverlayMenu();
            event.preventDefault();
          }
        }, {
          key: "onTopbarItemClick",
          value: function onTopbarItemClick(event, item) {
            this.topbarItemClick = true;

            if (this.activeTopbarItem === item) {
              this.activeTopbarItem = null;
            } else {
              this.activeTopbarItem = item;
            }

            event.preventDefault();
          }
        }, {
          key: "onTopbarSubItemClick",
          value: function onTopbarSubItemClick(event) {
            event.preventDefault();
          }
        }, {
          key: "onConfigClick",
          value: function onConfigClick(event) {
            this.configClick = true;
          }
        }, {
          key: "onRippleChange",
          value: function onRippleChange(event) {
            this.app.ripple = event.checked;
            this.primengConfig = event.checked;
          }
        }, {
          key: "hideOverlayMenu",
          value: function hideOverlayMenu() {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
          }
        }, {
          key: "isTablet",
          value: function isTablet() {
            var width = window.innerWidth;
            return width <= 1024 && width > 640;
          }
        }, {
          key: "isDesktop",
          value: function isDesktop() {
            return window.innerWidth > 1024;
          }
        }, {
          key: "isMobile",
          value: function isMobile() {
            return window.innerWidth <= 640;
          }
        }, {
          key: "isStatic",
          value: function isStatic() {
            return this.app.layoutMode === 'static';
          }
        }, {
          key: "isOverlay",
          value: function isOverlay() {
            return this.app.layoutMode === 'overlay';
          }
        }, {
          key: "isHorizontal",
          value: function isHorizontal() {
            return this.app.layoutMode === 'horizontal';
          }
        }, {
          key: "isSlim",
          value: function isSlim() {
            return this.app.layoutMode === 'slim';
          }
        }]);

        return AppMainComponent;
      }();

      AppMainComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _app_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        }];
      };

      AppMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main',
        template: _raw_loader_app_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppMainComponent);
      /***/
    },

    /***/
    "oF4A":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/livraison/livraisonechoue/livraisonechoue.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oF4A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Livraison  reussi </h5>\n            <p-table #dt [value]=\"liste\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['reference.reference']\">\n               \n                <ng-template pTemplate=\"header\">\n                    <tr>               \n                        <th> Reference </th>\n                        <th>Date </th>\n                        <th> Etat </th>\n                        <th> Type </th>\n\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Commentaire </th>\n\n                        <th> Editeur </th>\n                        <th> Edition </th>\n                        \n                        <th style=\"width: 8rem\"></th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-livre>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{livre.reference}} </td>\n                        <td> {{livre.reception.datesortie}} </td>\n                        \n                        <td>  {{livre.etat}} </td> \n                        <td>  {{livre.reception.type}} </td> \n                        \n                        <td>  {{livre.reception.namerecipient}} </td>\n                        <td>  {{livre.reception.telrecipient}} </td>\n\n                        <td>  {{livre.commentaire}} </td>\n                        <td> \n                            \n                            <span *ngIf=\"livre.updated; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span >{{livre.updated.username}}  </span></ng-template>\n                            <ng-template #elseBlock><span>{{livre.created.username}} </span></ng-template>\n\n                        </td>\n                        <td> \n                            \n                            <span *ngIf=\"livre.updatedat; then thenBlock else elseBlock\"> </span>\n                            <ng-template #thenBlock> <span >{{livre.updatedat}}  </span></ng-template>\n                            <ng-template #elseBlock><span>{{livre.createdat}} </span></ng-template>\n                        </td>\n\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(livre)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "oTs1":
    /*!***************************************************************!*\
      !*** ./src/app/apps/stocks/recherche/recherche.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function oTs1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2hlcmNoZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoicmVjaGVyY2hlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5kb21tYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ub25lbmRvbW1hZ2Vcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "odXu":
    /*!**********************************************************!*\
      !*** ./src/app/apps/stocks/enstock/enstock.component.ts ***!
      \**********************************************************/

    /*! exports provided: EnstockComponent */

    /***/
    function odXu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnstockComponent", function () {
        return EnstockComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_enstock_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./enstock.component.html */
      "EPQX");
      /* harmony import */


      var _enstock_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enstock.component.css */
      "i3Xd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var EnstockComponent = /*#__PURE__*/function () {
        function EnstockComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, EnstockComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.liststocks = undefined;
        }

        _createClass(EnstockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this46 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/stock/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this46.liststocks = response;
              console.log(_this46.liststocks);
            }, function (error) {
              _this46.showWarn("Les articles en stocks  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
        }, {
          key: "search",
          value: function search(value) {
            console.log(value);
            this.router.navigate(['gestion/stocks/recherche?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869'], {
              queryParams: {
                id: '' + value["reference"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return EnstockComponent;
      }();

      EnstockComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      EnstockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-enstock',
        template: _raw_loader_enstock_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_enstock_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EnstockComponent);
      /***/
    },

    /***/
    "ojSt":
    /*!*****************************************************************!*\
      !*** ./src/app/apps/envoi/tableaubord/tableaubord.component.ts ***!
      \*****************************************************************/

    /*! exports provided: TableaubordComponent */

    /***/
    function ojSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableaubordComponent", function () {
        return TableaubordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tableaubord_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tableaubord.component.html */
      "KgBC");
      /* harmony import */


      var _tableaubord_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tableaubord.component.css */
      "xJ0D");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var TableaubordComponent = /*#__PURE__*/function () {
        /**
         *
         * @param formBuilder
         * @param messageService
         * @param httpClient
         * @param router
         * @param tokenStorage
         */
        function TableaubordComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, TableaubordComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          /***
           *
           */

          this.msgs = [];
          this.tableaubord1 = undefined;
          this.basicData = undefined;
          this.listems = undefined;
        }

        _createClass(TableaubordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this47 = this;

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/tableau/bord1", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              console.log(response);
              _this47.tableaubord1 = {
                labels: ['A', 'B', 'C'],
                datasets: [{
                  data: [300, 50, 100],
                  backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
                  hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"]
                }]
              };
            }, function (error) {
              _this47.showWarn(" une erreur c'est produit et le système selectionner le type de ventes - La raison est voici : " + error.message);
            });
            this.basicData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
              }, {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#FFA726',
                tension: .4
              }]
            };
            /**
            *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
            */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/ems", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this47.listems = response;
              console.log(_this47.listems);
            }, function (error) {
              _this47.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return TableaubordComponent;
      }();

      TableaubordComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      TableaubordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tableaubord',
        template: _raw_loader_tableaubord_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_tableaubord_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TableaubordComponent);
      /***/
    },

    /***/
    "pJhg":
    /*!*************************************************************!*\
      !*** ./src/app/apps/envoi/ems/nouveau/nouveau.component.ts ***!
      \*************************************************************/

    /*! exports provided: NouveauComponent */

    /***/
    function pJhg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauComponent", function () {
        return NouveauComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveau_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveau.component.html */
      "bIlz");
      /* harmony import */


      var _nouveau_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveau.component.css */
      "JL7W");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveauComponent = /*#__PURE__*/function () {
        function NouveauComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveauComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'EMS - EE';
          this.disabled = true;
          this.envoidto = {};
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveauComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this48 = this;

            this.emsForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/type/activite/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this48.typeactivites = [];
              response.forEach(function (element) {
                if (element['name']) {
                  _this48.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this48.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this48.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - EMS ");
            });
          }
        }, {
          key: "save",
          value: function save(emsForm) {
            var _this49 = this;

            console.log(emsForm);
            this.envoidto.reference = emsForm['reference'];
            this.envoidto.name = 'EMS - EXPRESS MAIL SERVICE';
            this.envoidto.type = emsForm['typearticle'];
            this.envoidto.adresse = emsForm['adresse'];
            this.envoidto.nomsender = emsForm['nomsender'];
            this.envoidto.telexpediteur = emsForm['telexpediteur'];
            this.envoidto.namerecipient = emsForm['namerecipient'];
            this.envoidto.telrecipient = emsForm['telrecipient'];
            this.envoidto.typearticle = this.typeactivite.code;
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__["environment"].url + "/api/postal/envoi/save", this.envoidto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this49.showSuccess("Vous avez enregistrer avec success votre EMS  !!! ");
            }, function (error) {
              _this49.showError(" une erreur c'est produit et le système n'a pas enregitré votre EMS - La raison est voici : " + error.getMessage());
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveauComponent;
      }();

      NouveauComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }];
      };

      NouveauComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-nouveau',
        template: _raw_loader_nouveau_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]],
        styles: [_nouveau_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveauComponent);
      /***/
    },

    /***/
    "pRB7":
    /*!*****************************************************!*\
      !*** ./src/app/pages/app.accessdenied.component.ts ***!
      \*****************************************************/

    /*! exports provided: AppAccessdeniedComponent */

    /***/
    function pRB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAccessdeniedComponent", function () {
        return AppAccessdeniedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_accessdenied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.accessdenied.component.html */
      "KaQX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppAccessdeniedComponent = function AppAccessdeniedComponent() {
        _classCallCheck(this, AppAccessdeniedComponent);
      };

      AppAccessdeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-accessdenied',
        template: _raw_loader_app_accessdenied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppAccessdeniedComponent);
      /***/
    },

    /***/
    "pg+d":
    /*!************************************************************************************************************!*\
      !*** ./src/app/apps/reception/ordinaire/nouveauordinairereception/nouveauordinairereception.component.css ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pgD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1b3JkaW5haXJlcmVjZXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "prZE":
    /*!***************************************************************************!*\
      !*** ./src/app/apps/reception/colisreception/colisreception.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ColisreceptionComponent */

    /***/
    function prZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColisreceptionComponent", function () {
        return ColisreceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_colisreception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./colisreception.component.html */
      "B4RA");
      /* harmony import */


      var _colisreception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./colisreception.component.css */
      "t2ud");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var ColisreceptionComponent = /*#__PURE__*/function () {
        function ColisreceptionComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, ColisreceptionComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listems = undefined;
        }

        _createClass(ColisreceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this50 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/colis", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this50.listems = response;
              console.log(_this50.listems);
            }, function (error) {
              _this50.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/reception/edition?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return ColisreceptionComponent;
      }();

      ColisreceptionComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      ColisreceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ems',
        template: _raw_loader_colisreception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_colisreception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ColisreceptionComponent);
      /***/
    },

    /***/
    "qXBG":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function qXBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment.prod */
      "cxbk");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.loginUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/authentification/api/signin';
          this.signupUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + '/authentification/api/signup';
        }

        _createClass(AuthService, [{
          key: "attemptAuth",
          value: function attemptAuth(credentials) {
            return this.http.post(this.loginUrl, credentials, httpOptions);
          }
        }, {
          key: "signUp",
          value: function signUp(info) {
            return this.http.post(this.signupUrl, info, httpOptions);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "qZmL":
    /*!**************************************************************************!*\
      !*** ./src/app/apps/envoi/colis/nouveaucolis/nouveaucolis.component.css ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function qZmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3V2ZWF1Y29saXMuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "rI0q":
    /*!*****************************************!*\
      !*** ./src/app/app.code.component.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function rI0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".p-d-flex > div,\n.box {\n  background-color: var(--surface-e);\n  text-align: center;\n  padding: 1rem;\n  border-radius: 4px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-d-flex > div {\n  width: 8rem;\n}\n\ni:not([class~=pi]) {\n  background-color: var(--surface-b);\n  color: var(--primary-color);\n  font-family: Monaco, courier, monospace;\n  font-style: normal;\n  font-size: 12px;\n  padding: 2px 4px;\n  letter-spacing: 0.5px;\n  border-radius: 3px;\n  font-weight: 600;\n  margin: 0 2px;\n}\n\n:host ::ng-deep pre[class*=language-] {\n  box-shadow: none;\n  border: 0 none;\n}\n\n:host ::ng-deep pre[class*=language-]:before, :host ::ng-deep pre[class*=language-]:after {\n  display: none !important;\n}\n\n:host ::ng-deep pre[class*=language-] code {\n  border-left: 10px solid var(--surface-d) !important;\n  box-shadow: none !important;\n  background: var(--surface-b) !important;\n  margin: 1em 0;\n  color: var(--text-color);\n  font-size: 14px;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.tag, :host ::ng-deep pre[class*=language-] code .token.keyword {\n  color: #2196F3 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.attr-name, :host ::ng-deep pre[class*=language-] code .token.attr-string {\n  color: #2196F3 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.attr-value {\n  color: #4CAF50 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.punctuation {\n  color: var(--text-color);\n}\n\n:host ::ng-deep pre[class*=language-] code .token.operator, :host ::ng-deep pre[class*=language-] code .token.string {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUMsa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRDs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNDO0VBQ0Msd0JBQUE7QUFDRjs7QUFFQztFQUNDLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHRztFQUVDLHlCQUFBO0FBRko7O0FBS0c7RUFFQyx5QkFBQTtBQUpKOztBQU9HO0VBQ0MseUJBQUE7QUFMSjs7QUFRRztFQUNDLHdCQUFBO0FBTko7O0FBU0c7RUFFQyx1QkFBQTtBQVJKIiwiZmlsZSI6ImFwcC5jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtZC1mbGV4ID4gZGl2LFxuLmJveCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtZSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG5cbi5wLWQtZmxleCA+IGRpdiB7XG5cdHdpZHRoOiA4cmVtO1xufVxuXG5pOm5vdChbY2xhc3N+PVwicGlcIl0pIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1iKTtcblx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuXHRmb250LWZhbWlseTogTW9uYWNvLCBjb3VyaWVyLCBtb25vc3BhY2U7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRwYWRkaW5nOiAycHggNHB4O1xuXHRsZXR0ZXItc3BhY2luZzogLjVweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW46IDAgMnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlcjogMCBub25lO1xuXG5cdCY6YmVmb3JlLCAmOmFmdGVyIHtcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cdH1cblxuXHRjb2RlIHtcblx0XHRib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpICFpbXBvcnRhbnQ7XG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtYikgIWltcG9ydGFudDtcblx0XHRtYXJnaW46IDFlbSAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cblx0XHQudG9rZW4ge1xuXHRcdFx0Ji50YWcsXG5cdFx0XHQmLmtleXdvcmQge1xuXHRcdFx0XHRjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmLmF0dHItbmFtZSxcblx0XHRcdCYuYXR0ci1zdHJpbmcge1xuXHRcdFx0XHRjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmLmF0dHItdmFsdWUge1xuXHRcdFx0XHRjb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHQmLnB1bmN0dWF0aW9uIHtcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQmLm9wZXJhdG9yLFxuXHRcdFx0Ji5zdHJpbmcge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "rOO2":
    /*!****************************************************************************!*\
      !*** ./src/app/apps/vente/tableaubordvente/tableaubordvente.component.css ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function rOO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZWF1Ym9yZHZlbnRlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "rbu+":
    /*!*************************************************!*\
      !*** ./src/app/apps/envoi/ems/ems.component.ts ***!
      \*************************************************/

    /*! exports provided: EmsComponent */

    /***/
    function rbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmsComponent", function () {
        return EmsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ems_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ems.component.html */
      "HNsU");
      /* harmony import */


      var _ems_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ems.component.css */
      "l1Gi");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var EmsComponent = /*#__PURE__*/function () {
        function EmsComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, EmsComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listems = undefined;
        }

        _createClass(EmsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this51 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/envoi/ems", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this51.listems = response;
              console.log(_this51.listems);
            }, function (error) {
              _this51.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/envoi/ems/edition?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return EmsComponent;
      }();

      EmsComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      EmsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ems',
        template: _raw_loader_ems_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_ems_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmsComponent);
      /***/
    },

    /***/
    "rfDl":
    /*!**********************************************************!*\
      !*** ./src/app/apps/reception/esuuq/esuuq.component.css ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function rfDl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdXVxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJlc3V1cS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuZG9tbWFnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubm9uZW5kb21tYWdlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "riBK":
    /*!*************************************************************!*\
      !*** ./src/app/apps/colis/reception/reception.component.ts ***!
      \*************************************************************/

    /*! exports provided: ReceptionComponent */

    /***/
    function riBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReceptionComponent", function () {
        return ReceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reception.component.html */
      "EX1s");
      /* harmony import */


      var _reception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reception.component.css */
      "OUbL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReceptionComponent = /*#__PURE__*/function () {
        function ReceptionComponent() {
          _classCallCheck(this, ReceptionComponent);
        }

        _createClass(ReceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReceptionComponent;
      }();

      ReceptionComponent.ctorParameters = function () {
        return [];
      };

      ReceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reception',
        template: _raw_loader_reception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReceptionComponent);
      /***/
    },

    /***/
    "sCma":
    /*!**************************************************************************************!*\
      !*** ./src/app/apps/reception/recommandereception/recommandereception.component.css ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function sCma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWFuZGVyZWNlcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InJlY29tbWFuZGVyZWNlcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmRvbW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5vbmVuZG9tbWFnZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "seg4":
    /*!*************************************************************************!*\
      !*** ./src/app/apps/envoi/colis/editioncolis/editioncolis.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EditioncolisComponent */

    /***/
    function seg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditioncolisComponent", function () {
        return EditioncolisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editioncolis_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editioncolis.component.html */
      "x07v");
      /* harmony import */


      var _editioncolis_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editioncolis.component.css */
      "EbaP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditioncolisComponent = /*#__PURE__*/function () {
        function EditioncolisComponent() {
          _classCallCheck(this, EditioncolisComponent);
        }

        _createClass(EditioncolisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditioncolisComponent;
      }();

      EditioncolisComponent.ctorParameters = function () {
        return [];
      };

      EditioncolisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editioncolis',
        template: _raw_loader_editioncolis_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editioncolis_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditioncolisComponent);
      /***/
    },

    /***/
    "six9":
    /*!*****************************************************************************!*\
      !*** ./src/app/apps/livraison/livraisonreussi/livraisonreussi.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LivraisonreussiComponent */

    /***/
    function six9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LivraisonreussiComponent", function () {
        return LivraisonreussiComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_livraisonreussi_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./livraisonreussi.component.html */
      "FLHs");
      /* harmony import */


      var _livraisonreussi_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./livraisonreussi.component.css */
      "Q3cR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var LivraisonreussiComponent = /*#__PURE__*/function () {
        function LivraisonreussiComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, LivraisonreussiComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.liste = undefined;
        }

        _createClass(LivraisonreussiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this52 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/livraison/success", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this52.liste = response;
              console.log(_this52.liste);
            }, function (error) {
              _this52.showWarn("La liste n'a pas pu etre affiché !!! voici la raison - " + error.getMessage());
            });
          }
          /**
          *  costumisation des erreurs
          */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return LivraisonreussiComponent;
      }();

      LivraisonreussiComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      LivraisonreussiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-livraisonreussi',
        template: _raw_loader_livraisonreussi_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_livraisonreussi_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LivraisonreussiComponent);
      /***/
    },

    /***/
    "svKR":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/livraison/nouveaulivraison/nouveaulivraison.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function svKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<p-confirmDialog [style]=\"{width: '50vw'}\" [baseZIndex]=\"10000\" rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\n<p-messages [(value)]=\"msgs\"></p-messages>\n    \n<p-panel header=\"Recherche un article \" class=\"panel-work\">\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\"> \n            <form [formGroup]=\"rechercheForm\" (ngSubmit)=\"findResultat(rechercheForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                <span class=\"required\">* : champs obligatoire à remplir</span> \n                <ul>\n                    <li *ngIf=\"!rechercheForm.controls['reference'].valid&&rechercheForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                \n                </ul>\n                <div class=\"p-fluid\">\n                    <div class=\"p-field p-grid\">\n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-6\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">                                           \n                                        <p-autoComplete  ([ngModel])=\"reference\" name=\"reference\" class=\"ui-g-12\" [suggestions]=\"string\" (completeMethod)=\"searchByReference($event)\" [minLength]=\"3\" formControlName=\"reference\">\n                                        </p-autoComplete>                                   \n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"p-col-2\">                              \n                                <div class=\"p-field p-grid\">\n                                    <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!rechercheForm.valid\"></button>\n                                </div>\n                            </div>                        \n                    </div>\n                </div>\n            </form>\n                <hr/>\n\n                <div class=\"p-fluid\" *ngIf=\"article\">\n\n                    <p-fieldset legend=\"Information de l'article\">\n                        <div class=\"p-field p-grid\">\n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Statut <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">  \n                                        <span *ngIf=\"article.dommage; then thenBlock else elseBlock\"> </span>\n                                        <ng-template #thenBlock> <span  class=\"endommage\">Endommagé </span></ng-template>\n                                        <ng-template #elseBlock><span  class=\"nonendommage\">Normal </span></ng-template>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"p-field p-grid\">\n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Type de colis <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">  \n                                            {{article.type}}\n                                    </div>\n                                </div>\n                            </div>\n\n                            \n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Etat de colis <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">  \n                                            {{article.etat}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"p-field p-grid\">\n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Destinateur <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">  \n                                            {{article.namerecipient}}\n                                    </div>\n                                </div>\n                            </div>\n\n                            \n                            <div class=\"p-col-2\">\n                                <div class=\"p-field p-grid\">\n                                    <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur <span class=\"required\">*</span></label>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-12 p-p-md-9\">  \n                                            {{article.telrecipient}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        \n                        <div class=\"p-field p-grid\">\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">\n                                    <button pButton type=\"submit\" class=\"p-button-primary\"  (click)=\"confirm()\"  label=\"Enregistrer\" [disabled]=\"!rechercheForm.valid\"></button>\n                                </div>\n                            </div>\n                            \n                            <div class=\"p-col-1\">\n\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"p-field p-grid\">                                    \n                                    <button pButton type=\"submit\" class=\"p-button-warning\"  (click)=\"declinaison()\"  label=\"Livraison echoue - retour en stock\" [disabled]=\"!rechercheForm.valid\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </p-fieldset>\n                </div>\n            </div>\n        </p-panel>\n    \n\n<!--\n    <p-dialog header=\"Livraison echoue\" [(visible)]=\"displayBasic\" [style]=\"{width: '50vw'}\">\n                \n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\"> \n            <form>\n                <div class=\"p-field p-grid\">\n                    <div class=\"p-col-12\">\n                        <div class=\"p-field p-grid\">\n                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                            <div class=\"p-col-12 p-p-md-9\">      \n                                <textarea rows=\"5\"  class=\"ui-g-12\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentaire\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        \n        <ng-template pTemplate=\"footer\">\n            <p-button icon=\"pi pi-check\" (click)=\"displayBasic=false\" label=\"Ok\" styleClass=\"p-button-text\"></p-button>\n        </ng-template>\n    </p-dialog>\n-->\n\n    \n<!-- Decoration dialog -->\n<p-dialog header=\"Livraison echoue\" [(visible)]=\"displayBasic\" [responsive]=\"true\"   [style]=\"{width: '900px'}\">\n    <form [formGroup]=\"commentaireForm\"  (ngSubmit)=\"savecommentaire(commentaireForm.value);\">\n        <div style=\"height: 200px;\">\n            <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\"> \n                <div class=\"ui-g ui-fluid\" >\n                    <div class=\"p-field p-grid\">\n                        <div class=\"p-col-12\">\n                            <div class=\"p-field p-grid\">\n                                <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez fourni un commentaire <span class=\"required\">*</span></label>\n                                <div class=\"p-col-12 p-p-md-9\">      \n                                    <textarea rows=\"5\" cols=\"30\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentaire\" formControlName=\"commentaire\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"ui-g ui-fluid\" >\n                <div class=\"p-field p-grid\">   \n                    <div class=\"p-col-12 p-p-md-12\">  \n                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!commentaireForm.valid\"></button>\n                    </div>\n                </div>\n            </div> \n        </div>\n    </form>\n</p-dialog>\n";
      /***/
    },

    /***/
    "t2ud":
    /*!****************************************************************************!*\
      !*** ./src/app/apps/reception/colisreception/colisreception.component.css ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function t2ud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".endommage{\r\n    background-color: red;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.nonendommage\r\n{\r\n    background-color: green;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGlzcmVjZXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJjb2xpc3JlY2VwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuZG9tbWFnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubm9uZW5kb21tYWdlXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "u2iu":
    /*!*******************************************!*\
      !*** ./src/app/auth/models/login-info.ts ***!
      \*******************************************/

    /*! exports provided: AuthLoginInfo */

    /***/
    function u2iu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function () {
        return AuthLoginInfo;
      });

      var AuthLoginInfo = function AuthLoginInfo(username, password) {
        _classCallCheck(this, AuthLoginInfo);

        this.username = username;
        this.password = password;
      };
      /***/

    },

    /***/
    "uoAt":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/parametrage/categorie/categorie.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uoAt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>categorie works!</p>\n";
      /***/
    },

    /***/
    "urcB":
    /*!***********************************************************************!*\
      !*** ./src/app/apps/reception/emsreception/emsreception.component.ts ***!
      \***********************************************************************/

    /*! exports provided: EmsreceptionComponent */

    /***/
    function urcB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmsreceptionComponent", function () {
        return EmsreceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_emsreception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./emsreception.component.html */
      "R5e8");
      /* harmony import */


      var _emsreception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./emsreception.component.css */
      "5s3B");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var EmsreceptionComponent = /*#__PURE__*/function () {
        function EmsreceptionComponent(messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, EmsreceptionComponent);

          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.msgs = [];
          this.listems = undefined;
        }

        _createClass(EmsreceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this53 = this;

            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */
            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].url + "/api/postal/reception/ems", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this53.listems = response;
              console.log(_this53.listems);
            }, function (error) {
              _this53.showWarn("Les articles EMS  n'ont pas pu etre chargé, Voici la raison " + error.getMessage());
            });
          }
          /**
           * Editer EMS - Redirection vers la page de edition d'un nouveau ems
           */

        }, {
          key: "editer",
          value: function editer(rowData) {
            //console.log("je suis ici");
            this.router.navigate(['gestion/reception/edition?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4'], {
              queryParams: {
                id: '' + rowData["idcrypt"] + ''
              }
            });
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return EmsreceptionComponent;
      }();

      EmsreceptionComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }];
      };

      EmsreceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ems',
        template: _raw_loader_emsreception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        styles: [_emsreception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmsreceptionComponent);
      /***/
    },

    /***/
    "vGzH":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.invoice.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function vGzH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button pButton label=\"Print\" type=\"button\" icon=\"pi pi-print\" (click)=\"print()\"\n        style=\"display:block;margin-bottom: 20px; margin-left: 6px;\"></button>\n<div class=\"p-grid invoice-body\">\n    <div class=\"p-col-12\">\n        <div id=\"invoice-content\">\n            <div class=\"card invoice-wrapper\">\n                <div class=\"p-grid invoice-header\">\n                    <div class=\"p-col-6 logo-adress\">\n                        <img src=\"assets/layout/images/extensions/prime-logo.svg\" alt=\"avalon-layout\"/>\n                        <p>9137 3rd Lane California City, CA 93504.</p>\n                    </div>\n                    <div class=\"p-col-6 title-date\">\n                        <h1 class=\"title\">INVOICE</h1>\n                        <p>30/08/2019</p>\n                    </div>\n                </div>\n                <div class=\"card invoice-table billto-table\">\n                    <div class=\"p-grid table-header\">\n                        <div class=\"p-col-4\">\n                            <h2 class=\"header\">BILL TO </h2>\n                        </div>\n                        <div class=\"p-col-3\">\n                            <h2 class=\"header\">DATE </h2>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <h2 class=\"header\">INVOICE NO </h2>\n                        </div>\n                        <div class=\"p-col-3 text-right\">\n                            <h2 class=\"header\">NOTES </h2>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row\">\n                        <div class=\"p-col-4\">\n                            <p>TOYOKSU SYSCOM CORPORATION 11-27, MEIEKI 4-CHROME\n                                NAKAMURA-KU, NAGOYA 450-0002 JAPAN </p>\n                        </div>\n                        <div class=\"p-col-3\">\n                            <p>30/08/2019 </p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>A/3100 </p>\n                        </div>\n                        <div class=\"p-col-3 text-right\">\n                            <p>N/A </p>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"card invoice-table products-table\">\n                    <div class=\"p-grid table-header\">\n                        <div class=\"p-col-5  row-title\">\n                            <h2 class=\"header\">DESCRIPTION </h2>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <h2 class=\"header\">QUANTITY </h2>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <h2 class=\"header\">UNIT PRICE </h2>\n                        </div>\n                        <div class=\"p-col-3 text-right\">\n                            <h2 class=\"header\">LINE TOTAL </h2>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row even\">\n                        <div class=\"p-col-5 row-title\">\n                            <p>1 Year PrimeFaces Elite Subscription </p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>4 </p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>$99.00</p>\n                        </div>\n                        <div class=\"p-col-3 total text-right\">\n                            <p>$396.00 </p>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row\">\n                        <div class=\"p-col-5 row-title\">\n                            <p>PrimeFaces Ultima Extended License </p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>1</p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>$790.00</p>\n                        </div>\n                        <div class=\"p-col-3 total text-right\">\n                            <p>$790.00 </p>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row even\">\n                        <div class=\"p-col-5 row-title\">\n                            <p>PrimeFaces Prestige Basic License </p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>2</p>\n                        </div>\n                        <div class=\"p-col-2 text-right\">\n                            <p>$59.00</p>\n                        </div>\n                        <div class=\"p-col-3 total text-right\">\n                            <p>$118.0</p>\n                        </div>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"card invoice-table bank-total-table\">\n                    <div class=\"p-grid table-header\">\n                        <div class=\"p-col-6 text-left \">\n                            <h2 class=\"header\">BANK </h2>\n                        </div>\n                        <div class=\"p-col-6 text-right\">\n                            <h2 class=\"header\">TOTAL </h2>\n                        </div>\n\n                    </div>\n                    <div class=\"p-grid table-content-row\">\n                        <div class=\"p-col-2 row-title\">\n                            <h2>Bank</h2>\n                        </div>\n                        <div class=\"p-col-3 text-left\">\n                            <p>BestBank </p>\n                        </div>\n                        <div class=\"p-col-5 text-right total\">\n                            <h2>Subtotal</h2>\n                        </div>\n                        <div class=\"p-col-2 total text-right\">\n                            <p>$1304.00</p>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row even\">\n                        <div class=\"p-col-2 row-title\">\n                            <h2>Account Beneficiary</h2>\n                        </div>\n                        <div class=\"p-col-3 text-left\">\n                            <p>Edward Williams</p>\n                        </div>\n                        <div class=\"p-col-5 text-right total\">\n                            <h2>VAT</h2>\n                        </div>\n                        <div class=\"p-col-2 total text-right\">\n                            <p>$234.72</p>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row\">\n                        <div class=\"p-col-2 row-title\">\n                            <h2>Swift</h2>\n                        </div>\n                        <div class=\"p-col-3 text-left\">\n                            <p>PJNWBXND</p>\n                        </div>\n                        <div class=\"p-col-5 text-right total \">\n                            <h2>Total</h2>\n                        </div>\n                        <div class=\"p-col-2 total text-right\">\n                            <p>$1538.72</p>\n                        </div>\n                    </div>\n                    <div class=\"p-grid table-content-row even\">\n                        <div class=\"p-col-2 row-title\">\n                            <h2>IBAN</h2>\n                        </div>\n                        <div class=\"p-col-10 text-left\">\n                            <p>GB04420235692263866724650931</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./demo/view/dashboarddemo.component */
      "yd5u");
      /* harmony import */


      var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./demo/view/documentation.component */
      "Pv7A");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/app.notfound.component */
      "xBH+");
      /* harmony import */


      var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/app.error.component */
      "anCR");
      /* harmony import */


      var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/app.accessdenied.component */
      "pRB7");
      /* harmony import */


      var _pages_app_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/app.login.component */
      "OnSs");
      /* harmony import */


      var _apps_colis_reception_reception_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./apps/colis/reception/reception.component */
      "riBK");
      /* harmony import */


      var _apps_parametrage_gestion_access_access_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./apps/parametrage/gestion/access/access.component */
      "O2fg");
      /* harmony import */


      var _apps_envoi_ems_ems_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./apps/envoi/ems/ems.component */
      "rbu+");
      /* harmony import */


      var _apps_envoi_colis_colis_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./apps/envoi/colis/colis.component */
      "d4o+");
      /* harmony import */


      var _apps_envoi_recommande_recommande_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./apps/envoi/recommande/recommande.component */
      "T4wd");
      /* harmony import */


      var _apps_envoi_tableaubord_tableaubord_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./apps/envoi/tableaubord/tableaubord.component */
      "ojSt");
      /* harmony import */


      var _apps_reception_ordinaire_ordinaire_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./apps/reception/ordinaire/ordinaire.component */
      "BqQa");
      /* harmony import */


      var _apps_reception_emsreception_emsreception_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./apps/reception/emsreception/emsreception.component */
      "urcB");
      /* harmony import */


      var _apps_reception_colisreception_colisreception_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./apps/reception/colisreception/colisreception.component */
      "prZE");
      /* harmony import */


      var _apps_reception_recommandereception_recommandereception_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./apps/reception/recommandereception/recommandereception.component */
      "X5gR");
      /* harmony import */


      var _apps_reception_tableaubordreception_tableaubordreception_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./apps/reception/tableaubordreception/tableaubordreception.component */
      "3e/o");
      /* harmony import */


      var _apps_envoi_ems_nouveau_nouveau_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./apps/envoi/ems/nouveau/nouveau.component */
      "pJhg");
      /* harmony import */


      var _apps_envoi_ems_edition_edition_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./apps/envoi/ems/edition/edition.component */
      "bIAB");
      /* harmony import */


      var _apps_envoi_colis_nouveaucolis_nouveaucolis_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./apps/envoi/colis/nouveaucolis/nouveaucolis.component */
      "+34J");
      /* harmony import */


      var _apps_envoi_colis_editioncolis_editioncolis_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./apps/envoi/colis/editioncolis/editioncolis.component */
      "seg4");
      /* harmony import */


      var _apps_envoi_recommande_nouveaurecommande_nouveaurecommande_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./apps/envoi/recommande/nouveaurecommande/nouveaurecommande.component */
      "/XrQ");
      /* harmony import */


      var _apps_reception_emsreception_nouveauemsreception_nouveauemsreception_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./apps/reception/emsreception/nouveauemsreception/nouveauemsreception.component */
      "bGFz");
      /* harmony import */


      var _apps_reception_editreception_editreception_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./apps/reception/editreception/editreception.component */
      "9Sdb");
      /* harmony import */


      var _apps_reception_colisreception_nouveaucolisreception_nouveaucolisreception_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./apps/reception/colisreception/nouveaucolisreception/nouveaucolisreception.component */
      "7RVm");
      /* harmony import */


      var _apps_reception_recommandereception_nouveaurecommandereception_nouveaurecommandereception_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./apps/reception/recommandereception/nouveaurecommandereception/nouveaurecommandereception.component */
      "5ewr");
      /* harmony import */


      var _apps_reception_ordinaire_nouveauordinairereception_nouveauordinairereception_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./apps/reception/ordinaire/nouveauordinairereception/nouveauordinairereception.component */
      "y76H");
      /* harmony import */


      var _apps_stocks_recherche_recherche_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./apps/stocks/recherche/recherche.component */
      "lEO1");
      /* harmony import */


      var _apps_stocks_enstock_enstock_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./apps/stocks/enstock/enstock.component */
      "odXu");
      /* harmony import */


      var _apps_reception_esuuq_esuuq_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./apps/reception/esuuq/esuuq.component */
      "GFK6");
      /* harmony import */


      var _apps_reception_esuuq_nouveauesuuq_nouveauesuuq_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./apps/reception/esuuq/nouveauesuuq/nouveauesuuq.component */
      "A8DN");
      /* harmony import */


      var _apps_stocks_defaillant_defaillant_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./apps/stocks/defaillant/defaillant.component */
      "8H/n");
      /* harmony import */


      var _apps_livraison_livraison_livraison_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./apps/livraison/livraison/livraison.component */
      "6M6E");
      /* harmony import */


      var _apps_livraison_nouveaulivraison_nouveaulivraison_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./apps/livraison/nouveaulivraison/nouveaulivraison.component */
      "1sSu");
      /* harmony import */


      var _apps_livraison_livraisonreussi_livraisonreussi_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./apps/livraison/livraisonreussi/livraisonreussi.component */
      "six9");
      /* harmony import */


      var _apps_livraison_livraisonechoue_livraisonechoue_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./apps/livraison/livraisonechoue/livraisonechoue.component */
      "Nc2I");
      /* harmony import */


      var _apps_vente_parametrage_vente_parametrage_vente_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./apps/vente/parametrage-vente/parametrage-vente.component */
      "8Gg0");
      /* harmony import */


      var _apps_vente_nouveauvente_nouveauvente_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./apps/vente/nouveauvente/nouveauvente.component */
      "JL6J");
      /* harmony import */


      var _apps_vente_rapportsvente_rapportsvente_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./apps/vente/rapportsvente/rapportsvente.component */
      "GgHU");
      /* harmony import */


      var _apps_vente_tableaubordvente_tableaubordvente_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./apps/vente/tableaubordvente/tableaubordvente.component */
      "8KQc");

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
          path: 'login',
          component: _pages_app_login_component__WEBPACK_IMPORTED_MODULE_9__["AppLoginComponent"]
        }, {
          path: '',
          component: _app_main_component__WEBPACK_IMPORTED_MODULE_5__["AppMainComponent"],
          children: [{
            path: 'accueil',
            component: _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDemoComponent"]
          }, {
            path: 'dashboards/generic',
            component: _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDemoComponent"]
          }, {
            path: 'documentation',
            component: _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"]
          },
          /**
           *  Routing Gestion de colis
           */
          {
            path: 'gestion/colis/rerception',
            component: _apps_colis_reception_reception_component__WEBPACK_IMPORTED_MODULE_10__["ReceptionComponent"]
          }, {
            path: 'gestion/colis/recherche',
            component: _apps_stocks_recherche_recherche_component__WEBPACK_IMPORTED_MODULE_31__["RechercheComponent"]
          }, {
            path: 'gestion/colis en stocks',
            component: _apps_stocks_enstock_enstock_component__WEBPACK_IMPORTED_MODULE_32__["EnstockComponent"]
          },
          /**
           * Routing Gestion de parametrage
           */
          {
            path: 'parametrage/utilisateurs',
            component: _apps_parametrage_gestion_access_access_component__WEBPACK_IMPORTED_MODULE_11__["AccessComponent"]
          }, {
            path: 'parametrage/categorie',
            component: _apps_parametrage_gestion_access_access_component__WEBPACK_IMPORTED_MODULE_11__["AccessComponent"]
          }, {
            path: 'parametrage/gestion/access',
            component: _apps_parametrage_gestion_access_access_component__WEBPACK_IMPORTED_MODULE_11__["AccessComponent"]
          },
          /**
           * Routing Gestion d'envoi
           */
          {
            path: 'gestion/envoi/ems?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4',
            component: _apps_envoi_ems_ems_component__WEBPACK_IMPORTED_MODULE_12__["EmsComponent"]
          }, {
            path: 'gestion/envoi/ems/nouveau?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4',
            component: _apps_envoi_ems_nouveau_nouveau_component__WEBPACK_IMPORTED_MODULE_21__["NouveauComponent"]
          }, {
            path: 'gestion/envoi/ems/edition?902ee88578f3fe8420701891bf3a0846cd5aae119f6b75db4495adc0525034f4',
            component: _apps_envoi_ems_edition_edition_component__WEBPACK_IMPORTED_MODULE_22__["EditionComponent"]
          }, {
            path: 'gestion/envoi/colis?3898a49c054648fde86b609be6c7ae3f6fae4ee84cde8bc11e3310599d5df9eb',
            component: _apps_envoi_colis_colis_component__WEBPACK_IMPORTED_MODULE_13__["ColisComponent"]
          }, {
            path: 'gestion/envoi/colis/nouveau?3898a49c054648fde86b609be6c7ae3f6fae4ee84cde8bc11e3310599d5df9eb',
            component: _apps_envoi_colis_nouveaucolis_nouveaucolis_component__WEBPACK_IMPORTED_MODULE_23__["NouveaucolisComponent"]
          }, {
            path: 'gestion/envoi/colis/edition?3898a49c054648fde86b609be6c7ae3f6fae4ee84cde8bc11e3310599d5df9eb',
            component: _apps_envoi_colis_editioncolis_editioncolis_component__WEBPACK_IMPORTED_MODULE_24__["EditioncolisComponent"]
          }, {
            path: 'gestion/envoi/recommande?b592fc0e8889a74aa96f3d2ff8999acc1fd6bfba03f6c8d05d0ec19c3454a136',
            component: _apps_envoi_recommande_recommande_component__WEBPACK_IMPORTED_MODULE_14__["RecommandeComponent"]
          }, {
            path: 'gestion/envoi/recommande/nouveau?b592fc0e8889a74aa96f3d2ff8999acc1fd6bfba03f6c8d05d0ec19c3454a136',
            component: _apps_envoi_recommande_nouveaurecommande_nouveaurecommande_component__WEBPACK_IMPORTED_MODULE_25__["NouveaurecommandeComponent"]
          }, {
            path: 'gestion/envoi/tableau de bord?7b7934aa5a94823fdb1a27b4a19bf73b515d43e487bd0b78c8bc7ecfc6ca67e3',
            component: _apps_envoi_tableaubord_tableaubord_component__WEBPACK_IMPORTED_MODULE_15__["TableaubordComponent"]
          },
          /**
           * Routing Gestion de reception
           */
          {
            path: 'gestion/reception/ems?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4',
            component: _apps_reception_emsreception_emsreception_component__WEBPACK_IMPORTED_MODULE_17__["EmsreceptionComponent"]
          }, {
            path: 'gestion/reception/ems/nouveau?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4',
            component: _apps_reception_emsreception_nouveauemsreception_nouveauemsreception_component__WEBPACK_IMPORTED_MODULE_26__["NouveauemsreceptionComponent"]
          }, {
            path: 'gestion/reception/edition?5f28340aaf752a5a3bc26a23fea661575242bf65304f9f2e24c0d581385606e4',
            component: _apps_reception_editreception_editreception_component__WEBPACK_IMPORTED_MODULE_27__["EditreceptionComponent"]
          }, {
            path: 'gestion/reception/colis?7a3239ca19232f36f9c478bd8a7d4108f5be5df856fe2d95570b150090e98596',
            component: _apps_reception_colisreception_colisreception_component__WEBPACK_IMPORTED_MODULE_18__["ColisreceptionComponent"]
          }, {
            path: 'gestion/reception/colis/nouveau?7a3239ca19232f36f9c478bd8a7d4108f5be5df856fe2d95570b150090e98596',
            component: _apps_reception_colisreception_nouveaucolisreception_nouveaucolisreception_component__WEBPACK_IMPORTED_MODULE_28__["NouveaucolisreceptionComponent"]
          }, {
            path: 'gestion/reception/recommande?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50',
            component: _apps_reception_recommandereception_recommandereception_component__WEBPACK_IMPORTED_MODULE_19__["RecommandereceptionComponent"]
          }, {
            path: 'gestion/reception/recommande/nouveau?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50',
            component: _apps_reception_recommandereception_nouveaurecommandereception_nouveaurecommandereception_component__WEBPACK_IMPORTED_MODULE_29__["NouveaurecommandereceptionComponent"]
          }, {
            path: 'gestion/reception/esuuq?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50',
            component: _apps_reception_esuuq_esuuq_component__WEBPACK_IMPORTED_MODULE_33__["EsuuqComponent"]
          }, {
            path: 'gestion/reception/esuuq/nouveau?86e47540ae19f6bfbe12691136bc32e9b06983ed03726bc62dd49b6861db2d50',
            component: _apps_reception_esuuq_nouveauesuuq_nouveauesuuq_component__WEBPACK_IMPORTED_MODULE_34__["NouveauesuuqComponent"]
          }, {
            path: 'gestion/reception/ordinaire?28660c74f421a0d5636ae1716a62433e14a6a19fd672f93b9bd98b6b177d07ff',
            component: _apps_reception_ordinaire_ordinaire_component__WEBPACK_IMPORTED_MODULE_16__["OrdinaireComponent"]
          }, {
            path: 'gestion/reception/ordinaire/nouveau?28660c74f421a0d5636ae1716a62433e14a6a19fd672f93b9bd98b6b177d07ff',
            component: _apps_reception_ordinaire_nouveauordinairereception_nouveauordinairereception_component__WEBPACK_IMPORTED_MODULE_30__["NouveauordinairereceptionComponent"]
          }, {
            path: 'gestion/reception/tableau de bord?3e8429afaf5fc4d9770e124842011a54abaf8f61f157d86c14112ce91ca0194b',
            component: _apps_reception_tableaubordreception_tableaubordreception_component__WEBPACK_IMPORTED_MODULE_20__["TableaubordreceptionComponent"]
          },
          /***
           * Gestion d'inventaire
           */
          {
            path: 'gestion/stocks/recherche?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869',
            component: _apps_stocks_recherche_recherche_component__WEBPACK_IMPORTED_MODULE_31__["RechercheComponent"]
          }, {
            path: 'gestion/stocks/en stock?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869',
            component: _apps_stocks_enstock_enstock_component__WEBPACK_IMPORTED_MODULE_32__["EnstockComponent"]
          }, {
            path: 'gestion/stocks/defaillant?4aa7d2d064588a6e7db6d69ffcc400f402863af69afdf0b2925cc2e45953c869',
            component: _apps_stocks_defaillant_defaillant_component__WEBPACK_IMPORTED_MODULE_35__["DefaillantComponent"]
          },
          /***
           * Gestion de livraison
           */
          {
            path: 'gestion/reception/livraison?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab',
            component: _apps_livraison_livraison_livraison_component__WEBPACK_IMPORTED_MODULE_36__["LivraisonComponent"]
          }, {
            path: 'gestion/reception/livraison/nouveau?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab',
            component: _apps_livraison_nouveaulivraison_nouveaulivraison_component__WEBPACK_IMPORTED_MODULE_37__["NouveaulivraisonComponent"]
          }, {
            path: 'gestion/reception/livraison/reussi?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab',
            component: _apps_livraison_livraisonreussi_livraisonreussi_component__WEBPACK_IMPORTED_MODULE_38__["LivraisonreussiComponent"]
          }, {
            path: 'gestion/reception/livraison/echoue?ef2e7680bc9ac5e77c16e54b7491fae317e766113a4fe65fdaa3270e80bbc4ab',
            component: _apps_livraison_livraisonechoue_livraisonechoue_component__WEBPACK_IMPORTED_MODULE_39__["LivraisonechoueComponent"]
          }, {
            path: 'gestion/vente/parametrage?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda',
            component: _apps_vente_parametrage_vente_parametrage_vente_component__WEBPACK_IMPORTED_MODULE_40__["ParametrageVenteComponent"]
          }, {
            path: 'gestion/vente/nouveau?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda',
            component: _apps_vente_nouveauvente_nouveauvente_component__WEBPACK_IMPORTED_MODULE_41__["NouveauventeComponent"]
          }, {
            path: 'gestion/vente/rapports?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda',
            component: _apps_vente_rapportsvente_rapportsvente_component__WEBPACK_IMPORTED_MODULE_42__["RapportsventeComponent"]
          }, {
            path: 'gestion/vente/tableau de bord?d79b31f87777c36aaed60e745e3b19a238f8becd38b450e723d5a639072acdda',
            component: _apps_vente_tableaubordvente_tableaubordvente_component__WEBPACK_IMPORTED_MODULE_43__["TableaubordventeComponent"]
          }]
        }, {
          path: 'error',
          component: _pages_app_error_component__WEBPACK_IMPORTED_MODULE_7__["AppErrorComponent"]
        }, {
          path: 'accessdenied',
          component: _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_8__["AppAccessdeniedComponent"]
        }, {
          path: 'notfound',
          component: _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_6__["AppNotfoundComponent"]
        }, {
          path: '**',
          redirectTo: '/notfound'
        }], {
          scrollPositionRestoration: 'enabled'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "x07v":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/colis/editioncolis/editioncolis.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x07v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>editioncolis works!</p>\n";
      /***/
    },

    /***/
    "xBH+":
    /*!*************************************************!*\
      !*** ./src/app/pages/app.notfound.component.ts ***!
      \*************************************************/

    /*! exports provided: AppNotfoundComponent */

    /***/
    function xBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppNotfoundComponent", function () {
        return AppNotfoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.notfound.component.html */
      "82Sa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppNotfoundComponent = function AppNotfoundComponent() {
        _classCallCheck(this, AppNotfoundComponent);
      };

      AppNotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notfound',
        template: _raw_loader_app_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppNotfoundComponent);
      /***/
    },

    /***/
    "xJ0D":
    /*!******************************************************************!*\
      !*** ./src/app/apps/envoi/tableaubord/tableaubord.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function xJ0D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dashboard{\r\n    background-color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlYXVib3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoidGFibGVhdWJvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "xLnY":
    /*!**********************************************!*\
      !*** ./src/app/demo/service/photoservice.ts ***!
      \**********************************************/

    /*! exports provided: PhotoService */

    /***/
    function xLnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(http) {
          _classCallCheck(this, PhotoService);

          this.http = http;
        }

        _createClass(PhotoService, [{
          key: "getImages",
          value: function getImages() {
            return this.http.get('assets/demo/data/photos.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], PhotoService);
      /***/
    },

    /***/
    "xPEa":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/envoi/colis/colis.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xPEa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h5>Envoie colis</h5>\n            <p-table #dt [value]=\"listcolis\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\n                     styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n                     [filterDelay]=\"0\" [globalFilterFields]=\"['Reference','type','nomsender','namerecipient', 'telrecipient']\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\n                       \n                        <a routerLink=\"/gestion/envoi/colis/nouveau?3898a49c054648fde86b609be6c7ae3f6fae4ee84cde8bc11e3310599d5df9eb\" routerLinkActive=\"active\">\n                            <button pButton pRipple type=\"button\" label=\"Nouvelle Envoie Colis - CP \" (click)=\"new()\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\n                        </a>\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\n                                placeholder=\"Global Search\"/>\n                        </span>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>    \n\n                        <th> Reference </th>\n                        <th> Nom </th>\n                        <th> Type </th>\n                        <th> Adresse </th>\n                        <th> Expediteur </th>\n                        <th> Telephone 1 </th>\n                        <th> Destinateur </th>\n                        <th> Telephone 2 </th>\n                        \n                        <th> Editeur </th>\n                        <th> Edition </th>                        \n                        <th style=\"width: 8rem\"></th>\n\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-colis>\n                    <tr class=\"p-selectable-row\">\n                        <td> {{colis.reference}} </td>\n                        <td>  {{colis.name}} </td>\n                        <td>  {{colis.type}} </td>\n                        <td>  {{colis.adresse}} </td>\n                        <td>  {{colis.nomsender}} </td>\n                        <td>  {{colis.telexpediteur}} </td>\n                        <td>  {{colis.namerecipient}} </td>\n                        <td>  {{colis.telrecipient}} </td>\n\n                        <td>  {{colis.updated.username}} </td>\n                        <td>  {{colis.updatedat}} </td>\n                        <td style=\"text-align: center\">\n                            <button (click)=\"editer(colis)\" pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-cog\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptymessage\">\n                    <tr>\n                        <td colspan=\"8\">Aucune données.</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "xduE":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/reception/ordinaire/nouveauordinairereception/nouveauordinairereception.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xduE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n            <p-fieldset legend=\"Formulaire de creation d'une reception ordinaire\">\n                <form [formGroup]=\"ordinaireForm\" (ngSubmit)=\"save(ordinaireForm.value);\"  style=\"margin: 10px 0px; padding-bottom:10px;\">\n                    <p-panel header=\"Nouvelle Reception - ordinaire (Express Mail Service)\" class=\"panel-work\">\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px;\">\n                            <span class=\"required\">* : champs obligatoire à remplir</span> \n                            <ul>\n                                <li *ngIf=\"!ordinaireForm.controls['reference'].valid&&ordinaireForm.controls['reference'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir une reference car elle est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!ordinaireForm.controls['nomsender'].valid&&ordinaireForm.controls['nomsender'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                \n                                <li *ngIf=\"!ordinaireForm.controls['telexpediteur'].valid&&ordinaireForm.controls['telexpediteur'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone de l'expediteur car il est obligatoire\" ></p-message>   </li>\n                                <li *ngIf=\"!ordinaireForm.controls['namerecipient'].valid&&ordinaireForm.controls['namerecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le nom de destinateur car il est obligatoire\" ></p-message>   </li>\n                                                   \n                                <li *ngIf=\"!ordinaireForm.controls['telrecipient'].valid&&ordinaireForm.controls['telrecipient'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir le numero de telephone du destinateur car il est obligatoire\" ></p-message>   </li>\n                                                      \n                                <li *ngIf=\"!ordinaireForm.controls['datereception'].valid&&ordinaireForm.controls['datereception'].dirty\"> <p-message severity=\"error\" text=\"Veuillez fournir la date de reception car il est obligatoire\" ></p-message>   </li>\n                                                  \n                            </ul>\n                            <div class=\"p-fluid\">\n                                <div class=\"p-field p-grid\">\n\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Categorie  <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\"> \n                                                <input type=\"text\" id=\"disabled-input\" name=\"typearticle\"  pInputText class=\"form-control\" [disabled]=\"disabled\" [(ngModel)]=\"typearticle\" formControlName=\"typearticle\">   \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                        \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-3 p-md-3 p-mb-md-0\">Reference <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"reference\" pInputText   class=\"form-control\" formControlName=\"reference\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Date Reception <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-calendar [(ngModel)]=\"dateactuel\" name=\"datereception\" class=\"form-control\" formControlName=\"datereception\" ></p-calendar>                                \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom de l'expediteur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"nomsender\" pInputText   class=\"form-control\" formControlName=\"nomsender\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">                                                                      \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone de l'expediteur</label>\n                                                    <div class=\"p-col-12 p-md-12\">   \n                                                        <input type=\"text\" name=\"telexpediteur\" pInputText   class=\"form-control\" formControlName=\"telexpediteur\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays Expediteur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\"> \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountryexpediteur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysexpediteur\">\n                                                        </p-dropdown>  \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n                                \n\n                                \n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">                               \n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-md-12\">      \n                                            <input type=\"text\" name=\"adresse\" pInputText   class=\"form-control\" formControlName=\"adresse\">                                    \n                                        </div>\n                                    </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Adresse mail </label>\n                                            <div class=\"p-col-12 p-p-md-9\">   \n                                                <input type=\"text\" name=\"email\" pInputText   class=\"form-control\" formControlName=\"email\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Nom du destinateur <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <input type=\"text\" name=\"namerecipient\" pInputText   class=\"form-control\" formControlName=\"namerecipient\">                                    \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\"> \n                                        <div class=\"p-field p-grid\">\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Telephone du destinateur  <span class=\"required\">*</span> </label>\n                                                    <div class=\"p-col-12 p-p-md-9\">   \n                                                        <input type=\"text\" name=\"telrecipient\" pInputText   class=\"form-control\" formControlName=\"telrecipient\">                                    \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"p-col-6\">\n                                                <div class=\"p-field p-grid\">\n                                                    <label for=\"lastname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Pays du destinateur <span class=\"required\">*</span></label>\n                                                    <div class=\"p-col-12 p-p-md-9\">  \n                                                        <p-dropdown [options]=\"countries\" [(ngModel)]=\"selectedCountrydestinateur\" optionLabel=\"name\" [filter]=\"true\" filterBy=\"name\"\n                                                            [showClear]=\"true\" placeholder=\"Select a Country\"  formControlName=\"paysdestinateur\">\n                                                            \n                                                        </p-dropdown>                              \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"p-field p-grid\">\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Colis dommage</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"dommage\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"dommage\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"p-col-6\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Envoyé un sms de reception du colis</label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <p-checkbox [(ngModel)]=\"envoisms\" binary=\"true\" (onChange)=\"dommageSelect($event)\" inputId=\"binary\" formControlName=\"envoisms\"></p-checkbox>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"p-field p-grid\" *ngIf=\"dommage\">\n                                    <div class=\"p-col-12\">\n                                        <div class=\"p-field p-grid\">\n                                            <label for=\"firstname4\" class=\"p-col-12 p-mb-12 p-md-12 p-mb-md-0\">Veuillez commenter le dommage <span class=\"required\">*</span></label>\n                                            <div class=\"p-col-12 p-p-md-9\">      \n                                                <textarea rows=\"5\"  pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"commentdommage\" formControlName=\"commentaire\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"p-field p-grid\">   \n                                    <div class=\"p-col-12 p-p-md-12\">  \n                                        <button pButton type=\"submit\" label=\"Enregistrer\" [disabled]=\"!ordinaireForm.valid\"></button>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>                       \n                    </p-panel>\n                </form>\n            </p-fieldset>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "y76H":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/apps/reception/ordinaire/nouveauordinairereception/nouveauordinairereception.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: NouveauordinairereceptionComponent */

    /***/
    function y76H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NouveauordinairereceptionComponent", function () {
        return NouveauordinairereceptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nouveauordinairereception_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nouveauordinairereception.component.html */
      "xduE");
      /* harmony import */


      var _nouveauordinairereception_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nouveauordinairereception.component.css */
      "pg+d");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/auth/token-storage.service */
      "dZLz");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NouveauordinairereceptionComponent = /*#__PURE__*/function () {
        function NouveauordinairereceptionComponent(formBuilder, messageService, httpClient, router, tokenStorage) {
          _classCallCheck(this, NouveauordinairereceptionComponent);

          this.formBuilder = formBuilder;
          this.messageService = messageService;
          this.httpClient = httpClient;
          this.router = router;
          this.tokenStorage = tokenStorage;
          this.typeactivites = [];
          this.msgs = [];
          this.typearticle = 'ORDINAIRE - N/A';
          this.disabled = true;
          this.receptiondto = {};
          this.dateactuel = new Date();
          this.dommage = false;
          this.commentdommage = "N/A";
          this.envoisms = false;
        }
        /**
         * Funciton ngOnInit
         */


        _createClass(NouveauordinairereceptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this54 = this;

            this.ordinaireForm = this.formBuilder.group({
              'typearticle': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'adresse': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'nomsender': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'telexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'namerecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'telrecipient': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'datereception': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'dommage': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'commentaire': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('N/A', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              'envoisms': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysexpediteur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              'paysdestinateur': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES TYPE D ARTICLE
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/type/reception/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this54.typeactivites = [];
              response.forEach(function (element) {
                if (element['name'] == 'ORDINAIRE - N/A') {
                  _this54.typeactivite = {
                    code: element,
                    name: element['name']
                  };
                }

                _this54.typeactivites.push({
                  code: element,
                  name: element['name']
                });
              });
            }, function (error) {
              _this54.showWarn("Le type d'article n'a pas pu etre chargé, vous pouvez continuer cela ne bloquera pas dans l'enregistrement de votre article - ordinaire ");
            });
            /**
             *  -- REQUETE POUR RECUPERER LA LISTE DES PAYS
             */

            this.httpClient.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/pays/all", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function () {
              var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this54.countries = [];
              response.forEach(function (element) {
                _this54.countries.push({
                  name: element['name'],
                  code: element['code']
                });
              });
            }, function (error) {
              _this54.showWarn("La liste des pays n'a pas pu etre chargé ");
            });
          }
        }, {
          key: "save",
          value: function save(ordinaireForm) {
            var _this55 = this;

            console.log(ordinaireForm);
            var format = 'yyyy-MM-dd';
            var format_date = 'dd';
            var locale = 'en-US';
            this.receptiondto.reference = ordinaireForm['reference'];
            this.receptiondto.name = 'ordinaire - EXPRESS MAIL SERVICE';
            this.receptiondto.type = ordinaireForm['typearticle'];
            this.receptiondto.adresse = ordinaireForm['adresse'];
            this.receptiondto.nomsender = ordinaireForm['nomsender'];
            this.receptiondto.telexpediteur = ordinaireForm['telexpediteur'];
            this.receptiondto.namerecipient = ordinaireForm['namerecipient'];
            this.receptiondto.telrecipient = ordinaireForm['telrecipient'];
            this.receptiondto.email = ordinaireForm['email'];
            this.receptiondto.datereception = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(ordinaireForm['datereception'], format, locale);
            this.receptiondto.typearticle = this.typeactivite.code;
            this.receptiondto.dommage = this.dommage;
            this.receptiondto.commentaire = ordinaireForm['commentaire'];
            this.receptiondto.envoisms = this.envoisms;
            this.receptiondto.paysrecipient = this.selectedCountrydestinateur['code'];
            this.receptiondto.paysexpediteur = this.selectedCountryexpediteur['code'];
            this.httpClient.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].url + "/api/postal/reception/save", this.receptiondto, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.tokenStorage.getToken()
              })
            }).subscribe(function (response) {
              _this55.showSuccess("Vous avez enregistrer avec success votre ordinaire  !!! ");
            }, function (error) {
              _this55.showError(" une erreur c'est produit et le système n'a pas enregitré votre ordinaire - La raison est voici : " + error.message);
            });
          }
          /**
           *
           * @param $event
           */

        }, {
          key: "dommageSelect",
          value: function dommageSelect($event) {
            console.log($event);

            if ($event.checked) {
              this.commentdommage = undefined;
            } else {
              this.commentdommage = 'N/A';
              this.ordinaireForm.patchValue({
                commentaire: this.commentdommage
              });
            }
          }
          /**
           *  costumisation des erreurs
           */

        }, {
          key: "showSuccess",
          value: function showSuccess(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Message de success :',
              detail: '' + message
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Message Info :',
              detail: '' + message
            });
          }
        }, {
          key: "showWarn",
          value: function showWarn(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Message d\'avertissement :',
              detail: '' + message
            });
          }
        }, {
          key: "showError",
          value: function showError(message) {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Message d\'erreur ',
              detail: '' + message
            });
          }
        }]);

        return NouveauordinairereceptionComponent;
      }();

      NouveauordinairereceptionComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"]
        }];
      };

      NouveauordinairereceptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nouveauordinairereception',
        template: _raw_loader_nouveauordinairereception_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
        styles: [_nouveauordinairereception_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NouveauordinairereceptionComponent);
      /***/
    },

    /***/
    "yd5u":
    /*!******************************************************!*\
      !*** ./src/app/demo/view/dashboarddemo.component.ts ***!
      \******************************************************/

    /*! exports provided: DashboardDemoComponent */

    /***/
    function yd5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardDemoComponent", function () {
        return DashboardDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "66gQ");
      /* harmony import */


      var _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabledemo.scss */
      "MBEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_eventservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/eventservice */
      "fgiE");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fullcalendar/daygrid */
      "PN1e");
      /* harmony import */


      var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fullcalendar/timegrid */
      "PjKf");
      /* harmony import */


      var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fullcalendar/interaction */
      "ogxq");
      /* harmony import */


      var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");

      var DashboardDemoComponent = /*#__PURE__*/function () {
        function DashboardDemoComponent(productService, eventService) {
          _classCallCheck(this, DashboardDemoComponent);

          this.productService = productService;
          this.eventService = eventService;
        }

        _createClass(DashboardDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this56 = this;

            this.productService.getProducts().then(function (data) {
              return _this56.products = data;
            });
            this.eventService.getEvents().then(function (events) {
              _this56.events = events;
            });
            this.cities = [];
            this.cities.push({
              label: 'New York',
              value: {
                id: 1,
                name: 'New York',
                code: 'NY'
              }
            });
            this.cities.push({
              label: 'Rome',
              value: {
                id: 2,
                name: 'Rome',
                code: 'RM'
              }
            });
            this.cities.push({
              label: 'London',
              value: {
                id: 3,
                name: 'London',
                code: 'LDN'
              }
            });
            this.cities.push({
              label: 'Istanbul',
              value: {
                id: 4,
                name: 'Istanbul',
                code: 'IST'
              }
            });
            this.cities.push({
              label: 'Paris',
              value: {
                id: 5,
                name: 'Paris',
                code: 'PRS'
              }
            });
            this.chartData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#FFC107'
              }, {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#03A9F4'
              }]
            };
            this.fullcalendarOptions = {
              plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default.a],
              defaultDate: '2017-02-12',
              header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              editable: true
            };
          }
        }]);

        return DashboardDemoComponent;
      }();

      DashboardDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
        }, {
          type: _service_eventservice__WEBPACK_IMPORTED_MODULE_4__["EventService"]
        }];
      };

      DashboardDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .fc-header-toolbar {\n                display: flex;\n                flex-wrap: wrap;\n            }\n        }\n    ", _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardDemoComponent);
      /***/
    },

    /***/
    "zOYX":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/stocks/suivi/suivi.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zOYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>suivi works!</p>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map