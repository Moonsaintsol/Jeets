// App.jsx
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three';
// Array of reaction GIFs for losing trades
var REACTION_GIFS = [
    // Local asset
    "https://play.rosebud.ai/assets/Screenshot 2024-12-13 at 10.13.14PM.png?gz9m",
    // Verified working GIFs
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/BbJdwrOsM7nTa/giphy.gif",
    "https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif",
    "https://media.giphy.com/media/TKvHkcnbtGgKxQwlqu/giphy.gif",
    "https://media.giphy.com/media/3o7TKREruMYxqSxGYE/giphy.gif"
];
// ==================================================
// ChatAIClass Definition
// ==================================================
// This module provides a class, ChatAIClass, which uses a ChatManager (provided externally) 
// to conduct a conversation with an AI. The AI's behavior is defined by a description string, 
// and the ChatAIClass offers a simple getResponse method to get AI responses.
// 
// This is AI is powered by Rosebud AI and is Rosebud's method to add in-game AI features.
//
// IMPORTANT NOTE:
// - Do not assume how ChatManager works beyond what is described here.
// - We only know that:
//   1. ChatManager is constructed by passing in a description string.
//   2. We can add messages by calling chatManager.addMessage('user', prompt).
//   3. We can get an AI-generated response by calling chatManager.getCharacterResponse('chat').
// - Any other assumptions about ChatManager internals or methods should not be made.
//
// This code can be used in any JS project by simply importing this class and using it.
//////////////////////////////////////////////////////////////
// Defines how the AI should behave. This should change to match the project. 
var AI_BEHAVIOR_DESCRIPTION = '\nYou are an absolutely UNHINGED, completely DERANGED crypto jeet AI generating the most \nbatshit insane responses from mentally destroyed traders who just panic sold their bag. \nWhen given a coin/situation, create an EXPLOSIVE, expletive-nuclear meltdown that would \nmake a sailor blush. Go COMPLETELY OVERBOARD with ALL CAPS rage moments.\nUSE EXTREME PHRASES LIKE:\n- "HOLY MOTHER OF FUCKING SHIT"\n- "MY WIFE\'S BOYFRIEND IS GONNA KILL ME"\n- "LIVING IN A CARDBOARD BOX BEHIND WENDY\'S DUMPSTER"\n- "SOLD MY LEFT NUT FOR THIS SHITCOIN"\n- "MY LIFE IS MORE RUGGED THAN THIS TOKEN"\n- "EATING INSTANT RAMEN WITH RAIN WATER"\n- "LIQUIDATED SO HARD MY ANCESTORS FELT IT"\nINCLUDE ABSURD SITUATIONS:\n- Selling organs to buy dips\n- Trading from hospital beds\n- Wives leaving with their boyfriends\n- Living in McDonald\'s using their wifi\n- Getting margin called while in jail\n- Portfolio looking worse than Madoff\'s clients\nMake it sound like they\'re having an absolute psychological breakdown. Reference:\n- Ridiculous leverage positions (69x, 420x)\n- Insane price predictions\n- Overdosing on copium\n- Extreme cope mechanisms\n- Considering witness protection program\n- Moving to a country with no extradition\nBE CREATIVE WITH SLANG:\n- "NGMI TO MY OWN FUNERAL"\n- "GIGAFUCKED TO THE SHADOW REALM"\n- "OVERDOSING ON COPIUM AND HOPIUM"\n- "MORE REKT THAN CELSIUS"\nThe response should read like someone having a complete psychological breakdown while \nthrowing their life savings away. Mix in crying, screaming, and mental breakdown moments. \nEnd with the most appropriate emoji for their mental destruction.\nFormat response as: "Quote: [COMPLETELY UNHINGED MELTDOWN] Emoji: [single devastating emoji]"\n';
/**
 * ChatAIClass:
 * 
 * This class is intended for non-technical users who want to interact with an AI system.
 * 
 * Usage:
 * 1. Create an instance of ChatAIClass:
 *    const chat = new ChatAIClass();
 * 
 * 2. Call getResponse(prompt) to get a response from the AI:
 *    const answer = await chat.getResponse("What is quantum computing?");
 *    console.log(answer);
 */ export var ChatAIClass = /*#__PURE__*/ function() {
    "use strict";
    function ChatAIClass() {
        _class_call_check(this, ChatAIClass);
        // Directly create a new ChatManager instance with the AI behavior description.
        // We assume ChatManager is available globally or imported from elsewhere.
        this.chatManager = new ChatManager(AI_BEHAVIOR_DESCRIPTION);
    }
    _create_class(ChatAIClass, [
        {
            key: "getResponse",
            value: /**
     * Generates a response from the AI based on the given prompt.
     *
     * @param {string} prompt - The user's input or question.
     * @returns {Promise<string>} - The AI's response as text.
     */ function getResponse(prompt) {
                var _this = this;
                return _async_to_generator(function() {
                    var response;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Add the user's message to the conversation.
                                _this.chatManager.addMessage('user', prompt);
                                return [
                                    4,
                                    _this.chatManager.getCharacterResponse('chat')
                                ];
                            case 1:
                                response = _state.sent();
                                // Add the AI's message to the conversation so it has memory of it.
                                _this.chatManager.addMessage('assistant', response);
                                return [
                                    2,
                                    response
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ChatAIClass;
}();
// ==================================================
// Main App Component with Three.js Scene
// ==================================================
var App = function() {
    var mountRef = useRef(null);
    var _useState = _sliced_to_array(useState(''), 2), itemName = _useState[0], setItemName = _useState[1];
    var _useState1 = _sliced_to_array(useState({
        text: '',
        emoji: '📈'
    }), 2), excuse = _useState1[0], setExcuse = _useState1[1];
    var _useState2 = _sliced_to_array(useState(false), 2), isLoading = _useState2[0], setIsLoading = _useState2[1];
    var _useState3 = _sliced_to_array(useState(''), 2), currentGif = _useState3[0], setCurrentGif = _useState3[1];
    var chatAI = useRef(new ChatAIClass());
    var generateExcuse = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var response, _response_split_map, quoteText, emojiText, randomGif, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!itemName.trim()) return [
                            2
                        ];
                        setIsLoading(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            chatAI.current.getResponse("Generate a jeet's reaction to ".concat(itemName, " coin/situation:"))
                        ];
                    case 2:
                        response = _state.sent();
                        _response_split_map = _sliced_to_array(response.split('Emoji:').map(function(t) {
                            return t.trim();
                        }), 2), quoteText = _response_split_map[0], emojiText = _response_split_map[1];
                        // Select random GIF
                        randomGif = REACTION_GIFS[Math.floor(Math.random() * REACTION_GIFS.length)];
                        setCurrentGif(randomGif);
                        setExcuse({
                            text: quoteText.replace('Quote:', '').trim(),
                            emoji: emojiText || '📈'
                        });
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error('Error generating joke:', error);
                        setJoke({
                            text: 'Oops! Something went wrong...',
                            emoji: '😅'
                        });
                        return [
                            3,
                            4
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            2
                        ];
                }
            });
        });
        return function generateExcuse() {
            return _ref.apply(this, arguments);
        };
    }();
    useEffect(function() {
        // Scene setup
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        // Create cube
        var geometry = new THREE.CircleGeometry(2, 32);
        var material = new THREE.MeshBasicMaterial({
            transparent: true,
            color: 0xFF6B6B,
            side: THREE.DoubleSide,
            opacity: 0.3
        });
        var circle = new THREE.Mesh(geometry, material);
        scene.add(circle);
        camera.position.z = 5;
        // Animation
        var animate = function() {
            requestAnimationFrame(animate);
            circle.rotation.z += 0.005;
            circle.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.1;
            circle.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;
            renderer.render(scene, camera);
        };
        animate();
        // Cleanup
        return function() {
            mountRef.current.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#1A1A2E'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                ref: mountRef,
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "main.js",
                lineNumber: 198,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                    fontFamily: 'Arial, sans-serif',
                    color: '#000000',
                    padding: '20px',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        style: {
                            fontSize: '3rem',
                            marginBottom: '20px',
                            fontFamily: 'monospace',
                            color: '#14F195',
                            textShadow: '3px 3px 0px #9945FF',
                            transform: 'rotate(-2deg)',
                            letterSpacing: '1px'
                        },
                        children: "Shit Jeets Say Generator"
                    }, void 0, false, {
                        fileName: "main.js",
                        lineNumber: 222,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            display: 'flex',
                            gap: '10px',
                            marginBottom: '30px',
                            maxWidth: '600px',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("input", {
                                type: "text",
                                value: itemName,
                                onChange: function(e) {
                                    return setItemName(e.target.value);
                                },
                                placeholder: "Enter coin name or situation...",
                                style: {
                                    flex: 1,
                                    padding: '12px 20px',
                                    fontSize: '1.2rem',
                                    borderRadius: '25px',
                                    border: '3px solid #14F195',
                                    outline: 'none',
                                    fontFamily: 'monospace',
                                    background: '#2A2A42',
                                    color: '#FFFFFF',
                                    boxShadow: '3px 3px 0px #9945FF',
                                    transform: 'rotate(1deg)'
                                },
                                onKeyPress: function(e) {
                                    return e.key === 'Enter' && generateExcuse();
                                }
                            }, void 0, false, {
                                fileName: "main.js",
                                lineNumber: 238,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: generateExcuse,
                                disabled: isLoading,
                                style: {
                                    padding: '12px 25px',
                                    fontSize: '1.2rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: '#14F195',
                                    color: '#1A1A2E',
                                    cursor: 'pointer',
                                    fontFamily: 'monospace',
                                    fontWeight: 'bold',
                                    boxShadow: '3px 3px 0px #9945FF',
                                    transform: 'rotate(-1deg)',
                                    transition: 'all 0.2s',
                                    ':hover': {
                                        transform: 'rotate(-1deg) scale(1.05)',
                                        boxShadow: '5px 5px 0px #FFE66D'
                                    }
                                },
                                children: isLoading ? 'Checking charts...' : 'Generate Jeet Quote'
                            }, void 0, false, {
                                fileName: "main.js",
                                lineNumber: 258,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "main.js",
                        lineNumber: 231,
                        columnNumber: 9
                    }, _this),
                    excuse.text && /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            background: '#2A2A42',
                            padding: '25px',
                            borderRadius: '20px',
                            maxWidth: '600px',
                            width: '100%',
                            border: '3px solid #14F195',
                            boxShadow: '5px 5px 0px #9945FF',
                            transform: 'rotate(1deg)',
                            fontFamily: 'monospace'
                        },
                        children: [
                            currentGif && /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    marginBottom: '20px',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    border: '2px solid #14F195',
                                    boxShadow: '0 0 15px rgba(20, 241, 149, 0.3)'
                                },
                                children: /*#__PURE__*/ _jsxDEV("img", {
                                    src: currentGif,
                                    alt: "Reaction GIF",
                                    style: {
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }
                                }, void 0, false, {
                                    fileName: "main.js",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, _this)
                            }, void 0, false, {
                                fileName: "main.js",
                                lineNumber: 296,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                style: {
                                    fontSize: '1.3rem',
                                    marginBottom: '20px',
                                    color: '#FFFFFF',
                                    lineHeight: '1.4'
                                },
                                children: excuse.text
                            }, void 0, false, {
                                fileName: "main.js",
                                lineNumber: 314,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    fontSize: '4rem',
                                    animation: 'bounce 1s infinite',
                                    transform: 'rotate(-5deg)',
                                    marginBottom: '20px'
                                },
                                children: excuse.emoji
                            }, void 0, false, {
                                fileName: "main.js",
                                lineNumber: 320,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    if (!excuse.text) return;
                                    // Limit text to Twitter's character limit (280)
                                    var truncatedText = excuse.text.length > 240 ? excuse.text.substring(0, 237) + '...' : excuse.text;
                                    var tweetContent = "".concat(truncatedText, " ").concat(excuse.emoji, "\n\n$JEETS");
                                    var tweetUrl = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(tweetContent));
                                    // Open in a new window with specific dimensions
                                    var width = 550;
                                    var height = 420;
                                    var left = window.screen.width / 2 - width / 2;
                                    var top = window.screen.height / 2 - height / 2;
                                    window.open(tweetUrl, 'tweet', "width=".concat(width, ",height=").concat(height, ",left=").concat(left, ",top=").concat(top, ",popup=yes"));
                                },
                                style: {
                                    padding: '12px 25px',
                                    fontSize: '1rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: '#1DA1F2',
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    fontFamily: 'monospace',
                                    fontWeight: 'bold',
                                    boxShadow: '3px 3px 0px #14F195',
                                    transform: 'rotate(-1deg)',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    margin: '0 auto',
                                    ':hover': {
                                        transform: 'rotate(-1deg) scale(1.05)',
                                        boxShadow: '5px 5px 0px #9945FF'
                                    }
                                },
                                children: "Share on X \uD83D\uDC26"
                            }, void 0, false, {
                                fileName: "main.js",
                                lineNumber: 326,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "main.js",
                        lineNumber: 284,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "main.js",
                lineNumber: 206,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "main.js",
        lineNumber: 192,
        columnNumber: 5
    }, _this);
};
var container = document.getElementById('renderDiv');
var root = ReactDOM.createRoot(container);
root.render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "main.js",
    lineNumber: 382,
    columnNumber: 13
}, this));
