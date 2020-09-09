!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        i,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return i;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 13));
})([
    function (e, t, n) {
        "use strict";
        var i = n(7),
            o = n(36),
            r = Object.prototype.toString;
        function s(e) {
            return "[object Array]" === r.call(e);
        }
        function a(e) {
            return null !== e && "object" == typeof e;
        }
        function l(e) {
            return "[object Function]" === r.call(e);
        }
        function c(e, t) {
            if (null != e)
                if (("object" != typeof e && (e = [e]), s(e))) for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
                else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
        }
        e.exports = {
            isArray: s,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === r.call(e);
            },
            isBuffer: o,
            isFormData: function (e) {
                return "undefined" != typeof FormData && e instanceof FormData;
            },
            isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
            },
            isString: function (e) {
                return "string" == typeof e;
            },
            isNumber: function (e) {
                return "number" == typeof e;
            },
            isObject: a,
            isUndefined: function (e) {
                return void 0 === e;
            },
            isDate: function (e) {
                return "[object Date]" === r.call(e);
            },
            isFile: function (e) {
                return "[object File]" === r.call(e);
            },
            isBlob: function (e) {
                return "[object Blob]" === r.call(e);
            },
            isFunction: l,
            isStream: function (e) {
                return a(e) && l(e.pipe);
            },
            isURLSearchParams: function (e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
            },
            forEach: c,
            merge: function e() {
                var t = {};
                function n(n, i) {
                    "object" == typeof t[i] && "object" == typeof n ? (t[i] = e(t[i], n)) : (t[i] = n);
                }
                for (var i = 0, o = arguments.length; i < o; i++) c(arguments[i], n);
                return t;
            },
            extend: function (e, t, n) {
                return (
                    c(t, function (t, o) {
                        e[o] = n && "function" == typeof t ? i(t, n) : t;
                    }),
                    e
                );
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
        };
    },
    function (e, t, n) {
        var i;
        !(function (t, n) {
            "use strict";
            "object" == typeof e.exports
                ? (e.exports = t.document
                      ? n(t, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return n(e);
                        })
                : n(t);
        })("undefined" != typeof window ? window : this, function (n, o) {
            "use strict";
            var r = [],
                s = n.document,
                a = Object.getPrototypeOf,
                l = r.slice,
                c = r.concat,
                d = r.push,
                u = r.indexOf,
                p = {},
                h = p.toString,
                f = p.hasOwnProperty,
                g = f.toString,
                m = g.call(Object),
                v = {},
                y = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                },
                w = function (e) {
                    return null != e && e === e.window;
                },
                b = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function x(e, t, n) {
                var i,
                    o,
                    r = (n = n || s).createElement("script");
                if (((r.text = e), t)) for (i in b) (o = t[i] || (t.getAttribute && t.getAttribute(i))) && r.setAttribute(i, o);
                n.head.appendChild(r).parentNode.removeChild(r);
            }
            function k(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[h.call(e)] || "object" : typeof e;
            }
            var S = function (e, t) {
                    return new S.fn.init(e, t);
                },
                C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function T(e) {
                var t = !!e && "length" in e && e.length,
                    n = k(e);
                return !y(e) && !w(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
            }
            (S.fn = S.prototype = {
                jquery: "3.4.1",
                constructor: S,
                length: 0,
                toArray: function () {
                    return l.call(this);
                },
                get: function (e) {
                    return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = S.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return S.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        S.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(l.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: d,
                sort: r.sort,
                splice: r.splice,
            }),
                (S.extend = S.fn.extend = function () {
                    var e,
                        t,
                        n,
                        i,
                        o,
                        r,
                        s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || y(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                (i = e[t]),
                                    "__proto__" !== t &&
                                        s !== i &&
                                        (c && i && (S.isPlainObject(i) || (o = Array.isArray(i)))
                                            ? ((n = s[t]), (r = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}), (o = !1), (s[t] = S.extend(c, r, i)))
                                            : void 0 !== i && (s[t] = i));
                    return s;
                }),
                S.extend({
                    expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && g.call(n) === m));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t) {
                        x(e, { nonce: t && t.nonce });
                    },
                    each: function (e, t) {
                        var n,
                            i = 0;
                        if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                        return e;
                    },
                    trim: function (e) {
                        return null == e ? "" : (e + "").replace(C, "");
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (T(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : u.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                        return (e.length = o), e;
                    },
                    grep: function (e, t, n) {
                        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                        return i;
                    },
                    map: function (e, t, n) {
                        var i,
                            o,
                            r = 0,
                            s = [];
                        if (T(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                        else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                        return c.apply([], s);
                    },
                    guid: 1,
                    support: v,
                }),
                "function" == typeof Symbol && (S.fn[Symbol.iterator] = r[Symbol.iterator]),
                S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    p["[object " + t + "]"] = t.toLowerCase();
                });
            var E = (function (e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    d,
                    u,
                    p,
                    h,
                    f,
                    g,
                    m,
                    v,
                    y,
                    w,
                    b = "sizzle" + 1 * new Date(),
                    x = e.document,
                    k = 0,
                    S = 0,
                    C = le(),
                    T = le(),
                    E = le(),
                    _ = le(),
                    L = function (e, t) {
                        return e === t && (u = !0), 0;
                    },
                    A = {}.hasOwnProperty,
                    $ = [],
                    N = $.pop,
                    M = $.push,
                    P = $.push,
                    q = $.slice,
                    D = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    z = "[\\x20\\t\\r\\n\\f]",
                    j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    H = "\\[" + z + "*(" + j + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + z + "*\\]",
                    I = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    U = new RegExp(z + "+", "g"),
                    R = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                    F = new RegExp("^" + z + "*," + z + "*"),
                    B = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                    W = new RegExp(z + "|>"),
                    V = new RegExp(I),
                    X = new RegExp("^" + j + "$"),
                    Y = {
                        ID: new RegExp("^#(" + j + ")"),
                        CLASS: new RegExp("^\\.(" + j + ")"),
                        TAG: new RegExp("^(" + j + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + I),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + O + ")$", "i"),
                        needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    G = /HTML$/i,
                    J = /^(?:input|select|textarea|button)$/i,
                    Z = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
                    ne = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                    },
                    ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function (e, t) {
                        return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                    },
                    re = function () {
                        p();
                    },
                    se = be(
                        function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    P.apply(($ = q.call(x.childNodes)), x.childNodes), $[x.childNodes.length].nodeType;
                } catch (e) {
                    P = {
                        apply: $.length
                            ? function (e, t) {
                                  M.apply(e, q.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                function ae(e, t, i, o) {
                    var r,
                        a,
                        c,
                        d,
                        u,
                        f,
                        v,
                        y = t && t.ownerDocument,
                        k = t ? t.nodeType : 9;
                    if (((i = i || []), "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))) return i;
                    if (!o && ((t ? t.ownerDocument || t : x) !== h && p(t), (t = t || h), g)) {
                        if (11 !== k && (u = Q.exec(e)))
                            if ((r = u[1])) {
                                if (9 === k) {
                                    if (!(c = t.getElementById(r))) return i;
                                    if (c.id === r) return i.push(c), i;
                                } else if (y && (c = y.getElementById(r)) && w(t, c) && c.id === r) return i.push(c), i;
                            } else {
                                if (u[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                                if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(r)), i;
                            }
                        if (n.qsa && !_[e + " "] && (!m || !m.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                            if (((v = e), (y = t), 1 === k && W.test(e))) {
                                for ((d = t.getAttribute("id")) ? (d = d.replace(ie, oe)) : t.setAttribute("id", (d = b)), a = (f = s(e)).length; a--; ) f[a] = "#" + d + " " + we(f[a]);
                                (v = f.join(",")), (y = (ee.test(e) && ve(t.parentNode)) || t);
                            }
                            try {
                                return P.apply(i, y.querySelectorAll(v)), i;
                            } catch (t) {
                                _(e, !0);
                            } finally {
                                d === b && t.removeAttribute("id");
                            }
                        }
                    }
                    return l(e.replace(R, "$1"), t, i, o);
                }
                function le() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = o);
                    };
                }
                function ce(e) {
                    return (e[b] = !0), e;
                }
                function de(e) {
                    var t = h.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                }
                function ue(e, t) {
                    for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
                }
                function pe(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function he(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function fe(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function ge(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function me(e) {
                    return ce(function (t) {
                        return (
                            (t = +t),
                            ce(function (n, i) {
                                for (var o, r = e([], n.length, t), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                            })
                        );
                    });
                }
                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                for (t in ((n = ae.support = {}),
                (r = ae.isXML = function (e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !G.test(t || (n && n.nodeName) || "HTML");
                }),
                (p = ae.setDocument = function (e) {
                    var t,
                        o,
                        s = e ? e.ownerDocument || e : x;
                    return s !== h && 9 === s.nodeType && s.documentElement
                        ? ((f = (h = s).documentElement),
                          (g = !r(h)),
                          x !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)),
                          (n.attributes = de(function (e) {
                              return (e.className = "i"), !e.getAttribute("className");
                          })),
                          (n.getElementsByTagName = de(function (e) {
                              return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                          })),
                          (n.getElementsByClassName = K.test(h.getElementsByClassName)),
                          (n.getById = de(function (e) {
                              return (f.appendChild(e).id = b), !h.getElementsByName || !h.getElementsByName(b).length;
                          })),
                          n.getById
                              ? ((i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (i.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                }))
                              : ((i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                }),
                                (i.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n,
                                            i,
                                            o,
                                            r = t.getElementById(e);
                                        if (r) {
                                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                            for (o = t.getElementsByName(e), i = 0; (r = o[i++]); ) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                        }
                                        return [];
                                    }
                                })),
                          (i.find.TAG = n.getElementsByTagName
                              ? function (e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                }
                              : function (e, t) {
                                    var n,
                                        i = [],
                                        o = 0,
                                        r = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                                        return i;
                                    }
                                    return r;
                                }),
                          (i.find.CLASS =
                              n.getElementsByClassName &&
                              function (e, t) {
                                  if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                              }),
                          (v = []),
                          (m = []),
                          (n.qsa = K.test(h.querySelectorAll)) &&
                              (de(function (e) {
                                  (f.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + z + "*(?:''|\"\")"),
                                      e.querySelectorAll("[selected]").length || m.push("\\[" + z + "*(?:value|" + O + ")"),
                                      e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                                      e.querySelectorAll(":checked").length || m.push(":checked"),
                                      e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
                              }),
                              de(function (e) {
                                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var t = h.createElement("input");
                                  t.setAttribute("type", "hidden"),
                                      e.appendChild(t).setAttribute("name", "D"),
                                      e.querySelectorAll("[name=d]").length && m.push("name" + z + "*[*^$|!~]?="),
                                      2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                      (f.appendChild(e).disabled = !0),
                                      2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                      e.querySelectorAll("*,:x"),
                                      m.push(",.*:");
                              })),
                          (n.matchesSelector = K.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                              de(function (e) {
                                  (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", I);
                              }),
                          (m = m.length && new RegExp(m.join("|"))),
                          (v = v.length && new RegExp(v.join("|"))),
                          (t = K.test(f.compareDocumentPosition)),
                          (w =
                              t || K.test(f.contains)
                                  ? function (e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                            i = t && t.parentNode;
                                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                    }
                                  : function (e, t) {
                                        if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                        return !1;
                                    }),
                          (L = t
                              ? function (e, t) {
                                    if (e === t) return (u = !0), 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        i ||
                                        (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                            ? e === h || (e.ownerDocument === x && w(x, e))
                                                ? -1
                                                : t === h || (t.ownerDocument === x && w(x, t))
                                                ? 1
                                                : d
                                                ? D(d, e) - D(d, t)
                                                : 0
                                            : 4 & i
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (e, t) {
                                    if (e === t) return (u = !0), 0;
                                    var n,
                                        i = 0,
                                        o = e.parentNode,
                                        r = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!o || !r) return e === h ? -1 : t === h ? 1 : o ? -1 : r ? 1 : d ? D(d, e) - D(d, t) : 0;
                                    if (o === r) return pe(e, t);
                                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                                    for (; s[i] === a[i]; ) i++;
                                    return i ? pe(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0;
                                }),
                          h)
                        : h;
                }),
                (ae.matches = function (e, t) {
                    return ae(e, null, null, t);
                }),
                (ae.matchesSelector = function (e, t) {
                    if (((e.ownerDocument || e) !== h && p(e), n.matchesSelector && g && !_[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                        try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                        } catch (e) {
                            _(t, !0);
                        }
                    return ae(t, h, null, [e]).length > 0;
                }),
                (ae.contains = function (e, t) {
                    return (e.ownerDocument || e) !== h && p(e), w(e, t);
                }),
                (ae.attr = function (e, t) {
                    (e.ownerDocument || e) !== h && p(e);
                    var o = i.attrHandle[t.toLowerCase()],
                        r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
                (ae.escape = function (e) {
                    return (e + "").replace(ie, oe);
                }),
                (ae.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (ae.uniqueSort = function (e) {
                    var t,
                        i = [],
                        o = 0,
                        r = 0;
                    if (((u = !n.detectDuplicates), (d = !n.sortStable && e.slice(0)), e.sort(L), u)) {
                        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
                        for (; o--; ) e.splice(i[o], 1);
                    }
                    return (d = null), e;
                }),
                (o = ae.getText = function (e) {
                    var t,
                        n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += o(t);
                    return n;
                }),
                ((i = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: Y,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return Y.CHILD.test(e[0])
                                ? null
                                : (e[3] ? (e[2] = e[4] || e[5] || "") : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return e.nodeName && e.nodeName.toLowerCase() === t;
                                  };
                        },
                        CLASS: function (e) {
                            var t = C[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) &&
                                    C(e, function (e) {
                                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (i) {
                                var o = ae.attr(i, e);
                                return null == o
                                    ? "!=" === t
                                    : !t ||
                                          ((o += ""),
                                          "=" === t
                                              ? o === n
                                              : "!=" === t
                                              ? o !== n
                                              : "^=" === t
                                              ? n && 0 === o.indexOf(n)
                                              : "*=" === t
                                              ? n && o.indexOf(n) > -1
                                              : "$=" === t
                                              ? n && o.slice(-n.length) === n
                                              : "~=" === t
                                              ? (" " + o.replace(U, " ") + " ").indexOf(n) > -1
                                              : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === o
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (t, n, l) {
                                      var c,
                                          d,
                                          u,
                                          p,
                                          h,
                                          f,
                                          g = r !== s ? "nextSibling" : "previousSibling",
                                          m = t.parentNode,
                                          v = a && t.nodeName.toLowerCase(),
                                          y = !l && !a,
                                          w = !1;
                                      if (m) {
                                          if (r) {
                                              for (; g; ) {
                                                  for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                  f = g = "only" === e && !f && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((f = [s ? m.firstChild : m.lastChild]), s && y)) {
                                              for (
                                                  w = (h = (c = (d = (u = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], p = h && m.childNodes[h];
                                                  (p = (++h && p && p[g]) || (w = h = 0) || f.pop());

                                              )
                                                  if (1 === p.nodeType && ++w && p === t) {
                                                      d[e] = [k, h, w];
                                                      break;
                                                  }
                                          } else if ((y && (w = h = (c = (d = (u = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === w))
                                              for (
                                                  ;
                                                  (p = (++h && p && p[g]) || (w = h = 0) || f.pop()) &&
                                                  ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && ((d = (u = p[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [k, w]), p !== t));

                                              );
                                          return (w -= o) === i || (w % i == 0 && w / i >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return o[b]
                                ? o(t)
                                : o.length > 1
                                ? ((n = [e, e, "", t]),
                                  i.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? ce(function (e, n) {
                                            for (var i, r = o(e, t), s = r.length; s--; ) e[(i = D(e, r[s]))] = !(n[i] = r[s]);
                                        })
                                      : function (e) {
                                            return o(e, 0, n);
                                        })
                                : o;
                        },
                    },
                    pseudos: {
                        not: ce(function (e) {
                            var t = [],
                                n = [],
                                i = a(e.replace(R, "$1"));
                            return i[b]
                                ? ce(function (e, t, n, o) {
                                      for (var r, s = i(e, null, o, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
                                  })
                                : function (e, o, r) {
                                      return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
                                  };
                        }),
                        has: ce(function (e) {
                            return function (t) {
                                return ae(e, t).length > 0;
                            };
                        }),
                        contains: ce(function (e) {
                            return (
                                (e = e.replace(te, ne)),
                                function (t) {
                                    return (t.textContent || o(t)).indexOf(e) > -1;
                                }
                            );
                        }),
                        lang: ce(function (e) {
                            return (
                                X.test(e || "") || ae.error("unsupported lang: " + e),
                                (e = e.replace(te, ne).toLowerCase()),
                                function (t) {
                                    var n;
                                    do {
                                        if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === f;
                        },
                        focus: function (e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !i.pseudos.empty(e);
                        },
                        header: function (e) {
                            return Z.test(e.nodeName);
                        },
                        input: function (e) {
                            return J.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: me(function () {
                            return [0];
                        }),
                        last: me(function (e, t) {
                            return [t - 1];
                        }),
                        eq: me(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: me(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: me(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: me(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                            return e;
                        }),
                        gt: me(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = i.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    i.pseudos[t] = he(t);
                for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
                function ye() {}
                function we(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i;
                }
                function be(e, t, n) {
                    var i = t.dir,
                        o = t.next,
                        r = o || i,
                        s = n && "parentNode" === r,
                        a = S++;
                    return t.first
                        ? function (t, n, o) {
                              for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
                              return !1;
                          }
                        : function (t, n, l) {
                              var c,
                                  d,
                                  u,
                                  p = [k, a];
                              if (l) {
                                  for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                              } else
                                  for (; (t = t[i]); )
                                      if (1 === t.nodeType || s)
                                          if (((d = (u = t[b] || (t[b] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[i] || t;
                                          else {
                                              if ((c = d[r]) && c[0] === k && c[1] === a) return (p[2] = c[2]);
                                              if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                                          }
                              return !1;
                          };
                }
                function xe(e) {
                    return e.length > 1
                        ? function (t, n, i) {
                              for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function ke(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
                    return s;
                }
                function Se(e, t, n, i, o, r) {
                    return (
                        i && !i[b] && (i = Se(i)),
                        o && !o[b] && (o = Se(o, r)),
                        ce(function (r, s, a, l) {
                            var c,
                                d,
                                u,
                                p = [],
                                h = [],
                                f = s.length,
                                g =
                                    r ||
                                    (function (e, t, n) {
                                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                        return n;
                                    })(t || "*", a.nodeType ? [a] : a, []),
                                m = !e || (!r && t) ? g : ke(g, p, e, a, l),
                                v = n ? (o || (r ? e : f || i) ? [] : s) : m;
                            if ((n && n(m, v, a, l), i)) for (c = ke(v, h), i(c, [], a, l), d = c.length; d--; ) (u = c[d]) && (v[h[d]] = !(m[h[d]] = u));
                            if (r) {
                                if (o || e) {
                                    if (o) {
                                        for (c = [], d = v.length; d--; ) (u = v[d]) && c.push((m[d] = u));
                                        o(null, (v = []), c, l);
                                    }
                                    for (d = v.length; d--; ) (u = v[d]) && (c = o ? D(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u));
                                }
                            } else (v = ke(v === s ? v.splice(f, v.length) : v)), o ? o(null, s, v, l) : P.apply(s, v);
                        })
                    );
                }
                function Ce(e) {
                    for (
                        var t,
                            n,
                            o,
                            r = e.length,
                            s = i.relative[e[0].type],
                            a = s || i.relative[" "],
                            l = s ? 1 : 0,
                            d = be(
                                function (e) {
                                    return e === t;
                                },
                                a,
                                !0
                            ),
                            u = be(
                                function (e) {
                                    return D(t, e) > -1;
                                },
                                a,
                                !0
                            ),
                            p = [
                                function (e, n, i) {
                                    var o = (!s && (i || n !== c)) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                                    return (t = null), o;
                                },
                            ];
                        l < r;
                        l++
                    )
                        if ((n = i.relative[e[l].type])) p = [be(xe(p), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                                return Se(l > 1 && xe(p), l > 1 && we(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(R, "$1"), n, l < o && Ce(e.slice(l, o)), o < r && Ce((e = e.slice(o))), o < r && we(e));
                            }
                            p.push(n);
                        }
                    return xe(p);
                }
                return (
                    (ye.prototype = i.filters = i.pseudos),
                    (i.setFilters = new ye()),
                    (s = ae.tokenize = function (e, t) {
                        var n,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            d = T[e + " "];
                        if (d) return t ? 0 : d.slice(0);
                        for (a = e, l = [], c = i.preFilter; a; ) {
                            for (s in ((n && !(o = F.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                            (n = !1),
                            (o = B.exec(a)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(R, " ") }), (a = a.slice(n.length))),
                            i.filter))
                                !(o = Y[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? a.length : a ? ae.error(e) : T(e, l).slice(0);
                    }),
                    (a = ae.compile = function (e, t) {
                        var n,
                            o = [],
                            r = [],
                            a = E[e + " "];
                        if (!a) {
                            for (t || (t = s(e)), n = t.length; n--; ) (a = Ce(t[n]))[b] ? o.push(a) : r.push(a);
                            (a = E(
                                e,
                                (function (e, t) {
                                    var n = t.length > 0,
                                        o = e.length > 0,
                                        r = function (r, s, a, l, d) {
                                            var u,
                                                f,
                                                m,
                                                v = 0,
                                                y = "0",
                                                w = r && [],
                                                b = [],
                                                x = c,
                                                S = r || (o && i.find.TAG("*", d)),
                                                C = (k += null == x ? 1 : Math.random() || 0.1),
                                                T = S.length;
                                            for (d && (c = s === h || s || d); y !== T && null != (u = S[y]); y++) {
                                                if (o && u) {
                                                    for (f = 0, s || u.ownerDocument === h || (p(u), (a = !g)); (m = e[f++]); )
                                                        if (m(u, s || h, a)) {
                                                            l.push(u);
                                                            break;
                                                        }
                                                    d && (k = C);
                                                }
                                                n && ((u = !m && u) && v--, r && w.push(u));
                                            }
                                            if (((v += y), n && y !== v)) {
                                                for (f = 0; (m = t[f++]); ) m(w, b, s, a);
                                                if (r) {
                                                    if (v > 0) for (; y--; ) w[y] || b[y] || (b[y] = N.call(l));
                                                    b = ke(b);
                                                }
                                                P.apply(l, b), d && !r && b.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                                            }
                                            return d && ((k = C), (c = x)), w;
                                        };
                                    return n ? ce(r) : r;
                                })(r, o)
                            )).selector = e;
                        }
                        return a;
                    }),
                    (l = ae.select = function (e, t, n, o) {
                        var r,
                            l,
                            c,
                            d,
                            u,
                            p = "function" == typeof e && e,
                            h = !o && s((e = p.selector || e));
                        if (((n = n || []), 1 === h.length)) {
                            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                            }
                            for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && ((c = l[r]), !i.relative[(d = c.type)]); )
                                if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                                    if ((l.splice(r, 1), !(e = o.length && we(l)))) return P.apply(n, o), n;
                                    break;
                                }
                        }
                        return (p || a(e, h))(o, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                    }),
                    (n.sortStable = b.split("").sort(L).join("") === b),
                    (n.detectDuplicates = !!u),
                    p(),
                    (n.sortDetached = de(function (e) {
                        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
                    })),
                    de(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        ue("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (n.attributes &&
                        de(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        ue("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    de(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        ue(O, function (e, t, n) {
                            var i;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                        }),
                    ae
                );
            })(n);
            (S.find = E), (S.expr = E.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = E.uniqueSort), (S.text = E.getText), (S.isXMLDoc = E.isXML), (S.contains = E.contains), (S.escapeSelector = E.escape);
            var _ = function (e, t, n) {
                    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (o && S(e).is(n)) break;
                            i.push(e);
                        }
                    return i;
                },
                L = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                A = S.expr.match.needsContext;
            function $(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function M(e, t, n) {
                return y(t)
                    ? S.grep(e, function (e, i) {
                          return !!t.call(e, i, e) !== n;
                      })
                    : t.nodeType
                    ? S.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? S.grep(e, function (e) {
                          return u.call(t, e) > -1 !== n;
                      })
                    : S.filter(t, e, n);
            }
            (S.filter = function (e, t, n) {
                var i = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType
                        ? S.find.matchesSelector(i, e)
                            ? [i]
                            : []
                        : S.find.matches(
                              e,
                              S.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                S.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            i = this.length,
                            o = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                S(e).filter(function () {
                                    for (t = 0; t < i; t++) if (S.contains(o[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, o[t], n);
                        return i > 1 ? S.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(M(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(M(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!M(this, "string" == typeof e && A.test(e) ? S(e) : e || [], !1).length;
                    },
                });
            var P,
                q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((S.fn.init = function (e, t, n) {
                var i, o;
                if (!e) return this;
                if (((n = n || P), "string" == typeof e)) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), N.test(i[1]) && S.isPlainObject(t)))
                            for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    return (o = s.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : y(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
            }).prototype = S.fn),
                (P = S(s));
            var D = /^(?:parents|prev(?:Until|All))/,
                O = { children: !0, contents: !0, next: !0, prev: !0 };
            function z(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            S.fn.extend({
                has: function (e) {
                    var t = S(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        i = 0,
                        o = this.length,
                        r = [],
                        s = "string" != typeof e && S(e);
                    if (!A.test(e))
                        for (; i < o; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                    r.push(n);
                                    break;
                                }
                    return this.pushStack(r.length > 1 ? S.uniqueSort(r) : r);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? u.call(S(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                S.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return _(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return _(e, "parentNode", n);
                        },
                        next: function (e) {
                            return z(e, "nextSibling");
                        },
                        prev: function (e) {
                            return z(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return _(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return _(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return _(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return _(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return L((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return L(e.firstChild);
                        },
                        contents: function (e) {
                            return void 0 !== e.contentDocument ? e.contentDocument : ($(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        S.fn[e] = function (n, i) {
                            var o = S.map(this, t, n);
                            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = S.filter(i, o)), this.length > 1 && (O[e] || S.uniqueSort(o), D.test(e) && o.reverse()), this.pushStack(o);
                        };
                    }
                );
            var j = /[^\x20\t\r\n\f]+/g;
            function H(e) {
                return e;
            }
            function I(e) {
                throw e;
            }
            function U(e, t, n, i) {
                var o;
                try {
                    e && y((o = e.promise)) ? o.call(e).done(t).fail(n) : e && y((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            (S.Callbacks = function (e) {
                e =
                    "string" == typeof e
                        ? (function (e) {
                              var t = {};
                              return (
                                  S.each(e.match(j) || [], function (e, n) {
                                      t[n] = !0;
                                  }),
                                  t
                              );
                          })(e)
                        : S.extend({}, e);
                var t,
                    n,
                    i,
                    o,
                    r = [],
                    s = [],
                    a = -1,
                    l = function () {
                        for (o = o || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length; ) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = r.length), (n = !1));
                        e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                r &&
                                    (n && !t && ((a = r.length - 1), s.push(n)),
                                    (function t(n) {
                                        S.each(n, function (n, i) {
                                            y(i) ? (e.unique && c.has(i)) || r.push(i) : i && i.length && "string" !== k(i) && t(i);
                                        });
                                    })(arguments),
                                    n && !t && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                S.each(arguments, function (e, t) {
                                    for (var n; (n = S.inArray(t, r, n)) > -1; ) r.splice(n, 1), n <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? S.inArray(e, r) > -1 : r.length > 0;
                        },
                        empty: function () {
                            return r && (r = []), this;
                        },
                        disable: function () {
                            return (o = s = []), (r = n = ""), this;
                        },
                        disabled: function () {
                            return !r;
                        },
                        lock: function () {
                            return (o = s = []), n || t || (r = n = ""), this;
                        },
                        locked: function () {
                            return !!o;
                        },
                        fireWith: function (e, n) {
                            return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!i;
                        },
                    };
                return c;
            }),
                S.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                                ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                            ],
                            i = "pending",
                            o = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return r.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return o.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return S.Deferred(function (n) {
                                        S.each(t, function (t, i) {
                                            var o = y(e[i[4]]) && e[i[4]];
                                            r[i[1]](function () {
                                                var e = o && o.apply(this, arguments);
                                                e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    }).promise();
                                },
                                then: function (e, i, o) {
                                    var r = 0;
                                    function s(e, t, i, o) {
                                        return function () {
                                            var a = this,
                                                l = arguments,
                                                c = function () {
                                                    var n, c;
                                                    if (!(e < r)) {
                                                        if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        (c = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            y(c)
                                                                ? o
                                                                    ? c.call(n, s(r, t, H, o), s(r, t, I, o))
                                                                    : (r++, c.call(n, s(r, t, H, o), s(r, t, I, o), s(r, t, H, t.notifyWith)))
                                                                : (i !== H && ((a = void 0), (l = [n])), (o || t.resolveWith)(a, l));
                                                    }
                                                },
                                                d = o
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= r && (i !== I && ((a = void 0), (l = [n])), t.rejectWith(a, l));
                                                          }
                                                      };
                                            e ? d() : (S.Deferred.getStackHook && (d.stackTrace = S.Deferred.getStackHook()), n.setTimeout(d));
                                        };
                                    }
                                    return S.Deferred(function (n) {
                                        t[0][3].add(s(0, n, y(o) ? o : H, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : H)), t[2][3].add(s(0, n, y(i) ? i : I));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? S.extend(e, o) : o;
                                },
                            },
                            r = {};
                        return (
                            S.each(t, function (e, n) {
                                var s = n[2],
                                    a = n[5];
                                (o[n[1]] = s.add),
                                    a &&
                                        s.add(
                                            function () {
                                                i = a;
                                            },
                                            t[3 - e][2].disable,
                                            t[3 - e][3].disable,
                                            t[0][2].lock,
                                            t[0][3].lock
                                        ),
                                    s.add(n[3].fire),
                                    (r[n[0]] = function () {
                                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
                                    }),
                                    (r[n[0] + "With"] = s.fireWith);
                            }),
                            o.promise(r),
                            e && e.call(r, r),
                            r
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            i = Array(n),
                            o = l.call(arguments),
                            r = S.Deferred(),
                            s = function (e) {
                                return function (n) {
                                    (i[e] = this), (o[e] = arguments.length > 1 ? l.call(arguments) : n), --t || r.resolveWith(i, o);
                                };
                            };
                        if (t <= 1 && (U(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || y(o[n] && o[n].then))) return r.then();
                        for (; n--; ) U(o[n], s(n), r.reject);
                        return r.promise();
                    },
                });
            var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (S.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && R.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (S.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
            var F = S.Deferred();
            function B() {
                s.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), S.ready();
            }
            (S.fn.ready = function (e) {
                return (
                    F.then(e).catch(function (e) {
                        S.readyException(e);
                    }),
                    this
                );
            }),
                S.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0), (!0 !== e && --S.readyWait > 0) || F.resolveWith(s, [S]));
                    },
                }),
                (S.ready.then = F.then),
                "complete" === s.readyState || ("loading" !== s.readyState && !s.documentElement.doScroll) ? n.setTimeout(S.ready) : (s.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
            var W = function (e, t, n, i, o, r, s) {
                    var a = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === k(n)) for (a in ((o = !0), n)) W(e, t, a, n[a], !0, r, s);
                    else if (
                        void 0 !== i &&
                        ((o = !0),
                        y(i) || (s = !0),
                        c &&
                            (s
                                ? (t.call(e, i), (t = null))
                                : ((c = t),
                                  (t = function (e, t, n) {
                                      return c.call(S(e), n);
                                  }))),
                        t)
                    )
                        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
                },
                V = /^-ms-/,
                X = /-([a-z])/g;
            function Y(e, t) {
                return t.toUpperCase();
            }
            function G(e) {
                return e.replace(V, "ms-").replace(X, Y);
            }
            var J = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Z() {
                this.expando = S.expando + Z.uid++;
            }
            (Z.uid = 1),
                (Z.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), J(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var i,
                            o = this.cache(e);
                        if ("string" == typeof t) o[G(t)] = n;
                        else for (i in t) o[G(i)] = t[i];
                        return o;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(j) || []).length;
                                for (; n--; ) delete i[t[n]];
                            }
                            (void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !S.isEmptyObject(t);
                    },
                });
            var K = new Z(),
                Q = new Z(),
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;
            function ne(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (((i = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                        try {
                            n = (function (e) {
                                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                            })(n);
                        } catch (e) {}
                        Q.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            S.extend({
                hasData: function (e) {
                    return Q.hasData(e) || K.hasData(e);
                },
                data: function (e, t, n) {
                    return Q.access(e, t, n);
                },
                removeData: function (e, t) {
                    Q.remove(e, t);
                },
                _data: function (e, t, n) {
                    return K.access(e, t, n);
                },
                _removeData: function (e, t) {
                    K.remove(e, t);
                },
            }),
                S.fn.extend({
                    data: function (e, t) {
                        var n,
                            i,
                            o,
                            r = this[0],
                            s = r && r.attributes;
                        if (void 0 === e) {
                            if (this.length && ((o = Q.get(r)), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                                for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = G(i.slice(5))), ne(r, i, o[i]));
                                K.set(r, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof e
                            ? this.each(function () {
                                  Q.set(this, e);
                              })
                            : W(
                                  this,
                                  function (t) {
                                      var n;
                                      if (r && void 0 === t) return void 0 !== (n = Q.get(r, e)) ? n : void 0 !== (n = ne(r, e)) ? n : void 0;
                                      this.each(function () {
                                          Q.set(this, e, t);
                                      });
                                  },
                                  null,
                                  t,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            Q.remove(this, e);
                        });
                    },
                }),
                S.extend({
                    queue: function (e, t, n) {
                        var i;
                        if (e) return (t = (t || "fx") + "queue"), (i = K.get(e, t)), n && (!i || Array.isArray(n) ? (i = K.access(e, t, S.makeArray(n))) : i.push(n)), i || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = S.queue(e, t),
                            i = n.length,
                            o = n.shift(),
                            r = S._queueHooks(e, t);
                        "inprogress" === o && ((o = n.shift()), i--),
                            o &&
                                ("fx" === t && n.unshift("inprogress"),
                                delete r.stop,
                                o.call(
                                    e,
                                    function () {
                                        S.dequeue(e, t);
                                    },
                                    r
                                )),
                            !i && r && r.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            K.get(e, n) ||
                            K.access(e, n, {
                                empty: S.Callbacks("once memory").add(function () {
                                    K.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                S.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? S.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = S.queue(this, e, t);
                                      S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            S.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            i = 1,
                            o = S.Deferred(),
                            r = this,
                            s = this.length,
                            a = function () {
                                --i || o.resolveWith(r, [r]);
                            };
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = K.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), o.promise(t);
                    },
                });
            var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                re = ["Top", "Right", "Bottom", "Left"],
                se = s.documentElement,
                ae = function (e) {
                    return S.contains(e.ownerDocument, e);
                },
                le = { composed: !0 };
            se.getRootNode &&
                (ae = function (e) {
                    return S.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
                });
            var ce = function (e, t) {
                    return "none" === (e = t || e).style.display || ("" === e.style.display && ae(e) && "none" === S.css(e, "display"));
                },
                de = function (e, t, n, i) {
                    var o,
                        r,
                        s = {};
                    for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
                    for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
                    return o;
                };
            function ue(e, t, n, i) {
                var o,
                    r,
                    s = 20,
                    a = i
                        ? function () {
                              return i.cur();
                          }
                        : function () {
                              return S.css(e, t, "");
                          },
                    l = a(),
                    c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
                    d = e.nodeType && (S.cssNumber[t] || ("px" !== c && +l)) && oe.exec(S.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2, c = c || d[3], d = +l || 1; s--; ) S.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (d /= r);
                    (d *= 2), S.style(e, t, d + c), (n = n || []);
                }
                return n && ((d = +d || +l || 0), (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = d), (i.end = o))), o;
            }
            var pe = {};
            function he(e) {
                var t,
                    n = e.ownerDocument,
                    i = e.nodeName,
                    o = pe[i];
                return o || ((t = n.body.appendChild(n.createElement(i))), (o = S.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (pe[i] = o), o);
            }
            function fe(e, t) {
                for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
                    (i = e[r]).style &&
                        ((n = i.style.display),
                        t ? ("none" === n && ((o[r] = K.get(i, "display") || null), o[r] || (i.style.display = "")), "" === i.style.display && ce(i) && (o[r] = he(i))) : "none" !== n && ((o[r] = "none"), K.set(i, "display", n)));
                for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
                return e;
            }
            S.fn.extend({
                show: function () {
                    return fe(this, !0);
                },
                hide: function () {
                    return fe(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ce(this) ? S(this).show() : S(this).hide();
                          });
                },
            });
            var ge = /^(?:checkbox|radio)$/i,
                me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i,
                ye = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function we(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && $(e, t)) ? S.merge([e], n) : n;
            }
            function be(e, t) {
                for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
            }
            (ye.optgroup = ye.option), (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead), (ye.th = ye.td);
            var xe,
                ke,
                Se = /<|&#?\w+;/;
            function Ce(e, t, n, i, o) {
                for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                    if ((r = e[h]) || 0 === r)
                        if ("object" === k(r)) S.merge(p, r.nodeType ? [r] : r);
                        else if (Se.test(r)) {
                            for (s = s || u.appendChild(t.createElement("div")), a = (me.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], d = l[0]; d--; ) s = s.lastChild;
                            S.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
                        } else p.push(t.createTextNode(r));
                for (u.textContent = "", h = 0; (r = p[h++]); )
                    if (i && S.inArray(r, i) > -1) o && o.push(r);
                    else if (((c = ae(r)), (s = we(u.appendChild(r), "script")), c && be(s), n)) for (d = 0; (r = s[d++]); ) ve.test(r.type || "") && n.push(r);
                return u;
            }
            (xe = s.createDocumentFragment().appendChild(s.createElement("div"))),
                (ke = s.createElement("input")).setAttribute("type", "radio"),
                ke.setAttribute("checked", "checked"),
                ke.setAttribute("name", "t"),
                xe.appendChild(ke),
                (v.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (xe.innerHTML = "<textarea>x</textarea>"),
                (v.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue);
            var Te = /^key/,
                Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                _e = /^([^.]*)(?:\.(.+)|)/;
            function Le() {
                return !0;
            }
            function Ae() {
                return !1;
            }
            function $e(e, t) {
                return (
                    (e ===
                        (function () {
                            try {
                                return s.activeElement;
                            } catch (e) {}
                        })()) ==
                    ("focus" === t)
                );
            }
            function Ne(e, t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ne(e, a, n, i, t[a], r);
                    return e;
                }
                if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = Ae;
                else if (!o) return e;
                return (
                    1 === r &&
                        ((s = o),
                        ((o = function (e) {
                            return S().off(e), s.apply(this, arguments);
                        }).guid = s.guid || (s.guid = S.guid++))),
                    e.each(function () {
                        S.event.add(this, t, o, i, n);
                    })
                );
            }
            function Me(e, t, n) {
                n
                    ? (K.set(e, t, !1),
                      S.event.add(e, t, {
                          namespace: !1,
                          handler: function (e) {
                              var i,
                                  o,
                                  r = K.get(this, t);
                              if (1 & e.isTrigger && this[t]) {
                                  if (r.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();
                                  else if (((r = l.call(arguments)), K.set(this, t, r), (i = n(this, t)), this[t](), r !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : (o = {}), r !== o))
                                      return e.stopImmediatePropagation(), e.preventDefault(), o.value;
                              } else r.length && (K.set(this, t, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === K.get(e, t) && S.event.add(e, t, Le);
            }
            (S.event = {
                global: {},
                add: function (e, t, n, i, o) {
                    var r,
                        s,
                        a,
                        l,
                        c,
                        d,
                        u,
                        p,
                        h,
                        f,
                        g,
                        m = K.get(e);
                    if (m)
                        for (
                            n.handler && ((n = (r = n).handler), (o = r.selector)),
                                o && S.find.matchesSelector(se, o),
                                n.guid || (n.guid = S.guid++),
                                (l = m.events) || (l = m.events = {}),
                                (s = m.handle) ||
                                    (s = m.handle = function (t) {
                                        return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                c = (t = (t || "").match(j) || [""]).length;
                            c--;

                        )
                            (h = g = (a = _e.exec(t[c]) || [])[1]),
                                (f = (a[2] || "").split(".").sort()),
                                h &&
                                    ((u = S.event.special[h] || {}),
                                    (h = (o ? u.delegateType : u.bindType) || h),
                                    (u = S.event.special[h] || {}),
                                    (d = S.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && S.expr.match.needsContext.test(o), namespace: f.join(".") }, r)),
                                    (p = l[h]) || (((p = l[h] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, i, f, s)) || (e.addEventListener && e.addEventListener(h, s))),
                                    u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                                    o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                                    (S.event.global[h] = !0));
                },
                remove: function (e, t, n, i, o) {
                    var r,
                        s,
                        a,
                        l,
                        c,
                        d,
                        u,
                        p,
                        h,
                        f,
                        g,
                        m = K.hasData(e) && K.get(e);
                    if (m && (l = m.events)) {
                        for (c = (t = (t || "").match(j) || [""]).length; c--; )
                            if (((h = g = (a = _e.exec(t[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), h)) {
                                for (u = S.event.special[h] || {}, p = l[(h = (i ? u.delegateType : u.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--; )
                                    (d = p[r]),
                                        (!o && g !== d.origType) ||
                                            (n && n.guid !== d.guid) ||
                                            (a && !a.test(d.namespace)) ||
                                            (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                                            (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                                s && !p.length && ((u.teardown && !1 !== u.teardown.call(e, f, m.handle)) || S.removeEvent(e, h, m.handle), delete l[h]);
                            } else for (h in l) S.event.remove(e, h + t[c], n, i, !0);
                        S.isEmptyObject(l) && K.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        i,
                        o,
                        r,
                        s,
                        a = S.event.fix(e),
                        l = new Array(arguments.length),
                        c = (K.get(this, "events") || {})[a.type] || [],
                        d = S.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (((a.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, a))) {
                        for (s = S.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
                                    ((a.handleObj = r), (a.data = r.data), void 0 !== (i = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        i,
                        o,
                        r,
                        s,
                        a = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(o = (i = t[n]).selector + " ")] && (s[o] = i.needsContext ? S(o, this).index(c) > -1 : S.find(o, this, null, [c]).length), s[o] && r.push(i);
                                r.length && a.push({ elem: c, handlers: r });
                            }
                    return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
                },
                addProp: function (e, t) {
                    Object.defineProperty(S.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[S.expando] ? e : new S.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && $(t, "input") && Me(t, "click", Le), !1;
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && $(t, "input") && Me(t, "click"), !0;
                        },
                        _default: function (e) {
                            var t = e.target;
                            return (ge.test(t.type) && t.click && $(t, "input") && K.get(t, "click")) || $(t, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (S.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (S.Event = function (e, t) {
                    if (!(this instanceof S.Event)) return new S.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Le : Ae),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && S.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[S.expando] = !0);
                }),
                (S.Event.prototype = {
                    constructor: S.Event,
                    isDefaultPrevented: Ae,
                    isPropagationStopped: Ae,
                    isImmediatePropagationStopped: Ae,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = Le), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = Le), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = Le), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                S.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && Te.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ee.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    S.event.addProp
                ),
                S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    S.event.special[e] = {
                        setup: function () {
                            return Me(this, e, $e), !1;
                        },
                        trigger: function () {
                            return Me(this, e), !0;
                        },
                        delegateType: t,
                    };
                }),
                S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    S.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                i = this,
                                o = e.relatedTarget,
                                r = e.handleObj;
                            return (o && (o === i || S.contains(i, o))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                S.fn.extend({
                    on: function (e, t, n, i) {
                        return Ne(this, e, t, n, i);
                    },
                    one: function (e, t, n, i) {
                        return Ne(this, e, t, n, i, 1);
                    },
                    off: function (e, t, n) {
                        var i, o;
                        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = Ae),
                            this.each(function () {
                                S.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                qe = /<script|<style|<link/i,
                De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function ze(e, t) {
                return ($(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
            }
            function je(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function He(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function Ie(e, t) {
                var n, i, o, r, s, a, l, c;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && ((r = K.access(e)), (s = K.set(t, r)), (c = r.events))) for (o in (delete s.handle, (s.events = {}), c)) for (n = 0, i = c[o].length; n < i; n++) S.event.add(t, o, c[o][n]);
                    Q.hasData(e) && ((a = Q.access(e)), (l = S.extend({}, a)), Q.set(t, l));
                }
            }
            function Ue(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ge.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
            }
            function Re(e, t, n, i) {
                t = c.apply([], t);
                var o,
                    r,
                    s,
                    a,
                    l,
                    d,
                    u = 0,
                    p = e.length,
                    h = p - 1,
                    f = t[0],
                    g = y(f);
                if (g || (p > 1 && "string" == typeof f && !v.checkClone && De.test(f)))
                    return e.each(function (o) {
                        var r = e.eq(o);
                        g && (t[0] = f.call(this, o, r.html())), Re(r, t, n, i);
                    });
                if (p && ((r = (o = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
                    for (a = (s = S.map(we(o, "script"), je)).length; u < p; u++) (l = o), u !== h && ((l = S.clone(l, !0, !0)), a && S.merge(s, we(l, "script"))), n.call(e[u], l, u);
                    if (a)
                        for (d = s[s.length - 1].ownerDocument, S.map(s, He), u = 0; u < a; u++)
                            (l = s[u]),
                                ve.test(l.type || "") &&
                                    !K.access(l, "globalEval") &&
                                    S.contains(d, l) &&
                                    (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : x(l.textContent.replace(Oe, ""), l, d));
                }
                return e;
            }
            function Fe(e, t, n) {
                for (var i, o = t ? S.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || S.cleanData(we(i)), i.parentNode && (n && ae(i) && be(we(i, "script")), i.parentNode.removeChild(i));
                return e;
            }
            S.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Pe, "<$1></$2>");
                },
                clone: function (e, t, n) {
                    var i,
                        o,
                        r,
                        s,
                        a = e.cloneNode(!0),
                        l = ae(e);
                    if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e))) for (s = we(a), i = 0, o = (r = we(e)).length; i < o; i++) Ue(r[i], s[i]);
                    if (t)
                        if (n) for (r = r || we(e), s = s || we(a), i = 0, o = r.length; i < o; i++) Ie(r[i], s[i]);
                        else Ie(e, a);
                    return (s = we(a, "script")).length > 0 && be(s, !l && we(e, "script")), a;
                },
                cleanData: function (e) {
                    for (var t, n, i, o = S.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (J(n)) {
                            if ((t = n[K.expando])) {
                                if (t.events) for (i in t.events) o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                                n[K.expando] = void 0;
                            }
                            n[Q.expando] && (n[Q.expando] = void 0);
                        }
                },
            }),
                S.fn.extend({
                    detach: function (e) {
                        return Fe(this, e, !0);
                    },
                    remove: function (e) {
                        return Fe(this, e);
                    },
                    text: function (e) {
                        return W(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? S.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return Re(this, arguments, function (e) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || ze(this, e).appendChild(e);
                        });
                    },
                    prepend: function () {
                        return Re(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = ze(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return Re(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return Re(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(we(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return S.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return W(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !qe.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = S.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(we(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return Re(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                S.inArray(this, e) < 0 && (S.cleanData(we(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    S.fn[e] = function (e) {
                        for (var n, i = [], o = S(e), r = o.length - 1, s = 0; s <= r; s++) (n = s === r ? this : this.clone(!0)), S(o[s])[t](n), d.apply(i, n.get());
                        return this.pushStack(i);
                    };
                });
            var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                We = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                },
                Ve = new RegExp(re.join("|"), "i");
            function Xe(e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a = e.style;
                return (
                    (n = n || We(e)) &&
                        ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = S.style(e, t)),
                        !v.pixelBoxStyles() && Be.test(s) && Ve.test(t) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
                    void 0 !== s ? s + "" : s
                );
            }
            function Ye(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function e() {
                    if (d) {
                        (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            se.appendChild(c).appendChild(d);
                        var e = n.getComputedStyle(d);
                        (i = "1%" !== e.top),
                            (l = 12 === t(e.marginLeft)),
                            (d.style.right = "60%"),
                            (a = 36 === t(e.right)),
                            (o = 36 === t(e.width)),
                            (d.style.position = "absolute"),
                            (r = 12 === t(d.offsetWidth / 3)),
                            se.removeChild(c),
                            (d = null);
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var i,
                    o,
                    r,
                    a,
                    l,
                    c = s.createElement("div"),
                    d = s.createElement("div");
                d.style &&
                    ((d.style.backgroundClip = "content-box"),
                    (d.cloneNode(!0).style.backgroundClip = ""),
                    (v.clearCloneStyle = "content-box" === d.style.backgroundClip),
                    S.extend(v, {
                        boxSizingReliable: function () {
                            return e(), o;
                        },
                        pixelBoxStyles: function () {
                            return e(), a;
                        },
                        pixelPosition: function () {
                            return e(), i;
                        },
                        reliableMarginLeft: function () {
                            return e(), l;
                        },
                        scrollboxSize: function () {
                            return e(), r;
                        },
                    }));
            })();
            var Ge = ["Webkit", "Moz", "ms"],
                Je = s.createElement("div").style,
                Ze = {};
            function Ke(e) {
                var t = S.cssProps[e] || Ze[e];
                return (
                    t ||
                    (e in Je
                        ? e
                        : (Ze[e] =
                              (function (e) {
                                  for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; ) if ((e = Ge[n] + t) in Je) return e;
                              })(e) || e))
                );
            }
            var Qe = /^(none|table(?!-c[ea]).+)/,
                et = /^--/,
                tt = { position: "absolute", visibility: "hidden", display: "block" },
                nt = { letterSpacing: "0", fontWeight: "400" };
            function it(e, t, n) {
                var i = oe.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
            }
            function ot(e, t, n, i, o, r) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (l += S.css(e, n + re[s], !0, o)),
                        i
                            ? ("content" === n && (l -= S.css(e, "padding" + re[s], !0, o)), "margin" !== n && (l -= S.css(e, "border" + re[s] + "Width", !0, o)))
                            : ((l += S.css(e, "padding" + re[s], !0, o)), "padding" !== n ? (l += S.css(e, "border" + re[s] + "Width", !0, o)) : (a += S.css(e, "border" + re[s] + "Width", !0, o)));
                return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5)) || 0), l;
            }
            function rt(e, t, n) {
                var i = We(e),
                    o = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    r = o,
                    s = Xe(e, t, i),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Be.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (
                    ((!v.boxSizingReliable() && o) || "auto" === s || (!parseFloat(s) && "inline" === S.css(e, "display", !1, i))) &&
                        e.getClientRects().length &&
                        ((o = "border-box" === S.css(e, "boxSizing", !1, i)), (r = a in e) && (s = e[a])),
                    (s = parseFloat(s) || 0) + ot(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
                );
            }
            function st(e, t, n, i, o) {
                return new st.prototype.init(e, t, n, i, o);
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Xe(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o,
                            r,
                            s,
                            a = G(t),
                            l = et.test(t),
                            c = e.style;
                        if ((l || (t = Ke(a)), (s = S.cssHooks[t] || S.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                        "string" === (r = typeof n) && (o = oe.exec(n)) && o[1] && ((n = ue(e, t, o)), (r = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== r || l || (n += (o && o[3]) || (S.cssNumber[a] ? "" : "px")),
                                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                    }
                },
                css: function (e, t, n, i) {
                    var o,
                        r,
                        s,
                        a = G(t);
                    return (
                        et.test(t) || (t = Ke(a)),
                        (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)),
                        void 0 === o && (o = Xe(e, t, i)),
                        "normal" === o && t in nt && (o = nt[t]),
                        "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
                    );
                },
            }),
                S.each(["height", "width"], function (e, t) {
                    S.cssHooks[t] = {
                        get: function (e, n, i) {
                            if (n)
                                return !Qe.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? rt(e, t, i)
                                    : de(e, tt, function () {
                                          return rt(e, t, i);
                                      });
                        },
                        set: function (e, n, i) {
                            var o,
                                r = We(e),
                                s = !v.scrollboxSize() && "absolute" === r.position,
                                a = (s || i) && "border-box" === S.css(e, "boxSizing", !1, r),
                                l = i ? ot(e, t, i, a, r) : 0;
                            return (
                                a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - ot(e, t, "border", !1, r) - 0.5)),
                                l && (o = oe.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = S.css(e, t))),
                                it(0, n, l)
                            );
                        },
                    };
                }),
                (S.cssHooks.marginLeft = Ye(v.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(Xe(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    de(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (S.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + re[i] + t] = r[i] || r[i - 2] || r[0];
                            return o;
                        },
                    }),
                        "margin" !== e && (S.cssHooks[e + t].set = it);
                }),
                S.fn.extend({
                    css: function (e, t) {
                        return W(
                            this,
                            function (e, t, n) {
                                var i,
                                    o,
                                    r = {},
                                    s = 0;
                                if (Array.isArray(t)) {
                                    for (i = We(e), o = t.length; s < o; s++) r[t[s]] = S.css(e, t[s], !1, i);
                                    return r;
                                }
                                return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (S.Tween = st),
                (st.prototype = {
                    constructor: st,
                    init: function (e, t, n, i, o, r) {
                        (this.elem = e), (this.prop = n), (this.easing = o || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (S.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = st.propHooks[this.prop];
                        return e && e.get ? e.get(this) : st.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = st.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : st.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (st.prototype.init.prototype = st.prototype),
                (st.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                        },
                        set: function (e) {
                            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (st.propHooks.scrollTop = st.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (S.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (S.fx = st.prototype.init),
                (S.fx.step = {});
            var at,
                lt,
                ct = /^(?:toggle|show|hide)$/,
                dt = /queueHooks$/;
            function ut() {
                lt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ut) : n.setTimeout(ut, S.fx.interval), S.fx.tick());
            }
            function pt() {
                return (
                    n.setTimeout(function () {
                        at = void 0;
                    }),
                    (at = Date.now())
                );
            }
            function ht(e, t) {
                var n,
                    i = 0,
                    o = { height: e };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = re[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o;
            }
            function ft(e, t, n) {
                for (var i, o = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), r = 0, s = o.length; r < s; r++) if ((i = o[r].call(n, t, e))) return i;
            }
            function gt(e, t, n) {
                var i,
                    o,
                    r = 0,
                    s = gt.prefilters.length,
                    a = S.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (o) return !1;
                        for (var t = at || pt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                        return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
                    },
                    c = a.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: at || pt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i;
                        },
                        stop: function (t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < i; n++) c.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                        },
                    }),
                    d = c.props;
                for (
                    !(function (e, t) {
                        var n, i, o, r, s;
                        for (n in e)
                            if (((o = t[(i = G(n))]), (r = e[n]), Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (s = S.cssHooks[i]) && ("expand" in s)))
                                for (n in ((r = s.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
                            else t[i] = o;
                    })(d, c.opts.specialEasing);
                    r < s;
                    r++
                )
                    if ((i = gt.prefilters[r].call(c, e, d, c.opts))) return y(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return (
                    S.map(d, ft, c),
                    y(c.opts.start) && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    S.fx.timer(S.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            (S.Animation = S.extend(gt, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, oe.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    y(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
                    for (var n, i = 0, o = e.length; i < o; i++) (n = e[i]), (gt.tweeners[n] = gt.tweeners[n] || []), gt.tweeners[n].unshift(t);
                },
                prefilters: [
                    function (e, t, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u = "width" in t || "height" in t,
                            p = this,
                            h = {},
                            f = e.style,
                            g = e.nodeType && ce(e),
                            m = K.get(e, "fxshow");
                        for (i in (n.queue ||
                            (null == (s = S._queueHooks(e, "fx")).unqueued &&
                                ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function () {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            p.always(function () {
                                p.always(function () {
                                    s.unqueued--, S.queue(e, "fx").length || s.empty.fire();
                                });
                            })),
                        t))
                            if (((o = t[i]), ct.test(o))) {
                                if ((delete t[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))) {
                                    if ("show" !== o || !m || void 0 === m[i]) continue;
                                    g = !0;
                                }
                                h[i] = (m && m[i]) || S.style(e, i);
                            }
                        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                            for (i in (u &&
                                1 === e.nodeType &&
                                ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                null == (c = m && m.display) && (c = K.get(e, "display")),
                                "none" === (d = S.css(e, "display")) && (c ? (d = c) : (fe([e], !0), (c = e.style.display || c), (d = S.css(e, "display")), fe([e]))),
                                ("inline" === d || ("inline-block" === d && null != c)) &&
                                    "none" === S.css(e, "float") &&
                                    (l ||
                                        (p.done(function () {
                                            f.display = c;
                                        }),
                                        null == c && ((d = f.display), (c = "none" === d ? "" : d))),
                                    (f.display = "inline-block"))),
                            n.overflow &&
                                ((f.overflow = "hidden"),
                                p.always(function () {
                                    (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            h))
                                l ||
                                    (m ? "hidden" in m && (g = m.hidden) : (m = K.access(e, "fxshow", { display: c })),
                                    r && (m.hidden = !g),
                                    g && fe([e], !0),
                                    p.done(function () {
                                        for (i in (g || fe([e]), K.remove(e, "fxshow"), h)) S.style(e, i, h[i]);
                                    })),
                                    (l = ft(g ? m[i] : 0, i, p)),
                                    i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function (e, t) {
                    t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
                },
            })),
                (S.speed = function (e, t, n) {
                    var i = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
                    return (
                        S.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in S.fx.speeds ? (i.duration = S.fx.speeds[i.duration]) : (i.duration = S.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function () {
                            y(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                S.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                    },
                    animate: function (e, t, n, i) {
                        var o = S.isEmptyObject(e),
                            r = S.speed(t, n, i),
                            s = function () {
                                var t = gt(this, S.extend({}, e), r);
                                (o || K.get(this, "finish")) && t.stop(!0);
                            };
                        return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
                    },
                    stop: function (e, t, n) {
                        var i = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                            t && !1 !== e && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    o = null != e && e + "queueHooks",
                                    r = S.timers,
                                    s = K.get(this);
                                if (o) s[o] && s[o].stop && i(s[o]);
                                else for (o in s) s[o] && s[o].stop && dt.test(o) && i(s[o]);
                                for (o = r.length; o--; ) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                                (!t && n) || S.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = K.get(this),
                                    i = n[e + "queue"],
                                    o = n[e + "queueHooks"],
                                    r = S.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, S.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                S.each(["toggle", "show", "hide"], function (e, t) {
                    var n = S.fn[t];
                    S.fn[t] = function (e, i, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, i, o);
                    };
                }),
                S.each({ slideDown: ht("show"), slideUp: ht("hide"), slideToggle: ht("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    S.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i);
                    };
                }),
                (S.timers = []),
                (S.fx.tick = function () {
                    var e,
                        t = 0,
                        n = S.timers;
                    for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || S.fx.stop(), (at = void 0);
                }),
                (S.fx.timer = function (e) {
                    S.timers.push(e), S.fx.start();
                }),
                (S.fx.interval = 13),
                (S.fx.start = function () {
                    lt || ((lt = !0), ut());
                }),
                (S.fx.stop = function () {
                    lt = null;
                }),
                (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (S.fn.delay = function (e, t) {
                    return (
                        (e = (S.fx && S.fx.speeds[e]) || e),
                        (t = t || "fx"),
                        this.queue(t, function (t, i) {
                            var o = n.setTimeout(t, e);
                            i.stop = function () {
                                n.clearTimeout(o);
                            };
                        })
                    );
                }),
                (function () {
                    var e = s.createElement("input"),
                        t = s.createElement("select").appendChild(s.createElement("option"));
                    (e.type = "checkbox"), (v.checkOn = "" !== e.value), (v.optSelected = t.selected), ((e = s.createElement("input")).value = "t"), (e.type = "radio"), (v.radioValue = "t" === e.value);
                })();
            var mt,
                vt = S.expr.attrHandle;
            S.fn.extend({
                attr: function (e, t) {
                    return W(this, S.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        S.removeAttr(this, e);
                    });
                },
            }),
                S.extend({
                    attr: function (e, t, n) {
                        var i,
                            o,
                            r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return void 0 === e.getAttribute
                                ? S.prop(e, t, n)
                                : ((1 === r && S.isXMLDoc(e)) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? mt : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void S.removeAttr(e, t)
                                          : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                                          ? i
                                          : (e.setAttribute(t, n + ""), n)
                                      : o && "get" in o && null !== (i = o.get(e, t))
                                      ? i
                                      : null == (i = S.find.attr(e, t))
                                      ? void 0
                                      : i);
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!v.radioValue && "radio" === t && $(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            i = 0,
                            o = t && t.match(j);
                        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
                    },
                }),
                (mt = {
                    set: function (e, t, n) {
                        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = vt[t] || S.find.attr;
                    vt[t] = function (e, t, i) {
                        var o,
                            r,
                            s = t.toLowerCase();
                        return i || ((r = vt[s]), (vt[s] = o), (o = null != n(e, t, i) ? s : null), (vt[s] = r)), o;
                    };
                });
            var yt = /^(?:input|select|textarea|button)$/i,
                wt = /^(?:a|area)$/i;
            function bt(e) {
                return (e.match(j) || []).join(" ");
            }
            function xt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function kt(e) {
                return Array.isArray(e) ? e : ("string" == typeof e && e.match(j)) || [];
            }
            S.fn.extend({
                prop: function (e, t) {
                    return W(this, S.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[S.propFix[e] || e];
                    });
                },
            }),
                S.extend({
                    prop: function (e, t, n) {
                        var i,
                            o,
                            r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return (
                                (1 === r && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (o = S.propHooks[t])),
                                void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = S.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : yt.test(e.nodeName) || (wt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                v.optSelected ||
                    (S.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    S.propFix[this.toLowerCase()] = this;
                }),
                S.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l = 0;
                        if (y(e))
                            return this.each(function (t) {
                                S(this).addClass(e.call(this, t, xt(this)));
                            });
                        if ((t = kt(e)).length)
                            for (; (n = this[l++]); )
                                if (((o = xt(n)), (i = 1 === n.nodeType && " " + bt(o) + " "))) {
                                    for (s = 0; (r = t[s++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                    o !== (a = bt(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a,
                            l = 0;
                        if (y(e))
                            return this.each(function (t) {
                                S(this).removeClass(e.call(this, t, xt(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = kt(e)).length)
                            for (; (n = this[l++]); )
                                if (((o = xt(n)), (i = 1 === n.nodeType && " " + bt(o) + " "))) {
                                    for (s = 0; (r = t[s++]); ) for (; i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
                                    o !== (a = bt(i)) && n.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            i = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && i
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : y(e)
                            ? this.each(function (n) {
                                  S(this).toggleClass(e.call(this, n, xt(this), t), t);
                              })
                            : this.each(function () {
                                  var t, o, r, s;
                                  if (i) for (o = 0, r = S(this), s = kt(e); (t = s[o++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                                  else (void 0 !== e && "boolean" !== n) || ((t = xt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            i = 0;
                        for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + bt(xt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
            var St = /\r/g;
            S.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        i,
                        o = this[0];
                    return arguments.length
                        ? ((i = y(e)),
                          this.each(function (n) {
                              var o;
                              1 === this.nodeType &&
                                  (null == (o = i ? e.call(this, n, S(this).val()) : e)
                                      ? (o = "")
                                      : "number" == typeof o
                                      ? (o += "")
                                      : Array.isArray(o) &&
                                        (o = S.map(o, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                          }))
                        : o
                        ? (t = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                            ? n
                            : "string" == typeof (n = o.value)
                            ? n.replace(St, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                },
            }),
                S.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = S.find.attr(e, "value");
                                return null != t ? t : bt(S.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    i,
                                    o = e.options,
                                    r = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    a = s ? null : [],
                                    l = s ? r + 1 : o.length;
                                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                                    if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !$(n.parentNode, "optgroup"))) {
                                        if (((t = S(n).val()), s)) return t;
                                        a.push(t);
                                    }
                                return a;
                            },
                            set: function (e, t) {
                                for (var n, i, o = e.options, r = S.makeArray(t), s = o.length; s--; ) ((i = o[s]).selected = S.inArray(S.valHooks.option.get(i), r) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), r;
                            },
                        },
                    },
                }),
                S.each(["radio", "checkbox"], function () {
                    (S.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = S.inArray(S(e).val(), t) > -1);
                        },
                    }),
                        v.checkOn ||
                            (S.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (v.focusin = "onfocusin" in n);
            var Ct = /^(?:focusinfocus|focusoutblur)$/,
                Tt = function (e) {
                    e.stopPropagation();
                };
            S.extend(S.event, {
                trigger: function (e, t, i, o) {
                    var r,
                        a,
                        l,
                        c,
                        d,
                        u,
                        p,
                        h,
                        g = [i || s],
                        m = f.call(e, "type") ? e.type : e,
                        v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((a = h = l = i = i || s),
                        3 !== i.nodeType &&
                            8 !== i.nodeType &&
                            !Ct.test(m + S.event.triggered) &&
                            (m.indexOf(".") > -1 && ((v = m.split(".")), (m = v.shift()), v.sort()),
                            (d = m.indexOf(":") < 0 && "on" + m),
                            ((e = e[S.expando] ? e : new S.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                            (e.namespace = v.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = i),
                            (t = null == t ? [e] : S.makeArray(t, [e])),
                            (p = S.event.special[m] || {}),
                            o || !p.trigger || !1 !== p.trigger.apply(i, t)))
                    ) {
                        if (!o && !p.noBubble && !w(i)) {
                            for (c = p.delegateType || m, Ct.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), (l = a);
                            l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n);
                        }
                        for (r = 0; (a = g[r++]) && !e.isPropagationStopped(); )
                            (h = a),
                                (e.type = r > 1 ? c : p.bindType || m),
                                (u = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && u.apply(a, t),
                                (u = d && a[d]) && u.apply && J(a) && ((e.result = u.apply(a, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = m),
                            o ||
                                e.isDefaultPrevented() ||
                                (p._default && !1 !== p._default.apply(g.pop(), t)) ||
                                !J(i) ||
                                (d &&
                                    y(i[m]) &&
                                    !w(i) &&
                                    ((l = i[d]) && (i[d] = null),
                                    (S.event.triggered = m),
                                    e.isPropagationStopped() && h.addEventListener(m, Tt),
                                    i[m](),
                                    e.isPropagationStopped() && h.removeEventListener(m, Tt),
                                    (S.event.triggered = void 0),
                                    l && (i[d] = l))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
                    S.event.trigger(i, null, t);
                },
            }),
                S.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            S.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return S.event.trigger(e, t, n, !0);
                    },
                }),
                v.focusin ||
                    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            S.event.simulate(t, e.target, S.event.fix(e));
                        };
                        S.event.special[t] = {
                            setup: function () {
                                var i = this.ownerDocument || this,
                                    o = K.access(i, t);
                                o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
                            },
                            teardown: function () {
                                var i = this.ownerDocument || this,
                                    o = K.access(i, t) - 1;
                                o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t));
                            },
                        };
                    });
            var Et = n.location,
                _t = Date.now(),
                Lt = /\?/;
            S.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new n.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                    t = void 0;
                }
                return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
            };
            var At = /\[\]$/,
                $t = /\r?\n/g,
                Nt = /^(?:submit|button|image|reset|file)$/i,
                Mt = /^(?:input|select|textarea|keygen)/i;
            function Pt(e, t, n, i) {
                var o;
                if (Array.isArray(t))
                    S.each(t, function (t, o) {
                        n || At.test(e) ? i(e, o) : Pt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
                    });
                else if (n || "object" !== k(t)) i(e, t);
                else for (o in t) Pt(e + "[" + o + "]", t[o], n, i);
            }
            (S.param = function (e, t) {
                var n,
                    i = [],
                    o = function (e, t) {
                        var n = y(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
                    S.each(e, function () {
                        o(this.name, this.value);
                    });
                else for (n in e) Pt(n, e[n], t, o);
                return i.join("&");
            }),
                S.fn.extend({
                    serialize: function () {
                        return S.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = S.prop(this, "elements");
                            return e ? S.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !S(this).is(":disabled") && Mt.test(this.nodeName) && !Nt.test(e) && (this.checked || !ge.test(e));
                            })
                            .map(function (e, t) {
                                var n = S(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? S.map(n, function (e) {
                                          return { name: t.name, value: e.replace($t, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace($t, "\r\n") };
                            })
                            .get();
                    },
                });
            var qt = /%20/g,
                Dt = /#.*$/,
                Ot = /([?&])_=[^&]*/,
                zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                jt = /^(?:GET|HEAD)$/,
                Ht = /^\/\//,
                It = {},
                Ut = {},
                Rt = "*/".concat("*"),
                Ft = s.createElement("a");
            function Bt(e) {
                return function (t, n) {
                    "string" != typeof t && ((n = t), (t = "*"));
                    var i,
                        o = 0,
                        r = t.toLowerCase().match(j) || [];
                    if (y(n)) for (; (i = r[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                };
            }
            function Wt(e, t, n, i) {
                var o = {},
                    r = e === Ut;
                function s(a) {
                    var l;
                    return (
                        (o[a] = !0),
                        S.each(e[a] || [], function (e, a) {
                            var c = a(t, n, i);
                            return "string" != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
                        }),
                        l
                    );
                }
                return s(t.dataTypes[0]) || (!o["*"] && s("*"));
            }
            function Vt(e, t) {
                var n,
                    i,
                    o = S.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                return i && S.extend(!0, e, i), e;
            }
            (Ft.href = Et.href),
                S.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Et.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? Vt(Vt(e, S.ajaxSettings), t) : Vt(S.ajaxSettings, e);
                    },
                    ajaxPrefilter: Bt(It),
                    ajaxTransport: Bt(Ut),
                    ajax: function (e, t) {
                        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var i,
                            o,
                            r,
                            a,
                            l,
                            c,
                            d,
                            u,
                            p,
                            h,
                            f = S.ajaxSetup({}, t),
                            g = f.context || f,
                            m = f.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                            v = S.Deferred(),
                            y = S.Callbacks("once memory"),
                            w = f.statusCode || {},
                            b = {},
                            x = {},
                            k = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (d) {
                                        if (!a) for (a = {}; (t = zt.exec(r)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = a[e.toLowerCase() + " "];
                                    }
                                    return null == t ? null : t.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return d ? r : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == d && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (b[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == d && (f.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (d) C.always(e[C.status]);
                                        else for (t in e) w[t] = [w[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || k;
                                    return i && i.abort(t), T(0, t), this;
                                },
                            };
                        if (
                            (v.promise(C),
                            (f.url = ((e || f.url || Et.href) + "").replace(Ht, Et.protocol + "//")),
                            (f.type = t.method || t.type || f.method || f.type),
                            (f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""]),
                            null == f.crossDomain)
                        ) {
                            c = s.createElement("a");
                            try {
                                (c.href = f.url), (c.href = c.href), (f.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host);
                            } catch (e) {
                                f.crossDomain = !0;
                            }
                        }
                        if ((f.data && f.processData && "string" != typeof f.data && (f.data = S.param(f.data, f.traditional)), Wt(It, f, t, C), d)) return C;
                        for (p in ((u = S.event && f.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                        (f.type = f.type.toUpperCase()),
                        (f.hasContent = !jt.test(f.type)),
                        (o = f.url.replace(Dt, "")),
                        f.hasContent
                            ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(qt, "+"))
                            : ((h = f.url.slice(o.length)),
                              f.data && (f.processData || "string" == typeof f.data) && ((o += (Lt.test(o) ? "&" : "?") + f.data), delete f.data),
                              !1 === f.cache && ((o = o.replace(Ot, "$1")), (h = (Lt.test(o) ? "&" : "?") + "_=" + _t++ + h)),
                              (f.url = o + h)),
                        f.ifModified && (S.lastModified[o] && C.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])),
                        ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && C.setRequestHeader("Content-Type", f.contentType),
                        C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]),
                        f.headers))
                            C.setRequestHeader(p, f.headers[p]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(g, C, f) || d)) return C.abort();
                        if (((k = "abort"), y.add(f.complete), C.done(f.success), C.fail(f.error), (i = Wt(Ut, f, t, C)))) {
                            if (((C.readyState = 1), u && m.trigger("ajaxSend", [C, f]), d)) return C;
                            f.async &&
                                f.timeout > 0 &&
                                (l = n.setTimeout(function () {
                                    C.abort("timeout");
                                }, f.timeout));
                            try {
                                (d = !1), i.send(b, T);
                            } catch (e) {
                                if (d) throw e;
                                T(-1, e);
                            }
                        } else T(-1, "No Transport");
                        function T(e, t, s, a) {
                            var c,
                                p,
                                h,
                                b,
                                x,
                                k = t;
                            d ||
                                ((d = !0),
                                l && n.clearTimeout(l),
                                (i = void 0),
                                (r = a || ""),
                                (C.readyState = e > 0 ? 4 : 0),
                                (c = (e >= 200 && e < 300) || 304 === e),
                                s &&
                                    (b = (function (e, t, n) {
                                        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (o in a)
                                                if (a[o] && a[o].test(i)) {
                                                    l.unshift(o);
                                                    break;
                                                }
                                        if (l[0] in n) r = l[0];
                                        else {
                                            for (o in n) {
                                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                                    r = o;
                                                    break;
                                                }
                                                s || (s = o);
                                            }
                                            r = r || s;
                                        }
                                        if (r) return r !== l[0] && l.unshift(r), n[r];
                                    })(f, C, s)),
                                (b = (function (e, t, n, i) {
                                    var o,
                                        r,
                                        s,
                                        a,
                                        l,
                                        c = {},
                                        d = e.dataTypes.slice();
                                    if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                    for (r = d.shift(); r; )
                                        if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = d.shift())))
                                            if ("*" === r) r = l;
                                            else if ("*" !== l && l !== r) {
                                                if (!(s = c[l + " " + r] || c["* " + r]))
                                                    for (o in c)
                                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                            !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                                                            break;
                                                        }
                                                if (!0 !== s)
                                                    if (s && e.throws) t = s(t);
                                                    else
                                                        try {
                                                            t = s(t);
                                                        } catch (e) {
                                                            return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
                                                        }
                                            }
                                    return { state: "success", data: t };
                                })(f, b, C, c)),
                                c
                                    ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (S.lastModified[o] = x), (x = C.getResponseHeader("etag")) && (S.etag[o] = x)),
                                      204 === e || "HEAD" === f.type ? (k = "nocontent") : 304 === e ? (k = "notmodified") : ((k = b.state), (p = b.data), (c = !(h = b.error))))
                                    : ((h = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                                (C.status = e),
                                (C.statusText = (t || k) + ""),
                                c ? v.resolveWith(g, [p, k, C]) : v.rejectWith(g, [C, k, h]),
                                C.statusCode(w),
                                (w = void 0),
                                u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : h]),
                                y.fireWith(g, [C, k]),
                                u && (m.trigger("ajaxComplete", [C, f]), --S.active || S.event.trigger("ajaxStop")));
                        }
                        return C;
                    },
                    getJSON: function (e, t, n) {
                        return S.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return S.get(e, void 0, t, "script");
                    },
                }),
                S.each(["get", "post"], function (e, t) {
                    S[t] = function (e, n, i, o) {
                        return y(n) && ((o = o || i), (i = n), (n = void 0)), S.ajax(S.extend({ url: e, type: t, dataType: o, data: n, success: i }, S.isPlainObject(e) && e));
                    };
                }),
                (S._evalUrl = function (e, t) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (e) {
                            S.globalEval(e, t);
                        },
                    });
                }),
                S.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (y(e) && (e = e.call(this[0])),
                                (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return y(e)
                            ? this.each(function (t) {
                                  S(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = S(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = y(e);
                        return this.each(function (n) {
                            S(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    S(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (S.expr.pseudos.hidden = function (e) {
                    return !S.expr.pseudos.visible(e);
                }),
                (S.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (S.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var Xt = { 0: 200, 1223: 204 },
                Yt = S.ajaxSettings.xhr();
            (v.cors = !!Yt && "withCredentials" in Yt),
                (v.ajax = Yt = !!Yt),
                S.ajaxTransport(function (e) {
                    var t, i;
                    if (v.cors || (Yt && !e.crossDomain))
                        return {
                            send: function (o, r) {
                                var s,
                                    a = e.xhr();
                                if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(s, o[s]);
                                (t = function (e) {
                                    return function () {
                                        t &&
                                            ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                            "abort" === e
                                                ? a.abort()
                                                : "error" === e
                                                ? "number" != typeof a.status
                                                    ? r(0, "error")
                                                    : r(a.status, a.statusText)
                                                : r(
                                                      Xt[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = t()),
                                    (i = a.onerror = a.ontimeout = t("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = i)
                                        : (a.onreadystatechange = function () {
                                              4 === a.readyState &&
                                                  n.setTimeout(function () {
                                                      t && i();
                                                  });
                                          }),
                                    (t = t("abort"));
                                try {
                                    a.send((e.hasContent && e.data) || null);
                                } catch (e) {
                                    if (t) throw e;
                                }
                            },
                            abort: function () {
                                t && t();
                            },
                        };
                }),
                S.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                S.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (e) {
                            return S.globalEval(e), e;
                        },
                    },
                }),
                S.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                S.ajaxTransport("script", function (e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function (i, o) {
                                (t = S("<script>")
                                    .attr(e.scriptAttrs || {})
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function (e) {
                                            t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    s.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                });
            var Gt,
                Jt = [],
                Zt = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Jt.pop() || S.expando + "_" + _t++;
                    return (this[e] = !0), e;
                },
            }),
                S.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var o,
                        r,
                        s,
                        a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0])
                        return (
                            (o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            a ? (e[a] = e[a].replace(Zt, "$1" + o)) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                            (e.converters["script json"] = function () {
                                return s || S.error(o + " was not called"), s[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (r = n[o]),
                            (n[o] = function () {
                                s = arguments;
                            }),
                            i.always(function () {
                                void 0 === r ? S(n).removeProp(o) : (n[o] = r), e[o] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(o)), s && y(r) && r(s[0]), (s = r = void 0);
                            }),
                            "script"
                        );
                }),
                (v.createHTMLDocument = (((Gt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Gt.childNodes.length)),
                (S.parseHTML = function (e, t, n) {
                    return "string" != typeof e
                        ? []
                        : ("boolean" == typeof t && ((n = t), (t = !1)),
                          t || (v.createHTMLDocument ? (((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href), t.head.appendChild(i)) : (t = s)),
                          (r = !n && []),
                          (o = N.exec(e)) ? [t.createElement(o[1])] : ((o = Ce([e], t, r)), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
                    var i, o, r;
                }),
                (S.fn.load = function (e, t, n) {
                    var i,
                        o,
                        r,
                        s = this,
                        a = e.indexOf(" ");
                    return (
                        a > -1 && ((i = bt(e.slice(a))), (e = e.slice(0, a))),
                        y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                        s.length > 0 &&
                            S.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                                .done(function (e) {
                                    (r = arguments), s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            s.each(function () {
                                                n.apply(this, r || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    S.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                (S.expr.pseudos.animated = function (e) {
                    return S.grep(S.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (S.offset = {
                    setOffset: function (e, t, n) {
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = S.css(e, "position"),
                            d = S(e),
                            u = {};
                        "static" === c && (e.style.position = "relative"),
                            (a = d.offset()),
                            (r = S.css(e, "top")),
                            (l = S.css(e, "left")),
                            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? ((s = (i = d.position()).top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                            y(t) && (t = t.call(e, n, S.extend({}, a))),
                            null != t.top && (u.top = t.top - a.top + s),
                            null != t.left && (u.left = t.left - a.left + o),
                            "using" in t ? t.using.call(e, u) : d.css(u);
                    },
                }),
                S.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      S.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            i = this[0];
                        return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                i = this[0],
                                o = { top: 0, left: 0 };
                            if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); ) e = e.parentNode;
                                e && e !== i && 1 === e.nodeType && (((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (o.left += S.css(e, "borderLeftWidth", !0)));
                            }
                            return { top: t.top - o.top - S.css(i, "marginTop", !0), left: t.left - o.left - S.css(i, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                            return e || se;
                        });
                    },
                }),
                S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    S.fn[e] = function (i) {
                        return W(
                            this,
                            function (e, i, o) {
                                var r;
                                if ((w(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
                                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
                            },
                            e,
                            i,
                            arguments.length
                        );
                    };
                }),
                S.each(["top", "left"], function (e, t) {
                    S.cssHooks[t] = Ye(v.pixelPosition, function (e, n) {
                        if (n) return (n = Xe(e, t)), Be.test(n) ? S(e).position()[t] + "px" : n;
                    });
                }),
                S.each({ Height: "height", Width: "width" }, function (e, t) {
                    S.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                        S.fn[i] = function (o, r) {
                            var s = arguments.length && (n || "boolean" != typeof o),
                                a = n || (!0 === o || !0 === r ? "margin" : "border");
                            return W(
                                this,
                                function (t, n, o) {
                                    var r;
                                    return w(t)
                                        ? 0 === i.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                                        : void 0 === o
                                        ? S.css(t, n, a)
                                        : S.style(t, n, o, a);
                                },
                                t,
                                s ? o : void 0,
                                s
                            );
                        };
                    });
                }),
                S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    S.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }),
                S.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                S.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, i) {
                        return this.on(t, e, n, i);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                }),
                (S.proxy = function (e, t) {
                    var n, i, o;
                    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
                        return (
                            (i = l.call(arguments, 2)),
                            ((o = function () {
                                return e.apply(t || this, i.concat(l.call(arguments)));
                            }).guid = e.guid = e.guid || S.guid++),
                            o
                        );
                }),
                (S.holdReady = function (e) {
                    e ? S.readyWait++ : S.ready(!0);
                }),
                (S.isArray = Array.isArray),
                (S.parseJSON = JSON.parse),
                (S.nodeName = $),
                (S.isFunction = y),
                (S.isWindow = w),
                (S.camelCase = G),
                (S.type = k),
                (S.now = Date.now),
                (S.isNumeric = function (e) {
                    var t = S.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                void 0 ===
                    (i = function () {
                        return S;
                    }.apply(t, [])) || (e.exports = i);
            var Kt = n.jQuery,
                Qt = n.$;
            return (
                (S.noConflict = function (e) {
                    return n.$ === S && (n.$ = Qt), e && n.jQuery === S && (n.jQuery = Kt), S;
                }),
                o || (n.jQuery = n.$ = S),
                S
            );
        });
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var n = (function (e, t) {
                            var n = e[1] || "",
                                i = e[3];
                            if (!i) return n;
                            if (t && "function" == typeof btoa) {
                                var o = ((s = i), (a = btoa(unescape(encodeURIComponent(JSON.stringify(s))))), (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a)), "/*# ".concat(l, " */")),
                                    r = i.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(i.sourceRoot).concat(e, " */");
                                    });
                                return [n].concat(r).concat([o]).join("\n");
                            }
                            var s, a, l;
                            return [n].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
                    }).join("");
                }),
                (t.i = function (e, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var i = {}, o = 0; o < this.length; o++) {
                        var r = this[o][0];
                        null != r && (i[r] = !0);
                    }
                    for (var s = 0; s < e.length; s++) {
                        var a = e[s];
                        (null != a[0] && i[a[0]]) || (n && !a[2] ? (a[2] = n) : n && (a[2] = "(".concat(a[2], ") and (").concat(n, ")")), t.push(a));
                    }
                }),
                t
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var i,
            o = {},
            r = function () {
                return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
            },
            s = (function () {
                var e = {};
                return function (t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        e[t] = n;
                    }
                    return e[t];
                };
            })();
        function a(e, t) {
            for (var n = [], i = {}, o = 0; o < e.length; o++) {
                var r = e[o],
                    s = t.base ? r[0] + t.base : r[0],
                    a = { css: r[1], media: r[2], sourceMap: r[3] };
                i[s] ? i[s].parts.push(a) : n.push((i[s] = { id: s, parts: [a] }));
            }
            return n;
        }
        function l(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    r = o[i.id],
                    s = 0;
                if (r) {
                    for (r.refs++; s < r.parts.length; s++) r.parts[s](i.parts[s]);
                    for (; s < i.parts.length; s++) r.parts.push(m(i.parts[s], t));
                } else {
                    for (var a = []; s < i.parts.length; s++) a.push(m(i.parts[s], t));
                    o[i.id] = { id: i.id, refs: 1, parts: a };
                }
            }
        }
        function c(e) {
            var t = document.createElement("style");
            if (void 0 === e.attributes.nonce) {
                var i = n.nc;
                i && (e.attributes.nonce = i);
            }
            if (
                (Object.keys(e.attributes).forEach(function (n) {
                    t.setAttribute(n, e.attributes[n]);
                }),
                "function" == typeof e.insert)
            )
                e.insert(t);
            else {
                var o = s(e.insert || "head");
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(t);
            }
            return t;
        }
        var d,
            u =
                ((d = []),
                function (e, t) {
                    return (d[e] = t), d.filter(Boolean).join("\n");
                });
        function p(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = u(t, o);
            else {
                var r = document.createTextNode(o),
                    s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(r, s[t]) : e.appendChild(r);
            }
        }
        function h(e, t, n) {
            var i = n.css,
                o = n.media,
                r = n.sourceMap;
            if ((o && e.setAttribute("media", o), r && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet)) e.styleSheet.cssText = i;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i));
            }
        }
        var f = null,
            g = 0;
        function m(e, t) {
            var n, i, o;
            if (t.singleton) {
                var r = g++;
                (n = f || (f = c(t))), (i = p.bind(null, n, r, !1)), (o = p.bind(null, n, r, !0));
            } else
                (n = c(t)),
                    (i = h.bind(null, n, t)),
                    (o = function () {
                        !(function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(n);
                    });
            return (
                i(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i((e = t));
                    } else o();
                }
            );
        }
        e.exports = function (e, t) {
            ((t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}), t.singleton || "boolean" == typeof t.singleton || (t.singleton = r());
            var n = a(e, t);
            return (
                l(n, t),
                function (e) {
                    for (var i = [], r = 0; r < n.length; r++) {
                        var s = n[r],
                            c = o[s.id];
                        c && (c.refs--, i.push(c));
                    }
                    e && l(a(e, t), t);
                    for (var d = 0; d < i.length; d++) {
                        var u = i[d];
                        if (0 === u.refs) {
                            for (var p = 0; p < u.parts.length; p++) u.parts[p]();
                            delete o[u.id];
                        }
                    }
                }
            );
        };
    },
    function (e, t, n) {
        "use strict";
        (function (t) {
            var i = n(0),
                o = n(39),
                r = { "Content-Type": "application/x-www-form-urlencoded" };
            function s(e, t) {
                !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var a,
                l = {
                    adapter: ("undefined" != typeof XMLHttpRequest ? (a = n(8)) : void 0 !== t && (a = n(8)), a),
                    transformRequest: [
                        function (e, t) {
                            return (
                                o(t, "Content-Type"),
                                i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e)
                                    ? e
                                    : i.isArrayBufferView(e)
                                    ? e.buffer
                                    : i.isURLSearchParams(e)
                                    ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                                    : i.isObject(e)
                                    ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e))
                                    : e
                            );
                        },
                    ],
                    transformResponse: [
                        function (e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(e);
                                } catch (e) {}
                            return e;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300;
                    },
                };
            (l.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                i.forEach(["delete", "get", "head"], function (e) {
                    l.headers[e] = {};
                }),
                i.forEach(["post", "put", "patch"], function (e) {
                    l.headers[e] = i.merge(r);
                }),
                (e.exports = l);
        }.call(this, n(38)));
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return "string" != typeof (e = e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) || t ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
        };
    },
    function (e, t) {
        e.exports = "/fonts/vendor/slick-carousel/slick/slick.eot?ced611daf7709cc778da928fec876475";
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
                return e.apply(t, n);
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0),
            o = n(40),
            r = n(42),
            s = n(43),
            a = n(44),
            l = n(9);
        e.exports = function (e) {
            return new Promise(function (t, c) {
                var d = e.data,
                    u = e.headers;
                i.isFormData(d) && delete u["Content-Type"];
                var p = new XMLHttpRequest();
                if (e.auth) {
                    var h = e.auth.username || "",
                        f = e.auth.password || "";
                    u.Authorization = "Basic " + btoa(h + ":" + f);
                }
                if (
                    (p.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0),
                    (p.timeout = e.timeout),
                    (p.onreadystatechange = function () {
                        if (p && 4 === p.readyState && (0 !== p.status || (p.responseURL && 0 === p.responseURL.indexOf("file:")))) {
                            var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                                i = { data: e.responseType && "text" !== e.responseType ? p.response : p.responseText, status: p.status, statusText: p.statusText, headers: n, config: e, request: p };
                            o(t, c, i), (p = null);
                        }
                    }),
                    (p.onerror = function () {
                        c(l("Network Error", e, null, p)), (p = null);
                    }),
                    (p.ontimeout = function () {
                        c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), (p = null);
                    }),
                    i.isStandardBrowserEnv())
                ) {
                    var g = n(45),
                        m = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                    m && (u[e.xsrfHeaderName] = m);
                }
                if (
                    ("setRequestHeader" in p &&
                        i.forEach(u, function (e, t) {
                            void 0 === d && "content-type" === t.toLowerCase() ? delete u[t] : p.setRequestHeader(t, e);
                        }),
                    e.withCredentials && (p.withCredentials = !0),
                    e.responseType)
                )
                    try {
                        p.responseType = e.responseType;
                    } catch (t) {
                        if ("json" !== e.responseType) throw t;
                    }
                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken &&
                        e.cancelToken.promise.then(function (e) {
                            p && (p.abort(), c(e), (p = null));
                        }),
                    void 0 === d && (d = null),
                    p.send(d);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(41);
        e.exports = function (e, t, n, o, r) {
            var s = new Error(e);
            return i(s, t, n, o, r);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
        };
    },
    function (e, t, n) {
        "use strict";
        function i(e) {
            this.message = e;
        }
        (i.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
        }),
            (i.prototype.__CANCEL__ = !0),
            (e.exports = i);
    },
    function (e, t, n) {
        var i, o, r;
        (o = []),
            void 0 ===
                (r =
                    "function" ==
                    typeof (i = function () {
                        "use strict";
                        var e = "14.0.3";
                        function t(e) {
                            e.parentElement.removeChild(e);
                        }
                        function n(e) {
                            return null != e;
                        }
                        function i(e) {
                            e.preventDefault();
                        }
                        function o(e) {
                            return "number" == typeof e && !isNaN(e) && isFinite(e);
                        }
                        function r(e, t, n) {
                            n > 0 &&
                                (c(e, t),
                                setTimeout(function () {
                                    d(e, t);
                                }, n));
                        }
                        function s(e) {
                            return Math.max(Math.min(e, 100), 0);
                        }
                        function a(e) {
                            return Array.isArray(e) ? e : [e];
                        }
                        function l(e) {
                            var t = (e = String(e)).split(".");
                            return t.length > 1 ? t[1].length : 0;
                        }
                        function c(e, t) {
                            e.classList ? e.classList.add(t) : (e.className += " " + t);
                        }
                        function d(e, t) {
                            e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
                        }
                        function u(e) {
                            var t = void 0 !== window.pageXOffset,
                                n = "CSS1Compat" === (e.compatMode || "");
                            return { x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft, y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop };
                        }
                        function p(e, t) {
                            return 100 / (t - e);
                        }
                        function h(e, t) {
                            return (100 * t) / (e[1] - e[0]);
                        }
                        function f(e, t) {
                            for (var n = 1; e >= t[n]; ) n += 1;
                            return n;
                        }
                        function g(e, t, n) {
                            if (n >= e.slice(-1)[0]) return 100;
                            var i = f(n, e),
                                o = e[i - 1],
                                r = e[i],
                                s = t[i - 1],
                                a = t[i];
                            return (
                                s +
                                (function (e, t) {
                                    return h(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0]);
                                })([o, r], n) /
                                    p(s, a)
                            );
                        }
                        function m(e, t, n, i) {
                            if (100 === i) return i;
                            var o = f(i, e),
                                r = e[o - 1],
                                s = e[o];
                            return n
                                ? i - r > (s - r) / 2
                                    ? s
                                    : r
                                : t[o - 1]
                                ? e[o - 1] +
                                  (function (e, t) {
                                      return Math.round(e / t) * t;
                                  })(i - e[o - 1], t[o - 1])
                                : i;
                        }
                        function v(t, n, i) {
                            var r;
                            if (("number" == typeof n && (n = [n]), !Array.isArray(n))) throw new Error("noUiSlider (" + e + "): 'range' contains invalid value.");
                            if (!o((r = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))) || !o(n[0])) throw new Error("noUiSlider (" + e + "): 'range' value isn't numeric.");
                            i.xPct.push(r), i.xVal.push(n[0]), r ? i.xSteps.push(!isNaN(n[1]) && n[1]) : isNaN(n[1]) || (i.xSteps[0] = n[1]), i.xHighestCompleteStep.push(0);
                        }
                        function y(e, t, n) {
                            if (t)
                                if (n.xVal[e] !== n.xVal[e + 1]) {
                                    n.xSteps[e] = h([n.xVal[e], n.xVal[e + 1]], t) / p(n.xPct[e], n.xPct[e + 1]);
                                    var i = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e],
                                        o = Math.ceil(Number(i.toFixed(3)) - 1),
                                        r = n.xVal[e] + n.xNumSteps[e] * o;
                                    n.xHighestCompleteStep[e] = r;
                                } else n.xSteps[e] = n.xHighestCompleteStep[e] = n.xVal[e];
                        }
                        function w(e, t, n) {
                            var i;
                            (this.xPct = []), (this.xVal = []), (this.xSteps = [n || !1]), (this.xNumSteps = [!1]), (this.xHighestCompleteStep = []), (this.snap = t);
                            var o = [];
                            for (i in e) e.hasOwnProperty(i) && o.push([e[i], i]);
                            for (
                                o.length && "object" == typeof o[0][0]
                                    ? o.sort(function (e, t) {
                                          return e[0][0] - t[0][0];
                                      })
                                    : o.sort(function (e, t) {
                                          return e[0] - t[0];
                                      }),
                                    i = 0;
                                i < o.length;
                                i++
                            )
                                v(o[i][1], o[i][0], this);
                            for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) y(i, this.xNumSteps[i], this);
                        }
                        (w.prototype.getMargin = function (t) {
                            var n = this.xNumSteps[0];
                            if (n && (t / n) % 1 != 0) throw new Error("noUiSlider (" + e + "): 'limit', 'margin' and 'padding' must be divisible by step.");
                            return 2 === this.xPct.length && h(this.xVal, t);
                        }),
                            (w.prototype.toStepping = function (e) {
                                return (e = g(this.xVal, this.xPct, e));
                            }),
                            (w.prototype.fromStepping = function (e) {
                                return (function (e, t, n) {
                                    if (n >= 100) return e.slice(-1)[0];
                                    var i = f(n, t),
                                        o = e[i - 1],
                                        r = e[i],
                                        s = t[i - 1];
                                    return (function (e, t) {
                                        return (t * (e[1] - e[0])) / 100 + e[0];
                                    })([o, r], (n - s) * p(s, t[i]));
                                })(this.xVal, this.xPct, e);
                            }),
                            (w.prototype.getStep = function (e) {
                                return (e = m(this.xPct, this.xSteps, this.snap, e));
                            }),
                            (w.prototype.getDefaultStep = function (e, t, n) {
                                var i = f(e, this.xPct);
                                return (100 === e || (t && e === this.xPct[i - 1])) && (i = Math.max(i - 1, 1)), (this.xVal[i] - this.xVal[i - 1]) / n;
                            }),
                            (w.prototype.getNearbySteps = function (e) {
                                var t = f(e, this.xPct);
                                return {
                                    stepBefore: { startValue: this.xVal[t - 2], step: this.xNumSteps[t - 2], highestStep: this.xHighestCompleteStep[t - 2] },
                                    thisStep: { startValue: this.xVal[t - 1], step: this.xNumSteps[t - 1], highestStep: this.xHighestCompleteStep[t - 1] },
                                    stepAfter: { startValue: this.xVal[t], step: this.xNumSteps[t], highestStep: this.xHighestCompleteStep[t] },
                                };
                            }),
                            (w.prototype.countStepDecimals = function () {
                                var e = this.xNumSteps.map(l);
                                return Math.max.apply(null, e);
                            }),
                            (w.prototype.convert = function (e) {
                                return this.getStep(this.toStepping(e));
                            });
                        var b = {
                            to: function (e) {
                                return void 0 !== e && e.toFixed(2);
                            },
                            from: Number,
                        };
                        function x(t) {
                            if (
                                (function (e) {
                                    return "object" == typeof e && "function" == typeof e.to && "function" == typeof e.from;
                                })(t)
                            )
                                return !0;
                            throw new Error("noUiSlider (" + e + "): 'format' requires 'to' and 'from' methods.");
                        }
                        function k(t, n) {
                            if (!o(n)) throw new Error("noUiSlider (" + e + "): 'step' is not numeric.");
                            t.singleStep = n;
                        }
                        function S(t, n) {
                            if ("object" != typeof n || Array.isArray(n)) throw new Error("noUiSlider (" + e + "): 'range' is not an object.");
                            if (void 0 === n.min || void 0 === n.max) throw new Error("noUiSlider (" + e + "): Missing 'min' or 'max' in 'range'.");
                            if (n.min === n.max) throw new Error("noUiSlider (" + e + "): 'range' 'min' and 'max' cannot be equal.");
                            t.spectrum = new w(n, t.snap, t.singleStep);
                        }
                        function C(t, n) {
                            if (((n = a(n)), !Array.isArray(n) || !n.length)) throw new Error("noUiSlider (" + e + "): 'start' option is incorrect.");
                            (t.handles = n.length), (t.start = n);
                        }
                        function T(t, n) {
                            if (((t.snap = n), "boolean" != typeof n)) throw new Error("noUiSlider (" + e + "): 'snap' option must be a boolean.");
                        }
                        function E(t, n) {
                            if (((t.animate = n), "boolean" != typeof n)) throw new Error("noUiSlider (" + e + "): 'animate' option must be a boolean.");
                        }
                        function _(t, n) {
                            if (((t.animationDuration = n), "number" != typeof n)) throw new Error("noUiSlider (" + e + "): 'animationDuration' option must be a number.");
                        }
                        function L(t, n) {
                            var i,
                                o = [!1];
                            if (("lower" === n ? (n = [!0, !1]) : "upper" === n && (n = [!1, !0]), !0 === n || !1 === n)) {
                                for (i = 1; i < t.handles; i++) o.push(n);
                                o.push(!1);
                            } else {
                                if (!Array.isArray(n) || !n.length || n.length !== t.handles + 1) throw new Error("noUiSlider (" + e + "): 'connect' option doesn't match handle count.");
                                o = n;
                            }
                            t.connect = o;
                        }
                        function A(t, n) {
                            switch (n) {
                                case "horizontal":
                                    t.ort = 0;
                                    break;
                                case "vertical":
                                    t.ort = 1;
                                    break;
                                default:
                                    throw new Error("noUiSlider (" + e + "): 'orientation' option is invalid.");
                            }
                        }
                        function $(t, n) {
                            if (!o(n)) throw new Error("noUiSlider (" + e + "): 'margin' option must be numeric.");
                            if (0 !== n && ((t.margin = t.spectrum.getMargin(n)), !t.margin)) throw new Error("noUiSlider (" + e + "): 'margin' option is only supported on linear sliders.");
                        }
                        function N(t, n) {
                            if (!o(n)) throw new Error("noUiSlider (" + e + "): 'limit' option must be numeric.");
                            if (((t.limit = t.spectrum.getMargin(n)), !t.limit || t.handles < 2)) throw new Error("noUiSlider (" + e + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
                        }
                        function M(t, n) {
                            if (!o(n) && !Array.isArray(n)) throw new Error("noUiSlider (" + e + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                            if (Array.isArray(n) && 2 !== n.length && !o(n[0]) && !o(n[1])) throw new Error("noUiSlider (" + e + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                            if (0 !== n) {
                                if ((Array.isArray(n) || (n = [n, n]), (t.padding = [t.spectrum.getMargin(n[0]), t.spectrum.getMargin(n[1])]), !1 === t.padding[0] || !1 === t.padding[1]))
                                    throw new Error("noUiSlider (" + e + "): 'padding' option is only supported on linear sliders.");
                                if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + e + "): 'padding' option must be a positive number(s).");
                                if (t.padding[0] + t.padding[1] > 100) throw new Error("noUiSlider (" + e + "): 'padding' option must not exceed 100% of the range.");
                            }
                        }
                        function P(t, n) {
                            switch (n) {
                                case "ltr":
                                    t.dir = 0;
                                    break;
                                case "rtl":
                                    t.dir = 1;
                                    break;
                                default:
                                    throw new Error("noUiSlider (" + e + "): 'direction' option was not recognized.");
                            }
                        }
                        function q(t, n) {
                            if ("string" != typeof n) throw new Error("noUiSlider (" + e + "): 'behaviour' must be a string containing options.");
                            var i = n.indexOf("tap") >= 0,
                                o = n.indexOf("drag") >= 0,
                                r = n.indexOf("fixed") >= 0,
                                s = n.indexOf("snap") >= 0,
                                a = n.indexOf("hover") >= 0,
                                l = n.indexOf("unconstrained") >= 0;
                            if (r) {
                                if (2 !== t.handles) throw new Error("noUiSlider (" + e + "): 'fixed' behaviour must be used with 2 handles");
                                $(t, t.start[1] - t.start[0]);
                            }
                            if (l && (t.margin || t.limit)) throw new Error("noUiSlider (" + e + "): 'unconstrained' behaviour cannot be used with margin or limit");
                            t.events = { tap: i || s, drag: o, fixed: r, snap: s, hover: a, unconstrained: l };
                        }
                        function D(t, n) {
                            if (!1 !== n)
                                if (!0 === n) {
                                    t.tooltips = [];
                                    for (var i = 0; i < t.handles; i++) t.tooltips.push(!0);
                                } else {
                                    if (((t.tooltips = a(n)), t.tooltips.length !== t.handles)) throw new Error("noUiSlider (" + e + "): must pass a formatter for all handles.");
                                    t.tooltips.forEach(function (t) {
                                        if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + e + "): 'tooltips' must be passed a formatter or 'false'.");
                                    });
                                }
                        }
                        function O(e, t) {
                            (e.ariaFormat = t), x(t);
                        }
                        function z(e, t) {
                            (e.format = t), x(t);
                        }
                        function j(t, n) {
                            if (((t.keyboardSupport = n), "boolean" != typeof n)) throw new Error("noUiSlider (" + e + "): 'keyboardSupport' option must be a boolean.");
                        }
                        function H(e, t) {
                            e.documentElement = t;
                        }
                        function I(t, n) {
                            if ("string" != typeof n && !1 !== n) throw new Error("noUiSlider (" + e + "): 'cssPrefix' must be a string or `false`.");
                            t.cssPrefix = n;
                        }
                        function U(t, n) {
                            if ("object" != typeof n) throw new Error("noUiSlider (" + e + "): 'cssClasses' must be an object.");
                            if ("string" == typeof t.cssPrefix) for (var i in ((t.cssClasses = {}), n)) n.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + n[i]);
                            else t.cssClasses = n;
                        }
                        function R(t) {
                            var i = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: b, format: b },
                                o = {
                                    step: { r: !1, t: k },
                                    start: { r: !0, t: C },
                                    connect: { r: !0, t: L },
                                    direction: { r: !0, t: P },
                                    snap: { r: !1, t: T },
                                    animate: { r: !1, t: E },
                                    animationDuration: { r: !1, t: _ },
                                    range: { r: !0, t: S },
                                    orientation: { r: !1, t: A },
                                    margin: { r: !1, t: $ },
                                    limit: { r: !1, t: N },
                                    padding: { r: !1, t: M },
                                    behaviour: { r: !0, t: q },
                                    ariaFormat: { r: !1, t: O },
                                    format: { r: !1, t: z },
                                    tooltips: { r: !1, t: D },
                                    keyboardSupport: { r: !0, t: j },
                                    documentElement: { r: !1, t: H },
                                    cssPrefix: { r: !0, t: I },
                                    cssClasses: { r: !0, t: U },
                                },
                                r = {
                                    connect: !1,
                                    direction: "ltr",
                                    behaviour: "tap",
                                    orientation: "horizontal",
                                    keyboardSupport: !0,
                                    cssPrefix: "noUi-",
                                    cssClasses: {
                                        target: "target",
                                        base: "base",
                                        origin: "origin",
                                        handle: "handle",
                                        handleLower: "handle-lower",
                                        handleUpper: "handle-upper",
                                        touchArea: "touch-area",
                                        horizontal: "horizontal",
                                        vertical: "vertical",
                                        background: "background",
                                        connect: "connect",
                                        connects: "connects",
                                        ltr: "ltr",
                                        rtl: "rtl",
                                        draggable: "draggable",
                                        drag: "state-drag",
                                        tap: "state-tap",
                                        active: "active",
                                        tooltip: "tooltip",
                                        pips: "pips",
                                        pipsHorizontal: "pips-horizontal",
                                        pipsVertical: "pips-vertical",
                                        marker: "marker",
                                        markerHorizontal: "marker-horizontal",
                                        markerVertical: "marker-vertical",
                                        markerNormal: "marker-normal",
                                        markerLarge: "marker-large",
                                        markerSub: "marker-sub",
                                        value: "value",
                                        valueHorizontal: "value-horizontal",
                                        valueVertical: "value-vertical",
                                        valueNormal: "value-normal",
                                        valueLarge: "value-large",
                                        valueSub: "value-sub",
                                    },
                                };
                            t.format && !t.ariaFormat && (t.ariaFormat = t.format),
                                Object.keys(o).forEach(function (s) {
                                    if (!n(t[s]) && void 0 === r[s]) {
                                        if (o[s].r) throw new Error("noUiSlider (" + e + "): '" + s + "' is required.");
                                        return !0;
                                    }
                                    o[s].t(i, n(t[s]) ? t[s] : r[s]);
                                }),
                                (i.pips = t.pips);
                            var s = document.createElement("div"),
                                a = void 0 !== s.style.msTransform,
                                l = void 0 !== s.style.transform;
                            return (
                                (i.transformRule = l ? "transform" : a ? "msTransform" : "webkitTransform"),
                                (i.style = [
                                    ["left", "top"],
                                    ["right", "bottom"],
                                ][i.dir][i.ort]),
                                i
                            );
                        }
                        function F(n, o, l) {
                            var p,
                                h,
                                f,
                                g,
                                m,
                                v,
                                y,
                                w,
                                b = window.navigator.pointerEnabled
                                    ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                                    : window.navigator.msPointerEnabled
                                    ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                                    : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                                x =
                                    window.CSS &&
                                    CSS.supports &&
                                    CSS.supports("touch-action", "none") &&
                                    (function () {
                                        var e = !1;
                                        try {
                                            var t = Object.defineProperty({}, "passive", {
                                                get: function () {
                                                    e = !0;
                                                },
                                            });
                                            window.addEventListener("test", null, t);
                                        } catch (e) {}
                                        return e;
                                    })(),
                                k = n,
                                S = o.spectrum,
                                C = [],
                                T = [],
                                E = [],
                                _ = 0,
                                L = {},
                                A = n.ownerDocument,
                                $ = o.documentElement || A.documentElement,
                                N = A.body,
                                M = -1,
                                P = 0,
                                q = 1,
                                D = 2,
                                O = "rtl" === A.dir || 1 === o.ort ? 0 : 100;
                            function z(e, t) {
                                var n = A.createElement("div");
                                return t && c(n, t), e.appendChild(n), n;
                            }
                            function j(e, t) {
                                var n = z(e, o.cssClasses.origin),
                                    i = z(n, o.cssClasses.handle);
                                return (
                                    z(i, o.cssClasses.touchArea),
                                    i.setAttribute("data-handle", t),
                                    o.keyboardSupport &&
                                        (i.setAttribute("tabindex", "0"),
                                        i.addEventListener("keydown", function (e) {
                                            return (function (e, t) {
                                                if (U() || F(t)) return !1;
                                                var n = ["Left", "Right"],
                                                    i = ["Down", "Up"];
                                                o.dir && !o.ort ? n.reverse() : o.ort && !o.dir && i.reverse();
                                                var r = e.key.replace("Arrow", ""),
                                                    s = r === i[0] || r === n[0],
                                                    a = r === i[1] || r === n[1];
                                                if (!s && !a) return !0;
                                                e.preventDefault();
                                                var l = s ? 0 : 1,
                                                    c = ve(t)[l];
                                                return (
                                                    null !== c &&
                                                    (!1 === c && (c = S.getDefaultStep(T[t], s, 10)),
                                                    (c = Math.max(c, 1e-7)),
                                                    (c *= s ? -1 : 1),
                                                    pe(t, S.toStepping(C[t] + c), !0, !0),
                                                    se("slide", t),
                                                    se("update", t),
                                                    se("change", t),
                                                    se("set", t),
                                                    !1)
                                                );
                                            })(e, t);
                                        })),
                                    i.setAttribute("role", "slider"),
                                    i.setAttribute("aria-orientation", o.ort ? "vertical" : "horizontal"),
                                    0 === t ? c(i, o.cssClasses.handleLower) : t === o.handles - 1 && c(i, o.cssClasses.handleUpper),
                                    n
                                );
                            }
                            function H(e, t) {
                                return !!t && z(e, o.cssClasses.connect);
                            }
                            function I(e, t) {
                                return !!o.tooltips[t] && z(e.firstChild, o.cssClasses.tooltip);
                            }
                            function U() {
                                return k.hasAttribute("disabled");
                            }
                            function F(e) {
                                return h[e].hasAttribute("disabled");
                            }
                            function B() {
                                m &&
                                    (re("update.tooltips"),
                                    m.forEach(function (e) {
                                        e && t(e);
                                    }),
                                    (m = null));
                            }
                            function W() {
                                B(),
                                    (m = h.map(I)),
                                    oe("update.tooltips", function (e, t, n) {
                                        if (m[t]) {
                                            var i = e[t];
                                            !0 !== o.tooltips[t] && (i = o.tooltips[t].to(n[t])), (m[t].innerHTML = i);
                                        }
                                    });
                            }
                            function V(e, t, n) {
                                var i = A.createElement("div"),
                                    r = [];
                                (r[P] = o.cssClasses.valueNormal), (r[q] = o.cssClasses.valueLarge), (r[D] = o.cssClasses.valueSub);
                                var s = [];
                                (s[P] = o.cssClasses.markerNormal), (s[q] = o.cssClasses.markerLarge), (s[D] = o.cssClasses.markerSub);
                                var a = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
                                    l = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];
                                function d(e, t) {
                                    var n = t === o.cssClasses.value,
                                        i = n ? r : s;
                                    return t + " " + (n ? a : l)[o.ort] + " " + i[e];
                                }
                                return (
                                    c(i, o.cssClasses.pips),
                                    c(i, 0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical),
                                    Object.keys(e).forEach(function (r) {
                                        !(function (e, r, s) {
                                            if ((s = t ? t(r, s) : s) !== M) {
                                                var a = z(i, !1);
                                                (a.className = d(s, o.cssClasses.marker)),
                                                    (a.style[o.style] = e + "%"),
                                                    s > P && (((a = z(i, !1)).className = d(s, o.cssClasses.value)), a.setAttribute("data-value", r), (a.style[o.style] = e + "%"), (a.innerHTML = n.to(r)));
                                            }
                                        })(r, e[r][0], e[r][1]);
                                    }),
                                    i
                                );
                            }
                            function X() {
                                g && (t(g), (g = null));
                            }
                            function Y(t) {
                                X();
                                var n = t.mode,
                                    i = t.density || 1,
                                    o = t.filter || !1,
                                    r = (function (t, n, i) {
                                        if ("range" === t || "steps" === t) return S.xVal;
                                        if ("count" === t) {
                                            if (n < 2) throw new Error("noUiSlider (" + e + "): 'values' (>= 2) required for mode 'count'.");
                                            var o = n - 1,
                                                r = 100 / o;
                                            for (n = []; o--; ) n[o] = o * r;
                                            n.push(100), (t = "positions");
                                        }
                                        return "positions" === t
                                            ? n.map(function (e) {
                                                  return S.fromStepping(i ? S.getStep(e) : e);
                                              })
                                            : "values" === t
                                            ? i
                                                ? n.map(function (e) {
                                                      return S.fromStepping(S.getStep(S.toStepping(e)));
                                                  })
                                                : n
                                            : void 0;
                                    })(n, t.values || !1, t.stepped || !1),
                                    s = (function (e, t, n) {
                                        var i,
                                            o = {},
                                            r = S.xVal[0],
                                            s = S.xVal[S.xVal.length - 1],
                                            a = !1,
                                            l = !1,
                                            c = 0;
                                        return (
                                            (i = n.slice().sort(function (e, t) {
                                                return e - t;
                                            })),
                                            (n = i.filter(function (e) {
                                                return !this[e] && (this[e] = !0);
                                            }, {}))[0] !== r && (n.unshift(r), (a = !0)),
                                            n[n.length - 1] !== s && (n.push(s), (l = !0)),
                                            n.forEach(function (i, r) {
                                                var s,
                                                    d,
                                                    u,
                                                    p,
                                                    h,
                                                    f,
                                                    g,
                                                    m,
                                                    v,
                                                    y,
                                                    w = i,
                                                    b = n[r + 1],
                                                    x = "steps" === t;
                                                if ((x && (s = S.xNumSteps[r]), s || (s = b - w), !1 !== w && void 0 !== b))
                                                    for (s = Math.max(s, 1e-7), d = w; d <= b; d = (d + s).toFixed(7) / 1) {
                                                        for (m = (h = (p = S.toStepping(d)) - c) / e, y = h / (v = Math.round(m)), u = 1; u <= v; u += 1) o[(f = c + u * y).toFixed(5)] = [S.fromStepping(f), 0];
                                                        (g = n.indexOf(d) > -1 ? q : x ? D : P), !r && a && (g = 0), (d === b && l) || (o[p.toFixed(5)] = [d, g]), (c = p);
                                                    }
                                            }),
                                            o
                                        );
                                    })(i, n, r),
                                    a = t.format || { to: Math.round };
                                return (g = k.appendChild(V(s, o, a)));
                            }
                            function G() {
                                var e = p.getBoundingClientRect(),
                                    t = "offset" + ["Width", "Height"][o.ort];
                                return 0 === o.ort ? e.width || p[t] : e.height || p[t];
                            }
                            function J(e, t, n, i) {
                                var r = function (r) {
                                        return (
                                            !!(r = (function (e, t, n) {
                                                var i,
                                                    o,
                                                    r = 0 === e.type.indexOf("touch"),
                                                    s = 0 === e.type.indexOf("mouse"),
                                                    a = 0 === e.type.indexOf("pointer");
                                                if ((0 === e.type.indexOf("MSPointer") && (a = !0), r)) {
                                                    var l = function (e) {
                                                        return e.target === n || n.contains(e.target);
                                                    };
                                                    if ("touchstart" === e.type) {
                                                        var c = Array.prototype.filter.call(e.touches, l);
                                                        if (c.length > 1) return !1;
                                                        (i = c[0].pageX), (o = c[0].pageY);
                                                    } else {
                                                        var d = Array.prototype.find.call(e.changedTouches, l);
                                                        if (!d) return !1;
                                                        (i = d.pageX), (o = d.pageY);
                                                    }
                                                }
                                                return (t = t || u(A)), (s || a) && ((i = e.clientX + t.x), (o = e.clientY + t.y)), (e.pageOffset = t), (e.points = [i, o]), (e.cursor = s || a), e;
                                            })(r, i.pageOffset, i.target || t)) &&
                                            !(U() && !i.doNotReject) &&
                                            ((s = k),
                                            (a = o.cssClasses.tap),
                                            !((s.classList ? s.classList.contains(a) : new RegExp("\\b" + a + "\\b").test(s.className)) && !i.doNotReject) &&
                                                !(e === b.start && void 0 !== r.buttons && r.buttons > 1) &&
                                                (!i.hover || !r.buttons) &&
                                                (x || r.preventDefault(), (r.calcPoint = r.points[o.ort]), void n(r, i)))
                                        );
                                        var s, a;
                                    },
                                    s = [];
                                return (
                                    e.split(" ").forEach(function (e) {
                                        t.addEventListener(e, r, !!x && { passive: !0 }), s.push([e, r]);
                                    }),
                                    s
                                );
                            }
                            function Z(e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    a,
                                    l,
                                    c =
                                        (100 *
                                            (e -
                                                ((t = p),
                                                (n = o.ort),
                                                (i = t.getBoundingClientRect()),
                                                (r = t.ownerDocument),
                                                (a = r.documentElement),
                                                (l = u(r)),
                                                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                                                n ? i.top + l.y - a.clientTop : i.left + l.x - a.clientLeft))) /
                                        G();
                                return (c = s(c)), o.dir ? 100 - c : c;
                            }
                            function K(e, t) {
                                "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && ee(e, t);
                            }
                            function Q(e, t) {
                                if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return ee(e, t);
                                var n = (o.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
                                ce(n > 0, (100 * n) / t.baseSize, t.locations, t.handleNumbers);
                            }
                            function ee(e, t) {
                                t.handle && (d(t.handle, o.cssClasses.active), (_ -= 1)),
                                    t.listeners.forEach(function (e) {
                                        $.removeEventListener(e[0], e[1]);
                                    }),
                                    0 === _ && (d(k, o.cssClasses.drag), ue(), e.cursor && ((N.style.cursor = ""), N.removeEventListener("selectstart", i))),
                                    t.handleNumbers.forEach(function (e) {
                                        se("change", e), se("set", e), se("end", e);
                                    });
                            }
                            function te(e, t) {
                                if (t.handleNumbers.some(F)) return !1;
                                var n;
                                1 === t.handleNumbers.length && ((n = h[t.handleNumbers[0]].children[0]), (_ += 1), c(n, o.cssClasses.active)), e.stopPropagation();
                                var r = [],
                                    s = J(b.move, $, Q, {
                                        target: e.target,
                                        handle: n,
                                        listeners: r,
                                        startCalcPoint: e.calcPoint,
                                        baseSize: G(),
                                        pageOffset: e.pageOffset,
                                        handleNumbers: t.handleNumbers,
                                        buttonsProperty: e.buttons,
                                        locations: T.slice(),
                                    }),
                                    a = J(b.end, $, ee, { target: e.target, handle: n, listeners: r, doNotReject: !0, handleNumbers: t.handleNumbers }),
                                    l = J("mouseout", $, K, { target: e.target, handle: n, listeners: r, doNotReject: !0, handleNumbers: t.handleNumbers });
                                r.push.apply(r, s.concat(a, l)),
                                    e.cursor && ((N.style.cursor = getComputedStyle(e.target).cursor), h.length > 1 && c(k, o.cssClasses.drag), N.addEventListener("selectstart", i, !1)),
                                    t.handleNumbers.forEach(function (e) {
                                        se("start", e);
                                    });
                            }
                            function ne(e) {
                                e.stopPropagation();
                                var t = Z(e.calcPoint),
                                    n = (function (e) {
                                        var t = 100,
                                            n = !1;
                                        return (
                                            h.forEach(function (i, o) {
                                                if (!F(o)) {
                                                    var r = T[o],
                                                        s = Math.abs(r - e);
                                                    (s < t || (s <= t && e > r) || (100 === s && 100 === t)) && ((n = o), (t = s));
                                                }
                                            }),
                                            n
                                        );
                                    })(t);
                                if (!1 === n) return !1;
                                o.events.snap || r(k, o.cssClasses.tap, o.animationDuration),
                                    pe(n, t, !0, !0),
                                    ue(),
                                    se("slide", n, !0),
                                    se("update", n, !0),
                                    se("change", n, !0),
                                    se("set", n, !0),
                                    o.events.snap && te(e, { handleNumbers: [n] });
                            }
                            function ie(e) {
                                var t = Z(e.calcPoint),
                                    n = S.getStep(t),
                                    i = S.fromStepping(n);
                                Object.keys(L).forEach(function (e) {
                                    "hover" === e.split(".")[0] &&
                                        L[e].forEach(function (e) {
                                            e.call(v, i);
                                        });
                                });
                            }
                            function oe(e, t) {
                                (L[e] = L[e] || []),
                                    L[e].push(t),
                                    "update" === e.split(".")[0] &&
                                        h.forEach(function (e, t) {
                                            se("update", t);
                                        });
                            }
                            function re(e) {
                                var t = e && e.split(".")[0],
                                    n = t && e.substring(t.length);
                                Object.keys(L).forEach(function (e) {
                                    var i = e.split(".")[0],
                                        o = e.substring(i.length);
                                    (t && t !== i) || (n && n !== o) || delete L[e];
                                });
                            }
                            function se(e, t, n) {
                                Object.keys(L).forEach(function (i) {
                                    var r = i.split(".")[0];
                                    e === r &&
                                        L[i].forEach(function (e) {
                                            e.call(v, C.map(o.format.to), t, C.slice(), n || !1, T.slice());
                                        });
                                });
                            }
                            function ae(e, t, n, i, r, a) {
                                return (
                                    h.length > 1 && !o.events.unconstrained && (i && t > 0 && (n = Math.max(n, e[t - 1] + o.margin)), r && t < h.length - 1 && (n = Math.min(n, e[t + 1] - o.margin))),
                                    h.length > 1 && o.limit && (i && t > 0 && (n = Math.min(n, e[t - 1] + o.limit)), r && t < h.length - 1 && (n = Math.max(n, e[t + 1] - o.limit))),
                                    o.padding && (0 === t && (n = Math.max(n, o.padding[0])), t === h.length - 1 && (n = Math.min(n, 100 - o.padding[1]))),
                                    !((n = s((n = S.getStep(n)))) === e[t] && !a) && n
                                );
                            }
                            function le(e, t) {
                                var n = o.ort;
                                return (n ? t : e) + ", " + (n ? e : t);
                            }
                            function ce(e, t, n, i) {
                                var o = n.slice(),
                                    r = [!e, e],
                                    s = [e, !e];
                                (i = i.slice()),
                                    e && i.reverse(),
                                    i.length > 1
                                        ? i.forEach(function (e, n) {
                                              var i = ae(o, e, o[e] + t, r[n], s[n], !1);
                                              !1 === i ? (t = 0) : ((t = i - o[e]), (o[e] = i));
                                          })
                                        : (r = s = [!0]);
                                var a = !1;
                                i.forEach(function (e, i) {
                                    a = pe(e, n[e] + t, r[i], s[i]) || a;
                                }),
                                    a &&
                                        i.forEach(function (e) {
                                            se("update", e), se("slide", e);
                                        });
                            }
                            function de(e, t) {
                                return o.dir ? 100 - e - t : e;
                            }
                            function ue() {
                                E.forEach(function (e) {
                                    var t = T[e] > 50 ? -1 : 1,
                                        n = 3 + (h.length + t * e);
                                    h[e].style.zIndex = n;
                                });
                            }
                            function pe(e, t, n, i) {
                                return (
                                    !1 !== (t = ae(T, e, t, n, i, !1)) &&
                                    ((function (e, t) {
                                        (T[e] = t), (C[e] = S.fromStepping(t));
                                        var n = "translate(" + le(10 * (de(t, 0) - O) + "%", "0") + ")";
                                        (h[e].style[o.transformRule] = n), he(e), he(e + 1);
                                    })(e, t),
                                    !0)
                                );
                            }
                            function he(e) {
                                if (f[e]) {
                                    var t = 0,
                                        n = 100;
                                    0 !== e && (t = T[e - 1]), e !== f.length - 1 && (n = T[e]);
                                    var i = n - t,
                                        r = "translate(" + le(de(t, i) + "%", "0") + ")",
                                        s = "scale(" + le(i / 100, "1") + ")";
                                    f[e].style[o.transformRule] = r + " " + s;
                                }
                            }
                            function fe(e, t) {
                                return null === e || !1 === e || void 0 === e ? T[t] : ("number" == typeof e && (e = String(e)), (e = o.format.from(e)), !1 === (e = S.toStepping(e)) || isNaN(e) ? T[t] : e);
                            }
                            function ge(e, t) {
                                var n = a(e),
                                    i = void 0 === T[0];
                                (t = void 0 === t || !!t),
                                    o.animate && !i && r(k, o.cssClasses.tap, o.animationDuration),
                                    E.forEach(function (e) {
                                        pe(e, fe(n[e], e), !0, !1);
                                    });
                                for (var s = 1 === E.length ? 0 : 1; s < E.length; ++s)
                                    E.forEach(function (e) {
                                        pe(e, T[e], !0, !0);
                                    });
                                ue(),
                                    E.forEach(function (e) {
                                        se("update", e), null !== n[e] && t && se("set", e);
                                    });
                            }
                            function me() {
                                var e = C.map(o.format.to);
                                return 1 === e.length ? e[0] : e;
                            }
                            function ve(e) {
                                var t = T[e],
                                    n = S.getNearbySteps(t),
                                    i = C[e],
                                    r = n.thisStep.step,
                                    s = null;
                                if (o.snap) return [i - n.stepBefore.startValue || null, n.stepAfter.startValue - i || null];
                                !1 !== r && i + r > n.stepAfter.startValue && (r = n.stepAfter.startValue - i),
                                    (s = i > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && i - n.stepBefore.highestStep),
                                    100 === t ? (r = null) : 0 === t && (s = null);
                                var a = S.countStepDecimals();
                                return null !== r && !1 !== r && (r = Number(r.toFixed(a))), null !== s && !1 !== s && (s = Number(s.toFixed(a))), [s, r];
                            }
                            return (
                                c((y = k), o.cssClasses.target),
                                0 === o.dir ? c(y, o.cssClasses.ltr) : c(y, o.cssClasses.rtl),
                                0 === o.ort ? c(y, o.cssClasses.horizontal) : c(y, o.cssClasses.vertical),
                                (p = z(y, o.cssClasses.base)),
                                (function (e, t) {
                                    var n = z(t, o.cssClasses.connects);
                                    (h = []), (f = []).push(H(n, e[0]));
                                    for (var i = 0; i < o.handles; i++) h.push(j(t, i)), (E[i] = i), f.push(H(n, e[i + 1]));
                                })(o.connect, p),
                                (w = o.events).fixed ||
                                    h.forEach(function (e, t) {
                                        J(b.start, e.children[0], te, { handleNumbers: [t] });
                                    }),
                                w.tap && J(b.start, p, ne, {}),
                                w.hover && J(b.move, p, ie, { hover: !0 }),
                                w.drag &&
                                    f.forEach(function (e, t) {
                                        if (!1 !== e && 0 !== t && t !== f.length - 1) {
                                            var n = h[t - 1],
                                                i = h[t],
                                                r = [e];
                                            c(e, o.cssClasses.draggable),
                                                w.fixed && (r.push(n.children[0]), r.push(i.children[0])),
                                                r.forEach(function (e) {
                                                    J(b.start, e, te, { handles: [n, i], handleNumbers: [t - 1, t] });
                                                });
                                        }
                                    }),
                                ge(o.start),
                                o.pips && Y(o.pips),
                                o.tooltips && W(),
                                oe("update", function (e, t, n, i, r) {
                                    E.forEach(function (e) {
                                        var t = h[e],
                                            i = ae(T, e, 0, !0, !0, !0),
                                            s = ae(T, e, 100, !0, !0, !0),
                                            a = r[e],
                                            l = o.ariaFormat.to(n[e]);
                                        (i = S.fromStepping(i).toFixed(1)),
                                            (s = S.fromStepping(s).toFixed(1)),
                                            (a = S.fromStepping(a).toFixed(1)),
                                            t.children[0].setAttribute("aria-valuemin", i),
                                            t.children[0].setAttribute("aria-valuemax", s),
                                            t.children[0].setAttribute("aria-valuenow", a),
                                            t.children[0].setAttribute("aria-valuetext", l);
                                    });
                                }),
                                (v = {
                                    destroy: function () {
                                        for (var e in o.cssClasses) o.cssClasses.hasOwnProperty(e) && d(k, o.cssClasses[e]);
                                        for (; k.firstChild; ) k.removeChild(k.firstChild);
                                        delete k.noUiSlider;
                                    },
                                    steps: function () {
                                        return E.map(ve);
                                    },
                                    on: oe,
                                    off: re,
                                    get: me,
                                    set: ge,
                                    setHandle: function (t, n, i) {
                                        if (!((t = Number(t)) >= 0 && t < E.length)) throw new Error("noUiSlider (" + e + "): invalid handle number, got: " + t);
                                        pe(t, fe(n, t), !0, !0), se("update", t), i && se("set", t);
                                    },
                                    reset: function (e) {
                                        ge(o.start, e);
                                    },
                                    __moveHandles: function (e, t, n) {
                                        ce(e, t, T, n);
                                    },
                                    options: l,
                                    updateOptions: function (e, t) {
                                        var n = me(),
                                            i = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                                        i.forEach(function (t) {
                                            void 0 !== e[t] && (l[t] = e[t]);
                                        });
                                        var r = R(l);
                                        i.forEach(function (t) {
                                            void 0 !== e[t] && (o[t] = r[t]);
                                        }),
                                            (S = r.spectrum),
                                            (o.margin = r.margin),
                                            (o.limit = r.limit),
                                            (o.padding = r.padding),
                                            o.pips ? Y(o.pips) : X(),
                                            o.tooltips ? W() : B(),
                                            (T = []),
                                            ge(e.start || n, t);
                                    },
                                    target: k,
                                    removePips: X,
                                    removeTooltips: B,
                                    pips: Y,
                                })
                            );
                        }
                        return {
                            __spectrum: w,
                            version: e,
                            create: function (t, n) {
                                if (!t || !t.nodeName) throw new Error("noUiSlider (" + e + "): create requires a single element, got: " + t);
                                if (t.noUiSlider) throw new Error("noUiSlider (" + e + "): Slider was already initialized.");
                                var i = F(t, R(n), n);
                                return (t.noUiSlider = i), i;
                            },
                        };
                    })
                        ? i.apply(t, o)
                        : i) || (e.exports = r);
    },
    function (e, t, n) {
        n(14), (e.exports = n(53));
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                n(15), n(16);
                var t = n(12),
                    i = n.n(t);
                n(19), n(21), n(22), n(24), n(30), n(31), n(32);
                function o(e) {
                    return (o =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                var r = n(34);
                (window.fireChange = function (e) {
                    if ("createEvent" in document) {
                        var t = document.createEvent("HTMLEvents");
                        t.initEvent("change", !1, !0), e.dispatchEvent(t);
                    } else e.fireEvent("onchange");
                }),
                    (window.unwrap = function (e) {
                        for (var t = document.createDocumentFragment(); e.firstChild; ) {
                            var n = e.removeChild(e.firstChild);
                            t.appendChild(n);
                        }
                        e.parentNode.replaceChild(t, e);
                    }),
                    (window.serialize = function (e) {
                        var t,
                            n,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = [];
                        if ("object" === o(e) && "FORM" === e.nodeName)
                            for (var s = e.elements.length, a = 0; a < s; a++)
                                if ((t = e.elements[a]).name && !t.disabled && "button" !== t.type && "file" !== t.type && "reset" !== t.type && "submit" !== t.type)
                                    if ("select-multiple" === t.type) {
                                        n = e.elements[a].options.length;
                                        for (var l = 0; l < n; l++) t.options[l].selected && (r[r.length] = encodeURIComponent(t.name) + "=" + encodeURIComponent(t.options[l].value));
                                    } else (("checkbox" !== t.type && "radio" !== t.type) || t.checked) && (r[r.length] = encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value));
                        var c = decodeURI(r.join("&").replace(/%20/g, "+"));
                        return i ? JSON.parse('{"' + decodeURI(c).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace("%40", "@") + '"}') : c;
                    }),
                    (window.pushNotice = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                            n = document.getElementById("ajax-notice"),
                            i = document.createElement("div");
                        i.classList.add("alert-" + t),
                            (i.innerHTML = e),
                            n &&
                                (n.appendChild(i),
                                n.classList.add("show"),
                                setTimeout(function () {
                                    n.removeChild(i), n.childNodes.length < 2 && n.classList.remove("show");
                                }, 3e3));
                    }),
                    document.addEventListener("DOMContentLoaded", function () {
                        var t = document.querySelectorAll('[name="telephone"]');
                        t.length &&
                            t.forEach(function (t) {
                                e(t).mask("+38 (000) 000-0000", { placeholder: "+38 (___) ___-____" });
                            });
                        var n = document.getElementById("one-click-form-wrapper"),
                            o = document.querySelector(".one-click-button"),
                            s = document.getElementById("close-one-click-form");
                        if (n && o) {
                            o.addEventListener("click", function (e) {
                                n.classList.add("show"), o.parentNode.classList.add("hide");
                            }),
                                s.addEventListener("click", function (e) {
                                    n.classList.remove("show"), o.parentNode.classList.remove("hide");
                                });
                            var a = n.querySelector("form");
                            a.addEventListener("submit", function (e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = a.querySelector('[name="name"]'),
                                    i = a.querySelector('[name="telephone"]'),
                                    o = a.querySelector('[name="product_id"]').value,
                                    s = !1;
                                t.value.length < 3 ? (t.classList.add("has-error"), (s = !0)) : t.classList.remove("has-error"),
                                    i.value.length < 17 ? (i.classList.add("has-error"), (s = !0)) : i.classList.remove("has-error"),
                                    s ||
                                        r
                                            .post("index.php?route=product/product/oneClickBuy&name=" + t.value + "&telephone=" + i.value + "&product_id=" + o)
                                            .then(function (e) {
                                                e.data.success
                                                    ? (n.innerHTML =
                                                          '\n                            <div class="page-notice">\n                                <div class="alert-success"><i class="fa fa-check-circle"></i> Дякуємо за покупку! Ми отримали ваше повідомлення, очікуйте дзвінка.\n                                    <button onclick="window.removeParentNode(this)" type="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>\n                                </div>\n                            </div>\n                        ')
                                                    : (n.innerHTML =
                                                          '\n                            <div class="page-notice">\n                                <div class="alert-danger"><i class="fa fa-check-circle"></i> Помилка сервера. Спробуйте пізніше.\n                                    <button onclick="window.removeParentNode(this)" type="button"><i class="fa fa-times-circle" aria-hidden="true"></i></button>\n                                </div>\n                            </div>\n                        ');
                                            })
                                            .catch(function (e) {
                                                console.log(e);
                                            });
                            });
                        }
                        var l = document.getElementById("main-header"),
                            c = l.offsetHeight + "px";
                        l &&
                            document.addEventListener("scroll", function () {
                                (window.pageYOffset || document.documentElement.scrollTop) > l.offsetHeight
                                    ? ((document.body.style.paddingTop = c), l.classList.add("fixed"))
                                    : ((document.body.style.paddingTop = ""), l.classList.remove("fixed"));
                            });
                        var d = document.getElementById("homepage-carousel");
                        d &&
                            e(d).owlCarousel({
                                items: 1,
                                onInitialized: function (e) {
                                    for (var t = e.target.querySelectorAll(".owl-dots button"), n = e.target.querySelectorAll("[data-preview]"), i = 0; i < n.length; i++) t[i].style.backgroundImage = "url(" + n[i].dataset.preview + ")";
                                },
                            });
                        var u = document.querySelectorAll(".header-categories .category");
                        u.length &&
                            u.forEach(function (t) {
                                var n = t.querySelector(".menu-category-carousel");
                                n &&
                                    (t.addEventListener("mouseenter", function () {
                                        e(n).owlCarousel({
                                            items: parseInt(n.dataset.items),
                                            autoplay: !0,
                                            stagePadding: 15,
                                            margin: 15,
                                            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                        });
                                    }),
                                    t.addEventListener("mouseleave", function () {
                                        e(n).trigger("destroy.owl.carousel").removeClass("owl-loaded");
                                    }));
                            });
                        var p = document.getElementById("our-blog-posts-carousel");
                        p && e(p).owlCarousel({ items: 3, autoplay: !0, nav: !0 });
                        var h = document.getElementById("scroll-to-top");
                        h &&
                            (h.addEventListener("click", function () {
                                !(function e() {
                                    var t = document.documentElement.scrollTop || document.body.scrollTop;
                                    t > 0 && (window.requestAnimationFrame(e), window.scrollTo(0, t - t / 5));
                                })();
                            }),
                            document.addEventListener("scroll", function () {
                                window.scrollY > window.innerHeight ? h.classList.add("active") : h.classList.remove("active");
                            }));
                        var f = document.querySelectorAll(".block-content-title.toggle");
                        f.length &&
                            f.forEach(function (e) {
                                var t = e.querySelector(".caret");
                                t &&
                                    t.addEventListener("click", function (t) {
                                        e.classList.contains("open") ? e.classList.remove("open") : e.classList.add("open");
                                    });
                            });
                        var g = document.getElementById("categories-filter-price");
                        if (g) {
                            var m = g.parentNode.querySelector("[data-range-min]"),
                                v = g.parentNode.querySelector("[data-range-max]");
                            if (parseInt(m.dataset.rangeMin) === parseInt(v.dataset.rangeMax)) {
                                var y = e.query;
                                return (y = (y = y.REMOVE("min_price")).REMOVE("max_price")), void history.pushState(null, null, decodeURIComponent(location.origin + location.pathname + y.toString()));
                            }
                            i.a.create(g, { range: { min: parseInt(m.dataset.rangeMin), max: parseInt(v.dataset.rangeMax) }, step: 10, start: [parseInt(m.dataset.min), parseInt(v.dataset.max)], connect: !0 }),
                                g.noUiSlider.on("update", function (t, n) {
                                    var i = e.query;
                                    (m.value = parseInt(t[0]) + " грн"),
                                        (i = i.set("min_price", parseInt(t[0]))),
                                        (v.value = parseInt(t[1]) + " грн"),
                                        (i = i.set("max_price", parseInt(t[1]))),
                                        history.pushState(null, null, decodeURIComponent(location.origin + location.pathname + i.toString()));
                                });
                        }
                        var w = document.querySelectorAll(".catalog-content-wrapper");
                        if (w.length) {
                            var b = document.querySelector(".categories-filter .action-toggle-side-bar");
                            b &&
                                b.addEventListener("click", function (e) {
                                    var t = document.querySelector(".catalog-content-wrapper .action-toggle-side-bar"),
                                        n = document.getElementById("side-bar"),
                                        i = document.querySelector(".catalog-content-wrapper .action-show-list"),
                                        o = document.querySelectorAll(".catalog-content-wrapper .custom-column.column-4");
                                    n.classList.add("hide"),
                                        t.classList.add("active"),
                                        o &&
                                            o.forEach(function (e) {
                                                i.classList.contains("active") || (e.classList.remove("column-4"), e.classList.add("column-3"));
                                            });
                                }),
                                w.forEach(function (e) {
                                    var t = e.querySelector(".action-toggle-side-bar"),
                                        n = e.querySelector(".action-show-list"),
                                        i = e.querySelector(".action-show-grid"),
                                        o = document.getElementById("side-bar"),
                                        r = e.querySelectorAll(".custom-column.column-4");
                                    t &&
                                        o &&
                                        (t.addEventListener("click", function () {
                                            t.classList.contains("active")
                                                ? (o.classList.remove("hide"),
                                                  t.classList.remove("active"),
                                                  r &&
                                                      r.forEach(function (e) {
                                                          n.classList.contains("active") || (e.classList.remove("column-3"), e.classList.add("column-4"));
                                                      }))
                                                : (o.classList.add("hide"),
                                                  t.classList.add("active"),
                                                  r &&
                                                      r.forEach(function (e) {
                                                          n.classList.contains("active") || (e.classList.remove("column-4"), e.classList.add("column-3"));
                                                      }));
                                        }),
                                        window.innerWidth < 768 && !o.classList.contains("hide")
                                            ? (o.classList.add("hide"),
                                              t.classList.add("active"),
                                              r &&
                                                  r.forEach(function (e) {
                                                      n.classList.contains("active") || (e.classList.remove("column-4"), e.classList.add("column-3"));
                                                  }))
                                            : (o.classList.remove("hide"),
                                              t.classList.remove("active"),
                                              r &&
                                                  r.forEach(function (e) {
                                                      n.classList.contains("active") || (e.classList.remove("column-3"), e.classList.add("column-4"));
                                                  }))),
                                        n &&
                                            n.addEventListener("click", function () {
                                                n.classList.contains("active") ||
                                                    (r &&
                                                        r.forEach(function (e) {
                                                            e.classList.remove("column-3"),
                                                                e.classList.remove("column-4"),
                                                                e.classList.add("column-12"),
                                                                e.querySelector(".homepage-product-card") && e.querySelector(".homepage-product-card").classList.add("list");
                                                        }),
                                                    n.classList.add("active"),
                                                    i && i.classList.remove("active"));
                                            }),
                                        i &&
                                            i.addEventListener("click", function () {
                                                i.classList.contains("active") ||
                                                    (r &&
                                                        r.forEach(function (e) {
                                                            e.classList.remove("column-12"),
                                                                e.querySelector(".homepage-product-card") && e.querySelector(".homepage-product-card").classList.remove("list"),
                                                                o.classList.contains("hide") ? e.classList.add("column-3") : e.classList.add("column-4");
                                                        }),
                                                    i.classList.add("active"),
                                                    n && n.classList.remove("active"));
                                            });
                                });
                        }
                        var x = document.getElementById("product-page-slider-preview"),
                            k = document.getElementById("product-page-slider-navigation");
                        x &&
                            k &&
                            (e(x).slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, asNavFor: k }),
                            e(k).slick({ slidesToShow: 4, slidesToScroll: 1, asNavFor: x, dots: !1, arrows: !1, focusOnSelect: !0, centerPadding: 10, infinite: !1 }));
                        var S = document.querySelectorAll(".tab-container");
                        S.length &&
                            S.forEach(function (e) {
                                var t = e.querySelectorAll(".tab-head li"),
                                    n = e.querySelectorAll(".tab-content > div");
                                t.forEach(function (e) {
                                    e.addEventListener("click", function () {
                                        e.classList.contains("active") ||
                                            (t.forEach(function (t) {
                                                t === e ? t.classList.add("active") : t.classList.remove("active");
                                            }),
                                            n.forEach(function (t) {
                                                t.dataset.tab === e.dataset.tab ? t.classList.add("active") : t.classList.remove("active");
                                            }));
                                    });
                                });
                            });
                        var C = document.getElementById("product-related-products");
                        C &&
                            e(C).owlCarousel({
                                items: 4,
                                nav: !0,
                                stagePadding: 15,
                                responsive: { 0: { items: 3, autoWidth: !0, autoplay: !0, loop: !0 }, 992: { items: 4 } },
                                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                            }),
                            (window.initMap = function () {
                                var e = document.getElementById("google-contact-map");
                                if (e) {
                                    var t = new google.maps.Map(e, { center: new google.maps.LatLng(48.914816, 24.6764), zoom: 18 });
                                    new google.maps.Marker({ position: new google.maps.LatLng(48.914816, 24.6764), icon: location.origin + "/image/catalog/main-logo.png", map: t });
                                }
                            }),
                            (window.getCartProducts = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return new Promise(function (t) {
                                    r.post("index.php?route=checkout/cart/getCartProducts" + (e ? "&checkout" : ""))
                                        .then(function (e) {
                                            setTimeout(function () {
                                                var n = document.querySelectorAll("[data-load-cart-products]"),
                                                    i = document.querySelector(".page-notice");
                                                if ((i && (i.innerHTML = ""), i && e.data.error_warning)) {
                                                    var o = document.createElement("div");
                                                    o.classList.add("alert-danger");
                                                    var r = document.createElement("button");
                                                    (r.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'),
                                                        r.setAttribute("onclick", "window.removeParentNode(this)"),
                                                        (o.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + e.data.error_warning),
                                                        o.appendChild(r),
                                                        i.appendChild(o);
                                                }
                                                if (i && e.data.attention) {
                                                    var s = document.createElement("div");
                                                    s.classList.add("alert-warning");
                                                    var a = document.createElement("button");
                                                    (a.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'),
                                                        a.setAttribute("onclick", "window.removeParentNode(this)"),
                                                        (s.innerHTML = '<i class="fa fa-info-circle" aria-hidden="true"></i> ' + e.data.attention),
                                                        s.appendChild(a),
                                                        i.appendChild(s);
                                                }
                                                if (i && e.data.success) {
                                                    var l = document.createElement("div");
                                                    l.classList.add("alert-success");
                                                    var c = document.createElement("button");
                                                    (c.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'),
                                                        c.setAttribute("onclick", "window.removeParentNode(this)"),
                                                        (l.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> ' + e.data.success),
                                                        l.appendChild(c),
                                                        i.appendChild(l);
                                                }
                                                n.length &&
                                                    n.forEach(function (t) {
                                                        return (t.innerHTML = e.data.html);
                                                    }),
                                                    t();
                                            }, 500);
                                        })
                                        .catch(function (e) {
                                            console.log(e);
                                        });
                                });
                            }),
                            (window.getCartTotals = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return new Promise(function (t) {
                                    r.post("index.php?route=checkout/cart/getCartTotals" + (e ? "&checkout" : ""))
                                        .then(function (e) {
                                            setTimeout(function () {
                                                var n = document.querySelectorAll("[data-load-cart-totals]");
                                                n.length &&
                                                    n.forEach(function (t) {
                                                        return (t.innerHTML = e.data.html);
                                                    }),
                                                    t();
                                            }, 500);
                                        })
                                        .catch(function (e) {
                                            console.log(e);
                                        });
                                });
                            }),
                            (window.getShippingAndPaymentAddresses = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return new Promise(function (t) {
                                    r.get("index.php?route=checkout/payment_address" + (e ? "&checkout" : ""))
                                        .then(function (e) {
                                            setTimeout(function () {
                                                if (e.data) {
                                                    var n = document.querySelectorAll("[data-load-payment-and-shipping-addresses]");
                                                    n.length &&
                                                        n.forEach(function (t) {
                                                            t.innerHTML = e.data;
                                                        }),
                                                        t(n);
                                                }
                                            }, 500);
                                        })
                                        .catch(function (e) {
                                            console.log(e);
                                        });
                                });
                            }),
                            (window.getShippingMethods = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return new Promise(function (t) {
                                    r.get("index.php?route=checkout/shipping_method" + (e ? "&checkout" : ""))
                                        .then(function (e) {
                                            if (e.data) {
                                                var n = document.querySelectorAll("[data-load-shipping-methods]");
                                                n.length &&
                                                    n.forEach(function (t) {
                                                        return (t.innerHTML = e.data);
                                                    }),
                                                    setTimeout(function () {
                                                        window.saveShippingMethod(null, document.querySelector('[name="shipping_method"]:checked')), t();
                                                    }, 500);
                                            }
                                        })
                                        .catch(function (e) {
                                            console.log(e);
                                        });
                                });
                            }),
                            (window.getPaymentMethods = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return new Promise(function (t) {
                                    r.get("index.php?route=checkout/payment_method" + (e ? "&checkout" : ""))
                                        .then(function (e) {
                                            if (e.data) {
                                                var n = document.querySelectorAll("[data-load-payment-methods]");
                                                n.length &&
                                                    n.forEach(function (t) {
                                                        return (t.innerHTML = e.data);
                                                    }),
                                                    window.savePaymentMethod(null, document.querySelector('[name="payment_method"]:checked')).then(function () {
                                                        setTimeout(function () {
                                                            t();
                                                        }, 500);
                                                    });
                                            }
                                        })
                                        .catch(function (e) {
                                            console.log(e);
                                        });
                                });
                            });
                        var T = document.querySelector('[name="product-page-quantity"]');
                        T &&
                            T.addEventListener("input", function () {
                                var e = parseFloat(T.dataset.price) * parseInt(T.value);
                                e &&
                                    ((T.disabled = !0),
                                    r
                                        .get("index.php?route=checkout/cart/getPrice&price=" + e)
                                        .then(function (e) {
                                            ((T.disabled = !1), e.data && e.data.price) && (document.querySelector("[data-product-total]").textContent = e.data.price);
                                        })
                                        .catch(function (e) {
                                            (T.disabled = !1), console.log(e);
                                        }));
                            }),
                            (window.addToCart = function (e, t) {
                                if (parseInt(t)) {
                                    e.disabled = !0;
                                    var n = 1,
                                        i = document.querySelector('[name="product-page-quantity"]');
                                    i && i.value && (n = i.value),
                                        r
                                            .post("index.php?route=checkout/cart/add", "product_id=" + t + "&quantity=" + n)
                                            .then(function (t) {
                                                if (((e.disabled = !1), t.data && t.data.success)) {
                                                    window.pushNotice(t.data.success), e.classList.add("added");
                                                    var n = document.querySelectorAll(".cart-count span");
                                                    n.length &&
                                                        n.forEach(function (e) {
                                                            e.parentNode.classList.add("show"),
                                                                e.parentNode.classList.add("active"),
                                                                (e.textContent = t.data.total),
                                                                setTimeout(function () {
                                                                    e.parentNode.classList.remove("show");
                                                                }, 1e3);
                                                        });
                                                }
                                            })
                                            .catch(function (t) {
                                                (e.disabled = !1), console.log(t);
                                            });
                                }
                            }),
                            (window.removeFromCart = function (e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                parseInt(t) &&
                                    ((e.disabled = !0),
                                    r
                                        .post("index.php?route=checkout/cart/remove", "key=" + t)
                                        .then(function (t) {
                                            (e.disabled = !1), t.data && t.data.success && (window.pushNotice(t.data.success), window.getCartProducts(n), window.getCartTotals());
                                        })
                                        .catch(function (t) {
                                            (e.disabled = !1), console.log(t);
                                        }));
                            }),
                            (window.updateQuantityProductCart = function (e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                parseInt(t) &&
                                    ((e.disabled = !0),
                                    r
                                        .post("index.php?route=checkout/cart/edit", "key=" + t + "&quantity=" + e.value)
                                        .then(function (t) {
                                            (e.disabled = !1),
                                                t.data && t.data.success && (window.pushNotice(t.data.success), window.getCartProducts(n), n && (window.getShippingMethods(!0), window.getPaymentMethods(!0)), window.getCartTotals());
                                        })
                                        .catch(function (t) {
                                            (e.disabled = !1), console.log(t);
                                        }));
                            }),
                            (window.addToFavorite = function (e, t) {
                                var n = e.querySelector("i");
                                parseInt(t) &&
                                    ((e.disabled = !0),
                                    r
                                        .post("index.php?route=account/wishlist/add", "product_id=" + t)
                                        .then(function (t) {
                                            if (((e.disabled = !1), t.data && t.data.success)) {
                                                window.pushNotice(t.data.success), e.classList.add("added"), n && (n.classList.remove("fa-heart-o"), n.classList.add("fa-heart"));
                                                var i = document.querySelectorAll(".wish-list-count span");
                                                i.length &&
                                                    i.forEach(function (e) {
                                                        e.parentNode.classList.add("show"),
                                                            e.parentNode.classList.add("active"),
                                                            (e.textContent = t.data.total),
                                                            setTimeout(function () {
                                                                e.parentNode.classList.remove("show");
                                                            }, 1e3);
                                                    });
                                            }
                                        })
                                        .catch(function (t) {
                                            (e.disabled = !1), console.log(t);
                                        }));
                            }),
                            (window.removeFromFavorite = function (e, t) {
                                parseInt(t) &&
                                    ((e.disabled = !0),
                                    r
                                        .get("index.php?route=account/wishlist&remove=" + t)
                                        .then(function (t) {
                                            if (((e.disabled = !1), t.data && t.data.success)) {
                                                e.parentNode.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode.parentNode), window.pushNotice(t.data.success);
                                                var n = document.querySelectorAll(".wish-list-count span");
                                                n.length &&
                                                    n.forEach(function (e) {
                                                        e.parentNode.classList.add("show"),
                                                            e.parentNode.classList.add("active"),
                                                            (e.textContent = t.data.total),
                                                            setTimeout(function () {
                                                                e.parentNode.classList.remove("show");
                                                            }, 1e3);
                                                    });
                                            }
                                        })
                                        .catch(function (t) {
                                            (e.disabled = !1), console.log(t);
                                        }));
                            }),
                            (window.addToCompare = function (e, t) {
                                var n = e.querySelector("i");
                                parseInt(t) &&
                                    ((e.disabled = !0),
                                    r
                                        .post("index.php?route=product/compare/add", "product_id=" + t)
                                        .then(function (t) {
                                            if (((e.disabled = !1), t.data && t.data.success)) {
                                                window.pushNotice(t.data.success), e.classList.add("added"), n && (n.classList.remove("fa-compress"), n.classList.add("fa-check"));
                                                var i = document.querySelectorAll(".compare-count span");
                                                i.length &&
                                                    i.forEach(function (e) {
                                                        e.parentNode.classList.add("show"),
                                                            e.parentNode.classList.add("active"),
                                                            (e.textContent = t.data.total),
                                                            setTimeout(function () {
                                                                e.parentNode.classList.remove("show");
                                                            }, 1e3);
                                                    });
                                            }
                                        })
                                        .catch(function (t) {
                                            (e.disabled = !1), console.log(t);
                                        }));
                            }),
                            (window.removeParentNode = function (e) {
                                e.parentNode.parentNode.removeChild(e.parentNode);
                            });
                        var E = document.querySelectorAll("[xoriginal]");
                        E.length &&
                            E.forEach(function (t) {
                                e(t).xzoom({ position: "lens", lensShape: "circle", bg: !0, adaptive: !1, defaultScale: 1 });
                            });
                        var _ = document.querySelectorAll(".checkout-stages-head button"),
                            L = document.querySelectorAll(".checkout-stages > div");
                        if (_.length && L.length) {
                            var A = document.querySelector('.checkout-stages-head [data-stage="identification"]'),
                                $ = document.querySelector('.checkout-stages-head [data-stage="billing-and-shipping"]'),
                                N = document.querySelector('.checkout-stages [data-stage="identification"]'),
                                M = document.querySelector('.checkout-stages [data-stage="billing-and-shipping"]');
                            A.addEventListener("click", function () {
                                A.classList.contains("logged")
                                    ? ((A.disabled = !0), ($.disabled = !1), $.click())
                                    : r
                                          .get("index.php?route=checkout/login")
                                          .then(function (e) {
                                              e.data && ((N.innerHTML = e.data), (N.style.display = "block"), A.classList.add("active"));
                                          })
                                          .catch(function (e) {
                                              console.log(e);
                                          });
                            }),
                                $.addEventListener("click", function () {
                                    window.getShippingAndPaymentAddresses(!0).then(function (e) {
                                        return e.forEach(function (e) {
                                            var t = e.querySelector('form input[type="submit"]');
                                            t && t.click();
                                        });
                                    }),
                                        (M.style.display = "block"),
                                        $.classList.add("active");
                                }),
                                A.click();
                        }
                        (window.guestOrder = function (e) {
                            var t = document.querySelector('.checkout-stages-head [data-stage="identification"]'),
                                n = document.querySelector('.checkout-stages-head [data-stage="billing-and-shipping"]'),
                                i = document.querySelector('.checkout-stages [data-stage="identification"]');
                            (i.innerHTML = ""), (i.style.display = "none"), t.classList.remove("active"), (n.disabled = !1), n.click();
                        }),
                            (window.login = function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                e.preventDefault();
                                var n = e.currentTarget,
                                    i = window.serialize(n, !0),
                                    o = n.querySelector('[type="submit"]'),
                                    s = t ? "index.php?route=checkout/login/save" : "index.php?route=account/login";
                                n.querySelectorAll(".has-error").forEach(function (e) {
                                    return e.classList.remove("has-error");
                                }),
                                    i["login-email"] && i["login-email"].length && i["login-password"] && i["login-password"].length
                                        ? ((o.disabled = !0),
                                          o.classList.add("loading"),
                                          r
                                              .post(s, "email=" + i["login-email"] + "&password=" + i["login-password"])
                                              .then(function (e) {
                                                  (o.disabled = !1), o.classList.remove("loading"), e.data.error ? e.data.error.warning && window.pushNotice(e.data.error.warning, "warning") : e.data.redirect && location.reload();
                                              })
                                              .catch(function (e) {
                                                  (o.disabled = !1), o.classList.remove("loading"), console.log(e);
                                              }))
                                        : (i["login-email"] || n.querySelector('[name="login-email"]').classList.add("has-error"), i["login-password"] || n.querySelector('[name="login-password"]').classList.add("has-error"));
                            }),
                            (window.register = function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                e.preventDefault();
                                var n = e.currentTarget,
                                    i = window.serialize(n, !0),
                                    o = n.querySelector('[type="submit"]'),
                                    s = t ? "index.php?route=checkout/register/save" : "index.php?route=account/register";
                                if (
                                    (n.querySelectorAll(".has-error").forEach(function (e) {
                                        return e.classList.remove("has-error");
                                    }),
                                    i["register-email"] && i["register-email"].length && i["register-password"] && i["register-password"].length)
                                ) {
                                    var a = new FormData();
                                    a.append("customer_group_id", "1"),
                                        a.append("firstname", i["register-firstname"] || ""),
                                        a.append("lastname", i["register-lastname"] || ""),
                                        a.append("email", i["register-email"]),
                                        a.append("telephone", i["register-telephone"] || ""),
                                        a.append("password", i["register-password"]),
                                        a.append("confirm", i["register-confirm"]),
                                        a.append("company", ""),
                                        a.append("address_1", ""),
                                        a.append("address_2", ""),
                                        a.append("city", ""),
                                        a.append("postcode", ""),
                                        a.append("country_id", "220"),
                                        a.append("zone_id", ""),
                                        a.append("shipping_address", ""),
                                        i["register-agree"] && a.append("agree", "1"),
                                        (o.disabled = !0),
                                        o.classList.add("loading"),
                                        n.querySelectorAll(".text-danger").forEach(function (e) {
                                            return e.parentNode.removeChild(e);
                                        }),
                                        r({ method: "post", url: s, data: a, headers: { "Content-Type": "multipart/form-data" } })
                                            .then(function (e) {
                                                (o.disabled = !1),
                                                    o.classList.remove("loading"),
                                                    e.data.error
                                                        ? (e.data.error.warning && window.pushNotice(e.data.error.warning, "warning"),
                                                          Object.keys(e.data.error).forEach(function (t) {
                                                              var i = n.querySelector('[name="register-' + t + '"]'),
                                                                  o = e.data.error[t],
                                                                  r = document.createElement("div");
                                                              r.classList.add("text-danger"), (r.innerHTML = o), i && ("checkbox" === i.type || "radio" === i.type ? i.parentNode.appendChild(r) : i.parentNode.insertBefore(r, i.nextSibling));
                                                          }))
                                                        : location.reload();
                                            })
                                            .catch(function (e) {
                                                (o.disabled = !1), o.classList.remove("loading"), console.log(e);
                                            });
                                } else i["login-email"] || n.querySelector('[name="register-email"]').classList.add("has-error"), i["login-password"] || n.querySelector('[name="register-password"]').classList.add("has-error");
                            }),
                            (window.savePaymentAndShipping = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return new Promise(function (i) {
                                    e && e.preventDefault();
                                    var o = e ? e.currentTarget : t,
                                        s = o.querySelector(".form-submit-button"),
                                        a = window.serialize(o, !0),
                                        l = new FormData();
                                    a.address_id && (l.append("address_id", a.address_id), l.append("payment_address", "existing"), l.append("shipping_address", "existing")),
                                        l.append("firstname", a["payment-firstname"]),
                                        l.append("lastname", a["payment-lastname"]),
                                        l.append("company", ""),
                                        l.append("address_1", ""),
                                        l.append("address_2", ""),
                                        l.append("city", ""),
                                        l.append("postcode", ""),
                                        l.append("country_id", a["payment-country"]),
                                        l.append("zone_id", a["payment-zone"]),
                                        l.append("email", a["payment-email"]),
                                        l.append("telephone", a["payment-telephone"]),
                                        o.querySelectorAll(".text-danger").forEach(function (e) {
                                            return e.parentNode.removeChild(e);
                                        }),
                                        a.guest
                                            ? (l.append("shipping_address", "1"),
                                              setTimeout(function () {
                                                  r({ method: "post", url: "index.php?route=checkout/guest/save", data: l, headers: { "Content-Type": "multipart/form-data" } })
                                                      .then(function (e) {
                                                          e.data.error
                                                              ? (e.data.error.warning && window.pushNotice(e.data.error.warning, "warning"),
                                                                Object.keys(e.data.error).forEach(function (t) {
                                                                    var n = o.querySelector('[name="payment-' + t + '"]'),
                                                                        i = e.data.error[t],
                                                                        r = document.createElement("div");
                                                                    r.classList.add("text-danger"),
                                                                        (r.innerHTML = i),
                                                                        n && ("checkbox" === n.type || "radio" === n.type ? n.parentNode.appendChild(r) : n.parentNode.insertBefore(r, n.nextSibling));
                                                                }))
                                                              : setTimeout(function () {
                                                                    n
                                                                        ? i()
                                                                        : (s && s.parentNode.removeChild(s),
                                                                          window.getCartProducts(!0).then(function () {
                                                                              window.getShippingMethods(!0).then(function () {
                                                                                  window.getPaymentMethods(!0).then(function () {
                                                                                      window.getCartTotals(!0).then(function () {
                                                                                          (document.getElementById("checkout-order-action").parentNode.style.display = "block"), i();
                                                                                      });
                                                                                  });
                                                                              });
                                                                          }));
                                                                }, 500);
                                                      })
                                                      .catch(function (e) {
                                                          console.log(e);
                                                      });
                                              }, 1e3))
                                            : r({ method: "post", url: "index.php?route=checkout/payment_address/save", data: l, headers: { "Content-Type": "multipart/form-data" } })
                                                  .then(function (e) {
                                                      if (e.data.error)
                                                          e.data.error.warning && window.pushNotice(e.data.error.warning, "warning"),
                                                              Object.keys(e.data.error).forEach(function (t) {
                                                                  var n = o.querySelector('[name="payment-' + t + '"]'),
                                                                      i = e.data.error[t],
                                                                      r = document.createElement("div");
                                                                  r.classList.add("text-danger"),
                                                                      (r.innerHTML = i),
                                                                      n && ("checkbox" === n.type || "radio" === n.type ? n.parentNode.appendChild(r) : n.parentNode.insertBefore(r, n.nextSibling));
                                                              });
                                                      else if (e.data.address_id) {
                                                          l.append("address_id", e.data.address_id), l.append("payment_address", "existing"), l.append("shipping_address", "existing");
                                                          var t = document.createElement("input");
                                                          (t.type = "hidden"),
                                                              (t.name = "address_id"),
                                                              (t.value = e.data.address_id),
                                                              o.appendChild(t),
                                                              r({ method: "post", url: "index.php?route=checkout/shipping_address/save", data: l, headers: { "Content-Type": "multipart/form-data" } })
                                                                  .then(function (e) {
                                                                      e.data.error
                                                                          ? (e.data.error.warning && window.pushNotice(e.data.error.warning, "warning"),
                                                                            Object.keys(e.data.error).forEach(function (t) {
                                                                                var n = o.querySelector('[name="payment-' + t + '"]'),
                                                                                    i = e.data.error[t],
                                                                                    r = document.createElement("div");
                                                                                r.classList.add("text-danger"),
                                                                                    (r.innerHTML = i),
                                                                                    n && ("checkbox" === n.type || "radio" === n.type ? n.parentNode.appendChild(r) : n.parentNode.insertBefore(r, n.nextSibling));
                                                                            }))
                                                                          : (n ||
                                                                                (s && s.parentNode.removeChild(s),
                                                                                window.getCartProducts(!0),
                                                                                window.getShippingMethods(!0),
                                                                                window.getPaymentMethods(!0),
                                                                                window.getCartTotals(!0),
                                                                                (document.getElementById("checkout-order-action").parentNode.style.display = "block")),
                                                                            i());
                                                                  })
                                                                  .catch(function (e) {
                                                                      console.log(e);
                                                                  });
                                                      }
                                                  })
                                                  .catch(function (e) {
                                                      console.log(e);
                                                  });
                                });
                            }),
                            (window.saveShippingMethod = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return new Promise(function (i, o) {
                                    var s = document.querySelector(".novaposhta-shipping"),
                                        a = e ? e.currentTarget : t,
                                        l = new FormData();
                                    if ("flat.flat" === a.value) {
                                        s && (s.style.display = "block");
                                        var c = document.getElementById("novaposhta-warehouse-select");
                                        c.value.length > 1 ? (c.classList.remove("required"), l.append("warehouse", JSON.stringify(JSON.parse(c.value)))) : c.classList.add("required");
                                    } else s && (s.style.display = "none");
                                    l.append("shipping_method", a.value),
                                        r({ method: "post", url: "index.php?route=checkout/shipping_method/save", data: l, headers: { "Content-Type": "application/json" } })
                                            .then(function (e) {
                                                setTimeout(function () {
                                                    e.data.error
                                                        ? e.data.error.warning && window.pushNotice(e.data.error.warning, "warning")
                                                        : n
                                                        ? i()
                                                        : window.getCartTotals(!0).then(function () {
                                                              i();
                                                          });
                                                }, 300);
                                            })
                                            .catch(function (e) {
                                                console.log(e);
                                            });
                                });
                            }),
                            (window.savePaymentMethod = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return new Promise(function (i) {
                                    var o = e ? e.currentTarget : t,
                                        s = new FormData();
                                    s.append("payment_method", o.value),
                                        s.append("agree", "1"),
                                        s.append("comment", document.getElementById("payment-comment-textarea").value),
                                        r({ method: "post", url: "index.php?route=checkout/payment_method/save", data: s, headers: { "Content-Type": "multipart/form-data" } })
                                            .then(function (e) {
                                                setTimeout(function () {
                                                    e.data.error
                                                        ? e.data.error.warning && window.pushNotice(e.data.error.warning, "warning")
                                                        : n
                                                        ? i()
                                                        : window.getCartTotals(!0).then(function () {
                                                              i();
                                                          });
                                                }, 500);
                                            })
                                            .catch(function (e) {
                                                console.log(e);
                                            });
                                });
                            }),
                            (window.checkoutOrder = function (e) {
                                return new Promise(function (t) {
                                    var n = e.currentTarget;
                                    n.classList.add("loading"),
                                        (n.disabled = !0),
                                        window
                                            .savePaymentAndShipping(null, document.getElementById("checkout-billing-and-shipping-form"), !0)
                                            .then(function () {
                                                setTimeout(function () {
                                                    window
                                                        .saveShippingMethod(null, document.querySelector('[name="shipping_method"]:checked'), !0)
                                                        .then(function () {
                                                            setTimeout(function () {
                                                                window
                                                                    .savePaymentMethod(null, document.querySelector('[name="payment_method"]:checked'), !0)
                                                                    .then(function () {
                                                                        setTimeout(function () {
                                                                            r({ method: "post", url: "index.php?route=checkout/confirm" })
                                                                                .then(function (e) {
                                                                                    setTimeout(function () {
                                                                                        n.classList.remove("loading"), (n.disabled = !1);
                                                                                        var i = document.querySelector("[data-load-checkout-confirm]");
                                                                                        (document.getElementById("checkout-order-action").parentNode.style.display = "none"),
                                                                                            document.querySelector(".checkout-wrapper").classList.add("disabled"),
                                                                                            (i.innerHTML = e.data),
                                                                                            t();
                                                                                    }, 1e3);
                                                                                })
                                                                                .catch(function (e) {
                                                                                    n.classList.remove("loading"), (n.disabled = !1), console.log(e);
                                                                                });
                                                                        }, 1e3);
                                                                    })
                                                                    .catch(function (e) {
                                                                        n.classList.remove("loading"), (n.disabled = !1), console.log(e);
                                                                    });
                                                            }, 1e3);
                                                        })
                                                        .catch(function (e) {
                                                            n.classList.remove("loading"), (n.disabled = !1), console.log(e);
                                                        });
                                                }, 1e3);
                                            })
                                            .catch(function (e) {
                                                n.classList.remove("loading"), (n.disabled = !1), console.log(e);
                                            });
                                });
                            }),
                            (window.backToCheckout = function (e) {
                                (document.getElementById("checkout-order-action").parentNode.style.display = "block"),
                                    document.querySelector(".checkout-wrapper").classList.remove("disabled"),
                                    (document.querySelector("[data-load-checkout-confirm]").innerHTML = "");
                            }),
                            (window.confirmOrder = function (e, t) {
                                var n = e.currentTarget;
                                n.classList.add("loading"),
                                (n.disabled = !0),
                                r({ method: "post", url: t }).then(function (e) {
                                                            setTimeout(function () {
                                                n.classList.remove("loading"),
                                                    (n.disabled = !1),
                                                    e.data.redirect &&
                                                        r({ method: "post", url: "index.php?route=checkout/success/ajaxSuccess" })
                                                            .then(function (e) {
                                                                var t = document.querySelector('.checkout-stages [data-stage="identification"]'),
                                                                    n = document.querySelector('.checkout-stages [data-stage="billing-and-shipping"]'),
                                                                    i = document.querySelector('.checkout-stages [data-stage="confirmation"]'),
                                                                    o = document.querySelector('.checkout-stages-head [data-stage="identification"]'),
                                                                    r = document.querySelector('.checkout-stages-head [data-stage="billing-and-shipping"]'),
                                                                    s = document.querySelector('.checkout-stages-head [data-stage="confirmation"]');
                                                                e.data.html &&
                                                                    ((i.innerHTML = e.data.html),
                                                                    (i.style.display = "block"),
                                                                    (t.style.display = "none"),
                                                                    (t.innerHTML = ""),
                                                                    (n.style.display = "none"),
                                                                    (n.innerHTML = ""),
                                                                    o.classList.remove("active"),
                                                                    (o.disabled = !0),
                                                                    r.classList.remove("active"),
                                                                    (r.disabled = !0),
                                                                    s.classList.add("active"));
                                                            })
                                                            .catch(function (e) {
                                                                console.log(e);
                                                            });
                                            }, 500);
                                        })
                                        .catch(function (e) {
                                            n.classList.remove("loading"), (n.disabled = !1), console.log(e);
                                        });
                            }),
                            (window.novaposhtaAutocompleteBlur = function (e) {
                                var t = e.currentTarget;
                                setTimeout(function () {
                                    var e = t.parentNode.querySelector("ul");
                                    e && e.parentNode.removeChild(e);
                                }, 500);
                            }),
                            (window.warehouseSelectChange = function (e) {
                                var t = e.currentTarget,
                                    n = JSON.parse(t.options[t.selectedIndex].value),
                                    i = document.querySelector(".delivery-information");
                                    n ? (t.classList.remove("required"),
                                      (i.innerHTML = "\n                <p>Вантажопідйомність до <strong>"
                                          .concat(
                                              n.TotalMaxWeightAllowed || "-",
                                              '</strong> кг</p>\n                    <br>\n                    <p>Графік роботи відділення:</p>\n                    <div class="schedule">\n                        <ul>\n                            <li><strong>Пн</strong>: '
                                          )
                                          .concat(n.Schedule.Monday, "</li>\n                            <li><strong>Вт</strong>: ")
                                          .concat(n.Schedule.Tuesday, "</li>\n                            <li><strong>Ср</strong>: ")
                                          .concat(n.Schedule.Wednesday, "</li>\n                            <li><strong>Чт</strong>: ")
                                          .concat(n.Schedule.Thursday, "</li>\n                        </ul>\n                        <ul>\n                            <li><strong>Пт</strong>: ")
                                          .concat(n.Schedule.Friday, "</li>\n                            <li><strong><span>Сб</span></strong>: ")
                                          .concat(n.Schedule.Saturday, "</li>\n                            <li><strong><span>Нд</span></strong>: ")
                                          .concat(n.Schedule.Sunday, "</li>\n                        </ul>\n                    </div>\n                <p>Телефон: <strong>")
                                          .concat(n.Phone || "-", "</strong></p>\n            ")),
                                      window.saveShippingMethod(null, document.querySelector('[name="shipping_method"]:checked')))
                                    : t.classList.add("required");
                            }),
                            (window.novaposhtaAutocomplete = function (e) {
                                var t = "https://api.novaposhta.ua/v2.0/json/",
                                    n = "a370192ba8c9c57e4629d52b7b6ef0d6",
                                    i = e.currentTarget,
                                    o = document.querySelector('[name="warehouse"]'),
                                    s = { apiKey: n, modelName: "Address", calledMethod: "searchSettlements", methodProperties: { CityName: i.value, Limit: 5 } };
                                    r({ method: "post", url: t, data: s, headers: { "Content-Type": "application/json" } })
                                    .then(function (e) {
                                        if (e.data.data[0] && e.data.data[0].Addresses && e.data.data[0].Addresses.length) {
                                            (o.innerHTML = ""), o.classList.add("required");
                                            var s = document.createElement("ul");
                                            e.data.data[0].Addresses.forEach(function (e) {
                                                var a = document.createElement("li");
                                                (a.innerHTML = e.MainDescription + " - " + e.Area + " " + e.ParentRegionCode),
                                                    a.setAttribute("data-address", JSON.stringify(e)),


                                                    a.addEventListener("click", function (e) {
                                                        e.preventDefault(), e.stopPropagation();
                                                        var s = e.currentTarget,
                                                            a = JSON.parse(s.dataset.address);
                                                        if (((i.value = a.MainDescription + " - " + a.Area + " " + a.ParentRegionCode), o && a.DeliveryCity)) {
                                                            var l = { modelName: "AddressGeneral", calledMethod: "getWarehouses", methodProperties: { CityRef: a.DeliveryCity }, apiKey: n };
                                                            r({ method: "post", url: t, data: l, headers: { "Content-Type": "application/json" } })
                                                                .then(function (e) {
                                                                    if (e.data.data && e.data.data.length) {
                                                                        e.data.data.forEach(function (e) {
                                                                            var t = document.createElement("option");
                                                                            (t.value = JSON.stringify(e)), (t.innerHTML = e.Description), o.appendChild(t);
                                                                        });
                                                                        var t = new Event("input", { bubbles: !0, cancelable: !0 });
                                                                        o.dispatchEvent(t);
                                                                    }
                                                                })
                                                                .catch(function (e) {
                                                                    console.log(e);
                                                                });
                                                        }
                                                    }),
                                                    s.appendChild(a);
                                                var l = i.parentNode.querySelector("ul");
                                                l && l.parentNode.removeChild(l), i.parentNode.appendChild(s);
                                            });
                                        }
                                    })
                                    .catch(function (e) {
                                        console.log(e);
                                    });
                            }),
                            (window.forgotten = function (e) {
                                e.preventDefault();
                                var t = e.currentTarget,
                                    n = window.serialize(t, !0),
                                    i = t.querySelector('[type="submit"]');
                                t.querySelectorAll(".has-error").forEach(function (e) {
                                    return e.classList.remove("has-error");
                                }),
                                    n["forgotten-email"] && n["forgotten-email"].length
                                        ? ((i.disabled = !0),
                                          i.classList.add("loading"),
                                          r
                                              .post("index.php?route=account/forgotten", "email=" + n["forgotten-email"])
                                              .then(function (e) {
                                                  (i.disabled = !1),
                                                      i.classList.remove("loading"),
                                                      e.data.error
                                                          ? e.data.error.warning && window.pushNotice(e.data.error.warning, "warning")
                                                          : e.data.success && ((t.querySelector('[name="forgotten-email"]').value = ""), window.pushNotice(e.data.success));
                                              })
                                              .catch(function (e) {
                                                  (i.disabled = !1), i.classList.remove("loading"), console.log(e);
                                              }))
                                        : n["forgotten-email"] || t.querySelector('[name="forgotten-email"]').classList.add("has-error");
                            });
                        var P = document.querySelectorAll(".form-edit-switch");
                        P.length &&
                            P.forEach(function (e) {
                                e.addEventListener("click", function (e) {
                                    var t = document.getElementById(e.currentTarget.dataset.form);
                                    t &&
                                        (e.currentTarget.classList.contains("success-btn")
                                            ? t.dispatchEvent(new Event("submit", { bubbles: !0, cancelable: !0 }))
                                            : (t.querySelectorAll("[disabled][readonly]").forEach(function (e) {
                                                  (e.disabled = !1), e.removeAttribute("readonly");
                                              }),
                                              e.currentTarget.classList.add("success-btn")));
                                });
                            }),
                            (window.AccountPersonalValidate = function (e, t) {
                                var n = !1;
                                return (
                                    console.log("data", e),
                                    e.firstname || (t.querySelector('[name="firstname"]').classList.add("has-error"), (n = !0)),
                                    e.lastname || (t.querySelector('[name="lastname"]').classList.add("has-error"), (n = !0)),
                                    e.email || (t.querySelector('[name="email"]').classList.add("has-error"), (n = !0)),
                                    e.telephone || (t.querySelector('[name="telephone"]').classList.add("has-error"), (n = !0)),
                                    e.country_id || (t.querySelector('[name="country"]').classList.add("has-error"), (n = !0)),
                                    e.zone_id || (t.querySelector('[name="zone_id"]').classList.add("has-error"), (n = !0)),
                                    e.password && !e.confirm && (t.querySelector('[name="confirm"]').classList.add("has-error"), (n = !0)),
                                    !n
                                );
                            }),
                            (window.saveAccountPersonal = function (e) {
                                e.preventDefault(), e.stopPropagation(), e.preventDefault();
                                var t = e.currentTarget,
                                    n = window.serialize(t, !0),
                                    i = document.querySelector('[data-form="account-personal-form"]');
                                if (
                                    (t.querySelectorAll(".has-error").forEach(function (e) {
                                        return e.classList.remove("has-error");
                                    }),
                                    window.AccountPersonalValidate(n, t))
                                ) {
                                    var o = new FormData();
                                    o.append("firstname", n.firstname || ""),
                                        o.append("lastname", n.lastname || ""),
                                        o.append("email", n.email),
                                        o.append("telephone", n.telephone || ""),
                                        o.append("password", n.password),
                                        o.append("confirm", n.confirm),
                                        o.append("country_id", "220"),
                                        o.append("zone_id", n.zone_id),
                                        (i.disabled = !0),
                                        i.classList.add("loading"),
                                        t.querySelectorAll(".text-danger").forEach(function (e) {
                                            return e.parentNode.removeChild(e);
                                        }),
                                        r({ method: "post", url: "index.php?route=account/account/saveAccountPersonal", data: o, headers: { "Content-Type": "multipart/form-data" } })
                                            .then(function (e) {
                                                (i.disabled = !1),
                                                    i.classList.remove("loading"),
                                                    e.data.error
                                                        ? (e.data.error.warning && window.pushNotice(e.data.error.warning, "warning"),
                                                          Object.keys(e.data.error).forEach(function (n) {
                                                              var i = t.querySelector('[name="' + n + '"]'),
                                                                  o = e.data.error[n],
                                                                  r = document.createElement("div");
                                                              r.classList.add("text-danger"), (r.innerHTML = o), i && ("checkbox" === i.type || "radio" === i.type ? i.parentNode.appendChild(r) : i.parentNode.insertBefore(r, i.nextSibling));
                                                          }))
                                                        : (e.data.success && window.pushNotice(e.data.success),
                                                          t.querySelectorAll('input:not([type="submit"])').forEach(function (e) {
                                                              (e.disabled = !0), e.setAttribute("readonly", "readonly");
                                                          }),
                                                          t.querySelectorAll("select").forEach(function (e) {
                                                              (e.disabled = !0), e.setAttribute("readonly", "readonly");
                                                          }),
                                                          t.querySelectorAll("textarea").forEach(function (e) {
                                                              (e.disabled = !0), e.setAttribute("readonly", "readonly");
                                                          }),
                                                          i.classList.remove("success-btn"));
                                            })
                                            .catch(function (e) {
                                                (i.disabled = !1), i.classList.remove("loading"), console.log(e);
                                            });
                                }
                            }),
                            (window.newsletterChange = function (e) {
                                var t = e.currentTarget;
                                (t.disabled = !0),
                                    r
                                        .post("index.php?route=account/newsletter", "newsletter=" + (t.checked ? "1" : "0"))
                                        .then(function (e) {
                                            (t.disabled = !1), e.data.error ? e.data.error.warning && window.pushNotice(e.data.error.warning, "warning") : e.data.success && window.pushNotice(e.data.success);
                                        })
                                        .catch(function (e) {
                                            (t.disabled = !1), console.log(e);
                                        });
                            }),
                            (window.facebookLogin = function (e) {
                                var t = e.currentTarget;
                                FB
                                    ? FB.login(
                                          function (e) {
                                              "connected" === e.status &&
                                                  FB.api("/" + e.authResponse.userID + "?fields=email,birthday,first_name,location,last_name", function (e) {
                                                      if (e && !e.error) {
                                                          var n = new FormData();
                                                          n.append("firstname", e.first_name),
                                                              n.append("lastname", e.last_name),
                                                              n.append("email", e.email),
                                                              e.location && n.append("city", e.location),
                                                              (t.disabled = !0),
                                                              t.classList.add("loading"),
                                                              r({ method: "post", url: "index.php?route=account/login/socialLogin", data: n, headers: { "Content-Type": "multipart/form-data" } })
                                                                  .then(function (e) {
                                                                      (t.disabled = !1),
                                                                          t.classList.remove("loading"),
                                                                          e.data.error
                                                                              ? e.data.error.warning && window.pushNotice(e.data.error.warning, "warning")
                                                                              : e.data.success &&
                                                                                (window.pushNotice(e.data.success),
                                                                                setTimeout(function () {
                                                                                    location.reload();
                                                                                }, 600));
                                                                  })
                                                                  .catch(function (e) {
                                                                      (t.disabled = !1), t.classList.remove("loading"), console.log(e);
                                                                  });
                                                      }
                                                  });
                                          },
                                          { scope: "email", return_scopes: !0 }
                                      )
                                    : console.warn("FB not found.");
                            });
                        var q = document.querySelectorAll("[data-modal]");
                        q.length &&
                            q.forEach(function (e) {
                                e.querySelector(".modal-overlay").addEventListener("click", function (t) {
                                    e.classList.remove("open"), document.body.classList.remove("modal-open"), document.documentElement.classList.remove("modal-open");
                                });
                            }),
                            (window.showModal = function (e, t) {
                                e.currentTarget;
                                var n = document.querySelector('[data-modal="' + t + '"]');
                                if (n) {
                                    var i = document.querySelectorAll("[data-modal]");
                                    i.length &&
                                        i.forEach(function (e) {
                                            return e.classList.remove("open");
                                        }),
                                        document.body.classList.add("modal-open"),
                                        document.documentElement.classList.add("modal-open"),
                                        n.classList.add("open"),
                                        "head-search" === t &&
                                            setTimeout(function () {
                                                document.getElementById("head-search-input") && document.getElementById("head-search-input").focus();
                                            }, 300);
                                }
                            }),
                            (window.hideModal = function (e, t) {
                                var n = document.querySelector('[data-modal="' + t + '"]');
                                n && (n.classList.remove("open"), document.body.classList.remove("modal-open"), document.documentElement.classList.remove("modal-open"));
                            });
                        var D = document.getElementById("head-search-input");
                        if (D) {
                            var O = document.querySelector("[data-head-search-result]"),
                                z = document.querySelectorAll("[data-head-search-total]"),
                                j = document.querySelector("[data-head-search-url]"),
                                H = new XMLHttpRequest();
                            D.addEventListener("input", function (e) {
                                H.abort(),
                                    D.parentNode.classList.add("loading"),
                                    O.classList.add("loading"),
                                    (function (e, t) {
                                        return new Promise(function (n, i) {
                                            if (
                                                ((t.requestObject = e),
                                                void 0 !== e.beforeSend && e.beforeSend(),
                                                t.open(e.method || "GET", e.url),
                                                e.headers &&
                                                    Object.keys(e.headers).forEach(function (n) {
                                                        t.setRequestHeader(n, e.headers[n]);
                                                    }),
                                                (t.onload = function () {
                                                    t.status >= 200 && t.status < 300 ? n(t) : i(t);
                                                }),
                                                (t.onerror = function () {
                                                    return i(t);
                                                }),
                                                !e.method || "POST" !== e.method || e.body instanceof FormData)
                                            )
                                                t.send(e.body);
                                            else {
                                                var o = new FormData();
                                                Object.keys(e.body).forEach(function (t) {
                                                    o.append(t, e.body[t]);
                                                }),
                                                    t.send(o);
                                            }
                                        });
                                    })({ method: "GET", url: "index.php?route=product/search/ajaxSearch&s=" + D.value, body: "" }, H)
                                        .then(function (e) {
                                            var t = JSON.parse(e.response);
                                            if ((D.parentNode.classList.remove("loading"), O.classList.remove("loading"), t && t.products)) {
                                                var n = "";
                                                z.forEach(function (e) {
                                                    (e.textContent = t.total), e.parentNode.classList.add("show");
                                                }),
                                                    j.setAttribute("href", t.url.replace("&amp;", "&")),
                                                    t.products.forEach(function (e) {
                                                        n += '\n                                <li>\n                                    <div class="product">\n                                        <a href="'
                                                            .concat(e.href, '">\n                                            <div class="img-container" style="background-image: url(\'')
                                                            .concat(e.image, '\')"></div>\n                                            <div class="detail">\n                                                <div class="name">')
                                                            .concat(e.name, '</div>\n                                                <div class="product-description">')
                                                            .concat(e.description, '</div>\n                                                <div class="category">Категорія: <span>')
                                                            .concat(
                                                                e.category,
                                                                '</span></div>\n                                            </div>\n                                            <div class="prices">\n                                                '
                                                            )
                                                            .concat(e.special ? '<div class="special-price">' + e.special + "</div>" : "", '\n                                                <div class="regular-price">')
                                                            .concat(
                                                                e.price,
                                                                "</div>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </li>\n                            "
                                                            );
                                                    }),
                                                    (O.innerHTML = n);
                                            }
                                        })
                                        .catch(function (e) {
                                            D.parentNode.classList.remove("loading"), O.classList.remove("loading"), console.log(e);
                                        });
                            });
                        }
                        var I = document.querySelectorAll(".manufactures-carousel");
                        I.length &&
                            I.forEach(function (t) {
                                e(t).owlCarousel({ items: 10, loop: !0, autoplay: !0, responsive: { 0: { items: 2 }, 768: { items: 5 }, 1200: { items: 10 } } });
                            });
                        var U = document.querySelectorAll('[data-ajax="our-new-products"]');
                        U.length &&
                            r
                                .get("index.php?route=common/home/getOurNewProducts")
                                .then(function (t) {
                                    t.data &&
                                        U.forEach(function (n) {
                                            (n.innerHTML = t.data), window.unwrap(n);
                                            var i = document.querySelectorAll(".our-new-products-carousel");
                                            i &&
                                                i.forEach(function (t) {
                                                    e(t).owlCarousel({
                                                        items: 4,
                                                        nav: !0,
                                                        stagePadding: 15,
                                                        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                                        responsive: { 0: { items: 3, autoWidth: !0, autoplay: !0, loop: !0 }, 992: { items: 4 } },
                                                    });
                                                });
                                            var o = document.querySelectorAll(".homepage-our-new-products a[data-tab-link]"),
                                                r = document.querySelectorAll(".homepage-our-new-products div[data-content]");
                                            o.length &&
                                                r.length &&
                                                (o.forEach(function (e) {
                                                    return e.addEventListener("click", function (e) {
                                                        e.preventDefault(), e.stopPropagation();
                                                        var t = e.currentTarget,
                                                            n = t.getAttribute("href").replace("#", "");
                                                        n &&
                                                            (o.forEach(function (e) {
                                                                e === t ? e.parentNode.classList.add("active") : e.parentNode.classList.remove("active");
                                                            }),
                                                            r.forEach(function (e) {
                                                                e.dataset.content === n ? ((e.style.visibility = "visible"), (e.style.opacity = "1")) : ((e.style.visibility = "hidden"), (e.style.opacity = "0"));
                                                            }));
                                                    });
                                                }),
                                                o[0].click());
                                        });
                                })
                                .catch(function (e) {
                                    console.log(e);
                                });
                        var R = document.querySelectorAll('[data-ajax="instagram"]');
                        R.length &&
                            r
                                .get("index.php?route=common/home/getInstagram")
                                .then(function (e) {
                                    e.data &&
                                        R.forEach(function (t) {
                                            (t.innerHTML = e.data), window.unwrap(t);
                                        });
                                })
                                .catch(function (e) {
                                    console.log(e);
                                }),
                            (window.loadManufacturerProducts = function (t, n) {
                                var i = t.currentTarget,
                                    o = document.querySelector('[data-manufacturer-id="' + n + '"]'),
                                    s = o.querySelector("[data-ajax]"),
                                    a = o.querySelector(".product-total");
                                o.classList.add("open"),
                                    i.classList.add("hide"),
                                    r
                                        .get("index.php?route=product/manufacturer/getManufacturerProducts&manufacturer_id=" + n)
                                        .then(function (t) {
                                            (s.innerHTML = t.data.html), (a.textContent = t.data.total), window.unwrap(s);
                                            var n = o.querySelector(".owl-carousel");
                                            n &&
                                                (e(n).owlCarousel({
                                                    items: 4,
                                                    responsive: { 0: { items: 2, autoWidth: !0 }, 768: { items: 3 }, 1200: { items: 4 } },
                                                    nav: !0,
                                                    stagePadding: 15,
                                                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                                                }),
                                                (n.style.visibility = "visible"),
                                                (n.style.opacity = "1"));
                                        })
                                        .catch(function (e) {
                                            console.log(e);
                                        });
                            });
                        var F = document.querySelector(".manufacturers-page");
                        if (F) {
                            var B = F.querySelector(".action-show-list"),
                                W = F.querySelector(".action-show-grid");
                            B.addEventListener("click", function (e) {
                                W.classList.remove("active"), B.classList.add("active"), F.classList.remove("grid");
                            }),
                                W.addEventListener("click", function (e) {
                                    B.classList.remove("active"),
                                        W.classList.add("active"),
                                        F.classList.add("grid"),
                                        document.querySelectorAll(".manufacturer-block.open").forEach(function (e) {
                                            e.classList.remove("open"),
                                                e.querySelectorAll("button.hide").forEach(function (e) {
                                                    return e.classList.remove("hide");
                                                });
                                        });
                                });
                        }
                        var V = document.querySelectorAll("[data-newsletter-form]");
                        V.length &&
                            V.forEach(function (e) {
                                e.addEventListener("submit", function (e) {
                                    e.preventDefault(), e.stopPropagation();
                                    var t = e.currentTarget,
                                        n = t.querySelector('[name="email"]').value,
                                        i = t.querySelector('[type="submit"]');
                                    n.length &&
                                        (i.classList.add("loading"),
                                        r
                                            .post("index.php?route=common/home/actionNewsletter", "email=" + n)
                                            .then(function (e) {
                                                i.classList.remove("loading"),
                                                    e.data.success && (window.pushNotice(e.data.success), (t.parentNode.innerHTML = "<p>" + e.data.success + "</p>")),
                                                    e.data.warning && window.pushNotice(e.data.warning, "warning"),
                                                    e.data.error && window.pushNotice(e.data.error, "error");
                                            })
                                            .catch(function (e) {
                                                i.classList.remove("loading"), console.log(e);
                                            }));
                                });
                            });
                        var X = document.getElementById("mobile-burger"),
                            Y = document.querySelector(".header-main"),
                            G = document.querySelector(".header-main-overlay");
                        X &&
                            Y &&
                            G &&
                            (X.addEventListener("click", function (e) {
                                X.classList.contains("open")
                                    ? (X.classList.remove("open"), Y.classList.remove("open"), document.body.classList.remove("modal-open"), document.documentElement.classList.remove("modal-open"))
                                    : (Y.classList.add("open"), X.classList.add("open"), document.body.classList.add("modal-open"), document.documentElement.classList.add("modal-open"));
                            }),
                            G.addEventListener("click", function (e) {
                                X.classList.remove("open"), Y.classList.remove("open"), document.body.classList.remove("modal-open"), document.documentElement.classList.remove("modal-open");
                            }));
                    });
            }.call(this, n(1));
    },
    function (e, t, n) {
        (function (e, t) {
            var n, i;
            !(function (e, n, i, o) {
                function r(t, n) {
                    (this.settings = null),
                        (this.options = e.extend({}, r.Defaults, n)),
                        (this.$element = e(t)),
                        (this._handlers = {}),
                        (this._plugins = {}),
                        (this._supress = {}),
                        (this._current = null),
                        (this._speed = null),
                        (this._coordinates = []),
                        (this._breakpoint = null),
                        (this._width = null),
                        (this._items = []),
                        (this._clones = []),
                        (this._mergers = []),
                        (this._widths = []),
                        (this._invalidated = {}),
                        (this._pipe = []),
                        (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                        (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                        e.each(
                            ["onResize", "onThrottledResize"],
                            e.proxy(function (t, n) {
                                this._handlers[n] = e.proxy(this[n], this);
                            }, this)
                        ),
                        e.each(
                            r.Plugins,
                            e.proxy(function (e, t) {
                                this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this);
                            }, this)
                        ),
                        e.each(
                            r.Workers,
                            e.proxy(function (t, n) {
                                this._pipe.push({ filter: n.filter, run: e.proxy(n.run, this) });
                            }, this)
                        ),
                        this.setup(),
                        this.initialize();
                }
                (r.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: n,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab",
                }),
                    (r.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
                    (r.Type = { Event: "event", State: "state" }),
                    (r.Plugins = {}),
                    (r.Workers = [
                        {
                            filter: ["width", "settings"],
                            run: function () {
                                this._width = this.$element.width();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (e) {
                                e.current = this._items && this._items[this.relative(this._current)];
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                this.$stage.children(".cloned").remove();
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (e) {
                                var t = this.settings.margin || "",
                                    n = !this.settings.autoWidth,
                                    i = this.settings.rtl,
                                    o = { width: "auto", "margin-left": i ? t : "", "margin-right": i ? "" : t };
                                !n && this.$stage.children().css(o), (e.css = o);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (e) {
                                var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                                    n = null,
                                    i = this._items.length,
                                    o = !this.settings.autoWidth,
                                    r = [];
                                for (e.items = { merge: !1, width: t }; i--; )
                                    (n = this._mergers[i]), (n = (this.settings.mergeFit && Math.min(n, this.settings.items)) || n), (e.items.merge = n > 1 || e.items.merge), (r[i] = o ? t * n : this._items[i].width());
                                this._widths = r;
                            },
                        },
                        {
                            filter: ["items", "settings"],
                            run: function () {
                                var t = [],
                                    n = this._items,
                                    i = this.settings,
                                    o = Math.max(2 * i.items, 4),
                                    r = 2 * Math.ceil(n.length / 2),
                                    s = i.loop && n.length ? (i.rewind ? o : Math.max(o, r)) : 0,
                                    a = "",
                                    l = "";
                                for (s /= 2; s > 0; )
                                    t.push(this.normalize(t.length / 2, !0)), (a += n[t[t.length - 1]][0].outerHTML), t.push(this.normalize(n.length - 1 - (t.length - 1) / 2, !0)), (l = n[t[t.length - 1]][0].outerHTML + l), (s -= 1);
                                (this._clones = t), e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < t; )
                                    (i = r[n - 1] || 0), (o = this._widths[this.relative(n)] + this.settings.margin), r.push(i + o * e);
                                this._coordinates = r;
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function () {
                                var e = this.settings.stagePadding,
                                    t = this._coordinates,
                                    n = { width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e, "padding-left": e || "", "padding-right": e || "" };
                                this.$stage.css(n);
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (e) {
                                var t = this._coordinates.length,
                                    n = !this.settings.autoWidth,
                                    i = this.$stage.children();
                                if (n && e.items.merge) for (; t--; ) (e.css.width = this._widths[this.relative(t)]), i.eq(t).css(e.css);
                                else n && ((e.css.width = e.items.width), i.css(e.css));
                            },
                        },
                        {
                            filter: ["items"],
                            run: function () {
                                this._coordinates.length < 1 && this.$stage.removeAttr("style");
                            },
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function (e) {
                                (e.current = e.current ? this.$stage.children().index(e.current) : 0), (e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current))), this.reset(e.current);
                            },
                        },
                        {
                            filter: ["position"],
                            run: function () {
                                this.animate(this.coordinates(this._current));
                            },
                        },
                        {
                            filter: ["width", "position", "items", "settings"],
                            run: function () {
                                var e,
                                    t,
                                    n,
                                    i,
                                    o = this.settings.rtl ? 1 : -1,
                                    r = 2 * this.settings.stagePadding,
                                    s = this.coordinates(this.current()) + r,
                                    a = s + this.width() * o,
                                    l = [];
                                for (n = 0, i = this._coordinates.length; n < i; n++)
                                    (e = this._coordinates[n - 1] || 0), (t = Math.abs(this._coordinates[n]) + r * o), ((this.op(e, "<=", s) && this.op(e, ">", a)) || (this.op(t, "<", s) && this.op(t, ">", a))) && l.push(n);
                                this.$stage.children(".active").removeClass("active"),
                                    this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
                                    this.$stage.children(".center").removeClass("center"),
                                    this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                            },
                        },
                    ]),
                    (r.prototype.initializeStage = function () {
                        (this.$stage = this.$element.find("." + this.settings.stageClass)),
                            this.$stage.length ||
                                (this.$element.addClass(this.options.loadingClass),
                                (this.$stage = e("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(e("<div/>", { class: this.settings.stageOuterClass }))),
                                this.$element.append(this.$stage.parent()));
                    }),
                    (r.prototype.initializeItems = function () {
                        var t = this.$element.find(".owl-item");
                        if (t.length)
                            return (
                                (this._items = t.get().map(function (t) {
                                    return e(t);
                                })),
                                (this._mergers = this._items.map(function () {
                                    return 1;
                                })),
                                void this.refresh()
                            );
                        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
                    }),
                    (r.prototype.initialize = function () {
                        var e, t, n;
                        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) &&
                            ((e = this.$element.find("img")),
                            (t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0),
                            (n = this.$element.children(t).width()),
                            e.length && n <= 0 && this.preloadAutoWidthImages(e));
                        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
                    }),
                    (r.prototype.isVisible = function () {
                        return !this.settings.checkVisibility || this.$element.is(":visible");
                    }),
                    (r.prototype.setup = function () {
                        var t = this.viewport(),
                            n = this.options.responsive,
                            i = -1,
                            o = null;
                        n
                            ? (e.each(n, function (e) {
                                  e <= t && e > i && (i = Number(e));
                              }),
                              "function" == typeof (o = e.extend({}, this.options, n[i])).stagePadding && (o.stagePadding = o.stagePadding()),
                              delete o.responsive,
                              o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i)))
                            : (o = e.extend({}, this.options)),
                            this.trigger("change", { property: { name: "settings", value: o } }),
                            (this._breakpoint = i),
                            (this.settings = o),
                            this.invalidate("settings"),
                            this.trigger("changed", { property: { name: "settings", value: this.settings } });
                    }),
                    (r.prototype.optionsLogic = function () {
                        this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
                    }),
                    (r.prototype.prepare = function (t) {
                        var n = this.trigger("prepare", { content: t });
                        return (
                            n.data ||
                                (n.data = e("<" + this.settings.itemElement + "/>")
                                    .addClass(this.options.itemClass)
                                    .append(t)),
                            this.trigger("prepared", { content: n.data }),
                            n.data
                        );
                    }),
                    (r.prototype.update = function () {
                        for (
                            var t = 0,
                                n = this._pipe.length,
                                i = e.proxy(function (e) {
                                    return this[e];
                                }, this._invalidated),
                                o = {};
                            t < n;

                        )
                            (this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(o), t++;
                        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
                    }),
                    (r.prototype.width = function (e) {
                        switch ((e = e || r.Width.Default)) {
                            case r.Width.Inner:
                            case r.Width.Outer:
                                return this._width;
                            default:
                                return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                        }
                    }),
                    (r.prototype.refresh = function () {
                        this.enter("refreshing"),
                            this.trigger("refresh"),
                            this.setup(),
                            this.optionsLogic(),
                            this.$element.addClass(this.options.refreshClass),
                            this.update(),
                            this.$element.removeClass(this.options.refreshClass),
                            this.leave("refreshing"),
                            this.trigger("refreshed");
                    }),
                    (r.prototype.onThrottledResize = function () {
                        n.clearTimeout(this.resizeTimer), (this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
                    }),
                    (r.prototype.onResize = function () {
                        return (
                            !!this._items.length &&
                            this._width !== this.$element.width() &&
                            !!this.isVisible() &&
                            (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                        );
                    }),
                    (r.prototype.registerEventHandlers = function () {
                        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)),
                            !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize),
                            this.settings.mouseDrag &&
                                (this.$element.addClass(this.options.dragClass),
                                this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)),
                                this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                                    return !1;
                                })),
                            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)));
                    }),
                    (r.prototype.onDragStart = function (t) {
                        var n = null;
                        3 !== t.which &&
                            (e.support.transform
                                ? (n = {
                                      x: (n = this.$stage
                                          .css("transform")
                                          .replace(/.*\(|\)| /g, "")
                                          .split(","))[16 === n.length ? 12 : 4],
                                      y: n[16 === n.length ? 13 : 5],
                                  })
                                : ((n = this.$stage.position()), (n = { x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left, y: n.top })),
                            this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")),
                            this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
                            this.speed(0),
                            (this._drag.time = new Date().getTime()),
                            (this._drag.target = e(t.target)),
                            (this._drag.stage.start = n),
                            (this._drag.stage.current = n),
                            (this._drag.pointer = this.pointer(t)),
                            e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)),
                            e(i).one(
                                "mousemove.owl.core touchmove.owl.core",
                                e.proxy(function (t) {
                                    var n = this.difference(this._drag.pointer, this.pointer(t));
                                    e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                                }, this)
                            ));
                    }),
                    (r.prototype.onDragMove = function (e) {
                        var t = null,
                            n = null,
                            i = null,
                            o = this.difference(this._drag.pointer, this.pointer(e)),
                            r = this.difference(this._drag.stage.start, o);
                        this.is("dragging") &&
                            (e.preventDefault(),
                            this.settings.loop
                                ? ((t = this.coordinates(this.minimum())), (n = this.coordinates(this.maximum() + 1) - t), (r.x = ((((r.x - t) % n) + n) % n) + t))
                                : ((t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                                  (n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                                  (i = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
                                  (r.x = Math.max(Math.min(r.x, t + i), n + i))),
                            (this._drag.stage.current = r),
                            this.animate(r.x));
                    }),
                    (r.prototype.onDragEnd = function (t) {
                        var n = this.difference(this._drag.pointer, this.pointer(t)),
                            o = this._drag.stage.current,
                            r = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
                        e(i).off(".owl.core"),
                            this.$element.removeClass(this.options.grabClass),
                            ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
                                (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                                this.current(this.closest(o.x, 0 !== n.x ? r : this._drag.direction)),
                                this.invalidate("position"),
                                this.update(),
                                (this._drag.direction = r),
                                (Math.abs(n.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                                    this._drag.target.one("click.owl.core", function () {
                                        return !1;
                                    })),
                            this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
                    }),
                    (r.prototype.closest = function (t, n) {
                        var i = -1,
                            o = this.width(),
                            r = this.coordinates();
                        return (
                            this.settings.freeDrag ||
                                e.each(
                                    r,
                                    e.proxy(function (e, s) {
                                        return (
                                            "left" === n && t > s - 30 && t < s + 30
                                                ? (i = e)
                                                : "right" === n && t > s - o - 30 && t < s - o + 30
                                                ? (i = e + 1)
                                                : this.op(t, "<", s) && this.op(t, ">", void 0 !== r[e + 1] ? r[e + 1] : s - o) && (i = "left" === n ? e + 1 : e),
                                            -1 === i
                                        );
                                    }, this)
                                ),
                            this.settings.loop || (this.op(t, ">", r[this.minimum()]) ? (i = t = this.minimum()) : this.op(t, "<", r[this.maximum()]) && (i = t = this.maximum())),
                            i
                        );
                    }),
                    (r.prototype.animate = function (t) {
                        var n = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(),
                            n && (this.enter("animating"), this.trigger("translate")),
                            e.support.transform3d && e.support.transition
                                ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                                : n
                                ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this))
                                : this.$stage.css({ left: t + "px" });
                    }),
                    (r.prototype.is = function (e) {
                        return this._states.current[e] && this._states.current[e] > 0;
                    }),
                    (r.prototype.current = function (e) {
                        if (void 0 === e) return this._current;
                        if (0 !== this._items.length) {
                            if (((e = this.normalize(e)), this._current !== e)) {
                                var t = this.trigger("change", { property: { name: "position", value: e } });
                                void 0 !== t.data && (e = this.normalize(t.data)), (this._current = e), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                            }
                            return this._current;
                        }
                    }),
                    (r.prototype.invalidate = function (t) {
                        return (
                            "string" === e.type(t) && ((this._invalidated[t] = !0), this.is("valid") && this.leave("valid")),
                            e.map(this._invalidated, function (e, t) {
                                return t;
                            })
                        );
                    }),
                    (r.prototype.reset = function (e) {
                        void 0 !== (e = this.normalize(e)) && ((this._speed = 0), (this._current = e), this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]));
                    }),
                    (r.prototype.normalize = function (e, t) {
                        var n = this._items.length,
                            i = t ? 0 : this._clones.length;
                        return !this.isNumeric(e) || n < 1 ? (e = void 0) : (e < 0 || e >= n + i) && (e = ((((e - i / 2) % n) + n) % n) + i / 2), e;
                    }),
                    (r.prototype.relative = function (e) {
                        return (e -= this._clones.length / 2), this.normalize(e, !0);
                    }),
                    (r.prototype.maximum = function (e) {
                        var t,
                            n,
                            i,
                            o = this.settings,
                            r = this._coordinates.length;
                        if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
                        else if (o.autoWidth || o.merge) {
                            if ((t = this._items.length)) for (n = this._items[--t].width(), i = this.$element.width(); t-- && !((n += this._items[t].width() + this.settings.margin) > i); );
                            r = t + 1;
                        } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
                        return e && (r -= this._clones.length / 2), Math.max(r, 0);
                    }),
                    (r.prototype.minimum = function (e) {
                        return e ? 0 : this._clones.length / 2;
                    }),
                    (r.prototype.items = function (e) {
                        return void 0 === e ? this._items.slice() : ((e = this.normalize(e, !0)), this._items[e]);
                    }),
                    (r.prototype.mergers = function (e) {
                        return void 0 === e ? this._mergers.slice() : ((e = this.normalize(e, !0)), this._mergers[e]);
                    }),
                    (r.prototype.clones = function (t) {
                        var n = this._clones.length / 2,
                            i = n + this._items.length,
                            o = function (e) {
                                return e % 2 == 0 ? i + e / 2 : n - (e + 1) / 2;
                            };
                        return void 0 === t
                            ? e.map(this._clones, function (e, t) {
                                  return o(t);
                              })
                            : e.map(this._clones, function (e, n) {
                                  return e === t ? o(n) : null;
                              });
                    }),
                    (r.prototype.speed = function (e) {
                        return void 0 !== e && (this._speed = e), this._speed;
                    }),
                    (r.prototype.coordinates = function (t) {
                        var n,
                            i = 1,
                            o = t - 1;
                        return void 0 === t
                            ? e.map(
                                  this._coordinates,
                                  e.proxy(function (e, t) {
                                      return this.coordinates(t);
                                  }, this)
                              )
                            : (this.settings.center ? (this.settings.rtl && ((i = -1), (o = t + 1)), (n = this._coordinates[t]), (n += ((this.width() - n + (this._coordinates[o] || 0)) / 2) * i)) : (n = this._coordinates[o] || 0),
                              (n = Math.ceil(n)));
                    }),
                    (r.prototype.duration = function (e, t, n) {
                        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed);
                    }),
                    (r.prototype.to = function (e, t) {
                        var n = this.current(),
                            i = null,
                            o = e - this.relative(n),
                            r = (o > 0) - (o < 0),
                            s = this._items.length,
                            a = this.minimum(),
                            l = this.maximum();
                        this.settings.loop
                            ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((((e = n + o) - a) % s) + s) % s) + a) !== e && i - o <= l && i - o > 0 && ((n = i - o), (e = i), this.reset(n)))
                            : (e = this.settings.rewind ? ((e % (l += 1)) + l) % l : Math.max(a, Math.min(l, e))),
                            this.speed(this.duration(n, e, t)),
                            this.current(e),
                            this.isVisible() && this.update();
                    }),
                    (r.prototype.next = function (e) {
                        (e = e || !1), this.to(this.relative(this.current()) + 1, e);
                    }),
                    (r.prototype.prev = function (e) {
                        (e = e || !1), this.to(this.relative(this.current()) - 1, e);
                    }),
                    (r.prototype.onTransitionEnd = function (e) {
                        if (void 0 !== e && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
                        this.leave("animating"), this.trigger("translated");
                    }),
                    (r.prototype.viewport = function () {
                        var t;
                        return (
                            this.options.responsiveBaseElement !== n
                                ? (t = e(this.options.responsiveBaseElement).width())
                                : n.innerWidth
                                ? (t = n.innerWidth)
                                : i.documentElement && i.documentElement.clientWidth
                                ? (t = i.documentElement.clientWidth)
                                : console.warn("Can not detect viewport width."),
                            t
                        );
                    }),
                    (r.prototype.replace = function (n) {
                        this.$stage.empty(),
                            (this._items = []),
                            n && (n = n instanceof t ? n : e(n)),
                            this.settings.nestedItemSelector && (n = n.find("." + this.settings.nestedItemSelector)),
                            n
                                .filter(function () {
                                    return 1 === this.nodeType;
                                })
                                .each(
                                    e.proxy(function (e, t) {
                                        (t = this.prepare(t)), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                                    }, this)
                                ),
                            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                            this.invalidate("items");
                    }),
                    (r.prototype.add = function (n, i) {
                        var o = this.relative(this._current);
                        (i = void 0 === i ? this._items.length : this.normalize(i, !0)),
                            (n = n instanceof t ? n : e(n)),
                            this.trigger("add", { content: n, position: i }),
                            (n = this.prepare(n)),
                            0 === this._items.length || i === this._items.length
                                ? (0 === this._items.length && this.$stage.append(n),
                                  0 !== this._items.length && this._items[i - 1].after(n),
                                  this._items.push(n),
                                  this._mergers.push(1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                                : (this._items[i].before(n), this._items.splice(i, 0, n), this._mergers.splice(i, 0, 1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                            this._items[o] && this.reset(this._items[o].index()),
                            this.invalidate("items"),
                            this.trigger("added", { content: n, position: i });
                    }),
                    (r.prototype.remove = function (e) {
                        void 0 !== (e = this.normalize(e, !0)) &&
                            (this.trigger("remove", { content: this._items[e], position: e }),
                            this._items[e].remove(),
                            this._items.splice(e, 1),
                            this._mergers.splice(e, 1),
                            this.invalidate("items"),
                            this.trigger("removed", { content: null, position: e }));
                    }),
                    (r.prototype.preloadAutoWidthImages = function (t) {
                        t.each(
                            e.proxy(function (t, n) {
                                this.enter("pre-loading"),
                                    (n = e(n)),
                                    e(new Image())
                                        .one(
                                            "load",
                                            e.proxy(function (e) {
                                                n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                            }, this)
                                        )
                                        .attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"));
                            }, this)
                        );
                    }),
                    (r.prototype.destroy = function () {
                        for (var t in (this.$element.off(".owl.core"),
                        this.$stage.off(".owl.core"),
                        e(i).off(".owl.core"),
                        !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)),
                        this._plugins))
                            this._plugins[t].destroy();
                        this.$stage.children(".cloned").remove(),
                            this.$stage.unwrap(),
                            this.$stage.children().contents().unwrap(),
                            this.$stage.children().unwrap(),
                            this.$stage.remove(),
                            this.$element
                                .removeClass(this.options.refreshClass)
                                .removeClass(this.options.loadingClass)
                                .removeClass(this.options.loadedClass)
                                .removeClass(this.options.rtlClass)
                                .removeClass(this.options.dragClass)
                                .removeClass(this.options.grabClass)
                                .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                                .removeData("owl.carousel");
                    }),
                    (r.prototype.op = function (e, t, n) {
                        var i = this.settings.rtl;
                        switch (t) {
                            case "<":
                                return i ? e > n : e < n;
                            case ">":
                                return i ? e < n : e > n;
                            case ">=":
                                return i ? e <= n : e >= n;
                            case "<=":
                                return i ? e >= n : e <= n;
                        }
                    }),
                    (r.prototype.on = function (e, t, n, i) {
                        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n);
                    }),
                    (r.prototype.off = function (e, t, n, i) {
                        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n);
                    }),
                    (r.prototype.trigger = function (t, n, i, o, s) {
                        var a = { item: { count: this._items.length, index: this.current() } },
                            l = e.camelCase(
                                e
                                    .grep(["on", t, i], function (e) {
                                        return e;
                                    })
                                    .join("-")
                                    .toLowerCase()
                            ),
                            c = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({ relatedTarget: this }, a, n));
                        return (
                            this._supress[t] ||
                                (e.each(this._plugins, function (e, t) {
                                    t.onTrigger && t.onTrigger(c);
                                }),
                                this.register({ type: r.Type.Event, name: t }),
                                this.$element.trigger(c),
                                this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)),
                            c
                        );
                    }),
                    (r.prototype.enter = function (t) {
                        e.each(
                            [t].concat(this._states.tags[t] || []),
                            e.proxy(function (e, t) {
                                void 0 === this._states.current[t] && (this._states.current[t] = 0), this._states.current[t]++;
                            }, this)
                        );
                    }),
                    (r.prototype.leave = function (t) {
                        e.each(
                            [t].concat(this._states.tags[t] || []),
                            e.proxy(function (e, t) {
                                this._states.current[t]--;
                            }, this)
                        );
                    }),
                    (r.prototype.register = function (t) {
                        if (t.type === r.Type.Event) {
                            if ((e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl)) {
                                var n = e.event.special[t.name]._default;
                                (e.event.special[t.name]._default = function (e) {
                                    return !n || !n.apply || (e.namespace && -1 !== e.namespace.indexOf("owl")) ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments);
                                }),
                                    (e.event.special[t.name].owl = !0);
                            }
                        } else
                            t.type === r.Type.State &&
                                (this._states.tags[t.name] ? (this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags)) : (this._states.tags[t.name] = t.tags),
                                (this._states.tags[t.name] = e.grep(
                                    this._states.tags[t.name],
                                    e.proxy(function (n, i) {
                                        return e.inArray(n, this._states.tags[t.name]) === i;
                                    }, this)
                                )));
                    }),
                    (r.prototype.suppress = function (t) {
                        e.each(
                            t,
                            e.proxy(function (e, t) {
                                this._supress[t] = !0;
                            }, this)
                        );
                    }),
                    (r.prototype.release = function (t) {
                        e.each(
                            t,
                            e.proxy(function (e, t) {
                                delete this._supress[t];
                            }, this)
                        );
                    }),
                    (r.prototype.pointer = function (e) {
                        var t = { x: null, y: null };
                        return (
                            (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX
                                ? ((t.x = e.pageX), (t.y = e.pageY))
                                : ((t.x = e.clientX), (t.y = e.clientY)),
                            t
                        );
                    }),
                    (r.prototype.isNumeric = function (e) {
                        return !isNaN(parseFloat(e));
                    }),
                    (r.prototype.difference = function (e, t) {
                        return { x: e.x - t.x, y: e.y - t.y };
                    }),
                    (e.fn.owlCarousel = function (t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var i = e(this),
                                o = i.data("owl.carousel");
                            o ||
                                ((o = new r(this, "object" == typeof t && t)),
                                i.data("owl.carousel", o),
                                e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, n) {
                                    o.register({ type: r.Type.Event, name: n }),
                                        o.$element.on(
                                            n + ".owl.carousel.core",
                                            e.proxy(function (e) {
                                                e.namespace && e.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]));
                                            }, o)
                                        );
                                })),
                                "string" == typeof t && "_" !== t.charAt(0) && o[t].apply(o, n);
                        });
                    }),
                    (e.fn.owlCarousel.Constructor = r);
            })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    var o = function (t) {
                        (this._core = t),
                            (this._interval = null),
                            (this._visible = null),
                            (this._handlers = {
                                "initialized.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.autoRefresh && this.watch();
                                }, this),
                            }),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers);
                    };
                    (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                        (o.prototype.watch = function () {
                            this._interval || ((this._visible = this._core.isVisible()), (this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
                        }),
                        (o.prototype.refresh = function () {
                            this._core.isVisible() !== this._visible &&
                                ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
                        }),
                        (o.prototype.destroy = function () {
                            var e, n;
                            for (e in (t.clearInterval(this._interval), this._handlers)) this._core.$element.off(e, this._handlers[e]);
                            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
                })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    var o = function (t) {
                        (this._core = t),
                            (this._loaded = []),
                            (this._handlers = {
                                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function (t) {
                                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && ((t.property && "position" == t.property.name) || "initialized" == t.type)) {
                                        var n = this._core.settings,
                                            i = (n.center && Math.ceil(n.items / 2)) || n.items,
                                            o = (n.center && -1 * i) || 0,
                                            r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + o,
                                            s = this._core.clones().length,
                                            a = e.proxy(function (e, t) {
                                                this.load(t);
                                            }, this);
                                        for (n.lazyLoadEager > 0 && ((i += n.lazyLoadEager), n.loop && ((r -= n.lazyLoadEager), i++)); o++ < i; )
                                            this.load(s / 2 + this._core.relative(r)), s && e.each(this._core.clones(this._core.relative(r)), a), r++;
                                    }
                                }, this),
                            }),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers);
                    };
                    (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                        (o.prototype.load = function (n) {
                            var i = this._core.$stage.children().eq(n),
                                o = i && i.find(".owl-lazy");
                            !o ||
                                e.inArray(i.get(0), this._loaded) > -1 ||
                                (o.each(
                                    e.proxy(function (n, i) {
                                        var o,
                                            r = e(i),
                                            s = (t.devicePixelRatio > 1 && r.attr("data-src-retina")) || r.attr("data-src") || r.attr("data-srcset");
                                        this._core.trigger("load", { element: r, url: s }, "lazy"),
                                            r.is("img")
                                                ? r
                                                      .one(
                                                          "load.owl.lazy",
                                                          e.proxy(function () {
                                                              r.css("opacity", 1), this._core.trigger("loaded", { element: r, url: s }, "lazy");
                                                          }, this)
                                                      )
                                                      .attr("src", s)
                                                : r.is("source")
                                                ? r
                                                      .one(
                                                          "load.owl.lazy",
                                                          e.proxy(function () {
                                                              this._core.trigger("loaded", { element: r, url: s }, "lazy");
                                                          }, this)
                                                      )
                                                      .attr("srcset", s)
                                                : (((o = new Image()).onload = e.proxy(function () {
                                                      r.css({ "background-image": 'url("' + s + '")', opacity: "1" }), this._core.trigger("loaded", { element: r, url: s }, "lazy");
                                                  }, this)),
                                                  (o.src = s));
                                    }, this)
                                ),
                                this._loaded.push(i.get(0)));
                        }),
                        (o.prototype.destroy = function () {
                            var e, t;
                            for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.Lazy = o);
                })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    var o = function (n) {
                        (this._core = n),
                            (this._previousHeight = null),
                            (this._handlers = {
                                "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.autoHeight && this.update();
                                }, this),
                                "changed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update();
                                }, this),
                                "loaded.owl.lazy": e.proxy(function (e) {
                                    e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                                }, this),
                            }),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers),
                            (this._intervalId = null);
                        var i = this;
                        e(t).on("load", function () {
                            i._core.settings.autoHeight && i.update();
                        }),
                            e(t).resize(function () {
                                i._core.settings.autoHeight &&
                                    (null != i._intervalId && clearTimeout(i._intervalId),
                                    (i._intervalId = setTimeout(function () {
                                        i.update();
                                    }, 250)));
                            });
                    };
                    (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
                        (o.prototype.update = function () {
                            var t = this._core._current,
                                n = t + this._core.settings.items,
                                i = this._core.settings.lazyLoad,
                                o = this._core.$stage.children().toArray().slice(t, n),
                                r = [],
                                s = 0;
                            e.each(o, function (t, n) {
                                r.push(e(n).height());
                            }),
                                (s = Math.max.apply(null, r)) <= 1 && i && this._previousHeight && (s = this._previousHeight),
                                (this._previousHeight = s),
                                this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass);
                        }),
                        (o.prototype.destroy = function () {
                            var e, t;
                            for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
                })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    var o = function (t) {
                        (this._core = t),
                            (this._videos = {}),
                            (this._playing = null),
                            (this._handlers = {
                                "initialized.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                                }, this),
                                "resize.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault();
                                }, this),
                                "refreshed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                                }, this),
                                "changed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && "position" === e.property.name && this._playing && this.stop();
                                }, this),
                                "prepared.owl.carousel": e.proxy(function (t) {
                                    if (t.namespace) {
                                        var n = e(t.content).find(".owl-video");
                                        n.length && (n.css("display", "none"), this.fetch(n, e(t.content)));
                                    }
                                }, this),
                            }),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
                            this._core.$element.on(this._handlers),
                            this._core.$element.on(
                                "click.owl.video",
                                ".owl-video-play-icon",
                                e.proxy(function (e) {
                                    this.play(e);
                                }, this)
                            );
                    };
                    (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
                        (o.prototype.fetch = function (e, t) {
                            var n = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
                                i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
                                o = e.attr("data-width") || this._core.settings.videoWidth,
                                r = e.attr("data-height") || this._core.settings.videoHeight,
                                s = e.attr("href");
                            if (!s) throw new Error("Missing video URL.");
                            if (
                                (i = s.match(
                                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                ))[3].indexOf("youtu") > -1
                            )
                                n = "youtube";
                            else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                            else {
                                if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                                n = "vzaar";
                            }
                            (i = i[6]), (this._videos[s] = { type: n, id: i, width: o, height: r }), t.attr("data-video", s), this.thumbnail(e, this._videos[s]);
                        }),
                        (o.prototype.thumbnail = function (t, n) {
                            var i,
                                o,
                                r = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                                s = t.find("img"),
                                a = "src",
                                l = "",
                                c = this._core.settings,
                                d = function (n) {
                                    '<div class="owl-video-play-icon"></div>',
                                        (i = c.lazyLoad ? e("<div/>", { class: "owl-video-tn " + l, srcType: n }) : e("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + n + ")" })),
                                        t.after(i),
                                        t.after('<div class="owl-video-play-icon"></div>');
                                };
                            if ((t.wrap(e("<div/>", { class: "owl-video-wrapper", style: r })), this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")), s.length)) return d(s.attr(a)), s.remove(), !1;
                            "youtube" === n.type
                                ? ((o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"), d(o))
                                : "vimeo" === n.type
                                ? e.ajax({
                                      type: "GET",
                                      url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function (e) {
                                          (o = e[0].thumbnail_large), d(o);
                                      },
                                  })
                                : "vzaar" === n.type &&
                                  e.ajax({
                                      type: "GET",
                                      url: "//vzaar.com/api/videos/" + n.id + ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function (e) {
                                          (o = e.framegrab_url), d(o);
                                      },
                                  });
                        }),
                        (o.prototype.stop = function () {
                            this._core.trigger("stop", null, "video"),
                                this._playing.find(".owl-video-frame").remove(),
                                this._playing.removeClass("owl-video-playing"),
                                (this._playing = null),
                                this._core.leave("playing"),
                                this._core.trigger("stopped", null, "video");
                        }),
                        (o.prototype.play = function (t) {
                            var n,
                                i = e(t.target).closest("." + this._core.settings.itemClass),
                                o = this._videos[i.attr("data-video")],
                                r = o.width || "100%",
                                s = o.height || this._core.$stage.height();
                            this._playing ||
                                (this._core.enter("playing"),
                                this._core.trigger("play", null, "video"),
                                (i = this._core.items(this._core.relative(i.index()))),
                                this._core.reset(i.index()),
                                (n = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s),
                                n.attr("width", r),
                                "youtube" === o.type
                                    ? n.attr("src", "//www.youtube.com/embed/" + o.id + "?autoplay=1&rel=0&v=" + o.id)
                                    : "vimeo" === o.type
                                    ? n.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1")
                                    : "vzaar" === o.type && n.attr("src", "//view.vzaar.com/" + o.id + "/player?autoplay=true"),
                                e(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")),
                                (this._playing = i.addClass("owl-video-playing")));
                        }),
                        (o.prototype.isInFullScreen = function () {
                            var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
                            return t && e(t).parent().hasClass("owl-video-frame");
                        }),
                        (o.prototype.destroy = function () {
                            var e, t;
                            for (e in (this._core.$element.off("click.owl.video"), this._handlers)) this._core.$element.off(e, this._handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.Video = o);
                })(window.Zepto || e, window, document),
                (n = window.Zepto || e),
                window,
                document,
                ((i = function (e) {
                    (this.core = e),
                        (this.core.options = n.extend({}, i.Defaults, this.core.options)),
                        (this.swapping = !0),
                        (this.previous = void 0),
                        (this.next = void 0),
                        (this.handlers = {
                            "change.owl.carousel": n.proxy(function (e) {
                                e.namespace && "position" == e.property.name && ((this.previous = this.core.current()), (this.next = e.property.value));
                            }, this),
                            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function (e) {
                                e.namespace && (this.swapping = "translated" == e.type);
                            }, this),
                            "translate.owl.carousel": n.proxy(function (e) {
                                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                            }, this),
                        }),
                        this.core.$element.on(this.handlers);
                }).Defaults = { animateOut: !1, animateIn: !1 }),
                (i.prototype.swap = function () {
                    if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
                        this.core.speed(0);
                        var e,
                            t = n.proxy(this.clear, this),
                            i = this.core.$stage.children().eq(this.previous),
                            o = this.core.$stage.children().eq(this.next),
                            r = this.core.settings.animateIn,
                            s = this.core.settings.animateOut;
                        this.core.current() !== this.previous &&
                            (s &&
                                ((e = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                                i
                                    .one(n.support.animation.end, t)
                                    .css({ left: e + "px" })
                                    .addClass("animated owl-animated-out")
                                    .addClass(s)),
                            r && o.one(n.support.animation.end, t).addClass("animated owl-animated-in").addClass(r));
                    }
                }),
                (i.prototype.clear = function (e) {
                    n(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
                }),
                (i.prototype.destroy = function () {
                    var e, t;
                    for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
                    for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
                }),
                (n.fn.owlCarousel.Constructor.Plugins.Animate = i),
                (function (e, t, n, i) {
                    var o = function (t) {
                        (this._core = t),
                            (this._call = null),
                            (this._time = 0),
                            (this._timeout = 0),
                            (this._paused = !0),
                            (this._handlers = {
                                "changed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && "settings" === e.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : e.namespace && "position" === e.property.name && this._paused && (this._time = 0);
                                }, this),
                                "initialized.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.autoplay && this.play();
                                }, this),
                                "play.owl.autoplay": e.proxy(function (e, t, n) {
                                    e.namespace && this.play(t, n);
                                }, this),
                                "stop.owl.autoplay": e.proxy(function (e) {
                                    e.namespace && this.stop();
                                }, this),
                                "mouseover.owl.autoplay": e.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                                }, this),
                                "mouseleave.owl.autoplay": e.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                                }, this),
                                "touchstart.owl.core": e.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                                }, this),
                                "touchend.owl.core": e.proxy(function () {
                                    this._core.settings.autoplayHoverPause && this.play();
                                }, this),
                            }),
                            this._core.$element.on(this._handlers),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options));
                    };
                    (o.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
                        (o.prototype._next = function (i) {
                            (this._call = t.setTimeout(e.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                                this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed);
                        }),
                        (o.prototype.read = function () {
                            return new Date().getTime() - this._time;
                        }),
                        (o.prototype.play = function (n, i) {
                            var o;
                            this._core.is("rotating") || this._core.enter("rotating"),
                                (n = n || this._core.settings.autoplayTimeout),
                                (o = Math.min(this._time % (this._timeout || n), n)),
                                this._paused ? ((this._time = this.read()), (this._paused = !1)) : t.clearTimeout(this._call),
                                (this._time += (this.read() % n) - o),
                                (this._timeout = n),
                                (this._call = t.setTimeout(e.proxy(this._next, this, i), n - o));
                        }),
                        (o.prototype.stop = function () {
                            this._core.is("rotating") && ((this._time = 0), (this._paused = !0), t.clearTimeout(this._call), this._core.leave("rotating"));
                        }),
                        (o.prototype.pause = function () {
                            this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), t.clearTimeout(this._call));
                        }),
                        (o.prototype.destroy = function () {
                            var e, t;
                            for (e in (this.stop(), this._handlers)) this._core.$element.off(e, this._handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.autoplay = o);
                })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    "use strict";
                    var o = function (t) {
                        (this._core = t),
                            (this._initialized = !1),
                            (this._pages = []),
                            (this._controls = {}),
                            (this._templates = []),
                            (this.$element = this._core.$element),
                            (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                            (this._handlers = {
                                "prepared.owl.carousel": e.proxy(function (t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                                }, this),
                                "added.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop());
                                }, this),
                                "remove.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1);
                                }, this),
                                "changed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && "position" == e.property.name && this.draw();
                                }, this),
                                "initialized.owl.carousel": e.proxy(function (e) {
                                    e.namespace &&
                                        !this._initialized &&
                                        (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                                }, this),
                                "refreshed.owl.carousel": e.proxy(function (e) {
                                    e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                                }, this),
                            }),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
                            this.$element.on(this._handlers);
                    };
                    (o.Defaults = {
                        nav: !1,
                        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1,
                    }),
                        (o.prototype.initialize = function () {
                            var t,
                                n = this._core.settings;
                            for (t in ((this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                            (this._controls.$previous = e("<" + n.navElement + ">")
                                .addClass(n.navClass[0])
                                .html(n.navText[0])
                                .prependTo(this._controls.$relative)
                                .on(
                                    "click",
                                    e.proxy(function (e) {
                                        this.prev(n.navSpeed);
                                    }, this)
                                )),
                            (this._controls.$next = e("<" + n.navElement + ">")
                                .addClass(n.navClass[1])
                                .html(n.navText[1])
                                .appendTo(this._controls.$relative)
                                .on(
                                    "click",
                                    e.proxy(function (e) {
                                        this.next(n.navSpeed);
                                    }, this)
                                )),
                            n.dotsData || (this._templates = [e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]),
                            (this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled")),
                            this._controls.$absolute.on(
                                "click",
                                "button",
                                e.proxy(function (t) {
                                    var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                                    t.preventDefault(), this.to(i, n.dotsSpeed);
                                }, this)
                            ),
                            this._overrides))
                                this._core[t] = e.proxy(this[t], this);
                        }),
                        (o.prototype.destroy = function () {
                            var e, t, n, i, o;
                            for (e in ((o = this._core.settings), this._handlers)) this.$element.off(e, this._handlers[e]);
                            for (t in this._controls) "$relative" === t && o.navContainer ? this._controls[t].html("") : this._controls[t].remove();
                            for (i in this.overides) this._core[i] = this._overrides[i];
                            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null);
                        }),
                        (o.prototype.update = function () {
                            var e,
                                t,
                                n = this._core.clones().length / 2,
                                i = n + this._core.items().length,
                                o = this._core.maximum(!0),
                                r = this._core.settings,
                                s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
                            if (("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy))
                                for (this._pages = [], e = n, t = 0, 0; e < i; e++) {
                                    if (t >= s || 0 === t) {
                                        if ((this._pages.push({ start: Math.min(o, e - n), end: e - n + s - 1 }), Math.min(o, e - n) === o)) break;
                                        t = 0;
                                    }
                                    t += this._core.mergers(this._core.relative(e));
                                }
                        }),
                        (o.prototype.draw = function () {
                            var t,
                                n = this._core.settings,
                                i = this._core.items().length <= n.items,
                                o = this._core.relative(this._core.current()),
                                r = n.loop || n.rewind;
                            this._controls.$relative.toggleClass("disabled", !n.nav || i),
                                n.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))),
                                this._controls.$absolute.toggleClass("disabled", !n.dots || i),
                                n.dots &&
                                    ((t = this._pages.length - this._controls.$absolute.children().length),
                                    n.dotsData && 0 !== t
                                        ? this._controls.$absolute.html(this._templates.join(""))
                                        : t > 0
                                        ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0]))
                                        : t < 0 && this._controls.$absolute.children().slice(t).remove(),
                                    this._controls.$absolute.find(".active").removeClass("active"),
                                    this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"));
                        }),
                        (o.prototype.onTrigger = function (t) {
                            var n = this._core.settings;
                            t.page = { index: e.inArray(this.current(), this._pages), count: this._pages.length, size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items) };
                        }),
                        (o.prototype.current = function () {
                            var t = this._core.relative(this._core.current());
                            return e
                                .grep(
                                    this._pages,
                                    e.proxy(function (e, n) {
                                        return e.start <= t && e.end >= t;
                                    }, this)
                                )
                                .pop();
                        }),
                        (o.prototype.getPosition = function (t) {
                            var n,
                                i,
                                o = this._core.settings;
                            return (
                                "page" == o.slideBy
                                    ? ((n = e.inArray(this.current(), this._pages)), (i = this._pages.length), t ? ++n : --n, (n = this._pages[((n % i) + i) % i].start))
                                    : ((n = this._core.relative(this._core.current())), (i = this._core.items().length), t ? (n += o.slideBy) : (n -= o.slideBy)),
                                n
                            );
                        }),
                        (o.prototype.next = function (t) {
                            e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
                        }),
                        (o.prototype.prev = function (t) {
                            e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
                        }),
                        (o.prototype.to = function (t, n, i) {
                            var o;
                            !i && this._pages.length ? ((o = this._pages.length), e.proxy(this._overrides.to, this._core)(this._pages[((t % o) + o) % o].start, n)) : e.proxy(this._overrides.to, this._core)(t, n);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.Navigation = o);
                })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    "use strict";
                    var o = function (n) {
                        (this._core = n),
                            (this._hashes = {}),
                            (this.$element = this._core.$element),
                            (this._handlers = {
                                "initialized.owl.carousel": e.proxy(function (n) {
                                    n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation");
                                }, this),
                                "prepared.owl.carousel": e.proxy(function (t) {
                                    if (t.namespace) {
                                        var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                        if (!n) return;
                                        this._hashes[n] = t.content;
                                    }
                                }, this),
                                "changed.owl.carousel": e.proxy(function (n) {
                                    if (n.namespace && "position" === n.property.name) {
                                        var i = this._core.items(this._core.relative(this._core.current())),
                                            o = e
                                                .map(this._hashes, function (e, t) {
                                                    return e === i ? t : null;
                                                })
                                                .join();
                                        if (!o || t.location.hash.slice(1) === o) return;
                                        t.location.hash = o;
                                    }
                                }, this),
                            }),
                            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
                            this.$element.on(this._handlers),
                            e(t).on(
                                "hashchange.owl.navigation",
                                e.proxy(function (e) {
                                    var n = t.location.hash.substring(1),
                                        i = this._core.$stage.children(),
                                        o = this._hashes[n] && i.index(this._hashes[n]);
                                    void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0);
                                }, this)
                            );
                    };
                    (o.Defaults = { URLhashListener: !1 }),
                        (o.prototype.destroy = function () {
                            var n, i;
                            for (n in (e(t).off("hashchange.owl.navigation"), this._handlers)) this._core.$element.off(n, this._handlers[n]);
                            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
                        }),
                        (e.fn.owlCarousel.Constructor.Plugins.Hash = o);
                })(window.Zepto || e, window, document),
                (function (e, t, n, i) {
                    var o = e("<support>").get(0).style,
                        r = "Webkit Moz O ms".split(" "),
                        s = {
                            transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                            animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
                        },
                        a = function () {
                            return !!d("transform");
                        },
                        l = function () {
                            return !!d("perspective");
                        },
                        c = function () {
                            return !!d("animation");
                        };
                    function d(t, n) {
                        var s = !1,
                            a = t.charAt(0).toUpperCase() + t.slice(1);
                        return (
                            e.each((t + " " + r.join(a + " ") + a).split(" "), function (e, t) {
                                if (o[t] !== i) return (s = !n || t), !1;
                            }),
                            s
                        );
                    }
                    function u(e) {
                        return d(e, !0);
                    }
                    (function () {
                        return !!d("transition");
                    })() && ((e.support.transition = new String(u("transition"))), (e.support.transition.end = s.transition.end[e.support.transition])),
                        c() && ((e.support.animation = new String(u("animation"))), (e.support.animation.end = s.animation.end[e.support.animation])),
                        a() && ((e.support.transform = new String(u("transform"))), (e.support.transform3d = l()));
                })(window.Zepto || e, window, document);
        }.call(this, n(1), n(1)));
    },
    function (e, t, n) {
        var i = n(17);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var o = { insert: "head", singleton: !1 };
        n(3)(i, o);
        i.locals && (e.exports = i.locals);
    },
    function (e, t, n) {
        t = e.exports = n(2)(!1);
        var i = n(5)(n(18));
        t.push([
            e.i,
            '/**\n * Owl Carousel v2.3.4\n * Copyright 2013-2018 David Deutsch\n * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE\n */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1; }\n  .owl-carousel .owl-stage {\n    position: relative;\n    touch-action: manipulation;\n    -moz-backface-visibility: hidden;\n    /* fix firefox animation glitch */ }\n  .owl-carousel .owl-stage:after {\n    content: ".";\n    display: block;\n    clear: both;\n    visibility: hidden;\n    line-height: 0;\n    height: 0; }\n  .owl-carousel .owl-stage-outer {\n    position: relative;\n    overflow: hidden;\n    /* fix for flashing background */\n    -webkit-transform: translate3d(0px, 0px, 0px); }\n  .owl-carousel .owl-wrapper,\n  .owl-carousel .owl-item {\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -ms-backface-visibility: hidden;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0); }\n  .owl-carousel .owl-item {\n    position: relative;\n    min-height: 1px;\n    float: left;\n    -webkit-backface-visibility: hidden;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none; }\n  .owl-carousel .owl-item img {\n    display: block;\n    width: 100%; }\n  .owl-carousel .owl-nav.disabled,\n  .owl-carousel .owl-dots.disabled {\n    display: none; }\n  .owl-carousel .owl-nav .owl-prev,\n  .owl-carousel .owl-nav .owl-next,\n  .owl-carousel .owl-dot {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .owl-carousel .owl-nav button.owl-prev,\n  .owl-carousel .owl-nav button.owl-next,\n  .owl-carousel button.owl-dot {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0 !important;\n    font: inherit; }\n  .owl-carousel.owl-loaded {\n    display: block; }\n  .owl-carousel.owl-loading {\n    opacity: 0;\n    display: block; }\n  .owl-carousel.owl-hidden {\n    opacity: 0; }\n  .owl-carousel.owl-refresh .owl-item {\n    visibility: hidden; }\n  .owl-carousel.owl-drag .owl-item {\n    touch-action: pan-y;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .owl-carousel.owl-grab {\n    cursor: move;\n    cursor: -webkit-grab;\n    cursor: grab; }\n  .owl-carousel.owl-rtl {\n    direction: rtl; }\n  .owl-carousel.owl-rtl .owl-item {\n    float: right; }\n\n/* No Js */\n.no-js .owl-carousel {\n  display: block; }\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.owl-carousel .owl-animated-in {\n  z-index: 0; }\n\n.owl-carousel .owl-animated-out {\n  z-index: 1; }\n\n.owl-carousel .fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out; }\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item {\n  /**\n\t\t\tThis is introduced due to a bug in IE11 where lazy loading combined with autoheight plugin causes a wrong\n\t\t\tcalculation of the height of the owl-item that breaks page layouts\n\t\t */ }\n  .owl-carousel .owl-item .owl-lazy {\n    opacity: 0;\n    transition: opacity 400ms ease; }\n  .owl-carousel .owl-item .owl-lazy[src^=""], .owl-carousel .owl-item .owl-lazy:not([src]) {\n    max-height: 0; }\n  .owl-carousel .owl-item img.owl-lazy {\n    transform-style: preserve-3d; }\n\n/*\n * \tOwl Carousel - Video Plugin\n */\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000; }\n\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  background: url(' +
                i +
                ") no-repeat;\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease; }\n\n.owl-carousel .owl-video-play-icon:hover {\n  transform: scale(1.3, 1.3); }\n\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none; }\n\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease; }\n\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%; }\n",
            "",
        ]);
    },
    function (e, t) {
        e.exports = "/images/vendor/owl.carousel/dist/owl.video.play.png?4a37f8008959c75f619bf0a3a4e2d7a2";
    },
    function (e, t, n) {
        var i = n(20);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var o = { insert: "head", singleton: !1 };
        n(3)(i, o);
        i.locals && (e.exports = i.locals);
    },
    function (e, t, n) {
        (e.exports = n(2)(!1)).push([
            e.i,
            '/*! nouislider - 14.0.3 - 10/10/2019 */\n/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don\'t need to change these rules to apply your design.\n */\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  touch-action: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.noUi-target {\n  position: relative;\n  direction: ltr;\n}\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0;\n}\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat;\n}\n.noUi-connect {\n  height: 100%;\n  width: 100%;\n}\n.noUi-origin {\n  height: 10%;\n  width: 10%;\n}\n/* Offset direction\n */\nhtml:not([dir="rtl"]) .noUi-horizontal .noUi-origin {\n  left: auto;\n  right: 0;\n}\n/* Give origins 0 height/width so they don\'t interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  width: 0;\n}\n.noUi-horizontal .noUi-origin {\n  height: 0;\n}\n.noUi-handle {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n}\n.noUi-touch-area {\n  height: 100%;\n  width: 100%;\n}\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  transition: transform 0.3s;\n}\n.noUi-state-drag * {\n  cursor: inherit !important;\n}\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 18px;\n}\n.noUi-horizontal .noUi-handle {\n  width: 34px;\n  height: 28px;\n  left: -17px;\n  top: -6px;\n}\n.noUi-vertical {\n  width: 18px;\n}\n.noUi-vertical .noUi-handle {\n  width: 28px;\n  height: 34px;\n  left: -6px;\n  top: -17px;\n}\nhtml:not([dir="rtl"]) .noUi-horizontal .noUi-handle {\n  right: -17px;\n  left: auto;\n}\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background: #FAFAFA;\n  border-radius: 4px;\n  border: 1px solid #D3D3D3;\n  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\n}\n.noUi-connects {\n  border-radius: 3px;\n}\n.noUi-connect {\n  background: #3FB8AF;\n}\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize;\n}\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize;\n}\n.noUi-handle {\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\n}\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n}\n/* Handle stripes;\n */\n.noUi-handle:before,\n.noUi-handle:after {\n  content: "";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  background: #E8E7E6;\n  left: 14px;\n  top: 6px;\n}\n.noUi-handle:after {\n  left: 17px;\n}\n.noUi-vertical .noUi-handle:before,\n.noUi-vertical .noUi-handle:after {\n  width: 14px;\n  height: 1px;\n  left: 6px;\n  top: 14px;\n}\n.noUi-vertical .noUi-handle:after {\n  top: 17px;\n}\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8;\n}\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed;\n}\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  box-sizing: border-box;\n}\n.noUi-pips {\n  position: absolute;\n  color: #999;\n}\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center;\n}\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px;\n}\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC;\n}\n.noUi-marker-sub {\n  background: #AAA;\n}\n.noUi-marker-large {\n  background: #AAA;\n}\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n.noUi-value-horizontal {\n  transform: translate(-50%, 50%);\n}\n.noUi-rtl .noUi-value-horizontal {\n  transform: translate(50%, 50%);\n}\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px;\n}\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px;\n}\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px;\n}\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%;\n}\n.noUi-value-vertical {\n  transform: translate(0, -50%);\n  padding-left: 25px;\n}\n.noUi-rtl .noUi-value-vertical {\n  transform: translate(0, 50%);\n}\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px;\n}\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px;\n}\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px;\n}\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n}\n.noUi-horizontal .noUi-tooltip {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%;\n}\n.noUi-vertical .noUi-tooltip {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%;\n}\n',
            "",
        ]);
    },
    function (e, t, n) {
        var i, o, r;
        !(function (s) {
            "use strict";
            (o = [n(1)]),
                void 0 ===
                    (r =
                        "function" ==
                        typeof (i = function (e) {
                            var t = window.Slick || {};
                            (((n = 0),
                            (t = function (t, i) {
                                var o,
                                    r = this;
                                (r.defaults = {
                                    accessibility: !0,
                                    adaptiveHeight: !1,
                                    appendArrows: e(t),
                                    appendDots: e(t),
                                    arrows: !0,
                                    asNavFor: null,
                                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                    autoplay: !1,
                                    autoplaySpeed: 3e3,
                                    centerMode: !1,
                                    centerPadding: "50px",
                                    cssEase: "ease",
                                    customPaging: function (t, n) {
                                        return e('<button type="button" />').text(n + 1);
                                    },
                                    dots: !1,
                                    dotsClass: "slick-dots",
                                    draggable: !0,
                                    easing: "linear",
                                    edgeFriction: 0.35,
                                    fade: !1,
                                    focusOnSelect: !1,
                                    focusOnChange: !1,
                                    infinite: !0,
                                    initialSlide: 0,
                                    lazyLoad: "ondemand",
                                    mobileFirst: !1,
                                    pauseOnHover: !0,
                                    pauseOnFocus: !0,
                                    pauseOnDotsHover: !1,
                                    respondTo: "window",
                                    responsive: null,
                                    rows: 1,
                                    rtl: !1,
                                    slide: "",
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    speed: 500,
                                    swipe: !0,
                                    swipeToSlide: !1,
                                    touchMove: !0,
                                    touchThreshold: 5,
                                    useCSS: !0,
                                    useTransform: !0,
                                    variableWidth: !1,
                                    vertical: !1,
                                    verticalSwiping: !1,
                                    waitForAnimate: !0,
                                    zIndex: 1e3,
                                }),
                                    (r.initials = {
                                        animating: !1,
                                        dragging: !1,
                                        autoPlayTimer: null,
                                        currentDirection: 0,
                                        currentLeft: null,
                                        currentSlide: 0,
                                        direction: 1,
                                        $dots: null,
                                        listWidth: null,
                                        listHeight: null,
                                        loadIndex: 0,
                                        $nextArrow: null,
                                        $prevArrow: null,
                                        scrolling: !1,
                                        slideCount: null,
                                        slideWidth: null,
                                        $slideTrack: null,
                                        $slides: null,
                                        sliding: !1,
                                        slideOffset: 0,
                                        swipeLeft: null,
                                        swiping: !1,
                                        $list: null,
                                        touchObject: {},
                                        transformsEnabled: !1,
                                        unslicked: !1,
                                    }),
                                    e.extend(r, r.initials),
                                    (r.activeBreakpoint = null),
                                    (r.animType = null),
                                    (r.animProp = null),
                                    (r.breakpoints = []),
                                    (r.breakpointSettings = []),
                                    (r.cssTransitions = !1),
                                    (r.focussed = !1),
                                    (r.interrupted = !1),
                                    (r.hidden = "hidden"),
                                    (r.paused = !0),
                                    (r.positionProp = null),
                                    (r.respondTo = null),
                                    (r.rowCount = 1),
                                    (r.shouldClick = !0),
                                    (r.$slider = e(t)),
                                    (r.$slidesCache = null),
                                    (r.transformType = null),
                                    (r.transitionType = null),
                                    (r.visibilityChange = "visibilitychange"),
                                    (r.windowWidth = 0),
                                    (r.windowTimer = null),
                                    (o = e(t).data("slick") || {}),
                                    (r.options = e.extend({}, r.defaults, i, o)),
                                    (r.currentSlide = r.options.initialSlide),
                                    (r.originalSettings = r.options),
                                    void 0 !== document.mozHidden
                                        ? ((r.hidden = "mozHidden"), (r.visibilityChange = "mozvisibilitychange"))
                                        : void 0 !== document.webkitHidden && ((r.hidden = "webkitHidden"), (r.visibilityChange = "webkitvisibilitychange")),
                                    (r.autoPlay = e.proxy(r.autoPlay, r)),
                                    (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                                    (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                                    (r.changeSlide = e.proxy(r.changeSlide, r)),
                                    (r.clickHandler = e.proxy(r.clickHandler, r)),
                                    (r.selectHandler = e.proxy(r.selectHandler, r)),
                                    (r.setPosition = e.proxy(r.setPosition, r)),
                                    (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                                    (r.dragHandler = e.proxy(r.dragHandler, r)),
                                    (r.keyHandler = e.proxy(r.keyHandler, r)),
                                    (r.instanceUid = n++),
                                    (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                                    r.registerBreakpoints(),
                                    r.init(!0);
                            })).prototype.activateADA = function () {
                                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
                            }),
                                (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
                                    var o = this;
                                    if ("boolean" == typeof n) (i = n), (n = null);
                                    else if (n < 0 || n >= o.slideCount) return !1;
                                    o.unload(),
                                        "number" == typeof n
                                            ? 0 === n && 0 === o.$slides.length
                                                ? e(t).appendTo(o.$slideTrack)
                                                : i
                                                ? e(t).insertBefore(o.$slides.eq(n))
                                                : e(t).insertAfter(o.$slides.eq(n))
                                            : !0 === i
                                            ? e(t).prependTo(o.$slideTrack)
                                            : e(t).appendTo(o.$slideTrack),
                                        (o.$slides = o.$slideTrack.children(this.options.slide)),
                                        o.$slideTrack.children(this.options.slide).detach(),
                                        o.$slideTrack.append(o.$slides),
                                        o.$slides.each(function (t, n) {
                                            e(n).attr("data-slick-index", t);
                                        }),
                                        (o.$slidesCache = o.$slides),
                                        o.reinit();
                                }),
                                (t.prototype.animateHeight = function () {
                                    var e = this;
                                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                        e.$list.animate({ height: t }, e.options.speed);
                                    }
                                }),
                                (t.prototype.animateSlide = function (t, n) {
                                    var i = {},
                                        o = this;
                                    o.animateHeight(),
                                        !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
                                        !1 === o.transformsEnabled
                                            ? !1 === o.options.vertical
                                                ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n)
                                                : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n)
                                            : !1 === o.cssTransitions
                                            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                                              e({ animStart: o.currentLeft }).animate(
                                                  { animStart: t },
                                                  {
                                                      duration: o.options.speed,
                                                      easing: o.options.easing,
                                                      step: function (e) {
                                                          (e = Math.ceil(e)),
                                                              !1 === o.options.vertical ? ((i[o.animType] = "translate(" + e + "px, 0px)"), o.$slideTrack.css(i)) : ((i[o.animType] = "translate(0px," + e + "px)"), o.$slideTrack.css(i));
                                                      },
                                                      complete: function () {
                                                          n && n.call();
                                                      },
                                                  }
                                              ))
                                            : (o.applyTransition(),
                                              (t = Math.ceil(t)),
                                              !1 === o.options.vertical ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
                                              o.$slideTrack.css(i),
                                              n &&
                                                  setTimeout(function () {
                                                      o.disableTransition(), n.call();
                                                  }, o.options.speed));
                                }),
                                (t.prototype.getNavTarget = function () {
                                    var t = this.options.asNavFor;
                                    return t && null !== t && (t = e(t).not(this.$slider)), t;
                                }),
                                (t.prototype.asNavFor = function (t) {
                                    var n = this.getNavTarget();
                                    null !== n &&
                                        "object" == typeof n &&
                                        n.each(function () {
                                            var n = e(this).slick("getSlick");
                                            n.unslicked || n.slideHandler(t, !0);
                                        });
                                }),
                                (t.prototype.applyTransition = function (e) {
                                    var t = this,
                                        n = {};
                                    !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                                        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                                }),
                                (t.prototype.autoPlay = function () {
                                    var e = this;
                                    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
                                }),
                                (t.prototype.autoPlayClear = function () {
                                    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                                }),
                                (t.prototype.autoPlayIterator = function () {
                                    var e = this,
                                        t = e.currentSlide + e.options.slidesToScroll;
                                    e.paused ||
                                        e.interrupted ||
                                        e.focussed ||
                                        (!1 === e.options.infinite &&
                                            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                                                ? (e.direction = 0)
                                                : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                                        e.slideHandler(t));
                                }),
                                (t.prototype.buildArrows = function () {
                                    var t = this;
                                    !0 === t.options.arrows &&
                                        ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
                                        (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
                                        t.slideCount > t.options.slidesToShow
                                            ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                              t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                              t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                                              t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                                              !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                                            : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                                }),
                                (t.prototype.buildDots = function () {
                                    var t,
                                        n,
                                        i = this;
                                    if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                                        for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                                        (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
                                    }
                                }),
                                (t.prototype.buildOut = function () {
                                    var t = this;
                                    (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                                        (t.slideCount = t.$slides.length),
                                        t.$slides.each(function (t, n) {
                                            e(n)
                                                .attr("data-slick-index", t)
                                                .data("originalStyling", e(n).attr("style") || "");
                                        }),
                                        t.$slider.addClass("slick-slider"),
                                        (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                                        (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                                        t.$slideTrack.css("opacity", 0),
                                        (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                                        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                                        t.setupInfinite(),
                                        t.buildArrows(),
                                        t.buildDots(),
                                        t.updateDots(),
                                        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                        !0 === t.options.draggable && t.$list.addClass("draggable");
                                }),
                                (t.prototype.buildRows = function () {
                                    var e,
                                        t,
                                        n,
                                        i,
                                        o,
                                        r,
                                        s,
                                        a = this;
                                    if (((i = document.createDocumentFragment()), (r = a.$slider.children()), a.options.rows > 0)) {
                                        for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                                            var l = document.createElement("div");
                                            for (t = 0; t < a.options.rows; t++) {
                                                var c = document.createElement("div");
                                                for (n = 0; n < a.options.slidesPerRow; n++) {
                                                    var d = e * s + (t * a.options.slidesPerRow + n);
                                                    r.get(d) && c.appendChild(r.get(d));
                                                }
                                                l.appendChild(c);
                                            }
                                            i.appendChild(l);
                                        }
                                        a.$slider.empty().append(i),
                                            a.$slider
                                                .children()
                                                .children()
                                                .children()
                                                .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                                    }
                                }),
                                (t.prototype.checkResponsive = function (t, n) {
                                    var i,
                                        o,
                                        r,
                                        s = this,
                                        a = !1,
                                        l = s.$slider.width(),
                                        c = window.innerWidth || e(window).width();
                                    if (
                                        ("window" === s.respondTo ? (r = c) : "slider" === s.respondTo ? (r = l) : "min" === s.respondTo && (r = Math.min(c, l)),
                                        s.options.responsive && s.options.responsive.length && null !== s.options.responsive)
                                    ) {
                                        for (i in ((o = null), s.breakpoints))
                                            s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                                        null !== o
                                            ? null !== s.activeBreakpoint
                                                ? (o !== s.activeBreakpoint || n) &&
                                                  ((s.activeBreakpoint = o),
                                                  "unslick" === s.breakpointSettings[o]
                                                      ? s.unslick(o)
                                                      : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                                                  (a = o))
                                                : ((s.activeBreakpoint = o),
                                                  "unslick" === s.breakpointSettings[o]
                                                      ? s.unslick(o)
                                                      : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                                                  (a = o))
                                            : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), (a = o)),
                                            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                                    }
                                }),
                                (t.prototype.changeSlide = function (t, n) {
                                    var i,
                                        o,
                                        r = this,
                                        s = e(t.currentTarget);
                                    switch (
                                        (s.is("a") && t.preventDefault(),
                                        s.is("li") || (s = s.closest("li")),
                                        (i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
                                        t.data.message)
                                    ) {
                                        case "previous":
                                            (o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                                            break;
                                        case "next":
                                            (o = 0 === i ? r.options.slidesToScroll : i), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                                            break;
                                        case "index":
                                            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                                            r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                                            break;
                                        default:
                                            return;
                                    }
                                }),
                                (t.prototype.checkNavigable = function (e) {
                                    var t, n;
                                    if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
                                    else
                                        for (var i in t) {
                                            if (e < t[i]) {
                                                e = n;
                                                break;
                                            }
                                            n = t[i];
                                        }
                                    return e;
                                }),
                                (t.prototype.cleanUpEvents = function () {
                                    var t = this;
                                    t.options.dots &&
                                        null !== t.$dots &&
                                        (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                                        !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                                        t.$slider.off("focus.slick blur.slick"),
                                        !0 === t.options.arrows &&
                                            t.slideCount > t.options.slidesToShow &&
                                            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                                            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                                            !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                                        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                                        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                                        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                                        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                                        t.$list.off("click.slick", t.clickHandler),
                                        e(document).off(t.visibilityChange, t.visibility),
                                        t.cleanUpSlideEvents(),
                                        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                                        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                                        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                                        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                                        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                                        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
                                }),
                                (t.prototype.cleanUpSlideEvents = function () {
                                    var t = this;
                                    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                                }),
                                (t.prototype.cleanUpRows = function () {
                                    var e,
                                        t = this;
                                    t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
                                }),
                                (t.prototype.clickHandler = function (e) {
                                    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
                                }),
                                (t.prototype.destroy = function (t) {
                                    var n = this;
                                    n.autoPlayClear(),
                                        (n.touchObject = {}),
                                        n.cleanUpEvents(),
                                        e(".slick-cloned", n.$slider).detach(),
                                        n.$dots && n.$dots.remove(),
                                        n.$prevArrow &&
                                            n.$prevArrow.length &&
                                            (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                                            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                                        n.$nextArrow &&
                                            n.$nextArrow.length &&
                                            (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                                            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                                        n.$slides &&
                                            (n.$slides
                                                .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                                                .removeAttr("aria-hidden")
                                                .removeAttr("data-slick-index")
                                                .each(function () {
                                                    e(this).attr("style", e(this).data("originalStyling"));
                                                }),
                                            n.$slideTrack.children(this.options.slide).detach(),
                                            n.$slideTrack.detach(),
                                            n.$list.detach(),
                                            n.$slider.append(n.$slides)),
                                        n.cleanUpRows(),
                                        n.$slider.removeClass("slick-slider"),
                                        n.$slider.removeClass("slick-initialized"),
                                        n.$slider.removeClass("slick-dotted"),
                                        (n.unslicked = !0),
                                        t || n.$slider.trigger("destroy", [n]);
                                }),
                                (t.prototype.disableTransition = function (e) {
                                    var t = this,
                                        n = {};
                                    (n[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                                }),
                                (t.prototype.fadeSlide = function (e, t) {
                                    var n = this;
                                    !1 === n.cssTransitions
                                        ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                                        : (n.applyTransition(e),
                                          n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                                          t &&
                                              setTimeout(function () {
                                                  n.disableTransition(e), t.call();
                                              }, n.options.speed));
                                }),
                                (t.prototype.fadeSlideOut = function (e) {
                                    var t = this;
                                    !1 === t.cssTransitions
                                        ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing)
                                        : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                                }),
                                (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                                    var t = this;
                                    null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
                                }),
                                (t.prototype.focusHandler = function () {
                                    var t = this;
                                    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                                        n.stopImmediatePropagation();
                                        var i = e(this);
                                        setTimeout(function () {
                                            t.options.pauseOnFocus && ((t.focussed = i.is(":focus")), t.autoPlay());
                                        }, 0);
                                    });
                                }),
                                (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                                    return this.currentSlide;
                                }),
                                (t.prototype.getDotCount = function () {
                                    var e = this,
                                        t = 0,
                                        n = 0,
                                        i = 0;
                                    if (!0 === e.options.infinite)
                                        if (e.slideCount <= e.options.slidesToShow) ++i;
                                        else for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                    else if (!0 === e.options.centerMode) i = e.slideCount;
                                    else if (e.options.asNavFor)
                                        for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                    else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                                    return i - 1;
                                }),
                                (t.prototype.getLeft = function (e) {
                                    var t,
                                        n,
                                        i,
                                        o,
                                        r = this,
                                        s = 0;
                                    return (
                                        (r.slideOffset = 0),
                                        (n = r.$slides.first().outerHeight(!0)),
                                        !0 === r.options.infinite
                                            ? (r.slideCount > r.options.slidesToShow &&
                                                  ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                                                  (o = -1),
                                                  !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? (o = -1.5) : 1 === r.options.slidesToShow && (o = -2)),
                                                  (s = n * r.options.slidesToShow * o)),
                                              r.slideCount % r.options.slidesToScroll != 0 &&
                                                  e + r.options.slidesToScroll > r.slideCount &&
                                                  r.slideCount > r.options.slidesToShow &&
                                                  (e > r.slideCount
                                                      ? ((r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1), (s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                                                      : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1), (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
                                            : e + r.options.slidesToShow > r.slideCount && ((r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth), (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                                        r.slideCount <= r.options.slidesToShow && ((r.slideOffset = 0), (s = 0)),
                                        !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
                                            ? (r.slideOffset = (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 - (r.slideWidth * r.slideCount) / 2)
                                            : !0 === r.options.centerMode && !0 === r.options.infinite
                                            ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
                                            : !0 === r.options.centerMode && ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
                                        (t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s),
                                        !0 === r.options.variableWidth &&
                                            ((i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow)),
                                            (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                                            !0 === r.options.centerMode &&
                                                ((i =
                                                    r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite
                                                        ? r.$slideTrack.children(".slick-slide").eq(e)
                                                        : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1)),
                                                (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                                                (t += (r.$list.width() - i.outerWidth()) / 2))),
                                        t
                                    );
                                }),
                                (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                                    return this.options[e];
                                }),
                                (t.prototype.getNavigableIndexes = function () {
                                    var e,
                                        t = this,
                                        n = 0,
                                        i = 0,
                                        o = [];
                                    for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); n < e; )
                                        o.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                                    return o;
                                }),
                                (t.prototype.getSlick = function () {
                                    return this;
                                }),
                                (t.prototype.getSlideCount = function () {
                                    var t,
                                        n,
                                        i = this;
                                    return (
                                        (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
                                        !0 === i.options.swipeToSlide
                                            ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                                                  if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return (t = r), !1;
                                              }),
                                              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
                                            : i.options.slidesToScroll
                                    );
                                }),
                                (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                                    this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
                                }),
                                (t.prototype.init = function (t) {
                                    var n = this;
                                    e(n.$slider).hasClass("slick-initialized") ||
                                        (e(n.$slider).addClass("slick-initialized"),
                                        n.buildRows(),
                                        n.buildOut(),
                                        n.setProps(),
                                        n.startLoad(),
                                        n.loadSlider(),
                                        n.initializeEvents(),
                                        n.updateArrows(),
                                        n.updateDots(),
                                        n.checkResponsive(!0),
                                        n.focusHandler()),
                                        t && n.$slider.trigger("init", [n]),
                                        !0 === n.options.accessibility && n.initADA(),
                                        n.options.autoplay && ((n.paused = !1), n.autoPlay());
                                }),
                                (t.prototype.initADA = function () {
                                    var t = this,
                                        n = Math.ceil(t.slideCount / t.options.slidesToShow),
                                        i = t.getNavigableIndexes().filter(function (e) {
                                            return e >= 0 && e < t.slideCount;
                                        });
                                    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                                        null !== t.$dots &&
                                            (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                                                var o = i.indexOf(n);
                                                if ((e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== o)) {
                                                    var r = "slick-slide-control" + t.instanceUid + o;
                                                    e("#" + r).length && e(this).attr({ "aria-describedby": r });
                                                }
                                            }),
                                            t.$dots
                                                .attr("role", "tablist")
                                                .find("li")
                                                .each(function (o) {
                                                    var r = i[o];
                                                    e(this).attr({ role: "presentation" }),
                                                        e(this)
                                                            .find("button")
                                                            .first()
                                                            .attr({
                                                                role: "tab",
                                                                id: "slick-slide-control" + t.instanceUid + o,
                                                                "aria-controls": "slick-slide" + t.instanceUid + r,
                                                                "aria-label": o + 1 + " of " + n,
                                                                "aria-selected": null,
                                                                tabindex: "-1",
                                                            });
                                                })
                                                .eq(t.currentSlide)
                                                .find("button")
                                                .attr({ "aria-selected": "true", tabindex: "0" })
                                                .end());
                                    for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({ tabindex: "0" }) : t.$slides.eq(o).removeAttr("tabindex");
                                    t.activateADA();
                                }),
                                (t.prototype.initArrowEvents = function () {
                                    var e = this;
                                    !0 === e.options.arrows &&
                                        e.slideCount > e.options.slidesToShow &&
                                        (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
                                        e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
                                        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
                                }),
                                (t.prototype.initDotEvents = function () {
                                    var t = this;
                                    !0 === t.options.dots &&
                                        t.slideCount > t.options.slidesToShow &&
                                        (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                                        !0 === t.options.dots &&
                                            !0 === t.options.pauseOnDotsHover &&
                                            t.slideCount > t.options.slidesToShow &&
                                            e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                                }),
                                (t.prototype.initSlideEvents = function () {
                                    var t = this;
                                    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
                                }),
                                (t.prototype.initializeEvents = function () {
                                    var t = this;
                                    t.initArrowEvents(),
                                        t.initDotEvents(),
                                        t.initSlideEvents(),
                                        t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                                        t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                                        t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                                        t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                                        t.$list.on("click.slick", t.clickHandler),
                                        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                                        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                                        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                                        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                                        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                                        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                                        e(t.setPosition);
                                }),
                                (t.prototype.initUI = function () {
                                    var e = this;
                                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
                                }),
                                (t.prototype.keyHandler = function (e) {
                                    var t = this;
                                    e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                                        (37 === e.keyCode && !0 === t.options.accessibility
                                            ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                                            : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
                                }),
                                (t.prototype.lazyLoad = function () {
                                    var t,
                                        n,
                                        i,
                                        o = this;
                                    function r(t) {
                                        e("img[data-lazy]", t).each(function () {
                                            var t = e(this),
                                                n = e(this).attr("data-lazy"),
                                                i = e(this).attr("data-srcset"),
                                                r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                                                s = document.createElement("img");
                                            (s.onload = function () {
                                                t.animate({ opacity: 0 }, 100, function () {
                                                    i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                                                        t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                                                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                                        }),
                                                        o.$slider.trigger("lazyLoaded", [o, t, n]);
                                                });
                                            }),
                                                (s.onerror = function () {
                                                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n]);
                                                }),
                                                (s.src = n);
                                        });
                                    }
                                    if (
                                        (!0 === o.options.centerMode
                                            ? !0 === o.options.infinite
                                                ? (i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2)
                                                : ((n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1))), (i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
                                            : ((n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide),
                                              (i = Math.ceil(n + o.options.slidesToShow)),
                                              !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)),
                                        (t = o.$slider.find(".slick-slide").slice(n, i)),
                                        "anticipated" === o.options.lazyLoad)
                                    )
                                        for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), (t = (t = t.add(l.eq(s))).add(l.eq(a))), s--, a++;
                                    r(t),
                                        o.slideCount <= o.options.slidesToShow
                                            ? r(o.$slider.find(".slick-slide"))
                                            : o.currentSlide >= o.slideCount - o.options.slidesToShow
                                            ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
                                            : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
                                }),
                                (t.prototype.loadSlider = function () {
                                    var e = this;
                                    e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
                                }),
                                (t.prototype.next = t.prototype.slickNext = function () {
                                    this.changeSlide({ data: { message: "next" } });
                                }),
                                (t.prototype.orientationChange = function () {
                                    this.checkResponsive(), this.setPosition();
                                }),
                                (t.prototype.pause = t.prototype.slickPause = function () {
                                    this.autoPlayClear(), (this.paused = !0);
                                }),
                                (t.prototype.play = t.prototype.slickPlay = function () {
                                    var e = this;
                                    e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
                                }),
                                (t.prototype.postSlide = function (t) {
                                    var n = this;
                                    n.unslicked ||
                                        (n.$slider.trigger("afterChange", [n, t]),
                                        (n.animating = !1),
                                        n.slideCount > n.options.slidesToShow && n.setPosition(),
                                        (n.swipeLeft = null),
                                        n.options.autoplay && n.autoPlay(),
                                        !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
                                }),
                                (t.prototype.prev = t.prototype.slickPrev = function () {
                                    this.changeSlide({ data: { message: "previous" } });
                                }),
                                (t.prototype.preventDefault = function (e) {
                                    e.preventDefault();
                                }),
                                (t.prototype.progressiveLazyLoad = function (t) {
                                    t = t || 1;
                                    var n,
                                        i,
                                        o,
                                        r,
                                        s,
                                        a = this,
                                        l = e("img[data-lazy]", a.$slider);
                                    l.length
                                        ? ((n = l.first()),
                                          (i = n.attr("data-lazy")),
                                          (o = n.attr("data-srcset")),
                                          (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                                          ((s = document.createElement("img")).onload = function () {
                                              o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                                                  n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                                                  !0 === a.options.adaptiveHeight && a.setPosition(),
                                                  a.$slider.trigger("lazyLoaded", [a, n, i]),
                                                  a.progressiveLazyLoad();
                                          }),
                                          (s.onerror = function () {
                                              t < 3
                                                  ? setTimeout(function () {
                                                        a.progressiveLazyLoad(t + 1);
                                                    }, 500)
                                                  : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
                                          }),
                                          (s.src = i))
                                        : a.$slider.trigger("allImagesLoaded", [a]);
                                }),
                                (t.prototype.refresh = function (t) {
                                    var n,
                                        i,
                                        o = this;
                                    (i = o.slideCount - o.options.slidesToShow),
                                        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
                                        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
                                        (n = o.currentSlide),
                                        o.destroy(!0),
                                        e.extend(o, o.initials, { currentSlide: n }),
                                        o.init(),
                                        t || o.changeSlide({ data: { message: "index", index: n } }, !1);
                                }),
                                (t.prototype.registerBreakpoints = function () {
                                    var t,
                                        n,
                                        i,
                                        o = this,
                                        r = o.options.responsive || null;
                                    if ("array" === e.type(r) && r.length) {
                                        for (t in ((o.respondTo = o.options.respondTo || "window"), r))
                                            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
                                                for (n = r[t].breakpoint; i >= 0; ) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                                                o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
                                            }
                                        o.breakpoints.sort(function (e, t) {
                                            return o.options.mobileFirst ? e - t : t - e;
                                        });
                                    }
                                }),
                                (t.prototype.reinit = function () {
                                    var t = this;
                                    (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                                        (t.slideCount = t.$slides.length),
                                        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                                        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                                        t.registerBreakpoints(),
                                        t.setProps(),
                                        t.setupInfinite(),
                                        t.buildArrows(),
                                        t.updateArrows(),
                                        t.initArrowEvents(),
                                        t.buildDots(),
                                        t.updateDots(),
                                        t.initDotEvents(),
                                        t.cleanUpSlideEvents(),
                                        t.initSlideEvents(),
                                        t.checkResponsive(!1, !0),
                                        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                        t.setPosition(),
                                        t.focusHandler(),
                                        (t.paused = !t.options.autoplay),
                                        t.autoPlay(),
                                        t.$slider.trigger("reInit", [t]);
                                }),
                                (t.prototype.resize = function () {
                                    var t = this;
                                    e(window).width() !== t.windowWidth &&
                                        (clearTimeout(t.windowDelay),
                                        (t.windowDelay = window.setTimeout(function () {
                                            (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                                        }, 50)));
                                }),
                                (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
                                    var i = this;
                                    if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
                                    i.unload(),
                                        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                                        (i.$slides = i.$slideTrack.children(this.options.slide)),
                                        i.$slideTrack.children(this.options.slide).detach(),
                                        i.$slideTrack.append(i.$slides),
                                        (i.$slidesCache = i.$slides),
                                        i.reinit();
                                }),
                                (t.prototype.setCSS = function (e) {
                                    var t,
                                        n,
                                        i = this,
                                        o = {};
                                    !0 === i.options.rtl && (e = -e),
                                        (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                                        (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                                        (o[i.positionProp] = e),
                                        !1 === i.transformsEnabled
                                            ? i.$slideTrack.css(o)
                                            : ((o = {}),
                                              !1 === i.cssTransitions ? ((o[i.animType] = "translate(" + t + ", " + n + ")"), i.$slideTrack.css(o)) : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)));
                                }),
                                (t.prototype.setDimensions = function () {
                                    var e = this;
                                    !1 === e.options.vertical
                                        ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                                        : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                                        (e.listWidth = e.$list.width()),
                                        (e.listHeight = e.$list.height()),
                                        !1 === e.options.vertical && !1 === e.options.variableWidth
                                            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                                            : !0 === e.options.variableWidth
                                            ? e.$slideTrack.width(5e3 * e.slideCount)
                                            : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                                    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                                    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
                                }),
                                (t.prototype.setFade = function () {
                                    var t,
                                        n = this;
                                    n.$slides.each(function (i, o) {
                                        (t = n.slideWidth * i * -1),
                                            !0 === n.options.rtl
                                                ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 })
                                                : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
                                    }),
                                        n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                                }),
                                (t.prototype.setHeight = function () {
                                    var e = this;
                                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                        e.$list.css("height", t);
                                    }
                                }),
                                (t.prototype.setOption = t.prototype.slickSetOption = function () {
                                    var t,
                                        n,
                                        i,
                                        o,
                                        r,
                                        s = this,
                                        a = !1;
                                    if (
                                        ("object" === e.type(arguments[0])
                                            ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
                                            : "string" === e.type(arguments[0]) &&
                                              ((i = arguments[0]), (o = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? (r = "responsive") : void 0 !== arguments[1] && (r = "single")),
                                        "single" === r)
                                    )
                                        s.options[i] = o;
                                    else if ("multiple" === r)
                                        e.each(i, function (e, t) {
                                            s.options[e] = t;
                                        });
                                    else if ("responsive" === r)
                                        for (n in o)
                                            if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                                            else {
                                                for (t = s.options.responsive.length - 1; t >= 0; ) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                                                s.options.responsive.push(o[n]);
                                            }
                                    a && (s.unload(), s.reinit());
                                }),
                                (t.prototype.setPosition = function () {
                                    var e = this;
                                    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
                                }),
                                (t.prototype.setProps = function () {
                                    var e = this,
                                        t = document.body.style;
                                    (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                                        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                                        (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                                        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                                        void 0 !== t.OTransform &&
                                            ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                                        void 0 !== t.MozTransform &&
                                            ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                                        void 0 !== t.webkitTransform &&
                                            ((e.animType = "webkitTransform"),
                                            (e.transformType = "-webkit-transform"),
                                            (e.transitionType = "webkitTransition"),
                                            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                                        void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                                        void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                                        (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
                                }),
                                (t.prototype.setSlideClasses = function (e) {
                                    var t,
                                        n,
                                        i,
                                        o,
                                        r = this;
                                    if (((n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode)) {
                                        var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                                        (t = Math.floor(r.options.slidesToShow / 2)),
                                            !0 === r.options.infinite &&
                                                (e >= t && e <= r.slideCount - 1 - t
                                                    ? r.$slides
                                                          .slice(e - t + s, e + t + 1)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")
                                                    : ((i = r.options.slidesToShow + e),
                                                      n
                                                          .slice(i - t + 1 + s, i + t + 2)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")),
                                                0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
                                            r.$slides.eq(e).addClass("slick-center");
                                    } else
                                        e >= 0 && e <= r.slideCount - r.options.slidesToShow
                                            ? r.$slides
                                                  .slice(e, e + r.options.slidesToShow)
                                                  .addClass("slick-active")
                                                  .attr("aria-hidden", "false")
                                            : n.length <= r.options.slidesToShow
                                            ? n.addClass("slick-active").attr("aria-hidden", "false")
                                            : ((o = r.slideCount % r.options.slidesToShow),
                                              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
                                              r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow
                                                  ? n
                                                        .slice(i - (r.options.slidesToShow - o), i + o)
                                                        .addClass("slick-active")
                                                        .attr("aria-hidden", "false")
                                                  : n
                                                        .slice(i, i + r.options.slidesToShow)
                                                        .addClass("slick-active")
                                                        .attr("aria-hidden", "false"));
                                    ("ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad) || r.lazyLoad();
                                }),
                                (t.prototype.setupInfinite = function () {
                                    var t,
                                        n,
                                        i,
                                        o = this;
                                    if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((n = null), o.slideCount > o.options.slidesToShow))) {
                                        for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)
                                            (n = t - 1),
                                                e(o.$slides[n])
                                                    .clone(!0)
                                                    .attr("id", "")
                                                    .attr("data-slick-index", n - o.slideCount)
                                                    .prependTo(o.$slideTrack)
                                                    .addClass("slick-cloned");
                                        for (t = 0; t < i + o.slideCount; t += 1)
                                            (n = t),
                                                e(o.$slides[n])
                                                    .clone(!0)
                                                    .attr("id", "")
                                                    .attr("data-slick-index", n + o.slideCount)
                                                    .appendTo(o.$slideTrack)
                                                    .addClass("slick-cloned");
                                        o.$slideTrack
                                            .find(".slick-cloned")
                                            .find("[id]")
                                            .each(function () {
                                                e(this).attr("id", "");
                                            });
                                    }
                                }),
                                (t.prototype.interrupt = function (e) {
                                    e || this.autoPlay(), (this.interrupted = e);
                                }),
                                (t.prototype.selectHandler = function (t) {
                                    var n = this,
                                        i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                                        o = parseInt(i.attr("data-slick-index"));
                                    o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
                                }),
                                (t.prototype.slideHandler = function (e, t, n) {
                                    var i,
                                        o,
                                        r,
                                        s,
                                        a,
                                        l,
                                        c = this;
                                    if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
                                        if (
                                            (!1 === t && c.asNavFor(e),
                                            (i = e),
                                            (a = c.getLeft(i)),
                                            (s = c.getLeft(c.currentSlide)),
                                            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                                            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                                        )
                                            !1 === c.options.fade &&
                                                ((i = c.currentSlide),
                                                !0 !== n && c.slideCount > c.options.slidesToShow
                                                    ? c.animateSlide(s, function () {
                                                          c.postSlide(i);
                                                      })
                                                    : c.postSlide(i));
                                        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                                            !1 === c.options.fade &&
                                                ((i = c.currentSlide),
                                                !0 !== n && c.slideCount > c.options.slidesToShow
                                                    ? c.animateSlide(s, function () {
                                                          c.postSlide(i);
                                                      })
                                                    : c.postSlide(i));
                                        else {
                                            if (
                                                (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                                (o =
                                                    i < 0
                                                        ? c.slideCount % c.options.slidesToScroll != 0
                                                            ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                                            : c.slideCount + i
                                                        : i >= c.slideCount
                                                        ? c.slideCount % c.options.slidesToScroll != 0
                                                            ? 0
                                                            : i - c.slideCount
                                                        : i),
                                                (c.animating = !0),
                                                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                                                (r = c.currentSlide),
                                                (c.currentSlide = o),
                                                c.setSlideClasses(c.currentSlide),
                                                c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                                                c.updateDots(),
                                                c.updateArrows(),
                                                !0 === c.options.fade)
                                            )
                                                return (
                                                    !0 !== n
                                                        ? (c.fadeSlideOut(r),
                                                          c.fadeSlide(o, function () {
                                                              c.postSlide(o);
                                                          }))
                                                        : c.postSlide(o),
                                                    void c.animateHeight()
                                                );
                                            !0 !== n && c.slideCount > c.options.slidesToShow
                                                ? c.animateSlide(a, function () {
                                                      c.postSlide(o);
                                                  })
                                                : c.postSlide(o);
                                        }
                                }),
                                (t.prototype.startLoad = function () {
                                    var e = this;
                                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                                        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                                        e.$slider.addClass("slick-loading");
                                }),
                                (t.prototype.swipeDirection = function () {
                                    var e,
                                        t,
                                        n,
                                        i,
                                        o = this;
                                    return (
                                        (e = o.touchObject.startX - o.touchObject.curX),
                                        (t = o.touchObject.startY - o.touchObject.curY),
                                        (n = Math.atan2(t, e)),
                                        (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
                                        i <= 45 && i >= 0
                                            ? !1 === o.options.rtl
                                                ? "left"
                                                : "right"
                                            : i <= 360 && i >= 315
                                            ? !1 === o.options.rtl
                                                ? "left"
                                                : "right"
                                            : i >= 135 && i <= 225
                                            ? !1 === o.options.rtl
                                                ? "right"
                                                : "left"
                                            : !0 === o.options.verticalSwiping
                                            ? i >= 35 && i <= 135
                                                ? "down"
                                                : "up"
                                            : "vertical"
                                    );
                                }),
                                (t.prototype.swipeEnd = function (e) {
                                    var t,
                                        n,
                                        i = this;
                                    if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
                                    if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
                                    if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                                        switch ((n = i.swipeDirection())) {
                                            case "left":
                                            case "down":
                                                (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                                                break;
                                            case "right":
                                            case "up":
                                                (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                                        }
                                        "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                                    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                                }),
                                (t.prototype.swipeHandler = function (e) {
                                    var t = this;
                                    if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                                        switch (
                                            ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                                            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                                            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                                            e.data.action)
                                        ) {
                                            case "start":
                                                t.swipeStart(e);
                                                break;
                                            case "move":
                                                t.swipeMove(e);
                                                break;
                                            case "end":
                                                t.swipeEnd(e);
                                        }
                                }),
                                (t.prototype.swipeMove = function (e) {
                                    var t,
                                        n,
                                        i,
                                        o,
                                        r,
                                        s,
                                        a = this;
                                    return (
                                        (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                                        !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                                            ((t = a.getLeft(a.currentSlide)),
                                            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
                                            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
                                            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                                            (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                                            !a.options.verticalSwiping && !a.swiping && s > 4
                                                ? ((a.scrolling = !0), !1)
                                                : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                                                  (n = a.swipeDirection()),
                                                  void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), e.preventDefault()),
                                                  (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                                                  !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                                                  (i = a.touchObject.swipeLength),
                                                  (a.touchObject.edgeHit = !1),
                                                  !1 === a.options.infinite &&
                                                      ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                                                      ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                                                  !1 === a.options.vertical ? (a.swipeLeft = t + i * o) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o),
                                                  !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                                                  !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                                    );
                                }),
                                (t.prototype.swipeStart = function (e) {
                                    var t,
                                        n = this;
                                    if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
                                    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                                        (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                                        (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                                        (n.dragging = !0);
                                }),
                                (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                                    var e = this;
                                    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
                                }),
                                (t.prototype.unload = function () {
                                    var t = this;
                                    e(".slick-cloned", t.$slider).remove(),
                                        t.$dots && t.$dots.remove(),
                                        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                                        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                                        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                                }),
                                (t.prototype.unslick = function (e) {
                                    var t = this;
                                    t.$slider.trigger("unslick", [t, e]), t.destroy();
                                }),
                                (t.prototype.updateArrows = function () {
                                    var e = this;
                                    Math.floor(e.options.slidesToShow / 2),
                                        !0 === e.options.arrows &&
                                            e.slideCount > e.options.slidesToShow &&
                                            !e.options.infinite &&
                                            (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                            e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                            0 === e.currentSlide
                                                ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                                : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
                                                ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                                : e.currentSlide >= e.slideCount - 1 &&
                                                  !0 === e.options.centerMode &&
                                                  (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                                }),
                                (t.prototype.updateDots = function () {
                                    var e = this;
                                    null !== e.$dots &&
                                        (e.$dots.find("li").removeClass("slick-active").end(),
                                        e.$dots
                                            .find("li")
                                            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                                            .addClass("slick-active"));
                                }),
                                (t.prototype.visibility = function () {
                                    var e = this;
                                    e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
                                }),
                                (e.fn.slick = function () {
                                    var e,
                                        n,
                                        i = this,
                                        o = arguments[0],
                                        r = Array.prototype.slice.call(arguments, 1),
                                        s = i.length;
                                    for (e = 0; e < s; e++) if (("object" == typeof o || void 0 === o ? (i[e].slick = new t(i[e], o)) : (n = i[e].slick[o].apply(i[e].slick, r)), void 0 !== n)) return n;
                                    return i;
                                });
                            var n;
                        })
                            ? i.apply(t, o)
                            : i) || (e.exports = r);
        })();
    },
    function (e, t, n) {
        var i = n(23);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var o = { insert: "head", singleton: !1 };
        n(3)(i, o);
        i.locals && (e.exports = i.locals);
    },
    function (e, t, n) {
        (e.exports = n(2)(!1)).push([
            e.i,
            "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n",
            "",
        ]);
    },
    function (e, t, n) {
        var i = n(25);
        "string" == typeof i && (i = [[e.i, i, ""]]);
        var o = { insert: "head", singleton: !1 };
        n(3)(i, o);
        i.locals && (e.exports = i.locals);
    },
    function (e, t, n) {
        t = e.exports = n(2)(!1);
        var i = n(5),
            o = i(n(26)),
            r = i(n(6)),
            s = i(n(6) + "?#iefix"),
            a = i(n(27)),
            l = i(n(28)),
            c = i(n(29) + "#slick");
        t.push([
            e.i,
            "@charset 'UTF-8';\n/* Slider */\n.slick-loading .slick-list\n{\n    background: #fff url(" +
                o +
                ") center center no-repeat;\n}\n\n/* Icons */\n@font-face\n{\n    font-family: 'slick';\n    font-weight: normal;\n    font-style: normal;\n\n    src: url(" +
                r +
                ");\n    src: url(" +
                s +
                ") format('embedded-opentype'), url(" +
                a +
                ") format('woff'), url(" +
                l +
                ") format('truetype'), url(" +
                c +
                ") format('svg');\n}\n/* Arrows */\n.slick-prev,\n.slick-next\n{\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover,\n.slick-prev:focus,\n.slick-next:hover,\n.slick-next:focus\n{\n    color: transparent;\n    outline: none;\n    background: transparent;\n}\n.slick-prev:hover:before,\n.slick-prev:focus:before,\n.slick-next:hover:before,\n.slick-next:focus:before\n{\n    opacity: 1;\n}\n.slick-prev.slick-disabled:before,\n.slick-next.slick-disabled:before\n{\n    opacity: .25;\n}\n\n.slick-prev:before,\n.slick-next:before\n{\n    font-family: 'slick';\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: .75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.slick-prev\n{\n    left: -25px;\n}\n[dir='rtl'] .slick-prev\n{\n    right: -25px;\n    left: auto;\n}\n.slick-prev:before\n{\n    content: '←';\n}\n[dir='rtl'] .slick-prev:before\n{\n    content: '→';\n}\n\n.slick-next\n{\n    right: -25px;\n}\n[dir='rtl'] .slick-next\n{\n    right: auto;\n    left: -25px;\n}\n.slick-next:before\n{\n    content: '→';\n}\n[dir='rtl'] .slick-next:before\n{\n    content: '←';\n}\n\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: -25px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: 'slick';\n    font-size: 6px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: '•';\n    text-align: center;\n\n    opacity: .25;\n    color: black;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: .75;\n    color: black;\n}\n",
            "",
        ]);
    },
    function (e, t) {
        e.exports = "/images/vendor/slick-carousel/slick/ajax-loader.gif?c5cd7f5300576ab4c88202b42f6ded62";
    },
    function (e, t) {
        e.exports = "/fonts/vendor/slick-carousel/slick/slick.woff?b7c9e1e479de3b53f1e4e30ebac2403a";
    },
    function (e, t) {
        e.exports = "/fonts/vendor/slick-carousel/slick/slick.ttf?d41f55a78e6f49a5512878df1737e58a";
    },
    function (e, t) {
        e.exports = "/fonts/vendor/slick-carousel/slick/slick.svg?f97e3bbf73254b0112091d0192f17aec";
    },
    function (e, t, n) {
        (function (e) {
            (window.requestAnimFrame =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (e) {
                    window.setTimeout(e, 20);
                }),
                (function (e) {
                    function t(t, n) {
                        this.xzoom = !0;
                        var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u,
                            p,
                            h,
                            f,
                            g,
                            m,
                            v,
                            y,
                            w,
                            b,
                            x,
                            k,
                            S,
                            C,
                            T,
                            E,
                            _,
                            L,
                            A,
                            $,
                            N,
                            M,
                            P,
                            q,
                            D,
                            O,
                            z,
                            j,
                            H,
                            I,
                            U,
                            R,
                            F,
                            B,
                            W,
                            V,
                            X,
                            Y,
                            G,
                            J,
                            Z,
                            K,
                            Q,
                            ee = this,
                            te = {},
                            ne = (new Array(), new Array()),
                            ie = 0,
                            oe = 0,
                            re = 0,
                            se = 0,
                            ae = 0,
                            le = 0,
                            ce = 0,
                            de = 0,
                            ue = 0,
                            pe = 0,
                            he = 0,
                            fe = 0,
                            ge = 0,
                            me = (function () {
                                if (!/MSIE (\d+\.\d+);/.test(navigator.userAgent)) return !1;
                                var e = new Number(RegExp.$1);
                                return !(e >= 9) && (e >= 8 || e >= 7 || e >= 6 || e >= 5 || void 0);
                            })(),
                            ve = /MSIE (\d+\.\d+);/.test(navigator.userAgent),
                            ye = "";
                        function we() {
                            var e = document.documentElement;
                            return { left: (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0), top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0) };
                        }
                        function be() {
                            if ("circle" == ee.options.lensShape && "lens" == ee.options.position) {
                                var e = ((_ = L = Math.max(_, L)) + 2 * Math.max(M, N)) / 2;
                                T.css({ "-moz-border-radius": e, "-webkit-border-radius": e, "border-radius": e });
                            }
                        }
                        function xe(e, t, n, i) {
                            "lens" == ee.options.position
                                ? (C.css({ top: -(t - c) * q + L / 2, left: -(e - d) * P + _ / 2 }),
                                  ee.options.bg &&
                                      (T.css({ "background-image": "url(" + C.attr("src") + ")", "background-repeat": "no-repeat", "background-position": -(e - d) * P + _ / 2 + "px " + (-(t - c) * q + L / 2) + "px" }),
                                      n && i && T.css({ "background-size": n + "px " + i + "px" })))
                                : C.css({ top: -$ * q, left: -A * P });
                        }
                        function ke(e, t) {
                            var n, i;
                            re < -1 && (re = -1),
                                re > 1 && (re = 1),
                                D < O ? (i = (n = s * (D - (D - 1) * re)) / z) : (n = (i = a * (O - (O - 1) * re)) * z),
                                I
                                    ? ((se = e), (ae = t), (le = n), (ce = i))
                                    : (I || ((de = le = n), (ue = ce = i)),
                                      (_ = s / (P = n / o)),
                                      (L = a / (q = i / r)),
                                      be(),
                                      Ce(e, t),
                                      C.width(n),
                                      C.height(i),
                                      T.width(_),
                                      T.height(L),
                                      T.css({ top: $ - M, left: A - N }),
                                      E.css({ top: -$, left: -A }),
                                      xe(e, t, n, i));
                        }
                        function Se() {
                            var e = pe,
                                t = he,
                                n = fe,
                                i = ge,
                                l = de,
                                c = ue;
                            (e += (se - e) / ee.options.smoothLensMove),
                                (t += (ae - t) / ee.options.smoothLensMove),
                                (n += (se - n) / ee.options.smoothZoomMove),
                                (i += (ae - i) / ee.options.smoothZoomMove),
                                (l += (le - l) / ee.options.smoothScale),
                                (c += (ce - c) / ee.options.smoothScale),
                                (_ = s / (P = l / o)),
                                (L = a / (q = c / r)),
                                be(),
                                Ce(e, t),
                                C.width(l),
                                C.height(c),
                                T.width(_),
                                T.height(L),
                                T.css({ top: $ - M, left: A - N }),
                                E.css({ top: -$, left: -A }),
                                Ce(n, i),
                                xe(e, t, l, c),
                                (pe = e),
                                (he = t),
                                (fe = n),
                                (ge = i),
                                (de = l),
                                (ue = c),
                                I && requestAnimFrame(Se);
                        }
                        function Ce(e, t) {
                            (A = (e -= d) - _ / 2),
                                ($ = (t -= c) - L / 2),
                                "lens" != ee.options.position &&
                                    ee.options.lensCollision &&
                                    (A < 0 && (A = 0), o >= _ && A > o - _ && (A = o - _), o < _ && (A = o / 2 - _ / 2), $ < 0 && ($ = 0), r >= L && $ > r - L && ($ = r - L), r < L && ($ = r / 2 - L / 2));
                        }
                        function Te() {
                            void 0 !== v && v.remove(), void 0 !== w && w.remove(), void 0 !== W && W.remove();
                        }
                        function Ee(e) {
                            var t = e.attr("title"),
                                n = e.attr("xtitle");
                            return n || t || "";
                        }
                        (this.adaptive = function () {
                            (0 != Y && 0 != G) || (t.css("width", ""), t.css("height", ""), (Y = t.width()), (G = t.height())), Te(), (V = e(window).width()), (X = e(window).height()), (J = t.width()), (Z = t.height());
                            var n = !1;
                            (Y > V || G > X) && (n = !0),
                                J > Y && (J = Y),
                                Z > G && (Z = G),
                                n ? t.width("100%") : 0 != Y && t.width(Y),
                                "fullscreen" != K &&
                                    (!(function () {
                                        var n = t.offset();
                                        s = "auto" == ee.options.zoomWidth ? J : ee.options.zoomWidth;
                                        a = "auto" == ee.options.zoomHeight ? Z : ee.options.zoomHeight;
                                        "#" == ee.options.position.substr(0, 1) ? (te = e(ee.options.position)) : (te.length = 0);
                                        if (0 != te.length) return !0;
                                        switch (K) {
                                            case "lens":
                                            case "inside":
                                                return !0;
                                            case "top":
                                                (c = n.top), (d = n.left), (u = c - a), (p = d);
                                                break;
                                            case "left":
                                                (c = n.top), (d = n.left), (u = c), (p = d - s);
                                                break;
                                            case "bottom":
                                                (c = n.top), (d = n.left), (u = c + Z), (p = d);
                                                break;
                                            case "right":
                                            default:
                                                (c = n.top), (d = n.left), (u = c), (p = d + J);
                                        }
                                        if (p + s > V || p < 0) return !1;
                                        return !0;
                                    })()
                                        ? (ee.options.position = ee.options.mposition)
                                        : (ee.options.position = K)),
                                ee.options.lensReverse || (Q = ee.options.adaptiveReverse && ee.options.position == ee.options.mposition);
                        }),
                            (this.xscroll = function (e) {
                                if (((g = e.pageX || e.originalEvent.pageX), (m = e.pageY || e.originalEvent.pageY), e.preventDefault(), e.xscale)) (re = e.xscale), ke(g, m);
                                else {
                                    var t = -e.originalEvent.detail || e.originalEvent.wheelDelta || e.xdelta,
                                        n = g,
                                        i = m;
                                    me && ((n = U), (i = R)), (re += t = t > 0 ? -0.05 : 0.05), ke(n, i);
                                }
                            }),
                            (this.openzoom = function (n) {
                                switch (
                                    ((g = n.pageX),
                                    (m = n.pageY),
                                    ee.options.adaptive && ee.adaptive(),
                                    (re = ee.options.defaultScale),
                                    (I = !1),
                                    (v = e("<div></div>")),
                                    "" != ee.options.sourceClass && v.addClass(ee.options.sourceClass),
                                    v.css("position", "absolute"),
                                    (b = e("<div></div>")),
                                    "" != ee.options.loadingClass && b.addClass(ee.options.loadingClass),
                                    b.css("position", "absolute"),
                                    (y = e('<div style="position: absolute; top: 0; left: 0;"></div>')),
                                    v.append(b),
                                    (w = e("<div></div>")),
                                    "" != ee.options.zoomClass && "fullscreen" != ee.options.position && w.addClass(ee.options.zoomClass),
                                    w.css({ position: "absolute", overflow: "hidden", opacity: 1 }),
                                    ee.options.title &&
                                        "" != ye &&
                                        ((W = e("<div></div>")),
                                        (B = e("<div></div>")),
                                        W.css({ position: "absolute", opacity: 1 }),
                                        ee.options.titleClass && B.addClass(ee.options.titleClass),
                                        B.html("<span>" + ye + "</span>"),
                                        W.append(B),
                                        ee.options.fadeIn && W.css({ opacity: 0 })),
                                    (T = e("<div></div>")),
                                    "" != ee.options.lensClass && T.addClass(ee.options.lensClass),
                                    T.css({ position: "absolute", overflow: "hidden" }),
                                    ee.options.lens &&
                                        ((lenstint = e("<div></div>")),
                                        lenstint.css({ position: "absolute", background: ee.options.lens, opacity: ee.options.lensOpacity, width: "100%", height: "100%", top: 0, left: 0, "z-index": 9999 }),
                                        T.append(lenstint)),
                                    (function (n, g) {
                                        switch (
                                            ("fullscreen" == ee.options.position ? ((o = e(window).width()), (r = e(window).height())) : ((o = t.width()), (r = t.height())),
                                            b.css({ top: r / 2 - b.height() / 2, left: o / 2 - b.width() / 2 }),
                                            ((l = ee.options.rootOutput || "fullscreen" == ee.options.position ? t.offset() : t.position()).top = Math.round(l.top)),
                                            (l.left = Math.round(l.left)),
                                            ee.options.position)
                                        ) {
                                            case "fullscreen":
                                                (c = we().top), (d = we().left), (u = 0), (p = 0);
                                                break;
                                            case "inside":
                                                (c = l.top), (d = l.left), (u = 0), (p = 0);
                                                break;
                                            case "top":
                                                (c = l.top), (d = l.left), (u = c - a), (p = d);
                                                break;
                                            case "left":
                                                (c = l.top), (d = l.left), (u = c), (p = d - s);
                                                break;
                                            case "bottom":
                                                (c = l.top), (d = l.left), (u = c + r), (p = d);
                                                break;
                                            case "right":
                                            default:
                                                (c = l.top), (d = l.left), (u = c), (p = d + o);
                                        }
                                        (c -= v.outerHeight() / 2),
                                            (d -= v.outerWidth() / 2),
                                            "#" == ee.options.position.substr(0, 1) ? (te = e(ee.options.position)) : (te.length = 0),
                                            0 == te.length && "inside" != ee.options.position && "fullscreen" != ee.options.position
                                                ? ((ee.options.adaptive && Y && G) || ((Y = o), (G = r)),
                                                  (s = "auto" == ee.options.zoomWidth ? o : ee.options.zoomWidth),
                                                  (a = "auto" == ee.options.zoomHeight ? r : ee.options.zoomHeight),
                                                  (u += ee.options.Yoffset),
                                                  (p += ee.options.Xoffset),
                                                  w.css({ width: s + "px", height: a + "px", top: u, left: p }),
                                                  "lens" != ee.options.position && i.append(w))
                                                : "inside" == ee.options.position || "fullscreen" == ee.options.position
                                                ? ((s = o), (a = r), w.css({ width: s + "px", height: a + "px" }), v.append(w))
                                                : ((s = te.width()),
                                                  (a = te.height()),
                                                  ee.options.rootOutput ? ((u = te.offset().top), (p = te.offset().left), i.append(w)) : ((u = te.position().top), (p = te.position().left), te.parent().append(w)),
                                                  (u += (te.outerHeight() - a - w.outerHeight()) / 2),
                                                  (p += (te.outerWidth() - s - w.outerWidth()) / 2),
                                                  w.css({ width: s + "px", height: a + "px", top: u, left: p })),
                                            ee.options.title &&
                                                "" != ye &&
                                                ("inside" == ee.options.position || "lens" == ee.options.position || "fullscreen" == ee.options.position
                                                    ? ((h = u), (f = p), v.append(W))
                                                    : ((h = u + (w.outerHeight() - a) / 2), (f = p + (w.outerWidth() - s) / 2), i.append(W)),
                                                W.css({ width: s + "px", height: a + "px", top: h, left: f })),
                                            v.css({ width: o + "px", height: r + "px", top: c, left: d }),
                                            y.css({ width: o + "px", height: r + "px" }),
                                            ee.options.tint && "inside" != ee.options.position && "fullscreen" != ee.options.position
                                                ? y.css("background-color", ee.options.tint)
                                                : me && y.css({ "background-image": "url(" + t.attr("src") + ")", "background-color": "#fff" }),
                                            (S = new Image());
                                        var m = "";
                                        switch (
                                            (ve && (m = "?r=" + new Date().getTime()),
                                            (S.src = t.attr("xoriginal") + m),
                                            (C = e(S)).css("position", "absolute"),
                                            ((S = new Image()).src = t.attr("src")),
                                            (E = e(S)).css("position", "absolute"),
                                            E.width(o),
                                            ee.options.position)
                                        ) {
                                            case "fullscreen":
                                            case "inside":
                                                w.append(C);
                                                break;
                                            case "lens":
                                                T.append(C), ee.options.bg && C.css({ display: "none" });
                                                break;
                                            default:
                                                w.append(C), T.append(E);
                                        }
                                    })(),
                                    "inside" != ee.options.position && "fullscreen" != ee.options.position
                                        ? ((ee.options.tint || me) && v.append(y), ee.options.fadeIn && (y.css({ opacity: 0 }), T.css({ opacity: 0 }), w.css({ opacity: 0 })), i.append(v))
                                        : (ee.options.fadeIn && w.css({ opacity: 0 }), i.append(v)),
                                    ee.eventmove(v),
                                    ee.eventleave(v),
                                    ee.options.position)
                                ) {
                                    case "inside":
                                        (u -= (w.outerHeight() - w.height()) / 2), (p -= (w.outerWidth() - w.width()) / 2);
                                        break;
                                    case "top":
                                        (u -= w.outerHeight() - w.height()), (p -= (w.outerWidth() - w.width()) / 2);
                                        break;
                                    case "left":
                                        (u -= (w.outerHeight() - w.height()) / 2), (p -= w.outerWidth() - w.width());
                                        break;
                                    case "bottom":
                                        p -= (w.outerWidth() - w.width()) / 2;
                                        break;
                                    case "right":
                                        u -= (w.outerHeight() - w.height()) / 2;
                                }
                                w.css({ top: u, left: p }),
                                    C.xon("load", function (e) {
                                        if ((b.remove(), !ee.options.openOnSmall && (C.width() < s || C.height() < a))) return ee.closezoom(), e.preventDefault(), !1;
                                        ee.options.scroll && ee.eventscroll(v),
                                            "inside" != ee.options.position && "fullscreen" != ee.options.position
                                                ? (v.append(T),
                                                  ee.options.fadeIn ? (y.fadeTo(300, ee.options.tintOpacity), T.fadeTo(300, 1), w.fadeTo(300, 1)) : (y.css({ opacity: ee.options.tintOpacity }), T.css({ opacity: 1 }), w.css({ opacity: 1 })))
                                                : ee.options.fadeIn
                                                ? w.fadeTo(300, 1)
                                                : w.css({ opacity: 1 }),
                                            ee.options.title && "" != ye && (ee.options.fadeIn ? W.fadeTo(300, 1) : W.css({ opacity: 1 })),
                                            (j = C.width()),
                                            (H = C.height()),
                                            ee.options.adaptive && (o < Y || r < G) && (E.width(o), E.height(r), (j *= o / Y), (H *= r / G), C.width(j), C.height(H)),
                                            (de = le = j),
                                            (ue = ce = H),
                                            (z = j / H),
                                            (D = j / s),
                                            (O = H / a);
                                        var t,
                                            n = ["padding-", "border-"];
                                        M = N = 0;
                                        for (var i = 0; i < n.length; i++)
                                            (t = parseFloat(T.css(n[i] + "top-width"))),
                                                (M += t != t ? 0 : t),
                                                (t = parseFloat(T.css(n[i] + "bottom-width"))),
                                                (M += t != t ? 0 : t),
                                                (t = parseFloat(T.css(n[i] + "left-width"))),
                                                (N += t != t ? 0 : t),
                                                (t = parseFloat(T.css(n[i] + "right-width"))),
                                                (N += t != t ? 0 : t);
                                        (M /= 2), (N /= 2), (fe = pe = se = g), (ge = he = ae = m), ke(g, m), ee.options.smooth && ((I = !0), requestAnimFrame(Se)), ee.eventclick(v);
                                    });
                            }),
                            (this.movezoom = function (e) {
                                (g = e.pageX), (m = e.pageY), me && ((U = g), (R = m));
                                var t = g - d,
                                    n = m - c;
                                Q && ((e.pageX -= 2 * (t - o / 2)), (e.pageY -= 2 * (n - r / 2))),
                                    (t < 0 || t > o || n < 0 || n > r) && v.trigger("mouseleave"),
                                    ee.options.smooth ? ((se = e.pageX), (ae = e.pageY)) : (be(), Ce(e.pageX, e.pageY), T.css({ top: $ - M, left: A - N }), E.css({ top: -$, left: -A }), xe(e.pageX, e.pageY, 0, 0));
                            }),
                            (this.eventdefault = function () {
                                (ee.eventopen = function (e) {
                                    e.xon("mouseenter", ee.openzoom);
                                }),
                                    (ee.eventleave = function (e) {
                                        e.xon("mouseleave", ee.closezoom);
                                    }),
                                    (ee.eventmove = function (e) {
                                        e.xon("mousemove", ee.movezoom);
                                    }),
                                    (ee.eventscroll = function (e) {
                                        e.xon("mousewheel DOMMouseScroll", ee.xscroll);
                                    }),
                                    (ee.eventclick = function (e) {
                                        e.xon("click", function (e) {
                                            t.trigger("click");
                                        });
                                    });
                            }),
                            (this.eventunbind = function () {
                                t.xoff("mouseenter"), (ee.eventopen = function (e) {}), (ee.eventleave = function (e) {}), (ee.eventmove = function (e) {}), (ee.eventscroll = function (e) {}), (ee.eventclick = function (e) {});
                            }),
                            (this.init = function (n) {
                                (ee.options = e.extend({}, e.fn.xzoom.defaults, n)),
                                    (i = ee.options.rootOutput ? e("body") : t.parent()),
                                    (K = ee.options.position),
                                    (Q = ee.options.lensReverse && "inside" == ee.options.position),
                                    ee.options.smoothZoomMove < 1 && (ee.options.smoothZoomMove = 1),
                                    ee.options.smoothLensMove < 1 && (ee.options.smoothLensMove = 1),
                                    ee.options.smoothScale < 1 && (ee.options.smoothScale = 1),
                                    ee.options.adaptive &&
                                        e(window).xon("load", function () {
                                            (Y = t.width()), (G = t.height()), ee.adaptive(), e(window).resize(ee.adaptive);
                                        }),
                                    ee.eventdefault(),
                                    ee.eventopen(t);
                            }),
                            (this.destroy = function () {
                                ee.eventunbind();
                            }),
                            (this.closezoom = function () {
                                (I = !1),
                                    ee.options.fadeOut
                                        ? (ee.options.title && "" != ye && W.fadeOut(299),
                                          "inside" != ee.options.position || "fullscreen" != ee.options.position
                                              ? (w.fadeOut(299),
                                                v.fadeOut(300, function () {
                                                    Te();
                                                }))
                                              : v.fadeOut(300, function () {
                                                    Te();
                                                }))
                                        : Te();
                            }),
                            (this.gallery = function () {
                                var e,
                                    t = new Array(),
                                    n = 0;
                                for (e = oe; e < ne.length; e++) (t[n] = ne[e]), n++;
                                for (e = 0; e < oe; e++) (t[n] = ne[e]), n++;
                                return { index: oe, ogallery: ne, cgallery: t };
                            }),
                            (this.xappend = function (n) {
                                var i = n.parent();
                                function o(o) {
                                    Te(),
                                        o.preventDefault(),
                                        ee.options.activeClass && (F.removeClass(ee.options.activeClass), (F = n).addClass(ee.options.activeClass)),
                                        (oe = e(this).data("xindex")),
                                        ee.options.fadeTrans &&
                                            (((k = new Image()).src = t.attr("src")),
                                            (x = e(k)).css({ position: "absolute", top: t.offset().top, left: t.offset().left, width: t.width(), height: t.height() }),
                                            e(document.body).append(x),
                                            x.fadeOut(200, function () {
                                                x.remove();
                                            }));
                                    var r = i.attr("href"),
                                        s = n.attr("xpreview") || n.attr("src");
                                    (ye = Ee(n)), n.attr("title") && t.attr("title", n.attr("title")), t.attr("xoriginal", r), t.removeAttr("style"), t.attr("src", s), ee.options.adaptive && ((Y = t.width()), (G = t.height()));
                                }
                                (ne[ie] = i.attr("href")),
                                    i.data("xindex", ie),
                                    0 == ie && ee.options.activeClass && (F = n).addClass(ee.options.activeClass),
                                    0 == ie && ee.options.title && (ye = Ee(n)),
                                    ie++,
                                    ee.options.hover && i.xon("mouseenter", i, o),
                                    i.xon("click", i, o);
                            }),
                            this.init(n);
                    }
                    (e.fn.xon = e.fn.on || e.fn.bind),
                        (e.fn.xoff = e.fn.off || e.fn.bind),
                        (e.fn.xzoom = function (n) {
                            var i, o;
                            if (this.selector) {
                                var r = this.selector.split(",");
                                for (var s in r) r[s] = e.trim(r[s]);
                                this.each(function (s) {
                                    if (1 == r.length)
                                        if (0 == s) {
                                            if (void 0 !== (i = e(this)).data("xzoom")) return i.data("xzoom");
                                            i.x = new t(i, n);
                                        } else void 0 !== i.x && ((o = e(this)), i.x.xappend(o));
                                    else if (e(this).is(r[0]) && 0 == s) {
                                        if (void 0 !== (i = e(this)).data("xzoom")) return i.data("xzoom");
                                        i.x = new t(i, n);
                                    } else void 0 === i.x || e(this).is(r[0]) || ((o = e(this)), i.x.xappend(o));
                                });
                            } else
                                this.each(function (r) {
                                    if (0 == r) {
                                        if (void 0 !== (i = e(this)).data("xzoom")) return i.data("xzoom");
                                        i.x = new t(i, n);
                                    } else void 0 !== i.x && ((o = e(this)), i.x.xappend(o));
                                });
                            return void 0 !== i && (i.data("xzoom", i.x), e(i).trigger("xzoom_ready"), i.x);
                        }),
                        (e.fn.xzoom.defaults = {
                            position: "right",
                            mposition: "inside",
                            rootOutput: !0,
                            Xoffset: 0,
                            Yoffset: 0,
                            fadeIn: !0,
                            fadeTrans: !0,
                            fadeOut: !1,
                            smooth: !0,
                            smoothZoomMove: 3,
                            smoothLensMove: 1,
                            smoothScale: 6,
                            defaultScale: 0,
                            scroll: !0,
                            tint: !1,
                            tintOpacity: 0.5,
                            lens: !1,
                            lensOpacity: 0.5,
                            lensShape: "box",
                            lensCollision: !0,
                            lensReverse: !1,
                            openOnSmall: !0,
                            zoomWidth: "auto",
                            zoomHeight: "auto",
                            sourceClass: "xzoom-source",
                            loadingClass: "xzoom-loading",
                            lensClass: "xzoom-lens",
                            zoomClass: "xzoom-preview",
                            activeClass: "xactive",
                            hover: !1,
                            adaptive: !0,
                            adaptiveReverse: !1,
                            title: !1,
                            titleClass: "xzoom-caption",
                            bg: !1,
                        });
                })(e);
        }.call(this, n(1)));
    },
    function (e, t, n) {
        (function (e, t) {
            function n(e) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            new (function (i) {
                var o = i.separator || "&",
                    r = !1 !== i.spaces,
                    s = (i.suffix, !1 !== i.prefix ? (!0 === i.hash ? "#" : "?") : ""),
                    a = !1 !== i.numbers;
                e.query = new (function () {
                    var i = function (e, t) {
                            return null != e && null !== e && (!t || e.constructor == t);
                        },
                        l = function (e) {
                            for (var t, n = /\[([^[]*)\]/g, i = /^([^[]+)(\[.*\])?$/.exec(e), o = i[1], r = []; (t = n.exec(i[2])); ) r.push(t[1]);
                            return [o, r];
                        },
                        c = function (t) {
                            var n = this;
                            return (
                                (n.keys = {}),
                                t.queryObject
                                    ? e.each(t.get(), function (e, t) {
                                          n.SET(e, t);
                                      })
                                    : n.parseNew.apply(n, arguments),
                                n
                            );
                        };
                    return (
                        (c.prototype = {
                            queryObject: !0,
                            parseNew: function () {
                                var t = this;
                                return (
                                    (t.keys = {}),
                                    e.each(arguments, function () {
                                        var n = "" + this;
                                        (n = (n = n.replace(/^[?#]/, "")).replace(/[;&]$/, "")),
                                            r && (n = n.replace(/[+]/g, " ")),
                                            e.each(n.split(/[&;]/), function () {
                                                var e = decodeURIComponent(this.split("=")[0] || ""),
                                                    n = decodeURIComponent(this.split("=")[1] || "");
                                                e && (a && (/^[+-]?[0-9]+\.[0-9]*$/.test(n) ? (n = parseFloat(n)) : /^[+-]?[1-9][0-9]*$/.test(n) && (n = parseInt(n, 10))), (n = (!n && 0 !== n) || n), t.SET(e, n));
                                            });
                                    }),
                                    t
                                );
                            },
                            has: function (e, t) {
                                var n = this.get(e);
                                return i(n, t);
                            },
                            GET: function (e) {
                                if (!i(e)) return this.keys;
                                for (var t = l(e), n = t[0], o = t[1], r = this.keys[n]; null != r && 0 != o.length; ) r = r[o.shift()];
                                return "number" == typeof r ? r : r || "";
                            },
                            get: function (t) {
                                var n = this.GET(t);
                                return i(n, Object) ? e.extend(!0, {}, n) : i(n, Array) ? n.slice(0) : n;
                            },
                            SET: function (e, t) {
                                var o = i(t) ? t : null,
                                    r = l(e),
                                    s = r[0],
                                    a = r[1],
                                    c = this.keys[s];
                                return (
                                    (this.keys[s] = (function e(t, o, r) {
                                        var s = o.shift();
                                        if (("object" != n(t) && (t = null), "" === s))
                                            if ((t || (t = []), i(t, Array))) t.push(0 == o.length ? r : e(null, o.slice(0), r));
                                            else if (i(t, Object)) {
                                                for (var a = 0; null != t[a++]; );
                                                t[--a] = 0 == o.length ? r : e(t[a], o.slice(0), r);
                                            } else (t = []).push(0 == o.length ? r : e(null, o.slice(0), r));
                                        else if (s && s.match(/^\s*[0-9]+\s*$/)) {
                                            t || (t = []), (t[(l = parseInt(s, 10))] = 0 == o.length ? r : e(t[l], o.slice(0), r));
                                        } else {
                                            if (!s) return r;
                                            var l = s.replace(/^\s*|\s*$/g, "");
                                            if ((t || (t = {}), i(t, Array))) {
                                                var c = {};
                                                for (a = 0; a < t.length; ++a) c[a] = t[a];
                                                t = c;
                                            }
                                            t[l] = 0 == o.length ? r : e(t[l], o.slice(0), r);
                                        }
                                        return t;
                                    })(c, a.slice(0), o)),
                                    this
                                );
                            },
                            set: function (e, t) {
                                return this.copy().SET(e, t);
                            },
                            REMOVE: function (e, n) {
                                if (n) {
                                    var o = this.GET(e);
                                    if (i(o, Array)) {
                                        for (tval in o) o[tval] = o[tval].toString();
                                        var r = t.inArray(n, o);
                                        if (!(r >= 0)) return;
                                        e = (e = o.splice(r, 1))[r];
                                    } else if (n != o) return;
                                }
                                return this.SET(e, null).COMPACT();
                            },
                            remove: function (e, t) {
                                return this.copy().REMOVE(e, t);
                            },
                            EMPTY: function () {
                                var t = this;
                                return (
                                    e.each(t.keys, function (e, n) {
                                        delete t.keys[e];
                                    }),
                                    t
                                );
                            },
                            load: function (e) {
                                var t = e.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
                                    n = e.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                                return new c(e.length == n.length ? "" : n, e.length == t.length ? "" : t);
                            },
                            empty: function () {
                                return this.copy().EMPTY();
                            },
                            copy: function () {
                                return new c(this);
                            },
                            COMPACT: function () {
                                return (
                                    (this.keys = (function t(o) {
                                        var r = "object" == n(o) ? (i(o, Array) ? [] : {}) : o;
                                        if ("object" == n(o)) {
                                            e.each(o, function (e, n) {
                                                if (!i(n)) return !0;
                                                !(function (e, t, n) {
                                                    i(e, Array) ? e.push(n) : (e[t] = n);
                                                })(r, e, t(n));
                                            });
                                        }
                                        return r;
                                    })(this.keys)),
                                    this
                                );
                            },
                            compact: function () {
                                return this.copy().COMPACT();
                            },
                            toString: function () {
                                var t = [],
                                    a = [],
                                    l = function (e) {
                                        return (e += ""), (e = encodeURIComponent(e)), r && (e = e.replace(/%20/g, "+")), e;
                                    };
                                return (
                                    (function t(o, r) {
                                        var s = function (e) {
                                            return r && "" != r ? [r, "[", e, "]"].join("") : [e].join("");
                                        };
                                        e.each(o, function (e, o) {
                                            "object" == n(o)
                                                ? t(o, s(e))
                                                : (function (e, t, n) {
                                                      if (i(n) && !1 !== n) {
                                                          var o = [l(t)];
                                                          !0 !== n && (o.push("="), o.push(l(n))), e.push(o.join(""));
                                                      }
                                                  })(a, s(e), o);
                                        });
                                    })(this.keys),
                                    a.length > 0 && t.push(s),
                                    t.push(a.join(o)),
                                    t.join("")
                                );
                            },
                        }),
                        new c(location.search, location.hash)
                    );
                })();
            })(e.query || {});
        }.call(this, n(1), n(1)));
    },
    function (e, t, n) {
        (function (i, o) {
            var r, s, a;
            function l(e) {
                return (l =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var c = c || {};
            (c.scope = {}),
                (c.findInternal = function (e, t, n) {
                    e instanceof String && (e = String(e));
                    for (var i = e.length, o = 0; o < i; o++) {
                        var r = e[o];
                        if (t.call(n, r, o, e)) return { i: o, v: r };
                    }
                    return { i: -1, v: void 0 };
                }),
                (c.ASSUME_ES5 = !1),
                (c.ASSUME_NO_NATIVE_MAP = !1),
                (c.ASSUME_NO_NATIVE_SET = !1),
                (c.SIMPLE_FROUND_POLYFILL = !1),
                (c.defineProperty =
                    c.ASSUME_ES5 || "function" == typeof Object.defineProperties
                        ? Object.defineProperty
                        : function (e, t, n) {
                              e != Array.prototype && e != Object.prototype && (e[t] = n.value);
                          }),
                (c.getGlobal = function (e) {
                    return "undefined" != typeof window && window === e ? e : void 0 !== i && null != i ? i : e;
                }),
                (c.global = c.getGlobal(this)),
                (c.polyfill = function (e, t, n, i) {
                    if (t) {
                        for (n = c.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
                            var o = e[i];
                            o in n || (n[o] = {}), (n = n[o]);
                        }
                        (t = t((i = n[(e = e[e.length - 1])]))) != i && null != t && c.defineProperty(n, e, { configurable: !0, writable: !0, value: t });
                    }
                }),
                c.polyfill(
                    "Array.prototype.find",
                    function (e) {
                        return (
                            e ||
                            function (e, t) {
                                return c.findInternal(this, e, t).v;
                            }
                        );
                    },
                    "es6",
                    "es3"
                ),
                window.Zepto,
                (s = [n(1)]),
                void 0 ===
                    (a =
                        "function" ==
                        typeof (r = function (e) {
                            var t = function (t, n, i) {
                                var o = {
                                    invalid: [],
                                    getCaret: function () {
                                        try {
                                            var e = 0,
                                                n = t.get(0),
                                                i = document.selection,
                                                r = n.selectionStart;
                                            if (i && -1 === navigator.appVersion.indexOf("MSIE 10")) {
                                                var s = i.createRange();
                                                s.moveStart("character", -o.val().length), (e = s.text.length);
                                            } else (r || "0" === r) && (e = r);
                                            return e;
                                        } catch (e) {}
                                    },
                                    setCaret: function (e) {
                                        try {
                                            if (t.is(":focus")) {
                                                var n = t.get(0);
                                                if (n.setSelectionRange) n.setSelectionRange(e, e);
                                                else {
                                                    var i = n.createTextRange();
                                                    i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select();
                                                }
                                            }
                                        } catch (e) {}
                                    },
                                    events: function () {
                                        t.on("keydown.mask", function (e) {
                                            t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val()), t.data("mask-previus-caret-pos", o.getCaret()), (o.maskDigitPosMapOld = o.maskDigitPosMap);
                                        })
                                            .on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", o.behaviour)
                                            .on("paste.mask drop.mask", function () {
                                                setTimeout(function () {
                                                    t.keydown().keyup();
                                                }, 100);
                                            })
                                            .on("change.mask", function () {
                                                t.data("changed", !0);
                                            })
                                            .on("blur.mask", function () {
                                                a === o.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1);
                                            })
                                            .on("blur.mask", function () {
                                                a = o.val();
                                            })
                                            .on("focus.mask", function (t) {
                                                !0 === i.selectOnFocus && e(t.target).select();
                                            })
                                            .on("focusout.mask", function () {
                                                i.clearIfNotMatch && !r.test(o.val()) && o.val("");
                                            });
                                    },
                                    getRegexMask: function () {
                                        for (var e, t, i, o, r = [], a = 0; a < n.length; a++)
                                            (e = s.translation[n.charAt(a)])
                                                ? ((t = e.pattern.toString().replace(/.{1}$|^.{1}/g, "")), (i = e.optional), (e = e.recursive) ? (r.push(n.charAt(a)), (o = { digit: n.charAt(a), pattern: t })) : r.push(i || e ? t + "?" : t))
                                                : r.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                                        return (r = r.join("")), o && (r = r.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(r);
                                    },
                                    destroyEvents: function () {
                                        t.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
                                    },
                                    val: function (e) {
                                        var n = t.is("input") ? "val" : "text";
                                        return 0 < arguments.length ? (t[n]() !== e && t[n](e), (n = t)) : (n = t[n]()), n;
                                    },
                                    calculateCaretPosition: function (e) {
                                        var n = o.getMasked(),
                                            i = o.getCaret();
                                        if (e !== n) {
                                            var r = t.data("mask-previus-caret-pos") || 0;
                                            n = n.length;
                                            var s,
                                                a = e.length,
                                                l = (e = 0),
                                                c = 0,
                                                d = 0;
                                            for (s = i; s < n && o.maskDigitPosMap[s]; s++) l++;
                                            for (s = i - 1; 0 <= s && o.maskDigitPosMap[s]; s--) e++;
                                            for (s = i - 1; 0 <= s; s--) o.maskDigitPosMap[s] && c++;
                                            for (s = r - 1; 0 <= s; s--) o.maskDigitPosMapOld[s] && d++;
                                            i > a ? (i = 10 * n) : r >= i && r !== a ? o.maskDigitPosMapOld[i] || ((r = i), (i = i - (d - c) - e), o.maskDigitPosMap[i] && (i = r)) : i > r && (i = i + (c - d) + l);
                                        }
                                        return i;
                                    },
                                    behaviour: function (n) {
                                        (n = n || window.event), (o.invalid = []);
                                        var i = t.data("mask-keycode");
                                        if (-1 === e.inArray(i, s.byPassKeys)) {
                                            i = o.getMasked();
                                            var r = o.getCaret(),
                                                a = t.data("mask-previus-value") || "";
                                            return (
                                                setTimeout(function () {
                                                    o.setCaret(o.calculateCaretPosition(a));
                                                }, e.jMaskGlobals.keyStrokeCompensation),
                                                o.val(i),
                                                o.setCaret(r),
                                                o.callbacks(n)
                                            );
                                        }
                                    },
                                    getMasked: function (e, t) {
                                        var r,
                                            a = [],
                                            l = void 0 === t ? o.val() : t + "",
                                            c = 0,
                                            d = n.length,
                                            u = 0,
                                            p = l.length,
                                            h = 1,
                                            f = "push",
                                            g = -1,
                                            m = 0;
                                        if (((t = []), i.reverse)) {
                                            (f = "unshift"), (h = -1);
                                            var v = 0;
                                            (c = d - 1), (u = p - 1);
                                            var y = function () {
                                                return -1 < c && -1 < u;
                                            };
                                        } else
                                            (v = d - 1),
                                                (y = function () {
                                                    return c < d && u < p;
                                                });
                                        for (; y(); ) {
                                            var w = n.charAt(c),
                                                b = l.charAt(u),
                                                x = s.translation[w];
                                            x
                                                ? (b.match(x.pattern)
                                                      ? (a[f](b), x.recursive && (-1 === g ? (g = c) : c === v && c !== g && (c = g - h), v === g && (c -= h)), (c += h))
                                                      : b === r
                                                      ? (m--, (r = void 0))
                                                      : x.optional
                                                      ? ((c += h), (u -= h))
                                                      : x.fallback
                                                      ? (a[f](x.fallback), (c += h), (u -= h))
                                                      : o.invalid.push({ p: u, v: b, e: x.pattern }),
                                                  (u += h))
                                                : (e || a[f](w), b === w ? (t.push(u), (u += h)) : ((r = w), t.push(u + m), m++), (c += h));
                                        }
                                        return (e = n.charAt(v)), d !== p + 1 || s.translation[e] || a.push(e), (a = a.join("")), o.mapMaskdigitPositions(a, t, p), a;
                                    },
                                    mapMaskdigitPositions: function (e, t, n) {
                                        for (e = i.reverse ? e.length - n : 0, o.maskDigitPosMap = {}, n = 0; n < t.length; n++) o.maskDigitPosMap[t[n] + e] = 1;
                                    },
                                    callbacks: function (e) {
                                        var r = o.val(),
                                            s = r !== a,
                                            l = [r, e, t, i],
                                            c = function (e, t, n) {
                                                "function" == typeof i[e] && t && i[e].apply(this, n);
                                            };
                                        c("onChange", !0 === s, l), c("onKeyPress", !0 === s, l), c("onComplete", r.length === n.length, l), c("onInvalid", 0 < o.invalid.length, [r, e, t, o.invalid, i]);
                                    },
                                };
                                t = e(t);
                                var r,
                                    s = this,
                                    a = o.val();
                                (n = "function" == typeof n ? n(o.val(), void 0, t, i) : n),
                                    (s.mask = n),
                                    (s.options = i),
                                    (s.remove = function () {
                                        var e = o.getCaret();
                                        return s.options.placeholder && t.removeAttr("placeholder"), t.data("mask-maxlength") && t.removeAttr("maxlength"), o.destroyEvents(), o.val(s.getCleanVal()), o.setCaret(e), t;
                                    }),
                                    (s.getCleanVal = function () {
                                        return o.getMasked(!0);
                                    }),
                                    (s.getMaskedVal = function (e) {
                                        return o.getMasked(!1, e);
                                    }),
                                    (s.init = function (a) {
                                        if (
                                            ((a = a || !1),
                                            (i = i || {}),
                                            (s.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch),
                                            (s.byPassKeys = e.jMaskGlobals.byPassKeys),
                                            (s.translation = e.extend({}, e.jMaskGlobals.translation, i.translation)),
                                            (s = e.extend(!0, {}, s, i)),
                                            (r = o.getRegexMask()),
                                            a)
                                        )
                                            o.events(), o.val(o.getMasked());
                                        else {
                                            i.placeholder && t.attr("placeholder", i.placeholder), t.data("mask") && t.attr("autocomplete", "off"), (a = 0);
                                            for (var l = !0; a < n.length; a++) {
                                                var c = s.translation[n.charAt(a)];
                                                if (c && c.recursive) {
                                                    l = !1;
                                                    break;
                                                }
                                            }
                                            l && t.attr("maxlength", n.length).data("mask-maxlength", !0), o.destroyEvents(), o.events(), (a = o.getCaret()), o.val(o.getMasked()), o.setCaret(a);
                                        }
                                    }),
                                    s.init(!t.is("input"));
                            };
                            e.maskWatchers = {};
                            var n = function () {
                                    var n = e(this),
                                        o = {},
                                        r = n.attr("data-mask");
                                    if ((n.attr("data-mask-reverse") && (o.reverse = !0), n.attr("data-mask-clearifnotmatch") && (o.clearIfNotMatch = !0), "true" === n.attr("data-mask-selectonfocus") && (o.selectOnFocus = !0), i(n, r, o)))
                                        return n.data("mask", new t(this, r, o));
                                },
                                i = function (t, n, i) {
                                    i = i || {};
                                    var o = e(t).data("mask"),
                                        r = JSON.stringify;
                                    t = e(t).val() || e(t).text();
                                    try {
                                        return "function" == typeof n && (n = n(t)), "object" !== l(o) || r(o.options) !== r(i) || o.mask !== n;
                                    } catch (e) {}
                                },
                                o = function (e) {
                                    var t = document.createElement("div"),
                                        n = (e = "on" + e) in t;
                                    return n || (t.setAttribute(e, "return;"), (n = "function" == typeof t[e])), n;
                                };
                            (e.fn.mask = function (n, o) {
                                o = o || {};
                                var r = this.selector,
                                    s = e.jMaskGlobals,
                                    a = s.watchInterval;
                                s = o.watchInputs || s.watchInputs;
                                var l = function () {
                                    if (i(this, n, o)) return e(this).data("mask", new t(this, n, o));
                                };
                                return (
                                    e(this).each(l),
                                    r &&
                                        "" !== r &&
                                        s &&
                                        (clearInterval(e.maskWatchers[r]),
                                        (e.maskWatchers[r] = setInterval(function () {
                                            e(document).find(r).each(l);
                                        }, a))),
                                    this
                                );
                            }),
                                (e.fn.masked = function (e) {
                                    return this.data("mask").getMaskedVal(e);
                                }),
                                (e.fn.unmask = function () {
                                    return (
                                        clearInterval(e.maskWatchers[this.selector]),
                                        delete e.maskWatchers[this.selector],
                                        this.each(function () {
                                            var t = e(this).data("mask");
                                            t && t.remove().removeData("mask");
                                        })
                                    );
                                }),
                                (e.fn.cleanVal = function () {
                                    return this.data("mask").getCleanVal();
                                }),
                                (e.applyDataMask = function (t) {
                                    ((t = t || e.jMaskGlobals.maskElements) instanceof e ? t : e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(n);
                                }),
                                (o = {
                                    maskElements: "input,td,span,div",
                                    dataMaskAttr: "*[data-mask]",
                                    dataMask: !0,
                                    watchInterval: 300,
                                    watchInputs: !0,
                                    keyStrokeCompensation: 10,
                                    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && o("input"),
                                    watchDataMask: !1,
                                    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                                    translation: { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } },
                                }),
                                (e.jMaskGlobals = e.jMaskGlobals || {}),
                                (o = e.jMaskGlobals = e.extend(!0, {}, o, e.jMaskGlobals)).dataMask && e.applyDataMask(),
                                setInterval(function () {
                                    e.jMaskGlobals.watchDataMask && e.applyDataMask();
                                }, o.watchInterval);
                        })
                            ? r.apply(t, s)
                            : r) || (e.exports = a);
        }.call(this, n(33), n(1)));
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        e.exports = n(35);
    },
    function (e, t, n) {
        "use strict";
        var i = n(0),
            o = n(7),
            r = n(37),
            s = n(4);
        function a(e) {
            var t = new r(e),
                n = o(r.prototype.request, t);
            return i.extend(n, r.prototype, t), i.extend(n, t), n;
        }
        var l = a(s);
        (l.Axios = r),
            (l.create = function (e) {
                return a(i.merge(s, e));
            }),
            (l.Cancel = n(11)),
            (l.CancelToken = n(51)),
            (l.isCancel = n(10)),
            (l.all = function (e) {
                return Promise.all(e);
            }),
            (l.spread = n(52)),
            (e.exports = l),
            (e.exports.default = l);
    },
    function (e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }
        e.exports = function (e) {
            return (
                null != e &&
                (n(e) ||
                    (function (e) {
                        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
                    })(e) ||
                    !!e._isBuffer)
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(4),
            o = n(0),
            r = n(46),
            s = n(47);
        function a(e) {
            (this.defaults = e), (this.interceptors = { request: new r(), response: new r() });
        }
        (a.prototype.request = function (e) {
            "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), ((e = o.merge(i, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase());
            var t = [s, void 0],
                n = Promise.resolve(e);
            for (
                this.interceptors.request.forEach(function (e) {
                    t.unshift(e.fulfilled, e.rejected);
                }),
                    this.interceptors.response.forEach(function (e) {
                        t.push(e.fulfilled, e.rejected);
                    });
                t.length;

            )
                n = n.then(t.shift(), t.shift());
            return n;
        }),
            o.forEach(["delete", "get", "head", "options"], function (e) {
                a.prototype[e] = function (t, n) {
                    return this.request(o.merge(n || {}, { method: e, url: t }));
                };
            }),
            o.forEach(["post", "put", "patch"], function (e) {
                a.prototype[e] = function (t, n, i) {
                    return this.request(o.merge(i || {}, { method: e, url: t, data: n }));
                };
            }),
            (e.exports = a);
    },
    function (e, t) {
        var n,
            i,
            o = (e.exports = {});
        function r() {
            throw new Error("setTimeout has not been defined");
        }
        function s() {
            throw new Error("clearTimeout has not been defined");
        }
        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === r || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
            try {
                return n(e, 0);
            } catch (t) {
                try {
                    return n.call(null, e, 0);
                } catch (t) {
                    return n.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : r;
            } catch (e) {
                n = r;
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
                i = s;
            }
        })();
        var l,
            c = [],
            d = !1,
            u = -1;
        function p() {
            d && l && ((d = !1), l.length ? (c = l.concat(c)) : (u = -1), c.length && h());
        }
        function h() {
            if (!d) {
                var e = a(p);
                d = !0;
                for (var t = c.length; t; ) {
                    for (l = c, c = []; ++u < t; ) l && l[u].run();
                    (u = -1), (t = c.length);
                }
                (l = null),
                    (d = !1),
                    (function (e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === s || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
                        try {
                            i(e);
                        } catch (t) {
                            try {
                                return i.call(null, e);
                            } catch (t) {
                                return i.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function f(e, t) {
            (this.fun = e), (this.array = t);
        }
        function g() {}
        (o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new f(e, t)), 1 !== c.length || d || a(h);
        }),
            (f.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = g),
            (o.addListener = g),
            (o.once = g),
            (o.off = g),
            (o.removeListener = g),
            (o.removeAllListeners = g),
            (o.emit = g),
            (o.prependListener = g),
            (o.prependOnceListener = g),
            (o.listeners = function (e) {
                return [];
            }),
            (o.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
                return "/";
            }),
            (o.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (e, t, n) {
        "use strict";
        var i = n(0);
        e.exports = function (e, t) {
            i.forEach(e, function (n, i) {
                i !== t && i.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[i]);
            });
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(9);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, i, o) {
            return (e.config = t), n && (e.code = n), (e.request = i), (e.response = o), e;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0);
        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
            if (!t) return e;
            var r;
            if (n) r = n(t);
            else if (i.isURLSearchParams(t)) r = t.toString();
            else {
                var s = [];
                i.forEach(t, function (e, t) {
                    null != e &&
                        (i.isArray(e) ? (t += "[]") : (e = [e]),
                        i.forEach(e, function (e) {
                            i.isDate(e) ? (e = e.toISOString()) : i.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e));
                        }));
                }),
                    (r = s.join("&"));
            }
            return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0),
            o = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent",
            ];
        e.exports = function (e) {
            var t,
                n,
                r,
                s = {};
            return e
                ? (i.forEach(e.split("\n"), function (e) {
                      if (((r = e.indexOf(":")), (t = i.trim(e.substr(0, r)).toLowerCase()), (n = i.trim(e.substr(r + 1))), t)) {
                          if (s[t] && o.indexOf(t) >= 0) return;
                          s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n;
                      }
                  }),
                  s)
                : s;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0);
        e.exports = i.isStandardBrowserEnv()
            ? (function () {
                  var e,
                      t = /(msie|trident)/i.test(navigator.userAgent),
                      n = document.createElement("a");
                  function o(e) {
                      var i = e;
                      return (
                          t && (n.setAttribute("href", i), (i = n.href)),
                          n.setAttribute("href", i),
                          {
                              href: n.href,
                              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                              host: n.host,
                              search: n.search ? n.search.replace(/^\?/, "") : "",
                              hash: n.hash ? n.hash.replace(/^#/, "") : "",
                              hostname: n.hostname,
                              port: n.port,
                              pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                          }
                      );
                  }
                  return (
                      (e = o(window.location.href)),
                      function (t) {
                          var n = i.isString(t) ? o(t) : t;
                          return n.protocol === e.protocol && n.host === e.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0);
        e.exports = i.isStandardBrowserEnv()
            ? {
                  write: function (e, t, n, o, r, s) {
                      var a = [];
                      a.push(e + "=" + encodeURIComponent(t)),
                          i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                          i.isString(o) && a.push("path=" + o),
                          i.isString(r) && a.push("domain=" + r),
                          !0 === s && a.push("secure"),
                          (document.cookie = a.join("; "));
                  },
                  read: function (e) {
                      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                      return t ? decodeURIComponent(t[3]) : null;
                  },
                  remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0);
        function o() {
            this.handlers = [];
        }
        (o.prototype.use = function (e, t) {
            return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
        }),
            (o.prototype.eject = function (e) {
                this.handlers[e] && (this.handlers[e] = null);
            }),
            (o.prototype.forEach = function (e) {
                i.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                });
            }),
            (e.exports = o);
    },
    function (e, t, n) {
        "use strict";
        var i = n(0),
            o = n(48),
            r = n(10),
            s = n(4),
            a = n(49),
            l = n(50);
        function c(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
            return (
                c(e),
                e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)),
                (e.headers = e.headers || {}),
                (e.data = o(e.data, e.headers, e.transformRequest)),
                (e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {})),
                i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                    delete e.headers[t];
                }),
                (e.adapter || s.adapter)(e).then(
                    function (t) {
                        return c(e), (t.data = o(t.data, t.headers, e.transformResponse)), t;
                    },
                    function (t) {
                        return r(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                    }
                )
            );
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(0);
        e.exports = function (e, t, n) {
            return (
                i.forEach(n, function (n) {
                    e = n(e, t);
                }),
                e
            );
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(11);
        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e;
            });
            var n = this;
            e(function (e) {
                n.reason || ((n.reason = new i(e)), t(n.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
        }),
            (o.source = function () {
                var e;
                return {
                    token: new o(function (t) {
                        e = t;
                    }),
                    cancel: e,
                };
            }),
            (e.exports = o);
    },
    function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        };
    },
    function (e, t) {},
]);
