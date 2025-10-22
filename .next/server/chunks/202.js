"use strict";
exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 9925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);



const PaginationPage = ({ items  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-xl-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/blog/${item.id}`,
                    className: "mil-card-1 mil-icon-2-trigger mil-accent-trigger mil-appearance mil-mb-30",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-cover",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mil-image-frame",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: item.image,
                                    alt: item.title
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-overlay",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mil-description",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-post-info mil-mb-15",
                                        children: [
                                            item.category.map((cat, cat_i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "mil-accent mil-link",
                                                    children: cat
                                                }, `post-${index}-category-${cat_i}`)),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-dot-divider mil-link mil-accent",
                                                children: "•"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mil-link mil-softened-30",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    dateString: item.date
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: item.title
                                    })
                                ]
                            })
                        })
                    ]
                })
            }, `post-${index}`))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationPage);


/***/ }),

/***/ 520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Pagination),
  "D": () => (/* binding */ dotts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/lib/usePagination.js

const getPages = (length, inc = 1)=>Array.from({
        length
    }, (_, i)=>i + inc);
function usePagination(totalItems, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // -> 1 2 3 4 5
    if (totalPages <= 5) {
        return getPages(totalPages);
    }
    // -> 1 2 3 4 ... 10
    if (currentPage <= 3) {
        return [
            1,
            2,
            3,
            4,
            dotts,
            totalPages
        ];
    }
    // -> 1 ... 4 5 6 ... 10
    if (currentPage < totalPages - 2) {
        return [
            1,
            dotts,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            dotts,
            totalPages
        ];
    }
    // -> 1 ... 7 8 9 10
    return [
        1,
        dotts,
        ...getPages(4, totalPages - 3)
    ];
}

;// CONCATENATED MODULE: ./src/components/Pagination.jsx



const dotts = "...";
const Pagination = ({ currentPage , totalItems , perPage , renderPageLink  })=>{
    const pages = usePagination(totalItems, currentPage, perPage);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container mil-p-0-120",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mil-pagination",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: currentPage > 1 ? renderPageLink(currentPage - 1) : renderPageLink(currentPage),
                    className: "mil-pagination-link mil-pagination-link--prev",
                    children: "\xab"
                }, "pagination-item-prev"),
                pages.map((pageNumber, i)=>pageNumber === dotts ? /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "mil-pagination-text",
                        children: pageNumber
                    }, i) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: renderPageLink(pageNumber),
                        className: `${pageNumber === currentPage ? "mil-pagination-link--active" : ""} mil-pagination-link`,
                        children: pageNumber
                    }, `pagination-item-${i}`)),
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: currentPage < pages.length ? renderPageLink(currentPage + 1) : renderPageLink(currentPage),
                    className: "mil-pagination-link mil-pagination-link--next",
                    children: "\xbb"
                }, "pagination-item-next")
            ]
        })
    });
};
/* harmony default export */ const components_Pagination = (Pagination);


/***/ }),

/***/ 2243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _blog_page_page___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6699);
/* harmony import */ var _components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9925);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(520);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blog_page_page___WEBPACK_IMPORTED_MODULE_1__, _lib_posts__WEBPACK_IMPORTED_MODULE_6__]);
([_blog_page_page___WEBPACK_IMPORTED_MODULE_1__, _lib_posts__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Content = {
    "subtitle": "Newsletter",
    "title": "News from the life <br />of our agency.",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga ratione cum maxime ullam id voluptatibus commodi dolorem at, aut, odio, amet quod molestias possimus. Sunt repudiandae ipsam, consectetur repellendus."
};
const Blog = ({ posts , totalPosts , currentPage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                pageImage: "img/content/11.jpg",
                pageTitle: "Blog"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-spacer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mil-blog-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container mil-content-frame mil-appearance mil-p-120-90",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row justify-content-between mil-mb-120",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-xl-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "mil-link mil-appearance mil-accent mil-mb-30",
                                                children: Content.subtitle
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "mil-mb-30 mil-appearance",
                                                dangerouslySetInnerHTML: {
                                                    __html: Content.title
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-xl-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                                children: Content.description
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mil-deco mil-appearance"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    items: posts
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        currentPage: currentPage,
                        totalItems: totalPosts,
                        perPage: _blog_page_page___WEBPACK_IMPORTED_MODULE_1__.PER_PAGE,
                        renderPageLink: (page)=>`/blog/page/${page}`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);
async function getStaticProps() {
    const { posts , total  } = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_6__/* .getPaginatedPostsData */ .hM)(_blog_page_page___WEBPACK_IMPORTED_MODULE_1__.PER_PAGE, 1);
    return {
        props: {
            posts,
            totalPosts: total,
            currentPage: 1
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PER_PAGE": () => (/* binding */ PER_PAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9925);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(520);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(745);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2243);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_5__, _blog__WEBPACK_IMPORTED_MODULE_6__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_5__, _blog__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PER_PAGE = 9;

const Blog = ({ posts , currentPage , totalPosts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageImage: "/img/content/11.jpg",
                pageTitle: "Blog"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mil-spacer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mil-blog-section",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container mil-content-frame mil-appearance mil-p-120-90",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row justify-content-between mil-mb-120",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-xl-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "mil-link mil-appearance mil-accent mil-mb-30",
                                                children: _blog__WEBPACK_IMPORTED_MODULE_6__.Content.subtitle
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "mil-mb-30 mil-appearance",
                                                dangerouslySetInnerHTML: {
                                                    __html: _blog__WEBPACK_IMPORTED_MODULE_6__.Content.title
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-xl-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                                children: _blog__WEBPACK_IMPORTED_MODULE_6__.Content.description
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mil-deco mil-appearance"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    items: posts
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        currentPage: currentPage,
                        totalItems: totalPosts,
                        perPage: PER_PAGE,
                        renderPageLink: (page)=>`/blog/page/${page}`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);
async function getStaticPaths() {
    return {
        paths: Array.from({
            length: 5
        }).map((_, i)=>`/blog/page/${i + 2}`),
        fallback: "blocking"
    };
}
async function getStaticProps({ params  }) {
    const page = Number(params?.page) || 1;
    const { posts , total  } = (0,_library_posts__WEBPACK_IMPORTED_MODULE_5__/* .getPaginatedPostsData */ .hM)(PER_PAGE, page);
    if (!posts.length) {
        return {
            notFound: true
        };
    }
    if (page === 1) {
        return {
            redirect: {
                destination: "/blog",
                permanent: false
            }
        };
    }
    return {
        props: {
            posts,
            totalPosts: total,
            currentPage: page
        },
        revalidate: 60 * 60 * 24
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;