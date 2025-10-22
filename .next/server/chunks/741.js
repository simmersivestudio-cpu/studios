"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action.json
const call_to_action_namespaceObject = JSON.parse('{"T":"We make the creative solutions for modern brands","L":{"P":"Contact us","p":"contact"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/CallToAction.jsx



const CallToActionSection = ({ bg  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${bg != "gray" ? "mil-accent-bg" : "mil-gray-bg"}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mil-p-60-30",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-9 mil-mb-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                            className: "mil-buttons-space",
                            children: call_to_action_namespaceObject.T
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-3 mil-mb-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: call_to_action_namespaceObject.L.p,
                            className: "mil-float-right mil-button mil-button-lg mil-button-dark mil-scale-down-trigger mil-accent-trigger",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: call_to_action_namespaceObject.L.P
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const CallToAction = (CallToActionSection);


/***/ })

};
;