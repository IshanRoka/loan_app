/*! Summernote v0.9.0 | (c) 2013~ Hackerwins and contributors | MIT license */
!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e(require("jquery"));
    else if ("function" == typeof define && define.amd) define(["jquery"], e);
    else {
        var o = "object" == typeof exports ? e(require("jquery")) : e(t.jQuery);
        for (var n in o) ("object" == typeof exports ? exports : t)[n] = o[n];
    }
})(self, (t) =>
    (() => {
        "use strict";
        var e = {
                7e3: (t, e, o) => {
                    var n = o(8938),
                        i = o.n(n);
                    (i().summernote = i().summernote || { lang: {} }),
                        i().extend(!0, i().summernote.lang, {
                            "en-US": {
                                font: {
                                    bold: "Bold",
                                    italic: "Italic",
                                    underline: "Underline",
                                    clear: "Remove Font Style",
                                    height: "Line Height",
                                    name: "Font Family",
                                    strikethrough: "Strikethrough",
                                    subscript: "Subscript",
                                    superscript: "Superscript",
                                    size: "Font Size",
                                    sizeunit: "Font Size Unit",
                                },
                                image: {
                                    image: "Picture",
                                    insert: "Insert Image",
                                    resizeFull: "Resize full",
                                    resizeHalf: "Resize half",
                                    resizeQuarter: "Resize quarter",
                                    resizeNone: "Original size",
                                    floatLeft: "Float Left",
                                    floatRight: "Float Right",
                                    floatNone: "Remove float",
                                    shapeRounded: "Shape: Rounded",
                                    shapeCircle: "Shape: Circle",
                                    shapeThumbnail: "Shape: Thumbnail",
                                    shapeNone: "Shape: None",
                                    dragImageHere: "Drag image or text here",
                                    dropImage: "Drop image or Text",
                                    selectFromFiles: "Select from files",
                                    maximumFileSize: "Maximum file size",
                                    maximumFileSizeError:
                                        "Maximum file size exceeded.",
                                    url: "Image URL",
                                    remove: "Remove Image",
                                    original: "Original",
                                },
                                video: {
                                    video: "Video",
                                    videoLink: "Video Link",
                                    insert: "Insert Video",
                                    url: "Video URL",
                                    providers:
                                        "(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)",
                                },
                                link: {
                                    link: "Link",
                                    insert: "Insert Link",
                                    unlink: "Unlink",
                                    edit: "Edit",
                                    textToDisplay: "Text to display",
                                    url: "To what URL should this link go?",
                                    openInNewWindow: "Open in new window",
                                },
                                table: {
                                    table: "Table",
                                    addRowAbove: "Add row above",
                                    addRowBelow: "Add row below",
                                    addColLeft: "Add column left",
                                    addColRight: "Add column right",
                                    delRow: "Delete row",
                                    delCol: "Delete column",
                                    delTable: "Delete table",
                                },
                                hr: { insert: "Insert Horizontal Rule" },
                                style: {
                                    style: "Style",
                                    p: "Normal",
                                    blockquote: "Quote",
                                    pre: "Code",
                                    h1: "Header 1",
                                    h2: "Header 2",
                                    h3: "Header 3",
                                    h4: "Header 4",
                                    h5: "Header 5",
                                    h6: "Header 6",
                                },
                                lists: {
                                    unordered: "Unordered list",
                                    ordered: "Ordered list",
                                },
                                options: {
                                    help: "Help",
                                    fullscreen: "Full Screen",
                                    codeview: "Code View",
                                },
                                paragraph: {
                                    paragraph: "Paragraph",
                                    outdent: "Outdent",
                                    indent: "Indent",
                                    left: "Align left",
                                    center: "Align center",
                                    right: "Align right",
                                    justify: "Justify full",
                                },
                                color: {
                                    recent: "Recent Color",
                                    more: "More Color",
                                    background: "Background Color",
                                    foreground: "Text Color",
                                    transparent: "Transparent",
                                    setTransparent: "Set transparent",
                                    reset: "Reset",
                                    resetToDefault: "Reset to default",
                                    cpSelect: "Select",
                                },
                                shortcut: {
                                    shortcuts: "Keyboard shortcuts",
                                    close: "Close",
                                    textFormatting: "Text formatting",
                                    action: "Action",
                                    paragraphFormatting: "Paragraph formatting",
                                    documentStyle: "Document Style",
                                    extraKeys: "Extra keys",
                                },
                                help: {
                                    escape: "Escape",
                                    insertParagraph: "Insert Paragraph",
                                    undo: "Undo the last command",
                                    redo: "Redo the last command",
                                    tab: "Tab",
                                    untab: "Untab",
                                    bold: "Set a bold style",
                                    italic: "Set a italic style",
                                    underline: "Set a underline style",
                                    strikethrough: "Set a strikethrough style",
                                    removeFormat: "Clean a style",
                                    justifyLeft: "Set left align",
                                    justifyCenter: "Set center align",
                                    justifyRight: "Set right align",
                                    justifyFull: "Set full align",
                                    insertUnorderedList:
                                        "Toggle unordered list",
                                    insertOrderedList: "Toggle ordered list",
                                    outdent: "Outdent on current paragraph",
                                    indent: "Indent on current paragraph",
                                    formatPara:
                                        "Change current block's format as a paragraph(P tag)",
                                    formatH1:
                                        "Change current block's format as H1",
                                    formatH2:
                                        "Change current block's format as H2",
                                    formatH3:
                                        "Change current block's format as H3",
                                    formatH4:
                                        "Change current block's format as H4",
                                    formatH5:
                                        "Change current block's format as H5",
                                    formatH6:
                                        "Change current block's format as H6",
                                    insertHorizontalRule:
                                        "Insert horizontal rule",
                                    "linkDialog.show": "Show Link Dialog",
                                },
                                history: { undo: "Undo", redo: "Redo" },
                                specialChar: {
                                    specialChar: "SPECIAL CHARACTERS",
                                    select: "Select Special characters",
                                },
                                output: { noSelection: "No Selection Made!" },
                            },
                        });
                },
                8938: (e) => {
                    e.exports = t;
                },
            },
            o = {};
        function n(t) {
            var i = o[t];
            if (void 0 !== i) return i.exports;
            var r = (o[t] = { exports: {} });
            return e[t](r, r.exports, n), r.exports;
        }
        (n.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return n.d(e, { a: e }), e;
        }),
            (n.d = (t, e) => {
                for (var o in e)
                    n.o(e, o) &&
                        !n.o(t, o) &&
                        Object.defineProperty(t, o, {
                            enumerable: !0,
                            get: e[o],
                        });
            }),
            (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e));
        var i = n(8938),
            r = n.n(i),
            a =
                (n(7e3),
                ["sans-serif", "serif", "monospace", "cursive", "fantasy"]);
        function s(t) {
            return -1 === r().inArray(t.toLowerCase(), a)
                ? "'".concat(t, "'")
                : t;
        }
        var l,
            c = navigator.userAgent,
            u = /MSIE|Trident/i.test(c);
        if (u) {
            var d = /MSIE (\d+[.]\d+)/.exec(c);
            d && (l = parseFloat(d[1])),
                (d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c)) &&
                    (l = parseFloat(d[1]));
        }
        var f = /Edge\/\d+/.test(c),
            h =
                "ontouchstart" in window ||
                navigator.MaxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0,
            p = u
                ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted"
                : "input";
        const m = {
            isMac: navigator.appVersion.indexOf("Mac") > -1,
            isMSIE: u,
            isEdge: f,
            isFF: !f && /firefox/i.test(c),
            isPhantom: /PhantomJS/i.test(c),
            isWebkit: !f && /webkit/i.test(c),
            isChrome: !f && /chrome/i.test(c),
            isSafari: !f && /safari/i.test(c) && !/chrome/i.test(c),
            browserVersion: l,
            isSupportTouch: h,
            isFontInstalled: (function () {
                var t = document.createElement("canvas"),
                    e = t.getContext("2d", { willReadFrequently: !0 });
                function o(t, o) {
                    return (
                        e.clearRect(0, 0, 40, 20),
                        (e.font = "20px " + s(t) + ', "' + o + '"'),
                        e.fillText("mw", 20, 10),
                        e.getImageData(0, 0, 40, 20).data.join("")
                    );
                }
                return (
                    (t.width = 40),
                    (t.height = 20),
                    (e.textAlign = "center"),
                    (e.fillStyle = "black"),
                    (e.textBaseline = "middle"),
                    function (t) {
                        var e =
                            "Comic Sans MS" === t
                                ? "Courier New"
                                : "Comic Sans MS";
                        return o(e, e) !== o(t, e);
                    }
                );
            })(),
            isW3CRangeSupport: !!document.createRange,
            inputEventName: p,
            genericFontFamilies: a,
            validFontName: s,
        };
        var v = 0;
        const g = {
            eq: function (t) {
                return function (e) {
                    return t === e;
                };
            },
            eq2: function (t, e) {
                return t === e;
            },
            peq2: function (t) {
                return function (e, o) {
                    return e[t] === o[t];
                };
            },
            ok: function () {
                return !0;
            },
            fail: function () {
                return !1;
            },
            self: function (t) {
                return t;
            },
            not: function (t) {
                return function () {
                    return !t.apply(t, arguments);
                };
            },
            and: function (t, e) {
                return function (o) {
                    return t(o) && e(o);
                };
            },
            invoke: function (t, e) {
                return function () {
                    return t[e].apply(t, arguments);
                };
            },
            resetUniqueId: function () {
                v = 0;
            },
            uniqueId: function (t) {
                var e = ++v + "";
                return t ? t + e : e;
            },
            rect2bnd: function (t) {
                var e = r()(document);
                return {
                    top: t.top + e.scrollTop(),
                    left: t.left + e.scrollLeft(),
                    width: t.right - t.left,
                    height: t.bottom - t.top,
                };
            },
            invertObject: function (t) {
                var e = {};
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[t[o]] = o);
                return e;
            },
            namespaceToCamel: function (t, e) {
                return (
                    (e = e || "") +
                    t
                        .split(".")
                        .map(function (t) {
                            return (
                                t.substring(0, 1).toUpperCase() + t.substring(1)
                            );
                        })
                        .join("")
                );
            },
            debounce: function (t, e, o) {
                var n;
                return function () {
                    var i = this,
                        r = arguments,
                        a = o && !n;
                    clearTimeout(n),
                        (n = setTimeout(function () {
                            (n = null), o || t.apply(i, r);
                        }, e)),
                        a && t.apply(i, r);
                };
            },
            isValidUrl: function (t) {
                return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
                    t
                );
            },
        };
        function b(t) {
            return t[0];
        }
        function y(t) {
            return t[t.length - 1];
        }
        function k(t) {
            return t.slice(1);
        }
        function w(t, e) {
            if (t && t.length && e) {
                if (t.indexOf) return -1 !== t.indexOf(e);
                if (t.contains) return t.contains(e);
            }
            return !1;
        }
        const C = {
            head: b,
            last: y,
            initial: function (t) {
                return t.slice(0, t.length - 1);
            },
            tail: k,
            prev: function (t, e) {
                if (t && t.length && e) {
                    var o = t.indexOf(e);
                    return -1 === o ? null : t[o - 1];
                }
                return null;
            },
            next: function (t, e) {
                if (t && t.length && e) {
                    var o = t.indexOf(e);
                    return -1 === o ? null : t[o + 1];
                }
                return null;
            },
            find: function (t, e) {
                for (var o = 0, n = t.length; o < n; o++) {
                    var i = t[o];
                    if (e(i)) return i;
                }
            },
            contains: w,
            all: function (t, e) {
                for (var o = 0, n = t.length; o < n; o++)
                    if (!e(t[o])) return !1;
                return !0;
            },
            sum: function (t, e) {
                return (
                    (e = e || g.self),
                    t.reduce(function (t, o) {
                        return t + e(o);
                    }, 0)
                );
            },
            from: function (t) {
                for (var e = [], o = t.length, n = -1; ++n < o; ) e[n] = t[n];
                return e;
            },
            isEmpty: function (t) {
                return !t || !t.length;
            },
            clusterBy: function (t, e) {
                return t.length
                    ? k(t).reduce(
                          function (t, o) {
                              var n = y(t);
                              return (
                                  e(y(n), o)
                                      ? (n[n.length] = o)
                                      : (t[t.length] = [o]),
                                  t
                              );
                          },
                          [[b(t)]]
                      )
                    : [];
            },
            compact: function (t) {
                for (var e = [], o = 0, n = t.length; o < n; o++)
                    t[o] && e.push(t[o]);
                return e;
            },
            unique: function (t) {
                for (var e = [], o = 0, n = t.length; o < n; o++)
                    w(e, t[o]) || e.push(t[o]);
                return e;
            },
        };
        var S = String.fromCharCode(160);
        function x(t) {
            return t && r()(t).hasClass("note-editable");
        }
        function T(t) {
            return (
                (t = t.toUpperCase()),
                function (e) {
                    return e && e.nodeName.toUpperCase() === t;
                }
            );
        }
        function E(t) {
            return t && 3 === t.nodeType;
        }
        function P(t) {
            return (
                t &&
                /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(
                    t.nodeName.toUpperCase()
                )
            );
        }
        function N(t) {
            return (
                !x(t) &&
                t &&
                /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase())
            );
        }
        var $ = T("PRE"),
            I = T("LI");
        var R = T("TABLE"),
            A = T("DATA");
        function L(t) {
            return !(B(t) || F(t) || D(t) || N(t) || R(t) || j(t) || A(t));
        }
        function F(t) {
            return t && /^UL|^OL/.test(t.nodeName.toUpperCase());
        }
        var D = T("HR");
        function H(t) {
            return t && /^TD|^TH/.test(t.nodeName.toUpperCase());
        }
        var j = T("BLOCKQUOTE");
        function B(t) {
            return H(t) || j(t) || x(t);
        }
        var O = T("A");
        var z = T("BODY");
        var M = m.isMSIE && m.browserVersion < 11 ? "&nbsp;" : "<br>";
        function U(t) {
            return E(t) ? t.nodeValue.length : t ? t.childNodes.length : 0;
        }
        function W(t) {
            var e = U(t);
            return (
                0 === e ||
                (!E(t) && 1 === e && t.innerHTML === M) ||
                !(!C.all(t.childNodes, E) || "" !== t.innerHTML)
            );
        }
        function K(t) {
            P(t) || U(t) || (t.innerHTML = M);
        }
        function q(t, e) {
            for (; t; ) {
                if (e(t)) return t;
                if (x(t)) break;
                t = t.parentNode;
            }
            return null;
        }
        function V(t, e) {
            e = e || g.fail;
            var o = [];
            return (
                q(t, function (t) {
                    return x(t) || o.push(t), e(t);
                }),
                o
            );
        }
        function _(t, e) {
            e = e || g.fail;
            for (var o = []; t && !e(t); ) o.push(t), (t = t.nextSibling);
            return o;
        }
        function G(t, e) {
            var o = e.nextSibling,
                n = e.parentNode;
            return o ? n.insertBefore(t, o) : n.appendChild(t), t;
        }
        function Z(t, e, o) {
            return (
                r().each(e, function (e, n) {
                    !o &&
                        I(t) &&
                        null === t.firstChild &&
                        F(n) &&
                        t.appendChild(ut("br")),
                        t.appendChild(n);
                }),
                t
            );
        }
        function Y(t) {
            return 0 === t.offset;
        }
        function X(t) {
            return t.offset === U(t.node);
        }
        function Q(t) {
            return Y(t) || X(t);
        }
        function J(t, e) {
            for (; t && t !== e; ) {
                if (0 !== et(t)) return !1;
                t = t.parentNode;
            }
            return !0;
        }
        function tt(t, e) {
            if (!e) return !1;
            for (; t && t !== e; ) {
                if (et(t) !== U(t.parentNode) - 1) return !1;
                t = t.parentNode;
            }
            return !0;
        }
        function et(t) {
            for (var e = 0; (t = t.previousSibling); ) e += 1;
            return e;
        }
        function ot(t) {
            return !!(t && t.childNodes && t.childNodes.length);
        }
        function nt(t, e) {
            var o, n;
            if (0 === t.offset) {
                if (x(t.node)) return null;
                (o = t.node.parentNode), (n = et(t.node));
            } else
                ot(t.node)
                    ? (n = U((o = t.node.childNodes[t.offset - 1])))
                    : ((o = t.node), (n = e ? 0 : t.offset - 1));
            return { node: o, offset: n };
        }
        function it(t, e) {
            var o, n;
            if (U(t.node) === t.offset) {
                if (x(t.node)) return null;
                var i = at(t.node);
                i
                    ? ((o = i), (n = 0))
                    : ((o = t.node.parentNode), (n = et(t.node) + 1));
            } else
                ot(t.node)
                    ? ((o = t.node.childNodes[t.offset]), (n = 0))
                    : ((o = t.node), (n = e ? U(t.node) : t.offset + 1));
            return { node: o, offset: n };
        }
        function rt(t, e) {
            var o,
                n = 0;
            if (U(t.node) === t.offset) {
                if (x(t.node)) return null;
                (o = t.node.parentNode),
                    (n = et(t.node) + 1),
                    x(o) && ((o = t.node.nextSibling), (n = 0));
            } else
                ot(t.node)
                    ? ((o = t.node.childNodes[t.offset]), (n = 0))
                    : ((o = t.node), (n = e ? U(t.node) : t.offset + 1));
            return { node: o, offset: n };
        }
        function at(t) {
            if (t.nextSibling && t.parent === t.nextSibling.parent)
                return E(t.nextSibling) ? t.nextSibling : at(t.nextSibling);
        }
        function st(t, e) {
            return t.node === e.node && t.offset === e.offset;
        }
        function lt(t, e) {
            var o = e && e.isSkipPaddingBlankHTML,
                n = e && e.isNotSplitEdgePoint,
                i = e && e.isDiscardEmptySplits;
            if ((i && (o = !0), Q(t) && (E(t.node) || n))) {
                if (Y(t)) return t.node;
                if (X(t)) return t.node.nextSibling;
            }
            if (E(t.node)) return t.node.splitText(t.offset);
            var r = _(t.node.childNodes[t.offset]),
                a = G(t.node.cloneNode(!1), t.node);
            return (
                Z(a, r),
                o || (K(t.node), K(a)),
                i && (W(t.node) && dt(t.node), W(a))
                    ? (dt(a), t.node.nextSibling)
                    : a
            );
        }
        function ct(t, e, o) {
            var n = V(e.node, g.eq(t));
            if (!n.length) return null;
            if (1 === n.length) return lt(e, o);
            if (n.length > 2) {
                var i = n.slice(0, n.length - 1).find(function (t) {
                    return t.nextSibling;
                });
                if (i && 0 != e.offset && X(e)) {
                    var r,
                        a = i.nextSibling;
                    1 == a.nodeType
                        ? ((n = V((r = a.childNodes[0]), g.eq(t))),
                          (e = { node: r, offset: 0 }))
                        : 3 != a.nodeType ||
                          a.data.match(/[\n\r]/g) ||
                          ((n = V((r = a), g.eq(t))),
                          (e = { node: r, offset: 0 }));
                }
            }
            return n.reduce(function (t, n) {
                return (
                    t === e.node && (t = lt(e, o)),
                    lt({ node: n, offset: t ? et(t) : U(n) }, o)
                );
            });
        }
        function ut(t) {
            return document.createElement(t);
        }
        function dt(t, e) {
            if (t && t.parentNode) {
                if (t.removeNode) return t.removeNode(e);
                var o = t.parentNode;
                if (!e) {
                    for (var n = [], i = 0, r = t.childNodes.length; i < r; i++)
                        n.push(t.childNodes[i]);
                    for (var a = 0, s = n.length; a < s; a++)
                        o.insertBefore(n[a], t);
                }
                o.removeChild(t);
            }
        }
        var ft = T("TEXTAREA");
        function ht(t, e) {
            var o = ft(t[0]) ? t.val() : t.html();
            return e ? o.replace(/[\n\r]/g, "") : o;
        }
        const pt = {
            NBSP_CHAR: S,
            ZERO_WIDTH_NBSP_CHAR: "\ufeff",
            blank: M,
            emptyPara: "<p>".concat(M, "</p>"),
            makePredByNodeName: T,
            isEditable: x,
            isControlSizing: function (t) {
                return t && r()(t).hasClass("note-control-sizing");
            },
            isText: E,
            isElement: function (t) {
                return t && 1 === t.nodeType;
            },
            isVoid: P,
            isPara: N,
            isPurePara: function (t) {
                return N(t) && !I(t);
            },
            isHeading: function (t) {
                return t && /^H[1-7]/.test(t.nodeName.toUpperCase());
            },
            isInline: L,
            isBlock: g.not(L),
            isBodyInline: function (t) {
                return L(t) && !q(t, N);
            },
            isBody: z,
            isParaInline: function (t) {
                return L(t) && !!q(t, N);
            },
            isPre: $,
            isList: F,
            isTable: R,
            isData: A,
            isCell: H,
            isBlockquote: j,
            isBodyContainer: B,
            isAnchor: O,
            isDiv: T("DIV"),
            isLi: I,
            isBR: T("BR"),
            isSpan: T("SPAN"),
            isB: T("B"),
            isU: T("U"),
            isS: T("S"),
            isI: T("I"),
            isImg: T("IMG"),
            isTextarea: ft,
            deepestChildIsEmpty: function (t) {
                do {
                    if (
                        null === t.firstElementChild ||
                        "" === t.firstElementChild.innerHTML
                    )
                        break;
                } while ((t = t.firstElementChild));
                return W(t);
            },
            isEmpty: W,
            isEmptyAnchor: g.and(O, W),
            isClosestSibling: function (t, e) {
                return t.nextSibling === e || t.previousSibling === e;
            },
            withClosestSiblings: function (t, e) {
                e = e || g.ok;
                var o = [];
                return (
                    t.previousSibling &&
                        e(t.previousSibling) &&
                        o.push(t.previousSibling),
                    o.push(t),
                    t.nextSibling && e(t.nextSibling) && o.push(t.nextSibling),
                    o
                );
            },
            nodeLength: U,
            isLeftEdgePoint: Y,
            isRightEdgePoint: X,
            isEdgePoint: Q,
            isLeftEdgeOf: J,
            isRightEdgeOf: tt,
            isLeftEdgePointOf: function (t, e) {
                return Y(t) && J(t.node, e);
            },
            isRightEdgePointOf: function (t, e) {
                return X(t) && tt(t.node, e);
            },
            prevPoint: nt,
            nextPoint: it,
            nextPointWithEmptyNode: rt,
            isSamePoint: st,
            isVisiblePoint: function (t) {
                if (E(t.node) || !ot(t.node) || W(t.node)) return !0;
                var e = t.node.childNodes[t.offset - 1],
                    o = t.node.childNodes[t.offset];
                return !(((e && !P(e)) || (o && !P(o))) && !R(o));
            },
            prevPointUntil: function (t, e) {
                for (; t; ) {
                    if (e(t)) return t;
                    t = nt(t);
                }
                return null;
            },
            nextPointUntil: function (t, e) {
                for (; t; ) {
                    if (e(t)) return t;
                    t = it(t);
                }
                return null;
            },
            isCharPoint: function (t) {
                if (!E(t.node)) return !1;
                var e = t.node.nodeValue.charAt(t.offset - 1);
                return e && " " !== e && e !== S;
            },
            isSpacePoint: function (t) {
                if (!E(t.node)) return !1;
                var e = t.node.nodeValue.charAt(t.offset - 1);
                return " " === e || e === S;
            },
            walkPoint: function (t, e, o, n) {
                for (var i = t; i && i.node && (o(i), !st(i, e)); ) {
                    i = rt(i, n && t.node !== i.node && e.node !== i.node);
                }
            },
            ancestor: q,
            singleChildAncestor: function (t, e) {
                for (t = t.parentNode; t && 1 === U(t); ) {
                    if (e(t)) return t;
                    if (x(t)) break;
                    t = t.parentNode;
                }
                return null;
            },
            listAncestor: V,
            lastAncestor: function (t, e) {
                var o = V(t);
                return C.last(o.filter(e));
            },
            listNext: _,
            listPrev: function (t, e) {
                e = e || g.fail;
                for (var o = []; t && !e(t); )
                    o.push(t), (t = t.previousSibling);
                return o;
            },
            listDescendant: function (t, e) {
                var o = [];
                return (
                    (e = e || g.ok),
                    (function n(i) {
                        t !== i && e(i) && o.push(i);
                        for (var r = 0, a = i.childNodes.length; r < a; r++)
                            n(i.childNodes[r]);
                    })(t),
                    o
                );
            },
            commonAncestor: function (t, e) {
                for (var o = V(t), n = e; n; n = n.parentNode)
                    if (o.indexOf(n) > -1) return n;
                return null;
            },
            wrap: function (t, e) {
                var o = t.parentNode,
                    n = r()("<" + e + ">")[0];
                return o.insertBefore(n, t), n.appendChild(t), n;
            },
            insertAfter: G,
            appendChildNodes: Z,
            position: et,
            hasChildren: ot,
            makeOffsetPath: function (t, e) {
                return V(e, g.eq(t)).map(et).reverse();
            },
            fromOffsetPath: function (t, e) {
                for (var o = t, n = 0, i = e.length; n < i; n++)
                    o =
                        o.childNodes.length <= e[n]
                            ? o.childNodes[o.childNodes.length - 1]
                            : o.childNodes[e[n]];
                return o;
            },
            splitTree: ct,
            splitPoint: function (t, e) {
                var o,
                    n,
                    i = e ? N : B,
                    r = V(t.node, i),
                    a = C.last(r) || t.node;
                i(a)
                    ? ((o = r[r.length - 2]), (n = a))
                    : (n = (o = a).parentNode);
                var s =
                    o &&
                    ct(o, t, {
                        isSkipPaddingBlankHTML: e,
                        isNotSplitEdgePoint: e,
                    });
                return (
                    s || n !== t.node || (s = t.node.childNodes[t.offset]),
                    { rightNode: s, container: n }
                );
            },
            create: ut,
            createText: function (t) {
                return document.createTextNode(t);
            },
            remove: dt,
            removeWhile: function (t, e) {
                for (; t && !x(t) && e(t); ) {
                    var o = t.parentNode;
                    dt(t), (t = o);
                }
            },
            replace: function (t, e) {
                if (t.nodeName.toUpperCase() === e.toUpperCase()) return t;
                var o = ut(e);
                return (
                    t.style.cssText && (o.style.cssText = t.style.cssText),
                    Z(o, C.from(t.childNodes)),
                    G(o, t),
                    dt(t),
                    o
                );
            },
            html: function (t, e) {
                var o = ht(t);
                if (e) {
                    o = (o = o.replace(
                        /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g,
                        function (t, e, o) {
                            o = o.toUpperCase();
                            var n =
                                    /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(o) &&
                                    !!e,
                                i =
                                    /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(
                                        o
                                    );
                            return t + (n || i ? "\n" : "");
                        }
                    )).trim();
                }
                return o;
            },
            value: ht,
            posFromPlaceholder: function (t) {
                var e = r()(t),
                    o = e.offset(),
                    n = e.outerHeight(!0);
                return { left: o.left, top: o.top + n };
            },
            attachEvents: function (t, e) {
                Object.keys(e).forEach(function (o) {
                    t.on(o, e[o]);
                });
            },
            detachEvents: function (t, e) {
                Object.keys(e).forEach(function (o) {
                    t.off(o, e[o]);
                });
            },
            isCustomStyleTag: function (t) {
                return t && !E(t) && C.contains(t.classList, "note-styletag");
            },
        };
        function mt(t) {
            return (
                (mt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                mt(t)
            );
        }
        function vt(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, gt(n.key), n);
            }
        }
        function gt(t) {
            var e = (function (t, e) {
                if ("object" != mt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != mt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == mt(e) ? e : e + "";
        }
        var bt = (function () {
            return (
                (t = function t(e, o) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.$note = e),
                        (this.memos = {}),
                        (this.modules = {}),
                        (this.layoutInfo = {}),
                        (this.options = r().extend(!0, {}, o)),
                        (r().summernote.ui = r().summernote.ui_template(
                            this.options
                        )),
                        (this.ui = r().summernote.ui),
                        this.initialize();
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            return (
                                (this.layoutInfo = this.ui.createLayout(
                                    this.$note
                                )),
                                this._initialize(),
                                this.$note.hide(),
                                this
                            );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this._destroy(),
                                this.$note.removeData("summernote"),
                                this.ui.removeLayout(
                                    this.$note,
                                    this.layoutInfo
                                );
                        },
                    },
                    {
                        key: "reset",
                        value: function () {
                            var t = this.isDisabled();
                            this.code(pt.emptyPara),
                                this._destroy(),
                                this._initialize(),
                                t && this.disable();
                        },
                    },
                    {
                        key: "_initialize",
                        value: function () {
                            var t = this;
                            (this.options.id = g.uniqueId(r().now())),
                                (this.options.container =
                                    this.options.container ||
                                    this.layoutInfo.editor);
                            var e = r().extend({}, this.options.buttons);
                            Object.keys(e).forEach(function (o) {
                                t.memo("button." + o, e[o]);
                            });
                            var o = r().extend(
                                {},
                                this.options.modules,
                                r().summernote.plugins || {}
                            );
                            Object.keys(o).forEach(function (e) {
                                t.module(e, o[e], !0);
                            }),
                                Object.keys(this.modules).forEach(function (e) {
                                    t.initializeModule(e);
                                });
                        },
                    },
                    {
                        key: "_destroy",
                        value: function () {
                            var t = this;
                            Object.keys(this.modules)
                                .reverse()
                                .forEach(function (e) {
                                    t.removeModule(e);
                                }),
                                Object.keys(this.memos).forEach(function (e) {
                                    t.removeMemo(e);
                                }),
                                this.triggerEvent("destroy", this);
                        },
                    },
                    {
                        key: "code",
                        value: function (t) {
                            var e = this.invoke("codeview.isActivated");
                            if (void 0 === t)
                                return (
                                    this.invoke("codeview.sync"),
                                    e
                                        ? this.layoutInfo.codable.val()
                                        : this.layoutInfo.editable.html()
                                );
                            e
                                ? this.invoke("codeview.sync", t)
                                : this.layoutInfo.editable.html(t),
                                this.$note.val(t),
                                this.triggerEvent(
                                    "change",
                                    t,
                                    this.layoutInfo.editable
                                );
                        },
                    },
                    {
                        key: "isDisabled",
                        value: function () {
                            return (
                                "false" ===
                                this.layoutInfo.editable.attr("contenteditable")
                            );
                        },
                    },
                    {
                        key: "enable",
                        value: function () {
                            this.layoutInfo.editable.attr(
                                "contenteditable",
                                !0
                            ),
                                this.invoke("toolbar.activate", !0),
                                this.triggerEvent("disable", !1),
                                (this.options.editing = !0);
                        },
                    },
                    {
                        key: "disable",
                        value: function () {
                            this.invoke("codeview.isActivated") &&
                                this.invoke("codeview.deactivate"),
                                this.layoutInfo.editable.attr(
                                    "contenteditable",
                                    !1
                                ),
                                (this.options.editing = !1),
                                this.invoke("toolbar.deactivate", !0),
                                this.triggerEvent("disable", !0);
                        },
                    },
                    {
                        key: "triggerEvent",
                        value: function () {
                            var t = C.head(arguments),
                                e = C.tail(C.from(arguments)),
                                o =
                                    this.options.callbacks[
                                        g.namespaceToCamel(t, "on")
                                    ];
                            o && o.apply(this.$note[0], e),
                                this.$note.trigger("summernote." + t, e);
                        },
                    },
                    {
                        key: "initializeModule",
                        value: function (t) {
                            var e = this.modules[t];
                            (e.shouldInitialize = e.shouldInitialize || g.ok),
                                e.shouldInitialize() &&
                                    (e.initialize && e.initialize(),
                                    e.events &&
                                        pt.attachEvents(this.$note, e.events));
                        },
                    },
                    {
                        key: "module",
                        value: function (t, e, o) {
                            if (1 === arguments.length) return this.modules[t];
                            (this.modules[t] = new e(this)),
                                o || this.initializeModule(t);
                        },
                    },
                    {
                        key: "removeModule",
                        value: function (t) {
                            var e = this.modules[t];
                            e.shouldInitialize() &&
                                (e.events &&
                                    pt.detachEvents(this.$note, e.events),
                                e.destroy && e.destroy()),
                                delete this.modules[t];
                        },
                    },
                    {
                        key: "memo",
                        value: function (t, e) {
                            if (1 === arguments.length) return this.memos[t];
                            this.memos[t] = e;
                        },
                    },
                    {
                        key: "removeMemo",
                        value: function (t) {
                            this.memos[t] &&
                                this.memos[t].destroy &&
                                this.memos[t].destroy(),
                                delete this.memos[t];
                        },
                    },
                    {
                        key: "createInvokeHandlerAndUpdateState",
                        value: function (t, e) {
                            var o = this;
                            return function (n) {
                                o.createInvokeHandler(t, e)(n),
                                    o.invoke("buttons.updateCurrentStyle");
                            };
                        },
                    },
                    {
                        key: "createInvokeHandler",
                        value: function (t, e) {
                            var o = this;
                            return function (n) {
                                n.preventDefault();
                                var i = r()(n.target);
                                o.invoke(
                                    t,
                                    e ||
                                        i.closest("[data-value]").data("value"),
                                    i
                                );
                            };
                        },
                    },
                    {
                        key: "invoke",
                        value: function () {
                            var t = C.head(arguments),
                                e = C.tail(C.from(arguments)),
                                o = t.split("."),
                                n = o.length > 1,
                                i = n && C.head(o),
                                r = n ? C.last(o) : C.head(o),
                                a = this.modules[i || "editor"];
                            return !i && this[r]
                                ? this[r].apply(this, e)
                                : a && a[r] && a.shouldInitialize()
                                ? a[r].apply(a, e)
                                : void 0;
                        },
                    },
                ]),
                e && vt(t.prototype, e),
                o && vt(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function yt(t) {
            return (
                (yt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                yt(t)
            );
        }
        function kt(t) {
            return (
                (kt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                kt(t)
            );
        }
        function wt(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Ct(n.key), n);
            }
        }
        function Ct(t) {
            var e = (function (t, e) {
                if ("object" != kt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != kt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == kt(e) ? e : e + "";
        }
        function St(t, e) {
            var o,
                n,
                i = t.parentElement(),
                r = document.body.createTextRange(),
                a = C.from(i.childNodes);
            for (o = 0; o < a.length; o++)
                if (!pt.isText(a[o])) {
                    if (
                        (r.moveToElementText(a[o]),
                        r.compareEndPoints("StartToStart", t) >= 0)
                    )
                        break;
                    n = a[o];
                }
            if (0 !== o && pt.isText(a[o - 1])) {
                var s = document.body.createTextRange(),
                    l = null;
                s.moveToElementText(n || i),
                    s.collapse(!n),
                    (l = n ? n.nextSibling : i.firstChild);
                var c = t.duplicate();
                c.setEndPoint("StartToStart", s);
                for (
                    var u = c.text.replace(/[\r\n]/g, "").length;
                    u > l.nodeValue.length && l.nextSibling;

                )
                    (u -= l.nodeValue.length), (l = l.nextSibling);
                l.nodeValue;
                e &&
                    l.nextSibling &&
                    pt.isText(l.nextSibling) &&
                    u === l.nodeValue.length &&
                    ((u -= l.nodeValue.length), (l = l.nextSibling)),
                    (i = l),
                    (o = u);
            }
            return { cont: i, offset: o };
        }
        function xt(t) {
            var e = document.body.createTextRange(),
                o = (function t(e, o) {
                    var n, i;
                    if (pt.isText(e)) {
                        var r = pt.listPrev(e, g.not(pt.isText)),
                            a = C.last(r).previousSibling;
                        (n = a || e.parentNode),
                            (o += C.sum(C.tail(r), pt.nodeLength)),
                            (i = !a);
                    } else {
                        if (((n = e.childNodes[o] || e), pt.isText(n)))
                            return t(n, 0);
                        (o = 0), (i = !1);
                    }
                    return { node: n, collapseToStart: i, offset: o };
                })(t.node, t.offset);
            return (
                e.moveToElementText(o.node),
                e.collapse(o.collapseToStart),
                e.moveStart("character", o.offset),
                e
            );
        }
        r().fn.extend({
            summernote: function () {
                var t = yt(C.head(arguments)),
                    e = "string" === t,
                    o = "object" === t,
                    n = r().extend(
                        {},
                        r().summernote.options,
                        o ? C.head(arguments) : {}
                    );
                (n.langInfo = r().extend(
                    !0,
                    {},
                    r().summernote.lang["en-US"],
                    r().summernote.lang[n.lang]
                )),
                    (n.icons = r().extend(
                        !0,
                        {},
                        r().summernote.options.icons,
                        n.icons
                    )),
                    (n.tooltip =
                        "auto" === n.tooltip ? !m.isSupportTouch : n.tooltip),
                    this.each(function (t, e) {
                        var o = r()(e);
                        if (!o.data("summernote")) {
                            var i = new bt(o, n);
                            o.data("summernote", i),
                                o
                                    .data("summernote")
                                    .triggerEvent("init", i.layoutInfo);
                        }
                    });
                var i = this.first();
                if (i.length) {
                    var a = i.data("summernote");
                    if (e) return a.invoke.apply(a, C.from(arguments));
                    n.focus && a.invoke("editor.focus");
                }
                return this;
            },
        });
        var Tt = (function () {
            function t(e, o, n, i) {
                !(function (t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, t),
                    (this.sc = e),
                    (this.so = o),
                    (this.ec = n),
                    (this.eo = i),
                    (this.isOnEditable = this.makeIsOn(pt.isEditable)),
                    (this.isOnList = this.makeIsOn(pt.isList)),
                    (this.isOnAnchor = this.makeIsOn(pt.isAnchor)),
                    (this.isOnCell = this.makeIsOn(pt.isCell)),
                    (this.isOnData = this.makeIsOn(pt.isData));
            }
            return (
                (e = t),
                (o = [
                    {
                        key: "nativeRange",
                        value: function () {
                            if (m.isW3CRangeSupport) {
                                var t = document.createRange();
                                return (
                                    t.setStart(this.sc, this.so),
                                    t.setEnd(this.ec, this.eo),
                                    t
                                );
                            }
                            var e = xt({ node: this.sc, offset: this.so });
                            return (
                                e.setEndPoint(
                                    "EndToEnd",
                                    xt({ node: this.ec, offset: this.eo })
                                ),
                                e
                            );
                        },
                    },
                    {
                        key: "getPoints",
                        value: function () {
                            return {
                                sc: this.sc,
                                so: this.so,
                                ec: this.ec,
                                eo: this.eo,
                            };
                        },
                    },
                    {
                        key: "getStartPoint",
                        value: function () {
                            return { node: this.sc, offset: this.so };
                        },
                    },
                    {
                        key: "getEndPoint",
                        value: function () {
                            return { node: this.ec, offset: this.eo };
                        },
                    },
                    {
                        key: "select",
                        value: function () {
                            var t = this.nativeRange();
                            if (m.isW3CRangeSupport) {
                                var e = document.getSelection();
                                e.rangeCount > 0 && e.removeAllRanges(),
                                    e.addRange(t);
                            } else t.select();
                            return this;
                        },
                    },
                    {
                        key: "scrollIntoView",
                        value: function (t) {
                            var e = r()(t).height();
                            return (
                                t.scrollTop + e < this.sc.offsetTop &&
                                    (t.scrollTop += Math.abs(
                                        t.scrollTop + e - this.sc.offsetTop
                                    )),
                                this
                            );
                        },
                    },
                    {
                        key: "normalize",
                        value: function () {
                            var e = function (t, e) {
                                    if (!t) return t;
                                    if (
                                        pt.isVisiblePoint(t) &&
                                        (!pt.isEdgePoint(t) ||
                                            (pt.isRightEdgePoint(t) && !e) ||
                                            (pt.isLeftEdgePoint(t) && e) ||
                                            (pt.isRightEdgePoint(t) &&
                                                e &&
                                                pt.isVoid(
                                                    t.node.nextSibling
                                                )) ||
                                            (pt.isLeftEdgePoint(t) &&
                                                !e &&
                                                pt.isVoid(
                                                    t.node.previousSibling
                                                )) ||
                                            (pt.isBlock(t.node) &&
                                                pt.isEmpty(t.node)))
                                    )
                                        return t;
                                    var o = pt.ancestor(t.node, pt.isBlock),
                                        n = !1;
                                    if (!n) {
                                        var i = pt.prevPoint(t) || {
                                            node: null,
                                        };
                                        n =
                                            (pt.isLeftEdgePointOf(t, o) ||
                                                pt.isVoid(i.node)) &&
                                            !e;
                                    }
                                    var r = !1;
                                    if (!r) {
                                        var a = pt.nextPoint(t) || {
                                            node: null,
                                        };
                                        r =
                                            (pt.isRightEdgePointOf(t, o) ||
                                                pt.isVoid(a.node)) &&
                                            e;
                                    }
                                    if (n || r) {
                                        if (pt.isVisiblePoint(t)) return t;
                                        e = !e;
                                    }
                                    return (
                                        (e
                                            ? pt.nextPointUntil(
                                                  pt.nextPoint(t),
                                                  pt.isVisiblePoint
                                              )
                                            : pt.prevPointUntil(
                                                  pt.prevPoint(t),
                                                  pt.isVisiblePoint
                                              )) || t
                                    );
                                },
                                o = e(this.getEndPoint(), !1),
                                n = this.isCollapsed()
                                    ? o
                                    : e(this.getStartPoint(), !0);
                            return new t(n.node, n.offset, o.node, o.offset);
                        },
                    },
                    {
                        key: "nodes",
                        value: function (t, e) {
                            t = t || g.ok;
                            var o = e && e.includeAncestor,
                                n = e && e.fullyContains,
                                i = this.getStartPoint(),
                                r = this.getEndPoint(),
                                a = [],
                                s = [];
                            return (
                                pt.walkPoint(
                                    i,
                                    r,
                                    function (e) {
                                        var i;
                                        pt.isEditable(e.node) ||
                                            (n
                                                ? (pt.isLeftEdgePoint(e) &&
                                                      s.push(e.node),
                                                  pt.isRightEdgePoint(e) &&
                                                      C.contains(s, e.node) &&
                                                      (i = e.node))
                                                : (i = o
                                                      ? pt.ancestor(e.node, t)
                                                      : e.node),
                                            i && t(i) && a.push(i));
                                    },
                                    !0
                                ),
                                C.unique(a)
                            );
                        },
                    },
                    {
                        key: "commonAncestor",
                        value: function () {
                            return pt.commonAncestor(this.sc, this.ec);
                        },
                    },
                    {
                        key: "expand",
                        value: function (e) {
                            var o = pt.ancestor(this.sc, e),
                                n = pt.ancestor(this.ec, e);
                            if (!o && !n)
                                return new t(
                                    this.sc,
                                    this.so,
                                    this.ec,
                                    this.eo
                                );
                            var i = this.getPoints();
                            return (
                                o && ((i.sc = o), (i.so = 0)),
                                n && ((i.ec = n), (i.eo = pt.nodeLength(n))),
                                new t(i.sc, i.so, i.ec, i.eo)
                            );
                        },
                    },
                    {
                        key: "collapse",
                        value: function (e) {
                            return e
                                ? new t(this.sc, this.so, this.sc, this.so)
                                : new t(this.ec, this.eo, this.ec, this.eo);
                        },
                    },
                    {
                        key: "splitText",
                        value: function () {
                            var e = this.sc === this.ec,
                                o = this.getPoints();
                            return (
                                pt.isText(this.ec) &&
                                    !pt.isEdgePoint(this.getEndPoint()) &&
                                    this.ec.splitText(this.eo),
                                pt.isText(this.sc) &&
                                    !pt.isEdgePoint(this.getStartPoint()) &&
                                    ((o.sc = this.sc.splitText(this.so)),
                                    (o.so = 0),
                                    e &&
                                        ((o.ec = o.sc),
                                        (o.eo = this.eo - this.so))),
                                new t(o.sc, o.so, o.ec, o.eo)
                            );
                        },
                    },
                    {
                        key: "deleteContents",
                        value: function () {
                            if (this.isCollapsed()) return this;
                            var e = this.splitText(),
                                o = e.nodes(null, { fullyContains: !0 }),
                                n = pt.prevPointUntil(
                                    e.getStartPoint(),
                                    function (t) {
                                        return !C.contains(o, t.node);
                                    }
                                ),
                                i = [];
                            return (
                                r().each(o, function (t, e) {
                                    var o = e.parentNode;
                                    n.node !== o &&
                                        1 === pt.nodeLength(o) &&
                                        i.push(o),
                                        pt.remove(e, !1);
                                }),
                                r().each(i, function (t, e) {
                                    pt.remove(e, !1);
                                }),
                                new t(
                                    n.node,
                                    n.offset,
                                    n.node,
                                    n.offset
                                ).normalize()
                            );
                        },
                    },
                    {
                        key: "makeIsOn",
                        value: function (t) {
                            return function () {
                                var e = pt.ancestor(this.sc, t);
                                return !!e && e === pt.ancestor(this.ec, t);
                            };
                        },
                    },
                    {
                        key: "isLeftEdgeOf",
                        value: function (t) {
                            if (!pt.isLeftEdgePoint(this.getStartPoint()))
                                return !1;
                            var e = pt.ancestor(this.sc, t);
                            return e && pt.isLeftEdgeOf(this.sc, e);
                        },
                    },
                    {
                        key: "isCollapsed",
                        value: function () {
                            return this.sc === this.ec && this.so === this.eo;
                        },
                    },
                    {
                        key: "wrapBodyInlineWithPara",
                        value: function () {
                            if (
                                pt.isBodyContainer(this.sc) &&
                                pt.isEmpty(this.sc)
                            )
                                return (
                                    (this.sc.innerHTML = pt.emptyPara),
                                    new t(
                                        this.sc.firstChild,
                                        0,
                                        this.sc.firstChild,
                                        0
                                    )
                                );
                            var e,
                                o = this.normalize();
                            if (pt.isParaInline(this.sc) || pt.isPara(this.sc))
                                return o;
                            if (pt.isInline(o.sc)) {
                                var n = pt.listAncestor(
                                    o.sc,
                                    g.not(pt.isInline)
                                );
                                (e = C.last(n)),
                                    pt.isInline(e) ||
                                        (e =
                                            n[n.length - 2] ||
                                            o.sc.childNodes[o.so]);
                            } else e = o.sc.childNodes[o.so > 0 ? o.so - 1 : 0];
                            if (e) {
                                var i = pt
                                    .listPrev(e, pt.isParaInline)
                                    .reverse();
                                if (
                                    (i = i.concat(
                                        pt.listNext(
                                            e.nextSibling,
                                            pt.isParaInline
                                        )
                                    )).length
                                ) {
                                    var r = pt.wrap(C.head(i), "p");
                                    pt.appendChildNodes(r, C.tail(i));
                                }
                            }
                            return this.normalize();
                        },
                    },
                    {
                        key: "insertNode",
                        value: function (t) {
                            var e =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1],
                                o = this;
                            (pt.isText(t) || pt.isInline(t)) &&
                                (o =
                                    this.wrapBodyInlineWithPara().deleteContents());
                            var n = pt.splitPoint(
                                o.getStartPoint(),
                                pt.isInline(t)
                            );
                            return (
                                n.rightNode
                                    ? (n.rightNode.parentNode.insertBefore(
                                          t,
                                          n.rightNode
                                      ),
                                      pt.isEmpty(n.rightNode) &&
                                          (e || pt.isPara(t)) &&
                                          n.rightNode.parentNode.removeChild(
                                              n.rightNode
                                          ))
                                    : n.container.appendChild(t),
                                t
                            );
                        },
                    },
                    {
                        key: "pasteHTML",
                        value: function (t) {
                            t = ((t || "") + "").trim(t);
                            var e = r()("<div></div>").html(t)[0],
                                o = C.from(e.childNodes),
                                n = this,
                                i = !1;
                            return (
                                n.so >= 0 && ((o = o.reverse()), (i = !0)),
                                (o = o.map(function (t) {
                                    return n.insertNode(t, !pt.isInline(t));
                                })),
                                i && (o = o.reverse()),
                                o
                            );
                        },
                    },
                    {
                        key: "toString",
                        value: function () {
                            var t = this.nativeRange();
                            return m.isW3CRangeSupport ? t.toString() : t.text;
                        },
                    },
                    {
                        key: "getWordRange",
                        value: function (e) {
                            var o = this.getEndPoint();
                            if (!pt.isCharPoint(o)) return this;
                            var n = pt.prevPointUntil(o, function (t) {
                                return !pt.isCharPoint(t);
                            });
                            return (
                                e &&
                                    (o = pt.nextPointUntil(o, function (t) {
                                        return !pt.isCharPoint(t);
                                    })),
                                new t(n.node, n.offset, o.node, o.offset)
                            );
                        },
                    },
                    {
                        key: "getWordsRange",
                        value: function (e) {
                            var o = this.getEndPoint(),
                                n = function (t) {
                                    return (
                                        !pt.isCharPoint(t) &&
                                        !pt.isSpacePoint(t)
                                    );
                                };
                            if (n(o)) return this;
                            var i = pt.prevPointUntil(o, n);
                            return (
                                e && (o = pt.nextPointUntil(o, n)),
                                new t(i.node, i.offset, o.node, o.offset)
                            );
                        },
                    },
                    {
                        key: "getWordsMatchRange",
                        value: function (e) {
                            var o = this.getEndPoint(),
                                n = pt.prevPointUntil(o, function (n) {
                                    if (
                                        !pt.isCharPoint(n) &&
                                        !pt.isSpacePoint(n)
                                    )
                                        return !0;
                                    var i = new t(
                                            n.node,
                                            n.offset,
                                            o.node,
                                            o.offset
                                        ),
                                        r = e.exec(i.toString());
                                    return r && 0 === r.index;
                                }),
                                i = new t(n.node, n.offset, o.node, o.offset),
                                r = i.toString(),
                                a = e.exec(r);
                            return a && a[0].length === r.length ? i : null;
                        },
                    },
                    {
                        key: "bookmark",
                        value: function (t) {
                            return {
                                s: {
                                    path: pt.makeOffsetPath(t, this.sc),
                                    offset: this.so,
                                },
                                e: {
                                    path: pt.makeOffsetPath(t, this.ec),
                                    offset: this.eo,
                                },
                            };
                        },
                    },
                    {
                        key: "paraBookmark",
                        value: function (t) {
                            return {
                                s: {
                                    path: C.tail(
                                        pt.makeOffsetPath(C.head(t), this.sc)
                                    ),
                                    offset: this.so,
                                },
                                e: {
                                    path: C.tail(
                                        pt.makeOffsetPath(C.last(t), this.ec)
                                    ),
                                    offset: this.eo,
                                },
                            };
                        },
                    },
                    {
                        key: "getClientRects",
                        value: function () {
                            return this.nativeRange().getClientRects();
                        },
                    },
                ]),
                o && wt(e.prototype, o),
                n && wt(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
            );
            var e, o, n;
        })();
        const Et = {
            create: function (t, e, o, n) {
                if (4 === arguments.length) return new Tt(t, e, o, n);
                if (2 === arguments.length)
                    return new Tt(t, e, (o = t), (n = e));
                var i = this.createFromSelection();
                if (!i && 1 === arguments.length) {
                    var r = arguments[0];
                    return (
                        pt.isEditable(r) && (r = r.lastChild),
                        this.createFromBodyElement(
                            r,
                            pt.emptyPara === arguments[0].innerHTML
                        )
                    );
                }
                return i;
            },
            createFromBodyElement: function (t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                return this.createFromNode(t).collapse(e);
            },
            createFromSelection: function () {
                var t, e, o, n;
                if (m.isW3CRangeSupport) {
                    var i = document.getSelection();
                    if (!i || 0 === i.rangeCount) return null;
                    if (pt.isBody(i.anchorNode)) return null;
                    var r = i.getRangeAt(0);
                    (t = r.startContainer),
                        (e = r.startOffset),
                        (o = r.endContainer),
                        (n = r.endOffset);
                } else {
                    var a = document.selection.createRange(),
                        s = a.duplicate();
                    s.collapse(!1);
                    var l = a;
                    l.collapse(!0);
                    var c = St(l, !0),
                        u = St(s, !1);
                    pt.isText(c.node) &&
                        pt.isLeftEdgePoint(c) &&
                        pt.isTextNode(u.node) &&
                        pt.isRightEdgePoint(u) &&
                        u.node.nextSibling === c.node &&
                        (c = u),
                        (t = c.cont),
                        (e = c.offset),
                        (o = u.cont),
                        (n = u.offset);
                }
                return new Tt(t, e, o, n);
            },
            createFromNode: function (t) {
                var e = t,
                    o = 0,
                    n = t,
                    i = pt.nodeLength(n);
                return (
                    pt.isVoid(e) &&
                        ((o = pt.listPrev(e).length - 1), (e = e.parentNode)),
                    pt.isBR(n)
                        ? ((i = pt.listPrev(n).length - 1), (n = n.parentNode))
                        : pt.isVoid(n) &&
                          ((i = pt.listPrev(n).length), (n = n.parentNode)),
                    this.create(e, o, n, i)
                );
            },
            createFromNodeBefore: function (t) {
                return this.createFromNode(t).collapse(!0);
            },
            createFromNodeAfter: function (t) {
                return this.createFromNode(t).collapse();
            },
            createFromBookmark: function (t, e) {
                var o = pt.fromOffsetPath(t, e.s.path),
                    n = e.s.offset,
                    i = pt.fromOffsetPath(t, e.e.path),
                    r = e.e.offset;
                return new Tt(o, n, i, r);
            },
            createFromParaBookmark: function (t, e) {
                var o = t.s.offset,
                    n = t.e.offset,
                    i = pt.fromOffsetPath(C.head(e), t.s.path),
                    r = pt.fromOffsetPath(C.last(e), t.e.path);
                return new Tt(i, o, r, n);
            },
        };
        var Pt = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            DELETE: 46,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            NUM0: 48,
            NUM1: 49,
            NUM2: 50,
            NUM3: 51,
            NUM4: 52,
            NUM5: 53,
            NUM6: 54,
            NUM7: 55,
            NUM8: 56,
            B: 66,
            E: 69,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            R: 82,
            S: 83,
            U: 85,
            V: 86,
            Y: 89,
            Z: 90,
            SLASH: 191,
            LEFTBRACKET: 219,
            BACKSLASH: 220,
            RIGHTBRACKET: 221,
            HOME: 36,
            END: 35,
            PAGEUP: 33,
            PAGEDOWN: 34,
        };
        const Nt = {
            isEdit: function (t) {
                return C.contains(
                    [Pt.BACKSPACE, Pt.TAB, Pt.ENTER, Pt.SPACE, Pt.DELETE],
                    t
                );
            },
            isRemove: function (t) {
                return C.contains([Pt.BACKSPACE, Pt.DELETE], t);
            },
            isMove: function (t) {
                return C.contains([Pt.LEFT, Pt.UP, Pt.RIGHT, Pt.DOWN], t);
            },
            isNavigation: function (t) {
                return C.contains([Pt.HOME, Pt.END, Pt.PAGEUP, Pt.PAGEDOWN], t);
            },
            nameFromCode: g.invertObject(Pt),
            code: Pt,
        };
        function $t(t) {
            return (
                ($t =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                $t(t)
            );
        }
        function It(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Rt(n.key), n);
            }
        }
        function Rt(t) {
            var e = (function (t, e) {
                if ("object" != $t(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != $t(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == $t(e) ? e : e + "";
        }
        var At = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.stack = []),
                        (this.stackOffset = -1),
                        (this.context = e),
                        (this.$editable = e.layoutInfo.editable),
                        (this.editable = this.$editable[0]);
                }),
                (e = [
                    {
                        key: "makeSnapshot",
                        value: function () {
                            var t = Et.create(this.editable);
                            return {
                                contents: this.$editable.html(),
                                bookmark:
                                    t && t.isOnEditable()
                                        ? t.bookmark(this.editable)
                                        : {
                                              s: { path: [], offset: 0 },
                                              e: { path: [], offset: 0 },
                                          },
                            };
                        },
                    },
                    {
                        key: "applySnapshot",
                        value: function (t) {
                            null !== t.contents &&
                                this.$editable.html(t.contents),
                                null !== t.bookmark &&
                                    Et.createFromBookmark(
                                        this.editable,
                                        t.bookmark
                                    ).select();
                        },
                    },
                    {
                        key: "rewind",
                        value: function () {
                            this.$editable.html() !==
                                this.stack[this.stackOffset].contents &&
                                this.recordUndo(),
                                (this.stackOffset = 0),
                                this.applySnapshot(
                                    this.stack[this.stackOffset]
                                );
                        },
                    },
                    {
                        key: "commit",
                        value: function () {
                            (this.stack = []),
                                (this.stackOffset = -1),
                                this.recordUndo();
                        },
                    },
                    {
                        key: "reset",
                        value: function () {
                            (this.stack = []),
                                (this.stackOffset = -1),
                                this.$editable.html(""),
                                this.recordUndo();
                        },
                    },
                    {
                        key: "undo",
                        value: function () {
                            this.$editable.html() !==
                                this.stack[this.stackOffset].contents &&
                                this.recordUndo(),
                                this.stackOffset > 0 &&
                                    (this.stackOffset--,
                                    this.applySnapshot(
                                        this.stack[this.stackOffset]
                                    ));
                        },
                    },
                    {
                        key: "redo",
                        value: function () {
                            this.stack.length - 1 > this.stackOffset &&
                                (this.stackOffset++,
                                this.applySnapshot(
                                    this.stack[this.stackOffset]
                                ));
                        },
                    },
                    {
                        key: "recordUndo",
                        value: function () {
                            this.stackOffset++,
                                this.stack.length > this.stackOffset &&
                                    (this.stack = this.stack.slice(
                                        0,
                                        this.stackOffset
                                    )),
                                this.stack.push(this.makeSnapshot()),
                                this.stack.length >
                                    this.context.options.historyLimit &&
                                    (this.stack.shift(),
                                    (this.stackOffset -= 1));
                        },
                    },
                ]) && It(t.prototype, e),
                o && It(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Lt(t) {
            return (
                (Lt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Lt(t)
            );
        }
        function Ft(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Dt(n.key), n);
            }
        }
        function Dt(t) {
            var e = (function (t, e) {
                if ("object" != Lt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Lt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Lt(e) ? e : e + "";
        }
        var Ht = (function () {
            return (
                (t = function t() {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                }),
                (e = [
                    {
                        key: "jQueryCSS",
                        value: function (t, e) {
                            var o = {};
                            return (
                                r().each(e, function (e, n) {
                                    o[n] = t.css(n);
                                }),
                                o
                            );
                        },
                    },
                    {
                        key: "fromNode",
                        value: function (t) {
                            var e =
                                    this.jQueryCSS(t, [
                                        "font-family",
                                        "font-size",
                                        "text-align",
                                        "list-style-type",
                                        "line-height",
                                    ]) || {},
                                o = t[0].style.fontSize || e["font-size"];
                            return (
                                (e["font-size"] = parseInt(o, 10)),
                                (e["font-size-unit"] = o.match(/[a-z%]+$/)),
                                e
                            );
                        },
                    },
                    {
                        key: "stylePara",
                        value: function (t, e) {
                            r().each(
                                t.nodes(pt.isPara, { includeAncestor: !0 }),
                                function (t, o) {
                                    r()(o).css(e);
                                }
                            );
                        },
                    },
                    {
                        key: "styleNodes",
                        value: function (t, e) {
                            t = t.splitText();
                            var o = (e && e.nodeName) || "SPAN",
                                n = !(!e || !e.expandClosestSibling),
                                i = !(!e || !e.onlyPartialContains);
                            if (t.isCollapsed())
                                return [t.insertNode(pt.create(o))];
                            var a = pt.makePredByNodeName(o),
                                s = t
                                    .nodes(pt.isText, { fullyContains: !0 })
                                    .map(function (t) {
                                        return (
                                            pt.singleChildAncestor(t, a) ||
                                            pt.wrap(t, o)
                                        );
                                    });
                            if (n) {
                                if (i) {
                                    var l = t.nodes();
                                    a = g.and(a, function (t) {
                                        return C.contains(l, t);
                                    });
                                }
                                return s.map(function (t) {
                                    var e = pt.withClosestSiblings(t, a),
                                        o = C.head(e),
                                        n = C.tail(e);
                                    return (
                                        r().each(n, function (t, e) {
                                            pt.appendChildNodes(
                                                o,
                                                e.childNodes
                                            ),
                                                pt.remove(e);
                                        }),
                                        C.head(e)
                                    );
                                });
                            }
                            return s;
                        },
                    },
                    {
                        key: "current",
                        value: function (t) {
                            var e = r()(
                                    pt.isElement(t.sc) ? t.sc : t.sc.parentNode
                                ),
                                o = this.fromNode(e);
                            try {
                                o = r().extend(o, {
                                    "font-bold": document.queryCommandState(
                                        "bold"
                                    )
                                        ? "bold"
                                        : "normal",
                                    "font-italic": document.queryCommandState(
                                        "italic"
                                    )
                                        ? "italic"
                                        : "normal",
                                    "font-underline":
                                        document.queryCommandState("underline")
                                            ? "underline"
                                            : "normal",
                                    "font-subscript":
                                        document.queryCommandState("subscript")
                                            ? "subscript"
                                            : "normal",
                                    "font-superscript":
                                        document.queryCommandState(
                                            "superscript"
                                        )
                                            ? "superscript"
                                            : "normal",
                                    "font-strikethrough":
                                        document.queryCommandState(
                                            "strikethrough"
                                        )
                                            ? "strikethrough"
                                            : "normal",
                                    "font-family":
                                        document.queryCommandValue(
                                            "fontname"
                                        ) || o["font-family"],
                                });
                            } catch (t) {}
                            if (t.isOnList()) {
                                var n =
                                    [
                                        "circle",
                                        "disc",
                                        "disc-leading-zero",
                                        "square",
                                    ].indexOf(o["list-style-type"]) > -1;
                                o["list-style"] = n ? "unordered" : "ordered";
                            } else o["list-style"] = "none";
                            var i = pt.ancestor(t.sc, pt.isPara);
                            if (i && i.style["line-height"])
                                o["line-height"] = i.style.lineHeight;
                            else {
                                var a =
                                    parseInt(o["line-height"], 10) /
                                    parseInt(o["font-size"], 10);
                                o["line-height"] = a.toFixed(1);
                            }
                            return (
                                (o.anchor =
                                    t.isOnAnchor() &&
                                    pt.ancestor(t.sc, pt.isAnchor)),
                                (o.ancestors = pt.listAncestor(
                                    t.sc,
                                    pt.isEditable
                                )),
                                (o.range = t),
                                o
                            );
                        },
                    },
                ]),
                e && Ft(t.prototype, e),
                o && Ft(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function jt(t) {
            return (
                (jt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                jt(t)
            );
        }
        function Bt(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Ot(n.key), n);
            }
        }
        function Ot(t) {
            var e = (function (t, e) {
                if ("object" != jt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != jt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == jt(e) ? e : e + "";
        }
        var zt = (function () {
            return (
                (t = function t() {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                }),
                (e = [
                    {
                        key: "insertOrderedList",
                        value: function (t) {
                            this.toggleList("OL", t);
                        },
                    },
                    {
                        key: "insertUnorderedList",
                        value: function (t) {
                            this.toggleList("UL", t);
                        },
                    },
                    {
                        key: "indent",
                        value: function (t) {
                            var e = this,
                                o = Et.create(t).wrapBodyInlineWithPara(),
                                n = o.nodes(pt.isPara, { includeAncestor: !0 }),
                                i = C.clusterBy(n, g.peq2("parentNode"));
                            r().each(i, function (t, o) {
                                var n = C.head(o);
                                if (pt.isLi(n)) {
                                    var i = e.findList(n.previousSibling);
                                    i
                                        ? o.map(function (t) {
                                              return i.appendChild(t);
                                          })
                                        : (e.wrapList(o, n.parentNode.nodeName),
                                          o
                                              .map(function (t) {
                                                  return t.parentNode;
                                              })
                                              .map(function (t) {
                                                  return e.appendToPrevious(t);
                                              }));
                                } else
                                    r().each(o, function (t, e) {
                                        r()(e).css(
                                            "marginLeft",
                                            function (t, e) {
                                                return (
                                                    (parseInt(e, 10) || 0) + 25
                                                );
                                            }
                                        );
                                    });
                            }),
                                o.select();
                        },
                    },
                    {
                        key: "outdent",
                        value: function (t) {
                            var e = this,
                                o = Et.create(t).wrapBodyInlineWithPara(),
                                n = o.nodes(pt.isPara, { includeAncestor: !0 }),
                                i = C.clusterBy(n, g.peq2("parentNode"));
                            r().each(i, function (t, o) {
                                var n = C.head(o);
                                pt.isLi(n)
                                    ? e.releaseList([o])
                                    : r().each(o, function (t, e) {
                                          r()(e).css(
                                              "marginLeft",
                                              function (t, e) {
                                                  return (e =
                                                      parseInt(e, 10) || 0) > 25
                                                      ? e - 25
                                                      : "";
                                              }
                                          );
                                      });
                            }),
                                o.select();
                        },
                    },
                    {
                        key: "toggleList",
                        value: function (t, e) {
                            var o = this,
                                n = Et.create(e).wrapBodyInlineWithPara(),
                                i = n.nodes(pt.isPara, { includeAncestor: !0 }),
                                a = n.paraBookmark(i),
                                s = C.clusterBy(i, g.peq2("parentNode"));
                            if (C.find(i, pt.isPurePara)) {
                                var l = [];
                                r().each(s, function (e, n) {
                                    l = l.concat(o.wrapList(n, t));
                                }),
                                    (i = l);
                            } else {
                                var c = n
                                    .nodes(pt.isList, { includeAncestor: !0 })
                                    .filter(function (e) {
                                        return !r().nodeName(e, t);
                                    });
                                c.length
                                    ? r().each(c, function (e, o) {
                                          pt.replace(o, t);
                                      })
                                    : (i = this.releaseList(s, !0));
                            }
                            Et.createFromParaBookmark(a, i).select();
                        },
                    },
                    {
                        key: "wrapList",
                        value: function (t, e) {
                            var o = C.head(t),
                                n = C.last(t),
                                i =
                                    pt.isList(o.previousSibling) &&
                                    o.previousSibling,
                                r = pt.isList(n.nextSibling) && n.nextSibling,
                                a =
                                    i ||
                                    pt.insertAfter(pt.create(e || "UL"), n);
                            return (
                                (t = t.map(function (t) {
                                    return pt.isPurePara(t)
                                        ? pt.replace(t, "LI")
                                        : t;
                                })),
                                pt.appendChildNodes(a, t, !0),
                                r &&
                                    (pt.appendChildNodes(
                                        a,
                                        C.from(r.childNodes),
                                        !0
                                    ),
                                    pt.remove(r)),
                                t
                            );
                        },
                    },
                    {
                        key: "releaseList",
                        value: function (t, e) {
                            var o = this,
                                n = [];
                            return (
                                r().each(t, function (t, i) {
                                    var a = C.head(i),
                                        s = C.last(i),
                                        l = e
                                            ? pt.lastAncestor(a, pt.isList)
                                            : a.parentNode,
                                        c = l.parentNode;
                                    if ("LI" === l.parentNode.nodeName)
                                        i.map(function (t) {
                                            var e = o.findNextSiblings(t);
                                            c.nextSibling
                                                ? c.parentNode.insertBefore(
                                                      t,
                                                      c.nextSibling
                                                  )
                                                : c.parentNode.appendChild(t),
                                                e.length &&
                                                    (o.wrapList(e, l.nodeName),
                                                    t.appendChild(
                                                        e[0].parentNode
                                                    ));
                                        }),
                                            0 === l.children.length &&
                                                c.removeChild(l),
                                            0 === c.childNodes.length &&
                                                c.parentNode.removeChild(c);
                                    else {
                                        var u =
                                                l.childNodes.length > 1
                                                    ? pt.splitTree(
                                                          l,
                                                          {
                                                              node: s.parentNode,
                                                              offset:
                                                                  pt.position(
                                                                      s
                                                                  ) + 1,
                                                          },
                                                          {
                                                              isSkipPaddingBlankHTML:
                                                                  !0,
                                                          }
                                                      )
                                                    : null,
                                            d = pt.splitTree(
                                                l,
                                                {
                                                    node: a.parentNode,
                                                    offset: pt.position(a),
                                                },
                                                { isSkipPaddingBlankHTML: !0 }
                                            );
                                        (i = e
                                            ? pt.listDescendant(d, pt.isLi)
                                            : C.from(d.childNodes).filter(
                                                  pt.isLi
                                              )),
                                            (!e && pt.isList(l.parentNode)) ||
                                                (i = i.map(function (t) {
                                                    return pt.replace(t, "P");
                                                })),
                                            r().each(
                                                C.from(i).reverse(),
                                                function (t, e) {
                                                    pt.insertAfter(e, l);
                                                }
                                            );
                                        var f = C.compact([l, d, u]);
                                        r().each(f, function (t, e) {
                                            var o = [e].concat(
                                                pt.listDescendant(e, pt.isList)
                                            );
                                            r().each(
                                                o.reverse(),
                                                function (t, e) {
                                                    pt.nodeLength(e) ||
                                                        pt.remove(e, !0);
                                                }
                                            );
                                        });
                                    }
                                    n = n.concat(i);
                                }),
                                n
                            );
                        },
                    },
                    {
                        key: "appendToPrevious",
                        value: function (t) {
                            return t.previousSibling
                                ? pt.appendChildNodes(t.previousSibling, [t])
                                : this.wrapList([t], "LI");
                        },
                    },
                    {
                        key: "findList",
                        value: function (t) {
                            return t
                                ? C.find(t.children, function (t) {
                                      return (
                                          ["OL", "UL"].indexOf(t.nodeName) > -1
                                      );
                                  })
                                : null;
                        },
                    },
                    {
                        key: "findNextSiblings",
                        value: function (t) {
                            for (var e = []; t.nextSibling; )
                                e.push(t.nextSibling), (t = t.nextSibling);
                            return e;
                        },
                    },
                ]),
                e && Bt(t.prototype, e),
                o && Bt(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Mt(t) {
            return (
                (Mt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Mt(t)
            );
        }
        function Ut(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Wt(n.key), n);
            }
        }
        function Wt(t) {
            var e = (function (t, e) {
                if ("object" != Mt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Mt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Mt(e) ? e : e + "";
        }
        var Kt = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.bullet = new zt()),
                        (this.options = e.options);
                }),
                (e = [
                    {
                        key: "insertTab",
                        value: function (t, e) {
                            var o = pt.createText(
                                new Array(e + 1).join(pt.NBSP_CHAR)
                            );
                            (t = t.deleteContents()).insertNode(o, !0),
                                (t = Et.create(o, e)).select();
                        },
                    },
                    {
                        key: "insertParagraph",
                        value: function (t, e) {
                            e = (e = (e =
                                e ||
                                Et.create(
                                    t
                                )).deleteContents()).wrapBodyInlineWithPara();
                            var o,
                                n = pt.ancestor(e.sc, pt.isPara);
                            if (n) {
                                if (
                                    pt.isLi(n) &&
                                    (pt.isEmpty(n) || pt.deepestChildIsEmpty(n))
                                )
                                    return void this.bullet.toggleList(
                                        n.parentNode.nodeName
                                    );
                                var i = null;
                                if (
                                    (1 === this.options.blockquoteBreakingLevel
                                        ? (i = pt.ancestor(n, pt.isBlockquote))
                                        : 2 ===
                                              this.options
                                                  .blockquoteBreakingLevel &&
                                          (i = pt.lastAncestor(
                                              n,
                                              pt.isBlockquote
                                          )),
                                    i)
                                ) {
                                    (o = r()(pt.emptyPara)[0]),
                                        pt.isRightEdgePoint(
                                            e.getStartPoint()
                                        ) &&
                                            pt.isBR(e.sc.nextSibling) &&
                                            r()(e.sc.nextSibling).remove();
                                    var a = pt.splitTree(i, e.getStartPoint(), {
                                        isDiscardEmptySplits: !0,
                                    });
                                    a
                                        ? a.parentNode.insertBefore(o, a)
                                        : pt.insertAfter(o, i);
                                } else {
                                    o = pt.splitTree(n, e.getStartPoint());
                                    var s = pt.listDescendant(
                                        n,
                                        pt.isEmptyAnchor
                                    );
                                    (s = s.concat(
                                        pt.listDescendant(o, pt.isEmptyAnchor)
                                    )),
                                        r().each(s, function (t, e) {
                                            pt.remove(e);
                                        }),
                                        (pt.isHeading(o) ||
                                            pt.isPre(o) ||
                                            pt.isCustomStyleTag(o)) &&
                                            pt.isEmpty(o) &&
                                            (o = pt.replace(o, "p"));
                                }
                            } else {
                                var l = e.sc.childNodes[e.so];
                                (o = r()(pt.emptyPara)[0]),
                                    l
                                        ? e.sc.insertBefore(o, l)
                                        : e.sc.appendChild(o);
                            }
                            Et.create(o, 0)
                                .normalize()
                                .select()
                                .scrollIntoView(t);
                        },
                    },
                ]),
                e && Ut(t.prototype, e),
                o && Ut(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function qt(t) {
            return (
                (qt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                qt(t)
            );
        }
        function Vt(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, _t(n.key), n);
            }
        }
        function _t(t) {
            var e = (function (t, e) {
                if ("object" != qt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != qt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == qt(e) ? e : e + "";
        }
        var Gt = function t(e, o, n, i) {
            var r = { colPos: 0, rowPos: 0 },
                a = [],
                s = [];
            function l(t, e, o, n, i, r, s) {
                var l = {
                    baseRow: o,
                    baseCell: n,
                    isRowSpan: i,
                    isColSpan: r,
                    isVirtual: s,
                };
                a[t] || (a[t] = []), (a[t][e] = l);
            }
            function c(t, e, o, n) {
                return {
                    baseCell: t.baseCell,
                    action: e,
                    virtualTable: { rowIndex: o, cellIndex: n },
                };
            }
            function u(t, e) {
                if (!a[t]) return e;
                if (!a[t][e]) return e;
                for (var o = e; a[t][o]; ) if ((o++, !a[t][o])) return o;
            }
            function d(t, e) {
                var o = u(t.rowIndex, e.cellIndex),
                    n = e.colSpan > 1,
                    i = e.rowSpan > 1,
                    a = t.rowIndex === r.rowPos && e.cellIndex === r.colPos;
                l(t.rowIndex, o, t, e, i, n, !1);
                var s = e.attributes.rowSpan
                    ? parseInt(e.attributes.rowSpan.value, 10)
                    : 0;
                if (s > 1)
                    for (var c = 1; c < s; c++) {
                        var d = t.rowIndex + c;
                        f(d, o, e, a), l(d, o, t, e, !0, n, !0);
                    }
                var h = e.attributes.colSpan
                    ? parseInt(e.attributes.colSpan.value, 10)
                    : 0;
                if (h > 1)
                    for (var p = 1; p < h; p++) {
                        var m = u(t.rowIndex, o + p);
                        f(t.rowIndex, m, e, a),
                            l(t.rowIndex, m, t, e, i, !0, !0);
                    }
            }
            function f(t, e, o, n) {
                t === r.rowPos &&
                    r.colPos >= o.cellIndex &&
                    o.cellIndex <= e &&
                    !n &&
                    r.colPos++;
            }
            function h(e) {
                switch (o) {
                    case t.where.Column:
                        if (e.isColSpan)
                            return t.resultAction.SubtractSpanCount;
                        break;
                    case t.where.Row:
                        if (!e.isVirtual && e.isRowSpan)
                            return t.resultAction.AddCell;
                        if (e.isRowSpan)
                            return t.resultAction.SubtractSpanCount;
                }
                return t.resultAction.RemoveCell;
            }
            function p(e) {
                switch (o) {
                    case t.where.Column:
                        if (e.isColSpan) return t.resultAction.SumSpanCount;
                        if (e.isRowSpan && e.isVirtual)
                            return t.resultAction.Ignore;
                        break;
                    case t.where.Row:
                        if (e.isRowSpan) return t.resultAction.SumSpanCount;
                        if (e.isColSpan && e.isVirtual)
                            return t.resultAction.Ignore;
                }
                return t.resultAction.AddCell;
            }
            (this.getActionList = function () {
                for (
                    var e = o === t.where.Row ? r.rowPos : -1,
                        i = o === t.where.Column ? r.colPos : -1,
                        l = 0,
                        u = !0;
                    u;

                ) {
                    var d = e >= 0 ? e : l,
                        f = i >= 0 ? i : l,
                        m = a[d];
                    if (!m) return (u = !1), s;
                    var v = m[f];
                    if (!v) return (u = !1), s;
                    var g = t.resultAction.Ignore;
                    switch (n) {
                        case t.requestAction.Add:
                            g = p(v);
                            break;
                        case t.requestAction.Delete:
                            g = h(v);
                    }
                    s.push(c(v, g, d, f)), l++;
                }
                return s;
            }),
                e &&
                    e.tagName &&
                    ("td" === e.tagName.toLowerCase() ||
                        "th" === e.tagName.toLowerCase()) &&
                    ((r.colPos = e.cellIndex),
                    e.parentElement &&
                        e.parentElement.tagName &&
                        "tr" === e.parentElement.tagName.toLowerCase() &&
                        (r.rowPos = e.parentElement.rowIndex)),
                (function () {
                    for (var t = i.rows, e = 0; e < t.length; e++)
                        for (var o = t[e].cells, n = 0; n < o.length; n++)
                            d(t[e], o[n]);
                })();
        };
        (Gt.where = { Row: 0, Column: 1 }),
            (Gt.requestAction = { Add: 0, Delete: 1 }),
            (Gt.resultAction = {
                Ignore: 0,
                SubtractSpanCount: 1,
                RemoveCell: 2,
                AddCell: 3,
                SumSpanCount: 4,
            });
        var Zt = (function () {
            return (
                (t = function t() {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                }),
                (e = [
                    {
                        key: "tab",
                        value: function (t, e) {
                            var o = pt.ancestor(t.commonAncestor(), pt.isCell),
                                n = pt.ancestor(o, pt.isTable),
                                i = pt.listDescendant(n, pt.isCell),
                                r = C[e ? "prev" : "next"](i, o);
                            r && Et.create(r, 0).select();
                        },
                    },
                    {
                        key: "addRow",
                        value: function (t, e) {
                            for (
                                var o = pt.ancestor(
                                        t.commonAncestor(),
                                        pt.isCell
                                    ),
                                    n = r()(o).closest("tr"),
                                    i = this.recoverAttributes(n),
                                    a = r()("<tr" + i + "></tr>"),
                                    s = new Gt(
                                        o,
                                        Gt.where.Row,
                                        Gt.requestAction.Add,
                                        r()(n).closest("table")[0]
                                    ).getActionList(),
                                    l = 0;
                                l < s.length;
                                l++
                            ) {
                                var c = s[l],
                                    u = this.recoverAttributes(c.baseCell);
                                switch (c.action) {
                                    case Gt.resultAction.AddCell:
                                        a.append(
                                            "<td" + u + ">" + pt.blank + "</td>"
                                        );
                                        break;
                                    case Gt.resultAction.SumSpanCount:
                                        if (
                                            "top" === e &&
                                            (c.baseCell.parent
                                                ? c.baseCell.closest("tr")
                                                      .rowIndex
                                                : 0) <= n[0].rowIndex
                                        ) {
                                            var d = r()("<div></div>")
                                                .append(
                                                    r()(
                                                        "<td" +
                                                            u +
                                                            ">" +
                                                            pt.blank +
                                                            "</td>"
                                                    ).removeAttr("rowspan")
                                                )
                                                .html();
                                            a.append(d);
                                            break;
                                        }
                                        var f = parseInt(
                                            c.baseCell.rowSpan,
                                            10
                                        );
                                        f++,
                                            c.baseCell.setAttribute(
                                                "rowSpan",
                                                f
                                            );
                                }
                            }
                            if ("top" === e) n.before(a);
                            else {
                                if (o.rowSpan > 1) {
                                    var h = n[0].rowIndex + (o.rowSpan - 2);
                                    return void r()(
                                        r()(n).parent().find("tr")[h]
                                    ).after(r()(a));
                                }
                                n.after(a);
                            }
                        },
                    },
                    {
                        key: "addCol",
                        value: function (t, e) {
                            var o = pt.ancestor(t.commonAncestor(), pt.isCell),
                                n = r()(o).closest("tr");
                            r()(n).siblings().push(n);
                            for (
                                var i = new Gt(
                                        o,
                                        Gt.where.Column,
                                        Gt.requestAction.Add,
                                        r()(n).closest("table")[0]
                                    ).getActionList(),
                                    a = 0;
                                a < i.length;
                                a++
                            ) {
                                var s = i[a],
                                    l = this.recoverAttributes(s.baseCell);
                                switch (s.action) {
                                    case Gt.resultAction.AddCell:
                                        "right" === e
                                            ? r()(s.baseCell).after(
                                                  "<td" +
                                                      l +
                                                      ">" +
                                                      pt.blank +
                                                      "</td>"
                                              )
                                            : r()(s.baseCell).before(
                                                  "<td" +
                                                      l +
                                                      ">" +
                                                      pt.blank +
                                                      "</td>"
                                              );
                                        break;
                                    case Gt.resultAction.SumSpanCount:
                                        if ("right" === e) {
                                            var c = parseInt(
                                                s.baseCell.colSpan,
                                                10
                                            );
                                            c++,
                                                s.baseCell.setAttribute(
                                                    "colSpan",
                                                    c
                                                );
                                        } else
                                            r()(s.baseCell).before(
                                                "<td" +
                                                    l +
                                                    ">" +
                                                    pt.blank +
                                                    "</td>"
                                            );
                                }
                            }
                        },
                    },
                    {
                        key: "recoverAttributes",
                        value: function (t) {
                            var e = "";
                            if (!t) return e;
                            for (
                                var o = t.attributes || [], n = 0;
                                n < o.length;
                                n++
                            )
                                "id" !== o[n].name.toLowerCase() &&
                                    o[n].specified &&
                                    (e +=
                                        " " +
                                        o[n].name +
                                        "='" +
                                        o[n].value +
                                        "'");
                            return e;
                        },
                    },
                    {
                        key: "deleteRow",
                        value: function (t) {
                            for (
                                var e = pt.ancestor(
                                        t.commonAncestor(),
                                        pt.isCell
                                    ),
                                    o = r()(e).closest("tr"),
                                    n = o.children("td, th").index(r()(e)),
                                    i = o[0].rowIndex,
                                    a = new Gt(
                                        e,
                                        Gt.where.Row,
                                        Gt.requestAction.Delete,
                                        r()(o).closest("table")[0]
                                    ).getActionList(),
                                    s = 0;
                                s < a.length;
                                s++
                            )
                                if (a[s]) {
                                    var l = a[s].baseCell,
                                        c = a[s].virtualTable,
                                        u = l.rowSpan && l.rowSpan > 1,
                                        d = u ? parseInt(l.rowSpan, 10) : 0;
                                    switch (a[s].action) {
                                        case Gt.resultAction.Ignore:
                                            continue;
                                        case Gt.resultAction.AddCell:
                                            var f = o.next("tr")[0];
                                            if (!f) continue;
                                            var h = o[0].cells[n];
                                            u &&
                                                (d > 2
                                                    ? (d--,
                                                      f.insertBefore(
                                                          h,
                                                          f.cells[n]
                                                      ),
                                                      f.cells[n].setAttribute(
                                                          "rowSpan",
                                                          d
                                                      ),
                                                      (f.cells[n].innerHTML =
                                                          ""))
                                                    : 2 === d &&
                                                      (f.insertBefore(
                                                          h,
                                                          f.cells[n]
                                                      ),
                                                      f.cells[
                                                          n
                                                      ].removeAttribute(
                                                          "rowSpan"
                                                      ),
                                                      (f.cells[n].innerHTML =
                                                          "")));
                                            continue;
                                        case Gt.resultAction.SubtractSpanCount:
                                            u &&
                                                (d > 2
                                                    ? (d--,
                                                      l.setAttribute(
                                                          "rowSpan",
                                                          d
                                                      ),
                                                      c.rowIndex !== i &&
                                                          l.cellIndex === n &&
                                                          (l.innerHTML = ""))
                                                    : 2 === d &&
                                                      (l.removeAttribute(
                                                          "rowSpan"
                                                      ),
                                                      c.rowIndex !== i &&
                                                          l.cellIndex === n &&
                                                          (l.innerHTML = "")));
                                            continue;
                                        case Gt.resultAction.RemoveCell:
                                            continue;
                                    }
                                }
                            o.remove();
                        },
                    },
                    {
                        key: "deleteCol",
                        value: function (t) {
                            for (
                                var e = pt.ancestor(
                                        t.commonAncestor(),
                                        pt.isCell
                                    ),
                                    o = r()(e).closest("tr"),
                                    n = o.children("td, th").index(r()(e)),
                                    i = new Gt(
                                        e,
                                        Gt.where.Column,
                                        Gt.requestAction.Delete,
                                        r()(o).closest("table")[0]
                                    ).getActionList(),
                                    a = 0;
                                a < i.length;
                                a++
                            )
                                if (i[a])
                                    switch (i[a].action) {
                                        case Gt.resultAction.Ignore:
                                            continue;
                                        case Gt.resultAction.SubtractSpanCount:
                                            var s = i[a].baseCell;
                                            if (s.colSpan && s.colSpan > 1) {
                                                var l = s.colSpan
                                                    ? parseInt(s.colSpan, 10)
                                                    : 0;
                                                l > 2
                                                    ? (l--,
                                                      s.setAttribute(
                                                          "colSpan",
                                                          l
                                                      ),
                                                      s.cellIndex === n &&
                                                          (s.innerHTML = ""))
                                                    : 2 === l &&
                                                      (s.removeAttribute(
                                                          "colSpan"
                                                      ),
                                                      s.cellIndex === n &&
                                                          (s.innerHTML = ""));
                                            }
                                            continue;
                                        case Gt.resultAction.RemoveCell:
                                            pt.remove(i[a].baseCell, !0);
                                            continue;
                                    }
                        },
                    },
                    {
                        key: "createTable",
                        value: function (t, e, o) {
                            for (var n, i = [], a = 0; a < t; a++)
                                i.push("<td>" + pt.blank + "</td>");
                            n = i.join("");
                            for (var s, l = [], c = 0; c < e; c++)
                                l.push("<tr>" + n + "</tr>");
                            s = l.join("");
                            var u = r()("<table>" + s + "</table>");
                            return (
                                o &&
                                    o.tableClassName &&
                                    u.addClass(o.tableClassName),
                                u[0]
                            );
                        },
                    },
                    {
                        key: "deleteTable",
                        value: function (t) {
                            var e = pt.ancestor(t.commonAncestor(), pt.isCell);
                            r()(e).closest("table").remove();
                        },
                    },
                ]),
                e && Vt(t.prototype, e),
                o && Vt(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Yt(t) {
            return (
                (Yt =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Yt(t)
            );
        }
        function Xt(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Qt(n.key), n);
            }
        }
        function Qt(t) {
            var e = (function (t, e) {
                if ("object" != Yt(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Yt(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Yt(e) ? e : e + "";
        }
        var Jt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            te = /^(\+?\d{1,3}[\s-]?)?(\d{1,4})[\s-]?(\d{1,4})[\s-]?(\d{1,4})$/,
            ee = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/,
            oe = (function () {
                return (
                    (t = function t(e) {
                        var o = this;
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.context = e),
                            (this.$note = e.layoutInfo.note),
                            (this.$editor = e.layoutInfo.editor),
                            (this.$editable = e.layoutInfo.editable),
                            (this.options = e.options),
                            (this.lang = this.options.langInfo),
                            (this.editable = this.$editable[0]),
                            (this.lastRange = null),
                            (this.snapshot = null),
                            (this.style = new Ht()),
                            (this.table = new Zt()),
                            (this.typing = new Kt(e)),
                            (this.bullet = new zt()),
                            (this.history = new At(e)),
                            this.context.memo(
                                "help.escape",
                                this.lang.help.escape
                            ),
                            this.context.memo("help.undo", this.lang.help.undo),
                            this.context.memo("help.redo", this.lang.help.redo),
                            this.context.memo("help.tab", this.lang.help.tab),
                            this.context.memo(
                                "help.untab",
                                this.lang.help.untab
                            ),
                            this.context.memo(
                                "help.insertParagraph",
                                this.lang.help.insertParagraph
                            ),
                            this.context.memo(
                                "help.insertOrderedList",
                                this.lang.help.insertOrderedList
                            ),
                            this.context.memo(
                                "help.insertUnorderedList",
                                this.lang.help.insertUnorderedList
                            ),
                            this.context.memo(
                                "help.indent",
                                this.lang.help.indent
                            ),
                            this.context.memo(
                                "help.outdent",
                                this.lang.help.outdent
                            ),
                            this.context.memo(
                                "help.formatPara",
                                this.lang.help.formatPara
                            ),
                            this.context.memo(
                                "help.insertHorizontalRule",
                                this.lang.help.insertHorizontalRule
                            ),
                            this.context.memo(
                                "help.fontName",
                                this.lang.help.fontName
                            );
                        for (
                            var n = [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strikethrough",
                                    "superscript",
                                    "subscript",
                                    "justifyLeft",
                                    "justifyCenter",
                                    "justifyRight",
                                    "justifyFull",
                                    "formatBlock",
                                    "removeFormat",
                                    "backColor",
                                ],
                                i = 0,
                                a = n.length;
                            i < a;
                            i++
                        )
                            (this[n[i]] = (function (t) {
                                return function (e) {
                                    o.beforeCommand(),
                                        document.execCommand(t, !1, e),
                                        o.afterCommand(!0);
                                };
                            })(n[i])),
                                this.context.memo(
                                    "help." + n[i],
                                    this.lang.help[n[i]]
                                );
                        (this.fontName = this.wrapCommand(function (t) {
                            return o.fontStyling(
                                "font-family",
                                m.validFontName(t)
                            );
                        })),
                            (this.fontSize = this.wrapCommand(function (t) {
                                var e = o.currentStyle()["font-size-unit"];
                                return o.fontStyling("font-size", t + e);
                            })),
                            (this.fontSizeUnit = this.wrapCommand(function (t) {
                                var e = o.currentStyle()["font-size"];
                                return o.fontStyling("font-size", e + t);
                            }));
                        for (var s = 1; s <= 6; s++)
                            (this["formatH" + s] = (function (t) {
                                return function () {
                                    o.formatBlock("H" + t);
                                };
                            })(s)),
                                this.context.memo(
                                    "help.formatH" + s,
                                    this.lang.help["formatH" + s]
                                );
                        (this.insertParagraph = this.wrapCommand(function () {
                            o.typing.insertParagraph(o.editable);
                        })),
                            (this.insertOrderedList = this.wrapCommand(
                                function () {
                                    o.bullet.insertOrderedList(o.editable);
                                }
                            )),
                            (this.insertUnorderedList = this.wrapCommand(
                                function () {
                                    o.bullet.insertUnorderedList(o.editable);
                                }
                            )),
                            (this.indent = this.wrapCommand(function () {
                                o.bullet.indent(o.editable);
                            })),
                            (this.outdent = this.wrapCommand(function () {
                                o.bullet.outdent(o.editable);
                            })),
                            (this.insertNode = this.wrapCommand(function (t) {
                                o.isLimited(r()(t).text().length) ||
                                    (o.getLastRange().insertNode(t),
                                    o.setLastRange(
                                        Et.createFromNodeAfter(t).select()
                                    ));
                            })),
                            (this.insertText = this.wrapCommand(function (t) {
                                if (!o.isLimited(t.length)) {
                                    var e = o
                                        .getLastRange()
                                        .insertNode(pt.createText(t));
                                    o.setLastRange(
                                        Et.create(e, pt.nodeLength(e)).select()
                                    );
                                }
                            })),
                            (this.pasteHTML = this.wrapCommand(function (t) {
                                if (!o.isLimited(t.length)) {
                                    t = o.context.invoke("codeview.purify", t);
                                    var e = o.getLastRange().pasteHTML(t);
                                    o.setLastRange(
                                        Et.createFromNodeAfter(
                                            C.last(e)
                                        ).select()
                                    );
                                }
                            })),
                            (this.formatBlock = this.wrapCommand(function (
                                t,
                                e
                            ) {
                                var n = o.options.callbacks.onApplyCustomStyle;
                                n
                                    ? n.call(o, e, o.context, o.onFormatBlock)
                                    : o.onFormatBlock(t, e);
                            })),
                            (this.insertHorizontalRule = this.wrapCommand(
                                function () {
                                    var t = o
                                        .getLastRange()
                                        .insertNode(pt.create("HR"));
                                    t.nextSibling &&
                                        o.setLastRange(
                                            Et.create(t.nextSibling, 0)
                                                .normalize()
                                                .select()
                                        );
                                }
                            )),
                            (this.lineHeight = this.wrapCommand(function (t) {
                                o.style.stylePara(o.getLastRange(), {
                                    lineHeight: t,
                                });
                            })),
                            (this.createLink = this.wrapCommand(function (t) {
                                var e = [],
                                    n = t.url,
                                    i = t.text,
                                    a = t.isNewWindow,
                                    s = o.options.linkAddNoReferrer,
                                    l = o.options.linkAddNoOpener,
                                    c = t.range || o.getLastRange(),
                                    u = i.length - c.toString().length;
                                if (!(u > 0 && o.isLimited(u))) {
                                    var d = c.toString() !== i;
                                    "string" == typeof n && (n = n.trim()),
                                        (n = o.options.onCreateLink
                                            ? o.options.onCreateLink(n)
                                            : o.checkLinkUrl(n));
                                    var f = [];
                                    if (d) {
                                        var h = (c =
                                            c.deleteContents()).insertNode(
                                            r()("<A></A>").text(i)[0]
                                        );
                                        f.push(h);
                                    } else
                                        f = o.style.styleNodes(c, {
                                            nodeName: "A",
                                            expandClosestSibling: !0,
                                            onlyPartialContains: !0,
                                        });
                                    r().each(f, function (t, o) {
                                        r()(o).attr("href", n),
                                            a
                                                ? (r()(o).attr(
                                                      "target",
                                                      "_blank"
                                                  ),
                                                  s && e.push("noreferrer"),
                                                  l && e.push("noopener"),
                                                  e.length &&
                                                      r()(o).attr(
                                                          "rel",
                                                          e.join(" ")
                                                      ))
                                                : r()(o).removeAttr("target");
                                    }),
                                        o.setLastRange(
                                            o.createRangeFromList(f).select()
                                        );
                                }
                            })),
                            (this.color = this.wrapCommand(function (t) {
                                var e = t.foreColor,
                                    o = t.backColor;
                                e && document.execCommand("foreColor", !1, e),
                                    o &&
                                        document.execCommand(
                                            "backColor",
                                            !1,
                                            o
                                        );
                            })),
                            (this.foreColor = this.wrapCommand(function (t) {
                                document.execCommand("foreColor", !1, t);
                            })),
                            (this.insertTable = this.wrapCommand(function (t) {
                                var e = t.split("x");
                                o.getLastRange()
                                    .deleteContents()
                                    .insertNode(
                                        o.table.createTable(
                                            e[0],
                                            e[1],
                                            o.options
                                        )
                                    );
                            })),
                            (this.removeMedia = this.wrapCommand(function () {
                                var t = r()(o.restoreTarget()).parent();
                                t.closest("figure").length
                                    ? t.closest("figure").remove()
                                    : (t = r()(o.restoreTarget()).detach()),
                                    o.setLastRange(
                                        Et.createFromSelection(t).select()
                                    ),
                                    o.context.triggerEvent(
                                        "media.delete",
                                        t,
                                        o.$editable
                                    );
                            })),
                            (this.floatMe = this.wrapCommand(function (t) {
                                var e = r()(o.restoreTarget());
                                e.toggleClass("note-float-left", "left" === t),
                                    e.toggleClass(
                                        "note-float-right",
                                        "right" === t
                                    ),
                                    e.css("float", "none" === t ? "" : t);
                            })),
                            (this.resize = this.wrapCommand(function (t) {
                                var e = r()(o.restoreTarget());
                                0 === (t = parseFloat(t))
                                    ? e.css("width", "")
                                    : e.css({
                                          width: 100 * t + "%",
                                          height: "",
                                      });
                            }));
                    }),
                    (e = [
                        {
                            key: "initialize",
                            value: function () {
                                var t = this;
                                this.$editable
                                    .on("keydown", function (e) {
                                        if (
                                            (e.keyCode === Nt.code.ENTER &&
                                                t.context.triggerEvent(
                                                    "enter",
                                                    e
                                                ),
                                            t.context.triggerEvent(
                                                "keydown",
                                                e
                                            ),
                                            (t.snapshot =
                                                t.history.makeSnapshot()),
                                            (t.hasKeyShortCut = !1),
                                            e.isDefaultPrevented() ||
                                                (t.options.shortcuts
                                                    ? (t.hasKeyShortCut =
                                                          t.handleKeyMap(e))
                                                    : t.preventDefaultEditableShortCuts(
                                                          e
                                                      )),
                                            t.isLimited(1, e))
                                        ) {
                                            var o = t.getLastRange();
                                            if (o.eo - o.so == 0) return !1;
                                        }
                                        t.setLastRange(),
                                            t.options.recordEveryKeystroke &&
                                                !1 === t.hasKeyShortCut &&
                                                t.history.recordUndo();
                                    })
                                    .on("keyup", function (e) {
                                        t.setLastRange(),
                                            t.context.triggerEvent("keyup", e);
                                    })
                                    .on("focus", function (e) {
                                        t.setLastRange(),
                                            t.context.triggerEvent("focus", e);
                                    })
                                    .on("blur", function (e) {
                                        t.context.triggerEvent("blur", e);
                                    })
                                    .on("mousedown", function (e) {
                                        t.context.triggerEvent("mousedown", e);
                                    })
                                    .on("mouseup", function (e) {
                                        t.setLastRange(),
                                            t.history.recordUndo(),
                                            t.context.triggerEvent(
                                                "mouseup",
                                                e
                                            );
                                    })
                                    .on("scroll", function (e) {
                                        t.context.triggerEvent("scroll", e);
                                    })
                                    .on("paste", function (e) {
                                        t.setLastRange(),
                                            t.context.triggerEvent("paste", e);
                                    })
                                    .on("copy", function (e) {
                                        t.context.triggerEvent("copy", e);
                                    })
                                    .on("input", function () {
                                        t.isLimited(0) &&
                                            t.snapshot &&
                                            t.history.applySnapshot(t.snapshot);
                                    }),
                                    this.$editable.attr(
                                        "spellcheck",
                                        this.options.spellCheck
                                    ),
                                    this.$editable.attr(
                                        "autocorrect",
                                        this.options.spellCheck
                                    ),
                                    this.options.disableGrammar &&
                                        this.$editable.attr("data-gramm", !1),
                                    this.$editable.html(
                                        pt.html(this.$note) || pt.emptyPara
                                    ),
                                    this.$editable.on(
                                        m.inputEventName,
                                        g.debounce(function () {
                                            t.context.triggerEvent(
                                                "change",
                                                t.$editable.html(),
                                                t.$editable
                                            );
                                        }, 10)
                                    ),
                                    this.$editable
                                        .on("focusin", function (e) {
                                            t.context.triggerEvent(
                                                "focusin",
                                                e
                                            );
                                        })
                                        .on("focusout", function (e) {
                                            t.context.triggerEvent(
                                                "focusout",
                                                e
                                            );
                                        }),
                                    this.options.airMode
                                        ? this.options.overrideContextMenu &&
                                          this.$editor.on(
                                              "contextmenu",
                                              function (e) {
                                                  return (
                                                      t.context.triggerEvent(
                                                          "contextmenu",
                                                          e
                                                      ),
                                                      !1
                                                  );
                                              }
                                          )
                                        : (this.options.width &&
                                              this.$editor.outerWidth(
                                                  this.options.width
                                              ),
                                          this.options.height &&
                                              this.$editable.outerHeight(
                                                  this.options.height
                                              ),
                                          this.options.maxHeight &&
                                              this.$editable.css(
                                                  "max-height",
                                                  this.options.maxHeight
                                              ),
                                          this.options.minHeight &&
                                              this.$editable.css(
                                                  "min-height",
                                                  this.options.minHeight
                                              )),
                                    this.history.recordUndo(),
                                    this.setLastRange();
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.$editable.off();
                            },
                        },
                        {
                            key: "handleKeyMap",
                            value: function (t) {
                                var e =
                                        this.options.keyMap[
                                            m.isMac ? "mac" : "pc"
                                        ],
                                    o = [];
                                t.metaKey && o.push("CMD"),
                                    t.ctrlKey && !t.altKey && o.push("CTRL"),
                                    t.shiftKey && o.push("SHIFT");
                                var n = Nt.nameFromCode[t.keyCode];
                                n && o.push(n);
                                var i = e[o.join("+")];
                                if ("TAB" !== n || this.options.tabDisable)
                                    if (i) {
                                        if (!1 !== this.context.invoke(i))
                                            return t.preventDefault(), !0;
                                    } else
                                        Nt.isEdit(t.keyCode) &&
                                            (Nt.isRemove(t.keyCode) &&
                                                this.context.invoke("removed"),
                                            this.afterCommand());
                                else this.afterCommand();
                                return !1;
                            },
                        },
                        {
                            key: "preventDefaultEditableShortCuts",
                            value: function (t) {
                                (t.ctrlKey || t.metaKey) &&
                                    C.contains([66, 73, 85], t.keyCode) &&
                                    t.preventDefault();
                            },
                        },
                        {
                            key: "isLimited",
                            value: function (t, e) {
                                return (
                                    (t = t || 0),
                                    (void 0 === e ||
                                        !(
                                            Nt.isMove(e.keyCode) ||
                                            Nt.isNavigation(e.keyCode) ||
                                            e.ctrlKey ||
                                            e.metaKey ||
                                            C.contains(
                                                [
                                                    Nt.code.BACKSPACE,
                                                    Nt.code.DELETE,
                                                ],
                                                e.keyCode
                                            )
                                        )) &&
                                        this.options.maxTextLength > 0 &&
                                        this.$editable.text().length + t >
                                            this.options.maxTextLength
                                );
                            },
                        },
                        {
                            key: "checkLinkUrl",
                            value: function (t) {
                                return Jt.test(t)
                                    ? "mailto://" + t
                                    : te.test(t)
                                    ? "tel://" + t
                                    : ee.test(t)
                                    ? t
                                    : "http://" + t;
                            },
                        },
                        {
                            key: "createRange",
                            value: function () {
                                return (
                                    this.focus(),
                                    this.setLastRange(),
                                    this.getLastRange()
                                );
                            },
                        },
                        {
                            key: "createRangeFromList",
                            value: function (t) {
                                var e = Et.createFromNodeBefore(
                                        C.head(t)
                                    ).getStartPoint(),
                                    o = Et.createFromNodeAfter(
                                        C.last(t)
                                    ).getEndPoint();
                                return Et.create(
                                    e.node,
                                    e.offset,
                                    o.node,
                                    o.offset
                                );
                            },
                        },
                        {
                            key: "setLastRange",
                            value: function (t) {
                                t
                                    ? (this.lastRange = t)
                                    : ((this.lastRange = Et.create(
                                          this.editable
                                      )),
                                      0 ===
                                          r()(this.lastRange.sc).closest(
                                              ".note-editable"
                                          ).length &&
                                          (this.lastRange =
                                              Et.createFromBodyElement(
                                                  this.editable
                                              )));
                            },
                        },
                        {
                            key: "getLastRange",
                            value: function () {
                                return (
                                    this.lastRange || this.setLastRange(),
                                    this.lastRange
                                );
                            },
                        },
                        {
                            key: "saveRange",
                            value: function (t) {
                                t && this.getLastRange().collapse().select();
                            },
                        },
                        {
                            key: "restoreRange",
                            value: function () {
                                this.lastRange &&
                                    (this.lastRange.select(), this.focus());
                            },
                        },
                        {
                            key: "saveTarget",
                            value: function (t) {
                                this.$editable.data("target", t);
                            },
                        },
                        {
                            key: "clearTarget",
                            value: function () {
                                this.$editable.removeData("target");
                            },
                        },
                        {
                            key: "restoreTarget",
                            value: function () {
                                return this.$editable.data("target");
                            },
                        },
                        {
                            key: "currentStyle",
                            value: function () {
                                var t = Et.create();
                                return (
                                    t && (t = t.normalize()),
                                    t
                                        ? this.style.current(t)
                                        : this.style.fromNode(this.$editable)
                                );
                            },
                        },
                        {
                            key: "styleFromNode",
                            value: function (t) {
                                return this.style.fromNode(t);
                            },
                        },
                        {
                            key: "undo",
                            value: function () {
                                this.context.triggerEvent(
                                    "before.command",
                                    this.$editable.html()
                                ),
                                    this.history.undo(),
                                    this.context.triggerEvent(
                                        "change",
                                        this.$editable.html(),
                                        this.$editable
                                    );
                            },
                        },
                        {
                            key: "commit",
                            value: function () {
                                this.context.triggerEvent(
                                    "before.command",
                                    this.$editable.html()
                                ),
                                    this.history.commit(),
                                    this.context.triggerEvent(
                                        "change",
                                        this.$editable.html(),
                                        this.$editable
                                    );
                            },
                        },
                        {
                            key: "redo",
                            value: function () {
                                this.context.triggerEvent(
                                    "before.command",
                                    this.$editable.html()
                                ),
                                    this.history.redo(),
                                    this.context.triggerEvent(
                                        "change",
                                        this.$editable.html(),
                                        this.$editable
                                    );
                            },
                        },
                        {
                            key: "beforeCommand",
                            value: function () {
                                this.context.triggerEvent(
                                    "before.command",
                                    this.$editable.html()
                                ),
                                    document.execCommand(
                                        "styleWithCSS",
                                        !1,
                                        this.options.styleWithCSS
                                    ),
                                    this.focus();
                            },
                        },
                        {
                            key: "afterCommand",
                            value: function (t) {
                                this.normalizeContent(),
                                    this.history.recordUndo(),
                                    t ||
                                        this.context.triggerEvent(
                                            "change",
                                            this.$editable.html(),
                                            this.$editable
                                        );
                            },
                        },
                        {
                            key: "tab",
                            value: function () {
                                var t = this.getLastRange();
                                if (t.isCollapsed() && t.isOnCell())
                                    this.table.tab(t);
                                else {
                                    if (0 === this.options.tabSize) return !1;
                                    this.isLimited(this.options.tabSize) ||
                                        (this.beforeCommand(),
                                        this.typing.insertTab(
                                            t,
                                            this.options.tabSize
                                        ),
                                        this.afterCommand());
                                }
                            },
                        },
                        {
                            key: "untab",
                            value: function () {
                                var t = this.getLastRange();
                                if (t.isCollapsed() && t.isOnCell())
                                    this.table.tab(t, !0);
                                else if (0 === this.options.tabSize) return !1;
                            },
                        },
                        {
                            key: "wrapCommand",
                            value: function (t) {
                                return function () {
                                    this.beforeCommand(),
                                        t.apply(this, arguments),
                                        this.afterCommand();
                                };
                            },
                        },
                        {
                            key: "removed",
                            value: function (t, e, o) {
                                (t = Et.create()).isCollapsed() &&
                                    t.isOnCell() &&
                                    (o = (e = t.ec).tagName) &&
                                    1 === e.childElementCount &&
                                    "BR" === e.childNodes[0].tagName &&
                                    ("P" === o
                                        ? e.remove()
                                        : ["TH", "TD"].indexOf(o) >= 0 &&
                                          e.firstChild.remove());
                            },
                        },
                        {
                            key: "insertImage",
                            value: function (t, e) {
                                var o,
                                    n = this;
                                return ((o = t),
                                r()
                                    .Deferred(function (t) {
                                        var e = r()("<img>");
                                        e.one("load", function () {
                                            e.off("error abort"), t.resolve(e);
                                        })
                                            .one("error abort", function () {
                                                e.off("load").detach(),
                                                    t.reject(e);
                                            })
                                            .css({ display: "none" })
                                            .appendTo(document.body)
                                            .attr("src", o);
                                    })
                                    .promise())
                                    .then(function (t) {
                                        n.beforeCommand(),
                                            "function" == typeof e
                                                ? e(t)
                                                : ("string" == typeof e &&
                                                      t.attr(
                                                          "data-filename",
                                                          e
                                                      ),
                                                  t.css(
                                                      "width",
                                                      Math.min(
                                                          n.$editable.width(),
                                                          t.width()
                                                      )
                                                  )),
                                            t.show(),
                                            n.getLastRange().insertNode(t[0]),
                                            n.setLastRange(
                                                Et.createFromNodeAfter(
                                                    t[0]
                                                ).select()
                                            ),
                                            n.afterCommand();
                                    })
                                    .fail(function (t) {
                                        n.context.triggerEvent(
                                            "image.upload.error",
                                            t
                                        );
                                    });
                            },
                        },
                        {
                            key: "insertImagesAsDataURL",
                            value: function (t) {
                                var e = this;
                                r().each(t, function (t, o) {
                                    var n = o.name;
                                    e.options.maximumImageFileSize &&
                                    e.options.maximumImageFileSize < o.size
                                        ? e.context.triggerEvent(
                                              "image.upload.error",
                                              e.lang.image.maximumFileSizeError
                                          )
                                        : (function (t) {
                                              return r()
                                                  .Deferred(function (e) {
                                                      r()
                                                          .extend(
                                                              new FileReader(),
                                                              {
                                                                  onload: function (
                                                                      t
                                                                  ) {
                                                                      var o =
                                                                          t
                                                                              .target
                                                                              .result;
                                                                      e.resolve(
                                                                          o
                                                                      );
                                                                  },
                                                                  onerror:
                                                                      function (
                                                                          t
                                                                      ) {
                                                                          e.reject(
                                                                              t
                                                                          );
                                                                      },
                                                              }
                                                          )
                                                          .readAsDataURL(t);
                                                  })
                                                  .promise();
                                          })(o)
                                              .then(function (t) {
                                                  return e.insertImage(t, n);
                                              })
                                              .fail(function () {
                                                  e.context.triggerEvent(
                                                      "image.upload.error"
                                                  );
                                              });
                                });
                            },
                        },
                        {
                            key: "insertImagesOrCallback",
                            value: function (t) {
                                this.options.callbacks.onImageUpload
                                    ? this.context.triggerEvent(
                                          "image.upload",
                                          t
                                      )
                                    : this.insertImagesAsDataURL(t);
                            },
                        },
                        {
                            key: "getSelectedText",
                            value: function () {
                                var t = this.getLastRange();
                                return (
                                    t.isOnAnchor() &&
                                        (t = Et.createFromNode(
                                            pt.ancestor(t.sc, pt.isAnchor)
                                        )),
                                    t.toString()
                                );
                            },
                        },
                        {
                            key: "onFormatBlock",
                            value: function (t, e) {
                                if (
                                    (document.execCommand(
                                        "FormatBlock",
                                        !1,
                                        m.isMSIE ? "<" + t + ">" : t
                                    ),
                                    e &&
                                        e.length &&
                                        (e[0].tagName.toUpperCase() !==
                                            t.toUpperCase() && (e = e.find(t)),
                                        e && e.length))
                                ) {
                                    var o = this.createRange(),
                                        n = r()([o.sc, o.ec]).closest(t);
                                    n.removeClass();
                                    var i = e[0].className || "";
                                    i && n.addClass(i);
                                }
                            },
                        },
                        {
                            key: "formatPara",
                            value: function () {
                                this.formatBlock("P");
                            },
                        },
                        {
                            key: "fontStyling",
                            value: function (t, e) {
                                var o = this.getLastRange();
                                if ("" !== o) {
                                    var n = this.style.styleNodes(o);
                                    if (
                                        (this.$editor
                                            .find(".note-status-output")
                                            .html(""),
                                        r()(n).css(t, e),
                                        o.isCollapsed())
                                    ) {
                                        var i = C.head(n);
                                        i &&
                                            !pt.nodeLength(i) &&
                                            ((i.innerHTML =
                                                pt.ZERO_WIDTH_NBSP_CHAR),
                                            Et.createFromNode(
                                                i.firstChild
                                            ).select(),
                                            this.setLastRange(),
                                            this.$editable.data("bogus", i));
                                    } else o.select();
                                } else {
                                    var a = r().now();
                                    this.$editor
                                        .find(".note-status-output")
                                        .html(
                                            '<div id="note-status-output-' +
                                                a +
                                                '" class="alert alert-info">' +
                                                this.lang.output.noSelection +
                                                "</div>"
                                        ),
                                        setTimeout(function () {
                                            r()(
                                                "#note-status-output-" + a
                                            ).remove();
                                        }, 5e3);
                                }
                            },
                        },
                        {
                            key: "unlink",
                            value: function () {
                                var t = this.getLastRange();
                                if (t.isOnAnchor()) {
                                    var e = pt.ancestor(t.sc, pt.isAnchor);
                                    (t = Et.createFromNode(e)).select(),
                                        this.setLastRange(),
                                        this.beforeCommand(),
                                        document.execCommand("unlink"),
                                        this.afterCommand();
                                }
                            },
                        },
                        {
                            key: "getLinkInfo",
                            value: function () {
                                this.hasFocus() || this.focus();
                                var t = this.getLastRange().expand(pt.isAnchor),
                                    e = r()(C.head(t.nodes(pt.isAnchor))),
                                    o = {
                                        range: t,
                                        text: t.toString(),
                                        url: e.length ? e.attr("href") : "",
                                    };
                                return (
                                    e.length &&
                                        (o.isNewWindow =
                                            "_blank" === e.attr("target")),
                                    o
                                );
                            },
                        },
                        {
                            key: "addRow",
                            value: function (t) {
                                var e = this.getLastRange(this.$editable);
                                e.isCollapsed() &&
                                    e.isOnCell() &&
                                    (this.beforeCommand(),
                                    this.table.addRow(e, t),
                                    this.afterCommand());
                            },
                        },
                        {
                            key: "addCol",
                            value: function (t) {
                                var e = this.getLastRange(this.$editable);
                                e.isCollapsed() &&
                                    e.isOnCell() &&
                                    (this.beforeCommand(),
                                    this.table.addCol(e, t),
                                    this.afterCommand());
                            },
                        },
                        {
                            key: "deleteRow",
                            value: function () {
                                var t = this.getLastRange(this.$editable);
                                t.isCollapsed() &&
                                    t.isOnCell() &&
                                    (this.beforeCommand(),
                                    this.table.deleteRow(t),
                                    this.afterCommand());
                            },
                        },
                        {
                            key: "deleteCol",
                            value: function () {
                                var t = this.getLastRange(this.$editable);
                                t.isCollapsed() &&
                                    t.isOnCell() &&
                                    (this.beforeCommand(),
                                    this.table.deleteCol(t),
                                    this.afterCommand());
                            },
                        },
                        {
                            key: "deleteTable",
                            value: function () {
                                var t = this.getLastRange(this.$editable);
                                t.isCollapsed() &&
                                    t.isOnCell() &&
                                    (this.beforeCommand(),
                                    this.table.deleteTable(t),
                                    this.afterCommand());
                            },
                        },
                        {
                            key: "resizeTo",
                            value: function (t, e, o) {
                                var n;
                                if (o) {
                                    var i = t.y / t.x,
                                        r = e.data("ratio");
                                    n = {
                                        width: r > i ? t.x : t.y / r,
                                        height: r > i ? t.x * r : t.y,
                                    };
                                } else n = { width: t.x, height: t.y };
                                e.css(n);
                            },
                        },
                        {
                            key: "hasFocus",
                            value: function () {
                                return this.$editable.is(":focus");
                            },
                        },
                        {
                            key: "focus",
                            value: function () {
                                this.hasFocus() ||
                                    this.$editable.trigger("focus");
                            },
                        },
                        {
                            key: "isEmpty",
                            value: function () {
                                return (
                                    pt.isEmpty(this.$editable[0]) ||
                                    pt.emptyPara === this.$editable.html()
                                );
                            },
                        },
                        {
                            key: "empty",
                            value: function () {
                                this.context.invoke("code", pt.emptyPara);
                            },
                        },
                        {
                            key: "normalizeContent",
                            value: function () {
                                this.$editable[0].normalize();
                            },
                        },
                    ]),
                    e && Xt(t.prototype, e),
                    o && Xt(t, o),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, e, o;
            })();
        function ne(t) {
            return (
                (ne =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                ne(t)
            );
        }
        function ie(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, re(n.key), n);
            }
        }
        function re(t) {
            var e = (function (t, e) {
                if ("object" != ne(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != ne(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == ne(e) ? e : e + "";
        }
        var ae = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.options = e.options),
                        (this.$editable = e.layoutInfo.editable);
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            this.$editable.on(
                                "paste",
                                this.pasteByEvent.bind(this)
                            );
                        },
                    },
                    {
                        key: "pasteByEvent",
                        value: function (t) {
                            var e = this;
                            if (!this.context.isDisabled()) {
                                var o = t.originalEvent.clipboardData;
                                if (o && o.items && o.items.length) {
                                    var n = o.files,
                                        i = o.getData("Text");
                                    n.length > 0 &&
                                        this.options
                                            .allowClipboardImagePasting &&
                                        (this.context.invoke(
                                            "editor.insertImagesOrCallback",
                                            n
                                        ),
                                        t.preventDefault()),
                                        i.length > 0 &&
                                            this.context.invoke(
                                                "editor.isLimited",
                                                i.length
                                            ) &&
                                            t.preventDefault();
                                } else if (window.clipboardData) {
                                    var r =
                                        window.clipboardData.getData("text");
                                    this.context.invoke(
                                        "editor.isLimited",
                                        r.length
                                    ) && t.preventDefault();
                                }
                                setTimeout(function () {
                                    e.context.invoke("editor.afterCommand");
                                }, 10);
                            }
                        },
                    },
                ]) && ie(t.prototype, e),
                o && ie(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function se(t) {
            return (
                (se =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                se(t)
            );
        }
        function le(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, ce(n.key), n);
            }
        }
        function ce(t) {
            var e = (function (t, e) {
                if ("object" != se(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != se(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == se(e) ? e : e + "";
        }
        var ue = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.$eventListener = r()(document)),
                        (this.$editor = e.layoutInfo.editor),
                        (this.$editable = e.layoutInfo.editable),
                        (this.options = e.options),
                        (this.lang = this.options.langInfo),
                        (this.documentEventHandlers = {}),
                        (this.$dropzone = r()(
                            [
                                '<div class="note-dropzone">',
                                '<div class="note-dropzone-message"></div>',
                                "</div>",
                            ].join("")
                        ).prependTo(this.$editor));
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            this.options.disableDragAndDrop
                                ? ((this.documentEventHandlers.onDrop =
                                      function (t) {
                                          t.preventDefault();
                                      }),
                                  (this.$eventListener = this.$dropzone),
                                  this.$eventListener.on(
                                      "drop",
                                      this.documentEventHandlers.onDrop
                                  ))
                                : this.attachDragAndDropEvent();
                        },
                    },
                    {
                        key: "attachDragAndDropEvent",
                        value: function () {
                            var t = this,
                                e = r()(),
                                o = this.$dropzone.find(
                                    ".note-dropzone-message"
                                );
                            (this.documentEventHandlers.onDragenter = function (
                                n
                            ) {
                                var i = t.context.invoke(
                                        "codeview.isActivated"
                                    ),
                                    r =
                                        t.$editor.width() > 0 &&
                                        t.$editor.height() > 0;
                                i ||
                                    e.length ||
                                    !r ||
                                    (t.$editor.addClass("dragover"),
                                    t.$dropzone.width(t.$editor.width()),
                                    t.$dropzone.height(t.$editor.height()),
                                    o.text(t.lang.image.dragImageHere)),
                                    (e = e.add(n.target));
                            }),
                                (this.documentEventHandlers.onDragleave =
                                    function (o) {
                                        ((e = e.not(o.target)).length &&
                                            "BODY" !== o.target.nodeName) ||
                                            ((e = r()()),
                                            t.$editor.removeClass("dragover"));
                                    }),
                                (this.documentEventHandlers.onDrop =
                                    function () {
                                        (e = r()()),
                                            t.$editor.removeClass("dragover");
                                    }),
                                this.$eventListener
                                    .on(
                                        "dragenter",
                                        this.documentEventHandlers.onDragenter
                                    )
                                    .on(
                                        "dragleave",
                                        this.documentEventHandlers.onDragleave
                                    )
                                    .on(
                                        "drop",
                                        this.documentEventHandlers.onDrop
                                    ),
                                this.$dropzone
                                    .on("dragenter", function () {
                                        t.$dropzone.addClass("hover"),
                                            o.text(t.lang.image.dropImage);
                                    })
                                    .on("dragleave", function () {
                                        t.$dropzone.removeClass("hover"),
                                            o.text(t.lang.image.dragImageHere);
                                    }),
                                this.$dropzone
                                    .on("drop", function (e) {
                                        var o = e.originalEvent.dataTransfer;
                                        e.preventDefault(),
                                            o && o.files && o.files.length
                                                ? (t.$editable.trigger("focus"),
                                                  t.context.invoke(
                                                      "editor.insertImagesOrCallback",
                                                      o.files
                                                  ))
                                                : r().each(
                                                      o.types,
                                                      function (e, n) {
                                                          if (
                                                              !(
                                                                  n
                                                                      .toLowerCase()
                                                                      .indexOf(
                                                                          "_moz_"
                                                                      ) > -1
                                                              )
                                                          ) {
                                                              var i =
                                                                  o.getData(n);
                                                              n
                                                                  .toLowerCase()
                                                                  .indexOf(
                                                                      "text"
                                                                  ) > -1
                                                                  ? t.context.invoke(
                                                                        "editor.pasteHTML",
                                                                        i
                                                                    )
                                                                  : r()(i).each(
                                                                        function (
                                                                            e,
                                                                            o
                                                                        ) {
                                                                            t.context.invoke(
                                                                                "editor.insertNode",
                                                                                o
                                                                            );
                                                                        }
                                                                    );
                                                          }
                                                      }
                                                  );
                                    })
                                    .on("dragover", !1);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var t = this;
                            Object.keys(this.documentEventHandlers).forEach(
                                function (e) {
                                    t.$eventListener.off(
                                        e.slice(2).toLowerCase(),
                                        t.documentEventHandlers[e]
                                    );
                                }
                            ),
                                (this.documentEventHandlers = {});
                        },
                    },
                ]),
                e && le(t.prototype, e),
                o && le(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function de(t) {
            return (
                (de =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                de(t)
            );
        }
        function fe(t, e) {
            var o =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
            if (!o) {
                if (
                    Array.isArray(t) ||
                    (o = (function (t, e) {
                        if (t) {
                            if ("string" == typeof t) return he(t, e);
                            var o = {}.toString.call(t).slice(8, -1);
                            return (
                                "Object" === o &&
                                    t.constructor &&
                                    (o = t.constructor.name),
                                "Map" === o || "Set" === o
                                    ? Array.from(t)
                                    : "Arguments" === o ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          o
                                      )
                                    ? he(t, e)
                                    : void 0
                            );
                        }
                    })(t)) ||
                    (e && t && "number" == typeof t.length)
                ) {
                    o && (t = o);
                    var n = 0,
                        i = function () {};
                    return {
                        s: i,
                        n: function () {
                            return n >= t.length
                                ? { done: !0 }
                                : { done: !1, value: t[n++] };
                        },
                        e: function (t) {
                            throw t;
                        },
                        f: i,
                    };
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
            }
            var r,
                a = !0,
                s = !1;
            return {
                s: function () {
                    o = o.call(t);
                },
                n: function () {
                    var t = o.next();
                    return (a = t.done), t;
                },
                e: function (t) {
                    (s = !0), (r = t);
                },
                f: function () {
                    try {
                        a || null == o.return || o.return();
                    } finally {
                        if (s) throw r;
                    }
                },
            };
        }
        function he(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, n = Array(e); o < e; o++) n[o] = t[o];
            return n;
        }
        function pe(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, me(n.key), n);
            }
        }
        function me(t) {
            var e = (function (t, e) {
                if ("object" != de(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != de(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == de(e) ? e : e + "";
        }
        var ve = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.$editor = e.layoutInfo.editor),
                        (this.$editable = e.layoutInfo.editable),
                        (this.$codable = e.layoutInfo.codable),
                        (this.options = e.options),
                        (this.CodeMirrorConstructor = window.CodeMirror),
                        this.options.codemirror.CodeMirrorConstructor &&
                            (this.CodeMirrorConstructor =
                                this.options.codemirror.CodeMirrorConstructor);
                }),
                (e = [
                    {
                        key: "sync",
                        value: function (t) {
                            var e = this.isActivated(),
                                o = this.CodeMirrorConstructor;
                            e &&
                                (t
                                    ? o
                                        ? this.$codable
                                              .data("cmEditor")
                                              .getDoc()
                                              .setValue(t)
                                        : this.$codable.val(t)
                                    : o &&
                                      this.$codable.data("cmEditor").save());
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            this.$codable.on("keyup", function (e) {
                                e.keyCode === Nt.code.ESCAPE && t.deactivate();
                            });
                        },
                    },
                    {
                        key: "isActivated",
                        value: function () {
                            return this.$editor.hasClass("codeview");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.isActivated()
                                ? this.deactivate()
                                : this.activate(),
                                this.context.triggerEvent("codeview.toggled");
                        },
                    },
                    {
                        key: "purify",
                        value: function (t) {
                            if (
                                this.options.codeviewFilter &&
                                ((t = t.replace(
                                    this.options.codeviewFilterRegex,
                                    ""
                                )),
                                this.options.codeviewIframeFilter)
                            ) {
                                var e =
                                    this.options.codeviewIframeWhitelistSrc.concat(
                                        this.options
                                            .codeviewIframeWhitelistSrcBase
                                    );
                                t = t.replace(
                                    /(<iframe.*?>.*?(?:<\/iframe>)?)/gi,
                                    function (t) {
                                        if (
                                            /<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(
                                                t
                                            )
                                        )
                                            return "";
                                        var o,
                                            n = fe(e);
                                        try {
                                            for (n.s(); !(o = n.n()).done; ) {
                                                var i = o.value;
                                                if (
                                                    new RegExp(
                                                        'src="(https?:)?//' +
                                                            i.replace(
                                                                /[-\/\\^$*+?.()|[\]{}]/g,
                                                                "\\$&"
                                                            ) +
                                                            '/(.+)"'
                                                    ).test(t)
                                                )
                                                    return t;
                                            }
                                        } catch (t) {
                                            n.e(t);
                                        } finally {
                                            n.f();
                                        }
                                        return "";
                                    }
                                );
                            }
                            return t;
                        },
                    },
                    {
                        key: "activate",
                        value: function () {
                            var t = this,
                                e = this.CodeMirrorConstructor;
                            if (
                                (this.$codable.val(
                                    pt.html(
                                        this.$editable,
                                        this.options.prettifyHtml
                                    )
                                ),
                                this.$codable.height(this.$editable.height()),
                                this.context.invoke(
                                    "toolbar.updateCodeview",
                                    !0
                                ),
                                this.context.invoke(
                                    "airPopover.updateCodeview",
                                    !0
                                ),
                                this.$editor.addClass("codeview"),
                                this.$codable.trigger("focus"),
                                e)
                            ) {
                                var o = e.fromTextArea(
                                    this.$codable[0],
                                    this.options.codemirror
                                );
                                if (this.options.codemirror.tern) {
                                    var n = new e.TernServer(
                                        this.options.codemirror.tern
                                    );
                                    (o.ternServer = n),
                                        o.on("cursorActivity", function (t) {
                                            n.updateArgHints(t);
                                        });
                                }
                                o.on("blur", function (e) {
                                    t.context.triggerEvent(
                                        "blur.codeview",
                                        o.getValue(),
                                        e
                                    );
                                }),
                                    o.on("change", function () {
                                        t.context.triggerEvent(
                                            "change.codeview",
                                            o.getValue(),
                                            o
                                        );
                                    }),
                                    o.setSize(
                                        null,
                                        this.$editable.outerHeight()
                                    ),
                                    this.$codable.data("cmEditor", o);
                            } else
                                this.$codable.on("blur", function (e) {
                                    t.context.triggerEvent(
                                        "blur.codeview",
                                        t.$codable.val(),
                                        e
                                    );
                                }),
                                    this.$codable.on("input", function () {
                                        t.context.triggerEvent(
                                            "change.codeview",
                                            t.$codable.val(),
                                            t.$codable
                                        );
                                    });
                        },
                    },
                    {
                        key: "deactivate",
                        value: function () {
                            if (this.CodeMirrorConstructor) {
                                var t = this.$codable.data("cmEditor");
                                this.$codable.val(t.getValue()), t.toTextArea();
                            }
                            var e = this.purify(
                                    pt.value(
                                        this.$codable,
                                        this.options.prettifyHtml
                                    ) || pt.emptyPara
                                ),
                                o = this.$editable.html() !== e;
                            this.$editable.html(e),
                                this.$editable.height(
                                    this.options.height
                                        ? this.$codable.height()
                                        : "auto"
                                ),
                                this.$editor.removeClass("codeview"),
                                o &&
                                    this.context.triggerEvent(
                                        "change",
                                        this.$editable.html(),
                                        this.$editable
                                    ),
                                this.$editable.trigger("focus"),
                                this.context.invoke(
                                    "toolbar.updateCodeview",
                                    !1
                                ),
                                this.context.invoke(
                                    "airPopover.updateCodeview",
                                    !1
                                );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.isActivated() && this.deactivate();
                        },
                    },
                ]),
                e && pe(t.prototype, e),
                o && pe(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function ge(t) {
            return (
                (ge =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                ge(t)
            );
        }
        function be(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, ye(n.key), n);
            }
        }
        function ye(t) {
            var e = (function (t, e) {
                if ("object" != ge(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != ge(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == ge(e) ? e : e + "";
        }
        var ke = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.$document = r()(document)),
                        (this.$statusbar = e.layoutInfo.statusbar),
                        (this.$editable = e.layoutInfo.editable),
                        (this.$codable = e.layoutInfo.codable),
                        (this.options = e.options);
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            this.options.airMode ||
                            this.options.disableResizeEditor
                                ? this.destroy()
                                : this.$statusbar.on(
                                      "mousedown touchstart",
                                      function (e) {
                                          e.preventDefault(),
                                              e.stopPropagation();
                                          var o =
                                                  t.$editable.offset().top -
                                                  t.$document.scrollTop(),
                                              n =
                                                  t.$codable.offset().top -
                                                  t.$document.scrollTop(),
                                              i = function (e) {
                                                  var i =
                                                          "mousemove" == e.type
                                                              ? e
                                                              : e.originalEvent
                                                                    .touches[0],
                                                      r = i.clientY - (o + 24),
                                                      a = i.clientY - (n + 24);
                                                  (r =
                                                      t.options.minheight > 0
                                                          ? Math.max(
                                                                r,
                                                                t.options
                                                                    .minheight
                                                            )
                                                          : r),
                                                      (r =
                                                          t.options.maxHeight >
                                                          0
                                                              ? Math.min(
                                                                    r,
                                                                    t.options
                                                                        .maxHeight
                                                                )
                                                              : r),
                                                      (a =
                                                          t.options.minheight >
                                                          0
                                                              ? Math.max(
                                                                    a,
                                                                    t.options
                                                                        .minheight
                                                                )
                                                              : a),
                                                      (a =
                                                          t.options.maxHeight >
                                                          0
                                                              ? Math.min(
                                                                    a,
                                                                    t.options
                                                                        .maxHeight
                                                                )
                                                              : a),
                                                      t.$editable.height(r),
                                                      t.$codable.height(a);
                                              };
                                          t.$document
                                              .on("mousemove touchmove", i)
                                              .one(
                                                  "mouseup touchend",
                                                  function () {
                                                      t.$document.off(
                                                          "mousemove touchmove",
                                                          i
                                                      );
                                                  }
                                              );
                                      }
                                  );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$statusbar.off(),
                                this.$statusbar.addClass("locked");
                        },
                    },
                ]) && be(t.prototype, e),
                o && be(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function we(t) {
            return (
                (we =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                we(t)
            );
        }
        function Ce(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Se(n.key), n);
            }
        }
        function Se(t) {
            var e = (function (t, e) {
                if ("object" != we(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != we(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == we(e) ? e : e + "";
        }
        var xe = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.$editor = e.layoutInfo.editor),
                        (this.$toolbar = e.layoutInfo.toolbar),
                        (this.$editable = e.layoutInfo.editable),
                        (this.$codable = e.layoutInfo.codable),
                        (this.$window = r()(window)),
                        (this.$scrollbar = r()("html, body")),
                        (this.scrollbarClassName = "note-fullscreen-body"),
                        (this.onResize = function () {
                            o.resizeTo({
                                h:
                                    o.$window.height() -
                                    o.$toolbar.outerHeight(),
                            });
                        });
                }),
                (e = [
                    {
                        key: "resizeTo",
                        value: function (t) {
                            this.$editable.css("height", t.h),
                                this.$codable.css("height", t.h),
                                this.$codable.data("cmeditor") &&
                                    this.$codable
                                        .data("cmeditor")
                                        .setsize(null, t.h);
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.$editor.toggleClass("fullscreen");
                            var t = this.isFullscreen();
                            this.$scrollbar.toggleClass(
                                this.scrollbarClassName,
                                t
                            ),
                                t
                                    ? (this.$editable.data(
                                          "orgHeight",
                                          this.$editable.css("height")
                                      ),
                                      this.$editable.data(
                                          "orgMaxHeight",
                                          this.$editable.css("maxHeight")
                                      ),
                                      this.$editable.css("maxHeight", ""),
                                      this.$window
                                          .on("resize", this.onResize)
                                          .trigger("resize"))
                                    : (this.$window.off(
                                          "resize",
                                          this.onResize
                                      ),
                                      this.resizeTo({
                                          h: this.$editable.data("orgHeight"),
                                      }),
                                      this.$editable.css(
                                          "maxHeight",
                                          this.$editable.css("orgMaxHeight")
                                      )),
                                this.context.invoke(
                                    "toolbar.updateFullscreen",
                                    t
                                );
                        },
                    },
                    {
                        key: "isFullscreen",
                        value: function () {
                            return this.$editor.hasClass("fullscreen");
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$scrollbar.removeClass(
                                this.scrollbarClassName
                            );
                        },
                    },
                ]) && Ce(t.prototype, e),
                o && Ce(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Te(t) {
            return (
                (Te =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Te(t)
            );
        }
        function Ee(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Pe(n.key), n);
            }
        }
        function Pe(t) {
            var e = (function (t, e) {
                if ("object" != Te(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Te(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Te(e) ? e : e + "";
        }
        var Ne = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.$document = r()(document)),
                        (this.$editingArea = e.layoutInfo.editingArea),
                        (this.options = e.options),
                        (this.lang = this.options.langInfo),
                        (this.events = {
                            "summernote.mousedown": function (t, e) {
                                o.update(e.target, e) && e.preventDefault();
                            },
                            "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown":
                                function () {
                                    o.update();
                                },
                            "summernote.disable summernote.blur": function () {
                                o.hide();
                            },
                            "summernote.codeview.toggled": function () {
                                o.update();
                            },
                        });
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            (this.$handle = r()(
                                [
                                    '<div class="note-handle">',
                                    '<div class="note-control-selection">',
                                    '<div class="note-control-selection-bg"></div>',
                                    '<div class="note-control-holder note-control-nw"></div>',
                                    '<div class="note-control-holder note-control-ne"></div>',
                                    '<div class="note-control-holder note-control-sw"></div>',
                                    '<div class="',
                                    this.options.disableResizeImage
                                        ? "note-control-holder"
                                        : "note-control-sizing",
                                    ' note-control-se"></div>',
                                    this.options.disableResizeImage
                                        ? ""
                                        : '<div class="note-control-selection-info"></div>',
                                    "</div>",
                                    "</div>",
                                ].join("")
                            ).prependTo(this.$editingArea)),
                                this.$handle.on("mousedown", function (e) {
                                    if (pt.isControlSizing(e.target)) {
                                        e.preventDefault(), e.stopPropagation();
                                        var o = t.$handle
                                                .find(".note-control-selection")
                                                .data("target"),
                                            n = o.offset(),
                                            i = t.$document.scrollTop(),
                                            r = function (e) {
                                                t.context.invoke(
                                                    "editor.resizeTo",
                                                    {
                                                        x: e.clientX - n.left,
                                                        y:
                                                            e.clientY -
                                                            (n.top - i),
                                                    },
                                                    o,
                                                    !e.shiftKey
                                                ),
                                                    t.update(o[0], e);
                                            };
                                        t.$document
                                            .on("mousemove", r)
                                            .one("mouseup", function (e) {
                                                e.preventDefault(),
                                                    t.$document.off(
                                                        "mousemove",
                                                        r
                                                    ),
                                                    t.context.invoke(
                                                        "editor.afterCommand"
                                                    );
                                            }),
                                            o.data("ratio") ||
                                                o.data(
                                                    "ratio",
                                                    o.height() / o.width()
                                                );
                                    }
                                }),
                                this.$handle.on("wheel", function (e) {
                                    e.preventDefault(), t.update();
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$handle.remove();
                        },
                    },
                    {
                        key: "update",
                        value: function (t, e) {
                            if (this.context.isDisabled()) return !1;
                            var o = pt.isImg(t),
                                n = this.$handle.find(
                                    ".note-control-selection"
                                );
                            if (
                                (this.context.invoke(
                                    "imagePopover.update",
                                    t,
                                    e
                                ),
                                o)
                            ) {
                                var i = r()(t),
                                    a =
                                        this.$editingArea[0].getBoundingClientRect(),
                                    s = t.getBoundingClientRect();
                                n.css({
                                    display: "block",
                                    left: s.left - a.left,
                                    top: s.top - a.top,
                                    width: s.width,
                                    height: s.height,
                                }).data("target", i);
                                var l = new Image();
                                l.src = i.attr("src");
                                var c =
                                    s.width +
                                    "x" +
                                    s.height +
                                    " (" +
                                    this.lang.image.original +
                                    ": " +
                                    l.width +
                                    "x" +
                                    l.height +
                                    ")";
                                n.find(".note-control-selection-info").text(c),
                                    this.context.invoke("editor.saveTarget", t);
                            } else this.hide();
                            return o;
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.context.invoke("editor.clearTarget"),
                                this.$handle.children().hide();
                        },
                    },
                ]),
                e && Ee(t.prototype, e),
                o && Ee(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function $e(t) {
            return (
                ($e =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                $e(t)
            );
        }
        function Ie(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Re(n.key), n);
            }
        }
        function Re(t) {
            var e = (function (t, e) {
                if ("object" != $e(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != $e(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == $e(e) ? e : e + "";
        }
        var Ae =
                /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
            Le = (function () {
                return (
                    (t = function t(e) {
                        var o = this;
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.context = e),
                            (this.options = e.options),
                            (this.$editable = e.layoutInfo.editable),
                            (this.events = {
                                "summernote.keyup": function (t, e) {
                                    e.isDefaultPrevented() || o.handleKeyup(e);
                                },
                                "summernote.keydown": function (t, e) {
                                    o.handleKeydown(e);
                                },
                            });
                    }),
                    (e = [
                        {
                            key: "initialize",
                            value: function () {
                                this.lastWordRange = null;
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.lastWordRange = null;
                            },
                        },
                        {
                            key: "replace",
                            value: function () {
                                if (this.lastWordRange) {
                                    var t = this.lastWordRange.toString(),
                                        e = t.match(Ae);
                                    if (e && (e[1] || e[2])) {
                                        var o = e[1] ? t : "http://" + t,
                                            n = this.options
                                                .showDomainOnlyForAutolink
                                                ? t
                                                      .replace(
                                                          /^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i,
                                                          ""
                                                      )
                                                      .split("/")[0]
                                                : t,
                                            i = r()("<a></a>")
                                                .html(n)
                                                .attr("href", o)[0];
                                        this.context.options.linkTargetBlank &&
                                            r()(i).attr("target", "_blank"),
                                            this.lastWordRange.insertNode(i),
                                            (this.lastWordRange = null),
                                            this.context.invoke("editor.focus"),
                                            this.context.triggerEvent(
                                                "change",
                                                this.$editable.html(),
                                                this.$editable
                                            );
                                    }
                                }
                            },
                        },
                        {
                            key: "handleKeydown",
                            value: function (t) {
                                if (
                                    C.contains(
                                        [Nt.code.ENTER, Nt.code.SPACE],
                                        t.keyCode
                                    )
                                ) {
                                    var e = this.context
                                        .invoke("editor.createRange")
                                        .getWordRange();
                                    this.lastWordRange = e;
                                }
                            },
                        },
                        {
                            key: "handleKeyup",
                            value: function (t) {
                                (Nt.code.SPACE === t.keyCode ||
                                    (Nt.code.ENTER === t.keyCode &&
                                        !t.shiftKey)) &&
                                    this.replace();
                            },
                        },
                    ]) && Ie(t.prototype, e),
                    o && Ie(t, o),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, e, o;
            })();
        function Fe(t) {
            return (
                (Fe =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Fe(t)
            );
        }
        function De(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, He(n.key), n);
            }
        }
        function He(t) {
            var e = (function (t, e) {
                if ("object" != Fe(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Fe(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Fe(e) ? e : e + "";
        }
        var je = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.$note = e.layoutInfo.note),
                        (this.events = {
                            "summernote.change": function () {
                                o.$note.val(e.invoke("code"));
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return pt.isTextarea(this.$note[0]);
                        },
                    },
                ]) && De(t.prototype, e),
                o && De(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Be(t) {
            return (
                (Be =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Be(t)
            );
        }
        function Oe(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, ze(n.key), n);
            }
        }
        function ze(t) {
            var e = (function (t, e) {
                if ("object" != Be(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Be(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Be(e) ? e : e + "";
        }
        var Me = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.options = e.options.replace || {}),
                        (this.keys = [
                            Nt.code.ENTER,
                            Nt.code.SPACE,
                            Nt.code.PERIOD,
                            Nt.code.COMMA,
                            Nt.code.SEMICOLON,
                            Nt.code.SLASH,
                        ]),
                        (this.previousKeydownCode = null),
                        (this.events = {
                            "summernote.keyup": function (t, e) {
                                e.isDefaultPrevented() || o.handleKeyup(e);
                            },
                            "summernote.keydown": function (t, e) {
                                o.handleKeydown(e);
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return !!this.options.match;
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            this.lastWord = null;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.lastWord = null;
                        },
                    },
                    {
                        key: "replace",
                        value: function () {
                            if (this.lastWord) {
                                var t = this,
                                    e = this.lastWord.toString();
                                this.options.match(e, function (e) {
                                    if (e) {
                                        var o = "";
                                        if (
                                            ("string" == typeof e
                                                ? (o = pt.createText(e))
                                                : e instanceof jQuery
                                                ? (o = e[0])
                                                : e instanceof Node && (o = e),
                                            !o)
                                        )
                                            return;
                                        t.lastWord.insertNode(o),
                                            (t.lastWord = null),
                                            t.context.invoke("editor.focus");
                                    }
                                });
                            }
                        },
                    },
                    {
                        key: "handleKeydown",
                        value: function (t) {
                            if (
                                this.previousKeydownCode &&
                                C.contains(this.keys, this.previousKeydownCode)
                            )
                                this.previousKeydownCode = t.keyCode;
                            else {
                                if (C.contains(this.keys, t.keyCode)) {
                                    var e = this.context
                                        .invoke("editor.createRange")
                                        .getWordRange();
                                    this.lastWord = e;
                                }
                                this.previousKeydownCode = t.keyCode;
                            }
                        },
                    },
                    {
                        key: "handleKeyup",
                        value: function (t) {
                            C.contains(this.keys, t.keyCode) && this.replace();
                        },
                    },
                ]) && Oe(t.prototype, e),
                o && Oe(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Ue(t) {
            return (
                (Ue =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Ue(t)
            );
        }
        function We(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Ke(n.key), n);
            }
        }
        function Ke(t) {
            var e = (function (t, e) {
                if ("object" != Ue(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Ue(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Ue(e) ? e : e + "";
        }
        var qe = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.$editingArea = e.layoutInfo.editingArea),
                        (this.options = e.options),
                        !0 === this.options.inheritPlaceholder &&
                            (this.options.placeholder =
                                this.context.$note.attr("placeholder") ||
                                this.options.placeholder),
                        (this.events = {
                            "summernote.init summernote.change": function () {
                                o.update();
                            },
                            "summernote.codeview.toggled": function () {
                                o.update();
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return !!this.options.placeholder;
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            (this.$placeholder = r()(
                                '<div class="note-placeholder"></div>'
                            )),
                                this.$placeholder
                                    .on("click", function () {
                                        t.context.invoke("focus");
                                    })
                                    .html(this.options.placeholder)
                                    .prependTo(this.$editingArea),
                                this.update();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$placeholder.remove();
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var t =
                                !this.context.invoke("codeview.isActivated") &&
                                this.context.invoke("editor.isEmpty");
                            this.$placeholder.toggle(t);
                        },
                    },
                ]) && We(t.prototype, e),
                o && We(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Ve(t) {
            return (
                (Ve =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Ve(t)
            );
        }
        function _e(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Ge(n.key), n);
            }
        }
        function Ge(t) {
            var e = (function (t, e) {
                if ("object" != Ve(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Ve(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Ve(e) ? e : e + "";
        }
        var Ze = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.ui = r().summernote.ui),
                        (this.context = e),
                        (this.$toolbar = e.layoutInfo.toolbar),
                        (this.options = e.options),
                        (this.lang = this.options.langInfo),
                        (this.invertedKeyMap = g.invertObject(
                            this.options.keyMap[m.isMac ? "mac" : "pc"]
                        ));
                }),
                (e = [
                    {
                        key: "representShortcut",
                        value: function (t) {
                            var e = this.invertedKeyMap[t];
                            return this.options.shortcuts && e
                                ? (m.isMac &&
                                      (e = e
                                          .replace("CMD", "⌘")
                                          .replace("SHIFT", "⇧")),
                                  " (" +
                                      (e = e
                                          .replace("BACKSLASH", "\\")
                                          .replace("SLASH", "/")
                                          .replace("LEFTBRACKET", "[")
                                          .replace("RIGHTBRACKET", "]")) +
                                      ")")
                                : "";
                        },
                    },
                    {
                        key: "button",
                        value: function (t) {
                            return (
                                !this.options.tooltip &&
                                    t.tooltip &&
                                    delete t.tooltip,
                                (t.container = this.options.container),
                                this.ui.button(t)
                            );
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            this.addToolbarButtons(),
                                this.addImagePopoverButtons(),
                                this.addLinkPopoverButtons(),
                                this.addTablePopoverButtons(),
                                (this.fontInstalledMap = {});
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            delete this.fontInstalledMap;
                        },
                    },
                    {
                        key: "isFontInstalled",
                        value: function (t) {
                            return (
                                Object.prototype.hasOwnProperty.call(
                                    this.fontInstalledMap,
                                    t
                                ) ||
                                    (this.fontInstalledMap[t] =
                                        m.isFontInstalled(t) ||
                                        C.contains(
                                            this.options.fontNamesIgnoreCheck,
                                            t
                                        )),
                                this.fontInstalledMap[t]
                            );
                        },
                    },
                    {
                        key: "isFontDeservedToAdd",
                        value: function (t) {
                            return (
                                "" !== (t = t.toLowerCase()) &&
                                this.isFontInstalled(t) &&
                                -1 === m.genericFontFamilies.indexOf(t)
                            );
                        },
                    },
                    {
                        key: "colorPalette",
                        value: function (t, e, o, n) {
                            var i = this;
                            return this.ui
                                .buttonGroup({
                                    className: "note-color " + t,
                                    children: [
                                        this.button({
                                            className:
                                                "note-current-color-button",
                                            contents: this.ui.icon(
                                                this.options.icons.font +
                                                    " note-recent-color"
                                            ),
                                            tooltip: e,
                                            click: function (t) {
                                                var e = r()(t.currentTarget);
                                                o && n
                                                    ? i.context.invoke(
                                                          "editor.color",
                                                          {
                                                              backColor:
                                                                  e.attr(
                                                                      "data-backColor"
                                                                  ),
                                                              foreColor:
                                                                  e.attr(
                                                                      "data-foreColor"
                                                                  ),
                                                          }
                                                      )
                                                    : o
                                                    ? i.context.invoke(
                                                          "editor.color",
                                                          {
                                                              backColor:
                                                                  e.attr(
                                                                      "data-backColor"
                                                                  ),
                                                          }
                                                      )
                                                    : n &&
                                                      i.context.invoke(
                                                          "editor.color",
                                                          {
                                                              foreColor:
                                                                  e.attr(
                                                                      "data-foreColor"
                                                                  ),
                                                          }
                                                      );
                                            },
                                            callback: function (t) {
                                                var e =
                                                    t.find(
                                                        ".note-recent-color"
                                                    );
                                                o &&
                                                    (e.css(
                                                        "background-color",
                                                        i.options.colorButton
                                                            .backColor
                                                    ),
                                                    t.attr(
                                                        "data-backColor",
                                                        i.options.colorButton
                                                            .backColor
                                                    )),
                                                    n
                                                        ? (e.css(
                                                              "color",
                                                              i.options
                                                                  .colorButton
                                                                  .foreColor
                                                          ),
                                                          t.attr(
                                                              "data-foreColor",
                                                              i.options
                                                                  .colorButton
                                                                  .foreColor
                                                          ))
                                                        : e.css(
                                                              "color",
                                                              "transparent"
                                                          );
                                            },
                                        }),
                                        this.button({
                                            className: "dropdown-toggle",
                                            contents:
                                                this.ui.dropdownButtonContents(
                                                    "",
                                                    this.options
                                                ),
                                            tooltip: this.lang.color.more,
                                            data: { toggle: "dropdown" },
                                        }),
                                        this.ui.dropdown({
                                            items:
                                                (o
                                                    ? [
                                                          '<div class="note-palette">',
                                                          '<div class="note-palette-title">' +
                                                              this.lang.color
                                                                  .background +
                                                              "</div>",
                                                          "<div>",
                                                          '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">',
                                                          this.lang.color
                                                              .transparent,
                                                          "</button>",
                                                          "</div>",
                                                          '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>',
                                                          "<div>",
                                                          '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-' +
                                                              this.options.id +
                                                              '">',
                                                          this.lang.color
                                                              .cpSelect,
                                                          "</button>",
                                                          '<input type="color" id="backColorPicker-' +
                                                              this.options.id +
                                                              '" class="note-btn note-color-select-btn" value="' +
                                                              this.options
                                                                  .colorButton
                                                                  .backColor +
                                                              '" data-event="backColorPalette-' +
                                                              this.options.id +
                                                              '">',
                                                          "</div>",
                                                          '<div class="note-holder-custom" id="backColorPalette-' +
                                                              this.options.id +
                                                              '" data-event="backColor"></div>',
                                                          "</div>",
                                                      ].join("")
                                                    : "") +
                                                (n
                                                    ? [
                                                          '<div class="note-palette">',
                                                          '<div class="note-palette-title">' +
                                                              this.lang.color
                                                                  .foreground +
                                                              "</div>",
                                                          "<div>",
                                                          '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">',
                                                          this.lang.color
                                                              .resetToDefault,
                                                          "</button>",
                                                          "</div>",
                                                          '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>',
                                                          "<div>",
                                                          '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-' +
                                                              this.options.id +
                                                              '">',
                                                          this.lang.color
                                                              .cpSelect,
                                                          "</button>",
                                                          '<input type="color" id="foreColorPicker-' +
                                                              this.options.id +
                                                              '" class="note-btn note-color-select-btn" value="' +
                                                              this.options
                                                                  .colorButton
                                                                  .foreColor +
                                                              '" data-event="foreColorPalette-' +
                                                              this.options.id +
                                                              '">',
                                                          "</div>",
                                                          '<div class="note-holder-custom" id="foreColorPalette-' +
                                                              this.options.id +
                                                              '" data-event="foreColor"></div>',
                                                          "</div>",
                                                      ].join("")
                                                    : ""),
                                            callback: function (t) {
                                                t.find(".note-holder").each(
                                                    function (t, e) {
                                                        var o = r()(e);
                                                        o.append(
                                                            i.ui
                                                                .palette({
                                                                    colors: i
                                                                        .options
                                                                        .colors,
                                                                    colorsName:
                                                                        i
                                                                            .options
                                                                            .colorsName,
                                                                    eventName:
                                                                        o.data(
                                                                            "event"
                                                                        ),
                                                                    container:
                                                                        i
                                                                            .options
                                                                            .container,
                                                                    tooltip:
                                                                        i
                                                                            .options
                                                                            .tooltip,
                                                                })
                                                                .render()
                                                        );
                                                    }
                                                );
                                                var e = [
                                                    [
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                        "#FFFFFF",
                                                    ],
                                                ];
                                                t
                                                    .find(".note-holder-custom")
                                                    .each(function (t, o) {
                                                        var n = r()(o);
                                                        n.append(
                                                            i.ui
                                                                .palette({
                                                                    colors: e,
                                                                    colorsName:
                                                                        e,
                                                                    eventName:
                                                                        n.data(
                                                                            "event"
                                                                        ),
                                                                    container:
                                                                        i
                                                                            .options
                                                                            .container,
                                                                    tooltip:
                                                                        i
                                                                            .options
                                                                            .tooltip,
                                                                })
                                                                .render()
                                                        );
                                                    }),
                                                    t
                                                        .find(
                                                            "input[type=color]"
                                                        )
                                                        .each(function (e, o) {
                                                            r()(o).on(
                                                                "change",
                                                                function () {
                                                                    var e = t
                                                                            .find(
                                                                                "#" +
                                                                                    r()(
                                                                                        this
                                                                                    ).data(
                                                                                        "event"
                                                                                    )
                                                                            )
                                                                            .find(
                                                                                ".note-color-btn"
                                                                            )
                                                                            .first(),
                                                                        o =
                                                                            this.value.toUpperCase();
                                                                    e
                                                                        .css(
                                                                            "background-color",
                                                                            o
                                                                        )
                                                                        .attr(
                                                                            "aria-label",
                                                                            o
                                                                        )
                                                                        .attr(
                                                                            "data-value",
                                                                            o
                                                                        )
                                                                        .attr(
                                                                            "data-original-title",
                                                                            o
                                                                        ),
                                                                        e.trigger(
                                                                            "click"
                                                                        );
                                                                }
                                                            );
                                                        });
                                            },
                                            click: function (e) {
                                                e.stopPropagation();
                                                var o = r()("." + t).find(
                                                        ".note-dropdown-menu"
                                                    ),
                                                    n = r()(e.target),
                                                    a = n.data("event"),
                                                    s = n.attr("data-value");
                                                if ("openPalette" === a) {
                                                    var l = o.find("#" + s),
                                                        c = r()(
                                                            o
                                                                .find(
                                                                    "#" +
                                                                        l.data(
                                                                            "event"
                                                                        )
                                                                )
                                                                .find(
                                                                    ".note-color-row"
                                                                )[0]
                                                        ),
                                                        u = c
                                                            .find(
                                                                ".note-color-btn"
                                                            )
                                                            .last()
                                                            .detach(),
                                                        d = l.val();
                                                    u
                                                        .css(
                                                            "background-color",
                                                            d
                                                        )
                                                        .attr("aria-label", d)
                                                        .attr("data-value", d)
                                                        .attr(
                                                            "data-original-title",
                                                            d
                                                        ),
                                                        c.prepend(u),
                                                        l.trigger("click");
                                                } else {
                                                    if (
                                                        C.contains(
                                                            [
                                                                "backColor",
                                                                "foreColor",
                                                            ],
                                                            a
                                                        )
                                                    ) {
                                                        var f =
                                                                "backColor" ===
                                                                a
                                                                    ? "background-color"
                                                                    : "color",
                                                            h = n
                                                                .closest(
                                                                    ".note-color"
                                                                )
                                                                .find(
                                                                    ".note-recent-color"
                                                                ),
                                                            p = n
                                                                .closest(
                                                                    ".note-color"
                                                                )
                                                                .find(
                                                                    ".note-current-color-button"
                                                                );
                                                        h.css(f, s),
                                                            p.attr(
                                                                "data-" + a,
                                                                s
                                                            );
                                                    }
                                                    i.context.invoke(
                                                        "editor." + a,
                                                        s
                                                    );
                                                }
                                            },
                                        }),
                                    ],
                                })
                                .render();
                        },
                    },
                    {
                        key: "addToolbarButtons",
                        value: function () {
                            var t = this;
                            this.context.memo("button.style", function () {
                                return t.ui
                                    .buttonGroup([
                                        t.button({
                                            className: "dropdown-toggle",
                                            contents:
                                                t.ui.dropdownButtonContents(
                                                    t.ui.icon(
                                                        t.options.icons.magic
                                                    ),
                                                    t.options
                                                ),
                                            tooltip: t.lang.style.style,
                                            data: { toggle: "dropdown" },
                                        }),
                                        t.ui.dropdown({
                                            className: "dropdown-style",
                                            items: t.options.styleTags,
                                            title: t.lang.style.style,
                                            template: function (e) {
                                                "string" == typeof e &&
                                                    (e = {
                                                        tag: e,
                                                        title: Object.prototype.hasOwnProperty.call(
                                                            t.lang.style,
                                                            e
                                                        )
                                                            ? t.lang.style[e]
                                                            : e,
                                                    });
                                                var o = e.tag,
                                                    n = e.title;
                                                return (
                                                    "<" +
                                                    o +
                                                    (e.style
                                                        ? ' style="' +
                                                          e.style +
                                                          '" '
                                                        : "") +
                                                    (e.className
                                                        ? ' class="' +
                                                          e.className +
                                                          '"'
                                                        : "") +
                                                    ">" +
                                                    n +
                                                    "</" +
                                                    o +
                                                    ">"
                                                );
                                            },
                                            click: t.context.createInvokeHandler(
                                                "editor.formatBlock"
                                            ),
                                        }),
                                    ])
                                    .render();
                            });
                            for (
                                var e = function () {
                                        var e = t.options.styleTags[o];
                                        t.context.memo(
                                            "button.style." + e,
                                            function () {
                                                return t
                                                    .button({
                                                        className:
                                                            "note-btn-style-" +
                                                            e,
                                                        contents:
                                                            '<div data-value="' +
                                                            e +
                                                            '">' +
                                                            e.toUpperCase() +
                                                            "</div>",
                                                        tooltip:
                                                            t.lang.style[e],
                                                        click: t.context.createInvokeHandler(
                                                            "editor.formatBlock"
                                                        ),
                                                    })
                                                    .render();
                                            }
                                        );
                                    },
                                    o = 0,
                                    n = this.options.styleTags.length;
                                o < n;
                                o++
                            )
                                e();
                            this.context.memo("button.bold", function () {
                                return t
                                    .button({
                                        className: "note-btn-bold",
                                        contents: t.ui.icon(
                                            t.options.icons.bold
                                        ),
                                        tooltip:
                                            t.lang.font.bold +
                                            t.representShortcut("bold"),
                                        click: t.context.createInvokeHandlerAndUpdateState(
                                            "editor.bold"
                                        ),
                                    })
                                    .render();
                            }),
                                this.context.memo("button.italic", function () {
                                    return t
                                        .button({
                                            className: "note-btn-italic",
                                            contents: t.ui.icon(
                                                t.options.icons.italic
                                            ),
                                            tooltip:
                                                t.lang.font.italic +
                                                t.representShortcut("italic"),
                                            click: t.context.createInvokeHandlerAndUpdateState(
                                                "editor.italic"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo(
                                    "button.underline",
                                    function () {
                                        return t
                                            .button({
                                                className: "note-btn-underline",
                                                contents: t.ui.icon(
                                                    t.options.icons.underline
                                                ),
                                                tooltip:
                                                    t.lang.font.underline +
                                                    t.representShortcut(
                                                        "underline"
                                                    ),
                                                click: t.context.createInvokeHandlerAndUpdateState(
                                                    "editor.underline"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo("button.clear", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.eraser
                                            ),
                                            tooltip:
                                                t.lang.font.clear +
                                                t.representShortcut(
                                                    "removeFormat"
                                                ),
                                            click: t.context.createInvokeHandler(
                                                "editor.removeFormat"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo(
                                    "button.strikethrough",
                                    function () {
                                        return t
                                            .button({
                                                className:
                                                    "note-btn-strikethrough",
                                                contents: t.ui.icon(
                                                    t.options.icons
                                                        .strikethrough
                                                ),
                                                tooltip:
                                                    t.lang.font.strikethrough +
                                                    t.representShortcut(
                                                        "strikethrough"
                                                    ),
                                                click: t.context.createInvokeHandlerAndUpdateState(
                                                    "editor.strikethrough"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.superscript",
                                    function () {
                                        return t
                                            .button({
                                                className:
                                                    "note-btn-superscript",
                                                contents: t.ui.icon(
                                                    t.options.icons.superscript
                                                ),
                                                tooltip:
                                                    t.lang.font.superscript,
                                                click: t.context.createInvokeHandlerAndUpdateState(
                                                    "editor.superscript"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.subscript",
                                    function () {
                                        return t
                                            .button({
                                                className: "note-btn-subscript",
                                                contents: t.ui.icon(
                                                    t.options.icons.subscript
                                                ),
                                                tooltip: t.lang.font.subscript,
                                                click: t.context.createInvokeHandlerAndUpdateState(
                                                    "editor.subscript"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.fontname",
                                    function () {
                                        var e = t.context.invoke(
                                            "editor.currentStyle"
                                        );
                                        return (
                                            t.options.addDefaultFonts &&
                                                r().each(
                                                    e["font-family"].split(","),
                                                    function (e, o) {
                                                        (o = o
                                                            .trim()
                                                            .replace(
                                                                /['"]+/g,
                                                                ""
                                                            )),
                                                            t.isFontDeservedToAdd(
                                                                o
                                                            ) &&
                                                                -1 ===
                                                                    t.options.fontNames.indexOf(
                                                                        o
                                                                    ) &&
                                                                t.options.fontNames.push(
                                                                    o
                                                                );
                                                    }
                                                ),
                                            t.ui
                                                .buttonGroup([
                                                    t.button({
                                                        className:
                                                            "dropdown-toggle",
                                                        contents:
                                                            t.ui.dropdownButtonContents(
                                                                '<span class="note-current-fontname"></span>',
                                                                t.options
                                                            ),
                                                        tooltip:
                                                            t.lang.font.name,
                                                        data: {
                                                            toggle: "dropdown",
                                                        },
                                                    }),
                                                    t.ui.dropdownCheck({
                                                        className:
                                                            "dropdown-fontname",
                                                        checkClassName:
                                                            t.options.icons
                                                                .menuCheck,
                                                        items: t.options.fontNames.filter(
                                                            t.isFontInstalled.bind(
                                                                t
                                                            )
                                                        ),
                                                        title: t.lang.font.name,
                                                        template: function (t) {
                                                            return (
                                                                '<span style="font-family: ' +
                                                                m.validFontName(
                                                                    t
                                                                ) +
                                                                '">' +
                                                                t +
                                                                "</span>"
                                                            );
                                                        },
                                                        click: t.context.createInvokeHandlerAndUpdateState(
                                                            "editor.fontName"
                                                        ),
                                                    }),
                                                ])
                                                .render()
                                        );
                                    }
                                ),
                                this.context.memo(
                                    "button.fontsize",
                                    function () {
                                        return t.ui
                                            .buttonGroup([
                                                t.button({
                                                    className:
                                                        "dropdown-toggle",
                                                    contents:
                                                        t.ui.dropdownButtonContents(
                                                            '<span class="note-current-fontsize"></span>',
                                                            t.options
                                                        ),
                                                    tooltip: t.lang.font.size,
                                                    data: {
                                                        toggle: "dropdown",
                                                    },
                                                }),
                                                t.ui.dropdownCheck({
                                                    className:
                                                        "dropdown-fontsize",
                                                    checkClassName:
                                                        t.options.icons
                                                            .menuCheck,
                                                    items: t.options.fontSizes,
                                                    title: t.lang.font.size,
                                                    click: t.context.createInvokeHandlerAndUpdateState(
                                                        "editor.fontSize"
                                                    ),
                                                }),
                                            ])
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.fontsizeunit",
                                    function () {
                                        return t.ui
                                            .buttonGroup([
                                                t.button({
                                                    className:
                                                        "dropdown-toggle",
                                                    contents:
                                                        t.ui.dropdownButtonContents(
                                                            '<span class="note-current-fontsizeunit"></span>',
                                                            t.options
                                                        ),
                                                    tooltip:
                                                        t.lang.font.sizeunit,
                                                    data: {
                                                        toggle: "dropdown",
                                                    },
                                                }),
                                                t.ui.dropdownCheck({
                                                    className:
                                                        "dropdown-fontsizeunit",
                                                    checkClassName:
                                                        t.options.icons
                                                            .menuCheck,
                                                    items: t.options
                                                        .fontSizeUnits,
                                                    title: t.lang.font.sizeunit,
                                                    click: t.context.createInvokeHandlerAndUpdateState(
                                                        "editor.fontSizeUnit"
                                                    ),
                                                }),
                                            ])
                                            .render();
                                    }
                                ),
                                this.context.memo("button.color", function () {
                                    return t.colorPalette(
                                        "note-color-all",
                                        t.lang.color.recent,
                                        !0,
                                        !0
                                    );
                                }),
                                this.context.memo(
                                    "button.forecolor",
                                    function () {
                                        return t.colorPalette(
                                            "note-color-fore",
                                            t.lang.color.foreground,
                                            !1,
                                            !0
                                        );
                                    }
                                ),
                                this.context.memo(
                                    "button.backcolor",
                                    function () {
                                        return t.colorPalette(
                                            "note-color-back",
                                            t.lang.color.background,
                                            !0,
                                            !1
                                        );
                                    }
                                ),
                                this.context.memo("button.ul", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.unorderedlist
                                            ),
                                            tooltip:
                                                t.lang.lists.unordered +
                                                t.representShortcut(
                                                    "insertUnorderedList"
                                                ),
                                            click: t.context.createInvokeHandler(
                                                "editor.insertUnorderedList"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo("button.ol", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.orderedlist
                                            ),
                                            tooltip:
                                                t.lang.lists.ordered +
                                                t.representShortcut(
                                                    "insertOrderedList"
                                                ),
                                            click: t.context.createInvokeHandler(
                                                "editor.insertOrderedList"
                                            ),
                                        })
                                        .render();
                                });
                            var i = this.button({
                                    contents: this.ui.icon(
                                        this.options.icons.alignLeft
                                    ),
                                    tooltip:
                                        this.lang.paragraph.left +
                                        this.representShortcut("justifyLeft"),
                                    click: this.context.createInvokeHandler(
                                        "editor.justifyLeft"
                                    ),
                                }),
                                a = this.button({
                                    contents: this.ui.icon(
                                        this.options.icons.alignCenter
                                    ),
                                    tooltip:
                                        this.lang.paragraph.center +
                                        this.representShortcut("justifyCenter"),
                                    click: this.context.createInvokeHandler(
                                        "editor.justifyCenter"
                                    ),
                                }),
                                s = this.button({
                                    contents: this.ui.icon(
                                        this.options.icons.alignRight
                                    ),
                                    tooltip:
                                        this.lang.paragraph.right +
                                        this.representShortcut("justifyRight"),
                                    click: this.context.createInvokeHandler(
                                        "editor.justifyRight"
                                    ),
                                }),
                                l = this.button({
                                    contents: this.ui.icon(
                                        this.options.icons.alignJustify
                                    ),
                                    tooltip:
                                        this.lang.paragraph.justify +
                                        this.representShortcut("justifyFull"),
                                    click: this.context.createInvokeHandler(
                                        "editor.justifyFull"
                                    ),
                                }),
                                c = this.button({
                                    contents: this.ui.icon(
                                        this.options.icons.outdent
                                    ),
                                    tooltip:
                                        this.lang.paragraph.outdent +
                                        this.representShortcut("outdent"),
                                    click: this.context.createInvokeHandler(
                                        "editor.outdent"
                                    ),
                                }),
                                u = this.button({
                                    contents: this.ui.icon(
                                        this.options.icons.indent
                                    ),
                                    tooltip:
                                        this.lang.paragraph.indent +
                                        this.representShortcut("indent"),
                                    click: this.context.createInvokeHandler(
                                        "editor.indent"
                                    ),
                                });
                            this.context.memo(
                                "button.justifyLeft",
                                g.invoke(i, "render")
                            ),
                                this.context.memo(
                                    "button.justifyCenter",
                                    g.invoke(a, "render")
                                ),
                                this.context.memo(
                                    "button.justifyRight",
                                    g.invoke(s, "render")
                                ),
                                this.context.memo(
                                    "button.justifyFull",
                                    g.invoke(l, "render")
                                ),
                                this.context.memo(
                                    "button.outdent",
                                    g.invoke(c, "render")
                                ),
                                this.context.memo(
                                    "button.indent",
                                    g.invoke(u, "render")
                                ),
                                this.context.memo(
                                    "button.paragraph",
                                    function () {
                                        return t.ui
                                            .buttonGroup([
                                                t.button({
                                                    className:
                                                        "dropdown-toggle",
                                                    contents:
                                                        t.ui.dropdownButtonContents(
                                                            t.ui.icon(
                                                                t.options.icons
                                                                    .alignLeft
                                                            ),
                                                            t.options
                                                        ),
                                                    tooltip:
                                                        t.lang.paragraph
                                                            .paragraph,
                                                    data: {
                                                        toggle: "dropdown",
                                                    },
                                                }),
                                                t.ui.dropdown([
                                                    t.ui.buttonGroup({
                                                        className: "note-align",
                                                        children: [i, a, s, l],
                                                    }),
                                                    t.ui.buttonGroup({
                                                        className: "note-list",
                                                        children: [c, u],
                                                    }),
                                                ]),
                                            ])
                                            .render();
                                    }
                                ),
                                this.context.memo("button.height", function () {
                                    return t.ui
                                        .buttonGroup([
                                            t.button({
                                                className: "dropdown-toggle",
                                                contents:
                                                    t.ui.dropdownButtonContents(
                                                        t.ui.icon(
                                                            t.options.icons
                                                                .textHeight
                                                        ),
                                                        t.options
                                                    ),
                                                tooltip: t.lang.font.height,
                                                data: { toggle: "dropdown" },
                                            }),
                                            t.ui.dropdownCheck({
                                                items: t.options.lineHeights,
                                                checkClassName:
                                                    t.options.icons.menuCheck,
                                                className:
                                                    "dropdown-line-height",
                                                title: t.lang.font.height,
                                                click: t.context.createInvokeHandler(
                                                    "editor.lineHeight"
                                                ),
                                            }),
                                        ])
                                        .render();
                                }),
                                this.context.memo("button.table", function () {
                                    return t.ui
                                        .buttonGroup(
                                            [
                                                t.button({
                                                    className:
                                                        "dropdown-toggle",
                                                    contents:
                                                        t.ui.dropdownButtonContents(
                                                            t.ui.icon(
                                                                t.options.icons
                                                                    .table
                                                            ),
                                                            t.options
                                                        ),
                                                    tooltip: t.lang.table.table,
                                                    data: {
                                                        toggle: "dropdown",
                                                    },
                                                }),
                                                t.ui.dropdown({
                                                    title: t.lang.table.table,
                                                    className: "note-table",
                                                    items: [
                                                        '<div class="note-dimension-picker">',
                                                        '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
                                                        '<div class="note-dimension-picker-highlighted"></div>',
                                                        '<div class="note-dimension-picker-unhighlighted"></div>',
                                                        "</div>",
                                                        '<div class="note-dimension-display">1 x 1</div>',
                                                    ].join(""),
                                                }),
                                            ],
                                            {
                                                callback: function (e) {
                                                    e.find(
                                                        ".note-dimension-picker-mousecatcher"
                                                    )
                                                        .css({
                                                            width:
                                                                t.options
                                                                    .insertTableMaxSize
                                                                    .col + "em",
                                                            height:
                                                                t.options
                                                                    .insertTableMaxSize
                                                                    .row + "em",
                                                        })
                                                        .on(
                                                            "mousedown",
                                                            t.context.createInvokeHandler(
                                                                "editor.insertTable"
                                                            )
                                                        )
                                                        .on(
                                                            "mousemove",
                                                            t.tableMoveHandler.bind(
                                                                t
                                                            )
                                                        );
                                                },
                                            }
                                        )
                                        .render();
                                }),
                                this.context.memo("button.link", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.link
                                            ),
                                            tooltip:
                                                t.lang.link.link +
                                                t.representShortcut(
                                                    "linkDialog.show"
                                                ),
                                            click: t.context.createInvokeHandler(
                                                "linkDialog.show"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo(
                                    "button.picture",
                                    function () {
                                        return t
                                            .button({
                                                contents: t.ui.icon(
                                                    t.options.icons.picture
                                                ),
                                                tooltip: t.lang.image.image,
                                                click: t.context.createInvokeHandler(
                                                    "imageDialog.show"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo("button.video", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.video
                                            ),
                                            tooltip: t.lang.video.video,
                                            click: t.context.createInvokeHandler(
                                                "videoDialog.show"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo("button.hr", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.minus
                                            ),
                                            tooltip:
                                                t.lang.hr.insert +
                                                t.representShortcut(
                                                    "insertHorizontalRule"
                                                ),
                                            click: t.context.createInvokeHandler(
                                                "editor.insertHorizontalRule"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo(
                                    "button.fullscreen",
                                    function () {
                                        return t
                                            .button({
                                                className:
                                                    "btn-fullscreen note-codeview-keep",
                                                contents: t.ui.icon(
                                                    t.options.icons.arrowsAlt
                                                ),
                                                tooltip:
                                                    t.lang.options.fullscreen,
                                                click: t.context.createInvokeHandler(
                                                    "fullscreen.toggle"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.codeview",
                                    function () {
                                        return t
                                            .button({
                                                className:
                                                    "btn-codeview note-codeview-keep",
                                                contents: t.ui.icon(
                                                    t.options.icons.code
                                                ),
                                                tooltip:
                                                    t.lang.options.codeview,
                                                click: t.context.createInvokeHandler(
                                                    "codeview.toggle"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo("button.redo", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.redo
                                            ),
                                            tooltip:
                                                t.lang.history.redo +
                                                t.representShortcut("redo"),
                                            click: t.context.createInvokeHandler(
                                                "editor.redo"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo("button.undo", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.undo
                                            ),
                                            tooltip:
                                                t.lang.history.undo +
                                                t.representShortcut("undo"),
                                            click: t.context.createInvokeHandler(
                                                "editor.undo"
                                            ),
                                        })
                                        .render();
                                }),
                                this.context.memo("button.help", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.question
                                            ),
                                            tooltip: t.lang.options.help,
                                            click: t.context.createInvokeHandler(
                                                "helpDialog.show"
                                            ),
                                        })
                                        .render();
                                });
                        },
                    },
                    {
                        key: "addImagePopoverButtons",
                        value: function () {
                            var t = this;
                            this.context.memo("button.resizeFull", function () {
                                return t
                                    .button({
                                        contents:
                                            '<span class="note-fontsize-10">100%</span>',
                                        tooltip: t.lang.image.resizeFull,
                                        click: t.context.createInvokeHandler(
                                            "editor.resize",
                                            "1"
                                        ),
                                    })
                                    .render();
                            }),
                                this.context.memo(
                                    "button.resizeHalf",
                                    function () {
                                        return t
                                            .button({
                                                contents:
                                                    '<span class="note-fontsize-10">50%</span>',
                                                tooltip:
                                                    t.lang.image.resizeHalf,
                                                click: t.context.createInvokeHandler(
                                                    "editor.resize",
                                                    "0.5"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.resizeQuarter",
                                    function () {
                                        return t
                                            .button({
                                                contents:
                                                    '<span class="note-fontsize-10">25%</span>',
                                                tooltip:
                                                    t.lang.image.resizeQuarter,
                                                click: t.context.createInvokeHandler(
                                                    "editor.resize",
                                                    "0.25"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.resizeNone",
                                    function () {
                                        return t
                                            .button({
                                                contents: t.ui.icon(
                                                    t.options.icons.rollback
                                                ),
                                                tooltip:
                                                    t.lang.image.resizeNone,
                                                click: t.context.createInvokeHandler(
                                                    "editor.resize",
                                                    "0"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.floatLeft",
                                    function () {
                                        return t
                                            .button({
                                                contents: t.ui.icon(
                                                    t.options.icons.floatLeft
                                                ),
                                                tooltip: t.lang.image.floatLeft,
                                                click: t.context.createInvokeHandler(
                                                    "editor.floatMe",
                                                    "left"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.floatRight",
                                    function () {
                                        return t
                                            .button({
                                                contents: t.ui.icon(
                                                    t.options.icons.floatRight
                                                ),
                                                tooltip:
                                                    t.lang.image.floatRight,
                                                click: t.context.createInvokeHandler(
                                                    "editor.floatMe",
                                                    "right"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.floatNone",
                                    function () {
                                        return t
                                            .button({
                                                contents: t.ui.icon(
                                                    t.options.icons.rollback
                                                ),
                                                tooltip: t.lang.image.floatNone,
                                                click: t.context.createInvokeHandler(
                                                    "editor.floatMe",
                                                    "none"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.removeMedia",
                                    function () {
                                        return t
                                            .button({
                                                contents: t.ui.icon(
                                                    t.options.icons.trash
                                                ),
                                                tooltip: t.lang.image.remove,
                                                click: t.context.createInvokeHandler(
                                                    "editor.removeMedia"
                                                ),
                                            })
                                            .render();
                                    }
                                );
                        },
                    },
                    {
                        key: "addLinkPopoverButtons",
                        value: function () {
                            var t = this;
                            this.context.memo(
                                "button.linkDialogShow",
                                function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.link
                                            ),
                                            tooltip: t.lang.link.edit,
                                            click: t.context.createInvokeHandler(
                                                "linkDialog.show"
                                            ),
                                        })
                                        .render();
                                }
                            ),
                                this.context.memo("button.unlink", function () {
                                    return t
                                        .button({
                                            contents: t.ui.icon(
                                                t.options.icons.unlink
                                            ),
                                            tooltip: t.lang.link.unlink,
                                            click: t.context.createInvokeHandler(
                                                "editor.unlink"
                                            ),
                                        })
                                        .render();
                                });
                        },
                    },
                    {
                        key: "addTablePopoverButtons",
                        value: function () {
                            var t = this;
                            this.context.memo("button.addRowUp", function () {
                                return t
                                    .button({
                                        className: "btn-md",
                                        contents: t.ui.icon(
                                            t.options.icons.rowAbove
                                        ),
                                        tooltip: t.lang.table.addRowAbove,
                                        click: t.context.createInvokeHandler(
                                            "editor.addRow",
                                            "top"
                                        ),
                                    })
                                    .render();
                            }),
                                this.context.memo(
                                    "button.addRowDown",
                                    function () {
                                        return t
                                            .button({
                                                className: "btn-md",
                                                contents: t.ui.icon(
                                                    t.options.icons.rowBelow
                                                ),
                                                tooltip:
                                                    t.lang.table.addRowBelow,
                                                click: t.context.createInvokeHandler(
                                                    "editor.addRow",
                                                    "bottom"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.addColLeft",
                                    function () {
                                        return t
                                            .button({
                                                className: "btn-md",
                                                contents: t.ui.icon(
                                                    t.options.icons.colBefore
                                                ),
                                                tooltip:
                                                    t.lang.table.addColLeft,
                                                click: t.context.createInvokeHandler(
                                                    "editor.addCol",
                                                    "left"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.addColRight",
                                    function () {
                                        return t
                                            .button({
                                                className: "btn-md",
                                                contents: t.ui.icon(
                                                    t.options.icons.colAfter
                                                ),
                                                tooltip:
                                                    t.lang.table.addColRight,
                                                click: t.context.createInvokeHandler(
                                                    "editor.addCol",
                                                    "right"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.deleteRow",
                                    function () {
                                        return t
                                            .button({
                                                className: "btn-md",
                                                contents: t.ui.icon(
                                                    t.options.icons.rowRemove
                                                ),
                                                tooltip: t.lang.table.delRow,
                                                click: t.context.createInvokeHandler(
                                                    "editor.deleteRow"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.deleteCol",
                                    function () {
                                        return t
                                            .button({
                                                className: "btn-md",
                                                contents: t.ui.icon(
                                                    t.options.icons.colRemove
                                                ),
                                                tooltip: t.lang.table.delCol,
                                                click: t.context.createInvokeHandler(
                                                    "editor.deleteCol"
                                                ),
                                            })
                                            .render();
                                    }
                                ),
                                this.context.memo(
                                    "button.deleteTable",
                                    function () {
                                        return t
                                            .button({
                                                className: "btn-md",
                                                contents: t.ui.icon(
                                                    t.options.icons.trash
                                                ),
                                                tooltip: t.lang.table.delTable,
                                                click: t.context.createInvokeHandler(
                                                    "editor.deleteTable"
                                                ),
                                            })
                                            .render();
                                    }
                                );
                        },
                    },
                    {
                        key: "build",
                        value: function (t, e) {
                            for (var o = 0, n = e.length; o < n; o++) {
                                for (
                                    var i = e[o],
                                        r = Array.isArray(i) ? i[0] : i,
                                        a = Array.isArray(i)
                                            ? 1 === i.length
                                                ? [i[0]]
                                                : i[1]
                                            : [i],
                                        s = this.ui
                                            .buttonGroup({
                                                className: "note-" + r,
                                            })
                                            .render(),
                                        l = 0,
                                        c = a.length;
                                    l < c;
                                    l++
                                ) {
                                    var u = this.context.memo("button." + a[l]);
                                    u &&
                                        s.append(
                                            "function" == typeof u
                                                ? u(this.context)
                                                : u
                                        );
                                }
                                s.appendTo(t);
                            }
                        },
                    },
                    {
                        key: "updateCurrentStyle",
                        value: function (t) {
                            var e = t || this.$toolbar,
                                o = this.context.invoke("editor.currentStyle");
                            if (
                                (this.updateBtnStates(e, {
                                    ".note-btn-bold": function () {
                                        return "bold" === o["font-bold"];
                                    },
                                    ".note-btn-italic": function () {
                                        return "italic" === o["font-italic"];
                                    },
                                    ".note-btn-underline": function () {
                                        return (
                                            "underline" === o["font-underline"]
                                        );
                                    },
                                    ".note-btn-subscript": function () {
                                        return (
                                            "subscript" === o["font-subscript"]
                                        );
                                    },
                                    ".note-btn-superscript": function () {
                                        return (
                                            "superscript" ===
                                            o["font-superscript"]
                                        );
                                    },
                                    ".note-btn-strikethrough": function () {
                                        return (
                                            "strikethrough" ===
                                            o["font-strikethrough"]
                                        );
                                    },
                                }),
                                o["font-family"])
                            ) {
                                var n = o["font-family"]
                                        .split(",")
                                        .map(function (t) {
                                            return t
                                                .replace(/[\'\"]/g, "")
                                                .replace(/\s+$/, "")
                                                .replace(/^\s+/, "");
                                        }),
                                    i = C.find(
                                        n,
                                        this.isFontInstalled.bind(this)
                                    );
                                e
                                    .find(".dropdown-fontname a")
                                    .each(function (t, e) {
                                        var o = r()(e),
                                            n = o.data("value") + "" == i + "";
                                        o.toggleClass("checked", n);
                                    }),
                                    e
                                        .find(".note-current-fontname")
                                        .text(i)
                                        .css("font-family", i);
                            }
                            if (o["font-size"]) {
                                var a = o["font-size"];
                                e
                                    .find(".dropdown-fontsize a")
                                    .each(function (t, e) {
                                        var o = r()(e),
                                            n = o.data("value") + "" == a + "";
                                        o.toggleClass("checked", n);
                                    }),
                                    e.find(".note-current-fontsize").text(a);
                                var s = o["font-size-unit"];
                                e
                                    .find(".dropdown-fontsizeunit a")
                                    .each(function (t, e) {
                                        var o = r()(e),
                                            n = o.data("value") + "" == s + "";
                                        o.toggleClass("checked", n);
                                    }),
                                    e
                                        .find(".note-current-fontsizeunit")
                                        .text(s);
                            }
                            if (o["line-height"]) {
                                var l = o["line-height"];
                                e
                                    .find(".dropdown-line-height a")
                                    .each(function (t, e) {
                                        var o = r()(e),
                                            n =
                                                r()(e).data("value") + "" ==
                                                l + "";
                                        o.toggleClass("checked", n);
                                    }),
                                    e.find(".note-current-line-height").text(l);
                            }
                        },
                    },
                    {
                        key: "updateBtnStates",
                        value: function (t, e) {
                            var o = this;
                            r().each(e, function (e, n) {
                                o.ui.toggleBtnActive(t.find(e), n());
                            });
                        },
                    },
                    {
                        key: "tableMoveHandler",
                        value: function (t) {
                            var e,
                                o = r()(t.target.parentNode),
                                n = o.next(),
                                i = o.find(
                                    ".note-dimension-picker-mousecatcher"
                                ),
                                a = o.find(
                                    ".note-dimension-picker-highlighted"
                                ),
                                s = o.find(
                                    ".note-dimension-picker-unhighlighted"
                                );
                            if (void 0 === t.offsetX) {
                                var l = r()(t.target).offset();
                                e = { x: t.pageX - l.left, y: t.pageY - l.top };
                            } else e = { x: t.offsetX, y: t.offsetY };
                            var c = Math.ceil(e.x / 18) || 1,
                                u = Math.ceil(e.y / 18) || 1;
                            a.css({ width: c + "em", height: u + "em" }),
                                i.data("value", c + "x" + u),
                                c > 3 &&
                                    c < this.options.insertTableMaxSize.col &&
                                    s.css({ width: c + 1 + "em" }),
                                u > 3 &&
                                    u < this.options.insertTableMaxSize.row &&
                                    s.css({ height: u + 1 + "em" }),
                                n.html(c + " x " + u);
                        },
                    },
                ]),
                e && _e(t.prototype, e),
                o && _e(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Ye(t) {
            return (
                (Ye =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Ye(t)
            );
        }
        function Xe(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Qe(n.key), n);
            }
        }
        function Qe(t) {
            var e = (function (t, e) {
                if ("object" != Ye(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Ye(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Ye(e) ? e : e + "";
        }
        var Je = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.$window = r()(window)),
                        (this.$document = r()(document)),
                        (this.ui = r().summernote.ui),
                        (this.$note = e.layoutInfo.note),
                        (this.$editor = e.layoutInfo.editor),
                        (this.$toolbar = e.layoutInfo.toolbar),
                        (this.$editable = e.layoutInfo.editable),
                        (this.$statusbar = e.layoutInfo.statusbar),
                        (this.options = e.options),
                        (this.isFollowing = !1),
                        (this.followScroll = this.followScroll.bind(this));
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return !this.options.airMode;
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            (this.options.toolbar = this.options.toolbar || []),
                                this.options.toolbar.length
                                    ? this.context.invoke(
                                          "buttons.build",
                                          this.$toolbar,
                                          this.options.toolbar
                                      )
                                    : this.$toolbar.hide(),
                                this.options.toolbarContainer &&
                                    this.$toolbar.appendTo(
                                        this.options.toolbarContainer
                                    ),
                                this.changeContainer(!1),
                                this.$note.on(
                                    "summernote.keyup summernote.mouseup summernote.change",
                                    function () {
                                        t.context.invoke(
                                            "buttons.updateCurrentStyle"
                                        );
                                    }
                                ),
                                this.context.invoke(
                                    "buttons.updateCurrentStyle"
                                ),
                                this.options.followingToolbar &&
                                    this.$window.on(
                                        "scroll resize",
                                        this.followScroll
                                    );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$toolbar.children().remove(),
                                this.options.followingToolbar &&
                                    this.$window.off(
                                        "scroll resize",
                                        this.followScroll
                                    );
                        },
                    },
                    {
                        key: "followScroll",
                        value: function () {
                            if (this.$editor.hasClass("fullscreen")) return !1;
                            var t = this.$editor.outerHeight(),
                                e = this.$editor.width(),
                                o = this.$toolbar.height(),
                                n = this.$statusbar.height(),
                                i = 0;
                            this.options.otherStaticBar &&
                                (i = r()(
                                    this.options.otherStaticBar
                                ).outerHeight());
                            var a = this.$document.scrollTop(),
                                s = this.$editor.offset().top,
                                l = s - i,
                                c = s + t - i - o - n;
                            !this.isFollowing && a > l && a < c - o
                                ? ((this.isFollowing = !0),
                                  this.$editable.css({
                                      marginTop: this.$toolbar.outerHeight(),
                                  }),
                                  this.$toolbar.css({
                                      position: "fixed",
                                      top: i,
                                      width: e,
                                      zIndex: 1e3,
                                  }))
                                : this.isFollowing &&
                                  (a < l || a > c) &&
                                  ((this.isFollowing = !1),
                                  this.$toolbar.css({
                                      position: "relative",
                                      top: 0,
                                      width: "100%",
                                      zIndex: "auto",
                                  }),
                                  this.$editable.css({ marginTop: "" }));
                        },
                    },
                    {
                        key: "changeContainer",
                        value: function (t) {
                            t
                                ? this.$toolbar.prependTo(this.$editor)
                                : this.options.toolbarContainer &&
                                  this.$toolbar.appendTo(
                                      this.options.toolbarContainer
                                  ),
                                this.options.followingToolbar &&
                                    this.followScroll();
                        },
                    },
                    {
                        key: "updateFullscreen",
                        value: function (t) {
                            this.ui.toggleBtnActive(
                                this.$toolbar.find(".btn-fullscreen"),
                                t
                            ),
                                this.changeContainer(t);
                        },
                    },
                    {
                        key: "updateCodeview",
                        value: function (t) {
                            this.ui.toggleBtnActive(
                                this.$toolbar.find(".btn-codeview"),
                                t
                            ),
                                t ? this.deactivate() : this.activate();
                        },
                    },
                    {
                        key: "activate",
                        value: function (t) {
                            var e = this.$toolbar.find("button");
                            t || (e = e.not(".note-codeview-keep")),
                                this.ui.toggleBtn(e, !0);
                        },
                    },
                    {
                        key: "deactivate",
                        value: function (t) {
                            var e = this.$toolbar.find("button");
                            t || (e = e.not(".note-codeview-keep")),
                                this.ui.toggleBtn(e, !1);
                        },
                    },
                ]) && Xe(t.prototype, e),
                o && Xe(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function to(t) {
            return (
                (to =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                to(t)
            );
        }
        function eo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, oo(n.key), n);
            }
        }
        function oo(t) {
            var e = (function (t, e) {
                if ("object" != to(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != to(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == to(e) ? e : e + "";
        }
        var no = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            io = /^(\+?\d{1,3}[\s-]?)?(\d{1,4})[\s-]?(\d{1,4})[\s-]?(\d{1,4})$/,
            ro = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/,
            ao = (function () {
                return (
                    (t = function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.context = e),
                            (this.ui = r().summernote.ui),
                            (this.$body = r()(document.body)),
                            (this.$editor = e.layoutInfo.editor),
                            (this.options = e.options),
                            (this.lang = this.options.langInfo),
                            e.memo(
                                "help.linkDialog.show",
                                this.options.langInfo.help["linkDialog.show"]
                            );
                    }),
                    (e = [
                        {
                            key: "initialize",
                            value: function () {
                                var t = this.options.dialogsInBody
                                        ? this.$body
                                        : this.options.container,
                                    e = [
                                        '<div class="form-group note-form-group">',
                                        '<label for="note-dialog-link-txt-'
                                            .concat(
                                                this.options.id,
                                                '" class="note-form-label">'
                                            )
                                            .concat(
                                                this.lang.link.textToDisplay,
                                                "</label>"
                                            ),
                                        '<input id="note-dialog-link-txt-'.concat(
                                            this.options.id,
                                            '" class="note-link-text form-control note-form-control note-input" type="text"/>'
                                        ),
                                        "</div>",
                                        '<div class="form-group note-form-group">',
                                        '<label for="note-dialog-link-url-'
                                            .concat(
                                                this.options.id,
                                                '" class="note-form-label">'
                                            )
                                            .concat(
                                                this.lang.link.url,
                                                "</label>"
                                            ),
                                        '<input id="note-dialog-link-url-'.concat(
                                            this.options.id,
                                            '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'
                                        ),
                                        "</div>",
                                        this.options.disableLinkTarget
                                            ? ""
                                            : r()("<div></div>")
                                                  .append(
                                                      this.ui
                                                          .checkbox({
                                                              className:
                                                                  "sn-checkbox-open-in-new-window",
                                                              text: this.lang
                                                                  .link
                                                                  .openInNewWindow,
                                                              checked: !0,
                                                          })
                                                          .render()
                                                  )
                                                  .html(),
                                    ].join(""),
                                    o = '<input type="button" href="#" class="'
                                        .concat(
                                            "btn btn-primary note-btn note-btn-primary note-link-btn",
                                            '" value="'
                                        )
                                        .concat(
                                            this.lang.link.insert,
                                            '" disabled>'
                                        );
                                this.$dialog = this.ui
                                    .dialog({
                                        className: "link-dialog",
                                        title: this.lang.link.insert,
                                        fade: this.options.dialogsFade,
                                        body: e,
                                        footer: o,
                                    })
                                    .render()
                                    .appendTo(t);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.ui.hideDialog(this.$dialog),
                                    this.$dialog.remove();
                            },
                        },
                        {
                            key: "bindEnterKey",
                            value: function (t, e) {
                                t.on("keypress", function (t) {
                                    t.keyCode === Nt.code.ENTER &&
                                        (t.preventDefault(),
                                        e.trigger("click"));
                                });
                            },
                        },
                        {
                            key: "checkLinkUrl",
                            value: function (t) {
                                return no.test(t)
                                    ? "mailto://" + t
                                    : io.test(t)
                                    ? "tel://" + t
                                    : ro.test(t)
                                    ? t
                                    : "http://" + t;
                            },
                        },
                        {
                            key: "onCheckLinkUrl",
                            value: function (t) {
                                var e = this;
                                t.on("blur", function (t) {
                                    t.target.value =
                                        "" == t.target.value
                                            ? ""
                                            : e.checkLinkUrl(t.target.value);
                                });
                            },
                        },
                        {
                            key: "toggleLinkBtn",
                            value: function (t, e, o) {
                                this.ui.toggleBtn(t, e.val() && o.val());
                            },
                        },
                        {
                            key: "showLinkDialog",
                            value: function (t) {
                                var e = this;
                                return r()
                                    .Deferred(function (o) {
                                        var n =
                                                e.$dialog.find(
                                                    ".note-link-text"
                                                ),
                                            i =
                                                e.$dialog.find(
                                                    ".note-link-url"
                                                ),
                                            r =
                                                e.$dialog.find(
                                                    ".note-link-btn"
                                                ),
                                            a = e.$dialog.find(
                                                ".sn-checkbox-open-in-new-window input[type=checkbox]"
                                            );
                                        e.ui.onDialogShown(
                                            e.$dialog,
                                            function () {
                                                e.context.triggerEvent(
                                                    "dialog.shown"
                                                ),
                                                    !t.url &&
                                                        g.isValidUrl(t.text) &&
                                                        (t.url = e.checkLinkUrl(
                                                            t.text
                                                        )),
                                                    n
                                                        .on(
                                                            "input paste propertychange",
                                                            function () {
                                                                var o = n.val(),
                                                                    a =
                                                                        document.createElement(
                                                                            "div"
                                                                        );
                                                                (a.innerText =
                                                                    o),
                                                                    (o =
                                                                        a.innerHTML),
                                                                    (t.text =
                                                                        o),
                                                                    e.toggleLinkBtn(
                                                                        r,
                                                                        n,
                                                                        i
                                                                    );
                                                            }
                                                        )
                                                        .val(t.text),
                                                    i
                                                        .on(
                                                            "input paste propertychange",
                                                            function () {
                                                                t.text ||
                                                                    n.val(
                                                                        i.val()
                                                                    ),
                                                                    e.toggleLinkBtn(
                                                                        r,
                                                                        n,
                                                                        i
                                                                    );
                                                            }
                                                        )
                                                        .val(t.url),
                                                    m.isSupportTouch ||
                                                        i.trigger("focus"),
                                                    e.toggleLinkBtn(r, n, i),
                                                    e.bindEnterKey(i, r),
                                                    e.bindEnterKey(n, r),
                                                    e.onCheckLinkUrl(i);
                                                var s =
                                                    void 0 !== t.isNewWindow
                                                        ? t.isNewWindow
                                                        : e.context.options
                                                              .linkTargetBlank;
                                                a.prop("checked", s),
                                                    r.one(
                                                        "click",
                                                        function (r) {
                                                            r.preventDefault(),
                                                                o.resolve({
                                                                    range: t.range,
                                                                    url: i.val(),
                                                                    text: n.val(),
                                                                    isNewWindow:
                                                                        a.is(
                                                                            ":checked"
                                                                        ),
                                                                }),
                                                                e.ui.hideDialog(
                                                                    e.$dialog
                                                                );
                                                        }
                                                    );
                                            }
                                        ),
                                            e.ui.onDialogHidden(
                                                e.$dialog,
                                                function () {
                                                    n.off(),
                                                        i.off(),
                                                        r.off(),
                                                        "pending" ===
                                                            o.state() &&
                                                            o.reject();
                                                }
                                            ),
                                            e.ui.showDialog(e.$dialog);
                                    })
                                    .promise();
                            },
                        },
                        {
                            key: "show",
                            value: function () {
                                var t = this,
                                    e =
                                        this.context.invoke(
                                            "editor.getLinkInfo"
                                        );
                                this.context.invoke("editor.saveRange"),
                                    this.showLinkDialog(e)
                                        .then(function (e) {
                                            t.context.invoke(
                                                "editor.restoreRange"
                                            ),
                                                t.context.invoke(
                                                    "editor.createLink",
                                                    e
                                                );
                                        })
                                        .fail(function () {
                                            t.context.invoke(
                                                "editor.restoreRange"
                                            );
                                        });
                            },
                        },
                    ]) && eo(t.prototype, e),
                    o && eo(t, o),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, e, o;
            })();
        function so(t) {
            return (
                (so =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                so(t)
            );
        }
        function lo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, co(n.key), n);
            }
        }
        function co(t) {
            var e = (function (t, e) {
                if ("object" != so(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != so(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == so(e) ? e : e + "";
        }
        var uo = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.options = e.options),
                        (this.events = {
                            "summernote.keyup summernote.mouseup summernote.change summernote.scroll":
                                function () {
                                    o.update();
                                },
                            "summernote.disable summernote.dialog.shown":
                                function () {
                                    o.hide();
                                },
                            "summernote.blur": function (t, e) {
                                (e.originalEvent &&
                                    e.originalEvent.relatedTarget &&
                                    o.$popover[0].contains(
                                        e.originalEvent.relatedTarget
                                    )) ||
                                    o.hide();
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return !C.isEmpty(this.options.popover.link);
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            this.$popover = this.ui
                                .popover({
                                    className: "note-link-popover",
                                    callback: function (t) {
                                        t.find(
                                            ".popover-content,.note-popover-content"
                                        ).prepend(
                                            '<span><a target="_blank"></a>&nbsp;</span>'
                                        );
                                    },
                                })
                                .render()
                                .appendTo(this.options.container);
                            var t = this.$popover.find(
                                ".popover-content,.note-popover-content"
                            );
                            this.context.invoke(
                                "buttons.build",
                                t,
                                this.options.popover.link
                            ),
                                this.$popover.on("mousedown", function (t) {
                                    t.preventDefault();
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$popover.remove();
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            if (this.context.invoke("editor.hasFocus")) {
                                var t = this.context.invoke(
                                    "editor.getLastRange"
                                );
                                if (t.isCollapsed() && t.isOnAnchor()) {
                                    var e = pt.ancestor(t.sc, pt.isAnchor),
                                        o = r()(e).attr("href");
                                    this.$popover
                                        .find("a")
                                        .attr("href", o)
                                        .text(o);
                                    var n = pt.posFromPlaceholder(e),
                                        i = r()(
                                            this.options.container
                                        ).offset();
                                    (n.top -= i.top),
                                        (n.left -= i.left),
                                        this.$popover.css({
                                            display: "block",
                                            left: n.left,
                                            top: n.top,
                                        });
                                } else this.hide();
                            } else this.hide();
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.$popover.hide();
                        },
                    },
                ]) && lo(t.prototype, e),
                o && lo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function fo(t) {
            return (
                (fo =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                fo(t)
            );
        }
        function ho(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, po(n.key), n);
            }
        }
        function po(t) {
            var e = (function (t, e) {
                if ("object" != fo(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != fo(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == fo(e) ? e : e + "";
        }
        var mo = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.$body = r()(document.body)),
                        (this.$editor = e.layoutInfo.editor),
                        (this.options = e.options),
                        (this.lang = this.options.langInfo);
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            var t = "";
                            if (this.options.maximumImageFileSize) {
                                var e = Math.floor(
                                        Math.log(
                                            this.options.maximumImageFileSize
                                        ) / Math.log(1024)
                                    ),
                                    o =
                                        1 *
                                            (
                                                this.options
                                                    .maximumImageFileSize /
                                                Math.pow(1024, e)
                                            ).toFixed(2) +
                                        " " +
                                        " KMGTP"[e] +
                                        "B";
                                t = "<small>".concat(
                                    this.lang.image.maximumFileSize + " : " + o,
                                    "</small>"
                                );
                            }
                            var n = this.options.dialogsInBody
                                    ? this.$body
                                    : this.options.container,
                                i = [
                                    '<div class="form-group note-form-group note-group-select-from-files">',
                                    '<label for="note-dialog-image-file-' +
                                        this.options.id +
                                        '" class="note-form-label">' +
                                        this.lang.image.selectFromFiles +
                                        "</label>",
                                    '<input id="note-dialog-image-file-' +
                                        this.options.id +
                                        '" class="note-image-input form-control-file note-form-control note-input" ',
                                    ' type="file" name="files" accept="' +
                                        this.options.acceptImageFileTypes +
                                        '" multiple="multiple"/>',
                                    t,
                                    "</div>",
                                    '<div class="form-group note-group-image-url">',
                                    '<label for="note-dialog-image-url-' +
                                        this.options.id +
                                        '" class="note-form-label">' +
                                        this.lang.image.url +
                                        "</label>",
                                    '<input id="note-dialog-image-url-' +
                                        this.options.id +
                                        '" class="note-image-url form-control note-form-control note-input" type="text"/>',
                                    "</div>",
                                ].join(""),
                                r = '<input type="button" href="#" class="'
                                    .concat(
                                        "btn btn-primary note-btn note-btn-primary note-image-btn",
                                        '" value="'
                                    )
                                    .concat(
                                        this.lang.image.insert,
                                        '" disabled>'
                                    );
                            this.$dialog = this.ui
                                .dialog({
                                    title: this.lang.image.insert,
                                    fade: this.options.dialogsFade,
                                    body: i,
                                    footer: r,
                                })
                                .render()
                                .appendTo(n);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.ui.hideDialog(this.$dialog),
                                this.$dialog.remove();
                        },
                    },
                    {
                        key: "bindEnterKey",
                        value: function (t, e) {
                            t.on("keypress", function (t) {
                                t.keyCode === Nt.code.ENTER &&
                                    (t.preventDefault(), e.trigger("click"));
                            });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            var t = this;
                            this.context.invoke("editor.saveRange"),
                                this.showImageDialog()
                                    .then(function (e) {
                                        t.ui.hideDialog(t.$dialog),
                                            t.context.invoke(
                                                "editor.restoreRange"
                                            ),
                                            "string" == typeof e
                                                ? t.options.callbacks
                                                      .onImageLinkInsert
                                                    ? t.context.triggerEvent(
                                                          "image.link.insert",
                                                          e
                                                      )
                                                    : t.context.invoke(
                                                          "editor.insertImage",
                                                          e
                                                      )
                                                : t.context.invoke(
                                                      "editor.insertImagesOrCallback",
                                                      e
                                                  );
                                    })
                                    .fail(function () {
                                        t.context.invoke("editor.restoreRange");
                                    });
                        },
                    },
                    {
                        key: "showImageDialog",
                        value: function () {
                            var t = this;
                            return r().Deferred(function (e) {
                                var o = t.$dialog.find(".note-image-input"),
                                    n = t.$dialog.find(".note-image-url"),
                                    i = t.$dialog.find(".note-image-btn");
                                t.ui.onDialogShown(t.$dialog, function () {
                                    t.context.triggerEvent("dialog.shown"),
                                        o.replaceWith(
                                            o
                                                .clone()
                                                .on("change", function (t) {
                                                    e.resolve(
                                                        t.target.files ||
                                                            t.target.value
                                                    );
                                                })
                                                .val("")
                                        ),
                                        n
                                            .on(
                                                "input paste propertychange",
                                                function () {
                                                    t.ui.toggleBtn(i, n.val());
                                                }
                                            )
                                            .val(""),
                                        m.isSupportTouch || n.trigger("focus"),
                                        i.on("click", function (t) {
                                            t.preventDefault(),
                                                e.resolve(n.val());
                                        }),
                                        t.bindEnterKey(n, i);
                                }),
                                    t.ui.onDialogHidden(t.$dialog, function () {
                                        o.off(),
                                            n.off(),
                                            i.off(),
                                            "pending" === e.state() &&
                                                e.reject();
                                    }),
                                    t.ui.showDialog(t.$dialog);
                            });
                        },
                    },
                ]) && ho(t.prototype, e),
                o && ho(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function vo(t) {
            return (
                (vo =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                vo(t)
            );
        }
        function go(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, bo(n.key), n);
            }
        }
        function bo(t) {
            var e = (function (t, e) {
                if ("object" != vo(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != vo(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == vo(e) ? e : e + "";
        }
        var yo = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.editable = e.layoutInfo.editable[0]),
                        (this.options = e.options),
                        (this.events = {
                            "summernote.disable summernote.dialog.shown":
                                function () {
                                    o.hide();
                                },
                            "summernote.blur": function (t, e) {
                                (e.originalEvent &&
                                    e.originalEvent.relatedTarget &&
                                    o.$popover[0].contains(
                                        e.originalEvent.relatedTarget
                                    )) ||
                                    o.hide();
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return !C.isEmpty(this.options.popover.image);
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            this.$popover = this.ui
                                .popover({ className: "note-image-popover" })
                                .render()
                                .appendTo(this.options.container);
                            var t = this.$popover.find(
                                ".popover-content,.note-popover-content"
                            );
                            this.context.invoke(
                                "buttons.build",
                                t,
                                this.options.popover.image
                            ),
                                this.$popover.on("mousedown", function (t) {
                                    t.preventDefault();
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$popover.remove();
                        },
                    },
                    {
                        key: "update",
                        value: function (t, e) {
                            if (pt.isImg(t)) {
                                var o = r()(t).offset(),
                                    n = r()(this.options.container).offset(),
                                    i = {};
                                this.options.popatmouse
                                    ? ((i.left = e.pageX - 20),
                                      (i.top = e.pageY))
                                    : (i = o),
                                    (i.top -= n.top),
                                    (i.left -= n.left),
                                    this.$popover.css({
                                        display: "block",
                                        left: i.left,
                                        top: i.top,
                                    });
                            } else this.hide();
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.$popover.hide();
                        },
                    },
                ]),
                e && go(t.prototype, e),
                o && go(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function ko(t) {
            return (
                (ko =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                ko(t)
            );
        }
        function wo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Co(n.key), n);
            }
        }
        function Co(t) {
            var e = (function (t, e) {
                if ("object" != ko(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != ko(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == ko(e) ? e : e + "";
        }
        var So = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.options = e.options),
                        (this.events = {
                            "summernote.mousedown": function (t, e) {
                                o.update(e.target);
                            },
                            "summernote.keyup summernote.scroll summernote.change":
                                function () {
                                    o.update();
                                },
                            "summernote.disable summernote.dialog.shown":
                                function () {
                                    o.hide();
                                },
                            "summernote.blur": function (t, e) {
                                (e.originalEvent &&
                                    e.originalEvent.relatedTarget &&
                                    o.$popover[0].contains(
                                        e.originalEvent.relatedTarget
                                    )) ||
                                    o.hide();
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return !C.isEmpty(this.options.popover.table);
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            this.$popover = this.ui
                                .popover({ className: "note-table-popover" })
                                .render()
                                .appendTo(this.options.container);
                            var t = this.$popover.find(
                                ".popover-content,.note-popover-content"
                            );
                            this.context.invoke(
                                "buttons.build",
                                t,
                                this.options.popover.table
                            ),
                                m.isFF &&
                                    document.execCommand(
                                        "enableInlineTableEditing",
                                        !1,
                                        !1
                                    ),
                                this.$popover.on("mousedown", function (t) {
                                    t.preventDefault();
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$popover.remove();
                        },
                    },
                    {
                        key: "update",
                        value: function (t) {
                            if (this.context.isDisabled()) return !1;
                            var e =
                                pt.isCell(t) ||
                                pt.isCell(null == t ? void 0 : t.parentElement);
                            if (e) {
                                var o = pt.posFromPlaceholder(t),
                                    n = r()(this.options.container).offset();
                                (o.top -= n.top),
                                    (o.left -= n.left),
                                    this.$popover.css({
                                        display: "block",
                                        left: o.left,
                                        top: o.top,
                                    });
                            } else this.hide();
                            return e;
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.$popover.hide();
                        },
                    },
                ]),
                e && wo(t.prototype, e),
                o && wo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function xo(t) {
            return (
                (xo =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                xo(t)
            );
        }
        function To(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Eo(n.key), n);
            }
        }
        function Eo(t) {
            var e = (function (t, e) {
                if ("object" != xo(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != xo(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == xo(e) ? e : e + "";
        }
        var Po = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.$body = r()(document.body)),
                        (this.$editor = e.layoutInfo.editor),
                        (this.options = e.options),
                        (this.lang = this.options.langInfo);
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            var t = this.options.dialogsInBody
                                    ? this.$body
                                    : this.options.container,
                                e = [
                                    '<div class="form-group note-form-group row-fluid">',
                                    '<label for="note-dialog-video-url-'
                                        .concat(
                                            this.options.id,
                                            '" class="note-form-label">'
                                        )
                                        .concat(
                                            this.lang.video.url,
                                            ' <small class="text-muted">'
                                        )
                                        .concat(
                                            this.lang.video.providers,
                                            "</small></label>"
                                        ),
                                    '<input id="note-dialog-video-url-'.concat(
                                        this.options.id,
                                        '" class="note-video-url form-control note-form-control note-input" type="text"/>'
                                    ),
                                    "</div>",
                                ].join(""),
                                o = '<input type="button" href="#" class="'
                                    .concat(
                                        "btn btn-primary note-btn note-btn-primary note-video-btn",
                                        '" value="'
                                    )
                                    .concat(
                                        this.lang.video.insert,
                                        '" disabled>'
                                    );
                            this.$dialog = this.ui
                                .dialog({
                                    title: this.lang.video.insert,
                                    fade: this.options.dialogsFade,
                                    body: e,
                                    footer: o,
                                })
                                .render()
                                .appendTo(t);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.ui.hideDialog(this.$dialog),
                                this.$dialog.remove();
                        },
                    },
                    {
                        key: "bindEnterKey",
                        value: function (t, e) {
                            t.on("keypress", function (t) {
                                t.keyCode === Nt.code.ENTER &&
                                    (t.preventDefault(), e.trigger("click"));
                            });
                        },
                    },
                    {
                        key: "createVideoNode",
                        value: function (t) {
                            var e,
                                o = t.match(
                                    /(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/|live\/))([^&\n?]+)(?:.*[?&]t=([^&\n]+))?.*/
                                ),
                                n = t.match(
                                    /(?:\.|\/\/)drive\.google\.com\/file\/d\/(.[a-zA-Z0-9_-]*)\/view/
                                ),
                                i = t.match(
                                    /(?:www\.|\/\/)instagram\.com\/(reel|p)\/(.[a-zA-Z0-9_-]*)/
                                ),
                                a = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
                                s = t.match(
                                    /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/
                                ),
                                l = t.match(
                                    /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/
                                ),
                                c = t.match(
                                    /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/
                                ),
                                u = t.match(
                                    /\/\/(.*)\/videos\/watch\/([^?]*)(?:\?(?:start=(\w*))?(?:&stop=(\w*))?(?:&loop=([10]))?(?:&autoplay=([10]))?(?:&muted=([10]))?)?/
                                ),
                                d = t.match(/\/\/v\.qq\.com.*?vid=(.+)/),
                                f = t.match(
                                    /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/
                                ),
                                h = t.match(/^.+.(mp4|m4v)$/),
                                p = t.match(/^.+.(ogg|ogv)$/),
                                m = t.match(/^.+.(webm)$/),
                                v = t.match(
                                    /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/
                                );
                            if (o && 11 === o[1].length) {
                                var g = o[1],
                                    b = 0;
                                if (void 0 !== o[2]) {
                                    var y = o[2].match(
                                        /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/
                                    );
                                    if (y)
                                        for (
                                            var k = [3600, 60, 1],
                                                w = 0,
                                                C = k.length;
                                            w < C;
                                            w++
                                        )
                                            b +=
                                                void 0 !== y[w + 1]
                                                    ? k[w] *
                                                      parseInt(y[w + 1], 10)
                                                    : 0;
                                    else b = parseInt(o[2], 10);
                                }
                                e = r()("<iframe>")
                                    .attr("frameborder", 0)
                                    .attr(
                                        "src",
                                        "//www.youtube.com/embed/" +
                                            g +
                                            (b > 0 ? "?start=" + b : "")
                                    )
                                    .attr("width", "640")
                                    .attr("height", "360");
                            } else if (n && n[0].length)
                                e = r()("<iframe>")
                                    .attr("frameborder", 0)
                                    .attr(
                                        "src",
                                        "https://drive.google.com/file/d/" +
                                            n[1] +
                                            "/preview"
                                    )
                                    .attr("width", "640")
                                    .attr("height", "480");
                            else if (i && i[0].length)
                                e = r()("<iframe>")
                                    .attr("frameborder", 0)
                                    .attr(
                                        "src",
                                        "https://instagram.com/p/" +
                                            i[2] +
                                            "/embed/"
                                    )
                                    .attr("width", "612")
                                    .attr("height", "710")
                                    .attr("scrolling", "no")
                                    .attr("allowtransparency", "true");
                            else if (a && a[0].length)
                                e = r()("<iframe>")
                                    .attr("frameborder", 0)
                                    .attr("src", a[0] + "/embed/simple")
                                    .attr("width", "600")
                                    .attr("height", "600")
                                    .attr("class", "vine-embed");
                            else if (s && s[3].length)
                                e = r()(
                                    "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                                )
                                    .attr("frameborder", 0)
                                    .attr(
                                        "src",
                                        "//player.vimeo.com/video/" + s[3]
                                    )
                                    .attr("width", "640")
                                    .attr("height", "360");
                            else if (l && l[2].length)
                                e = r()("<iframe>")
                                    .attr("frameborder", 0)
                                    .attr(
                                        "src",
                                        "//www.dailymotion.com/embed/video/" +
                                            l[2]
                                    )
                                    .attr("width", "640")
                                    .attr("height", "360");
                            else if (c && c[1].length)
                                e = r()(
                                    "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                                )
                                    .attr("frameborder", 0)
                                    .attr("height", "498")
                                    .attr("width", "510")
                                    .attr(
                                        "src",
                                        "//player.youku.com/embed/" + c[1]
                                    );
                            else if (u && u[0].length) {
                                var S = 0;
                                "undefined" !== u[2] && (S = u[2]);
                                var x = 0;
                                "undefined" !== u[3] && (x = u[3]);
                                var T = 0;
                                "undefined" !== u[4] && (T = u[4]);
                                var E = 0;
                                "undefined" !== u[5] && (E = u[5]);
                                var P = 0;
                                "undefined" !== u[6] && (P = u[6]),
                                    (e = r()(
                                        '<iframe allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups">'
                                    )
                                        .attr("frameborder", 0)
                                        .attr(
                                            "src",
                                            "//" +
                                                u[1] +
                                                "/videos/embed/" +
                                                u[2] +
                                                "?loop=" +
                                                T +
                                                "&autoplay=" +
                                                E +
                                                "&muted=" +
                                                P +
                                                (S > 0 ? "&start=" + S : "") +
                                                (x > 0 ? "&end=" + b : "")
                                        )
                                        .attr("width", "560")
                                        .attr("height", "315"));
                            } else if (
                                (d && d[1].length) ||
                                (f && f[2].length)
                            ) {
                                var N = d && d[1].length ? d[1] : f[2];
                                e = r()(
                                    "<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>"
                                )
                                    .attr("frameborder", 0)
                                    .attr("height", "310")
                                    .attr("width", "500")
                                    .attr(
                                        "src",
                                        "https://v.qq.com/txp/iframe/player.html?vid=" +
                                            N +
                                            "&amp;auto=0"
                                    );
                            } else if (h || p || m)
                                e = r()("<video controls>")
                                    .attr("src", t)
                                    .attr("width", "640")
                                    .attr("height", "360");
                            else {
                                if (!v || !v[0].length) return !1;
                                e = r()("<iframe>")
                                    .attr("frameborder", 0)
                                    .attr(
                                        "src",
                                        "https://www.facebook.com/plugins/video.php?href=" +
                                            encodeURIComponent(v[0]) +
                                            "&show_text=0&width=560"
                                    )
                                    .attr("width", "560")
                                    .attr("height", "301")
                                    .attr("scrolling", "no")
                                    .attr("allowtransparency", "true");
                            }
                            return e.addClass("note-video-clip"), e[0];
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            var t = this,
                                e = this.context.invoke(
                                    "editor.getSelectedText"
                                );
                            this.context.invoke("editor.saveRange"),
                                this.showVideoDialog(e)
                                    .then(function (e) {
                                        t.ui.hideDialog(t.$dialog),
                                            t.context.invoke(
                                                "editor.restoreRange"
                                            );
                                        var o = t.createVideoNode(e);
                                        o &&
                                            t.context.invoke(
                                                "editor.insertNode",
                                                o
                                            );
                                    })
                                    .fail(function () {
                                        t.context.invoke("editor.restoreRange");
                                    });
                        },
                    },
                    {
                        key: "showVideoDialog",
                        value: function () {
                            var t = this;
                            return r().Deferred(function (e) {
                                var o = t.$dialog.find(".note-video-url"),
                                    n = t.$dialog.find(".note-video-btn");
                                t.ui.onDialogShown(t.$dialog, function () {
                                    t.context.triggerEvent("dialog.shown"),
                                        o.on(
                                            "input paste propertychange",
                                            function () {
                                                t.ui.toggleBtn(n, o.val());
                                            }
                                        ),
                                        m.isSupportTouch || o.trigger("focus"),
                                        n.on("click", function (t) {
                                            t.preventDefault(),
                                                e.resolve(o.val());
                                        }),
                                        t.bindEnterKey(o, n);
                                }),
                                    t.ui.onDialogHidden(t.$dialog, function () {
                                        o.off(),
                                            n.off(),
                                            "pending" === e.state() &&
                                                e.reject();
                                    }),
                                    t.ui.showDialog(t.$dialog);
                            });
                        },
                    },
                ]) && To(t.prototype, e),
                o && To(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function No(t) {
            return (
                (No =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                No(t)
            );
        }
        function $o(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Io(n.key), n);
            }
        }
        function Io(t) {
            var e = (function (t, e) {
                if ("object" != No(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != No(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == No(e) ? e : e + "";
        }
        var Ro = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.$body = r()(document.body)),
                        (this.$editor = e.layoutInfo.editor),
                        (this.options = e.options),
                        (this.lang = this.options.langInfo);
                }),
                (e = [
                    {
                        key: "initialize",
                        value: function () {
                            var t = this.options.dialogsInBody
                                    ? this.$body
                                    : this.options.container,
                                e = [
                                    '<p class="text-center">',
                                    '<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote 0.9.0</a> · ',
                                    '<a href="https://github.com/summernote/summernote" target="_blank" rel="noopener noreferrer">Project</a> · ',
                                    '<a href="https://github.com/summernote/summernote/issues" target="_blank" rel="noopener noreferrer">Issues</a>',
                                    "</p>",
                                ].join("");
                            this.$dialog = this.ui
                                .dialog({
                                    title: this.lang.options.help,
                                    fade: this.options.dialogsFade,
                                    body: this.createShortcutList(),
                                    footer: e,
                                    callback: function (t) {
                                        t.find(
                                            ".modal-body,.note-modal-body"
                                        ).css({
                                            "max-height": 300,
                                            overflow: "scroll",
                                        });
                                    },
                                })
                                .render()
                                .appendTo(t);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.ui.hideDialog(this.$dialog),
                                this.$dialog.remove();
                        },
                    },
                    {
                        key: "createShortcutList",
                        value: function () {
                            var t = this,
                                e = this.options.keyMap[m.isMac ? "mac" : "pc"];
                            return Object.keys(e)
                                .map(function (o) {
                                    var n = e[o],
                                        i = r()(
                                            '<div><div class="help-list-item"></div></div>'
                                        );
                                    return (
                                        i
                                            .append(
                                                r()(
                                                    "<label><kbd>" +
                                                        o +
                                                        "</kdb></label>"
                                                ).css({
                                                    width: 180,
                                                    "margin-right": 10,
                                                })
                                            )
                                            .append(
                                                r()("<span></span>").html(
                                                    t.context.memo(
                                                        "help." + n
                                                    ) || n
                                                )
                                            ),
                                        i.html()
                                    );
                                })
                                .join("");
                        },
                    },
                    {
                        key: "showHelpDialog",
                        value: function () {
                            var t = this;
                            return r()
                                .Deferred(function (e) {
                                    t.ui.onDialogShown(t.$dialog, function () {
                                        t.context.triggerEvent("dialog.shown"),
                                            e.resolve();
                                    }),
                                        t.ui.showDialog(t.$dialog);
                                })
                                .promise();
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            var t = this;
                            this.context.invoke("editor.saveRange"),
                                this.showHelpDialog().then(function () {
                                    t.context.invoke("editor.restoreRange");
                                });
                        },
                    },
                ]),
                e && $o(t.prototype, e),
                o && $o(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Ao(t) {
            return (
                (Ao =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Ao(t)
            );
        }
        function Lo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Fo(n.key), n);
            }
        }
        function Fo(t) {
            var e = (function (t, e) {
                if ("object" != Ao(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Ao(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Ao(e) ? e : e + "";
        }
        var Do = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.options = e.options),
                        (this.hidable = !0),
                        (this.onContextmenu = !1),
                        (this.pageX = null),
                        (this.pageY = null),
                        (this.events = {
                            "summernote.contextmenu": function (t) {
                                o.options.editing &&
                                    (t.preventDefault(),
                                    t.stopPropagation(),
                                    (o.onContextmenu = !0),
                                    o.update(!0));
                            },
                            "summernote.mousedown": function (t, e) {
                                (o.pageX = e.pageX), (o.pageY = e.pageY);
                            },
                            "summernote.keyup summernote.mouseup summernote.scroll":
                                function (t, e) {
                                    if (o.options.editing && !o.onContextmenu) {
                                        if ("keyup" == e.type) {
                                            var n = o.context
                                                    .invoke(
                                                        "editor.getLastRange"
                                                    )
                                                    .getWordRange(),
                                                i = g.rect2bnd(
                                                    C.last(n.getClientRects())
                                                );
                                            (o.pageX = i.left),
                                                (o.pageY = i.top);
                                        } else
                                            (o.pageX = e.pageX),
                                                (o.pageY = e.pageY);
                                        o.update();
                                    }
                                    o.onContextmenu = !1;
                                },
                            "summernote.disable summernote.change summernote.dialog.shown summernote.blur":
                                function () {
                                    o.hide();
                                },
                            "summernote.focusout": function () {
                                o.$popover.is(":active,:focus") || o.hide();
                            },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return (
                                this.options.airMode &&
                                !C.isEmpty(this.options.popover.air)
                            );
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            this.$popover = this.ui
                                .popover({ className: "note-air-popover" })
                                .render()
                                .appendTo(this.options.container);
                            var e = this.$popover.find(".popover-content");
                            this.context.invoke(
                                "buttons.build",
                                e,
                                this.options.popover.air
                            ),
                                this.$popover.on("mousedown", function () {
                                    t.hidable = !1;
                                }),
                                this.$popover.on("mouseup", function () {
                                    t.hidable = !0;
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$popover.remove();
                        },
                    },
                    {
                        key: "update",
                        value: function (t) {
                            var e = this.context.invoke("editor.currentStyle");
                            if (!e.range || (e.range.isCollapsed() && !t))
                                this.hide();
                            else {
                                var o = { left: this.pageX, top: this.pageY },
                                    n = r()(this.options.container).offset();
                                (o.top -= n.top),
                                    (o.left -= n.left),
                                    this.$popover.css({
                                        display: "block",
                                        left: Math.max(o.left, 0) + -5,
                                        top: o.top + 5,
                                    }),
                                    this.context.invoke(
                                        "buttons.updateCurrentStyle",
                                        this.$popover
                                    );
                            }
                        },
                    },
                    {
                        key: "updateCodeview",
                        value: function (t) {
                            this.ui.toggleBtnActive(
                                this.$popover.find(".btn-codeview"),
                                t
                            ),
                                t && this.hide();
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.hidable && this.$popover.hide();
                        },
                    },
                ]) && Lo(t.prototype, e),
                o && Lo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Ho(t) {
            return (
                (Ho =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Ho(t)
            );
        }
        function jo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Bo(n.key), n);
            }
        }
        function Bo(t) {
            var e = (function (t, e) {
                if ("object" != Ho(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Ho(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Ho(e) ? e : e + "";
        }
        var Oo = (function () {
            return (
                (t = function t(e) {
                    var o = this;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.context = e),
                        (this.ui = r().summernote.ui),
                        (this.$editable = e.layoutInfo.editable),
                        (this.options = e.options),
                        (this.hint = this.options.hint || []),
                        (this.direction =
                            this.options.hintDirection || "bottom"),
                        (this.hints = Array.isArray(this.hint)
                            ? this.hint
                            : [this.hint]),
                        (this.events = {
                            "summernote.keyup": function (t, e) {
                                e.isDefaultPrevented() || o.handleKeyup(e);
                            },
                            "summernote.keydown": function (t, e) {
                                o.handleKeydown(e);
                            },
                            "summernote.disable summernote.dialog.shown summernote.blur":
                                function () {
                                    o.hide();
                                },
                        });
                }),
                (e = [
                    {
                        key: "shouldInitialize",
                        value: function () {
                            return this.hints.length > 0;
                        },
                    },
                    {
                        key: "initialize",
                        value: function () {
                            var t = this;
                            (this.lastWordRange = null),
                                (this.matchingWord = null),
                                (this.$popover = this.ui
                                    .popover({
                                        className: "note-hint-popover",
                                        hideArrow: !0,
                                        direction: "",
                                    })
                                    .render()
                                    .appendTo(this.options.container)),
                                this.$popover.hide(),
                                (this.$content = this.$popover.find(
                                    ".popover-content,.note-popover-content"
                                )),
                                this.$content.on(
                                    "click",
                                    ".note-hint-item",
                                    function (e) {
                                        t.$content
                                            .find(".active")
                                            .removeClass("active"),
                                            r()(e.currentTarget).addClass(
                                                "active"
                                            ),
                                            t.replace();
                                    }
                                ),
                                this.$popover.on("mousedown", function (t) {
                                    t.preventDefault();
                                });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.$popover.remove();
                        },
                    },
                    {
                        key: "selectItem",
                        value: function (t) {
                            this.$content.find(".active").removeClass("active"),
                                t.addClass("active"),
                                (this.$content[0].scrollTop =
                                    t[0].offsetTop -
                                    this.$content.innerHeight() / 2);
                        },
                    },
                    {
                        key: "moveDown",
                        value: function () {
                            var t = this.$content.find(
                                    ".note-hint-item.active"
                                ),
                                e = t.next();
                            if (e.length) this.selectItem(e);
                            else {
                                var o = t.parent().next();
                                o.length ||
                                    (o = this.$content
                                        .find(".note-hint-group")
                                        .first()),
                                    this.selectItem(
                                        o.find(".note-hint-item").first()
                                    );
                            }
                        },
                    },
                    {
                        key: "moveUp",
                        value: function () {
                            var t = this.$content.find(
                                    ".note-hint-item.active"
                                ),
                                e = t.prev();
                            if (e.length) this.selectItem(e);
                            else {
                                var o = t.parent().prev();
                                o.length ||
                                    (o = this.$content
                                        .find(".note-hint-group")
                                        .last()),
                                    this.selectItem(
                                        o.find(".note-hint-item").last()
                                    );
                            }
                        },
                    },
                    {
                        key: "replace",
                        value: function () {
                            var t = this.$content.find(
                                ".note-hint-item.active"
                            );
                            if (t.length) {
                                var e = this.nodeFromItem(t);
                                if (
                                    null !== this.matchingWord &&
                                    0 === this.matchingWord.length
                                )
                                    this.lastWordRange.so =
                                        this.lastWordRange.eo;
                                else if (
                                    null !== this.matchingWord &&
                                    this.matchingWord.length > 0 &&
                                    !this.lastWordRange.isCollapsed()
                                ) {
                                    var o =
                                        this.lastWordRange.eo -
                                        this.lastWordRange.so -
                                        this.matchingWord.length;
                                    o > 0 && (this.lastWordRange.so += o);
                                }
                                if (
                                    (this.lastWordRange.insertNode(e),
                                    "next" === this.options.hintSelect)
                                ) {
                                    var n = document.createTextNode("");
                                    r()(e).after(n),
                                        Et.createFromNodeBefore(n).select();
                                } else Et.createFromNodeAfter(e).select();
                                (this.lastWordRange = null),
                                    this.hide(),
                                    this.context.invoke("editor.focus"),
                                    this.context.triggerEvent(
                                        "change",
                                        this.$editable.html(),
                                        this.$editable
                                    );
                            }
                        },
                    },
                    {
                        key: "nodeFromItem",
                        value: function (t) {
                            var e = this.hints[t.data("index")],
                                o = t.data("item"),
                                n = e.content ? e.content(o) : o;
                            return (
                                "string" == typeof n && (n = pt.createText(n)),
                                n
                            );
                        },
                    },
                    {
                        key: "createItemTemplates",
                        value: function (t, e) {
                            var o = this.hints[t];
                            return e.map(function (e, n) {
                                var i = r()(
                                    '<div class="note-hint-item"></div>'
                                );
                                return (
                                    i.append(
                                        o.template ? o.template(e) : e + ""
                                    ),
                                    i.data({ index: t, item: e }),
                                    0 === t && 0 === n && i.addClass("active"),
                                    i
                                );
                            });
                        },
                    },
                    {
                        key: "handleKeydown",
                        value: function (t) {
                            this.$popover.is(":visible") &&
                                (t.keyCode === Nt.code.ENTER
                                    ? (t.preventDefault(), this.replace())
                                    : t.keyCode === Nt.code.UP
                                    ? (t.preventDefault(), this.moveUp())
                                    : t.keyCode === Nt.code.DOWN &&
                                      (t.preventDefault(), this.moveDown()));
                        },
                    },
                    {
                        key: "searchKeyword",
                        value: function (t, e, o) {
                            var n = this.hints[t];
                            if (n && n.match.test(e) && n.search) {
                                var i = n.match.exec(e);
                                (this.matchingWord = i[0]), n.search(i[1], o);
                            } else o();
                        },
                    },
                    {
                        key: "createGroup",
                        value: function (t, e) {
                            var o = this,
                                n = r()(
                                    '<div class="note-hint-group note-hint-group-' +
                                        t +
                                        '"></div>'
                                );
                            return (
                                this.searchKeyword(t, e, function (e) {
                                    (e = e || []).length &&
                                        (n.html(o.createItemTemplates(t, e)),
                                        o.show());
                                }),
                                n
                            );
                        },
                    },
                    {
                        key: "handleKeyup",
                        value: function (t) {
                            var e = this;
                            if (
                                !C.contains(
                                    [Nt.code.ENTER, Nt.code.UP, Nt.code.DOWN],
                                    t.keyCode
                                )
                            ) {
                                var o,
                                    n,
                                    i = this.context.invoke(
                                        "editor.getLastRange"
                                    );
                                if ("words" === this.options.hintMode) {
                                    if (
                                        ((o = i.getWordsRange(i)),
                                        (n = o.toString()),
                                        this.hints.forEach(function (t) {
                                            if (t.match.test(n))
                                                return (
                                                    (o = i.getWordsMatchRange(
                                                        t.match
                                                    )),
                                                    !1
                                                );
                                        }),
                                        !o)
                                    )
                                        return void this.hide();
                                    n = o.toString();
                                } else
                                    (o = i.getWordRange()), (n = o.toString());
                                if (this.hints.length && n) {
                                    this.$content.empty();
                                    var a = g.rect2bnd(
                                            C.last(o.getClientRects())
                                        ),
                                        s = r()(
                                            this.options.container
                                        ).offset();
                                    a &&
                                        ((a.top -= s.top),
                                        (a.left -= s.left),
                                        this.$popover.hide(),
                                        (this.lastWordRange = o),
                                        this.hints.forEach(function (t, o) {
                                            t.match.test(n) &&
                                                e
                                                    .createGroup(o, n)
                                                    .appendTo(e.$content);
                                        }),
                                        this.$content
                                            .find(".note-hint-item")
                                            .first()
                                            .addClass("active"),
                                        "top" === this.direction
                                            ? this.$popover.css({
                                                  left: a.left,
                                                  top:
                                                      a.top -
                                                      this.$popover.outerHeight() -
                                                      5,
                                              })
                                            : this.$popover.css({
                                                  left: a.left,
                                                  top: a.top + a.height + 5,
                                              }));
                                } else this.hide();
                            }
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.$popover.show();
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.$popover.hide();
                        },
                    },
                ]),
                e && jo(t.prototype, e),
                o && jo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function zo(t) {
            return (
                (zo =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                zo(t)
            );
        }
        function Mo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Uo(n.key), n);
            }
        }
        function Uo(t) {
            var e = (function (t, e) {
                if ("object" != zo(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != zo(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == zo(e) ? e : e + "";
        }
        r().summernote = r().extend(r().summernote, {
            version: "0.9.0",
            plugins: {},
            dom: pt,
            range: Et,
            lists: C,
            options: {
                langInfo: r().summernote.lang["en-US"],
                editing: !0,
                modules: {
                    editor: oe,
                    clipboard: ae,
                    dropzone: ue,
                    codeview: ve,
                    statusbar: ke,
                    fullscreen: xe,
                    handle: Ne,
                    hintPopover: Oo,
                    autoLink: Le,
                    autoSync: je,
                    autoReplace: Me,
                    placeholder: qe,
                    buttons: Ze,
                    toolbar: Je,
                    linkDialog: ao,
                    linkPopover: uo,
                    imageDialog: mo,
                    imagePopover: yo,
                    tablePopover: So,
                    videoDialog: Po,
                    helpDialog: Ro,
                    airPopover: Do,
                },
                buttons: {},
                lang: "en-US",
                followingToolbar: !1,
                toolbarPosition: "top",
                otherStaticBar: "",
                codeviewKeepButton: !1,
                toolbar: [
                    ["style", ["style"]],
                    ["font", ["bold", "underline", "clear"]],
                    ["fontname", ["fontname"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture", "video"]],
                    ["view", ["fullscreen", "codeview", "help"]],
                ],
                popatmouse: !0,
                popover: {
                    image: [
                        [
                            "resize",
                            [
                                "resizeFull",
                                "resizeHalf",
                                "resizeQuarter",
                                "resizeNone",
                            ],
                        ],
                        ["float", ["floatLeft", "floatRight", "floatNone"]],
                        ["remove", ["removeMedia"]],
                    ],
                    link: [["link", ["linkDialogShow", "unlink"]]],
                    table: [
                        [
                            "add",
                            [
                                "addRowDown",
                                "addRowUp",
                                "addColLeft",
                                "addColRight",
                            ],
                        ],
                        ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
                    ],
                    air: [
                        ["color", ["color"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["para", ["ul", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture"]],
                        ["view", ["fullscreen", "codeview"]],
                    ],
                },
                linkAddNoReferrer: !1,
                addLinkNoOpener: !1,
                airMode: !1,
                overrideContextMenu: !1,
                width: null,
                height: null,
                linkTargetBlank: !0,
                focus: !1,
                tabDisable: !1,
                tabSize: 4,
                styleWithCSS: !1,
                shortcuts: !0,
                textareaAutoSync: !0,
                tooltip: "auto",
                container: null,
                maxTextLength: 0,
                blockquoteBreakingLevel: 2,
                spellCheck: !0,
                disableGrammar: !1,
                placeholder: null,
                inheritPlaceholder: !1,
                recordEveryKeystroke: !1,
                historyLimit: 200,
                showDomainOnlyForAutolink: !1,
                hintMode: "word",
                hintSelect: "after",
                hintDirection: "bottom",
                styleTags: [
                    "p",
                    "blockquote",
                    "pre",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                ],
                fontNames: [
                    "Arial",
                    "Arial Black",
                    "Comic Sans MS",
                    "Courier New",
                    "Helvetica Neue",
                    "Helvetica",
                    "Impact",
                    "Lucida Grande",
                    "Tahoma",
                    "Times New Roman",
                    "Verdana",
                ],
                fontNamesIgnoreCheck: [],
                addDefaultFonts: !0,
                fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                fontSizeUnits: ["px", "pt"],
                colors: [
                    [
                        "#000000",
                        "#424242",
                        "#636363",
                        "#9C9C94",
                        "#CEC6CE",
                        "#EFEFEF",
                        "#F7F7F7",
                        "#FFFFFF",
                    ],
                    [
                        "#FF0000",
                        "#FF9C00",
                        "#FFFF00",
                        "#00FF00",
                        "#00FFFF",
                        "#0000FF",
                        "#9C00FF",
                        "#FF00FF",
                    ],
                    [
                        "#F7C6CE",
                        "#FFE7CE",
                        "#FFEFC6",
                        "#D6EFD6",
                        "#CEDEE7",
                        "#CEE7F7",
                        "#D6D6E7",
                        "#E7D6DE",
                    ],
                    [
                        "#E79C9C",
                        "#FFC69C",
                        "#FFE79C",
                        "#B5D6A5",
                        "#A5C6CE",
                        "#9CC6EF",
                        "#B5A5D6",
                        "#D6A5BD",
                    ],
                    [
                        "#E76363",
                        "#F7AD6B",
                        "#FFD663",
                        "#94BD7B",
                        "#73A5AD",
                        "#6BADDE",
                        "#8C7BC6",
                        "#C67BA5",
                    ],
                    [
                        "#CE0000",
                        "#E79439",
                        "#EFC631",
                        "#6BA54A",
                        "#4A7B8C",
                        "#3984C6",
                        "#634AA5",
                        "#A54A7B",
                    ],
                    [
                        "#9C0000",
                        "#B56308",
                        "#BD9400",
                        "#397B21",
                        "#104A5A",
                        "#085294",
                        "#311873",
                        "#731842",
                    ],
                    [
                        "#630000",
                        "#7B3900",
                        "#846300",
                        "#295218",
                        "#083139",
                        "#003163",
                        "#21104A",
                        "#4A1031",
                    ],
                ],
                colorsName: [
                    [
                        "Black",
                        "Tundora",
                        "Dove Gray",
                        "Star Dust",
                        "Pale Slate",
                        "Gallery",
                        "Alabaster",
                        "White",
                    ],
                    [
                        "Red",
                        "Orange Peel",
                        "Yellow",
                        "Green",
                        "Cyan",
                        "Blue",
                        "Electric Violet",
                        "Magenta",
                    ],
                    [
                        "Azalea",
                        "Karry",
                        "Egg White",
                        "Zanah",
                        "Botticelli",
                        "Tropical Blue",
                        "Mischka",
                        "Twilight",
                    ],
                    [
                        "Tonys Pink",
                        "Peach Orange",
                        "Cream Brulee",
                        "Sprout",
                        "Casper",
                        "Perano",
                        "Cold Purple",
                        "Careys Pink",
                    ],
                    [
                        "Mandy",
                        "Rajah",
                        "Dandelion",
                        "Olivine",
                        "Gulf Stream",
                        "Viking",
                        "Blue Marguerite",
                        "Puce",
                    ],
                    [
                        "Guardsman Red",
                        "Fire Bush",
                        "Golden Dream",
                        "Chelsea Cucumber",
                        "Smalt Blue",
                        "Boston Blue",
                        "Butterfly Bush",
                        "Cadillac",
                    ],
                    [
                        "Sangria",
                        "Mai Tai",
                        "Buddha Gold",
                        "Forest Green",
                        "Eden",
                        "Venice Blue",
                        "Meteorite",
                        "Claret",
                    ],
                    [
                        "Rosewood",
                        "Cinnamon",
                        "Olive",
                        "Parsley",
                        "Tiber",
                        "Midnight Blue",
                        "Valentino",
                        "Loulou",
                    ],
                ],
                colorButton: { foreColor: "#000000", backColor: "#FFFF00" },
                lineHeights: [
                    "1.0",
                    "1.2",
                    "1.4",
                    "1.5",
                    "1.6",
                    "1.8",
                    "2.0",
                    "3.0",
                ],
                tableClassName: "table table-bordered",
                insertTableMaxSize: { col: 10, row: 10 },
                dialogsInBody: !1,
                dialogsFade: !1,
                maximumImageFileSize: null,
                acceptImageFileTypes: "image/*",
                allowClipboardImagePasting: !0,
                callbacks: {
                    onBeforeCommand: null,
                    onBlur: null,
                    onBlurCodeview: null,
                    onChange: null,
                    onChangeCodeview: null,
                    onDialogShown: null,
                    onEnter: null,
                    onFocus: null,
                    onImageLinkInsert: null,
                    onImageUpload: null,
                    onImageUploadError: null,
                    onInit: null,
                    onKeydown: null,
                    onKeyup: null,
                    onMousedown: null,
                    onMouseup: null,
                    onPaste: null,
                    onScroll: null,
                },
                codemirror: {
                    mode: "text/html",
                    htmlMode: !0,
                    lineNumbers: !0,
                },
                codeviewFilter: !0,
                codeviewFilterRegex:
                    /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
                codeviewIframeFilter: !0,
                codeviewIframeWhitelistSrc: [],
                codeviewIframeWhitelistSrcBase: [
                    "www.youtube.com",
                    "www.youtube-nocookie.com",
                    "www.facebook.com",
                    "vine.co",
                    "instagram.com",
                    "player.vimeo.com",
                    "www.dailymotion.com",
                    "player.youku.com",
                    "jumpingbean.tv",
                    "v.qq.com",
                ],
                keyMap: {
                    pc: {
                        ESC: "escape",
                        ENTER: "insertParagraph",
                        "CTRL+Z": "undo",
                        "CTRL+Y": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CTRL+B": "bold",
                        "CTRL+I": "italic",
                        "CTRL+U": "underline",
                        "CTRL+SHIFT+S": "strikethrough",
                        "CTRL+BACKSLASH": "removeFormat",
                        "CTRL+SHIFT+L": "justifyLeft",
                        "CTRL+SHIFT+E": "justifyCenter",
                        "CTRL+SHIFT+R": "justifyRight",
                        "CTRL+SHIFT+J": "justifyFull",
                        "CTRL+SHIFT+NUM7": "insertUnorderedList",
                        "CTRL+SHIFT+NUM8": "insertOrderedList",
                        "CTRL+LEFTBRACKET": "outdent",
                        "CTRL+RIGHTBRACKET": "indent",
                        "CTRL+NUM0": "formatPara",
                        "CTRL+NUM1": "formatH1",
                        "CTRL+NUM2": "formatH2",
                        "CTRL+NUM3": "formatH3",
                        "CTRL+NUM4": "formatH4",
                        "CTRL+NUM5": "formatH5",
                        "CTRL+NUM6": "formatH6",
                        "CTRL+ENTER": "insertHorizontalRule",
                        "CTRL+K": "linkDialog.show",
                    },
                    mac: {
                        ESC: "escape",
                        ENTER: "insertParagraph",
                        "CMD+Z": "undo",
                        "CMD+SHIFT+Z": "redo",
                        TAB: "tab",
                        "SHIFT+TAB": "untab",
                        "CMD+B": "bold",
                        "CMD+I": "italic",
                        "CMD+U": "underline",
                        "CMD+SHIFT+S": "strikethrough",
                        "CMD+BACKSLASH": "removeFormat",
                        "CMD+SHIFT+L": "justifyLeft",
                        "CMD+SHIFT+E": "justifyCenter",
                        "CMD+SHIFT+R": "justifyRight",
                        "CMD+SHIFT+J": "justifyFull",
                        "CMD+SHIFT+NUM7": "insertUnorderedList",
                        "CMD+SHIFT+NUM8": "insertOrderedList",
                        "CMD+LEFTBRACKET": "outdent",
                        "CMD+RIGHTBRACKET": "indent",
                        "CMD+NUM0": "formatPara",
                        "CMD+NUM1": "formatH1",
                        "CMD+NUM2": "formatH2",
                        "CMD+NUM3": "formatH3",
                        "CMD+NUM4": "formatH4",
                        "CMD+NUM5": "formatH5",
                        "CMD+NUM6": "formatH6",
                        "CMD+ENTER": "insertHorizontalRule",
                        "CMD+K": "linkDialog.show",
                    },
                },
                icons: {
                    align: "note-icon-align",
                    alignCenter: "note-icon-align-center",
                    alignJustify: "note-icon-align-justify",
                    alignLeft: "note-icon-align-left",
                    alignRight: "note-icon-align-right",
                    rowBelow: "note-icon-row-below",
                    colBefore: "note-icon-col-before",
                    colAfter: "note-icon-col-after",
                    rowAbove: "note-icon-row-above",
                    rowRemove: "note-icon-row-remove",
                    colRemove: "note-icon-col-remove",
                    indent: "note-icon-align-indent",
                    outdent: "note-icon-align-outdent",
                    arrowsAlt: "note-icon-arrows-alt",
                    bold: "note-icon-bold",
                    caret: "note-icon-caret",
                    circle: "note-icon-circle",
                    close: "note-icon-close",
                    code: "note-icon-code",
                    eraser: "note-icon-eraser",
                    floatLeft: "note-icon-float-left",
                    floatRight: "note-icon-float-right",
                    font: "note-icon-font",
                    frame: "note-icon-frame",
                    italic: "note-icon-italic",
                    link: "note-icon-link",
                    unlink: "note-icon-chain-broken",
                    magic: "note-icon-magic",
                    menuCheck: "note-icon-menu-check",
                    minus: "note-icon-minus",
                    orderedlist: "note-icon-orderedlist",
                    pencil: "note-icon-pencil",
                    picture: "note-icon-picture",
                    question: "note-icon-question",
                    redo: "note-icon-redo",
                    rollback: "note-icon-rollback",
                    square: "note-icon-square",
                    strikethrough: "note-icon-strikethrough",
                    subscript: "note-icon-subscript",
                    superscript: "note-icon-superscript",
                    table: "note-icon-table",
                    textHeight: "note-icon-text-height",
                    trash: "note-icon-trash",
                    underline: "note-icon-underline",
                    undo: "note-icon-undo",
                    unorderedlist: "note-icon-unorderedlist",
                    video: "note-icon-video",
                },
            },
        });
        var Wo = (function () {
            return (
                (t = function t(e, o, n, i) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.markup = e),
                        (this.children = o),
                        (this.options = n),
                        (this.callback = i);
                }),
                (e = [
                    {
                        key: "render",
                        value: function (t) {
                            var e = r()(this.markup);
                            if (
                                (this.options &&
                                    this.options.contents &&
                                    e.html(this.options.contents),
                                this.options &&
                                    this.options.className &&
                                    e.addClass(this.options.className),
                                this.options &&
                                    this.options.data &&
                                    r().each(
                                        this.options.data,
                                        function (t, o) {
                                            e.attr("data-" + t, o);
                                        }
                                    ),
                                this.options &&
                                    this.options.click &&
                                    e.on("click", this.options.click),
                                this.children)
                            ) {
                                var o = e.find(".note-children-container");
                                this.children.forEach(function (t) {
                                    t.render(o.length ? o : e);
                                });
                            }
                            return (
                                this.callback && this.callback(e, this.options),
                                this.options &&
                                    this.options.callback &&
                                    this.options.callback(e),
                                t && t.append(e),
                                e
                            );
                        },
                    },
                ]) && Mo(t.prototype, e),
                o && Mo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        const Ko = function (t, e) {
            return function () {
                var o =
                        "object" === zo(arguments[1])
                            ? arguments[1]
                            : arguments[0],
                    n = Array.isArray(arguments[0]) ? arguments[0] : [];
                return o && o.children && (n = o.children), new Wo(t, n, o, e);
            };
        };
        function qo(t) {
            return (
                (qo =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                qo(t)
            );
        }
        function Vo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, _o(n.key), n);
            }
        }
        function _o(t) {
            var e = (function (t, e) {
                if ("object" != qo(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != qo(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == qo(e) ? e : e + "";
        }
        const Go = (function () {
            return (
                (t = function t(e, o) {
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (this.$node = e),
                        (this.options = r().extend(
                            {},
                            {
                                title: "",
                                target: o.container,
                                trigger: "hover focus",
                                placement: "bottom",
                            },
                            o
                        )),
                        (this.$tooltip = r()(
                            [
                                '<div class="note-tooltip">',
                                '<div class="note-tooltip-arrow"></div>',
                                '<div class="note-tooltip-content"></div>',
                                "</div>",
                            ].join("")
                        )),
                        "manual" !== this.options.trigger)
                    ) {
                        var n = this.show.bind(this),
                            i = this.hide.bind(this),
                            a = this.toggle.bind(this);
                        this.options.trigger.split(" ").forEach(function (t) {
                            "hover" === t
                                ? (e.off("mouseenter mouseleave"),
                                  e.on("mouseenter", n).on("mouseleave", i))
                                : "click" === t
                                ? e.on("click", a)
                                : "focus" === t &&
                                  e.on("focus", n).on("blur", i);
                        });
                    }
                }),
                (e = [
                    {
                        key: "show",
                        value: function () {
                            var t = this.$node,
                                e = t.offset(),
                                o = r()(this.options.target).offset();
                            (e.top -= o.top), (e.left -= o.left);
                            var n = this.$tooltip,
                                i =
                                    this.options.title ||
                                    t.attr("title") ||
                                    t.data("title"),
                                a =
                                    this.options.placement ||
                                    t.data("placement");
                            n.addClass(a),
                                n.find(".note-tooltip-content").text(i),
                                n.appendTo(this.options.target);
                            var s = t.outerWidth(),
                                l = t.outerHeight(),
                                c = n.outerWidth(),
                                u = n.outerHeight();
                            "bottom" === a
                                ? n.css({
                                      top: e.top + l,
                                      left: e.left + (s / 2 - c / 2),
                                  })
                                : "top" === a
                                ? n.css({
                                      top: e.top - u,
                                      left: e.left + (s / 2 - c / 2),
                                  })
                                : "left" === a
                                ? n.css({
                                      top: e.top + (l / 2 - u / 2),
                                      left: e.left - c,
                                  })
                                : "right" === a &&
                                  n.css({
                                      top: e.top + (l / 2 - u / 2),
                                      left: e.left + s,
                                  }),
                                n.addClass("in");
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            var t = this;
                            this.$tooltip.removeClass("in"),
                                setTimeout(function () {
                                    t.$tooltip.remove();
                                }, 200);
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.$tooltip.hasClass("in")
                                ? this.hide()
                                : this.show();
                        },
                    },
                ]) && Vo(t.prototype, e),
                o && Vo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        function Zo(t) {
            return (
                (Zo =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                Zo(t)
            );
        }
        function Yo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, Xo(n.key), n);
            }
        }
        function Xo(t) {
            var e = (function (t, e) {
                if ("object" != Zo(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != Zo(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == Zo(e) ? e : e + "";
        }
        var Qo = (function () {
            return (
                (t = function t(e, o) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.$button = e),
                        (this.options = r().extend(
                            {},
                            { target: o.container },
                            o
                        )),
                        this.setEvent();
                }),
                (e = [
                    {
                        key: "setEvent",
                        value: function () {
                            var t = this;
                            this.$button.on("click", function (e) {
                                t.toggle(), e.stopImmediatePropagation();
                            });
                        },
                    },
                    {
                        key: "clear",
                        value: function () {
                            var t = r()(".note-btn-group.open");
                            t.find(".note-btn.active").removeClass("active"),
                                t.removeClass("open");
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.$button.addClass("active"),
                                this.$button.parent().addClass("open");
                            var t = this.$button.next(),
                                e = t.offset(),
                                o = t.outerWidth(),
                                n = r()(window).width(),
                                i = parseFloat(
                                    r()(this.options.target).css("margin-right")
                                );
                            e.left + o > n - i
                                ? t.css("margin-left", n - i - (e.left + o))
                                : t.css("margin-left", "");
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.$button.removeClass("active"),
                                this.$button.parent().removeClass("open");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            var t = this.$button.parent().hasClass("open");
                            this.clear(), t ? this.hide() : this.show();
                        },
                    },
                ]),
                e && Yo(t.prototype, e),
                o && Yo(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        r()(document).on("click.note-dropdown-menu", function (t) {
            r()(t.target).closest(".note-btn-group").length ||
                (r()(".note-btn-group.open .note-btn.active").removeClass(
                    "active"
                ),
                r()(".note-btn-group.open").removeClass("open"));
        }),
            r()(document).on("click.note-dropdown-menu", function (t) {
                r()(t.target)
                    .closest(".note-dropdown-menu")
                    .parent()
                    .removeClass("open"),
                    r()(t.target)
                        .closest(".note-dropdown-menu")
                        .parent()
                        .find(".note-btn.active")
                        .removeClass("active");
            });
        const Jo = Qo;
        function tn(t) {
            return (
                (tn =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                tn(t)
            );
        }
        function en(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, on(n.key), n);
            }
        }
        function on(t) {
            var e = (function (t, e) {
                if ("object" != tn(t) || !t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var n = o.call(t, e || "default");
                    if ("object" != tn(n)) return n;
                    throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                    );
                }
                return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == tn(e) ? e : e + "";
        }
        const nn = (function () {
            return (
                (t = function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.$modal = e),
                        (this.$backdrop = r()(
                            '<div class="note-modal-backdrop"></div>'
                        ));
                }),
                (e = [
                    {
                        key: "show",
                        value: function () {
                            var t = this;
                            this.$backdrop.appendTo(document.body).show(),
                                this.$modal.addClass("open").show(),
                                this.$modal.trigger("note.modal.show"),
                                this.$modal
                                    .off("click", ".close")
                                    .on(
                                        "click",
                                        ".close",
                                        this.hide.bind(this)
                                    ),
                                this.$modal.on("keydown", function (e) {
                                    27 === e.which &&
                                        (e.preventDefault(), t.hide());
                                });
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.$modal.removeClass("open").hide(),
                                this.$backdrop.hide(),
                                this.$modal.trigger("note.modal.hide"),
                                this.$modal.off("keydown");
                        },
                    },
                ]) && en(t.prototype, e),
                o && en(t, o),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
            );
            var t, e, o;
        })();
        var rn = Ko('<div class="note-editor note-frame"></div>'),
            an = Ko('<div class="note-toolbar" role="toolbar"></div>'),
            sn = Ko('<div class="note-editing-area"></div>'),
            ln = Ko(
                '<textarea class="note-codable" aria-multiline="true"></textarea>'
            ),
            cn = Ko(
                '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>'
            ),
            un = Ko(
                [
                    '<output class="note-status-output" role="status" aria-live="polite"></output>',
                    '<div class="note-statusbar" role="status">',
                    '<div class="note-resizebar" aria-label="resize">',
                    '<div class="note-icon-bar"></div>',
                    '<div class="note-icon-bar"></div>',
                    '<div class="note-icon-bar"></div>',
                    "</div>",
                    "</div>",
                ].join("")
            ),
            dn = Ko('<div class="note-editor note-airframe"></div>'),
            fn = Ko(
                [
                    '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>',
                    '<output class="note-status-output" role="status" aria-live="polite"></output>',
                ].join("")
            ),
            hn = Ko('<div class="note-btn-group"></div>'),
            pn = Ko(
                '<button type="button" class="note-btn" tabindex="-1"></button>',
                function (t, e) {
                    e &&
                        e.tooltip &&
                        (t.attr({ "aria-label": e.tooltip }),
                        t
                            .data(
                                "_lite_tooltip",
                                new Go(t, {
                                    title: e.tooltip,
                                    container: e.container,
                                })
                            )
                            .on("click", function (t) {
                                r()(t.currentTarget)
                                    .data("_lite_tooltip")
                                    .hide();
                            })),
                        e.contents && t.html(e.contents),
                        e &&
                            e.data &&
                            "dropdown" === e.data.toggle &&
                            t.data(
                                "_lite_dropdown",
                                new Jo(t, { container: e.container })
                            ),
                        e &&
                            e.codeviewKeepButton &&
                            t.addClass("note-codeview-keep");
                }
            ),
            mn = Ko(
                '<div class="note-dropdown-menu" role="list"></div>',
                function (t, e) {
                    var o = Array.isArray(e.items)
                        ? e.items.map(function (t) {
                              var o = "string" == typeof t ? t : t.value || "",
                                  n = e.template ? e.template(t) : t,
                                  i = r()(
                                      '<a class="note-dropdown-item" href="#" data-value="' +
                                          o +
                                          '" role="listitem" aria-label="' +
                                          o +
                                          '"></a>'
                                  );
                              return i.html(n).data("item", t), i;
                          })
                        : e.items;
                    t.html(o).attr({ "aria-label": e.title }),
                        t.on("click", "> .note-dropdown-item", function (t) {
                            var o = r()(this),
                                n = o.data("item"),
                                i = o.data("value");
                            n.click
                                ? n.click(o)
                                : e.itemClick && e.itemClick(t, n, i);
                        }),
                        e &&
                            e.codeviewKeepButton &&
                            t.addClass("note-codeview-keep");
                }
            ),
            vn = Ko(
                '<div class="note-dropdown-menu note-check" role="list"></div>',
                function (t, e) {
                    var o = Array.isArray(e.items)
                        ? e.items.map(function (t) {
                              var o = "string" == typeof t ? t : t.value || "",
                                  n = e.template ? e.template(t) : t,
                                  i = r()(
                                      '<a class="note-dropdown-item" href="#" data-value="' +
                                          o +
                                          '" role="listitem" aria-label="' +
                                          t +
                                          '"></a>'
                                  );
                              return (
                                  i
                                      .html([In(e.checkClassName), " ", n])
                                      .data("item", t),
                                  i
                              );
                          })
                        : e.items;
                    t.html(o).attr({ "aria-label": e.title }),
                        t.on("click", "> .note-dropdown-item", function (t) {
                            var o = r()(this),
                                n = o.data("item"),
                                i = o.data("value");
                            n.click
                                ? n.click(o)
                                : e.itemClick && e.itemClick(t, n, i);
                        }),
                        e &&
                            e.codeviewKeepButton &&
                            t.addClass("note-codeview-keep");
                }
            ),
            gn = function (t, e) {
                return t + " " + In(e.icons.caret, "span");
            },
            bn = function (t, e) {
                return hn(
                    [
                        pn({
                            className: "dropdown-toggle",
                            contents: t.title + " " + In("note-icon-caret"),
                            tooltip: t.tooltip,
                            data: { toggle: "dropdown" },
                        }),
                        mn({
                            className: t.className,
                            items: t.items,
                            template: t.template,
                            itemClick: t.itemClick,
                        }),
                    ],
                    { callback: e }
                ).render();
            },
            yn = function (t, e) {
                return hn(
                    [
                        pn({
                            className: "dropdown-toggle",
                            contents: t.title + " " + In("note-icon-caret"),
                            tooltip: t.tooltip,
                            data: { toggle: "dropdown" },
                        }),
                        vn({
                            className: t.className,
                            checkClassName: t.checkClassName,
                            items: t.items,
                            template: t.template,
                            itemClick: t.itemClick,
                        }),
                    ],
                    { callback: e }
                ).render();
            },
            kn = function (t) {
                return hn([
                    pn({
                        className: "dropdown-toggle",
                        contents: t.title + " " + In("note-icon-caret"),
                        tooltip: t.tooltip,
                        data: { toggle: "dropdown" },
                    }),
                    mn([
                        hn({ className: "note-align", children: t.items[0] }),
                        hn({ className: "note-list", children: t.items[1] }),
                    ]),
                ]).render();
            },
            wn = function (t) {
                return hn(
                    [
                        pn({
                            className: "dropdown-toggle",
                            contents: t.title + " " + In("note-icon-caret"),
                            tooltip: t.tooltip,
                            data: { toggle: "dropdown" },
                        }),
                        mn({
                            className: "note-table",
                            items: [
                                '<div class="note-dimension-picker">',
                                '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
                                '<div class="note-dimension-picker-highlighted"></div>',
                                '<div class="note-dimension-picker-unhighlighted"></div>',
                                "</div>",
                                '<div class="note-dimension-display">1 x 1</div>',
                            ].join(""),
                        }),
                    ],
                    {
                        callback: function (e) {
                            e.find(".note-dimension-picker-mousecatcher")
                                .css({
                                    width: t.col + "em",
                                    height: t.row + "em",
                                })
                                .on("mouseup", t.itemClick)
                                .on("mousemove", function (e) {
                                    !(function (t, e, o) {
                                        var n,
                                            i = r()(t.target.parentNode),
                                            a = i.next(),
                                            s = i.find(
                                                ".note-dimension-picker-mousecatcher"
                                            ),
                                            l = i.find(
                                                ".note-dimension-picker-highlighted"
                                            ),
                                            c = i.find(
                                                ".note-dimension-picker-unhighlighted"
                                            );
                                        if (void 0 === t.offsetX) {
                                            var u = r()(t.target).offset();
                                            n = {
                                                x: t.pageX - u.left,
                                                y: t.pageY - u.top,
                                            };
                                        } else n = { x: t.offsetX, y: t.offsetY };
                                        var d = Math.ceil(n.x / 18) || 1,
                                            f = Math.ceil(n.y / 18) || 1;
                                        l.css({
                                            width: d + "em",
                                            height: f + "em",
                                        }),
                                            s.data("value", d + "x" + f),
                                            d > 3 &&
                                                d < e &&
                                                c.css({ width: d + 1 + "em" }),
                                            f > 3 &&
                                                f < o &&
                                                c.css({ height: f + 1 + "em" }),
                                            a.html(d + " x " + f);
                                    })(e, t.col, t.row);
                                });
                        },
                    }
                ).render();
            },
            Cn = Ko('<div class="note-color-palette"></div>', function (t, e) {
                for (var o = [], n = 0, i = e.colors.length; n < i; n++) {
                    for (
                        var a = e.eventName,
                            s = e.colors[n],
                            l = e.colorsName[n],
                            c = [],
                            u = 0,
                            d = s.length;
                        u < d;
                        u++
                    ) {
                        var f = s[u],
                            h = l[u];
                        c.push(
                            [
                                '<button type="button" class="note-btn note-color-btn"',
                                'style="background-color:',
                                f,
                                '" ',
                                'data-event="',
                                a,
                                '" ',
                                'data-value="',
                                f,
                                '" ',
                                'data-title="',
                                h,
                                '" ',
                                'aria-label="',
                                h,
                                '" ',
                                'data-toggle="button" tabindex="-1"></button>',
                            ].join("")
                        );
                    }
                    o.push(
                        '<div class="note-color-row">' + c.join("") + "</div>"
                    );
                }
                t.html(o.join("")),
                    t.find(".note-color-btn").each(function () {
                        r()(this).data(
                            "_lite_tooltip",
                            new Go(r()(this), { container: e.container })
                        );
                    });
            }),
            Sn = function (t, e) {
                return hn({
                    className: "note-color",
                    children: [
                        pn({
                            className: "note-current-color-button",
                            contents: t.title,
                            tooltip: t.lang.color.recent,
                            click: t.currentClick,
                            callback: function (t) {
                                var o = t.find(".note-recent-color");
                                "foreColor" !== e &&
                                    (o.css("background-color", "#FFFF00"),
                                    t.attr("data-backColor", "#FFFF00"));
                            },
                        }),
                        pn({
                            className: "dropdown-toggle",
                            contents: In("note-icon-caret"),
                            tooltip: t.lang.color.more,
                            data: { toggle: "dropdown" },
                        }),
                        mn({
                            items: [
                                "<div>",
                                '<div class="note-btn-group btn-background-color">',
                                '<div class="note-palette-title">' +
                                    t.lang.color.background +
                                    "</div>",
                                "<div>",
                                '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="backColor" data-value="transparent">',
                                t.lang.color.transparent,
                                "</button>",
                                "</div>",
                                '<div class="note-holder" data-event="backColor"></div>',
                                '<div class="btn-sm">',
                                '<input type="color" id="html5bcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">',
                                '<button type="button" class="note-color-reset btn" data-event="backColor" data-value="cpbackColor">',
                                t.lang.color.cpSelect,
                                "</button>",
                                "</div>",
                                "</div>",
                                '<div class="note-btn-group btn-foreground-color">',
                                '<div class="note-palette-title">' +
                                    t.lang.color.foreground +
                                    "</div>",
                                "<div>",
                                '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="removeFormat" data-value="foreColor">',
                                t.lang.color.resetToDefault,
                                "</button>",
                                "</div>",
                                '<div class="note-holder" data-event="foreColor"></div>',
                                '<div class="btn-sm">',
                                '<input type="color" id="html5fcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">',
                                '<button type="button" class="note-color-reset btn" data-event="foreColor" data-value="cpforeColor">',
                                t.lang.color.cpSelect,
                                "</button>",
                                "</div>",
                                "</div>",
                                "</div>",
                            ].join(""),
                            callback: function (o) {
                                o.find(".note-holder").each(function () {
                                    var e = r()(this);
                                    e.append(
                                        Cn({
                                            colors: t.colors,
                                            eventName: e.data("event"),
                                        }).render()
                                    );
                                }),
                                    "fore" === e
                                        ? (o
                                              .find(".btn-background-color")
                                              .hide(),
                                          o.css({ "min-width": "210px" }))
                                        : "back" === e &&
                                          (o
                                              .find(".btn-foreground-color")
                                              .hide(),
                                          o.css({ "min-width": "210px" }));
                            },
                            click: function (o) {
                                var n = r()(o.target),
                                    i = n.data("event"),
                                    a = n.data("value"),
                                    s =
                                        document.getElementById(
                                            "html5fcp"
                                        ).value,
                                    l =
                                        document.getElementById(
                                            "html5bcp"
                                        ).value;
                                if (
                                    ("cp" === a
                                        ? o.stopPropagation()
                                        : "cpbackColor" === a
                                        ? (a = l)
                                        : "cpforeColor" === a && (a = s),
                                    i && a)
                                ) {
                                    var c =
                                            "backColor" === i
                                                ? "background-color"
                                                : "color",
                                        u = n
                                            .closest(".note-color")
                                            .find(".note-recent-color"),
                                        d = n
                                            .closest(".note-color")
                                            .find(".note-current-color-button");
                                    u.css(c, a),
                                        d.attr("data-" + i, a),
                                        "fore" === e
                                            ? t.itemClick("foreColor", a)
                                            : "back" === e
                                            ? t.itemClick("backColor", a)
                                            : t.itemClick(i, a);
                                }
                            },
                        }),
                    ],
                }).render();
            },
            xn = Ko(
                '<div class="note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>',
                function (t, e) {
                    e.fade && t.addClass("fade"),
                        t.attr({ "aria-label": e.title }),
                        t.html(
                            [
                                '<div class="note-modal-content">',
                                e.title
                                    ? '<div class="note-modal-header"><button type="button" class="close" aria-label="Close" aria-hidden="true"><i class="note-icon-close"></i></button><h4 class="note-modal-title">' +
                                      e.title +
                                      "</h4></div>"
                                    : "",
                                '<div class="note-modal-body">' +
                                    e.body +
                                    "</div>",
                                e.footer
                                    ? '<div class="note-modal-footer">' +
                                      e.footer +
                                      "</div>"
                                    : "",
                                "</div>",
                            ].join("")
                        ),
                        t.data("modal", new nn(t, e));
                }
            ),
            Tn = function (t) {
                var e =
                        '<div class="note-form-group"><label for="note-dialog-video-url-' +
                        t.id +
                        '" class="note-form-label">' +
                        t.lang.video.url +
                        ' <small class="text-muted">' +
                        t.lang.video.providers +
                        '</small></label><input id="note-dialog-video-url-' +
                        t.id +
                        '" class="note-video-url note-input" type="text"/></div>',
                    o = [
                        '<button type="button" href="#" class="note-btn note-btn-primary note-video-btn disabled" disabled>',
                        t.lang.video.insert,
                        "</button>",
                    ].join("");
                return xn({
                    title: t.lang.video.insert,
                    fade: t.fade,
                    body: e,
                    footer: o,
                }).render();
            },
            En = function (t) {
                var e =
                        '<div class="note-form-group note-group-select-from-files"><label for="note-dialog-image-file-' +
                        t.id +
                        '" class="note-form-label">' +
                        t.lang.image.selectFromFiles +
                        '</label><input id="note-dialog-image-file-' +
                        t.id +
                        '" class="note-note-image-input note-input" type="file" name="files" accept="image/*" multiple="multiple"/>' +
                        t.imageLimitation +
                        '</div><div class="note-form-group"><label for="note-dialog-image-url-' +
                        t.id +
                        '" class="note-form-label">' +
                        t.lang.image.url +
                        '</label><input id="note-dialog-image-url-' +
                        t.id +
                        '" class="note-image-url note-input" type="text"/></div>',
                    o = [
                        '<button href="#" type="button" class="note-btn note-btn-primary note-btn-large note-image-btn disabled" disabled>',
                        t.lang.image.insert,
                        "</button>",
                    ].join("");
                return xn({
                    title: t.lang.image.insert,
                    fade: t.fade,
                    body: e,
                    footer: o,
                }).render();
            },
            Pn = function (t) {
                var e =
                        '<div class="note-form-group"><label for="note-dialog-link-txt-' +
                        t.id +
                        '" class="note-form-label">' +
                        t.lang.link.textToDisplay +
                        '</label><input id="note-dialog-link-txt-' +
                        t.id +
                        '" class="note-link-text note-input" type="text"/></div><div class="note-form-group"><label for="note-dialog-link-url-' +
                        t.id +
                        '" class="note-form-label">' +
                        t.lang.link.url +
                        '</label><input id="note-dialog-link-url-' +
                        t.id +
                        '" class="note-link-url note-input" type="text" value="http://"/></div>' +
                        (t.disableLinkTarget
                            ? ""
                            : '<div class="checkbox"><label for="note-dialog-link-nw-' +
                              t.id +
                              '"><input id="note-dialog-link-nw-' +
                              t.id +
                              '" type="checkbox" checked> ' +
                              t.lang.link.openInNewWindow +
                              "</label></div>"),
                    o = [
                        '<button href="#" type="button" class="note-btn note-btn-primary note-link-btn disabled" disabled>',
                        t.lang.link.insert,
                        "</button>",
                    ].join("");
                return xn({
                    className: "link-dialog",
                    title: t.lang.link.insert,
                    fade: t.fade,
                    body: e,
                    footer: o,
                }).render();
            },
            Nn = Ko(
                [
                    '<div class="note-popover bottom">',
                    '<div class="note-popover-arrow"></div>',
                    '<div class="popover-content note-children-container"></div>',
                    "</div>",
                ].join(""),
                function (t, e) {
                    var o = void 0 !== e.direction ? e.direction : "bottom";
                    t.addClass(o).hide(),
                        e.hideArrow && t.find(".note-popover-arrow").hide();
                }
            ),
            $n = Ko('<div class="checkbox"></div>', function (t, e) {
                t.html(
                    [
                        "<label" +
                            (e.id ? ' for="note-' + e.id + '"' : "") +
                            ">",
                        '<input role="checkbox" type="checkbox"' +
                            (e.id ? ' id="note-' + e.id + '"' : ""),
                        e.checked ? " checked" : "",
                        ' aria-checked="' +
                            (e.checked ? "true" : "false") +
                            '"/>',
                        e.text ? e.text : "",
                        "</label>",
                    ].join("")
                );
            }),
            In = function (t, e) {
                return t.match(/^</)
                    ? t
                    : "<" + (e = e || "i") + ' class="' + t + '"></' + e + ">";
            };
        return (
            (r().summernote = r().extend(r().summernote, {
                ui_template: function (t) {
                    return {
                        editor: rn,
                        toolbar: an,
                        editingArea: sn,
                        codable: ln,
                        editable: cn,
                        statusbar: un,
                        airEditor: dn,
                        airEditable: fn,
                        buttonGroup: hn,
                        button: pn,
                        dropdown: mn,
                        dropdownCheck: vn,
                        dropdownButton: bn,
                        dropdownButtonContents: gn,
                        dropdownCheckButton: yn,
                        paragraphDropdownButton: kn,
                        tableDropdownButton: wn,
                        colorDropdownButton: Sn,
                        palette: Cn,
                        dialog: xn,
                        videoDialog: Tn,
                        imageDialog: En,
                        linkDialog: Pn,
                        popover: Nn,
                        checkbox: $n,
                        icon: In,
                        options: t,
                        toggleBtn: function (t, e) {
                            t.toggleClass("disabled", !e),
                                t.attr("disabled", !e);
                        },
                        toggleBtnActive: function (t, e) {
                            t.toggleClass("active", e);
                        },
                        check: function (t, e) {
                            t.find(".checked").removeClass("checked"),
                                t
                                    .find('[data-value="' + e + '"]')
                                    .addClass("checked");
                        },
                        onDialogShown: function (t, e) {
                            t.one("note.modal.show", e);
                        },
                        onDialogHidden: function (t, e) {
                            t.one("note.modal.hide", e);
                        },
                        showDialog: function (t) {
                            t.data("modal").show();
                        },
                        hideDialog: function (t) {
                            t.data("modal").hide();
                        },
                        getPopoverContent: function (t) {
                            return t.find(".note-popover-content");
                        },
                        getDialogBody: function (t) {
                            return t.find(".note-modal-body");
                        },
                        createLayout: function (e) {
                            var o = (
                                t.airMode
                                    ? dn([sn([ln(), fn()])])
                                    : "bottom" === t.toolbarPosition
                                    ? rn([sn([ln(), cn()]), an(), un()])
                                    : rn([an(), sn([ln(), cn()]), un()])
                            ).render();
                            return (
                                o.insertAfter(e),
                                {
                                    note: e,
                                    editor: o,
                                    toolbar: o.find(".note-toolbar"),
                                    editingArea: o.find(".note-editing-area"),
                                    editable: o.find(".note-editable"),
                                    codable: o.find(".note-codable"),
                                    statusbar: o.find(".note-statusbar"),
                                }
                            );
                        },
                        removeLayout: function (t, e) {
                            t.html(e.editable.html()),
                                e.editor.remove(),
                                t.off("summernote"),
                                t.show();
                        },
                    };
                },
                interface: "lite",
            })),
            {}
        );
    })()
);
