"use strict";
(() => {
var exports = {};
exports.id = 778;
exports.ids = [778,195,51];
exports.modules = {

/***/ 6493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutFour)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about-4.json
const about_4_namespaceObject = JSON.parse('{"Oc":"Our story.","TN":"A professional writer <br />makes a big difference.","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur! Sequi debitis vero, molestiae tempore eligendi quam sit repudiandae deleniti alias quority accusamus.","ev":[{"icon":"img/icons/5.svg","label":"Customer Experiences","value":"Icon description"},{"icon":"img/icons/6.svg","label":"Engineering and Design","value":"Icon description"}],"wp":"img/content/20.jpg","Lx":"img/content/6.jpg"}');
;// CONCATENATED MODULE: ./src/components/sections/AboutFour.jsx


const AboutFourSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mil-p-120-0",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row flex-sm-row-reverse justify-content-between align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-xl-6 mil-mb-120",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "mil-link mil-softened-60 mil-appearance mil-mb-30",
                                children: about_4_namespaceObject.Oc
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "mil-appearance mil-mb-30",
                                dangerouslySetInnerHTML: {
                                    __html: about_4_namespaceObject.TN
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "mil-appearance mil-mb-30",
                                children: about_4_namespaceObject.WL
                            }),
                            about_4_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `mil-icon-box mil-box-hori mil-appearance${key != about_4_namespaceObject.ev.length - 1 ? " mil-mb-15" : ""}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-icon mil-accent",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.icon,
                                                alt: item.label
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-icon-box-text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    children: item.label
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: item.value
                                                })
                                            ]
                                        })
                                    ]
                                }, `about4-item-${key}`))
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-5 mil-mb-120",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-collage-3 mil-appearance",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-image-1 mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-just-image mil-image-square",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: about_4_namespaceObject.wp,
                                            alt: "img",
                                            className: "mil-scale-img",
                                            "data-value-1": "1",
                                            "data-value-2": "1.2",
                                            style: {
                                                "objectPosition": "top left"
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-image-2 mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-just-image mil-image-square",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: about_4_namespaceObject.Lx,
                                            alt: "img"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const AboutFour = (AboutFourSection);


/***/ }),

/***/ 2651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_HeroThree)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/hero-3.json
const hero_3_namespaceObject = JSON.parse('{"ri":{"B":"img/hero/4.png","u":"Emma Freeman"},"TN":"Freelance Digital Marketing Expert","WL":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut <br />odit aut fugit, sed quia consequuntur magni ratione.","xz":{"P":"More about us","p":"/about-3"},"NK":{"P":"View portfolio","p":"/portfolio"},"BH":{"H":"img/hero/3.png","w":"image"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/HeroThree.jsx



const HeroThree = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mil-hero-2",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container align-items-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-7",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-hero-text",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-hero-avatar mil-mb-20",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: hero_3_namespaceObject.ri.B,
                                                alt: hero_3_namespaceObject.ri.u
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                children: hero_3_namespaceObject.ri.u
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "mil-h2 mil-mb-30",
                                        children: hero_3_namespaceObject.TN
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mil-mb-30",
                                        dangerouslySetInnerHTML: {
                                            __html: hero_3_namespaceObject.WL
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: hero_3_namespaceObject.xz.p,
                                        className: "mil-button mil-button-rounded mil-button-lg mil-scale-down-trigger mil-buttons-space",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: hero_3_namespaceObject.xz.P
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: hero_3_namespaceObject.NK.p,
                                        className: "mil-link-hover",
                                        children: hero_3_namespaceObject.NK.P
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-hero-illustration",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-gradient"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        width: "958",
                                        height: "959",
                                        viewBox: "0 0 958 959",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                                                    id: "clip-path",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                        id: "Rectangle_3720",
                                                        "data-name": "Rectangle 3720",
                                                        width: "958",
                                                        height: "959",
                                                        transform: "translate(2284 123)",
                                                        fill: "#fffefe"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                id: "Mask_Group_25",
                                                "data-name": "Mask Group 25",
                                                transform: "translate(-2284 -123)",
                                                clipPath: "url(#clip-path)",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    id: "Path_7024",
                                                    "data-name": "Path 7024",
                                                    d: "M116.478,29.331C320.56,4.556,676.039-18.468,839.536,40.994,1043.9,115.322,141,298.727,132.336,325.755s690.746,90.258,707.2,161.208C852.7,543.722,62.831,616.3,42.841,632.241s734.1,132.716,717.025,199.334S132.109,899.146,135.5,956.582,514.8,1095.1,514.8,1095.1",
                                                    transform: "translate(2222.807 322.827) rotate(-20)",
                                                    fill: "none",
                                                    stroke: "#000",
                                                    strokeLinecap: "round",
                                                    strokeWidth: "110"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-bg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: hero_3_namespaceObject.BH.H,
                                        alt: hero_3_namespaceObject.BH.w,
                                        className: "mil-photo"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const sections_HeroThree = (HeroThree);


/***/ }),

/***/ 1087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _components_sections_HeroThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2651);
/* harmony import */ var _components_sections_Awards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4619);
/* harmony import */ var _components_sections_AboutFour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6493);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2287);
/* harmony import */ var _components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3987);
/* harmony import */ var _components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const InstagramSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "home-3.jsx -> " + "@components/sliders/Instagram"
        ]
    },
    ssr: false
});
const PartnersSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "home-3.jsx -> " + "@components/sliders/Partners"
        ]
    },
    ssr: false
});
const ProjectsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "home-3.jsx -> " + "@components/sliders/Projects"
        ]
    },
    ssr: false
});
const Home3 = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        invert: true,
        footer: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_HeroThree__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_AboutFour__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectsSlider, {
                projects: props.projects
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PartnersSlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Awards__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                posts: props.posts,
                layout: 2,
                imageHorizontal: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InstagramSlider, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home3);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 3183:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,67,289,987,258,374,287,619], () => (__webpack_exec__(1087)));
module.exports = __webpack_exports__;

})();