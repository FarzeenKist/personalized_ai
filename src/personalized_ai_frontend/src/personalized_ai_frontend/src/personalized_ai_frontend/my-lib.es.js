import { AuthClient as Q_ } from "@dfinity/auth-client";
import { HttpAgent as G_, Actor as X_ } from "@dfinity/agent";
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
function K_(c) {
  if (c.__esModule)
    return c;
  var g = c.default;
  if (typeof g == "function") {
    var x = function p() {
      return this instanceof p ? Reflect.construct(g, arguments, this.constructor) : g.apply(this, arguments);
    };
    x.prototype = g.prototype;
  } else
    x = {};
  return Object.defineProperty(x, "__esModule", { value: !0 }), Object.keys(c).forEach(function(p) {
    var F = Object.getOwnPropertyDescriptor(c, p);
    Object.defineProperty(x, p, F.get ? F : {
      enumerable: !0,
      get: function() {
        return c[p];
      }
    });
  }), x;
}
var Mx = { exports: {} }, Dc = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Hy, SC;
function rs() {
  if (SC)
    return Hy;
  SC = 1;
  var c = Object.getOwnPropertySymbols, g = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
  function p(A) {
    if (A == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(A);
  }
  function F() {
    try {
      if (!Object.assign)
        return !1;
      var A = new String("abc");
      if (A[5] = "de", Object.getOwnPropertyNames(A)[0] === "5")
        return !1;
      for (var y = {}, B = 0; B < 10; B++)
        y["_" + String.fromCharCode(B)] = B;
      var D = Object.getOwnPropertyNames(y).map(function(w) {
        return y[w];
      });
      if (D.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        m[w] = w;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Hy = F() ? Object.assign : function(A, y) {
    for (var B, D = p(A), m, w = 1; w < arguments.length; w++) {
      B = Object(arguments[w]);
      for (var z in B)
        g.call(B, z) && (D[z] = B[z]);
      if (c) {
        m = c(B);
        for (var _ = 0; _ < m.length; _++)
          x.call(B, m[_]) && (D[m[_]] = B[m[_]]);
      }
    }
    return D;
  }, Hy;
}
var zx = { exports: {} }, Pt = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _C;
function Z_() {
  if (_C)
    return Pt;
  _C = 1;
  var c = rs(), g = 60103, x = 60106;
  Pt.Fragment = 60107, Pt.StrictMode = 60108, Pt.Profiler = 60114;
  var p = 60109, F = 60110, A = 60112;
  Pt.Suspense = 60113;
  var y = 60115, B = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var D = Symbol.for;
    g = D("react.element"), x = D("react.portal"), Pt.Fragment = D("react.fragment"), Pt.StrictMode = D("react.strict_mode"), Pt.Profiler = D("react.profiler"), p = D("react.provider"), F = D("react.context"), A = D("react.forward_ref"), Pt.Suspense = D("react.suspense"), y = D("react.memo"), B = D("react.lazy");
  }
  var m = typeof Symbol == "function" && Symbol.iterator;
  function w(J) {
    return J === null || typeof J != "object" ? null : (J = m && J[m] || J["@@iterator"], typeof J == "function" ? J : null);
  }
  function z(J) {
    for (var pe = "https://reactjs.org/docs/error-decoder.html?invariant=" + J, Be = 1; Be < arguments.length; Be++)
      pe += "&args[]=" + encodeURIComponent(arguments[Be]);
    return "Minified React error #" + J + "; visit " + pe + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = {};
  function M(J, pe, Be) {
    this.props = J, this.context = pe, this.refs = k, this.updater = Be || _;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(J, pe) {
    if (typeof J != "object" && typeof J != "function" && J != null)
      throw Error(z(85));
    this.updater.enqueueSetState(this, J, pe, "setState");
  }, M.prototype.forceUpdate = function(J) {
    this.updater.enqueueForceUpdate(this, J, "forceUpdate");
  };
  function j() {
  }
  j.prototype = M.prototype;
  function O(J, pe, Be) {
    this.props = J, this.context = pe, this.refs = k, this.updater = Be || _;
  }
  var H = O.prototype = new j();
  H.constructor = O, c(H, M.prototype), H.isPureReactComponent = !0;
  var b = { current: null }, S = Object.prototype.hasOwnProperty, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(J, pe, Be) {
    var se, P = {}, q = null, $ = null;
    if (pe != null)
      for (se in pe.ref !== void 0 && ($ = pe.ref), pe.key !== void 0 && (q = "" + pe.key), pe)
        S.call(pe, se) && !N.hasOwnProperty(se) && (P[se] = pe[se]);
    var Z = arguments.length - 2;
    if (Z === 1)
      P.children = Be;
    else if (1 < Z) {
      for (var me = Array(Z), Se = 0; Se < Z; Se++)
        me[Se] = arguments[Se + 2];
      P.children = me;
    }
    if (J && J.defaultProps)
      for (se in Z = J.defaultProps, Z)
        P[se] === void 0 && (P[se] = Z[se]);
    return { $$typeof: g, type: J, key: q, ref: $, props: P, _owner: b.current };
  }
  function V(J, pe) {
    return { $$typeof: g, type: J.type, key: pe, ref: J.ref, props: J.props, _owner: J._owner };
  }
  function Y(J) {
    return typeof J == "object" && J !== null && J.$$typeof === g;
  }
  function ne(J) {
    var pe = { "=": "=0", ":": "=2" };
    return "$" + J.replace(/[=:]/g, function(Be) {
      return pe[Be];
    });
  }
  var re = /\/+/g;
  function W(J, pe) {
    return typeof J == "object" && J !== null && J.key != null ? ne("" + J.key) : pe.toString(36);
  }
  function K(J, pe, Be, se, P) {
    var q = typeof J;
    (q === "undefined" || q === "boolean") && (J = null);
    var $ = !1;
    if (J === null)
      $ = !0;
    else
      switch (q) {
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (J.$$typeof) {
            case g:
            case x:
              $ = !0;
          }
      }
    if ($)
      return $ = J, P = P($), J = se === "" ? "." + W($, 0) : se, Array.isArray(P) ? (Be = "", J != null && (Be = J.replace(re, "$&/") + "/"), K(P, pe, Be, "", function(Se) {
        return Se;
      })) : P != null && (Y(P) && (P = V(P, Be + (!P.key || $ && $.key === P.key ? "" : ("" + P.key).replace(re, "$&/") + "/") + J)), pe.push(P)), 1;
    if ($ = 0, se = se === "" ? "." : se + ":", Array.isArray(J))
      for (var Z = 0; Z < J.length; Z++) {
        q = J[Z];
        var me = se + W(q, Z);
        $ += K(q, pe, Be, me, P);
      }
    else if (me = w(J), typeof me == "function")
      for (J = me.call(J), Z = 0; !(q = J.next()).done; )
        q = q.value, me = se + W(q, Z++), $ += K(q, pe, Be, me, P);
    else if (q === "object")
      throw pe = "" + J, Error(z(31, pe === "[object Object]" ? "object with keys {" + Object.keys(J).join(", ") + "}" : pe));
    return $;
  }
  function le(J, pe, Be) {
    if (J == null)
      return J;
    var se = [], P = 0;
    return K(J, se, "", "", function(q) {
      return pe.call(Be, q, P++);
    }), se;
  }
  function ae(J) {
    if (J._status === -1) {
      var pe = J._result;
      pe = pe(), J._status = 0, J._result = pe, pe.then(function(Be) {
        J._status === 0 && (Be = Be.default, J._status = 1, J._result = Be);
      }, function(Be) {
        J._status === 0 && (J._status = 2, J._result = Be);
      });
    }
    if (J._status === 1)
      return J._result;
    throw J._result;
  }
  var be = { current: null };
  function Re() {
    var J = be.current;
    if (J === null)
      throw Error(z(321));
    return J;
  }
  var Oe = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: b, IsSomeRendererActing: { current: !1 }, assign: c };
  return Pt.Children = { map: le, forEach: function(J, pe, Be) {
    le(J, function() {
      pe.apply(this, arguments);
    }, Be);
  }, count: function(J) {
    var pe = 0;
    return le(J, function() {
      pe++;
    }), pe;
  }, toArray: function(J) {
    return le(J, function(pe) {
      return pe;
    }) || [];
  }, only: function(J) {
    if (!Y(J))
      throw Error(z(143));
    return J;
  } }, Pt.Component = M, Pt.PureComponent = O, Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, Pt.cloneElement = function(J, pe, Be) {
    if (J == null)
      throw Error(z(267, J));
    var se = c({}, J.props), P = J.key, q = J.ref, $ = J._owner;
    if (pe != null) {
      if (pe.ref !== void 0 && (q = pe.ref, $ = b.current), pe.key !== void 0 && (P = "" + pe.key), J.type && J.type.defaultProps)
        var Z = J.type.defaultProps;
      for (me in pe)
        S.call(pe, me) && !N.hasOwnProperty(me) && (se[me] = pe[me] === void 0 && Z !== void 0 ? Z[me] : pe[me]);
    }
    var me = arguments.length - 2;
    if (me === 1)
      se.children = Be;
    else if (1 < me) {
      Z = Array(me);
      for (var Se = 0; Se < me; Se++)
        Z[Se] = arguments[Se + 2];
      se.children = Z;
    }
    return {
      $$typeof: g,
      type: J.type,
      key: P,
      ref: q,
      props: se,
      _owner: $
    };
  }, Pt.createContext = function(J, pe) {
    return pe === void 0 && (pe = null), J = { $$typeof: F, _calculateChangedBits: pe, _currentValue: J, _currentValue2: J, _threadCount: 0, Provider: null, Consumer: null }, J.Provider = { $$typeof: p, _context: J }, J.Consumer = J;
  }, Pt.createElement = T, Pt.createFactory = function(J) {
    var pe = T.bind(null, J);
    return pe.type = J, pe;
  }, Pt.createRef = function() {
    return { current: null };
  }, Pt.forwardRef = function(J) {
    return { $$typeof: A, render: J };
  }, Pt.isValidElement = Y, Pt.lazy = function(J) {
    return { $$typeof: B, _payload: { _status: -1, _result: J }, _init: ae };
  }, Pt.memo = function(J, pe) {
    return { $$typeof: y, type: J, compare: pe === void 0 ? null : pe };
  }, Pt.useCallback = function(J, pe) {
    return Re().useCallback(J, pe);
  }, Pt.useContext = function(J, pe) {
    return Re().useContext(J, pe);
  }, Pt.useDebugValue = function() {
  }, Pt.useEffect = function(J, pe) {
    return Re().useEffect(J, pe);
  }, Pt.useImperativeHandle = function(J, pe, Be) {
    return Re().useImperativeHandle(J, pe, Be);
  }, Pt.useLayoutEffect = function(J, pe) {
    return Re().useLayoutEffect(J, pe);
  }, Pt.useMemo = function(J, pe) {
    return Re().useMemo(J, pe);
  }, Pt.useReducer = function(J, pe, Be) {
    return Re().useReducer(J, pe, Be);
  }, Pt.useRef = function(J) {
    return Re().useRef(J);
  }, Pt.useState = function(J) {
    return Re().useState(J);
  }, Pt.version = "17.0.2", Pt;
}
var Iy = {};
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RC;
function J_() {
  return RC || (RC = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      var g = rs(), x = "17.0.2", p = 60103, F = 60106;
      c.Fragment = 60107, c.StrictMode = 60108, c.Profiler = 60114;
      var A = 60109, y = 60110, B = 60112;
      c.Suspense = 60113;
      var D = 60120, m = 60115, w = 60116, z = 60121, _ = 60122, k = 60117, M = 60129, j = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        p = O("react.element"), F = O("react.portal"), c.Fragment = O("react.fragment"), c.StrictMode = O("react.strict_mode"), c.Profiler = O("react.profiler"), A = O("react.provider"), y = O("react.context"), B = O("react.forward_ref"), c.Suspense = O("react.suspense"), D = O("react.suspense_list"), m = O("react.memo"), w = O("react.lazy"), z = O("react.block"), _ = O("react.server.block"), k = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), M = O("react.debug_trace_mode"), O("react.offscreen"), j = O("react.legacy_hidden");
      }
      var H = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
      function S(C) {
        if (C === null || typeof C != "object")
          return null;
        var ee = H && C[H] || C[b];
        return typeof ee == "function" ? ee : null;
      }
      var N = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, T = {
        transition: 0
      }, V = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Y = {}, ne = null;
      function re(C) {
        ne = C;
      }
      Y.setExtraStackFrame = function(C) {
        ne = C;
      }, Y.getCurrentStack = null, Y.getStackAddendum = function() {
        var C = "";
        ne && (C += ne);
        var ee = Y.getCurrentStack;
        return ee && (C += ee() || ""), C;
      };
      var W = {
        current: !1
      }, K = {
        ReactCurrentDispatcher: N,
        ReactCurrentBatchConfig: T,
        ReactCurrentOwner: V,
        IsSomeRendererActing: W,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: g
      };
      K.ReactDebugCurrentFrame = Y;
      function le(C) {
        {
          for (var ee = arguments.length, ve = new Array(ee > 1 ? ee - 1 : 0), xe = 1; xe < ee; xe++)
            ve[xe - 1] = arguments[xe];
          be("warn", C, ve);
        }
      }
      function ae(C) {
        {
          for (var ee = arguments.length, ve = new Array(ee > 1 ? ee - 1 : 0), xe = 1; xe < ee; xe++)
            ve[xe - 1] = arguments[xe];
          be("error", C, ve);
        }
      }
      function be(C, ee, ve) {
        {
          var xe = K.ReactDebugCurrentFrame, je = xe.getStackAddendum();
          je !== "" && (ee += "%s", ve = ve.concat([je]));
          var lt = ve.map(function(tt) {
            return "" + tt;
          });
          lt.unshift("Warning: " + ee), Function.prototype.apply.call(console[C], console, lt);
        }
      }
      var Re = {};
      function Oe(C, ee) {
        {
          var ve = C.constructor, xe = ve && (ve.displayName || ve.name) || "ReactClass", je = xe + "." + ee;
          if (Re[je])
            return;
          ae("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", ee, xe), Re[je] = !0;
        }
      }
      var J = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(C) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(C, ee, ve) {
          Oe(C, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(C, ee, ve, xe) {
          Oe(C, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(C, ee, ve, xe) {
          Oe(C, "setState");
        }
      }, pe = {};
      Object.freeze(pe);
      function Be(C, ee, ve) {
        this.props = C, this.context = ee, this.refs = pe, this.updater = ve || J;
      }
      Be.prototype.isReactComponent = {}, Be.prototype.setState = function(C, ee) {
        if (!(typeof C == "object" || typeof C == "function" || C == null))
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, ee, "setState");
      }, Be.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var se = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, P = function(C, ee) {
          Object.defineProperty(Be.prototype, C, {
            get: function() {
              le("%s(...) is deprecated in plain JavaScript React classes. %s", ee[0], ee[1]);
            }
          });
        };
        for (var q in se)
          se.hasOwnProperty(q) && P(q, se[q]);
      }
      function $() {
      }
      $.prototype = Be.prototype;
      function Z(C, ee, ve) {
        this.props = C, this.context = ee, this.refs = pe, this.updater = ve || J;
      }
      var me = Z.prototype = new $();
      me.constructor = Z, g(me, Be.prototype), me.isPureReactComponent = !0;
      function Se() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      function Ue(C, ee, ve) {
        var xe = ee.displayName || ee.name || "";
        return C.displayName || (xe !== "" ? ve + "(" + xe + ")" : ve);
      }
      function De(C) {
        return C.displayName || "Context";
      }
      function Ie(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && ae("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case c.Fragment:
            return "Fragment";
          case F:
            return "Portal";
          case c.Profiler:
            return "Profiler";
          case c.StrictMode:
            return "StrictMode";
          case c.Suspense:
            return "Suspense";
          case D:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case y:
              var ee = C;
              return De(ee) + ".Consumer";
            case A:
              var ve = C;
              return De(ve._context) + ".Provider";
            case B:
              return Ue(C, C.render, "ForwardRef");
            case m:
              return Ie(C.type);
            case z:
              return Ie(C._render);
            case w: {
              var xe = C, je = xe._payload, lt = xe._init;
              try {
                return Ie(lt(je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ke = Object.prototype.hasOwnProperty, dt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Te, wt, kt;
      kt = {};
      function Ht(C) {
        if (Ke.call(C, "ref")) {
          var ee = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (ee && ee.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function Bn(C) {
        if (Ke.call(C, "key")) {
          var ee = Object.getOwnPropertyDescriptor(C, "key").get;
          if (ee && ee.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function zn(C, ee) {
        var ve = function() {
          Te || (Te = !0, ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ve.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: ve,
          configurable: !0
        });
      }
      function Cn(C, ee) {
        var ve = function() {
          wt || (wt = !0, ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ve.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: ve,
          configurable: !0
        });
      }
      function Nr(C) {
        if (typeof C.ref == "string" && V.current && C.__self && V.current.stateNode !== C.__self) {
          var ee = Ie(V.current.type);
          kt[ee] || (ae('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee, C.ref), kt[ee] = !0);
        }
      }
      var bn = function(C, ee, ve, xe, je, lt, tt) {
        var rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: C,
          key: ee,
          ref: ve,
          props: tt,
          // Record the component responsible for creating this element.
          _owner: lt
        };
        return rt._store = {}, Object.defineProperty(rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: xe
        }), Object.defineProperty(rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: je
        }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
      };
      function un(C, ee, ve) {
        var xe, je = {}, lt = null, tt = null, rt = null, et = null;
        if (ee != null) {
          Ht(ee) && (tt = ee.ref, Nr(ee)), Bn(ee) && (lt = "" + ee.key), rt = ee.__self === void 0 ? null : ee.__self, et = ee.__source === void 0 ? null : ee.__source;
          for (xe in ee)
            Ke.call(ee, xe) && !dt.hasOwnProperty(xe) && (je[xe] = ee[xe]);
        }
        var Mt = arguments.length - 2;
        if (Mt === 1)
          je.children = ve;
        else if (Mt > 1) {
          for (var an = Array(Mt), pn = 0; pn < Mt; pn++)
            an[pn] = arguments[pn + 2];
          Object.freeze && Object.freeze(an), je.children = an;
        }
        if (C && C.defaultProps) {
          var Rn = C.defaultProps;
          for (xe in Rn)
            je[xe] === void 0 && (je[xe] = Rn[xe]);
        }
        if (lt || tt) {
          var Zn = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          lt && zn(je, Zn), tt && Cn(je, Zn);
        }
        return bn(C, lt, tt, rt, et, V.current, je);
      }
      function hn(C, ee) {
        var ve = bn(C.type, ee, C.ref, C._self, C._source, C._owner, C.props);
        return ve;
      }
      function Sn(C, ee, ve) {
        if (C == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var xe, je = g({}, C.props), lt = C.key, tt = C.ref, rt = C._self, et = C._source, Mt = C._owner;
        if (ee != null) {
          Ht(ee) && (tt = ee.ref, Mt = V.current), Bn(ee) && (lt = "" + ee.key);
          var an;
          C.type && C.type.defaultProps && (an = C.type.defaultProps);
          for (xe in ee)
            Ke.call(ee, xe) && !dt.hasOwnProperty(xe) && (ee[xe] === void 0 && an !== void 0 ? je[xe] = an[xe] : je[xe] = ee[xe]);
        }
        var pn = arguments.length - 2;
        if (pn === 1)
          je.children = ve;
        else if (pn > 1) {
          for (var Rn = Array(pn), Zn = 0; Zn < pn; Zn++)
            Rn[Zn] = arguments[Zn + 2];
          je.children = Rn;
        }
        return bn(C.type, lt, tt, rt, et, Mt, je);
      }
      function mn(C) {
        return typeof C == "object" && C !== null && C.$$typeof === p;
      }
      var Gn = ".", Ot = ":";
      function Lt(C) {
        var ee = /[=:]/g, ve = {
          "=": "=0",
          ":": "=2"
        }, xe = C.replace(ee, function(je) {
          return ve[je];
        });
        return "$" + xe;
      }
      var ia = !1, Mr = /\/+/g;
      function Rr(C) {
        return C.replace(Mr, "$&/");
      }
      function Me(C, ee) {
        return typeof C == "object" && C !== null && C.key != null ? Lt("" + C.key) : ee.toString(36);
      }
      function Ve(C, ee, ve, xe, je) {
        var lt = typeof C;
        (lt === "undefined" || lt === "boolean") && (C = null);
        var tt = !1;
        if (C === null)
          tt = !0;
        else
          switch (lt) {
            case "string":
            case "number":
              tt = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case p:
                case F:
                  tt = !0;
              }
          }
        if (tt) {
          var rt = C, et = je(rt), Mt = xe === "" ? Gn + Me(rt, 0) : xe;
          if (Array.isArray(et)) {
            var an = "";
            Mt != null && (an = Rr(Mt) + "/"), Ve(et, ee, an, "", function(qu) {
              return qu;
            });
          } else
            et != null && (mn(et) && (et = hn(
              et,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              ve + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (et.key && (!rt || rt.key !== et.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                Rr("" + et.key) + "/"
              ) : "") + Mt
            )), ee.push(et));
          return 1;
        }
        var pn, Rn, Zn = 0, Jn = xe === "" ? Gn : xe + Ot;
        if (Array.isArray(C))
          for (var jr = 0; jr < C.length; jr++)
            pn = C[jr], Rn = Jn + Me(pn, jr), Zn += Ve(pn, ee, ve, Rn, je);
        else {
          var Si = S(C);
          if (typeof Si == "function") {
            var _i = C;
            Si === _i.entries && (ia || le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ia = !0);
            for (var Da = Si.call(_i), $u, kc = 0; !($u = Da.next()).done; )
              pn = $u.value, Rn = Jn + Me(pn, kc++), Zn += Ve(pn, ee, ve, Rn, je);
          } else if (lt === "object") {
            var Yo = "" + C;
            throw Error("Objects are not valid as a React child (found: " + (Yo === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : Yo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zn;
      }
      function it(C, ee, ve) {
        if (C == null)
          return C;
        var xe = [], je = 0;
        return Ve(C, xe, "", "", function(lt) {
          return ee.call(ve, lt, je++);
        }), xe;
      }
      function Tt(C) {
        var ee = 0;
        return it(C, function() {
          ee++;
        }), ee;
      }
      function Ut(C, ee, ve) {
        it(C, function() {
          ee.apply(this, arguments);
        }, ve);
      }
      function It(C) {
        return it(C, function(ee) {
          return ee;
        }) || [];
      }
      function Vt(C) {
        if (!mn(C))
          throw Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function dn(C, ee) {
        ee === void 0 ? ee = null : ee !== null && typeof ee != "function" && ae("createContext: Expected the optional second argument to be a function. Instead received: %s", ee);
        var ve = {
          $$typeof: y,
          _calculateChangedBits: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: C,
          _currentValue2: C,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        ve.Provider = {
          $$typeof: A,
          _context: ve
        };
        var xe = !1, je = !1, lt = !1;
        {
          var tt = {
            $$typeof: y,
            _context: ve,
            _calculateChangedBits: ve._calculateChangedBits
          };
          Object.defineProperties(tt, {
            Provider: {
              get: function() {
                return je || (je = !0, ae("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), ve.Provider;
              },
              set: function(rt) {
                ve.Provider = rt;
              }
            },
            _currentValue: {
              get: function() {
                return ve._currentValue;
              },
              set: function(rt) {
                ve._currentValue = rt;
              }
            },
            _currentValue2: {
              get: function() {
                return ve._currentValue2;
              },
              set: function(rt) {
                ve._currentValue2 = rt;
              }
            },
            _threadCount: {
              get: function() {
                return ve._threadCount;
              },
              set: function(rt) {
                ve._threadCount = rt;
              }
            },
            Consumer: {
              get: function() {
                return xe || (xe = !0, ae("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), ve.Consumer;
              }
            },
            displayName: {
              get: function() {
                return ve.displayName;
              },
              set: function(rt) {
                lt || (le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", rt), lt = !0);
              }
            }
          }), ve.Consumer = tt;
        }
        return ve._currentRenderer = null, ve._currentRenderer2 = null, ve;
      }
      var Yt = -1, Fn = 0, Sa = 1, fr = 2;
      function zr(C) {
        if (C._status === Yt) {
          var ee = C._result, ve = ee(), xe = C;
          xe._status = Fn, xe._result = ve, ve.then(function(je) {
            if (C._status === Fn) {
              var lt = je.default;
              lt === void 0 && ae(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, je);
              var tt = C;
              tt._status = Sa, tt._result = lt;
            }
          }, function(je) {
            if (C._status === Fn) {
              var lt = C;
              lt._status = fr, lt._result = je;
            }
          });
        }
        if (C._status === Sa)
          return C._result;
        throw C._result;
      }
      function qr(C) {
        var ee = {
          // We use these fields to store the result.
          _status: -1,
          _result: C
        }, ve = {
          $$typeof: w,
          _payload: ee,
          _init: zr
        };
        {
          var xe, je;
          Object.defineProperties(ve, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return xe;
              },
              set: function(lt) {
                ae("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), xe = lt, Object.defineProperty(ve, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return je;
              },
              set: function(lt) {
                ae("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), je = lt, Object.defineProperty(ve, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return ve;
      }
      function dr(C) {
        C != null && C.$$typeof === m ? ae("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? ae("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && ae("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && ae("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var ee = {
          $$typeof: B,
          render: C
        };
        {
          var ve;
          Object.defineProperty(ee, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ve;
            },
            set: function(xe) {
              ve = xe, C.displayName == null && (C.displayName = xe);
            }
          });
        }
        return ee;
      }
      var On = !1;
      function Pn(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === c.Fragment || C === c.Profiler || C === M || C === c.StrictMode || C === c.Suspense || C === D || C === j || On || typeof C == "object" && C !== null && (C.$$typeof === w || C.$$typeof === m || C.$$typeof === A || C.$$typeof === y || C.$$typeof === B || C.$$typeof === k || C.$$typeof === z || C[0] === _));
      }
      function Pr(C, ee) {
        Pn(C) || ae("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var ve = {
          $$typeof: m,
          type: C,
          compare: ee === void 0 ? null : ee
        };
        {
          var xe;
          Object.defineProperty(ve, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return xe;
            },
            set: function(je) {
              xe = je, C.displayName == null && (C.displayName = je);
            }
          });
        }
        return ve;
      }
      function en() {
        var C = N.current;
        if (C === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return C;
      }
      function oa(C, ee) {
        var ve = en();
        if (ee !== void 0 && ae("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", ee, typeof ee == "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks` : ""), C._context !== void 0) {
          var xe = C._context;
          xe.Consumer === C ? ae("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : xe.Provider === C && ae("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return ve.useContext(C, ee);
      }
      function Q(C) {
        var ee = en();
        return ee.useState(C);
      }
      function Ee(C, ee, ve) {
        var xe = en();
        return xe.useReducer(C, ee, ve);
      }
      function ze(C) {
        var ee = en();
        return ee.useRef(C);
      }
      function Je(C, ee) {
        var ve = en();
        return ve.useEffect(C, ee);
      }
      function Ct(C, ee) {
        var ve = en();
        return ve.useLayoutEffect(C, ee);
      }
      function nt(C, ee) {
        var ve = en();
        return ve.useCallback(C, ee);
      }
      function St(C, ee) {
        var ve = en();
        return ve.useMemo(C, ee);
      }
      function Rt(C, ee, ve) {
        var xe = en();
        return xe.useImperativeHandle(C, ee, ve);
      }
      function Qt(C, ee) {
        {
          var ve = en();
          return ve.useDebugValue(C, ee);
        }
      }
      var Bt = 0, Wt, pr, ir, ua, Ln, uo, Iu;
      function Vu() {
      }
      Vu.__reactDisabledLog = !0;
      function Yr() {
        {
          if (Bt === 0) {
            Wt = console.log, pr = console.info, ir = console.warn, ua = console.error, Ln = console.group, uo = console.groupCollapsed, Iu = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: Vu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          Bt++;
        }
      }
      function Un() {
        {
          if (Bt--, Bt === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: g({}, C, {
                value: Wt
              }),
              info: g({}, C, {
                value: pr
              }),
              warn: g({}, C, {
                value: ir
              }),
              error: g({}, C, {
                value: ua
              }),
              group: g({}, C, {
                value: Ln
              }),
              groupCollapsed: g({}, C, {
                value: uo
              }),
              groupEnd: g({}, C, {
                value: Iu
              })
            });
          }
          Bt < 0 && ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var mi = K.ReactCurrentDispatcher, yi;
      function Lr(C, ee, ve) {
        {
          if (yi === void 0)
            try {
              throw Error();
            } catch (je) {
              var xe = je.stack.trim().match(/\n( *(at )?)/);
              yi = xe && xe[1] || "";
            }
          return `
` + yi + C;
        }
      }
      var xi = !1, _a;
      {
        var ss = typeof WeakMap == "function" ? WeakMap : Map;
        _a = new ss();
      }
      function gi(C, ee) {
        if (!C || xi)
          return "";
        {
          var ve = _a.get(C);
          if (ve !== void 0)
            return ve;
        }
        var xe;
        xi = !0;
        var je = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var lt;
        lt = mi.current, mi.current = null, Yr();
        try {
          if (ee) {
            var tt = function() {
              throw Error();
            };
            if (Object.defineProperty(tt.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(tt, []);
              } catch (Jn) {
                xe = Jn;
              }
              Reflect.construct(C, [], tt);
            } else {
              try {
                tt.call();
              } catch (Jn) {
                xe = Jn;
              }
              C.call(tt.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Jn) {
              xe = Jn;
            }
            C();
          }
        } catch (Jn) {
          if (Jn && xe && typeof Jn.stack == "string") {
            for (var rt = Jn.stack.split(`
`), et = xe.stack.split(`
`), Mt = rt.length - 1, an = et.length - 1; Mt >= 1 && an >= 0 && rt[Mt] !== et[an]; )
              an--;
            for (; Mt >= 1 && an >= 0; Mt--, an--)
              if (rt[Mt] !== et[an]) {
                if (Mt !== 1 || an !== 1)
                  do
                    if (Mt--, an--, an < 0 || rt[Mt] !== et[an]) {
                      var pn = `
` + rt[Mt].replace(" at new ", " at ");
                      return typeof C == "function" && _a.set(C, pn), pn;
                    }
                  while (Mt >= 1 && an >= 0);
                break;
              }
          }
        } finally {
          xi = !1, mi.current = lt, Un(), Error.prepareStackTrace = je;
        }
        var Rn = C ? C.displayName || C.name : "", Zn = Rn ? Lr(Rn) : "";
        return typeof C == "function" && _a.set(C, Zn), Zn;
      }
      function Wu(C, ee, ve) {
        return gi(C, !1);
      }
      function Ei(C) {
        var ee = C.prototype;
        return !!(ee && ee.isReactComponent);
      }
      function Ci(C, ee, ve) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return gi(C, Ei(C));
        if (typeof C == "string")
          return Lr(C);
        switch (C) {
          case c.Suspense:
            return Lr("Suspense");
          case D:
            return Lr("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case B:
              return Wu(C.render);
            case m:
              return Ci(C.type, ee, ve);
            case z:
              return Wu(C._render);
            case w: {
              var xe = C, je = xe._payload, lt = xe._init;
              try {
                return Ci(lt(je), ee, ve);
              } catch {
              }
            }
          }
        return "";
      }
      var vr = {}, la = K.ReactDebugCurrentFrame;
      function Tr(C) {
        if (C) {
          var ee = C._owner, ve = Ci(C.type, C._source, ee ? ee.type : null);
          la.setExtraStackFrame(ve);
        } else
          la.setExtraStackFrame(null);
      }
      function Ra(C, ee, ve, xe, je) {
        {
          var lt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var tt in C)
            if (lt(C, tt)) {
              var rt = void 0;
              try {
                if (typeof C[tt] != "function") {
                  var et = Error((xe || "React class") + ": " + ve + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw et.name = "Invariant Violation", et;
                }
                rt = C[tt](ee, tt, xe, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Mt) {
                rt = Mt;
              }
              rt && !(rt instanceof Error) && (Tr(je), ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", xe || "React class", ve, tt, typeof rt), Tr(null)), rt instanceof Error && !(rt.message in vr) && (vr[rt.message] = !0, Tr(je), ae("Failed %s type: %s", ve, rt.message), Tr(null));
            }
        }
      }
      function Ur(C) {
        if (C) {
          var ee = C._owner, ve = Ci(C.type, C._source, ee ? ee.type : null);
          re(ve);
        } else
          re(null);
      }
      var Le;
      Le = !1;
      function Qa() {
        if (V.current) {
          var C = Ie(V.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function Xn(C) {
        if (C !== void 0) {
          var ee = C.fileName.replace(/^.*[\\\/]/, ""), ve = C.lineNumber;
          return `

Check your code at ` + ee + ":" + ve + ".";
        }
        return "";
      }
      function Ta(C) {
        return C != null ? Xn(C.__source) : "";
      }
      var Ga = {};
      function lo(C) {
        var ee = Qa();
        if (!ee) {
          var ve = typeof C == "string" ? C : C.displayName || C.name;
          ve && (ee = `

Check the top-level render call using <` + ve + ">.");
        }
        return ee;
      }
      function Kn(C, ee) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var ve = lo(ee);
          if (!Ga[ve]) {
            Ga[ve] = !0;
            var xe = "";
            C && C._owner && C._owner !== V.current && (xe = " It was passed a child from " + Ie(C._owner.type) + "."), Ur(C), ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, xe), Ur(null);
          }
        }
      }
      function _n(C, ee) {
        if (typeof C == "object") {
          if (Array.isArray(C))
            for (var ve = 0; ve < C.length; ve++) {
              var xe = C[ve];
              mn(xe) && Kn(xe, ee);
            }
          else if (mn(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var je = S(C);
            if (typeof je == "function" && je !== C.entries)
              for (var lt = je.call(C), tt; !(tt = lt.next()).done; )
                mn(tt.value) && Kn(tt.value, ee);
          }
        }
      }
      function or(C) {
        {
          var ee = C.type;
          if (ee == null || typeof ee == "string")
            return;
          var ve;
          if (typeof ee == "function")
            ve = ee.propTypes;
          else if (typeof ee == "object" && (ee.$$typeof === B || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          ee.$$typeof === m))
            ve = ee.propTypes;
          else
            return;
          if (ve) {
            var xe = Ie(ee);
            Ra(ve, C.props, "prop", xe, C);
          } else if (ee.PropTypes !== void 0 && !Le) {
            Le = !0;
            var je = Ie(ee);
            ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
          }
          typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function cs(C) {
        {
          for (var ee = Object.keys(C.props), ve = 0; ve < ee.length; ve++) {
            var xe = ee[ve];
            if (xe !== "children" && xe !== "key") {
              Ur(C), ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", xe), Ur(null);
              break;
            }
          }
          C.ref !== null && (Ur(C), ae("Invalid attribute `ref` supplied to `React.Fragment`."), Ur(null));
        }
      }
      function hr(C, ee, ve) {
        var xe = Pn(C);
        if (!xe) {
          var je = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = Ta(ee);
          lt ? je += lt : je += Qa();
          var tt;
          C === null ? tt = "null" : Array.isArray(C) ? tt = "array" : C !== void 0 && C.$$typeof === p ? (tt = "<" + (Ie(C.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof C, ae("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, je);
        }
        var rt = un.apply(this, arguments);
        if (rt == null)
          return rt;
        if (xe)
          for (var et = 2; et < arguments.length; et++)
            _n(arguments[et], C);
        return C === c.Fragment ? cs(rt) : or(rt), rt;
      }
      var mr = !1;
      function fs(C) {
        var ee = hr.bind(null, C);
        return ee.type = C, mr || (mr = !0, le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(ee, "type", {
          enumerable: !1,
          get: function() {
            return le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), ee;
      }
      function bi(C, ee, ve) {
        for (var xe = Sn.apply(this, arguments), je = 2; je < arguments.length; je++)
          _n(arguments[je], xe.type);
        return or(xe), xe;
      }
      try {
        var wa = Object.freeze({});
      } catch {
      }
      var $o = hr, ds = bi, qo = fs, ps = {
        map: it,
        forEach: Ut,
        count: Tt,
        toArray: It,
        only: Vt
      };
      c.Children = ps, c.Component = Be, c.PureComponent = Z, c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K, c.cloneElement = ds, c.createContext = dn, c.createElement = $o, c.createFactory = qo, c.createRef = Se, c.forwardRef = dr, c.isValidElement = mn, c.lazy = qr, c.memo = Pr, c.useCallback = nt, c.useContext = oa, c.useDebugValue = Qt, c.useEffect = Je, c.useImperativeHandle = Rt, c.useLayoutEffect = Ct, c.useMemo = St, c.useReducer = Ee, c.useRef = ze, c.useState = Q, c.version = x;
    }();
  }(Iy)), Iy;
}
process.env.NODE_ENV === "production" ? zx.exports = Z_() : zx.exports = J_();
var Ne = zx.exports;
const Px = /* @__PURE__ */ D0(Ne);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var TC;
function eR() {
  if (TC)
    return Dc;
  TC = 1, rs();
  var c = Ne, g = 60103;
  if (Dc.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var x = Symbol.for;
    g = x("react.element"), Dc.Fragment = x("react.fragment");
  }
  var p = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = Object.prototype.hasOwnProperty, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(B, D, m) {
    var w, z = {}, _ = null, k = null;
    m !== void 0 && (_ = "" + m), D.key !== void 0 && (_ = "" + D.key), D.ref !== void 0 && (k = D.ref);
    for (w in D)
      F.call(D, w) && !A.hasOwnProperty(w) && (z[w] = D[w]);
    if (B && B.defaultProps)
      for (w in D = B.defaultProps, D)
        z[w] === void 0 && (z[w] = D[w]);
    return { $$typeof: g, type: B, key: _, ref: k, props: z, _owner: p.current };
  }
  return Dc.jsx = y, Dc.jsxs = y, Dc;
}
var Vy = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wC;
function tR() {
  return wC || (wC = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      var g = Ne, x = rs(), p = 60103, F = 60106;
      c.Fragment = 60107;
      var A = 60108, y = 60114, B = 60109, D = 60110, m = 60112, w = 60113, z = 60120, _ = 60115, k = 60116, M = 60121, j = 60122, O = 60117, H = 60129, b = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var S = Symbol.for;
        p = S("react.element"), F = S("react.portal"), c.Fragment = S("react.fragment"), A = S("react.strict_mode"), y = S("react.profiler"), B = S("react.provider"), D = S("react.context"), m = S("react.forward_ref"), w = S("react.suspense"), z = S("react.suspense_list"), _ = S("react.memo"), k = S("react.lazy"), M = S("react.block"), j = S("react.server.block"), O = S("react.fundamental"), S("react.scope"), S("react.opaque.id"), H = S("react.debug_trace_mode"), S("react.offscreen"), b = S("react.legacy_hidden");
      }
      var N = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
      function V(Q) {
        if (Q === null || typeof Q != "object")
          return null;
        var Ee = N && Q[N] || Q[T];
        return typeof Ee == "function" ? Ee : null;
      }
      var Y = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function ne(Q) {
        {
          for (var Ee = arguments.length, ze = new Array(Ee > 1 ? Ee - 1 : 0), Je = 1; Je < Ee; Je++)
            ze[Je - 1] = arguments[Je];
          re("error", Q, ze);
        }
      }
      function re(Q, Ee, ze) {
        {
          var Je = Y.ReactDebugCurrentFrame, Ct = Je.getStackAddendum();
          Ct !== "" && (Ee += "%s", ze = ze.concat([Ct]));
          var nt = ze.map(function(St) {
            return "" + St;
          });
          nt.unshift("Warning: " + Ee), Function.prototype.apply.call(console[Q], console, nt);
        }
      }
      var W = !1;
      function K(Q) {
        return !!(typeof Q == "string" || typeof Q == "function" || Q === c.Fragment || Q === y || Q === H || Q === A || Q === w || Q === z || Q === b || W || typeof Q == "object" && Q !== null && (Q.$$typeof === k || Q.$$typeof === _ || Q.$$typeof === B || Q.$$typeof === D || Q.$$typeof === m || Q.$$typeof === O || Q.$$typeof === M || Q[0] === j));
      }
      function le(Q, Ee, ze) {
        var Je = Ee.displayName || Ee.name || "";
        return Q.displayName || (Je !== "" ? ze + "(" + Je + ")" : ze);
      }
      function ae(Q) {
        return Q.displayName || "Context";
      }
      function be(Q) {
        if (Q == null)
          return null;
        if (typeof Q.tag == "number" && ne("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof Q == "function")
          return Q.displayName || Q.name || null;
        if (typeof Q == "string")
          return Q;
        switch (Q) {
          case c.Fragment:
            return "Fragment";
          case F:
            return "Portal";
          case y:
            return "Profiler";
          case A:
            return "StrictMode";
          case w:
            return "Suspense";
          case z:
            return "SuspenseList";
        }
        if (typeof Q == "object")
          switch (Q.$$typeof) {
            case D:
              var Ee = Q;
              return ae(Ee) + ".Consumer";
            case B:
              var ze = Q;
              return ae(ze._context) + ".Provider";
            case m:
              return le(Q, Q.render, "ForwardRef");
            case _:
              return be(Q.type);
            case M:
              return be(Q._render);
            case k: {
              var Je = Q, Ct = Je._payload, nt = Je._init;
              try {
                return be(nt(Ct));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Re = 0, Oe, J, pe, Be, se, P, q;
      function $() {
      }
      $.__reactDisabledLog = !0;
      function Z() {
        {
          if (Re === 0) {
            Oe = console.log, J = console.info, pe = console.warn, Be = console.error, se = console.group, P = console.groupCollapsed, q = console.groupEnd;
            var Q = {
              configurable: !0,
              enumerable: !0,
              value: $,
              writable: !0
            };
            Object.defineProperties(console, {
              info: Q,
              log: Q,
              warn: Q,
              error: Q,
              group: Q,
              groupCollapsed: Q,
              groupEnd: Q
            });
          }
          Re++;
        }
      }
      function me() {
        {
          if (Re--, Re === 0) {
            var Q = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: x({}, Q, {
                value: Oe
              }),
              info: x({}, Q, {
                value: J
              }),
              warn: x({}, Q, {
                value: pe
              }),
              error: x({}, Q, {
                value: Be
              }),
              group: x({}, Q, {
                value: se
              }),
              groupCollapsed: x({}, Q, {
                value: P
              }),
              groupEnd: x({}, Q, {
                value: q
              })
            });
          }
          Re < 0 && ne("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Se = Y.ReactCurrentDispatcher, Ue;
      function De(Q, Ee, ze) {
        {
          if (Ue === void 0)
            try {
              throw Error();
            } catch (Ct) {
              var Je = Ct.stack.trim().match(/\n( *(at )?)/);
              Ue = Je && Je[1] || "";
            }
          return `
` + Ue + Q;
        }
      }
      var Ie = !1, Ke;
      {
        var dt = typeof WeakMap == "function" ? WeakMap : Map;
        Ke = new dt();
      }
      function Te(Q, Ee) {
        if (!Q || Ie)
          return "";
        {
          var ze = Ke.get(Q);
          if (ze !== void 0)
            return ze;
        }
        var Je;
        Ie = !0;
        var Ct = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var nt;
        nt = Se.current, Se.current = null, Z();
        try {
          if (Ee) {
            var St = function() {
              throw Error();
            };
            if (Object.defineProperty(St.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(St, []);
              } catch (Ln) {
                Je = Ln;
              }
              Reflect.construct(Q, [], St);
            } else {
              try {
                St.call();
              } catch (Ln) {
                Je = Ln;
              }
              Q.call(St.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ln) {
              Je = Ln;
            }
            Q();
          }
        } catch (Ln) {
          if (Ln && Je && typeof Ln.stack == "string") {
            for (var Rt = Ln.stack.split(`
`), Qt = Je.stack.split(`
`), Bt = Rt.length - 1, Wt = Qt.length - 1; Bt >= 1 && Wt >= 0 && Rt[Bt] !== Qt[Wt]; )
              Wt--;
            for (; Bt >= 1 && Wt >= 0; Bt--, Wt--)
              if (Rt[Bt] !== Qt[Wt]) {
                if (Bt !== 1 || Wt !== 1)
                  do
                    if (Bt--, Wt--, Wt < 0 || Rt[Bt] !== Qt[Wt]) {
                      var pr = `
` + Rt[Bt].replace(" at new ", " at ");
                      return typeof Q == "function" && Ke.set(Q, pr), pr;
                    }
                  while (Bt >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          Ie = !1, Se.current = nt, me(), Error.prepareStackTrace = Ct;
        }
        var ir = Q ? Q.displayName || Q.name : "", ua = ir ? De(ir) : "";
        return typeof Q == "function" && Ke.set(Q, ua), ua;
      }
      function wt(Q, Ee, ze) {
        return Te(Q, !1);
      }
      function kt(Q) {
        var Ee = Q.prototype;
        return !!(Ee && Ee.isReactComponent);
      }
      function Ht(Q, Ee, ze) {
        if (Q == null)
          return "";
        if (typeof Q == "function")
          return Te(Q, kt(Q));
        if (typeof Q == "string")
          return De(Q);
        switch (Q) {
          case w:
            return De("Suspense");
          case z:
            return De("SuspenseList");
        }
        if (typeof Q == "object")
          switch (Q.$$typeof) {
            case m:
              return wt(Q.render);
            case _:
              return Ht(Q.type, Ee, ze);
            case M:
              return wt(Q._render);
            case k: {
              var Je = Q, Ct = Je._payload, nt = Je._init;
              try {
                return Ht(nt(Ct), Ee, ze);
              } catch {
              }
            }
          }
        return "";
      }
      var Bn = {}, zn = Y.ReactDebugCurrentFrame;
      function Cn(Q) {
        if (Q) {
          var Ee = Q._owner, ze = Ht(Q.type, Q._source, Ee ? Ee.type : null);
          zn.setExtraStackFrame(ze);
        } else
          zn.setExtraStackFrame(null);
      }
      function Nr(Q, Ee, ze, Je, Ct) {
        {
          var nt = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var St in Q)
            if (nt(Q, St)) {
              var Rt = void 0;
              try {
                if (typeof Q[St] != "function") {
                  var Qt = Error((Je || "React class") + ": " + ze + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Q[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Qt.name = "Invariant Violation", Qt;
                }
                Rt = Q[St](Ee, St, Je, ze, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                Rt = Bt;
              }
              Rt && !(Rt instanceof Error) && (Cn(Ct), ne("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Je || "React class", ze, St, typeof Rt), Cn(null)), Rt instanceof Error && !(Rt.message in Bn) && (Bn[Rt.message] = !0, Cn(Ct), ne("Failed %s type: %s", ze, Rt.message), Cn(null));
            }
        }
      }
      var bn = Y.ReactCurrentOwner, un = Object.prototype.hasOwnProperty, hn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sn, mn, Gn;
      Gn = {};
      function Ot(Q) {
        if (un.call(Q, "ref")) {
          var Ee = Object.getOwnPropertyDescriptor(Q, "ref").get;
          if (Ee && Ee.isReactWarning)
            return !1;
        }
        return Q.ref !== void 0;
      }
      function Lt(Q) {
        if (un.call(Q, "key")) {
          var Ee = Object.getOwnPropertyDescriptor(Q, "key").get;
          if (Ee && Ee.isReactWarning)
            return !1;
        }
        return Q.key !== void 0;
      }
      function ia(Q, Ee) {
        if (typeof Q.ref == "string" && bn.current && Ee && bn.current.stateNode !== Ee) {
          var ze = be(bn.current.type);
          Gn[ze] || (ne('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(bn.current.type), Q.ref), Gn[ze] = !0);
        }
      }
      function Mr(Q, Ee) {
        {
          var ze = function() {
            Sn || (Sn = !0, ne("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ee));
          };
          ze.isReactWarning = !0, Object.defineProperty(Q, "key", {
            get: ze,
            configurable: !0
          });
        }
      }
      function Rr(Q, Ee) {
        {
          var ze = function() {
            mn || (mn = !0, ne("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ee));
          };
          ze.isReactWarning = !0, Object.defineProperty(Q, "ref", {
            get: ze,
            configurable: !0
          });
        }
      }
      var Me = function(Q, Ee, ze, Je, Ct, nt, St) {
        var Rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: Q,
          key: Ee,
          ref: ze,
          props: St,
          // Record the component responsible for creating this element.
          _owner: nt
        };
        return Rt._store = {}, Object.defineProperty(Rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Je
        }), Object.defineProperty(Rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ct
        }), Object.freeze && (Object.freeze(Rt.props), Object.freeze(Rt)), Rt;
      };
      function Ve(Q, Ee, ze, Je, Ct) {
        {
          var nt, St = {}, Rt = null, Qt = null;
          ze !== void 0 && (Rt = "" + ze), Lt(Ee) && (Rt = "" + Ee.key), Ot(Ee) && (Qt = Ee.ref, ia(Ee, Ct));
          for (nt in Ee)
            un.call(Ee, nt) && !hn.hasOwnProperty(nt) && (St[nt] = Ee[nt]);
          if (Q && Q.defaultProps) {
            var Bt = Q.defaultProps;
            for (nt in Bt)
              St[nt] === void 0 && (St[nt] = Bt[nt]);
          }
          if (Rt || Qt) {
            var Wt = typeof Q == "function" ? Q.displayName || Q.name || "Unknown" : Q;
            Rt && Mr(St, Wt), Qt && Rr(St, Wt);
          }
          return Me(Q, Rt, Qt, Ct, Je, bn.current, St);
        }
      }
      var it = Y.ReactCurrentOwner, Tt = Y.ReactDebugCurrentFrame;
      function Ut(Q) {
        if (Q) {
          var Ee = Q._owner, ze = Ht(Q.type, Q._source, Ee ? Ee.type : null);
          Tt.setExtraStackFrame(ze);
        } else
          Tt.setExtraStackFrame(null);
      }
      var It;
      It = !1;
      function Vt(Q) {
        return typeof Q == "object" && Q !== null && Q.$$typeof === p;
      }
      function dn() {
        {
          if (it.current) {
            var Q = be(it.current.type);
            if (Q)
              return `

Check the render method of \`` + Q + "`.";
          }
          return "";
        }
      }
      function Yt(Q) {
        return "";
      }
      var Fn = {};
      function Sa(Q) {
        {
          var Ee = dn();
          if (!Ee) {
            var ze = typeof Q == "string" ? Q : Q.displayName || Q.name;
            ze && (Ee = `

Check the top-level render call using <` + ze + ">.");
          }
          return Ee;
        }
      }
      function fr(Q, Ee) {
        {
          if (!Q._store || Q._store.validated || Q.key != null)
            return;
          Q._store.validated = !0;
          var ze = Sa(Ee);
          if (Fn[ze])
            return;
          Fn[ze] = !0;
          var Je = "";
          Q && Q._owner && Q._owner !== it.current && (Je = " It was passed a child from " + be(Q._owner.type) + "."), Ut(Q), ne('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ze, Je), Ut(null);
        }
      }
      function zr(Q, Ee) {
        {
          if (typeof Q != "object")
            return;
          if (Array.isArray(Q))
            for (var ze = 0; ze < Q.length; ze++) {
              var Je = Q[ze];
              Vt(Je) && fr(Je, Ee);
            }
          else if (Vt(Q))
            Q._store && (Q._store.validated = !0);
          else if (Q) {
            var Ct = V(Q);
            if (typeof Ct == "function" && Ct !== Q.entries)
              for (var nt = Ct.call(Q), St; !(St = nt.next()).done; )
                Vt(St.value) && fr(St.value, Ee);
          }
        }
      }
      function qr(Q) {
        {
          var Ee = Q.type;
          if (Ee == null || typeof Ee == "string")
            return;
          var ze;
          if (typeof Ee == "function")
            ze = Ee.propTypes;
          else if (typeof Ee == "object" && (Ee.$$typeof === m || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          Ee.$$typeof === _))
            ze = Ee.propTypes;
          else
            return;
          if (ze) {
            var Je = be(Ee);
            Nr(ze, Q.props, "prop", Je, Q);
          } else if (Ee.PropTypes !== void 0 && !It) {
            It = !0;
            var Ct = be(Ee);
            ne("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
          }
          typeof Ee.getDefaultProps == "function" && !Ee.getDefaultProps.isReactClassApproved && ne("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function dr(Q) {
        {
          for (var Ee = Object.keys(Q.props), ze = 0; ze < Ee.length; ze++) {
            var Je = Ee[ze];
            if (Je !== "children" && Je !== "key") {
              Ut(Q), ne("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Je), Ut(null);
              break;
            }
          }
          Q.ref !== null && (Ut(Q), ne("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
        }
      }
      function On(Q, Ee, ze, Je, Ct, nt) {
        {
          var St = K(Q);
          if (!St) {
            var Rt = "";
            (Q === void 0 || typeof Q == "object" && Q !== null && Object.keys(Q).length === 0) && (Rt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Qt = Yt();
            Qt ? Rt += Qt : Rt += dn();
            var Bt;
            Q === null ? Bt = "null" : Array.isArray(Q) ? Bt = "array" : Q !== void 0 && Q.$$typeof === p ? (Bt = "<" + (be(Q.type) || "Unknown") + " />", Rt = " Did you accidentally export a JSX literal instead of a component?") : Bt = typeof Q, ne("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Bt, Rt);
          }
          var Wt = Ve(Q, Ee, ze, Ct, nt);
          if (Wt == null)
            return Wt;
          if (St) {
            var pr = Ee.children;
            if (pr !== void 0)
              if (Je)
                if (Array.isArray(pr)) {
                  for (var ir = 0; ir < pr.length; ir++)
                    zr(pr[ir], Q);
                  Object.freeze && Object.freeze(pr);
                } else
                  ne("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                zr(pr, Q);
          }
          return Q === c.Fragment ? dr(Wt) : qr(Wt), Wt;
        }
      }
      function Pn(Q, Ee, ze) {
        return On(Q, Ee, ze, !0);
      }
      function Pr(Q, Ee, ze) {
        return On(Q, Ee, ze, !1);
      }
      var en = Pr, oa = Pn;
      c.jsx = en, c.jsxs = oa;
    }();
  }(Vy)), Vy;
}
process.env.NODE_ENV === "production" ? Mx.exports = eR() : Mx.exports = tR();
var ut = Mx.exports, Lx = { exports: {} }, ga = {}, yv = { exports: {} }, Wy = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DC;
function nR() {
  return DC || (DC = 1, function(c) {
    var g, x, p, F;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      c.unstable_now = function() {
        return A.now();
      };
    } else {
      var y = Date, B = y.now();
      c.unstable_now = function() {
        return y.now() - B;
      };
    }
    if (typeof window > "u" || typeof MessageChannel != "function") {
      var D = null, m = null, w = function() {
        if (D !== null)
          try {
            var P = c.unstable_now();
            D(!0, P), D = null;
          } catch (q) {
            throw setTimeout(w, 0), q;
          }
      };
      g = function(P) {
        D !== null ? setTimeout(g, 0, P) : (D = P, setTimeout(w, 0));
      }, x = function(P, q) {
        m = setTimeout(P, q);
      }, p = function() {
        clearTimeout(m);
      }, c.unstable_shouldYield = function() {
        return !1;
      }, F = c.unstable_forceFrameRate = function() {
      };
    } else {
      var z = window.setTimeout, _ = window.clearTimeout;
      if (typeof console < "u") {
        var k = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof k != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var M = !1, j = null, O = -1, H = 5, b = 0;
      c.unstable_shouldYield = function() {
        return c.unstable_now() >= b;
      }, F = function() {
      }, c.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < P ? Math.floor(1e3 / P) : 5;
      };
      var S = new MessageChannel(), N = S.port2;
      S.port1.onmessage = function() {
        if (j !== null) {
          var P = c.unstable_now();
          b = P + H;
          try {
            j(!0, P) ? N.postMessage(null) : (M = !1, j = null);
          } catch (q) {
            throw N.postMessage(null), q;
          }
        } else
          M = !1;
      }, g = function(P) {
        j = P, M || (M = !0, N.postMessage(null));
      }, x = function(P, q) {
        O = z(function() {
          P(c.unstable_now());
        }, q);
      }, p = function() {
        _(O), O = -1;
      };
    }
    function T(P, q) {
      var $ = P.length;
      P.push(q);
      e:
        for (; ; ) {
          var Z = $ - 1 >>> 1, me = P[Z];
          if (me !== void 0 && 0 < ne(me, q))
            P[Z] = q, P[$] = me, $ = Z;
          else
            break e;
        }
    }
    function V(P) {
      return P = P[0], P === void 0 ? null : P;
    }
    function Y(P) {
      var q = P[0];
      if (q !== void 0) {
        var $ = P.pop();
        if ($ !== q) {
          P[0] = $;
          e:
            for (var Z = 0, me = P.length; Z < me; ) {
              var Se = 2 * (Z + 1) - 1, Ue = P[Se], De = Se + 1, Ie = P[De];
              if (Ue !== void 0 && 0 > ne(Ue, $))
                Ie !== void 0 && 0 > ne(Ie, Ue) ? (P[Z] = Ie, P[De] = $, Z = De) : (P[Z] = Ue, P[Se] = $, Z = Se);
              else if (Ie !== void 0 && 0 > ne(Ie, $))
                P[Z] = Ie, P[De] = $, Z = De;
              else
                break e;
            }
        }
        return q;
      }
      return null;
    }
    function ne(P, q) {
      var $ = P.sortIndex - q.sortIndex;
      return $ !== 0 ? $ : P.id - q.id;
    }
    var re = [], W = [], K = 1, le = null, ae = 3, be = !1, Re = !1, Oe = !1;
    function J(P) {
      for (var q = V(W); q !== null; ) {
        if (q.callback === null)
          Y(W);
        else if (q.startTime <= P)
          Y(W), q.sortIndex = q.expirationTime, T(re, q);
        else
          break;
        q = V(W);
      }
    }
    function pe(P) {
      if (Oe = !1, J(P), !Re)
        if (V(re) !== null)
          Re = !0, g(Be);
        else {
          var q = V(W);
          q !== null && x(pe, q.startTime - P);
        }
    }
    function Be(P, q) {
      Re = !1, Oe && (Oe = !1, p()), be = !0;
      var $ = ae;
      try {
        for (J(q), le = V(re); le !== null && (!(le.expirationTime > q) || P && !c.unstable_shouldYield()); ) {
          var Z = le.callback;
          if (typeof Z == "function") {
            le.callback = null, ae = le.priorityLevel;
            var me = Z(le.expirationTime <= q);
            q = c.unstable_now(), typeof me == "function" ? le.callback = me : le === V(re) && Y(re), J(q);
          } else
            Y(re);
          le = V(re);
        }
        if (le !== null)
          var Se = !0;
        else {
          var Ue = V(W);
          Ue !== null && x(pe, Ue.startTime - q), Se = !1;
        }
        return Se;
      } finally {
        le = null, ae = $, be = !1;
      }
    }
    var se = F;
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, c.unstable_continueExecution = function() {
      Re || be || (Re = !0, g(Be));
    }, c.unstable_getCurrentPriorityLevel = function() {
      return ae;
    }, c.unstable_getFirstCallbackNode = function() {
      return V(re);
    }, c.unstable_next = function(P) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = ae;
      }
      var $ = ae;
      ae = q;
      try {
        return P();
      } finally {
        ae = $;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = se, c.unstable_runWithPriority = function(P, q) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var $ = ae;
      ae = P;
      try {
        return q();
      } finally {
        ae = $;
      }
    }, c.unstable_scheduleCallback = function(P, q, $) {
      var Z = c.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Z + $ : Z) : $ = Z, P) {
        case 1:
          var me = -1;
          break;
        case 2:
          me = 250;
          break;
        case 5:
          me = 1073741823;
          break;
        case 4:
          me = 1e4;
          break;
        default:
          me = 5e3;
      }
      return me = $ + me, P = { id: K++, callback: q, priorityLevel: P, startTime: $, expirationTime: me, sortIndex: -1 }, $ > Z ? (P.sortIndex = $, T(W, P), V(re) === null && P === V(W) && (Oe ? p() : Oe = !0, x(pe, $ - Z))) : (P.sortIndex = me, T(re, P), Re || be || (Re = !0, g(Be))), P;
    }, c.unstable_wrapCallback = function(P) {
      var q = ae;
      return function() {
        var $ = ae;
        ae = q;
        try {
          return P.apply(this, arguments);
        } finally {
          ae = $;
        }
      };
    };
  }(Wy)), Wy;
}
var $y = {};
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AC;
function rR() {
  return AC || (AC = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      var g = !1, x = !1, p, F, A, y, B = typeof performance == "object" && typeof performance.now == "function";
      if (B) {
        var D = performance;
        c.unstable_now = function() {
          return D.now();
        };
      } else {
        var m = Date, w = m.now();
        c.unstable_now = function() {
          return m.now() - w;
        };
      }
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window > "u" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var z = null, _ = null, k = function() {
          if (z !== null)
            try {
              var Me = c.unstable_now(), Ve = !0;
              z(Ve, Me), z = null;
            } catch (it) {
              throw setTimeout(k, 0), it;
            }
        };
        p = function(Me) {
          z !== null ? setTimeout(p, 0, Me) : (z = Me, setTimeout(k, 0));
        }, F = function(Me, Ve) {
          _ = setTimeout(Me, Ve);
        }, A = function() {
          clearTimeout(_);
        }, c.unstable_shouldYield = function() {
          return !1;
        }, y = c.unstable_forceFrameRate = function() {
        };
      } else {
        var M = window.setTimeout, j = window.clearTimeout;
        if (typeof console < "u") {
          var O = window.requestAnimationFrame, H = window.cancelAnimationFrame;
          typeof O != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof H != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var b = !1, S = null, N = -1, T = 5, V = 0;
        c.unstable_shouldYield = function() {
          return c.unstable_now() >= V;
        }, y = function() {
        }, c.unstable_forceFrameRate = function(Me) {
          if (Me < 0 || Me > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }
          Me > 0 ? T = Math.floor(1e3 / Me) : T = 5;
        };
        var Y = function() {
          if (S !== null) {
            var Me = c.unstable_now();
            V = Me + T;
            var Ve = !0;
            try {
              var it = S(Ve, Me);
              it ? re.postMessage(null) : (b = !1, S = null);
            } catch (Tt) {
              throw re.postMessage(null), Tt;
            }
          } else
            b = !1;
        }, ne = new MessageChannel(), re = ne.port2;
        ne.port1.onmessage = Y, p = function(Me) {
          S = Me, b || (b = !0, re.postMessage(null));
        }, F = function(Me, Ve) {
          N = M(function() {
            Me(c.unstable_now());
          }, Ve);
        }, A = function() {
          j(N), N = -1;
        };
      }
      function W(Me, Ve) {
        var it = Me.length;
        Me.push(Ve), ae(Me, Ve, it);
      }
      function K(Me) {
        var Ve = Me[0];
        return Ve === void 0 ? null : Ve;
      }
      function le(Me) {
        var Ve = Me[0];
        if (Ve !== void 0) {
          var it = Me.pop();
          return it !== Ve && (Me[0] = it, be(Me, it, 0)), Ve;
        } else
          return null;
      }
      function ae(Me, Ve, it) {
        for (var Tt = it; ; ) {
          var Ut = Tt - 1 >>> 1, It = Me[Ut];
          if (It !== void 0 && Re(It, Ve) > 0)
            Me[Ut] = Ve, Me[Tt] = It, Tt = Ut;
          else
            return;
        }
      }
      function be(Me, Ve, it) {
        for (var Tt = it, Ut = Me.length; Tt < Ut; ) {
          var It = (Tt + 1) * 2 - 1, Vt = Me[It], dn = It + 1, Yt = Me[dn];
          if (Vt !== void 0 && Re(Vt, Ve) < 0)
            Yt !== void 0 && Re(Yt, Vt) < 0 ? (Me[Tt] = Yt, Me[dn] = Ve, Tt = dn) : (Me[Tt] = Vt, Me[It] = Ve, Tt = It);
          else if (Yt !== void 0 && Re(Yt, Ve) < 0)
            Me[Tt] = Yt, Me[dn] = Ve, Tt = dn;
          else
            return;
        }
      }
      function Re(Me, Ve) {
        var it = Me.sortIndex - Ve.sortIndex;
        return it !== 0 ? it : Me.id - Ve.id;
      }
      var Oe = 1, J = 2, pe = 3, Be = 4, se = 5;
      function P(Me, Ve) {
      }
      var q = 1073741823, $ = -1, Z = 250, me = 5e3, Se = 1e4, Ue = q, De = [], Ie = [], Ke = 1, dt = null, Te = pe, wt = !1, kt = !1, Ht = !1;
      function Bn(Me) {
        for (var Ve = K(Ie); Ve !== null; ) {
          if (Ve.callback === null)
            le(Ie);
          else if (Ve.startTime <= Me)
            le(Ie), Ve.sortIndex = Ve.expirationTime, W(De, Ve);
          else
            return;
          Ve = K(Ie);
        }
      }
      function zn(Me) {
        if (Ht = !1, Bn(Me), !kt)
          if (K(De) !== null)
            kt = !0, p(Cn);
          else {
            var Ve = K(Ie);
            Ve !== null && F(zn, Ve.startTime - Me);
          }
      }
      function Cn(Me, Ve) {
        kt = !1, Ht && (Ht = !1, A()), wt = !0;
        var it = Te;
        try {
          var Tt;
          if (!x)
            return Nr(Me, Ve);
        } finally {
          dt = null, Te = it, wt = !1;
        }
      }
      function Nr(Me, Ve) {
        var it = Ve;
        for (Bn(it), dt = K(De); dt !== null && !g && !(dt.expirationTime > it && (!Me || c.unstable_shouldYield())); ) {
          var Tt = dt.callback;
          if (typeof Tt == "function") {
            dt.callback = null, Te = dt.priorityLevel;
            var Ut = dt.expirationTime <= it, It = Tt(Ut);
            it = c.unstable_now(), typeof It == "function" ? dt.callback = It : dt === K(De) && le(De), Bn(it);
          } else
            le(De);
          dt = K(De);
        }
        if (dt !== null)
          return !0;
        var Vt = K(Ie);
        return Vt !== null && F(zn, Vt.startTime - it), !1;
      }
      function bn(Me, Ve) {
        switch (Me) {
          case Oe:
          case J:
          case pe:
          case Be:
          case se:
            break;
          default:
            Me = pe;
        }
        var it = Te;
        Te = Me;
        try {
          return Ve();
        } finally {
          Te = it;
        }
      }
      function un(Me) {
        var Ve;
        switch (Te) {
          case Oe:
          case J:
          case pe:
            Ve = pe;
            break;
          default:
            Ve = Te;
            break;
        }
        var it = Te;
        Te = Ve;
        try {
          return Me();
        } finally {
          Te = it;
        }
      }
      function hn(Me) {
        var Ve = Te;
        return function() {
          var it = Te;
          Te = Ve;
          try {
            return Me.apply(this, arguments);
          } finally {
            Te = it;
          }
        };
      }
      function Sn(Me, Ve, it) {
        var Tt = c.unstable_now(), Ut;
        if (typeof it == "object" && it !== null) {
          var It = it.delay;
          typeof It == "number" && It > 0 ? Ut = Tt + It : Ut = Tt;
        } else
          Ut = Tt;
        var Vt;
        switch (Me) {
          case Oe:
            Vt = $;
            break;
          case J:
            Vt = Z;
            break;
          case se:
            Vt = Ue;
            break;
          case Be:
            Vt = Se;
            break;
          case pe:
          default:
            Vt = me;
            break;
        }
        var dn = Ut + Vt, Yt = {
          id: Ke++,
          callback: Ve,
          priorityLevel: Me,
          startTime: Ut,
          expirationTime: dn,
          sortIndex: -1
        };
        return Ut > Tt ? (Yt.sortIndex = Ut, W(Ie, Yt), K(De) === null && Yt === K(Ie) && (Ht ? A() : Ht = !0, F(zn, Ut - Tt))) : (Yt.sortIndex = dn, W(De, Yt), !kt && !wt && (kt = !0, p(Cn))), Yt;
      }
      function mn() {
      }
      function Gn() {
        !kt && !wt && (kt = !0, p(Cn));
      }
      function Ot() {
        return K(De);
      }
      function Lt(Me) {
        Me.callback = null;
      }
      function ia() {
        return Te;
      }
      var Mr = y, Rr = null;
      c.unstable_IdlePriority = se, c.unstable_ImmediatePriority = Oe, c.unstable_LowPriority = Be, c.unstable_NormalPriority = pe, c.unstable_Profiling = Rr, c.unstable_UserBlockingPriority = J, c.unstable_cancelCallback = Lt, c.unstable_continueExecution = Gn, c.unstable_getCurrentPriorityLevel = ia, c.unstable_getFirstCallbackNode = Ot, c.unstable_next = un, c.unstable_pauseExecution = mn, c.unstable_requestPaint = Mr, c.unstable_runWithPriority = bn, c.unstable_scheduleCallback = Sn, c.unstable_wrapCallback = hn;
    }();
  }($y)), $y;
}
var kC;
function O2() {
  return kC || (kC = 1, process.env.NODE_ENV === "production" ? yv.exports = nR() : yv.exports = rR()), yv.exports;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BC;
function aR() {
  if (BC)
    return ga;
  BC = 1;
  var c = Ne, g = rs(), x = O2();
  function p(n) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      a += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!c)
    throw Error(p(227));
  var F = /* @__PURE__ */ new Set(), A = {};
  function y(n, a) {
    B(n, a), B(n + "Capture", a);
  }
  function B(n, a) {
    for (A[n] = a, n = 0; n < a.length; n++)
      F.add(a[n]);
  }
  var D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = Object.prototype.hasOwnProperty, z = {}, _ = {};
  function k(n) {
    return w.call(_, n) ? !0 : w.call(z, n) ? !1 : m.test(n) ? _[n] = !0 : (z[n] = !0, !1);
  }
  function M(n, a, o, l) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function j(n, a, o, l) {
    if (a === null || typeof a > "u" || M(n, a, o, l))
      return !0;
    if (l)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function O(n, a, o, l, f, h, R) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = a, this.sanitizeURL = h, this.removeEmptyString = R;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    H[n] = new O(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    H[a] = new O(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    H[n] = new O(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    H[n] = new O(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    H[n] = new O(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    H[n] = new O(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    H[n] = new O(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    H[n] = new O(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    H[n] = new O(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function S(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(
      b,
      S
    );
    H[a] = new O(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(b, S);
    H[a] = new O(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(b, S);
    H[a] = new O(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    H[n] = new O(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    H[n] = new O(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function N(n, a, o, l) {
    var f = H.hasOwnProperty(a) ? H[a] : null, h = f !== null ? f.type === 0 : l ? !1 : !(!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N");
    h || (j(a, o, f, l) && (o = null), l || f === null ? k(a) && (o === null ? n.removeAttribute(a) : n.setAttribute(a, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (a = f.attributeName, l = f.attributeNamespace, o === null ? n.removeAttribute(a) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, l ? n.setAttributeNS(l, a, o) : n.setAttribute(a, o))));
  }
  var T = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = 60103, Y = 60106, ne = 60107, re = 60108, W = 60114, K = 60109, le = 60110, ae = 60112, be = 60113, Re = 60120, Oe = 60115, J = 60116, pe = 60121, Be = 60128, se = 60129, P = 60130, q = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var $ = Symbol.for;
    V = $("react.element"), Y = $("react.portal"), ne = $("react.fragment"), re = $("react.strict_mode"), W = $("react.profiler"), K = $("react.provider"), le = $("react.context"), ae = $("react.forward_ref"), be = $("react.suspense"), Re = $("react.suspense_list"), Oe = $("react.memo"), J = $("react.lazy"), pe = $("react.block"), $("react.scope"), Be = $("react.opaque.id"), se = $("react.debug_trace_mode"), P = $("react.offscreen"), q = $("react.legacy_hidden");
  }
  var Z = typeof Symbol == "function" && Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se;
  function Ue(n) {
    if (Se === void 0)
      try {
        throw Error();
      } catch (o) {
        var a = o.stack.trim().match(/\n( *(at )?)/);
        Se = a && a[1] || "";
      }
    return `
` + Se + n;
  }
  var De = !1;
  function Ie(n, a) {
    if (!n || De)
      return "";
    De = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (a = function() {
          throw Error();
        }, Object.defineProperty(a.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (G) {
            var l = G;
          }
          Reflect.construct(n, [], a);
        } else {
          try {
            a.call();
          } catch (G) {
            l = G;
          }
          n.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (G) {
          l = G;
        }
        n();
      }
    } catch (G) {
      if (G && l && typeof G.stack == "string") {
        for (var f = G.stack.split(`
`), h = l.stack.split(`
`), R = f.length - 1, L = h.length - 1; 1 <= R && 0 <= L && f[R] !== h[L]; )
          L--;
        for (; 1 <= R && 0 <= L; R--, L--)
          if (f[R] !== h[L]) {
            if (R !== 1 || L !== 1)
              do
                if (R--, L--, 0 > L || f[R] !== h[L])
                  return `
` + f[R].replace(" at new ", " at ");
              while (1 <= R && 0 <= L);
            break;
          }
      }
    } finally {
      De = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Ue(n) : "";
  }
  function Ke(n) {
    switch (n.tag) {
      case 5:
        return Ue(n.type);
      case 16:
        return Ue("Lazy");
      case 13:
        return Ue("Suspense");
      case 19:
        return Ue("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 22:
        return n = Ie(n.type._render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ne:
        return "Fragment";
      case Y:
        return "Portal";
      case W:
        return "Profiler";
      case re:
        return "StrictMode";
      case be:
        return "Suspense";
      case Re:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case le:
          return (n.displayName || "Context") + ".Consumer";
        case K:
          return (n._context.displayName || "Context") + ".Provider";
        case ae:
          var a = n.render;
          return a = a.displayName || a.name || "", n.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case Oe:
          return dt(n.type);
        case pe:
          return dt(n._render);
        case J:
          a = n._payload, n = n._init;
          try {
            return dt(n(a));
          } catch {
          }
      }
    return null;
  }
  function Te(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  function wt(n) {
    var a = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function kt(n) {
    var a = wt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, a), l = "" + n[a];
    if (!n.hasOwnProperty(a) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, h = o.set;
      return Object.defineProperty(n, a, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(R) {
        l = "" + R, h.call(this, R);
      } }), Object.defineProperty(n, a, { enumerable: o.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(R) {
        l = "" + R;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[a];
      } };
    }
  }
  function Ht(n) {
    n._valueTracker || (n._valueTracker = kt(n));
  }
  function Bn(n) {
    if (!n)
      return !1;
    var a = n._valueTracker;
    if (!a)
      return !0;
    var o = a.getValue(), l = "";
    return n && (l = wt(n) ? n.checked ? "true" : "false" : n.value), n = l, n !== o ? (a.setValue(n), !0) : !1;
  }
  function zn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Cn(n, a) {
    var o = a.checked;
    return g({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Nr(n, a) {
    var o = a.defaultValue == null ? "" : a.defaultValue, l = a.checked != null ? a.checked : a.defaultChecked;
    o = Te(a.value != null ? a.value : o), n._wrapperState = { initialChecked: l, initialValue: o, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null };
  }
  function bn(n, a) {
    a = a.checked, a != null && N(n, "checked", a, !1);
  }
  function un(n, a) {
    bn(n, a);
    var o = Te(a.value), l = a.type;
    if (o != null)
      l === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? Sn(n, a.type, o) : a.hasOwnProperty("defaultValue") && Sn(n, a.type, Te(a.defaultValue)), a.checked == null && a.defaultChecked != null && (n.defaultChecked = !!a.defaultChecked);
  }
  function hn(n, a, o) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var l = a.type;
      if (!(l !== "submit" && l !== "reset" || a.value !== void 0 && a.value !== null))
        return;
      a = "" + n._wrapperState.initialValue, o || a === n.value || (n.value = a), n.defaultValue = a;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Sn(n, a, o) {
    (a !== "number" || zn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  function mn(n) {
    var a = "";
    return c.Children.forEach(n, function(o) {
      o != null && (a += o);
    }), a;
  }
  function Gn(n, a) {
    return n = g({ children: void 0 }, a), (a = mn(a.children)) && (n.children = a), n;
  }
  function Ot(n, a, o, l) {
    if (n = n.options, a) {
      a = {};
      for (var f = 0; f < o.length; f++)
        a["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        f = a.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && l && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Te(o), a = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          n[f].selected = !0, l && (n[f].defaultSelected = !0);
          return;
        }
        a !== null || n[f].disabled || (a = n[f]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Lt(n, a) {
    if (a.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return g({}, a, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ia(n, a) {
    var o = a.value;
    if (o == null) {
      if (o = a.children, a = a.defaultValue, o != null) {
        if (a != null)
          throw Error(p(92));
        if (Array.isArray(o)) {
          if (!(1 >= o.length))
            throw Error(p(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), o = a;
    }
    n._wrapperState = { initialValue: Te(o) };
  }
  function Mr(n, a) {
    var o = Te(a.value), l = Te(a.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), a.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), l != null && (n.defaultValue = "" + l);
  }
  function Rr(n) {
    var a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  var Me = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Ve(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function it(n, a) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ve(a) : n === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Tt, Ut = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, o, l, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(a, o, l, f);
      });
    } : n;
  }(function(n, a) {
    if (n.namespaceURI !== Me.svg || "innerHTML" in n)
      n.innerHTML = a;
    else {
      for (Tt = Tt || document.createElement("div"), Tt.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = Tt.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; a.firstChild; )
        n.appendChild(a.firstChild);
    }
  });
  function It(n, a) {
    if (a) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var Vt = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, dn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Vt).forEach(function(n) {
    dn.forEach(function(a) {
      a = a + n.charAt(0).toUpperCase() + n.substring(1), Vt[a] = Vt[n];
    });
  });
  function Yt(n, a, o) {
    return a == null || typeof a == "boolean" || a === "" ? "" : o || typeof a != "number" || a === 0 || Vt.hasOwnProperty(n) && Vt[n] ? ("" + a).trim() : a + "px";
  }
  function Fn(n, a) {
    n = n.style;
    for (var o in a)
      if (a.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0, f = Yt(o, a[o], l);
        o === "float" && (o = "cssFloat"), l ? n.setProperty(o, f) : n[o] = f;
      }
  }
  var Sa = g({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fr(n, a) {
    if (a) {
      if (Sa[n] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(p(137, n));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
          throw Error(p(60));
        if (!(typeof a.dangerouslySetInnerHTML == "object" && "__html" in a.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (a.style != null && typeof a.style != "object")
        throw Error(p(62));
    }
  }
  function zr(n, a) {
    if (n.indexOf("-") === -1)
      return typeof a.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  function qr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var dr = null, On = null, Pn = null;
  function Pr(n) {
    if (n = Hr(n)) {
      if (typeof dr != "function")
        throw Error(p(280));
      var a = n.stateNode;
      a && (a = Ja(a), dr(n.stateNode, n.type, a));
    }
  }
  function en(n) {
    On ? Pn ? Pn.push(n) : Pn = [n] : On = n;
  }
  function oa() {
    if (On) {
      var n = On, a = Pn;
      if (Pn = On = null, Pr(n), a)
        for (n = 0; n < a.length; n++)
          Pr(a[n]);
    }
  }
  function Q(n, a) {
    return n(a);
  }
  function Ee(n, a, o, l, f) {
    return n(a, o, l, f);
  }
  function ze() {
  }
  var Je = Q, Ct = !1, nt = !1;
  function St() {
    (On !== null || Pn !== null) && (ze(), oa());
  }
  function Rt(n, a, o) {
    if (nt)
      return n(a, o);
    nt = !0;
    try {
      return Je(n, a, o);
    } finally {
      nt = !1, St();
    }
  }
  function Qt(n, a) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var l = Ja(o);
    if (l === null)
      return null;
    o = l[a];
    e:
      switch (a) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (n = n.type, l = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !l;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(p(231, a, typeof o));
    return o;
  }
  var Bt = !1;
  if (D)
    try {
      var Wt = {};
      Object.defineProperty(Wt, "passive", { get: function() {
        Bt = !0;
      } }), window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt);
    } catch {
      Bt = !1;
    }
  function pr(n, a, o, l, f, h, R, L, G) {
    var he = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(o, he);
    } catch (We) {
      this.onError(We);
    }
  }
  var ir = !1, ua = null, Ln = !1, uo = null, Iu = { onError: function(n) {
    ir = !0, ua = n;
  } };
  function Vu(n, a, o, l, f, h, R, L, G) {
    ir = !1, ua = null, pr.apply(Iu, arguments);
  }
  function Yr(n, a, o, l, f, h, R, L, G) {
    if (Vu.apply(this, arguments), ir) {
      if (ir) {
        var he = ua;
        ir = !1, ua = null;
      } else
        throw Error(p(198));
      Ln || (Ln = !0, uo = he);
    }
  }
  function Un(n) {
    var a = n, o = n;
    if (n.alternate)
      for (; a.return; )
        a = a.return;
    else {
      n = a;
      do
        a = n, a.flags & 1026 && (o = a.return), n = a.return;
      while (n);
    }
    return a.tag === 3 ? o : null;
  }
  function mi(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (a === null && (n = n.alternate, n !== null && (a = n.memoizedState)), a !== null)
        return a.dehydrated;
    }
    return null;
  }
  function yi(n) {
    if (Un(n) !== n)
      throw Error(p(188));
  }
  function Lr(n) {
    var a = n.alternate;
    if (!a) {
      if (a = Un(n), a === null)
        throw Error(p(188));
      return a !== n ? null : n;
    }
    for (var o = n, l = a; ; ) {
      var f = o.return;
      if (f === null)
        break;
      var h = f.alternate;
      if (h === null) {
        if (l = f.return, l !== null) {
          o = l;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === o)
            return yi(f), n;
          if (h === l)
            return yi(f), a;
          h = h.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== l.return)
        o = f, l = h;
      else {
        for (var R = !1, L = f.child; L; ) {
          if (L === o) {
            R = !0, o = f, l = h;
            break;
          }
          if (L === l) {
            R = !0, l = f, o = h;
            break;
          }
          L = L.sibling;
        }
        if (!R) {
          for (L = h.child; L; ) {
            if (L === o) {
              R = !0, o = h, l = f;
              break;
            }
            if (L === l) {
              R = !0, l = h, o = f;
              break;
            }
            L = L.sibling;
          }
          if (!R)
            throw Error(p(189));
        }
      }
      if (o.alternate !== l)
        throw Error(p(190));
    }
    if (o.tag !== 3)
      throw Error(p(188));
    return o.stateNode.current === o ? n : a;
  }
  function xi(n) {
    if (n = Lr(n), !n)
      return null;
    for (var a = n; ; ) {
      if (a.tag === 5 || a.tag === 6)
        return a;
      if (a.child)
        a.child.return = a, a = a.child;
      else {
        if (a === n)
          break;
        for (; !a.sibling; ) {
          if (!a.return || a.return === n)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return null;
  }
  function _a(n, a) {
    for (var o = n.alternate; a !== null; ) {
      if (a === n || a === o)
        return !0;
      a = a.return;
    }
    return !1;
  }
  var ss, gi, Wu, Ei, Ci = !1, vr = [], la = null, Tr = null, Ra = null, Ur = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Qa = [], Xn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ta(n, a, o, l, f) {
    return { blockedOn: n, domEventName: a, eventSystemFlags: o | 16, nativeEvent: f, targetContainers: [l] };
  }
  function Ga(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        la = null;
        break;
      case "dragenter":
      case "dragleave":
        Tr = null;
        break;
      case "mouseover":
      case "mouseout":
        Ra = null;
        break;
      case "pointerover":
      case "pointerout":
        Ur.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Le.delete(a.pointerId);
    }
  }
  function lo(n, a, o, l, f, h) {
    return n === null || n.nativeEvent !== h ? (n = Ta(a, o, l, f, h), a !== null && (a = Hr(a), a !== null && gi(a)), n) : (n.eventSystemFlags |= l, a = n.targetContainers, f !== null && a.indexOf(f) === -1 && a.push(f), n);
  }
  function Kn(n, a, o, l, f) {
    switch (a) {
      case "focusin":
        return la = lo(la, n, a, o, l, f), !0;
      case "dragenter":
        return Tr = lo(Tr, n, a, o, l, f), !0;
      case "mouseover":
        return Ra = lo(Ra, n, a, o, l, f), !0;
      case "pointerover":
        var h = f.pointerId;
        return Ur.set(h, lo(Ur.get(h) || null, n, a, o, l, f)), !0;
      case "gotpointercapture":
        return h = f.pointerId, Le.set(h, lo(Le.get(h) || null, n, a, o, l, f)), !0;
    }
    return !1;
  }
  function _n(n) {
    var a = mo(n.target);
    if (a !== null) {
      var o = Un(a);
      if (o !== null) {
        if (a = o.tag, a === 13) {
          if (a = mi(o), a !== null) {
            n.blockedOn = a, Ei(n.lanePriority, function() {
              x.unstable_runWithPriority(n.priority, function() {
                Wu(o);
              });
            });
            return;
          }
        } else if (a === 3 && o.stateNode.hydrate) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function or(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var o = vs(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
      if (o !== null)
        return a = Hr(o), a !== null && gi(a), n.blockedOn = o, !1;
      a.shift();
    }
    return !0;
  }
  function cs(n, a, o) {
    or(n) && o.delete(a);
  }
  function hr() {
    for (Ci = !1; 0 < vr.length; ) {
      var n = vr[0];
      if (n.blockedOn !== null) {
        n = Hr(n.blockedOn), n !== null && ss(n);
        break;
      }
      for (var a = n.targetContainers; 0 < a.length; ) {
        var o = vs(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
        if (o !== null) {
          n.blockedOn = o;
          break;
        }
        a.shift();
      }
      n.blockedOn === null && vr.shift();
    }
    la !== null && or(la) && (la = null), Tr !== null && or(Tr) && (Tr = null), Ra !== null && or(Ra) && (Ra = null), Ur.forEach(cs), Le.forEach(cs);
  }
  function mr(n, a) {
    n.blockedOn === a && (n.blockedOn = null, Ci || (Ci = !0, x.unstable_scheduleCallback(x.unstable_NormalPriority, hr)));
  }
  function fs(n) {
    function a(f) {
      return mr(f, n);
    }
    if (0 < vr.length) {
      mr(vr[0], n);
      for (var o = 1; o < vr.length; o++) {
        var l = vr[o];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (la !== null && mr(la, n), Tr !== null && mr(Tr, n), Ra !== null && mr(Ra, n), Ur.forEach(a), Le.forEach(a), o = 0; o < Qa.length; o++)
      l = Qa[o], l.blockedOn === n && (l.blockedOn = null);
    for (; 0 < Qa.length && (o = Qa[0], o.blockedOn === null); )
      _n(o), o.blockedOn === null && Qa.shift();
  }
  function bi(n, a) {
    var o = {};
    return o[n.toLowerCase()] = a.toLowerCase(), o["Webkit" + n] = "webkit" + a, o["Moz" + n] = "moz" + a, o;
  }
  var wa = { animationend: bi("Animation", "AnimationEnd"), animationiteration: bi("Animation", "AnimationIteration"), animationstart: bi("Animation", "AnimationStart"), transitionend: bi("Transition", "TransitionEnd") }, $o = {}, ds = {};
  D && (ds = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
  function qo(n) {
    if ($o[n])
      return $o[n];
    if (!wa[n])
      return n;
    var a = wa[n], o;
    for (o in a)
      if (a.hasOwnProperty(o) && o in ds)
        return $o[n] = a[o];
    return n;
  }
  var ps = qo("animationend"), C = qo("animationiteration"), ee = qo("animationstart"), ve = qo("transitionend"), xe = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), lt = [
    "abort",
    "abort",
    ps,
    "animationEnd",
    C,
    "animationIteration",
    ee,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    ve,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function tt(n, a) {
    for (var o = 0; o < n.length; o += 2) {
      var l = n[o], f = n[o + 1];
      f = "on" + (f[0].toUpperCase() + f.slice(1)), je.set(l, a), xe.set(l, f), y(f, [l]);
    }
  }
  var rt = x.unstable_now;
  rt();
  var et = 8;
  function Mt(n) {
    if (1 & n)
      return et = 15, 1;
    if (2 & n)
      return et = 14, 2;
    if (4 & n)
      return et = 13, 4;
    var a = 24 & n;
    return a !== 0 ? (et = 12, a) : n & 32 ? (et = 11, 32) : (a = 192 & n, a !== 0 ? (et = 10, a) : n & 256 ? (et = 9, 256) : (a = 3584 & n, a !== 0 ? (et = 8, a) : n & 4096 ? (et = 7, 4096) : (a = 4186112 & n, a !== 0 ? (et = 6, a) : (a = 62914560 & n, a !== 0 ? (et = 5, a) : n & 67108864 ? (et = 4, 67108864) : n & 134217728 ? (et = 3, 134217728) : (a = 805306368 & n, a !== 0 ? (et = 2, a) : 1073741824 & n ? (et = 1, 1073741824) : (et = 8, n))))));
  }
  function an(n) {
    switch (n) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function pn(n) {
    switch (n) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(p(358, n));
    }
  }
  function Rn(n, a) {
    var o = n.pendingLanes;
    if (o === 0)
      return et = 0;
    var l = 0, f = 0, h = n.expiredLanes, R = n.suspendedLanes, L = n.pingedLanes;
    if (h !== 0)
      l = h, f = et = 15;
    else if (h = o & 134217727, h !== 0) {
      var G = h & ~R;
      G !== 0 ? (l = Mt(G), f = et) : (L &= h, L !== 0 && (l = Mt(L), f = et));
    } else
      h = o & ~R, h !== 0 ? (l = Mt(h), f = et) : L !== 0 && (l = Mt(L), f = et);
    if (l === 0)
      return 0;
    if (l = 31 - Da(l), l = o & ((0 > l ? 0 : 1 << l) << 1) - 1, a !== 0 && a !== l && !(a & R)) {
      if (Mt(a), f <= et)
        return a;
      et = f;
    }
    if (a = n.entangledLanes, a !== 0)
      for (n = n.entanglements, a &= l; 0 < a; )
        o = 31 - Da(a), f = 1 << o, l |= n[o], a &= ~f;
    return l;
  }
  function Zn(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Jn(n, a) {
    switch (n) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return n = jr(24 & ~a), n === 0 ? Jn(10, a) : n;
      case 10:
        return n = jr(192 & ~a), n === 0 ? Jn(8, a) : n;
      case 8:
        return n = jr(3584 & ~a), n === 0 && (n = jr(4186112 & ~a), n === 0 && (n = 512)), n;
      case 2:
        return a = jr(805306368 & ~a), a === 0 && (a = 268435456), a;
    }
    throw Error(p(358, n));
  }
  function jr(n) {
    return n & -n;
  }
  function Si(n) {
    for (var a = [], o = 0; 31 > o; o++)
      a.push(n);
    return a;
  }
  function _i(n, a, o) {
    n.pendingLanes |= a;
    var l = a - 1;
    n.suspendedLanes &= l, n.pingedLanes &= l, n = n.eventTimes, a = 31 - Da(a), n[a] = o;
  }
  var Da = Math.clz32 ? Math.clz32 : Yo, $u = Math.log, kc = Math.LN2;
  function Yo(n) {
    return n === 0 ? 32 : 31 - ($u(n) / kc | 0) | 0;
  }
  var qu = x.unstable_UserBlockingPriority, F0 = x.unstable_runWithPriority, Yu = !0;
  function Ov(n, a, o, l) {
    Ct || ze();
    var f = Qu, h = Ct;
    Ct = !0;
    try {
      Ee(f, n, a, o, l);
    } finally {
      (Ct = h) || St();
    }
  }
  function Qo(n, a, o, l) {
    F0(qu, Qu.bind(null, n, a, o, l));
  }
  function Qu(n, a, o, l) {
    if (Yu) {
      var f;
      if ((f = (a & 4) === 0) && 0 < vr.length && -1 < Xn.indexOf(n))
        n = Ta(null, n, a, o, l), vr.push(n);
      else {
        var h = vs(n, a, o, l);
        if (h === null)
          f && Ga(n, l);
        else {
          if (f) {
            if (-1 < Xn.indexOf(n)) {
              n = Ta(h, n, a, o, l), vr.push(n);
              return;
            }
            if (Kn(h, n, a, o, l))
              return;
            Ga(n, l);
          }
          _s(n, a, l, null, o);
        }
      }
    }
  }
  function vs(n, a, o, l) {
    var f = qr(l);
    if (f = mo(f), f !== null) {
      var h = Un(f);
      if (h === null)
        f = null;
      else {
        var R = h.tag;
        if (R === 13) {
          if (f = mi(h), f !== null)
            return f;
          f = null;
        } else if (R === 3) {
          if (h.stateNode.hydrate)
            return h.tag === 3 ? h.stateNode.containerInfo : null;
          f = null;
        } else
          h !== f && (f = null);
      }
    }
    return _s(n, a, l, f, o), null;
  }
  var Ri = null, Bc = null, hs = null;
  function Fc() {
    if (hs)
      return hs;
    var n, a = Bc, o = a.length, l, f = "value" in Ri ? Ri.value : Ri.textContent, h = f.length;
    for (n = 0; n < o && a[n] === f[n]; n++)
      ;
    var R = o - n;
    for (l = 1; l <= R && a[o - l] === f[h - l]; l++)
      ;
    return hs = f.slice(n, 1 < l ? 1 - l : void 0);
  }
  function Go(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Gu() {
    return !0;
  }
  function Oc() {
    return !1;
  }
  function wr(n) {
    function a(o, l, f, h, R) {
      this._reactName = o, this._targetInst = f, this.type = l, this.nativeEvent = h, this.target = R, this.currentTarget = null;
      for (var L in n)
        n.hasOwnProperty(L) && (o = n[L], this[L] = o ? o(h) : h[L]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Gu : Oc, this.isPropagationStopped = Oc, this;
    }
    return g(a.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Gu);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Gu);
    }, persist: function() {
    }, isPersistent: Gu }), a;
  }
  var Xo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ko = wr(Xo), Zo = g({}, Xo, { view: 0, detail: 0 }), Nc = wr(Zo), ms, Xu, so, ys = g({}, Zo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== so && (so && n.type === "mousemove" ? (ms = n.screenX - so.screenX, Xu = n.screenY - so.screenY) : Xu = ms = 0, so = n), ms);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xu;
  } }), Ku = wr(ys), O0 = g({}, ys, { dataTransfer: 0 }), Qr = wr(O0), Xa = g({}, Zo, { relatedTarget: 0 }), yr = wr(Xa), Ti = g({}, Xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), N0 = wr(Ti), xs = g({}, Xo, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Nv = wr(xs), Zu = g({}, Xo, { data: 0 }), M0 = wr(Zu), Mv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Mc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, zv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pv(n) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(n) : (n = zv[n]) ? !!a[n] : !1;
  }
  function zc() {
    return Pv;
  }
  var z0 = g({}, Zo, { key: function(n) {
    if (n.key) {
      var a = Mv[n.key] || n.key;
      if (a !== "Unidentified")
        return a;
    }
    return n.type === "keypress" ? (n = Go(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Mc[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zc, charCode: function(n) {
    return n.type === "keypress" ? Go(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Go(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Lv = wr(z0), Uv = g({}, ys, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), P0 = wr(Uv), L0 = g({}, Zo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zc }), Jo = wr(L0), Pc = g({}, Xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), U0 = wr(Pc), j0 = g({}, ys, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jv = wr(j0), Hv = [9, 13, 27, 32], Lc = D && "CompositionEvent" in window, Ju = null;
  D && "documentMode" in document && (Ju = document.documentMode);
  var Iv = D && "TextEvent" in window && !Ju, H0 = D && (!Lc || Ju && 8 < Ju && 11 >= Ju), I0 = " ", V0 = !1;
  function Uc(n, a) {
    switch (n) {
      case "keyup":
        return Hv.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function W0(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var co = !1;
  function Vv(n, a) {
    switch (n) {
      case "compositionend":
        return W0(a);
      case "keypress":
        return a.which !== 32 ? null : (V0 = !0, I0);
      case "textInput":
        return n = a.data, n === I0 && V0 ? null : n;
      default:
        return null;
    }
  }
  function Wv(n, a) {
    if (co)
      return n === "compositionend" || !Lc && Uc(n, a) ? (n = Fc(), hs = Bc = Ri = null, co = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which)
            return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return H0 && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var $v = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function $0(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!$v[n.type] : a === "textarea";
  }
  function gs(n, a, o, l) {
    en(l), a = Rs(a, "onChange"), 0 < a.length && (o = new Ko("onChange", "change", null, o, l), n.push({ event: o, listeners: a }));
  }
  var sa = null, wi = null;
  function q0(n) {
    Cs(n, 0);
  }
  function Ka(n) {
    var a = Er(n);
    if (Bn(a))
      return n;
  }
  function qv(n, a) {
    if (n === "change")
      return a;
  }
  var Y0 = !1;
  if (D) {
    var jc;
    if (D) {
      var Hc = "oninput" in document;
      if (!Hc) {
        var Q0 = document.createElement("div");
        Q0.setAttribute("oninput", "return;"), Hc = typeof Q0.oninput == "function";
      }
      jc = Hc;
    } else
      jc = !1;
    Y0 = jc && (!document.documentMode || 9 < document.documentMode);
  }
  function G0() {
    sa && (sa.detachEvent("onpropertychange", Ic), wi = sa = null);
  }
  function Ic(n) {
    if (n.propertyName === "value" && Ka(wi)) {
      var a = [];
      if (gs(a, wi, n, qr(n)), n = q0, Ct)
        n(a);
      else {
        Ct = !0;
        try {
          Q(n, a);
        } finally {
          Ct = !1, St();
        }
      }
    }
  }
  function Yv(n, a, o) {
    n === "focusin" ? (G0(), sa = a, wi = o, sa.attachEvent("onpropertychange", Ic)) : n === "focusout" && G0();
  }
  function X0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ka(wi);
  }
  function xr(n, a) {
    if (n === "click")
      return Ka(a);
  }
  function Qv(n, a) {
    if (n === "input" || n === "change")
      return Ka(a);
  }
  function K0(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var Gr = typeof Object.is == "function" ? Object.is : K0, Gv = Object.prototype.hasOwnProperty;
  function el(n, a) {
    if (Gr(n, a))
      return !0;
    if (typeof n != "object" || n === null || typeof a != "object" || a === null)
      return !1;
    var o = Object.keys(n), l = Object.keys(a);
    if (o.length !== l.length)
      return !1;
    for (l = 0; l < o.length; l++)
      if (!Gv.call(a, o[l]) || !Gr(n[o[l]], a[o[l]]))
        return !1;
    return !0;
  }
  function Z0(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function J0(n, a) {
    var o = Z0(n);
    n = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (l = n + o.textContent.length, n <= a && l >= a)
          return { node: o, offset: a - n };
        n = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Z0(o);
    }
  }
  function Vc(n, a) {
    return n && a ? n === a ? !0 : n && n.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Vc(n, a.parentNode) : "contains" in n ? n.contains(a) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Es() {
    for (var n = window, a = zn(); a instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof a.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = a.contentWindow;
      else
        break;
      a = zn(n.document);
    }
    return a;
  }
  function fo(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  var ed = D && "documentMode" in document && 11 >= document.documentMode, eu = null, tl = null, po = null, Di = !1;
  function vo(n, a, o) {
    var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Di || eu == null || eu !== zn(l) || (l = eu, "selectionStart" in l && fo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), po && el(po, l) || (po = l, l = Rs(tl, "onSelect"), 0 < l.length && (a = new Ko("onSelect", "select", null, a, o), n.push({ event: a, listeners: l }), a.target = eu)));
  }
  tt(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), tt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), tt(lt, 2);
  for (var Wc = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), $c = 0; $c < Wc.length; $c++)
    je.set(Wc[$c], 0);
  B("onMouseEnter", ["mouseout", "mouseover"]), B("onMouseLeave", ["mouseout", "mouseover"]), B("onPointerEnter", ["pointerout", "pointerover"]), B("onPointerLeave", ["pointerout", "pointerover"]), y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xv = new Set("cancel close invalid load scroll toggle".split(" ").concat(tu));
  function qc(n, a, o) {
    var l = n.type || "unknown-event";
    n.currentTarget = o, Yr(l, a, void 0, n), n.currentTarget = null;
  }
  function Cs(n, a) {
    a = (a & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var l = n[o], f = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (a)
          for (var R = l.length - 1; 0 <= R; R--) {
            var L = l[R], G = L.instance, he = L.currentTarget;
            if (L = L.listener, G !== h && f.isPropagationStopped())
              break e;
            qc(f, L, he), h = G;
          }
        else
          for (R = 0; R < l.length; R++) {
            if (L = l[R], G = L.instance, he = L.currentTarget, L = L.listener, G !== h && f.isPropagationStopped())
              break e;
            qc(f, L, he), h = G;
          }
      }
    }
    if (Ln)
      throw n = uo, Ln = !1, uo = null, n;
  }
  function tn(n, a) {
    var o = id(a), l = n + "__bubble";
    o.has(l) || (Ss(a, n, 2, !1), o.add(l));
  }
  var bs = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(n) {
    n[bs] || (n[bs] = !0, F.forEach(function(a) {
      Xv.has(a) || Za(a, !1, n, null), Za(a, !0, n, null);
    }));
  }
  function Za(n, a, o, l) {
    var f = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, h = o;
    n === "selectionchange" && o.nodeType !== 9 && (h = o.ownerDocument);
    var R = id(h), L = n + "__" + (a ? "capture" : "bubble");
    R.has(L) || (a && (f |= 4), Ss(h, n, f, a), R.add(L));
  }
  function Ss(n, a, o, l) {
    var f = je.get(a);
    switch (f === void 0 ? 2 : f) {
      case 0:
        f = Ov;
        break;
      case 1:
        f = Qo;
        break;
      default:
        f = Qu;
    }
    o = f.bind(null, a, o, n), f = void 0, !Bt || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (f = !0), l ? f !== void 0 ? n.addEventListener(a, o, { capture: !0, passive: f }) : n.addEventListener(a, o, !0) : f !== void 0 ? n.addEventListener(a, o, { passive: f }) : n.addEventListener(a, o, !1);
  }
  function _s(n, a, o, l, f) {
    var h = l;
    if (!(a & 1) && !(a & 2) && l !== null)
      e:
        for (; ; ) {
          if (l === null)
            return;
          var R = l.tag;
          if (R === 3 || R === 4) {
            var L = l.stateNode.containerInfo;
            if (L === f || L.nodeType === 8 && L.parentNode === f)
              break;
            if (R === 4)
              for (R = l.return; R !== null; ) {
                var G = R.tag;
                if ((G === 3 || G === 4) && (G = R.stateNode.containerInfo, G === f || G.nodeType === 8 && G.parentNode === f))
                  return;
                R = R.return;
              }
            for (; L !== null; ) {
              if (R = mo(L), R === null)
                return;
              if (G = R.tag, G === 5 || G === 6) {
                l = h = R;
                continue e;
              }
              L = L.parentNode;
            }
          }
          l = l.return;
        }
    Rt(function() {
      var he = h, We = qr(o), ht = [];
      e: {
        var ke = xe.get(n);
        if (ke !== void 0) {
          var Ze = Ko, pt = n;
          switch (n) {
            case "keypress":
              if (Go(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ze = Lv;
              break;
            case "focusin":
              pt = "focus", Ze = yr;
              break;
            case "focusout":
              pt = "blur", Ze = yr;
              break;
            case "beforeblur":
            case "afterblur":
              Ze = yr;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ze = Ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ze = Qr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ze = Jo;
              break;
            case ps:
            case C:
            case ee:
              Ze = N0;
              break;
            case ve:
              Ze = U0;
              break;
            case "scroll":
              Ze = Nc;
              break;
            case "wheel":
              Ze = jv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ze = Nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ze = P0;
          }
          var ot = (a & 4) !== 0, ue = !ot && n === "scroll", te = ot ? ke !== null ? ke + "Capture" : null : ke;
          ot = [];
          for (var ie = he, ge; ie !== null; ) {
            ge = ie;
            var _e = ge.stateNode;
            if (ge.tag === 5 && _e !== null && (ge = _e, te !== null && (_e = Qt(ie, te), _e != null && ot.push(nl(ie, _e, ge)))), ue)
              break;
            ie = ie.return;
          }
          0 < ot.length && (ke = new Ze(ke, pt, null, o, We), ht.push({ event: ke, listeners: ot }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (ke = n === "mouseover" || n === "pointerover", Ze = n === "mouseout" || n === "pointerout", ke && !(a & 16) && (pt = o.relatedTarget || o.fromElement) && (mo(pt) || pt[gr]))
            break e;
          if ((Ze || ke) && (ke = We.window === We ? We : (ke = We.ownerDocument) ? ke.defaultView || ke.parentWindow : window, Ze ? (pt = o.relatedTarget || o.toElement, Ze = he, pt = pt ? mo(pt) : null, pt !== null && (ue = Un(pt), pt !== ue || pt.tag !== 5 && pt.tag !== 6) && (pt = null)) : (Ze = null, pt = he), Ze !== pt)) {
            if (ot = Ku, _e = "onMouseLeave", te = "onMouseEnter", ie = "mouse", (n === "pointerout" || n === "pointerover") && (ot = P0, _e = "onPointerLeave", te = "onPointerEnter", ie = "pointer"), ue = Ze == null ? ke : Er(Ze), ge = pt == null ? ke : Er(pt), ke = new ot(_e, ie + "leave", Ze, o, We), ke.target = ue, ke.relatedTarget = ge, _e = null, mo(We) === he && (ot = new ot(te, ie + "enter", pt, o, We), ot.target = ge, ot.relatedTarget = ue, _e = ot), ue = _e, Ze && pt)
              t: {
                for (ot = Ze, te = pt, ie = 0, ge = ot; ge; ge = nu(ge))
                  ie++;
                for (ge = 0, _e = te; _e; _e = nu(_e))
                  ge++;
                for (; 0 < ie - ge; )
                  ot = nu(ot), ie--;
                for (; 0 < ge - ie; )
                  te = nu(te), ge--;
                for (; ie--; ) {
                  if (ot === te || te !== null && ot === te.alternate)
                    break t;
                  ot = nu(ot), te = nu(te);
                }
                ot = null;
              }
            else
              ot = null;
            Ze !== null && td(ht, ke, Ze, ot, !1), pt !== null && ue !== null && td(ht, ue, pt, ot, !0);
          }
        }
        e: {
          if (ke = he ? Er(he) : window, Ze = ke.nodeName && ke.nodeName.toLowerCase(), Ze === "select" || Ze === "input" && ke.type === "file")
            var xt = qv;
          else if ($0(ke))
            if (Y0)
              xt = Qv;
            else {
              xt = X0;
              var Ye = Yv;
            }
          else
            (Ze = ke.nodeName) && Ze.toLowerCase() === "input" && (ke.type === "checkbox" || ke.type === "radio") && (xt = xr);
          if (xt && (xt = xt(n, he))) {
            gs(ht, xt, o, We);
            break e;
          }
          Ye && Ye(n, ke, he), n === "focusout" && (Ye = ke._wrapperState) && Ye.controlled && ke.type === "number" && Sn(ke, "number", ke.value);
        }
        switch (Ye = he ? Er(he) : window, n) {
          case "focusin":
            ($0(Ye) || Ye.contentEditable === "true") && (eu = Ye, tl = he, po = null);
            break;
          case "focusout":
            po = tl = eu = null;
            break;
          case "mousedown":
            Di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Di = !1, vo(ht, o, We);
            break;
          case "selectionchange":
            if (ed)
              break;
          case "keydown":
          case "keyup":
            vo(ht, o, We);
        }
        var mt;
        if (Lc)
          e: {
            switch (n) {
              case "compositionstart":
                var Et = "onCompositionStart";
                break e;
              case "compositionend":
                Et = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Et = "onCompositionUpdate";
                break e;
            }
            Et = void 0;
          }
        else
          co ? Uc(n, o) && (Et = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Et = "onCompositionStart");
        Et && (H0 && o.locale !== "ko" && (co || Et !== "onCompositionStart" ? Et === "onCompositionEnd" && co && (mt = Fc()) : (Ri = We, Bc = "value" in Ri ? Ri.value : Ri.textContent, co = !0)), Ye = Rs(he, Et), 0 < Ye.length && (Et = new M0(Et, n, null, o, We), ht.push({ event: Et, listeners: Ye }), mt ? Et.data = mt : (mt = W0(o), mt !== null && (Et.data = mt)))), (mt = Iv ? Vv(n, o) : Wv(n, o)) && (he = Rs(he, "onBeforeInput"), 0 < he.length && (We = new M0(
          "onBeforeInput",
          "beforeinput",
          null,
          o,
          We
        ), ht.push({ event: We, listeners: he }), We.data = mt));
      }
      Cs(ht, a);
    });
  }
  function nl(n, a, o) {
    return { instance: n, listener: a, currentTarget: o };
  }
  function Rs(n, a) {
    for (var o = a + "Capture", l = []; n !== null; ) {
      var f = n, h = f.stateNode;
      f.tag === 5 && h !== null && (f = h, h = Qt(n, o), h != null && l.unshift(nl(n, h, f)), h = Qt(n, a), h != null && l.push(nl(n, h, f))), n = n.return;
    }
    return l;
  }
  function nu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, a, o, l, f) {
    for (var h = a._reactName, R = []; o !== null && o !== l; ) {
      var L = o, G = L.alternate, he = L.stateNode;
      if (G !== null && G === l)
        break;
      L.tag === 5 && he !== null && (L = he, f ? (G = Qt(o, h), G != null && R.unshift(nl(o, G, L))) : f || (G = Qt(o, h), G != null && R.push(nl(o, G, L)))), o = o.return;
    }
    R.length !== 0 && n.push({ event: a, listeners: R });
  }
  function Ts() {
  }
  var Qc = null, Gc = null;
  function ru(n, a) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!a.autoFocus;
    }
    return !1;
  }
  function rl(n, a) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var au = typeof setTimeout == "function" ? setTimeout : void 0, nd = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function ws(n) {
    n.nodeType === 1 ? n.textContent = "" : n.nodeType === 9 && (n = n.body, n != null && (n.textContent = ""));
  }
  function Ai(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3)
        break;
    }
    return n;
  }
  function rd(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (a === 0)
            return n;
          a--;
        } else
          o === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ki = 0;
  function Ds(n) {
    return { $$typeof: Be, toString: n, valueOf: n };
  }
  var ho = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + ho, As = "__reactProps$" + ho, gr = "__reactContainer$" + ho, ad = "__reactEvents$" + ho;
  function mo(n) {
    var a = n[Aa];
    if (a)
      return a;
    for (var o = n.parentNode; o; ) {
      if (a = o[gr] || o[Aa]) {
        if (o = a.alternate, a.child !== null || o !== null && o.child !== null)
          for (n = rd(n); n !== null; ) {
            if (o = n[Aa])
              return o;
            n = rd(n);
          }
        return a;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Hr(n) {
    return n = n[Aa] || n[gr], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Er(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function Ja(n) {
    return n[As] || null;
  }
  function id(n) {
    var a = n[ad];
    return a === void 0 && (a = n[ad] = /* @__PURE__ */ new Set()), a;
  }
  var Xc = [], Gt = -1;
  function Cr(n) {
    return { current: n };
  }
  function yt(n) {
    0 > Gt || (n.current = Xc[Gt], Xc[Gt] = null, Gt--);
  }
  function st(n, a) {
    Gt++, Xc[Gt] = n.current, n.current = a;
  }
  var Bi = {}, ln = Cr(Bi), er = Cr(!1), Fi = Bi;
  function $t(n, a) {
    var o = n.type.contextTypes;
    if (!o)
      return Bi;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === a)
      return l.__reactInternalMemoizedMaskedChildContext;
    var f = {}, h;
    for (h in o)
      f[h] = a[h];
    return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = a, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function tr(n) {
    return n = n.childContextTypes, n != null;
  }
  function ka() {
    yt(er), yt(ln);
  }
  function iu(n, a, o) {
    if (ln.current !== Bi)
      throw Error(p(168));
    st(ln, a), st(er, o);
  }
  function ou(n, a, o) {
    var l = n.stateNode;
    if (n = a.childContextTypes, typeof l.getChildContext != "function")
      return o;
    l = l.getChildContext();
    for (var f in l)
      if (!(f in n))
        throw Error(p(108, dt(a) || "Unknown", f));
    return g({}, o, l);
  }
  function Xr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Bi, Fi = ln.current, st(ln, n), st(er, er.current), !0;
  }
  function od(n, a, o) {
    var l = n.stateNode;
    if (!l)
      throw Error(p(169));
    o ? (n = ou(n, a, Fi), l.__reactInternalMemoizedMergedChildContext = n, yt(er), yt(ln), st(ln, n)) : yt(er), st(er, o);
  }
  var Kc = null, yo = null, al = x.unstable_runWithPriority, ca = x.unstable_scheduleCallback, il = x.unstable_cancelCallback, Kv = x.unstable_shouldYield, Oi = x.unstable_requestPaint, ks = x.unstable_now, ud = x.unstable_getCurrentPriorityLevel, Bs = x.unstable_ImmediatePriority, ld = x.unstable_UserBlockingPriority, Zc = x.unstable_NormalPriority, Jc = x.unstable_LowPriority, ef = x.unstable_IdlePriority, tf = {}, sd = Oi !== void 0 ? Oi : function() {
  }, Ba = null, Fs = null, ol = !1, cd = ks(), nr = 1e4 > cd ? ks : function() {
    return ks() - cd;
  };
  function uu() {
    switch (ud()) {
      case Bs:
        return 99;
      case ld:
        return 98;
      case Zc:
        return 97;
      case Jc:
        return 96;
      case ef:
        return 95;
      default:
        throw Error(p(332));
    }
  }
  function nf(n) {
    switch (n) {
      case 99:
        return Bs;
      case 98:
        return ld;
      case 97:
        return Zc;
      case 96:
        return Jc;
      case 95:
        return ef;
      default:
        throw Error(p(332));
    }
  }
  function xo(n, a) {
    return n = nf(n), al(n, a);
  }
  function go(n, a, o) {
    return n = nf(n), ca(n, a, o);
  }
  function jn() {
    if (Fs !== null) {
      var n = Fs;
      Fs = null, il(n);
    }
    ei();
  }
  function ei() {
    if (!ol && Ba !== null) {
      ol = !0;
      var n = 0;
      try {
        var a = Ba;
        xo(99, function() {
          for (; n < a.length; n++) {
            var o = a[n];
            do
              o = o(!0);
            while (o !== null);
          }
        }), Ba = null;
      } catch (o) {
        throw Ba !== null && (Ba = Ba.slice(n + 1)), ca(Bs, jn), o;
      } finally {
        ol = !1;
      }
    }
  }
  var Ni = T.ReactCurrentBatchConfig;
  function Hn(n, a) {
    if (n && n.defaultProps) {
      a = g({}, a), n = n.defaultProps;
      for (var o in n)
        a[o] === void 0 && (a[o] = n[o]);
      return a;
    }
    return a;
  }
  var Mi = Cr(null), zi = null, Fa = null, Os = null;
  function rf() {
    Os = Fa = zi = null;
  }
  function Ns(n) {
    var a = Mi.current;
    yt(Mi), n.type._context._currentValue = a;
  }
  function af(n, a) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & a) === a) {
        if (o === null || (o.childLanes & a) === a)
          break;
        o.childLanes |= a;
      } else
        n.childLanes |= a, o !== null && (o.childLanes |= a);
      n = n.return;
    }
  }
  function Eo(n, a) {
    zi = n, Os = Fa = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & a && (Zr = !0), n.firstContext = null);
  }
  function Ir(n, a) {
    if (Os !== n && a !== !1 && a !== 0)
      if ((typeof a != "number" || a === 1073741823) && (Os = n, a = 1073741823), a = { context: n, observedBits: a, next: null }, Fa === null) {
        if (zi === null)
          throw Error(p(308));
        Fa = a, zi.dependencies = { lanes: 0, firstContext: a, responders: null };
      } else
        Fa = Fa.next = a;
    return n._currentValue;
  }
  var Kr = !1;
  function of(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function fd(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function fa(n, a) {
    return { eventTime: n, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function ti(n, a) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var o = n.pending;
      o === null ? a.next = a : (a.next = o.next, o.next = a), n.pending = a;
    }
  }
  function dd(n, a) {
    var o = n.updateQueue, l = n.alternate;
    if (l !== null && (l = l.updateQueue, o === l)) {
      var f = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var R = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? f = h = R : h = h.next = R, o = o.next;
        } while (o !== null);
        h === null ? f = h = a : h = h.next = a;
      } else
        f = h = a;
      o = { baseState: l.baseState, firstBaseUpdate: f, lastBaseUpdate: h, shared: l.shared, effects: l.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = a : n.next = a, o.lastBaseUpdate = a;
  }
  function ni(n, a, o, l) {
    var f = n.updateQueue;
    Kr = !1;
    var h = f.firstBaseUpdate, R = f.lastBaseUpdate, L = f.shared.pending;
    if (L !== null) {
      f.shared.pending = null;
      var G = L, he = G.next;
      G.next = null, R === null ? h = he : R.next = he, R = G;
      var We = n.alternate;
      if (We !== null) {
        We = We.updateQueue;
        var ht = We.lastBaseUpdate;
        ht !== R && (ht === null ? We.firstBaseUpdate = he : ht.next = he, We.lastBaseUpdate = G);
      }
    }
    if (h !== null) {
      ht = f.baseState, R = 0, We = he = G = null;
      do {
        L = h.lane;
        var ke = h.eventTime;
        if ((l & L) === L) {
          We !== null && (We = We.next = {
            eventTime: ke,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          e: {
            var Ze = n, pt = h;
            switch (L = a, ke = o, pt.tag) {
              case 1:
                if (Ze = pt.payload, typeof Ze == "function") {
                  ht = Ze.call(ke, ht, L);
                  break e;
                }
                ht = Ze;
                break e;
              case 3:
                Ze.flags = Ze.flags & -4097 | 64;
              case 0:
                if (Ze = pt.payload, L = typeof Ze == "function" ? Ze.call(ke, ht, L) : Ze, L == null)
                  break e;
                ht = g({}, ht, L);
                break e;
              case 2:
                Kr = !0;
            }
          }
          h.callback !== null && (n.flags |= 32, L = f.effects, L === null ? f.effects = [h] : L.push(h));
        } else
          ke = { eventTime: ke, lane: L, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, We === null ? (he = We = ke, G = ht) : We = We.next = ke, R |= L;
        if (h = h.next, h === null) {
          if (L = f.shared.pending, L === null)
            break;
          h = L.next, L.next = null, f.lastBaseUpdate = L, f.shared.pending = null;
        }
      } while (!0);
      We === null && (G = ht), f.baseState = G, f.firstBaseUpdate = he, f.lastBaseUpdate = We, Do |= R, n.lanes = R, n.memoizedState = ht;
    }
  }
  function uf(n, a, o) {
    if (n = a.effects, a.effects = null, n !== null)
      for (a = 0; a < n.length; a++) {
        var l = n[a], f = l.callback;
        if (f !== null) {
          if (l.callback = null, l = o, typeof f != "function")
            throw Error(p(191, f));
          f.call(l);
        }
      }
  }
  var Ms = new c.Component().refs;
  function ul(n, a, o, l) {
    a = n.memoizedState, o = o(l, a), o = o == null ? a : g({}, a, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var lu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Un(n) === n : !1;
  }, enqueueSetState: function(n, a, o) {
    n = n._reactInternals;
    var l = Vr(), f = Ua(n), h = fa(l, f);
    h.payload = a, o != null && (h.callback = o), ti(n, h), Wi(n, f, l);
  }, enqueueReplaceState: function(n, a, o) {
    n = n._reactInternals;
    var l = Vr(), f = Ua(n), h = fa(l, f);
    h.tag = 1, h.payload = a, o != null && (h.callback = o), ti(n, h), Wi(n, f, l);
  }, enqueueForceUpdate: function(n, a) {
    n = n._reactInternals;
    var o = Vr(), l = Ua(n), f = fa(o, l);
    f.tag = 2, a != null && (f.callback = a), ti(n, f), Wi(n, l, o);
  } };
  function ll(n, a, o, l, f, h, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, h, R) : a.prototype && a.prototype.isPureReactComponent ? !el(o, l) || !el(f, h) : !0;
  }
  function Co(n, a, o) {
    var l = !1, f = Bi, h = a.contextType;
    return typeof h == "object" && h !== null ? h = Ir(h) : (f = tr(a) ? Fi : ln.current, l = a.contextTypes, h = (l = l != null) ? $t(n, f) : Bi), a = new a(o, h), n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = lu, n.stateNode = a, a._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = h), a;
  }
  function zs(n, a, o, l) {
    n = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(o, l), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(o, l), a.state !== n && lu.enqueueReplaceState(a, a.state, null);
  }
  function Ps(n, a, o, l) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = Ms, of(n);
    var h = a.contextType;
    typeof h == "object" && h !== null ? f.context = Ir(h) : (h = tr(a) ? Fi : ln.current, f.context = $t(n, h)), ni(n, o, f, l), f.state = n.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (ul(n, a, h, o), f.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (a = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), a !== f.state && lu.enqueueReplaceState(f, f.state, null), ni(n, o, f, l), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4);
  }
  var bo = Array.isArray;
  function su(n, a, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(p(309));
          var l = o.stateNode;
        }
        if (!l)
          throw Error(p(147, n));
        var f = "" + n;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === f ? a.ref : (a = function(h) {
          var R = l.refs;
          R === Ms && (R = l.refs = {}), h === null ? delete R[f] : R[f] = h;
        }, a._stringRef = f, a);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!o._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function sl(n, a) {
    if (n.type !== "textarea")
      throw Error(p(31, Object.prototype.toString.call(a) === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : a));
  }
  function lf(n) {
    function a(ue, te) {
      if (n) {
        var ie = ue.lastEffect;
        ie !== null ? (ie.nextEffect = te, ue.lastEffect = te) : ue.firstEffect = ue.lastEffect = te, te.nextEffect = null, te.flags = 8;
      }
    }
    function o(ue, te) {
      if (!n)
        return null;
      for (; te !== null; )
        a(ue, te), te = te.sibling;
      return null;
    }
    function l(ue, te) {
      for (ue = /* @__PURE__ */ new Map(); te !== null; )
        te.key !== null ? ue.set(te.key, te) : ue.set(te.index, te), te = te.sibling;
      return ue;
    }
    function f(ue, te) {
      return ue = Qi(ue, te), ue.index = 0, ue.sibling = null, ue;
    }
    function h(ue, te, ie) {
      return ue.index = ie, n ? (ie = ue.alternate, ie !== null ? (ie = ie.index, ie < te ? (ue.flags = 2, te) : ie) : (ue.flags = 2, te)) : te;
    }
    function R(ue) {
      return n && ue.alternate === null && (ue.flags = 2), ue;
    }
    function L(ue, te, ie, ge) {
      return te === null || te.tag !== 6 ? (te = Pf(ie, ue.mode, ge), te.return = ue, te) : (te = f(te, ie), te.return = ue, te);
    }
    function G(ue, te, ie, ge) {
      return te !== null && te.elementType === ie.type ? (ge = f(te, ie.props), ge.ref = su(ue, te, ie), ge.return = ue, ge) : (ge = Fl(ie.type, ie.key, ie.props, null, ue.mode, ge), ge.ref = su(ue, te, ie), ge.return = ue, ge);
    }
    function he(ue, te, ie, ge) {
      return te === null || te.tag !== 4 || te.stateNode.containerInfo !== ie.containerInfo || te.stateNode.implementation !== ie.implementation ? (te = Lf(ie, ue.mode, ge), te.return = ue, te) : (te = f(te, ie.children || []), te.return = ue, te);
    }
    function We(ue, te, ie, ge, _e) {
      return te === null || te.tag !== 7 ? (te = ja(ie, ue.mode, ge, _e), te.return = ue, te) : (te = f(te, ie), te.return = ue, te);
    }
    function ht(ue, te, ie) {
      if (typeof te == "string" || typeof te == "number")
        return te = Pf("" + te, ue.mode, ie), te.return = ue, te;
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case V:
            return ie = Fl(te.type, te.key, te.props, null, ue.mode, ie), ie.ref = su(ue, null, te), ie.return = ue, ie;
          case Y:
            return te = Lf(te, ue.mode, ie), te.return = ue, te;
        }
        if (bo(te) || me(te))
          return te = ja(
            te,
            ue.mode,
            ie,
            null
          ), te.return = ue, te;
        sl(ue, te);
      }
      return null;
    }
    function ke(ue, te, ie, ge) {
      var _e = te !== null ? te.key : null;
      if (typeof ie == "string" || typeof ie == "number")
        return _e !== null ? null : L(ue, te, "" + ie, ge);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case V:
            return ie.key === _e ? ie.type === ne ? We(ue, te, ie.props.children, ge, _e) : G(ue, te, ie, ge) : null;
          case Y:
            return ie.key === _e ? he(ue, te, ie, ge) : null;
        }
        if (bo(ie) || me(ie))
          return _e !== null ? null : We(ue, te, ie, ge, null);
        sl(ue, ie);
      }
      return null;
    }
    function Ze(ue, te, ie, ge, _e) {
      if (typeof ge == "string" || typeof ge == "number")
        return ue = ue.get(ie) || null, L(te, ue, "" + ge, _e);
      if (typeof ge == "object" && ge !== null) {
        switch (ge.$$typeof) {
          case V:
            return ue = ue.get(ge.key === null ? ie : ge.key) || null, ge.type === ne ? We(te, ue, ge.props.children, _e, ge.key) : G(te, ue, ge, _e);
          case Y:
            return ue = ue.get(ge.key === null ? ie : ge.key) || null, he(te, ue, ge, _e);
        }
        if (bo(ge) || me(ge))
          return ue = ue.get(ie) || null, We(te, ue, ge, _e, null);
        sl(te, ge);
      }
      return null;
    }
    function pt(ue, te, ie, ge) {
      for (var _e = null, xt = null, Ye = te, mt = te = 0, Et = null; Ye !== null && mt < ie.length; mt++) {
        Ye.index > mt ? (Et = Ye, Ye = null) : Et = Ye.sibling;
        var gt = ke(ue, Ye, ie[mt], ge);
        if (gt === null) {
          Ye === null && (Ye = Et);
          break;
        }
        n && Ye && gt.alternate === null && a(ue, Ye), te = h(gt, te, mt), xt === null ? _e = gt : xt.sibling = gt, xt = gt, Ye = Et;
      }
      if (mt === ie.length)
        return o(ue, Ye), _e;
      if (Ye === null) {
        for (; mt < ie.length; mt++)
          Ye = ht(ue, ie[mt], ge), Ye !== null && (te = h(Ye, te, mt), xt === null ? _e = Ye : xt.sibling = Ye, xt = Ye);
        return _e;
      }
      for (Ye = l(ue, Ye); mt < ie.length; mt++)
        Et = Ze(Ye, ue, mt, ie[mt], ge), Et !== null && (n && Et.alternate !== null && Ye.delete(Et.key === null ? mt : Et.key), te = h(Et, te, mt), xt === null ? _e = Et : xt.sibling = Et, xt = Et);
      return n && Ye.forEach(function(Gi) {
        return a(ue, Gi);
      }), _e;
    }
    function ot(ue, te, ie, ge) {
      var _e = me(ie);
      if (typeof _e != "function")
        throw Error(p(150));
      if (ie = _e.call(ie), ie == null)
        throw Error(p(151));
      for (var xt = _e = null, Ye = te, mt = te = 0, Et = null, gt = ie.next(); Ye !== null && !gt.done; mt++, gt = ie.next()) {
        Ye.index > mt ? (Et = Ye, Ye = null) : Et = Ye.sibling;
        var Gi = ke(ue, Ye, gt.value, ge);
        if (Gi === null) {
          Ye === null && (Ye = Et);
          break;
        }
        n && Ye && Gi.alternate === null && a(ue, Ye), te = h(Gi, te, mt), xt === null ? _e = Gi : xt.sibling = Gi, xt = Gi, Ye = Et;
      }
      if (gt.done)
        return o(ue, Ye), _e;
      if (Ye === null) {
        for (; !gt.done; mt++, gt = ie.next())
          gt = ht(ue, gt.value, ge), gt !== null && (te = h(gt, te, mt), xt === null ? _e = gt : xt.sibling = gt, xt = gt);
        return _e;
      }
      for (Ye = l(ue, Ye); !gt.done; mt++, gt = ie.next())
        gt = Ze(Ye, ue, mt, gt.value, ge), gt !== null && (n && gt.alternate !== null && Ye.delete(gt.key === null ? mt : gt.key), te = h(gt, te, mt), xt === null ? _e = gt : xt.sibling = gt, xt = gt);
      return n && Ye.forEach(function(xh) {
        return a(ue, xh);
      }), _e;
    }
    return function(ue, te, ie, ge) {
      var _e = typeof ie == "object" && ie !== null && ie.type === ne && ie.key === null;
      _e && (ie = ie.props.children);
      var xt = typeof ie == "object" && ie !== null;
      if (xt)
        switch (ie.$$typeof) {
          case V:
            e: {
              for (xt = ie.key, _e = te; _e !== null; ) {
                if (_e.key === xt) {
                  switch (_e.tag) {
                    case 7:
                      if (ie.type === ne) {
                        o(ue, _e.sibling), te = f(_e, ie.props.children), te.return = ue, ue = te;
                        break e;
                      }
                      break;
                    default:
                      if (_e.elementType === ie.type) {
                        o(ue, _e.sibling), te = f(_e, ie.props), te.ref = su(ue, _e, ie), te.return = ue, ue = te;
                        break e;
                      }
                  }
                  o(ue, _e);
                  break;
                } else
                  a(ue, _e);
                _e = _e.sibling;
              }
              ie.type === ne ? (te = ja(ie.props.children, ue.mode, ge, ie.key), te.return = ue, ue = te) : (ge = Fl(ie.type, ie.key, ie.props, null, ue.mode, ge), ge.ref = su(ue, te, ie), ge.return = ue, ue = ge);
            }
            return R(ue);
          case Y:
            e: {
              for (_e = ie.key; te !== null; ) {
                if (te.key === _e)
                  if (te.tag === 4 && te.stateNode.containerInfo === ie.containerInfo && te.stateNode.implementation === ie.implementation) {
                    o(ue, te.sibling), te = f(te, ie.children || []), te.return = ue, ue = te;
                    break e;
                  } else {
                    o(ue, te);
                    break;
                  }
                else
                  a(ue, te);
                te = te.sibling;
              }
              te = Lf(ie, ue.mode, ge), te.return = ue, ue = te;
            }
            return R(ue);
        }
      if (typeof ie == "string" || typeof ie == "number")
        return ie = "" + ie, te !== null && te.tag === 6 ? (o(ue, te.sibling), te = f(te, ie), te.return = ue, ue = te) : (o(ue, te), te = Pf(ie, ue.mode, ge), te.return = ue, ue = te), R(ue);
      if (bo(ie))
        return pt(ue, te, ie, ge);
      if (me(ie))
        return ot(ue, te, ie, ge);
      if (xt && sl(ue, ie), typeof ie > "u" && !_e)
        switch (ue.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(p(152, dt(ue.type) || "Component"));
        }
      return o(ue, te);
    };
  }
  var cl = lf(!0), sf = lf(!1), So = {}, Oa = Cr(So), fl = Cr(So), dl = Cr(So);
  function _o(n) {
    if (n === So)
      throw Error(p(174));
    return n;
  }
  function pl(n, a) {
    switch (st(dl, a), st(fl, n), st(Oa, So), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : it(null, "");
        break;
      default:
        n = n === 8 ? a.parentNode : a, a = n.namespaceURI || null, n = n.tagName, a = it(a, n);
    }
    yt(Oa), st(Oa, a);
  }
  function cu() {
    yt(Oa), yt(fl), yt(dl);
  }
  function pd(n) {
    _o(dl.current);
    var a = _o(Oa.current), o = it(a, n.type);
    a !== o && (st(fl, n), st(Oa, o));
  }
  function cf(n) {
    fl.current === n && (yt(Oa), yt(fl));
  }
  var yn = Cr(0);
  function vl(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var o = a.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 64)
          return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === n)
        break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n)
          return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Na = null, ri = null, Ma = !1;
  function ff(n, a) {
    var o = ea(5, null, null, 0);
    o.elementType = "DELETED", o.type = "DELETED", o.stateNode = a, o.return = n, o.flags = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = o, n.lastEffect = o) : n.firstEffect = n.lastEffect = o;
  }
  function vd(n, a) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return a = a.nodeType !== 1 || o.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (n.stateNode = a, !0) : !1;
      case 6:
        return a = n.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (n.stateNode = a, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function Pi(n) {
    if (Ma) {
      var a = ri;
      if (a) {
        var o = a;
        if (!vd(n, a)) {
          if (a = Ai(o.nextSibling), !a || !vd(n, a)) {
            n.flags = n.flags & -1025 | 2, Ma = !1, Na = n;
            return;
          }
          ff(Na, o);
        }
        Na = n, ri = Ai(a.firstChild);
      } else
        n.flags = n.flags & -1025 | 2, Ma = !1, Na = n;
    }
  }
  function hl(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Na = n;
  }
  function ml(n) {
    if (n !== Na)
      return !1;
    if (!Ma)
      return hl(n), Ma = !0, !1;
    var a = n.type;
    if (n.tag !== 5 || a !== "head" && a !== "body" && !rl(a, n.memoizedProps))
      for (a = ri; a; )
        ff(n, a), a = Ai(a.nextSibling);
    if (hl(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (a === 0) {
                ri = Ai(n.nextSibling);
                break e;
              }
              a--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || a++;
          }
          n = n.nextSibling;
        }
        ri = null;
      }
    } else
      ri = Na ? Ai(n.stateNode.nextSibling) : null;
    return !0;
  }
  function fu() {
    ri = Na = null, Ma = !1;
  }
  var Ro = [];
  function Li() {
    for (var n = 0; n < Ro.length; n++)
      Ro[n]._workInProgressVersionPrimary = null;
    Ro.length = 0;
  }
  var du = T.ReactCurrentDispatcher, In = T.ReactCurrentBatchConfig, pu = 0, sn = null, Vn = null, Wn = null, yl = !1, Ui = !1;
  function br() {
    throw Error(p(321));
  }
  function ai(n, a) {
    if (a === null)
      return !1;
    for (var o = 0; o < a.length && o < n.length; o++)
      if (!Gr(n[o], a[o]))
        return !1;
    return !0;
  }
  function df(n, a, o, l, f, h) {
    if (pu = h, sn = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, du.current = n === null || n.memoizedState === null ? El : Jv, n = o(l, f), Ui) {
      h = 0;
      do {
        if (Ui = !1, !(25 > h))
          throw Error(p(301));
        h += 1, Wn = Vn = null, a.updateQueue = null, du.current = eh, n = o(l, f);
      } while (Ui);
    }
    if (du.current = js, a = Vn !== null && Vn.next !== null, pu = 0, Wn = Vn = sn = null, yl = !1, a)
      throw Error(p(300));
    return n;
  }
  function Ce() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Wn === null ? sn.memoizedState = Wn = n : Wn = Wn.next = n, Wn;
  }
  function Tn() {
    if (Vn === null) {
      var n = sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Vn.next;
    var a = Wn === null ? sn.memoizedState : Wn.next;
    if (a !== null)
      Wn = a, Vn = n;
    else {
      if (n === null)
        throw Error(p(310));
      Vn = n, n = { memoizedState: Vn.memoizedState, baseState: Vn.baseState, baseQueue: Vn.baseQueue, queue: Vn.queue, next: null }, Wn === null ? sn.memoizedState = Wn = n : Wn = Wn.next = n;
    }
    return Wn;
  }
  function Dt(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function ii(n) {
    var a = Tn(), o = a.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var l = Vn, f = l.baseQueue, h = o.pending;
    if (h !== null) {
      if (f !== null) {
        var R = f.next;
        f.next = h.next, h.next = R;
      }
      l.baseQueue = f = h, o.pending = null;
    }
    if (f !== null) {
      f = f.next, l = l.baseState;
      var L = R = h = null, G = f;
      do {
        var he = G.lane;
        if ((pu & he) === he)
          L !== null && (L = L.next = { lane: 0, action: G.action, eagerReducer: G.eagerReducer, eagerState: G.eagerState, next: null }), l = G.eagerReducer === n ? G.eagerState : n(l, G.action);
        else {
          var We = {
            lane: he,
            action: G.action,
            eagerReducer: G.eagerReducer,
            eagerState: G.eagerState,
            next: null
          };
          L === null ? (R = L = We, h = l) : L = L.next = We, sn.lanes |= he, Do |= he;
        }
        G = G.next;
      } while (G !== null && G !== f);
      L === null ? h = l : L.next = R, Gr(l, a.memoizedState) || (Zr = !0), a.memoizedState = l, a.baseState = h, a.baseQueue = L, o.lastRenderedState = l;
    }
    return [a.memoizedState, o.dispatch];
  }
  function To(n) {
    var a = Tn(), o = a.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var l = o.dispatch, f = o.pending, h = a.memoizedState;
    if (f !== null) {
      o.pending = null;
      var R = f = f.next;
      do
        h = n(h, R.action), R = R.next;
      while (R !== f);
      Gr(h, a.memoizedState) || (Zr = !0), a.memoizedState = h, a.baseQueue === null && (a.baseState = h), o.lastRenderedState = h;
    }
    return [h, l];
  }
  function xl(n, a, o) {
    var l = a._getVersion;
    l = l(a._source);
    var f = a._workInProgressVersionPrimary;
    if (f !== null ? n = f === l : (n = n.mutableReadLanes, (n = (pu & n) === n) && (a._workInProgressVersionPrimary = l, Ro.push(a))), n)
      return o(a._source);
    throw Ro.push(a), Error(p(350));
  }
  function pf(n, a, o, l) {
    var f = Sr;
    if (f === null)
      throw Error(p(349));
    var h = a._getVersion, R = h(a._source), L = du.current, G = L.useState(function() {
      return xl(f, a, o);
    }), he = G[1], We = G[0];
    G = Wn;
    var ht = n.memoizedState, ke = ht.refs, Ze = ke.getSnapshot, pt = ht.source;
    ht = ht.subscribe;
    var ot = sn;
    return n.memoizedState = { refs: ke, source: a, subscribe: l }, L.useEffect(function() {
      ke.getSnapshot = o, ke.setSnapshot = he;
      var ue = h(a._source);
      if (!Gr(R, ue)) {
        ue = o(a._source), Gr(We, ue) || (he(ue), ue = Ua(ot), f.mutableReadLanes |= ue & f.pendingLanes), ue = f.mutableReadLanes, f.entangledLanes |= ue;
        for (var te = f.entanglements, ie = ue; 0 < ie; ) {
          var ge = 31 - Da(ie), _e = 1 << ge;
          te[ge] |= ue, ie &= ~_e;
        }
      }
    }, [o, a, l]), L.useEffect(function() {
      return l(a._source, function() {
        var ue = ke.getSnapshot, te = ke.setSnapshot;
        try {
          te(ue(a._source));
          var ie = Ua(ot);
          f.mutableReadLanes |= ie & f.pendingLanes;
        } catch (ge) {
          te(function() {
            throw ge;
          });
        }
      });
    }, [a, l]), Gr(Ze, o) && Gr(pt, a) && Gr(ht, l) || (n = { pending: null, dispatch: null, lastRenderedReducer: Dt, lastRenderedState: We }, n.dispatch = he = yf.bind(null, sn, n), G.queue = n, G.baseQueue = null, We = xl(f, a, o), G.memoizedState = G.baseState = We), We;
  }
  function vf(n, a, o) {
    var l = Tn();
    return pf(l, n, a, o);
  }
  function vu(n) {
    var a = Ce();
    return typeof n == "function" && (n = n()), a.memoizedState = a.baseState = n, n = a.queue = { pending: null, dispatch: null, lastRenderedReducer: Dt, lastRenderedState: n }, n = n.dispatch = yf.bind(null, sn, n), [a.memoizedState, n];
  }
  function hu(n, a, o, l) {
    return n = { tag: n, create: a, destroy: o, deps: l, next: null }, a = sn.updateQueue, a === null ? (a = { lastEffect: null }, sn.updateQueue = a, a.lastEffect = n.next = n) : (o = a.lastEffect, o === null ? a.lastEffect = n.next = n : (l = o.next, o.next = n, n.next = l, a.lastEffect = n)), n;
  }
  function hf(n) {
    var a = Ce();
    return n = { current: n }, a.memoizedState = n;
  }
  function oi() {
    return Tn().memoizedState;
  }
  function mu(n, a, o, l) {
    var f = Ce();
    sn.flags |= n, f.memoizedState = hu(1 | a, o, void 0, l === void 0 ? null : l);
  }
  function ji(n, a, o, l) {
    var f = Tn();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (Vn !== null) {
      var R = Vn.memoizedState;
      if (h = R.destroy, l !== null && ai(l, R.deps)) {
        hu(a, o, h, l);
        return;
      }
    }
    sn.flags |= n, f.memoizedState = hu(1 | a, o, h, l);
  }
  function Ls(n, a) {
    return mu(516, 4, n, a);
  }
  function gl(n, a) {
    return ji(516, 4, n, a);
  }
  function mf(n, a) {
    return ji(4, 2, n, a);
  }
  function Us(n, a) {
    if (typeof a == "function")
      return n = n(), a(n), function() {
        a(null);
      };
    if (a != null)
      return n = n(), a.current = n, function() {
        a.current = null;
      };
  }
  function da(n, a, o) {
    return o = o != null ? o.concat([n]) : null, ji(4, 2, Us.bind(null, a, n), o);
  }
  function cn() {
  }
  function Zv(n, a) {
    var o = Tn();
    a = a === void 0 ? null : a;
    var l = o.memoizedState;
    return l !== null && a !== null && ai(a, l[1]) ? l[0] : (o.memoizedState = [n, a], n);
  }
  function Jt(n, a) {
    var o = Tn();
    a = a === void 0 ? null : a;
    var l = o.memoizedState;
    return l !== null && a !== null && ai(a, l[1]) ? l[0] : (n = n(), o.memoizedState = [n, a], n);
  }
  function yu(n, a) {
    var o = uu();
    xo(98 > o ? 98 : o, function() {
      n(!0);
    }), xo(97 < o ? 97 : o, function() {
      var l = In.transition;
      In.transition = 1;
      try {
        n(!1), a();
      } finally {
        In.transition = l;
      }
    });
  }
  function yf(n, a, o) {
    var l = Vr(), f = Ua(n), h = { lane: f, action: o, eagerReducer: null, eagerState: null, next: null }, R = a.pending;
    if (R === null ? h.next = h : (h.next = R.next, R.next = h), a.pending = h, R = n.alternate, n === sn || R !== null && R === sn)
      Ui = yl = !0;
    else {
      if (n.lanes === 0 && (R === null || R.lanes === 0) && (R = a.lastRenderedReducer, R !== null))
        try {
          var L = a.lastRenderedState, G = R(L, o);
          if (h.eagerReducer = R, h.eagerState = G, Gr(G, L))
            return;
        } catch {
        } finally {
        }
      Wi(n, f, l);
    }
  }
  var js = { readContext: Ir, useCallback: br, useContext: br, useEffect: br, useImperativeHandle: br, useLayoutEffect: br, useMemo: br, useReducer: br, useRef: br, useState: br, useDebugValue: br, useDeferredValue: br, useTransition: br, useMutableSource: br, useOpaqueIdentifier: br, unstable_isNewReconciler: !1 }, El = { readContext: Ir, useCallback: function(n, a) {
    return Ce().memoizedState = [n, a === void 0 ? null : a], n;
  }, useContext: Ir, useEffect: Ls, useImperativeHandle: function(n, a, o) {
    return o = o != null ? o.concat([n]) : null, mu(4, 2, Us.bind(
      null,
      a,
      n
    ), o);
  }, useLayoutEffect: function(n, a) {
    return mu(4, 2, n, a);
  }, useMemo: function(n, a) {
    var o = Ce();
    return a = a === void 0 ? null : a, n = n(), o.memoizedState = [n, a], n;
  }, useReducer: function(n, a, o) {
    var l = Ce();
    return a = o !== void 0 ? o(a) : a, l.memoizedState = l.baseState = a, n = l.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: a }, n = n.dispatch = yf.bind(null, sn, n), [l.memoizedState, n];
  }, useRef: hf, useState: vu, useDebugValue: cn, useDeferredValue: function(n) {
    var a = vu(n), o = a[0], l = a[1];
    return Ls(function() {
      var f = In.transition;
      In.transition = 1;
      try {
        l(n);
      } finally {
        In.transition = f;
      }
    }, [n]), o;
  }, useTransition: function() {
    var n = vu(!1), a = n[0];
    return n = yu.bind(null, n[1]), hf(n), [n, a];
  }, useMutableSource: function(n, a, o) {
    var l = Ce();
    return l.memoizedState = { refs: { getSnapshot: a, setSnapshot: null }, source: n, subscribe: o }, pf(l, n, a, o);
  }, useOpaqueIdentifier: function() {
    if (Ma) {
      var n = !1, a = Ds(function() {
        throw n || (n = !0, o("r:" + (ki++).toString(36))), Error(p(355));
      }), o = vu(a)[1];
      return !(sn.mode & 2) && (sn.flags |= 516, hu(
        5,
        function() {
          o("r:" + (ki++).toString(36));
        },
        void 0,
        null
      )), a;
    }
    return a = "r:" + (ki++).toString(36), vu(a), a;
  }, unstable_isNewReconciler: !1 }, Jv = { readContext: Ir, useCallback: Zv, useContext: Ir, useEffect: gl, useImperativeHandle: da, useLayoutEffect: mf, useMemo: Jt, useReducer: ii, useRef: oi, useState: function() {
    return ii(Dt);
  }, useDebugValue: cn, useDeferredValue: function(n) {
    var a = ii(Dt), o = a[0], l = a[1];
    return gl(function() {
      var f = In.transition;
      In.transition = 1;
      try {
        l(n);
      } finally {
        In.transition = f;
      }
    }, [n]), o;
  }, useTransition: function() {
    var n = ii(Dt)[0];
    return [
      oi().current,
      n
    ];
  }, useMutableSource: vf, useOpaqueIdentifier: function() {
    return ii(Dt)[0];
  }, unstable_isNewReconciler: !1 }, eh = { readContext: Ir, useCallback: Zv, useContext: Ir, useEffect: gl, useImperativeHandle: da, useLayoutEffect: mf, useMemo: Jt, useReducer: To, useRef: oi, useState: function() {
    return To(Dt);
  }, useDebugValue: cn, useDeferredValue: function(n) {
    var a = To(Dt), o = a[0], l = a[1];
    return gl(function() {
      var f = In.transition;
      In.transition = 1;
      try {
        l(n);
      } finally {
        In.transition = f;
      }
    }, [n]), o;
  }, useTransition: function() {
    var n = To(Dt)[0];
    return [
      oi().current,
      n
    ];
  }, useMutableSource: vf, useOpaqueIdentifier: function() {
    return To(Dt)[0];
  }, unstable_isNewReconciler: !1 }, th = T.ReactCurrentOwner, Zr = !1;
  function Dr(n, a, o, l) {
    a.child = n === null ? sf(a, null, o, l) : cl(a, n.child, o, l);
  }
  function xf(n, a, o, l, f) {
    o = o.render;
    var h = a.ref;
    return Eo(a, f), l = df(n, a, o, l, h, f), n !== null && !Zr ? (a.updateQueue = n.updateQueue, a.flags &= -517, n.lanes &= ~f, ui(n, a, f)) : (a.flags |= 1, Dr(n, a, l, f), a.child);
  }
  function gf(n, a, o, l, f, h) {
    if (n === null) {
      var R = o.type;
      return typeof R == "function" && !Gs(R) && R.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (a.tag = 15, a.type = R, hd(n, a, R, l, f, h)) : (n = Fl(o.type, null, l, a, a.mode, h), n.ref = a.ref, n.return = a, a.child = n);
    }
    return R = n.child, !(f & h) && (f = R.memoizedProps, o = o.compare, o = o !== null ? o : el, o(f, l) && n.ref === a.ref) ? ui(n, a, h) : (a.flags |= 1, n = Qi(R, l), n.ref = a.ref, n.return = a, a.child = n);
  }
  function hd(n, a, o, l, f, h) {
    if (n !== null && el(n.memoizedProps, l) && n.ref === a.ref)
      if (Zr = !1, (h & f) !== 0)
        n.flags & 16384 && (Zr = !0);
      else
        return a.lanes = n.lanes, ui(n, a, h);
    return Ef(n, a, o, l, h);
  }
  function xu(n, a, o) {
    var l = a.pendingProps, f = l.children, h = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden" || l.mode === "unstable-defer-without-hiding")
      if (!(a.mode & 4))
        a.memoizedState = { baseLanes: 0 }, Ys(a, o);
      else if (o & 1073741824)
        a.memoizedState = { baseLanes: 0 }, Ys(a, h !== null ? h.baseLanes : o);
      else
        return n = h !== null ? h.baseLanes | o : o, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: n }, Ys(a, n), null;
    else
      h !== null ? (l = h.baseLanes | o, a.memoizedState = null) : l = o, Ys(a, l);
    return Dr(n, a, f, o), a.child;
  }
  function md(n, a) {
    var o = a.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (a.flags |= 128);
  }
  function Ef(n, a, o, l, f) {
    var h = tr(o) ? Fi : ln.current;
    return h = $t(a, h), Eo(a, f), o = df(n, a, o, l, h, f), n !== null && !Zr ? (a.updateQueue = n.updateQueue, a.flags &= -517, n.lanes &= ~f, ui(n, a, f)) : (a.flags |= 1, Dr(n, a, o, f), a.child);
  }
  function yd(n, a, o, l, f) {
    if (tr(o)) {
      var h = !0;
      Xr(a);
    } else
      h = !1;
    if (Eo(a, f), a.stateNode === null)
      n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), Co(a, o, l), Ps(a, o, l, f), l = !0;
    else if (n === null) {
      var R = a.stateNode, L = a.memoizedProps;
      R.props = L;
      var G = R.context, he = o.contextType;
      typeof he == "object" && he !== null ? he = Ir(he) : (he = tr(o) ? Fi : ln.current, he = $t(a, he));
      var We = o.getDerivedStateFromProps, ht = typeof We == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      ht || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (L !== l || G !== he) && zs(a, R, l, he), Kr = !1;
      var ke = a.memoizedState;
      R.state = ke, ni(a, l, R, f), G = a.memoizedState, L !== l || ke !== G || er.current || Kr ? (typeof We == "function" && (ul(a, o, We, l), G = a.memoizedState), (L = Kr || ll(a, o, L, l, ke, G, he)) ? (ht || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (a.flags |= 4)) : (typeof R.componentDidMount == "function" && (a.flags |= 4), a.memoizedProps = l, a.memoizedState = G), R.props = l, R.state = G, R.context = he, l = L) : (typeof R.componentDidMount == "function" && (a.flags |= 4), l = !1);
    } else {
      R = a.stateNode, fd(n, a), L = a.memoizedProps, he = a.type === a.elementType ? L : Hn(a.type, L), R.props = he, ht = a.pendingProps, ke = R.context, G = o.contextType, typeof G == "object" && G !== null ? G = Ir(G) : (G = tr(o) ? Fi : ln.current, G = $t(a, G));
      var Ze = o.getDerivedStateFromProps;
      (We = typeof Ze == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (L !== ht || ke !== G) && zs(a, R, l, G), Kr = !1, ke = a.memoizedState, R.state = ke, ni(a, l, R, f);
      var pt = a.memoizedState;
      L !== ht || ke !== pt || er.current || Kr ? (typeof Ze == "function" && (ul(a, o, Ze, l), pt = a.memoizedState), (he = Kr || ll(a, o, he, l, ke, pt, G)) ? (We || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(
        l,
        pt,
        G
      ), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(l, pt, G)), typeof R.componentDidUpdate == "function" && (a.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (a.flags |= 256)) : (typeof R.componentDidUpdate != "function" || L === n.memoizedProps && ke === n.memoizedState || (a.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || L === n.memoizedProps && ke === n.memoizedState || (a.flags |= 256), a.memoizedProps = l, a.memoizedState = pt), R.props = l, R.state = pt, R.context = G, l = he) : (typeof R.componentDidUpdate != "function" || L === n.memoizedProps && ke === n.memoizedState || (a.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || L === n.memoizedProps && ke === n.memoizedState || (a.flags |= 256), l = !1);
    }
    return Cf(n, a, o, l, h, f);
  }
  function Cf(n, a, o, l, f, h) {
    md(n, a);
    var R = (a.flags & 64) !== 0;
    if (!l && !R)
      return f && od(a, o, !1), ui(n, a, h);
    l = a.stateNode, th.current = a;
    var L = R && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return a.flags |= 1, n !== null && R ? (a.child = cl(a, n.child, null, h), a.child = cl(a, null, L, h)) : Dr(n, a, L, h), a.memoizedState = l.state, f && od(a, o, !0), a.child;
  }
  function xd(n) {
    var a = n.stateNode;
    a.pendingContext ? iu(n, a.pendingContext, a.pendingContext !== a.context) : a.context && iu(n, a.context, !1), pl(n, a.containerInfo);
  }
  var $n = { dehydrated: null, retryLane: 0 };
  function Hi(n, a, o) {
    var l = a.pendingProps, f = yn.current, h = !1, R;
    return (R = (a.flags & 64) !== 0) || (R = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), R ? (h = !0, a.flags &= -65) : n !== null && n.memoizedState === null || l.fallback === void 0 || l.unstable_avoidThisFallback === !0 || (f |= 1), st(yn, f & 1), n === null ? (l.fallback !== void 0 && Pi(a), n = l.children, f = l.fallback, h ? (n = gd(a, n, f, o), a.child.memoizedState = { baseLanes: o }, a.memoizedState = $n, n) : typeof l.unstable_expectedLoadTime == "number" ? (n = gd(a, n, f, o), a.child.memoizedState = { baseLanes: o }, a.memoizedState = $n, a.lanes = 33554432, n) : (o = Oo({ mode: "visible", children: n }, a.mode, o, null), o.return = a, a.child = o)) : n.memoizedState !== null ? h ? (l = Ii(n, a, l.children, l.fallback, o), h = a.child, f = n.child.memoizedState, h.memoizedState = f === null ? { baseLanes: o } : { baseLanes: f.baseLanes | o }, h.childLanes = n.childLanes & ~o, a.memoizedState = $n, l) : (o = rr(n, a, l.children, o), a.memoizedState = null, o) : h ? (l = Ii(n, a, l.children, l.fallback, o), h = a.child, f = n.child.memoizedState, h.memoizedState = f === null ? { baseLanes: o } : { baseLanes: f.baseLanes | o }, h.childLanes = n.childLanes & ~o, a.memoizedState = $n, l) : (o = rr(n, a, l.children, o), a.memoizedState = null, o);
  }
  function gd(n, a, o, l) {
    var f = n.mode, h = n.child;
    return a = { mode: "hidden", children: a }, !(f & 2) && h !== null ? (h.childLanes = 0, h.pendingProps = a) : h = Oo(a, f, 0, null), o = ja(o, f, l, null), h.return = n, o.return = n, h.sibling = o, n.child = h, o;
  }
  function rr(n, a, o, l) {
    var f = n.child;
    return n = f.sibling, o = Qi(f, { mode: "visible", children: o }), !(a.mode & 2) && (o.lanes = l), o.return = a, o.sibling = null, n !== null && (n.nextEffect = null, n.flags = 8, a.firstEffect = a.lastEffect = n), a.child = o;
  }
  function Ii(n, a, o, l, f) {
    var h = a.mode, R = n.child;
    n = R.sibling;
    var L = { mode: "hidden", children: o };
    return !(h & 2) && a.child !== R ? (o = a.child, o.childLanes = 0, o.pendingProps = L, R = o.lastEffect, R !== null ? (a.firstEffect = o.firstEffect, a.lastEffect = R, R.nextEffect = null) : a.firstEffect = a.lastEffect = null) : o = Qi(R, L), n !== null ? l = Qi(n, l) : (l = ja(l, h, f, null), l.flags |= 2), l.return = a, o.return = a, o.sibling = l, a.child = o, l;
  }
  function jt(n, a) {
    n.lanes |= a;
    var o = n.alternate;
    o !== null && (o.lanes |= a), af(n.return, a);
  }
  function gu(n, a, o, l, f, h) {
    var R = n.memoizedState;
    R === null ? n.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: f, lastEffect: h } : (R.isBackwards = a, R.rendering = null, R.renderingStartTime = 0, R.last = l, R.tail = o, R.tailMode = f, R.lastEffect = h);
  }
  function nh(n, a, o) {
    var l = a.pendingProps, f = l.revealOrder, h = l.tail;
    if (Dr(n, a, l.children, o), l = yn.current, l & 2)
      l = l & 1 | 2, a.flags |= 64;
    else {
      if (n !== null && n.flags & 64)
        e:
          for (n = a.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && jt(n, o);
            else if (n.tag === 19)
              jt(n, o);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === a)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      l &= 1;
    }
    if (st(yn, l), !(a.mode & 2))
      a.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = a.child, f = null; o !== null; )
            n = o.alternate, n !== null && vl(n) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = a.child, a.child = null) : (f = o.sibling, o.sibling = null), gu(a, !1, f, o, h, a.lastEffect);
          break;
        case "backwards":
          for (o = null, f = a.child, a.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && vl(n) === null) {
              a.child = f;
              break;
            }
            n = f.sibling, f.sibling = o, o = f, f = n;
          }
          gu(a, !0, o, null, h, a.lastEffect);
          break;
        case "together":
          gu(a, !1, null, null, void 0, a.lastEffect);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function ui(n, a, o) {
    if (n !== null && (a.dependencies = n.dependencies), Do |= a.lanes, o & a.childLanes) {
      if (n !== null && a.child !== n.child)
        throw Error(p(153));
      if (a.child !== null) {
        for (n = a.child, o = Qi(n, n.pendingProps), a.child = o, o.return = a; n.sibling !== null; )
          n = n.sibling, o = o.sibling = Qi(n, n.pendingProps), o.return = a;
        o.sibling = null;
      }
      return a.child;
    }
    return null;
  }
  var Hs, Eu, Ed, bf;
  Hs = function(n, a) {
    for (var o = a.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === a)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === a)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Eu = function() {
  }, Ed = function(n, a, o, l) {
    var f = n.memoizedProps;
    if (f !== l) {
      n = a.stateNode, _o(Oa.current);
      var h = null;
      switch (o) {
        case "input":
          f = Cn(n, f), l = Cn(n, l), h = [];
          break;
        case "option":
          f = Gn(n, f), l = Gn(n, l), h = [];
          break;
        case "select":
          f = g({}, f, { value: void 0 }), l = g({}, l, { value: void 0 }), h = [];
          break;
        case "textarea":
          f = Lt(n, f), l = Lt(n, l), h = [];
          break;
        default:
          typeof f.onClick != "function" && typeof l.onClick == "function" && (n.onclick = Ts);
      }
      fr(o, l);
      var R;
      o = null;
      for (he in f)
        if (!l.hasOwnProperty(he) && f.hasOwnProperty(he) && f[he] != null)
          if (he === "style") {
            var L = f[he];
            for (R in L)
              L.hasOwnProperty(R) && (o || (o = {}), o[R] = "");
          } else
            he !== "dangerouslySetInnerHTML" && he !== "children" && he !== "suppressContentEditableWarning" && he !== "suppressHydrationWarning" && he !== "autoFocus" && (A.hasOwnProperty(he) ? h || (h = []) : (h = h || []).push(he, null));
      for (he in l) {
        var G = l[he];
        if (L = f != null ? f[he] : void 0, l.hasOwnProperty(he) && G !== L && (G != null || L != null))
          if (he === "style")
            if (L) {
              for (R in L)
                !L.hasOwnProperty(R) || G && G.hasOwnProperty(R) || (o || (o = {}), o[R] = "");
              for (R in G)
                G.hasOwnProperty(R) && L[R] !== G[R] && (o || (o = {}), o[R] = G[R]);
            } else
              o || (h || (h = []), h.push(he, o)), o = G;
          else
            he === "dangerouslySetInnerHTML" ? (G = G ? G.__html : void 0, L = L ? L.__html : void 0, G != null && L !== G && (h = h || []).push(he, G)) : he === "children" ? typeof G != "string" && typeof G != "number" || (h = h || []).push(he, "" + G) : he !== "suppressContentEditableWarning" && he !== "suppressHydrationWarning" && (A.hasOwnProperty(he) ? (G != null && he === "onScroll" && tn("scroll", n), h || L === G || (h = [])) : typeof G == "object" && G !== null && G.$$typeof === Be ? G.toString() : (h = h || []).push(he, G));
      }
      o && (h = h || []).push(
        "style",
        o
      );
      var he = h;
      (a.updateQueue = he) && (a.flags |= 4);
    }
  }, bf = function(n, a, o, l) {
    o !== l && (a.flags |= 4);
  };
  function Cl(n, a) {
    if (!Ma)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), o = o.sibling;
          l === null ? a || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null;
      }
  }
  function rh(n, a, o) {
    var l = a.pendingProps;
    switch (a.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return tr(a.type) && ka(), null;
      case 3:
        return cu(), yt(er), yt(ln), Li(), l = a.stateNode, l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (ml(a) ? a.flags |= 4 : l.hydrate || (a.flags |= 256)), Eu(a), null;
      case 5:
        cf(a);
        var f = _o(dl.current);
        if (o = a.type, n !== null && a.stateNode != null)
          Ed(n, a, o, l, f), n.ref !== a.ref && (a.flags |= 128);
        else {
          if (!l) {
            if (a.stateNode === null)
              throw Error(p(166));
            return null;
          }
          if (n = _o(Oa.current), ml(a)) {
            l = a.stateNode, o = a.type;
            var h = a.memoizedProps;
            switch (l[Aa] = a, l[As] = h, o) {
              case "dialog":
                tn("cancel", l), tn("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                tn("load", l);
                break;
              case "video":
              case "audio":
                for (n = 0; n < tu.length; n++)
                  tn(tu[n], l);
                break;
              case "source":
                tn("error", l);
                break;
              case "img":
              case "image":
              case "link":
                tn("error", l), tn("load", l);
                break;
              case "details":
                tn("toggle", l);
                break;
              case "input":
                Nr(l, h), tn("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!h.multiple }, tn("invalid", l);
                break;
              case "textarea":
                ia(l, h), tn("invalid", l);
            }
            fr(o, h), n = null;
            for (var R in h)
              h.hasOwnProperty(R) && (f = h[R], R === "children" ? typeof f == "string" ? l.textContent !== f && (n = ["children", f]) : typeof f == "number" && l.textContent !== "" + f && (n = ["children", "" + f]) : A.hasOwnProperty(R) && f != null && R === "onScroll" && tn("scroll", l));
            switch (o) {
              case "input":
                Ht(l), hn(l, h, !0);
                break;
              case "textarea":
                Ht(l), Rr(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = Ts);
            }
            l = n, a.updateQueue = l, l !== null && (a.flags |= 4);
          } else {
            switch (R = f.nodeType === 9 ? f : f.ownerDocument, n === Me.html && (n = Ve(o)), n === Me.html ? o === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = R.createElement(o, { is: l.is }) : (n = R.createElement(o), o === "select" && (R = n, l.multiple ? R.multiple = !0 : l.size && (R.size = l.size))) : n = R.createElementNS(n, o), n[Aa] = a, n[As] = l, Hs(n, a, !1, !1), a.stateNode = n, R = zr(o, l), o) {
              case "dialog":
                tn("cancel", n), tn("close", n), f = l;
                break;
              case "iframe":
              case "object":
              case "embed":
                tn("load", n), f = l;
                break;
              case "video":
              case "audio":
                for (f = 0; f < tu.length; f++)
                  tn(tu[f], n);
                f = l;
                break;
              case "source":
                tn("error", n), f = l;
                break;
              case "img":
              case "image":
              case "link":
                tn("error", n), tn("load", n), f = l;
                break;
              case "details":
                tn("toggle", n), f = l;
                break;
              case "input":
                Nr(n, l), f = Cn(n, l), tn("invalid", n);
                break;
              case "option":
                f = Gn(n, l);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!l.multiple }, f = g({}, l, { value: void 0 }), tn("invalid", n);
                break;
              case "textarea":
                ia(n, l), f = Lt(n, l), tn("invalid", n);
                break;
              default:
                f = l;
            }
            fr(o, f);
            var L = f;
            for (h in L)
              if (L.hasOwnProperty(h)) {
                var G = L[h];
                h === "style" ? Fn(n, G) : h === "dangerouslySetInnerHTML" ? (G = G ? G.__html : void 0, G != null && Ut(n, G)) : h === "children" ? typeof G == "string" ? (o !== "textarea" || G !== "") && It(n, G) : typeof G == "number" && It(n, "" + G) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (A.hasOwnProperty(h) ? G != null && h === "onScroll" && tn("scroll", n) : G != null && N(n, h, G, R));
              }
            switch (o) {
              case "input":
                Ht(n), hn(n, l, !1);
                break;
              case "textarea":
                Ht(n), Rr(n);
                break;
              case "option":
                l.value != null && n.setAttribute("value", "" + Te(l.value));
                break;
              case "select":
                n.multiple = !!l.multiple, h = l.value, h != null ? Ot(n, !!l.multiple, h, !1) : l.defaultValue != null && Ot(n, !!l.multiple, l.defaultValue, !0);
                break;
              default:
                typeof f.onClick == "function" && (n.onclick = Ts);
            }
            ru(o, l) && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 128);
        }
        return null;
      case 6:
        if (n && a.stateNode != null)
          bf(n, a, n.memoizedProps, l);
        else {
          if (typeof l != "string" && a.stateNode === null)
            throw Error(p(166));
          o = _o(dl.current), _o(Oa.current), ml(a) ? (l = a.stateNode, o = a.memoizedProps, l[Aa] = a, l.nodeValue !== o && (a.flags |= 4)) : (l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l), l[Aa] = a, a.stateNode = l);
        }
        return null;
      case 13:
        return yt(yn), l = a.memoizedState, a.flags & 64 ? (a.lanes = o, a) : (l = l !== null, o = !1, n === null ? a.memoizedProps.fallback !== void 0 && ml(a) : o = n.memoizedState !== null, l && !o && a.mode & 2 && (n === null && a.memoizedProps.unstable_avoidThisFallback !== !0 || yn.current & 1 ? qn === 0 && (qn = 3) : ((qn === 0 || qn === 3) && (qn = 4), Sr === null || !(Do & 134217727) && !(Pa & 134217727) || _u(Sr, ar))), (l || o) && (a.flags |= 4), null);
      case 4:
        return cu(), Eu(a), n === null && Yc(a.stateNode.containerInfo), null;
      case 10:
        return Ns(a), null;
      case 17:
        return tr(a.type) && ka(), null;
      case 19:
        if (yt(yn), l = a.memoizedState, l === null)
          return null;
        if (h = (a.flags & 64) !== 0, R = l.rendering, R === null)
          if (h)
            Cl(l, !1);
          else {
            if (qn !== 0 || n !== null && n.flags & 64)
              for (n = a.child; n !== null; ) {
                if (R = vl(n), R !== null) {
                  for (a.flags |= 64, Cl(l, !1), h = R.updateQueue, h !== null && (a.updateQueue = h, a.flags |= 4), l.lastEffect === null && (a.firstEffect = null), a.lastEffect = l.lastEffect, l = o, o = a.child; o !== null; )
                    h = o, n = l, h.flags &= 2, h.nextEffect = null, h.firstEffect = null, h.lastEffect = null, R = h.alternate, R === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = R.childLanes, h.lanes = R.lanes, h.child = R.child, h.memoizedProps = R.memoizedProps, h.memoizedState = R.memoizedState, h.updateQueue = R.updateQueue, h.type = R.type, n = R.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return st(yn, yn.current & 1 | 2), a.child;
                }
                n = n.sibling;
              }
            l.tail !== null && nr() > Ao && (a.flags |= 64, h = !0, Cl(l, !1), a.lanes = 33554432);
          }
        else {
          if (!h)
            if (n = vl(R), n !== null) {
              if (a.flags |= 64, h = !0, o = n.updateQueue, o !== null && (a.updateQueue = o, a.flags |= 4), Cl(l, !0), l.tail === null && l.tailMode === "hidden" && !R.alternate && !Ma)
                return a = a.lastEffect = l.lastEffect, a !== null && (a.nextEffect = null), null;
            } else
              2 * nr() - l.renderingStartTime > Ao && o !== 1073741824 && (a.flags |= 64, h = !0, Cl(l, !1), a.lanes = 33554432);
          l.isBackwards ? (R.sibling = a.child, a.child = R) : (o = l.last, o !== null ? o.sibling = R : a.child = R, l.last = R);
        }
        return l.tail !== null ? (o = l.tail, l.rendering = o, l.tail = o.sibling, l.lastEffect = a.lastEffect, l.renderingStartTime = nr(), o.sibling = null, a = yn.current, st(yn, h ? a & 1 | 2 : a & 1), o) : null;
      case 23:
      case 24:
        return Nf(), n !== null && n.memoizedState !== null != (a.memoizedState !== null) && l.mode !== "unstable-defer-without-hiding" && (a.flags |= 4), null;
    }
    throw Error(p(156, a.tag));
  }
  function Cd(n) {
    switch (n.tag) {
      case 1:
        tr(n.type) && ka();
        var a = n.flags;
        return a & 4096 ? (n.flags = a & -4097 | 64, n) : null;
      case 3:
        if (cu(), yt(er), yt(ln), Li(), a = n.flags, a & 64)
          throw Error(p(285));
        return n.flags = a & -4097 | 64, n;
      case 5:
        return cf(n), null;
      case 13:
        return yt(yn), a = n.flags, a & 4096 ? (n.flags = a & -4097 | 64, n) : null;
      case 19:
        return yt(yn), null;
      case 4:
        return cu(), null;
      case 10:
        return Ns(n), null;
      case 23:
      case 24:
        return Nf(), null;
      default:
        return null;
    }
  }
  function Sf(n, a) {
    try {
      var o = "", l = a;
      do
        o += Ke(l), l = l.return;
      while (l);
      var f = o;
    } catch (h) {
      f = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: a, stack: f };
  }
  function _f(n, a) {
    try {
      console.error(a.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var bd = typeof WeakMap == "function" ? WeakMap : Map;
  function Sd(n, a, o) {
    o = fa(-1, o), o.tag = 3, o.payload = { element: null };
    var l = a.value;
    return o.callback = function() {
      wl || (wl = !0, Af = l), _f(n, a);
    }, o;
  }
  function _d(n, a, o) {
    o = fa(-1, o), o.tag = 3;
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var f = a.value;
      o.payload = function() {
        return _f(n, a), l(f);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      typeof l != "function" && (La === null ? La = /* @__PURE__ */ new Set([this]) : La.add(this), _f(n, a));
      var R = a.stack;
      this.componentDidCatch(a.value, { componentStack: R !== null ? R : "" });
    }), o;
  }
  var ah = typeof WeakSet == "function" ? WeakSet : Set;
  function Rd(n) {
    var a = n.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          Yi(n, o);
        }
      else
        a.current = null;
  }
  function ih(n, a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (a.flags & 256 && n !== null) {
          var o = n.memoizedProps, l = n.memoizedState;
          n = a.stateNode, a = n.getSnapshotBeforeUpdate(a.elementType === a.type ? o : Hn(a.type, o), l), n.__reactInternalSnapshotBeforeUpdate = a;
        }
        return;
      case 3:
        a.flags & 256 && ws(a.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(p(163));
  }
  function Rf(n, a, o) {
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (a = o.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          n = a = a.next;
          do {
            if ((n.tag & 3) === 3) {
              var l = n.create;
              n.destroy = l();
            }
            n = n.next;
          } while (n !== a);
        }
        if (a = o.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          n = a = a.next;
          do {
            var f = n;
            l = f.next, f = f.tag, f & 4 && f & 1 && (zf(o, n), Pd(o, n)), n = l;
          } while (n !== a);
        }
        return;
      case 1:
        n = o.stateNode, o.flags & 4 && (a === null ? n.componentDidMount() : (l = o.elementType === o.type ? a.memoizedProps : Hn(o.type, a.memoizedProps), n.componentDidUpdate(
          l,
          a.memoizedState,
          n.__reactInternalSnapshotBeforeUpdate
        ))), a = o.updateQueue, a !== null && uf(o, a, n);
        return;
      case 3:
        if (a = o.updateQueue, a !== null) {
          if (n = null, o.child !== null)
            switch (o.child.tag) {
              case 5:
                n = o.child.stateNode;
                break;
              case 1:
                n = o.child.stateNode;
            }
          uf(o, a, n);
        }
        return;
      case 5:
        n = o.stateNode, a === null && o.flags & 4 && ru(o.type, o.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        o.memoizedState === null && (o = o.alternate, o !== null && (o = o.memoizedState, o !== null && (o = o.dehydrated, o !== null && fs(o))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(p(163));
  }
  function Tf(n, a) {
    for (var o = n; ; ) {
      if (o.tag === 5) {
        var l = o.stateNode;
        if (a)
          l = l.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
        else {
          l = o.stateNode;
          var f = o.memoizedProps.style;
          f = f != null && f.hasOwnProperty("display") ? f.display : null, l.style.display = Yt("display", f);
        }
      } else if (o.tag === 6)
        o.stateNode.nodeValue = a ? "" : o.memoizedProps;
      else if ((o.tag !== 23 && o.tag !== 24 || o.memoizedState === null || o === n) && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === n)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }
  function Td(n, a) {
    if (yo && typeof yo.onCommitFiberUnmount == "function")
      try {
        yo.onCommitFiberUnmount(Kc, a);
      } catch {
      }
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = a.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var o = n = n.next;
          do {
            var l = o, f = l.destroy;
            if (l = l.tag, f !== void 0)
              if (l & 4)
                zf(a, o);
              else {
                l = a;
                try {
                  f();
                } catch (h) {
                  Yi(l, h);
                }
              }
            o = o.next;
          } while (o !== n);
        }
        break;
      case 1:
        if (Rd(a), n = a.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = a.memoizedProps, n.state = a.memoizedState, n.componentWillUnmount();
          } catch (h) {
            Yi(
              a,
              h
            );
          }
        break;
      case 5:
        Rd(a);
        break;
      case 4:
        kd(n, a);
    }
  }
  function wd(n) {
    n.alternate = null, n.child = null, n.dependencies = null, n.firstEffect = null, n.lastEffect = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.return = null, n.updateQueue = null;
  }
  function Dd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ad(n) {
    e: {
      for (var a = n.return; a !== null; ) {
        if (Dd(a))
          break e;
        a = a.return;
      }
      throw Error(p(160));
    }
    var o = a;
    switch (a = o.stateNode, o.tag) {
      case 5:
        var l = !1;
        break;
      case 3:
        a = a.containerInfo, l = !0;
        break;
      case 4:
        a = a.containerInfo, l = !0;
        break;
      default:
        throw Error(p(161));
    }
    o.flags & 16 && (It(a, ""), o.flags &= -17);
    e:
      t:
        for (o = n; ; ) {
          for (; o.sibling === null; ) {
            if (o.return === null || Dd(o.return)) {
              o = null;
              break e;
            }
            o = o.return;
          }
          for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
            if (o.flags & 2 || o.child === null || o.tag === 4)
              continue t;
            o.child.return = o, o = o.child;
          }
          if (!(o.flags & 2)) {
            o = o.stateNode;
            break e;
          }
        }
    l ? bl(n, o, a) : Sl(n, o, a);
  }
  function bl(n, a, o) {
    var l = n.tag, f = l === 5 || l === 6;
    if (f)
      n = f ? n.stateNode : n.stateNode.instance, a ? o.nodeType === 8 ? o.parentNode.insertBefore(n, a) : o.insertBefore(n, a) : (o.nodeType === 8 ? (a = o.parentNode, a.insertBefore(n, o)) : (a = o, a.appendChild(n)), o = o._reactRootContainer, o != null || a.onclick !== null || (a.onclick = Ts));
    else if (l !== 4 && (n = n.child, n !== null))
      for (bl(n, a, o), n = n.sibling; n !== null; )
        bl(n, a, o), n = n.sibling;
  }
  function Sl(n, a, o) {
    var l = n.tag, f = l === 5 || l === 6;
    if (f)
      n = f ? n.stateNode : n.stateNode.instance, a ? o.insertBefore(n, a) : o.appendChild(n);
    else if (l !== 4 && (n = n.child, n !== null))
      for (Sl(n, a, o), n = n.sibling; n !== null; )
        Sl(n, a, o), n = n.sibling;
  }
  function kd(n, a) {
    for (var o = a, l = !1, f, h; ; ) {
      if (!l) {
        l = o.return;
        e:
          for (; ; ) {
            if (l === null)
              throw Error(p(160));
            switch (f = l.stateNode, l.tag) {
              case 5:
                h = !1;
                break e;
              case 3:
                f = f.containerInfo, h = !0;
                break e;
              case 4:
                f = f.containerInfo, h = !0;
                break e;
            }
            l = l.return;
          }
        l = !0;
      }
      if (o.tag === 5 || o.tag === 6) {
        e:
          for (var R = n, L = o, G = L; ; )
            if (Td(R, G), G.child !== null && G.tag !== 4)
              G.child.return = G, G = G.child;
            else {
              if (G === L)
                break e;
              for (; G.sibling === null; ) {
                if (G.return === null || G.return === L)
                  break e;
                G = G.return;
              }
              G.sibling.return = G.return, G = G.sibling;
            }
        h ? (R = f, L = o.stateNode, R.nodeType === 8 ? R.parentNode.removeChild(L) : R.removeChild(L)) : f.removeChild(o.stateNode);
      } else if (o.tag === 4) {
        if (o.child !== null) {
          f = o.stateNode.containerInfo, h = !0, o.child.return = o, o = o.child;
          continue;
        }
      } else if (Td(n, o), o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === a)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === a)
          return;
        o = o.return, o.tag === 4 && (l = !1);
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }
  function wf(n, a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var o = a.updateQueue;
        if (o = o !== null ? o.lastEffect : null, o !== null) {
          var l = o = o.next;
          do
            (l.tag & 3) === 3 && (n = l.destroy, l.destroy = void 0, n !== void 0 && n()), l = l.next;
          while (l !== o);
        }
        return;
      case 1:
        return;
      case 5:
        if (o = a.stateNode, o != null) {
          l = a.memoizedProps;
          var f = n !== null ? n.memoizedProps : l;
          n = a.type;
          var h = a.updateQueue;
          if (a.updateQueue = null, h !== null) {
            for (o[As] = l, n === "input" && l.type === "radio" && l.name != null && bn(o, l), zr(n, f), a = zr(n, l), f = 0; f < h.length; f += 2) {
              var R = h[f], L = h[f + 1];
              R === "style" ? Fn(o, L) : R === "dangerouslySetInnerHTML" ? Ut(o, L) : R === "children" ? It(o, L) : N(o, R, L, a);
            }
            switch (n) {
              case "input":
                un(o, l);
                break;
              case "textarea":
                Mr(o, l);
                break;
              case "select":
                n = o._wrapperState.wasMultiple, o._wrapperState.wasMultiple = !!l.multiple, h = l.value, h != null ? Ot(o, !!l.multiple, h, !1) : n !== !!l.multiple && (l.defaultValue != null ? Ot(o, !!l.multiple, l.defaultValue, !0) : Ot(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (a.stateNode === null)
          throw Error(p(162));
        a.stateNode.nodeValue = a.memoizedProps;
        return;
      case 3:
        o = a.stateNode, o.hydrate && (o.hydrate = !1, fs(o.containerInfo));
        return;
      case 12:
        return;
      case 13:
        a.memoizedState !== null && (Tl = nr(), Tf(a.child, !0)), Bd(a);
        return;
      case 19:
        Bd(a);
        return;
      case 17:
        return;
      case 23:
      case 24:
        Tf(a, a.memoizedState !== null);
        return;
    }
    throw Error(p(163));
  }
  function Bd(n) {
    var a = n.updateQueue;
    if (a !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new ah()), a.forEach(function(l) {
        var f = fh.bind(null, n, l);
        o.has(l) || (o.add(l), l.then(f, f));
      });
    }
  }
  function oh(n, a) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (a = a.memoizedState, a !== null && a.dehydrated === null) : !1;
  }
  var _l = Math.ceil, Cu = T.ReactCurrentDispatcher, wo = T.ReactCurrentOwner, vt = 0, Sr = null, wn = null, ar = 0, za = 0, bu = Cr(0), qn = 0, ur = null, pa = 0, Do = 0, Pa = 0, Df = 0, Rl = null, Tl = 0, Ao = 1 / 0;
  function Su() {
    Ao = nr() + 500;
  }
  var qe = null, wl = !1, Af = null, La = null, Vi = !1, ko = null, Dl = 90, kf = [], Bf = [], li = null, Al = 0, Is = null, Vs = -1, si = 0, Ws = 0, kl = null, $s = !1;
  function Vr() {
    return vt & 48 ? nr() : Vs !== -1 ? Vs : Vs = nr();
  }
  function Ua(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return uu() === 99 ? 1 : 2;
    if (si === 0 && (si = pa), Ni.transition !== 0) {
      Ws !== 0 && (Ws = Rl !== null ? Rl.pendingLanes : 0), n = si;
      var a = 4186112 & ~Ws;
      return a &= -a, a === 0 && (n = 4186112 & ~n, a = n & -n, a === 0 && (a = 8192)), a;
    }
    return n = uu(), vt & 4 && n === 98 ? n = Jn(12, si) : (n = an(n), n = Jn(n, si)), n;
  }
  function Wi(n, a, o) {
    if (50 < Al)
      throw Al = 0, Is = null, Error(p(185));
    if (n = qs(n, a), n === null)
      return null;
    _i(n, a, o), n === Sr && (Pa |= a, qn === 4 && _u(n, ar));
    var l = uu();
    a === 1 ? vt & 8 && !(vt & 48) ? Of(n) : (Jr(n, o), vt === 0 && (Su(), jn())) : (!(vt & 4) || l !== 98 && l !== 99 || (li === null ? li = /* @__PURE__ */ new Set([n]) : li.add(n)), Jr(n, o)), Rl = n;
  }
  function qs(n, a) {
    n.lanes |= a;
    var o = n.alternate;
    for (o !== null && (o.lanes |= a), o = n, n = n.return; n !== null; )
      n.childLanes |= a, o = n.alternate, o !== null && (o.childLanes |= a), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  function Jr(n, a) {
    for (var o = n.callbackNode, l = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, R = n.pendingLanes; 0 < R; ) {
      var L = 31 - Da(R), G = 1 << L, he = h[L];
      if (he === -1) {
        if (!(G & l) || G & f) {
          he = a, Mt(G);
          var We = et;
          h[L] = 10 <= We ? he + 250 : 6 <= We ? he + 5e3 : -1;
        }
      } else
        he <= a && (n.expiredLanes |= G);
      R &= ~G;
    }
    if (l = Rn(n, n === Sr ? ar : 0), a = et, l === 0)
      o !== null && (o !== tf && il(o), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (o !== null) {
        if (n.callbackPriority === a)
          return;
        o !== tf && il(o);
      }
      a === 15 ? (o = Of.bind(null, n), Ba === null ? (Ba = [o], Fs = ca(Bs, ei)) : Ba.push(o), o = tf) : a === 14 ? o = go(99, Of.bind(null, n)) : (o = pn(a), o = go(o, Ff.bind(null, n))), n.callbackPriority = a, n.callbackNode = o;
    }
  }
  function Ff(n) {
    if (Vs = -1, Ws = si = 0, vt & 48)
      throw Error(p(327));
    var a = n.callbackNode;
    if (qi() && n.callbackNode !== a)
      return null;
    var o = Rn(n, n === Sr ? ar : 0);
    if (o === 0)
      return null;
    var l = o, f = vt;
    vt |= 16;
    var h = Ru();
    (Sr !== n || ar !== l) && (Su(), Bo(n, l));
    do
      try {
        Md();
        break;
      } catch (L) {
        Qs(n, L);
      }
    while (!0);
    if (rf(), Cu.current = h, vt = f, wn !== null ? l = 0 : (Sr = null, ar = 0, l = qn), pa & Pa)
      Bo(n, 0);
    else if (l !== 0) {
      if (l === 2 && (vt |= 64, n.hydrate && (n.hydrate = !1, ws(n.containerInfo)), o = Zn(n), o !== 0 && (l = Bl(n, o))), l === 1)
        throw a = ur, Bo(n, 0), _u(n, o), Jr(n, nr()), a;
      switch (n.finishedWork = n.current.alternate, n.finishedLanes = o, l) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          $i(n);
          break;
        case 3:
          if (_u(n, o), (o & 62914560) === o && (l = Tl + 500 - nr(), 10 < l)) {
            if (Rn(n, 0) !== 0)
              break;
            if (f = n.suspendedLanes, (f & o) !== o) {
              Vr(), n.pingedLanes |= n.suspendedLanes & f;
              break;
            }
            n.timeoutHandle = au($i.bind(null, n), l);
            break;
          }
          $i(n);
          break;
        case 4:
          if (_u(n, o), (o & 4186112) === o)
            break;
          for (l = n.eventTimes, f = -1; 0 < o; ) {
            var R = 31 - Da(o);
            h = 1 << R, R = l[R], R > f && (f = R), o &= ~h;
          }
          if (o = f, o = nr() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * _l(o / 1960)) - o, 10 < o) {
            n.timeoutHandle = au($i.bind(null, n), o);
            break;
          }
          $i(n);
          break;
        case 5:
          $i(n);
          break;
        default:
          throw Error(p(329));
      }
    }
    return Jr(n, nr()), n.callbackNode === a ? Ff.bind(null, n) : null;
  }
  function _u(n, a) {
    for (a &= ~Df, a &= ~Pa, n.suspendedLanes |= a, n.pingedLanes &= ~a, n = n.expirationTimes; 0 < a; ) {
      var o = 31 - Da(a), l = 1 << o;
      n[o] = -1, a &= ~l;
    }
  }
  function Of(n) {
    if (vt & 48)
      throw Error(p(327));
    if (qi(), n === Sr && n.expiredLanes & ar) {
      var a = ar, o = Bl(n, a);
      pa & Pa && (a = Rn(n, a), o = Bl(n, a));
    } else
      a = Rn(n, 0), o = Bl(n, a);
    if (n.tag !== 0 && o === 2 && (vt |= 64, n.hydrate && (n.hydrate = !1, ws(n.containerInfo)), a = Zn(n), a !== 0 && (o = Bl(n, a))), o === 1)
      throw o = ur, Bo(n, 0), _u(n, a), Jr(n, nr()), o;
    return n.finishedWork = n.current.alternate, n.finishedLanes = a, $i(n), Jr(n, nr()), null;
  }
  function uh() {
    if (li !== null) {
      var n = li;
      li = null, n.forEach(function(a) {
        a.expiredLanes |= 24 & a.pendingLanes, Jr(a, nr());
      });
    }
    jn();
  }
  function Fd(n, a) {
    var o = vt;
    vt |= 1;
    try {
      return n(a);
    } finally {
      vt = o, vt === 0 && (Su(), jn());
    }
  }
  function Od(n, a) {
    var o = vt;
    vt &= -2, vt |= 8;
    try {
      return n(a);
    } finally {
      vt = o, vt === 0 && (Su(), jn());
    }
  }
  function Ys(n, a) {
    st(bu, za), za |= a, pa |= a;
  }
  function Nf() {
    za = bu.current, yt(bu);
  }
  function Bo(n, a) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, nd(o)), wn !== null)
      for (o = wn.return; o !== null; ) {
        var l = o;
        switch (l.tag) {
          case 1:
            l = l.type.childContextTypes, l != null && ka();
            break;
          case 3:
            cu(), yt(er), yt(ln), Li();
            break;
          case 5:
            cf(l);
            break;
          case 4:
            cu();
            break;
          case 13:
            yt(yn);
            break;
          case 19:
            yt(yn);
            break;
          case 10:
            Ns(l);
            break;
          case 23:
          case 24:
            Nf();
        }
        o = o.return;
      }
    Sr = n, wn = Qi(n.current, null), ar = za = pa = a, qn = 0, ur = null, Df = Pa = Do = 0;
  }
  function Qs(n, a) {
    do {
      var o = wn;
      try {
        if (rf(), du.current = js, yl) {
          for (var l = sn.memoizedState; l !== null; ) {
            var f = l.queue;
            f !== null && (f.pending = null), l = l.next;
          }
          yl = !1;
        }
        if (pu = 0, Wn = Vn = sn = null, Ui = !1, wo.current = null, o === null || o.return === null) {
          qn = 1, ur = a, wn = null;
          break;
        }
        e: {
          var h = n, R = o.return, L = o, G = a;
          if (a = ar, L.flags |= 2048, L.firstEffect = L.lastEffect = null, G !== null && typeof G == "object" && typeof G.then == "function") {
            var he = G;
            if (!(L.mode & 2)) {
              var We = L.alternate;
              We ? (L.updateQueue = We.updateQueue, L.memoizedState = We.memoizedState, L.lanes = We.lanes) : (L.updateQueue = null, L.memoizedState = null);
            }
            var ht = (yn.current & 1) !== 0, ke = R;
            do {
              var Ze;
              if (Ze = ke.tag === 13) {
                var pt = ke.memoizedState;
                if (pt !== null)
                  Ze = pt.dehydrated !== null;
                else {
                  var ot = ke.memoizedProps;
                  Ze = ot.fallback === void 0 ? !1 : ot.unstable_avoidThisFallback !== !0 ? !0 : !ht;
                }
              }
              if (Ze) {
                var ue = ke.updateQueue;
                if (ue === null) {
                  var te = /* @__PURE__ */ new Set();
                  te.add(he), ke.updateQueue = te;
                } else
                  ue.add(he);
                if (!(ke.mode & 2)) {
                  if (ke.flags |= 64, L.flags |= 16384, L.flags &= -2981, L.tag === 1)
                    if (L.alternate === null)
                      L.tag = 17;
                    else {
                      var ie = fa(-1, 1);
                      ie.tag = 2, ti(L, ie);
                    }
                  L.lanes |= 1;
                  break e;
                }
                G = void 0, L = a;
                var ge = h.pingCache;
                if (ge === null ? (ge = h.pingCache = new bd(), G = /* @__PURE__ */ new Set(), ge.set(he, G)) : (G = ge.get(he), G === void 0 && (G = /* @__PURE__ */ new Set(), ge.set(he, G))), !G.has(L)) {
                  G.add(L);
                  var _e = ch.bind(null, h, he, L);
                  he.then(_e, _e);
                }
                ke.flags |= 4096, ke.lanes = a;
                break e;
              }
              ke = ke.return;
            } while (ke !== null);
            G = Error((dt(L.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          qn !== 5 && (qn = 2), G = Sf(G, L), ke = R;
          do {
            switch (ke.tag) {
              case 3:
                h = G, ke.flags |= 4096, a &= -a, ke.lanes |= a;
                var xt = Sd(ke, h, a);
                dd(ke, xt);
                break e;
              case 1:
                h = G;
                var Ye = ke.type, mt = ke.stateNode;
                if (!(ke.flags & 64) && (typeof Ye.getDerivedStateFromError == "function" || mt !== null && typeof mt.componentDidCatch == "function" && (La === null || !La.has(mt)))) {
                  ke.flags |= 4096, a &= -a, ke.lanes |= a;
                  var Et = _d(ke, h, a);
                  dd(ke, Et);
                  break e;
                }
            }
            ke = ke.return;
          } while (ke !== null);
        }
        zd(o);
      } catch (gt) {
        a = gt, wn === o && o !== null && (wn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ru() {
    var n = Cu.current;
    return Cu.current = js, n === null ? js : n;
  }
  function Bl(n, a) {
    var o = vt;
    vt |= 16;
    var l = Ru();
    Sr === n && ar === a || Bo(n, a);
    do
      try {
        Nd();
        break;
      } catch (f) {
        Qs(n, f);
      }
    while (!0);
    if (rf(), vt = o, Cu.current = l, wn !== null)
      throw Error(p(261));
    return Sr = null, ar = 0, qn;
  }
  function Nd() {
    for (; wn !== null; )
      Mf(wn);
  }
  function Md() {
    for (; wn !== null && !Kv(); )
      Mf(wn);
  }
  function Mf(n) {
    var a = Ud(n.alternate, n, za);
    n.memoizedProps = n.pendingProps, a === null ? zd(n) : wn = a, wo.current = null;
  }
  function zd(n) {
    var a = n;
    do {
      var o = a.alternate;
      if (n = a.return, a.flags & 2048) {
        if (o = Cd(a), o !== null) {
          o.flags &= 2047, wn = o;
          return;
        }
        n !== null && (n.firstEffect = n.lastEffect = null, n.flags |= 2048);
      } else {
        if (o = rh(o, a, za), o !== null) {
          wn = o;
          return;
        }
        if (o = a, o.tag !== 24 && o.tag !== 23 || o.memoizedState === null || za & 1073741824 || !(o.mode & 4)) {
          for (var l = 0, f = o.child; f !== null; )
            l |= f.lanes | f.childLanes, f = f.sibling;
          o.childLanes = l;
        }
        n !== null && !(n.flags & 2048) && (n.firstEffect === null && (n.firstEffect = a.firstEffect), a.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = a.firstEffect), n.lastEffect = a.lastEffect), 1 < a.flags && (n.lastEffect !== null ? n.lastEffect.nextEffect = a : n.firstEffect = a, n.lastEffect = a));
      }
      if (a = a.sibling, a !== null) {
        wn = a;
        return;
      }
      wn = a = n;
    } while (a !== null);
    qn === 0 && (qn = 5);
  }
  function $i(n) {
    var a = uu();
    return xo(99, lh.bind(null, n, a)), null;
  }
  function lh(n, a) {
    do
      qi();
    while (ko !== null);
    if (vt & 48)
      throw Error(p(327));
    var o = n.finishedWork;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(p(177));
    n.callbackNode = null;
    var l = o.lanes | o.childLanes, f = l, h = n.pendingLanes & ~f;
    n.pendingLanes = f, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= f, n.mutableReadLanes &= f, n.entangledLanes &= f, f = n.entanglements;
    for (var R = n.eventTimes, L = n.expirationTimes; 0 < h; ) {
      var G = 31 - Da(h), he = 1 << G;
      f[G] = 0, R[G] = -1, L[G] = -1, h &= ~he;
    }
    if (li !== null && !(l & 24) && li.has(n) && li.delete(n), n === Sr && (wn = Sr = null, ar = 0), 1 < o.flags ? o.lastEffect !== null ? (o.lastEffect.nextEffect = o, l = o.firstEffect) : l = o : l = o.firstEffect, l !== null) {
      if (f = vt, vt |= 32, wo.current = null, Qc = Yu, R = Es(), fo(R)) {
        if ("selectionStart" in R)
          L = { start: R.selectionStart, end: R.selectionEnd };
        else
          e:
            if (L = (L = R.ownerDocument) && L.defaultView || window, (he = L.getSelection && L.getSelection()) && he.rangeCount !== 0) {
              L = he.anchorNode, h = he.anchorOffset, G = he.focusNode, he = he.focusOffset;
              try {
                L.nodeType, G.nodeType;
              } catch {
                L = null;
                break e;
              }
              var We = 0, ht = -1, ke = -1, Ze = 0, pt = 0, ot = R, ue = null;
              t:
                for (; ; ) {
                  for (var te; ot !== L || h !== 0 && ot.nodeType !== 3 || (ht = We + h), ot !== G || he !== 0 && ot.nodeType !== 3 || (ke = We + he), ot.nodeType === 3 && (We += ot.nodeValue.length), (te = ot.firstChild) !== null; )
                    ue = ot, ot = te;
                  for (; ; ) {
                    if (ot === R)
                      break t;
                    if (ue === L && ++Ze === h && (ht = We), ue === G && ++pt === he && (ke = We), (te = ot.nextSibling) !== null)
                      break;
                    ot = ue, ue = ot.parentNode;
                  }
                  ot = te;
                }
              L = ht === -1 || ke === -1 ? null : { start: ht, end: ke };
            } else
              L = null;
        L = L || { start: 0, end: 0 };
      } else
        L = null;
      Gc = { focusedElem: R, selectionRange: L }, Yu = !1, kl = null, $s = !1, qe = l;
      do
        try {
          sh();
        } catch (gt) {
          if (qe === null)
            throw Error(p(330));
          Yi(qe, gt), qe = qe.nextEffect;
        }
      while (qe !== null);
      kl = null, qe = l;
      do
        try {
          for (R = n; qe !== null; ) {
            var ie = qe.flags;
            if (ie & 16 && It(qe.stateNode, ""), ie & 128) {
              var ge = qe.alternate;
              if (ge !== null) {
                var _e = ge.ref;
                _e !== null && (typeof _e == "function" ? _e(null) : _e.current = null);
              }
            }
            switch (ie & 1038) {
              case 2:
                Ad(qe), qe.flags &= -3;
                break;
              case 6:
                Ad(qe), qe.flags &= -3, wf(qe.alternate, qe);
                break;
              case 1024:
                qe.flags &= -1025;
                break;
              case 1028:
                qe.flags &= -1025, wf(qe.alternate, qe);
                break;
              case 4:
                wf(qe.alternate, qe);
                break;
              case 8:
                L = qe, kd(R, L);
                var xt = L.alternate;
                wd(L), xt !== null && wd(xt);
            }
            qe = qe.nextEffect;
          }
        } catch (gt) {
          if (qe === null)
            throw Error(p(330));
          Yi(qe, gt), qe = qe.nextEffect;
        }
      while (qe !== null);
      if (_e = Gc, ge = Es(), ie = _e.focusedElem, R = _e.selectionRange, ge !== ie && ie && ie.ownerDocument && Vc(ie.ownerDocument.documentElement, ie)) {
        for (R !== null && fo(ie) && (ge = R.start, _e = R.end, _e === void 0 && (_e = ge), "selectionStart" in ie ? (ie.selectionStart = ge, ie.selectionEnd = Math.min(_e, ie.value.length)) : (_e = (ge = ie.ownerDocument || document) && ge.defaultView || window, _e.getSelection && (_e = _e.getSelection(), L = ie.textContent.length, xt = Math.min(R.start, L), R = R.end === void 0 ? xt : Math.min(R.end, L), !_e.extend && xt > R && (L = R, R = xt, xt = L), L = J0(ie, xt), h = J0(ie, R), L && h && (_e.rangeCount !== 1 || _e.anchorNode !== L.node || _e.anchorOffset !== L.offset || _e.focusNode !== h.node || _e.focusOffset !== h.offset) && (ge = ge.createRange(), ge.setStart(L.node, L.offset), _e.removeAllRanges(), xt > R ? (_e.addRange(ge), _e.extend(h.node, h.offset)) : (ge.setEnd(h.node, h.offset), _e.addRange(ge)))))), ge = [], _e = ie; _e = _e.parentNode; )
          _e.nodeType === 1 && ge.push({ element: _e, left: _e.scrollLeft, top: _e.scrollTop });
        for (typeof ie.focus == "function" && ie.focus(), ie = 0; ie < ge.length; ie++)
          _e = ge[ie], _e.element.scrollLeft = _e.left, _e.element.scrollTop = _e.top;
      }
      Yu = !!Qc, Gc = Qc = null, n.current = o, qe = l;
      do
        try {
          for (ie = n; qe !== null; ) {
            var Ye = qe.flags;
            if (Ye & 36 && Rf(ie, qe.alternate, qe), Ye & 128) {
              ge = void 0;
              var mt = qe.ref;
              if (mt !== null) {
                var Et = qe.stateNode;
                switch (qe.tag) {
                  case 5:
                    ge = Et;
                    break;
                  default:
                    ge = Et;
                }
                typeof mt == "function" ? mt(ge) : mt.current = ge;
              }
            }
            qe = qe.nextEffect;
          }
        } catch (gt) {
          if (qe === null)
            throw Error(p(330));
          Yi(qe, gt), qe = qe.nextEffect;
        }
      while (qe !== null);
      qe = null, sd(), vt = f;
    } else
      n.current = o;
    if (Vi)
      Vi = !1, ko = n, Dl = a;
    else
      for (qe = l; qe !== null; )
        a = qe.nextEffect, qe.nextEffect = null, qe.flags & 8 && (Ye = qe, Ye.sibling = null, Ye.stateNode = null), qe = a;
    if (l = n.pendingLanes, l === 0 && (La = null), l === 1 ? n === Is ? Al++ : (Al = 0, Is = n) : Al = 0, o = o.stateNode, yo && typeof yo.onCommitFiberRoot == "function")
      try {
        yo.onCommitFiberRoot(Kc, o, void 0, (o.current.flags & 64) === 64);
      } catch {
      }
    if (Jr(n, nr()), wl)
      throw wl = !1, n = Af, Af = null, n;
    return vt & 8 || jn(), null;
  }
  function sh() {
    for (; qe !== null; ) {
      var n = qe.alternate;
      $s || kl === null || (qe.flags & 8 ? _a(qe, kl) && ($s = !0) : qe.tag === 13 && oh(n, qe) && _a(qe, kl) && ($s = !0));
      var a = qe.flags;
      a & 256 && ih(n, qe), !(a & 512) || Vi || (Vi = !0, go(97, function() {
        return qi(), null;
      })), qe = qe.nextEffect;
    }
  }
  function qi() {
    if (Dl !== 90) {
      var n = 97 < Dl ? 97 : Dl;
      return Dl = 90, xo(n, Ld);
    }
    return !1;
  }
  function Pd(n, a) {
    kf.push(a, n), Vi || (Vi = !0, go(97, function() {
      return qi(), null;
    }));
  }
  function zf(n, a) {
    Bf.push(a, n), Vi || (Vi = !0, go(97, function() {
      return qi(), null;
    }));
  }
  function Ld() {
    if (ko === null)
      return !1;
    var n = ko;
    if (ko = null, vt & 48)
      throw Error(p(331));
    var a = vt;
    vt |= 32;
    var o = Bf;
    Bf = [];
    for (var l = 0; l < o.length; l += 2) {
      var f = o[l], h = o[l + 1], R = f.destroy;
      if (f.destroy = void 0, typeof R == "function")
        try {
          R();
        } catch (G) {
          if (h === null)
            throw Error(p(330));
          Yi(h, G);
        }
    }
    for (o = kf, kf = [], l = 0; l < o.length; l += 2) {
      f = o[l], h = o[l + 1];
      try {
        var L = f.create;
        f.destroy = L();
      } catch (G) {
        if (h === null)
          throw Error(p(330));
        Yi(h, G);
      }
    }
    for (L = n.current.firstEffect; L !== null; )
      n = L.nextEffect, L.nextEffect = null, L.flags & 8 && (L.sibling = null, L.stateNode = null), L = n;
    return vt = a, jn(), !0;
  }
  function Fo(n, a, o) {
    a = Sf(o, a), a = Sd(n, a, 1), ti(n, a), a = Vr(), n = qs(n, 1), n !== null && (_i(n, 1, a), Jr(n, a));
  }
  function Yi(n, a) {
    if (n.tag === 3)
      Fo(n, n, a);
    else
      for (var o = n.return; o !== null; ) {
        if (o.tag === 3) {
          Fo(o, n, a);
          break;
        } else if (o.tag === 1) {
          var l = o.stateNode;
          if (typeof o.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (La === null || !La.has(l))) {
            n = Sf(a, n);
            var f = _d(o, n, 1);
            if (ti(o, f), f = Vr(), o = qs(o, 1), o !== null)
              _i(o, 1, f), Jr(o, f);
            else if (typeof l.componentDidCatch == "function" && (La === null || !La.has(l)))
              try {
                l.componentDidCatch(a, n);
              } catch {
              }
            break;
          }
        }
        o = o.return;
      }
  }
  function ch(n, a, o) {
    var l = n.pingCache;
    l !== null && l.delete(a), a = Vr(), n.pingedLanes |= n.suspendedLanes & o, Sr === n && (ar & o) === o && (qn === 4 || qn === 3 && (ar & 62914560) === ar && 500 > nr() - Tl ? Bo(n, 0) : Df |= o), Jr(n, a);
  }
  function fh(n, a) {
    var o = n.stateNode;
    o !== null && o.delete(a), a = 0, a === 0 && (a = n.mode, a & 2 ? a & 4 ? (si === 0 && (si = pa), a = jr(62914560 & ~si), a === 0 && (a = 4194304)) : a = uu() === 99 ? 1 : 2 : a = 1), o = Vr(), n = qs(n, a), n !== null && (_i(n, a, o), Jr(n, o));
  }
  var Ud;
  Ud = function(n, a, o) {
    var l = a.lanes;
    if (n !== null)
      if (n.memoizedProps !== a.pendingProps || er.current)
        Zr = !0;
      else if (o & l)
        Zr = !!(n.flags & 16384);
      else {
        switch (Zr = !1, a.tag) {
          case 3:
            xd(a), fu();
            break;
          case 5:
            pd(a);
            break;
          case 1:
            tr(a.type) && Xr(a);
            break;
          case 4:
            pl(a, a.stateNode.containerInfo);
            break;
          case 10:
            l = a.memoizedProps.value;
            var f = a.type._context;
            st(Mi, f._currentValue), f._currentValue = l;
            break;
          case 13:
            if (a.memoizedState !== null)
              return o & a.child.childLanes ? Hi(n, a, o) : (st(yn, yn.current & 1), a = ui(n, a, o), a !== null ? a.sibling : null);
            st(yn, yn.current & 1);
            break;
          case 19:
            if (l = (o & a.childLanes) !== 0, n.flags & 64) {
              if (l)
                return nh(n, a, o);
              a.flags |= 64;
            }
            if (f = a.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), st(yn, yn.current), l)
              break;
            return null;
          case 23:
          case 24:
            return a.lanes = 0, xu(n, a, o);
        }
        return ui(n, a, o);
      }
    else
      Zr = !1;
    switch (a.lanes = 0, a.tag) {
      case 2:
        if (l = a.type, n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), n = a.pendingProps, f = $t(a, ln.current), Eo(a, o), f = df(null, a, l, n, f, o), a.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) {
          if (a.tag = 1, a.memoizedState = null, a.updateQueue = null, tr(l)) {
            var h = !0;
            Xr(a);
          } else
            h = !1;
          a.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, of(a);
          var R = l.getDerivedStateFromProps;
          typeof R == "function" && ul(a, l, R, n), f.updater = lu, a.stateNode = f, f._reactInternals = a, Ps(a, l, n, o), a = Cf(null, a, l, !0, h, o);
        } else
          a.tag = 0, Dr(null, a, f, o), a = a.child;
        return a;
      case 16:
        f = a.elementType;
        e: {
          switch (n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), n = a.pendingProps, h = f._init, f = h(f._payload), a.type = f, h = a.tag = ph(f), n = Hn(f, n), h) {
            case 0:
              a = Ef(null, a, f, n, o);
              break e;
            case 1:
              a = yd(null, a, f, n, o);
              break e;
            case 11:
              a = xf(null, a, f, n, o);
              break e;
            case 14:
              a = gf(null, a, f, Hn(f.type, n), l, o);
              break e;
          }
          throw Error(p(306, f, ""));
        }
        return a;
      case 0:
        return l = a.type, f = a.pendingProps, f = a.elementType === l ? f : Hn(l, f), Ef(n, a, l, f, o);
      case 1:
        return l = a.type, f = a.pendingProps, f = a.elementType === l ? f : Hn(l, f), yd(n, a, l, f, o);
      case 3:
        if (xd(a), l = a.updateQueue, n === null || l === null)
          throw Error(p(282));
        if (l = a.pendingProps, f = a.memoizedState, f = f !== null ? f.element : null, fd(n, a), ni(a, l, null, o), l = a.memoizedState.element, l === f)
          fu(), a = ui(n, a, o);
        else {
          if (f = a.stateNode, (h = f.hydrate) && (ri = Ai(a.stateNode.containerInfo.firstChild), Na = a, h = Ma = !0), h) {
            if (n = f.mutableSourceEagerHydrationData, n != null)
              for (f = 0; f < n.length; f += 2)
                h = n[f], h._workInProgressVersionPrimary = n[f + 1], Ro.push(h);
            for (o = sf(a, null, l, o), a.child = o; o; )
              o.flags = o.flags & -3 | 1024, o = o.sibling;
          } else
            Dr(n, a, l, o), fu();
          a = a.child;
        }
        return a;
      case 5:
        return pd(a), n === null && Pi(a), l = a.type, f = a.pendingProps, h = n !== null ? n.memoizedProps : null, R = f.children, rl(l, f) ? R = null : h !== null && rl(l, h) && (a.flags |= 16), md(n, a), Dr(n, a, R, o), a.child;
      case 6:
        return n === null && Pi(a), null;
      case 13:
        return Hi(n, a, o);
      case 4:
        return pl(a, a.stateNode.containerInfo), l = a.pendingProps, n === null ? a.child = cl(a, null, l, o) : Dr(n, a, l, o), a.child;
      case 11:
        return l = a.type, f = a.pendingProps, f = a.elementType === l ? f : Hn(l, f), xf(n, a, l, f, o);
      case 7:
        return Dr(n, a, a.pendingProps, o), a.child;
      case 8:
        return Dr(
          n,
          a,
          a.pendingProps.children,
          o
        ), a.child;
      case 12:
        return Dr(n, a, a.pendingProps.children, o), a.child;
      case 10:
        e: {
          l = a.type._context, f = a.pendingProps, R = a.memoizedProps, h = f.value;
          var L = a.type._context;
          if (st(Mi, L._currentValue), L._currentValue = h, R !== null)
            if (L = R.value, h = Gr(L, h) ? 0 : (typeof l._calculateChangedBits == "function" ? l._calculateChangedBits(L, h) : 1073741823) | 0, h === 0) {
              if (R.children === f.children && !er.current) {
                a = ui(n, a, o);
                break e;
              }
            } else
              for (L = a.child, L !== null && (L.return = a); L !== null; ) {
                var G = L.dependencies;
                if (G !== null) {
                  R = L.child;
                  for (var he = G.firstContext; he !== null; ) {
                    if (he.context === l && he.observedBits & h) {
                      L.tag === 1 && (he = fa(-1, o & -o), he.tag = 2, ti(L, he)), L.lanes |= o, he = L.alternate, he !== null && (he.lanes |= o), af(L.return, o), G.lanes |= o;
                      break;
                    }
                    he = he.next;
                  }
                } else
                  R = L.tag === 10 && L.type === a.type ? null : L.child;
                if (R !== null)
                  R.return = L;
                else
                  for (R = L; R !== null; ) {
                    if (R === a) {
                      R = null;
                      break;
                    }
                    if (L = R.sibling, L !== null) {
                      L.return = R.return, R = L;
                      break;
                    }
                    R = R.return;
                  }
                L = R;
              }
          Dr(n, a, f.children, o), a = a.child;
        }
        return a;
      case 9:
        return f = a.type, h = a.pendingProps, l = h.children, Eo(a, o), f = Ir(
          f,
          h.unstable_observedBits
        ), l = l(f), a.flags |= 1, Dr(n, a, l, o), a.child;
      case 14:
        return f = a.type, h = Hn(f, a.pendingProps), h = Hn(f.type, h), gf(n, a, f, h, l, o);
      case 15:
        return hd(n, a, a.type, a.pendingProps, l, o);
      case 17:
        return l = a.type, f = a.pendingProps, f = a.elementType === l ? f : Hn(l, f), n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), a.tag = 1, tr(l) ? (n = !0, Xr(a)) : n = !1, Eo(a, o), Co(a, l, f), Ps(a, l, f, o), Cf(null, a, l, !0, n, o);
      case 19:
        return nh(n, a, o);
      case 23:
        return xu(n, a, o);
      case 24:
        return xu(n, a, o);
    }
    throw Error(p(156, a.tag));
  };
  function dh(n, a, o, l) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ea(n, a, o, l) {
    return new dh(n, a, o, l);
  }
  function Gs(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ph(n) {
    if (typeof n == "function")
      return Gs(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ae)
        return 11;
      if (n === Oe)
        return 14;
    }
    return 2;
  }
  function Qi(n, a) {
    var o = n.alternate;
    return o === null ? (o = ea(n.tag, a, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = a, o.type = n.type, o.flags = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, a = n.dependencies, o.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Fl(n, a, o, l, f, h) {
    var R = 2;
    if (l = n, typeof n == "function")
      Gs(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case ne:
            return ja(o.children, f, h, a);
          case se:
            R = 8, f |= 16;
            break;
          case re:
            R = 8, f |= 1;
            break;
          case W:
            return n = ea(12, o, a, f | 8), n.elementType = W, n.type = W, n.lanes = h, n;
          case be:
            return n = ea(13, o, a, f), n.type = be, n.elementType = be, n.lanes = h, n;
          case Re:
            return n = ea(19, o, a, f), n.elementType = Re, n.lanes = h, n;
          case P:
            return Oo(o, f, h, a);
          case q:
            return n = ea(24, o, a, f), n.elementType = q, n.lanes = h, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case K:
                  R = 10;
                  break e;
                case le:
                  R = 9;
                  break e;
                case ae:
                  R = 11;
                  break e;
                case Oe:
                  R = 14;
                  break e;
                case J:
                  R = 16, l = null;
                  break e;
                case pe:
                  R = 22;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return a = ea(R, o, a, f), a.elementType = n, a.type = l, a.lanes = h, a;
  }
  function ja(n, a, o, l) {
    return n = ea(7, n, l, a), n.lanes = o, n;
  }
  function Oo(n, a, o, l) {
    return n = ea(23, n, l, a), n.elementType = P, n.lanes = o, n;
  }
  function Pf(n, a, o) {
    return n = ea(6, n, null, a), n.lanes = o, n;
  }
  function Lf(n, a, o) {
    return a = ea(4, n.children !== null ? n.children : [], n.key, a), a.lanes = o, a.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, a;
  }
  function vh(n, a, o) {
    this.tag = a, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = o, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Si(0), this.expirationTimes = Si(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Si(0), this.mutableSourceEagerHydrationData = null;
  }
  function Xs(n, a, o) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: l == null ? null : "" + l, children: n, containerInfo: a, implementation: o };
  }
  function Ks(n, a, o, l) {
    var f = a.current, h = Vr(), R = Ua(f);
    e:
      if (o) {
        o = o._reactInternals;
        t: {
          if (Un(o) !== o || o.tag !== 1)
            throw Error(p(170));
          var L = o;
          do {
            switch (L.tag) {
              case 3:
                L = L.stateNode.context;
                break t;
              case 1:
                if (tr(L.type)) {
                  L = L.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            L = L.return;
          } while (L !== null);
          throw Error(p(171));
        }
        if (o.tag === 1) {
          var G = o.type;
          if (tr(G)) {
            o = ou(o, G, L);
            break e;
          }
        }
        o = L;
      } else
        o = Bi;
    return a.context === null ? a.context = o : a.pendingContext = o, a = fa(h, R), a.payload = { element: n }, l = l === void 0 ? null : l, l !== null && (a.callback = l), ti(f, a), Wi(f, R, h), R;
  }
  function Zs(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function jd(n, a) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < a ? o : a;
    }
  }
  function Js(n, a) {
    jd(n, a), (n = n.alternate) && jd(n, a);
  }
  function Hd() {
    return null;
  }
  function Uf(n, a, o) {
    var l = o != null && o.hydrationOptions != null && o.hydrationOptions.mutableSources || null;
    if (o = new vh(n, a, o != null && o.hydrate === !0), a = ea(3, null, null, a === 2 ? 7 : a === 1 ? 3 : 0), o.current = a, a.stateNode = o, of(a), n[gr] = o.current, Yc(n.nodeType === 8 ? n.parentNode : n), l)
      for (n = 0; n < l.length; n++) {
        a = l[n];
        var f = a._getVersion;
        f = f(a._source), o.mutableSourceEagerHydrationData == null ? o.mutableSourceEagerHydrationData = [a, f] : o.mutableSourceEagerHydrationData.push(a, f);
      }
    this._internalRoot = o;
  }
  Uf.prototype.render = function(n) {
    Ks(n, this._internalRoot, null, null);
  }, Uf.prototype.unmount = function() {
    var n = this._internalRoot, a = n.containerInfo;
    Ks(null, n, null, function() {
      a[gr] = null;
    });
  };
  function Ol(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function hh(n, a) {
    if (a || (a = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, a = !(!a || a.nodeType !== 1 || !a.hasAttribute("data-reactroot"))), !a)
      for (var o; o = n.lastChild; )
        n.removeChild(o);
    return new Uf(n, 0, a ? { hydrate: !0 } : void 0);
  }
  function ec(n, a, o, l, f) {
    var h = o._reactRootContainer;
    if (h) {
      var R = h._internalRoot;
      if (typeof f == "function") {
        var L = f;
        f = function() {
          var he = Zs(R);
          L.call(he);
        };
      }
      Ks(a, R, n, f);
    } else {
      if (h = o._reactRootContainer = hh(o, l), R = h._internalRoot, typeof f == "function") {
        var G = f;
        f = function() {
          var he = Zs(R);
          G.call(he);
        };
      }
      Od(function() {
        Ks(a, R, n, f);
      });
    }
    return Zs(R);
  }
  ss = function(n) {
    if (n.tag === 13) {
      var a = Vr();
      Wi(n, 4, a), Js(n, 4);
    }
  }, gi = function(n) {
    if (n.tag === 13) {
      var a = Vr();
      Wi(n, 67108864, a), Js(n, 67108864);
    }
  }, Wu = function(n) {
    if (n.tag === 13) {
      var a = Vr(), o = Ua(n);
      Wi(n, o, a), Js(n, o);
    }
  }, Ei = function(n, a) {
    return a();
  }, dr = function(n, a, o) {
    switch (a) {
      case "input":
        if (un(n, o), a = o.name, o.type === "radio" && a != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < o.length; a++) {
            var l = o[a];
            if (l !== n && l.form === n.form) {
              var f = Ja(l);
              if (!f)
                throw Error(p(90));
              Bn(l), un(l, f);
            }
          }
        }
        break;
      case "textarea":
        Mr(n, o);
        break;
      case "select":
        a = o.value, a != null && Ot(n, !!o.multiple, a, !1);
    }
  }, Q = Fd, Ee = function(n, a, o, l, f) {
    var h = vt;
    vt |= 4;
    try {
      return xo(98, n.bind(null, a, o, l, f));
    } finally {
      vt = h, vt === 0 && (Su(), jn());
    }
  }, ze = function() {
    !(vt & 49) && (uh(), qi());
  }, Je = function(n, a) {
    var o = vt;
    vt |= 2;
    try {
      return n(a);
    } finally {
      vt = o, vt === 0 && (Su(), jn());
    }
  };
  function Id(n, a) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ol(a))
      throw Error(p(200));
    return Xs(n, a, null, o);
  }
  var mh = { Events: [Hr, Er, Ja, en, oa, qi, { current: !1 }] }, Nl = { findFiberByHostInstance: mo, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, yh = { bundleType: Nl.bundleType, version: Nl.version, rendererPackageName: Nl.rendererPackageName, rendererConfig: Nl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: T.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = xi(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Nl.findFiberByHostInstance || Hd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tc.isDisabled && tc.supportsFiber)
      try {
        Kc = tc.inject(yh), yo = tc;
      } catch {
      }
  }
  return ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh, ga.createPortal = Id, ga.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : Error(p(268, Object.keys(n)));
    return n = xi(a), n = n === null ? null : n.stateNode, n;
  }, ga.flushSync = function(n, a) {
    var o = vt;
    if (o & 48)
      return n(a);
    vt |= 1;
    try {
      if (n)
        return xo(99, n.bind(null, a));
    } finally {
      vt = o, jn();
    }
  }, ga.hydrate = function(n, a, o) {
    if (!Ol(a))
      throw Error(p(200));
    return ec(null, n, a, !0, o);
  }, ga.render = function(n, a, o) {
    if (!Ol(a))
      throw Error(p(200));
    return ec(null, n, a, !1, o);
  }, ga.unmountComponentAtNode = function(n) {
    if (!Ol(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Od(function() {
      ec(null, null, n, !1, function() {
        n._reactRootContainer = null, n[gr] = null;
      });
    }), !0) : !1;
  }, ga.unstable_batchedUpdates = Fd, ga.unstable_createPortal = function(n, a) {
    return Id(n, a, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, ga.unstable_renderSubtreeIntoContainer = function(n, a, o, l) {
    if (!Ol(o))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
    return ec(n, a, o, !1, l);
  }, ga.version = "17.0.2", ga;
}
var Ea = {}, xv = { exports: {} }, hi = {};
/** @license React v0.20.2
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FC;
function iR() {
  if (FC)
    return hi;
  FC = 1;
  var c = 0;
  return hi.__interactionsRef = null, hi.__subscriberRef = null, hi.unstable_clear = function(g) {
    return g();
  }, hi.unstable_getCurrent = function() {
    return null;
  }, hi.unstable_getThreadID = function() {
    return ++c;
  }, hi.unstable_subscribe = function() {
  }, hi.unstable_trace = function(g, x, p) {
    return p();
  }, hi.unstable_unsubscribe = function() {
  }, hi.unstable_wrap = function(g) {
    return g;
  }, hi;
}
var qy = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OC;
function oR() {
  return OC || (OC = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      var g = 0, x = 0, p = 0;
      c.__interactionsRef = null, c.__subscriberRef = null, c.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, c.__subscriberRef = {
        current: null
      };
      function F(b) {
        var S = c.__interactionsRef.current;
        c.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return b();
        } finally {
          c.__interactionsRef.current = S;
        }
      }
      function A() {
        return c.__interactionsRef.current;
      }
      function y() {
        return ++p;
      }
      function B(b, S, N) {
        var T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : g, V = {
          __count: 1,
          id: x++,
          name: b,
          timestamp: S
        }, Y = c.__interactionsRef.current, ne = new Set(Y);
        ne.add(V), c.__interactionsRef.current = ne;
        var re = c.__subscriberRef.current, W;
        try {
          re !== null && re.onInteractionTraced(V);
        } finally {
          try {
            re !== null && re.onWorkStarted(ne, T);
          } finally {
            try {
              W = N();
            } finally {
              c.__interactionsRef.current = Y;
              try {
                re !== null && re.onWorkStopped(ne, T);
              } finally {
                V.__count--, re !== null && V.__count === 0 && re.onInteractionScheduledWorkCompleted(V);
              }
            }
          }
        }
        return W;
      }
      function D(b) {
        var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : g, N = c.__interactionsRef.current, T = c.__subscriberRef.current;
        T !== null && T.onWorkScheduled(N, S), N.forEach(function(ne) {
          ne.__count++;
        });
        var V = !1;
        function Y() {
          var ne = c.__interactionsRef.current;
          c.__interactionsRef.current = N, T = c.__subscriberRef.current;
          try {
            var re;
            try {
              T !== null && T.onWorkStarted(N, S);
            } finally {
              try {
                re = b.apply(void 0, arguments);
              } finally {
                c.__interactionsRef.current = ne, T !== null && T.onWorkStopped(N, S);
              }
            }
            return re;
          } finally {
            V || (V = !0, N.forEach(function(W) {
              W.__count--, T !== null && W.__count === 0 && T.onInteractionScheduledWorkCompleted(W);
            }));
          }
        }
        return Y.cancel = function() {
          T = c.__subscriberRef.current;
          try {
            T !== null && T.onWorkCanceled(N, S);
          } finally {
            N.forEach(function(re) {
              re.__count--, T && re.__count === 0 && T.onInteractionScheduledWorkCompleted(re);
            });
          }
        }, Y;
      }
      var m = null;
      m = /* @__PURE__ */ new Set();
      function w(b) {
        m.add(b), m.size === 1 && (c.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: k,
          onInteractionTraced: _,
          onWorkCanceled: H,
          onWorkScheduled: M,
          onWorkStarted: j,
          onWorkStopped: O
        });
      }
      function z(b) {
        m.delete(b), m.size === 0 && (c.__subscriberRef.current = null);
      }
      function _(b) {
        var S = !1, N = null;
        if (m.forEach(function(T) {
          try {
            T.onInteractionTraced(b);
          } catch (V) {
            S || (S = !0, N = V);
          }
        }), S)
          throw N;
      }
      function k(b) {
        var S = !1, N = null;
        if (m.forEach(function(T) {
          try {
            T.onInteractionScheduledWorkCompleted(b);
          } catch (V) {
            S || (S = !0, N = V);
          }
        }), S)
          throw N;
      }
      function M(b, S) {
        var N = !1, T = null;
        if (m.forEach(function(V) {
          try {
            V.onWorkScheduled(b, S);
          } catch (Y) {
            N || (N = !0, T = Y);
          }
        }), N)
          throw T;
      }
      function j(b, S) {
        var N = !1, T = null;
        if (m.forEach(function(V) {
          try {
            V.onWorkStarted(b, S);
          } catch (Y) {
            N || (N = !0, T = Y);
          }
        }), N)
          throw T;
      }
      function O(b, S) {
        var N = !1, T = null;
        if (m.forEach(function(V) {
          try {
            V.onWorkStopped(b, S);
          } catch (Y) {
            N || (N = !0, T = Y);
          }
        }), N)
          throw T;
      }
      function H(b, S) {
        var N = !1, T = null;
        if (m.forEach(function(V) {
          try {
            V.onWorkCanceled(b, S);
          } catch (Y) {
            N || (N = !0, T = Y);
          }
        }), N)
          throw T;
      }
      c.unstable_clear = F, c.unstable_getCurrent = A, c.unstable_getThreadID = y, c.unstable_subscribe = w, c.unstable_trace = B, c.unstable_unsubscribe = z, c.unstable_wrap = D;
    }();
  }(qy)), qy;
}
var NC;
function uR() {
  return NC || (NC = 1, process.env.NODE_ENV === "production" ? xv.exports = iR() : xv.exports = oR()), xv.exports;
}
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var MC;
function lR() {
  return MC || (MC = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Ne, g = rs(), x = O2(), p = uR(), F = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        B("warn", e, r);
      }
    }
    function y(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        B("error", e, r);
      }
    }
    function B(e, t, r) {
      {
        var i = F.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", r = r.concat([u]));
        var s = r.map(function(d) {
          return "" + d;
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    if (!c)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var D = 0, m = 1, w = 2, z = 3, _ = 4, k = 5, M = 6, j = 7, O = 8, H = 9, b = 10, S = 11, N = 12, T = 13, V = 14, Y = 15, ne = 16, re = 17, W = 18, K = 19, le = 20, ae = 21, be = 22, Re = 23, Oe = 24, J = !0, pe = !1, Be = !1, se = !1, P = /* @__PURE__ */ new Set(), q = {}, $ = {};
    function Z(e, t) {
      me(e, t), me(e + "Capture", t);
    }
    function me(e, t) {
      q[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), q[e] = t;
      {
        var r = e.toLowerCase();
        $[r] = e, e === "onDoubleClick" && ($.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        P.add(t[i]);
    }
    var Se = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ue = 0, De = 1, Ie = 2, Ke = 3, dt = 4, Te = 5, wt = 6, kt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ht = kt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Bn = "data-reactroot", zn = new RegExp("^[" + kt + "][" + Ht + "]*$"), Cn = Object.prototype.hasOwnProperty, Nr = {}, bn = {};
    function un(e) {
      return Cn.call(bn, e) ? !0 : Cn.call(Nr, e) ? !1 : zn.test(e) ? (bn[e] = !0, !0) : (Nr[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, r) {
      return t !== null ? t.type === Ue : r ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Sn(e, t, r, i) {
      if (r !== null && r.type === Ue)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (r !== null)
            return !r.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function mn(e, t, r, i) {
      if (t === null || typeof t > "u" || Sn(e, t, r, i))
        return !0;
      if (i)
        return !1;
      if (r !== null)
        switch (r.type) {
          case Ke:
            return !t;
          case dt:
            return t === !1;
          case Te:
            return isNaN(t);
          case wt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Gn(e) {
      return Lt.hasOwnProperty(e) ? Lt[e] : null;
    }
    function Ot(e, t, r, i, u, s, d) {
      this.acceptsBooleans = t === Ie || t === Ke || t === dt, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var Lt = {}, ia = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ia.forEach(function(e) {
      Lt[e] = new Ot(
        e,
        Ue,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      Lt[t] = new Ot(
        t,
        De,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        Ie,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        Ie,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        Ke,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        Ke,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        dt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        wt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        Te,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Mr = /[\-\:]([a-z])/g, Rr = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Mr, Rr);
      Lt[t] = new Ot(
        t,
        De,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Mr, Rr);
      Lt[t] = new Ot(
        t,
        De,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Mr, Rr);
      Lt[t] = new Ot(
        t,
        De,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        De,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Me = "xlinkHref";
    Lt[Me] = new Ot(
      "xlinkHref",
      De,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Lt[e] = new Ot(
        e,
        De,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ve = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, it = !1;
    function Tt(e) {
      !it && Ve.test(e) && (it = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ut(e, t, r, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        i.sanitizeURL && Tt("" + r);
        var s = i.attributeName, d = null;
        if (i.type === dt) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : mn(t, r, i, !1) ? v : v === "" + r ? r : v;
          }
        } else if (e.hasAttribute(s)) {
          if (mn(t, r, i, !1))
            return e.getAttribute(s);
          if (i.type === Ke)
            return r;
          d = e.getAttribute(s);
        }
        return mn(t, r, i, !1) ? d === null ? r : d : d === "" + r ? r : d;
      }
    }
    function It(e, t, r) {
      {
        if (!un(t))
          return;
        if (gS(r))
          return r;
        if (!e.hasAttribute(t))
          return r === void 0 ? void 0 : null;
        var i = e.getAttribute(t);
        return i === "" + r ? r : i;
      }
    }
    function Vt(e, t, r, i) {
      var u = Gn(t);
      if (!hn(t, u, i)) {
        if (mn(t, r, u, i) && (r = null), i || u === null) {
          if (un(t)) {
            var s = t;
            r === null ? e.removeAttribute(s) : e.setAttribute(s, "" + r);
          }
          return;
        }
        var d = u.mustUseProperty;
        if (d) {
          var v = u.propertyName;
          if (r === null) {
            var E = u.type;
            e[v] = E === Ke ? !1 : "";
          } else
            e[v] = r;
          return;
        }
        var U = u.attributeName, I = u.attributeNamespace;
        if (r === null)
          e.removeAttribute(U);
        else {
          var ce = u.type, X;
          ce === Ke || ce === dt && r === !0 ? X = "" : (X = "" + r, u.sanitizeURL && Tt(X.toString())), I ? e.setAttributeNS(I, U, X) : e.setAttribute(U, X);
        }
      }
    }
    var dn = 60103, Yt = 60106, Fn = 60107, Sa = 60108, fr = 60114, zr = 60109, qr = 60110, dr = 60112, On = 60113, Pn = 60120, Pr = 60115, en = 60116, oa = 60121, Q = 60119, Ee = 60128, ze = 60129, Je = 60130, Ct = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var nt = Symbol.for;
      dn = nt("react.element"), Yt = nt("react.portal"), Fn = nt("react.fragment"), Sa = nt("react.strict_mode"), fr = nt("react.profiler"), zr = nt("react.provider"), qr = nt("react.context"), dr = nt("react.forward_ref"), On = nt("react.suspense"), Pn = nt("react.suspense_list"), Pr = nt("react.memo"), en = nt("react.lazy"), oa = nt("react.block"), nt("react.server.block"), nt("react.fundamental"), Q = nt("react.scope"), Ee = nt("react.opaque.id"), ze = nt("react.debug_trace_mode"), Je = nt("react.offscreen"), Ct = nt("react.legacy_hidden");
    }
    var St = typeof Symbol == "function" && Symbol.iterator, Rt = "@@iterator";
    function Qt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = St && e[St] || e[Rt];
      return typeof t == "function" ? t : null;
    }
    var Bt = 0, Wt, pr, ir, ua, Ln, uo, Iu;
    function Vu() {
    }
    Vu.__reactDisabledLog = !0;
    function Yr() {
      {
        if (Bt === 0) {
          Wt = console.log, pr = console.info, ir = console.warn, ua = console.error, Ln = console.group, uo = console.groupCollapsed, Iu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Vu,
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
        Bt++;
      }
    }
    function Un() {
      {
        if (Bt--, Bt === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: Wt
            }),
            info: g({}, e, {
              value: pr
            }),
            warn: g({}, e, {
              value: ir
            }),
            error: g({}, e, {
              value: ua
            }),
            group: g({}, e, {
              value: Ln
            }),
            groupCollapsed: g({}, e, {
              value: uo
            }),
            groupEnd: g({}, e, {
              value: Iu
            })
          });
        }
        Bt < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mi = F.ReactCurrentDispatcher, yi;
    function Lr(e, t, r) {
      {
        if (yi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yi = i && i[1] || "";
          }
        return `
` + yi + e;
      }
    }
    var xi = !1, _a;
    {
      var ss = typeof WeakMap == "function" ? WeakMap : Map;
      _a = new ss();
    }
    function gi(e, t) {
      if (!e || xi)
        return "";
      {
        var r = _a.get(e);
        if (r !== void 0)
          return r;
      }
      var i;
      xi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = mi.current, mi.current = null, Yr();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (we) {
              i = we;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (we) {
              i = we;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            i = we;
          }
          e();
        }
      } catch (we) {
        if (we && i && typeof we.stack == "string") {
          for (var v = we.stack.split(`
`), E = i.stack.split(`
`), U = v.length - 1, I = E.length - 1; U >= 1 && I >= 0 && v[U] !== E[I]; )
            I--;
          for (; U >= 1 && I >= 0; U--, I--)
            if (v[U] !== E[I]) {
              if (U !== 1 || I !== 1)
                do
                  if (U--, I--, I < 0 || v[U] !== E[I]) {
                    var ce = `
` + v[U].replace(" at new ", " at ");
                    return typeof e == "function" && _a.set(e, ce), ce;
                  }
                while (U >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        xi = !1, mi.current = s, Un(), Error.prepareStackTrace = u;
      }
      var X = e ? e.displayName || e.name : "", de = X ? Lr(X) : "";
      return typeof e == "function" && _a.set(e, de), de;
    }
    function Wu(e, t, r) {
      return gi(e, !0);
    }
    function Ei(e, t, r) {
      return gi(e, !1);
    }
    function Ci(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vr(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return gi(e, Ci(e));
      if (typeof e == "string")
        return Lr(e);
      switch (e) {
        case On:
          return Lr("Suspense");
        case Pn:
          return Lr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case dr:
            return Ei(e.render);
          case Pr:
            return vr(e.type, t, r);
          case oa:
            return Ei(e._render);
          case en: {
            var i = e, u = i._payload, s = i._init;
            try {
              return vr(s(u), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    function la(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case k:
          return Lr(e.type);
        case ne:
          return Lr("Lazy");
        case T:
          return Lr("Suspense");
        case K:
          return Lr("SuspenseList");
        case D:
        case w:
        case Y:
          return Ei(e.type);
        case S:
          return Ei(e.type.render);
        case be:
          return Ei(e.type._render);
        case m:
          return Wu(e.type);
        default:
          return "";
      }
    }
    function Tr(e) {
      try {
        var t = "", r = e;
        do
          t += la(r), r = r.return;
        while (r);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ra(e, t, r) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? r + "(" + i + ")" : r);
    }
    function Ur(e) {
      return e.displayName || "Context";
    }
    function Le(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Fn:
          return "Fragment";
        case Yt:
          return "Portal";
        case fr:
          return "Profiler";
        case Sa:
          return "StrictMode";
        case On:
          return "Suspense";
        case Pn:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qr:
            var t = e;
            return Ur(t) + ".Consumer";
          case zr:
            var r = e;
            return Ur(r._context) + ".Provider";
          case dr:
            return Ra(e, e.render, "ForwardRef");
          case Pr:
            return Le(e.type);
          case oa:
            return Le(e._render);
          case en: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Le(s(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qa = F.ReactDebugCurrentFrame, Xn = null, Ta = !1;
    function Ga() {
      {
        if (Xn === null)
          return null;
        var e = Xn._debugOwner;
        if (e !== null && typeof e < "u")
          return Le(e.type);
      }
      return null;
    }
    function lo() {
      return Xn === null ? "" : Tr(Xn);
    }
    function Kn() {
      Qa.getCurrentStack = null, Xn = null, Ta = !1;
    }
    function _n(e) {
      Qa.getCurrentStack = lo, Xn = e, Ta = !1;
    }
    function or(e) {
      Ta = e;
    }
    function cs() {
      return Ta;
    }
    function hr(e) {
      return "" + e;
    }
    function mr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    var fs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function bi(e, t) {
      fs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wa(e) {
      var t = e.type, r = e.nodeName;
      return r && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function $o(e) {
      return e._valueTracker;
    }
    function ds(e) {
      e._valueTracker = null;
    }
    function qo(e) {
      var t = "";
      return e && (wa(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ps(e) {
      var t = wa(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof r > "u" || typeof r.get != "function" || typeof r.set != "function")) {
        var u = r.get, s = r.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(v) {
            i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: r.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            i = "" + v;
          },
          stopTracking: function() {
            ds(e), delete e[t];
          }
        };
        return d;
      }
    }
    function C(e) {
      $o(e) || (e._valueTracker = ps(e));
    }
    function ee(e) {
      if (!e)
        return !1;
      var t = $o(e);
      if (!t)
        return !0;
      var r = t.getValue(), i = qo(e);
      return i !== r ? (t.setValue(i), !0) : !1;
    }
    function ve(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var xe = !1, je = !1, lt = !1, tt = !1;
    function rt(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function et(e, t) {
      var r = e, i = t.checked, u = g({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? r._wrapperState.initialChecked
      });
      return u;
    }
    function Mt(e, t) {
      bi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !je && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ga() || "A component", t.type), je = !0), t.value !== void 0 && t.defaultValue !== void 0 && !xe && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ga() || "A component", t.type), xe = !0);
      var r = e, i = t.defaultValue == null ? "" : t.defaultValue;
      r._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: mr(t.value != null ? t.value : i),
        controlled: rt(t)
      };
    }
    function an(e, t) {
      var r = e, i = t.checked;
      i != null && Vt(r, "checked", i, !1);
    }
    function pn(e, t) {
      var r = e;
      {
        var i = rt(t);
        !r._wrapperState.controlled && i && !tt && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), tt = !0), r._wrapperState.controlled && !i && !lt && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lt = !0);
      }
      an(e, t);
      var u = mr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && r.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        r.value != u) && (r.value = hr(u)) : r.value !== hr(u) && (r.value = hr(u));
      else if (s === "submit" || s === "reset") {
        r.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? jr(r, t.type, u) : t.hasOwnProperty("defaultValue") && jr(r, t.type, mr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
    }
    function Rn(e, t, r) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = hr(i._wrapperState.initialValue);
        r || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function Zn(e, t) {
      var r = e;
      pn(r, t), Jn(r, t);
    }
    function Jn(e, t) {
      var r = t.name;
      if (t.type === "radio" && r != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var d = u[s];
          if (!(d === e || d.form !== e.form)) {
            var v = ep(d);
            if (!v)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ee(d), pn(d, v);
          }
        }
      }
    }
    function jr(e, t, r) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ve(e.ownerDocument) !== e) && (r == null ? e.defaultValue = hr(e._wrapperState.initialValue) : e.defaultValue !== hr(r) && (e.defaultValue = hr(r)));
    }
    var Si = !1, _i = !1;
    function Da(e) {
      var t = "";
      return c.Children.forEach(e, function(r) {
        r != null && (t += r);
      }), t;
    }
    function $u(e, t) {
      typeof t.children == "object" && t.children !== null && c.Children.forEach(t.children, function(r) {
        r != null && (typeof r == "string" || typeof r == "number" || typeof r.type == "string" && (_i || (_i = !0, y("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !Si && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Si = !0);
    }
    function kc(e, t) {
      t.value != null && e.setAttribute("value", hr(mr(t.value)));
    }
    function Yo(e, t) {
      var r = g({
        children: void 0
      }, t), i = Da(t.children);
      return i && (r.children = i), r;
    }
    var qu;
    qu = !1;
    function F0() {
      var e = Ga();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Yu = ["value", "defaultValue"];
    function Ov(e) {
      {
        bi("select", e);
        for (var t = 0; t < Yu.length; t++) {
          var r = Yu[t];
          if (e[r] != null) {
            var i = Array.isArray(e[r]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", r, F0()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", r, F0());
          }
        }
      }
    }
    function Qo(e, t, r, i) {
      var u = e.options;
      if (t) {
        for (var s = r, d = {}, v = 0; v < s.length; v++)
          d["$" + s[v]] = !0;
        for (var E = 0; E < u.length; E++) {
          var U = d.hasOwnProperty("$" + u[E].value);
          u[E].selected !== U && (u[E].selected = U), U && i && (u[E].defaultSelected = !0);
        }
      } else {
        for (var I = hr(mr(r)), ce = null, X = 0; X < u.length; X++) {
          if (u[X].value === I) {
            u[X].selected = !0, i && (u[X].defaultSelected = !0);
            return;
          }
          ce === null && !u[X].disabled && (ce = u[X]);
        }
        ce !== null && (ce.selected = !0);
      }
    }
    function Qu(e, t) {
      return g({}, t, {
        value: void 0
      });
    }
    function vs(e, t) {
      var r = e;
      Ov(t), r._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !qu && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qu = !0);
    }
    function Ri(e, t) {
      var r = e;
      r.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Qo(r, !!t.multiple, i, !1) : t.defaultValue != null && Qo(r, !!t.multiple, t.defaultValue, !0);
    }
    function Bc(e, t) {
      var r = e, i = r._wrapperState.wasMultiple;
      r._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Qo(r, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Qo(r, !!t.multiple, t.defaultValue, !0) : Qo(r, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function hs(e, t) {
      var r = e, i = t.value;
      i != null && Qo(r, !!t.multiple, i, !1);
    }
    var Fc = !1;
    function Go(e, t) {
      var r = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = g({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: hr(r._wrapperState.initialValue)
      });
      return i;
    }
    function Gu(e, t) {
      var r = e;
      bi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Fc && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ga() || "A component"), Fc = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(u)) {
              if (!(u.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      r._wrapperState = {
        initialValue: mr(i)
      };
    }
    function Oc(e, t) {
      var r = e, i = mr(t.value), u = mr(t.defaultValue);
      if (i != null) {
        var s = hr(i);
        s !== r.value && (r.value = s), t.defaultValue == null && r.defaultValue !== s && (r.defaultValue = s);
      }
      u != null && (r.defaultValue = hr(u));
    }
    function wr(e, t) {
      var r = e, i = r.textContent;
      i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
    }
    function Xo(e, t) {
      Oc(e, t);
    }
    var Ko = "http://www.w3.org/1999/xhtml", Zo = "http://www.w3.org/1998/Math/MathML", Nc = "http://www.w3.org/2000/svg", ms = {
      html: Ko,
      mathml: Zo,
      svg: Nc
    };
    function Xu(e) {
      switch (e) {
        case "svg":
          return Nc;
        case "math":
          return Zo;
        default:
          return Ko;
      }
    }
    function so(e, t) {
      return e == null || e === Ko ? Xu(t) : e === Nc && t === "foreignObject" ? Ko : e;
    }
    var ys = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, r, i, u);
        });
      } : e;
    }, Ku, O0 = ys(function(e, t) {
      if (e.namespaceURI === ms.svg && !("innerHTML" in e)) {
        Ku = Ku || document.createElement("div"), Ku.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var r = Ku.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; r.firstChild; )
          e.appendChild(r.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Xa = 3, yr = 8, Ti = 9, N0 = 11, xs = function(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === Xa) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Nv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function M0(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      Mv.forEach(function(t) {
        Zu[M0(t, e)] = Zu[e];
      });
    });
    function Mc(e, t, r) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !r && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : ("" + t).trim();
    }
    var zv = /([A-Z])/g, Pv = /^ms-/;
    function zc(e) {
      return e.replace(zv, "-$1").toLowerCase().replace(Pv, "-ms-");
    }
    var z0 = function() {
    };
    {
      var Lv = /^(?:webkit|moz|o)[A-Z]/, Uv = /^-ms-/, P0 = /-(.)/g, L0 = /;\s*$/, Jo = {}, Pc = {}, U0 = !1, j0 = !1, jv = function(e) {
        return e.replace(P0, function(t, r) {
          return r.toUpperCase();
        });
      }, Hv = function(e) {
        Jo.hasOwnProperty(e) && Jo[e] || (Jo[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          jv(e.replace(Uv, "ms-"))
        ));
      }, Lc = function(e) {
        Jo.hasOwnProperty(e) && Jo[e] || (Jo[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ju = function(e, t) {
        Pc.hasOwnProperty(t) && Pc[t] || (Pc[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(L0, "")));
      }, Iv = function(e, t) {
        U0 || (U0 = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, H0 = function(e, t) {
        j0 || (j0 = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      z0 = function(e, t) {
        e.indexOf("-") > -1 ? Hv(e) : Lv.test(e) ? Lc(e) : L0.test(t) && Ju(e, t), typeof t == "number" && (isNaN(t) ? Iv(e, t) : isFinite(t) || H0(e, t));
      };
    }
    var I0 = z0;
    function V0(e) {
      {
        var t = "", r = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += r + (s ? i : zc(i)) + ":", t += Mc(i, u, s), r = ";";
            }
          }
        return t || null;
      }
    }
    function Uc(e, t) {
      var r = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || I0(i, t[i]);
          var s = Mc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? r.setProperty(i, s) : r[i] = s;
        }
    }
    function W0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function co(e) {
      var t = {};
      for (var r in e)
        for (var i = Nv[r] || [r], u = 0; u < i.length; u++)
          t[i[u]] = r;
      return t;
    }
    function Vv(e, t) {
      {
        if (!t)
          return;
        var r = co(e), i = co(t), u = {};
        for (var s in r) {
          var d = r[s], v = i[s];
          if (v && d !== v) {
            var E = d + "," + v;
            if (u[E])
              continue;
            u[E] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", W0(e[d]) ? "Removing" : "Updating", d, v);
          }
        }
      }
    }
    var Wv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, $v = g({
      menuitem: !0
    }, Wv), $0 = "__html";
    function gs(e, t) {
      if (t) {
        if ($v[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && $0 in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function sa(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var wi = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, q0 = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ka = {}, qv = new RegExp("^(aria)-[" + Ht + "]*$"), Y0 = new RegExp("^(aria)[A-Z][" + Ht + "]*$"), jc = Object.prototype.hasOwnProperty;
    function Hc(e, t) {
      {
        if (jc.call(Ka, t) && Ka[t])
          return !0;
        if (Y0.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), i = q0.hasOwnProperty(r) ? r : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ka[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ka[t] = !0, !0;
        }
        if (qv.test(t)) {
          var u = t.toLowerCase(), s = q0.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ka[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ka[t] = !0, !0;
        }
      }
      return !0;
    }
    function Q0(e, t) {
      {
        var r = [];
        for (var i in t) {
          var u = Hc(e, i);
          u || r.push(i);
        }
        var s = r.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        r.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : r.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function G0(e, t) {
      sa(e, t) || Q0(e, t);
    }
    var Ic = !1;
    function Yv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ic && (Ic = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var X0 = function() {
    };
    {
      var xr = {}, Qv = Object.prototype.hasOwnProperty, K0 = /^on./, Gr = /^on[^A-Z]/, Gv = new RegExp("^(aria)-[" + Ht + "]*$"), el = new RegExp("^(aria)[A-Z][" + Ht + "]*$");
      X0 = function(e, t, r, i) {
        if (Qv.call(xr, t) && xr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), xr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = d.hasOwnProperty(u) ? d[u] : null;
          if (v != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, v), xr[t] = !0, !0;
          if (K0.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), xr[t] = !0, !0;
        } else if (K0.test(t))
          return Gr.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), xr[t] = !0, !0;
        if (Gv.test(t) || el.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), xr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), xr[t] = !0, !0;
        if (u === "is" && r !== null && r !== void 0 && typeof r != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), xr[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), xr[t] = !0, !0;
        var E = Gn(t), U = E !== null && E.type === Ue;
        if (wi.hasOwnProperty(u)) {
          var I = wi[u];
          if (I !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, I), xr[t] = !0, !0;
        } else if (!U && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), xr[t] = !0, !0;
        return typeof r == "boolean" && Sn(t, r, E, !1) ? (r ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), xr[t] = !0, !0) : U ? !0 : Sn(t, r, E, !1) ? (xr[t] = !0, !1) : ((r === "false" || r === "true") && E !== null && E.type === Ke && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), xr[t] = !0), !0);
      };
    }
    var Z0 = function(e, t, r) {
      {
        var i = [];
        for (var u in t) {
          var s = X0(e, u, t[u], r);
          s || i.push(u);
        }
        var d = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function J0(e, t, r) {
      sa(e, t) || Z0(e, t, r);
    }
    var Vc = 1, Es = 2, fo = 4, ed = 16, eu = Vc | Es | fo;
    function tl(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Xa ? t.parentNode : t;
    }
    var po = null, Di = null, vo = null;
    function Wc(e) {
      var t = Tu(e);
      if (t) {
        if (typeof po != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var r = t.stateNode;
        if (r) {
          var i = ep(r);
          po(t.stateNode, t.type, i);
        }
      }
    }
    function $c(e) {
      po = e;
    }
    function tu(e) {
      Di ? vo ? vo.push(e) : vo = [e] : Di = e;
    }
    function Xv() {
      return Di !== null || vo !== null;
    }
    function qc() {
      if (Di) {
        var e = Di, t = vo;
        if (Di = null, vo = null, Wc(e), t)
          for (var r = 0; r < t.length; r++)
            Wc(t[r]);
      }
    }
    var Cs = function(e, t) {
      return e(t);
    }, tn = function(e, t, r, i, u) {
      return e(t, r, i, u);
    }, bs = function() {
    }, Yc = Cs, Za = !1, Ss = !1;
    function _s() {
      var e = Xv();
      e && (bs(), qc());
    }
    function nl(e, t) {
      if (Za)
        return e(t);
      Za = !0;
      try {
        return Cs(e, t);
      } finally {
        Za = !1, _s();
      }
    }
    function Rs(e, t, r) {
      if (Ss)
        return e(t, r);
      Ss = !0;
      try {
        return Yc(e, t, r);
      } finally {
        Ss = !1, _s();
      }
    }
    function nu(e, t, r, i, u) {
      var s = Za;
      Za = !0;
      try {
        return tn(e, t, r, i, u);
      } finally {
        Za = s, Za || _s();
      }
    }
    function td(e) {
      Za || bs();
    }
    function Ts(e, t, r, i) {
      Cs = e, tn = t, bs = r, Yc = i;
    }
    function Qc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Gc(e, t, r) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(r.disabled && Qc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var r = e.stateNode;
      if (r === null)
        return null;
      var i = ep(r);
      if (i === null)
        return null;
      var u = i[t];
      if (Gc(t, e.type, i))
        return null;
      if (!(!u || typeof u == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var rl = !1;
    if (Se)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            rl = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        rl = !1;
      }
    function nd(e, t, r, i, u, s, d, v, E) {
      var U = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, U);
      } catch (I) {
        this.onError(I);
      }
    }
    var ws = nd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ai = document.createElement("react");
      ws = function(t, r, i, u, s, d, v, E, U) {
        if (!(typeof document < "u"))
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var I = document.createEvent("Event"), ce = !1, X = !0, de = window.event, we = Object.getOwnPropertyDescriptor(window, "event");
        function Pe() {
          Ai.removeEventListener(ye, bt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = de);
        }
        var at = Array.prototype.slice.call(arguments, 3);
        function bt() {
          ce = !0, Pe(), r.apply(i, at), X = !1;
        }
        var ft, zt = !1, rn = !1;
        function fe(oe) {
          if (ft = oe.error, zt = !0, ft === null && oe.colno === 0 && oe.lineno === 0 && (rn = !0), oe.defaultPrevented && ft != null && typeof ft == "object")
            try {
              ft._suppressLogging = !0;
            } catch {
            }
        }
        var ye = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", fe), Ai.addEventListener(ye, bt, !1), I.initEvent(ye, !1, !1), Ai.dispatchEvent(I), we && Object.defineProperty(window, "event", we), ce && X && (zt ? rn && (ft = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ft = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ft)), window.removeEventListener("error", fe), !ce)
          return Pe(), nd.apply(this, arguments);
      };
    }
    var rd = ws, ki = !1, Ds = null, ho = !1, Aa = null, As = {
      onError: function(e) {
        ki = !0, Ds = e;
      }
    };
    function gr(e, t, r, i, u, s, d, v, E) {
      ki = !1, Ds = null, rd.apply(As, arguments);
    }
    function ad(e, t, r, i, u, s, d, v, E) {
      if (gr.apply(this, arguments), ki) {
        var U = Er();
        ho || (ho = !0, Aa = U);
      }
    }
    function mo() {
      if (ho) {
        var e = Aa;
        throw ho = !1, Aa = null, e;
      }
    }
    function Hr() {
      return ki;
    }
    function Er() {
      if (ki) {
        var e = Ds;
        return ki = !1, Ds = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ja(e) {
      return e._reactInternals;
    }
    function id(e) {
      return e._reactInternals !== void 0;
    }
    function Xc(e, t) {
      e._reactInternals = t;
    }
    var Gt = (
      /*                      */
      0
    ), Cr = (
      /*                */
      1
    ), yt = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), Bi = (
      /*           */
      6
    ), ln = (
      /*                     */
      8
    ), er = (
      /*                 */
      16
    ), Fi = (
      /*                     */
      32
    ), $t = (
      /*                   */
      64
    ), tr = (
      /*                          */
      128
    ), ka = (
      /*                     */
      256
    ), iu = (
      /*                      */
      512
    ), ou = (
      /*     */
      8192
    ), Xr = (
      /*                    */
      1024
    ), od = (
      /*           */
      1028
    ), Kc = (
      /*          */
      932
    ), yo = (
      /*               */
      2047
    ), al = (
      /*                   */
      2048
    ), ca = (
      /*                */
      4096
    ), il = (
      /* */
      16384
    ), Kv = F.ReactCurrentOwner;
    function Oi(e) {
      var t = e, r = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yt | Xr)) !== Gt && (r = t.return), i = t.return;
        while (i);
      }
      return t.tag === z ? r : null;
    }
    function ks(e) {
      if (e.tag === T) {
        var t = e.memoizedState;
        if (t === null) {
          var r = e.alternate;
          r !== null && (t = r.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function ud(e) {
      return e.tag === z ? e.stateNode.containerInfo : null;
    }
    function Bs(e) {
      return Oi(e) === e;
    }
    function ld(e) {
      {
        var t = Kv.current;
        if (t !== null && t.tag === m) {
          var r = t, i = r.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(r.type) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ja(e);
      return u ? Oi(u) === u : !1;
    }
    function Zc(e) {
      if (Oi(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Jc(e) {
      var t = e.alternate;
      if (!t) {
        var r = Oi(e);
        if (r === null)
          throw Error("Unable to find node on an unmounted component.");
        return r !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var v = s.return;
          if (v !== null) {
            i = u = v;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var E = s.child; E; ) {
            if (E === i)
              return Zc(s), e;
            if (E === u)
              return Zc(s), t;
            E = E.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = d;
        else {
          for (var U = !1, I = s.child; I; ) {
            if (I === i) {
              U = !0, i = s, u = d;
              break;
            }
            if (I === u) {
              U = !0, u = s, i = d;
              break;
            }
            I = I.sibling;
          }
          if (!U) {
            for (I = d.child; I; ) {
              if (I === i) {
                U = !0, i = d, u = s;
                break;
              }
              if (I === u) {
                U = !0, u = d, i = s;
                break;
              }
              I = I.sibling;
            }
            if (!U)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== z)
        throw Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ef(e) {
      var t = Jc(e);
      if (!t)
        return null;
      for (var r = t; ; ) {
        if (r.tag === k || r.tag === M)
          return r;
        if (r.child) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t)
          return null;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    function tf(e) {
      var t = Jc(e);
      if (!t)
        return null;
      for (var r = t; ; ) {
        if (r.tag === k || r.tag === M || pe)
          return r;
        if (r.child && r.tag !== _) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t)
          return null;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    function sd(e, t) {
      for (var r = t, i = e.alternate; r !== null; ) {
        if (r === e || r === i)
          return !0;
        r = r.return;
      }
      return !1;
    }
    var Ba;
    function Fs(e) {
      Ba = e;
    }
    var ol;
    function cd(e) {
      ol = e;
    }
    var nr;
    function uu(e) {
      nr = e;
    }
    var nf;
    function xo(e) {
      nf = e;
    }
    var go = !1, jn = [], ei = null, Ni = null, Hn = null, Mi = /* @__PURE__ */ new Map(), zi = /* @__PURE__ */ new Map(), Fa = [];
    function Os() {
      return jn.length > 0;
    }
    var rf = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ns(e) {
      return rf.indexOf(e) > -1;
    }
    function af(e, t, r, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r | ed,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Eo(e, t, r, i, u) {
      var s = af(e, t, r, i, u);
      jn.push(s);
    }
    function Ir(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ei = null;
          break;
        case "dragenter":
        case "dragleave":
          Ni = null;
          break;
        case "mouseover":
        case "mouseout":
          Hn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var r = t.pointerId;
          Mi.delete(r);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zi.delete(i);
          break;
        }
      }
    }
    function Kr(e, t, r, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = af(t, r, i, u, s);
        if (t !== null) {
          var v = Tu(t);
          v !== null && ol(v);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function of(e, t, r, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ei = Kr(ei, e, t, r, i, s), !0;
        }
        case "dragenter": {
          var d = u;
          return Ni = Kr(Ni, e, t, r, i, d), !0;
        }
        case "mouseover": {
          var v = u;
          return Hn = Kr(Hn, e, t, r, i, v), !0;
        }
        case "pointerover": {
          var E = u, U = E.pointerId;
          return Mi.set(U, Kr(Mi.get(U) || null, e, t, r, i, E)), !0;
        }
        case "gotpointercapture": {
          var I = u, ce = I.pointerId;
          return zi.set(ce, Kr(zi.get(ce) || null, e, t, r, i, I)), !0;
        }
      }
      return !1;
    }
    function fd(e) {
      var t = Pl(e.target);
      if (t !== null) {
        var r = Oi(t);
        if (r !== null) {
          var i = r.tag;
          if (i === T) {
            var u = ks(r);
            if (u !== null) {
              e.blockedOn = u, nf(e.lanePriority, function() {
                x.unstable_runWithPriority(e.priority, function() {
                  nr(r);
                });
              });
              return;
            }
          } else if (i === z) {
            var s = r.stateNode;
            if (s.hydrate) {
              e.blockedOn = ud(r);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function fa(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var r = t[0], i = Sl(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
        if (i !== null) {
          var u = Tu(i);
          return u !== null && ol(u), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ti(e, t, r) {
      fa(e) && r.delete(t);
    }
    function dd() {
      for (go = !1; jn.length > 0; ) {
        var e = jn[0];
        if (e.blockedOn !== null) {
          var t = Tu(e.blockedOn);
          t !== null && Ba(t);
          break;
        }
        for (var r = e.targetContainers; r.length > 0; ) {
          var i = r[0], u = Sl(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
          if (u !== null) {
            e.blockedOn = u;
            break;
          }
          r.shift();
        }
        e.blockedOn === null && jn.shift();
      }
      ei !== null && fa(ei) && (ei = null), Ni !== null && fa(Ni) && (Ni = null), Hn !== null && fa(Hn) && (Hn = null), Mi.forEach(ti), zi.forEach(ti);
    }
    function ni(e, t) {
      e.blockedOn === t && (e.blockedOn = null, go || (go = !0, x.unstable_scheduleCallback(x.unstable_NormalPriority, dd)));
    }
    function uf(e) {
      if (jn.length > 0) {
        ni(jn[0], e);
        for (var t = 1; t < jn.length; t++) {
          var r = jn[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      ei !== null && ni(ei, e), Ni !== null && ni(Ni, e), Hn !== null && ni(Hn, e);
      var i = function(v) {
        return ni(v, e);
      };
      Mi.forEach(i), zi.forEach(i);
      for (var u = 0; u < Fa.length; u++) {
        var s = Fa[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fa.length > 0; ) {
        var d = Fa[0];
        if (d.blockedOn !== null)
          break;
        fd(d), d.blockedOn === null && Fa.shift();
      }
    }
    var Ms = 0, ul = 1, lu = 2;
    function ll(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
    }
    var Co = {
      animationend: ll("Animation", "AnimationEnd"),
      animationiteration: ll("Animation", "AnimationIteration"),
      animationstart: ll("Animation", "AnimationStart"),
      transitionend: ll("Transition", "TransitionEnd")
    }, zs = {}, Ps = {};
    Se && (Ps = document.createElement("div").style, "AnimationEvent" in window || (delete Co.animationend.animation, delete Co.animationiteration.animation, delete Co.animationstart.animation), "TransitionEvent" in window || delete Co.transitionend.transition);
    function bo(e) {
      if (zs[e])
        return zs[e];
      if (!Co[e])
        return e;
      var t = Co[e];
      for (var r in t)
        if (t.hasOwnProperty(r) && r in Ps)
          return zs[e] = t[r];
      return e;
    }
    var su = bo("animationend"), sl = bo("animationiteration"), lf = bo("animationstart"), cl = bo("transitionend"), sf = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Oa = [
      "cancel",
      "cancel",
      "click",
      "click",
      "close",
      "close",
      "contextmenu",
      "contextMenu",
      "copy",
      "copy",
      "cut",
      "cut",
      "auxclick",
      "auxClick",
      "dblclick",
      "doubleClick",
      // Careful!
      "dragend",
      "dragEnd",
      "dragstart",
      "dragStart",
      "drop",
      "drop",
      "focusin",
      "focus",
      // Careful!
      "focusout",
      "blur",
      // Careful!
      "input",
      "input",
      "invalid",
      "invalid",
      "keydown",
      "keyDown",
      "keypress",
      "keyPress",
      "keyup",
      "keyUp",
      "mousedown",
      "mouseDown",
      "mouseup",
      "mouseUp",
      "paste",
      "paste",
      "pause",
      "pause",
      "play",
      "play",
      "pointercancel",
      "pointerCancel",
      "pointerdown",
      "pointerDown",
      "pointerup",
      "pointerUp",
      "ratechange",
      "rateChange",
      "reset",
      "reset",
      "seeked",
      "seeked",
      "submit",
      "submit",
      "touchcancel",
      "touchCancel",
      "touchend",
      "touchEnd",
      "touchstart",
      "touchStart",
      "volumechange",
      "volumeChange"
    ], fl = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"], dl = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"], _o = ["abort", "abort", su, "animationEnd", sl, "animationIteration", lf, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", cl, "transitionEnd", "waiting", "waiting"];
    function pl(e, t) {
      for (var r = 0; r < e.length; r += 2) {
        var i = e[r], u = e[r + 1], s = u[0].toUpperCase() + u.slice(1), d = "on" + s;
        So.set(i, t), sf.set(i, d), Z(d, [i]);
      }
    }
    function cu(e, t) {
      for (var r = 0; r < e.length; r++)
        So.set(e[r], t);
    }
    function pd(e) {
      var t = So.get(e);
      return t === void 0 ? lu : t;
    }
    function cf() {
      pl(Oa, Ms), pl(dl, ul), pl(_o, lu), cu(fl, Ms);
    }
    var yn = x.unstable_now;
    if (!(p.__interactionsRef != null && p.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var vl = 99, Na = 98, ri = 97, Ma = 96, ff = 95, vd = 90;
    yn();
    var Pi = 15, hl = 14, ml = 13, fu = 12, Ro = 11, Li = 10, du = 9, In = 8, pu = 7, sn = 6, Vn = 5, Wn = 4, yl = 3, Ui = 2, br = 1, ai = 0, df = 31, Ce = (
      /*                        */
      0
    ), Tn = (
      /*                          */
      0
    ), Dt = (
      /*                        */
      1
    ), ii = (
      /*                 */
      2
    ), To = (
      /*      */
      4
    ), xl = (
      /*                    */
      24
    ), pf = (
      /*           */
      32
    ), vf = (
      /*                  */
      192
    ), vu = (
      /*            */
      256
    ), hu = (
      /*                   */
      3584
    ), hf = (
      /*                */
      4096
    ), oi = (
      /*                       */
      4186112
    ), mu = (
      /*                            */
      62914560
    ), ji = (
      /*                  */
      33554432
    ), Ls = (
      /*          */
      67108864
    ), gl = (
      /*                                 */
      134217727
    ), mf = (
      /*               */
      134217728
    ), Us = (
      /*                             */
      805306368
    ), da = (
      /*                   */
      1073741824
    ), cn = -1;
    function Zv(e) {
    }
    var Jt = In;
    function yu(e) {
      if ((Dt & e) !== Ce)
        return Jt = Pi, Dt;
      if ((ii & e) !== Ce)
        return Jt = hl, ii;
      if ((To & e) !== Ce)
        return Jt = ml, To;
      var t = xl & e;
      if (t !== Ce)
        return Jt = fu, t;
      if ((e & pf) !== Ce)
        return Jt = Ro, pf;
      var r = vf & e;
      if (r !== Ce)
        return Jt = Li, r;
      if ((e & vu) !== Ce)
        return Jt = du, vu;
      var i = hu & e;
      if (i !== Ce)
        return Jt = In, i;
      if ((e & hf) !== Ce)
        return Jt = pu, hf;
      var u = oi & e;
      if (u !== Ce)
        return Jt = sn, u;
      var s = mu & e;
      if (s !== Ce)
        return Jt = Vn, s;
      if (e & Ls)
        return Jt = Wn, Ls;
      if ((e & mf) !== Ce)
        return Jt = yl, mf;
      var d = Us & e;
      return d !== Ce ? (Jt = Ui, d) : (da & e) !== Ce ? (Jt = br, da) : (y("Should have found matching lanes. This is a bug in React."), Jt = In, e);
    }
    function yf(e) {
      switch (e) {
        case vl:
          return Pi;
        case Na:
          return Li;
        case ri:
        case Ma:
          return In;
        case ff:
          return Ui;
        default:
          return ai;
      }
    }
    function js(e) {
      switch (e) {
        case Pi:
        case hl:
          return vl;
        case ml:
        case fu:
        case Ro:
        case Li:
          return Na;
        case du:
        case In:
        case pu:
        case sn:
        case Wn:
        case Vn:
          return ri;
        case yl:
        case Ui:
        case br:
          return ff;
        case ai:
          return vd;
        default:
          throw Error("Invalid update priority: " + e + ". This is a bug in React.");
      }
    }
    function El(e, t) {
      var r = e.pendingLanes;
      if (r === Ce)
        return Jt = ai, Ce;
      var i = Ce, u = ai, s = e.expiredLanes, d = e.suspendedLanes, v = e.pingedLanes;
      if (s !== Ce)
        i = s, u = Jt = Pi;
      else {
        var E = r & gl;
        if (E !== Ce) {
          var U = E & ~d;
          if (U !== Ce)
            i = yu(U), u = Jt;
          else {
            var I = E & v;
            I !== Ce && (i = yu(I), u = Jt);
          }
        } else {
          var ce = r & ~d;
          ce !== Ce ? (i = yu(ce), u = Jt) : v !== Ce && (i = yu(v), u = Jt);
        }
      }
      if (i === Ce)
        return Ce;
      if (i = r & xd(i), t !== Ce && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & d) === Ce) {
        yu(t);
        var X = Jt;
        if (u <= X)
          return t;
        Jt = u;
      }
      var de = e.entangledLanes;
      if (de !== Ce)
        for (var we = e.entanglements, Pe = i & de; Pe > 0; ) {
          var at = Hi(Pe), bt = 1 << at;
          i |= we[at], Pe &= ~bt;
        }
      return i;
    }
    function Jv(e, t) {
      for (var r = e.eventTimes, i = cn; t > 0; ) {
        var u = Hi(t), s = 1 << u, d = r[u];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function eh(e, t) {
      yu(e);
      var r = Jt;
      return r >= Li ? t + 250 : r >= sn ? t + 5e3 : cn;
    }
    function th(e, t) {
      for (var r = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, d = r; d > 0; ) {
        var v = Hi(d), E = 1 << v, U = s[v];
        U === cn ? ((E & i) === Ce || (E & u) !== Ce) && (s[v] = eh(E, t)) : U <= t && (e.expiredLanes |= E), d &= ~E;
      }
    }
    function Zr(e) {
      var t = e.pendingLanes & ~da;
      return t !== Ce ? t : t & da ? da : Ce;
    }
    function Dr() {
      return Jt;
    }
    function xf(e) {
      return (e & gl) !== Ce;
    }
    function gf(e) {
      return (e & mu) === e;
    }
    function hd(e) {
      return (e & oi) === e;
    }
    function xu(e, t) {
      switch (e) {
        case ai:
          break;
        case Pi:
          return Dt;
        case hl:
          return ii;
        case fu: {
          var r = $n(xl & ~t);
          return r === Tn ? xu(Li, t) : r;
        }
        case Li: {
          var i = $n(vf & ~t);
          return i === Tn ? xu(In, t) : i;
        }
        case In: {
          var u = $n(hu & ~t);
          return u === Tn && (u = $n(oi & ~t), u === Tn && (u = $n(hu))), u;
        }
        case sn:
        case Vn:
          break;
        case Ui:
          var s = $n(Us & ~t);
          return s === Tn && (s = $n(Us)), s;
      }
      throw Error("Invalid update priority: " + e + ". This is a bug in React.");
    }
    function md(e, t) {
      var r = $n(oi & ~t);
      return r === Tn && (r = $n(oi & ~e), r === Tn && (r = $n(oi))), r;
    }
    function Ef(e) {
      var t = $n(mu & ~e);
      return t === Tn && (t = $n(mu)), t;
    }
    function yd(e) {
      return e & -e;
    }
    function Cf(e) {
      var t = 31 - bd(e);
      return t < 0 ? Ce : 1 << t;
    }
    function xd(e) {
      return (Cf(e) << 1) - 1;
    }
    function $n(e) {
      return yd(e);
    }
    function Hi(e) {
      return 31 - bd(e);
    }
    function gd(e) {
      return Hi(e);
    }
    function rr(e, t) {
      return (e & t) !== Ce;
    }
    function Ii(e, t) {
      return (e & t) === t;
    }
    function jt(e, t) {
      return e | t;
    }
    function gu(e, t) {
      return e & ~t;
    }
    function nh(e) {
      return e;
    }
    function ui(e, t) {
      return e !== Tn && e < t ? e : t;
    }
    function Hs(e) {
      for (var t = [], r = 0; r < df; r++)
        t.push(e);
      return t;
    }
    function Eu(e, t, r) {
      e.pendingLanes |= t;
      var i = t - 1;
      e.suspendedLanes &= i, e.pingedLanes &= i;
      var u = e.eventTimes, s = gd(t);
      u[s] = r;
    }
    function Ed(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var r = e.expirationTimes, i = t; i > 0; ) {
        var u = Hi(i), s = 1 << u;
        r[u] = cn, i &= ~s;
      }
    }
    function bf(e, t, r) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Cl(e) {
      e.expiredLanes |= xl & e.pendingLanes;
    }
    function rh(e) {
      return (e & xl) !== Ce;
    }
    function Cd(e, t) {
      e.mutableReadLanes |= t & e.pendingLanes;
    }
    function Sf(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, d = r; d > 0; ) {
        var v = Hi(d), E = 1 << v;
        i[v] = Ce, u[v] = cn, s[v] = cn, d &= ~E;
      }
    }
    function _f(e, t) {
      e.entangledLanes |= t;
      for (var r = e.entanglements, i = t; i > 0; ) {
        var u = Hi(i), s = 1 << u;
        r[u] |= t, i &= ~s;
      }
    }
    var bd = Math.clz32 ? Math.clz32 : ah, Sd = Math.log, _d = Math.LN2;
    function ah(e) {
      return e === 0 ? 32 : 31 - (Sd(e) / _d | 0) | 0;
    }
    var Rd = x.unstable_UserBlockingPriority, ih = x.unstable_runWithPriority, Rf = !0;
    function Tf(e) {
      Rf = !!e;
    }
    function Td() {
      return Rf;
    }
    function wd(e, t, r) {
      var i = pd(t), u;
      switch (i) {
        case Ms:
          u = Dd;
          break;
        case ul:
          u = Ad;
          break;
        case lu:
        default:
          u = bl;
          break;
      }
      return u.bind(null, t, r, e);
    }
    function Dd(e, t, r, i) {
      td(i.timeStamp), nu(bl, e, t, r, i);
    }
    function Ad(e, t, r, i) {
      ih(Rd, bl.bind(null, e, t, r, i));
    }
    function bl(e, t, r, i) {
      if (Rf) {
        var u = !0;
        if (u = (t & fo) === 0, u && Os() && Ns(e)) {
          Eo(
            null,
            // Flags that we're not actually blocked on anything as far as we know.
            e,
            t,
            r,
            i
          );
          return;
        }
        var s = Sl(e, t, r, i);
        if (s === null) {
          u && Ir(e, i);
          return;
        }
        if (u) {
          if (Ns(e)) {
            Eo(s, e, t, r, i);
            return;
          }
          if (of(s, e, t, r, i))
            return;
          Ir(e, i);
        }
        n1(e, t, i, null, r);
      }
    }
    function Sl(e, t, r, i) {
      var u = tl(i), s = Pl(u);
      if (s !== null) {
        var d = Oi(s);
        if (d === null)
          s = null;
        else {
          var v = d.tag;
          if (v === T) {
            var E = ks(d);
            if (E !== null)
              return E;
            s = null;
          } else if (v === z) {
            var U = d.stateNode;
            if (U.hydrate)
              return ud(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return n1(e, t, i, s, r), null;
    }
    function kd(e, t, r) {
      return e.addEventListener(t, r, !1), r;
    }
    function wf(e, t, r) {
      return e.addEventListener(t, r, !0), r;
    }
    function Bd(e, t, r, i) {
      return e.addEventListener(t, r, {
        capture: !0,
        passive: i
      }), r;
    }
    function oh(e, t, r, i) {
      return e.addEventListener(t, r, {
        passive: i
      }), r;
    }
    var _l = null, Cu = null, wo = null;
    function vt(e) {
      return _l = e, Cu = ar(), !0;
    }
    function Sr() {
      _l = null, Cu = null, wo = null;
    }
    function wn() {
      if (wo)
        return wo;
      var e, t = Cu, r = t.length, i, u = ar(), s = u.length;
      for (e = 0; e < r && t[e] === u[e]; e++)
        ;
      var d = r - e;
      for (i = 1; i <= d && t[r - i] === u[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return wo = u.slice(e, v), wo;
    }
    function ar() {
      return "value" in _l ? _l.value : _l.textContent;
    }
    function za(e) {
      var t, r = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function bu() {
      return !0;
    }
    function qn() {
      return !1;
    }
    function ur(e) {
      function t(r, i, u, s, d) {
        this._reactName = r, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var E = e[v];
            E ? this[v] = E(s) : this[v] = s[v];
          }
        var U = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return U ? this.isDefaultPrevented = bu : this.isDefaultPrevented = qn, this.isPropagationStopped = qn, this;
      }
      return g(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = bu);
        },
        stopPropagation: function() {
          var r = this.nativeEvent;
          r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = bu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: bu
      }), t;
    }
    var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Do = ur(pa), Pa = g({}, pa, {
      view: 0,
      detail: 0
    }), Df = ur(Pa), Rl, Tl, Ao;
    function Su(e) {
      e !== Ao && (Ao && e.type === "mousemove" ? (Rl = e.screenX - Ao.screenX, Tl = e.screenY - Ao.screenY) : (Rl = 0, Tl = 0), Ao = e);
    }
    var qe = g({}, Pa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ua,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Su(e), Rl);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Tl;
      }
    }), wl = ur(qe), Af = g({}, qe, {
      dataTransfer: 0
    }), La = ur(Af), Vi = g({}, Pa, {
      relatedTarget: 0
    }), ko = ur(Vi), Dl = g({}, pa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kf = ur(Dl), Bf = g({}, pa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), li = ur(Bf), Al = g({}, pa, {
      data: 0
    }), Is = ur(Al), Vs = Is, si = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ws = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function kl(e) {
      if (e.key) {
        var t = si[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var r = za(e);
        return r === 13 ? "Enter" : String.fromCharCode(r);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ws[e.keyCode] || "Unidentified" : "";
    }
    var $s = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vr(e) {
      var t = this, r = t.nativeEvent;
      if (r.getModifierState)
        return r.getModifierState(e);
      var i = $s[e];
      return i ? !!r[i] : !1;
    }
    function Ua(e) {
      return Vr;
    }
    var Wi = g({}, Pa, {
      key: kl,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ua,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? za(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? za(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qs = ur(Wi), Jr = g({}, qe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Ff = ur(Jr), _u = g({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ua
    }), Of = ur(_u), uh = g({}, pa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fd = ur(uh), Od = g({}, qe, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ys = ur(Od), Nf = [9, 13, 27, 32], Bo = 229, Qs = Se && "CompositionEvent" in window, Ru = null;
    Se && "documentMode" in document && (Ru = document.documentMode);
    var Bl = Se && "TextEvent" in window && !Ru, Nd = Se && (!Qs || Ru && Ru > 8 && Ru <= 11), Md = 32, Mf = String.fromCharCode(Md);
    function zd() {
      Z("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Z("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Z("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Z("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $i = !1;
    function lh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function sh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function qi(e, t) {
      return e === "keydown" && t.keyCode === Bo;
    }
    function Pd(e, t) {
      switch (e) {
        case "keyup":
          return Nf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function zf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ld(e) {
      return e.locale === "ko";
    }
    var Fo = !1;
    function Yi(e, t, r, i, u) {
      var s, d;
      if (Qs ? s = sh(t) : Fo ? Pd(t, i) && (s = "onCompositionEnd") : qi(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Nd && !Ld(i) && (!Fo && s === "onCompositionStart" ? Fo = vt(u) : s === "onCompositionEnd" && Fo && (d = wn()));
      var v = Vd(r, s);
      if (v.length > 0) {
        var E = new Is(s, t, null, i, u);
        if (e.push({
          event: E,
          listeners: v
        }), d)
          E.data = d;
        else {
          var U = zf(i);
          U !== null && (E.data = U);
        }
      }
    }
    function ch(e, t) {
      switch (e) {
        case "compositionend":
          return zf(t);
        case "keypress":
          var r = t.which;
          return r !== Md ? null : ($i = !0, Mf);
        case "textInput":
          var i = t.data;
          return i === Mf && $i ? null : i;
        default:
          return null;
      }
    }
    function fh(e, t) {
      if (Fo) {
        if (e === "compositionend" || !Qs && Pd(e, t)) {
          var r = wn();
          return Sr(), Fo = !1, r;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!lh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Nd && !Ld(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ud(e, t, r, i, u) {
      var s;
      if (Bl ? s = ch(t, i) : s = fh(t, i), !s)
        return null;
      var d = Vd(r, "onBeforeInput");
      if (d.length > 0) {
        var v = new Vs("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: v,
          listeners: d
        }), v.data = s;
      }
    }
    function dh(e, t, r, i, u, s, d) {
      Yi(e, t, r, i, u), Ud(e, t, r, i, u);
    }
    var ea = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Gs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ea[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function ph(e) {
      if (!Se)
        return !1;
      var t = "on" + e, r = t in document;
      if (!r) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), r = typeof i[t] == "function";
      }
      return r;
    }
    function Qi() {
      Z("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Fl(e, t, r, i) {
      tu(i);
      var u = Vd(t, "onChange");
      if (u.length > 0) {
        var s = new Do("onChange", "change", null, r, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var ja = null, Oo = null;
    function Pf(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function Lf(e) {
      var t = [];
      Fl(t, Oo, e, tl(e)), nl(vh, t);
    }
    function vh(e) {
      Xx(e, 0);
    }
    function Xs(e) {
      var t = ic(e);
      if (ee(t))
        return e;
    }
    function Ks(e, t) {
      if (e === "change")
        return t;
    }
    var Zs = !1;
    Se && (Zs = ph("input") && (!document.documentMode || document.documentMode > 9));
    function jd(e, t) {
      ja = e, Oo = t, ja.attachEvent("onpropertychange", Hd);
    }
    function Js() {
      ja && (ja.detachEvent("onpropertychange", Hd), ja = null, Oo = null);
    }
    function Hd(e) {
      e.propertyName === "value" && Xs(Oo) && Lf(e);
    }
    function Uf(e, t, r) {
      e === "focusin" ? (Js(), jd(t, r)) : e === "focusout" && Js();
    }
    function Ol(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Xs(Oo);
    }
    function hh(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ec(e, t) {
      if (e === "click")
        return Xs(t);
    }
    function Id(e, t) {
      if (e === "input" || e === "change")
        return Xs(t);
    }
    function mh(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || jr(e, "number", e.value);
    }
    function Nl(e, t, r, i, u, s, d) {
      var v = r ? ic(r) : window, E, U;
      if (Pf(v) ? E = Ks : Gs(v) ? Zs ? E = Id : (E = Ol, U = Uf) : hh(v) && (E = ec), E) {
        var I = E(t, r);
        if (I) {
          Fl(e, I, i, u);
          return;
        }
      }
      U && U(t, v, r), t === "focusout" && mh(v);
    }
    function yh() {
      me("onMouseEnter", ["mouseout", "mouseover"]), me("onMouseLeave", ["mouseout", "mouseover"]), me("onPointerEnter", ["pointerout", "pointerover"]), me("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function tc(e, t, r, i, u, s, d) {
      var v = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (v && !(s & ed)) {
        var U = i.relatedTarget || i.fromElement;
        if (U && (Pl(U) || Jd(U)))
          return;
      }
      if (!(!E && !v)) {
        var I;
        if (u.window === u)
          I = u;
        else {
          var ce = u.ownerDocument;
          ce ? I = ce.defaultView || ce.parentWindow : I = window;
        }
        var X, de;
        if (E) {
          var we = i.relatedTarget || i.toElement;
          if (X = r, de = we ? Pl(we) : null, de !== null) {
            var Pe = Oi(de);
            (de !== Pe || de.tag !== k && de.tag !== M) && (de = null);
          }
        } else
          X = null, de = r;
        if (X !== de) {
          var at = wl, bt = "onMouseLeave", ft = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (at = Ff, bt = "onPointerLeave", ft = "onPointerEnter", zt = "pointer");
          var rn = X == null ? I : ic(X), fe = de == null ? I : ic(de), ye = new at(bt, zt + "leave", X, i, u);
          ye.target = rn, ye.relatedTarget = fe;
          var oe = null, Fe = Pl(u);
          if (Fe === r) {
            var He = new at(ft, zt + "enter", de, i, u);
            He.target = fe, He.relatedTarget = rn, oe = He;
          }
          sb(e, ye, oe, X, de);
        }
      }
    }
    function n(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var a = typeof Object.is == "function" ? Object.is : n, o = Object.prototype.hasOwnProperty;
    function l(e, t) {
      if (a(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var r = Object.keys(e), i = Object.keys(t);
      if (r.length !== i.length)
        return !1;
      for (var u = 0; u < r.length; u++)
        if (!o.call(t, r[u]) || !a(e[r[u]], t[r[u]]))
          return !1;
      return !0;
    }
    function f(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function h(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function R(e, t) {
      for (var r = f(e), i = 0, u = 0; r; ) {
        if (r.nodeType === Xa) {
          if (u = i + r.textContent.length, i <= t && u >= t)
            return {
              node: r,
              offset: t - i
            };
          i = u;
        }
        r = f(h(r));
      }
    }
    function L(e) {
      var t = e.ownerDocument, r = t && t.defaultView || window, i = r.getSelection && r.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, d = i.focusNode, v = i.focusOffset;
      try {
        u.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return G(e, u, s, d, v);
    }
    function G(e, t, r, i, u) {
      var s = 0, d = -1, v = -1, E = 0, U = 0, I = e, ce = null;
      e:
        for (; ; ) {
          for (var X = null; I === t && (r === 0 || I.nodeType === Xa) && (d = s + r), I === i && (u === 0 || I.nodeType === Xa) && (v = s + u), I.nodeType === Xa && (s += I.nodeValue.length), (X = I.firstChild) !== null; )
            ce = I, I = X;
          for (; ; ) {
            if (I === e)
              break e;
            if (ce === t && ++E === r && (d = s), ce === i && ++U === u && (v = s), (X = I.nextSibling) !== null)
              break;
            I = ce, ce = I.parentNode;
          }
          I = X;
        }
      return d === -1 || v === -1 ? null : {
        start: d,
        end: v
      };
    }
    function he(e, t) {
      var r = e.ownerDocument || document, i = r && r.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), v = t.end === void 0 ? d : Math.min(t.end, s);
        if (!u.extend && d > v) {
          var E = v;
          v = d, d = E;
        }
        var U = R(e, d), I = R(e, v);
        if (U && I) {
          if (u.rangeCount === 1 && u.anchorNode === U.node && u.anchorOffset === U.offset && u.focusNode === I.node && u.focusOffset === I.offset)
            return;
          var ce = r.createRange();
          ce.setStart(U.node, U.offset), u.removeAllRanges(), d > v ? (u.addRange(ce), u.extend(I.node, I.offset)) : (ce.setEnd(I.node, I.offset), u.addRange(ce));
        }
      }
    }
    function We(e) {
      return e && e.nodeType === Xa;
    }
    function ht(e, t) {
      return !e || !t ? !1 : e === t ? !0 : We(e) ? !1 : We(t) ? ht(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function ke(e) {
      return e && e.ownerDocument && ht(e.ownerDocument.documentElement, e);
    }
    function Ze(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function pt() {
      for (var e = window, t = ve(); t instanceof e.HTMLIFrameElement; ) {
        if (Ze(t))
          e = t.contentWindow;
        else
          return t;
        t = ve(e.document);
      }
      return t;
    }
    function ot(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ue() {
      var e = pt();
      return {
        focusedElem: e,
        selectionRange: ot(e) ? ie(e) : null
      };
    }
    function te(e) {
      var t = pt(), r = e.focusedElem, i = e.selectionRange;
      if (t !== r && ke(r)) {
        i !== null && ot(r) && ge(r, i);
        for (var u = [], s = r; s = s.parentNode; )
          s.nodeType === Qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof r.focus == "function" && r.focus();
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function ie(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = L(e), t || {
        start: 0,
        end: 0
      };
    }
    function ge(e, t) {
      var r = t.start, i = t.end;
      i === void 0 && (i = r), "selectionStart" in e ? (e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length)) : he(e, t);
    }
    var _e = Se && "documentMode" in document && document.documentMode <= 11;
    function xt() {
      Z("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ye = null, mt = null, Et = null, gt = !1;
    function Gi(e) {
      if ("selectionStart" in e && ot(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, r = t.getSelection();
      return {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      };
    }
    function xh(e) {
      return e.window === e ? e.document : e.nodeType === Ti ? e : e.ownerDocument;
    }
    function Qx(e, t, r) {
      var i = xh(r);
      if (!(gt || Ye == null || Ye !== ve(i))) {
        var u = Gi(Ye);
        if (!Et || !l(Et, u)) {
          Et = u;
          var s = Vd(mt, "onSelect");
          if (s.length > 0) {
            var d = new Do("onSelect", "select", null, t, r);
            e.push({
              event: d,
              listeners: s
            }), d.target = Ye;
          }
        }
      }
    }
    function tb(e, t, r, i, u, s, d) {
      var v = r ? ic(r) : window;
      switch (t) {
        case "focusin":
          (Gs(v) || v.contentEditable === "true") && (Ye = v, mt = r, Et = null);
          break;
        case "focusout":
          Ye = null, mt = null, Et = null;
          break;
        case "mousedown":
          gt = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gt = !1, Qx(e, i, u);
          break;
        case "selectionchange":
          if (_e)
            break;
        case "keydown":
        case "keyup":
          Qx(e, i, u);
      }
    }
    function nb(e, t, r, i, u, s, d) {
      var v = sf.get(t);
      if (v !== void 0) {
        var E = Do, U = t;
        switch (t) {
          case "keypress":
            if (za(i) === 0)
              return;
          case "keydown":
          case "keyup":
            E = qs;
            break;
          case "focusin":
            U = "focus", E = ko;
            break;
          case "focusout":
            U = "blur", E = ko;
            break;
          case "beforeblur":
          case "afterblur":
            E = ko;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = wl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = La;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Of;
            break;
          case su:
          case sl:
          case lf:
            E = kf;
            break;
          case cl:
            E = Fd;
            break;
          case "scroll":
            E = Df;
            break;
          case "wheel":
            E = Ys;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = li;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Ff;
            break;
        }
        var I = (s & fo) !== 0;
        {
          var ce = !I && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", X = ub(r, v, i.type, I, ce);
          if (X.length > 0) {
            var de = new E(v, U, null, i, u);
            e.push({
              event: de,
              listeners: X
            });
          }
        }
      }
    }
    cf(), yh(), Qi(), xt(), zd();
    function rb(e, t, r, i, u, s, d) {
      nb(e, t, r, i, u, s);
      var v = (s & eu) === 0;
      v && (tc(e, t, r, i, u, s), Nl(e, t, r, i, u), tb(e, t, r, i, u), dh(e, t, r, i, u));
    }
    var jf = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ab = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(jf));
    function Gx(e, t, r) {
      var i = e.type || "unknown-event";
      e.currentTarget = r, ad(i, t, void 0, e), e.currentTarget = null;
    }
    function ib(e, t, r) {
      var i;
      if (r)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], d = s.instance, v = s.currentTarget, E = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          Gx(e, E, v), i = d;
        }
      else
        for (var U = 0; U < t.length; U++) {
          var I = t[U], ce = I.instance, X = I.currentTarget, de = I.listener;
          if (ce !== i && e.isPropagationStopped())
            return;
          Gx(e, de, X), i = ce;
        }
    }
    function Xx(e, t) {
      for (var r = (t & fo) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, d = u.listeners;
        ib(s, d, r);
      }
      mo();
    }
    function ob(e, t, r, i, u) {
      var s = tl(r), d = [];
      rb(d, e, i, r, s, t), Xx(d, t);
    }
    function vn(e, t) {
      var r = !1, i = A1(t), u = a1(e, r);
      i.has(u) || (e1(t, e, Es, r), i.add(u));
    }
    var Kx = "_reactListening" + Math.random().toString(36).slice(2);
    function Zx(e) {
      {
        if (e[Kx])
          return;
        e[Kx] = !0, P.forEach(function(t) {
          ab.has(t) || Jx(t, !1, e, null), Jx(t, !0, e, null);
        });
      }
    }
    function Jx(e, t, r, i) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, s = r;
      e === "selectionchange" && r.nodeType !== Ti && (s = r.ownerDocument);
      var d = A1(s), v = a1(e, t);
      d.has(v) || (t && (u |= fo), e1(s, e, u, t), d.add(v));
    }
    function e1(e, t, r, i, u) {
      var s = wd(e, t, r), d = void 0;
      rl && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? Bd(e, t, s, d) : wf(e, t, s) : d !== void 0 ? oh(e, t, s, d) : kd(e, t, s);
    }
    function t1(e, t) {
      return e === t || e.nodeType === yr && e.parentNode === t;
    }
    function n1(e, t, r, i, u) {
      var s = i;
      if (!(t & Vc) && !(t & Es)) {
        var d = u;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var E = v.tag;
              if (E === z || E === _) {
                var U = v.stateNode.containerInfo;
                if (t1(U, d))
                  break;
                if (E === _)
                  for (var I = v.return; I !== null; ) {
                    var ce = I.tag;
                    if (ce === z || ce === _) {
                      var X = I.stateNode.containerInfo;
                      if (t1(X, d))
                        return;
                    }
                    I = I.return;
                  }
                for (; U !== null; ) {
                  var de = Pl(U);
                  if (de === null)
                    return;
                  var we = de.tag;
                  if (we === k || we === M) {
                    v = s = de;
                    continue e;
                  }
                  U = U.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      Rs(function() {
        return ob(e, t, r, s);
      });
    }
    function Hf(e, t, r) {
      return {
        instance: e,
        listener: t,
        currentTarget: r
      };
    }
    function ub(e, t, r, i, u) {
      for (var s = t !== null ? t + "Capture" : null, d = i ? s : t, v = [], E = e, U = null; E !== null; ) {
        var I = E, ce = I.stateNode, X = I.tag;
        if (X === k && ce !== null && (U = ce, d !== null)) {
          var de = ru(E, d);
          de != null && v.push(Hf(E, de, U));
        }
        if (u)
          break;
        E = E.return;
      }
      return v;
    }
    function Vd(e, t) {
      for (var r = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, d = s.stateNode, v = s.tag;
        if (v === k && d !== null) {
          var E = d, U = ru(u, r);
          U != null && i.unshift(Hf(u, U, E));
          var I = ru(u, t);
          I != null && i.push(Hf(u, I, E));
        }
        u = u.return;
      }
      return i;
    }
    function nc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== k);
      return e || null;
    }
    function lb(e, t) {
      for (var r = e, i = t, u = 0, s = r; s; s = nc(s))
        u++;
      for (var d = 0, v = i; v; v = nc(v))
        d++;
      for (; u - d > 0; )
        r = nc(r), u--;
      for (; d - u > 0; )
        i = nc(i), d--;
      for (var E = u; E--; ) {
        if (r === i || i !== null && r === i.alternate)
          return r;
        r = nc(r), i = nc(i);
      }
      return null;
    }
    function r1(e, t, r, i, u) {
      for (var s = t._reactName, d = [], v = r; v !== null && v !== i; ) {
        var E = v, U = E.alternate, I = E.stateNode, ce = E.tag;
        if (U !== null && U === i)
          break;
        if (ce === k && I !== null) {
          var X = I;
          if (u) {
            var de = ru(v, s);
            de != null && d.unshift(Hf(v, de, X));
          } else if (!u) {
            var we = ru(v, s);
            we != null && d.push(Hf(v, we, X));
          }
        }
        v = v.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function sb(e, t, r, i, u) {
      var s = i && u ? lb(i, u) : null;
      i !== null && r1(e, t, i, s, !1), u !== null && r !== null && r1(e, r, u, s, !0);
    }
    function a1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var ta = !1, If = "dangerouslySetInnerHTML", Wd = "suppressContentEditableWarning", Vf = "suppressHydrationWarning", i1 = "autoFocus", Ml = "children", zl = "style", $d = "__html", rc = ms.html, gh, Wf, qd, Yd, $f, o1, Qd, u1, qf, l1;
    {
      gh = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, qd = function(e, t) {
        G0(e, t), Yv(e, t), J0(e, t, {
          registrationNameDependencies: q,
          possibleRegistrationNames: $
        });
      }, u1 = Se && !document.documentMode;
      var cb = /\r\n?/g, fb = /\u0000|\uFFFD/g;
      qf = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(cb, `
`).replace(fb, "");
      }, Yd = function(e, t) {
        if (!ta) {
          var r = qf(t), i = qf(e);
          i !== r && (ta = !0, y('Text content did not match. Server: "%s" Client: "%s"', i, r));
        }
      }, $f = function(e, t, r) {
        if (!ta) {
          var i = qf(r), u = qf(t);
          u !== i && (ta = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
        }
      }, o1 = function(e) {
        if (!ta) {
          ta = !0;
          var t = [];
          e.forEach(function(r) {
            t.push(r);
          }), y("Extra attributes from the server: %s", t);
        }
      }, Qd = function(e, t) {
        t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, l1 = function(e, t) {
        var r = e.namespaceURI === rc ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return r.innerHTML = t, r.innerHTML;
      };
    }
    function s1(e) {
      return e.nodeType === Ti ? e : e.ownerDocument;
    }
    function db() {
    }
    function Gd(e) {
      e.onclick = db;
    }
    function pb(e, t, r, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === zl)
            d && Object.freeze(d), Uc(t, d);
          else if (s === If) {
            var v = d ? d[$d] : void 0;
            v != null && O0(t, v);
          } else if (s === Ml)
            if (typeof d == "string") {
              var E = e !== "textarea" || d !== "";
              E && xs(t, d);
            } else
              typeof d == "number" && xs(t, "" + d);
          else
            s === Wd || s === Vf || s === i1 || (q.hasOwnProperty(s) ? d != null && (typeof d != "function" && Qd(s, d), s === "onScroll" && vn("scroll", t)) : d != null && Vt(t, s, d, u));
        }
    }
    function vb(e, t, r, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], d = t[u + 1];
        s === zl ? Uc(e, d) : s === If ? O0(e, d) : s === Ml ? xs(e, d) : Vt(e, s, d, i);
      }
    }
    function hb(e, t, r, i) {
      var u, s = s1(r), d, v = i;
      if (v === rc && (v = Xu(e)), v === rc) {
        if (u = sa(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = s.createElement("div");
          E.innerHTML = "<script><\/script>";
          var U = E.firstChild;
          d = E.removeChild(U);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var I = d;
          t.multiple ? I.multiple = !0 : t.size && (I.size = t.size);
        }
      } else
        d = s.createElementNS(v, e);
      return v === rc && !u && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(gh, e) && (gh[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function mb(e, t) {
      return s1(t).createTextNode(e);
    }
    function yb(e, t, r, i) {
      var u = sa(t, r);
      qd(t, r);
      var s;
      switch (t) {
        case "dialog":
          vn("cancel", e), vn("close", e), s = r;
          break;
        case "iframe":
        case "object":
        case "embed":
          vn("load", e), s = r;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < jf.length; d++)
            vn(jf[d], e);
          s = r;
          break;
        case "source":
          vn("error", e), s = r;
          break;
        case "img":
        case "image":
        case "link":
          vn("error", e), vn("load", e), s = r;
          break;
        case "details":
          vn("toggle", e), s = r;
          break;
        case "input":
          Mt(e, r), s = et(e, r), vn("invalid", e);
          break;
        case "option":
          $u(e, r), s = Yo(e, r);
          break;
        case "select":
          vs(e, r), s = Qu(e, r), vn("invalid", e);
          break;
        case "textarea":
          Gu(e, r), s = Go(e, r), vn("invalid", e);
          break;
        default:
          s = r;
      }
      switch (gs(t, s), pb(t, e, i, s, u), t) {
        case "input":
          C(e), Rn(e, r, !1);
          break;
        case "textarea":
          C(e), wr(e);
          break;
        case "option":
          kc(e, r);
          break;
        case "select":
          Ri(e, r);
          break;
        default:
          typeof s.onClick == "function" && Gd(e);
          break;
      }
    }
    function xb(e, t, r, i, u) {
      qd(t, i);
      var s = null, d, v;
      switch (t) {
        case "input":
          d = et(e, r), v = et(e, i), s = [];
          break;
        case "option":
          d = Yo(e, r), v = Yo(e, i), s = [];
          break;
        case "select":
          d = Qu(e, r), v = Qu(e, i), s = [];
          break;
        case "textarea":
          d = Go(e, r), v = Go(e, i), s = [];
          break;
        default:
          d = r, v = i, typeof d.onClick != "function" && typeof v.onClick == "function" && Gd(e);
          break;
      }
      gs(t, v);
      var E, U, I = null;
      for (E in d)
        if (!(v.hasOwnProperty(E) || !d.hasOwnProperty(E) || d[E] == null))
          if (E === zl) {
            var ce = d[E];
            for (U in ce)
              ce.hasOwnProperty(U) && (I || (I = {}), I[U] = "");
          } else
            E === If || E === Ml || E === Wd || E === Vf || E === i1 || (q.hasOwnProperty(E) ? s || (s = []) : (s = s || []).push(E, null));
      for (E in v) {
        var X = v[E], de = d != null ? d[E] : void 0;
        if (!(!v.hasOwnProperty(E) || X === de || X == null && de == null))
          if (E === zl)
            if (X && Object.freeze(X), de) {
              for (U in de)
                de.hasOwnProperty(U) && (!X || !X.hasOwnProperty(U)) && (I || (I = {}), I[U] = "");
              for (U in X)
                X.hasOwnProperty(U) && de[U] !== X[U] && (I || (I = {}), I[U] = X[U]);
            } else
              I || (s || (s = []), s.push(E, I)), I = X;
          else if (E === If) {
            var we = X ? X[$d] : void 0, Pe = de ? de[$d] : void 0;
            we != null && Pe !== we && (s = s || []).push(E, we);
          } else
            E === Ml ? (typeof X == "string" || typeof X == "number") && (s = s || []).push(E, "" + X) : E === Wd || E === Vf || (q.hasOwnProperty(E) ? (X != null && (typeof X != "function" && Qd(E, X), E === "onScroll" && vn("scroll", e)), !s && de !== X && (s = [])) : typeof X == "object" && X !== null && X.$$typeof === Ee ? X.toString() : (s = s || []).push(E, X));
      }
      return I && (Vv(I, v[zl]), (s = s || []).push(zl, I)), s;
    }
    function gb(e, t, r, i, u) {
      r === "input" && u.type === "radio" && u.name != null && an(e, u);
      var s = sa(r, i), d = sa(r, u);
      switch (vb(e, t, s, d), r) {
        case "input":
          pn(e, u);
          break;
        case "textarea":
          Oc(e, u);
          break;
        case "select":
          Bc(e, u);
          break;
      }
    }
    function Eb(e) {
      {
        var t = e.toLowerCase();
        return wi.hasOwnProperty(t) && wi[t] || null;
      }
    }
    function Cb(e, t, r, i, u) {
      var s, d;
      switch (Wf = r[Vf] === !0, s = sa(t, r), qd(t, r), t) {
        case "dialog":
          vn("cancel", e), vn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          vn("load", e);
          break;
        case "video":
        case "audio":
          for (var v = 0; v < jf.length; v++)
            vn(jf[v], e);
          break;
        case "source":
          vn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          vn("error", e), vn("load", e);
          break;
        case "details":
          vn("toggle", e);
          break;
        case "input":
          Mt(e, r), vn("invalid", e);
          break;
        case "option":
          $u(e, r);
          break;
        case "select":
          vs(e, r), vn("invalid", e);
          break;
        case "textarea":
          Gu(e, r), vn("invalid", e);
          break;
      }
      gs(t, r);
      {
        d = /* @__PURE__ */ new Set();
        for (var E = e.attributes, U = 0; U < E.length; U++) {
          var I = E[U].name.toLowerCase();
          switch (I) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              d.add(E[U].name);
          }
        }
      }
      var ce = null;
      for (var X in r)
        if (r.hasOwnProperty(X)) {
          var de = r[X];
          if (X === Ml)
            typeof de == "string" ? e.textContent !== de && (Wf || Yd(e.textContent, de), ce = [Ml, de]) : typeof de == "number" && e.textContent !== "" + de && (Wf || Yd(e.textContent, de), ce = [Ml, "" + de]);
          else if (q.hasOwnProperty(X))
            de != null && (typeof de != "function" && Qd(X, de), X === "onScroll" && vn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof s == "boolean"
          ) {
            var we = void 0, Pe = Gn(X);
            if (!Wf) {
              if (!(X === Wd || X === Vf || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === If) {
                  var at = e.innerHTML, bt = de ? de[$d] : void 0;
                  if (bt != null) {
                    var ft = l1(e, bt);
                    ft !== at && $f(X, at, ft);
                  }
                } else if (X === zl) {
                  if (d.delete(X), u1) {
                    var zt = V0(de);
                    we = e.getAttribute("style"), zt !== we && $f(X, we, zt);
                  }
                } else if (s)
                  d.delete(X.toLowerCase()), we = It(e, X, de), de !== we && $f(X, we, de);
                else if (!hn(X, Pe, s) && !mn(X, de, Pe, s)) {
                  var rn = !1;
                  if (Pe !== null)
                    d.delete(Pe.attributeName), we = Ut(e, X, de, Pe);
                  else {
                    var fe = i;
                    if (fe === rc && (fe = Xu(t)), fe === rc)
                      d.delete(X.toLowerCase());
                    else {
                      var ye = Eb(X);
                      ye !== null && ye !== X && (rn = !0, d.delete(ye)), d.delete(X);
                    }
                    we = It(e, X, de);
                  }
                  de !== we && !rn && $f(X, we, de);
                }
              }
            }
          }
        }
      switch (d.size > 0 && !Wf && o1(d), t) {
        case "input":
          C(e), Rn(e, r, !0);
          break;
        case "textarea":
          C(e), wr(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof r.onClick == "function" && Gd(e);
          break;
      }
      return ce;
    }
    function bb(e, t) {
      var r = e.nodeValue !== t;
      return r;
    }
    function c1(e, t) {
      Yd(e.nodeValue, t);
    }
    function f1(e, t) {
      {
        if (ta)
          return;
        ta = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function d1(e, t) {
      {
        if (ta)
          return;
        ta = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function p1(e, t, r) {
      {
        if (ta)
          return;
        ta = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function v1(e, t) {
      {
        if (t === "" || ta)
          return;
        ta = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Sb(e, t, r) {
      switch (t) {
        case "input":
          Zn(e, r);
          return;
        case "textarea":
          Xo(e, r);
          return;
        case "select":
          hs(e, r);
          return;
      }
    }
    var Yf = function() {
    }, Qf = function() {
    };
    {
      var _b = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], h1 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Rb = h1.concat(["button"]), Tb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], m1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Qf = function(e, t) {
        var r = g({}, e || m1), i = {
          tag: t
        };
        return h1.indexOf(t) !== -1 && (r.aTagInScope = null, r.buttonTagInScope = null, r.nobrTagInScope = null), Rb.indexOf(t) !== -1 && (r.pTagInButtonScope = null), _b.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (r.listItemTagAutoclosing = null, r.dlItemTagAutoclosing = null), r.current = i, t === "form" && (r.formTag = i), t === "a" && (r.aTagInScope = i), t === "button" && (r.buttonTagInScope = i), t === "nobr" && (r.nobrTagInScope = i), t === "p" && (r.pTagInButtonScope = i), t === "li" && (r.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (r.dlItemTagAutoclosing = i), r;
      };
      var wb = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Tb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Db = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, y1 = {};
      Yf = function(e, t, r) {
        r = r || m1;
        var i = r.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = wb(e, u) ? null : i, d = s ? null : Db(e, r), v = s || d;
        if (v) {
          var E = v.tag, U = !!s + "|" + e + "|" + E;
          if (!y1[U]) {
            y1[U] = !0;
            var I = e, ce = "";
            if (e === "#text" ? /\S/.test(t) ? I = "Text nodes" : (I = "Whitespace text nodes", ce = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : I = "<" + e + ">", s) {
              var X = "";
              E === "table" && e === "tr" && (X += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", I, E, ce, X);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", I, E);
          }
        }
      };
    }
    var ac;
    ac = "suppressHydrationWarning";
    var x1 = "$", g1 = "/$", Eh = "$?", Ch = "$!", Ab = "style", bh = null, Sh = null;
    function E1(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function kb(e) {
      var t, r, i = e.nodeType;
      switch (i) {
        case Ti:
        case N0: {
          t = i === Ti ? "#document" : "#fragment";
          var u = e.documentElement;
          r = u ? u.namespaceURI : so(null, "");
          break;
        }
        default: {
          var s = i === yr ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, r = so(d, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), E = Qf(null, v);
        return {
          namespace: r,
          ancestorInfo: E
        };
      }
    }
    function Bb(e, t, r) {
      {
        var i = e, u = so(i.namespace, t), s = Qf(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Lw(e) {
      return e;
    }
    function Fb(e) {
      bh = Td(), Sh = ue();
      var t = null;
      return Tf(!1), t;
    }
    function Ob(e) {
      te(Sh), Tf(bh), bh = null, Sh = null;
    }
    function Nb(e, t, r, i, u) {
      var s;
      {
        var d = i;
        if (Yf(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, E = Qf(d.ancestorInfo, e);
          Yf(null, v, E);
        }
        s = d.namespace;
      }
      var U = hb(e, t, r, s);
      return Zd(u, U), wh(U, t), U;
    }
    function Mb(e, t) {
      e.appendChild(t);
    }
    function zb(e, t, r, i, u) {
      return yb(e, t, r, i), E1(t, r);
    }
    function Pb(e, t, r, i, u, s) {
      {
        var d = s;
        if (typeof i.children != typeof r.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, E = Qf(d.ancestorInfo, t);
          Yf(null, v, E);
        }
      }
      return xb(e, t, r, i);
    }
    function _h(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Lb(e, t, r, i) {
      {
        var u = r;
        Yf(null, e, u.ancestorInfo);
      }
      var s = mb(e, t);
      return Zd(i, s), s;
    }
    var C1 = typeof setTimeout == "function" ? setTimeout : void 0, Ub = typeof clearTimeout == "function" ? clearTimeout : void 0, Rh = -1;
    function jb(e, t, r, i) {
      E1(t, r) && e.focus();
    }
    function Hb(e, t, r, i, u, s) {
      wh(e, u), gb(e, t, r, i, u);
    }
    function b1(e) {
      xs(e, "");
    }
    function Ib(e, t, r) {
      e.nodeValue = r;
    }
    function Vb(e, t) {
      e.appendChild(t);
    }
    function Wb(e, t) {
      var r;
      e.nodeType === yr ? (r = e.parentNode, r.insertBefore(t, e)) : (r = e, r.appendChild(t));
      var i = e._reactRootContainer;
      i == null && r.onclick === null && Gd(r);
    }
    function $b(e, t, r) {
      e.insertBefore(t, r);
    }
    function qb(e, t, r) {
      e.nodeType === yr ? e.parentNode.insertBefore(t, r) : e.insertBefore(t, r);
    }
    function Yb(e, t) {
      e.removeChild(t);
    }
    function Qb(e, t) {
      e.nodeType === yr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Gb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Xb(e) {
      e.nodeValue = "";
    }
    function Kb(e, t) {
      e = e;
      var r = t[Ab], i = r != null && r.hasOwnProperty("display") ? r.display : null;
      e.style.display = Mc("display", i);
    }
    function Zb(e, t) {
      e.nodeValue = t;
    }
    function Th(e) {
      if (e.nodeType === Qr)
        e.textContent = "";
      else if (e.nodeType === Ti) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function Jb(e, t, r) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function eS(e, t) {
      return t === "" || e.nodeType !== Xa ? null : e;
    }
    function tS(e) {
      return e.data === Eh;
    }
    function nS(e) {
      return e.data === Ch;
    }
    function S1(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Xa)
          break;
      }
      return e;
    }
    function Xd(e) {
      return S1(e.nextSibling);
    }
    function _1(e) {
      return S1(e.firstChild);
    }
    function rS(e, t, r, i, u, s) {
      Zd(s, e), wh(e, r);
      var d;
      {
        var v = u;
        d = v.namespace;
      }
      return Cb(e, t, r, d);
    }
    function aS(e, t, r) {
      return Zd(r, e), bb(e, t);
    }
    function iS(e) {
      for (var t = e.nextSibling, r = 0; t; ) {
        if (t.nodeType === yr) {
          var i = t.data;
          if (i === g1) {
            if (r === 0)
              return Xd(t);
            r--;
          } else
            (i === x1 || i === Ch || i === Eh) && r++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function R1(e) {
      for (var t = e.previousSibling, r = 0; t; ) {
        if (t.nodeType === yr) {
          var i = t.data;
          if (i === x1 || i === Ch || i === Eh) {
            if (r === 0)
              return t;
            r--;
          } else
            i === g1 && r++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function oS(e) {
      uf(e);
    }
    function uS(e) {
      uf(e);
    }
    function lS(e, t, r) {
      c1(t, r);
    }
    function sS(e, t, r, i, u) {
      t[ac] !== !0 && c1(i, u);
    }
    function cS(e, t) {
      t.nodeType === Qr ? f1(e, t) : t.nodeType === yr || d1(e, t);
    }
    function fS(e, t, r, i) {
      t[ac] !== !0 && (i.nodeType === Qr ? f1(r, i) : i.nodeType === yr || d1(r, i));
    }
    function dS(e, t, r) {
      p1(e, t);
    }
    function pS(e, t) {
      v1(e, t);
    }
    function vS(e, t, r, i, u) {
      t[ac] !== !0 && p1(r, i);
    }
    function hS(e, t, r, i) {
      t[ac] !== !0 && v1(r, i);
    }
    function mS(e, t, r) {
      t[ac];
    }
    var yS = 0;
    function xS(e) {
      var t = "r:" + (yS++).toString(36);
      return {
        toString: function() {
          return e(), t;
        },
        valueOf: function() {
          return e(), t;
        }
      };
    }
    function gS(e) {
      return e !== null && typeof e == "object" && e.$$typeof === Ee;
    }
    function ES(e) {
      return {
        $$typeof: Ee,
        toString: e,
        valueOf: e
      };
    }
    function CS(e) {
      Zx(e);
    }
    var Kd = Math.random().toString(36).slice(2), Gf = "__reactFiber$" + Kd, T1 = "__reactProps$" + Kd, Xf = "__reactContainer$" + Kd, w1 = "__reactEvents$" + Kd;
    function Zd(e, t) {
      t[Gf] = e;
    }
    function bS(e, t) {
      t[Xf] = e;
    }
    function D1(e) {
      e[Xf] = null;
    }
    function Jd(e) {
      return !!e[Xf];
    }
    function Pl(e) {
      var t = e[Gf];
      if (t)
        return t;
      for (var r = e.parentNode; r; ) {
        if (t = r[Xf] || r[Gf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = R1(e); u !== null; ) {
              var s = u[Gf];
              if (s)
                return s;
              u = R1(u);
            }
          return t;
        }
        e = r, r = e.parentNode;
      }
      return null;
    }
    function Tu(e) {
      var t = e[Gf] || e[Xf];
      return t && (t.tag === k || t.tag === M || t.tag === T || t.tag === z) ? t : null;
    }
    function ic(e) {
      if (e.tag === k || e.tag === M)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function ep(e) {
      return e[T1] || null;
    }
    function wh(e, t) {
      e[T1] = t;
    }
    function A1(e) {
      var t = e[w1];
      return t === void 0 && (t = e[w1] = /* @__PURE__ */ new Set()), t;
    }
    var k1 = {}, B1 = F.ReactDebugCurrentFrame;
    function tp(e) {
      if (e) {
        var t = e._owner, r = vr(e.type, e._source, t ? t.type : null);
        B1.setExtraStackFrame(r);
      } else
        B1.setExtraStackFrame(null);
    }
    function ci(e, t, r, i, u) {
      {
        var s = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var d in e)
          if (s(e, d)) {
            var v = void 0;
            try {
              if (typeof e[d] != "function") {
                var E = Error((i || "React class") + ": " + r + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              v = e[d](t, d, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (U) {
              v = U;
            }
            v && !(v instanceof Error) && (tp(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, d, typeof v), tp(null)), v instanceof Error && !(v.message in k1) && (k1[v.message] = !0, tp(u), y("Failed %s type: %s", r, v.message), tp(null));
          }
      }
    }
    var Dh = [], np;
    np = [];
    var No = -1;
    function wu(e) {
      return {
        current: e
      };
    }
    function Ar(e, t) {
      if (No < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== np[No] && y("Unexpected Fiber popped."), e.current = Dh[No], Dh[No] = null, np[No] = null, No--;
    }
    function kr(e, t, r) {
      No++, Dh[No] = e.current, np[No] = r, e.current = t;
    }
    var Ah;
    Ah = {};
    var va = {};
    Object.freeze(va);
    var Mo = wu(va), Xi = wu(!1), kh = va;
    function oc(e, t, r) {
      return r && Ki(t) ? kh : Mo.current;
    }
    function F1(e, t, r) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = r;
      }
    }
    function uc(e, t) {
      {
        var r = e.type, i = r.contextTypes;
        if (!i)
          return va;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var v = Le(r) || "Unknown";
          ci(i, s, "context", v);
        }
        return u && F1(e, t, s), s;
      }
    }
    function rp() {
      return Xi.current;
    }
    function Ki(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function ap(e) {
      Ar(Xi, e), Ar(Mo, e);
    }
    function Bh(e) {
      Ar(Xi, e), Ar(Mo, e);
    }
    function O1(e, t, r) {
      {
        if (Mo.current !== va)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        kr(Mo, t, e), kr(Xi, r, e);
      }
    }
    function N1(e, t, r) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Le(t) || "Unknown";
            Ah[s] || (Ah[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return r;
        }
        var d = i.getChildContext();
        for (var v in d)
          if (!(v in u))
            throw Error((Le(t) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var E = Le(t) || "Unknown";
          ci(u, d, "child context", E);
        }
        return g({}, r, d);
      }
    }
    function ip(e) {
      {
        var t = e.stateNode, r = t && t.__reactInternalMemoizedMergedChildContext || va;
        return kh = Mo.current, kr(Mo, r, e), kr(Xi, Xi.current, e), !0;
      }
    }
    function M1(e, t, r) {
      {
        var i = e.stateNode;
        if (!i)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (r) {
          var u = N1(e, t, kh);
          i.__reactInternalMemoizedMergedChildContext = u, Ar(Xi, e), Ar(Mo, e), kr(Mo, u, e), kr(Xi, r, e);
        } else
          Ar(Xi, e), kr(Xi, r, e);
      }
    }
    function SS(e) {
      {
        if (!(Bs(e) && e.tag === m))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case z:
              return t.stateNode.context;
            case m: {
              var r = t.type;
              if (Ki(r))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Fh = 0, z1 = 1, P1 = 2, op = null, Zi = null, lc = !1, _S = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function RS(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        op = t.inject(e), Zi = t;
      } catch (r) {
        y("React instrumentation encountered an error: %s.", r);
      }
      return !0;
    }
    function TS(e, t) {
      if (Zi && typeof Zi.onScheduleFiberRoot == "function")
        try {
          Zi.onScheduleFiberRoot(op, e, t);
        } catch (r) {
          lc || (lc = !0, y("React instrumentation encountered an error: %s", r));
        }
    }
    function wS(e, t) {
      if (Zi && typeof Zi.onCommitFiberRoot == "function")
        try {
          var r = (e.current.flags & $t) === $t;
          J && Zi.onCommitFiberRoot(op, e, t, r);
        } catch (i) {
          lc || (lc = !0, y("React instrumentation encountered an error: %s", i));
        }
    }
    function DS(e) {
      if (Zi && typeof Zi.onCommitFiberUnmount == "function")
        try {
          Zi.onCommitFiberUnmount(op, e);
        } catch (t) {
          lc || (lc = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    var AS = x.unstable_runWithPriority, Oh = x.unstable_scheduleCallback, L1 = x.unstable_cancelCallback, kS = x.unstable_shouldYield, U1 = x.unstable_requestPaint, Nh = x.unstable_now, BS = x.unstable_getCurrentPriorityLevel, up = x.unstable_ImmediatePriority, j1 = x.unstable_UserBlockingPriority, H1 = x.unstable_NormalPriority, I1 = x.unstable_LowPriority, V1 = x.unstable_IdlePriority;
    if (!(p.__interactionsRef != null && p.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var W1 = {}, Ha = 99, Ll = 98, zo = 97, $1 = 96, q1 = 95, Mh = 90, FS = kS, OS = (
      // Fall back gracefully if we're running an older version of Scheduler.
      U1 !== void 0 ? U1 : function() {
      }
    ), Po = null, lp = null, zh = !1, Y1 = Nh(), Br = Y1 < 1e4 ? Nh : function() {
      return Nh() - Y1;
    };
    function sc() {
      switch (BS()) {
        case up:
          return Ha;
        case j1:
          return Ll;
        case H1:
          return zo;
        case I1:
          return $1;
        case V1:
          return q1;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Q1(e) {
      switch (e) {
        case Ha:
          return up;
        case Ll:
          return j1;
        case zo:
          return H1;
        case $1:
          return I1;
        case q1:
          return V1;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Ul(e, t) {
      var r = Q1(e);
      return AS(r, t);
    }
    function Du(e, t, r) {
      var i = Q1(e);
      return Oh(i, t, r);
    }
    function NS(e) {
      return Po === null ? (Po = [e], lp = Oh(up, X1)) : Po.push(e), W1;
    }
    function G1(e) {
      e !== W1 && L1(e);
    }
    function Ji() {
      if (lp !== null) {
        var e = lp;
        lp = null, L1(e);
      }
      X1();
    }
    function X1() {
      if (!zh && Po !== null) {
        zh = !0;
        var e = 0;
        try {
          var t = !0, r = Po;
          Ul(Ha, function() {
            for (; e < r.length; e++) {
              var i = r[e];
              do
                i = i(t);
              while (i !== null);
            }
          }), Po = null;
        } catch (i) {
          throw Po !== null && (Po = Po.slice(e + 1)), Oh(up, Ji), i;
        } finally {
          zh = !1;
        }
      }
    }
    var K1 = "17.0.2", xn = 0, Dn = 1, na = 2, jl = 4, ha = 8, MS = 16, zS = F.ReactCurrentBatchConfig, PS = 0;
    function LS() {
      return zS.transition;
    }
    var fi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var US = function(e) {
        for (var t = null, r = e; r !== null; )
          r.mode & Dn && (t = r), r = r.return;
        return t;
      }, Hl = function(e) {
        var t = [];
        return e.forEach(function(r) {
          t.push(r);
        }), t.sort().join(", ");
      }, Kf = [], Zf = [], Jf = [], e0 = [], t0 = [], n0 = [], Il = /* @__PURE__ */ new Set();
      fi.recordUnsafeLifecycleWarnings = function(e, t) {
        Il.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Kf.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillMount == "function" && Zf.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Jf.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillReceiveProps == "function" && e0.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && t0.push(e), e.mode & Dn && typeof t.UNSAFE_componentWillUpdate == "function" && n0.push(e));
      }, fi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Kf.length > 0 && (Kf.forEach(function(X) {
          e.add(Le(X.type) || "Component"), Il.add(X.type);
        }), Kf = []);
        var t = /* @__PURE__ */ new Set();
        Zf.length > 0 && (Zf.forEach(function(X) {
          t.add(Le(X.type) || "Component"), Il.add(X.type);
        }), Zf = []);
        var r = /* @__PURE__ */ new Set();
        Jf.length > 0 && (Jf.forEach(function(X) {
          r.add(Le(X.type) || "Component"), Il.add(X.type);
        }), Jf = []);
        var i = /* @__PURE__ */ new Set();
        e0.length > 0 && (e0.forEach(function(X) {
          i.add(Le(X.type) || "Component"), Il.add(X.type);
        }), e0 = []);
        var u = /* @__PURE__ */ new Set();
        t0.length > 0 && (t0.forEach(function(X) {
          u.add(Le(X.type) || "Component"), Il.add(X.type);
        }), t0 = []);
        var s = /* @__PURE__ */ new Set();
        if (n0.length > 0 && (n0.forEach(function(X) {
          s.add(Le(X.type) || "Component"), Il.add(X.type);
        }), n0 = []), t.size > 0) {
          var d = Hl(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var v = Hl(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var E = Hl(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var U = Hl(e);
          A(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
        if (r.size > 0) {
          var I = Hl(r);
          A(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
        if (u.size > 0) {
          var ce = Hl(u);
          A(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, ce);
        }
      };
      var sp = /* @__PURE__ */ new Map(), Z1 = /* @__PURE__ */ new Set();
      fi.recordLegacyContextWarning = function(e, t) {
        var r = US(e);
        if (r === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Z1.has(e.type)) {
          var i = sp.get(r);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], sp.set(r, i)), i.push(e));
        }
      }, fi.flushLegacyContextWarning = function() {
        sp.forEach(function(e, t) {
          if (e.length !== 0) {
            var r = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Le(s.type) || "Component"), Z1.add(s.type);
            });
            var u = Hl(i);
            try {
              _n(r), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Kn();
            }
          }
        });
      }, fi.discardPendingWarnings = function() {
        Kf = [], Zf = [], Jf = [], e0 = [], t0 = [], n0 = [], sp = /* @__PURE__ */ new Map();
      };
    }
    function di(e, t) {
      if (e && e.defaultProps) {
        var r = g({}, t), i = e.defaultProps;
        for (var u in i)
          r[u] === void 0 && (r[u] = i[u]);
        return r;
      }
      return t;
    }
    var cp = 1073741823, Ph = wu(null), Lh;
    Lh = {};
    var fp = null, cc = null, dp = null, pp = !1;
    function vp() {
      fp = null, cc = null, dp = null, pp = !1;
    }
    function J1() {
      pp = !0;
    }
    function eg() {
      pp = !1;
    }
    function tg(e, t) {
      var r = e.type._context;
      kr(Ph, r._currentValue, e), r._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Lh && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Lh;
    }
    function Uh(e) {
      var t = Ph.current;
      Ar(Ph, e);
      var r = e.type._context;
      r._currentValue = t;
    }
    function jS(e, t, r) {
      if (a(r, t))
        return 0;
      var i = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(r, t) : cp;
      return (i & cp) !== i && y("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", i), i | 0;
    }
    function ng(e, t) {
      for (var r = e; r !== null; ) {
        var i = r.alternate;
        if (!Ii(r.childLanes, t))
          r.childLanes = jt(r.childLanes, t), i !== null && (i.childLanes = jt(i.childLanes, t));
        else if (i !== null && !Ii(i.childLanes, t))
          i.childLanes = jt(i.childLanes, t);
        else
          break;
        r = r.return;
      }
    }
    function HS(e, t, r, i) {
      var u = e.child;
      for (u !== null && (u.return = e); u !== null; ) {
        var s = void 0, d = u.dependencies;
        if (d !== null) {
          s = u.child;
          for (var v = d.firstContext; v !== null; ) {
            if (v.context === t && v.observedBits & r) {
              if (u.tag === m) {
                var E = Au(cn, $n(i));
                E.tag = hp, ku(u, E);
              }
              u.lanes = jt(u.lanes, i);
              var U = u.alternate;
              U !== null && (U.lanes = jt(U.lanes, i)), ng(u.return, i), d.lanes = jt(d.lanes, i);
              break;
            }
            v = v.next;
          }
        } else
          u.tag === b ? s = u.type === e.type ? null : u.child : s = u.child;
        if (s !== null)
          s.return = u;
        else
          for (s = u; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var I = s.sibling;
            if (I !== null) {
              I.return = s.return, s = I;
              break;
            }
            s = s.return;
          }
        u = s;
      }
    }
    function fc(e, t) {
      fp = e, cc = null, dp = null;
      var r = e.dependencies;
      if (r !== null) {
        var i = r.firstContext;
        i !== null && (rr(r.lanes, t) && Ym(), r.firstContext = null);
      }
    }
    function Yn(e, t) {
      if (pp && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), dp !== e) {
        if (!(t === !1 || t === 0)) {
          var r;
          typeof t != "number" || t === cp ? (dp = e, r = cp) : r = t;
          var i = {
            context: e,
            observedBits: r,
            next: null
          };
          if (cc === null) {
            if (fp === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            cc = i, fp.dependencies = {
              lanes: Ce,
              firstContext: i,
              responders: null
            };
          } else
            cc = cc.next = i;
        }
      }
      return e._currentValue;
    }
    var rg = 0, ag = 1, hp = 2, jh = 3, mp = !1, Hh, yp;
    Hh = !1, yp = null;
    function Ih(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function ig(e, t) {
      var r = t.updateQueue, i = e.updateQueue;
      if (r === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Au(e, t) {
      var r = {
        eventTime: e,
        lane: t,
        tag: rg,
        payload: null,
        callback: null,
        next: null
      };
      return r;
    }
    function ku(e, t) {
      var r = e.updateQueue;
      if (r !== null) {
        var i = r.shared, u = i.pending;
        u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, yp === i && !Hh && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Hh = !0);
      }
    }
    function og(e, t) {
      var r = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (r === u) {
          var s = null, d = null, v = r.firstBaseUpdate;
          if (v !== null) {
            var E = v;
            do {
              var U = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              d === null ? s = d = U : (d.next = U, d = U), E = E.next;
            } while (E !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          r = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = r;
          return;
        }
      }
      var I = r.lastBaseUpdate;
      I === null ? r.firstBaseUpdate = t : I.next = t, r.lastBaseUpdate = t;
    }
    function IS(e, t, r, i, u, s) {
      switch (r.tag) {
        case ag: {
          var d = r.payload;
          if (typeof d == "function") {
            J1();
            var v = d.call(s, i, u);
            {
              if (e.mode & Dn) {
                Yr();
                try {
                  d.call(s, i, u);
                } finally {
                  Un();
                }
              }
              eg();
            }
            return v;
          }
          return d;
        }
        case jh:
          e.flags = e.flags & ~ca | $t;
        case rg: {
          var E = r.payload, U;
          if (typeof E == "function") {
            J1(), U = E.call(s, i, u);
            {
              if (e.mode & Dn) {
                Yr();
                try {
                  E.call(s, i, u);
                } finally {
                  Un();
                }
              }
              eg();
            }
          } else
            U = E;
          return U == null ? i : g({}, i, U);
        }
        case hp:
          return mp = !0, i;
      }
      return i;
    }
    function r0(e, t, r, i) {
      var u = e.updateQueue;
      mp = !1, yp = u.shared;
      var s = u.firstBaseUpdate, d = u.lastBaseUpdate, v = u.shared.pending;
      if (v !== null) {
        u.shared.pending = null;
        var E = v, U = E.next;
        E.next = null, d === null ? s = U : d.next = U, d = E;
        var I = e.alternate;
        if (I !== null) {
          var ce = I.updateQueue, X = ce.lastBaseUpdate;
          X !== d && (X === null ? ce.firstBaseUpdate = U : X.next = U, ce.lastBaseUpdate = E);
        }
      }
      if (s !== null) {
        var de = u.baseState, we = Ce, Pe = null, at = null, bt = null, ft = s;
        do {
          var zt = ft.lane, rn = ft.eventTime;
          if (Ii(i, zt)) {
            if (bt !== null) {
              var ye = {
                eventTime: rn,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Tn,
                tag: ft.tag,
                payload: ft.payload,
                callback: ft.callback,
                next: null
              };
              bt = bt.next = ye;
            }
            de = IS(e, u, ft, de, t, r);
            var oe = ft.callback;
            if (oe !== null) {
              e.flags |= Fi;
              var Fe = u.effects;
              Fe === null ? u.effects = [ft] : Fe.push(ft);
            }
          } else {
            var fe = {
              eventTime: rn,
              lane: zt,
              tag: ft.tag,
              payload: ft.payload,
              callback: ft.callback,
              next: null
            };
            bt === null ? (at = bt = fe, Pe = de) : bt = bt.next = fe, we = jt(we, zt);
          }
          if (ft = ft.next, ft === null) {
            if (v = u.shared.pending, v === null)
              break;
            var He = v, Xe = He.next;
            He.next = null, ft = Xe, u.lastBaseUpdate = He, u.shared.pending = null;
          }
        } while (!0);
        bt === null && (Pe = de), u.baseState = Pe, u.firstBaseUpdate = at, u.lastBaseUpdate = bt, xy(we), e.lanes = we, e.memoizedState = de;
      }
      yp = null;
    }
    function VS(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function ug() {
      mp = !1;
    }
    function xp() {
      return mp;
    }
    function lg(e, t, r) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], d = s.callback;
          d !== null && (s.callback = null, VS(d, r));
        }
    }
    var Vh = {}, WS = Array.isArray, sg = new c.Component().refs, Wh, $h, qh, Yh, Qh, cg, gp, Gh, Xh, Kh;
    {
      Wh = /* @__PURE__ */ new Set(), $h = /* @__PURE__ */ new Set(), qh = /* @__PURE__ */ new Set(), Yh = /* @__PURE__ */ new Set(), Gh = /* @__PURE__ */ new Set(), Qh = /* @__PURE__ */ new Set(), Xh = /* @__PURE__ */ new Set(), Kh = /* @__PURE__ */ new Set();
      var fg = /* @__PURE__ */ new Set();
      gp = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          fg.has(r) || (fg.add(r), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cg = function(e, t) {
        if (t === void 0) {
          var r = Le(e) || "Component";
          Qh.has(r) || (Qh.add(r), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      }, Object.defineProperty(Vh, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Vh);
    }
    function Ep(e, t, r, i) {
      var u = e.memoizedState;
      if (e.mode & Dn) {
        Yr();
        try {
          r(i, u);
        } finally {
          Un();
        }
      }
      var s = r(i, u);
      cg(t, s);
      var d = s == null ? u : g({}, u, s);
      if (e.memoizedState = d, e.lanes === Ce) {
        var v = e.updateQueue;
        v.baseState = d;
      }
    }
    var Zh = {
      isMounted: ld,
      enqueueSetState: function(e, t, r) {
        var i = Ja(e), u = ya(), s = Nu(i), d = Au(u, s);
        d.payload = t, r != null && (gp(r, "setState"), d.callback = r), ku(i, d), Or(i, s, u);
      },
      enqueueReplaceState: function(e, t, r) {
        var i = Ja(e), u = ya(), s = Nu(i), d = Au(u, s);
        d.tag = ag, d.payload = t, r != null && (gp(r, "replaceState"), d.callback = r), ku(i, d), Or(i, s, u);
      },
      enqueueForceUpdate: function(e, t) {
        var r = Ja(e), i = ya(), u = Nu(r), s = Au(i, u);
        s.tag = hp, t != null && (gp(t, "forceUpdate"), s.callback = t), ku(r, s), Or(r, u, i);
      }
    };
    function dg(e, t, r, i, u, s, d) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        if (e.mode & Dn) {
          Yr();
          try {
            v.shouldComponentUpdate(i, s, d);
          } finally {
            Un();
          }
        }
        var E = v.shouldComponentUpdate(i, s, d);
        return E === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Le(t) || "Component"), E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !l(r, i) || !l(u, s) : !0;
    }
    function $S(e, t, r) {
      var i = e.stateNode;
      {
        var u = Le(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Xh.has(t) && (Xh.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Le(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var d = i.props !== r;
        i.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !qh.has(t) && (qh.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Le(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var v = i.state;
        v && (typeof v != "object" || WS(v)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function pg(e, t) {
      t.updater = Zh, e.stateNode = t, Xc(t, e), t._reactInternalInstance = Vh;
    }
    function vg(e, t, r) {
      var i = !1, u = va, s = va, d = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === qr && d._context === void 0
        );
        if (!v && !Kh.has(t)) {
          Kh.add(t);
          var E = "";
          d === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? E = " However, it is set to a " + typeof d + "." : d.$$typeof === zr ? E = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Le(t) || "Component", E);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Yn(d);
      else {
        u = oc(e, t, !0);
        var U = t.contextTypes;
        i = U != null, s = i ? uc(e, u) : va;
      }
      if (e.mode & Dn) {
        Yr();
        try {
          new t(r, s);
        } finally {
          Un();
        }
      }
      var I = new t(r, s), ce = e.memoizedState = I.state !== null && I.state !== void 0 ? I.state : null;
      pg(e, I);
      {
        if (typeof t.getDerivedStateFromProps == "function" && ce === null) {
          var X = Le(t) || "Component";
          $h.has(X) || ($h.add(X), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", X, I.state === null ? "null" : "undefined", X));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof I.getSnapshotBeforeUpdate == "function") {
          var de = null, we = null, Pe = null;
          if (typeof I.componentWillMount == "function" && I.componentWillMount.__suppressDeprecationWarning !== !0 ? de = "componentWillMount" : typeof I.UNSAFE_componentWillMount == "function" && (de = "UNSAFE_componentWillMount"), typeof I.componentWillReceiveProps == "function" && I.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? we = "componentWillReceiveProps" : typeof I.UNSAFE_componentWillReceiveProps == "function" && (we = "UNSAFE_componentWillReceiveProps"), typeof I.componentWillUpdate == "function" && I.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Pe = "componentWillUpdate" : typeof I.UNSAFE_componentWillUpdate == "function" && (Pe = "UNSAFE_componentWillUpdate"), de !== null || we !== null || Pe !== null) {
            var at = Le(t) || "Component", bt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yh.has(at) || (Yh.add(at), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, at, bt, de !== null ? `
  ` + de : "", we !== null ? `
  ` + we : "", Pe !== null ? `
  ` + Pe : ""));
          }
        }
      }
      return i && F1(e, u, s), I;
    }
    function qS(e, t) {
      var r = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Le(e.type) || "Component"), Zh.enqueueReplaceState(t, t.state, null));
    }
    function hg(e, t, r, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== u) {
        {
          var s = Le(e.type) || "Component";
          Wh.has(s) || (Wh.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Zh.enqueueReplaceState(t, t.state, null);
      }
    }
    function Jh(e, t, r, i) {
      $S(e, t, r);
      var u = e.stateNode;
      u.props = r, u.state = e.memoizedState, u.refs = sg, Ih(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Yn(s);
      else {
        var d = oc(e, t, !0);
        u.context = uc(e, d);
      }
      {
        if (u.state === r) {
          var v = Le(t) || "Component";
          Gh.has(v) || (Gh.add(v), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & Dn && fi.recordLegacyContextWarning(e, u), fi.recordUnsafeLifecycleWarnings(e, u);
      }
      r0(e, r, u, i), u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      typeof E == "function" && (Ep(e, t, E, r), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qS(e, u), r0(e, r, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= st);
    }
    function YS(e, t, r, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var d = u.context, v = t.contextType, E = va;
      if (typeof v == "object" && v !== null)
        E = Yn(v);
      else {
        var U = oc(e, t, !0);
        E = uc(e, U);
      }
      var I = t.getDerivedStateFromProps, ce = typeof I == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !ce && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== r || d !== E) && hg(e, u, r, E), ug();
      var X = e.memoizedState, de = u.state = X;
      if (r0(e, r, u, i), de = e.memoizedState, s === r && X === de && !rp() && !xp())
        return typeof u.componentDidMount == "function" && (e.flags |= st), !1;
      typeof I == "function" && (Ep(e, t, I, r), de = e.memoizedState);
      var we = xp() || dg(e, t, s, r, X, de, E);
      return we ? (!ce && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= st)) : (typeof u.componentDidMount == "function" && (e.flags |= st), e.memoizedProps = r, e.memoizedState = de), u.props = r, u.state = de, u.context = E, we;
    }
    function QS(e, t, r, i, u) {
      var s = t.stateNode;
      ig(e, t);
      var d = t.memoizedProps, v = t.type === t.elementType ? d : di(t.type, d);
      s.props = v;
      var E = t.pendingProps, U = s.context, I = r.contextType, ce = va;
      if (typeof I == "object" && I !== null)
        ce = Yn(I);
      else {
        var X = oc(t, r, !0);
        ce = uc(t, X);
      }
      var de = r.getDerivedStateFromProps, we = typeof de == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !we && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== E || U !== ce) && hg(t, s, i, ce), ug();
      var Pe = t.memoizedState, at = s.state = Pe;
      if (r0(t, i, s, u), at = t.memoizedState, d === E && Pe === at && !rp() && !xp())
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || Pe !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || Pe !== e.memoizedState) && (t.flags |= ka), !1;
      typeof de == "function" && (Ep(t, r, de, i), at = t.memoizedState);
      var bt = xp() || dg(t, r, v, i, Pe, at, ce);
      return bt ? (!we && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, at, ce), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, at, ce)), typeof s.componentDidUpdate == "function" && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ka)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || Pe !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || Pe !== e.memoizedState) && (t.flags |= ka), t.memoizedProps = i, t.memoizedState = at), s.props = i, s.state = at, s.context = ce, bt;
    }
    var em, tm, nm, rm, am, mg = function(e, t) {
    };
    em = !1, tm = !1, nm = {}, rm = {}, am = {}, mg = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var r = Le(t.type) || "Component";
        rm[r] || (rm[r] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var Cp = Array.isArray;
    function a0(e, t, r) {
      var i = r.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Dn || se) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(r._owner && r._self && r._owner.stateNode !== r._self)) {
          var u = Le(e.type) || "Component";
          nm[u] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), nm[u] = !0);
        }
        if (r._owner) {
          var s = r._owner, d;
          if (s) {
            var v = s;
            if (v.tag !== m)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = v.stateNode;
          }
          if (!d)
            throw Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var U = function(I) {
            var ce = d.refs;
            ce === sg && (ce = d.refs = {}), I === null ? delete ce[E] : ce[E] = I;
          };
          return U._stringRef = E, U;
        } else {
          if (typeof i != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!r._owner)
            throw Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function bp(e, t) {
      if (e.type !== "textarea")
        throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Sp(e) {
      {
        var t = Le(e.type) || "Component";
        if (am[t])
          return;
        am[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yg(e) {
      function t(fe, ye) {
        if (e) {
          var oe = fe.lastEffect;
          oe !== null ? (oe.nextEffect = ye, fe.lastEffect = ye) : fe.firstEffect = fe.lastEffect = ye, ye.nextEffect = null, ye.flags = ln;
        }
      }
      function r(fe, ye) {
        if (!e)
          return null;
        for (var oe = ye; oe !== null; )
          t(fe, oe), oe = oe.sibling;
        return null;
      }
      function i(fe, ye) {
        for (var oe = /* @__PURE__ */ new Map(), Fe = ye; Fe !== null; )
          Fe.key !== null ? oe.set(Fe.key, Fe) : oe.set(Fe.index, Fe), Fe = Fe.sibling;
        return oe;
      }
      function u(fe, ye) {
        var oe = Jl(fe, ye);
        return oe.index = 0, oe.sibling = null, oe;
      }
      function s(fe, ye, oe) {
        if (fe.index = oe, !e)
          return ye;
        var Fe = fe.alternate;
        if (Fe !== null) {
          var He = Fe.index;
          return He < ye ? (fe.flags = yt, ye) : He;
        } else
          return fe.flags = yt, ye;
      }
      function d(fe) {
        return e && fe.alternate === null && (fe.flags = yt), fe;
      }
      function v(fe, ye, oe, Fe) {
        if (ye === null || ye.tag !== M) {
          var He = Fy(oe, fe.mode, Fe);
          return He.return = fe, He;
        } else {
          var Xe = u(ye, oe);
          return Xe.return = fe, Xe;
        }
      }
      function E(fe, ye, oe, Fe) {
        if (ye !== null && (ye.elementType === oe.type || // Keep this check inline so it only runs on the false path:
        KE(ye, oe))) {
          var He = u(ye, oe.props);
          return He.ref = a0(fe, ye, oe), He.return = fe, He._debugSource = oe._source, He._debugOwner = oe._owner, He;
        }
        var Xe = ky(oe, fe.mode, Fe);
        return Xe.ref = a0(fe, ye, oe), Xe.return = fe, Xe;
      }
      function U(fe, ye, oe, Fe) {
        if (ye === null || ye.tag !== _ || ye.stateNode.containerInfo !== oe.containerInfo || ye.stateNode.implementation !== oe.implementation) {
          var He = Oy(oe, fe.mode, Fe);
          return He.return = fe, He;
        } else {
          var Xe = u(ye, oe.children || []);
          return Xe.return = fe, Xe;
        }
      }
      function I(fe, ye, oe, Fe, He) {
        if (ye === null || ye.tag !== j) {
          var Xe = es(oe, fe.mode, Fe, He);
          return Xe.return = fe, Xe;
        } else {
          var Ft = u(ye, oe);
          return Ft.return = fe, Ft;
        }
      }
      function ce(fe, ye, oe) {
        if (typeof ye == "string" || typeof ye == "number") {
          var Fe = Fy("" + ye, fe.mode, oe);
          return Fe.return = fe, Fe;
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case dn: {
              var He = ky(ye, fe.mode, oe);
              return He.ref = a0(fe, null, ye), He.return = fe, He;
            }
            case Yt: {
              var Xe = Oy(ye, fe.mode, oe);
              return Xe.return = fe, Xe;
            }
          }
          if (Cp(ye) || Qt(ye)) {
            var Ft = es(ye, fe.mode, oe, null);
            return Ft.return = fe, Ft;
          }
          bp(fe, ye);
        }
        return typeof ye == "function" && Sp(fe), null;
      }
      function X(fe, ye, oe, Fe) {
        var He = ye !== null ? ye.key : null;
        if (typeof oe == "string" || typeof oe == "number")
          return He !== null ? null : v(fe, ye, "" + oe, Fe);
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case dn:
              return oe.key === He ? oe.type === Fn ? I(fe, ye, oe.props.children, Fe, He) : E(fe, ye, oe, Fe) : null;
            case Yt:
              return oe.key === He ? U(fe, ye, oe, Fe) : null;
          }
          if (Cp(oe) || Qt(oe))
            return He !== null ? null : I(fe, ye, oe, Fe, null);
          bp(fe, oe);
        }
        return typeof oe == "function" && Sp(fe), null;
      }
      function de(fe, ye, oe, Fe, He) {
        if (typeof Fe == "string" || typeof Fe == "number") {
          var Xe = fe.get(oe) || null;
          return v(ye, Xe, "" + Fe, He);
        }
        if (typeof Fe == "object" && Fe !== null) {
          switch (Fe.$$typeof) {
            case dn: {
              var Ft = fe.get(Fe.key === null ? oe : Fe.key) || null;
              return Fe.type === Fn ? I(ye, Ft, Fe.props.children, He, Fe.key) : E(ye, Ft, Fe, He);
            }
            case Yt: {
              var fn = fe.get(Fe.key === null ? oe : Fe.key) || null;
              return U(ye, fn, Fe, He);
            }
          }
          if (Cp(Fe) || Qt(Fe)) {
            var gn = fe.get(oe) || null;
            return I(ye, gn, Fe, He, null);
          }
          bp(ye, Fe);
        }
        return typeof Fe == "function" && Sp(ye), null;
      }
      function we(fe, ye, oe) {
        {
          if (typeof fe != "object" || fe === null)
            return ye;
          switch (fe.$$typeof) {
            case dn:
            case Yt:
              mg(fe, oe);
              var Fe = fe.key;
              if (typeof Fe != "string")
                break;
              if (ye === null) {
                ye = /* @__PURE__ */ new Set(), ye.add(Fe);
                break;
              }
              if (!ye.has(Fe)) {
                ye.add(Fe);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Fe);
              break;
          }
        }
        return ye;
      }
      function Pe(fe, ye, oe, Fe) {
        for (var He = null, Xe = 0; Xe < oe.length; Xe++) {
          var Ft = oe[Xe];
          He = we(Ft, He, fe);
        }
        for (var fn = null, gn = null, Xt = ye, Qn = 0, qt = 0, En = null; Xt !== null && qt < oe.length; qt++) {
          Xt.index > qt ? (En = Xt, Xt = null) : En = Xt.sibling;
          var sr = X(fe, Xt, oe[qt], Fe);
          if (sr === null) {
            Xt === null && (Xt = En);
            break;
          }
          e && Xt && sr.alternate === null && t(fe, Xt), Qn = s(sr, Qn, qt), gn === null ? fn = sr : gn.sibling = sr, gn = sr, Xt = En;
        }
        if (qt === oe.length)
          return r(fe, Xt), fn;
        if (Xt === null) {
          for (; qt < oe.length; qt++) {
            var Nn = ce(fe, oe[qt], Fe);
            Nn !== null && (Qn = s(Nn, Qn, qt), gn === null ? fn = Nn : gn.sibling = Nn, gn = Nn);
          }
          return fn;
        }
        for (var io = i(fe, Xt); qt < oe.length; qt++) {
          var Mn = de(io, fe, qt, oe[qt], Fe);
          Mn !== null && (e && Mn.alternate !== null && io.delete(Mn.key === null ? qt : Mn.key), Qn = s(Mn, Qn, qt), gn === null ? fn = Mn : gn.sibling = Mn, gn = Mn);
        }
        return e && io.forEach(function(oo) {
          return t(fe, oo);
        }), fn;
      }
      function at(fe, ye, oe, Fe) {
        var He = Qt(oe);
        if (typeof He != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          oe[Symbol.toStringTag] === "Generator" && (tm || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), tm = !0), oe.entries === He && (em || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), em = !0);
          var Xe = He.call(oe);
          if (Xe)
            for (var Ft = null, fn = Xe.next(); !fn.done; fn = Xe.next()) {
              var gn = fn.value;
              Ft = we(gn, Ft, fe);
            }
        }
        var Xt = He.call(oe);
        if (Xt == null)
          throw Error("An iterable object provided no iterator.");
        for (var Qn = null, qt = null, En = ye, sr = 0, Nn = 0, io = null, Mn = Xt.next(); En !== null && !Mn.done; Nn++, Mn = Xt.next()) {
          En.index > Nn ? (io = En, En = null) : io = En.sibling;
          var oo = X(fe, En, Mn.value, Fe);
          if (oo === null) {
            En === null && (En = io);
            break;
          }
          e && En && oo.alternate === null && t(fe, En), sr = s(oo, sr, Nn), qt === null ? Qn = oo : qt.sibling = oo, qt = oo, En = io;
        }
        if (Mn.done)
          return r(fe, En), Qn;
        if (En === null) {
          for (; !Mn.done; Nn++, Mn = Xt.next()) {
            var ts = ce(fe, Mn.value, Fe);
            ts !== null && (sr = s(ts, sr, Nn), qt === null ? Qn = ts : qt.sibling = ts, qt = ts);
          }
          return Qn;
        }
        for (var jy = i(fe, En); !Mn.done; Nn++, Mn = Xt.next()) {
          var Pu = de(jy, fe, Nn, Mn.value, Fe);
          Pu !== null && (e && Pu.alternate !== null && jy.delete(Pu.key === null ? Nn : Pu.key), sr = s(Pu, sr, Nn), qt === null ? Qn = Pu : qt.sibling = Pu, qt = Pu);
        }
        return e && jy.forEach(function(Y_) {
          return t(fe, Y_);
        }), Qn;
      }
      function bt(fe, ye, oe, Fe) {
        if (ye !== null && ye.tag === M) {
          r(fe, ye.sibling);
          var He = u(ye, oe);
          return He.return = fe, He;
        }
        r(fe, ye);
        var Xe = Fy(oe, fe.mode, Fe);
        return Xe.return = fe, Xe;
      }
      function ft(fe, ye, oe, Fe) {
        for (var He = oe.key, Xe = ye; Xe !== null; ) {
          if (Xe.key === He) {
            switch (Xe.tag) {
              case j: {
                if (oe.type === Fn) {
                  r(fe, Xe.sibling);
                  var Ft = u(Xe, oe.props.children);
                  return Ft.return = fe, Ft._debugSource = oe._source, Ft._debugOwner = oe._owner, Ft;
                }
                break;
              }
              case be:
              default: {
                if (Xe.elementType === oe.type || // Keep this check inline so it only runs on the false path:
                KE(Xe, oe)) {
                  r(fe, Xe.sibling);
                  var fn = u(Xe, oe.props);
                  return fn.ref = a0(fe, Xe, oe), fn.return = fe, fn._debugSource = oe._source, fn._debugOwner = oe._owner, fn;
                }
                break;
              }
            }
            r(fe, Xe);
            break;
          } else
            t(fe, Xe);
          Xe = Xe.sibling;
        }
        if (oe.type === Fn) {
          var gn = es(oe.props.children, fe.mode, Fe, oe.key);
          return gn.return = fe, gn;
        } else {
          var Xt = ky(oe, fe.mode, Fe);
          return Xt.ref = a0(fe, ye, oe), Xt.return = fe, Xt;
        }
      }
      function zt(fe, ye, oe, Fe) {
        for (var He = oe.key, Xe = ye; Xe !== null; ) {
          if (Xe.key === He)
            if (Xe.tag === _ && Xe.stateNode.containerInfo === oe.containerInfo && Xe.stateNode.implementation === oe.implementation) {
              r(fe, Xe.sibling);
              var Ft = u(Xe, oe.children || []);
              return Ft.return = fe, Ft;
            } else {
              r(fe, Xe);
              break;
            }
          else
            t(fe, Xe);
          Xe = Xe.sibling;
        }
        var fn = Oy(oe, fe.mode, Fe);
        return fn.return = fe, fn;
      }
      function rn(fe, ye, oe, Fe) {
        var He = typeof oe == "object" && oe !== null && oe.type === Fn && oe.key === null;
        He && (oe = oe.props.children);
        var Xe = typeof oe == "object" && oe !== null;
        if (Xe)
          switch (oe.$$typeof) {
            case dn:
              return d(ft(fe, ye, oe, Fe));
            case Yt:
              return d(zt(fe, ye, oe, Fe));
          }
        if (typeof oe == "string" || typeof oe == "number")
          return d(bt(fe, ye, "" + oe, Fe));
        if (Cp(oe))
          return Pe(fe, ye, oe, Fe);
        if (Qt(oe))
          return at(fe, ye, oe, Fe);
        if (Xe && bp(fe, oe), typeof oe == "function" && Sp(fe), typeof oe > "u" && !He)
          switch (fe.tag) {
            case m: {
              var Ft = fe.stateNode;
              if (Ft.render._isMockFunction)
                break;
            }
            case be:
            case D:
            case S:
            case Y:
              throw Error((Le(fe.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
          }
        return r(fe, ye);
      }
      return rn;
    }
    var _p = yg(!0), xg = yg(!1);
    function GS(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var r = t.child, i = Jl(r, r.pendingProps);
        for (t.child = i, i.return = t; r.sibling !== null; )
          r = r.sibling, i = i.sibling = Jl(r, r.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function XS(e, t) {
      for (var r = e.child; r !== null; )
        s_(r, t), r = r.sibling;
    }
    var i0 = {}, Bu = wu(i0), o0 = wu(i0), Rp = wu(i0);
    function Tp(e) {
      if (e === i0)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function gg() {
      var e = Tp(Rp.current);
      return e;
    }
    function im(e, t) {
      kr(Rp, t, e), kr(o0, e, e), kr(Bu, i0, e);
      var r = kb(t);
      Ar(Bu, e), kr(Bu, r, e);
    }
    function dc(e) {
      Ar(Bu, e), Ar(o0, e), Ar(Rp, e);
    }
    function om() {
      var e = Tp(Bu.current);
      return e;
    }
    function Eg(e) {
      Tp(Rp.current);
      var t = Tp(Bu.current), r = Bb(t, e.type);
      t !== r && (kr(o0, e, e), kr(Bu, r, e));
    }
    function um(e) {
      o0.current === e && (Ar(Bu, e), Ar(o0, e));
    }
    var KS = 0, Cg = 1, lm = 1, u0 = 2, pi = wu(KS);
    function wp(e, t) {
      return (e & t) !== 0;
    }
    function l0(e) {
      return e & Cg;
    }
    function sm(e, t) {
      return e & Cg | t;
    }
    function ZS(e, t) {
      return e | t;
    }
    function Vl(e, t) {
      kr(pi, t, e);
    }
    function pc(e) {
      Ar(pi, e);
    }
    function JS(e, t) {
      var r = e.memoizedState;
      if (r !== null)
        return r.dehydrated !== null;
      var i = e.memoizedProps;
      return i.fallback === void 0 ? !1 : i.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function Dp(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === T) {
          var r = t.memoizedState;
          if (r !== null) {
            var i = r.dehydrated;
            if (i === null || tS(i) || nS(i))
              return t;
          }
        } else if (t.tag === K && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & $t) !== Gt;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var cm = (
      /*  */
      0
    ), vc = (
      /* */
      1
    ), hc = (
      /*    */
      2
    ), s0 = (
      /*   */
      4
    ), Ia = null, Wl = null, Fu = !1;
    function e4(e) {
      var t = e.stateNode.containerInfo;
      return Wl = _1(t), Ia = e, Fu = !0, !0;
    }
    function bg(e, t) {
      switch (e.tag) {
        case z:
          cS(e.stateNode.containerInfo, t);
          break;
        case k:
          fS(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var r = h_();
      r.stateNode = t, r.return = e, r.flags = ln, e.lastEffect !== null ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r;
    }
    function Sg(e, t) {
      switch (t.flags = t.flags & ~Xr | yt, e.tag) {
        case z: {
          var r = e.stateNode.containerInfo;
          switch (t.tag) {
            case k:
              var i = t.type;
              t.pendingProps, dS(r, i);
              break;
            case M:
              var u = t.pendingProps;
              pS(r, u);
              break;
          }
          break;
        }
        case k: {
          var s = e.type, d = e.memoizedProps, v = e.stateNode;
          switch (t.tag) {
            case k:
              var E = t.type;
              t.pendingProps, vS(s, d, v, E);
              break;
            case M:
              var U = t.pendingProps;
              hS(s, d, v, U);
              break;
            case T:
              mS(s, d);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function _g(e, t) {
      switch (e.tag) {
        case k: {
          var r = e.type;
          e.pendingProps;
          var i = Jb(t, r);
          return i !== null ? (e.stateNode = i, !0) : !1;
        }
        case M: {
          var u = e.pendingProps, s = eS(t, u);
          return s !== null ? (e.stateNode = s, !0) : !1;
        }
        case T:
          return !1;
        default:
          return !1;
      }
    }
    function fm(e) {
      if (Fu) {
        var t = Wl;
        if (!t) {
          Sg(Ia, e), Fu = !1, Ia = e;
          return;
        }
        var r = t;
        if (!_g(e, t)) {
          if (t = Xd(r), !t || !_g(e, t)) {
            Sg(Ia, e), Fu = !1, Ia = e;
            return;
          }
          bg(Ia, r);
        }
        Ia = e, Wl = _1(t);
      }
    }
    function t4(e, t, r) {
      var i = e.stateNode, u = rS(i, e.type, e.memoizedProps, t, r, e);
      return e.updateQueue = u, u !== null;
    }
    function n4(e) {
      var t = e.stateNode, r = e.memoizedProps, i = aS(t, r, e);
      if (i) {
        var u = Ia;
        if (u !== null)
          switch (u.tag) {
            case z: {
              var s = u.stateNode.containerInfo;
              lS(s, t, r);
              break;
            }
            case k: {
              var d = u.type, v = u.memoizedProps, E = u.stateNode;
              sS(d, v, E, t, r);
              break;
            }
          }
      }
      return i;
    }
    function r4(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return iS(r);
    }
    function Rg(e) {
      for (var t = e.return; t !== null && t.tag !== k && t.tag !== z && t.tag !== T; )
        t = t.return;
      Ia = t;
    }
    function Ap(e) {
      if (e !== Ia)
        return !1;
      if (!Fu)
        return Rg(e), Fu = !0, !1;
      var t = e.type;
      if (e.tag !== k || t !== "head" && t !== "body" && !_h(t, e.memoizedProps))
        for (var r = Wl; r; )
          bg(e, r), r = Xd(r);
      return Rg(e), e.tag === T ? Wl = r4(e) : Wl = Ia ? Xd(e.stateNode) : null, !0;
    }
    function dm() {
      Ia = null, Wl = null, Fu = !1;
    }
    function pm() {
      return Fu;
    }
    var c0 = [], vm;
    vm = {};
    function a4(e) {
      c0.push(e);
    }
    function hm() {
      for (var e = 0; e < c0.length; e++) {
        var t = c0[e];
        t._workInProgressVersionPrimary = null;
      }
      c0.length = 0;
    }
    function i4(e) {
      return e._workInProgressVersionPrimary;
    }
    function Tg(e, t) {
      e._workInProgressVersionPrimary = t, c0.push(e);
    }
    function o4(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = vm : e._currentPrimaryRenderer !== vm && y("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var $e = F.ReactCurrentDispatcher, Va = F.ReactCurrentBatchConfig, mm, ym;
    ym = {}, mm = /* @__PURE__ */ new Set();
    var f0 = Ce, on = null, Fr = null, lr = null, kp = !1, d0 = !1, u4 = 25, Ae = null, Wa = null, Ou = -1, xm = !1;
    function nn() {
      {
        var e = Ae;
        Wa === null ? Wa = [e] : Wa.push(e);
      }
    }
    function Qe() {
      {
        var e = Ae;
        Wa !== null && (Ou++, Wa[Ou] !== e && l4(e));
      }
    }
    function p0(e) {
      e != null && !Array.isArray(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Ae, typeof e);
    }
    function l4(e) {
      {
        var t = Le(on.type);
        if (!mm.has(t) && (mm.add(t), Wa !== null)) {
          for (var r = "", i = 30, u = 0; u <= Ou; u++) {
            for (var s = Wa[u], d = u === Ou ? e : s, v = u + 1 + ". " + s; v.length < i; )
              v += " ";
            v += d + `
`, r += v;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, r);
        }
      }
    }
    function ra() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function gm(e, t) {
      if (xm)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ae), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!a(e[r], t[r]))
          return !1;
      return !0;
    }
    function mc(e, t, r, i, u, s) {
      f0 = s, on = t, Wa = e !== null ? e._debugHookTypes : null, Ou = -1, xm = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Ce, e !== null && e.memoizedState !== null ? $e.current = Hg : Wa !== null ? $e.current = jg : $e.current = Ug;
      var d = r(i, u);
      if (d0) {
        var v = 0;
        do {
          if (d0 = !1, !(v < u4))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, xm = !1, Fr = null, lr = null, t.updateQueue = null, Ou = -1, $e.current = Ig, d = r(i, u);
        } while (d0);
      }
      $e.current = Ip, t._debugHookTypes = Wa;
      var E = Fr !== null && Fr.next !== null;
      if (f0 = Ce, on = null, Fr = null, lr = null, Ae = null, Wa = null, Ou = -1, kp = !1, E)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function wg(e, t, r) {
      t.updateQueue = e.updateQueue, t.flags &= ~(iu | st), e.lanes = gu(e.lanes, r);
    }
    function Dg() {
      if ($e.current = Ip, kp) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        kp = !1;
      }
      f0 = Ce, on = null, Fr = null, lr = null, Wa = null, Ou = -1, Ae = null, Hp = !1, d0 = !1;
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return lr === null ? on.memoizedState = lr = e : lr = lr.next = e, lr;
    }
    function ql() {
      var e;
      if (Fr === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Fr.next;
      var r;
      if (lr === null ? r = on.memoizedState : r = lr.next, r !== null)
        lr = r, r = lr.next, Fr = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        Fr = e;
        var i = {
          memoizedState: Fr.memoizedState,
          baseState: Fr.baseState,
          baseQueue: Fr.baseQueue,
          queue: Fr.queue,
          next: null
        };
        lr === null ? on.memoizedState = lr = i : lr = lr.next = i;
      }
      return lr;
    }
    function s4() {
      return {
        lastEffect: null
      };
    }
    function Bp(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Em(e, t, r) {
      var i = $l(), u;
      r !== void 0 ? u = r(t) : u = t, i.memoizedState = i.baseState = u;
      var s = i.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, d = s.dispatch = Om.bind(null, on, s);
      return [i.memoizedState, d];
    }
    function Cm(e, t, r) {
      var i = ql(), u = i.queue;
      if (u === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Fr, d = s.baseQueue, v = u.pending;
      if (v !== null) {
        if (d !== null) {
          var E = d.next, U = v.next;
          d.next = U, v.next = E;
        }
        s.baseQueue !== d && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = v, u.pending = null;
      }
      if (d !== null) {
        var I = d.next, ce = s.baseState, X = null, de = null, we = null, Pe = I;
        do {
          var at = Pe.lane;
          if (Ii(f0, at)) {
            if (we !== null) {
              var ft = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Tn,
                action: Pe.action,
                eagerReducer: Pe.eagerReducer,
                eagerState: Pe.eagerState,
                next: null
              };
              we = we.next = ft;
            }
            if (Pe.eagerReducer === e)
              ce = Pe.eagerState;
            else {
              var zt = Pe.action;
              ce = e(ce, zt);
            }
          } else {
            var bt = {
              lane: at,
              action: Pe.action,
              eagerReducer: Pe.eagerReducer,
              eagerState: Pe.eagerState,
              next: null
            };
            we === null ? (de = we = bt, X = ce) : we = we.next = bt, on.lanes = jt(on.lanes, at), xy(at);
          }
          Pe = Pe.next;
        } while (Pe !== null && Pe !== I);
        we === null ? X = ce : we.next = de, a(ce, i.memoizedState) || Ym(), i.memoizedState = ce, i.baseState = X, i.baseQueue = we, u.lastRenderedState = ce;
      }
      var rn = u.dispatch;
      return [i.memoizedState, rn];
    }
    function bm(e, t, r) {
      var i = ql(), u = i.queue;
      if (u === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, d = u.pending, v = i.memoizedState;
      if (d !== null) {
        u.pending = null;
        var E = d.next, U = E;
        do {
          var I = U.action;
          v = e(v, I), U = U.next;
        } while (U !== E);
        a(v, i.memoizedState) || Ym(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
      }
      return [v, s];
    }
    function Ag(e, t, r) {
      o4(t);
      var i = t._getVersion, u = i(t._source), s = !1, d = i4(t);
      if (d !== null ? s = d === u : (s = Ii(f0, e.mutableReadLanes), s && Tg(t, u)), s) {
        var v = r(t._source);
        return typeof v == "function" && y("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), v;
      } else
        throw a4(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function kg(e, t, r, i) {
      var u = p8();
      if (u === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var s = t._getVersion, d = s(t._source), v = $e.current, E = v.useState(function() {
        return Ag(u, t, r);
      }), U = E[0], I = E[1], ce = U, X = lr, de = e.memoizedState, we = de.refs, Pe = we.getSnapshot, at = de.source, bt = de.subscribe, ft = on;
      if (e.memoizedState = {
        refs: we,
        source: t,
        subscribe: i
      }, v.useEffect(function() {
        we.getSnapshot = r, we.setSnapshot = I;
        var rn = s(t._source);
        if (!a(d, rn)) {
          var fe = r(t._source);
          if (typeof fe == "function" && y("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), !a(ce, fe)) {
            I(fe);
            var ye = Nu(ft);
            Cd(u, ye);
          }
          _f(u, u.mutableReadLanes);
        }
      }, [r, t, i]), v.useEffect(function() {
        var rn = function() {
          var ye = we.getSnapshot, oe = we.setSnapshot;
          try {
            oe(ye(t._source));
            var Fe = Nu(ft);
            Cd(u, Fe);
          } catch (He) {
            oe(function() {
              throw He;
            });
          }
        }, fe = i(t._source, rn);
        return typeof fe != "function" && y("Mutable source subscribe function must return an unsubscribe function."), fe;
      }, [t, i]), !a(Pe, r) || !a(at, t) || !a(bt, i)) {
        var zt = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: Bp,
          lastRenderedState: ce
        };
        zt.dispatch = I = Om.bind(null, on, zt), X.queue = zt, X.baseQueue = null, ce = Ag(u, t, r), X.memoizedState = X.baseState = ce;
      }
      return ce;
    }
    function Sm(e, t, r) {
      var i = $l();
      return i.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: r
      }, kg(i, e, t, r);
    }
    function Fp(e, t, r) {
      var i = ql();
      return kg(i, e, t, r);
    }
    function Yl(e) {
      var t = $l();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var r = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Bp,
        lastRenderedState: e
      }, i = r.dispatch = Om.bind(null, on, r);
      return [t.memoizedState, i];
    }
    function v0(e) {
      return Cm(Bp);
    }
    function h0(e) {
      return bm(Bp);
    }
    function Op(e, t, r, i) {
      var u = {
        tag: e,
        create: t,
        destroy: r,
        deps: i,
        // Circular
        next: null
      }, s = on.updateQueue;
      if (s === null)
        s = s4(), on.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = u.next = u;
        else {
          var v = d.next;
          d.next = u, u.next = v, s.lastEffect = u;
        }
      }
      return u;
    }
    function Np(e) {
      var t = $l(), r = {
        current: e
      };
      return Object.seal(r), t.memoizedState = r, r;
    }
    function yc(e) {
      var t = ql();
      return t.memoizedState;
    }
    function _m(e, t, r, i) {
      var u = $l(), s = i === void 0 ? null : i;
      on.flags |= e, u.memoizedState = Op(vc | t, r, void 0, s);
    }
    function Rm(e, t, r, i) {
      var u = ql(), s = i === void 0 ? null : i, d = void 0;
      if (Fr !== null) {
        var v = Fr.memoizedState;
        if (d = v.destroy, s !== null) {
          var E = v.deps;
          if (gm(s, E)) {
            Op(t, r, d, s);
            return;
          }
        }
      }
      on.flags |= e, u.memoizedState = Op(vc | t, r, d, s);
    }
    function Mp(e, t) {
      return typeof jest < "u" && $E(on), _m(st | iu, s0, e, t);
    }
    function xc(e, t) {
      return typeof jest < "u" && $E(on), Rm(st | iu, s0, e, t);
    }
    function Tm(e, t) {
      return _m(st, hc, e, t);
    }
    function zp(e, t) {
      return Rm(st, hc, e, t);
    }
    function Bg(e, t) {
      if (typeof t == "function") {
        var r = t, i = e();
        return r(i), function() {
          r(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function wm(e, t, r) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return _m(st, hc, Bg.bind(null, t, e), i);
    }
    function Pp(e, t, r) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Rm(st, hc, Bg.bind(null, t, e), i);
    }
    function c4(e, t) {
    }
    var Lp = c4;
    function Dm(e, t) {
      var r = $l(), i = t === void 0 ? null : t;
      return r.memoizedState = [e, i], e;
    }
    function Up(e, t) {
      var r = ql(), i = t === void 0 ? null : t, u = r.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (gm(i, s))
          return u[0];
      }
      return r.memoizedState = [e, i], e;
    }
    function Am(e, t) {
      var r = $l(), i = t === void 0 ? null : t, u = e();
      return r.memoizedState = [u, i], u;
    }
    function jp(e, t) {
      var r = ql(), i = t === void 0 ? null : t, u = r.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (gm(i, s))
          return u[0];
      }
      var d = e();
      return r.memoizedState = [d, i], d;
    }
    function km(e) {
      var t = Yl(e), r = t[0], i = t[1];
      return Mp(function() {
        var u = Va.transition;
        Va.transition = 1;
        try {
          i(e);
        } finally {
          Va.transition = u;
        }
      }, [e]), r;
    }
    function Fg(e) {
      var t = v0(), r = t[0], i = t[1];
      return xc(function() {
        var u = Va.transition;
        Va.transition = 1;
        try {
          i(e);
        } finally {
          Va.transition = u;
        }
      }, [e]), r;
    }
    function Og(e) {
      var t = h0(), r = t[0], i = t[1];
      return xc(function() {
        var u = Va.transition;
        Va.transition = 1;
        try {
          i(e);
        } finally {
          Va.transition = u;
        }
      }, [e]), r;
    }
    function f4(e, t) {
      var r = sc();
      Ul(r < Ll ? Ll : r, function() {
        e(!0);
      }), Ul(r > zo ? zo : r, function() {
        var i = Va.transition;
        Va.transition = 1;
        try {
          e(!1), t();
        } finally {
          Va.transition = i;
        }
      });
    }
    function Bm() {
      var e = Yl(!1), t = e[0], r = e[1], i = f4.bind(null, r);
      return Np(i), [i, t];
    }
    function Ng() {
      var e = v0(), t = e[0], r = yc(), i = r.current;
      return [i, t];
    }
    function Mg() {
      var e = h0(), t = e[0], r = yc(), i = r.current;
      return [i, t];
    }
    var Hp = !1;
    function d4() {
      return Hp;
    }
    function zg(e) {
      {
        var t = Le(e.type) || "Unknown";
        cs() && !ym[t] && (y("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), ym[t] = !0);
      }
    }
    function Fm() {
      var e = xS.bind(null, zg.bind(null, on));
      if (pm()) {
        var t = !1, r = on, i = function() {
          throw t || (t = !0, Hp = !0, s(e()), Hp = !1, zg(r)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, u = ES(i), s = Yl(u)[1];
        return (on.mode & na) === xn && (on.flags |= st | iu, Op(vc | s0, function() {
          s(e());
        }, void 0, null)), u;
      } else {
        var d = e();
        return Yl(d), d;
      }
    }
    function Pg() {
      var e = v0()[0];
      return e;
    }
    function Lg() {
      var e = h0()[0];
      return e;
    }
    function Om(e, t, r) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ya(), u = Nu(e), s = {
        lane: u,
        action: r,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, d = t.pending;
      d === null ? s.next = s : (s.next = d.next, d.next = s), t.pending = s;
      var v = e.alternate;
      if (e === on || v !== null && v === on)
        d0 = kp = !0;
      else {
        if (e.lanes === Ce && (v === null || v.lanes === Ce)) {
          var E = t.lastRenderedReducer;
          if (E !== null) {
            var U;
            U = $e.current, $e.current = vi;
            try {
              var I = t.lastRenderedState, ce = E(I, r);
              if (s.eagerReducer = E, s.eagerState = ce, a(ce, I))
                return;
            } catch {
            } finally {
              $e.current = U;
            }
          }
        }
        typeof jest < "u" && (WE(e), G8(e)), Or(e, u, i);
      }
    }
    var Ip = {
      readContext: Yn,
      useCallback: ra,
      useContext: ra,
      useEffect: ra,
      useImperativeHandle: ra,
      useLayoutEffect: ra,
      useMemo: ra,
      useReducer: ra,
      useRef: ra,
      useState: ra,
      useDebugValue: ra,
      useDeferredValue: ra,
      useTransition: ra,
      useMutableSource: ra,
      useOpaqueIdentifier: ra,
      unstable_isNewReconciler: Be
    }, Ug = null, jg = null, Hg = null, Ig = null, eo = null, vi = null, Vp = null;
    {
      var Nm = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, _t = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Ug = {
        readContext: function(e, t) {
          return Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", nn(), p0(t), Dm(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", nn(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", nn(), p0(t), Mp(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", nn(), p0(r), wm(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", nn(), p0(t), Tm(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", nn(), p0(t);
          var r = $e.current;
          $e.current = eo;
          try {
            return Am(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", nn();
          var i = $e.current;
          $e.current = eo;
          try {
            return Em(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", nn(), Np(e);
        },
        useState: function(e) {
          Ae = "useState", nn();
          var t = $e.current;
          $e.current = eo;
          try {
            return Yl(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", nn(), void 0;
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", nn(), km(e);
        },
        useTransition: function() {
          return Ae = "useTransition", nn(), Bm();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", nn(), Sm(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", nn(), Fm();
        },
        unstable_isNewReconciler: Be
      }, jg = {
        readContext: function(e, t) {
          return Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", Qe(), Dm(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", Qe(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", Qe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", Qe(), wm(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", Qe(), Tm(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", Qe();
          var r = $e.current;
          $e.current = eo;
          try {
            return Am(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", Qe();
          var i = $e.current;
          $e.current = eo;
          try {
            return Em(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", Qe(), Np(e);
        },
        useState: function(e) {
          Ae = "useState", Qe();
          var t = $e.current;
          $e.current = eo;
          try {
            return Yl(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", Qe(), void 0;
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", Qe(), km(e);
        },
        useTransition: function() {
          return Ae = "useTransition", Qe(), Bm();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", Qe(), Sm(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", Qe(), Fm();
        },
        unstable_isNewReconciler: Be
      }, Hg = {
        readContext: function(e, t) {
          return Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", Qe(), Up(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", Qe(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", Qe(), xc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", Qe(), Pp(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", Qe(), zp(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", Qe();
          var r = $e.current;
          $e.current = vi;
          try {
            return jp(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", Qe();
          var i = $e.current;
          $e.current = vi;
          try {
            return Cm(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", Qe(), yc();
        },
        useState: function(e) {
          Ae = "useState", Qe();
          var t = $e.current;
          $e.current = vi;
          try {
            return v0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", Qe(), Lp();
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", Qe(), Fg(e);
        },
        useTransition: function() {
          return Ae = "useTransition", Qe(), Ng();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", Qe(), Fp(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", Qe(), Pg();
        },
        unstable_isNewReconciler: Be
      }, Ig = {
        readContext: function(e, t) {
          return Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", Qe(), Up(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", Qe(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", Qe(), xc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", Qe(), Pp(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", Qe(), zp(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", Qe();
          var r = $e.current;
          $e.current = Vp;
          try {
            return jp(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", Qe();
          var i = $e.current;
          $e.current = Vp;
          try {
            return bm(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", Qe(), yc();
        },
        useState: function(e) {
          Ae = "useState", Qe();
          var t = $e.current;
          $e.current = Vp;
          try {
            return h0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", Qe(), Lp();
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", Qe(), Og(e);
        },
        useTransition: function() {
          return Ae = "useTransition", Qe(), Mg();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", Qe(), Fp(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", Qe(), Lg();
        },
        unstable_isNewReconciler: Be
      }, eo = {
        readContext: function(e, t) {
          return Nm(), Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", _t(), nn(), Dm(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", _t(), nn(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", _t(), nn(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", _t(), nn(), wm(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", _t(), nn(), Tm(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", _t(), nn();
          var r = $e.current;
          $e.current = eo;
          try {
            return Am(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", _t(), nn();
          var i = $e.current;
          $e.current = eo;
          try {
            return Em(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", _t(), nn(), Np(e);
        },
        useState: function(e) {
          Ae = "useState", _t(), nn();
          var t = $e.current;
          $e.current = eo;
          try {
            return Yl(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", _t(), nn(), void 0;
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", _t(), nn(), km(e);
        },
        useTransition: function() {
          return Ae = "useTransition", _t(), nn(), Bm();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", _t(), nn(), Sm(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", _t(), nn(), Fm();
        },
        unstable_isNewReconciler: Be
      }, vi = {
        readContext: function(e, t) {
          return Nm(), Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", _t(), Qe(), Up(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", _t(), Qe(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", _t(), Qe(), xc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", _t(), Qe(), Pp(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", _t(), Qe(), zp(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", _t(), Qe();
          var r = $e.current;
          $e.current = vi;
          try {
            return jp(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", _t(), Qe();
          var i = $e.current;
          $e.current = vi;
          try {
            return Cm(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", _t(), Qe(), yc();
        },
        useState: function(e) {
          Ae = "useState", _t(), Qe();
          var t = $e.current;
          $e.current = vi;
          try {
            return v0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", _t(), Qe(), Lp();
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", _t(), Qe(), Fg(e);
        },
        useTransition: function() {
          return Ae = "useTransition", _t(), Qe(), Ng();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", _t(), Qe(), Fp(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", _t(), Qe(), Pg();
        },
        unstable_isNewReconciler: Be
      }, Vp = {
        readContext: function(e, t) {
          return Nm(), Yn(e, t);
        },
        useCallback: function(e, t) {
          return Ae = "useCallback", _t(), Qe(), Up(e, t);
        },
        useContext: function(e, t) {
          return Ae = "useContext", _t(), Qe(), Yn(e, t);
        },
        useEffect: function(e, t) {
          return Ae = "useEffect", _t(), Qe(), xc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Ae = "useImperativeHandle", _t(), Qe(), Pp(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Ae = "useLayoutEffect", _t(), Qe(), zp(e, t);
        },
        useMemo: function(e, t) {
          Ae = "useMemo", _t(), Qe();
          var r = $e.current;
          $e.current = vi;
          try {
            return jp(e, t);
          } finally {
            $e.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Ae = "useReducer", _t(), Qe();
          var i = $e.current;
          $e.current = vi;
          try {
            return bm(e, t, r);
          } finally {
            $e.current = i;
          }
        },
        useRef: function(e) {
          return Ae = "useRef", _t(), Qe(), yc();
        },
        useState: function(e) {
          Ae = "useState", _t(), Qe();
          var t = $e.current;
          $e.current = vi;
          try {
            return h0(e);
          } finally {
            $e.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Ae = "useDebugValue", _t(), Qe(), Lp();
        },
        useDeferredValue: function(e) {
          return Ae = "useDeferredValue", _t(), Qe(), Og(e);
        },
        useTransition: function() {
          return Ae = "useTransition", _t(), Qe(), Mg();
        },
        useMutableSource: function(e, t, r) {
          return Ae = "useMutableSource", _t(), Qe(), Fp(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Ae = "useOpaqueIdentifier", _t(), Qe(), Lg();
        },
        unstable_isNewReconciler: Be
      };
    }
    var Wp = x.unstable_now, Vg = 0, m0 = -1;
    function p4() {
      return Vg;
    }
    function Wg() {
      Vg = Wp();
    }
    function Mm(e) {
      m0 = Wp(), e.actualStartTime < 0 && (e.actualStartTime = Wp());
    }
    function $g(e) {
      m0 = -1;
    }
    function $p(e, t) {
      if (m0 >= 0) {
        var r = Wp() - m0;
        e.actualDuration += r, t && (e.selfBaseDuration = r), m0 = -1;
      }
    }
    function zm(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var y0 = F.ReactCurrentOwner, to = !1, Pm, x0, Lm, Um, jm, Ql, Hm, qp;
    Pm = {}, x0 = {}, Lm = {}, Um = {}, jm = {}, Ql = !1, Hm = {}, qp = {};
    function aa(e, t, r, i) {
      e === null ? t.child = xg(t, null, r, i) : t.child = _p(t, e.child, r, i);
    }
    function v4(e, t, r, i) {
      t.child = _p(t, e.child, null, i), t.child = _p(t, null, r, i);
    }
    function qg(e, t, r, i, u) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && ci(
          s,
          i,
          // Resolved props
          "prop",
          Le(r)
        );
      }
      var d = r.render, v = t.ref, E;
      fc(t, u);
      {
        if (y0.current = t, or(!0), E = mc(e, t, d, i, v, u), t.mode & Dn) {
          Yr();
          try {
            E = mc(e, t, d, i, v, u);
          } finally {
            Un();
          }
        }
        or(!1);
      }
      return e !== null && !to ? (wg(e, t, u), Lo(e, t, u)) : (t.flags |= Cr, aa(e, t, E, u), t.child);
    }
    function Yg(e, t, r, i, u, s) {
      if (e === null) {
        var d = r.type;
        if (u_(d) && r.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        r.defaultProps === void 0) {
          var v = d;
          return v = Tc(d), t.tag = Y, t.type = v, $m(t, d), Qg(e, t, v, i, u, s);
        }
        {
          var E = d.propTypes;
          E && ci(
            E,
            i,
            // Resolved props
            "prop",
            Le(d)
          );
        }
        var U = Ay(r.type, null, i, t, t.mode, s);
        return U.ref = t.ref, U.return = t, t.child = U, U;
      }
      {
        var I = r.type, ce = I.propTypes;
        ce && ci(
          ce,
          i,
          // Resolved props
          "prop",
          Le(I)
        );
      }
      var X = e.child;
      if (!rr(u, s)) {
        var de = X.memoizedProps, we = r.compare;
        if (we = we !== null ? we : l, we(de, i) && e.ref === t.ref)
          return Lo(e, t, s);
      }
      t.flags |= Cr;
      var Pe = Jl(X, i);
      return Pe.ref = t.ref, Pe.return = t, t.child = Pe, Pe;
    }
    function Qg(e, t, r, i, u, s) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === en) {
          var v = d, E = v._payload, U = v._init;
          try {
            d = U(E);
          } catch {
            d = null;
          }
          var I = d && d.propTypes;
          I && ci(
            I,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Le(d)
          );
        }
      }
      if (e !== null) {
        var ce = e.memoizedProps;
        if (l(ce, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (to = !1, rr(s, u))
            (e.flags & il) !== Gt && (to = !0);
          else
            return t.lanes = e.lanes, Lo(e, t, s);
      }
      return Vm(e, t, r, i, s);
    }
    function Im(e, t, r) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || i.mode === "unstable-defer-without-hiding")
        if ((t.mode & jl) === xn) {
          var d = {
            baseLanes: Ce
          };
          t.memoizedState = d, lv(t, r);
        } else if (rr(r, da)) {
          var I = {
            baseLanes: Ce
          };
          t.memoizedState = I;
          var ce = s !== null ? s.baseLanes : r;
          lv(t, ce);
        } else {
          var v;
          if (s !== null) {
            var E = s.baseLanes;
            v = jt(E, r);
          } else
            v = r;
          vv(da), t.lanes = t.childLanes = da;
          var U = {
            baseLanes: v
          };
          return t.memoizedState = U, lv(t, v), null;
        }
      else {
        var X;
        s !== null ? (X = jt(s.baseLanes, r), t.memoizedState = null) : X = r, lv(t, X);
      }
      return aa(e, t, u, r), t.child;
    }
    var h4 = Im;
    function m4(e, t, r) {
      var i = t.pendingProps;
      return aa(e, t, i, r), t.child;
    }
    function y4(e, t, r) {
      var i = t.pendingProps.children;
      return aa(e, t, i, r), t.child;
    }
    function x4(e, t, r) {
      {
        t.flags |= st;
        var i = t.stateNode;
        i.effectDuration = 0, i.passiveEffectDuration = 0;
      }
      var u = t.pendingProps, s = u.children;
      return aa(e, t, s, r), t.child;
    }
    function Gg(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= tr);
    }
    function Vm(e, t, r, i, u) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && ci(
          s,
          i,
          // Resolved props
          "prop",
          Le(r)
        );
      }
      var d;
      {
        var v = oc(t, r, !0);
        d = uc(t, v);
      }
      var E;
      fc(t, u);
      {
        if (y0.current = t, or(!0), E = mc(e, t, r, i, d, u), t.mode & Dn) {
          Yr();
          try {
            E = mc(e, t, r, i, d, u);
          } finally {
            Un();
          }
        }
        or(!1);
      }
      return e !== null && !to ? (wg(e, t, u), Lo(e, t, u)) : (t.flags |= Cr, aa(e, t, E, u), t.child);
    }
    function Xg(e, t, r, i, u) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && ci(
          s,
          i,
          // Resolved props
          "prop",
          Le(r)
        );
      }
      var d;
      Ki(r) ? (d = !0, ip(t)) : d = !1, fc(t, u);
      var v = t.stateNode, E;
      v === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= yt), vg(t, r, i), Jh(t, r, i, u), E = !0) : e === null ? E = YS(t, r, i, u) : E = QS(e, t, r, i, u);
      var U = Wm(e, t, r, E, d, u);
      {
        var I = t.stateNode;
        E && I.props !== i && (Ql || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Le(t.type) || "a component"), Ql = !0);
      }
      return U;
    }
    function Wm(e, t, r, i, u, s) {
      Gg(e, t);
      var d = (t.flags & $t) !== Gt;
      if (!i && !d)
        return u && M1(t, r, !1), Lo(e, t, s);
      var v = t.stateNode;
      y0.current = t;
      var E;
      if (d && typeof r.getDerivedStateFromError != "function")
        E = null, $g();
      else {
        if (or(!0), E = v.render(), t.mode & Dn) {
          Yr();
          try {
            v.render();
          } finally {
            Un();
          }
        }
        or(!1);
      }
      return t.flags |= Cr, e !== null && d ? v4(e, t, E, s) : aa(e, t, E, s), t.memoizedState = v.state, u && M1(t, r, !0), t.child;
    }
    function Kg(e) {
      var t = e.stateNode;
      t.pendingContext ? O1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && O1(e, t.context, !1), im(e, t.containerInfo);
    }
    function g4(e, t, r) {
      Kg(t);
      var i = t.updateQueue;
      if (!(e !== null && i !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var u = t.pendingProps, s = t.memoizedState, d = s !== null ? s.element : null;
      ig(e, t), r0(t, u, null, r);
      var v = t.memoizedState, E = v.element;
      if (E === d)
        return dm(), Lo(e, t, r);
      var U = t.stateNode;
      if (U.hydrate && e4(t)) {
        {
          var I = U.mutableSourceEagerHydrationData;
          if (I != null)
            for (var ce = 0; ce < I.length; ce += 2) {
              var X = I[ce], de = I[ce + 1];
              Tg(X, de);
            }
        }
        var we = xg(t, null, E, r);
        t.child = we;
        for (var Pe = we; Pe; )
          Pe.flags = Pe.flags & ~yt | Xr, Pe = Pe.sibling;
      } else
        aa(e, t, E, r), dm();
      return t.child;
    }
    function E4(e, t, r) {
      Eg(t), e === null && fm(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = u.children, v = _h(i, u);
      return v ? d = null : s !== null && _h(i, s) && (t.flags |= er), Gg(e, t), aa(e, t, d, r), t.child;
    }
    function C4(e, t) {
      return e === null && fm(t), null;
    }
    function b4(e, t, r, i, u) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= yt);
      var s = t.pendingProps, d = r, v = d._payload, E = d._init, U = E(v);
      t.type = U;
      var I = t.tag = l_(U), ce = di(U, s), X;
      switch (I) {
        case D:
          return $m(t, U), t.type = U = Tc(U), X = Vm(null, t, U, ce, u), X;
        case m:
          return t.type = U = Sy(U), X = Xg(null, t, U, ce, u), X;
        case S:
          return t.type = U = _y(U), X = qg(null, t, U, ce, u), X;
        case V: {
          if (t.type !== t.elementType) {
            var de = U.propTypes;
            de && ci(
              de,
              ce,
              // Resolved for outer only
              "prop",
              Le(U)
            );
          }
          return X = Yg(
            null,
            t,
            U,
            di(U.type, ce),
            // The inner type can have defaults too
            i,
            u
          ), X;
        }
      }
      var we = "";
      throw U !== null && typeof U == "object" && U.$$typeof === en && (we = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + U + ". Lazy element type must resolve to a class or function." + we);
    }
    function S4(e, t, r, i, u) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= yt), t.tag = m;
      var s;
      return Ki(r) ? (s = !0, ip(t)) : s = !1, fc(t, u), vg(t, r, i), Jh(t, r, i, u), Wm(null, t, r, !0, s, u);
    }
    function _4(e, t, r, i) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= yt);
      var u = t.pendingProps, s;
      {
        var d = oc(t, r, !1);
        s = uc(t, d);
      }
      fc(t, i);
      var v;
      {
        if (r.prototype && typeof r.prototype.render == "function") {
          var E = Le(r) || "Unknown";
          Pm[E] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), Pm[E] = !0);
        }
        t.mode & Dn && fi.recordLegacyContextWarning(t, null), or(!0), y0.current = t, v = mc(null, t, r, u, s, i), or(!1);
      }
      if (t.flags |= Cr, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var U = Le(r) || "Unknown";
        x0[U] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), x0[U] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var I = Le(r) || "Unknown";
          x0[I] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), x0[I] = !0);
        }
        t.tag = m, t.memoizedState = null, t.updateQueue = null;
        var ce = !1;
        Ki(r) ? (ce = !0, ip(t)) : ce = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Ih(t);
        var X = r.getDerivedStateFromProps;
        return typeof X == "function" && Ep(t, r, X, u), pg(t, v), Jh(t, r, u, i), Wm(null, t, r, !0, ce, i);
      } else {
        if (t.tag = D, t.mode & Dn) {
          Yr();
          try {
            v = mc(null, t, r, u, s, i);
          } finally {
            Un();
          }
        }
        return aa(null, t, v, i), $m(t, r), t.child;
      }
    }
    function $m(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var r = "", i = Ga();
          i && (r += `

Check the render method of \`` + i + "`.");
          var u = i || e._debugID || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), jm[u] || (jm[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", r));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Le(t) || "Unknown";
          Um[d] || (y("%s: Function components do not support getDerivedStateFromProps.", d), Um[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Le(t) || "Unknown";
          Lm[v] || (y("%s: Function components do not support contextType.", v), Lm[v] = !0);
        }
      }
    }
    var Yp = {
      dehydrated: null,
      retryLane: Tn
    };
    function Qp(e) {
      return {
        baseLanes: e
      };
    }
    function Zg(e, t) {
      return {
        baseLanes: jt(e.baseLanes, t)
      };
    }
    function R4(e, t, r, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return wp(e, u0);
    }
    function Jg(e, t) {
      return gu(e.childLanes, t);
    }
    function eE(e, t, r) {
      var i = t.pendingProps;
      w_(t) && (t.flags |= $t);
      var u = pi.current, s = !1, d = (t.flags & $t) !== Gt;
      if (d || R4(u, e) ? (s = !0, t.flags &= ~$t) : (e === null || e.memoizedState !== null) && i.fallback !== void 0 && i.unstable_avoidThisFallback !== !0 && (u = ZS(u, lm)), u = l0(u), Vl(t, u), e === null) {
        i.fallback !== void 0 && fm(t);
        var v = i.children, E = i.fallback;
        if (s) {
          var U = tE(t, v, E, r), I = t.child;
          return I.memoizedState = Qp(r), t.memoizedState = Yp, U;
        } else if (typeof i.unstable_expectedLoadTime == "number") {
          var ce = tE(t, v, E, r), X = t.child;
          return X.memoizedState = Qp(r), t.memoizedState = Yp, t.lanes = ji, vv(ji), ce;
        } else
          return T4(t, v, r);
      } else {
        var de = e.memoizedState;
        if (de !== null)
          if (s) {
            var we = i.fallback, Pe = i.children, at = aE(e, t, Pe, we, r), bt = t.child, ft = e.child.memoizedState;
            return bt.memoizedState = ft === null ? Qp(r) : Zg(ft, r), bt.childLanes = Jg(e, r), t.memoizedState = Yp, at;
          } else {
            var zt = i.children, rn = rE(e, t, zt, r);
            return t.memoizedState = null, rn;
          }
        else if (s) {
          var fe = i.fallback, ye = i.children, oe = aE(e, t, ye, fe, r), Fe = t.child, He = e.child.memoizedState;
          return Fe.memoizedState = He === null ? Qp(r) : Zg(He, r), Fe.childLanes = Jg(e, r), t.memoizedState = Yp, oe;
        } else {
          var Xe = i.children, Ft = rE(e, t, Xe, r);
          return t.memoizedState = null, Ft;
        }
      }
    }
    function T4(e, t, r) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = By(u, i, r, null);
      return s.return = e, e.child = s, s;
    }
    function tE(e, t, r, i) {
      var u = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, v, E;
      return (u & na) === xn && s !== null ? (v = s, v.childLanes = Ce, v.pendingProps = d, e.mode & ha && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), E = es(r, u, i, null)) : (v = By(d, u, Ce, null), E = es(r, u, i, null)), v.return = e, E.return = e, v.sibling = E, e.child = v, E;
    }
    function nE(e, t) {
      return Jl(e, t);
    }
    function rE(e, t, r, i) {
      var u = e.child, s = u.sibling, d = nE(u, {
        mode: "visible",
        children: r
      });
      return (t.mode & na) === xn && (d.lanes = i), d.return = t, d.sibling = null, s !== null && (s.nextEffect = null, s.flags = ln, t.firstEffect = t.lastEffect = s), t.child = d, d;
    }
    function aE(e, t, r, i, u) {
      var s = t.mode, d = e.child, v = d.sibling, E = {
        mode: "hidden",
        children: r
      }, U;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & na) === xn && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var I = t.child;
        U = I, U.childLanes = Ce, U.pendingProps = E, t.mode & ha && (U.actualDuration = 0, U.actualStartTime = -1, U.selfBaseDuration = d.selfBaseDuration, U.treeBaseDuration = d.treeBaseDuration);
        var ce = U.lastEffect;
        ce !== null ? (t.firstEffect = U.firstEffect, t.lastEffect = ce, ce.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        U = nE(d, E);
      var X;
      return v !== null ? X = Jl(v, i) : (X = es(i, s, u, null), X.flags |= yt), X.return = t, U.return = t, U.sibling = X, t.child = U, X;
    }
    function iE(e, t) {
      e.lanes = jt(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = jt(r.lanes, t)), ng(e.return, t);
    }
    function w4(e, t, r) {
      for (var i = t; i !== null; ) {
        if (i.tag === T) {
          var u = i.memoizedState;
          u !== null && iE(i, r);
        } else if (i.tag === K)
          iE(i, r);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function D4(e) {
      for (var t = e, r = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Dp(i) === null && (r = t), t = t.sibling;
      }
      return r;
    }
    function A4(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Hm[e])
        if (Hm[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function k4(e, t) {
      e !== void 0 && !qp[e] && (e !== "collapsed" && e !== "hidden" ? (qp[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qp[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function oE(e, t) {
      {
        var r = Array.isArray(e), i = !r && typeof Qt(e) == "function";
        if (r || i) {
          var u = r ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function B4(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r++)
            if (!oE(e[r], r))
              return;
        } else {
          var i = Qt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), d = 0; !s.done; s = u.next()) {
                if (!oE(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function qm(e, t, r, i, u, s) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: r,
        tailMode: u,
        lastEffect: s
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = r, d.tailMode = u, d.lastEffect = s);
    }
    function uE(e, t, r) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, d = i.children;
      A4(u), k4(s, u), B4(d, u), aa(e, t, d, r);
      var v = pi.current, E = wp(v, u0);
      if (E)
        v = sm(v, u0), t.flags |= $t;
      else {
        var U = e !== null && (e.flags & $t) !== Gt;
        U && w4(t, t.child, r), v = l0(v);
      }
      if (Vl(t, v), (t.mode & na) === xn)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var I = D4(t.child), ce;
            I === null ? (ce = t.child, t.child = null) : (ce = I.sibling, I.sibling = null), qm(
              t,
              !1,
              // isBackwards
              ce,
              I,
              s,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var X = null, de = t.child;
            for (t.child = null; de !== null; ) {
              var we = de.alternate;
              if (we !== null && Dp(we) === null) {
                t.child = de;
                break;
              }
              var Pe = de.sibling;
              de.sibling = X, X = de, de = Pe;
            }
            qm(
              t,
              !0,
              // isBackwards
              X,
              null,
              // last
              s,
              t.lastEffect
            );
            break;
          }
          case "together": {
            qm(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function F4(e, t, r) {
      im(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _p(t, null, i, r) : aa(e, t, i, r), t.child;
    }
    var lE = !1;
    function O4(e, t, r) {
      var i = t.type, u = i._context, s = t.pendingProps, d = t.memoizedProps, v = s.value;
      {
        "value" in s || lE || (lE = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && ci(E, s, "prop", "Context.Provider");
      }
      if (tg(t, v), d !== null) {
        var U = d.value, I = jS(u, v, U);
        if (I === 0) {
          if (d.children === s.children && !rp())
            return Lo(e, t, r);
        } else
          HS(t, u, I, r);
      }
      var ce = s.children;
      return aa(e, t, ce, r), t.child;
    }
    var sE = !1;
    function N4(e, t, r) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (sE || (sE = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), fc(t, r);
      var d = Yn(i, u.unstable_observedBits), v;
      return y0.current = t, or(!0), v = s(d), or(!1), t.flags |= Cr, aa(e, t, v, r), t.child;
    }
    function Ym() {
      to = !0;
    }
    function Lo(e, t, r) {
      return e !== null && (t.dependencies = e.dependencies), $g(), xy(t.lanes), rr(r, t.childLanes) ? (GS(e, t), t.child) : null;
    }
    function M4(e, t, r) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, r.index = t.index, r.sibling = t.sibling, r.return = t.return, r.ref = t.ref, t === i.child)
          i.child = r;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = r;
        }
        var s = i.lastEffect;
        return s !== null ? (s.nextEffect = e, i.lastEffect = e) : i.firstEffect = i.lastEffect = e, e.nextEffect = null, e.flags = ln, r.flags |= yt, r;
      }
    }
    function cE(e, t, r) {
      var i = t.lanes;
      if (t._debugNeedsRemount && e !== null)
        return M4(e, t, Ay(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var u = e.memoizedProps, s = t.pendingProps;
        if (u !== s || rp() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          to = !0;
        else if (rr(r, i))
          (e.flags & il) !== Gt ? to = !0 : to = !1;
        else {
          switch (to = !1, t.tag) {
            case z:
              Kg(t), dm();
              break;
            case k:
              Eg(t);
              break;
            case m: {
              var d = t.type;
              Ki(d) && ip(t);
              break;
            }
            case _:
              im(t, t.stateNode.containerInfo);
              break;
            case b: {
              var v = t.memoizedProps.value;
              tg(t, v);
              break;
            }
            case N:
              {
                var E = rr(r, t.childLanes);
                E && (t.flags |= st);
                var U = t.stateNode;
                U.effectDuration = 0, U.passiveEffectDuration = 0;
              }
              break;
            case T: {
              var I = t.memoizedState;
              if (I !== null) {
                var ce = t.child, X = ce.childLanes;
                if (rr(r, X))
                  return eE(e, t, r);
                Vl(t, l0(pi.current));
                var de = Lo(e, t, r);
                return de !== null ? de.sibling : null;
              } else
                Vl(t, l0(pi.current));
              break;
            }
            case K: {
              var we = (e.flags & $t) !== Gt, Pe = rr(r, t.childLanes);
              if (we) {
                if (Pe)
                  return uE(e, t, r);
                t.flags |= $t;
              }
              var at = t.memoizedState;
              if (at !== null && (at.rendering = null, at.tail = null, at.lastEffect = null), Vl(t, pi.current), Pe)
                break;
              return null;
            }
            case Re:
            case Oe:
              return t.lanes = Ce, Im(e, t, r);
          }
          return Lo(e, t, r);
        }
      } else
        to = !1;
      switch (t.lanes = Ce, t.tag) {
        case w:
          return _4(e, t, t.type, r);
        case ne: {
          var bt = t.elementType;
          return b4(e, t, bt, i, r);
        }
        case D: {
          var ft = t.type, zt = t.pendingProps, rn = t.elementType === ft ? zt : di(ft, zt);
          return Vm(e, t, ft, rn, r);
        }
        case m: {
          var fe = t.type, ye = t.pendingProps, oe = t.elementType === fe ? ye : di(fe, ye);
          return Xg(e, t, fe, oe, r);
        }
        case z:
          return g4(e, t, r);
        case k:
          return E4(e, t, r);
        case M:
          return C4(e, t);
        case T:
          return eE(e, t, r);
        case _:
          return F4(e, t, r);
        case S: {
          var Fe = t.type, He = t.pendingProps, Xe = t.elementType === Fe ? He : di(Fe, He);
          return qg(e, t, Fe, Xe, r);
        }
        case j:
          return m4(e, t, r);
        case O:
          return y4(e, t, r);
        case N:
          return x4(e, t, r);
        case b:
          return O4(e, t, r);
        case H:
          return N4(e, t, r);
        case V: {
          var Ft = t.type, fn = t.pendingProps, gn = di(Ft, fn);
          if (t.type !== t.elementType) {
            var Xt = Ft.propTypes;
            Xt && ci(
              Xt,
              gn,
              // Resolved for outer only
              "prop",
              Le(Ft)
            );
          }
          return gn = di(Ft.type, gn), Yg(e, t, Ft, gn, i, r);
        }
        case Y:
          return Qg(e, t, t.type, t.pendingProps, i, r);
        case re: {
          var Qn = t.type, qt = t.pendingProps, En = t.elementType === Qn ? qt : di(Qn, qt);
          return S4(e, t, Qn, En, r);
        }
        case K:
          return uE(e, t, r);
        case le:
          break;
        case ae:
          break;
        case be:
          break;
        case Re:
          return Im(e, t, r);
        case Oe:
          return h4(e, t, r);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function gc(e) {
      e.flags |= st;
    }
    function fE(e) {
      e.flags |= tr;
    }
    var dE, Qm, pE, vE;
    dE = function(e, t, r, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === k || u.tag === M)
          Mb(e, u.stateNode);
        else if (u.tag !== _) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, Qm = function(e) {
    }, pE = function(e, t, r, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, v = om(), E = Pb(d, r, s, i, u, v);
        t.updateQueue = E, E && gc(t);
      }
    }, vE = function(e, t, r, i) {
      r !== i && gc(t);
    };
    function g0(e, t) {
      if (!pm())
        switch (e.tailMode) {
          case "hidden": {
            for (var r = e.tail, i = null; r !== null; )
              r.alternate !== null && (i = r), r = r.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function hE(e, t, r) {
      var i = t.pendingProps;
      switch (t.tag) {
        case w:
        case ne:
        case Y:
        case D:
        case S:
        case j:
        case O:
        case N:
        case H:
        case V:
          return null;
        case m: {
          var u = t.type;
          return Ki(u) && ap(t), null;
        }
        case z: {
          dc(t), Bh(t), hm();
          var s = t.stateNode;
          if (s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = Ap(t);
            d ? gc(t) : s.hydrate || (t.flags |= ka);
          }
          return Qm(t), null;
        }
        case k: {
          um(t);
          var v = gg(), E = t.type;
          if (e !== null && t.stateNode != null)
            pE(e, t, E, i, v), e.ref !== t.ref && fE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var U = om(), I = Ap(t);
            if (I)
              t4(t, v, U) && gc(t);
            else {
              var ce = Nb(E, i, v, U, t);
              dE(ce, t, !1, !1), t.stateNode = ce, zb(ce, E, i, v) && gc(t);
            }
            t.ref !== null && fE(t);
          }
          return null;
        }
        case M: {
          var X = i;
          if (e && t.stateNode != null) {
            var de = e.memoizedProps;
            vE(e, t, de, X);
          } else {
            if (typeof X != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var we = gg(), Pe = om(), at = Ap(t);
            at ? n4(t) && gc(t) : t.stateNode = Lb(X, we, Pe, t);
          }
          return null;
        }
        case T: {
          pc(t);
          var bt = t.memoizedState;
          if ((t.flags & $t) !== Gt)
            return t.lanes = r, (t.mode & ha) !== xn && zm(t), t;
          var ft = bt !== null, zt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && Ap(t);
          else {
            var rn = e.memoizedState;
            zt = rn !== null;
          }
          if (ft && !zt && (t.mode & na) !== xn) {
            var fe = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            fe || wp(pi.current, lm) ? C8() : b8();
          }
          return (ft || zt) && (t.flags |= st), null;
        }
        case _:
          return dc(t), Qm(t), e === null && CS(t.stateNode.containerInfo), null;
        case b:
          return Uh(t), null;
        case re: {
          var ye = t.type;
          return Ki(ye) && ap(t), null;
        }
        case K: {
          pc(t);
          var oe = t.memoizedState;
          if (oe === null)
            return null;
          var Fe = (t.flags & $t) !== Gt, He = oe.rendering;
          if (He === null)
            if (Fe)
              g0(oe, !1);
            else {
              var Xe = _8() && (e === null || (e.flags & $t) === Gt);
              if (!Xe)
                for (var Ft = t.child; Ft !== null; ) {
                  var fn = Dp(Ft);
                  if (fn !== null) {
                    Fe = !0, t.flags |= $t, g0(oe, !1);
                    var gn = fn.updateQueue;
                    return gn !== null && (t.updateQueue = gn, t.flags |= st), oe.lastEffect === null && (t.firstEffect = null), t.lastEffect = oe.lastEffect, XS(t, r), Vl(t, sm(pi.current, u0)), t.child;
                  }
                  Ft = Ft.sibling;
                }
              oe.tail !== null && Br() > BE() && (t.flags |= $t, Fe = !0, g0(oe, !1), t.lanes = ji, vv(ji));
            }
          else {
            if (!Fe) {
              var Xt = Dp(He);
              if (Xt !== null) {
                t.flags |= $t, Fe = !0;
                var Qn = Xt.updateQueue;
                if (Qn !== null && (t.updateQueue = Qn, t.flags |= st), g0(oe, !0), oe.tail === null && oe.tailMode === "hidden" && !He.alternate && !pm()) {
                  var qt = t.lastEffect = oe.lastEffect;
                  return qt !== null && (qt.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Br() * 2 - oe.renderingStartTime > BE() && r !== da && (t.flags |= $t, Fe = !0, g0(oe, !1), t.lanes = ji, vv(ji));
            }
            if (oe.isBackwards)
              He.sibling = t.child, t.child = He;
            else {
              var En = oe.last;
              En !== null ? En.sibling = He : t.child = He, oe.last = He;
            }
          }
          if (oe.tail !== null) {
            var sr = oe.tail;
            oe.rendering = sr, oe.tail = sr.sibling, oe.lastEffect = t.lastEffect, oe.renderingStartTime = Br(), sr.sibling = null;
            var Nn = pi.current;
            return Fe ? Nn = sm(Nn, u0) : Nn = l0(Nn), Vl(t, Nn), sr;
          }
          return null;
        }
        case le:
          break;
        case ae:
          break;
        case be:
          break;
        case Re:
        case Oe: {
          if (yy(t), e !== null) {
            var io = t.memoizedState, Mn = e.memoizedState, oo = Mn !== null, ts = io !== null;
            oo !== ts && i.mode !== "unstable-defer-without-hiding" && (t.flags |= st);
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function z4(e, t) {
      switch (e.tag) {
        case m: {
          var r = e.type;
          Ki(r) && ap(e);
          var i = e.flags;
          return i & ca ? (e.flags = i & ~ca | $t, (e.mode & ha) !== xn && zm(e), e) : null;
        }
        case z: {
          dc(e), Bh(e), hm();
          var u = e.flags;
          if ((u & $t) !== Gt)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = u & ~ca | $t, e;
        }
        case k:
          return um(e), null;
        case T: {
          pc(e);
          var s = e.flags;
          return s & ca ? (e.flags = s & ~ca | $t, (e.mode & ha) !== xn && zm(e), e) : null;
        }
        case K:
          return pc(e), null;
        case _:
          return dc(e), null;
        case b:
          return Uh(e), null;
        case Re:
        case Oe:
          return yy(e), null;
        default:
          return null;
      }
    }
    function mE(e) {
      switch (e.tag) {
        case m: {
          var t = e.type.childContextTypes;
          t != null && ap(e);
          break;
        }
        case z: {
          dc(e), Bh(e), hm();
          break;
        }
        case k: {
          um(e);
          break;
        }
        case _:
          dc(e);
          break;
        case T:
          pc(e);
          break;
        case K:
          pc(e);
          break;
        case b:
          Uh(e);
          break;
        case Re:
        case Oe:
          yy(e);
          break;
      }
    }
    function Gm(e, t) {
      return {
        value: e,
        source: t,
        stack: Tr(t)
      };
    }
    function P4(e, t) {
      return !0;
    }
    function Xm(e, t) {
      try {
        var r = P4(e, t);
        if (r === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === m)
            return;
          console.error(i);
        }
        var v = u ? Le(u.type) : null, E = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", U, I = Le(e.type);
        I ? U = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + I + ".") : U = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        var ce = E + `
` + d + `

` + ("" + U);
        console.error(ce);
      } catch (X) {
        setTimeout(function() {
          throw X;
        });
      }
    }
    var L4 = typeof WeakMap == "function" ? WeakMap : Map;
    function yE(e, t, r) {
      var i = Au(cn, r);
      i.tag = jh, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        L8(u), Xm(e, t);
      }, i;
    }
    function xE(e, t, r) {
      var i = Au(cn, r);
      i.tag = jh;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return Xm(e, t), u(s);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" ? i.callback = function() {
        ZE(e), typeof u != "function" && (z8(this), Xm(e, t));
        var E = t.value, U = t.stack;
        this.componentDidCatch(E, {
          componentStack: U !== null ? U : ""
        }), typeof u != "function" && (rr(e.lanes, Dt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Le(e.type) || "Unknown"));
      } : i.callback = function() {
        ZE(e);
      }, i;
    }
    function U4(e, t, r) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new L4(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(r)) {
        u.add(r);
        var s = U8.bind(null, e, t, r);
        t.then(s, s);
      }
    }
    function j4(e, t, r, i, u) {
      if (r.flags |= al, r.firstEffect = r.lastEffect = null, i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        if ((r.mode & na) === xn) {
          var d = r.alternate;
          d ? (r.updateQueue = d.updateQueue, r.memoizedState = d.memoizedState, r.lanes = d.lanes) : (r.updateQueue = null, r.memoizedState = null);
        }
        var v = wp(pi.current, lm), E = t;
        do {
          if (E.tag === T && JS(E, v)) {
            var U = E.updateQueue;
            if (U === null) {
              var I = /* @__PURE__ */ new Set();
              I.add(s), E.updateQueue = I;
            } else
              U.add(s);
            if ((E.mode & na) === xn) {
              if (E.flags |= $t, r.flags |= il, r.flags &= ~(Kc | al), r.tag === m) {
                var ce = r.alternate;
                if (ce === null)
                  r.tag = re;
                else {
                  var X = Au(cn, Dt);
                  X.tag = hp, ku(r, X);
                }
              }
              r.lanes = jt(r.lanes, Dt);
              return;
            }
            U4(e, s, u), E.flags |= ca, E.lanes = u;
            return;
          }
          E = E.return;
        } while (E !== null);
        i = new Error((Le(r.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      S8(), i = Gm(i, r);
      var de = t;
      do {
        switch (de.tag) {
          case z: {
            var we = i;
            de.flags |= ca;
            var Pe = $n(u);
            de.lanes = jt(de.lanes, Pe);
            var at = yE(de, we, Pe);
            og(de, at);
            return;
          }
          case m:
            var bt = i, ft = de.type, zt = de.stateNode;
            if ((de.flags & $t) === Gt && (typeof ft.getDerivedStateFromError == "function" || zt !== null && typeof zt.componentDidCatch == "function" && !gy(zt))) {
              de.flags |= ca;
              var rn = $n(u);
              de.lanes = jt(de.lanes, rn);
              var fe = xE(de, bt, rn);
              og(de, fe);
              return;
            }
            break;
        }
        de = de.return;
      } while (de !== null);
    }
    var gE = null;
    gE = /* @__PURE__ */ new Set();
    var H4 = typeof WeakSet == "function" ? WeakSet : Set, I4 = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function V4(e, t) {
      if (gr(null, I4, null, e, t), Hr()) {
        var r = Er();
        Mu(e, r);
      }
    }
    function EE(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (gr(null, t, null, null), Hr()) {
            var r = Er();
            Mu(e, r);
          }
        } else
          t.current = null;
    }
    function W4(e, t) {
      if (gr(null, t, null), Hr()) {
        var r = Er();
        Mu(e, r);
      }
    }
    function $4(e, t) {
      switch (t.tag) {
        case D:
        case S:
        case Y:
        case be:
          return;
        case m: {
          if (t.flags & ka && e !== null) {
            var r = e.memoizedProps, i = e.memoizedState, u = t.stateNode;
            t.type === t.elementType && !Ql && (u.props !== t.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(t.type) || "instance"), u.state !== t.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(t.type) || "instance"));
            var s = u.getSnapshotBeforeUpdate(t.elementType === t.type ? r : di(t.type, r), i);
            {
              var d = gE;
              s === void 0 && !d.has(t.type) && (d.add(t.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Le(t.type)));
            }
            u.__reactInternalSnapshotBeforeUpdate = s;
          }
          return;
        }
        case z: {
          if (t.flags & ka) {
            var v = t.stateNode;
            Th(v.containerInfo);
          }
          return;
        }
        case k:
        case M:
        case _:
        case re:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function q4(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            var d = s.destroy;
            s.destroy = void 0, d !== void 0 && d();
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Y4(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            var d = s.create;
            s.destroy = d();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var E = void 0;
                v === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? E = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + v, y("An effect function must not return anything besides a function, which is used for clean-up.%s", E);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Q4(e) {
      var t = e.updateQueue, r = t !== null ? t.lastEffect : null;
      if (r !== null) {
        var i = r.next, u = i;
        do {
          var s = u, d = s.next, v = s.tag;
          (v & s0) !== cm && (v & vc) !== cm && (jE(e, u), O8(e, u)), u = d;
        } while (u !== i);
      }
    }
    function G4(e, t, r, i) {
      switch (r.tag) {
        case D:
        case S:
        case Y:
        case be: {
          Y4(hc | vc, r), Q4(r);
          return;
        }
        case m: {
          var u = r.stateNode;
          if (r.flags & st)
            if (t === null)
              r.type === r.elementType && !Ql && (u.props !== r.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(r.type) || "instance"), u.state !== r.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(r.type) || "instance")), u.componentDidMount();
            else {
              var s = r.elementType === r.type ? t.memoizedProps : di(r.type, t.memoizedProps), d = t.memoizedState;
              r.type === r.elementType && !Ql && (u.props !== r.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(r.type) || "instance"), u.state !== r.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(r.type) || "instance")), u.componentDidUpdate(s, d, u.__reactInternalSnapshotBeforeUpdate);
            }
          var v = r.updateQueue;
          v !== null && (r.type === r.elementType && !Ql && (u.props !== r.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Le(r.type) || "instance"), u.state !== r.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Le(r.type) || "instance")), lg(r, v, u));
          return;
        }
        case z: {
          var E = r.updateQueue;
          if (E !== null) {
            var U = null;
            if (r.child !== null)
              switch (r.child.tag) {
                case k:
                  U = r.child.stateNode;
                  break;
                case m:
                  U = r.child.stateNode;
                  break;
              }
            lg(r, E, U);
          }
          return;
        }
        case k: {
          var I = r.stateNode;
          if (t === null && r.flags & st) {
            var ce = r.type, X = r.memoizedProps;
            jb(I, ce, X);
          }
          return;
        }
        case M:
          return;
        case _:
          return;
        case N: {
          {
            var de = r.memoizedProps;
            de.onCommit;
            var we = de.onRender;
            r.stateNode.effectDuration;
            var Pe = p4();
            typeof we == "function" && we(r.memoizedProps.id, t === null ? "mount" : "update", r.actualDuration, r.treeBaseDuration, r.actualStartTime, Pe, e.memoizedInteractions);
          }
          return;
        }
        case T: {
          r8(e, r);
          return;
        }
        case K:
        case re:
        case le:
        case ae:
        case Re:
        case Oe:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function CE(e, t) {
      for (var r = e; ; ) {
        if (r.tag === k) {
          var i = r.stateNode;
          t ? Gb(i) : Kb(r.stateNode, r.memoizedProps);
        } else if (r.tag === M) {
          var u = r.stateNode;
          t ? Xb(u) : Zb(u, r.memoizedProps);
        } else if (!((r.tag === Re || r.tag === Oe) && r.memoizedState !== null && r !== e)) {
          if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
        }
        if (r === e)
          return;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    function X4(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode, i;
        switch (e.tag) {
          case k:
            i = r;
            break;
          default:
            i = r;
        }
        typeof t == "function" ? t(i) : (t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Le(e.type)), t.current = i);
      }
    }
    function K4(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function bE(e, t, r) {
      switch (DS(t), t.tag) {
        case D:
        case S:
        case V:
        case Y:
        case be: {
          var i = t.updateQueue;
          if (i !== null) {
            var u = i.lastEffect;
            if (u !== null) {
              var s = u.next, d = s;
              do {
                var v = d, E = v.destroy, U = v.tag;
                E !== void 0 && ((U & s0) !== cm ? jE(t, d) : W4(t, E)), d = d.next;
              } while (d !== s);
            }
          }
          return;
        }
        case m: {
          EE(t);
          var I = t.stateNode;
          typeof I.componentWillUnmount == "function" && V4(t, I);
          return;
        }
        case k: {
          EE(t);
          return;
        }
        case _: {
          TE(e, t);
          return;
        }
        case le:
          return;
        case W:
          return;
        case ae:
          return;
      }
    }
    function Z4(e, t, r) {
      for (var i = t; ; ) {
        if (bE(e, i), i.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        i.tag !== _) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function SE(e) {
      e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null, e._debugOwner = null;
    }
    function J4(e) {
      for (var t = e.return; t !== null; ) {
        if (_E(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _E(e) {
      return e.tag === k || e.tag === z || e.tag === _;
    }
    function e8(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || _E(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== k && t.tag !== M && t.tag !== W; ) {
            if (t.flags & yt || t.child === null || t.tag === _)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & yt))
            return t.stateNode;
        }
    }
    function RE(e) {
      var t = J4(e), r, i, u = t.stateNode;
      switch (t.tag) {
        case k:
          r = u, i = !1;
          break;
        case z:
          r = u.containerInfo, i = !0;
          break;
        case _:
          r = u.containerInfo, i = !0;
          break;
        case le:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.flags & er && (b1(r), t.flags &= ~er);
      var s = e8(e);
      i ? Km(e, s, r) : Zm(e, s, r);
    }
    function Km(e, t, r) {
      var i = e.tag, u = i === k || i === M;
      if (u || pe) {
        var s = u ? e.stateNode : e.stateNode.instance;
        t ? qb(r, s, t) : Wb(r, s);
      } else if (i !== _) {
        var d = e.child;
        if (d !== null) {
          Km(d, t, r);
          for (var v = d.sibling; v !== null; )
            Km(v, t, r), v = v.sibling;
        }
      }
    }
    function Zm(e, t, r) {
      var i = e.tag, u = i === k || i === M;
      if (u || pe) {
        var s = u ? e.stateNode : e.stateNode.instance;
        t ? $b(r, s, t) : Vb(r, s);
      } else if (i !== _) {
        var d = e.child;
        if (d !== null) {
          Zm(d, t, r);
          for (var v = d.sibling; v !== null; )
            Zm(v, t, r), v = v.sibling;
        }
      }
    }
    function TE(e, t, r) {
      for (var i = t, u = !1, s, d; ; ) {
        if (!u) {
          var v = i.return;
          e:
            for (; ; ) {
              if (v === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var E = v.stateNode;
              switch (v.tag) {
                case k:
                  s = E, d = !1;
                  break e;
                case z:
                  s = E.containerInfo, d = !0;
                  break e;
                case _:
                  s = E.containerInfo, d = !0;
                  break e;
              }
              v = v.return;
            }
          u = !0;
        }
        if (i.tag === k || i.tag === M)
          Z4(e, i), d ? Qb(s, i.stateNode) : Yb(s, i.stateNode);
        else if (i.tag === _) {
          if (i.child !== null) {
            s = i.stateNode.containerInfo, d = !0, i.child.return = i, i = i.child;
            continue;
          }
        } else if (bE(e, i), i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return, i.tag === _ && (u = !1);
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function t8(e, t, r) {
      TE(e, t);
      var i = t.alternate;
      SE(t), i !== null && SE(i);
    }
    function Jm(e, t) {
      switch (t.tag) {
        case D:
        case S:
        case V:
        case Y:
        case be: {
          q4(hc | vc, t);
          return;
        }
        case m:
          return;
        case k: {
          var r = t.stateNode;
          if (r != null) {
            var i = t.memoizedProps, u = e !== null ? e.memoizedProps : i, s = t.type, d = t.updateQueue;
            t.updateQueue = null, d !== null && Hb(r, d, s, u, i);
          }
          return;
        }
        case M: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var v = t.stateNode, E = t.memoizedProps, U = e !== null ? e.memoizedProps : E;
          Ib(v, U, E);
          return;
        }
        case z: {
          {
            var I = t.stateNode;
            I.hydrate && (I.hydrate = !1, oS(I.containerInfo));
          }
          return;
        }
        case N:
          return;
        case T: {
          n8(t), wE(t);
          return;
        }
        case K: {
          wE(t);
          return;
        }
        case re:
          return;
        case le:
          break;
        case ae:
          break;
        case Re:
        case Oe: {
          var ce = t.memoizedState, X = ce !== null;
          CE(t, X);
          return;
        }
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function n8(e) {
      var t = e.memoizedState;
      if (t !== null) {
        E8();
        {
          var r = e.child;
          CE(r, !0);
        }
      }
    }
    function r8(e, t) {
      var r = t.memoizedState;
      if (r === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && uS(s);
          }
        }
      }
    }
    function wE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new H4()), t.forEach(function(i) {
          var u = H8.bind(null, e, i);
          r.has(i) || (i.__reactDoNotTraceInteractions !== !0 && (u = p.unstable_wrap(u)), r.add(i), i.then(u, u));
        });
      }
    }
    function a8(e, t) {
      if (e !== null) {
        var r = e.memoizedState;
        if (r === null || r.dehydrated !== null) {
          var i = t.memoizedState;
          return i !== null && i.dehydrated === null;
        }
      }
      return !1;
    }
    function i8(e) {
      b1(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var E0 = Symbol.for;
      E0("selector.component"), E0("selector.has_pseudo_class"), E0("selector.role"), E0("selector.test_id"), E0("selector.text");
    }
    var o8 = [];
    function u8() {
      o8.forEach(function(e) {
        return e();
      });
    }
    var l8 = Math.ceil, ey = F.ReactCurrentDispatcher, ty = F.ReactCurrentOwner, ny = F.IsSomeRendererActing, An = (
      /*             */
      0
    ), Gp = (
      /*               */
      1
    ), s8 = (
      /*                 */
      2
    ), ry = (
      /*         */
      4
    ), ay = (
      /*       */
      8
    ), ma = (
      /*                */
      16
    ), no = (
      /*                */
      32
    ), DE = (
      /*       */
      64
    ), Uo = 0, Xp = 1, Kp = 2, Zp = 3, Jp = 4, iy = 5, ct = An, Wr = null, kn = null, $r = Ce, ro = Ce, oy = wu(Ce), _r = Uo, ev = null, Gl = Ce, tv = Ce, Xl = Ce, nv = Ce, uy = null, ly = 0, AE = 500, kE = 1 / 0, c8 = 500;
    function Ec() {
      kE = Br() + c8;
    }
    function BE() {
      return kE;
    }
    var Ge = null, rv = !1, sy = null, Cc = null, jo = !1, bc = null, C0 = Mh, cy = Ce, fy = [], dy = [], Ho = null, f8 = 50, b0 = 0, py = null, d8 = 50, av = 0, Kl = null, S0 = cn, Io = Ce, iv = Ce, vy = !1, _0 = null, ov = !1;
    function p8() {
      return Wr;
    }
    function ya() {
      return (ct & (ma | no)) !== An ? Br() : (S0 !== cn || (S0 = Br()), S0);
    }
    function Nu(e) {
      var t = e.mode;
      if ((t & na) === xn)
        return Dt;
      if ((t & jl) === xn)
        return sc() === Ha ? Dt : ii;
      Io === Ce && (Io = Gl);
      var r = LS() !== PS;
      if (r)
        return iv !== Ce && (iv = uy !== null ? uy.pendingLanes : Ce), md(Io, iv);
      var i = sc(), u;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (ct & ry) !== An && i === Ll
      )
        u = xu(fu, Io);
      else {
        var s = yf(i);
        u = xu(s, Io);
      }
      return u;
    }
    function v8(e) {
      var t = e.mode;
      return (t & na) === xn ? Dt : (t & jl) === xn ? sc() === Ha ? Dt : ii : (Io === Ce && (Io = Gl), Ef(Io));
    }
    function Or(e, t, r) {
      V8(), Y8(e);
      var i = uv(e, t);
      if (i === null)
        return $8(e), null;
      Eu(i, t, r), i === Wr && (Xl = jt(Xl, t), _r === Jp && Sc(i, $r));
      var u = sc();
      t === Dt ? /* Check if we're inside unbatchedUpdates */ (ct & ay) !== An && // Check if we're not already rendering
      (ct & (ma | no)) === An ? (zu(i, t), hy(i)) : ($a(i, r), zu(i, t), ct === An && (Ec(), Ji())) : ((ct & ry) !== An && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (u === Ll || u === Ha) && (Ho === null ? Ho = /* @__PURE__ */ new Set([i]) : Ho.add(i)), $a(i, r), zu(i, t)), uy = i;
    }
    function uv(e, t) {
      e.lanes = jt(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = jt(r.lanes, t)), r === null && (e.flags & (yt | Xr)) !== Gt && IE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = jt(u.childLanes, t), r = u.alternate, r !== null ? r.childLanes = jt(r.childLanes, t) : (u.flags & (yt | Xr)) !== Gt && IE(e), i = u, u = u.return;
      if (i.tag === z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    function $a(e, t) {
      var r = e.callbackNode;
      th(e, t);
      var i = El(e, e === Wr ? $r : Ce), u = Dr();
      if (i === Ce) {
        r !== null && (G1(r), e.callbackNode = null, e.callbackPriority = ai);
        return;
      }
      if (r !== null) {
        var s = e.callbackPriority;
        if (s === u)
          return;
        G1(r);
      }
      var d;
      if (u === Pi)
        d = NS(hy.bind(null, e));
      else if (u === hl)
        d = Du(Ha, hy.bind(null, e));
      else {
        var v = js(u);
        d = Du(v, FE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = d;
    }
    function FE(e) {
      if (S0 = cn, Io = Ce, iv = Ce, (ct & (ma | no)) !== An)
        throw Error("Should not already be working.");
      var t = e.callbackNode, r = ao();
      if (r && e.callbackNode !== t)
        return null;
      var i = El(e, e === Wr ? $r : Ce);
      if (i === Ce)
        return null;
      var u = T8(e, i);
      if (rr(Gl, Xl))
        _c(e, Ce);
      else if (u !== Uo) {
        if (u === Kp && (ct |= DE, e.hydrate && (e.hydrate = !1, Th(e.containerInfo)), i = Zr(e), i !== Ce && (u = R0(e, i))), u === Xp) {
          var s = ev;
          throw _c(e, Ce), Sc(e, i), $a(e, Br()), s;
        }
        var d = e.current.alternate;
        e.finishedWork = d, e.finishedLanes = i, h8(e, u, i);
      }
      return $a(e, Br()), e.callbackNode === t ? FE.bind(null, e) : null;
    }
    function h8(e, t, r) {
      switch (t) {
        case Uo:
        case Xp:
          throw Error("Root did not complete. This is a bug in React.");
        case Kp: {
          Zl(e);
          break;
        }
        case Zp: {
          if (Sc(e, r), gf(r) && // do not delay if we're inside an act() scope
          !K8()) {
            var i = ly + AE - Br();
            if (i > 10) {
              var u = El(e, Ce);
              if (u !== Ce)
                break;
              var s = e.suspendedLanes;
              if (!Ii(s, r)) {
                ya(), bf(e, s);
                break;
              }
              e.timeoutHandle = C1(Zl.bind(null, e), i);
              break;
            }
          }
          Zl(e);
          break;
        }
        case Jp: {
          if (Sc(e, r), hd(r))
            break;
          {
            var d = Jv(e, r), v = d, E = Br() - v, U = I8(E) - E;
            if (U > 10) {
              e.timeoutHandle = C1(Zl.bind(null, e), U);
              break;
            }
          }
          Zl(e);
          break;
        }
        case iy: {
          Zl(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function Sc(e, t) {
      t = gu(t, nv), t = gu(t, Xl), Ed(e, t);
    }
    function hy(e) {
      if ((ct & (ma | no)) !== An)
        throw Error("Should not already be working.");
      ao();
      var t, r;
      if (e === Wr && rr(e.expiredLanes, $r) ? (t = $r, r = R0(e, t), rr(Gl, Xl) && (t = El(e, t), r = R0(e, t))) : (t = El(e, Ce), r = R0(e, t)), e.tag !== Fh && r === Kp && (ct |= DE, e.hydrate && (e.hydrate = !1, Th(e.containerInfo)), t = Zr(e), t !== Ce && (r = R0(e, t))), r === Xp) {
        var i = ev;
        throw _c(e, Ce), Sc(e, t), $a(e, Br()), i;
      }
      var u = e.current.alternate;
      return e.finishedWork = u, e.finishedLanes = t, Zl(e), $a(e, Br()), null;
    }
    function m8() {
      if ((ct & (Gp | ma | no)) !== An) {
        (ct & ma) !== An && y("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      y8(), ao();
    }
    function y8() {
      if (Ho !== null) {
        var e = Ho;
        Ho = null, e.forEach(function(t) {
          Cl(t), $a(t, Br());
        });
      }
      Ji();
    }
    function OE(e, t) {
      var r = ct;
      ct |= Gp;
      try {
        return e(t);
      } finally {
        ct = r, ct === An && (Ec(), Ji());
      }
    }
    function x8(e, t) {
      var r = ct;
      ct |= s8;
      try {
        return e(t);
      } finally {
        ct = r, ct === An && (Ec(), Ji());
      }
    }
    function g8(e, t, r, i, u) {
      var s = ct;
      ct |= ry;
      try {
        return Ul(Ll, e.bind(null, t, r, i, u));
      } finally {
        ct = s, ct === An && (Ec(), Ji());
      }
    }
    function NE(e, t) {
      var r = ct;
      ct &= ~Gp, ct |= ay;
      try {
        return e(t);
      } finally {
        ct = r, ct === An && (Ec(), Ji());
      }
    }
    function my(e, t) {
      var r = ct;
      if ((r & (ma | no)) !== An)
        return y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      ct |= Gp;
      try {
        return e ? Ul(Ha, e.bind(null, t)) : void 0;
      } finally {
        ct = r, Ji();
      }
    }
    function lv(e, t) {
      kr(oy, ro, e), ro = jt(ro, t), Gl = jt(Gl, t);
    }
    function yy(e) {
      ro = oy.current, Ar(oy, e);
    }
    function _c(e, t) {
      e.finishedWork = null, e.finishedLanes = Ce;
      var r = e.timeoutHandle;
      if (r !== Rh && (e.timeoutHandle = Rh, Ub(r)), kn !== null)
        for (var i = kn.return; i !== null; )
          mE(i), i = i.return;
      Wr = e, kn = Jl(e.current, null), $r = ro = Gl = t, _r = Uo, ev = null, tv = Ce, Xl = Ce, nv = Ce, Kl = null, fi.discardPendingWarnings();
    }
    function ME(e, t) {
      do {
        var r = kn;
        try {
          if (vp(), Dg(), Kn(), ty.current = null, r === null || r.return === null) {
            _r = Xp, ev = t, kn = null;
            return;
          }
          J && r.mode & ha && $p(r, !0), j4(e, r.return, r, t, $r), UE(r);
        } catch (i) {
          t = i, kn === r && r !== null ? (r = r.return, kn = r) : r = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function zE() {
      var e = ey.current;
      return ey.current = Ip, e === null ? Ip : e;
    }
    function PE(e) {
      ey.current = e;
    }
    function sv(e) {
      {
        var t = p.__interactionsRef.current;
        return p.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function cv(e) {
      p.__interactionsRef.current = e;
    }
    function E8() {
      ly = Br();
    }
    function xy(e) {
      tv = jt(e, tv);
    }
    function C8() {
      _r === Uo && (_r = Zp);
    }
    function b8() {
      (_r === Uo || _r === Zp) && (_r = Jp), Wr !== null && (xf(tv) || xf(Xl)) && Sc(Wr, $r);
    }
    function S8() {
      _r !== iy && (_r = Kp);
    }
    function _8() {
      return _r === Uo;
    }
    function R0(e, t) {
      var r = ct;
      ct |= ma;
      var i = zE();
      (Wr !== e || $r !== t) && (_c(e, t), QE(e, t));
      var u = sv(e);
      do
        try {
          R8();
          break;
        } catch (s) {
          ME(e, s);
        }
      while (!0);
      if (vp(), cv(u), ct = r, PE(i), kn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Wr = null, $r = Ce, _r;
    }
    function R8() {
      for (; kn !== null; )
        LE(kn);
    }
    function T8(e, t) {
      var r = ct;
      ct |= ma;
      var i = zE();
      (Wr !== e || $r !== t) && (Ec(), _c(e, t), QE(e, t));
      var u = sv(e);
      do
        try {
          w8();
          break;
        } catch (s) {
          ME(e, s);
        }
      while (!0);
      return vp(), cv(u), PE(i), ct = r, kn !== null ? Uo : (Wr = null, $r = Ce, _r);
    }
    function w8() {
      for (; kn !== null && !FS(); )
        LE(kn);
    }
    function LE(e) {
      var t = e.alternate;
      _n(e);
      var r;
      (e.mode & ha) !== xn ? (Mm(e), r = Ey(t, e, ro), $p(e, !0)) : r = Ey(t, e, ro), Kn(), e.memoizedProps = e.pendingProps, r === null ? UE(e) : kn = r, ty.current = null;
    }
    function UE(e) {
      var t = e;
      do {
        var r = t.alternate, i = t.return;
        if ((t.flags & al) === Gt) {
          _n(t);
          var u = void 0;
          if ((t.mode & ha) === xn ? u = hE(r, t, ro) : (Mm(t), u = hE(r, t, ro), $p(t, !1)), Kn(), u !== null) {
            kn = u;
            return;
          }
          if (D8(t), i !== null && // Do not append effects to parents if a sibling failed to complete
          (i.flags & al) === Gt) {
            i.firstEffect === null && (i.firstEffect = t.firstEffect), t.lastEffect !== null && (i.lastEffect !== null && (i.lastEffect.nextEffect = t.firstEffect), i.lastEffect = t.lastEffect);
            var s = t.flags;
            s > Cr && (i.lastEffect !== null ? i.lastEffect.nextEffect = t : i.firstEffect = t, i.lastEffect = t);
          }
        } else {
          var d = z4(t);
          if (d !== null) {
            d.flags &= yo, kn = d;
            return;
          }
          if ((t.mode & ha) !== xn) {
            $p(t, !1);
            for (var v = t.actualDuration, E = t.child; E !== null; )
              v += E.actualDuration, E = E.sibling;
            t.actualDuration = v;
          }
          i !== null && (i.firstEffect = i.lastEffect = null, i.flags |= al);
        }
        var U = t.sibling;
        if (U !== null) {
          kn = U;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      _r === Uo && (_r = iy);
    }
    function D8(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Oe || e.tag === Re) && e.memoizedState !== null && !rr(ro, da) && (e.mode & jl) !== Ce)
      ) {
        var t = Ce;
        if ((e.mode & ha) !== xn) {
          for (var r = e.actualDuration, i = e.selfBaseDuration, u = e.alternate === null || e.child !== e.alternate.child, s = e.child; s !== null; )
            t = jt(t, jt(s.lanes, s.childLanes)), u && (r += s.actualDuration), i += s.treeBaseDuration, s = s.sibling;
          var d = e.tag === T && e.memoizedState !== null;
          if (d) {
            var v = e.child;
            v !== null && (i -= v.treeBaseDuration);
          }
          e.actualDuration = r, e.treeBaseDuration = i;
        } else
          for (var E = e.child; E !== null; )
            t = jt(t, jt(E.lanes, E.childLanes)), E = E.sibling;
        e.childLanes = t;
      }
    }
    function Zl(e) {
      var t = sc();
      return Ul(Ha, A8.bind(null, e, t)), null;
    }
    function A8(e, t) {
      do
        ao();
      while (bc !== null);
      if (W8(), (ct & (ma | no)) !== An)
        throw Error("Should not already be working.");
      var r = e.finishedWork, i = e.finishedLanes;
      if (r === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = Ce, r === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var u = jt(r.lanes, r.childLanes);
      Sf(e, u), Ho !== null && !rh(u) && Ho.has(e) && Ho.delete(e), e === Wr && (Wr = null, kn = null, $r = Ce);
      var s;
      if (r.flags > Cr ? r.lastEffect !== null ? (r.lastEffect.nextEffect = r, s = r.firstEffect) : s = r : s = r.firstEffect, s !== null) {
        var d = ct;
        ct |= no;
        var v = sv(e);
        ty.current = null, _0 = Fb(e.containerInfo), ov = !1, Ge = s;
        do
          if (gr(null, k8, null), Hr()) {
            if (Ge === null)
              throw Error("Should be working on an effect.");
            var E = Er();
            Mu(Ge, E), Ge = Ge.nextEffect;
          }
        while (Ge !== null);
        _0 = null, Wg(), Ge = s;
        do
          if (gr(null, B8, null, e, t), Hr()) {
            if (Ge === null)
              throw Error("Should be working on an effect.");
            var U = Er();
            Mu(Ge, U), Ge = Ge.nextEffect;
          }
        while (Ge !== null);
        Ob(e.containerInfo), e.current = r, Ge = s;
        do
          if (gr(null, F8, null, e, i), Hr()) {
            if (Ge === null)
              throw Error("Should be working on an effect.");
            var I = Er();
            Mu(Ge, I), Ge = Ge.nextEffect;
          }
        while (Ge !== null);
        Ge = null, OS(), cv(v), ct = d;
      } else
        e.current = r, Wg();
      var ce = jo;
      if (jo)
        jo = !1, bc = e, cy = i, C0 = t;
      else
        for (Ge = s; Ge !== null; ) {
          var X = Ge.nextEffect;
          Ge.nextEffect = null, Ge.flags & ln && XE(Ge), Ge = X;
        }
      if (u = e.pendingLanes, u !== Ce) {
        if (Kl !== null) {
          var de = Kl;
          Kl = null;
          for (var we = 0; we < de.length; we++)
            YE(e, de[we], e.memoizedInteractions);
        }
        zu(e, u);
      } else
        Cc = null;
      if (ce || GE(e, i), u === Dt ? e === py ? b0++ : (b0 = 0, py = e) : b0 = 0, wS(r.stateNode, t), u8(), $a(e, Br()), rv) {
        rv = !1;
        var Pe = sy;
        throw sy = null, Pe;
      }
      return (ct & ay) !== An || Ji(), null;
    }
    function k8() {
      for (; Ge !== null; ) {
        var e = Ge.alternate;
        !ov && _0 !== null && ((Ge.flags & ln) !== Gt ? sd(Ge, _0) && (ov = !0) : Ge.tag === T && a8(e, Ge) && sd(Ge, _0) && (ov = !0));
        var t = Ge.flags;
        (t & ka) !== Gt && (_n(Ge), $4(e, Ge), Kn()), (t & iu) !== Gt && (jo || (jo = !0, Du(zo, function() {
          return ao(), null;
        }))), Ge = Ge.nextEffect;
      }
    }
    function B8(e, t) {
      for (; Ge !== null; ) {
        _n(Ge);
        var r = Ge.flags;
        if (r & er && i8(Ge), r & tr) {
          var i = Ge.alternate;
          i !== null && K4(i);
        }
        var u = r & (yt | st | ln | Xr);
        switch (u) {
          case yt: {
            RE(Ge), Ge.flags &= ~yt;
            break;
          }
          case Bi: {
            RE(Ge), Ge.flags &= ~yt;
            var s = Ge.alternate;
            Jm(s, Ge);
            break;
          }
          case Xr: {
            Ge.flags &= ~Xr;
            break;
          }
          case od: {
            Ge.flags &= ~Xr;
            var d = Ge.alternate;
            Jm(d, Ge);
            break;
          }
          case st: {
            var v = Ge.alternate;
            Jm(v, Ge);
            break;
          }
          case ln: {
            t8(e, Ge);
            break;
          }
        }
        Kn(), Ge = Ge.nextEffect;
      }
    }
    function F8(e, t) {
      for (; Ge !== null; ) {
        _n(Ge);
        var r = Ge.flags;
        if (r & (st | Fi)) {
          var i = Ge.alternate;
          G4(e, i, Ge);
        }
        r & tr && X4(Ge), Kn(), Ge = Ge.nextEffect;
      }
    }
    function ao() {
      if (C0 !== Mh) {
        var e = C0 > zo ? zo : C0;
        return C0 = Mh, Ul(e, M8);
      }
      return !1;
    }
    function O8(e, t) {
      fy.push(t, e), jo || (jo = !0, Du(zo, function() {
        return ao(), null;
      }));
    }
    function jE(e, t) {
      dy.push(t, e);
      {
        e.flags |= ou;
        var r = e.alternate;
        r !== null && (r.flags |= ou);
      }
      jo || (jo = !0, Du(zo, function() {
        return ao(), null;
      }));
    }
    function N8(e) {
      var t = e.create;
      e.destroy = t();
    }
    function M8() {
      if (bc === null)
        return !1;
      var e = bc, t = cy;
      if (bc = null, cy = Ce, (ct & (ma | no)) !== An)
        throw Error("Cannot flush passive effects while already rendering.");
      vy = !0;
      var r = ct;
      ct |= no;
      var i = sv(e), u = dy;
      dy = [];
      for (var s = 0; s < u.length; s += 2) {
        var d = u[s], v = u[s + 1], E = d.destroy;
        d.destroy = void 0;
        {
          v.flags &= ~ou;
          var U = v.alternate;
          U !== null && (U.flags &= ~ou);
        }
        if (typeof E == "function") {
          if (_n(v), gr(null, E, null), Hr()) {
            if (v === null)
              throw Error("Should be working on an effect.");
            var I = Er();
            Mu(v, I);
          }
          Kn();
        }
      }
      var ce = fy;
      fy = [];
      for (var X = 0; X < ce.length; X += 2) {
        var de = ce[X], we = ce[X + 1];
        {
          if (_n(we), gr(null, N8, null, de), Hr()) {
            if (we === null)
              throw Error("Should be working on an effect.");
            var Pe = Er();
            Mu(we, Pe);
          }
          Kn();
        }
      }
      for (var at = e.current.firstEffect; at !== null; ) {
        var bt = at.nextEffect;
        at.nextEffect = null, at.flags & ln && XE(at), at = bt;
      }
      return cv(i), GE(e, t), vy = !1, ct = r, Ji(), av = bc === null ? 0 : av + 1, !0;
    }
    function gy(e) {
      return Cc !== null && Cc.has(e);
    }
    function z8(e) {
      Cc === null ? Cc = /* @__PURE__ */ new Set([e]) : Cc.add(e);
    }
    function P8(e) {
      rv || (rv = !0, sy = e);
    }
    var L8 = P8;
    function HE(e, t, r) {
      var i = Gm(r, t), u = yE(e, i, Dt);
      ku(e, u);
      var s = ya(), d = uv(e, Dt);
      d !== null && (Eu(d, Dt, s), $a(d, s), zu(d, Dt));
    }
    function Mu(e, t) {
      if (e.tag === z) {
        HE(e, e, t);
        return;
      }
      for (var r = e.return; r !== null; ) {
        if (r.tag === z) {
          HE(r, e, t);
          return;
        } else if (r.tag === m) {
          var i = r.type, u = r.stateNode;
          if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !gy(u)) {
            var s = Gm(t, e), d = xE(r, s, Dt);
            ku(r, d);
            var v = ya(), E = uv(r, Dt);
            if (E !== null)
              Eu(E, Dt, v), $a(E, v), zu(E, Dt);
            else if (typeof u.componentDidCatch == "function" && !gy(u))
              try {
                u.componentDidCatch(t, s);
              } catch {
              }
            return;
          }
        }
        r = r.return;
      }
    }
    function U8(e, t, r) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ya();
      bf(e, r), Wr === e && Ii($r, r) && (_r === Jp || _r === Zp && gf($r) && Br() - ly < AE ? _c(e, Ce) : nv = jt(nv, r)), $a(e, u), zu(e, r);
    }
    function j8(e, t) {
      t === Tn && (t = v8(e));
      var r = ya(), i = uv(e, t);
      i !== null && (Eu(i, t, r), $a(i, r), zu(i, t));
    }
    function H8(e, t) {
      var r = Tn, i;
      i = e.stateNode, i !== null && i.delete(t), j8(e, r);
    }
    function I8(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : l8(e / 1960) * 1960;
    }
    function V8() {
      if (b0 > f8)
        throw b0 = 0, py = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      av > d8 && (av = 0, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function W8() {
      fi.flushLegacyContextWarning(), fi.flushPendingUnsafeLifecycleWarnings();
    }
    var fv = null;
    function IE(e) {
      {
        if ((ct & ma) !== An || !(e.mode & (na | jl)))
          return;
        var t = e.tag;
        if (t !== w && t !== z && t !== m && t !== D && t !== S && t !== V && t !== Y && t !== be)
          return;
        var r = Le(e.type) || "ReactComponent";
        if (fv !== null) {
          if (fv.has(r))
            return;
          fv.add(r);
        } else
          fv = /* @__PURE__ */ new Set([r]);
        var i = Xn;
        try {
          _n(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? _n(e) : Kn();
        }
      }
    }
    var dv = null;
    function $8(e) {
      {
        var t = e.tag;
        if (t !== z && t !== m && t !== D && t !== S && t !== V && t !== Y && t !== be || (e.flags & ou) !== Gt)
          return;
        var r = Le(e.type) || "ReactComponent";
        if (dv !== null) {
          if (dv.has(r))
            return;
          dv.add(r);
        } else
          dv = /* @__PURE__ */ new Set([r]);
        if (!vy) {
          var i = Xn;
          try {
            _n(e), y("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", t === m ? "the componentWillUnmount method" : "a useEffect cleanup function");
          } finally {
            i ? _n(e) : Kn();
          }
        }
      }
    }
    var Ey;
    {
      var q8 = null;
      Ey = function(e, t, r) {
        var i = eC(q8, t);
        try {
          return cE(e, t, r);
        } catch (s) {
          if (s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (vp(), Dg(), mE(t), eC(t, i), t.mode & ha && Mm(t), gr(null, cE, null, e, t, r), Hr()) {
            var u = Er();
            throw u;
          } else
            throw s;
        }
      };
    }
    var VE = !1, Cy;
    Cy = /* @__PURE__ */ new Set();
    function Y8(e) {
      if (Ta && (ct & ma) !== An && !d4())
        switch (e.tag) {
          case D:
          case S:
          case Y: {
            var t = kn && Le(kn.type) || "Unknown", r = t;
            if (!Cy.has(r)) {
              Cy.add(r);
              var i = Le(e.type) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case m: {
            VE || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), VE = !0);
            break;
          }
        }
    }
    var pv = {
      current: !1
    };
    function WE(e) {
      if (ny.current === !0 && pv.current !== !0) {
        var t = Xn;
        try {
          _n(e), y(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);`);
        } finally {
          t ? _n(e) : Kn();
        }
      }
    }
    function $E(e) {
      (e.mode & Dn) !== xn && ny.current === !1 && pv.current === !1 && y(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e.type));
    }
    function Q8(e) {
      if (ct === An && ny.current === !1 && pv.current === !1) {
        var t = Xn;
        try {
          _n(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Le(e.type));
        } finally {
          t ? _n(e) : Kn();
        }
      }
    }
    var G8 = Q8, qE = !1;
    function X8(e) {
      qE === !1 && x.unstable_flushAllWithoutAsserting === void 0 && (e.mode & na || e.mode & jl) && (qE = !0, y(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function by(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function vv(e) {
      Kl === null ? Kl = [e] : Kl.push(e);
    }
    function YE(e, t, r) {
      if (r.size > 0) {
        var i = e.pendingInteractionMap, u = i.get(t);
        u != null ? r.forEach(function(v) {
          u.has(v) || v.__count++, u.add(v);
        }) : (i.set(t, new Set(r)), r.forEach(function(v) {
          v.__count++;
        }));
        var s = p.__subscriberRef.current;
        if (s !== null) {
          var d = by(e, t);
          s.onWorkScheduled(r, d);
        }
      }
    }
    function zu(e, t) {
      YE(e, t, p.__interactionsRef.current);
    }
    function QE(e, t) {
      var r = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(s, d) {
        rr(t, d) && s.forEach(function(v) {
          return r.add(v);
        });
      }), e.memoizedInteractions = r, r.size > 0) {
        var i = p.__subscriberRef.current;
        if (i !== null) {
          var u = by(e, t);
          try {
            i.onWorkStarted(r, u);
          } catch (s) {
            Du(Ha, function() {
              throw s;
            });
          }
        }
      }
    }
    function GE(e, t) {
      var r = e.pendingLanes, i;
      try {
        if (i = p.__subscriberRef.current, i !== null && e.memoizedInteractions.size > 0) {
          var u = by(e, t);
          i.onWorkStopped(e.memoizedInteractions, u);
        }
      } catch (d) {
        Du(Ha, function() {
          throw d;
        });
      } finally {
        var s = e.pendingInteractionMap;
        s.forEach(function(d, v) {
          rr(r, v) || (s.delete(v), d.forEach(function(E) {
            if (E.__count--, i !== null && E.__count === 0)
              try {
                i.onInteractionScheduledWorkCompleted(E);
              } catch (U) {
                Du(Ha, function() {
                  throw U;
                });
              }
          }));
        });
      }
    }
    function K8() {
      return Z8 > 0;
    }
    var Z8 = 0;
    function XE(e) {
      e.sibling = null, e.stateNode = null;
    }
    var qa = null, Rc = null, J8 = function(e) {
      qa = e;
    };
    function Tc(e) {
      {
        if (qa === null)
          return e;
        var t = qa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function Sy(e) {
      return Tc(e);
    }
    function _y(e) {
      {
        if (qa === null)
          return e;
        var t = qa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var r = Tc(e.render);
            if (e.render !== r) {
              var i = {
                $$typeof: dr,
                render: r
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function KE(e, t) {
      {
        if (qa === null)
          return !1;
        var r = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case m: {
            typeof i == "function" && (u = !0);
            break;
          }
          case D: {
            (typeof i == "function" || s === en) && (u = !0);
            break;
          }
          case S: {
            (s === dr || s === en) && (u = !0);
            break;
          }
          case V:
          case Y: {
            (s === Pr || s === en) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var d = qa(r);
          if (d !== void 0 && d === qa(i))
            return !0;
        }
        return !1;
      }
    }
    function ZE(e) {
      {
        if (qa === null || typeof WeakSet != "function")
          return;
        Rc === null && (Rc = /* @__PURE__ */ new WeakSet()), Rc.add(e);
      }
    }
    var e_ = function(e, t) {
      {
        if (qa === null)
          return;
        var r = t.staleFamilies, i = t.updatedFamilies;
        ao(), my(function() {
          Ry(e.current, i, r);
        });
      }
    }, t_ = function(e, t) {
      {
        if (e.context !== va)
          return;
        ao(), my(function() {
          T0(t, e, null, null);
        });
      }
    };
    function Ry(e, t, r) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, d = e.tag, v = e.type, E = null;
        switch (d) {
          case D:
          case Y:
          case m:
            E = v;
            break;
          case S:
            E = v.render;
            break;
        }
        if (qa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var U = !1, I = !1;
        if (E !== null) {
          var ce = qa(E);
          ce !== void 0 && (r.has(ce) ? I = !0 : t.has(ce) && (d === m ? I = !0 : U = !0));
        }
        Rc !== null && (Rc.has(e) || i !== null && Rc.has(i)) && (I = !0), I && (e._debugNeedsRemount = !0), (I || U) && Or(e, Dt, cn), u !== null && !I && Ry(u, t, r), s !== null && Ry(s, t, r);
      }
    }
    var n_ = function(e, t) {
      {
        var r = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return Ty(e.current, i, r), r;
      }
    };
    function Ty(e, t, r) {
      {
        var i = e.child, u = e.sibling, s = e.tag, d = e.type, v = null;
        switch (s) {
          case D:
          case Y:
          case m:
            v = d;
            break;
          case S:
            v = d.render;
            break;
        }
        var E = !1;
        v !== null && t.has(v) && (E = !0), E ? r_(e, r) : i !== null && Ty(i, t, r), u !== null && Ty(u, t, r);
      }
    }
    function r_(e, t) {
      {
        var r = a_(e, t);
        if (r)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case k:
              t.add(i.stateNode);
              return;
            case _:
              t.add(i.stateNode.containerInfo);
              return;
            case z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function a_(e, t) {
      for (var r = e, i = !1; ; ) {
        if (r.tag === k)
          i = !0, t.add(r.stateNode);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === e)
          return i;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return i;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return !1;
    }
    var wy;
    {
      wy = !1;
      try {
        var JE = Object.preventExtensions({});
      } catch {
        wy = !0;
      }
    }
    var i_ = 1;
    function o_(e, t, r, i) {
      this.tag = e, this.key = r, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Gt, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = Ce, this.childLanes = Ce, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = i_++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !wy && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var xa = function(e, t, r, i) {
      return new o_(e, t, r, i);
    };
    function Dy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function u_(e) {
      return typeof e == "function" && !Dy(e) && e.defaultProps === void 0;
    }
    function l_(e) {
      if (typeof e == "function")
        return Dy(e) ? m : D;
      if (e != null) {
        var t = e.$$typeof;
        if (t === dr)
          return S;
        if (t === Pr)
          return V;
      }
      return w;
    }
    function Jl(e, t) {
      var r = e.alternate;
      r === null ? (r = xa(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r._debugID = e._debugID, r._debugSource = e._debugSource, r._debugOwner = e._debugOwner, r._debugHookTypes = e._debugHookTypes, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = Gt, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, r.actualDuration = 0, r.actualStartTime = -1), r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (r.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.selfBaseDuration = e.selfBaseDuration, r.treeBaseDuration = e.treeBaseDuration, r._debugNeedsRemount = e._debugNeedsRemount, r.tag) {
        case w:
        case D:
        case Y:
          r.type = Tc(e.type);
          break;
        case m:
          r.type = Sy(e.type);
          break;
        case S:
          r.type = _y(e.type);
          break;
      }
      return r;
    }
    function s_(e, t) {
      e.flags &= yt, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var r = e.alternate;
      if (r === null)
        e.childLanes = Ce, e.lanes = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type;
        var i = r.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = r.selfBaseDuration, e.treeBaseDuration = r.treeBaseDuration;
      }
      return e;
    }
    function c_(e) {
      var t;
      return e === P1 ? t = jl | na | Dn : e === z1 ? t = na | Dn : t = xn, _S && (t |= ha), xa(z, null, null, t);
    }
    function Ay(e, t, r, i, u, s) {
      var d = w, v = e;
      if (typeof e == "function")
        Dy(e) ? (d = m, v = Sy(v)) : v = Tc(v);
      else if (typeof e == "string")
        d = k;
      else
        e:
          switch (e) {
            case Fn:
              return es(r.children, u, s, t);
            case ze:
              d = O, u |= MS;
              break;
            case Sa:
              d = O, u |= Dn;
              break;
            case fr:
              return f_(r, u, s, t);
            case On:
              return d_(r, u, s, t);
            case Pn:
              return p_(r, u, s, t);
            case Je:
              return By(r, u, s, t);
            case Ct:
              return v_(r, u, s, t);
            case Q:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case zr:
                    d = b;
                    break e;
                  case qr:
                    d = H;
                    break e;
                  case dr:
                    d = S, v = _y(v);
                    break e;
                  case Pr:
                    d = V;
                    break e;
                  case en:
                    d = ne, v = null;
                    break e;
                  case oa:
                    d = be;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var U = i ? Le(i.type) : null;
                U && (E += `

Check the render method of \`` + U + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + E);
            }
          }
      var I = xa(d, r, t, u);
      return I.elementType = e, I.type = v, I.lanes = s, I._debugOwner = i, I;
    }
    function ky(e, t, r) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, d = e.props, v = Ay(u, s, d, i, t, r);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function es(e, t, r, i) {
      var u = xa(j, e, i, t);
      return u.lanes = r, u;
    }
    function f_(e, t, r, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" as a prop');
      var u = xa(N, e, i, t | ha);
      return u.elementType = fr, u.type = fr, u.lanes = r, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function d_(e, t, r, i) {
      var u = xa(T, e, i, t);
      return u.type = On, u.elementType = On, u.lanes = r, u;
    }
    function p_(e, t, r, i) {
      var u = xa(K, e, i, t);
      return u.type = Pn, u.elementType = Pn, u.lanes = r, u;
    }
    function By(e, t, r, i) {
      var u = xa(Re, e, i, t);
      return u.type = Je, u.elementType = Je, u.lanes = r, u;
    }
    function v_(e, t, r, i) {
      var u = xa(Oe, e, i, t);
      return u.type = Ct, u.elementType = Ct, u.lanes = r, u;
    }
    function Fy(e, t, r) {
      var i = xa(M, e, null, t);
      return i.lanes = r, i;
    }
    function h_() {
      var e = xa(k, null, null, xn);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function Oy(e, t, r) {
      var i = e.children !== null ? e.children : [], u = xa(_, i, e.key, t);
      return u.lanes = r, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function eC(e, t) {
      return e === null && (e = xa(w, null, null, xn)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function m_(e, t, r) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Rh, this.context = null, this.pendingContext = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = ai, this.eventTimes = Hs(Ce), this.expirationTimes = Hs(cn), this.pendingLanes = Ce, this.suspendedLanes = Ce, this.pingedLanes = Ce, this.expiredLanes = Ce, this.mutableReadLanes = Ce, this.finishedLanes = Ce, this.entangledLanes = Ce, this.entanglements = Hs(Ce), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = p.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case z1:
          this._debugRootType = "createBlockingRoot()";
          break;
        case P1:
          this._debugRootType = "createRoot()";
          break;
        case Fh:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function y_(e, t, r, i) {
      var u = new m_(e, t, r), s = c_(t);
      return u.current = s, s.stateNode = u, Ih(s), u;
    }
    function x_(e, t) {
      var r = t._getVersion, i = r(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    function g_(e, t, r) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Yt,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }
    var Ny, My;
    Ny = !1, My = {};
    function E_(e) {
      if (!e)
        return va;
      var t = Ja(e), r = SS(t);
      if (t.tag === m) {
        var i = t.type;
        if (Ki(i))
          return N1(t, i, r);
      }
      return r;
    }
    function C_(e, t) {
      {
        var r = Ja(e);
        if (r === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var i = ef(r);
        if (i === null)
          return null;
        if (i.mode & Dn) {
          var u = Le(r.type) || "Component";
          if (!My[u]) {
            My[u] = !0;
            var s = Xn;
            try {
              _n(i), r.mode & Dn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
            } finally {
              s ? _n(s) : Kn();
            }
          }
        }
        return i.stateNode;
      }
    }
    function b_(e, t, r, i) {
      return y_(e, t, r);
    }
    function T0(e, t, r, i) {
      TS(t, e);
      var u = t.current, s = ya();
      typeof jest < "u" && (X8(u), WE(u));
      var d = Nu(u), v = E_(r);
      t.context === null ? t.context = v : t.pendingContext = v, Ta && Xn !== null && !Ny && (Ny = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Le(Xn.type) || "Unknown"));
      var E = Au(s, d);
      return E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i), ku(u, E), Or(u, d, s), d;
    }
    function zy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case k:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function tC(e, t) {
      var r = e.memoizedState;
      r !== null && r.dehydrated !== null && (r.retryLane = ui(r.retryLane, t));
    }
    function Py(e, t) {
      tC(e, t);
      var r = e.alternate;
      r && tC(r, t);
    }
    function S_(e) {
      if (e.tag === T) {
        var t = ya(), r = To;
        Or(e, r, t), Py(e, r);
      }
    }
    function __(e) {
      if (e.tag === T) {
        var t = ya(), r = Ls;
        Or(e, r, t), Py(e, r);
      }
    }
    function R_(e) {
      if (e.tag === T) {
        var t = ya(), r = Nu(e);
        Or(e, r, t), Py(e, r);
      }
    }
    function T_(e, t) {
      try {
        return t();
      } finally {
      }
    }
    function nC(e) {
      var t = tf(e);
      return t === null ? null : t.tag === le ? t.stateNode.instance : t.stateNode;
    }
    var rC = function(e) {
      return !1;
    };
    function w_(e) {
      return rC(e);
    }
    var aC = null, iC = null, oC = null, uC = null, lC = null, sC = null, cC = null, fC = null;
    {
      var dC = function(e, t, r) {
        var i = t[r], u = Array.isArray(e) ? e.slice() : g({}, e);
        return r + 1 === t.length ? (Array.isArray(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = dC(e[i], t, r + 1), u);
      }, pC = function(e, t) {
        return dC(e, t, 0);
      }, vC = function(e, t, r, i) {
        var u = t[i], s = Array.isArray(e) ? e.slice() : g({}, e);
        if (i + 1 === t.length) {
          var d = r[i];
          s[d] = s[u], Array.isArray(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = vC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            r,
            i + 1
          );
        return s;
      }, hC = function(e, t, r) {
        if (t.length !== r.length) {
          A("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < r.length - 1; i++)
            if (t[i] !== r[i]) {
              A("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return vC(e, t, r, 0);
      }, mC = function(e, t, r, i) {
        if (r >= t.length)
          return i;
        var u = t[r], s = Array.isArray(e) ? e.slice() : g({}, e);
        return s[u] = mC(e[u], t, r + 1, i), s;
      }, yC = function(e, t, r) {
        return mC(e, t, 0, r);
      }, Ly = function(e, t) {
        for (var r = e.memoizedState; r !== null && t > 0; )
          r = r.next, t--;
        return r;
      };
      aC = function(e, t, r, i) {
        var u = Ly(e, t);
        if (u !== null) {
          var s = yC(u.memoizedState, r, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = g({}, e.memoizedProps), Or(e, Dt, cn);
        }
      }, iC = function(e, t, r) {
        var i = Ly(e, t);
        if (i !== null) {
          var u = pC(i.memoizedState, r);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = g({}, e.memoizedProps), Or(e, Dt, cn);
        }
      }, oC = function(e, t, r, i) {
        var u = Ly(e, t);
        if (u !== null) {
          var s = hC(u.memoizedState, r, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = g({}, e.memoizedProps), Or(e, Dt, cn);
        }
      }, uC = function(e, t, r) {
        e.pendingProps = yC(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), Or(e, Dt, cn);
      }, lC = function(e, t) {
        e.pendingProps = pC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), Or(e, Dt, cn);
      }, sC = function(e, t, r) {
        e.pendingProps = hC(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), Or(e, Dt, cn);
      }, cC = function(e) {
        Or(e, Dt, cn);
      }, fC = function(e) {
        rC = e;
      };
    }
    function D_(e) {
      var t = ef(e);
      return t === null ? null : t.stateNode;
    }
    function A_(e) {
      return null;
    }
    function k_() {
      return Xn;
    }
    function B_(e) {
      var t = e.findFiberByHostInstance, r = F.ReactCurrentDispatcher;
      return RS({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: aC,
        overrideHookStateDeletePath: iC,
        overrideHookStateRenamePath: oC,
        overrideProps: uC,
        overridePropsDeletePath: lC,
        overridePropsRenamePath: sC,
        setSuspenseHandler: fC,
        scheduleUpdate: cC,
        currentDispatcherRef: r,
        findHostInstanceByFiber: D_,
        findFiberByHostInstance: t || A_,
        // React Refresh
        findHostInstancesForRefresh: n_,
        scheduleRefresh: e_,
        scheduleRoot: t_,
        setRefreshHandler: J8,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: k_
      });
    }
    function Uy(e, t, r) {
      this._internalRoot = F_(e, t, r);
    }
    Uy.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var r = t.containerInfo;
        if (r.nodeType !== yr) {
          var i = nC(t.current);
          i && i.parentNode !== r && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      T0(e, t, null, null);
    }, Uy.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      T0(null, e, null, function() {
        D1(t);
      });
    };
    function F_(e, t, r) {
      var i = r != null && r.hydrate === !0;
      r != null && r.hydrationOptions;
      var u = r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources || null, s = b_(e, t, i);
      bS(s.current, e), e.nodeType;
      {
        var d = e.nodeType === yr ? e.parentNode : e;
        Zx(d);
      }
      if (u)
        for (var v = 0; v < u.length; v++) {
          var E = u[v];
          x_(s, E);
        }
      return s;
    }
    function O_(e, t) {
      return new Uy(e, Fh, t);
    }
    function wc(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Ti || e.nodeType === N0 || e.nodeType === yr && e.nodeValue === " react-mount-point-unstable "));
    }
    var N_ = F.ReactCurrentOwner, xC, gC = !1;
    xC = function(e) {
      if (e._reactRootContainer && e.nodeType !== yr) {
        var t = nC(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var r = !!e._reactRootContainer, i = hv(e), u = !!(i && Tu(i));
      u && !r && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function hv(e) {
      return e ? e.nodeType === Ti ? e.documentElement : e.firstChild : null;
    }
    function M_(e) {
      var t = hv(e);
      return !!(t && t.nodeType === Qr && t.hasAttribute(Bn));
    }
    function z_(e, t) {
      var r = t || M_(e);
      if (!r)
        for (var i = !1, u; u = e.lastChild; )
          !i && u.nodeType === Qr && u.hasAttribute(Bn) && (i = !0, y("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(u);
      return r && !t && !gC && (gC = !0, A("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), O_(e, r ? {
        hydrate: !0
      } : void 0);
    }
    function P_(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function mv(e, t, r, i, u) {
      xC(r), P_(u === void 0 ? null : u, "render");
      var s = r._reactRootContainer, d;
      if (s) {
        if (d = s._internalRoot, typeof u == "function") {
          var E = u;
          u = function() {
            var U = zy(d);
            E.call(U);
          };
        }
        T0(t, d, e, u);
      } else {
        if (s = r._reactRootContainer = z_(r, i), d = s._internalRoot, typeof u == "function") {
          var v = u;
          u = function() {
            var U = zy(d);
            v.call(U);
          };
        }
        NE(function() {
          T0(t, d, e, u);
        });
      }
      return zy(d);
    }
    function L_(e) {
      {
        var t = N_.current;
        if (t !== null && t.stateNode !== null) {
          var r = t.stateNode._warnedAboutRefsInRender;
          r || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Le(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : C_(e, "findDOMNode");
    }
    function U_(e, t, r) {
      if (!wc(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = Jd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return mv(null, e, t, !0, r);
    }
    function j_(e, t, r) {
      if (!wc(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = Jd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return mv(null, e, t, !1, r);
    }
    function H_(e, t, r, i) {
      if (!wc(r))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && id(e)))
        throw Error("parentComponent must be a valid React Component");
      return mv(e, t, r, !1, i);
    }
    function I_(e) {
      if (!wc(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Jd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var r = hv(e), i = r && !Tu(r);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return NE(function() {
          mv(null, null, e, !1, function() {
            e._reactRootContainer = null, D1(e);
          });
        }), !0;
      } else {
        {
          var u = hv(e), s = !!(u && Tu(u)), d = e.nodeType === Qr && wc(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Fs(S_), cd(__), uu(R_), xo(T_);
    var EC = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), $c(Sb), Ts(OE, g8, m8, x8);
    function CC(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!wc(t))
        throw Error("Target container is not a DOM element.");
      return g_(e, t, null, r);
    }
    function V_(e, t, r, i) {
      return H_(e, t, r, i);
    }
    function W_(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return EC || (EC = !0, A('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), CC(e, t, r);
    }
    var $_ = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        Tu,
        ic,
        ep,
        tu,
        qc,
        ao,
        // TODO: This is related to `act`, not events. Move to separate key?
        pv
      ]
    }, q_ = B_({
      findFiberByHostInstance: Pl,
      bundleType: 1,
      version: K1,
      rendererPackageName: "react-dom"
    });
    if (!q_ && Se && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var bC = window.location.protocol;
      /^(https?|file):$/.test(bC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (bC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $_, Ea.createPortal = CC, Ea.findDOMNode = L_, Ea.flushSync = my, Ea.hydrate = U_, Ea.render = j_, Ea.unmountComponentAtNode = I_, Ea.unstable_batchedUpdates = OE, Ea.unstable_createPortal = W_, Ea.unstable_renderSubtreeIntoContainer = V_, Ea.version = K1;
  }()), Ea;
}
function N2() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N2);
    } catch (c) {
      console.error(c);
    }
  }
}
process.env.NODE_ENV === "production" ? (N2(), Lx.exports = aR()) : Lx.exports = lR();
var sR = Lx.exports;
const cR = /* @__PURE__ */ D0(sR);
let fR = { data: "" }, dR = (c) => typeof window == "object" ? ((c ? c.querySelector("#_goober") : window._goober) || Object.assign((c || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : c || fR, pR = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, vR = /\/\*[^]*?\*\/|  +/g, zC = /\n+/g, Lu = (c, g) => {
  let x = "", p = "", F = "";
  for (let A in c) {
    let y = c[A];
    A[0] == "@" ? A[1] == "i" ? x = A + " " + y + ";" : p += A[1] == "f" ? Lu(y, A) : A + "{" + Lu(y, A[1] == "k" ? "" : g) + "}" : typeof y == "object" ? p += Lu(y, g ? g.replace(/([^,])+/g, (B) => A.replace(/(^:.*)|([^,])+/g, (D) => /&/.test(D) ? D.replace(/&/g, B) : B ? B + " " + D : D)) : A) : y != null && (A = /^--/.test(A) ? A : A.replace(/[A-Z]/g, "-$&").toLowerCase(), F += Lu.p ? Lu.p(A, y) : A + ":" + y + ";");
  }
  return x + (g && F ? g + "{" + F + "}" : F) + p;
}, Vo = {}, M2 = (c) => {
  if (typeof c == "object") {
    let g = "";
    for (let x in c)
      g += x + M2(c[x]);
    return g;
  }
  return c;
}, hR = (c, g, x, p, F) => {
  let A = M2(c), y = Vo[A] || (Vo[A] = ((D) => {
    let m = 0, w = 11;
    for (; m < D.length; )
      w = 101 * w + D.charCodeAt(m++) >>> 0;
    return "go" + w;
  })(A));
  if (!Vo[y]) {
    let D = A !== c ? c : ((m) => {
      let w, z, _ = [{}];
      for (; w = pR.exec(m.replace(vR, "")); )
        w[4] ? _.shift() : w[3] ? (z = w[3].replace(zC, " ").trim(), _.unshift(_[0][z] = _[0][z] || {})) : _[0][w[1]] = w[2].replace(zC, " ").trim();
      return _[0];
    })(c);
    Vo[y] = Lu(F ? { ["@keyframes " + y]: D } : D, x ? "" : "." + y);
  }
  let B = x && Vo.g ? Vo.g : null;
  return x && (Vo.g = Vo[y]), ((D, m, w, z) => {
    z ? m.data = m.data.replace(z, D) : m.data.indexOf(D) === -1 && (m.data = w ? D + m.data : m.data + D);
  })(Vo[y], g, p, B), y;
}, mR = (c, g, x) => c.reduce((p, F, A) => {
  let y = g[A];
  if (y && y.call) {
    let B = y(x), D = B && B.props && B.props.className || /^go/.test(B) && B;
    y = D ? "." + D : B && typeof B == "object" ? B.props ? "" : Lu(B, "") : B === !1 ? "" : B;
  }
  return p + F + (y ?? "");
}, "");
function Dv(c) {
  let g = this || {}, x = c.call ? c(g.p) : c;
  return hR(x.unshift ? x.raw ? mR(x, [].slice.call(arguments, 1), g.p) : x.reduce((p, F) => Object.assign(p, F && F.call ? F(g.p) : F), {}) : x, dR(g.target), g.g, g.o, g.k);
}
let z2, Ux, jx;
Dv.bind({ g: 1 });
let Wo = Dv.bind({ k: 1 });
function yR(c, g, x, p) {
  Lu.p = g, z2 = c, Ux = x, jx = p;
}
function ju(c, g) {
  let x = this || {};
  return function() {
    let p = arguments;
    function F(A, y) {
      let B = Object.assign({}, A), D = B.className || F.className;
      x.p = Object.assign({ theme: Ux && Ux() }, B), x.o = / *go\d+/.test(D), B.className = Dv.apply(x, p) + (D ? " " + D : "");
      let m = c;
      return c[0] && (m = B.as || c, delete B.as), jx && m[0] && jx(B), z2(m, B);
    }
    return F;
  };
}
var xR = (c) => typeof c == "function", wv = (c, g) => xR(c) ? c(g) : c, gR = /* @__PURE__ */ (() => {
  let c = 0;
  return () => (++c).toString();
})(), P2 = /* @__PURE__ */ (() => {
  let c;
  return () => {
    if (c === void 0 && typeof window < "u") {
      let g = matchMedia("(prefers-reduced-motion: reduce)");
      c = !g || g.matches;
    }
    return c;
  };
})(), ER = 20, Cv = /* @__PURE__ */ new Map(), CR = 1e3, PC = (c) => {
  if (Cv.has(c))
    return;
  let g = setTimeout(() => {
    Cv.delete(c), as({ type: 4, toastId: c });
  }, CR);
  Cv.set(c, g);
}, bR = (c) => {
  let g = Cv.get(c);
  g && clearTimeout(g);
}, Hx = (c, g) => {
  switch (g.type) {
    case 0:
      return { ...c, toasts: [g.toast, ...c.toasts].slice(0, ER) };
    case 1:
      return g.toast.id && bR(g.toast.id), { ...c, toasts: c.toasts.map((A) => A.id === g.toast.id ? { ...A, ...g.toast } : A) };
    case 2:
      let { toast: x } = g;
      return c.toasts.find((A) => A.id === x.id) ? Hx(c, { type: 1, toast: x }) : Hx(c, { type: 0, toast: x });
    case 3:
      let { toastId: p } = g;
      return p ? PC(p) : c.toasts.forEach((A) => {
        PC(A.id);
      }), { ...c, toasts: c.toasts.map((A) => A.id === p || p === void 0 ? { ...A, visible: !1 } : A) };
    case 4:
      return g.toastId === void 0 ? { ...c, toasts: [] } : { ...c, toasts: c.toasts.filter((A) => A.id !== g.toastId) };
    case 5:
      return { ...c, pausedAt: g.time };
    case 6:
      let F = g.time - (c.pausedAt || 0);
      return { ...c, pausedAt: void 0, toasts: c.toasts.map((A) => ({ ...A, pauseDuration: A.pauseDuration + F })) };
  }
}, bv = [], Sv = { toasts: [], pausedAt: void 0 }, as = (c) => {
  Sv = Hx(Sv, c), bv.forEach((g) => {
    g(Sv);
  });
}, SR = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, _R = (c = {}) => {
  let [g, x] = Ne.useState(Sv);
  Ne.useEffect(() => (bv.push(x), () => {
    let F = bv.indexOf(x);
    F > -1 && bv.splice(F, 1);
  }), [g]);
  let p = g.toasts.map((F) => {
    var A, y;
    return { ...c, ...c[F.type], ...F, duration: F.duration || ((A = c[F.type]) == null ? void 0 : A.duration) || (c == null ? void 0 : c.duration) || SR[F.type], style: { ...c.style, ...(y = c[F.type]) == null ? void 0 : y.style, ...F.style } };
  });
  return { ...g, toasts: p };
}, RR = (c, g = "blank", x) => ({ createdAt: Date.now(), visible: !0, type: g, ariaProps: { role: "status", "aria-live": "polite" }, message: c, pauseDuration: 0, ...x, id: (x == null ? void 0 : x.id) || gR() }), A0 = (c) => (g, x) => {
  let p = RR(g, c, x);
  return as({ type: 2, toast: p }), p.id;
}, Ca = (c, g) => A0("blank")(c, g);
Ca.error = A0("error");
Ca.success = A0("success");
Ca.loading = A0("loading");
Ca.custom = A0("custom");
Ca.dismiss = (c) => {
  as({ type: 3, toastId: c });
};
Ca.remove = (c) => as({ type: 4, toastId: c });
Ca.promise = (c, g, x) => {
  let p = Ca.loading(g.loading, { ...x, ...x == null ? void 0 : x.loading });
  return c.then((F) => (Ca.success(wv(g.success, F), { id: p, ...x, ...x == null ? void 0 : x.success }), F)).catch((F) => {
    Ca.error(wv(g.error, F), { id: p, ...x, ...x == null ? void 0 : x.error });
  }), c;
};
var TR = (c, g) => {
  as({ type: 1, toast: { id: c, height: g } });
}, wR = () => {
  as({ type: 5, time: Date.now() });
}, DR = (c) => {
  let { toasts: g, pausedAt: x } = _R(c);
  Ne.useEffect(() => {
    if (x)
      return;
    let A = Date.now(), y = g.map((B) => {
      if (B.duration === 1 / 0)
        return;
      let D = (B.duration || 0) + B.pauseDuration - (A - B.createdAt);
      if (D < 0) {
        B.visible && Ca.dismiss(B.id);
        return;
      }
      return setTimeout(() => Ca.dismiss(B.id), D);
    });
    return () => {
      y.forEach((B) => B && clearTimeout(B));
    };
  }, [g, x]);
  let p = Ne.useCallback(() => {
    x && as({ type: 6, time: Date.now() });
  }, [x]), F = Ne.useCallback((A, y) => {
    let { reverseOrder: B = !1, gutter: D = 8, defaultPosition: m } = y || {}, w = g.filter((k) => (k.position || m) === (A.position || m) && k.height), z = w.findIndex((k) => k.id === A.id), _ = w.filter((k, M) => M < z && k.visible).length;
    return w.filter((k) => k.visible).slice(...B ? [_ + 1] : [0, _]).reduce((k, M) => k + (M.height || 0) + D, 0);
  }, [g]);
  return { toasts: g, handlers: { updateHeight: TR, startPause: wR, endPause: p, calculateOffset: F } };
}, AR = Wo`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, kR = Wo`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, BR = Wo`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, FR = ju("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(c) => c.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${AR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${kR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(c) => c.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${BR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, OR = Wo`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, NR = ju("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(c) => c.secondary || "#e0e0e0"};
  border-right-color: ${(c) => c.primary || "#616161"};
  animation: ${OR} 1s linear infinite;
`, MR = Wo`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, zR = Wo`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, PR = ju("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(c) => c.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${MR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${zR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(c) => c.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, LR = ju("div")`
  position: absolute;
`, UR = ju("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, jR = Wo`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, HR = ju("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${jR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, IR = ({ toast: c }) => {
  let { icon: g, type: x, iconTheme: p } = c;
  return g !== void 0 ? typeof g == "string" ? Ne.createElement(HR, null, g) : g : x === "blank" ? null : Ne.createElement(UR, null, Ne.createElement(NR, { ...p }), x !== "loading" && Ne.createElement(LR, null, x === "error" ? Ne.createElement(FR, { ...p }) : Ne.createElement(PR, { ...p })));
}, VR = (c) => `
0% {transform: translate3d(0,${c * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, WR = (c) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${c * -150}%,-1px) scale(.6); opacity:0;}
`, $R = "0%{opacity:0;} 100%{opacity:1;}", qR = "0%{opacity:1;} 100%{opacity:0;}", YR = ju("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, QR = ju("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, GR = (c, g) => {
  let x = c.includes("top") ? 1 : -1, [p, F] = P2() ? [$R, qR] : [VR(x), WR(x)];
  return { animation: g ? `${Wo(p)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Wo(F)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, XR = Ne.memo(({ toast: c, position: g, style: x, children: p }) => {
  let F = c.height ? GR(c.position || g || "top-center", c.visible) : { opacity: 0 }, A = Ne.createElement(IR, { toast: c }), y = Ne.createElement(QR, { ...c.ariaProps }, wv(c.message, c));
  return Ne.createElement(YR, { className: c.className, style: { ...F, ...x, ...c.style } }, typeof p == "function" ? p({ icon: A, message: y }) : Ne.createElement(Ne.Fragment, null, A, y));
});
yR(Ne.createElement);
var KR = ({ id: c, className: g, style: x, onHeightUpdate: p, children: F }) => {
  let A = Ne.useCallback((y) => {
    if (y) {
      let B = () => {
        let D = y.getBoundingClientRect().height;
        p(c, D);
      };
      B(), new MutationObserver(B).observe(y, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [c, p]);
  return Ne.createElement("div", { ref: A, className: g, style: x }, F);
}, ZR = (c, g) => {
  let x = c.includes("top"), p = x ? { top: 0 } : { bottom: 0 }, F = c.includes("center") ? { justifyContent: "center" } : c.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: P2() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${g * (x ? 1 : -1)}px)`, ...p, ...F };
}, JR = Dv`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, gv = 16, eT = ({ reverseOrder: c, position: g = "top-center", toastOptions: x, gutter: p, children: F, containerStyle: A, containerClassName: y }) => {
  let { toasts: B, handlers: D } = DR(x);
  return Ne.createElement("div", { style: { position: "fixed", zIndex: 9999, top: gv, left: gv, right: gv, bottom: gv, pointerEvents: "none", ...A }, className: y, onMouseEnter: D.startPause, onMouseLeave: D.endPause }, B.map((m) => {
    let w = m.position || g, z = D.calculateOffset(m, { reverseOrder: c, gutter: p, defaultPosition: g }), _ = ZR(w, z);
    return Ne.createElement(KR, { id: m.id, key: m.id, onHeightUpdate: D.updateHeight, className: m.visible ? JR : "", style: _ }, m.type === "custom" ? wv(m.message, m) : F ? F(m) : Ne.createElement(XR, { toast: m, position: w }));
  }));
}, Ya = Ca;
function tT(c, g) {
  if (arguments.length === 1)
    try {
      const x = localStorage.getItem(c);
      return x ? JSON.parse(x) : null;
    } catch (x) {
      return console.error("Error retrieving from local storage:", x), null;
    }
  else if (arguments.length === 2)
    try {
      const x = JSON.stringify(g);
      localStorage.setItem(c, x);
    } catch (x) {
      console.error("Error saving to local storage:", x);
    }
  else
    console.error("Invalid number of arguments");
}
const is = "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943", os = {
  createConversation: "conversation",
  addMessageToConversation: "add/conversation",
  tagMessage: "conversation/tag",
  markMessage: "conversation/mark",
  generateSummary: "conversation/summary",
  searchMessages: (c, g) => `conversation/${c}/search?q=${g}`,
  getConversation: (c) => `conversation/${c}`
};
async function L2(c) {
  try {
    const g = await fetch(`${is}/${os.createConversation}`, {
      method: "PUT",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({ userIdentity: c })
    });
    if (!g.ok)
      throw await g.json();
    return await g.json();
  } catch (g) {
    console.log(g);
  }
}
async function LC(c) {
  var g;
  try {
    const x = window.auth.principalText, p = (g = tT("conversation")) == null ? void 0 : g.id, F = await fetch(`${is}/${os.addMessageToConversation}`, {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({
        userIdentity: x,
        conversationId: p,
        message: c
      })
    });
    if (!F.ok)
      throw await F.json();
    return await F.json();
  } catch (x) {
    console.log(x);
  }
}
async function nT(c, g, x) {
  try {
    const p = await fetch(`${is}/${os.tagMessage}`, {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({ userIdentity: c, messageId: g, tag: x })
    });
    if (!p.ok)
      throw await p.json();
    return await p.json();
  } catch (p) {
    console.log(p);
  }
}
async function rT(c, g, x) {
  try {
    const p = await fetch(`${is}/${os.markMessage}`, {
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      body: JSON.stringify({ userIdentity: c, messageId: g, read: x })
    });
    if (!p.ok)
      throw await p.json();
    return await p.json();
  } catch (p) {
    console.log(p);
  }
}
async function aT(c) {
  try {
    const g = await fetch(`${is}/${os.generateSummary}`, {
      method: "GET"
    });
    if (!g.ok)
      throw await g.json();
    return await g.json();
  } catch (g) {
    console.log(g);
  }
}
async function iT(c, g) {
  try {
    const x = await fetch(`${is}/${os.searchMessages(c, g)}`, {
      method: "GET"
    });
    if (!x.ok)
      throw await x.json();
    return await x.json();
  } catch (x) {
    console.log(x);
  }
}
async function oT(c) {
  try {
    const g = await fetch(`${is}/${os.getConversation(c)}`);
    if (!g.ok)
      throw await g.json();
    return await g.json();
  } catch (g) {
    console.log(g);
  }
}
var U2 = { exports: {} };
function uT(c) {
  throw new Error('Could not dynamically require "' + c + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Yy = { exports: {} };
const lT = {}, sT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lT
}, Symbol.toStringTag, { value: "Module" })), cT = /* @__PURE__ */ K_(sT);
var UC;
function Nt() {
  return UC || (UC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p();
    })(At, function() {
      var x = x || function(p, F) {
        var A;
        if (typeof window < "u" && window.crypto && (A = window.crypto), typeof self < "u" && self.crypto && (A = self.crypto), typeof globalThis < "u" && globalThis.crypto && (A = globalThis.crypto), !A && typeof window < "u" && window.msCrypto && (A = window.msCrypto), !A && typeof At < "u" && At.crypto && (A = At.crypto), !A && typeof uT == "function")
          try {
            A = cT;
          } catch {
          }
        var y = function() {
          if (A) {
            if (typeof A.getRandomValues == "function")
              try {
                return A.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof A.randomBytes == "function")
              try {
                return A.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, B = Object.create || /* @__PURE__ */ function() {
          function b() {
          }
          return function(S) {
            var N;
            return b.prototype = S, N = new b(), b.prototype = null, N;
          };
        }(), D = {}, m = D.lib = {}, w = m.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(b) {
              var S = B(this);
              return b && S.mixIn(b), (!S.hasOwnProperty("init") || this.init === S.init) && (S.init = function() {
                S.$super.init.apply(this, arguments);
              }), S.init.prototype = S, S.$super = this, S;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var b = this.extend();
              return b.init.apply(b, arguments), b;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(b) {
              for (var S in b)
                b.hasOwnProperty(S) && (this[S] = b[S]);
              b.hasOwnProperty("toString") && (this.toString = b.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), z = m.WordArray = w.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(b, S) {
            b = this.words = b || [], S != F ? this.sigBytes = S : this.sigBytes = b.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(b) {
            return (b || k).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(b) {
            var S = this.words, N = b.words, T = this.sigBytes, V = b.sigBytes;
            if (this.clamp(), T % 4)
              for (var Y = 0; Y < V; Y++) {
                var ne = N[Y >>> 2] >>> 24 - Y % 4 * 8 & 255;
                S[T + Y >>> 2] |= ne << 24 - (T + Y) % 4 * 8;
              }
            else
              for (var re = 0; re < V; re += 4)
                S[T + re >>> 2] = N[re >>> 2];
            return this.sigBytes += V, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var b = this.words, S = this.sigBytes;
            b[S >>> 2] &= 4294967295 << 32 - S % 4 * 8, b.length = p.ceil(S / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var b = w.clone.call(this);
            return b.words = this.words.slice(0), b;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(b) {
            for (var S = [], N = 0; N < b; N += 4)
              S.push(y());
            return new z.init(S, b);
          }
        }), _ = D.enc = {}, k = _.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(b) {
            for (var S = b.words, N = b.sigBytes, T = [], V = 0; V < N; V++) {
              var Y = S[V >>> 2] >>> 24 - V % 4 * 8 & 255;
              T.push((Y >>> 4).toString(16)), T.push((Y & 15).toString(16));
            }
            return T.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(b) {
            for (var S = b.length, N = [], T = 0; T < S; T += 2)
              N[T >>> 3] |= parseInt(b.substr(T, 2), 16) << 24 - T % 8 * 4;
            return new z.init(N, S / 2);
          }
        }, M = _.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(b) {
            for (var S = b.words, N = b.sigBytes, T = [], V = 0; V < N; V++) {
              var Y = S[V >>> 2] >>> 24 - V % 4 * 8 & 255;
              T.push(String.fromCharCode(Y));
            }
            return T.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(b) {
            for (var S = b.length, N = [], T = 0; T < S; T++)
              N[T >>> 2] |= (b.charCodeAt(T) & 255) << 24 - T % 4 * 8;
            return new z.init(N, S);
          }
        }, j = _.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(b) {
            try {
              return decodeURIComponent(escape(M.stringify(b)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(b) {
            return M.parse(unescape(encodeURIComponent(b)));
          }
        }, O = m.BufferedBlockAlgorithm = w.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new z.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(b) {
            typeof b == "string" && (b = j.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(b) {
            var S, N = this._data, T = N.words, V = N.sigBytes, Y = this.blockSize, ne = Y * 4, re = V / ne;
            b ? re = p.ceil(re) : re = p.max((re | 0) - this._minBufferSize, 0);
            var W = re * Y, K = p.min(W * 4, V);
            if (W) {
              for (var le = 0; le < W; le += Y)
                this._doProcessBlock(T, le);
              S = T.splice(0, W), N.sigBytes -= K;
            }
            return new z.init(S, K);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var b = w.clone.call(this);
            return b._data = this._data.clone(), b;
          },
          _minBufferSize: 0
        });
        m.Hasher = O.extend({
          /**
           * Configuration options.
           */
          cfg: w.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(b) {
            this.cfg = this.cfg.extend(b), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            O.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(b) {
            return this._append(b), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(b) {
            b && this._append(b);
            var S = this._doFinalize();
            return S;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(b) {
            return function(S, N) {
              return new b.init(N).finalize(S);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(b) {
            return function(S, N) {
              return new H.HMAC.init(b, N).finalize(S);
            };
          }
        });
        var H = D.algo = {};
        return D;
      }(Math);
      return x;
    });
  }(Yy)), Yy.exports;
}
var Qy = { exports: {} }, jC;
function Av() {
  return jC || (jC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function(p) {
        var F = x, A = F.lib, y = A.Base, B = A.WordArray, D = F.x64 = {};
        D.Word = y.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(m, w) {
            this.high = m, this.low = w;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), D.WordArray = y.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(m, w) {
            m = this.words = m || [], w != p ? this.sigBytes = w : this.sigBytes = m.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var m = this.words, w = m.length, z = [], _ = 0; _ < w; _++) {
              var k = m[_];
              z.push(k.high), z.push(k.low);
            }
            return B.create(z, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var m = y.clone.call(this), w = m.words = this.words.slice(0), z = w.length, _ = 0; _ < z; _++)
              w[_] = w[_].clone();
            return m;
          }
        });
      }(), x;
    });
  }(Qy)), Qy.exports;
}
var Gy = { exports: {} }, HC;
function fT() {
  return HC || (HC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var p = x, F = p.lib, A = F.WordArray, y = A.init, B = A.init = function(D) {
            if (D instanceof ArrayBuffer && (D = new Uint8Array(D)), (D instanceof Int8Array || typeof Uint8ClampedArray < "u" && D instanceof Uint8ClampedArray || D instanceof Int16Array || D instanceof Uint16Array || D instanceof Int32Array || D instanceof Uint32Array || D instanceof Float32Array || D instanceof Float64Array) && (D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength)), D instanceof Uint8Array) {
              for (var m = D.byteLength, w = [], z = 0; z < m; z++)
                w[z >>> 2] |= D[z] << 24 - z % 4 * 8;
              y.call(this, w, m);
            } else
              y.apply(this, arguments);
          };
          B.prototype = A;
        }
      }(), x.lib.WordArray;
    });
  }(Gy)), Gy.exports;
}
var Xy = { exports: {} }, IC;
function dT() {
  return IC || (IC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.WordArray, y = p.enc;
        y.Utf16 = y.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(D) {
            for (var m = D.words, w = D.sigBytes, z = [], _ = 0; _ < w; _ += 2) {
              var k = m[_ >>> 2] >>> 16 - _ % 4 * 8 & 65535;
              z.push(String.fromCharCode(k));
            }
            return z.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(D) {
            for (var m = D.length, w = [], z = 0; z < m; z++)
              w[z >>> 1] |= D.charCodeAt(z) << 16 - z % 2 * 16;
            return A.create(w, m * 2);
          }
        }, y.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(D) {
            for (var m = D.words, w = D.sigBytes, z = [], _ = 0; _ < w; _ += 2) {
              var k = B(m[_ >>> 2] >>> 16 - _ % 4 * 8 & 65535);
              z.push(String.fromCharCode(k));
            }
            return z.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(D) {
            for (var m = D.length, w = [], z = 0; z < m; z++)
              w[z >>> 1] |= B(D.charCodeAt(z) << 16 - z % 2 * 16);
            return A.create(w, m * 2);
          }
        };
        function B(D) {
          return D << 8 & 4278255360 | D >>> 8 & 16711935;
        }
      }(), x.enc.Utf16;
    });
  }(Xy)), Xy.exports;
}
var Ky = { exports: {} }, VC;
function us() {
  return VC || (VC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.WordArray, y = p.enc;
        y.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(D) {
            var m = D.words, w = D.sigBytes, z = this._map;
            D.clamp();
            for (var _ = [], k = 0; k < w; k += 3)
              for (var M = m[k >>> 2] >>> 24 - k % 4 * 8 & 255, j = m[k + 1 >>> 2] >>> 24 - (k + 1) % 4 * 8 & 255, O = m[k + 2 >>> 2] >>> 24 - (k + 2) % 4 * 8 & 255, H = M << 16 | j << 8 | O, b = 0; b < 4 && k + b * 0.75 < w; b++)
                _.push(z.charAt(H >>> 6 * (3 - b) & 63));
            var S = z.charAt(64);
            if (S)
              for (; _.length % 4; )
                _.push(S);
            return _.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(D) {
            var m = D.length, w = this._map, z = this._reverseMap;
            if (!z) {
              z = this._reverseMap = [];
              for (var _ = 0; _ < w.length; _++)
                z[w.charCodeAt(_)] = _;
            }
            var k = w.charAt(64);
            if (k) {
              var M = D.indexOf(k);
              M !== -1 && (m = M);
            }
            return B(D, m, z);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function B(D, m, w) {
          for (var z = [], _ = 0, k = 0; k < m; k++)
            if (k % 4) {
              var M = w[D.charCodeAt(k - 1)] << k % 4 * 2, j = w[D.charCodeAt(k)] >>> 6 - k % 4 * 2, O = M | j;
              z[_ >>> 2] |= O << 24 - _ % 4 * 8, _++;
            }
          return A.create(z, _);
        }
      }(), x.enc.Base64;
    });
  }(Ky)), Ky.exports;
}
var Zy = { exports: {} }, WC;
function pT() {
  return WC || (WC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.WordArray, y = p.enc;
        y.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(D, m) {
            m === void 0 && (m = !0);
            var w = D.words, z = D.sigBytes, _ = m ? this._safe_map : this._map;
            D.clamp();
            for (var k = [], M = 0; M < z; M += 3)
              for (var j = w[M >>> 2] >>> 24 - M % 4 * 8 & 255, O = w[M + 1 >>> 2] >>> 24 - (M + 1) % 4 * 8 & 255, H = w[M + 2 >>> 2] >>> 24 - (M + 2) % 4 * 8 & 255, b = j << 16 | O << 8 | H, S = 0; S < 4 && M + S * 0.75 < z; S++)
                k.push(_.charAt(b >>> 6 * (3 - S) & 63));
            var N = _.charAt(64);
            if (N)
              for (; k.length % 4; )
                k.push(N);
            return k.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(D, m) {
            m === void 0 && (m = !0);
            var w = D.length, z = m ? this._safe_map : this._map, _ = this._reverseMap;
            if (!_) {
              _ = this._reverseMap = [];
              for (var k = 0; k < z.length; k++)
                _[z.charCodeAt(k)] = k;
            }
            var M = z.charAt(64);
            if (M) {
              var j = D.indexOf(M);
              j !== -1 && (w = j);
            }
            return B(D, w, _);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function B(D, m, w) {
          for (var z = [], _ = 0, k = 0; k < m; k++)
            if (k % 4) {
              var M = w[D.charCodeAt(k - 1)] << k % 4 * 2, j = w[D.charCodeAt(k)] >>> 6 - k % 4 * 2, O = M | j;
              z[_ >>> 2] |= O << 24 - _ % 4 * 8, _++;
            }
          return A.create(z, _);
        }
      }(), x.enc.Base64url;
    });
  }(Zy)), Zy.exports;
}
var Jy = { exports: {} }, $C;
function ls() {
  return $C || ($C = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function(p) {
        var F = x, A = F.lib, y = A.WordArray, B = A.Hasher, D = F.algo, m = [];
        (function() {
          for (var j = 0; j < 64; j++)
            m[j] = p.abs(p.sin(j + 1)) * 4294967296 | 0;
        })();
        var w = D.MD5 = B.extend({
          _doReset: function() {
            this._hash = new y.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(j, O) {
            for (var H = 0; H < 16; H++) {
              var b = O + H, S = j[b];
              j[b] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            var N = this._hash.words, T = j[O + 0], V = j[O + 1], Y = j[O + 2], ne = j[O + 3], re = j[O + 4], W = j[O + 5], K = j[O + 6], le = j[O + 7], ae = j[O + 8], be = j[O + 9], Re = j[O + 10], Oe = j[O + 11], J = j[O + 12], pe = j[O + 13], Be = j[O + 14], se = j[O + 15], P = N[0], q = N[1], $ = N[2], Z = N[3];
            P = z(P, q, $, Z, T, 7, m[0]), Z = z(Z, P, q, $, V, 12, m[1]), $ = z($, Z, P, q, Y, 17, m[2]), q = z(q, $, Z, P, ne, 22, m[3]), P = z(P, q, $, Z, re, 7, m[4]), Z = z(Z, P, q, $, W, 12, m[5]), $ = z($, Z, P, q, K, 17, m[6]), q = z(q, $, Z, P, le, 22, m[7]), P = z(P, q, $, Z, ae, 7, m[8]), Z = z(Z, P, q, $, be, 12, m[9]), $ = z($, Z, P, q, Re, 17, m[10]), q = z(q, $, Z, P, Oe, 22, m[11]), P = z(P, q, $, Z, J, 7, m[12]), Z = z(Z, P, q, $, pe, 12, m[13]), $ = z($, Z, P, q, Be, 17, m[14]), q = z(q, $, Z, P, se, 22, m[15]), P = _(P, q, $, Z, V, 5, m[16]), Z = _(Z, P, q, $, K, 9, m[17]), $ = _($, Z, P, q, Oe, 14, m[18]), q = _(q, $, Z, P, T, 20, m[19]), P = _(P, q, $, Z, W, 5, m[20]), Z = _(Z, P, q, $, Re, 9, m[21]), $ = _($, Z, P, q, se, 14, m[22]), q = _(q, $, Z, P, re, 20, m[23]), P = _(P, q, $, Z, be, 5, m[24]), Z = _(Z, P, q, $, Be, 9, m[25]), $ = _($, Z, P, q, ne, 14, m[26]), q = _(q, $, Z, P, ae, 20, m[27]), P = _(P, q, $, Z, pe, 5, m[28]), Z = _(Z, P, q, $, Y, 9, m[29]), $ = _($, Z, P, q, le, 14, m[30]), q = _(q, $, Z, P, J, 20, m[31]), P = k(P, q, $, Z, W, 4, m[32]), Z = k(Z, P, q, $, ae, 11, m[33]), $ = k($, Z, P, q, Oe, 16, m[34]), q = k(q, $, Z, P, Be, 23, m[35]), P = k(P, q, $, Z, V, 4, m[36]), Z = k(Z, P, q, $, re, 11, m[37]), $ = k($, Z, P, q, le, 16, m[38]), q = k(q, $, Z, P, Re, 23, m[39]), P = k(P, q, $, Z, pe, 4, m[40]), Z = k(Z, P, q, $, T, 11, m[41]), $ = k($, Z, P, q, ne, 16, m[42]), q = k(q, $, Z, P, K, 23, m[43]), P = k(P, q, $, Z, be, 4, m[44]), Z = k(Z, P, q, $, J, 11, m[45]), $ = k($, Z, P, q, se, 16, m[46]), q = k(q, $, Z, P, Y, 23, m[47]), P = M(P, q, $, Z, T, 6, m[48]), Z = M(Z, P, q, $, le, 10, m[49]), $ = M($, Z, P, q, Be, 15, m[50]), q = M(q, $, Z, P, W, 21, m[51]), P = M(P, q, $, Z, J, 6, m[52]), Z = M(Z, P, q, $, ne, 10, m[53]), $ = M($, Z, P, q, Re, 15, m[54]), q = M(q, $, Z, P, V, 21, m[55]), P = M(P, q, $, Z, ae, 6, m[56]), Z = M(Z, P, q, $, se, 10, m[57]), $ = M($, Z, P, q, K, 15, m[58]), q = M(q, $, Z, P, pe, 21, m[59]), P = M(P, q, $, Z, re, 6, m[60]), Z = M(Z, P, q, $, Oe, 10, m[61]), $ = M($, Z, P, q, Y, 15, m[62]), q = M(q, $, Z, P, be, 21, m[63]), N[0] = N[0] + P | 0, N[1] = N[1] + q | 0, N[2] = N[2] + $ | 0, N[3] = N[3] + Z | 0;
          },
          _doFinalize: function() {
            var j = this._data, O = j.words, H = this._nDataBytes * 8, b = j.sigBytes * 8;
            O[b >>> 5] |= 128 << 24 - b % 32;
            var S = p.floor(H / 4294967296), N = H;
            O[(b + 64 >>> 9 << 4) + 15] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, O[(b + 64 >>> 9 << 4) + 14] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, j.sigBytes = (O.length + 1) * 4, this._process();
            for (var T = this._hash, V = T.words, Y = 0; Y < 4; Y++) {
              var ne = V[Y];
              V[Y] = (ne << 8 | ne >>> 24) & 16711935 | (ne << 24 | ne >>> 8) & 4278255360;
            }
            return T;
          },
          clone: function() {
            var j = B.clone.call(this);
            return j._hash = this._hash.clone(), j;
          }
        });
        function z(j, O, H, b, S, N, T) {
          var V = j + (O & H | ~O & b) + S + T;
          return (V << N | V >>> 32 - N) + O;
        }
        function _(j, O, H, b, S, N, T) {
          var V = j + (O & b | H & ~b) + S + T;
          return (V << N | V >>> 32 - N) + O;
        }
        function k(j, O, H, b, S, N, T) {
          var V = j + (O ^ H ^ b) + S + T;
          return (V << N | V >>> 32 - N) + O;
        }
        function M(j, O, H, b, S, N, T) {
          var V = j + (H ^ (O | ~b)) + S + T;
          return (V << N | V >>> 32 - N) + O;
        }
        F.MD5 = B._createHelper(w), F.HmacMD5 = B._createHmacHelper(w);
      }(Math), x.MD5;
    });
  }(Jy)), Jy.exports;
}
var ex = { exports: {} }, qC;
function j2() {
  return qC || (qC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.WordArray, y = F.Hasher, B = p.algo, D = [], m = B.SHA1 = y.extend({
          _doReset: function() {
            this._hash = new A.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(w, z) {
            for (var _ = this._hash.words, k = _[0], M = _[1], j = _[2], O = _[3], H = _[4], b = 0; b < 80; b++) {
              if (b < 16)
                D[b] = w[z + b] | 0;
              else {
                var S = D[b - 3] ^ D[b - 8] ^ D[b - 14] ^ D[b - 16];
                D[b] = S << 1 | S >>> 31;
              }
              var N = (k << 5 | k >>> 27) + H + D[b];
              b < 20 ? N += (M & j | ~M & O) + 1518500249 : b < 40 ? N += (M ^ j ^ O) + 1859775393 : b < 60 ? N += (M & j | M & O | j & O) - 1894007588 : N += (M ^ j ^ O) - 899497514, H = O, O = j, j = M << 30 | M >>> 2, M = k, k = N;
            }
            _[0] = _[0] + k | 0, _[1] = _[1] + M | 0, _[2] = _[2] + j | 0, _[3] = _[3] + O | 0, _[4] = _[4] + H | 0;
          },
          _doFinalize: function() {
            var w = this._data, z = w.words, _ = this._nDataBytes * 8, k = w.sigBytes * 8;
            return z[k >>> 5] |= 128 << 24 - k % 32, z[(k + 64 >>> 9 << 4) + 14] = Math.floor(_ / 4294967296), z[(k + 64 >>> 9 << 4) + 15] = _, w.sigBytes = z.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var w = y.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        p.SHA1 = y._createHelper(m), p.HmacSHA1 = y._createHmacHelper(m);
      }(), x.SHA1;
    });
  }(ex)), ex.exports;
}
var tx = { exports: {} }, YC;
function $x() {
  return YC || (YC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      return function(p) {
        var F = x, A = F.lib, y = A.WordArray, B = A.Hasher, D = F.algo, m = [], w = [];
        (function() {
          function k(H) {
            for (var b = p.sqrt(H), S = 2; S <= b; S++)
              if (!(H % S))
                return !1;
            return !0;
          }
          function M(H) {
            return (H - (H | 0)) * 4294967296 | 0;
          }
          for (var j = 2, O = 0; O < 64; )
            k(j) && (O < 8 && (m[O] = M(p.pow(j, 1 / 2))), w[O] = M(p.pow(j, 1 / 3)), O++), j++;
        })();
        var z = [], _ = D.SHA256 = B.extend({
          _doReset: function() {
            this._hash = new y.init(m.slice(0));
          },
          _doProcessBlock: function(k, M) {
            for (var j = this._hash.words, O = j[0], H = j[1], b = j[2], S = j[3], N = j[4], T = j[5], V = j[6], Y = j[7], ne = 0; ne < 64; ne++) {
              if (ne < 16)
                z[ne] = k[M + ne] | 0;
              else {
                var re = z[ne - 15], W = (re << 25 | re >>> 7) ^ (re << 14 | re >>> 18) ^ re >>> 3, K = z[ne - 2], le = (K << 15 | K >>> 17) ^ (K << 13 | K >>> 19) ^ K >>> 10;
                z[ne] = W + z[ne - 7] + le + z[ne - 16];
              }
              var ae = N & T ^ ~N & V, be = O & H ^ O & b ^ H & b, Re = (O << 30 | O >>> 2) ^ (O << 19 | O >>> 13) ^ (O << 10 | O >>> 22), Oe = (N << 26 | N >>> 6) ^ (N << 21 | N >>> 11) ^ (N << 7 | N >>> 25), J = Y + Oe + ae + w[ne] + z[ne], pe = Re + be;
              Y = V, V = T, T = N, N = S + J | 0, S = b, b = H, H = O, O = J + pe | 0;
            }
            j[0] = j[0] + O | 0, j[1] = j[1] + H | 0, j[2] = j[2] + b | 0, j[3] = j[3] + S | 0, j[4] = j[4] + N | 0, j[5] = j[5] + T | 0, j[6] = j[6] + V | 0, j[7] = j[7] + Y | 0;
          },
          _doFinalize: function() {
            var k = this._data, M = k.words, j = this._nDataBytes * 8, O = k.sigBytes * 8;
            return M[O >>> 5] |= 128 << 24 - O % 32, M[(O + 64 >>> 9 << 4) + 14] = p.floor(j / 4294967296), M[(O + 64 >>> 9 << 4) + 15] = j, k.sigBytes = M.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var k = B.clone.call(this);
            return k._hash = this._hash.clone(), k;
          }
        });
        F.SHA256 = B._createHelper(_), F.HmacSHA256 = B._createHmacHelper(_);
      }(Math), x.SHA256;
    });
  }(tx)), tx.exports;
}
var nx = { exports: {} }, QC;
function vT() {
  return QC || (QC = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), $x());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.WordArray, y = p.algo, B = y.SHA256, D = y.SHA224 = B.extend({
          _doReset: function() {
            this._hash = new A.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var m = B._doFinalize.call(this);
            return m.sigBytes -= 4, m;
          }
        });
        p.SHA224 = B._createHelper(D), p.HmacSHA224 = B._createHmacHelper(D);
      }(), x.SHA224;
    });
  }(nx)), nx.exports;
}
var rx = { exports: {} }, GC;
function H2() {
  return GC || (GC = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), Av());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.Hasher, y = p.x64, B = y.Word, D = y.WordArray, m = p.algo;
        function w() {
          return B.create.apply(B, arguments);
        }
        var z = [
          w(1116352408, 3609767458),
          w(1899447441, 602891725),
          w(3049323471, 3964484399),
          w(3921009573, 2173295548),
          w(961987163, 4081628472),
          w(1508970993, 3053834265),
          w(2453635748, 2937671579),
          w(2870763221, 3664609560),
          w(3624381080, 2734883394),
          w(310598401, 1164996542),
          w(607225278, 1323610764),
          w(1426881987, 3590304994),
          w(1925078388, 4068182383),
          w(2162078206, 991336113),
          w(2614888103, 633803317),
          w(3248222580, 3479774868),
          w(3835390401, 2666613458),
          w(4022224774, 944711139),
          w(264347078, 2341262773),
          w(604807628, 2007800933),
          w(770255983, 1495990901),
          w(1249150122, 1856431235),
          w(1555081692, 3175218132),
          w(1996064986, 2198950837),
          w(2554220882, 3999719339),
          w(2821834349, 766784016),
          w(2952996808, 2566594879),
          w(3210313671, 3203337956),
          w(3336571891, 1034457026),
          w(3584528711, 2466948901),
          w(113926993, 3758326383),
          w(338241895, 168717936),
          w(666307205, 1188179964),
          w(773529912, 1546045734),
          w(1294757372, 1522805485),
          w(1396182291, 2643833823),
          w(1695183700, 2343527390),
          w(1986661051, 1014477480),
          w(2177026350, 1206759142),
          w(2456956037, 344077627),
          w(2730485921, 1290863460),
          w(2820302411, 3158454273),
          w(3259730800, 3505952657),
          w(3345764771, 106217008),
          w(3516065817, 3606008344),
          w(3600352804, 1432725776),
          w(4094571909, 1467031594),
          w(275423344, 851169720),
          w(430227734, 3100823752),
          w(506948616, 1363258195),
          w(659060556, 3750685593),
          w(883997877, 3785050280),
          w(958139571, 3318307427),
          w(1322822218, 3812723403),
          w(1537002063, 2003034995),
          w(1747873779, 3602036899),
          w(1955562222, 1575990012),
          w(2024104815, 1125592928),
          w(2227730452, 2716904306),
          w(2361852424, 442776044),
          w(2428436474, 593698344),
          w(2756734187, 3733110249),
          w(3204031479, 2999351573),
          w(3329325298, 3815920427),
          w(3391569614, 3928383900),
          w(3515267271, 566280711),
          w(3940187606, 3454069534),
          w(4118630271, 4000239992),
          w(116418474, 1914138554),
          w(174292421, 2731055270),
          w(289380356, 3203993006),
          w(460393269, 320620315),
          w(685471733, 587496836),
          w(852142971, 1086792851),
          w(1017036298, 365543100),
          w(1126000580, 2618297676),
          w(1288033470, 3409855158),
          w(1501505948, 4234509866),
          w(1607167915, 987167468),
          w(1816402316, 1246189591)
        ], _ = [];
        (function() {
          for (var M = 0; M < 80; M++)
            _[M] = w();
        })();
        var k = m.SHA512 = A.extend({
          _doReset: function() {
            this._hash = new D.init([
              new B.init(1779033703, 4089235720),
              new B.init(3144134277, 2227873595),
              new B.init(1013904242, 4271175723),
              new B.init(2773480762, 1595750129),
              new B.init(1359893119, 2917565137),
              new B.init(2600822924, 725511199),
              new B.init(528734635, 4215389547),
              new B.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, j) {
            for (var O = this._hash.words, H = O[0], b = O[1], S = O[2], N = O[3], T = O[4], V = O[5], Y = O[6], ne = O[7], re = H.high, W = H.low, K = b.high, le = b.low, ae = S.high, be = S.low, Re = N.high, Oe = N.low, J = T.high, pe = T.low, Be = V.high, se = V.low, P = Y.high, q = Y.low, $ = ne.high, Z = ne.low, me = re, Se = W, Ue = K, De = le, Ie = ae, Ke = be, dt = Re, Te = Oe, wt = J, kt = pe, Ht = Be, Bn = se, zn = P, Cn = q, Nr = $, bn = Z, un = 0; un < 80; un++) {
              var hn, Sn, mn = _[un];
              if (un < 16)
                Sn = mn.high = M[j + un * 2] | 0, hn = mn.low = M[j + un * 2 + 1] | 0;
              else {
                var Gn = _[un - 15], Ot = Gn.high, Lt = Gn.low, ia = (Ot >>> 1 | Lt << 31) ^ (Ot >>> 8 | Lt << 24) ^ Ot >>> 7, Mr = (Lt >>> 1 | Ot << 31) ^ (Lt >>> 8 | Ot << 24) ^ (Lt >>> 7 | Ot << 25), Rr = _[un - 2], Me = Rr.high, Ve = Rr.low, it = (Me >>> 19 | Ve << 13) ^ (Me << 3 | Ve >>> 29) ^ Me >>> 6, Tt = (Ve >>> 19 | Me << 13) ^ (Ve << 3 | Me >>> 29) ^ (Ve >>> 6 | Me << 26), Ut = _[un - 7], It = Ut.high, Vt = Ut.low, dn = _[un - 16], Yt = dn.high, Fn = dn.low;
                hn = Mr + Vt, Sn = ia + It + (hn >>> 0 < Mr >>> 0 ? 1 : 0), hn = hn + Tt, Sn = Sn + it + (hn >>> 0 < Tt >>> 0 ? 1 : 0), hn = hn + Fn, Sn = Sn + Yt + (hn >>> 0 < Fn >>> 0 ? 1 : 0), mn.high = Sn, mn.low = hn;
              }
              var Sa = wt & Ht ^ ~wt & zn, fr = kt & Bn ^ ~kt & Cn, zr = me & Ue ^ me & Ie ^ Ue & Ie, qr = Se & De ^ Se & Ke ^ De & Ke, dr = (me >>> 28 | Se << 4) ^ (me << 30 | Se >>> 2) ^ (me << 25 | Se >>> 7), On = (Se >>> 28 | me << 4) ^ (Se << 30 | me >>> 2) ^ (Se << 25 | me >>> 7), Pn = (wt >>> 14 | kt << 18) ^ (wt >>> 18 | kt << 14) ^ (wt << 23 | kt >>> 9), Pr = (kt >>> 14 | wt << 18) ^ (kt >>> 18 | wt << 14) ^ (kt << 23 | wt >>> 9), en = z[un], oa = en.high, Q = en.low, Ee = bn + Pr, ze = Nr + Pn + (Ee >>> 0 < bn >>> 0 ? 1 : 0), Ee = Ee + fr, ze = ze + Sa + (Ee >>> 0 < fr >>> 0 ? 1 : 0), Ee = Ee + Q, ze = ze + oa + (Ee >>> 0 < Q >>> 0 ? 1 : 0), Ee = Ee + hn, ze = ze + Sn + (Ee >>> 0 < hn >>> 0 ? 1 : 0), Je = On + qr, Ct = dr + zr + (Je >>> 0 < On >>> 0 ? 1 : 0);
              Nr = zn, bn = Cn, zn = Ht, Cn = Bn, Ht = wt, Bn = kt, kt = Te + Ee | 0, wt = dt + ze + (kt >>> 0 < Te >>> 0 ? 1 : 0) | 0, dt = Ie, Te = Ke, Ie = Ue, Ke = De, Ue = me, De = Se, Se = Ee + Je | 0, me = ze + Ct + (Se >>> 0 < Ee >>> 0 ? 1 : 0) | 0;
            }
            W = H.low = W + Se, H.high = re + me + (W >>> 0 < Se >>> 0 ? 1 : 0), le = b.low = le + De, b.high = K + Ue + (le >>> 0 < De >>> 0 ? 1 : 0), be = S.low = be + Ke, S.high = ae + Ie + (be >>> 0 < Ke >>> 0 ? 1 : 0), Oe = N.low = Oe + Te, N.high = Re + dt + (Oe >>> 0 < Te >>> 0 ? 1 : 0), pe = T.low = pe + kt, T.high = J + wt + (pe >>> 0 < kt >>> 0 ? 1 : 0), se = V.low = se + Bn, V.high = Be + Ht + (se >>> 0 < Bn >>> 0 ? 1 : 0), q = Y.low = q + Cn, Y.high = P + zn + (q >>> 0 < Cn >>> 0 ? 1 : 0), Z = ne.low = Z + bn, ne.high = $ + Nr + (Z >>> 0 < bn >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var M = this._data, j = M.words, O = this._nDataBytes * 8, H = M.sigBytes * 8;
            j[H >>> 5] |= 128 << 24 - H % 32, j[(H + 128 >>> 10 << 5) + 30] = Math.floor(O / 4294967296), j[(H + 128 >>> 10 << 5) + 31] = O, M.sigBytes = j.length * 4, this._process();
            var b = this._hash.toX32();
            return b;
          },
          clone: function() {
            var M = A.clone.call(this);
            return M._hash = this._hash.clone(), M;
          },
          blockSize: 1024 / 32
        });
        p.SHA512 = A._createHelper(k), p.HmacSHA512 = A._createHmacHelper(k);
      }(), x.SHA512;
    });
  }(rx)), rx.exports;
}
var ax = { exports: {} }, XC;
function hT() {
  return XC || (XC = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), Av(), H2());
    })(At, function(x) {
      return function() {
        var p = x, F = p.x64, A = F.Word, y = F.WordArray, B = p.algo, D = B.SHA512, m = B.SHA384 = D.extend({
          _doReset: function() {
            this._hash = new y.init([
              new A.init(3418070365, 3238371032),
              new A.init(1654270250, 914150663),
              new A.init(2438529370, 812702999),
              new A.init(355462360, 4144912697),
              new A.init(1731405415, 4290775857),
              new A.init(2394180231, 1750603025),
              new A.init(3675008525, 1694076839),
              new A.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var w = D._doFinalize.call(this);
            return w.sigBytes -= 16, w;
          }
        });
        p.SHA384 = D._createHelper(m), p.HmacSHA384 = D._createHmacHelper(m);
      }(), x.SHA384;
    });
  }(ax)), ax.exports;
}
var ix = { exports: {} }, KC;
function mT() {
  return KC || (KC = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), Av());
    })(At, function(x) {
      return function(p) {
        var F = x, A = F.lib, y = A.WordArray, B = A.Hasher, D = F.x64, m = D.Word, w = F.algo, z = [], _ = [], k = [];
        (function() {
          for (var O = 1, H = 0, b = 0; b < 24; b++) {
            z[O + 5 * H] = (b + 1) * (b + 2) / 2 % 64;
            var S = H % 5, N = (2 * O + 3 * H) % 5;
            O = S, H = N;
          }
          for (var O = 0; O < 5; O++)
            for (var H = 0; H < 5; H++)
              _[O + 5 * H] = H + (2 * O + 3 * H) % 5 * 5;
          for (var T = 1, V = 0; V < 24; V++) {
            for (var Y = 0, ne = 0, re = 0; re < 7; re++) {
              if (T & 1) {
                var W = (1 << re) - 1;
                W < 32 ? ne ^= 1 << W : Y ^= 1 << W - 32;
              }
              T & 128 ? T = T << 1 ^ 113 : T <<= 1;
            }
            k[V] = m.create(Y, ne);
          }
        })();
        var M = [];
        (function() {
          for (var O = 0; O < 25; O++)
            M[O] = m.create();
        })();
        var j = w.SHA3 = B.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: B.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var O = this._state = [], H = 0; H < 25; H++)
              O[H] = new m.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(O, H) {
            for (var b = this._state, S = this.blockSize / 2, N = 0; N < S; N++) {
              var T = O[H + 2 * N], V = O[H + 2 * N + 1];
              T = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, V = (V << 8 | V >>> 24) & 16711935 | (V << 24 | V >>> 8) & 4278255360;
              var Y = b[N];
              Y.high ^= V, Y.low ^= T;
            }
            for (var ne = 0; ne < 24; ne++) {
              for (var re = 0; re < 5; re++) {
                for (var W = 0, K = 0, le = 0; le < 5; le++) {
                  var Y = b[re + 5 * le];
                  W ^= Y.high, K ^= Y.low;
                }
                var ae = M[re];
                ae.high = W, ae.low = K;
              }
              for (var re = 0; re < 5; re++)
                for (var be = M[(re + 4) % 5], Re = M[(re + 1) % 5], Oe = Re.high, J = Re.low, W = be.high ^ (Oe << 1 | J >>> 31), K = be.low ^ (J << 1 | Oe >>> 31), le = 0; le < 5; le++) {
                  var Y = b[re + 5 * le];
                  Y.high ^= W, Y.low ^= K;
                }
              for (var pe = 1; pe < 25; pe++) {
                var W, K, Y = b[pe], Be = Y.high, se = Y.low, P = z[pe];
                P < 32 ? (W = Be << P | se >>> 32 - P, K = se << P | Be >>> 32 - P) : (W = se << P - 32 | Be >>> 64 - P, K = Be << P - 32 | se >>> 64 - P);
                var q = M[_[pe]];
                q.high = W, q.low = K;
              }
              var $ = M[0], Z = b[0];
              $.high = Z.high, $.low = Z.low;
              for (var re = 0; re < 5; re++)
                for (var le = 0; le < 5; le++) {
                  var pe = re + 5 * le, Y = b[pe], me = M[pe], Se = M[(re + 1) % 5 + 5 * le], Ue = M[(re + 2) % 5 + 5 * le];
                  Y.high = me.high ^ ~Se.high & Ue.high, Y.low = me.low ^ ~Se.low & Ue.low;
                }
              var Y = b[0], De = k[ne];
              Y.high ^= De.high, Y.low ^= De.low;
            }
          },
          _doFinalize: function() {
            var O = this._data, H = O.words;
            this._nDataBytes * 8;
            var b = O.sigBytes * 8, S = this.blockSize * 32;
            H[b >>> 5] |= 1 << 24 - b % 32, H[(p.ceil((b + 1) / S) * S >>> 5) - 1] |= 128, O.sigBytes = H.length * 4, this._process();
            for (var N = this._state, T = this.cfg.outputLength / 8, V = T / 8, Y = [], ne = 0; ne < V; ne++) {
              var re = N[ne], W = re.high, K = re.low;
              W = (W << 8 | W >>> 24) & 16711935 | (W << 24 | W >>> 8) & 4278255360, K = (K << 8 | K >>> 24) & 16711935 | (K << 24 | K >>> 8) & 4278255360, Y.push(K), Y.push(W);
            }
            return new y.init(Y, T);
          },
          clone: function() {
            for (var O = B.clone.call(this), H = O._state = this._state.slice(0), b = 0; b < 25; b++)
              H[b] = H[b].clone();
            return O;
          }
        });
        F.SHA3 = B._createHelper(j), F.HmacSHA3 = B._createHmacHelper(j);
      }(Math), x.SHA3;
    });
  }(ix)), ix.exports;
}
var ox = { exports: {} }, ZC;
function yT() {
  return ZC || (ZC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(p) {
        var F = x, A = F.lib, y = A.WordArray, B = A.Hasher, D = F.algo, m = y.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), w = y.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), z = y.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), _ = y.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), k = y.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), M = y.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), j = D.RIPEMD160 = B.extend({
          _doReset: function() {
            this._hash = y.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(V, Y) {
            for (var ne = 0; ne < 16; ne++) {
              var re = Y + ne, W = V[re];
              V[re] = (W << 8 | W >>> 24) & 16711935 | (W << 24 | W >>> 8) & 4278255360;
            }
            var K = this._hash.words, le = k.words, ae = M.words, be = m.words, Re = w.words, Oe = z.words, J = _.words, pe, Be, se, P, q, $, Z, me, Se, Ue;
            $ = pe = K[0], Z = Be = K[1], me = se = K[2], Se = P = K[3], Ue = q = K[4];
            for (var De, ne = 0; ne < 80; ne += 1)
              De = pe + V[Y + be[ne]] | 0, ne < 16 ? De += O(Be, se, P) + le[0] : ne < 32 ? De += H(Be, se, P) + le[1] : ne < 48 ? De += b(Be, se, P) + le[2] : ne < 64 ? De += S(Be, se, P) + le[3] : De += N(Be, se, P) + le[4], De = De | 0, De = T(De, Oe[ne]), De = De + q | 0, pe = q, q = P, P = T(se, 10), se = Be, Be = De, De = $ + V[Y + Re[ne]] | 0, ne < 16 ? De += N(Z, me, Se) + ae[0] : ne < 32 ? De += S(Z, me, Se) + ae[1] : ne < 48 ? De += b(Z, me, Se) + ae[2] : ne < 64 ? De += H(Z, me, Se) + ae[3] : De += O(Z, me, Se) + ae[4], De = De | 0, De = T(De, J[ne]), De = De + Ue | 0, $ = Ue, Ue = Se, Se = T(me, 10), me = Z, Z = De;
            De = K[1] + se + Se | 0, K[1] = K[2] + P + Ue | 0, K[2] = K[3] + q + $ | 0, K[3] = K[4] + pe + Z | 0, K[4] = K[0] + Be + me | 0, K[0] = De;
          },
          _doFinalize: function() {
            var V = this._data, Y = V.words, ne = this._nDataBytes * 8, re = V.sigBytes * 8;
            Y[re >>> 5] |= 128 << 24 - re % 32, Y[(re + 64 >>> 9 << 4) + 14] = (ne << 8 | ne >>> 24) & 16711935 | (ne << 24 | ne >>> 8) & 4278255360, V.sigBytes = (Y.length + 1) * 4, this._process();
            for (var W = this._hash, K = W.words, le = 0; le < 5; le++) {
              var ae = K[le];
              K[le] = (ae << 8 | ae >>> 24) & 16711935 | (ae << 24 | ae >>> 8) & 4278255360;
            }
            return W;
          },
          clone: function() {
            var V = B.clone.call(this);
            return V._hash = this._hash.clone(), V;
          }
        });
        function O(V, Y, ne) {
          return V ^ Y ^ ne;
        }
        function H(V, Y, ne) {
          return V & Y | ~V & ne;
        }
        function b(V, Y, ne) {
          return (V | ~Y) ^ ne;
        }
        function S(V, Y, ne) {
          return V & ne | Y & ~ne;
        }
        function N(V, Y, ne) {
          return V ^ (Y | ~ne);
        }
        function T(V, Y) {
          return V << Y | V >>> 32 - Y;
        }
        F.RIPEMD160 = B._createHelper(j), F.HmacRIPEMD160 = B._createHmacHelper(j);
      }(), x.RIPEMD160;
    });
  }(ox)), ox.exports;
}
var ux = { exports: {} }, JC;
function qx() {
  return JC || (JC = 1, function(c, g) {
    (function(x, p) {
      c.exports = p(Nt());
    })(At, function(x) {
      (function() {
        var p = x, F = p.lib, A = F.Base, y = p.enc, B = y.Utf8, D = p.algo;
        D.HMAC = A.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(m, w) {
            m = this._hasher = new m.init(), typeof w == "string" && (w = B.parse(w));
            var z = m.blockSize, _ = z * 4;
            w.sigBytes > _ && (w = m.finalize(w)), w.clamp();
            for (var k = this._oKey = w.clone(), M = this._iKey = w.clone(), j = k.words, O = M.words, H = 0; H < z; H++)
              j[H] ^= 1549556828, O[H] ^= 909522486;
            k.sigBytes = M.sigBytes = _, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var m = this._hasher;
            m.reset(), m.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(m) {
            return this._hasher.update(m), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(m) {
            var w = this._hasher, z = w.finalize(m);
            w.reset();
            var _ = w.finalize(this._oKey.clone().concat(z));
            return _;
          }
        });
      })();
    });
  }(ux)), ux.exports;
}
var lx = { exports: {} }, e2;
function xT() {
  return e2 || (e2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), $x(), qx());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.Base, y = F.WordArray, B = p.algo, D = B.SHA256, m = B.HMAC, w = B.PBKDF2 = A.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: A.extend({
            keySize: 128 / 32,
            hasher: D,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(z) {
            this.cfg = this.cfg.extend(z);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(z, _) {
            for (var k = this.cfg, M = m.create(k.hasher, z), j = y.create(), O = y.create([1]), H = j.words, b = O.words, S = k.keySize, N = k.iterations; H.length < S; ) {
              var T = M.update(_).finalize(O);
              M.reset();
              for (var V = T.words, Y = V.length, ne = T, re = 1; re < N; re++) {
                ne = M.finalize(ne), M.reset();
                for (var W = ne.words, K = 0; K < Y; K++)
                  V[K] ^= W[K];
              }
              j.concat(T), b[0]++;
            }
            return j.sigBytes = S * 4, j;
          }
        });
        p.PBKDF2 = function(z, _, k) {
          return w.create(k).compute(z, _);
        };
      }(), x.PBKDF2;
    });
  }(lx)), lx.exports;
}
var sx = { exports: {} }, t2;
function Hu() {
  return t2 || (t2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), j2(), qx());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.Base, y = F.WordArray, B = p.algo, D = B.MD5, m = B.EvpKDF = A.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: A.extend({
            keySize: 128 / 32,
            hasher: D,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(w) {
            this.cfg = this.cfg.extend(w);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(w, z) {
            for (var _, k = this.cfg, M = k.hasher.create(), j = y.create(), O = j.words, H = k.keySize, b = k.iterations; O.length < H; ) {
              _ && M.update(_), _ = M.update(w).finalize(z), M.reset();
              for (var S = 1; S < b; S++)
                _ = M.finalize(_), M.reset();
              j.concat(_);
            }
            return j.sigBytes = H * 4, j;
          }
        });
        p.EvpKDF = function(w, z, _) {
          return m.create(_).compute(w, z);
        };
      }(), x.EvpKDF;
    });
  }(sx)), sx.exports;
}
var cx = { exports: {} }, n2;
function cr() {
  return n2 || (n2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), Hu());
    })(At, function(x) {
      x.lib.Cipher || function(p) {
        var F = x, A = F.lib, y = A.Base, B = A.WordArray, D = A.BufferedBlockAlgorithm, m = F.enc;
        m.Utf8;
        var w = m.Base64, z = F.algo, _ = z.EvpKDF, k = A.Cipher = D.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: y.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(W, K) {
            return this.create(this._ENC_XFORM_MODE, W, K);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(W, K) {
            return this.create(this._DEC_XFORM_MODE, W, K);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(W, K, le) {
            this.cfg = this.cfg.extend(le), this._xformMode = W, this._key = K, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            D.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(W) {
            return this._append(W), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(W) {
            W && this._append(W);
            var K = this._doFinalize();
            return K;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function W(K) {
              return typeof K == "string" ? re : V;
            }
            return function(K) {
              return {
                encrypt: function(le, ae, be) {
                  return W(ae).encrypt(K, le, ae, be);
                },
                decrypt: function(le, ae, be) {
                  return W(ae).decrypt(K, le, ae, be);
                }
              };
            };
          }()
        });
        A.StreamCipher = k.extend({
          _doFinalize: function() {
            var W = this._process(!0);
            return W;
          },
          blockSize: 1
        });
        var M = F.mode = {}, j = A.BlockCipherMode = y.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(W, K) {
            return this.Encryptor.create(W, K);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(W, K) {
            return this.Decryptor.create(W, K);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(W, K) {
            this._cipher = W, this._iv = K;
          }
        }), O = M.CBC = function() {
          var W = j.extend();
          W.Encryptor = W.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(le, ae) {
              var be = this._cipher, Re = be.blockSize;
              K.call(this, le, ae, Re), be.encryptBlock(le, ae), this._prevBlock = le.slice(ae, ae + Re);
            }
          }), W.Decryptor = W.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(le, ae) {
              var be = this._cipher, Re = be.blockSize, Oe = le.slice(ae, ae + Re);
              be.decryptBlock(le, ae), K.call(this, le, ae, Re), this._prevBlock = Oe;
            }
          });
          function K(le, ae, be) {
            var Re, Oe = this._iv;
            Oe ? (Re = Oe, this._iv = p) : Re = this._prevBlock;
            for (var J = 0; J < be; J++)
              le[ae + J] ^= Re[J];
          }
          return W;
        }(), H = F.pad = {}, b = H.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(W, K) {
            for (var le = K * 4, ae = le - W.sigBytes % le, be = ae << 24 | ae << 16 | ae << 8 | ae, Re = [], Oe = 0; Oe < ae; Oe += 4)
              Re.push(be);
            var J = B.create(Re, ae);
            W.concat(J);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(W) {
            var K = W.words[W.sigBytes - 1 >>> 2] & 255;
            W.sigBytes -= K;
          }
        };
        A.BlockCipher = k.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: k.cfg.extend({
            mode: O,
            padding: b
          }),
          reset: function() {
            var W;
            k.reset.call(this);
            var K = this.cfg, le = K.iv, ae = K.mode;
            this._xformMode == this._ENC_XFORM_MODE ? W = ae.createEncryptor : (W = ae.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == W ? this._mode.init(this, le && le.words) : (this._mode = W.call(ae, this, le && le.words), this._mode.__creator = W);
          },
          _doProcessBlock: function(W, K) {
            this._mode.processBlock(W, K);
          },
          _doFinalize: function() {
            var W, K = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (K.pad(this._data, this.blockSize), W = this._process(!0)) : (W = this._process(!0), K.unpad(W)), W;
          },
          blockSize: 128 / 32
        });
        var S = A.CipherParams = y.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(W) {
            this.mixIn(W);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(W) {
            return (W || this.formatter).stringify(this);
          }
        }), N = F.format = {}, T = N.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(W) {
            var K, le = W.ciphertext, ae = W.salt;
            return ae ? K = B.create([1398893684, 1701076831]).concat(ae).concat(le) : K = le, K.toString(w);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(W) {
            var K, le = w.parse(W), ae = le.words;
            return ae[0] == 1398893684 && ae[1] == 1701076831 && (K = B.create(ae.slice(2, 4)), ae.splice(0, 4), le.sigBytes -= 16), S.create({ ciphertext: le, salt: K });
          }
        }, V = A.SerializableCipher = y.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: y.extend({
            format: T
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(W, K, le, ae) {
            ae = this.cfg.extend(ae);
            var be = W.createEncryptor(le, ae), Re = be.finalize(K), Oe = be.cfg;
            return S.create({
              ciphertext: Re,
              key: le,
              iv: Oe.iv,
              algorithm: W,
              mode: Oe.mode,
              padding: Oe.padding,
              blockSize: W.blockSize,
              formatter: ae.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(W, K, le, ae) {
            ae = this.cfg.extend(ae), K = this._parse(K, ae.format);
            var be = W.createDecryptor(le, ae).finalize(K.ciphertext);
            return be;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(W, K) {
            return typeof W == "string" ? K.parse(W, this) : W;
          }
        }), Y = F.kdf = {}, ne = Y.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(W, K, le, ae, be) {
            if (ae || (ae = B.random(64 / 8)), be)
              var Re = _.create({ keySize: K + le, hasher: be }).compute(W, ae);
            else
              var Re = _.create({ keySize: K + le }).compute(W, ae);
            var Oe = B.create(Re.words.slice(K), le * 4);
            return Re.sigBytes = K * 4, S.create({ key: Re, iv: Oe, salt: ae });
          }
        }, re = A.PasswordBasedCipher = V.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: V.cfg.extend({
            kdf: ne
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(W, K, le, ae) {
            ae = this.cfg.extend(ae);
            var be = ae.kdf.execute(le, W.keySize, W.ivSize, ae.salt, ae.hasher);
            ae.iv = be.iv;
            var Re = V.encrypt.call(this, W, K, be.key, ae);
            return Re.mixIn(be), Re;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(W, K, le, ae) {
            ae = this.cfg.extend(ae), K = this._parse(K, ae.format);
            var be = ae.kdf.execute(le, W.keySize, W.ivSize, K.salt, ae.hasher);
            ae.iv = be.iv;
            var Re = V.decrypt.call(this, W, K, be.key, ae);
            return Re;
          }
        });
      }();
    });
  }(cx)), cx.exports;
}
var fx = { exports: {} }, r2;
function gT() {
  return r2 || (r2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.mode.CFB = function() {
        var p = x.lib.BlockCipherMode.extend();
        p.Encryptor = p.extend({
          processBlock: function(A, y) {
            var B = this._cipher, D = B.blockSize;
            F.call(this, A, y, D, B), this._prevBlock = A.slice(y, y + D);
          }
        }), p.Decryptor = p.extend({
          processBlock: function(A, y) {
            var B = this._cipher, D = B.blockSize, m = A.slice(y, y + D);
            F.call(this, A, y, D, B), this._prevBlock = m;
          }
        });
        function F(A, y, B, D) {
          var m, w = this._iv;
          w ? (m = w.slice(0), this._iv = void 0) : m = this._prevBlock, D.encryptBlock(m, 0);
          for (var z = 0; z < B; z++)
            A[y + z] ^= m[z];
        }
        return p;
      }(), x.mode.CFB;
    });
  }(fx)), fx.exports;
}
var dx = { exports: {} }, a2;
function ET() {
  return a2 || (a2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.mode.CTR = function() {
        var p = x.lib.BlockCipherMode.extend(), F = p.Encryptor = p.extend({
          processBlock: function(A, y) {
            var B = this._cipher, D = B.blockSize, m = this._iv, w = this._counter;
            m && (w = this._counter = m.slice(0), this._iv = void 0);
            var z = w.slice(0);
            B.encryptBlock(z, 0), w[D - 1] = w[D - 1] + 1 | 0;
            for (var _ = 0; _ < D; _++)
              A[y + _] ^= z[_];
          }
        });
        return p.Decryptor = F, p;
      }(), x.mode.CTR;
    });
  }(dx)), dx.exports;
}
var px = { exports: {} }, i2;
function CT() {
  return i2 || (i2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return x.mode.CTRGladman = function() {
        var p = x.lib.BlockCipherMode.extend();
        function F(B) {
          if ((B >> 24 & 255) === 255) {
            var D = B >> 16 & 255, m = B >> 8 & 255, w = B & 255;
            D === 255 ? (D = 0, m === 255 ? (m = 0, w === 255 ? w = 0 : ++w) : ++m) : ++D, B = 0, B += D << 16, B += m << 8, B += w;
          } else
            B += 1 << 24;
          return B;
        }
        function A(B) {
          return (B[0] = F(B[0])) === 0 && (B[1] = F(B[1])), B;
        }
        var y = p.Encryptor = p.extend({
          processBlock: function(B, D) {
            var m = this._cipher, w = m.blockSize, z = this._iv, _ = this._counter;
            z && (_ = this._counter = z.slice(0), this._iv = void 0), A(_);
            var k = _.slice(0);
            m.encryptBlock(k, 0);
            for (var M = 0; M < w; M++)
              B[D + M] ^= k[M];
          }
        });
        return p.Decryptor = y, p;
      }(), x.mode.CTRGladman;
    });
  }(px)), px.exports;
}
var vx = { exports: {} }, o2;
function bT() {
  return o2 || (o2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.mode.OFB = function() {
        var p = x.lib.BlockCipherMode.extend(), F = p.Encryptor = p.extend({
          processBlock: function(A, y) {
            var B = this._cipher, D = B.blockSize, m = this._iv, w = this._keystream;
            m && (w = this._keystream = m.slice(0), this._iv = void 0), B.encryptBlock(w, 0);
            for (var z = 0; z < D; z++)
              A[y + z] ^= w[z];
          }
        });
        return p.Decryptor = F, p;
      }(), x.mode.OFB;
    });
  }(vx)), vx.exports;
}
var hx = { exports: {} }, u2;
function ST() {
  return u2 || (u2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.mode.ECB = function() {
        var p = x.lib.BlockCipherMode.extend();
        return p.Encryptor = p.extend({
          processBlock: function(F, A) {
            this._cipher.encryptBlock(F, A);
          }
        }), p.Decryptor = p.extend({
          processBlock: function(F, A) {
            this._cipher.decryptBlock(F, A);
          }
        }), p;
      }(), x.mode.ECB;
    });
  }(hx)), hx.exports;
}
var mx = { exports: {} }, l2;
function _T() {
  return l2 || (l2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.pad.AnsiX923 = {
        pad: function(p, F) {
          var A = p.sigBytes, y = F * 4, B = y - A % y, D = A + B - 1;
          p.clamp(), p.words[D >>> 2] |= B << 24 - D % 4 * 8, p.sigBytes += B;
        },
        unpad: function(p) {
          var F = p.words[p.sigBytes - 1 >>> 2] & 255;
          p.sigBytes -= F;
        }
      }, x.pad.Ansix923;
    });
  }(mx)), mx.exports;
}
var yx = { exports: {} }, s2;
function RT() {
  return s2 || (s2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.pad.Iso10126 = {
        pad: function(p, F) {
          var A = F * 4, y = A - p.sigBytes % A;
          p.concat(x.lib.WordArray.random(y - 1)).concat(x.lib.WordArray.create([y << 24], 1));
        },
        unpad: function(p) {
          var F = p.words[p.sigBytes - 1 >>> 2] & 255;
          p.sigBytes -= F;
        }
      }, x.pad.Iso10126;
    });
  }(yx)), yx.exports;
}
var xx = { exports: {} }, c2;
function TT() {
  return c2 || (c2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.pad.Iso97971 = {
        pad: function(p, F) {
          p.concat(x.lib.WordArray.create([2147483648], 1)), x.pad.ZeroPadding.pad(p, F);
        },
        unpad: function(p) {
          x.pad.ZeroPadding.unpad(p), p.sigBytes--;
        }
      }, x.pad.Iso97971;
    });
  }(xx)), xx.exports;
}
var gx = { exports: {} }, f2;
function wT() {
  return f2 || (f2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.pad.ZeroPadding = {
        pad: function(p, F) {
          var A = F * 4;
          p.clamp(), p.sigBytes += A - (p.sigBytes % A || A);
        },
        unpad: function(p) {
          for (var F = p.words, A = p.sigBytes - 1, A = p.sigBytes - 1; A >= 0; A--)
            if (F[A >>> 2] >>> 24 - A % 4 * 8 & 255) {
              p.sigBytes = A + 1;
              break;
            }
        }
      }, x.pad.ZeroPadding;
    });
  }(gx)), gx.exports;
}
var Ex = { exports: {} }, d2;
function DT() {
  return d2 || (d2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return x.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, x.pad.NoPadding;
    });
  }(Ex)), Ex.exports;
}
var Cx = { exports: {} }, p2;
function AT() {
  return p2 || (p2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), cr());
    })(At, function(x) {
      return function(p) {
        var F = x, A = F.lib, y = A.CipherParams, B = F.enc, D = B.Hex, m = F.format;
        m.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(w) {
            return w.ciphertext.toString(D);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(w) {
            var z = D.parse(w);
            return y.create({ ciphertext: z });
          }
        };
      }(), x.format.Hex;
    });
  }(Cx)), Cx.exports;
}
var bx = { exports: {} }, v2;
function kT() {
  return v2 || (v2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), us(), ls(), Hu(), cr());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.BlockCipher, y = p.algo, B = [], D = [], m = [], w = [], z = [], _ = [], k = [], M = [], j = [], O = [];
        (function() {
          for (var S = [], N = 0; N < 256; N++)
            N < 128 ? S[N] = N << 1 : S[N] = N << 1 ^ 283;
          for (var T = 0, V = 0, N = 0; N < 256; N++) {
            var Y = V ^ V << 1 ^ V << 2 ^ V << 3 ^ V << 4;
            Y = Y >>> 8 ^ Y & 255 ^ 99, B[T] = Y, D[Y] = T;
            var ne = S[T], re = S[ne], W = S[re], K = S[Y] * 257 ^ Y * 16843008;
            m[T] = K << 24 | K >>> 8, w[T] = K << 16 | K >>> 16, z[T] = K << 8 | K >>> 24, _[T] = K;
            var K = W * 16843009 ^ re * 65537 ^ ne * 257 ^ T * 16843008;
            k[Y] = K << 24 | K >>> 8, M[Y] = K << 16 | K >>> 16, j[Y] = K << 8 | K >>> 24, O[Y] = K, T ? (T = ne ^ S[S[S[W ^ ne]]], V ^= S[S[V]]) : T = V = 1;
          }
        })();
        var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], b = y.AES = A.extend({
          _doReset: function() {
            var S;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var N = this._keyPriorReset = this._key, T = N.words, V = N.sigBytes / 4, Y = this._nRounds = V + 6, ne = (Y + 1) * 4, re = this._keySchedule = [], W = 0; W < ne; W++)
                W < V ? re[W] = T[W] : (S = re[W - 1], W % V ? V > 6 && W % V == 4 && (S = B[S >>> 24] << 24 | B[S >>> 16 & 255] << 16 | B[S >>> 8 & 255] << 8 | B[S & 255]) : (S = S << 8 | S >>> 24, S = B[S >>> 24] << 24 | B[S >>> 16 & 255] << 16 | B[S >>> 8 & 255] << 8 | B[S & 255], S ^= H[W / V | 0] << 24), re[W] = re[W - V] ^ S);
              for (var K = this._invKeySchedule = [], le = 0; le < ne; le++) {
                var W = ne - le;
                if (le % 4)
                  var S = re[W];
                else
                  var S = re[W - 4];
                le < 4 || W <= 4 ? K[le] = S : K[le] = k[B[S >>> 24]] ^ M[B[S >>> 16 & 255]] ^ j[B[S >>> 8 & 255]] ^ O[B[S & 255]];
              }
            }
          },
          encryptBlock: function(S, N) {
            this._doCryptBlock(S, N, this._keySchedule, m, w, z, _, B);
          },
          decryptBlock: function(S, N) {
            var T = S[N + 1];
            S[N + 1] = S[N + 3], S[N + 3] = T, this._doCryptBlock(S, N, this._invKeySchedule, k, M, j, O, D);
            var T = S[N + 1];
            S[N + 1] = S[N + 3], S[N + 3] = T;
          },
          _doCryptBlock: function(S, N, T, V, Y, ne, re, W) {
            for (var K = this._nRounds, le = S[N] ^ T[0], ae = S[N + 1] ^ T[1], be = S[N + 2] ^ T[2], Re = S[N + 3] ^ T[3], Oe = 4, J = 1; J < K; J++) {
              var pe = V[le >>> 24] ^ Y[ae >>> 16 & 255] ^ ne[be >>> 8 & 255] ^ re[Re & 255] ^ T[Oe++], Be = V[ae >>> 24] ^ Y[be >>> 16 & 255] ^ ne[Re >>> 8 & 255] ^ re[le & 255] ^ T[Oe++], se = V[be >>> 24] ^ Y[Re >>> 16 & 255] ^ ne[le >>> 8 & 255] ^ re[ae & 255] ^ T[Oe++], P = V[Re >>> 24] ^ Y[le >>> 16 & 255] ^ ne[ae >>> 8 & 255] ^ re[be & 255] ^ T[Oe++];
              le = pe, ae = Be, be = se, Re = P;
            }
            var pe = (W[le >>> 24] << 24 | W[ae >>> 16 & 255] << 16 | W[be >>> 8 & 255] << 8 | W[Re & 255]) ^ T[Oe++], Be = (W[ae >>> 24] << 24 | W[be >>> 16 & 255] << 16 | W[Re >>> 8 & 255] << 8 | W[le & 255]) ^ T[Oe++], se = (W[be >>> 24] << 24 | W[Re >>> 16 & 255] << 16 | W[le >>> 8 & 255] << 8 | W[ae & 255]) ^ T[Oe++], P = (W[Re >>> 24] << 24 | W[le >>> 16 & 255] << 16 | W[ae >>> 8 & 255] << 8 | W[be & 255]) ^ T[Oe++];
            S[N] = pe, S[N + 1] = Be, S[N + 2] = se, S[N + 3] = P;
          },
          keySize: 256 / 32
        });
        p.AES = A._createHelper(b);
      }(), x.AES;
    });
  }(bx)), bx.exports;
}
var Sx = { exports: {} }, h2;
function BT() {
  return h2 || (h2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), us(), ls(), Hu(), cr());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.WordArray, y = F.BlockCipher, B = p.algo, D = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], m = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], w = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], z = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], _ = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], k = B.DES = y.extend({
          _doReset: function() {
            for (var H = this._key, b = H.words, S = [], N = 0; N < 56; N++) {
              var T = D[N] - 1;
              S[N] = b[T >>> 5] >>> 31 - T % 32 & 1;
            }
            for (var V = this._subKeys = [], Y = 0; Y < 16; Y++) {
              for (var ne = V[Y] = [], re = w[Y], N = 0; N < 24; N++)
                ne[N / 6 | 0] |= S[(m[N] - 1 + re) % 28] << 31 - N % 6, ne[4 + (N / 6 | 0)] |= S[28 + (m[N + 24] - 1 + re) % 28] << 31 - N % 6;
              ne[0] = ne[0] << 1 | ne[0] >>> 31;
              for (var N = 1; N < 7; N++)
                ne[N] = ne[N] >>> (N - 1) * 4 + 3;
              ne[7] = ne[7] << 5 | ne[7] >>> 27;
            }
            for (var W = this._invSubKeys = [], N = 0; N < 16; N++)
              W[N] = V[15 - N];
          },
          encryptBlock: function(H, b) {
            this._doCryptBlock(H, b, this._subKeys);
          },
          decryptBlock: function(H, b) {
            this._doCryptBlock(H, b, this._invSubKeys);
          },
          _doCryptBlock: function(H, b, S) {
            this._lBlock = H[b], this._rBlock = H[b + 1], M.call(this, 4, 252645135), M.call(this, 16, 65535), j.call(this, 2, 858993459), j.call(this, 8, 16711935), M.call(this, 1, 1431655765);
            for (var N = 0; N < 16; N++) {
              for (var T = S[N], V = this._lBlock, Y = this._rBlock, ne = 0, re = 0; re < 8; re++)
                ne |= z[re][((Y ^ T[re]) & _[re]) >>> 0];
              this._lBlock = Y, this._rBlock = V ^ ne;
            }
            var W = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = W, M.call(this, 1, 1431655765), j.call(this, 8, 16711935), j.call(this, 2, 858993459), M.call(this, 16, 65535), M.call(this, 4, 252645135), H[b] = this._lBlock, H[b + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function M(H, b) {
          var S = (this._lBlock >>> H ^ this._rBlock) & b;
          this._rBlock ^= S, this._lBlock ^= S << H;
        }
        function j(H, b) {
          var S = (this._rBlock >>> H ^ this._lBlock) & b;
          this._lBlock ^= S, this._rBlock ^= S << H;
        }
        p.DES = y._createHelper(k);
        var O = B.TripleDES = y.extend({
          _doReset: function() {
            var H = this._key, b = H.words;
            if (b.length !== 2 && b.length !== 4 && b.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var S = b.slice(0, 2), N = b.length < 4 ? b.slice(0, 2) : b.slice(2, 4), T = b.length < 6 ? b.slice(0, 2) : b.slice(4, 6);
            this._des1 = k.createEncryptor(A.create(S)), this._des2 = k.createEncryptor(A.create(N)), this._des3 = k.createEncryptor(A.create(T));
          },
          encryptBlock: function(H, b) {
            this._des1.encryptBlock(H, b), this._des2.decryptBlock(H, b), this._des3.encryptBlock(H, b);
          },
          decryptBlock: function(H, b) {
            this._des3.decryptBlock(H, b), this._des2.encryptBlock(H, b), this._des1.decryptBlock(H, b);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        p.TripleDES = y._createHelper(O);
      }(), x.TripleDES;
    });
  }(Sx)), Sx.exports;
}
var _x = { exports: {} }, m2;
function FT() {
  return m2 || (m2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), us(), ls(), Hu(), cr());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.StreamCipher, y = p.algo, B = y.RC4 = A.extend({
          _doReset: function() {
            for (var w = this._key, z = w.words, _ = w.sigBytes, k = this._S = [], M = 0; M < 256; M++)
              k[M] = M;
            for (var M = 0, j = 0; M < 256; M++) {
              var O = M % _, H = z[O >>> 2] >>> 24 - O % 4 * 8 & 255;
              j = (j + k[M] + H) % 256;
              var b = k[M];
              k[M] = k[j], k[j] = b;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(w, z) {
            w[z] ^= D.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function D() {
          for (var w = this._S, z = this._i, _ = this._j, k = 0, M = 0; M < 4; M++) {
            z = (z + 1) % 256, _ = (_ + w[z]) % 256;
            var j = w[z];
            w[z] = w[_], w[_] = j, k |= w[(w[z] + w[_]) % 256] << 24 - M * 8;
          }
          return this._i = z, this._j = _, k;
        }
        p.RC4 = A._createHelper(B);
        var m = y.RC4Drop = B.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: B.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            B._doReset.call(this);
            for (var w = this.cfg.drop; w > 0; w--)
              D.call(this);
          }
        });
        p.RC4Drop = A._createHelper(m);
      }(), x.RC4;
    });
  }(_x)), _x.exports;
}
var Rx = { exports: {} }, y2;
function OT() {
  return y2 || (y2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), us(), ls(), Hu(), cr());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.StreamCipher, y = p.algo, B = [], D = [], m = [], w = y.Rabbit = A.extend({
          _doReset: function() {
            for (var _ = this._key.words, k = this.cfg.iv, M = 0; M < 4; M++)
              _[M] = (_[M] << 8 | _[M] >>> 24) & 16711935 | (_[M] << 24 | _[M] >>> 8) & 4278255360;
            var j = this._X = [
              _[0],
              _[3] << 16 | _[2] >>> 16,
              _[1],
              _[0] << 16 | _[3] >>> 16,
              _[2],
              _[1] << 16 | _[0] >>> 16,
              _[3],
              _[2] << 16 | _[1] >>> 16
            ], O = this._C = [
              _[2] << 16 | _[2] >>> 16,
              _[0] & 4294901760 | _[1] & 65535,
              _[3] << 16 | _[3] >>> 16,
              _[1] & 4294901760 | _[2] & 65535,
              _[0] << 16 | _[0] >>> 16,
              _[2] & 4294901760 | _[3] & 65535,
              _[1] << 16 | _[1] >>> 16,
              _[3] & 4294901760 | _[0] & 65535
            ];
            this._b = 0;
            for (var M = 0; M < 4; M++)
              z.call(this);
            for (var M = 0; M < 8; M++)
              O[M] ^= j[M + 4 & 7];
            if (k) {
              var H = k.words, b = H[0], S = H[1], N = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, T = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, V = N >>> 16 | T & 4294901760, Y = T << 16 | N & 65535;
              O[0] ^= N, O[1] ^= V, O[2] ^= T, O[3] ^= Y, O[4] ^= N, O[5] ^= V, O[6] ^= T, O[7] ^= Y;
              for (var M = 0; M < 4; M++)
                z.call(this);
            }
          },
          _doProcessBlock: function(_, k) {
            var M = this._X;
            z.call(this), B[0] = M[0] ^ M[5] >>> 16 ^ M[3] << 16, B[1] = M[2] ^ M[7] >>> 16 ^ M[5] << 16, B[2] = M[4] ^ M[1] >>> 16 ^ M[7] << 16, B[3] = M[6] ^ M[3] >>> 16 ^ M[1] << 16;
            for (var j = 0; j < 4; j++)
              B[j] = (B[j] << 8 | B[j] >>> 24) & 16711935 | (B[j] << 24 | B[j] >>> 8) & 4278255360, _[k + j] ^= B[j];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function z() {
          for (var _ = this._X, k = this._C, M = 0; M < 8; M++)
            D[M] = k[M];
          k[0] = k[0] + 1295307597 + this._b | 0, k[1] = k[1] + 3545052371 + (k[0] >>> 0 < D[0] >>> 0 ? 1 : 0) | 0, k[2] = k[2] + 886263092 + (k[1] >>> 0 < D[1] >>> 0 ? 1 : 0) | 0, k[3] = k[3] + 1295307597 + (k[2] >>> 0 < D[2] >>> 0 ? 1 : 0) | 0, k[4] = k[4] + 3545052371 + (k[3] >>> 0 < D[3] >>> 0 ? 1 : 0) | 0, k[5] = k[5] + 886263092 + (k[4] >>> 0 < D[4] >>> 0 ? 1 : 0) | 0, k[6] = k[6] + 1295307597 + (k[5] >>> 0 < D[5] >>> 0 ? 1 : 0) | 0, k[7] = k[7] + 3545052371 + (k[6] >>> 0 < D[6] >>> 0 ? 1 : 0) | 0, this._b = k[7] >>> 0 < D[7] >>> 0 ? 1 : 0;
          for (var M = 0; M < 8; M++) {
            var j = _[M] + k[M], O = j & 65535, H = j >>> 16, b = ((O * O >>> 17) + O * H >>> 15) + H * H, S = ((j & 4294901760) * j | 0) + ((j & 65535) * j | 0);
            m[M] = b ^ S;
          }
          _[0] = m[0] + (m[7] << 16 | m[7] >>> 16) + (m[6] << 16 | m[6] >>> 16) | 0, _[1] = m[1] + (m[0] << 8 | m[0] >>> 24) + m[7] | 0, _[2] = m[2] + (m[1] << 16 | m[1] >>> 16) + (m[0] << 16 | m[0] >>> 16) | 0, _[3] = m[3] + (m[2] << 8 | m[2] >>> 24) + m[1] | 0, _[4] = m[4] + (m[3] << 16 | m[3] >>> 16) + (m[2] << 16 | m[2] >>> 16) | 0, _[5] = m[5] + (m[4] << 8 | m[4] >>> 24) + m[3] | 0, _[6] = m[6] + (m[5] << 16 | m[5] >>> 16) + (m[4] << 16 | m[4] >>> 16) | 0, _[7] = m[7] + (m[6] << 8 | m[6] >>> 24) + m[5] | 0;
        }
        p.Rabbit = A._createHelper(w);
      }(), x.Rabbit;
    });
  }(Rx)), Rx.exports;
}
var Tx = { exports: {} }, x2;
function NT() {
  return x2 || (x2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), us(), ls(), Hu(), cr());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.StreamCipher, y = p.algo, B = [], D = [], m = [], w = y.RabbitLegacy = A.extend({
          _doReset: function() {
            var _ = this._key.words, k = this.cfg.iv, M = this._X = [
              _[0],
              _[3] << 16 | _[2] >>> 16,
              _[1],
              _[0] << 16 | _[3] >>> 16,
              _[2],
              _[1] << 16 | _[0] >>> 16,
              _[3],
              _[2] << 16 | _[1] >>> 16
            ], j = this._C = [
              _[2] << 16 | _[2] >>> 16,
              _[0] & 4294901760 | _[1] & 65535,
              _[3] << 16 | _[3] >>> 16,
              _[1] & 4294901760 | _[2] & 65535,
              _[0] << 16 | _[0] >>> 16,
              _[2] & 4294901760 | _[3] & 65535,
              _[1] << 16 | _[1] >>> 16,
              _[3] & 4294901760 | _[0] & 65535
            ];
            this._b = 0;
            for (var O = 0; O < 4; O++)
              z.call(this);
            for (var O = 0; O < 8; O++)
              j[O] ^= M[O + 4 & 7];
            if (k) {
              var H = k.words, b = H[0], S = H[1], N = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, T = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, V = N >>> 16 | T & 4294901760, Y = T << 16 | N & 65535;
              j[0] ^= N, j[1] ^= V, j[2] ^= T, j[3] ^= Y, j[4] ^= N, j[5] ^= V, j[6] ^= T, j[7] ^= Y;
              for (var O = 0; O < 4; O++)
                z.call(this);
            }
          },
          _doProcessBlock: function(_, k) {
            var M = this._X;
            z.call(this), B[0] = M[0] ^ M[5] >>> 16 ^ M[3] << 16, B[1] = M[2] ^ M[7] >>> 16 ^ M[5] << 16, B[2] = M[4] ^ M[1] >>> 16 ^ M[7] << 16, B[3] = M[6] ^ M[3] >>> 16 ^ M[1] << 16;
            for (var j = 0; j < 4; j++)
              B[j] = (B[j] << 8 | B[j] >>> 24) & 16711935 | (B[j] << 24 | B[j] >>> 8) & 4278255360, _[k + j] ^= B[j];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function z() {
          for (var _ = this._X, k = this._C, M = 0; M < 8; M++)
            D[M] = k[M];
          k[0] = k[0] + 1295307597 + this._b | 0, k[1] = k[1] + 3545052371 + (k[0] >>> 0 < D[0] >>> 0 ? 1 : 0) | 0, k[2] = k[2] + 886263092 + (k[1] >>> 0 < D[1] >>> 0 ? 1 : 0) | 0, k[3] = k[3] + 1295307597 + (k[2] >>> 0 < D[2] >>> 0 ? 1 : 0) | 0, k[4] = k[4] + 3545052371 + (k[3] >>> 0 < D[3] >>> 0 ? 1 : 0) | 0, k[5] = k[5] + 886263092 + (k[4] >>> 0 < D[4] >>> 0 ? 1 : 0) | 0, k[6] = k[6] + 1295307597 + (k[5] >>> 0 < D[5] >>> 0 ? 1 : 0) | 0, k[7] = k[7] + 3545052371 + (k[6] >>> 0 < D[6] >>> 0 ? 1 : 0) | 0, this._b = k[7] >>> 0 < D[7] >>> 0 ? 1 : 0;
          for (var M = 0; M < 8; M++) {
            var j = _[M] + k[M], O = j & 65535, H = j >>> 16, b = ((O * O >>> 17) + O * H >>> 15) + H * H, S = ((j & 4294901760) * j | 0) + ((j & 65535) * j | 0);
            m[M] = b ^ S;
          }
          _[0] = m[0] + (m[7] << 16 | m[7] >>> 16) + (m[6] << 16 | m[6] >>> 16) | 0, _[1] = m[1] + (m[0] << 8 | m[0] >>> 24) + m[7] | 0, _[2] = m[2] + (m[1] << 16 | m[1] >>> 16) + (m[0] << 16 | m[0] >>> 16) | 0, _[3] = m[3] + (m[2] << 8 | m[2] >>> 24) + m[1] | 0, _[4] = m[4] + (m[3] << 16 | m[3] >>> 16) + (m[2] << 16 | m[2] >>> 16) | 0, _[5] = m[5] + (m[4] << 8 | m[4] >>> 24) + m[3] | 0, _[6] = m[6] + (m[5] << 16 | m[5] >>> 16) + (m[4] << 16 | m[4] >>> 16) | 0, _[7] = m[7] + (m[6] << 8 | m[6] >>> 24) + m[5] | 0;
        }
        p.RabbitLegacy = A._createHelper(w);
      }(), x.RabbitLegacy;
    });
  }(Tx)), Tx.exports;
}
var wx = { exports: {} }, g2;
function MT() {
  return g2 || (g2 = 1, function(c, g) {
    (function(x, p, F) {
      c.exports = p(Nt(), us(), ls(), Hu(), cr());
    })(At, function(x) {
      return function() {
        var p = x, F = p.lib, A = F.BlockCipher, y = p.algo;
        const B = 16, D = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], m = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var w = {
          pbox: [],
          sbox: []
        };
        function z(O, H) {
          let b = H >> 24 & 255, S = H >> 16 & 255, N = H >> 8 & 255, T = H & 255, V = O.sbox[0][b] + O.sbox[1][S];
          return V = V ^ O.sbox[2][N], V = V + O.sbox[3][T], V;
        }
        function _(O, H, b) {
          let S = H, N = b, T;
          for (let V = 0; V < B; ++V)
            S = S ^ O.pbox[V], N = z(O, S) ^ N, T = S, S = N, N = T;
          return T = S, S = N, N = T, N = N ^ O.pbox[B], S = S ^ O.pbox[B + 1], { left: S, right: N };
        }
        function k(O, H, b) {
          let S = H, N = b, T;
          for (let V = B + 1; V > 1; --V)
            S = S ^ O.pbox[V], N = z(O, S) ^ N, T = S, S = N, N = T;
          return T = S, S = N, N = T, N = N ^ O.pbox[1], S = S ^ O.pbox[0], { left: S, right: N };
        }
        function M(O, H, b) {
          for (let Y = 0; Y < 4; Y++) {
            O.sbox[Y] = [];
            for (let ne = 0; ne < 256; ne++)
              O.sbox[Y][ne] = m[Y][ne];
          }
          let S = 0;
          for (let Y = 0; Y < B + 2; Y++)
            O.pbox[Y] = D[Y] ^ H[S], S++, S >= b && (S = 0);
          let N = 0, T = 0, V = 0;
          for (let Y = 0; Y < B + 2; Y += 2)
            V = _(O, N, T), N = V.left, T = V.right, O.pbox[Y] = N, O.pbox[Y + 1] = T;
          for (let Y = 0; Y < 4; Y++)
            for (let ne = 0; ne < 256; ne += 2)
              V = _(O, N, T), N = V.left, T = V.right, O.sbox[Y][ne] = N, O.sbox[Y][ne + 1] = T;
          return !0;
        }
        var j = y.Blowfish = A.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var O = this._keyPriorReset = this._key, H = O.words, b = O.sigBytes / 4;
              M(w, H, b);
            }
          },
          encryptBlock: function(O, H) {
            var b = _(w, O[H], O[H + 1]);
            O[H] = b.left, O[H + 1] = b.right;
          },
          decryptBlock: function(O, H) {
            var b = k(w, O[H], O[H + 1]);
            O[H] = b.left, O[H + 1] = b.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        p.Blowfish = A._createHelper(j);
      }(), x.Blowfish;
    });
  }(wx)), wx.exports;
}
(function(c, g) {
  (function(x, p, F) {
    c.exports = p(Nt(), Av(), fT(), dT(), us(), pT(), ls(), j2(), $x(), vT(), H2(), hT(), mT(), yT(), qx(), xT(), Hu(), cr(), gT(), ET(), CT(), bT(), ST(), _T(), RT(), TT(), wT(), DT(), AT(), kT(), BT(), FT(), OT(), NT(), MT());
  })(At, function(x) {
    return x;
  });
})(U2);
var zT = U2.exports;
const Ix = /* @__PURE__ */ D0(zT), I2 = "icp-dai-chatbot";
function PT(c) {
  if (c)
    return Ix.AES.encrypt(JSON.stringify(c), I2).toString();
}
function LT(c) {
  if (c)
    return Ix.AES.decrypt(c, I2).toString(Ix.enc.Utf8);
}
const V2 = () => {
  const [c, g] = Ne.useState(""), [x, p] = Ne.useState([]), [F, A] = Ne.useState(), [y, B] = Ne.useState(!1), D = () => LT(localStorage.getItem("icp-dai-open-ai")), m = Ne.useCallback(async (j) => {
    var H;
    const O = "https://api.openai.com/v1/chat/completions";
    B(!0);
    try {
      await LC(j.at(-1));
      const b = await fetch(O, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ((H = D()) == null ? void 0 : H.split('"')[1])
        },
        body: JSON.stringify({
          messages: j.map((V) => ({
            content: V.content,
            role: V.role
          })),
          model: "gpt-3.5-turbo",
          temperature: 1
        })
      }), S = await b.json();
      if (b.status !== 200) {
        const V = S.error.message;
        throw Ya.error(V), new Error(V);
      }
      const N = S.choices[0].message.content, T = {
        content: N,
        role: "assistant"
      };
      p((V) => [...V, T]), await LC(T), g(N), A(null), B(!1);
    } catch (b) {
      B(!1), A(b);
    }
  }, []), w = Ne.useCallback(async (j) => {
    try {
      const O = await L2(j);
      p(O.conversation);
    } catch (O) {
      Ya.error("Failed to create conversation."), A(O);
    }
  }, []), z = Ne.useCallback(async (j, O, H) => {
    try {
      await nT(j, O, H), Ya.success("Tag added successfully.");
    } catch (b) {
      Ya.error("Failed to add tag."), A(b);
    }
  }, []), _ = Ne.useCallback(async (j, O, H) => {
    try {
      await rT(j, O, H), Ya.success(`Message marked as ${H ? "read" : "unread"}.`);
    } catch (b) {
      Ya.error("Failed to mark message."), A(b);
    }
  }, []), k = Ne.useCallback(async (j) => {
    try {
      const O = await aT(j);
      g(O);
    } catch (O) {
      Ya.error("Failed to generate summary."), A(O);
    }
  }, []), M = Ne.useCallback(async (j, O) => {
    try {
      const H = await iT(j, O);
      p(H);
    } catch (H) {
      Ya.error("Failed to search messages."), A(H);
    }
  }, []);
  return {
    data: c,
    error: F,
    loading: y,
    chatCompletion: m,
    createNewConversation: w,
    addTagToMessage: z,
    markMessageAsReadUnread: _,
    fetchSummary: k,
    searchInMessages: M,
    setData: g,
    chatMessages: x,
    setChatMessages: p
  };
};
function UT() {
  return /* @__PURE__ */ ut.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "text-slate-500 animate-spin",
      children: [
        /* @__PURE__ */ ut.jsx("line", { x1: 12, y1: 2, x2: 12, y2: 6 }),
        /* @__PURE__ */ ut.jsx("line", { x1: 12, y1: 18, x2: 12, y2: 22 }),
        /* @__PURE__ */ ut.jsx("line", { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }),
        /* @__PURE__ */ ut.jsx("line", { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }),
        /* @__PURE__ */ ut.jsx("line", { x1: 2, y1: 12, x2: 6, y2: 12 }),
        /* @__PURE__ */ ut.jsx("line", { x1: 18, y1: 12, x2: 22, y2: 12 }),
        /* @__PURE__ */ ut.jsx("line", { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }),
        /* @__PURE__ */ ut.jsx("line", { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" })
      ]
    }
  );
}
const jT = BigInt(7 * 24 * 60 * 60 * 1e3 * 1e3 * 1e3), HT = "https://identity.raw.ic0.app/";
async function IT() {
  return await Q_.create();
}
async function VT() {
  const c = window.auth.client;
  await c.isAuthenticated() || await (c == null ? void 0 : c.login({
    maxTimeToLive: jT,
    identityProvider: HT,
    onSuccess: async () => {
      var p;
      window.auth.isAuthenticated = await c.isAuthenticated();
      const x = await L2(
        await ((p = c.getIdentity()) == null ? void 0 : p.getPrincipal().toText())
      );
      localStorage.setItem("conversation", JSON.stringify(x)), window.location.reload();
    }
  }));
}
async function WT() {
  const c = window.auth.client;
  localStorage.removeItem("conversation"), c.logout(), window.location.reload();
}
const $T = ({ value: c, onChange: g, placeholder: x }) => /* @__PURE__ */ ut.jsx(
  "input",
  {
    type: "text",
    value: c,
    onChange: g,
    className: "text-input",
    placeholder: x
  }
);
function qT() {
  const [c, g] = Ne.useState(""), [x, p] = Ne.useState(""), {
    loading: F,
    chatCompletion: A,
    chatMessages: y,
    setChatMessages: B,
    addTagToMessage: D,
    markMessageAsReadUnread: m,
    fetchSummary: w
  } = V2(), z = async () => {
    if (window.auth.principalText && window.auth.isAuthenticated) {
      const b = await oT(window.auth.principalText);
      b && B(b.conversation);
    }
  }, _ = async (b) => {
    if (b.preventDefault(), !window.auth.isAuthenticated) {
      Ya.error("You are not authenticated");
      return;
    }
    if (!localStorage.getItem("icp-dai-open-ai")) {
      Ya.error("No OpenAI key found");
      return;
    }
    if (c) {
      const N = [...y, { content: c, role: "user" }];
      B(N), await A(N), g("");
    }
  };
  Ne.useEffect(() => {
    z();
  }, []);
  const k = (b) => {
    b.target.value.match(/^sk-[a-zA-Z0-9]{32,}$/) ? p(b.target.value) : p("");
  }, M = () => {
    if (!x)
      return Ya.error("Invalid OpenAI key");
    const b = PT(x);
    localStorage.setItem("icp-dai-open-ai", b), Ya.success("OpenAI key successfully saved and encrypted"), p("");
  }, j = (b, S) => {
    D(window.auth.principalText, b, S);
  }, O = (b, S) => {
    m(window.auth.principalText, b, S);
  }, H = async () => {
    await w(window.auth.principalText);
  };
  return /* @__PURE__ */ ut.jsxs("div", { className: "wrapper", children: [
    /* @__PURE__ */ ut.jsxs("div", { className: "wrapper-header", children: [
      /* @__PURE__ */ ut.jsx("h1", { children: "Dai" }),
      /* @__PURE__ */ ut.jsx(
        "button",
        {
          className: "auth-button auth-button__hover",
          onClick: () => window.auth.isAuthenticated ? WT() : VT(),
          children: window.auth.isAuthenticated ? "Log out" : "Login"
        }
      )
    ] }),
    /* @__PURE__ */ ut.jsxs("div", { style: { display: "flex", gap: 10 }, children: [
      /* @__PURE__ */ ut.jsx(
        $T,
        {
          onChange: k,
          placeholder: "Pass your OpenAI API key here..."
        }
      ),
      /* @__PURE__ */ ut.jsx(
        "button",
        {
          className: "auth-button auth-button__hover",
          onClick: M,
          children: "Save"
        }
      )
    ] }),
    /* @__PURE__ */ ut.jsx("div", { className: "container", children: /* @__PURE__ */ ut.jsxs("div", { className: "right", children: [
      /* @__PURE__ */ ut.jsxs("div", { className: "chat active-chat", children: [
        /* @__PURE__ */ ut.jsx("div", { className: "conversation-start" }),
        y.map((b, S) => /* @__PURE__ */ ut.jsxs(
          "div",
          {
            className: `bubble ${b.role === "user" ? "me" : "assistant"} ${y.length - 1 === S && !F ? "last-message" : ""}
                `,
            children: [
              b.content,
              /* @__PURE__ */ ut.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ ut.jsx("button", { onClick: () => j(b.id, "important"), children: "Tag as Important" }),
                /* @__PURE__ */ ut.jsxs("button", { onClick: () => O(b.id, !b.read), children: [
                  "Mark as ",
                  b.read ? "Unread" : "Read"
                ] })
              ] })
            ]
          },
          S
        )),
        F && /* @__PURE__ */ ut.jsx("div", { className: "bubble assistant", children: /* @__PURE__ */ ut.jsx(UT, {}) })
      ] }),
      /* @__PURE__ */ ut.jsxs("div", { className: "write", children: [
        /* @__PURE__ */ ut.jsx(
          "input",
          {
            placeholder: "Ask me...",
            type: "text",
            value: c,
            onChange: (b) => g(b.target.value),
            onKeyDown: (b) => b.key === "Enter" ? _(b) : null
          }
        ),
        !F && /* @__PURE__ */ ut.jsx(
          "a",
          {
            onClick: (b) => {
              _(b);
            },
            className: "write-link send"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ ut.jsx("div", { className: "summary-button", children: /* @__PURE__ */ ut.jsx("button", { onClick: H, children: "Generate Summary" }) })
  ] });
}
var Vx = { exports: {} }, Ev = { exports: {} }, Kt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E2;
function YT() {
  if (E2)
    return Kt;
  E2 = 1;
  var c = typeof Symbol == "function" && Symbol.for, g = c ? Symbol.for("react.element") : 60103, x = c ? Symbol.for("react.portal") : 60106, p = c ? Symbol.for("react.fragment") : 60107, F = c ? Symbol.for("react.strict_mode") : 60108, A = c ? Symbol.for("react.profiler") : 60114, y = c ? Symbol.for("react.provider") : 60109, B = c ? Symbol.for("react.context") : 60110, D = c ? Symbol.for("react.async_mode") : 60111, m = c ? Symbol.for("react.concurrent_mode") : 60111, w = c ? Symbol.for("react.forward_ref") : 60112, z = c ? Symbol.for("react.suspense") : 60113, _ = c ? Symbol.for("react.suspense_list") : 60120, k = c ? Symbol.for("react.memo") : 60115, M = c ? Symbol.for("react.lazy") : 60116, j = c ? Symbol.for("react.block") : 60121, O = c ? Symbol.for("react.fundamental") : 60117, H = c ? Symbol.for("react.responder") : 60118, b = c ? Symbol.for("react.scope") : 60119;
  function S(T) {
    if (typeof T == "object" && T !== null) {
      var V = T.$$typeof;
      switch (V) {
        case g:
          switch (T = T.type, T) {
            case D:
            case m:
            case p:
            case A:
            case F:
            case z:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case B:
                case w:
                case M:
                case k:
                case y:
                  return T;
                default:
                  return V;
              }
          }
        case x:
          return V;
      }
    }
  }
  function N(T) {
    return S(T) === m;
  }
  return Kt.AsyncMode = D, Kt.ConcurrentMode = m, Kt.ContextConsumer = B, Kt.ContextProvider = y, Kt.Element = g, Kt.ForwardRef = w, Kt.Fragment = p, Kt.Lazy = M, Kt.Memo = k, Kt.Portal = x, Kt.Profiler = A, Kt.StrictMode = F, Kt.Suspense = z, Kt.isAsyncMode = function(T) {
    return N(T) || S(T) === D;
  }, Kt.isConcurrentMode = N, Kt.isContextConsumer = function(T) {
    return S(T) === B;
  }, Kt.isContextProvider = function(T) {
    return S(T) === y;
  }, Kt.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === g;
  }, Kt.isForwardRef = function(T) {
    return S(T) === w;
  }, Kt.isFragment = function(T) {
    return S(T) === p;
  }, Kt.isLazy = function(T) {
    return S(T) === M;
  }, Kt.isMemo = function(T) {
    return S(T) === k;
  }, Kt.isPortal = function(T) {
    return S(T) === x;
  }, Kt.isProfiler = function(T) {
    return S(T) === A;
  }, Kt.isStrictMode = function(T) {
    return S(T) === F;
  }, Kt.isSuspense = function(T) {
    return S(T) === z;
  }, Kt.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === p || T === m || T === A || T === F || T === z || T === _ || typeof T == "object" && T !== null && (T.$$typeof === M || T.$$typeof === k || T.$$typeof === y || T.$$typeof === B || T.$$typeof === w || T.$$typeof === O || T.$$typeof === H || T.$$typeof === b || T.$$typeof === j);
  }, Kt.typeOf = S, Kt;
}
var Zt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C2;
function QT() {
  return C2 || (C2 = 1, process.env.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, g = c ? Symbol.for("react.element") : 60103, x = c ? Symbol.for("react.portal") : 60106, p = c ? Symbol.for("react.fragment") : 60107, F = c ? Symbol.for("react.strict_mode") : 60108, A = c ? Symbol.for("react.profiler") : 60114, y = c ? Symbol.for("react.provider") : 60109, B = c ? Symbol.for("react.context") : 60110, D = c ? Symbol.for("react.async_mode") : 60111, m = c ? Symbol.for("react.concurrent_mode") : 60111, w = c ? Symbol.for("react.forward_ref") : 60112, z = c ? Symbol.for("react.suspense") : 60113, _ = c ? Symbol.for("react.suspense_list") : 60120, k = c ? Symbol.for("react.memo") : 60115, M = c ? Symbol.for("react.lazy") : 60116, j = c ? Symbol.for("react.block") : 60121, O = c ? Symbol.for("react.fundamental") : 60117, H = c ? Symbol.for("react.responder") : 60118, b = c ? Symbol.for("react.scope") : 60119;
    function S(Te) {
      return typeof Te == "string" || typeof Te == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Te === p || Te === m || Te === A || Te === F || Te === z || Te === _ || typeof Te == "object" && Te !== null && (Te.$$typeof === M || Te.$$typeof === k || Te.$$typeof === y || Te.$$typeof === B || Te.$$typeof === w || Te.$$typeof === O || Te.$$typeof === H || Te.$$typeof === b || Te.$$typeof === j);
    }
    function N(Te) {
      if (typeof Te == "object" && Te !== null) {
        var wt = Te.$$typeof;
        switch (wt) {
          case g:
            var kt = Te.type;
            switch (kt) {
              case D:
              case m:
              case p:
              case A:
              case F:
              case z:
                return kt;
              default:
                var Ht = kt && kt.$$typeof;
                switch (Ht) {
                  case B:
                  case w:
                  case M:
                  case k:
                  case y:
                    return Ht;
                  default:
                    return wt;
                }
            }
          case x:
            return wt;
        }
      }
    }
    var T = D, V = m, Y = B, ne = y, re = g, W = w, K = p, le = M, ae = k, be = x, Re = A, Oe = F, J = z, pe = !1;
    function Be(Te) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), se(Te) || N(Te) === D;
    }
    function se(Te) {
      return N(Te) === m;
    }
    function P(Te) {
      return N(Te) === B;
    }
    function q(Te) {
      return N(Te) === y;
    }
    function $(Te) {
      return typeof Te == "object" && Te !== null && Te.$$typeof === g;
    }
    function Z(Te) {
      return N(Te) === w;
    }
    function me(Te) {
      return N(Te) === p;
    }
    function Se(Te) {
      return N(Te) === M;
    }
    function Ue(Te) {
      return N(Te) === k;
    }
    function De(Te) {
      return N(Te) === x;
    }
    function Ie(Te) {
      return N(Te) === A;
    }
    function Ke(Te) {
      return N(Te) === F;
    }
    function dt(Te) {
      return N(Te) === z;
    }
    Zt.AsyncMode = T, Zt.ConcurrentMode = V, Zt.ContextConsumer = Y, Zt.ContextProvider = ne, Zt.Element = re, Zt.ForwardRef = W, Zt.Fragment = K, Zt.Lazy = le, Zt.Memo = ae, Zt.Portal = be, Zt.Profiler = Re, Zt.StrictMode = Oe, Zt.Suspense = J, Zt.isAsyncMode = Be, Zt.isConcurrentMode = se, Zt.isContextConsumer = P, Zt.isContextProvider = q, Zt.isElement = $, Zt.isForwardRef = Z, Zt.isFragment = me, Zt.isLazy = Se, Zt.isMemo = Ue, Zt.isPortal = De, Zt.isProfiler = Ie, Zt.isStrictMode = Ke, Zt.isSuspense = dt, Zt.isValidElementType = S, Zt.typeOf = N;
  }()), Zt;
}
var b2;
function W2() {
  return b2 || (b2 = 1, process.env.NODE_ENV === "production" ? Ev.exports = YT() : Ev.exports = QT()), Ev.exports;
}
var Dx, S2;
function Yx() {
  if (S2)
    return Dx;
  S2 = 1;
  var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Dx = c, Dx;
}
var Ax, _2;
function $2() {
  return _2 || (_2 = 1, Ax = Function.call.bind(Object.prototype.hasOwnProperty)), Ax;
}
var kx, R2;
function GT() {
  if (R2)
    return kx;
  R2 = 1;
  var c = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var g = Yx(), x = {}, p = $2();
    c = function(A) {
      var y = "Warning: " + A;
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
  }
  function F(A, y, B, D, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in A)
        if (p(A, w)) {
          var z;
          try {
            if (typeof A[w] != "function") {
              var _ = Error(
                (D || "React class") + ": " + B + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw _.name = "Invariant Violation", _;
            }
            z = A[w](y, w, D, B, null, g);
          } catch (M) {
            z = M;
          }
          if (z && !(z instanceof Error) && c(
            (D || "React class") + ": type specification of " + B + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof z + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), z instanceof Error && !(z.message in x)) {
            x[z.message] = !0;
            var k = m ? m() : "";
            c(
              "Failed " + B + " type: " + z.message + (k ?? "")
            );
          }
        }
    }
  }
  return F.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (x = {});
  }, kx = F, kx;
}
var Bx, T2;
function XT() {
  if (T2)
    return Bx;
  T2 = 1;
  var c = W2(), g = rs(), x = Yx(), p = $2(), F = GT(), A = function() {
  };
  process.env.NODE_ENV !== "production" && (A = function(B) {
    var D = "Warning: " + B;
    typeof console < "u" && console.error(D);
    try {
      throw new Error(D);
    } catch {
    }
  });
  function y() {
    return null;
  }
  return Bx = function(B, D) {
    var m = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function z(se) {
      var P = se && (m && se[m] || se[w]);
      if (typeof P == "function")
        return P;
    }
    var _ = "<<anonymous>>", k = {
      array: H("array"),
      bigint: H("bigint"),
      bool: H("boolean"),
      func: H("function"),
      number: H("number"),
      object: H("object"),
      string: H("string"),
      symbol: H("symbol"),
      any: b(),
      arrayOf: S,
      element: N(),
      elementType: T(),
      instanceOf: V,
      node: W(),
      objectOf: ne,
      oneOf: Y,
      oneOfType: re,
      shape: le,
      exact: ae
    };
    function M(se, P) {
      return se === P ? se !== 0 || 1 / se === 1 / P : se !== se && P !== P;
    }
    function j(se, P) {
      this.message = se, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    j.prototype = Error.prototype;
    function O(se) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, q = 0;
      function $(me, Se, Ue, De, Ie, Ke, dt) {
        if (De = De || _, Ke = Ke || Ue, dt !== x) {
          if (D) {
            var Te = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Te.name = "Invariant Violation", Te;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var wt = De + ":" + Ue;
            !P[wt] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (A(
              "You are manually calling a React.PropTypes validation function for the `" + Ke + "` prop on `" + De + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[wt] = !0, q++);
          }
        }
        return Se[Ue] == null ? me ? Se[Ue] === null ? new j("The " + Ie + " `" + Ke + "` is marked as required " + ("in `" + De + "`, but its value is `null`.")) : new j("The " + Ie + " `" + Ke + "` is marked as required in " + ("`" + De + "`, but its value is `undefined`.")) : null : se(Se, Ue, De, Ie, Ke);
      }
      var Z = $.bind(null, !1);
      return Z.isRequired = $.bind(null, !0), Z;
    }
    function H(se) {
      function P(q, $, Z, me, Se, Ue) {
        var De = q[$], Ie = Oe(De);
        if (Ie !== se) {
          var Ke = J(De);
          return new j(
            "Invalid " + me + " `" + Se + "` of type " + ("`" + Ke + "` supplied to `" + Z + "`, expected ") + ("`" + se + "`."),
            { expectedType: se }
          );
        }
        return null;
      }
      return O(P);
    }
    function b() {
      return O(y);
    }
    function S(se) {
      function P(q, $, Z, me, Se) {
        if (typeof se != "function")
          return new j("Property `" + Se + "` of component `" + Z + "` has invalid PropType notation inside arrayOf.");
        var Ue = q[$];
        if (!Array.isArray(Ue)) {
          var De = Oe(Ue);
          return new j("Invalid " + me + " `" + Se + "` of type " + ("`" + De + "` supplied to `" + Z + "`, expected an array."));
        }
        for (var Ie = 0; Ie < Ue.length; Ie++) {
          var Ke = se(Ue, Ie, Z, me, Se + "[" + Ie + "]", x);
          if (Ke instanceof Error)
            return Ke;
        }
        return null;
      }
      return O(P);
    }
    function N() {
      function se(P, q, $, Z, me) {
        var Se = P[q];
        if (!B(Se)) {
          var Ue = Oe(Se);
          return new j("Invalid " + Z + " `" + me + "` of type " + ("`" + Ue + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(se);
    }
    function T() {
      function se(P, q, $, Z, me) {
        var Se = P[q];
        if (!c.isValidElementType(Se)) {
          var Ue = Oe(Se);
          return new j("Invalid " + Z + " `" + me + "` of type " + ("`" + Ue + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(se);
    }
    function V(se) {
      function P(q, $, Z, me, Se) {
        if (!(q[$] instanceof se)) {
          var Ue = se.name || _, De = Be(q[$]);
          return new j("Invalid " + me + " `" + Se + "` of type " + ("`" + De + "` supplied to `" + Z + "`, expected ") + ("instance of `" + Ue + "`."));
        }
        return null;
      }
      return O(P);
    }
    function Y(se) {
      if (!Array.isArray(se))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? A(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : A("Invalid argument supplied to oneOf, expected an array.")), y;
      function P(q, $, Z, me, Se) {
        for (var Ue = q[$], De = 0; De < se.length; De++)
          if (M(Ue, se[De]))
            return null;
        var Ie = JSON.stringify(se, function(dt, Te) {
          var wt = J(Te);
          return wt === "symbol" ? String(Te) : Te;
        });
        return new j("Invalid " + me + " `" + Se + "` of value `" + String(Ue) + "` " + ("supplied to `" + Z + "`, expected one of " + Ie + "."));
      }
      return O(P);
    }
    function ne(se) {
      function P(q, $, Z, me, Se) {
        if (typeof se != "function")
          return new j("Property `" + Se + "` of component `" + Z + "` has invalid PropType notation inside objectOf.");
        var Ue = q[$], De = Oe(Ue);
        if (De !== "object")
          return new j("Invalid " + me + " `" + Se + "` of type " + ("`" + De + "` supplied to `" + Z + "`, expected an object."));
        for (var Ie in Ue)
          if (p(Ue, Ie)) {
            var Ke = se(Ue, Ie, Z, me, Se + "." + Ie, x);
            if (Ke instanceof Error)
              return Ke;
          }
        return null;
      }
      return O(P);
    }
    function re(se) {
      if (!Array.isArray(se))
        return process.env.NODE_ENV !== "production" && A("Invalid argument supplied to oneOfType, expected an instance of array."), y;
      for (var P = 0; P < se.length; P++) {
        var q = se[P];
        if (typeof q != "function")
          return A(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(q) + " at index " + P + "."
          ), y;
      }
      function $(Z, me, Se, Ue, De) {
        for (var Ie = [], Ke = 0; Ke < se.length; Ke++) {
          var dt = se[Ke], Te = dt(Z, me, Se, Ue, De, x);
          if (Te == null)
            return null;
          Te.data && p(Te.data, "expectedType") && Ie.push(Te.data.expectedType);
        }
        var wt = Ie.length > 0 ? ", expected one of type [" + Ie.join(", ") + "]" : "";
        return new j("Invalid " + Ue + " `" + De + "` supplied to " + ("`" + Se + "`" + wt + "."));
      }
      return O($);
    }
    function W() {
      function se(P, q, $, Z, me) {
        return be(P[q]) ? null : new j("Invalid " + Z + " `" + me + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return O(se);
    }
    function K(se, P, q, $, Z) {
      return new j(
        (se || "React class") + ": " + P + " type `" + q + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Z + "`."
      );
    }
    function le(se) {
      function P(q, $, Z, me, Se) {
        var Ue = q[$], De = Oe(Ue);
        if (De !== "object")
          return new j("Invalid " + me + " `" + Se + "` of type `" + De + "` " + ("supplied to `" + Z + "`, expected `object`."));
        for (var Ie in se) {
          var Ke = se[Ie];
          if (typeof Ke != "function")
            return K(Z, me, Se, Ie, J(Ke));
          var dt = Ke(Ue, Ie, Z, me, Se + "." + Ie, x);
          if (dt)
            return dt;
        }
        return null;
      }
      return O(P);
    }
    function ae(se) {
      function P(q, $, Z, me, Se) {
        var Ue = q[$], De = Oe(Ue);
        if (De !== "object")
          return new j("Invalid " + me + " `" + Se + "` of type `" + De + "` " + ("supplied to `" + Z + "`, expected `object`."));
        var Ie = g({}, q[$], se);
        for (var Ke in Ie) {
          var dt = se[Ke];
          if (p(se, Ke) && typeof dt != "function")
            return K(Z, me, Se, Ke, J(dt));
          if (!dt)
            return new j(
              "Invalid " + me + " `" + Se + "` key `" + Ke + "` supplied to `" + Z + "`.\nBad object: " + JSON.stringify(q[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(se), null, "  ")
            );
          var Te = dt(Ue, Ke, Z, me, Se + "." + Ke, x);
          if (Te)
            return Te;
        }
        return null;
      }
      return O(P);
    }
    function be(se) {
      switch (typeof se) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !se;
        case "object":
          if (Array.isArray(se))
            return se.every(be);
          if (se === null || B(se))
            return !0;
          var P = z(se);
          if (P) {
            var q = P.call(se), $;
            if (P !== se.entries) {
              for (; !($ = q.next()).done; )
                if (!be($.value))
                  return !1;
            } else
              for (; !($ = q.next()).done; ) {
                var Z = $.value;
                if (Z && !be(Z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Re(se, P) {
      return se === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function Oe(se) {
      var P = typeof se;
      return Array.isArray(se) ? "array" : se instanceof RegExp ? "object" : Re(P, se) ? "symbol" : P;
    }
    function J(se) {
      if (typeof se > "u" || se === null)
        return "" + se;
      var P = Oe(se);
      if (P === "object") {
        if (se instanceof Date)
          return "date";
        if (se instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function pe(se) {
      var P = J(se);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Be(se) {
      return !se.constructor || !se.constructor.name ? _ : se.constructor.name;
    }
    return k.checkPropTypes = F, k.resetWarningCache = F.resetWarningCache, k.PropTypes = k, k;
  }, Bx;
}
var Fx, w2;
function KT() {
  if (w2)
    return Fx;
  w2 = 1;
  var c = Yx();
  function g() {
  }
  function x() {
  }
  return x.resetWarningCache = g, Fx = function() {
    function p(y, B, D, m, w, z) {
      if (z !== c) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    p.isRequired = p;
    function F() {
      return p;
    }
    var A = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: F,
      element: p,
      elementType: p,
      instanceOf: F,
      node: p,
      objectOf: F,
      oneOf: F,
      oneOfType: F,
      shape: F,
      exact: F,
      checkPropTypes: x,
      resetWarningCache: g
    };
    return A.PropTypes = A, A;
  }, Fx;
}
if (process.env.NODE_ENV !== "production") {
  var ZT = W2(), JT = !0;
  Vx.exports = XT()(ZT.isElement, JT);
} else
  Vx.exports = KT()();
var ew = Vx.exports;
const _v = /* @__PURE__ */ D0(ew);
function q2(c) {
  var g, x, p = "";
  if (typeof c == "string" || typeof c == "number")
    p += c;
  else if (typeof c == "object")
    if (Array.isArray(c))
      for (g = 0; g < c.length; g++)
        c[g] && (x = q2(c[g])) && (p && (p += " "), p += x);
    else
      for (g in c)
        c[g] && (p && (p += " "), p += g);
  return p;
}
function Uu() {
  for (var c, g, x = 0, p = ""; x < arguments.length; )
    (c = arguments[x++]) && (g = q2(c)) && (p && (p += " "), p += g);
  return p;
}
function Ac() {
  return Ac = Object.assign || function(c) {
    for (var g = 1; g < arguments.length; g++) {
      var x = arguments[g];
      for (var p in x)
        Object.prototype.hasOwnProperty.call(x, p) && (c[p] = x[p]);
    }
    return c;
  }, Ac.apply(this, arguments);
}
function Y2(c, g) {
  if (c == null)
    return {};
  var x = {}, p = Object.keys(c), F, A;
  for (A = 0; A < p.length; A++)
    F = p[A], !(g.indexOf(F) >= 0) && (x[F] = c[F]);
  return x;
}
function kv(c) {
  return typeof c == "number" && !isNaN(c);
}
function w0(c) {
  return typeof c == "boolean";
}
function k0(c) {
  return typeof c == "string";
}
function ba(c) {
  return typeof c == "function";
}
function Rv(c) {
  return k0(c) || ba(c) ? c : null;
}
function Ox(c) {
  return c === 0 || c;
}
function tw(c, g) {
  return c === !1 || kv(c) && c > 0 ? c : g;
}
var nw = !!(typeof window < "u" && window.document && window.document.createElement);
function Nx(c) {
  return Ne.isValidElement(c) || k0(c) || ba(c) || kv(c);
}
var rw = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, B0 = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};
function aw(c, g, x) {
  x === void 0 && (x = 300);
  var p = c.scrollHeight, F = c.style;
  requestAnimationFrame(function() {
    F.minHeight = "initial", F.height = p + "px", F.transition = "all " + x + "ms", requestAnimationFrame(function() {
      F.height = "0", F.padding = "0", F.margin = "0", setTimeout(g, x);
    });
  });
}
function iw(c) {
  var g = c.enter, x = c.exit, p = c.appendPosition, F = p === void 0 ? !1 : p, A = c.collapse, y = A === void 0 ? !0 : A, B = c.collapseDuration, D = B === void 0 ? 300 : B;
  return function(w) {
    var z = w.children, _ = w.position, k = w.preventExitTransition, M = w.done, j = w.nodeRef, O = w.isIn, H = F ? g + "--" + _ : g, b = F ? x + "--" + _ : x, S = Ne.useRef(), N = Ne.useRef(
      0
      /* Enter */
    );
    Ne.useLayoutEffect(function() {
      T();
    }, []), Ne.useEffect(function() {
      O || (k ? ne() : Y());
    }, [O]);
    function T() {
      var re = j.current;
      S.current = re.className, re.className += " " + H, re.addEventListener("animationend", V), re.addEventListener("animationcancel", V);
    }
    function V(re) {
      if (re.target === j.current) {
        var W = j.current;
        W.dispatchEvent(new Event(
          "d"
          /* ENTRANCE_ANIMATION_END */
        )), W.removeEventListener("animationend", V), W.removeEventListener("animationcancel", V), N.current === 0 && (W.className = S.current);
      }
    }
    function Y() {
      N.current = 1;
      var re = j.current;
      re.className += " " + b, re.addEventListener("animationend", ne);
    }
    function ne() {
      var re = j.current;
      re.removeEventListener("animationend", ne), y ? aw(re, M, D) : M();
    }
    return Px.createElement(Px.Fragment, null, z);
  };
}
var ns = {
  list: /* @__PURE__ */ new Map(),
  emitQueue: /* @__PURE__ */ new Map(),
  on: function(g, x) {
    return this.list.has(g) || this.list.set(g, []), this.list.get(g).push(x), this;
  },
  off: function(g, x) {
    if (x) {
      var p = this.list.get(g).filter(function(F) {
        return F !== x;
      });
      return this.list.set(g, p), this;
    }
    return this.list.delete(g), this;
  },
  cancelEmit: function(g) {
    var x = this.emitQueue.get(g);
    return x && (x.forEach(clearTimeout), this.emitQueue.delete(g)), this;
  },
  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function(g) {
    for (var x = this, p = arguments.length, F = new Array(p > 1 ? p - 1 : 0), A = 1; A < p; A++)
      F[A - 1] = arguments[A];
    this.list.has(g) && this.list.get(g).forEach(function(y) {
      var B = setTimeout(function() {
        y.apply(void 0, F);
      }, 0);
      x.emitQueue.has(g) || x.emitQueue.set(g, []), x.emitQueue.get(g).push(B);
    });
  }
}, ow = ["delay", "staleId"];
function uw(c) {
  var g = Ne.useReducer(function(H) {
    return H + 1;
  }, 0), x = g[1], p = Ne.useState([]), F = p[0], A = p[1], y = Ne.useRef(null), B = Ne.useRef(/* @__PURE__ */ new Map()).current, D = function(b) {
    return F.indexOf(b) !== -1;
  }, m = Ne.useRef({
    toastKey: 1,
    displayedToast: 0,
    count: 0,
    queue: [],
    props: c,
    containerId: null,
    isToastActive: D,
    getToast: function(b) {
      return B.get(b);
    }
  }).current;
  Ne.useEffect(function() {
    return m.containerId = c.containerId, ns.cancelEmit(
      3
      /* WillUnmount */
    ).on(
      0,
      M
    ).on(
      1,
      function(H) {
        return y.current && z(H);
      }
    ).on(
      5,
      w
    ).emit(
      2,
      m
    ), function() {
      return ns.emit(
        3,
        m
      );
    };
  }, []), Ne.useEffect(function() {
    m.isToastActive = D, m.displayedToast = F.length, ns.emit(
      4,
      F.length,
      c.containerId
    );
  }, [F]), Ne.useEffect(function() {
    m.props = c;
  });
  function w(H) {
    var b = H.containerId, S = m.props.limit;
    S && (!b || m.containerId === b) && (m.count -= m.queue.length, m.queue = []);
  }
  function z(H) {
    A(function(b) {
      return Ox(H) ? b.filter(function(S) {
        return S !== H;
      }) : [];
    });
  }
  function _() {
    var H = m.queue.shift(), b = H.toastContent, S = H.toastProps, N = H.staleId;
    j(b, S, N);
  }
  function k(H) {
    return !y.current || m.props.enableMultiContainer && H.containerId !== m.props.containerId || B.has(H.toastId) && H.updateId == null;
  }
  function M(H, b) {
    var S = b.delay, N = b.staleId, T = Y2(b, ow);
    if (!(!Nx(H) || k(T))) {
      var V = T.toastId, Y = T.updateId, ne = T.data, re = m.props, W = function() {
        return z(V);
      }, K = Y == null;
      K && m.count++;
      var le = {
        toastId: V,
        updateId: Y,
        isLoading: T.isLoading,
        theme: T.theme || re.theme,
        icon: T.icon != null ? T.icon : re.icon,
        isIn: !1,
        key: T.key || m.toastKey++,
        type: T.type,
        closeToast: W,
        closeButton: T.closeButton,
        rtl: re.rtl,
        position: T.position || re.position,
        transition: T.transition || re.transition,
        className: Rv(T.className || re.toastClassName),
        bodyClassName: Rv(T.bodyClassName || re.bodyClassName),
        style: T.style || re.toastStyle,
        bodyStyle: T.bodyStyle || re.bodyStyle,
        onClick: T.onClick || re.onClick,
        pauseOnHover: w0(T.pauseOnHover) ? T.pauseOnHover : re.pauseOnHover,
        pauseOnFocusLoss: w0(T.pauseOnFocusLoss) ? T.pauseOnFocusLoss : re.pauseOnFocusLoss,
        draggable: w0(T.draggable) ? T.draggable : re.draggable,
        draggablePercent: T.draggablePercent || re.draggablePercent,
        draggableDirection: T.draggableDirection || re.draggableDirection,
        closeOnClick: w0(T.closeOnClick) ? T.closeOnClick : re.closeOnClick,
        progressClassName: Rv(T.progressClassName || re.progressClassName),
        progressStyle: T.progressStyle || re.progressStyle,
        autoClose: T.isLoading ? !1 : tw(T.autoClose, re.autoClose),
        hideProgressBar: w0(T.hideProgressBar) ? T.hideProgressBar : re.hideProgressBar,
        progress: T.progress,
        role: T.role || re.role,
        deleteToast: function() {
          B.delete(V);
          var Re = m.queue.length;
          if (m.count = Ox(V) ? m.count - 1 : m.count - m.displayedToast, m.count < 0 && (m.count = 0), Re > 0) {
            var Oe = Ox(V) ? 1 : m.props.limit;
            if (Re === 1 || Oe === 1)
              m.displayedToast++, _();
            else {
              var J = Oe > Re ? Re : Oe;
              m.displayedToast = J;
              for (var pe = 0; pe < J; pe++)
                _();
            }
          } else
            x();
        }
      };
      ba(T.onOpen) && (le.onOpen = T.onOpen), ba(T.onClose) && (le.onClose = T.onClose), le.closeButton = re.closeButton, T.closeButton === !1 || Nx(T.closeButton) ? le.closeButton = T.closeButton : T.closeButton === !0 && (le.closeButton = Nx(re.closeButton) ? re.closeButton : !0);
      var ae = H;
      Ne.isValidElement(H) && !k0(H.type) ? ae = Ne.cloneElement(H, {
        closeToast: W,
        toastProps: le,
        data: ne
      }) : ba(H) && (ae = H({
        closeToast: W,
        toastProps: le,
        data: ne
      })), re.limit && re.limit > 0 && m.count > re.limit && K ? m.queue.push({
        toastContent: ae,
        toastProps: le,
        staleId: N
      }) : kv(S) && S > 0 ? setTimeout(function() {
        j(ae, le, N);
      }, S) : j(ae, le, N);
    }
  }
  function j(H, b, S) {
    var N = b.toastId;
    S && B.delete(S), B.set(N, {
      content: H,
      props: b
    }), A(function(T) {
      return [].concat(T, [N]).filter(function(V) {
        return V !== S;
      });
    });
  }
  function O(H) {
    var b = /* @__PURE__ */ new Map(), S = Array.from(B.values());
    return c.newestOnTop && S.reverse(), S.forEach(function(N) {
      var T = N.props.position;
      b.has(T) || b.set(T, []), b.get(T).push(N);
    }), Array.from(b, function(N) {
      return H(N[0], N[1]);
    });
  }
  return {
    getToastToRender: O,
    containerRef: y,
    isToastActive: D
  };
}
function D2(c) {
  return c.targetTouches && c.targetTouches.length >= 1 ? c.targetTouches[0].clientX : c.clientX;
}
function A2(c) {
  return c.targetTouches && c.targetTouches.length >= 1 ? c.targetTouches[0].clientY : c.clientY;
}
function lw(c) {
  var g = Ne.useState(!1), x = g[0], p = g[1], F = Ne.useState(!1), A = F[0], y = F[1], B = Ne.useRef(null), D = Ne.useRef({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: !0,
    canDrag: !1,
    boundingRect: null,
    didMove: !1
  }).current, m = Ne.useRef(c), w = c.autoClose, z = c.pauseOnHover, _ = c.closeToast, k = c.onClick, M = c.closeOnClick;
  Ne.useEffect(function() {
    m.current = c;
  }), Ne.useEffect(function() {
    return B.current && B.current.addEventListener(
      "d",
      H,
      {
        once: !0
      }
    ), ba(c.onOpen) && c.onOpen(Ne.isValidElement(c.children) && c.children.props), function() {
      var W = m.current;
      ba(W.onClose) && W.onClose(Ne.isValidElement(W.children) && W.children.props);
    };
  }, []), Ne.useEffect(function() {
    return c.pauseOnFocusLoss && S(), function() {
      c.pauseOnFocusLoss && N();
    };
  }, [c.pauseOnFocusLoss]);
  function j(W) {
    if (c.draggable) {
      T();
      var K = B.current;
      D.canCloseOnClick = !0, D.canDrag = !0, D.boundingRect = K.getBoundingClientRect(), K.style.transition = "", D.x = D2(W.nativeEvent), D.y = A2(W.nativeEvent), c.draggableDirection === "x" ? (D.start = D.x, D.removalDistance = K.offsetWidth * (c.draggablePercent / 100)) : (D.start = D.y, D.removalDistance = K.offsetHeight * (c.draggablePercent === 80 ? c.draggablePercent * 1.5 : c.draggablePercent / 100));
    }
  }
  function O() {
    if (D.boundingRect) {
      var W = D.boundingRect, K = W.top, le = W.bottom, ae = W.left, be = W.right;
      c.pauseOnHover && D.x >= ae && D.x <= be && D.y >= K && D.y <= le ? b() : H();
    }
  }
  function H() {
    p(!0);
  }
  function b() {
    p(!1);
  }
  function S() {
    document.hasFocus() || b(), window.addEventListener("focus", H), window.addEventListener("blur", b);
  }
  function N() {
    window.removeEventListener("focus", H), window.removeEventListener("blur", b);
  }
  function T() {
    D.didMove = !1, document.addEventListener("mousemove", Y), document.addEventListener("mouseup", ne), document.addEventListener("touchmove", Y), document.addEventListener("touchend", ne);
  }
  function V() {
    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", ne), document.removeEventListener("touchmove", Y), document.removeEventListener("touchend", ne);
  }
  function Y(W) {
    var K = B.current;
    D.canDrag && K && (D.didMove = !0, x && b(), D.x = D2(W), D.y = A2(W), c.draggableDirection === "x" ? D.delta = D.x - D.start : D.delta = D.y - D.start, D.start !== D.x && (D.canCloseOnClick = !1), K.style.transform = "translate" + c.draggableDirection + "(" + D.delta + "px)", K.style.opacity = "" + (1 - Math.abs(D.delta / D.removalDistance)));
  }
  function ne() {
    V();
    var W = B.current;
    if (D.canDrag && D.didMove && W) {
      if (D.canDrag = !1, Math.abs(D.delta) > D.removalDistance) {
        y(!0), c.closeToast();
        return;
      }
      W.style.transition = "transform 0.2s, opacity 0.2s", W.style.transform = "translate" + c.draggableDirection + "(0)", W.style.opacity = "1";
    }
  }
  var re = {
    onMouseDown: j,
    onTouchStart: j,
    onMouseUp: O,
    onTouchEnd: O
  };
  return w && z && (re.onMouseEnter = b, re.onMouseLeave = H), M && (re.onClick = function(W) {
    k && k(W), D.canCloseOnClick && _();
  }), {
    playToast: H,
    pauseToast: b,
    isRunning: x,
    preventExitTransition: A,
    toastRef: B,
    eventHandlers: re
  };
}
function Q2(c) {
  var g = c.closeToast, x = c.theme, p = c.ariaLabel, F = p === void 0 ? "close" : p;
  return Ne.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + x,
    type: "button",
    onClick: function(y) {
      y.stopPropagation(), g(y);
    },
    "aria-label": F
  }, Ne.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, Ne.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function G2(c) {
  var g, x, p = c.delay, F = c.isRunning, A = c.closeToast, y = c.type, B = c.hide, D = c.className, m = c.style, w = c.controlledProgress, z = c.progress, _ = c.rtl, k = c.isIn, M = c.theme, j = Ac({}, m, {
    animationDuration: p + "ms",
    animationPlayState: F ? "running" : "paused",
    opacity: B ? 0 : 1
  });
  w && (j.transform = "scaleX(" + z + ")");
  var O = Uu("Toastify__progress-bar", w ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + M, "Toastify__progress-bar--" + y, (g = {}, g["Toastify__progress-bar--rtl"] = _, g)), H = ba(D) ? D({
    rtl: _,
    type: y,
    defaultClassName: O
  }) : Uu(O, D), b = (x = {}, x[w && z >= 1 ? "onTransitionEnd" : "onAnimationEnd"] = w && z < 1 ? null : function() {
    k && A();
  }, x);
  return Ne.createElement("div", Object.assign({
    role: "progressbar",
    "aria-hidden": B ? "true" : "false",
    "aria-label": "notification timer",
    className: H,
    style: j
  }, b));
}
G2.defaultProps = {
  type: B0.DEFAULT,
  hide: !1
};
var sw = ["theme", "type"], Bv = function(g) {
  var x = g.theme, p = g.type, F = Y2(g, sw);
  return Ne.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: x === "colored" ? "currentColor" : "var(--toastify-icon-color-" + p + ")"
  }, F));
};
function cw(c) {
  return Ne.createElement(Bv, Object.assign({}, c), Ne.createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}
function fw(c) {
  return Ne.createElement(Bv, Object.assign({}, c), Ne.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}
function dw(c) {
  return Ne.createElement(Bv, Object.assign({}, c), Ne.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}
function pw(c) {
  return Ne.createElement(Bv, Object.assign({}, c), Ne.createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}
function vw() {
  return Ne.createElement("div", {
    className: "Toastify__spinner"
  });
}
var k2 = {
  info: fw,
  warning: cw,
  success: dw,
  error: pw,
  spinner: vw
}, hw = function(g) {
  var x, p, F = lw(g), A = F.isRunning, y = F.preventExitTransition, B = F.toastRef, D = F.eventHandlers, m = g.closeButton, w = g.children, z = g.autoClose, _ = g.onClick, k = g.type, M = g.hideProgressBar, j = g.closeToast, O = g.transition, H = g.position, b = g.className, S = g.style, N = g.bodyClassName, T = g.bodyStyle, V = g.progressClassName, Y = g.progressStyle, ne = g.updateId, re = g.role, W = g.progress, K = g.rtl, le = g.toastId, ae = g.deleteToast, be = g.isIn, Re = g.isLoading, Oe = g.icon, J = g.theme, pe = Uu("Toastify__toast", "Toastify__toast-theme--" + J, "Toastify__toast--" + k, (x = {}, x["Toastify__toast--rtl"] = K, x)), Be = ba(b) ? b({
    rtl: K,
    position: H,
    type: k,
    defaultClassName: pe
  }) : Uu(pe, b), se = !!W, P = k2[k], q = {
    theme: J,
    type: k
  }, $ = P && P(q);
  Oe === !1 ? $ = void 0 : ba(Oe) ? $ = Oe(q) : Ne.isValidElement(Oe) ? $ = Ne.cloneElement(Oe, q) : k0(Oe) ? $ = Oe : Re && ($ = k2.spinner());
  function Z(me) {
    if (me) {
      var Se = {
        closeToast: j,
        type: k,
        theme: J
      };
      if (ba(me))
        return me(Se);
      if (Ne.isValidElement(me))
        return Ne.cloneElement(me, Se);
    }
  }
  return Ne.createElement(O, {
    isIn: be,
    done: ae,
    position: H,
    preventExitTransition: y,
    nodeRef: B
  }, Ne.createElement("div", Object.assign({
    id: le,
    onClick: _,
    className: Be
  }, D, {
    style: S,
    ref: B
  }), Ne.createElement("div", Object.assign({}, be && {
    role: re
  }, {
    className: ba(N) ? N({
      type: k
    }) : Uu("Toastify__toast-body", N),
    style: T
  }), $ && Ne.createElement("div", {
    className: Uu("Toastify__toast-icon", (p = {}, p["Toastify--animate-icon Toastify__zoom-enter"] = !Re, p))
  }, $), Ne.createElement("div", null, w)), Z(m), (z || se) && Ne.createElement(G2, Object.assign({}, ne && !se ? {
    key: "pb-" + ne
  } : {}, {
    rtl: K,
    theme: J,
    delay: z,
    isRunning: A,
    isIn: be,
    closeToast: j,
    hide: M,
    type: k,
    style: Y,
    className: V,
    controlledProgress: se,
    progress: W
  }))));
}, mw = /* @__PURE__ */ iw({
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}), X2 = function(g) {
  var x = uw(g), p = x.getToastToRender, F = x.containerRef, A = x.isToastActive, y = g.className, B = g.style, D = g.rtl, m = g.containerId;
  function w(z) {
    var _, k = Uu("Toastify__toast-container", "Toastify__toast-container--" + z, (_ = {}, _["Toastify__toast-container--rtl"] = D, _));
    return ba(y) ? y({
      position: z,
      rtl: D,
      defaultClassName: k
    }) : Uu(k, Rv(y));
  }
  return Ne.createElement("div", {
    ref: F,
    className: "Toastify",
    id: m
  }, p(function(z, _) {
    var k = _.length ? Ac({}, B) : Ac({}, B, {
      pointerEvents: "none"
    });
    return Ne.createElement("div", {
      className: w(z),
      style: k,
      key: "container-" + z
    }, _.map(function(M) {
      var j = M.content, O = M.props;
      return Ne.createElement(hw, Object.assign({}, O, {
        isIn: A(O.toastId),
        key: "toast-" + O.key,
        closeButton: O.closeButton === !0 ? Q2 : O.closeButton
      }), j);
    }));
  }));
};
X2.defaultProps = {
  position: rw.TOP_RIGHT,
  transition: mw,
  rtl: !1,
  autoClose: 5e3,
  hideProgressBar: !1,
  closeButton: Q2,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  closeOnClick: !0,
  newestOnTop: !1,
  draggable: !0,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
var Tv = /* @__PURE__ */ new Map(), B2, F2, Wx = [];
function yw() {
  return Math.random().toString(36).substring(2, 9);
}
function xw(c) {
  return c && (k0(c.toastId) || kv(c.toastId)) ? c.toastId : yw();
}
function gw(c, g) {
  return Tv.size > 0 ? ns.emit(
    0,
    c,
    g
  ) : Wx.push({
    content: c,
    options: g
  }), g.toastId;
}
function Ew(c, g) {
  return Ac({}, g, {
    type: g && g.type || c,
    toastId: xw(g)
  });
}
function Fv(c) {
  return function(g, x) {
    return gw(g, Ew(c, x));
  };
}
B0.SUCCESS;
B0.INFO;
B0.ERROR;
B0.WARNING;
ns.on(
  2,
  function(c) {
    B2 = c.containerId || c, Tv.set(B2, c), Wx.forEach(function(g) {
      ns.emit(
        0,
        g.content,
        g.options
      );
    }), Wx = [];
  }
).on(
  3,
  function(c) {
    Tv.delete(c.containerId || c), Tv.size === 0 && ns.off(
      0
      /* Show */
    ).off(
      1
      /* Clear */
    ).off(
      5
      /* ClearWaitingQueue */
    ), nw && F2 && document.body.removeChild(F2);
  }
);
const Cw = () => /* @__PURE__ */ ut.jsx(
  X2,
  {
    position: "bottom-center",
    autoClose: 5e3,
    hideProgressBar: !0,
    newestOnTop: !0,
    closeOnClick: !0,
    rtl: !1,
    pauseOnFocusLoss: !0,
    draggable: !1,
    pauseOnHover: !0
  }
);
_v.string;
var K2 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(c) {
  (function() {
    var g = {}.hasOwnProperty;
    function x() {
      for (var A = "", y = 0; y < arguments.length; y++) {
        var B = arguments[y];
        B && (A = F(A, p(B)));
      }
      return A;
    }
    function p(A) {
      if (typeof A == "string" || typeof A == "number")
        return A;
      if (typeof A != "object")
        return "";
      if (Array.isArray(A))
        return x.apply(null, A);
      if (A.toString !== Object.prototype.toString && !A.toString.toString().includes("[native code]"))
        return A.toString();
      var y = "";
      for (var B in A)
        g.call(A, B) && A[B] && (y = F(y, B));
      return y;
    }
    function F(A, y) {
      return y ? A ? A + " " + y : A + y : A;
    }
    c.exports ? (x.default = x, c.exports = x) : window.classNames = x;
  })();
})(K2);
var bw = K2.exports;
const Sw = /* @__PURE__ */ D0(bw), _w = ["xxl", "xl", "lg", "md", "sm", "xs"], Rw = "xs", Tw = /* @__PURE__ */ Ne.createContext({
  prefixes: {},
  breakpoints: _w,
  minBreakpoint: Rw
});
function ww(c, g) {
  const {
    prefixes: x
  } = Ne.useContext(Tw);
  return c || x[g] || g;
}
const Dw = ["as", "disabled"];
function Aw(c, g) {
  if (c == null)
    return {};
  var x = {}, p = Object.keys(c), F, A;
  for (A = 0; A < p.length; A++)
    F = p[A], !(g.indexOf(F) >= 0) && (x[F] = c[F]);
  return x;
}
function kw(c) {
  return !c || c.trim() === "#";
}
function Z2({
  tagName: c,
  disabled: g,
  href: x,
  target: p,
  rel: F,
  role: A,
  onClick: y,
  tabIndex: B = 0,
  type: D
}) {
  c || (x != null || p != null || F != null ? c = "a" : c = "button");
  const m = {
    tagName: c
  };
  if (c === "button")
    return [{
      type: D || "button",
      disabled: g
    }, m];
  const w = (_) => {
    if ((g || c === "a" && kw(x)) && _.preventDefault(), g) {
      _.stopPropagation();
      return;
    }
    y == null || y(_);
  }, z = (_) => {
    _.key === " " && (_.preventDefault(), w(_));
  };
  return c === "a" && (x || (x = "#"), g && (x = void 0)), [{
    role: A ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: g ? void 0 : B,
    href: x,
    target: c === "a" ? p : void 0,
    "aria-disabled": g || void 0,
    rel: c === "a" ? F : void 0,
    onClick: w,
    onKeyDown: z
  }, m];
}
const Bw = /* @__PURE__ */ Ne.forwardRef((c, g) => {
  let {
    as: x,
    disabled: p
  } = c, F = Aw(c, Dw);
  const [A, {
    tagName: y
  }] = Z2(Object.assign({
    tagName: x,
    disabled: p
  }, F));
  return /* @__PURE__ */ ut.jsx(y, Object.assign({}, F, A, {
    ref: g
  }));
});
Bw.displayName = "Button";
const J2 = /* @__PURE__ */ Ne.forwardRef(({
  as: c,
  bsPrefix: g,
  variant: x = "primary",
  size: p,
  active: F = !1,
  disabled: A = !1,
  className: y,
  ...B
}, D) => {
  const m = ww(g, "btn"), [w, {
    tagName: z
  }] = Z2({
    tagName: c,
    disabled: A,
    ...B
  }), _ = z;
  return /* @__PURE__ */ ut.jsx(_, {
    ...w,
    ...B,
    ref: D,
    disabled: A,
    className: Sw(y, m, F && "active", x && `${m}-${x}`, p && `${m}-${p}`, B.href && A && "disabled")
  });
});
J2.displayName = "Button";
const eb = ({ title: c, login: g, coverImg: x }) => /* @__PURE__ */ ut.jsxs(
  "div",
  {
    className: "d-flex justify-content-center flex-column text-center",
    style: { background: "#000", minHeight: "100vh" },
    children: [
      /* @__PURE__ */ ut.jsxs("div", { className: "mt-auto text-light mb-5", children: [
        /* @__PURE__ */ ut.jsx(
          "div",
          {
            className: "ratio ratio-1x1 mx-auto mb-2",
            style: { maxWidth: "320px" },
            children: /* @__PURE__ */ ut.jsx("img", { src: x, alt: "", style: { maxWidth: "100%" } })
          }
        ),
        /* @__PURE__ */ ut.jsx("h1", { children: c }),
        /* @__PURE__ */ ut.jsx("p", { children: "Please connect to continue." }),
        /* @__PURE__ */ ut.jsx(
          J2,
          {
            onClick: g,
            variant: "outline-light",
            className: "rounded-pill px-3 mt-3",
            children: "Connect"
          }
        )
      ] }),
      /* @__PURE__ */ ut.jsx("p", { className: "mt-auto text-secondary", children: "Powered by Internet Computer" })
    ]
  }
);
eb.propTypes = {
  title: _v.string.isRequired,
  login: _v.func.isRequired,
  coverImg: _v.string.isRequired
};
const Fw = function() {
  const [g, x] = Ne.useState(!1), { createNewConversation: p } = V2(), F = () => {
    x(!0), p("defaultUser");
  };
  return /* @__PURE__ */ ut.jsxs(ut.Fragment, { children: [
    g ? /* @__PURE__ */ ut.jsxs("main", { children: [
      /* @__PURE__ */ ut.jsx("div", { className: "watermark", children: "Dai" }),
      /* @__PURE__ */ ut.jsx(qT, {})
    ] }) : /* @__PURE__ */ ut.jsx(
      eb,
      {
        title: "Welcome to Your Personalized AI",
        login: F,
        coverImg: "/assets/img/cover.png"
      }
    ),
    /* @__PURE__ */ ut.jsx(Cw, {}),
    /* @__PURE__ */ ut.jsx(eT, {})
  ] });
}, Ow = ({ IDL: c }) => c.Service({
  http_request: c.Func(
    [
      c.Record({
        url: c.Text,
        method: c.Text,
        body: c.Vec(c.Nat8),
        headers: c.Vec(c.Tuple(c.Text, c.Text)),
        certificate_version: c.Opt(c.Nat16)
      })
    ],
    [
      c.Record({
        body: c.Vec(c.Nat8),
        headers: c.Vec(c.Tuple(c.Text, c.Text)),
        upgrade: c.Opt(c.Bool),
        streaming_strategy: c.Opt(
          c.Variant({
            Callback: c.Record({
              token: c.Record({}),
              callback: c.Func(
                [c.Record({})],
                [
                  c.Opt(
                    c.Record({
                      token: c.Opt(c.Record({})),
                      body: c.Vec(c.Nat8)
                    })
                  )
                ],
                ["query"]
              )
            })
          })
        ),
        status_code: c.Nat16
      })
    ],
    ["query"]
  ),
  http_request_update: c.Func(
    [
      c.Record({
        url: c.Text,
        method: c.Text,
        body: c.Vec(c.Nat8),
        headers: c.Vec(c.Tuple(c.Text, c.Text)),
        certificate_version: c.Opt(c.Nat16)
      })
    ],
    [
      c.Record({
        body: c.Vec(c.Nat8),
        headers: c.Vec(c.Tuple(c.Text, c.Text)),
        upgrade: c.Opt(c.Bool),
        streaming_strategy: c.Opt(
          c.Variant({
            Callback: c.Record({
              token: c.Record({}),
              callback: c.Func(
                [c.Record({})],
                [
                  c.Opt(
                    c.Record({
                      token: c.Opt(c.Record({})),
                      body: c.Vec(c.Nat8)
                    })
                  )
                ],
                ["query"]
              )
            })
          })
        ),
        status_code: c.Nat16
      })
    ],
    []
  )
}), Nw = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
async function Mw() {
  return await zw(Nw, Ow);
}
async function zw(c, g) {
  const x = window.auth.client, p = new G_({
    identity: x.getIdentity()
  });
  return await p.fetchRootKey(), X_.createActor(g, {
    agent: p,
    canisterId: c
  });
}
async function Pw() {
  var g, x;
  const c = await IT();
  window.auth = {}, window.canister = {}, window.auth.client = c, window.auth.isAuthenticated = await c.isAuthenticated(), window.auth.identity = c.getIdentity(), window.auth.principal = (g = c.getIdentity()) == null ? void 0 : g.getPrincipal(), window.auth.principalText = (x = c.getIdentity()) == null ? void 0 : x.getPrincipal().toText(), window.canister.chat = await Mw();
}
window.renderICPromise = Pw().then(() => {
  cR.render(
    /* @__PURE__ */ ut.jsx(Px.StrictMode, { children: /* @__PURE__ */ ut.jsx(Fw, {}) }),
    document.getElementById("root")
  );
}).catch(console.error);
