// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function(predicate) {
       // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
  
        var o = Object(this);
  
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
  
        // 3. If IsCallable(predicate) is false, throw a TypeError exception.
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
  
        // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
        var thisArg = arguments[1];
  
        // 5. Let k be 0.
        var k = 0;
  
        // 6. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          // e. Increase k by 1.
          k++;
        }
  
        // 7. Return undefined.
        return undefined;
      },
      configurable: true,
      writable: true
    });
  }

(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([[0], { 27: function (e, c, t) { e.exports = t(43) }, 37: function (e, c, t) { }, 38: function (e, c, t) { }, 39: function (e, c, t) { }, 43: function (e, c, t) { "use strict"; t.r(c); var r = t(0), n = t.n(r), a = t(5), o = t.n(a), l = t(10), i = (t(37), function () { return n.a.createElement("div", { className: "header" }, n.a.createElement("h1", { className: "header-text centered" }, "Color Cards Game"), n.a.createElement("h2", { className: "centered" }, "Find two cards with the same color")) }), d = t(46), u = t(45), s = (t(38), t(39), function (e) { var c = e.color, t = e.id, r = e.clicked, a = e.onClick; return n.a.createElement("div", { id: t, className: "color-card" + (r ? " clicked" : ""), onClick: a }, n.a.createElement("div", { className: "color-card-inner" }, n.a.createElement("div", { className: "color-card-front" }, n.a.createElement("p", { className: "color-card-text" }, "Click Me:)")), n.a.createElement("div", { className: "color-card-back", style: { backgroundColor: c } }, n.a.createElement("p", { className: "color-card-text" }, "Find the same color")))) }), f = t(15), m = t.n(f), v = t(20), b = "CARD_TOGGLE_CLICK", O = "CARD_COMPARE_COLORS"; function j(e, c) { return e && c ? { type: e, payload: c } : e && !c ? { type: e } : "Error" } var k = function (e) { return j(b, e) }, E = function (e, c) { return new Promise((function (t) { setTimeout((function () { t(c(function (e) { return j(O, e) }(e))) }), 800) })) }, h = function () { var e = Object(l.c)((function (e) { return e })).cards, c = Object(l.b)(); return e ? 0 === e.lengh ? n.a.createElement("div", { className: "winner" }, n.a.createElement("h1", { className: "centered" }, "YOU WON!"), n.a.createElement("h1", { className: "centered" }, "CONGRATULATIONS!")) : n.a.createElement(d.a, { className: "cards-box" }, e.map((function (e) { return n.a.createElement(u.a, { key: e.id, timeout: 500, classNames: "item" }, n.a.createElement(s, { color: e.color, clicked: e.clicked, onClick: function () { return c((t = e.id, function () { var e = Object(v.a)(m.a.mark((function e(c) { var r; return m.a.wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return c(k(t)), e.next = 3, E(t, c); case 3: return r = e.sent, e.abrupt("return", r); case 5: case "end": return e.stop() } }), e) }))); return function (c) { return e.apply(this, arguments) } }())); var t } })) }))) : new Error("ColorCard crashed") }, p = t(21), N = t(22), C = t(25), g = t(24), y = function (e) { Object(C.a)(t, e); var c = Object(g.a)(t); function t(e) { var r; return Object(p.a)(this, t), (r = c.call(this, e)).state = { hasError: !1 }, r } return Object(N.a)(t, [{ key: "componentDidCatch", value: function (e, c) { console.log("Error log:", e, c) } }, { key: "render", value: function () { return this.state.hasError ? n.a.createElement("div", null, n.a.createElement("h1", null, "DON'T PANIC!"), n.a.createElement("h2", null, "Something went wrong but we will fix it soon :)")) : this.props.children } }], [{ key: "getDerivedStateFromError", value: function (e) { return { hasError: !0 } } }]), t }(r.Component); function w() { return n.a.createElement("div", { className: "App" }, n.a.createElement(i, null), n.a.createElement(y, null, n.a.createElement(h, null))) } var x = t(9), A = t(6), I = t(4), D = t(1), R = { level: 1, cards: [{ id: Object(D.v4)(), color: "#f0690a", clicked: !1 }, { id: Object(D.v4)(), color: "#108651", clicked: !1 }, { id: Object(D.v4)(), color: "#108651", clicked: !1 }, { id: Object(D.v4)(), color: "#f0690a", clicked: !1 }, { id: Object(D.v4)(), color: "#10f90a", clicked: !1 }, { id: Object(D.v4)(), color: "#1202b4", clicked: !1 }, { id: Object(D.v4)(), color: "#1202b4", clicked: !1 }, { id: Object(D.v4)(), color: "#10f90a", clicked: !1 }, { id: Object(D.v4)(), color: "#f0699a", clicked: !1 }, { id: Object(D.v4)(), color: "#101051", clicked: !1 }, { id: Object(D.v4)(), color: "#101051", clicked: !1 }, { id: Object(D.v4)(), color: "#f0699a", clicked: !1 }, { id: Object(D.v4)(), color: "#13690a", clicked: !1 }, { id: Object(D.v4)(), color: "#108614", clicked: !1 }, { id: Object(D.v4)(), color: "#108614", clicked: !1 }, { id: Object(D.v4)(), color: "#13690a", clicked: !1 }] }, S = function (e, c) { return e.find((function (e) { return e.id === c })) }, T = function (e) { return Object(I.a)(Object(I.a)({}, e), {}, { clicked: !e.clicked }) }, G = function (e, c, t) { var r = c.findIndex((function (e) { var c = e.clicked, r = e.id; return !0 === c && r !== t.id })); if (-1 !== r) { console.log("one is clicked"); var n = c.findIndex((function (e) { return e.id === t.id })); if (n !== r) { console.log("cards not the same"); var a = c[r]; return a.color === t.color ? (console.log("remove"), function (e, c, t, r) { return Object(I.a)(Object(I.a)({}, e), {}, { cards: c.filter((function (e) { return e.id !== t.id && e.id !== r.id })) }) }(e, c, t, a)) : function (e, c, t, r, n, a) { var o = [].concat(Object(A.a)(c.slice(0, n)), [T(t)], Object(A.a)(c.slice(n + 1))); return Object(I.a)(Object(I.a)({}, e), {}, { cards: [].concat(Object(A.a)(o.slice(0, a)), [T(r)], Object(A.a)(o.slice(a + 1))) }) }(e, c, t, a, n, r) } } return e }, L = function (e, c, t, r) { var n = T(t); return Object(I.a)(Object(I.a)({}, e), {}, { cards: [].concat(Object(A.a)(c.slice(0, r)), [n], Object(A.a)(c.slice(r + 1))) }) }, _ = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = e.cards, r = S(t, c.payload), n = t.findIndex((function (e) { return e.id === c.payload })); switch (c.type) { case b: return L(e, t, r, n); case O: return G(e, t, r); default: return e } }, F = t(23), M = Object(x.c)(_, Object(x.a)(F.a, (function (e) { var c = e.getState; return function (e) { return function (t) { return console.log("logMiddleware", t.type, c()), e(t) } } }))), P = function () { return n.a.createElement(l.a, { store: M }, n.a.createElement(y, null, n.a.createElement(w, null))) }, J = document.getElementById("root"); o.a.render(n.a.createElement(P, null), J) } }, [[27, 1, 2]]]);
//# sourceMappingURL=main.f6ecd20d.chunk.js.map