(() => {
var exports = {};
exports.id = 521;
exports.ids = [521,195,51];
exports.modules = {

/***/ 5439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _src_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(745);
/* harmony import */ var _src_components_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);
/* harmony import */ var _components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3987);
/* harmony import */ var _components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6258);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7741);
/* harmony import */ var _components_sections_Awards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4619);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2287);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_2__, react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_10__]);
([_lib_posts__WEBPACK_IMPORTED_MODULE_2__, react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const About = (props)=>{
    const Content = {
        "about": {
            "subtitle": "Our story",
            "title": "Writing content like you've never had before",
            "text_1": "Gutem temporibus quae facilis totam, dolorem laborum optio laudantium explicabo quia ea. Officia beatae excepturi adipisci? Nobis consequatur ullam officiis adipisci assumenda, voluptas optio, commodi, soluta itaque error consectetur cupiditate vero voluptatem architecto blanditiis quidem amet. Quod ipsam consequuntur distinctio velit sed ipsum quisquam, itaque placeat error non animi.",
            "text_2": "Exercitationem voluptatibus accusamus amet ratione atque, dolor vel necessitatibus illo ipsa officia, sunt quia magni saepe velit ipsum sapiente blanditiis minima. Voluptatem odit ullam veritatis corrupti officia non aperiam eius vero amet, sed porro blanditiis, harum, quo fugit cupiditate. Maxime quaerat ratione. Nobis consequatur ullam officiis adipisci assumenda, voluptas optio, commodi. Consectetur cupiditate vero."
        },
        "gallery": [
            {
                "url": "img/content/12.jpg",
                "width": 1000,
                "height": 1573
            },
            {
                "url": "img/content/13.jpg",
                "width": 1000,
                "height": 1065
            },
            {
                "url": "img/content/14.jpg",
                "width": 1000,
                "height": 1499
            },
            {
                "url": "img/content/15.jpg",
                "width": 1000,
                "height": 792
            }
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PageBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageImage: "img/content/4.jpg",
                pageTitle: "About"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-content-frame mil-appearance mil-p-120-90",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-lg-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mil-link mil-softened-60 mil-appearance mil-mb-30",
                                    children: Content.about.subtitle
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-appearance mil-mb-30",
                                    children: Content.about.title
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mil-first-letter mil-appearance mil-mb-30",
                                            children: Content.about.text_1
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mil-appearance mil-mb-30",
                                            children: Content.about.text_2
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-content-frame mil-gallery-1 mil-p-0-90",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-between align-items-center mil-appearance",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_10__.Gallery, {
                        children: Content.gallery.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-6 col-xl-3 mil-mb-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_10__.Item, {
                                    original: item.url,
                                    thumbnail: item.url,
                                    width: item.width,
                                    height: item.height,
                                    children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            "data-fancybox": "gallery",
                                            "data-no-swup": true,
                                            ref: ref,
                                            onClick: open,
                                            className: `mil-just-image${key % 2 == 0 ? " mil-image-vert" : " mil-image-square"} mil-icon-3-trigger`,
                                            style: {
                                                "cursor": "pointer"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.url,
                                                alt: "img",
                                                className: "mil-scale-img",
                                                "data-value-1": "1",
                                                "data-value-2": "1.2"
                                            })
                                        })
                                })
                            }, `gallery-iten-${key}`))
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Awards__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                posts: props.posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
async function getStaticProps() {
    const allPosts = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            posts: allPosts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1452:
/***/ (() => {



/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 3183:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3571:
/***/ ((module) => {

"use strict";
module.exports = import("react-photoswipe-gallery");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,67,163,289,987,741,258,287,619], () => (__webpack_exec__(5439)));
module.exports = __webpack_exports__;

})();