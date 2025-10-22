"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 7892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/PageBanner.jsx
var PageBanner = __webpack_require__(163);
// EXTERNAL MODULE: ./src/layouts/Layouts.js + 8 modules
var Layouts = __webpack_require__(67);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/pages/contact.jsx





const Contact = ()=>{
    const Content = {
        "subtitle": "Contact",
        "title": "Get in touch",
        "info": [
            {
                "icon": "img/icons/4.svg",
                "label": "Support email",
                "value": "mil.design.inbox@mail.com"
            },
            {
                "icon": "img/icons/7.svg",
                "label": "Call 24/7",
                "value": "+49 (055) 742 78 84"
            }
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layouts/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PageBanner/* default */.Z, {
                pageImage: "img/content/5.jpg",
                pageTitle: "Contact"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mil-content-frame mil-appearance mil-p-120-90",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row justify-content-between mil-mb-90",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xl-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mil-link mil-appearance mil-accent mil-mb-30",
                                        children: Content.subtitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mil-mb-60 mil-appearance",
                                        children: Content.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row mil-mt-55-adapt",
                                    children: Content.info.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-icon-box mil-box-hori mil-appearance mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mil-icon mil-accent",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: item.icon,
                                                            alt: item.label
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "mil-icon-box-text",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                children: item.value
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: item.label
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, `contact-item-${key}`))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(external_formik_namespaceObject.Formik, {
                        initialValues: {
                            email: "",
                            name: "",
                            message: ""
                        },
                        validate: (values)=>{
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Required";
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = "Invalid email address";
                            }
                            return errors;
                        },
                        onSubmit: (values, { setSubmitting  })=>{
                            const form = document.getElementById("contactForm");
                            const status = document.getElementById("contactFormStatus");
                            const data = new FormData();
                            data.append("name", values.name);
                            data.append("email", values.email);
                            data.append("message", values.message);
                            fetch(form.action, {
                                method: "POST",
                                body: data,
                                headers: {
                                    "Accept": "application/json"
                                }
                            }).then((response)=>{
                                if (response.ok) {
                                    status.innerHTML = "Thanks for your submission!";
                                    form.reset();
                                } else {
                                    response.json().then((data)=>{
                                        if (Object.hasOwn(data, "errors")) {
                                            status.innerHTML = data["errors"].map((error)=>error["message"]).join(", ");
                                        } else {
                                            status.innerHTML = "Oops! There was a problem submitting your form";
                                        }
                                    });
                                }
                            }).catch((error)=>{
                                status.innerHTML = "Oops! There was a problem submitting your form";
                            });
                            setSubmitting(false);
                        },
                        children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ jsx_runtime.jsx("form", {
                                onSubmit: handleSubmit,
                                id: "contactForm",
                                action: app/* settings.formspreeURL */.Xd.T,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        className: "mil-link",
                                                        type: "text",
                                                        name: "name",
                                                        required: "required",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: values.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "mil-link",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: errors.name && touched.name && errors.name
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        className: "mil-link",
                                                        type: "email",
                                                        name: "email",
                                                        required: "required",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: values.email
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "mil-link",
                                                        children: "Email*"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: errors.email && touched.email && errors.email
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                        name: "message",
                                                        className: "mil-link",
                                                        required: "required",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: values.message
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                        className: "mil-link",
                                                        children: "Message"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: errors.message && touched.message && errors.message
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mil-text-sm mil-mb-30",
                                                children: "*We promise not to disclose your personal information to third parties."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                className: "mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30",
                                                disabled: isSubmitting,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Send message"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "form-status",
                                            id: "contactFormStatus"
                                        })
                                    ]
                                })
                            })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-map-frame",
                children: /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18737.626654165902!2d-79.39321130117438!3d43.64696799680622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a33d602f%3A0xb22c1fe911a3636b!2sLCBO!5e0!3m2!1suk!2sua!4v1675692409380!5m2!1suk!2sua",
                    width: 600,
                    height: 450,
                    style: {
                        border: 0
                    },
                    allowFullScreen: true,
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade"
                })
            })
        ]
    });
};
/* harmony default export */ const contact = (Contact);


/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 3183:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,67,163], () => (__webpack_exec__(7892)));
module.exports = __webpack_exports__;

})();