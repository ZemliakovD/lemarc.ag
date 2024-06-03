import {
	g as je,
	_ as Ke
} from "./_commonjsHelpers.548cd5ed.js";
import {
	a as ti
} from "./analytic.df9894ef.js";
import {
	_ as _t,
	o as I,
	c as A,
	a as C,
	g as Ht,
	l as ve,
	p as Ft,
	e as Yt,
	r as Rt,
	k as ei,
	F as wt,
	n as bt,
	q as mt,
	A as pe,
	f as Ut,
	w as ii,
	b as ni
} from "./entry.f37dc6e7.js";
const ri = c => (Ft("data-v-45d43cd9"), c = c(), Yt(), c),
	si = {
		class: "features-circle__item"
	},
	ai = {
		class: "features-circle__item-text"
	},
	oi = ["innerHTML"],
	li = ri(() => C("div", {
		class: "features-circle__item-dot"
	}, null, -1)),
	ci = {
		__name: "FeaturesItem",
		props: {
			title: String,
			index: Number,
			event: String,
			showButton: {
				type: Boolean,
				default: !1
			}
		},
		emits: ["handleClick"],
		setup(c) {
			const a = c;
			return (f, _) => (I(), A("div", si, [C("div", ai, [C("span", {
				class: "text-lg white semibold",
				innerHTML: a.title
			}, null, 8, oi), a.showButton ? (I(), A("button", {
				key: 0,
				onClick: _[0] || (_[0] = l => {
					f.$emit("handleClick", a.index), a.event && Ht(ti)({
						event: a.event
					})
				}),
				class: "btn primary white"
			}, " РџРѕРґСЂРѕР±РЅРµРµ ")) : ve("", !0)]), li]))
		}
	},
	ui = _t(ci, [
		["__scopeId", "data-v-45d43cd9"]
	]);
const hi = c => (Ft("data-v-25de14a6"), c = c(), Yt(), c),
	fi = {
		class: "popup"
	},
	vi = hi(() => C("svg", {
		width: "29",
		height: "28",
		viewBox: "0 0 29 28",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, [C("path", {
		d: "M1 1L28 27M28 1L1 27",
		stroke: "white",
		"stroke-width": "2"
	})], -1)),
	pi = [vi],
	di = ["innerHTML"],
	Ti = ["innerHTML"],
	mi = {
		__name: "FeaturesPopup",
		props: {
			title: String,
			text: String
		},
		emits: ["handleClose"],
		setup(c) {
			const a = c;
			return (f, _) => (I(), A("div", fi, [C("div", {
				class: "popup__close",
				onClick: _[0] || (_[0] = l => f.$emit("handleClose", -1))
			}, pi), C("h3", {
				class: "popup__title text-lg semibold white",
				innerHTML: a.title
			}, null, 8, di), C("p", {
				class: "popup__text text-md white",
				innerHTML: a.text
			}, null, 8, Ti)]))
		}
	},
	_i = _t(mi, [
		["__scopeId", "data-v-25de14a6"]
	]);
var de = {
	exports: {}
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(c) {
	(function(a, f, _, l) {
		var F = ["", "webkit", "Moz", "MS", "ms", "o"],
			z = f.createElement("div"),
			g = "function",
			p = Math.round,
			d = Math.abs,
			b = Date.now;

		function gt(t, e, i) {
			return setTimeout(Et(t, i), e)
		}

		function V(t, e, i) {
			return Array.isArray(t) ? (L(t, i[e], i), !0) : !1
		}

		function L(t, e, i) {
			var n;
			if (t)
				if (t.forEach) t.forEach(e, i);
				else if (t.length !== l)
				for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
			else
				for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
		}

		function Xt(t, e, i) {
			var n = "DEPRECATED METHOD: " + e + `
` + i + ` AT 
`;
			return function() {
				var r = new Error("get-stack-trace"),
					s = r && r.stack ? r.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					o = a.console && (a.console.warn || a.console.log);
				return o && o.call(a.console, n, s), t.apply(this, arguments)
			}
		}
		var S;
		typeof Object.assign != "function" ? S = function(e) {
			if (e === l || e === null) throw new TypeError("Cannot convert undefined or null to object");
			for (var i = Object(e), n = 1; n < arguments.length; n++) {
				var r = arguments[n];
				if (r !== l && r !== null)
					for (var s in r) r.hasOwnProperty(s) && (i[s] = r[s])
			}
			return i
		} : S = Object.assign;
		var kt = Xt(function(e, i, n) {
				for (var r = Object.keys(i), s = 0; s < r.length;)(!n || n && e[r[s]] === l) && (e[r[s]] = i[r[s]]), s++;
				return e
			}, "extend", "Use `assign`."),
			Te = Xt(function(e, i) {
				return kt(e, i, !0)
			}, "merge", "Use `assign`.");

		function y(t, e, i) {
			var n = e.prototype,
				r;
			r = t.prototype = Object.create(n), r.constructor = t, r._super = n, i && S(r, i)
		}

		function Et(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		}

		function It(t, e) {
			return typeof t == g ? t.apply(e && e[0] || l, e) : t
		}

		function qt(t, e) {
			return t === l ? e : t
		}

		function et(t, e, i) {
			L(nt(e), function(n) {
				t.addEventListener(n, i, !1)
			})
		}

		function it(t, e, i) {
			L(nt(e), function(n) {
				t.removeEventListener(n, i, !1)
			})
		}

		function Vt(t, e) {
			for (; t;) {
				if (t == e) return !0;
				t = t.parentNode
			}
			return !1
		}

		function Y(t, e) {
			return t.indexOf(e) > -1
		}

		function nt(t) {
			return t.trim().split(/\s+/g)
		}

		function W(t, e, i) {
			if (t.indexOf && !i) return t.indexOf(e);
			for (var n = 0; n < t.length;) {
				if (i && t[n][i] == e || !i && t[n] === e) return n;
				n++
			}
			return -1
		}

		function rt(t) {
			return Array.prototype.slice.call(t, 0)
		}

		function Wt(t, e, i) {
			for (var n = [], r = [], s = 0; s < t.length;) {
				var o = e ? t[s][e] : t[s];
				W(r, o) < 0 && n.push(t[s]), r[s] = o, s++
			}
			return i && (e ? n = n.sort(function(v, m) {
				return v[e] > m[e]
			}) : n = n.sort()), n
		}

		function st(t, e) {
			for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < F.length;) {
				if (i = F[s], n = i ? i + r : e, n in t) return n;
				s++
			}
			return l
		}
		var me = 1;

		function _e() {
			return me++
		}

		function Bt(t) {
			var e = t.ownerDocument || t;
			return e.defaultView || e.parentWindow || a
		}
		var ge = /mobile|tablet|ip(ad|hone|od)|android/i,
			zt = "ontouchstart" in a,
			Ee = st(a, "PointerEvent") !== l,
			Ie = zt && ge.test(navigator.userAgent),
			G = "touch",
			ye = "pen",
			yt = "mouse",
			Pe = "kinect",
			Ne = 25,
			T = 1,
			X = 2,
			u = 4,
			E = 8,
			at = 1,
			Z = 2,
			$ = 4,
			J = 8,
			Q = 16,
			x = Z | $,
			k = J | Q,
			Gt = x | k,
			Zt = ["x", "y"],
			ot = ["clientX", "clientY"];

		function P(t, e) {
			var i = this;
			this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(n) {
				It(t.options.enable, [t]) && i.handler(n)
			}, this.init()
		}
		P.prototype = {
			handler: function() {},
			init: function() {
				this.evEl && et(this.element, this.evEl, this.domHandler), this.evTarget && et(this.target, this.evTarget, this.domHandler), this.evWin && et(Bt(this.element), this.evWin, this.domHandler)
			},
			destroy: function() {
				this.evEl && it(this.element, this.evEl, this.domHandler), this.evTarget && it(this.target, this.evTarget, this.domHandler), this.evWin && it(Bt(this.element), this.evWin, this.domHandler)
			}
		};

		function Ce(t) {
			var e, i = t.options.inputClass;
			return i ? e = i : Ee ? e = Nt : Ie ? e = ut : zt ? e = Ct : e = ct, new e(t, Oe)
		}

		function Oe(t, e, i) {
			var n = i.pointers.length,
				r = i.changedPointers.length,
				s = e & T && n - r === 0,
				o = e & (u | E) && n - r === 0;
			i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e, Ae(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
		}

		function Ae(t, e) {
			var i = t.session,
				n = e.pointers,
				r = n.length;
			i.firstInput || (i.firstInput = $t(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = $t(e) : r === 1 && (i.firstMultiple = !1);
			var s = i.firstInput,
				o = i.firstMultiple,
				h = o ? o.center : s.center,
				v = e.center = Jt(n);
			e.timeStamp = b(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = Pt(h, v), e.distance = lt(h, v), Se(i, e), e.offsetDirection = jt(e.deltaX, e.deltaY);
			var m = Qt(e.deltaTime, e.deltaX, e.deltaY);
			e.overallVelocityX = m.x, e.overallVelocityY = m.y, e.overallVelocity = d(m.x) > d(m.y) ? m.x : m.y, e.scale = o ? De(o.pointers, n) : 1, e.rotation = o ? Me(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, xe(i, e);
			var D = t.element;
			Vt(e.srcEvent.target, D) && (D = e.srcEvent.target), e.target = D
		}

		function Se(t, e) {
			var i = e.center,
				n = t.offsetDelta || {},
				r = t.prevDelta || {},
				s = t.prevInput || {};
			(e.eventType === T || s.eventType === u) && (r = t.prevDelta = {
				x: s.deltaX || 0,
				y: s.deltaY || 0
			}, n = t.offsetDelta = {
				x: i.x,
				y: i.y
			}), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
		}

		function xe(t, e) {
			var i = t.lastInterval || e,
				n = e.timeStamp - i.timeStamp,
				r, s, o, h;
			if (e.eventType != E && (n > Ne || i.velocity === l)) {
				var v = e.deltaX - i.deltaX,
					m = e.deltaY - i.deltaY,
					D = Qt(n, v, m);
				s = D.x, o = D.y, r = d(D.x) > d(D.y) ? D.x : D.y, h = jt(v, m), t.lastInterval = e
			} else r = i.velocity, s = i.velocityX, o = i.velocityY, h = i.direction;
			e.velocity = r, e.velocityX = s, e.velocityY = o, e.direction = h
		}

		function $t(t) {
			for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
				clientX: p(t.pointers[i].clientX),
				clientY: p(t.pointers[i].clientY)
			}, i++;
			return {
				timeStamp: b(),
				pointers: e,
				center: Jt(e),
				deltaX: t.deltaX,
				deltaY: t.deltaY
			}
		}

		function Jt(t) {
			var e = t.length;
			if (e === 1) return {
				x: p(t[0].clientX),
				y: p(t[0].clientY)
			};
			for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++;
			return {
				x: p(i / e),
				y: p(n / e)
			}
		}

		function Qt(t, e, i) {
			return {
				x: e / t || 0,
				y: i / t || 0
			}
		}

		function jt(t, e) {
			return t === e ? at : d(t) >= d(e) ? t < 0 ? Z : $ : e < 0 ? J : Q
		}

		function lt(t, e, i) {
			i || (i = Zt);
			var n = e[i[0]] - t[i[0]],
				r = e[i[1]] - t[i[1]];
			return Math.sqrt(n * n + r * r)
		}

		function Pt(t, e, i) {
			i || (i = Zt);
			var n = e[i[0]] - t[i[0]],
				r = e[i[1]] - t[i[1]];
			return Math.atan2(r, n) * 180 / Math.PI
		}

		function Me(t, e) {
			return Pt(e[1], e[0], ot) + Pt(t[1], t[0], ot)
		}

		function De(t, e) {
			return lt(e[0], e[1], ot) / lt(t[0], t[1], ot)
		}
		var Le = {
				mousedown: T,
				mousemove: X,
				mouseup: u
			},
			Ue = "mousedown",
			Re = "mousemove mouseup";

		function ct() {
			this.evEl = Ue, this.evWin = Re, this.pressed = !1, P.apply(this, arguments)
		}
		y(ct, P, {
			handler: function(e) {
				var i = Le[e.type];
				i & T && e.button === 0 && (this.pressed = !0), i & X && e.which !== 1 && (i = u), this.pressed && (i & u && (this.pressed = !1), this.callback(this.manager, i, {
					pointers: [e],
					changedPointers: [e],
					pointerType: yt,
					srcEvent: e
				}))
			}
		});
		var we = {
				pointerdown: T,
				pointermove: X,
				pointerup: u,
				pointercancel: E,
				pointerout: E
			},
			be = {
				2: G,
				3: ye,
				4: yt,
				5: Pe
			},
			Kt = "pointerdown",
			te = "pointermove pointerup pointercancel";
		a.MSPointerEvent && !a.PointerEvent && (Kt = "MSPointerDown", te = "MSPointerMove MSPointerUp MSPointerCancel");

		function Nt() {
			this.evEl = Kt, this.evWin = te, P.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}
		y(Nt, P, {
			handler: function(e) {
				var i = this.store,
					n = !1,
					r = e.type.toLowerCase().replace("ms", ""),
					s = we[r],
					o = be[e.pointerType] || e.pointerType,
					h = o == G,
					v = W(i, e.pointerId, "pointerId");
				s & T && (e.button === 0 || h) ? v < 0 && (i.push(e), v = i.length - 1) : s & (u | E) && (n = !0), !(v < 0) && (i[v] = e, this.callback(this.manager, s, {
					pointers: i,
					changedPointers: [e],
					pointerType: o,
					srcEvent: e
				}), n && i.splice(v, 1))
			}
		});
		var He = {
				touchstart: T,
				touchmove: X,
				touchend: u,
				touchcancel: E
			},
			Fe = "touchstart",
			Ye = "touchstart touchmove touchend touchcancel";

		function ee() {
			this.evTarget = Fe, this.evWin = Ye, this.started = !1, P.apply(this, arguments)
		}
		y(ee, P, {
			handler: function(e) {
				var i = He[e.type];
				if (i === T && (this.started = !0), !!this.started) {
					var n = Xe.call(this, e, i);
					i & (u | E) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, i, {
						pointers: n[0],
						changedPointers: n[1],
						pointerType: G,
						srcEvent: e
					})
				}
			}
		});

		function Xe(t, e) {
			var i = rt(t.touches),
				n = rt(t.changedTouches);
			return e & (u | E) && (i = Wt(i.concat(n), "identifier", !0)), [i, n]
		}
		var ke = {
				touchstart: T,
				touchmove: X,
				touchend: u,
				touchcancel: E
			},
			qe = "touchstart touchmove touchend touchcancel";

		function ut() {
			this.evTarget = qe, this.targetIds = {}, P.apply(this, arguments)
		}
		y(ut, P, {
			handler: function(e) {
				var i = ke[e.type],
					n = Ve.call(this, e, i);
				n && this.callback(this.manager, i, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: G,
					srcEvent: e
				})
			}
		});

		function Ve(t, e) {
			var i = rt(t.touches),
				n = this.targetIds;
			if (e & (T | X) && i.length === 1) return n[i[0].identifier] = !0, [i, i];
			var r, s, o = rt(t.changedTouches),
				h = [],
				v = this.target;
			if (s = i.filter(function(m) {
					return Vt(m.target, v)
				}), e === T)
				for (r = 0; r < s.length;) n[s[r].identifier] = !0, r++;
			for (r = 0; r < o.length;) n[o[r].identifier] && h.push(o[r]), e & (u | E) && delete n[o[r].identifier], r++;
			if (h.length) return [Wt(s.concat(h), "identifier", !0), h]
		}
		var We = 2500,
			ie = 25;

		function Ct() {
			P.apply(this, arguments);
			var t = Et(this.handler, this);
			this.touch = new ut(this.manager, t), this.mouse = new ct(this.manager, t), this.primaryTouch = null, this.lastTouches = []
		}
		y(Ct, P, {
			handler: function(e, i, n) {
				var r = n.pointerType == G,
					s = n.pointerType == yt;
				if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
					if (r) Be.call(this, i, n);
					else if (s && ze.call(this, n)) return;
					this.callback(e, i, n)
				}
			},
			destroy: function() {
				this.touch.destroy(), this.mouse.destroy()
			}
		});

		function Be(t, e) {
			t & T ? (this.primaryTouch = e.changedPointers[0].identifier, ne.call(this, e)) : t & (u | E) && ne.call(this, e)
		}

		function ne(t) {
			var e = t.changedPointers[0];
			if (e.identifier === this.primaryTouch) {
				var i = {
					x: e.clientX,
					y: e.clientY
				};
				this.lastTouches.push(i);
				var n = this.lastTouches,
					r = function() {
						var s = n.indexOf(i);
						s > -1 && n.splice(s, 1)
					};
				setTimeout(r, We)
			}
		}

		function ze(t) {
			for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
				var r = this.lastTouches[n],
					s = Math.abs(e - r.x),
					o = Math.abs(i - r.y);
				if (s <= ie && o <= ie) return !0
			}
			return !1
		}
		var re = st(z.style, "touchAction"),
			se = re !== l,
			ae = "compute",
			oe = "auto",
			Ot = "manipulation",
			q = "none",
			j = "pan-x",
			K = "pan-y",
			ht = Ze();

		function At(t, e) {
			this.manager = t, this.set(e)
		}
		At.prototype = {
			set: function(t) {
				t == ae && (t = this.compute()), se && this.manager.element.style && ht[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim()
			},
			update: function() {
				this.set(this.manager.options.touchAction)
			},
			compute: function() {
				var t = [];
				return L(this.manager.recognizers, function(e) {
					It(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
				}), Ge(t.join(" "))
			},
			preventDefaults: function(t) {
				var e = t.srcEvent,
					i = t.offsetDirection;
				if (this.manager.session.prevented) {
					e.preventDefault();
					return
				}
				var n = this.actions,
					r = Y(n, q) && !ht[q],
					s = Y(n, K) && !ht[K],
					o = Y(n, j) && !ht[j];
				if (r) {
					var h = t.pointers.length === 1,
						v = t.distance < 2,
						m = t.deltaTime < 250;
					if (h && v && m) return
				}
				if (!(o && s) && (r || s && i & x || o && i & k)) return this.preventSrc(e)
			},
			preventSrc: function(t) {
				this.manager.session.prevented = !0, t.preventDefault()
			}
		};

		function Ge(t) {
			if (Y(t, q)) return q;
			var e = Y(t, j),
				i = Y(t, K);
			return e && i ? q : e || i ? e ? j : K : Y(t, Ot) ? Ot : oe
		}

		function Ze() {
			if (!se) return !1;
			var t = {},
				e = a.CSS && a.CSS.supports;
			return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
				t[i] = e ? a.CSS.supports("touch-action", i) : !0
			}), t
		}
		var ft = 1,
			N = 2,
			B = 4,
			H = 8,
			U = H,
			tt = 16,
			M = 32;

		function R(t) {
			this.options = S({}, this.defaults, t || {}), this.id = _e(), this.manager = null, this.options.enable = qt(this.options.enable, !0), this.state = ft, this.simultaneous = {}, this.requireFail = []
		}
		R.prototype = {
			defaults: {},
			set: function(t) {
				return S(this.options, t), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function(t) {
				if (V(t, "recognizeWith", this)) return this;
				var e = this.simultaneous;
				return t = vt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
			},
			dropRecognizeWith: function(t) {
				return V(t, "dropRecognizeWith", this) ? this : (t = vt(t, this), delete this.simultaneous[t.id], this)
			},
			requireFailure: function(t) {
				if (V(t, "requireFailure", this)) return this;
				var e = this.requireFail;
				return t = vt(t, this), W(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
			},
			dropRequireFailure: function(t) {
				if (V(t, "dropRequireFailure", this)) return this;
				t = vt(t, this);
				var e = W(this.requireFail, t);
				return e > -1 && this.requireFail.splice(e, 1), this
			},
			hasRequireFailures: function() {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function(t) {
				return !!this.simultaneous[t.id]
			},
			emit: function(t) {
				var e = this,
					i = this.state;

				function n(r) {
					e.manager.emit(r, t)
				}
				i < H && n(e.options.event + le(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= H && n(e.options.event + le(i))
			},
			tryEmit: function(t) {
				if (this.canEmit()) return this.emit(t);
				this.state = M
			},
			canEmit: function() {
				for (var t = 0; t < this.requireFail.length;) {
					if (!(this.requireFail[t].state & (M | ft))) return !1;
					t++
				}
				return !0
			},
			recognize: function(t) {
				var e = S({}, t);
				if (!It(this.options.enable, [this, e])) {
					this.reset(), this.state = M;
					return
				}
				this.state & (U | tt | M) && (this.state = ft), this.state = this.process(e), this.state & (N | B | H | tt) && this.tryEmit(e)
			},
			process: function(t) {},
			getTouchAction: function() {},
			reset: function() {}
		};

		function le(t) {
			return t & tt ? "cancel" : t & H ? "end" : t & B ? "move" : t & N ? "start" : ""
		}

		function ce(t) {
			return t == Q ? "down" : t == J ? "up" : t == Z ? "left" : t == $ ? "right" : ""
		}

		function vt(t, e) {
			var i = e.manager;
			return i ? i.get(t) : t
		}

		function O() {
			R.apply(this, arguments)
		}
		y(O, R, {
			defaults: {
				pointers: 1
			},
			attrTest: function(t) {
				var e = this.options.pointers;
				return e === 0 || t.pointers.length === e
			},
			process: function(t) {
				var e = this.state,
					i = t.eventType,
					n = e & (N | B),
					r = this.attrTest(t);
				return n && (i & E || !r) ? e | tt : n || r ? i & u ? e | H : e & N ? e | B : N : M
			}
		});

		function pt() {
			O.apply(this, arguments), this.pX = null, this.pY = null
		}
		y(pt, O, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: Gt
			},
			getTouchAction: function() {
				var t = this.options.direction,
					e = [];
				return t & x && e.push(K), t & k && e.push(j), e
			},
			directionTest: function(t) {
				var e = this.options,
					i = !0,
					n = t.distance,
					r = t.direction,
					s = t.deltaX,
					o = t.deltaY;
				return r & e.direction || (e.direction & x ? (r = s === 0 ? at : s < 0 ? Z : $, i = s != this.pX, n = Math.abs(t.deltaX)) : (r = o === 0 ? at : o < 0 ? J : Q, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
			},
			attrTest: function(t) {
				return O.prototype.attrTest.call(this, t) && (this.state & N || !(this.state & N) && this.directionTest(t))
			},
			emit: function(t) {
				this.pX = t.deltaX, this.pY = t.deltaY;
				var e = ce(t.direction);
				e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
			}
		});

		function St() {
			O.apply(this, arguments)
		}
		y(St, O, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [q]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & N)
			},
			emit: function(t) {
				if (t.scale !== 1) {
					var e = t.scale < 1 ? "in" : "out";
					t.additionalEvent = this.options.event + e
				}
				this._super.emit.call(this, t)
			}
		});

		function xt() {
			R.apply(this, arguments), this._timer = null, this._input = null
		}
		y(xt, R, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function() {
				return [oe]
			},
			process: function(t) {
				var e = this.options,
					i = t.pointers.length === e.pointers,
					n = t.distance < e.threshold,
					r = t.deltaTime > e.time;
				if (this._input = t, !n || !i || t.eventType & (u | E) && !r) this.reset();
				else if (t.eventType & T) this.reset(), this._timer = gt(function() {
					this.state = U, this.tryEmit()
				}, e.time, this);
				else if (t.eventType & u) return U;
				return M
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function(t) {
				this.state === U && (t && t.eventType & u ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = b(), this.manager.emit(this.options.event, this._input)))
			}
		});

		function Mt() {
			O.apply(this, arguments)
		}
		y(Mt, O, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [q]
			},
			attrTest: function(t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & N)
			}
		});

		function Dt() {
			O.apply(this, arguments)
		}
		y(Dt, O, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: x | k,
				pointers: 1
			},
			getTouchAction: function() {
				return pt.prototype.getTouchAction.call(this)
			},
			attrTest: function(t) {
				var e = this.options.direction,
					i;
				return e & (x | k) ? i = t.overallVelocity : e & x ? i = t.overallVelocityX : e & k && (i = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && d(i) > this.options.velocity && t.eventType & u
			},
			emit: function(t) {
				var e = ce(t.offsetDirection);
				e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
			}
		});

		function dt() {
			R.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
		}
		y(dt, R, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function() {
				return [Ot]
			},
			process: function(t) {
				var e = this.options,
					i = t.pointers.length === e.pointers,
					n = t.distance < e.threshold,
					r = t.deltaTime < e.time;
				if (this.reset(), t.eventType & T && this.count === 0) return this.failTimeout();
				if (n && r && i) {
					if (t.eventType != u) return this.failTimeout();
					var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
						o = !this.pCenter || lt(this.pCenter, t.center) < e.posThreshold;
					this.pTime = t.timeStamp, this.pCenter = t.center, !o || !s ? this.count = 1 : this.count += 1, this._input = t;
					var h = this.count % e.taps;
					if (h === 0) return this.hasRequireFailures() ? (this._timer = gt(function() {
						this.state = U, this.tryEmit()
					}, e.interval, this), N) : U
				}
				return M
			},
			failTimeout: function() {
				return this._timer = gt(function() {
					this.state = M
				}, this.options.interval, this), M
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function() {
				this.state == U && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		});

		function w(t, e) {
			return e = e || {}, e.recognizers = qt(e.recognizers, w.defaults.preset), new Lt(t, e)
		}
		w.VERSION = "2.0.7", w.defaults = {
			domEvents: !1,
			touchAction: ae,
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[Mt, {
					enable: !1
				}],
				[St, {
						enable: !1
					},
					["rotate"]
				],
				[Dt, {
					direction: x
				}],
				[pt, {
						direction: x
					},
					["swipe"]
				],
				[dt],
				[dt, {
						event: "doubletap",
						taps: 2
					},
					["tap"]
				],
				[xt]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		};
		var $e = 1,
			ue = 2;

		function Lt(t, e) {
			this.options = S({}, w.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = Ce(this), this.touchAction = new At(this, this.options.touchAction), he(this, !0), L(this.options.recognizers, function(i) {
				var n = this.add(new i[0](i[1]));
				i[2] && n.recognizeWith(i[2]), i[3] && n.requireFailure(i[3])
			}, this)
		}
		Lt.prototype = {
			set: function(t) {
				return S(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
			},
			stop: function(t) {
				this.session.stopped = t ? ue : $e
			},
			recognize: function(t) {
				var e = this.session;
				if (!e.stopped) {
					this.touchAction.preventDefaults(t);
					var i, n = this.recognizers,
						r = e.curRecognizer;
					(!r || r && r.state & U) && (r = e.curRecognizer = null);
					for (var s = 0; s < n.length;) i = n[s], e.stopped !== ue && (!r || i == r || i.canRecognizeWith(r)) ? i.recognize(t) : i.reset(), !r && i.state & (N | B | H) && (r = e.curRecognizer = i), s++
				}
			},
			get: function(t) {
				if (t instanceof R) return t;
				for (var e = this.recognizers, i = 0; i < e.length; i++)
					if (e[i].options.event == t) return e[i];
				return null
			},
			add: function(t) {
				if (V(t, "add", this)) return this;
				var e = this.get(t.options.event);
				return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
			},
			remove: function(t) {
				if (V(t, "remove", this)) return this;
				if (t = this.get(t), t) {
					var e = this.recognizers,
						i = W(e, t);
					i !== -1 && (e.splice(i, 1), this.touchAction.update())
				}
				return this
			},
			on: function(t, e) {
				if (t !== l && e !== l) {
					var i = this.handlers;
					return L(nt(t), function(n) {
						i[n] = i[n] || [], i[n].push(e)
					}), this
				}
			},
			off: function(t, e) {
				if (t !== l) {
					var i = this.handlers;
					return L(nt(t), function(n) {
						e ? i[n] && i[n].splice(W(i[n], e), 1) : delete i[n]
					}), this
				}
			},
			emit: function(t, e) {
				this.options.domEvents && Je(t, e);
				var i = this.handlers[t] && this.handlers[t].slice();
				if (!(!i || !i.length)) {
					e.type = t, e.preventDefault = function() {
						e.srcEvent.preventDefault()
					};
					for (var n = 0; n < i.length;) i[n](e), n++
				}
			},
			destroy: function() {
				this.element && he(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		};

		function he(t, e) {
			var i = t.element;
			if (i.style) {
				var n;
				L(t.options.cssProps, function(r, s) {
					n = st(i.style, s), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
				}), e || (t.oldCssProps = {})
			}
		}

		function Je(t, e) {
			var i = f.createEvent("Event");
			i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
		}
		S(w, {
			INPUT_START: T,
			INPUT_MOVE: X,
			INPUT_END: u,
			INPUT_CANCEL: E,
			STATE_POSSIBLE: ft,
			STATE_BEGAN: N,
			STATE_CHANGED: B,
			STATE_ENDED: H,
			STATE_RECOGNIZED: U,
			STATE_CANCELLED: tt,
			STATE_FAILED: M,
			DIRECTION_NONE: at,
			DIRECTION_LEFT: Z,
			DIRECTION_RIGHT: $,
			DIRECTION_UP: J,
			DIRECTION_DOWN: Q,
			DIRECTION_HORIZONTAL: x,
			DIRECTION_VERTICAL: k,
			DIRECTION_ALL: Gt,
			Manager: Lt,
			Input: P,
			TouchAction: At,
			TouchInput: ut,
			MouseInput: ct,
			PointerEventInput: Nt,
			TouchMouseInput: Ct,
			SingleTouchInput: ee,
			Recognizer: R,
			AttrRecognizer: O,
			Tap: dt,
			Pan: pt,
			Swipe: Dt,
			Pinch: St,
			Rotate: Mt,
			Press: xt,
			on: et,
			off: it,
			each: L,
			merge: Te,
			extend: kt,
			assign: S,
			inherit: y,
			bindFn: Et,
			prefixed: st
		});
		var Qe = typeof a < "u" ? a : typeof self < "u" ? self : {};
		Qe.Hammer = w, typeof l == "function" && l.amd ? l(function() {
			return w
		}) : c.exports ? c.exports = w : a[_] = w
	})(window, document, "Hammer")
})(de);
var gi = de.exports;
const fe = je(gi);
const Tt = 20,
	Ei = {
		__name: "ImageSequence",
		props: {
			images: Array
		},
		setup(c) {
			const a = c,
				f = Rt(0),
				_ = Rt(null),
				l = a.images.length;

			function F() {
				f.value = (f.value + 1) % l
			}

			function z() {
				if (f.value - 1 === -1) {
					f.value = l - 1;
					return
				}
				f.value = f.value - 1
			}
			return ei(() => {
				_.value.ondragstart = () => !1;
				const g = fe(_.value);
				let p = null;
				g.get("pan").set({
					direction: fe.DIRECTION_HORIZONTAL,
					threshold: 50
				});
				let d = 0;
				g.on("panstart", () => {
					clearInterval(p), d = 0
				}), g.on("pan", b => {
					for (; b.deltaX > d + Tt;) d += Tt, F();
					for (; b.deltaX < d - Tt;) d -= Tt, z()
				}), g.on("panend", () => {
					p = setInterval(() => {
						F()
					}, 100)
				}), p = setInterval(() => {
					F()
				}, 100)
			}), (g, p) => (I(), A("div", {
				class: "sequence",
				ref_key: "sequenceArea",
				ref: _
			}, [(I(!0), A(wt, null, bt(a.images, (d, b) => (I(), A("div", {
				class: mt(["sequence__image", {
					active: Ht(f) === b
				}]),
				style: pe(`background-image: url(${d})`)
			}, null, 6))), 256))], 512))
		}
	},
	Ii = _t(Ei, [
		["__scopeId", "data-v-0c1a2282"]
	]);
const yi = c => (Ft("data-v-6f0922df"), c = c(), Yt(), c),
	Pi = {
		class: "features-circle__shape"
	},
	Ni = yi(() => C("svg", {
		width: "1164",
		height: "970",
		viewBox: "0 0 1164 970",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, [C("circle", {
		cx: "582",
		cy: "485",
		r: "581.47",
		stroke: "white",
		"stroke-width": "1.06011"
	})], -1)),
	Ci = ["src"],
	Oi = {
		class: "feature-cricle__items"
	},
	Ai = ["innerHTML"],
	Si = {
		__name: "FeaturesCircle",
		props: {
			items: Array,
			popups: Array,
			background: String,
			note: String,
			image: String,
			mobileList: {
				type: Boolean,
				default: !0
			},
			showButtons: {
				type: Boolean,
				default: !1
			},
			isSequence: {
				type: Boolean,
				default: !1
			},
			sequenceImages: Array
		},
		setup(c) {
			const a = c,
				f = Rt(-1);

			function _(l) {
				f.value = l
			}
			return (l, F) => {
				const z = Ke;
				return I(), A("section", {
					class: mt(["features-circle", {
						about: a.mobileList,
						main: !a.mobileList
					}]),
					style: pe(`background: ${a.background}`)
				}, [C("div", Pi, [Ni, c.isSequence ? (I(), Ut(z, {
					key: 0
				}, {
					default: ii(() => [ni(Ii, {
						images: a.sequenceImages
					}, null, 8, ["images"])]),
					_: 1
				})) : (I(), A("img", {
					key: 1,
					src: a.image,
					class: "features-circle__img",
					alt: ""
				}, null, 8, Ci)), C("div", Oi, [(I(!0), A(wt, null, bt(a.items, (g, p) => (I(), Ut(ui, {
					class: mt(`item-${g.pos}`),
					"show-button": a.showButtons,
					title: g.title,
					index: p,
					event: g.event,
					onHandleClick: _
				}, null, 8, ["class", "show-button", "title", "index", "event"]))), 256))]), a.note ? (I(), A("p", {
					key: 2,
					class: "features-circle__note white",
					innerHTML: a.note
				}, null, 8, Ai)) : ve("", !0), (I(!0), A(wt, null, bt(a.popups, (g, p) => (I(), Ut(_i, {
					title: g.title,
					text: g.text,
					class: mt({
						active: Ht(f) == p
					}),
					onHandleClose: _
				}, null, 8, ["title", "text", "class"]))), 256))])], 6)
			}
		}
	},
	Li = _t(Si, [
		["__scopeId", "data-v-6f0922df"]
	]);
export {
	Li as F
};