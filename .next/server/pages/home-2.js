(() => {
var exports = {};
exports.id = 976;
exports.ids = [976,195,51];
exports.modules = {

/***/ 5584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6371);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__]);
react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AboutThreeSection = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-p-120-120",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-link mil-softened-60 mil-mb-30",
                                    children: _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__/* .subtitle */ .Oc
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    children: _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__/* .title */ .TN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__/* .description */ .WL
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__/* .button.link */ .LI.p,
                                        className: "mil-link-hover mil-scale-down-trigger",
                                        children: _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__/* .button.label */ .LI.P
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-content-frame mil-gallery-1 mil-p-0-90",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-between align-items-center mil-appearance",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Gallery, {
                        children: _data_sections_about_3_json__WEBPACK_IMPORTED_MODULE_1__/* .gallery.map */ .lj.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-6 col-xl-3 mil-mb-30",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Item, {
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
                                                alt: item.alt,
                                                className: "mil-scale-img",
                                                "data-value-1": "1",
                                                "data-value-2": "1.2"
                                            })
                                        })
                                })
                            }, `about3-gallery-item-${key}`))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutThreeSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_HeroTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/hero-2.json
const hero_2_namespaceObject = JSON.parse('{"TN":"We create the best social media<br /> marketing campaigns","xz":{"P":"Portfolio","p":"/portfolio"},"NK":{"P":"About us","p":"/about-2"},"BH":{"H":"img/hero/5.jpg","w":"Image"},"_1":"Scroll down - Scroll down - ","nf":[{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":"&#x2022;"},{"text":"team of smm specialists","separator":""}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/HeroTwo.jsx



const HeroTwo = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mil-hero-3",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-dots"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/img/hero/star.svg",
                    alt: "star",
                    className: "mil-star-1 mil-rotate mil-appearance",
                    "data-value": "180"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/img/hero/star.svg",
                    alt: "star",
                    className: "mil-star-2 mil-rotate mil-appearance",
                    "data-value": "360"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "mil-mb-30 mil-appearance",
                            dangerouslySetInnerHTML: {
                                __html: hero_2_namespaceObject.TN
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-appearance mil-mb-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: hero_2_namespaceObject.xz.p,
                                    className: "mil-button mil-button-rounded mil-button-md mil-button-dark mil-scale-down-trigger mil-accent-trigger mil-buttons-space",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: hero_2_namespaceObject.xz.P
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: hero_2_namespaceObject.NK.p,
                                    className: "mil-link-hover mil-scale-down-trigger",
                                    children: hero_2_namespaceObject.NK.P
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-hero-scroll-hint mil-parallax-img mil-appearance",
                            "data-value-1": "250px",
                            "data-value-2": "-100px",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-circle-text mil-rotate-infinite mil-accent-inside",
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
                                                    className: "mil-link mil-light",
                                                    style: {
                                                        "letterSpacing": "7px"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("textPath", {
                                                        xlinkHref: "#circlePath",
                                                        children: hero_2_namespaceObject._1
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-hero3-image-position mil-appearance",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-hero3-image-frame",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: hero_2_namespaceObject.BH.H,
                                        alt: hero_2_namespaceObject.BH.w,
                                        className: "mil-scale-img",
                                        "data-value-1": "1",
                                        "data-value-2": "1.2"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-hero-text-line",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-travel-x",
                                        "data-value": "-15%",
                                        children: hero_2_namespaceObject.nf.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "mil-link",
                                                        children: item.text
                                                    }),
                                                    item.separator != "" && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "•"
                                                    })
                                                ]
                                            }, `line-text-item-${key}`))
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const sections_HeroTwo = (HeroTwo);


/***/ }),

/***/ 8505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(650);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1352);
/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3571);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__]);
react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ProjectsSection = ({ projects  })=>{
    const projectsGrid = [];
    projectsGrid.push(projects.slice(0, 1));
    projectsGrid.push(projects.slice(1, 5));
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalURL, setModalURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openSingleModalVideo = (e)=>{
        setModalURL(e.target.getAttribute("data-href"));
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-p-120-120",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-link mil-softened-60 mil-mb-30",
                                    children: _data_sections_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .subtitle */ .Oc
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    children: _data_sections_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: _data_sections_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: _data_sections_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .button.link */ .LI.p,
                                        className: "mil-link-hover",
                                        children: _data_sections_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .button.label */ .LI.P
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mil-portfolio-fw mil-appearance",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row m-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Gallery, {
                            children: projectsGrid.map((col, col_i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: `/portfolio/${item.id}`,
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
                                            }, `projects-item-${key}`))
                                    })
                                }, `projects-col-${col_i}`))
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
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ServicesTwo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services-2.json
const services_2_namespaceObject = JSON.parse('{"Oc":"Services","TN":"A professional writer makes a big difference.","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur! Sequi debitis vero, molestiae tempore eligendi quam sit repudiandae deleniti alias quority accusamus.","xz":{"P":"More about us","p":"/about-2"},"NK":{"P":"View portfolio","p":"/portfolio"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/ServicesTwo.jsx



const ServicesTwoSection = ({ services  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mil-gray-bg mil-p-120-0",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-5 mil-mb-120",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-link mil-softened-60 mil-appearance mil-mb-30",
                                    children: services_2_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-appearance mil-mb-30",
                                    children: services_2_namespaceObject.TN
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-appearance mil-mb-30",
                                    children: services_2_namespaceObject.WL
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mil-appearance",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: services_2_namespaceObject.xz.p,
                                            className: "mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: services_2_namespaceObject.xz.P
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: services_2_namespaceObject.NK.p,
                                            className: "mil-link-hover mil-scale-down-trigger mil-accent-trigger",
                                            children: services_2_namespaceObject.NK.P
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 mil-mb-90",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row",
                                children: services.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: `/services/${item.id}`,
                                            className: "mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-card-content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: item.image,
                                                        alt: item.title,
                                                        className: "mil-card-icon"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                className: "mil-mb-10",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "mil-softened-40",
                                                                children: item.short
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }, `services2-item-${key}`))
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const ServicesTwo = (ServicesTwoSection);


/***/ }),

/***/ 4041:
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
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8654);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7374);
/* harmony import */ var _components_sections_HeroTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6173);
/* harmony import */ var _components_sections_AboutThree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5584);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2287);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7741);
/* harmony import */ var _components_sections_ServicesTwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8927);
/* harmony import */ var _components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3987);
/* harmony import */ var _components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6258);
/* harmony import */ var _components_sections_Projects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__, _library_projects__WEBPACK_IMPORTED_MODULE_6__, _components_sections_AboutThree__WEBPACK_IMPORTED_MODULE_8__, _components_sections_Projects__WEBPACK_IMPORTED_MODULE_14__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__, _library_projects__WEBPACK_IMPORTED_MODULE_6__, _components_sections_AboutThree__WEBPACK_IMPORTED_MODULE_8__, _components_sections_Projects__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const TestimonialSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "home-2.jsx -> " + "@components/sliders/Testimonial"
        ]
    },
    ssr: false
});
const PartnersSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "home-2.jsx -> " + "@components/sliders/Partners"
        ]
    },
    ssr: false
});
const Home2 = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        invert: true,
        footerBg: "img/content/10.jpg",
        footerInst: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_HeroTwo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_AboutThree__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_ServicesTwo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                services: props.services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Projects__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                projects: props.projects
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PartnersSlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                posts: props.posts,
                layout: 2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Subscribe__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home2);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getSortedServicesData */ .M9)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_6__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            posts: allPosts,
            services: allServices,
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

/***/ }),

/***/ 6371:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Oc":"About us","TN":"Writing content like you’ve never had before","WL":"Perspiciatis ipsum vero optio rerum labore et delectus aspernatur.","LI":{"P":"Read more","p":"/about-2"},"lj":[{"url":"img/content/8.jpg","width":"1000","height":"1500","alt":"img"},{"url":"img/content/9.jpg","width":"1920","height":"1280","alt":"img"},{"url":"img/content/10.jpg","width":"1000","height":"1500","alt":"img"},{"url":"img/content/11.jpg","width":"1920","height":"1440","alt":"img"}]}');

/***/ }),

/***/ 650:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Oc":"Portfolio","TN":"Our creative works","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur.","LI":{"P":"View all","p":"/portfolio"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,67,289,987,741,258,374,287,654], () => (__webpack_exec__(4041)));
module.exports = __webpack_exports__;

})();