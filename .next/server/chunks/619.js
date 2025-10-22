"use strict";
exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 4619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Awards)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/awards.json
const awards_namespaceObject = JSON.parse('{"TN":"We do world-class work. Check out our Awards.","Oc":"Honors & Awards","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing. Perspiciatis ipsum vero optio rerum molestiae, sintory ducimus, rem labore et delectus aspernatur.","ev":[{"title":"Awwwards","year":"2019","subtitle":"Website Awards","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum quisquam corrupti rerum nam minus quae."},{"title":"Site of the day","year":"2020","subtitle":"Website Awards","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum quisquam corrupti rerum nam minus quae."},{"title":"Best design Awards","year":"2022","subtitle":"Website Awards","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum quisquam corrupti rerum nam minus quae."},{"title":"Awwwards","year":"2023","subtitle":"Website Awards","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum quisquam corrupti rerum nam minus quae."}]}');
;// CONCATENATED MODULE: ./src/components/sections/Awards.jsx


const AwardsSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-gray-bg mil-p-120-90",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mil-link mil-softened-60 mil-appearance mil-mb-30",
                                children: awards_namespaceObject.Oc
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "mil-mb-30 mil-appearance",
                                children: awards_namespaceObject.TN
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-lg-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "mil-appearance mil-mt-55-adapt mil-mb-60",
                                children: awards_namespaceObject.WL
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-divider mil-appearance mil-mb-60"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row",
                                children: awards_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-6 mil-mb-30",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-appearance",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-flex justify-content-between mil-mb-10",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            children: item.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mil-accent",
                                                            children: item.year
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-text-sm mil-mb-15",
                                                    children: item.subtitle
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "mil-mb-15",
                                                    children: item.text
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-deco"
                                                })
                                            ]
                                        })
                                    }, `award-item-${key}`))
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Awards = (AwardsSection);


/***/ })

};
;