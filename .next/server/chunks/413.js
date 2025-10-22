"use strict";
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/pricing.json
const pricing_namespaceObject = JSON.parse('{"Oc":"Prices","TN":"Choose the optimal price plan","WL":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga ratione cum maxime ullam id voluptatibus commodi dolorem at, aut, odio, amet quod molestias possimus. Sunt repudiandae ipsam, consectetur repellendus.","LI":{"P":"Contact us","p":"/contact"},"ev":[{"name":"Free","subname":"Basic functionality","price":"$0","price_after":"/mo","price_label":"Free forever","list":[{"active":1,"value":"Dolorum sed doloribus"},{"active":1,"value":"Consectetur adipisicing elit"},{"active":0,"value":"Maxime libero"},{"active":0,"value":"Atque esse odit"},{"active":0,"value":"Laboriosam corporis"}],"button":{"label":"Choose a plan","link":"/contact"}},{"name":"Pro","subname":"More advanced","price":"$89","price_after":"/mo","price_label":"Per month","list":[{"active":1,"value":"Dolorum sed doloribus"},{"active":1,"value":"Consectetur adipisicing elit"},{"active":1,"value":"Maxime libero"},{"active":0,"value":"Atque esse odit"},{"active":0,"value":"Laboriosam corporis"}],"button":{"label":"Choose a plan","link":"/contact"}},{"name":"Enterprise","subname":"For large business","price":"$399","price_after":"/mo","price_label":"Per month","list":[{"active":1,"value":"Dolorum sed doloribus"},{"active":1,"value":"Consectetur adipisicing elit"},{"active":1,"value":"Maxime libero"},{"active":1,"value":"Atque esse odit"},{"active":1,"value":"Laboriosam corporis"}],"button":{"label":"Choose a plan","link":"/contact"}}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Pricing.jsx



const PricingSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mil-gray-bg mil-p-120-90",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row justify-content-between mil-mb-120",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-link mil-appearance mil-accent mil-mb-30",
                                    children: pricing_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-mb-30 mil-appearance",
                                    children: pricing_namespaceObject.TN
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-appearance mil-mt-55-adapt mil-mb-30",
                                    children: pricing_namespaceObject.WL
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: pricing_namespaceObject.LI.p,
                                        className: "mil-link-hover",
                                        children: pricing_namespaceObject.LI.P
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: pricing_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-price-card mil-appearance mil-mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "mil-mb-15",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mil-h6 mil-bold mil-mb-30",
                                        children: item.subname
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-price-number mil-mb-10",
                                        children: [
                                            item.price,
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.price_after
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mil-h6 mil-bold mil-mb-30",
                                        children: item.price_label
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-divider mil-mb-30"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: "mil-mb-30",
                                        children: item.list.map((element, key2)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                className: element.active != 1 ? "mil-empty" : "",
                                                children: [
                                                    element.active == 1 && /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            d: "M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"
                                                        })
                                                    }),
                                                    element.active != 1 && /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                            d: "M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: element.value
                                                    })
                                                ]
                                            }, `pricing-item-${key}-list-${key2}`))
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.button.link,
                                        className: "mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: item.button.label
                                        })
                                    })
                                ]
                            })
                        }, `pricing-item-${key}`))
                })
            ]
        })
    });
};
/* harmony default export */ const Pricing = (PricingSection);


/***/ })

};
;