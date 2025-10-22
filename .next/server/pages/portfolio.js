(() => {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 7507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7374);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1352);
/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3571);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_projects__WEBPACK_IMPORTED_MODULE_3__, react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__]);
([_library_projects__WEBPACK_IMPORTED_MODULE_3__, react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Portfolio = (props)=>{
    const rows = [];
    const projectsGrid = [];
    for(var i = 0; i < props.projects.length; i += 5){
        rows.push(props.projects.slice(i, 5 + i));
    }
    rows.forEach((row)=>{
        let row_rows = [];
        row_rows.push(row.slice(0, 1));
        row_rows.push(row.slice(1, 5));
        projectsGrid.push(row_rows);
    });
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalURL, setModalURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openSingleModalVideo = (e)=>{
        setModalURL(e.target.getAttribute("data-href"));
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-spacer-100 mil-spacer-dark"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-portfolio-fw mil-appearance",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Gallery, {
                    children: projectsGrid.map((row, row_i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: row_i % 2 == 0 ? "row m-0" : "row m-0 flex-row-reverse",
                            children: row.map((col, col_i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6 p-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row m-0",
                                        children: col.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: col_i == 0 ? "col-lg-12 p-0" : "col-lg-6 p-0",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-portfolio-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mil-cover mil-square mil-scale-down-trigger mil-accent-trigger",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mil-image-frame",
                                                                children: [
                                                                    item.type != "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: item.image,
                                                                        alt: item.title
                                                                    }),
                                                                    item.type == "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                        className: "mil-video-background",
                                                                        "data-value": "1.2",
                                                                        autoPlay: "autoplay",
                                                                        loop: "loop",
                                                                        muted: "true",
                                                                        playsInline: "true",
                                                                        onContextMenu: (e)=>e.preventDefault(),
                                                                        preload: "auto",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                            src: item.image
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                            href: `portfolio/${item.id}`,
                                                            className: "mil-item-description mil-icon-2-trigger mil-accent-trigger",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mil-text-bg mil-mb-5",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                        className: "mil-light",
                                                                        children: item.title
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mil-text-bg",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mil-link mil-accent",
                                                                        children: item.category
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        item.type != "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Item, {
                                                            original: item.image,
                                                            thumbnail: item.image,
                                                            width: item.imageWidth,
                                                            height: item.imageHeight,
                                                            children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    "data-fancybox": "gallery",
                                                                    ref: ref,
                                                                    onClick: open,
                                                                    "data-no-swup": true,
                                                                    className: "mil-zoom-icon mil-hidden-trigger",
                                                                    style: {
                                                                        "cursor": "pointer"
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/icons/zoom.svg",
                                                                        alt: "zoom"
                                                                    })
                                                                })
                                                        }),
                                                        item.type == "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                "data-fancybox": "gallery",
                                                                "data-href": item.image,
                                                                onClick: openSingleModalVideo,
                                                                "data-no-swup": true,
                                                                className: "mil-zoom-icon mil-hidden-trigger",
                                                                style: {
                                                                    "cursor": "pointer"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/img/icons/zoom.svg",
                                                                    alt: "zoom"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, `portfolio-row-${row_i}-col-${col_i}-item-${key}`))
                                    })
                                }, `portfolio-row-${row_i}-col-${col_i}`))
                        }, `portfolio-row-${row_i}`))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal_video__WEBPACK_IMPORTED_MODULE_7___default()), {
                channel: "custom",
                autoplay: true,
                isOpen: isOpen,
                url: modalURL,
                onClose: ()=>setOpen(false)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);
async function getStaticProps() {
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_3__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            projects: allProjects
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1452:
/***/ (() => {



/***/ }),

/***/ 1352:
/***/ (() => {



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

/***/ 9485:
/***/ ((module) => {

"use strict";
module.exports = require("react-modal-video");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,67,374], () => (__webpack_exec__(7507)));
module.exports = __webpack_exports__;

})();