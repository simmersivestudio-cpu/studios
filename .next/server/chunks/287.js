"use strict";
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Counters)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/counters.json
const counters_namespaceObject = JSON.parse('{"e":[{"label":"Years experience","value":"14"},{"label":"Honors and awards","value":"45"},{"label":"Completed projects","value":"215"},{"label":"Happy Customers","value":"127"}]}');
// EXTERNAL MODULE: ./src/common/counters.js
var counters = __webpack_require__(5156);
;// CONCATENATED MODULE: ./src/components/sections/Counters.jsx




const CountersSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,counters/* countersAnimation */.L)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container mil-p-0-90",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "row",
            children: counters_namespaceObject.e.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-md-6 col-xl-3 mil-mb-30",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-link mil-softened-50 mil-appearance",
                            children: item.label
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-h3 mil-appearance",
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
                }, `counter-item-${key}`))
        })
    });
};
/* harmony default export */ const Counters = (CountersSection);


/***/ })

};
;