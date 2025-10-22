"use strict";
exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Subscribe)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/subscribe.json
const subscribe_namespaceObject = {"T":"Newsletter"};
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/sections/Subscribe.jsx



const SubscribeSection = ({ bgColorClass  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: bgColorClass ? `mil-subscribe-1 ${bgColorClass}` : "mil-subscribe-1",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container mil-p-0-90",
            children: /*#__PURE__*/ jsx_runtime.jsx("form", {
                action: app/* settings.mailchimp.url */.Xd.G.H,
                method: "post",
                target: "_blank",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "mil-appearance mil-mb-30",
                                children: subscribe_namespaceObject.T
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-lg-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            className: "mil-link",
                                            type: "email",
                                            name: "EMAIL",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                            className: "mil-link",
                                            children: "Your Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "hidden",
                                    name: app/* settings.mailchimp.key */.Xd.G.J
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-appearance",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    className: "mil-button mil-button-md mil-scale-down-trigger mil-mb-30",
                                    children: "Subscribe"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Subscribe = (SubscribeSection);


/***/ })

};
;