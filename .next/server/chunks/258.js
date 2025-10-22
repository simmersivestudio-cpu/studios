"use strict";
exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LatestPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts.json
const latest_posts_namespaceObject = JSON.parse('{"Oc":"Our news","TN":"Most popular blog publication.","WL":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.","LI":{"P":"View all","p":"/blog"},"jX":3}');
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/LatestPosts.jsx




const LatestPostsSection = ({ posts , layout , imageHorizontal  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-blog-section",
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
                                    children: latest_posts_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    children: latest_posts_namespaceObject.TN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: latest_posts_namespaceObject.WL
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: latest_posts_namespaceObject.LI.p,
                                        className: "mil-link-hover",
                                        children: latest_posts_namespaceObject.LI.P
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: posts.slice(0, latest_posts_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/blog/${item.id}`,
                                className: `mil-card-1 mil-icon-2-trigger${layout != 2 ? " mil-accent-trigger" : ""} mil-appearance mil-mb-30`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `mil-cover${!imageHorizontal ? " mil-square" : ""}`,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-image-frame",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: item.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `mil-overlay${layout != 2 ? " mil-inside mil-gradient-overlay" : ""}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-description",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-post-info mil-mb-30",
                                                    children: [
                                                        item.category.map((cat, key2)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "mil-accent mil-link",
                                                                children: cat
                                                            }, `latest-posts-item-${key}-category-${key2}`)),
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
                                                    className: `${layout != 2 ? "mil-light" : ""}`,
                                                    children: item.title
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }, `latest-posts-item-${key}`))
                })
            ]
        })
    });
};
/* harmony default export */ const LatestPosts = (LatestPostsSection);


/***/ })

};
;