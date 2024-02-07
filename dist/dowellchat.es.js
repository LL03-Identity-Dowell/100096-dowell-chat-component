import k, { useState as ne, useRef as hr, useEffect as Ae } from "react";
var ae = { exports: {} }, N = {};
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
function yr() {
  if (Pe)
    return N;
  Pe = 1;
  var n = k, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, p = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(x, c, _) {
    var y, w = {}, v = null, S = null;
    _ !== void 0 && (v = "" + _), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (S = c.ref);
    for (y in c)
      s.call(c, y) && !h.hasOwnProperty(y) && (w[y] = c[y]);
    if (x && x.defaultProps)
      for (y in c = x.defaultProps, c)
        w[y] === void 0 && (w[y] = c[y]);
    return { $$typeof: a, type: x, key: v, ref: S, props: w, _owner: p.current };
  }
  return N.Fragment = o, N.jsx = j, N.jsxs = j, N;
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
var ke;
function xr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = k, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), x = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), oe = Symbol.iterator, Ie = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[Ie];
      return typeof r == "function" ? r : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var i = F.ReactDebugCurrentFrame, f = i.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Ne = !1, $e = !1, Ye = !1, Ue = !1, ze = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === h || ze || e === p || e === _ || e === y || Ue || e === S || Ne || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === w || e.$$typeof === j || e.$$typeof === x || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ke(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case h:
          return "Profiler";
        case p:
          return "StrictMode";
        case _:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return se(r) + ".Consumer";
          case j:
            var t = e;
            return se(t._context) + ".Provider";
          case c:
            return Ke(e, e.render, "ForwardRef");
          case w:
            var i = e.displayName || null;
            return i !== null ? i : T(e.type) || "Memo";
          case v: {
            var f = e, d = f._payload, u = f._init;
            try {
              return T(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, B = 0, le, ue, fe, ce, de, pe, ve;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function qe() {
      {
        if (B === 0) {
          le = console.log, ue = console.info, fe = console.warn, ce = console.error, de = console.group, pe = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        B++;
      }
    }
    function Ge() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: le
            }),
            info: D({}, e, {
              value: ue
            }),
            warn: D({}, e, {
              value: fe
            }),
            error: D({}, e, {
              value: ce
            }),
            group: D({}, e, {
              value: de
            }),
            groupCollapsed: D({}, e, {
              value: pe
            }),
            groupEnd: D({}, e, {
              value: ve
            })
          });
        }
        B < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = F.ReactCurrentDispatcher, H;
    function Y(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
            H = i && i[1] || "";
          }
        return `
` + H + e;
      }
    }
    var X = !1, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function me(e, r) {
      if (!e || X)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      X = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = J.current, J.current = null, qe();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (P) {
              i = P;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (P) {
              i = P;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            i = P;
          }
          e();
        }
      } catch (P) {
        if (P && i && typeof P.stack == "string") {
          for (var l = P.stack.split(`
`), E = i.stack.split(`
`), g = l.length - 1, m = E.length - 1; g >= 1 && m >= 0 && l[g] !== E[m]; )
            m--;
          for (; g >= 1 && m >= 0; g--, m--)
            if (l[g] !== E[m]) {
              if (g !== 1 || m !== 1)
                do
                  if (g--, m--, m < 0 || l[g] !== E[m]) {
                    var C = `
` + l[g].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (g >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        X = !1, J.current = d, Ge(), Error.prepareStackTrace = f;
      }
      var M = e ? e.displayName || e.name : "", Te = M ? Y(M) : "";
      return typeof e == "function" && U.set(e, Te), Te;
    }
    function He(e, r, t) {
      return me(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Xe(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case _:
          return Y("Suspense");
        case y:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return He(e.render);
          case w:
            return z(e.type, r, t);
          case v: {
            var i = e, f = i._payload, d = i._init;
            try {
              return z(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, be = {}, he = F.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ze(e, r, t, i, f) {
      {
        var d = Function.call.bind(V);
        for (var u in e)
          if (d(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var E = Error((i || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              l = e[u](r, u, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              l = g;
            }
            l && !(l instanceof Error) && (K(f), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, u, typeof l), K(null)), l instanceof Error && !(l.message in be) && (be[l.message] = !0, K(f), R("Failed %s type: %s", t, l.message), K(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Z(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function xe(e) {
      if (rr(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ye(e);
    }
    var L = F.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ee, Q;
    Q = {};
    function nr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = T(L.current.type);
        Q[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(L.current.type), e.ref), Q[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Re || (Re = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, i, f, d, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ur(e, r, t, i, f) {
      {
        var d, u = {}, l = null, E = null;
        t !== void 0 && (xe(t), l = "" + t), ar(r) && (xe(r.key), l = "" + r.key), nr(r) && (E = r.ref, or(r, f));
        for (d in r)
          V.call(r, d) && !tr.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            u[d] === void 0 && (u[d] = g[d]);
        }
        if (l || E) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && ir(u, m), E && sr(u, m);
        }
        return lr(e, l, E, f, i, L.current, u);
      }
    }
    var ee = F.ReactCurrentOwner, we = F.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function _e() {
      {
        if (ee.current) {
          var e = T(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ce = {};
    function cr(e) {
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
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var i = "";
        e && e._owner && e._owner !== ee.current && (i = " It was passed a child from " + T(e._owner.type) + "."), A(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), A(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            te(i) && je(i, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Be(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
              te(u.value) && je(u.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = T(r);
          Ze(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var f = T(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            A(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Se(e, r, t, i, f, d) {
      {
        var u = Ve(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = fr(f);
          E ? l += E : l += _e();
          var g;
          e === null ? g = "null" : Z(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (T(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, l);
        }
        var m = ur(e, r, t, f, d);
        if (m == null)
          return m;
        if (u) {
          var C = r.children;
          if (C !== void 0)
            if (i)
              if (Z(C)) {
                for (var M = 0; M < C.length; M++)
                  Oe(C[M], e);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(C, e);
        }
        return e === s ? pr(m) : dr(m), m;
      }
    }
    function vr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var mr = gr, br = vr;
    $.Fragment = s, $.jsx = mr, $.jsxs = br;
  }()), $;
}
process.env.NODE_ENV === "production" ? ae.exports = yr() : ae.exports = xr();
var b = ae.exports, Me = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, De = k.createContext && /* @__PURE__ */ k.createContext(Me), Rr = ["attr", "size", "title"];
function Er(n, a) {
  if (n == null)
    return {};
  var o = wr(n, a), s, p;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(n);
    for (p = 0; p < h.length; p++)
      s = h[p], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (o[s] = n[s]);
  }
  return o;
}
function wr(n, a) {
  if (n == null)
    return {};
  var o = {}, s = Object.keys(n), p, h;
  for (h = 0; h < s.length; h++)
    p = s[h], !(a.indexOf(p) >= 0) && (o[p] = n[p]);
  return o;
}
function q() {
  return q = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
    }
    return n;
  }, q.apply(this, arguments);
}
function Fe(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    a && (s = s.filter(function(p) {
      return Object.getOwnPropertyDescriptor(n, p).enumerable;
    })), o.push.apply(o, s);
  }
  return o;
}
function G(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Fe(Object(o), !0).forEach(function(s) {
      _r(n, s, o[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : Fe(Object(o)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(o, s));
    });
  }
  return n;
}
function _r(n, a, o) {
  return a = Cr(a), a in n ? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = o, n;
}
function Cr(n) {
  var a = jr(n, "string");
  return typeof a == "symbol" ? a : String(a);
}
function jr(n, a) {
  if (typeof n != "object" || n === null)
    return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var s = o.call(n, a || "default");
    if (typeof s != "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function We(n) {
  return n && n.map((a, o) => /* @__PURE__ */ k.createElement(a.tag, G({
    key: o
  }, a.attr), We(a.child)));
}
function Or(n) {
  return (a) => /* @__PURE__ */ k.createElement(Sr, q({
    attr: G({}, n.attr)
  }, a), We(n.child));
}
function Sr(n) {
  var a = (o) => {
    var {
      attr: s,
      size: p,
      title: h
    } = n, j = Er(n, Rr), x = p || o.size || "1em", c;
    return o.className && (c = o.className), n.className && (c = (c ? c + " " : "") + n.className), /* @__PURE__ */ k.createElement("svg", q({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, s, j, {
      className: c,
      style: G(G({
        color: n.color || o.color
      }, o.style), n.style),
      height: x,
      width: x,
      xmlns: "http://www.w3.org/2000/svg"
    }), h && /* @__PURE__ */ k.createElement("title", null, h), n.children);
  };
  return De !== void 0 ? /* @__PURE__ */ k.createElement(De.Consumer, null, (o) => a(o)) : a(Me);
}
function Tr(n) {
  return Or({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" }, child: [] }] })(n);
}
const O = {
  messageSender: {
    fontWeight: "bold"
  },
  messageText: {
    marginTop: "4px"
  },
  messageTime: {
    fontSize: "12px",
    color: "#777"
  },
  headerUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px"
  },
  headerBot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "10px"
  },
  userMessage: {
    backgroundColor: "#e6f7ff",
    position: "relative",
    color: "#333",
    borderRadius: "16px",
    padding: "10px 15px",
    marginBottom: "8px",
    marginLeft: "2rem",
    alignSelf: "flex-end",
    display: "flex",
    justifySelf: "center",
    flexDirection: "column",
    width: "max-content",
    overflowWrap: "break-word",
    maxWidth: "70%"
  },
  userMessageBeforeAfter: {
    content: "",
    position: "absolute",
    bottom: "-7px",
    width: "10px",
    height: "10px",
    backgroundColor: "#e6f7ff",
    transform: "rotate(45deg)",
    borderRadius: "50%"
  },
  userMessageAfter: {
    right: "-5px"
  },
  botMessage: {
    position: "relative",
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: "16px",
    padding: "10px 15px",
    marginBottom: "8px",
    maxWidth: "70%",
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "max-content",
    overflowWrap: "break-word"
  },
  botMessageBefore: {
    content: "",
    position: "absolute",
    bottom: "-7px",
    width: "10px",
    height: "10px",
    backgroundColor: "#f0f0f0",
    transform: "rotate(45deg)",
    borderRadius: "50%"
  },
  botMessageBeforeLeft: {
    left: "-5px"
  }
}, Pr = ({ sender: n, message: a, time: o }) => /* @__PURE__ */ b.jsx(b.Fragment, { children: /* @__PURE__ */ b.jsxs("div", { style: n === "user" ? O.userMessage : O.botMessage, children: [
  n != "user" && /* @__PURE__ */ b.jsx("div", { style: { ...O.botMessageBefore, ...O.botMessageBeforeLeft } }),
  /* @__PURE__ */ b.jsxs("div", { style: n === "user" ? O.headerUser : O.headerBot, children: [
    /* @__PURE__ */ b.jsx("div", { style: O.messageSender, children: n }),
    /* @__PURE__ */ b.jsx("div", { style: O.messageTime, children: o })
  ] }),
  /* @__PURE__ */ b.jsx("div", { style: O.messageText, children: a }),
  n === "user" && /* @__PURE__ */ b.jsx("div", { style: { ...O.userMessageBeforeAfter, ...O.userMessageAfter } })
] }) }), W = {
  dowellContainer: {
    position: "fixed",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "10px",
    borderRadius: "12px",
    maxHeight: "65vh",
    boxShadow: "rgb(202, 197, 197) 0px 0px 10px",
    width: "400px"
    // Default width
  },
  chatTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  messageContainer: {
    width: "100%",
    maxHeight: "100%",
    // Adjust as needed
    overflowX: "hidden",
    border: "2px solid #f4f4f4",
    borderRadius: "3px",
    padding: "5px",
    display: "flex",
    flexDirection: "column"
  },
  message: {
    backgroundColor: "#f4f4f4",
    padding: "5px",
    borderRadius: "5px"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    borderRadius: "5px",
    width: "100%"
  },
  inputField: {
    width: "100%",
    padding: "2px",
    paddingLeft: "5px",
    border: "1px solid #007bff",
    borderRadius: "10px"
  },
  sendButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  }
}, kr = ({
  title: n,
  message: a,
  changeMessage: o,
  ContainerPosition: s,
  inputStyle: p,
  buttonStyle: h,
  className: j
}) => {
  const [x, c] = ne(""), _ = hr(null);
  Ae(() => {
    (() => {
      _.current.scrollTop = _.current.scrollHeight;
    })();
  }, [a]);
  const y = () => {
    if (x.trim() !== "") {
      const v = (/* @__PURE__ */ new Date()).toLocaleTimeString();
      o({
        sender: "user",
        message: x,
        time: v
      });
    }
    c("");
  }, w = (v) => {
    v.key === "Enter" && y();
  };
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      className: j,
      style: { ...W.dowellContainer, ...s },
      children: [
        /* @__PURE__ */ b.jsx("h5", { style: W.chatTitle, children: "Dowell Customer Support" }),
        /* @__PURE__ */ b.jsx("div", { style: W.messageContainer, ref: _, children: a && a.map((v, S) => /* @__PURE__ */ b.jsx(
          Pr,
          {
            sender: v.sender,
            message: v.message,
            time: v.time
          },
          S
        )) }),
        /* @__PURE__ */ b.jsxs("div", { style: W.inputContainer, children: [
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              value: x,
              onChange: (v) => c(v.target.value),
              style: { ...W.inputField, ...p },
              onKeyUp: w,
              placeholder: "Type a message"
            }
          ),
          /* @__PURE__ */ b.jsx(
            "button",
            {
              style: { ...W.sendButton, ...h },
              onClick: y,
              children: /* @__PURE__ */ b.jsx(Tr, { size: 30 })
            }
          )
        ] })
      ]
    }
  );
}, I = {
  dowellChatButton: {
    borderRadius: "50%",
    padding: "0.75rem"
  },
  dowellChatButtonModal: {
    backgroundColor: "#007bff"
  },
  dowellChatButtonDefault: {
    backgroundColor: "#cce6ff"
  },
  ContainerPosition: {
    position: "fixed",
    bottom: "4rem"
    // bottom-5
  },
  inputStyle: {
    borderRadius: "0.375rem",
    // rounded-lg
    height: "2.5rem",
    // h-10
    appearance: "none",
    backgroundColor: "transparent",
    // bg-transparent
    border: "1px solid",
    // border
    borderColor: "currentColor",
    // text-gray-700
    paddingLeft: "0.25rem",
    // px-1
    paddingRight: "0.25rem",
    // px-1
    outline: "none",
    // focus:outline-none
    "&:focus": {
      outline: "none"
    }
  },
  buttonStyle: {
    borderRadius: "0.5rem",
    // rounded-lg
    borderWidth: "4px",
    // border-4
    borderStyle: "double",
    // border-double
    borderColor: "white",
    // border-white
    backgroundColor: "#90cdf4",
    // bg-blue-300
    padding: "0rem .5rem",
    // py-2 px-4
    height: "2.5rem"
    // h-10
  }
}, Fr = ({
  position: n,
  message: a,
  changeMessage: o,
  title: s,
  ContainerPosition: p,
  inputStyle: h,
  buttonStyle: j,
  className: x
}) => {
  const [c, _] = ne(!1), y = () => {
    _(!c);
  }, [w, v] = ne("16px");
  return Ae(() => {
    const S = () => {
      window.innerWidth >= 992 ? v("3rem") : window.innerWidth >= 768 ? v("2.5rem") : v("2rem");
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, []), /* @__PURE__ */ b.jsxs("div", { style: { ...n }, className: x, children: [
    c && /* @__PURE__ */ b.jsx(
      kr,
      {
        title: s ?? "Dowell Customer Support",
        message: a,
        changeMessage: o,
        ContainerPosition: p ?? { ...I.ContainerPosition, left: w },
        inputStyle: h ?? I.inputStyle,
        buttonStyle: j ?? I.buttonStyle
      }
    ),
    /* @__PURE__ */ b.jsx(
      "button",
      {
        style: { ...I.dowellChatButton, ...c ? I.dowellChatButtonModal : I.dowellChatButtonDefault },
        onClick: y,
        children: "Chat"
      }
    )
  ] });
};
export {
  kr as DowellChatBox,
  Fr as default
};
