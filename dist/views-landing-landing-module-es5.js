(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-landing-landing-module"], {
    /***/
    "./node_modules/ng-mat-carousel/__ivy_ngcc__/fesm2015/ng-mat-carousel.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ng-mat-carousel/__ivy_ngcc__/fesm2015/ng-mat-carousel.js ***!
      \*******************************************************************************/

    /*! exports provided: MatCarouselComponent, MatCarouselHammerConfig, MatCarouselModule, MatCarouselSlideComponent */

    /***/
    function node_modulesNgMatCarousel__ivy_ngcc__Fesm2015NgMatCarouselJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCarouselComponent", function () {
        return MatCarouselComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCarouselHammerConfig", function () {
        return MatCarouselHammerConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCarouselModule", function () {
        return MatCarouselModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCarouselSlideComponent", function () {
        return MatCarouselSlideComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/fesm2015/animations.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/fesm2015/icon.js");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/carousel-slide/carousel-slide.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function MatCarouselSlideComponent_ng_template_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r1.overlayColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r1.ariaLabel);
        }
      }

      function MatCarouselSlideComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatCarouselSlideComponent_ng_template_0_div_3_Template, 1, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-image", ctx_r0.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.hideOverlay);
        }
      }

      var _c0 = ["*"];
      var _c1 = ["carouselContainer"];
      var _c2 = ["carouselList"];

      function MatCarouselComponent_li_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 11);
        }

        if (rf & 2) {
          var slide_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", slide_r6.templateRef);
        }
      }

      function MatCarouselComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("panleft", function MatCarouselComponent_li_4_Template_li_panleft_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.onPan($event, _r7);
          })("panright", function MatCarouselComponent_li_4_Template_li_panright_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.onPan($event, _r7);
          })("panend", function MatCarouselComponent_li_4_Template_li_panend_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.onPanEnd($event, _r7);
          })("pancancel", function MatCarouselComponent_li_4_Template_li_pancancel_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.onPanEnd($event, _r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatCarouselComponent_li_4_ng_container_2_Template, 1, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("padding-bottom", ctx_r2.maintainAspectRatio && ctx_r2.proportion ? ctx_r2.proportion + "%" : "0px")("height", !ctx_r2.maintainAspectRatio && ctx_r2.slideHeight ? ctx_r2.slideHeight : "0px");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", slide_r6.load);
        }
      }

      function MatCarouselComponent_button_5_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", ctx_r15.svgIconOverrides.arrowBack);
        }
      }

      function MatCarouselComponent_button_5_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MatCarouselComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatCarouselComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.previous();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatCarouselComponent_button_5_mat_icon_1_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatCarouselComponent_button_5_ng_template_2_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r3.color)("disabled", !ctx_r3.loop && ctx_r3.currentIndex == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.svgIconOverrides == null ? null : ctx_r3.svgIconOverrides.arrowBack)("ngIfElse", _r16);
        }
      }

      function MatCarouselComponent_button_6_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", ctx_r20.svgIconOverrides.arrowForward);
        }
      }

      function MatCarouselComponent_button_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function MatCarouselComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatCarouselComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r23.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatCarouselComponent_button_6_mat_icon_1_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatCarouselComponent_button_6_ng_template_2_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r4.color)("disabled", !ctx_r4.loop && ctx_r4.currentIndex == ctx_r4.slidesList.length - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.svgIconOverrides == null ? null : ctx_r4.svgIconOverrides.arrowForward)("ngIfElse", _r21);
        }
      }

      function MatCarouselComponent_div_7_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatCarouselComponent_div_7_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var i_r27 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r28.slideTo(i_r27);
          })("focus", function MatCarouselComponent_div_7_button_1_Template_button_focus_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            return _r0.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r27 = ctx.index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r25.color)("disabled", i_r27 == ctx_r25.currentIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Slide #" + i_r27);
        }
      }

      function MatCarouselComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatCarouselComponent_div_7_button_1_Template, 1, 3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("flex-direction", ctx_r5.orientation === "rtl" ? "row-reverse" : "row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.slidesList);
        }
      }

      var MatCarouselSlideComponent = /*#__PURE__*/function () {
        /**
         * @param {?} sanitizer
         */
        function MatCarouselSlideComponent(sanitizer) {
          _classCallCheck(this, MatCarouselSlideComponent);

          this.sanitizer = sanitizer;
          this.overlayColor = '#00000040';
          this.hideOverlay = false;
          this.ariaLabel = '';
          this.disabled = false; // implements ListKeyManagerOption
          // implements ListKeyManagerOption

          this.load = false;
        }
        /**
         * @return {?}
         */


        _createClass(MatCarouselSlideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.image) {
              this.image = this.sanitizer.bypassSecurityTrustStyle("url(\"".concat(this.image, "\")"));
            }
          }
        }]);

        return MatCarouselSlideComponent;
      }();

      MatCarouselSlideComponent.ɵfac = function MatCarouselSlideComponent_Factory(t) {
        return new (t || MatCarouselSlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]));
      };

      MatCarouselSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatCarouselSlideComponent,
        selectors: [["mat-carousel-slide"]],
        viewQuery: function MatCarouselSlideComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        inputs: {
          overlayColor: "overlayColor",
          hideOverlay: "hideOverlay",
          ariaLabel: "ariaLabel",
          disabled: "disabled",
          load: "load",
          image: "image"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        consts: [[1, "carousel-slide"], [1, "carousel-slide-content"], ["class", "carousel-slide-overlay", 3, "background-color", 4, "ngIf"], [1, "carousel-slide-overlay"]],
        template: function MatCarouselSlideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatCarouselSlideComponent_ng_template_0_Template, 4, 3, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: [".carousel-slide[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover}.carousel-slide[_ngcontent-%COMP%], .carousel-slide-overlay[_ngcontent-%COMP%]{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content[_ngcontent-%COMP%]{height:100%;position:absolute;width:100%;z-index:1}"]
      });
      /** @nocollapse */

      MatCarouselSlideComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }];
      };

      MatCarouselSlideComponent.propDecorators = {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        overlayColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideOverlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        load: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatCarouselSlideComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-carousel-slide',
            template: "<ng-template>\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\n    <div\n      *ngIf=\"!hideOverlay\"\n      class=\"carousel-slide-overlay\"\n      [attr.aria-label] = \"ariaLabel\"\n      [style.background-color]=\"overlayColor\"\n    ></div>\n  </div>\n</ng-template>\n",
            styles: [".carousel-slide{background-position:50%;background-repeat:no-repeat;background-size:cover}.carousel-slide,.carousel-slide-overlay{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content{height:100%;position:absolute;width:100%;z-index:1}"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }];
        }, {
          overlayColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hideOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/carousel.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @enum {number} */


      var Direction = {
        left: 0,
        right: 1,
        index: 2
      };
      Direction[Direction.left] = 'left';
      Direction[Direction.right] = 'right';
      Direction[Direction.index] = 'index';

      var MatCarouselComponent = /*#__PURE__*/function () {
        /**
         * @param {?} animationBuilder
         * @param {?} renderer
         * @param {?} platformId
         */
        function MatCarouselComponent(animationBuilder, renderer, platformId) {
          _classCallCheck(this, MatCarouselComponent);

          this.animationBuilder = animationBuilder;
          this.renderer = renderer;
          this.platformId = platformId;
          this.timings = '250ms ease-in';
          this.lazyLoad = false;
          this.hideArrows = true;
          this.hideIndicators = true;
          this.ariaLabel = 'Sliding carousel';
          this.color = 'accent';
          this.maintainAspectRatio = true;
          this.proportion = 25;
          this.slideHeight = '100%';
          this.useKeyboard = false;
          this.useMouseWheel = false;
          this.changeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this._autoplay = true;
          this.autoplay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](5000);
          this.slides$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this._maxWidth = 'auto';
          this.maxWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this._loop = true;
          this.loop$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this._orientation = 'ltr';
          this.orientation$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.timerStop$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.playing = false;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        _createClass(MatCarouselComponent, [{
          key: "onKeyUp",

          /**
           * @param {?} event
           * @return {?}
           */
          value: function onKeyUp(event) {
            if (this.useKeyboard && !this.playing) {
              this.listKeyManager.onKeydown(event);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.stopTimer();
          }
          /**
           * @return {?}
           */

        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.startTimer(this._autoplay);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseWheel",
          value: function onMouseWheel(event) {
            if (this.useMouseWheel) {
              event.preventDefault(); // prevent window to scroll
              // prevent window to scroll

              /** @type {?} */

              var deltaY = Math.sign(event.deltaY);

              if (deltaY > 0) {
                this.next();
              } else if (deltaY < 0) {
                this.previous();
              }
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onResize",
          value: function onResize(event) {
            // Reset carousel when width is resized
            // in order to avoid major glitches.

            /** @type {?} */
            var w = this.getWidth();

            if (w !== this.width) {
              this.width = w;
              this.slideTo(0);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            if (!this.lazyLoad) {
              this.slidesList.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.load = true;
              });
            } else {
              this.slidesList.first.load = true;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this.slidesList.find(
                /**
                * @param {?} s
                * @param {?} i
                * @return {?}
                */
                function (s, i) {
                  return i === 1 % _this.slidesList.length;
                }).load = true;
                _this.slidesList.find(
                /**
                * @param {?} s
                * @param {?} i
                * @return {?}
                */
                function (s, i) {
                  return i === (_this.slidesList.length - 1) % _this.slidesList.length;
                }).load = true;
              }, this.interval$.getValue() / 2);
            }

            this.listKeyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["ListKeyManager"](this.slidesList).withVerticalOrientation(false).withHorizontalOrientation(this._orientation).withWrap(this._loop);
            this.listKeyManager.updateActiveItem(0);
            this.listKeyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this.playAnimation();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.width = this.getWidth();
            this.autoplay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              _this2.stopTimer();

              _this2.startTimer(value);
            });
            this.interval$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              _this2.stopTimer();

              _this2.resetTimer(value);

              _this2.startTimer(_this2._autoplay);
            });
            this.maxWidth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this2.slideTo(0);
            });
            this.loop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this2.listKeyManager.withWrap(value);
            });
            this.orientation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this2.listKeyManager.withHorizontalOrientation(value);
            });
            this.slides$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return value && value < _this2.slidesList.length;
            })).subscribe(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this2.resetSlides(value);
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
          /**
           * @return {?}
           */

        }, {
          key: "next",
          value: function next() {
            this["goto"](Direction.right);
          }
          /**
           * @return {?}
           */

        }, {
          key: "previous",
          value: function previous() {
            this["goto"](Direction.left);
          }
          /**
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "slideTo",
          value: function slideTo(index) {
            this["goto"](Direction.index, index);
          }
          /**
           * @param {?} event
           * @param {?} slideElem
           * @return {?}
           */

        }, {
          key: "onPan",
          value: function onPan(event, slideElem) {
            // https://github.com/angular/angular/issues/10541#issuecomment-346539242
            // if y velocity is greater, it's a panup/pandown, so ignore.
            if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
              return;
            }
            /** @type {?} */


            var deltaX = event.deltaX;

            if (this.isOutOfBounds()) {
              deltaX *= 0.2; // decelerate movement;
            }

            this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
            this.renderer.setStyle(this.carouselList.nativeElement, 'transform', this.getTranslation(this.getOffset() + deltaX));
          }
          /**
           * @param {?} event
           * @param {?} slideElem
           * @return {?}
           */

        }, {
          key: "onPanEnd",
          value: function onPanEnd(event, slideElem) {
            this.renderer.removeStyle(slideElem, 'cursor');

            if (!this.isOutOfBounds() && Math.abs(event.deltaX) > this.getWidth() * 0.25) {
              if (event.deltaX <= 0) {
                this.next();
                return;
              }

              this.previous();
              return;
            }

            this.playAnimation(); // slide back, don't change current index
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "isOutOfBounds",
          value: function isOutOfBounds() {
            /** @type {?} */
            var sign = this.orientation === 'rtl' ? -1 : 1;
            /** @type {?} */

            var left = sign * (this.carouselList.nativeElement.getBoundingClientRect().left - this.carouselList.nativeElement.offsetParent.getBoundingClientRect().left);
            /** @type {?} */

            var lastIndex = this.slidesList.length - 1;
            /** @type {?} */

            var width = -this.getWidth() * lastIndex;
            return this.listKeyManager.activeItemIndex === 0 && left >= 0 || this.listKeyManager.activeItemIndex === lastIndex && left <= width;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "isVisible",
          value: function isVisible() {
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
              return false;
            }
            /** @type {?} */


            var elem = this.carouselContainer.nativeElement;
            /** @type {?} */

            var docViewTop = window.pageYOffset;
            /** @type {?} */

            var docViewBottom = docViewTop + window.innerHeight;
            /** @type {?} */

            var elemOffset = elem.getBoundingClientRect();
            /** @type {?} */

            var elemTop = docViewTop + elemOffset.top;
            /** @type {?} */

            var elemBottom = elemTop + elemOffset.height;
            return elemBottom <= docViewBottom || elemTop >= docViewTop;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getOffset",
          value: function getOffset() {
            /** @type {?} */
            var offset = this.listKeyManager.activeItemIndex * this.getWidth();
            /** @type {?} */

            var sign = this.orientation === 'rtl' ? 1 : -1;
            return sign * offset;
          }
          /**
           * @private
           * @param {?} offset
           * @return {?}
           */

        }, {
          key: "getTranslation",
          value: function getTranslation(offset) {
            return "translateX(".concat(offset, "px)");
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.carouselContainer.nativeElement.clientWidth;
          }
          /**
           * @private
           * @param {?} direction
           * @param {?=} index
           * @return {?}
           */

        }, {
          key: "goto",
          value: function goto(direction, index) {
            if (!this.playing) {
              /** @type {?} */
              var rtl = this.orientation === 'rtl';

              switch (direction) {
                case Direction.left:
                  return rtl ? this.listKeyManager.setNextItemActive() : this.listKeyManager.setPreviousItemActive();

                case Direction.right:
                  return rtl ? this.listKeyManager.setPreviousItemActive() : this.listKeyManager.setNextItemActive();

                case Direction.index:
                  return this.listKeyManager.setActiveItem(index);
              }
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "playAnimation",
          value: function playAnimation() {
            var _this3 = this;

            /** @type {?} */
            var translation = this.getTranslation(this.getOffset());
            /** @type {?} */

            var factory = this.animationBuilder.build(Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(this.timings, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
              transform: translation
            })));
            /** @type {?} */

            var animation = factory.create(this.carouselList.nativeElement);
            animation.onStart(
            /**
            * @return {?}
            */
            function () {
              _this3.playing = true;
            });
            animation.onDone(
            /**
            * @return {?}
            */
            function () {
              _this3.changeEmitter.emit(_this3.currentIndex);

              _this3.playing = false;

              if (_this3.lazyLoad) {
                _this3.slidesList.find(
                /**
                * @param {?} s
                * @param {?} i
                * @return {?}
                */
                function (s, i) {
                  return i === (_this3.currentIndex + 1) % _this3.slidesList.length;
                }).load = true;
                _this3.slidesList.find(
                /**
                * @param {?} s
                * @param {?} i
                * @return {?}
                */
                function (s, i) {
                  return i === (_this3.currentIndex - 1 + _this3.slidesList.length) % _this3.slidesList.length;
                }).load = true;
                _this3.slidesList.find(
                /**
                * @param {?} s
                * @param {?} i
                * @return {?}
                */
                function (s, i) {
                  return i === _this3.currentIndex;
                }).load = true;
              }

              _this3.renderer.setStyle(_this3.carouselList.nativeElement, 'transform', translation);

              animation.destroy();
            });
            animation.play();
          }
          /**
           * @private
           * @param {?} slides
           * @return {?}
           */

        }, {
          key: "resetSlides",
          value: function resetSlides(slides) {
            this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "resetTimer",
          value: function resetTimer(value) {
            this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(value);
          }
          /**
           * @private
           * @param {?} autoplay
           * @return {?}
           */

        }, {
          key: "startTimer",
          value: function startTimer(autoplay) {
            var _this4 = this;

            if (!autoplay) {
              return;
            }

            this.timer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.timerStop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this4.isVisible();
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this4.listKeyManager.withWrap(true).setNextItemActive();

              _this4.listKeyManager.withWrap(_this4.loop);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "stopTimer",
          value: function stopTimer() {
            this.timerStop$.next();
          }
        }, {
          key: "autoplay",
          set: function set(value) {
            this.autoplay$.next(value);
            this._autoplay = value;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "interval",
          set: function set(value) {
            this.interval$.next(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "loop",
          get: function get() {
            return this._loop;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.loop$.next(value);
            this._loop = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "maxWidth",
          get: function get() {
            return this._maxWidth;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this._maxWidth = value;
            this.maxWidth$.next();
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "slides",
          set: function set(value) {
            this.slides$.next(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            this.orientation$.next(value);
            this._orientation = value;
          }
          /**
           * @return {?}
           */

        }, {
          key: "currentIndex",
          get: function get() {
            if (this.listKeyManager) {
              return this.listKeyManager.activeItemIndex;
            }

            return 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "currentSlide",
          get: function get() {
            if (this.listKeyManager) {
              return this.listKeyManager.activeItem;
            }

            return null;
          }
        }]);

        return MatCarouselComponent;
      }();

      MatCarouselComponent.ɵfac = function MatCarouselComponent_Factory(t) {
        return new (t || MatCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]));
      };

      MatCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatCarouselComponent,
        selectors: [["mat-carousel"]],
        contentQueries: function MatCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatCarouselSlideComponent, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slidesList = _t);
          }
        },
        viewQuery: function MatCarouselComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.carouselContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.carouselList = _t.first);
          }
        },
        hostBindings: function MatCarouselComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function MatCarouselComponent_keyup_HostBindingHandler($event) {
              return ctx.onKeyUp($event);
            })("mouseenter", function MatCarouselComponent_mouseenter_HostBindingHandler() {
              return ctx.onMouseEnter();
            })("mouseleave", function MatCarouselComponent_mouseleave_HostBindingHandler() {
              return ctx.onMouseLeave();
            })("mousewheel", function MatCarouselComponent_mousewheel_HostBindingHandler($event) {
              return ctx.onMouseWheel($event);
            })("resize", function MatCarouselComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          timings: "timings",
          lazyLoad: "lazyLoad",
          hideArrows: "hideArrows",
          hideIndicators: "hideIndicators",
          ariaLabel: "ariaLabel",
          color: "color",
          maintainAspectRatio: "maintainAspectRatio",
          proportion: "proportion",
          slideHeight: "slideHeight",
          useKeyboard: "useKeyboard",
          useMouseWheel: "useMouseWheel",
          autoplay: "autoplay",
          interval: "interval",
          loop: "loop",
          maxWidth: "maxWidth",
          slides: "slides",
          orientation: "orientation",
          svgIconOverrides: "svgIconOverrides"
        },
        outputs: {
          changeEmitter: "changeEmitter"
        },
        decls: 8,
        vars: 13,
        consts: [["tabindex", "0", 1, "carousel"], ["carouselContainer", ""], ["role", "listbox", 1, "carousel-list"], ["carouselList", ""], ["class", "carousel-slide", "role", "option", 3, "padding-bottom", "height", "panleft", "panright", "panend", "pancancel", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", "aria-label", "Previous slide", 3, "color", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", "aria-label", "Next slide", 3, "color", "disabled", "click", 4, "ngIf"], ["class", "carousel-indicators", "tabindex", "-1", 3, "flex-direction", 4, "ngIf"], ["role", "option", 1, "carousel-slide", 3, "panleft", "panright", "panend", "pancancel"], ["carouselSlide", ""], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", "aria-label", "Previous slide", 3, "color", "disabled", "click"], [3, "svgIcon", 4, "ngIf", "ngIfElse"], ["defaultArrowBack", ""], [3, "svgIcon"], ["mat-icon-button", "", "type", "button", "tabindex", "-1", "aria-label", "Next slide", 3, "color", "disabled", "click"], ["defaultArrowForward", ""], ["tabindex", "-1", 1, "carousel-indicators"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus", 4, "ngFor", "ngForOf"], ["type", "button", "tabindex", "-1", "mat-mini-fab", "", 3, "color", "disabled", "click", "focus"]],
        template: function MatCarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatCarouselComponent_li_4_Template, 3, 5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatCarouselComponent_button_5_Template, 4, 4, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatCarouselComponent_button_6_Template, 4, 4, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatCarouselComponent_div_7_Template, 2, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("max-width", ctx.maxWidth)("height", !ctx.maintainAspectRatio ? "100%" : "auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("flex-direction", ctx.orientation === "rtl" ? "row-reverse" : "row")("height", !ctx.maintainAspectRatio ? "100%" : "auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.slidesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideArrows);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideArrows);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideIndicators);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".carousel[_ngcontent-%COMP%]{outline:none;overflow:hidden;position:relative;width:100%}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-of-type{left:30px}.carousel[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:last-of-type{right:30px}.carousel-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.carousel-list[_ngcontent-%COMP%], .carousel-slide[_ngcontent-%COMP%]{display:flex;position:relative;width:100%}.carousel-slide[_ngcontent-%COMP%]{flex-shrink:0;height:0}.carousel-slide[_ngcontent-%COMP%]:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators[_ngcontent-%COMP%]{bottom:15px;display:flex;left:50%;outline:none;position:absolute;transform:translateX(-50%);z-index:1}.carousel-indicators[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{height:10px;margin:7.5px;width:10px}"]
      });
      /** @nocollapse */

      MatCarouselComponent.ctorParameters = function () {
        return [{
          type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }];
      };

      MatCarouselComponent.propDecorators = {
        timings: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        lazyLoad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        svgIconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        interval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        loop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideArrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maxWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maintainAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        proportion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        slideHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        useKeyboard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        useMouseWheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        changeEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        slidesList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatCarouselSlideComponent]
        }],
        carouselContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['carouselContainer']
        }],
        carouselList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['carouselList']
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['keyup', ['$event']]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseenter']
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseleave']
        }],
        onMouseWheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mousewheel', ['$event']]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatCarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-carousel',
            template: "<div\n  #carouselContainer\n  class=\"carousel\"\n  tabindex=\"0\"\n  [style.max-width]=\"maxWidth\"\n  [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n>\n  <ul\n    #carouselList\n    class=\"carousel-list\"\n    role=\"listbox\"\n    [attr.aria-label]=\"ariaLabel\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n    [style.height]=\"!maintainAspectRatio ? '100%' : 'auto'\"\n  >\n    <li\n      #carouselSlide\n      *ngFor=\"let slide of slidesList\"\n      class=\"carousel-slide\"\n      role=\"option\"\n      [style.padding-bottom]=\"maintainAspectRatio && proportion ? proportion + '%': '0px'\"\n      [style.height]=\"!maintainAspectRatio && slideHeight ? slideHeight : '0px'\"\n      (panleft)=\"onPan($event, carouselSlide)\"\n      (panright)=\"onPan($event, carouselSlide)\"\n      (panend)=\"onPanEnd($event, carouselSlide)\"\n      (pancancel)=\"onPanEnd($event, carouselSlide)\"\n    >\n      <ng-container *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.templateRef\"></ng-container>\n    </li>\n  </ul>\n\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    aria-label=\"Previous slide\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == 0\"\n    (click)=\"previous()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowBack; else: defaultArrowBack\"\n      [svgIcon]=\"svgIconOverrides.arrowBack\"\n    ></mat-icon>\n    <ng-template #defaultArrowBack>\n      <mat-icon>arrow_back</mat-icon>\n    </ng-template>\n  </button>\n  <button\n    *ngIf=\"!hideArrows\"\n    mat-icon-button\n    type=\"button\"\n    tabindex=\"-1\"\n    aria-label=\"Next slide\"\n    [color]=\"color\"\n    [disabled]=\"!loop && currentIndex == slidesList.length - 1\"\n    (click)=\"next()\"\n  >\n    <mat-icon\n      *ngIf=\"svgIconOverrides?.arrowForward; else: defaultArrowForward\"\n      [svgIcon]=\"svgIconOverrides.arrowForward\"\n    ></mat-icon>\n    <ng-template #defaultArrowForward>\n      <mat-icon>arrow_forward</mat-icon>\n    </ng-template>\n  </button>\n\n  <div\n    *ngIf=\"!hideIndicators\"\n    class=\"carousel-indicators\"\n    tabindex=\"-1\"\n    [style.flex-direction]=\"orientation === 'rtl' ? 'row-reverse' : 'row'\"\n  >\n    <button\n      *ngFor=\"let slide of slidesList; let i = index\"\n      type=\"button\"\n      tabindex=\"-1\"\n      mat-mini-fab\n      [color]=\"color\"\n      [attr.aria-label]=\"'Slide #' + i\"\n      [disabled]=\"i == currentIndex\"\n      (click)=\"slideTo(i)\"\n      (focus)=\"carouselContainer.focus()\"\n    ></button>\n  </div>\n</div>\n",
            styles: [".carousel{outline:none;overflow:hidden;position:relative;width:100%}.carousel>button{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel>button:first-of-type{left:30px}.carousel>button:last-of-type{right:30px}.carousel-list{list-style:none;margin:0;padding:0}.carousel-list,.carousel-slide{display:flex;position:relative;width:100%}.carousel-slide{flex-shrink:0;height:0}.carousel-slide:hover{cursor:-webkit-grab;cursor:grab}.carousel-indicators{bottom:15px;display:flex;left:50%;outline:none;position:absolute;transform:translateX(-50%);z-index:1}.carousel-indicators>button{height:10px;margin:7.5px;width:10px}"]
          }]
        }], function () {
          return [{
            type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }]
          }];
        }, {
          timings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          lazyLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hideArrows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hideIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          proportion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          slideHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          useKeyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          useMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          changeEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['keyup', ['$event']]
          }],
          onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseenter']
          }],
          onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseleave']
          }],
          onMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mousewheel', ['$event']]
          }],
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['window:resize', ['$event']]
          }],
          svgIconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          slidesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatCarouselSlideComponent]
          }],
          carouselContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['carouselContainer']
          }],
          carouselList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['carouselList']
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/carousel.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var MatCarouselHammerConfig = /*#__PURE__*/function (_angular_platform_bro) {
        _inherits(MatCarouselHammerConfig, _angular_platform_bro);

        var _super = _createSuper(MatCarouselHammerConfig);

        function MatCarouselHammerConfig() {
          var _this5;

          _classCallCheck(this, MatCarouselHammerConfig);

          _this5 = _super.apply(this, arguments);
          _this5.overrides = {
            pinch: {
              enable: false
            },
            rotate: {
              enable: false
            }
          };
          return _this5;
        }

        return MatCarouselHammerConfig;
      }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"]);

      MatCarouselHammerConfig.ɵfac = function MatCarouselHammerConfig_Factory(t) {
        return ɵMatCarouselHammerConfig_BaseFactory(t || MatCarouselHammerConfig);
      };

      MatCarouselHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: MatCarouselHammerConfig,
        factory: MatCarouselHammerConfig.ɵfac
      });

      var ɵMatCarouselHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatCarouselHammerConfig);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatCarouselHammerConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
        }], null, null);
      })();

      if (false) {}

      var MatCarouselModule = /*#__PURE__*/function () {
        function MatCarouselModule() {
          _classCallCheck(this, MatCarouselModule);
        }

        _createClass(MatCarouselModule, null, [{
          key: "forRoot",

          /**
           * @return {?}
           */
          value: function forRoot() {
            return {
              ngModule: MatCarouselModule,
              providers: [{
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"],
                useClass: MatCarouselHammerConfig
              }]
            };
          }
        }]);

        return MatCarouselModule;
      }();

      MatCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatCarouselModule
      });
      MatCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatCarouselModule_Factory(t) {
          return new (t || MatCarouselModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatCarouselModule, {
          declarations: function declarations() {
            return [MatCarouselComponent, MatCarouselSlideComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerModule"]];
          },
          exports: function exports() {
            return [MatCarouselComponent, MatCarouselSlideComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatCarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [MatCarouselComponent, MatCarouselSlideComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerModule"]],
            exports: [MatCarouselComponent, MatCarouselSlideComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/carousel.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function MatCarousel() {}

      if (false) {}
      /**
       * @record
       */


      function SvgIconOverrides() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/carousel-slide/carousel-slide.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function MatCarouselSlide() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ng-mat-carousel.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng-mat-carousel.js.map

      /***/

    },

    /***/
    "./src/app/views/landing/landing-footer/landing-footer.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/views/landing/landing-footer/landing-footer.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LandingFooterComponent */

    /***/
    function srcAppViewsLandingLandingFooterLandingFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingFooterComponent", function () {
        return LandingFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/esm2015/flex.js");

      var LandingFooterComponent = /*#__PURE__*/function () {
        function LandingFooterComponent() {
          _classCallCheck(this, LandingFooterComponent);
        }

        _createClass(LandingFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingFooterComponent;
      }();

      LandingFooterComponent.ɵfac = function LandingFooterComponent_Factory(t) {
        return new (t || LandingFooterComponent)();
      };

      LandingFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingFooterComponent,
        selectors: [["app-landing-footer"]],
        decls: 19,
        vars: 0,
        consts: [[1, "patient--landing--footer"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "container"], ["fxLayout", "row wrap", 1, "m-0", "p-0"], [1, "m-0", "p-0"], [1, "mr-0"]],
        template: function LandingFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAQs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Provider Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vendor Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "www.homehosp.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]],
        styles: [".patient--landing--footer[_ngcontent-%COMP%] {\n  background-color: #231f20;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.patient--landing--footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1137px;\n}\n\n.patient--landing--footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.63;\n  font-size: 16px;\n  color: #fff;\n  margin-right: 98px;\n}\n\n@media only screen and (max-width: 599px) {\n  .patient--landing--footer[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .patient--landing--footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 5px;\n  }\n  .patient--landing--footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-right: 0;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .patient--landing--footer[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .patient--landing--footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-right: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9sYW5kaW5nLWZvb3Rlci9sYW5kaW5nLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3hCOztBQUpBO0VBS1EsaUJBQWlCO0FBR3pCOztBQVJBO0VBVWdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFFbEM7O0FBSUE7RUFDSTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFEMUI7RUFERTtJQUtZLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBRGhDO0VBTkU7SUFTZ0IsZUFBZTtJQUNmLGVBQWU7RUFBakM7QUFDRjs7QUFLQTtFQUNJO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUYxQjtFQUFFO0lBTWdCLGVBQWU7SUFDZixrQkFBa0I7RUFIcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy1mb290ZXIvbGFuZGluZy1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudC0tbGFuZGluZy0tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMWYyMDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1heC13aWR0aDogMTEzN3B4O1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42MztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5OHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0tZm9vdGVyeyBcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgXHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KXtcclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS1mb290ZXJ7IFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyBcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTUwcHgpe31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KXt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing-footer',
            templateUrl: './landing-footer.component.html',
            styleUrls: ['./landing-footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/views/landing/landing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/views/landing/landing.module.ts ***!
      \*************************************************/

    /*! exports provided: LandingModule */

    /***/
    function srcAppViewsLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
        return LandingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/chips */
      "./node_modules/@angular/material/fesm2015/chips.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/fesm2015/grid-list.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/fesm2015/list.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/fesm2015/radio.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/fesm2015/tabs.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng2-charts */
      "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng2-file-upload */
      "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _landing_routing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./landing.routing */
      "./src/app/views/landing/landing.routing.ts");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/fesm2015/table.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/fesm2015/expansion.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
      /* harmony import */


      var _patient_landing_patient_landing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./patient-landing/patient-landing.component */
      "./src/app/views/landing/patient-landing/patient-landing.component.ts");
      /* harmony import */


      var _landing_footer_landing_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./landing-footer/landing-footer.component */
      "./src/app/views/landing/landing-footer/landing-footer.component.ts");
      /* harmony import */


      var ng_mat_carousel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-mat-carousel */
      "./node_modules/ng-mat-carousel/__ivy_ngcc__/fesm2015/ng-mat-carousel.js");

      var LandingModule = function LandingModule() {
        _classCallCheck(this, LandingModule);
      };

      LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingModule
      });
      LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingModule_Factory(t) {
          return new (t || LandingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], ng_mat_carousel__WEBPACK_IMPORTED_MODULE_27__["MatCarouselModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_landing_routing__WEBPACK_IMPORTED_MODULE_21__["LandingRoutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, {
          declarations: [_patient_landing_patient_landing_component__WEBPACK_IMPORTED_MODULE_25__["PatientLandingComponent"], _landing_footer_landing_footer_component__WEBPACK_IMPORTED_MODULE_26__["LandingFooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], ng_mat_carousel__WEBPACK_IMPORTED_MODULE_27__["MatCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_19__["FileUploadModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], ng_mat_carousel__WEBPACK_IMPORTED_MODULE_27__["MatCarouselModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_landing_routing__WEBPACK_IMPORTED_MODULE_21__["LandingRoutes"])],
            declarations: [_patient_landing_patient_landing_component__WEBPACK_IMPORTED_MODULE_25__["PatientLandingComponent"], _landing_footer_landing_footer_component__WEBPACK_IMPORTED_MODULE_26__["LandingFooterComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/views/landing/landing.routing.ts":
    /*!**************************************************!*\
      !*** ./src/app/views/landing/landing.routing.ts ***!
      \**************************************************/

    /*! exports provided: LandingRoutes */

    /***/
    function srcAppViewsLandingLandingRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingRoutes", function () {
        return LandingRoutes;
      });
      /* harmony import */


      var _patient_landing_patient_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./patient-landing/patient-landing.component */
      "./src/app/views/landing/patient-landing/patient-landing.component.ts");

      var LandingRoutes = [{
        path: '',
        children: [{
          path: 'patient',
          component: _patient_landing_patient_landing_component__WEBPACK_IMPORTED_MODULE_0__["PatientLandingComponent"]
        }]
      }];
      /***/
    },

    /***/
    "./src/app/views/landing/patient-landing/patient-landing.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/views/landing/patient-landing/patient-landing.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PatientLandingComponent */

    /***/
    function srcAppViewsLandingPatientLandingPatientLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientLandingComponent", function () {
        return PatientLandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/esm2015/flex.js");
      /* harmony import */


      var ng_mat_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-mat-carousel */
      "./node_modules/ng-mat-carousel/__ivy_ngcc__/fesm2015/ng-mat-carousel.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _landing_footer_landing_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../landing-footer/landing-footer.component */
      "./src/app/views/landing/landing-footer/landing-footer.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");

      function PatientLandingComponent_mat_carousel_slide_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-carousel-slide", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " call 911. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ask a Doctor Online ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", slide_r3.image)("hideOverlay", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r3.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", slide_r3.para, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", slide_r3.callOpt, " ");
        }
      }

      function PatientLandingComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r5.hdwImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5.hdwName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5.hdwDesc);
        }
      }

      function PatientLandingComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "star");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "star_half");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "star_half");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.throught, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.throughtBy, " ");
        }
      }

      var PatientLandingComponent = /*#__PURE__*/function () {
        function PatientLandingComponent() {
          _classCallCheck(this, PatientLandingComponent);

          this.slides = [{
            'image': 'assets/images/ark/topbanner-1.png',
            text: 'Consult a Doctor Anytime, Anywhere by Video Call',
            para: 'See a doctor or therapist from home, using your phone,  tablet or computer. If you’re having a medical emergency,',
            callOpt: 'call'
          }, {
            'image': 'assets/images/ark/topbanner-2.png',
            text: 'Consult a Doctor Anytime, Anywhere by Phone Calls',
            para: 'See a doctor or therapist from home, using your phone,  tablet or computer. If you’re having a medical emergency,',
            callOpt: 'videocam'
          }];
        }

        _createClass(PatientLandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.howDoesWork = [{
              hdwImg: 'assets/images/ark/enroll.png',
              hdwName: '1. Enroll',
              hdwDesc: 'Creating an account takes only few steps and is done in a minute'
            }, {
              hdwImg: 'assets/images/ark/choose.png',
              hdwName: '2. Choose',
              hdwDesc: 'Search through our network of certified doctors and choose the one thats right for you.'
            }, {
              hdwImg: 'assets/images/ark/visit.png',
              hdwName: '3. Visit',
              hdwDesc: 'Our web based visits use secure, high-quality streaming video. See and speak with a doctor from home.'
            }];
            this.visitorsThrough = [{
              throught: "Dummy is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's lorem dummy",
              throughtBy: "Carly R. Smith"
            }, {
              throught: "Dummy is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's lorem dummy",
              throughtBy: "Herbert K. Daum"
            }, {
              throught: "Dummy is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's lorem dummy",
              throughtBy: "Bradley J. Sherman"
            }];
          }
        }]);

        return PatientLandingComponent;
      }();

      PatientLandingComponent.ɵfac = function PatientLandingComponent_Factory(t) {
        return new (t || PatientLandingComponent)();
      };

      PatientLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PatientLandingComponent,
        selectors: [["app-patient-landing"]],
        decls: 79,
        vars: 7,
        consts: [["fxLayout", "row wrap", 1, "patient--landing--wrapper"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "100", "fxFlex.xl", "100"], [1, "section--one"], ["timings", "200ms ease-in", "maxWidth", "auto", "interval", "3000", 3, "autoplay", "loop", "hideArrows", "hideIndicators"], [3, "image", "hideOverlay", 4, "ngFor", "ngForOf"], [1, "section--two"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container"], ["fxFlex", "", "fxLayout", "row"], ["fxFlex", "100"], [1, "main--heading", "text-center", "mb--100", "mt--100"], ["fxLayout", "row wrap", "fxFlex", "100", 1, "works--box"], ["fxFlex.xs", "100", "fxFlex.sm", "32", "fxFlex.md", "30", "fxFlex.lg", "30", "fxFlex.xl", "31", "class", "work--steps text-center", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 1, "get--started--btn", "mb--100"], [1, "section--three", "mb--100"], ["fxLayout", "row"], [1, "main--heading", "text-center", "mt--100"], [1, "mb--100", "desc"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "space-between center", 1, "visitors--throughts"], ["fxFlex.xs", "100", "fxFlex.sm", "30", "fxFlex.md", "30", "fxFlex.lg", "30", "fxFlex.xl", "31", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "section--four", "mb--100", "red--blue--sec", 2, "background-image", "url('assets/images/ark/banner-middle-section.png')"], [1, "container"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "space-between end"], ["fxFlex.xs", "100", "fxFlex.sm", "46", "fxFlex.md", "46", "fxFlex.lg", "47", "fxFlex.xl", "47"], [1, "showing"], ["fxFlex.xs", "100", "fxFlex.sm", "46", "fxFlex.md", "46", "fxFlex.lg", "45", "fxFlex.xl", "45"], [1, "section--five", "mt--100", "mb--100", "simple--sec"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "space-between center", "fxLayoutAlign.xs", "center center", 1, "img--data"], ["fxFlex.xs", "100", "fxFlex.sm", "40", "fxFlex.md", "55", "fxFlex.lg", "55", "fxFlex.xl", "55"], ["src", "assets/images/ark/simple-userfriendly.png", "alt", "img"], ["fxFlex.xs", "100", "fxFlex.sm", "45", "fxFlex.md", "45", "fxFlex.lg", "45", "fxFlex.xl", "45"], [1, "section--five", "mt--100", "mb--100", "private--sec"], ["fxFlex.xs", "100", "fxFlex.sm", "50", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50"], ["fxFlex.xs", "100", "fxFlex.sm", "41", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50", 1, "order--1"], ["src", "assets/images/ark/private.png", "alt", "img"], [1, "section--five", "mt--100", "mb--100", "location--sec"], ["fxFlex.xs", "100", "fxFlex.sm", "46", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50"], ["src", "assets/images/ark/location.png", "alt", "img"], ["fxFlex.xs", "100", "fxFlex.sm", "45", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50"], [1, "section--five", "mt--100", "mb--100", "social--sec"], ["fxFlex.xs", "100", "fxFlex.sm", "43", "fxFlex.md", "50", "fxFlex.lg", "40", "fxFlex.xl", "40", 1, "order--1"], ["src", "assets/images/ark/social-media-grp.png", "alt", "img"], [3, "image", "hideOverlay"], ["matCarouselSlide", ""], [1, "slider--container"], ["fxLayout", "row", "fxLayoutAlign", "start center", "mat-flat-button", "", "color", "primary", 1, "call--opt--btn"], ["fxFlex.xs", "100", "fxFlex.sm", "32", "fxFlex.md", "30", "fxFlex.lg", "30", "fxFlex.xl", "31", 1, "work--steps", "text-center"], ["alt", "", 3, "src"], ["fxFlex.xs", "100", "fxFlex.sm", "30", "fxFlex.md", "30", "fxFlex.lg", "30", "fxFlex.xl", "31"], [1, "rating"]],
        template: function PatientLandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-carousel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientLandingComponent_mat_carousel_slide_4_Template, 15, 5, "mat-carousel-slide", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " How It Works ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PatientLandingComponent_div_12_Template, 9, 3, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Homehosp makes visits easier ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Doctor consultations have never been more conveninet, Now you can have live, on-demand video visits with a physician of your choice. Doctors, specialists are just a click away.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PatientLandingComponent_div_24_Template, 21, 2, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " We\u2019re showing consumers the future of healthcare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " We're empowering providers to give a better level of care. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Simple and user friendly ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Be seen / Be Treated from Anywhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Private and Secure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " All data is encrypted and none of your information is stored nor recorded. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Location ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Track doctors and vendors within your location ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Private Social media group ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " You can chat - post - share files - comment with the members on the platform ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-landing-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("loop", true)("hideArrows", false)("hideIndicators", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.howDoesWork);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visitorsThrough);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], ng_mat_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _landing_footer_landing_footer_component__WEBPACK_IMPORTED_MODULE_5__["LandingFooterComponent"], ng_mat_carousel__WEBPACK_IMPORTED_MODULE_2__["MatCarouselSlideComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"]],
        styles: [".patient--landing--wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1137px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .main--heading[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 500;\n  color: #231f20;\n  text-transform: uppercase;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .mb--100[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .mt--100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .carousel-list {\n  height: 70vh !important;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .carousel-list li {\n  height: 70vh !important;\n  padding-bottom: 0 !important;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .mat-mini-fab[disabled][disabled] {\n  background-color: #1fa4dd;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .mat-mini-fab.mat-accent {\n  background-color: #333;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .mat-focus-indicator[aria-label=\"Previous slide\"], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .mat-focus-indicator[aria-label=\"Next slide\"] {\n  display: none;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #231f20;\n  margin-bottom: 25px;\n  width: 51%;\n  font-weight: bold;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #231f20;\n  font-size: 18px;\n  margin-bottom: 45px;\n  width: 40%;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   .call--opt--btn[_ngcontent-%COMP%] {\n  width: 225px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   .call--opt--btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  font-size: 25px;\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f5f5f5;\n  margin-bottom: 15px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]     .mat-card {\n  box-shadow: none !important;\n  margin: 0;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  padding: 60px 25px 30px 25px;\n  width: 100%;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]     .mat-card .mat-card-header {\n  justify-content: center;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]     .mat-card .mat-card-header .mat-card-header-text {\n  display: none;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]     .mat-card-content h5 {\n  text-transform: uppercase;\n  font-size: 22px;\n  margin: 60px 0 25px 0;\n  font-weight: bold;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]     .mat-card-content p {\n  margin: 0;\n  font-size: 16px;\n  color: #666;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .get--started--btn[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%] {\n  border-top: 1px solid #f5f5f5;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   p.desc[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 18px;\n  padding: 0 15%;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0 0 10px 0;\n  justify-content: flex-start;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #f7cb03;\n  height: 25px;\n  width: 25px;\n  font-size: 25px;\n  margin-right: 5px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #231f20;\n  line-height: 1.63;\n  margin-bottom: 20px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #231f20;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--four.red--blue--sec[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 400px;\n  padding-bottom: 30px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--four.red--blue--sec[_ngcontent-%COMP%]   .showing[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: solid 2px #fdfeff;\n  padding: 25px 30px;\n  font-size: 31px;\n  font-weight: 500;\n  color: #fff;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .img--data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #231f20;\n  margin-bottom: 30px;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .img--data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #666;\n}\n\n.patient--landing--wrapper[_ngcontent-%COMP%]   .mat-flat-button[_ngcontent-%COMP%] {\n  line-height: 45px;\n  font-size: 16px;\n  padding: 0 20px;\n}\n\n@media only screen and (max-width: 599px) {\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .carousel-list, .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .carousel-list li {\n    height: 33vh !important;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 23px;\n    margin-bottom: 10px;\n    width: 100%;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-bottom: 12px;\n    width: 100%;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .mat-flat-button[_ngcontent-%COMP%] {\n    line-height: 40px;\n    font-size: 14px;\n    padding: 0 15px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   .call--opt--btn[_ngcontent-%COMP%] {\n    width: 195px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .main--heading[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .mb--100[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .mt--100[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   p.desc[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 14px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-bottom: 10px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    height: 19px;\n    width: 19px;\n    font-size: 19px;\n    margin-right: 3px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   .visitors--throughts[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 25px;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 25px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--four.red--blue--sec[_ngcontent-%COMP%] {\n    height: 224px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--four.red--blue--sec[_ngcontent-%COMP%]   .showing[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    font-size: 15px;\n    margin-bottom: 5px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .img--data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 7px;\n    text-align: center;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .img--data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    text-align: center;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    padding: 35px 15px 20px 15px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 35px 0 20px 0;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .order--1[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.simple--sec[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.private--sec[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.location--sec[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.social--sec[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.simple--sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.private--sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.location--sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.social--sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.simple--sec[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.private--sec[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.location--sec[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.social--sec[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.location--sec[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five.social--sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .carousel-list, .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]     .carousel-list li {\n    height: 33vh !important;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n    margin-bottom: 15px;\n    width: 43%;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 35px;\n    width: 45%;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .mat-flat-button[_ngcontent-%COMP%] {\n    line-height: 40px;\n    font-size: 14px;\n    padding: 0 15px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .slider--container[_ngcontent-%COMP%]   .call--opt--btn[_ngcontent-%COMP%] {\n    width: 195px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .main--heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .mb--100[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .mt--100[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--three[_ngcontent-%COMP%]   p.desc[_ngcontent-%COMP%] {\n    padding: 0 5%;\n    font-size: 16px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--four.red--blue--sec[_ngcontent-%COMP%] {\n    height: 224px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--four.red--blue--sec[_ngcontent-%COMP%]   .showing[_ngcontent-%COMP%] {\n    padding: 13px 20px;\n    font-size: 18px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .img--data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n    margin-bottom: 10px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--five[_ngcontent-%COMP%]   .img--data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    padding: 35px 15px 20px 15px;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 35px 0 20px 0;\n  }\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--two[_ngcontent-%COMP%]   .works--box[_ngcontent-%COMP%]   .work--steps[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (orientation: landscape) and (max-width: 850px) {\n  .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   mat-carousel[_ngcontent-%COMP%]     .carousel-list, .patient--landing--wrapper[_ngcontent-%COMP%]   .section--one[_ngcontent-%COMP%]   mat-carousel[_ngcontent-%COMP%]     .carousel-list li {\n    height: 270px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9wYXRpZW50LWxhbmRpbmcvcGF0aWVudC1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCO0FBQXpCOztBQUZBO0VBS1EsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQ2pDOztBQVRBO0VBV1Esb0JBQW9CO0FBRTVCOztBQWJBO0VBY1EsaUJBQWlCO0FBR3pCOztBQWpCQTtFQW1CZ0IsdUJBQXVCO0FBRXZDOztBQXJCQTtFQXFCb0IsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUloRDs7QUExQkE7RUEwQmdCLHlCQUF5QjtBQUl6Qzs7QUE5QkE7RUE2QmdCLHNCQUFzQjtBQUt0Qzs7QUFsQ0E7O0VBaUNnQixhQUFhO0FBTTdCOztBQXZDQTtFQXFDWSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsWUFBWTtBQU14Qjs7QUEvQ0E7RUEyQ2dCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFRM0I7O0FBdERBO0VBZ0RvQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0FBVXJDOztBQTlEQTtFQXVEb0IsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsVUFBVTtBQVc5Qjs7QUFyRUE7RUE2RG9CLFlBQVk7QUFZaEM7O0FBekVBO0VBK0R3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBY3pDOztBQWpGQTtFQTRFWSxhQUFhO0VBQ2IsOEJBQThCO0FBUzFDOztBQXRGQTtFQWdGZ0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFVbkM7O0FBNUZBO0VBcUZ3QiwyQkFBMkI7RUFDM0IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFdBQVc7QUFXbkM7O0FBckdBO0VBNEY0Qix1QkFBdUI7QUFhbkQ7O0FBekdBO0VBOEZnQyxhQUFhO0FBZTdDOztBQTdHQTtFQW9HNEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0FBYTdDOztBQXBIQTtFQTBHNEIsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0FBY3ZDOztBQTFIQTtFQW1IWSxnQkFBZ0I7QUFXNUI7O0FBOUhBO0VBdUhRLDZCQUE2QjtBQVdyQzs7QUFsSUE7RUEwSGdCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFZaEM7O0FBMUlBO0VBbUlnQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFXM0M7O0FBakpBO0VBeUl3QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBWXpDOztBQXpKQTtFQWtKZ0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBV25DOztBQWhLQTtFQXdKZ0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBWTlCOztBQXRLQTtFQWdLWSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isb0JBQW9CO0FBVWhDOztBQTlLQTtFQXNLZ0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBWTNCOztBQXZMQTtFQWtMZ0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFTbkM7O0FBN0xBO0VBdUxnQixlQUFlO0VBQ2YsV0FBVztBQVUzQjs7QUFsTUE7RUE2TFEsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBU3ZCOztBQUxBO0VBQ0k7O0lBRUksdUJBQXVCO0VBUTdCO0VBTkU7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7RUFRakI7RUFORTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztFQVFqQjtFQU5FO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0VBUXJCO0VBTkU7SUFDSSxZQUFZO0VBUWxCO0VBTkU7SUFDSSxlQUFlO0VBUXJCO0VBTkU7SUFDSSxtQkFBbUI7RUFRekI7RUFORTtJQUNJLGdCQUFnQjtFQVF0QjtFQU5FO0lBQ0ksVUFBVztJQUNYLGVBQWU7RUFRckI7RUFORTtJQUNJLGtCQUFrQjtFQVF4QjtFQU5FO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtFQVF6QjtFQU5FO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0VBUXZCO0VBTkU7SUFDSSx1QkFBdUI7RUFRN0I7RUFORTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG9CQUFvQjtFQVExQjtFQU5FO0lBQ0ksYUFBYTtFQVFuQjtFQU5FO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7RUFReEI7RUFORTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBUXhCO0VBTkU7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0VBUXhCO0VBTkU7SUFDSSw0QkFBNEI7RUFRbEM7RUFORTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7RUFRM0I7RUFORTtJQUNJLGVBQWU7RUFRckI7RUFORTtJQUNJLFNBQVM7RUFRZjtFQU5FOzs7O0lBSUksa0JBQWtCO0VBUXhCO0VBTkU7Ozs7SUFJSSxVQUFVO0VBUWhCO0VBTkU7OztJQUdJLDZCQUE2QjtJQUM3QixvQkFBb0I7RUFRMUI7RUFORTs7SUFFSSxnQkFBZ0I7RUFRdEI7RUFORTtJQUNJLFNBQVM7RUFRZjtBQUNGOztBQUpBO0VBQ0k7O0lBRUksdUJBQXVCO0VBTzdCO0VBTEU7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7RUFPaEI7RUFMRTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtFQU9oQjtFQUxFO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0VBT3JCO0VBTEU7SUFDSSxZQUFZO0VBT2xCO0VBTEU7SUFDSSxlQUFlO0VBT3JCO0VBTEU7SUFDSSxtQkFBbUI7RUFPekI7RUFMRTtJQUNJLGdCQUFnQjtFQU90QjtFQUxFO0lBQ0ksYUFBYTtJQUNiLGVBQWU7RUFPckI7RUFMRTtJQUNJLGFBQWE7RUFPbkI7RUFMRTtJQUNJLGtCQUFrQjtJQUNsQixlQUNKO0VBTUY7RUFMRTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7RUFPekI7RUFMRTtJQUNJLGVBQWU7RUFPckI7RUFMRTtJQUNJLDRCQUE0QjtFQU9sQztFQUxFO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtFQU8zQjtFQUxFO0lBQ0ksZUFBZTtFQU9yQjtBQUNGOztBQUxBO0VBQ0s7O0lBRUcsd0JBQXdCO0VBUTlCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL3BhdGllbnQtbGFuZGluZy9wYXRpZW50LWxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudC0tbGFuZGluZy0td3JhcHBlcntcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTM3cHg7XHJcbiAgICB9XHJcbiAgICAubWFpbi0taGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzIzMWYyMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLm1iLS0xMDB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubXQtLTEwMHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLS1vbmV7IFxyXG4gICAgICAgIDo6bmctZGVlcHtcclxuICAgICAgICAgICAgLmNhcm91c2VsLWxpc3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmE0ZGQ7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtZm9jdXMtaW5kaWNhdG9yW2FyaWEtbGFiZWw9XCJQcmV2aW91cyBzbGlkZVwiXSxcclxuICAgICAgICAgICAgLm1hdC1mb2N1cy1pbmRpY2F0b3JbYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIl17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2xpZGVyLS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMzFmMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTElO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMWYyMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbGwtLW9wdC0tYnRue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi0tdHdve1xyXG4gICAgICAgIC53b3Jrcy0tYm94e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAud29yay0tc3RlcHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1jYXJke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2MHB4IDI1cHggMzBweCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jYXJkLWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdC1jYXJkLWhlYWRlci10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjBweCAwIDI1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2V0LS1zdGFydGVkLS1idG57XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tLXRocmVle1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgICYuZGVzY3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXNpdG9ycy0tdGhyb3VnaHRze1xyXG4gICAgICAgICAgICAucmF0aW5ne1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmN2NiMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIzMWYyMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjYzO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNnsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjMxZjIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tLWZvdXJ7XHJcbiAgICAgICAgJi5yZWQtLWJsdWUtLXNlY3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgLnNob3dpbmd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggI2ZkZmVmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWN0aW9uLS1maXZle1xyXG4gICAgICAgIC5pbWctLWRhdGF7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMzFmMjA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICAubWF0LWZsYXQtYnV0dG9ueyBcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tb25lIDo6bmctZGVlcCAuY2Fyb3VzZWwtbGlzdCxcclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1vbmUgOjpuZy1kZWVwIC5jYXJvdXNlbC1saXN0IGxpIHtcclxuICAgICAgICBoZWlnaHQ6IDMzdmggIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tb25lIC5jb250YWluZXIgLnNsaWRlci0tY29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLW9uZSAuY29udGFpbmVyIC5zbGlkZXItLWNvbnRhaW5lciBwIHsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAubWF0LWZsYXQtYnV0dG9uIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLW9uZSAuY29udGFpbmVyIC5zbGlkZXItLWNvbnRhaW5lciAuY2FsbC0tb3B0LS1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxOTVweDtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5tYWluLS1oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5tYi0tMTAwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLm10LS0xMDAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tdGhyZWUgcC5kZXNje1xyXG4gICAgICAgIHBhZGRpbmc6IDAgO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS10aHJlZSAudmlzaXRvcnMtLXRocm91Z2h0c3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tdGhyZWUgLnZpc2l0b3JzLS10aHJvdWdodHMgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyAgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS10aHJlZSAudmlzaXRvcnMtLXRocm91Z2h0cyAucmF0aW5nIGxpIC5tYXQtaWNvbiB7IFxyXG4gICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tdGhyZWUgLnZpc2l0b3JzLS10aHJvdWdodHMgLnJhdGluZ3tcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS10aHJlZSAudmlzaXRvcnMtLXRocm91Z2h0cyBoNiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZvdXIucmVkLS1ibHVlLS1zZWN7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjRweDtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1mb3VyLnJlZC0tYmx1ZS0tc2VjIC5zaG93aW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUgLmltZy0tZGF0YSBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUgLmltZy0tZGF0YSBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS10d28gLndvcmtzLS1ib3ggLndvcmstLXN0ZXBzIC5tYXQtY2FyZCB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDM1cHggMTVweCAyMHB4IDE1cHg7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLXR3byAud29ya3MtLWJveCAud29yay0tc3RlcHMgLm1hdC1jYXJkLWNvbnRlbnQgaDUgeyBcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luOiAzNXB4IDAgMjBweCAwOyBcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS10d28gLndvcmtzLS1ib3ggLndvcmstLXN0ZXBzIC5tYXQtY2FyZC1jb250ZW50IHAgeyBcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUgLm9yZGVyLS0xe1xyXG4gICAgICAgIG9yZGVyOiAtMTtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1maXZlLnNpbXBsZS0tc2VjLFxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUucHJpdmF0ZS0tc2VjLFxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUubG9jYXRpb24tLXNlYyxcclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1maXZlLnNvY2lhbC0tc2Vje1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1maXZlLnNpbXBsZS0tc2VjIGltZyxcclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1maXZlLnByaXZhdGUtLXNlYyBpbWcsXHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tZml2ZS5sb2NhdGlvbi0tc2VjIGltZyxcclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1maXZlLnNvY2lhbC0tc2VjIGltZ3tcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUuc2ltcGxlLS1zZWMsXHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tZml2ZS5wcml2YXRlLS1zZWMsXHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tZml2ZS5sb2NhdGlvbi0tc2Vje1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUuc29jaWFsLS1zZWMgaDEsXHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tZml2ZS5sb2NhdGlvbi0tc2VjIGgxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tZml2ZS5zb2NpYWwtLXNlYyBwe1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpe1xyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLW9uZSA6Om5nLWRlZXAgLmNhcm91c2VsLWxpc3QsXHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tb25lIDo6bmctZGVlcCAuY2Fyb3VzZWwtbGlzdCBsaSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzM3ZoICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLW9uZSAuY29udGFpbmVyIC5zbGlkZXItLWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4OyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MyU7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLW9uZSAuY29udGFpbmVyIC5zbGlkZXItLWNvbnRhaW5lciBwIHsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5tYXQtZmxhdC1idXR0b24ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tb25lIC5jb250YWluZXIgLnNsaWRlci0tY29udGFpbmVyIC5jYWxsLS1vcHQtLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLm1haW4tLWhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLm1iLS0xMDAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAubXQtLTEwMCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS10aHJlZSBwLmRlc2N7XHJcbiAgICAgICAgcGFkZGluZzogMCA1JTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tZm91ci5yZWQtLWJsdWUtLXNlY3tcclxuICAgICAgICBoZWlnaHQ6IDIyNHB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZvdXIucmVkLS1ibHVlLS1zZWMgLnNob3dpbmd7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUgLmltZy0tZGF0YSBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyN3B4OyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLWZpdmUgLmltZy0tZGF0YSBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLXR3byAud29ya3MtLWJveCAud29yay0tc3RlcHMgLm1hdC1jYXJkIHsgXHJcbiAgICAgICAgcGFkZGluZzogMzVweCAxNXB4IDIwcHggMTVweDsgXHJcbiAgICB9XHJcbiAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tdHdvIC53b3Jrcy0tYm94IC53b3JrLS1zdGVwcyAubWF0LWNhcmQtY29udGVudCBoNSB7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW46IDM1cHggMCAyMHB4IDA7IFxyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtLWxhbmRpbmctLXdyYXBwZXIgLnNlY3Rpb24tLXR3byAud29ya3MtLWJveCAud29yay0tc3RlcHMgLm1hdC1jYXJkLWNvbnRlbnQgcCB7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KXtcclxuICAgICAucGF0aWVudC0tbGFuZGluZy0td3JhcHBlciAuc2VjdGlvbi0tb25lIG1hdC1jYXJvdXNlbCA6Om5nLWRlZXAgLmNhcm91c2VsLWxpc3QsIFxyXG4gICAgIC5wYXRpZW50LS1sYW5kaW5nLS13cmFwcGVyIC5zZWN0aW9uLS1vbmUgbWF0LWNhcm91c2VsIDo6bmctZGVlcCAuY2Fyb3VzZWwtbGlzdCBsaSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe31cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTUwcHgpe31cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientLandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-patient-landing',
            templateUrl: './patient-landing.component.html',
            styleUrls: ['./patient-landing.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-landing-landing-module-es5.js.map