import w, { useState as ee } from "react";
var re = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function pr() {
  if (Pe)
    return I;
  Pe = 1;
  var n = w, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(E, d, T) {
    var m, x = {}, C = null, W = null;
    T !== void 0 && (C = "" + T), d.key !== void 0 && (C = "" + d.key), d.ref !== void 0 && (W = d.ref);
    for (m in d)
      u.call(d, m) && !b.hasOwnProperty(m) && (x[m] = d[m]);
    if (E && E.defaultProps)
      for (m in d = E.defaultProps, d)
        x[m] === void 0 && (x[m] = d[m]);
    return { $$typeof: a, type: E, key: C, ref: W, props: x, _owner: v.current };
  }
  return I.Fragment = i, I.jsx = O, I.jsxs = O, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function gr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var n = w, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), E = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Fe = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Fe];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ie = !1, $e = !1, We = !1, Me = !1, Ye = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === b || Ye || e === v || e === T || e === m || Me || e === W || Ie || $e || We || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === x || e.$$typeof === O || e.$$typeof === E || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case i:
          return "Portal";
        case b:
          return "Profiler";
        case v:
          return "StrictMode";
        case T:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ae(r) + ".Consumer";
          case O:
            var t = e;
            return ae(t._context) + ".Provider";
          case d:
            return Ue(e, e.render, "ForwardRef");
          case x:
            var o = e.displayName || null;
            return o !== null ? o : j(e.type) || "Memo";
          case C: {
            var c = e, f = c._payload, l = c._init;
            try {
              return j(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, N = 0, oe, ie, ue, se, le, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ve() {
      {
        if (N === 0) {
          oe = console.log, ie = console.info, ue = console.warn, se = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function ze() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: ie
            }),
            warn: S({}, e, {
              value: ue
            }),
            error: S({}, e, {
              value: se
            }),
            group: S({}, e, {
              value: le
            }),
            groupCollapsed: S({}, e, {
              value: ce
            }),
            groupEnd: S({}, e, {
              value: fe
            })
          });
        }
        N < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = k.ReactCurrentDispatcher, q;
    function M(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            q = o && o[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, Y;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Be();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = K.current, K.current = null, Ve();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (P) {
              o = P;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (P) {
              o = P;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            o = P;
          }
          e();
        }
      } catch (P) {
        if (P && o && typeof P.stack == "string") {
          for (var s = P.stack.split(`
`), y = o.stack.split(`
`), p = s.length - 1, g = y.length - 1; p >= 1 && g >= 0 && s[p] !== y[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (s[p] !== y[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || s[p] !== y[g]) {
                    var _ = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, _), _;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        G = !1, K.current = f, ze(), Error.prepareStackTrace = c;
      }
      var F = e ? e.displayName || e.name : "", je = F ? M(F) : "";
      return typeof e == "function" && Y.set(e, je), je;
    }
    function Ke(e, r, t) {
      return ve(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, qe(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case T:
          return M("Suspense");
        case m:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ke(e.render);
          case x:
            return L(e.type, r, t);
          case C: {
            var o = e, c = o._payload, f = o._init;
            try {
              return L(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, pe = {}, ge = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ge(e, r, t, o, c) {
      {
        var f = Function.call.bind(U);
        for (var l in e)
          if (f(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var y = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              s = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (V(c), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), V(null)), s instanceof Error && !(s.message in pe) && (pe[s.message] = !0, V(c), h("Failed %s type: %s", t, s.message), V(null));
          }
      }
    }
    var Je = Array.isArray;
    function J(e) {
      return Je(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (Xe(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), me(e);
    }
    var A = k.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye, H;
    H = {};
    function Qe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function er(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rr(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = j(A.current.type);
        H[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(A.current.type), e.ref), H[t] = !0);
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          he || (he = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, o, c, f, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function or(e, r, t, o, c) {
      {
        var f, l = {}, s = null, y = null;
        t !== void 0 && (be(t), s = "" + t), er(r) && (be(r.key), s = "" + r.key), Qe(r) && (y = r.ref, rr(r, c));
        for (f in r)
          U.call(r, f) && !Ze.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            l[f] === void 0 && (l[f] = p[f]);
        }
        if (s || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && tr(l, g), y && nr(l, g);
        }
        return ar(e, s, y, c, o, A.current, l);
      }
    }
    var X = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function _e() {
      {
        if (X.current) {
          var e = j(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ur(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + j(e._owner.type) + "."), D(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), D(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            Q(o) && Oe(o, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ne(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), l; !(l = f.next()).done; )
              Q(l.value) && Oe(l.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = j(r);
          Ge(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var c = j(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            D(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function xe(e, r, t, o, c, f) {
      {
        var l = Le(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ir(c);
          y ? s += y : s += _e();
          var p;
          e === null ? p = "null" : J(e) ? p = "array" : e !== void 0 && e.$$typeof === a ? (p = "<" + (j(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var g = or(e, r, t, c, f);
        if (g == null)
          return g;
        if (l) {
          var _ = r.children;
          if (_ !== void 0)
            if (o)
              if (J(_)) {
                for (var F = 0; F < _.length; F++)
                  we(_[F], e);
                Object.freeze && Object.freeze(_);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(_, e);
        }
        return e === u ? lr(g) : sr(g), g;
      }
    }
    function cr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function fr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var dr = fr, vr = cr;
    $.Fragment = u, $.jsx = dr, $.jsxs = vr;
  }()), $;
}
process.env.NODE_ENV === "production" ? re.exports = pr() : re.exports = gr();
var R = re.exports, ke = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ce = w.createContext && /* @__PURE__ */ w.createContext(ke), mr = ["attr", "size", "title"];
function br(n, a) {
  if (n == null)
    return {};
  var i = hr(n, a), u, v;
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(n);
    for (v = 0; v < b.length; v++)
      u = b[v], !(a.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(n, u) && (i[u] = n[u]);
  }
  return i;
}
function hr(n, a) {
  if (n == null)
    return {};
  var i = {}, u = Object.keys(n), v, b;
  for (b = 0; b < u.length; b++)
    v = u[b], !(a.indexOf(v) >= 0) && (i[v] = n[v]);
  return i;
}
function z() {
  return z = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var i = arguments[a];
      for (var u in i)
        Object.prototype.hasOwnProperty.call(i, u) && (n[u] = i[u]);
    }
    return n;
  }, z.apply(this, arguments);
}
function Se(n, a) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    a && (u = u.filter(function(v) {
      return Object.getOwnPropertyDescriptor(n, v).enumerable;
    })), i.push.apply(i, u);
  }
  return i;
}
function B(n) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Se(Object(i), !0).forEach(function(u) {
      yr(n, u, i[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : Se(Object(i)).forEach(function(u) {
      Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(i, u));
    });
  }
  return n;
}
function yr(n, a, i) {
  return a = Er(a), a in n ? Object.defineProperty(n, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = i, n;
}
function Er(n) {
  var a = _r(n, "string");
  return typeof a == "symbol" ? a : String(a);
}
function _r(n, a) {
  if (typeof n != "object" || n === null)
    return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var u = i.call(n, a || "default");
    if (typeof u != "object")
      return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function De(n) {
  return n && n.map((a, i) => /* @__PURE__ */ w.createElement(a.tag, B({
    key: i
  }, a.attr), De(a.child)));
}
function Rr(n) {
  return (a) => /* @__PURE__ */ w.createElement(Or, z({
    attr: B({}, n.attr)
  }, a), De(n.child));
}
function Or(n) {
  var a = (i) => {
    var {
      attr: u,
      size: v,
      title: b
    } = n, O = br(n, mr), E = v || i.size || "1em", d;
    return i.className && (d = i.className), n.className && (d = (d ? d + " " : "") + n.className), /* @__PURE__ */ w.createElement("svg", z({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, u, O, {
      className: d,
      style: B(B({
        color: n.color || i.color
      }, i.style), n.style),
      height: E,
      width: E,
      xmlns: "http://www.w3.org/2000/svg"
    }), b && /* @__PURE__ */ w.createElement("title", null, b), n.children);
  };
  return Ce !== void 0 ? /* @__PURE__ */ w.createElement(Ce.Consumer, null, (i) => a(i)) : a(ke);
}
function wr(n) {
  return Rr({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" }, child: [] }] })(n);
}
const xr = ({ title: n, ContainerPosition: a, inputStyle: i, buttonStyle: u }) => {
  const [v, b] = ee(""), [O, E] = ee([]), d = () => {
    v.trim() !== "" && (E([...O, v]), b(""));
  }, T = (m) => {
    m.key === "Enter" && d();
  };
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: `${a} bg-white flex flex-col justify-center items-center md:w-80 p-2 space-y-5 shadow-lg rounded-lg border-2 border-solid`,
      children: [
        /* @__PURE__ */ R.jsxs("h5", { className: "", children: [
          n,
          " "
        ] }),
        /* @__PURE__ */ R.jsx("div", { className: "border-solid w-64 rounded-md h-60 overflow-y-auto border-2 border-[#f4f4f4] space-y-2 p-2", children: w.Children.toArray(
          O.map((m) => /* @__PURE__ */ R.jsx("div", { className: "bg-[#f4f4f4] p-1.5 rounded-md", children: m }))
        ) }),
        /* @__PURE__ */ R.jsxs("div", { className: "flex  flex-col md:flex-row gap-2", children: [
          /* @__PURE__ */ R.jsx(
            "input",
            {
              type: "text",
              value: v,
              onChange: (m) => b(m.target.value),
              className: `${i}`,
              onKeyUp: T
            }
          ),
          /* @__PURE__ */ R.jsx("button", { className: `${u}`, onClick: d, children: /* @__PURE__ */ R.jsx(wr, { size: 30 }) })
        ] })
      ]
    }
  );
}, Pr = ({ position: n }) => {
  const [a, i] = ee(!1), u = () => {
    i(!a);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: `${n}`, children: [
    /* @__PURE__ */ R.jsx(
      "button",
      {
        className: `${a ? "bg-red-300" : "bg-blue-300"} p-3 rounded-full`,
        onClick: u,
        children: "chat"
      }
    ),
    a && /* @__PURE__ */ R.jsx(
      xr,
      {
        title: "Dowell Customer Support",
        ContainerPosition: "fixed bottom-16 left-16 sm:right-16 md:right-24 lg:right-28",
        inputStyle: "rounded-lg h-10 appearance-none bg-transparent border text-gray-700 px-1 focus:outline-none",
        buttonStyle: "rounded-lg border-4 border-double border-white bg-blue-300 py-1 px-2 h-10"
      }
    )
  ] });
};
export {
  Pr as default
};
