(function (e) {
    function t(t) {
        for (var n, i, c = t[0], o = t[1], d = t[2], l = 0, f = []; l < c.length; l++) i = c[l], Object.prototype.hasOwnProperty.call(r, i) && r[i] && f.push(r[i][0]), r[i] = 0;
        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        u && u(t);
        while (f.length) f.shift()();
        return a.push.apply(a, d || []), s()
    }

    function s() {
        for (var e, t = 0; t < a.length; t++) {
            for (var s = a[t], n = !0, c = 1; c < s.length; c++) {
                var o = s[c];
                0 !== r[o] && (n = !1)
            }
            n && (a.splice(t--, 1), e = i(i.s = s[0]))
        }
        return e
    }

    var n = {}, r = {app: 0}, a = [];

    function i(t) {
        if (n[t]) return n[t].exports;
        var s = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }

    i.m = e, i.c = n, i.d = function (e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: s})
    }, i.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) i.d(s, n, function (t) {
            return e[t]
        }.bind(null, n));
        return s
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], o = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var d = 0; d < c.length; d++) t(c[d]);
    var u = o;
    a.push([0, "chunk-vendors"]), s()
})({
    0: function (e, t, s) {
        e.exports = s("56d7")
    }, "034f": function (e, t, s) {
        "use strict";
        s("85ec")
    }, "32da": function (e, t, s) {
        e.exports = s.p + "./media/viking.d672094c.mp3"
    }, 4678: function (e, t, s) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function r(e) {
            var t = a(e);
            return s(t)
        }

        function a(e) {
            if (!s.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }

        r.keys = function () {
            return Object.keys(n)
        }, r.resolve = a, e.exports = r, r.id = "4678"
    }, "56d7": function (e, t, s) {
        "use strict";
        s.r(t);
        s("e260"), s("e6cf"), s("cca6"), s("a79d");
        var n = s("2b0e"), r = function () {
            var e = this, t = e.$createElement, s = e._self._c || t;
            return s("div", {attrs: {id: "app"}}, [e._m(0), s("main", [e._v(" " + e._s(e.currentTime) + " "), s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentTime,
                    expression: "currentTime"
                }],
                ref: "range",
                attrs: {type: "range", min: "0", max: e.current.duration},
                domProps: {value: e.currentTime},
                on: {
                    __r: function (t) {
                        e.currentTime = t.target.value
                    }
                }
            }), s("section", {staticClass: "player"}, [e._v(" " + e._s(e.currentTimeConverted) + " / " + e._s(e.current.durationConverted) + " "), s("h2", {staticClass: "song-title"}, [e._v(e._s(e.current.title) + " - "), s("span", [e._v(e._s(e.current.artist))]), e._v(" " + e._s(e.current.durationConverted) + " ")]), s("div", {staticClass: "controls"}, [s("button", {
                staticClass: "prev",
                on: {click: e.prev}
            }, [e._v("Prev")]), e.isPlaying ? s("button", {
                staticClass: "pause",
                on: {click: e.pause}
            }, [e._v("Pause")]) : s("button", {
                staticClass: "play",
                on: {click: e.resume}
            }, [e._v("Play")]), s("button", {
                staticClass: "next",
                on: {click: e.next}
            }, [e._v("Next")])])]), s("section", {staticClass: "playlist"}, [s("h3", [e._v("The playlist")]), e._l(e.songs, (function (t) {
                return s("button", {
                    key: t.src,
                    class: t.src === e.current.src ? "song playing" : "song",
                    on: {
                        click: function (s) {
                            t.src !== e.current.src && e.play(t)
                        }
                    }
                }, [e._v(" " + e._s(t.title) + " - " + e._s(t.artist) + " ")])
            }))], 2)])])
        }, a = [function () {
            var e = this, t = e.$createElement, s = e._self._c || t;
            return s("header", [s("h1", [e._v("My music")])])
        }], i = s("c1df"), c = s.n(i), o = (s("4d90"), s("99af"), function (e) {
            var t = String(Math.floor(e % 60) || 0).padStart("2", "0"),
                s = String(Math.floor(e / 60) || 0).padStart("2", "0");
            return "".concat(s, ":").concat(t)
        }), d = {
            name: "App", data: function () {
                return {
                    current: {},
                    index: 0,
                    currentTimeConverted: "00:00",
                    currentTime: 0,
                    value: 0,
                    isPlaying: !1,
                    songs: [{
                        title: "Her Mannelig",
                        artist: "Garmarna",
                        src: s("dae8"),
                        durationConverted: null,
                        duration: null
                    }, {
                        title: "Voluspa",
                        artist: "Duivelaspack",
                        src: s("861c"),
                        durationConverted: null,
                        duration: null
                    }, {
                        title: "Viking fight music",
                        artist: "Viking fight music",
                        src: s("32da"),
                        durationConverted: null,
                        duration: null
                    }],
                    player: new Audio
                }
            }, methods: {
                updateTime: function (e) {
                    this.currentTime = e.path[0].currentTime, this.currentTimeConverted = "".concat(o(this.currentTime))
                }, play: function (e) {
                    var t = this;
                    this.index = this.songs.indexOf(e), this.player.currentTime = this.currentTime, this.isPlaying = !0, "undefined" != typeof e.src && (this.current = e, this.player.src = this.current.src), "string" !== typeof e.durationConverted && (this.player.onloadeddata = function (e) {
                        var s = c.a.duration(e.path[0].duration, "seconds"), n = s.minutes(),
                            r = s.seconds() < 10 ? "0" + s.seconds() : s.seconds();
                        t.current.durationConverted = n + ":" + r, t.current.duration = Math.floor(e.path[0].duration)
                    }), this.player.play(), this.player.ontimeupdate = function (e) {
                        t.updateTime(e)
                    }, this.player.onended = function () {
                        return t.next
                    }
                }, pause: function () {
                    this.player.pause(), this.isPlaying = !1
                }, resume: function () {
                    this.player.currentTime = this.currentTime, this.player.play(), this.isPlaying = !0
                }, next: function () {
                    console.log("next"), this.index === this.songs.length - 1 ? this.index = 0 : this.index++, this.currentTime = 0, this.play(this.songs[this.index])
                }, prev: function () {
                    0 === this.index ? this.index = this.songs.length - 1 : this.index--, this.play(this.songs[this.index])
                }
            }, created: function () {
                var e = this;
                this.current = this.songs[this.index], this.player.src = this.current.src, this.player.onloadeddata = function (t) {
                    var s = c.a.duration(t.path[0].duration, "seconds"), n = s.minutes(),
                        r = s.seconds() < 10 ? "0" + s.seconds() : s.seconds();
                    e.current.durationConverted = n + ":" + r, e.current.duration = Math.floor(t.path[0].duration)
                }, this.player.ontimeupdate = function (t) {
                    e.updateTime(t)
                }, this.player.addEventListener("ended", function () {
                    this.next()
                }.bind(this))
            }
        }, u = d, l = (s("034f"), s("2877")), f = Object(l["a"])(u, r, a, !1, null, null, null), j = f.exports;
        n["a"].config.productionTip = !1, new n["a"]({
            render: function (e) {
                return e(j)
            }
        }).$mount("#app")
    }, "85ec": function (e, t, s) {
    }, "861c": function (e, t, s) {
        e.exports = s.p + "./../media/Duivelspack -Voluspa-Die Weissagung aus der Lieder-Edda.0be2811c.mp3"
    }, dae8: function (e, t, s) {
        e.exports = s.p + "./media/Garmarna-Herr Mannelig.78789f59.mp3"
    }
});
//# sourceMappingURL=app.0c8bfa0c.js.map