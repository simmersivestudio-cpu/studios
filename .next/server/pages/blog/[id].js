(() => {
var exports = {};
exports.id = 610;
exports.ids = [610,195,51];
exports.modules = {

/***/ 3738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RelatedPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/related-posts.json
const related_posts_namespaceObject = JSON.parse('{"Oc":"Related posts","TN":"You May Also Like","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur.","LI":{"P":"View all","p":"/blog"},"jX":3}');
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/RelatedPosts.jsx




const RelatedPostsSection = (Content)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-gray-bg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mil-p-120-90",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row justify-content-between mil-mb-120",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-link mil-appearance mil-accent mil-mb-30",
                                    children: related_posts_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    dangerouslySetInnerHTML: {
                                        __html: related_posts_namespaceObject.TN
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: related_posts_namespaceObject.WL
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: related_posts_namespaceObject.LI.p,
                                        className: "mil-link-hover",
                                        children: related_posts_namespaceObject.LI.P
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: Content.items.slice(0, related_posts_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/blog/${item.id}`,
                                className: "mil-card-1 mil-icon-2-trigger mil-accent-trigger mil-appearance mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-cover mil-square",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-image-frame",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: item.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-overlay mil-inside mil-gradient-overlay",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-description",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-post-info mil-mb-30",
                                                    children: [
                                                        item.category.map((cat, cat_i)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "mil-accent mil-link",
                                                                children: cat
                                                            }, `related-post-${key}-category-${cat_i}`)),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-dot-divider mil-link mil-accent",
                                                            children: "•"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-link mil-softened-30",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(date/* default */.Z, {
                                                                dateString: item.date
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "mil-light",
                                                    children: item.title
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }, `related-post-${key}`))
                })
            ]
        })
    });
};
/* harmony default export */ const RelatedPosts = (RelatedPostsSection);


/***/ }),

/***/ 8853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3571);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3265);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);
/* harmony import */ var _components_sections_RelatedPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3738);
/* harmony import */ var _components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_3__, _library_posts__WEBPACK_IMPORTED_MODULE_4__]);
([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_3__, _library_posts__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PostsDetail = (props)=>{
    const postData = props.data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                pageImage: postData.image,
                pageTitle: postData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-mb-120",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_3__.Gallery, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "mil-text-center single-post-title mil-appearance mil-mb-60",
                                        children: postData.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-post-info mil-appearance mil-center mil-mb-30",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mil-author",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: postData.author.avatar,
                                                        alt: postData.author.name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-dark mil-link",
                                                        children: postData.author.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-dot-divider mil-link mil-accent",
                                                children: "•"
                                            }),
                                            postData.category.map((cat, cat_i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "mil-accent mil-link",
                                                    children: cat
                                                }, `category-${cat_i}`)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-dot-divider mil-link mil-accent",
                                                children: "•"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-link mil-softened-30",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    dateString: postData.date
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_3__.Item, {
                                        original: postData.image,
                                        thumbnail: postData.image,
                                        width: postData.imageWidth,
                                        height: postData.imageHeight,
                                        children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-fancybox": "gallery",
                                                ref: ref,
                                                onClick: open,
                                                "data-no-swup": true,
                                                className: "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-mb-120",
                                                style: {
                                                    "cursor": "pointer"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: postData.image,
                                                    alt: postData.title,
                                                    className: "mil-scale-img",
                                                    "data-value-1": "1",
                                                    "data-value-2": "1.1"
                                                })
                                            })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-10 col-xl-6 single-post-text",
                                dangerouslySetInnerHTML: {
                                    __html: postData.contentHtml
                                }
                            }),
                            typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row justify-content-center mil-p-120-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-12 col-xl-9",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: postData.gallery.cols == 3 ? "col-lg-4" : "col-lg-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_3__.Item, {
                                                        original: item.image,
                                                        thumbnail: item.image,
                                                        width: item.width,
                                                        height: item.height,
                                                        children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                "data-fancybox": "gallery",
                                                                "data-no-swup": true,
                                                                ref: ref,
                                                                onClick: open,
                                                                className: postData.gallery.style == "vertical" ? "mil-appearance mil-just-image mil-image-vert mil-icon-3-trigger mil-accent-trigger mil-mb-30" : "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30",
                                                                style: {
                                                                    "cursor": "pointer"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: item.image,
                                                                    alt: item.alt,
                                                                    className: "mil-scale-img",
                                                                    "data-value-1": "1",
                                                                    "data-value-2": "1.1"
                                                                })
                                                            })
                                                    })
                                                }, `gallery-item-${key}`))
                                        })
                                    })
                                })
                            }),
                            typeof postData.youtube != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: postData.youtube.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row justify-content-center mil-p-120-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-12 col-xl-9",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            className: "mil-youtube-video mil-appearance",
                                            src: `https://www.youtube.com/embed/${postData.youtube.id}?controls=0`,
                                            title: "YouTube video player",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                            allowFullScreen: true
                                        })
                                    })
                                })
                            }),
                            typeof postData.additional != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: postData.additional.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row justify-content-center single-post-text mil-p-90-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-10 col-xl-6",
                                        dangerouslySetInnerHTML: {
                                            __html: postData.additional.content
                                        }
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_RelatedPosts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                items: props.related
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                bgColorClass: "mil-gray-bg"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsDetail);
async function getStaticPaths() {
    const paths = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getAllPostsIds */ .KG)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getPostData */ .AU)(params.id);
    const relatedPosts = await (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getRelatedPosts */ .EE)(params.id);
    return {
        props: {
            data: postData,
            related: relatedPosts
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,67,163,289,987], () => (__webpack_exec__(8853)));
module.exports = __webpack_exports__;

})();