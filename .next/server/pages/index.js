(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,195,51];
exports.modules = {

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"Oc":"Our story.","TN":"A professional writer makes a big difference.","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur! Sequi debitis vero, molestiae tempore eligendi quam sit repudiandae deleniti alias quority accusamus.","xz":{"P":"More about us","p":"about"},"NK":{"P":"View portfolio","p":"portfolio"},"BH":{"W$":"img/content/2.jpg","op":"img/content/1.jpg","wp":"image","lO":"About us - About us - about us - "}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/About.jsx



const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container mil-p-120-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "row justify-content-between align-items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-12 col-xl-5 mil-mb-120",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "mil-link mil-softened-60 mil-appearance mil-mb-30",
                            children: about_namespaceObject.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "mil-appearance mil-mb-30",
                            children: about_namespaceObject.TN
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-appearance mil-mb-30",
                            children: about_namespaceObject.WL
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-appearance",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: about_namespaceObject.xz.p,
                                    className: "mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: about_namespaceObject.xz.P
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: about_namespaceObject.NK.p,
                                    className: "mil-link-hover",
                                    children: about_namespaceObject.NK.P
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-12 col-xl-6 mil-mb-120",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-collage-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-circle-text-position",
                                style: {
                                    bottom: "62%",
                                    left: "-75px"
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-circle-text mil-rotate mil-accent-inside",
                                    "data-value": "360",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        version: "1.1",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        x: "0px",
                                        y: "0px",
                                        viewBox: "0 0 300 300",
                                        enableBackground: "new 0 0 300 300",
                                        xmlSpace: "preserve",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                    id: "circlePath",
                                                    d: "M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                cx: "150",
                                                cy: "100",
                                                r: "75",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("use", {
                                                        xlinkHref: "#circlePath",
                                                        fill: "none"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("text", {
                                                        className: "mil-link mil-dark",
                                                        style: {
                                                            "letterSpacing": "5.5px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("textPath", {
                                                            xlinkHref: "#circlePath",
                                                            children: about_namespaceObject.BH.lO
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-image-1 mil-appearance",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-just-image mil-image-square",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: about_namespaceObject.BH.op,
                                        alt: about_namespaceObject.BH.wp,
                                        className: "mil-scale-img",
                                        "data-value-1": "1",
                                        "data-value-2": "1.2"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-image-2 mil-appearance",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-just-image",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: about_namespaceObject.BH.W$,
                                        alt: about_namespaceObject.BH.wp,
                                        style: {
                                            "objectPosition": "right"
                                        }
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 8597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/about-2.json
const about_2_namespaceObject = JSON.parse('{"Oc":"What we do?","TN":"Content strategy for <br/>SaaS & B2B companies.","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur! Sequi debitis vero, molestiae tempore eligendi quam sit repudiandae deleniti alias quority accusamus.","BH":{"H":"img/content/4.jpg","w":"image"},"KT":[{"label":"Years experience","value":"14"},{"label":"Honors and awards","value":"45"}]}');
// EXTERNAL MODULE: ./src/common/counters.js
var counters = __webpack_require__(5156);
;// CONCATENATED MODULE: ./src/components/sections/AboutTwo.jsx




const AboutTwoSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,counters/* countersAnimation */.L)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container mil-p-120-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "row flex-sm-row-reverse justify-content-between align-items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mil-12 col-xl-6 mil-mb-120",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "mil-link mil-softened-60 mil-appearance mil-mb-30",
                            children: about_2_namespaceObject.Oc
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "mil-appearance mil-mb-30",
                            dangerouslySetInnerHTML: {
                                __html: about_2_namespaceObject.TN
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-appearance mil-mb-30",
                            children: about_2_namespaceObject.WL
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-flex",
                            children: about_2_namespaceObject.KT.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mil-mr-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-link mil-softened-60 mil-appearance",
                                            children: item.label
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-h2 mil-bold mil-appearance",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mil-counter",
                                                    "data-number": item.value,
                                                    children: "0"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mil-accent",
                                                    children: "+"
                                                })
                                            ]
                                        })
                                    ]
                                }, `number-item-${key}`))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-12 col-xl-5 mil-mb-120",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-collage-2 mil-appearance",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-just-image mil-image-square",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: about_2_namespaceObject.BH.H,
                                alt: about_2_namespaceObject.BH.w,
                                className: "mil-scale-img",
                                "data-value-1": "1",
                                "data-value-2": "1.2"
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const AboutTwo = (AboutTwoSection);


/***/ }),

/***/ 4144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1422);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const HeroOne = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mil-hero-1",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-image-frame",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .bg_image */ .Md,
                            alt: "img",
                            className: "mil-scale-img",
                            "data-value-1": ".5",
                            "data-value-2": "1.2",
                            style: {
                                filter: "grayscale(100%)"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-overay"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row mil-p-120-0 justify-content-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-6 col-lg-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-link mil-appearance mil-softened-60 mil-mb-30",
                                        children: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .subtitle */ .Oc
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "mil-light mil-appearance mil-mb-120",
                                        children: [
                                            _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .title.before */ .TN.bb,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-accent",
                                                children: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .title.accent */ .TN.cK
                                            }),
                                            " ",
                                            _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .title.after */ .TN.e4
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-12 col-lg-5 mil-relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-dots mil-appearance"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mil-text-lg mi-suptitle mil-appearance mil-mt-55 mil-mb-60",
                                        dangerouslySetInnerHTML: {
                                            __html: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .description */ .WL
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-scroll-animation-1 mil-appearance mil-mb-60",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-just-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .image */ .BH,
                                            alt: "img",
                                            className: "mil-scale-img",
                                            "data-value-1": "1",
                                            "data-value-2": "1.15",
                                            style: {
                                                "objectPosition": "center 25%"
                                            }
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_1__/* .sliderProps.milInfinitySlider */ .b.milInfinitySlider,
                                    className: "swiper-container mil-infinite-show",
                                    children: _data_sections_hero_1_json__WEBPACK_IMPORTED_MODULE_3__/* .partners.map */ .pS.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            className: "swiper-slide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: item.link,
                                                className: "mil-partner-frame mil-hidden-trigger",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item.image,
                                                    alt: item.alt,
                                                    className: "mil-grayscale mil-opacity"
                                                })
                                            })
                                        }, `hero1-item-${key}`))
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"M":"img/content/3.jpg","e":[{"num":"01","title":"Website Content","icon":"img/icons/1.svg","text":"Deleniti ratione, delectus beatae, exercitationem debitis, dignissimos similique, atque, officiis.","link":"/services/website-content"},{"num":"02","title":"Blog Articles","icon":"img/icons/2.svg","text":"Deleniti ratione, delectus beatae, exercitationem debitis, dignissimos similique, atque, officiis.","link":"/services/blog-articles"},{"num":"03","title":"Product Captions","icon":"img/icons/3.svg","text":"Deleniti ratione, delectus beatae, exercitationem debitis, dignissimos similique, atque, officiis.","link":"/services/product-captions"},{"num":"04","title":"Email Writing","icon":"img/icons/4.svg","text":"Deleniti ratione, delectus beatae, exercitationem debitis, dignissimos similique, atque, officiis.","link":"/services/email-writing"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx



const ServicesSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mil-services-1 mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover-el",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-just-image mil-section-bg mil-scale-img",
                "data-value-1": "1",
                "data-value-2": "1.1",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: services_namespaceObject.M,
                    alt: "image"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-gradient-overlay"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row m-0",
                children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12 col-sm-6 col-lg-3 p-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-card-1 mil-complex-hover mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-cover mil-long"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: item.link,
                                    className: "mil-overlay mil-inside mil-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-top-hidden mil-flex justify-content-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-icon mil-accent",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: item.icon,
                                                        alt: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-text-lg mil-softened-40",
                                                    children: item.num
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-bottom-part-hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "mil-light mil-mb-20",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "mil-hidden-part mil-softened-40",
                                                    children: item.text
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, `services-item-${key}`))
            })
        ]
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 9060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Team)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"Oc":"Our team","TN":"Meet our friendly team of professionals.","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur! Sequi debitis vero, molestiae tempore eligendi quam sit repudiandae deleniti alias quority.","Dk":{"P":"Read more","p":"/team"},"ev":[{"image":"img/team/1.png","name":"Emma Newman","role":"Copywriter"},{"image":"img/team/2.png","name":"Emma Newman","role":"Copywriter"},{"image":"img/team/3.png","name":"Emma Newman","role":"Copywriter"},{"image":"img/team/4.png","name":"Emma Newman","role":"Copywriter"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Team.jsx



const TeamSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-team-section",
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
                                    className: "mil-link mil-accent mil-mb-30",
                                    children: team_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    children: team_namespaceObject.TN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: team_namespaceObject.WL
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: team_namespaceObject.Dk.p,
                                        className: "mil-link-hover",
                                        children: team_namespaceObject.Dk.P
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: team_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-md-6 col-xl-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-cover mil-square",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-image-frame",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: item.name,
                                                style: {
                                                    "objectPosition": "top"
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-overlay mil-with-bg mil-text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-description",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mil-link mil-softened-50",
                                                    children: item.role
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }, `team-item-${key}`))
                })
            ]
        })
    });
};
/* harmony default export */ const Team = (TeamSection);


/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Video)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.css
var modal_video = __webpack_require__(1352);
;// CONCATENATED MODULE: ./src/data/sections/video.json
const video_namespaceObject = JSON.parse('{"Nw":"2Id3XGvFfew","Ly":"https://bslthemes.com/mp4/lettery/video.mp4","TN":"Where strategy <br/>and <span class=\\"mil-accent\\">storytelling</span> hang out.","Oc":"Watch our promo video"}');
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
;// CONCATENATED MODULE: ./src/components/sections/Video.jsx





const VideoSection = ()=>{
    const [isOpen, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                "data-fancybox": true,
                "data-no-swup": true,
                onClick: ()=>setOpen(true),
                className: "mil-video-section mil-word-1-trigger mil-accent-trigger",
                style: {
                    "cursor": "pointer"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-image-frame",
                        children: /*#__PURE__*/ jsx_runtime.jsx("video", {
                            className: "mil-video-background mil-scale-img",
                            "data-value-1": "1",
                            "data-value-2": "1.1",
                            autoPlay: "autoplay",
                            loop: "loop",
                            muted: "true",
                            playsInline: "true",
                            onContextMenu: ()=>false,
                            preload: "auto",
                            children: /*#__PURE__*/ jsx_runtime.jsx("source", {
                                src: video_namespaceObject.Ly
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-overlay-80"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-inner-text mil-text-center mil-p-120-120",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container mil-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-button mil-button-lg mil-button-rounded mil-button-linear mil-button-light mil-icon mil-appearance mil-mb-30",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-play",
                                            style: {
                                                "transform": "translateX(2px)"
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-light mil-appearance mil-mb-30",
                                    dangerouslySetInnerHTML: {
                                        __html: video_namespaceObject.TN
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-link mil-shortened-50 mil-softened-20 mil-appearance mx-auto",
                                    children: video_namespaceObject.Oc
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((external_react_modal_video_default()), {
                channel: "youtube",
                isOpen: isOpen,
                videoId: video_namespaceObject.Nw,
                onClose: ()=>setOpen(false)
            })
        ]
    });
};
/* harmony default export */ const Video = (VideoSection);


/***/ }),

/***/ 8955:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4144);
/* harmony import */ var _components_sections_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4424);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5081);
/* harmony import */ var _components_sections_Team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9060);
/* harmony import */ var _components_sections_Video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9729);
/* harmony import */ var _components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3987);
/* harmony import */ var _components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6258);
/* harmony import */ var _components_sections_AboutTwo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8597);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_5__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const TestimonialSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Testimonial"
        ]
    },
    ssr: false
});
const Home1 = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        transparent: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_HeroOne__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_AboutTwo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Team__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Video__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                posts: props.posts
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            posts: allPosts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1352:
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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

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

/***/ }),

/***/ 6637:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Md":"img/hero/1.jpg","Oc":"Welcome friend!","TN":{"bb":"Writing","cK":"Content","e4":"Like You\'ve Never Had Before"},"WL":"Dicta sunt explicabo. Nemo enim ipsam <br />voluptatem quia voluptas sit","BH":"img/hero/2.jpg","pS":[{"image":"img/partners/1.svg","link":"#.","alt":"logo"},{"image":"img/partners/2.svg","link":"#.","alt":"logo"},{"image":"img/partners/3.svg","link":"#.","alt":"logo"},{"image":"img/partners/4.svg","link":"#.","alt":"logo"},{"image":"img/partners/5.svg","link":"#.","alt":"logo"},{"image":"img/partners/6.svg","link":"#.","alt":"logo"},{"image":"img/partners/7.svg","link":"#.","alt":"logo"},{"image":"img/partners/8.svg","link":"#.","alt":"logo"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,67,289,987,258,422], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();