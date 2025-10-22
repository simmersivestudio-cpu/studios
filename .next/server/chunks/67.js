exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 6812:
/***/ ((module) => {

// Exports
module.exports = {
	"accentColor": "#ffa726",
	"darkColor": "#263238",
	"lightColor": "#fff"
};


/***/ }),

/***/ 5156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ countersAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);


const countersAnimation = ()=>{
    const number = document.querySelectorAll(".mil-counter");
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
    number.forEach((element)=>{
        const count = element, zero = {
            val: 0
        }, num = count.dataset.number, split = (num + "").split("."), decimals = split.length > 1 ? split[1].length : 0;
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(zero, {
            val: num,
            duration: 2,
            ScrollTrigger: {
                trigger: count,
                toggleActions: "play none none reverse"
            },
            onUpdate: function() {
                count.innerHTML = zero.val.toFixed(decimals);
            }
        });
    });
};


/***/ }),

/***/ 5033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ cursorSwiperAnimation),
/* harmony export */   "h": () => (/* binding */ cursorAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6812);
/* harmony import */ var _styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const cursorAnimation = ()=>{
    const cursor = document.querySelector(".mil-cursor");
    const cursorWord1 = document.querySelector(".mil-cursor .mil-word-1");
    const cursorWord2 = document.querySelector(".mil-cursor .mil-word-2");
    const cursorIcon1 = document.querySelector(".mil-cursor .mil-icon-1");
    const cursorIcon2 = document.querySelector(".mil-cursor .mil-icon-2");
    const cursorIcon3 = document.querySelector(".mil-cursor .mil-icon-3");
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50
    });
    //follower
    document.addEventListener("pointermove", (event)=>{
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, {
            duration: 0.6,
            ease: "sine",
            x: event.clientX,
            y: event.clientY
        });
    });
    //click and drag
    const body = document.querySelector("body");
    body.addEventListener("mousedown", (event)=>{
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
            scale: .7,
            boxShadow: "0px 0px 0px 10px rgba(255,255,255,.4)",
            ease: "sine"
        });
    });
    body.addEventListener("mouseup", (event)=>{
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
            scale: 1,
            boxShadow: "0px 0px 0px 5px rgba(255,255,255,0)",
            ease: "sine"
        });
    });
    //accent color
    const accent = document.querySelectorAll(".mil-accent-trigger");
    if (accent != undefined) {
        accent.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().accentColor),
                    ease: "sine"
                });
                cursor.classList.add("mil-active");
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().darkColor),
                    ease: "sine"
                });
                cursor.classList.remove("mil-dark");
            });
        });
    }
    //light color
    const light = document.querySelectorAll(".mil-light-trigger");
    if (light != undefined) {
        light.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().lightColor),
                    ease: "sine"
                });
                cursor.classList.add("mil-dark");
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().darkColor),
                    ease: "sine"
                });
                cursor.classList.remove("mil-dark");
            });
        });
    }
    //hidden
    const hidden = document.querySelectorAll(".mil-hidden-trigger");
    if (hidden != undefined) {
        hidden.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 0,
                    height: 0,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //scale down
    const scale_down = document.querySelectorAll(".mil-scale-down-trigger");
    if (scale_down != undefined) {
        scale_down.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 10,
                    height: 10,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //scale up
    const scale_up = document.querySelectorAll(".mil-scale-up-trigger");
    if (scale_up != undefined) {
        scale_up.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 75,
                    height: 75,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //scale up with word and icons
    const scale_up_all = document.querySelectorAll(".mil-word-1-trigger, .mil-word-2-trigger, .mil-icon-1-trigger, .mil-icon-2-trigger, .mil-icon-3-trigger");
    if (scale_up_all != undefined) {
        scale_up_all.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 75,
                    height: 75,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //word 1
    const word1 = document.querySelectorAll(".mil-word-1-trigger");
    if (word1 != undefined) {
        word1.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //word 2
    const word2 = document.querySelectorAll(".mil-word-2-trigger");
    if (word2 != undefined) {
        word2.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //icon 1
    const icon1 = document.querySelectorAll(".mil-icon-1-trigger");
    if (icon1 != undefined) {
        icon1.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                console.log("over");
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                console.log("leave");
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //icon 2
    const icon2 = document.querySelectorAll(".mil-icon-2-trigger");
    if (icon2 != undefined) {
        icon2.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //icon 3
    const icon3 = document.querySelectorAll(".mil-icon-3-trigger");
    if (icon3 != undefined) {
        icon3.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon3, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon3, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
};
const cursorSwiperAnimation = ()=>{
    const cursor = document.querySelector(".mil-cursor");
    const cursorWord1 = document.querySelector(".mil-cursor .mil-word-1");
    const cursorWord2 = document.querySelector(".mil-cursor .mil-word-2");
    const cursorIcon1 = document.querySelector(".mil-cursor .mil-icon-1");
    const cursorIcon2 = document.querySelector(".mil-cursor .mil-icon-2");
    const cursorIcon3 = document.querySelector(".mil-cursor .mil-icon-3");
    //accent color
    const accent = document.querySelectorAll(".swiper-container .mil-accent-trigger");
    if (accent != undefined) {
        accent.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().accentColor),
                    ease: "sine"
                });
                cursor.classList.add("mil-active");
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().darkColor),
                    ease: "sine"
                });
                cursor.classList.remove("mil-dark");
            });
        });
    }
    //light color
    const light = document.querySelectorAll(".swiper-container .mil-light-trigger");
    if (light != undefined) {
        light.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().lightColor),
                    ease: "sine"
                });
                cursor.classList.add("mil-dark");
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    background: (_styles_scss_variables_module_scss__WEBPACK_IMPORTED_MODULE_1___default().darkColor),
                    ease: "sine"
                });
                cursor.classList.remove("mil-dark");
            });
        });
    }
    //hidden
    const hidden = document.querySelectorAll(".swiper-container .mil-hidden-trigger");
    if (hidden != undefined) {
        hidden.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 0,
                    height: 0,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //scale down
    const scale_down = document.querySelectorAll(".swiper-container .mil-scale-down-trigger");
    if (scale_down != undefined) {
        scale_down.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 10,
                    height: 10,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //scale up
    const scale_up = document.querySelectorAll(".swiper-container .mil-scale-up-trigger");
    if (scale_up != undefined) {
        scale_up.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 75,
                    height: 75,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //scale up with word and icons
    const scale_up_all = document.querySelectorAll(".swiper-container .mil-word-1-trigger, .swiper-container .mil-word-2-trigger, .swiper-container .mil-icon-1-trigger, .swiper-container .mil-icon-2-trigger, .swiper-container .mil-icon-3-trigger");
    if (scale_up_all != undefined) {
        scale_up_all.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: 1,
                    width: 75,
                    height: 75,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursor, .2, {
                    opacity: .1,
                    width: 25,
                    height: 25,
                    ease: "sine"
                });
            });
        });
    }
    //word 1
    const word1 = document.querySelectorAll(".swiper-container .mil-word-1-trigger");
    if (word1 != undefined) {
        word1.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //word 2
    const word2 = document.querySelectorAll(".swiper-container .mil-word-2-trigger");
    if (word2 != undefined) {
        word2.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorWord2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //icon 1
    const icon1 = document.querySelectorAll(".swiper-container .mil-icon-1-trigger");
    if (icon1 != undefined) {
        icon1.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                console.log("over");
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon1, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                console.log("leave");
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon1, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //icon 2
    const icon2 = document.querySelectorAll(".swiper-container .mil-icon-2-trigger");
    if (icon2 != undefined) {
        icon2.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon2, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon2, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
    //icon 3
    const icon3 = document.querySelectorAll(".swiper-container .mil-icon-3-trigger");
    if (icon3 != undefined) {
        icon3.forEach((element)=>{
            element.addEventListener("mouseover", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon3, .2, {
                    opacity: 1,
                    scale: 1,
                    ease: "sine"
                });
            });
            element.addEventListener("mouseleave", (event)=>{
                gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(cursorIcon3, .2, {
                    opacity: 0,
                    scale: .6,
                    ease: "sine"
                });
            });
        });
    }
};


/***/ }),

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ accordion),
/* harmony export */   "i": () => (/* binding */ formInputs)
/* harmony export */ });
const accordion = ()=>{
    var acc = document.getElementsByClassName("mil-accordion-menu");
    var i;
    for(i = 0; i < acc.length; i++){
        acc[i].onclick = function() {
            this.classList.toggle("mil-active");
            var panel = this.nextElementSibling;
            if (panel.style.height) {
                panel.style.height = null;
            } else {
                panel.style.height = panel.scrollHeight + "px";
            }
        };
    }
};
const formInputs = ()=>{
    var inputs = document.querySelectorAll("input");
    inputs.forEach((input)=>{
        input.addEventListener("blur", (event)=>{
            if (input.value !== "") {
                input.classList.add("mil-keep");
            } else {
                input.classList.remove("mil-keep");
            }
        });
    });
};


/***/ }),

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "gsap/dist/ScrollToPlugin"
var ScrollToPlugin_ = __webpack_require__(3183);
;// CONCATENATED MODULE: ./src/common/scrollAnims.js



const scrollAnimation = ()=>{
    external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger, ScrollToPlugin_.ScrollToPlugin);
    //appearance
    const appearance = document.querySelectorAll(".mil-appearance");
    appearance.forEach((section)=>{
        external_gsap_.gsap.fromTo(section, {
            opacity: 0,
            y: 50,
            scale: .98,
            ease: "sine"
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: section,
                toggleActions: "play none none reverse"
            }
        });
    });
    //scale
    const scaleImage = document.querySelectorAll(".mil-scale-img");
    scaleImage.forEach((section)=>{
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            scale: value1
        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    //parallax
    const parallaxImage = document.querySelectorAll(".mil-parallax-img");
    parallaxImage.forEach((section)=>{
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            y: value1
        }, {
            y: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    //rotate
    const rotate = document.querySelectorAll(".mil-rotate");
    rotate.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            rotate: 0
        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    //travel x
    const travelX = document.querySelectorAll(".mil-travel-x");
    travelX.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            x: 0
        }, {
            x: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    //travel y
    const travelY = document.querySelectorAll(".mil-travel-y");
    travelY.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            y: 0
        }, {
            y: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    //dissolve
    const dissolve = document.querySelectorAll(".mil-dissolve");
    dissolve.forEach((section)=>{
        external_gsap_.gsap.fromTo(section, {
            opacity: 1,
            ease: "linear"
        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: "top-=600",
                end: "bottom-=100"
            }
        });
    });
};

// EXTERNAL MODULE: ./src/common/counters.js
var counters = __webpack_require__(5156);
// EXTERNAL MODULE: ./src/styles/scss/variables.module.scss
var variables_module = __webpack_require__(6812);
var variables_module_default = /*#__PURE__*/__webpack_require__.n(variables_module);
;// CONCATENATED MODULE: ./src/common/navigation.js



const navigation = ()=>{
    external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
    const showAnim = external_gsap_.gsap.from(".mil-top-panel.mil-animated", {
        yPercent: -100,
        paused: true,
        duration: 0.4
    }).progress(1);
    ScrollTrigger_.ScrollTrigger.create({
        start: "top top",
        end: 99999999,
        onUpdate: (self)=>{
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
    });
    const showColor = document.querySelectorAll(".mil-top-panel.mil-transparent-nav");
    showColor.forEach((section)=>{
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            backgroundColor: "rgba(38, 50, 56, 0)"
        }, {
            backgroundColor: (variables_module_default()).darkColor,
            scrollTrigger: {
                start: "top -100, top",
                end: 99999,
                toggleClass: "active"
            }
        });
    });
};

// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/layouts/footers/LayoutDefault.js



const DefaultFooter = ({ bg , instagram , extraClass  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "mil-footer-1 mil-light-trigger",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-image-frame",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: bg ? bg : app/* footer.bg_image */.Mv.Md,
                        alt: "img",
                        className: "mil-scale-img",
                        "data-value-1": "1",
                        "data-value-2": "1.2",
                        style: {
                            filter: "grayscale(100%)"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-overay"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-footer-content mil-p-120-90",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row justify-content-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-lg-6 col-xl-4 mil-mb-30",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                            className: "mil-light mil-mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: app/* footer.logo.text */.Mv.jY.f
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mil-accent",
                                                    children: app/* footer.logo.accent */.Mv.jY.c
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-mb-30",
                                            children: app/* footer.description */.Mv.WL
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-12 col-xl-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row justify-content-xl-end",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-lg-4 col-xl-3 mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "mil-light mil-mb-30",
                                                        children: "Menu"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: app/* footer.menu.map */.Mv.GI.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: item.link,
                                                                    className: "mil-link mil-link-hover mil-softened-50 mil-mb-15",
                                                                    children: item.label
                                                                })
                                                            }, `footer-menu-item-${key}`))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-lg-4 col-xl-3 mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "mil-light mil-mb-30",
                                                        children: "Useful links"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: app/* footer.links.map */.Mv.Ok.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: item.link,
                                                                    className: "mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15",
                                                                    children: item.label
                                                                })
                                                            }, `footer-links-item-${key}`))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-lg-4 col-xl-4 mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "mil-light mil-mb-30",
                                                        children: "Contact us"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: `mailto:${app/* contacts.email */.Jx.D}`,
                                                        className: "mil-link mil-link-hover mil-accent mil-hidden-trigger mil-mb-30",
                                                        children: app/* contacts.email */.Jx.D
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "mil-light mil-text-xl mil-bold mil-mb-30",
                                                        children: app/* contacts.tel */.Jx.H
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        className: "mil-social mil-hidden-trigger mil-left",
                                                        children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: item.link,
                                                                    title: item.title,
                                                                    target: "_blank",
                                                                    className: "mil-light",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: item.icon
                                                                    })
                                                                })
                                                            }, `social-item-${key}`))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    instagram && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mil-footer-instagram mil-mb-120",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-instagram-frame",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-instagram mil-footer-instagram",
                                    children: app/* footer.instagram.images.map */.Mv.CR.W.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-instagram-item",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item,
                                                alt: "instagram"
                                            })
                                        }, `instagram-item-${key}`))
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-button-positions mil-appearance",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: app/* footer.instagram.button.link */.Mv.CR.L.p,
                                        target: "_blank",
                                        className: "mil-button mil-button-lg mil-button-rounded mil-button-accent mil-scale-down-trigger",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-instagram"
                                                }),
                                                " ",
                                                app/* footer.instagram.button.label */.Mv.CR.L.P
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-footer-bottom",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-softened-60",
                            children: app/* footer.copy */.Mv.JG
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-softened-60",
                            dangerouslySetInnerHTML: {
                                __html: app/* footer.dev */.Mv.WI
                            }
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const LayoutDefault = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layouts/footers/LayoutTwo.js



const Footer2 = ({ extraClass  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "mil-footer-2",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row flex-sm-row-reverse justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-5 mil-mb-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "mil-social mil-hidden-trigger mil-right",
                            children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: item.link,
                                        title: item.title,
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: item.icon
                                        })
                                    })
                                }, `social-item-${key}`))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-2 mil-text-center mil-mb-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            className: "mil-logo mil-scale-down-trigger",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mil-h5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: app/* header.logo.text */.Fs.j.f
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "mil-accent",
                                        children: app/* header.logo.accent */.Fs.j.c
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-5 mil-mb-30",
                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "mil-text-sm mil-softened-60",
                            children: app/* footer.copy */.Mv.JG
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const LayoutTwo = (Footer2);

;// CONCATENATED MODULE: ./src/layouts/footers/Index.js



const Footer = ({ layout , bg , instagram , extraClass  })=>{
    switch(layout){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(LayoutDefault, {
                bg: bg,
                instagram: instagram,
                extraClass: extraClass
            });
        case 2:
            return /*#__PURE__*/ jsx_runtime.jsx(LayoutTwo, {
                extraClass: extraClass
            });
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(LayoutDefault, {
                bg: bg,
                instagram: instagram,
                extraClass: extraClass
            });
    }
};
/* harmony default export */ const Index = (Footer);

;// CONCATENATED MODULE: ./src/layouts/headers/LayoutDefault.js




const DefaultHeader = ({ transparent , invert , extraClass  })=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const navItems = [];
    app/* header.menu.forEach */.Fs.G.forEach((item, index)=>{
        let s_class1 = "";
        if (item.children != 0) {
            s_class1 = "mil-has-children";
        }
        let newobj = Object.assign({}, item, {
            "classes": s_class1
        });
        navItems.push(newobj);
    });
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `mil-top-panel${transparent ? " mil-transparent-nav" : ""}${!invert ? " mil-invert-nav" : ""} mil-animated ${extraClass ? extraClass : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        className: "mil-logo mil-scale-down-trigger mil-accent-trigger",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-h5",
                            children: [
                                app/* header.logo.text */.Fs.j.f,
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "mil-accent",
                                    children: app/* header.logo.accent */.Fs.j.c
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `mil-mobile-dropdown mil-menu-center ${toggle ? "mil-active" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            id: "swupTopbar",
                            className: "mil-top-bar-transition",
                            children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                className: "mil-dark-nav",
                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    className: "mil-inline-list mil-hidden-trigger",
                                    children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            className: item.classes,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: item.link,
                                                    className: "mil-link",
                                                    children: item.label
                                                }),
                                                item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    children: item.children.map((subitem, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: subitem.link,
                                                                className: "mil-link",
                                                                children: subitem.label
                                                            })
                                                        }, `header-submenu-item-${key}`))
                                                })
                                            ]
                                        }, `header-menu-item-${key}`))
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "mil-social mil-hidden-trigger",
                            children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: item.link,
                                        title: item.title,
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: item.icon
                                        })
                                    })
                                }, `header-social-item-${key}`))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `mil-menu-btn ${toggle ? "mil-active" : ""}`,
                    onClick: ()=>setToggle(!toggle),
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                })
            ]
        })
    });
};
/* harmony default export */ const headers_LayoutDefault = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layouts/headers/Index.js


const Header = ({ layout , transparent , invert , extraClass  })=>{
    switch(layout){
        case 1:
            return;
        case 2:
            return;
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_LayoutDefault, {
                transparent: transparent,
                invert: invert,
                extarClass: extraClass
            });
    }
};
/* harmony default export */ const headers_Index = (Header);

// EXTERNAL MODULE: ./src/common/cursor.js
var cursor = __webpack_require__(5033);
;// CONCATENATED MODULE: ./src/layouts/cursor/Index.jsx



const CursorModule = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,cursor/* cursorAnimation */.h)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mil-cursor",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mil-word-1",
                children: "Play"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mil-word-2",
                children: "Open"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mil-icon-1",
                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2 c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2 L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9 z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mil-icon-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    viewBox: "0 0 50 50",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M 38.035156 13.988281 C 37.628906 13.980469 37.257813 14.222656 37.09375 14.59375 C 36.933594 14.96875 37.015625 15.402344 37.300781 15.691406 L 45.277344 24 L 2.023438 24 C 1.664063 23.996094 1.328125 24.183594 1.148438 24.496094 C 0.964844 24.808594 0.964844 25.191406 1.148438 25.503906 C 1.328125 25.816406 1.664063 26.003906 2.023438 26 L 45.277344 26 L 37.300781 34.308594 C 36.917969 34.707031 36.933594 35.339844 37.332031 35.722656 C 37.730469 36.105469 38.363281 36.09375 38.746094 35.691406 L 49.011719 25 L 38.746094 14.308594 C 38.5625 14.109375 38.304688 13.996094 38.035156 13.988281 Z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mil-icon-3",
                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    viewBox: "0 0 48 48",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z M 20.476562 13.978516 A 1.50015 1.50015 0 0 0 19 15.5 L 19 19 L 15.5 19 A 1.50015 1.50015 0 1 0 15.5 22 L 19 22 L 19 25.5 A 1.50015 1.50015 0 1 0 22 25.5 L 22 22 L 25.5 22 A 1.50015 1.50015 0 1 0 25.5 19 L 22 19 L 22 15.5 A 1.50015 1.50015 0 0 0 20.476562 13.978516 z"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const cursor_Index = (CursorModule);

;// CONCATENATED MODULE: ./src/layouts/Layouts.js









const Layouts = ({ children , header , footer , noHeader , noFooter , footerBg , footerInst , transparent , invert , extraClass  })=>{
    (0,external_react_.useEffect)(()=>{
        scrollAnimation();
        navigation();
        (0,utilits/* formInputs */.i)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "smooth-wrapper",
        className: "mil-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(cursor_Index, {}),
            !noHeader && /*#__PURE__*/ jsx_runtime.jsx(headers_Index, {
                layout: header,
                transparent: transparent,
                invert: invert,
                extraClass: extraClass
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "swupMain",
                className: "mil-main-transition",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "smooth-content",
                    className: "mil-content",
                    children: children
                })
            }),
            !noFooter && /*#__PURE__*/ jsx_runtime.jsx(Index, {
                layout: footer,
                bg: footerBg,
                instagram: footerInst
            })
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ }),

/***/ 2806:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Xd":{"T":"https://formspree.io/f/your_api_key","G":{"H":"","J":""}},"Fs":{"j":{"f":"Lettery","c":"."},"G":[{"label":"Home","link":"/","children":[{"label":"Home","link":"/"},{"label":"Home 2","link":"/home-2"},{"label":"Home 3","link":"/home-3"}]},{"label":"Pages","link":"#.","children":[{"label":"About","link":"/about"},{"label":"About 2","link":"/about-2"},{"label":"About 3","link":"/about-3"},{"label":"Services List","link":"/services"},{"label":"Service Detail","link":"/services/blog-articles"},{"label":"Team","link":"/team"},{"label":"404","link":"/404"}]},{"label":"Portfolio","link":"/portfolio","children":[{"label":"Portfolio Grid","link":"/portfolio"},{"label":"Portfolio Grid 2","link":"/portfolio-2"},{"label":"Project Detail","link":"/portfolio/project-01"},{"label":"Project Detail 2","link":"/portfolio/project-02"}]},{"label":"Blog","link":"/blog","children":[{"label":"Blog List","link":"/blog"},{"label":"Blog Post 1","link":"/blog/5-steps-to-create-marketing-plan"},{"label":"Blog Post 2","link":"/blog/10-content-proof-tips-to-catch-goofs"}]},{"label":"Contact","link":"/contact","children":0}]},"Mv":{"jY":{"f":"It’s Time to Pull in <br />a","c":" Professional"},"WL":"Adipisicing elit consequuntur odit accusamus, aspern loluptates ea consequuntur aspernatur fugiat. Lorem ipsum dolor sit amet.","GI":[{"label":"Homepage","link":"/"},{"label":"About","link":"about"},{"label":"Portfolio","link":"portfolio"},{"label":"Newsletter","link":"blog"},{"label":"Contact","link":"contact"}],"Ok":[{"label":"Terms","link":"#."},{"label":"Careers","link":"#."},{"label":"Privacy Policy","link":"#."},{"label":"Help Center","link":"#."},{"label":"Sitemap","link":"#."}],"JG":"© 2023 Lettery. All Rights Reserved.","WI":"Developed by: <a href=\\"https://themeforest.net/user/bslthemes/portfolio\\" class=\\"mil-hidden-trigger\\">bslthemes</a>","Md":"/img/hero/1.jpg","CR":{"W":["img/content/instagram-2/1.jpg","img/content/instagram-2/2.jpg","img/content/instagram-2/3.jpg","img/content/instagram-2/4.jpg","img/content/instagram-2/5.jpg","img/content/instagram-2/6.jpg"],"L":{"P":"Our Instagram","p":"https://instagram.com"}}},"Jx":{"D":"mil.design.inbox@mail.com","H":"+49 (055) 742 7X 84"},"xs":[{"link":"https://behance.net","icon":"fab fa-behance","title":"Behance"},{"link":"https://dribbble.com","icon":"fab fa-dribbble","title":"Dribbble"},{"link":"https://twitter.com","icon":"fab fa-twitter","title":"Twitter"},{"link":"https://instagram.com","icon":"fab fa-instagram","title":"Instagram"}]}');

/***/ })

};
;