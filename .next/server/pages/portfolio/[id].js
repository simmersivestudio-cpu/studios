(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 5667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1837);
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








const RelatedProjectsSection = (Content)=>{
    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalURL, setModalURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openSingleModalVideo = (e)=>{
        setModalURL(e.target.getAttribute("data-href"));
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mil-gray-bg mil-portfolio-fw mil-appearance",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-p-120-90",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-link mil-softened-60 mil-mb-30",
                                    children: _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .subtitle */ .Oc
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    dangerouslySetInnerHTML: {
                                        __html: _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-4 mil-mb-120",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .button.link */ .LI.p,
                                        className: "mil-link-hover",
                                        children: _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .button.label */ .LI.P
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Gallery, {
                            children: Content.items.slice(0, _data_sections_related_projects_json__WEBPACK_IMPORTED_MODULE_2__/* .numOfItems */ .jX).map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-portfolio-item mil-appearance mil-mb-30",
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-fancybox": "gallery2",
                                                "data-no-swup": true,
                                                href: item.image,
                                                className: "mil-zoom-icon mil-hidden-trigger",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/icons/zoom.svg",
                                                    alt: "zoom"
                                                })
                                            }),
                                            item.type != "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_6__.Item, {
                                                original: item.image,
                                                thumbnail: item.image,
                                                width: item.imageWidth,
                                                height: item.imageHeight,
                                                children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        "data-fancybox": "gallery2",
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
                                            item.type == "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-fancybox": "gallery2",
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
                                        ]
                                    })
                                }, `related-project-${key}`))
                        })
                    ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProjectsSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2849:
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
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1452);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _components_sections_RelatedProjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5667);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _components_sections_RelatedProjects__WEBPACK_IMPORTED_MODULE_6__]);
([react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _components_sections_RelatedProjects__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ProjectDetail = (props)=>{
    const postData = props.data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageImage: postData.image,
                pageTitle: postData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mil-mb-120",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Gallery, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row justify-content-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "mil-link mil-text-center mil-appearance mil-softened-60 mil-mb-30",
                                            style: {
                                                width: "100%"
                                            },
                                            children: postData.category
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "mil-text-center mil-appearance mil-mb-60",
                                            children: postData.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-divider mil-appearance mil-mb-30"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "mil-project-info mil-appearance mil-mb-30",
                                            children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "mil-link mil-mr-15",
                                                            children: [
                                                                item.label,
                                                                ":"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "mil-link mil-softened-60",
                                                            children: item.value
                                                        })
                                                    ]
                                                }, `project-list-${key}`))
                                        }),
                                        postData.type != "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Item, {
                                            original: postData.image,
                                            thumbnail: postData.image,
                                            width: postData.imageWidth,
                                            height: postData.imageHeight,
                                            children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "data-fancybox": "gallery",
                                                    ref: ref,
                                                    onClick: open,
                                                    "data-no-swup": true,
                                                    className: "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-120",
                                                    style: {
                                                        "cursor": "pointer"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: postData.image,
                                                        alt: postData.title,
                                                        className: "mil-scale-img",
                                                        "data-value-1": "1",
                                                        "data-value-2": "1.1",
                                                        style: {
                                                            "objectPosition": "top"
                                                        }
                                                    })
                                                })
                                        }),
                                        postData.type == "video" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            "data-fancybox": "gallery",
                                            "data-no-swup": true,
                                            className: "mil-appearance mil-just-image mil-image-hori mil-accent-trigger mil-mb-120",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mil-image-frame",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                    className: "mil-video-background",
                                                    "data-value": "1.2",
                                                    autoPlay: "autoplay",
                                                    loop: "loop",
                                                    muted: "true",
                                                    playsInline: "true",
                                                    onContextMenu: (e)=>e.preventDefault(),
                                                    preload: "auto",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                        src: postData.image
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                typeof postData.description0 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.description0.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-10 col-xl-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mil-first-letter mil-appearance",
                                            children: postData.description0.content
                                        })
                                    })
                                })
                            ]
                        }),
                        typeof postData.description1 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.description1.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-center mil-p-0-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-10 col-xl-6 mil-text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "mil-appearance mil-mb-30",
                                            children: postData.description1.heading
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mil-appearance",
                                            children: postData.description1.content
                                        })
                                    ]
                                })
                            })
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
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Item, {
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
                        typeof postData.description2 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.description2.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-center mil-p-90-120",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-10 col-xl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "mil-appearance mil-mb-30",
                                            children: postData.description2.heading
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mil-appearance",
                                            children: postData.description2.content
                                        })
                                    ]
                                })
                            })
                        }),
                        typeof postData.finalImage != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.finalImage.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-center mil-p-0-90",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-12 col-xl-9",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_photoswipe_gallery__WEBPACK_IMPORTED_MODULE_4__.Item, {
                                        original: postData.finalImage.image,
                                        thumbnail: postData.finalImage.image,
                                        width: postData.finalImage.width,
                                        height: postData.finalImage.height,
                                        children: ({ ref , open  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-fancybox": "gallery",
                                                "data-no-swup": true,
                                                ref: ref,
                                                onClick: open,
                                                className: "mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30",
                                                style: {
                                                    "cursor": "pointer"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: postData.finalImage.image,
                                                    alt: postData.finalImage.alt,
                                                    className: "mil-scale-img",
                                                    "data-value-1": "1",
                                                    "data-value-2": "1.1"
                                                })
                                            })
                                    })
                                })
                            })
                        }),
                        typeof postData.description3 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.description3.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-10 col-xl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "mil-appearance mil-mb-30",
                                            children: postData.description3.heading
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mil-appearance",
                                            children: postData.description3.content
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_RelatedProjects__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                items: props.related
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetail);
async function getStaticPaths() {
    const paths = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getAllProjectsIds */ .RH)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getProjectData */ .xU)(params.id);
    const relatedPosts = await (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getRelatedProjects */ .HW)(params.id);
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

/***/ }),

/***/ 1837:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Oc":"Related projects","TN":"You may also be interested<br/> in these projects","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing ducimus, rem labore et delectus aspernatur.","LI":{"P":"View all","p":"/portfolio"},"jX":3}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,67,163,374], () => (__webpack_exec__(2849)));
module.exports = __webpack_exports__;

})();