/*! For license information please see main.312a6539.js.LICENSE.txt */ ! function () {
    var e = {
            4802: function (e, t, n) {
                var r, a, o;
                a = [], void 0 === (o = "function" === typeof (r = function () {
                    "use strict";

                    function t(e, t) {
                        return "undefined" == typeof t ? t = {
                            autoBom: !1
                        } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {
                            autoBom: !t
                        }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {
                            type: e.type
                        }) : e
                    }

                    function r(e, t, n) {
                        var r = new XMLHttpRequest;
                        r.open("GET", e), r.responseType = "blob", r.onload = function () {
                            l(r.response, t, n)
                        }, r.onerror = function () {
                            console.error("could not download file")
                        }, r.send()
                    }

                    function a(e) {
                        var t = new XMLHttpRequest;
                        t.open("HEAD", e, !1);
                        try {
                            t.send()
                        } catch (e) {}
                        return 200 <= t.status && 299 >= t.status
                    }

                    function o(e) {
                        try {
                            e.dispatchEvent(new MouseEvent("click"))
                        } catch (r) {
                            var t = document.createEvent("MouseEvents");
                            t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
                        }
                    }
                    var i = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof n.g && n.g.global === n.g ? n.g : void 0,
                        s = i.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
                        l = i.saveAs || ("object" != typeof window || window !== i ? function () {} : "download" in HTMLAnchorElement.prototype && !s ? function (e, t, n) {
                            var s = i.URL || i.webkitURL,
                                l = document.createElement("a");
                            t = t || e.name || "download", l.download = t, l.rel = "noopener", "string" == typeof e ? (l.href = e, l.origin === location.origin ? o(l) : a(l.href) ? r(e, t, n) : o(l, l.target = "_blank")) : (l.href = s.createObjectURL(e), setTimeout((function () {
                                s.revokeObjectURL(l.href)
                            }), 4e4), setTimeout((function () {
                                o(l)
                            }), 0))
                        } : "msSaveOrOpenBlob" in navigator ? function (e, n, i) {
                            if (n = n || e.name || "download", "string" != typeof e) navigator.msSaveOrOpenBlob(t(e, i), n);
                            else if (a(e)) r(e, n, i);
                            else {
                                var s = document.createElement("a");
                                s.href = e, s.target = "_blank", setTimeout((function () {
                                    o(s)
                                }))
                            }
                        } : function (e, t, n, a) {
                            if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), "string" == typeof e) return r(e, t, n);
                            var o = "application/octet-stream" === e.type,
                                l = /constructor/i.test(i.HTMLElement) || i.safari,
                                u = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if ((u || o && l || s) && "undefined" != typeof FileReader) {
                                var c = new FileReader;
                                c.onloadend = function () {
                                    var e = c.result;
                                    e = u ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = e : location = e, a = null
                                }, c.readAsDataURL(e)
                            } else {
                                var f = i.URL || i.webkitURL,
                                    d = f.createObjectURL(e);
                                a ? a.location = d : location.href = d, a = null, setTimeout((function () {
                                    f.revokeObjectURL(d)
                                }), 4e4)
                            }
                        });
                    i.saveAs = l.saveAs = l, e.exports = l
                }) ? r.apply(t, a) : r) || (e.exports = o)
            },
            3540: function (e, t, n) {
                "use strict";
                var r = n(6690).default,
                    a = n(9728).default,
                    o = n(1655).default,
                    i = n(6389).default,
                    s = n(7061).default,
                    l = this && this.__awaiter || function (e, t, n, r) {
                        return new(n || (n = Promise))((function (a, o) {
                            function i(e) {
                                try {
                                    l(r.next(e))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function s(e) {
                                try {
                                    l(r.throw(e))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                    e(t)
                                }))).then(i, s)
                            }
                            l((r = r.apply(e, t || [])).next())
                        }))
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OpenAIApi = t.OpenAIApiFactory = t.OpenAIApiFp = t.OpenAIApiAxiosParamCreator = t.CreateImageRequestResponseFormatEnum = t.CreateImageRequestSizeEnum = void 0;
                var u = n(5237),
                    c = n(3215),
                    f = n(1751);
                t.CreateImageRequestSizeEnum = {
                    _256x256: "256x256",
                    _512x512: "512x512",
                    _1024x1024: "1024x1024"
                }, t.CreateImageRequestResponseFormatEnum = {
                    Url: "url",
                    B64Json: "b64_json"
                }, t.OpenAIApiAxiosParamCreator = function (e) {
                    var t = this;
                    return {
                        cancelFineTune: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("cancelFineTune", "fineTuneId", n), a = "/fine-tunes/{fine_tune_id}/cancel".replace("{".concat("fine_tune_id", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "POST"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createAnswer: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createAnswer", "createAnswerRequest", n), "/answers", a = new URL("/answers", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createClassification: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createClassification", "createClassificationRequest", n), "/classifications", a = new URL("/classifications", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createCompletion: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createCompletion", "createCompletionRequest", n), "/completions", a = new URL("/completions", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createEdit: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createEdit", "createEditRequest", n), "/edits", a = new URL("/edits", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createEmbedding: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createEmbedding", "createEmbeddingRequest", n), "/embeddings", a = new URL("/embeddings", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createFile: function (n, r) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var o, i, l, u, f, d, p;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createFile", "file", n), c.assertParamExists("createFile", "purpose", r), "/files", o = new URL("/files", c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "POST"
                                            }, i), a), u = {}, f = {}, d = new(e && e.formDataCtor || FormData), void 0 !== n && d.append("file", n), void 0 !== r && d.append("purpose", r), u["Content-Type"] = "multipart/form-data", c.setSearchParams(o, f), p = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, u), d.getHeaders()), p), a.headers), l.data = d, t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createFineTune: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createFineTune", "createFineTuneRequest", n), "/fine-tunes", a = new URL("/fine-tunes", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createImage: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createImage", "createImageRequest", n), "/images/generations", a = new URL("/images/generations", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createImageEdit: function (n, r, a, o, i, u, f) {
                            var d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var l, p, h, m, v, g, b;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createImageEdit", "image", n), c.assertParamExists("createImageEdit", "mask", r), c.assertParamExists("createImageEdit", "prompt", a), "/images/edits", l = new URL("/images/edits", c.DUMMY_BASE_URL), e && (p = e.baseOptions), h = Object.assign(Object.assign({
                                                method: "POST"
                                            }, p), d), m = {}, v = {}, g = new(e && e.formDataCtor || FormData), void 0 !== n && g.append("image", n), void 0 !== r && g.append("mask", r), void 0 !== a && g.append("prompt", a), void 0 !== o && g.append("n", o), void 0 !== i && g.append("size", i), void 0 !== u && g.append("response_format", u), void 0 !== f && g.append("user", f), m["Content-Type"] = "multipart/form-data", c.setSearchParams(l, v), b = p && p.headers ? p.headers : {}, h.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, m), g.getHeaders()), b), d.headers), h.data = g, t.abrupt("return", {
                                                url: c.toPathString(l),
                                                options: h
                                            });
                                        case 23:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createImageVariation: function (n, r, a, o, i) {
                            var u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var l, f, d, p, h, m, v;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createImageVariation", "image", n), "/images/variations", l = new URL("/images/variations", c.DUMMY_BASE_URL), e && (f = e.baseOptions), d = Object.assign(Object.assign({
                                                method: "POST"
                                            }, f), u), p = {}, h = {}, m = new(e && e.formDataCtor || FormData), void 0 !== n && m.append("image", n), void 0 !== r && m.append("n", r), void 0 !== a && m.append("size", a), void 0 !== o && m.append("response_format", o), void 0 !== i && m.append("user", i), p["Content-Type"] = "multipart/form-data", c.setSearchParams(l, h), v = f && f.headers ? f.headers : {}, d.headers = Object.assign(Object.assign(Object.assign(Object.assign({}, p), m.getHeaders()), v), u.headers), d.data = m, t.abrupt("return", {
                                                url: c.toPathString(l),
                                                options: d
                                            });
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createModeration: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createModeration", "createModerationRequest", n), "/moderations", a = new URL("/moderations", c.DUMMY_BASE_URL), e && (o = e.baseOptions), i = Object.assign(Object.assign({
                                                method: "POST"
                                            }, o), r), u = {}, (l = {})["Content-Type"] = "application/json", c.setSearchParams(a, u), f = o && o.headers ? o.headers : {}, i.headers = Object.assign(Object.assign(Object.assign({}, l), f), r.headers), i.data = c.serializeDataIfNeeded(n, i, e), t.abrupt("return", {
                                                url: c.toPathString(a),
                                                options: i
                                            });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        createSearch: function (n, r) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var o, i, l, u, f, d, p;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("createSearch", "engineId", n), c.assertParamExists("createSearch", "createSearchRequest", r), o = "/engines/{engine_id}/search".replace("{".concat("engine_id", "}"), encodeURIComponent(String(n))), i = new URL(o, c.DUMMY_BASE_URL), e && (l = e.baseOptions), u = Object.assign(Object.assign({
                                                method: "POST"
                                            }, l), a), d = {}, (f = {})["Content-Type"] = "application/json", c.setSearchParams(i, d), p = l && l.headers ? l.headers : {}, u.headers = Object.assign(Object.assign(Object.assign({}, f), p), a.headers), u.data = c.serializeDataIfNeeded(r, u, e), t.abrupt("return", {
                                                url: c.toPathString(i),
                                                options: u
                                            });
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        deleteFile: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("deleteFile", "fileId", n), a = "/files/{file_id}".replace("{".concat("file_id", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "DELETE"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        deleteModel: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("deleteModel", "model", n), a = "/models/{model}".replace("{".concat("model", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "DELETE"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        downloadFile: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("downloadFile", "fileId", n), a = "/files/{file_id}/content".replace("{".concat("file_id", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "GET"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        listEngines: function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var r, a, o, i, l, u;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return "/engines", r = new URL("/engines", c.DUMMY_BASE_URL), e && (a = e.baseOptions), o = Object.assign(Object.assign({
                                                method: "GET"
                                            }, a), n), i = {}, l = {}, c.setSearchParams(r, l), u = a && a.headers ? a.headers : {}, o.headers = Object.assign(Object.assign(Object.assign({}, i), u), n.headers), t.abrupt("return", {
                                                url: c.toPathString(r),
                                                options: o
                                            });
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        listFiles: function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var r, a, o, i, l, u;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return "/files", r = new URL("/files", c.DUMMY_BASE_URL), e && (a = e.baseOptions), o = Object.assign(Object.assign({
                                                method: "GET"
                                            }, a), n), i = {}, l = {}, c.setSearchParams(r, l), u = a && a.headers ? a.headers : {}, o.headers = Object.assign(Object.assign(Object.assign({}, i), u), n.headers), t.abrupt("return", {
                                                url: c.toPathString(r),
                                                options: o
                                            });
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        listFineTuneEvents: function (n, r) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var o, i, l, u, f, d, p;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("listFineTuneEvents", "fineTuneId", n), o = "/fine-tunes/{fine_tune_id}/events".replace("{".concat("fine_tune_id", "}"), encodeURIComponent(String(n))), i = new URL(o, c.DUMMY_BASE_URL), e && (l = e.baseOptions), u = Object.assign(Object.assign({
                                                method: "GET"
                                            }, l), a), f = {}, d = {}, void 0 !== r && (d.stream = r), c.setSearchParams(i, d), p = l && l.headers ? l.headers : {}, u.headers = Object.assign(Object.assign(Object.assign({}, f), p), a.headers), t.abrupt("return", {
                                                url: c.toPathString(i),
                                                options: u
                                            });
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        listFineTunes: function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var r, a, o, i, l, u;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return "/fine-tunes", r = new URL("/fine-tunes", c.DUMMY_BASE_URL), e && (a = e.baseOptions), o = Object.assign(Object.assign({
                                                method: "GET"
                                            }, a), n), i = {}, l = {}, c.setSearchParams(r, l), u = a && a.headers ? a.headers : {}, o.headers = Object.assign(Object.assign(Object.assign({}, i), u), n.headers), t.abrupt("return", {
                                                url: c.toPathString(r),
                                                options: o
                                            });
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        listModels: function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var r, a, o, i, l, u;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return "/models", r = new URL("/models", c.DUMMY_BASE_URL), e && (a = e.baseOptions), o = Object.assign(Object.assign({
                                                method: "GET"
                                            }, a), n), i = {}, l = {}, c.setSearchParams(r, l), u = a && a.headers ? a.headers : {}, o.headers = Object.assign(Object.assign(Object.assign({}, i), u), n.headers), t.abrupt("return", {
                                                url: c.toPathString(r),
                                                options: o
                                            });
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        retrieveEngine: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("retrieveEngine", "engineId", n), a = "/engines/{engine_id}".replace("{".concat("engine_id", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "GET"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        retrieveFile: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("retrieveFile", "fileId", n), a = "/files/{file_id}".replace("{".concat("file_id", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "GET"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        retrieveFineTune: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("retrieveFineTune", "fineTuneId", n), a = "/fine-tunes/{fine_tune_id}".replace("{".concat("fine_tune_id", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "GET"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        },
                        retrieveModel: function (n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return l(t, void 0, void 0, s().mark((function t() {
                                var a, o, i, l, u, f, d;
                                return s().wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return c.assertParamExists("retrieveModel", "model", n), a = "/models/{model}".replace("{".concat("model", "}"), encodeURIComponent(String(n))), o = new URL(a, c.DUMMY_BASE_URL), e && (i = e.baseOptions), l = Object.assign(Object.assign({
                                                method: "GET"
                                            }, i), r), u = {}, f = {}, c.setSearchParams(o, f), d = i && i.headers ? i.headers : {}, l.headers = Object.assign(Object.assign(Object.assign({}, u), d), r.headers), t.abrupt("return", {
                                                url: c.toPathString(o),
                                                options: l
                                            });
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        }
                    }
                }, t.OpenAIApiFp = function (e) {
                    var n = t.OpenAIApiAxiosParamCreator(e);
                    return {
                        cancelFineTune: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.cancelFineTune(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createAnswer: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createAnswer(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createClassification: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createClassification(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createCompletion: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createCompletion(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createEdit: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createEdit(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createEmbedding: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createEmbedding(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createFile: function (t, r, a) {
                            return l(this, void 0, void 0, s().mark((function o() {
                                var i;
                                return s().wrap((function (o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            return o.next = 2, n.createFile(t, r, a);
                                        case 2:
                                            return i = o.sent, o.abrupt("return", c.createRequestFunction(i, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o)
                            })))
                        },
                        createFineTune: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createFineTune(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createImage: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createImage(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createImageEdit: function (t, r, a, o, i, d, p, h) {
                            return l(this, void 0, void 0, s().mark((function l() {
                                var m;
                                return s().wrap((function (s) {
                                    for (;;) switch (s.prev = s.next) {
                                        case 0:
                                            return s.next = 2, n.createImageEdit(t, r, a, o, i, d, p, h);
                                        case 2:
                                            return m = s.sent, s.abrupt("return", c.createRequestFunction(m, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return s.stop()
                                    }
                                }), l)
                            })))
                        },
                        createImageVariation: function (t, r, a, o, i, d) {
                            return l(this, void 0, void 0, s().mark((function l() {
                                var p;
                                return s().wrap((function (s) {
                                    for (;;) switch (s.prev = s.next) {
                                        case 0:
                                            return s.next = 2, n.createImageVariation(t, r, a, o, i, d);
                                        case 2:
                                            return p = s.sent, s.abrupt("return", c.createRequestFunction(p, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return s.stop()
                                    }
                                }), l)
                            })))
                        },
                        createModeration: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.createModeration(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        createSearch: function (t, r, a) {
                            return l(this, void 0, void 0, s().mark((function o() {
                                var i;
                                return s().wrap((function (o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            return o.next = 2, n.createSearch(t, r, a);
                                        case 2:
                                            return i = o.sent, o.abrupt("return", c.createRequestFunction(i, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o)
                            })))
                        },
                        deleteFile: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.deleteFile(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        deleteModel: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.deleteModel(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        downloadFile: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.downloadFile(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        listEngines: function (t) {
                            return l(this, void 0, void 0, s().mark((function r() {
                                var a;
                                return s().wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, n.listEngines(t);
                                        case 2:
                                            return a = r.sent, r.abrupt("return", c.createRequestFunction(a, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))
                        },
                        listFiles: function (t) {
                            return l(this, void 0, void 0, s().mark((function r() {
                                var a;
                                return s().wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, n.listFiles(t);
                                        case 2:
                                            return a = r.sent, r.abrupt("return", c.createRequestFunction(a, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))
                        },
                        listFineTuneEvents: function (t, r, a) {
                            return l(this, void 0, void 0, s().mark((function o() {
                                var i;
                                return s().wrap((function (o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            return o.next = 2, n.listFineTuneEvents(t, r, a);
                                        case 2:
                                            return i = o.sent, o.abrupt("return", c.createRequestFunction(i, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o)
                            })))
                        },
                        listFineTunes: function (t) {
                            return l(this, void 0, void 0, s().mark((function r() {
                                var a;
                                return s().wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, n.listFineTunes(t);
                                        case 2:
                                            return a = r.sent, r.abrupt("return", c.createRequestFunction(a, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))
                        },
                        listModels: function (t) {
                            return l(this, void 0, void 0, s().mark((function r() {
                                var a;
                                return s().wrap((function (r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, n.listModels(t);
                                        case 2:
                                            return a = r.sent, r.abrupt("return", c.createRequestFunction(a, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))
                        },
                        retrieveEngine: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.retrieveEngine(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        retrieveFile: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.retrieveFile(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        retrieveFineTune: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.retrieveFineTune(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        },
                        retrieveModel: function (t, r) {
                            return l(this, void 0, void 0, s().mark((function a() {
                                var o;
                                return s().wrap((function (a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return a.next = 2, n.retrieveModel(t, r);
                                        case 2:
                                            return o = a.sent, a.abrupt("return", c.createRequestFunction(o, u.default, f.BASE_PATH, e));
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))
                        }
                    }
                }, t.OpenAIApiFactory = function (e, n, r) {
                    var a = t.OpenAIApiFp(e);
                    return {
                        cancelFineTune: function (e, t) {
                            return a.cancelFineTune(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createAnswer: function (e, t) {
                            return a.createAnswer(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createClassification: function (e, t) {
                            return a.createClassification(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createCompletion: function (e, t) {
                            return a.createCompletion(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createEdit: function (e, t) {
                            return a.createEdit(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createEmbedding: function (e, t) {
                            return a.createEmbedding(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createFile: function (e, t, o) {
                            return a.createFile(e, t, o).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createFineTune: function (e, t) {
                            return a.createFineTune(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createImage: function (e, t) {
                            return a.createImage(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createImageEdit: function (e, t, o, i, s, l, u, c) {
                            return a.createImageEdit(e, t, o, i, s, l, u, c).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createImageVariation: function (e, t, o, i, s, l) {
                            return a.createImageVariation(e, t, o, i, s, l).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createModeration: function (e, t) {
                            return a.createModeration(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        createSearch: function (e, t, o) {
                            return a.createSearch(e, t, o).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        deleteFile: function (e, t) {
                            return a.deleteFile(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        deleteModel: function (e, t) {
                            return a.deleteModel(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        downloadFile: function (e, t) {
                            return a.downloadFile(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        listEngines: function (e) {
                            return a.listEngines(e).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        listFiles: function (e) {
                            return a.listFiles(e).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        listFineTuneEvents: function (e, t, o) {
                            return a.listFineTuneEvents(e, t, o).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        listFineTunes: function (e) {
                            return a.listFineTunes(e).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        listModels: function (e) {
                            return a.listModels(e).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        retrieveEngine: function (e, t) {
                            return a.retrieveEngine(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        retrieveFile: function (e, t) {
                            return a.retrieveFile(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        retrieveFineTune: function (e, t) {
                            return a.retrieveFineTune(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        },
                        retrieveModel: function (e, t) {
                            return a.retrieveModel(e, t).then((function (e) {
                                return e(r, n)
                            }))
                        }
                    }
                };
                var d = function (e) {
                    o(s, e);
                    var n = i(s);

                    function s() {
                        return r(this, s), n.apply(this, arguments)
                    }
                    return a(s, [{
                        key: "cancelFineTune",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).cancelFineTune(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createAnswer",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createAnswer(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createClassification",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createClassification(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createCompletion",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createCompletion(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createEdit",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createEdit(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createEmbedding",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createEmbedding(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createFile",
                        value: function (e, n, r) {
                            var a = this;
                            return t.OpenAIApiFp(this.configuration).createFile(e, n, r).then((function (e) {
                                return e(a.axios, a.basePath)
                            }))
                        }
                    }, {
                        key: "createFineTune",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createFineTune(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createImage",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createImage(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createImageEdit",
                        value: function (e, n, r, a, o, i, s, l) {
                            var u = this;
                            return t.OpenAIApiFp(this.configuration).createImageEdit(e, n, r, a, o, i, s, l).then((function (e) {
                                return e(u.axios, u.basePath)
                            }))
                        }
                    }, {
                        key: "createImageVariation",
                        value: function (e, n, r, a, o, i) {
                            var s = this;
                            return t.OpenAIApiFp(this.configuration).createImageVariation(e, n, r, a, o, i).then((function (e) {
                                return e(s.axios, s.basePath)
                            }))
                        }
                    }, {
                        key: "createModeration",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).createModeration(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "createSearch",
                        value: function (e, n, r) {
                            var a = this;
                            return t.OpenAIApiFp(this.configuration).createSearch(e, n, r).then((function (e) {
                                return e(a.axios, a.basePath)
                            }))
                        }
                    }, {
                        key: "deleteFile",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).deleteFile(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "deleteModel",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).deleteModel(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "downloadFile",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).downloadFile(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "listEngines",
                        value: function (e) {
                            var n = this;
                            return t.OpenAIApiFp(this.configuration).listEngines(e).then((function (e) {
                                return e(n.axios, n.basePath)
                            }))
                        }
                    }, {
                        key: "listFiles",
                        value: function (e) {
                            var n = this;
                            return t.OpenAIApiFp(this.configuration).listFiles(e).then((function (e) {
                                return e(n.axios, n.basePath)
                            }))
                        }
                    }, {
                        key: "listFineTuneEvents",
                        value: function (e, n, r) {
                            var a = this;
                            return t.OpenAIApiFp(this.configuration).listFineTuneEvents(e, n, r).then((function (e) {
                                return e(a.axios, a.basePath)
                            }))
                        }
                    }, {
                        key: "listFineTunes",
                        value: function (e) {
                            var n = this;
                            return t.OpenAIApiFp(this.configuration).listFineTunes(e).then((function (e) {
                                return e(n.axios, n.basePath)
                            }))
                        }
                    }, {
                        key: "listModels",
                        value: function (e) {
                            var n = this;
                            return t.OpenAIApiFp(this.configuration).listModels(e).then((function (e) {
                                return e(n.axios, n.basePath)
                            }))
                        }
                    }, {
                        key: "retrieveEngine",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).retrieveEngine(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "retrieveFile",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).retrieveFile(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "retrieveFineTune",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).retrieveFineTune(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }, {
                        key: "retrieveModel",
                        value: function (e, n) {
                            var r = this;
                            return t.OpenAIApiFp(this.configuration).retrieveModel(e, n).then((function (e) {
                                return e(r.axios, r.basePath)
                            }))
                        }
                    }]), s
                }(f.BaseAPI);
                t.OpenAIApi = d
            },
            1751: function (e, t, n) {
                "use strict";
                var r = n(1655).default,
                    a = n(6389).default,
                    o = n(3496).default,
                    i = n(9728).default,
                    s = n(6690).default;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.RequiredError = t.BaseAPI = t.COLLECTION_FORMATS = t.BASE_PATH = void 0;
                var l = n(5237);
                t.BASE_PATH = "https://api.openai.com/v1".replace(/\/+$/, ""), t.COLLECTION_FORMATS = {
                    csv: ",",
                    ssv: " ",
                    tsv: "\t",
                    pipes: "|"
                };
                var u = i((function e(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.BASE_PATH,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default;
                    s(this, e), this.basePath = r, this.axios = a, n && (this.configuration = n, this.basePath = n.basePath || this.basePath)
                }));
                t.BaseAPI = u;
                var c = function (e) {
                    r(n, e);
                    var t = a(n);

                    function n(e, r) {
                        var a;
                        return s(this, n), (a = t.call(this, r)).field = e, a.name = "RequiredError", a
                    }
                    return i(n)
                }(o(Error));
                t.RequiredError = c
            },
            3215: function (e, t, n) {
                "use strict";
                var r = n(7061).default,
                    a = this && this.__awaiter || function (e, t, n, r) {
                        return new(n || (n = Promise))((function (a, o) {
                            function i(e) {
                                try {
                                    l(r.next(e))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function s(e) {
                                try {
                                    l(r.throw(e))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                    e(t)
                                }))).then(i, s)
                            }
                            l((r = r.apply(e, t || [])).next())
                        }))
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createRequestFunction = t.toPathString = t.serializeDataIfNeeded = t.setSearchParams = t.setOAuthToObject = t.setBearerAuthToObject = t.setBasicAuthToObject = t.setApiKeyToObject = t.assertParamExists = t.DUMMY_BASE_URL = void 0;
                var o = n(1751);

                function i(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    "object" === typeof t ? Array.isArray(t) ? t.forEach((function (t) {
                        return i(e, t, n)
                    })) : Object.keys(t).forEach((function (r) {
                        return i(e, t[r], "".concat(n).concat("" !== n ? "." : "").concat(r))
                    })) : e.has(n) ? e.append(n, t) : e.set(n, t)
                }
                t.DUMMY_BASE_URL = "https://example.com", t.assertParamExists = function (e, t, n) {
                    if (null === n || void 0 === n) throw new o.RequiredError(t, "Required parameter ".concat(t, " was null or undefined when calling ").concat(e, "."))
                }, t.setApiKeyToObject = function (e, t, n) {
                    return a(this, void 0, void 0, r().mark((function a() {
                        var o;
                        return r().wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (!n || !n.apiKey) {
                                        r.next = 12;
                                        break
                                    }
                                    if ("function" !== typeof n.apiKey) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.next = 4, n.apiKey(t);
                                case 4:
                                    r.t0 = r.sent, r.next = 10;
                                    break;
                                case 7:
                                    return r.next = 9, n.apiKey;
                                case 9:
                                    r.t0 = r.sent;
                                case 10:
                                    o = r.t0, e[t] = o;
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }), a)
                    })))
                }, t.setBasicAuthToObject = function (e, t) {
                    t && (t.username || t.password) && (e.auth = {
                        username: t.username,
                        password: t.password
                    })
                }, t.setBearerAuthToObject = function (e, t) {
                    return a(this, void 0, void 0, r().mark((function n() {
                        var a;
                        return r().wrap((function (n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!t || !t.accessToken) {
                                        n.next = 12;
                                        break
                                    }
                                    if ("function" !== typeof t.accessToken) {
                                        n.next = 7;
                                        break
                                    }
                                    return n.next = 4, t.accessToken();
                                case 4:
                                    n.t0 = n.sent, n.next = 10;
                                    break;
                                case 7:
                                    return n.next = 9, t.accessToken;
                                case 9:
                                    n.t0 = n.sent;
                                case 10:
                                    a = n.t0, e.Authorization = "Bearer " + a;
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                }, t.setOAuthToObject = function (e, t, n, o) {
                    return a(this, void 0, void 0, r().mark((function a() {
                        var i;
                        return r().wrap((function (r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (!o || !o.accessToken) {
                                        r.next = 12;
                                        break
                                    }
                                    if ("function" !== typeof o.accessToken) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.next = 4, o.accessToken(t, n);
                                case 4:
                                    r.t0 = r.sent, r.next = 10;
                                    break;
                                case 7:
                                    return r.next = 9, o.accessToken;
                                case 9:
                                    r.t0 = r.sent;
                                case 10:
                                    i = r.t0, e.Authorization = "Bearer " + i;
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }), a)
                    })))
                }, t.setSearchParams = function (e) {
                    for (var t = new URLSearchParams(e.search), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    i(t, r), e.search = t.toString()
                }, t.serializeDataIfNeeded = function (e, t, n) {
                    var r = "string" !== typeof e;
                    return (r && n && n.isJsonMime ? n.isJsonMime(t.headers["Content-Type"]) : r) ? JSON.stringify(void 0 !== e ? e : {}) : e || ""
                }, t.toPathString = function (e) {
                    return e.pathname + e.search + e.hash
                }, t.createRequestFunction = function (e, t, n, r) {
                    return function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                            i = Object.assign(Object.assign({}, e.options), {
                                url: ((null === r || void 0 === r ? void 0 : r.basePath) || o) + e.url
                            });
                        return a.request(i)
                    }
                }
            },
            9245: function (e, t, n) {
                "use strict";
                var r = n(6690).default,
                    a = n(9728).default;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Configuration = void 0;
                var o = n(2811),
                    i = function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            r(this, e), this.apiKey = t.apiKey, this.organization = t.organization, this.username = t.username, this.password = t.password, this.accessToken = t.accessToken, this.basePath = t.basePath, this.baseOptions = t.baseOptions, this.formDataCtor = t.formDataCtor, this.baseOptions || (this.baseOptions = {}), this.baseOptions.headers = Object.assign({
                                "User-Agent": "OpenAI/NodeJS/".concat(o.version),
                                Authorization: "Bearer ".concat(this.apiKey)
                            }, this.baseOptions.headers), this.organization && (this.baseOptions.headers["OpenAI-Organization"] = this.organization), this.formDataCtor || (this.formDataCtor = n(964))
                        }
                        return a(e, [{
                            key: "isJsonMime",
                            value: function (e) {
                                var t = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
                                return null !== e && (t.test(e) || "application/json-patch+json" === e.toLowerCase())
                            }
                        }]), e
                    }();
                t.Configuration = i
            },
            1115: function (e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
                        void 0 === r && (r = n), Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: function () {
                                return t[n]
                            }
                        })
                    } : function (e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    a = this && this.__exportStar || function (e, t) {
                        for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), a(n(3540), t), a(n(9245), t)
            },
            5237: function (e, t, n) {
                e.exports = n(699)
            },
            7739: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = n(3103),
                    o = n(2609),
                    i = n(5585),
                    s = n(4129),
                    l = n(8168),
                    u = n(6705),
                    c = n(5517),
                    f = n(2486),
                    d = n(5941);
                e.exports = function (e) {
                    return new Promise((function (t, n) {
                        var p, h = e.data,
                            m = e.headers,
                            v = e.responseType;

                        function g() {
                            e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p)
                        }
                        r.isFormData(h) && delete m["Content-Type"];
                        var b = new XMLHttpRequest;
                        if (e.auth) {
                            var y = e.auth.username || "",
                                w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            m.Authorization = "Basic " + btoa(y + ":" + w)
                        }
                        var x = s(e.baseURL, e.url);

                        function k() {
                            if (b) {
                                var r = "getAllResponseHeaders" in b ? l(b.getAllResponseHeaders()) : null,
                                    o = {
                                        data: v && "text" !== v && "json" !== v ? b.response : b.responseText,
                                        status: b.status,
                                        statusText: b.statusText,
                                        headers: r,
                                        config: e,
                                        request: b
                                    };
                                a((function (e) {
                                    t(e), g()
                                }), (function (e) {
                                    n(e), g()
                                }), o), b = null
                            }
                        }
                        if (b.open(e.method.toUpperCase(), i(x, e.params, e.paramsSerializer), !0), b.timeout = e.timeout, "onloadend" in b ? b.onloadend = k : b.onreadystatechange = function () {
                                b && 4 === b.readyState && (0 !== b.status || b.responseURL && 0 === b.responseURL.indexOf("file:")) && setTimeout(k)
                            }, b.onabort = function () {
                                b && (n(c("Request aborted", e, "ECONNABORTED", b)), b = null)
                            }, b.onerror = function () {
                                n(c("Network Error", e, null, b)), b = null
                            }, b.ontimeout = function () {
                                var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                    r = e.transitional || f;
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(c(t, e, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", b)), b = null
                            }, r.isStandardBrowserEnv()) {
                            var S = (e.withCredentials || u(x)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
                            S && (m[e.xsrfHeaderName] = S)
                        }
                        "setRequestHeader" in b && r.forEach(m, (function (e, t) {
                            "undefined" === typeof h && "content-type" === t.toLowerCase() ? delete m[t] : b.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials), v && "json" !== v && (b.responseType = e.responseType), "function" === typeof e.onDownloadProgress && b.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && b.upload && b.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (p = function (e) {
                            b && (n(!e || e && e.type ? new d("canceled") : e), b.abort(), b = null)
                        }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p))), h || (h = null), b.send(h)
                    }))
                }
            },
            699: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = n(3476),
                    o = n(4459),
                    i = n(9364);
                var s = function e(t) {
                    var n = new o(t),
                        s = a(o.prototype.request, n);
                    return r.extend(s, o.prototype, n), r.extend(s, n), s.create = function (n) {
                        return e(i(t, n))
                    }, s
                }(n(7258));
                s.Axios = o, s.Cancel = n(5941), s.CancelToken = n(5286), s.isCancel = n(196), s.VERSION = n(9434).version, s.all = function (e) {
                    return Promise.all(e)
                }, s.spread = n(6600), s.isAxiosError = n(7810), e.exports = s, e.exports.default = s
            },
            5941: function (e) {
                "use strict";

                function t(e) {
                    this.message = e
                }
                t.prototype.toString = function () {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }, t.prototype.__CANCEL__ = !0, e.exports = t
            },
            5286: function (e, t, n) {
                "use strict";
                var r = n(5941);

                function a(e) {
                    if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function (e) {
                        t = e
                    }));
                    var n = this;
                    this.promise.then((function (e) {
                        if (n._listeners) {
                            var t, r = n._listeners.length;
                            for (t = 0; t < r; t++) n._listeners[t](e);
                            n._listeners = null
                        }
                    })), this.promise.then = function (e) {
                        var t, r = new Promise((function (e) {
                            n.subscribe(e), t = e
                        })).then(e);
                        return r.cancel = function () {
                            n.unsubscribe(t)
                        }, r
                    }, e((function (e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    }))
                }
                a.prototype.throwIfRequested = function () {
                    if (this.reason) throw this.reason
                }, a.prototype.subscribe = function (e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }, a.prototype.unsubscribe = function (e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                    }
                }, a.source = function () {
                    var e;
                    return {
                        token: new a((function (t) {
                            e = t
                        })),
                        cancel: e
                    }
                }, e.exports = a
            },
            196: function (e) {
                "use strict";
                e.exports = function (e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            4459: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = n(5585),
                    o = n(8448),
                    i = n(9896),
                    s = n(9364),
                    l = n(6613),
                    u = l.validators;

                function c(e) {
                    this.defaults = e, this.interceptors = {
                        request: new o,
                        response: new o
                    }
                }
                c.prototype.request = function (e, t) {
                    "string" === typeof e ? (t = t || {}).url = e : t = e || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                    var n = t.transitional;
                    void 0 !== n && l.assertOptions(n, {
                        silentJSONParsing: u.transitional(u.boolean),
                        forcedJSONParsing: u.transitional(u.boolean),
                        clarifyTimeoutError: u.transitional(u.boolean)
                    }, !1);
                    var r = [],
                        a = !0;
                    this.interceptors.request.forEach((function (e) {
                        "function" === typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                    }));
                    var o, c = [];
                    if (this.interceptors.response.forEach((function (e) {
                            c.push(e.fulfilled, e.rejected)
                        })), !a) {
                        var f = [i, void 0];
                        for (Array.prototype.unshift.apply(f, r), f = f.concat(c), o = Promise.resolve(t); f.length;) o = o.then(f.shift(), f.shift());
                        return o
                    }
                    for (var d = t; r.length;) {
                        var p = r.shift(),
                            h = r.shift();
                        try {
                            d = p(d)
                        } catch (m) {
                            h(m);
                            break
                        }
                    }
                    try {
                        o = i(d)
                    } catch (m) {
                        return Promise.reject(m)
                    }
                    for (; c.length;) o = o.then(c.shift(), c.shift());
                    return o
                }, c.prototype.getUri = function (e) {
                    return e = s(this.defaults, e), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
                }, r.forEach(["delete", "get", "head", "options"], (function (e) {
                    c.prototype[e] = function (t, n) {
                        return this.request(s(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), r.forEach(["post", "put", "patch"], (function (e) {
                    c.prototype[e] = function (t, n, r) {
                        return this.request(s(r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })), e.exports = c
            },
            8448: function (e, t, n) {
                "use strict";
                var r = n(8058);

                function a() {
                    this.handlers = []
                }
                a.prototype.use = function (e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }, a.prototype.eject = function (e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, a.prototype.forEach = function (e) {
                    r.forEach(this.handlers, (function (t) {
                        null !== t && e(t)
                    }))
                }, e.exports = a
            },
            4129: function (e, t, n) {
                "use strict";
                var r = n(696),
                    a = n(4264);
                e.exports = function (e, t) {
                    return e && !r(t) ? a(e, t) : t
                }
            },
            5517: function (e, t, n) {
                "use strict";
                var r = n(3503);
                e.exports = function (e, t, n, a, o) {
                    var i = new Error(e);
                    return r(i, t, n, a, o)
                }
            },
            9896: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = n(3492),
                    o = n(196),
                    i = n(7258),
                    s = n(5941);

                function l(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new s("canceled")
                }
                e.exports = function (e) {
                    return l(e), e.headers = e.headers || {}, e.data = a.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
                        delete e.headers[t]
                    })), (e.adapter || i.adapter)(e).then((function (t) {
                        return l(e), t.data = a.call(e, t.data, t.headers, e.transformResponse), t
                    }), (function (t) {
                        return o(t) || (l(e), t && t.response && (t.response.data = a.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    }))
                }
            },
            3503: function (e) {
                "use strict";
                e.exports = function (e, t, n, r, a) {
                    return e.config = t, n && (e.code = n), e.request = r, e.response = a, e.isAxiosError = !0, e.toJSON = function () {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }, e
                }
            },
            9364: function (e, t, n) {
                "use strict";
                var r = n(8058);
                e.exports = function (e, t) {
                    t = t || {};
                    var n = {};

                    function a(e, t) {
                        return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                    }

                    function o(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : a(void 0, e[n]) : a(e[n], t[n])
                    }

                    function i(e) {
                        if (!r.isUndefined(t[e])) return a(void 0, t[e])
                    }

                    function s(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : a(void 0, e[n]) : a(void 0, t[n])
                    }

                    function l(n) {
                        return n in t ? a(e[n], t[n]) : n in e ? a(void 0, e[n]) : void 0
                    }
                    var u = {
                        url: i,
                        method: i,
                        data: i,
                        baseURL: s,
                        transformRequest: s,
                        transformResponse: s,
                        paramsSerializer: s,
                        timeout: s,
                        timeoutMessage: s,
                        withCredentials: s,
                        adapter: s,
                        responseType: s,
                        xsrfCookieName: s,
                        xsrfHeaderName: s,
                        onUploadProgress: s,
                        onDownloadProgress: s,
                        decompress: s,
                        maxContentLength: s,
                        maxBodyLength: s,
                        transport: s,
                        httpAgent: s,
                        httpsAgent: s,
                        cancelToken: s,
                        socketPath: s,
                        responseEncoding: s,
                        validateStatus: l
                    };
                    return r.forEach(Object.keys(e).concat(Object.keys(t)), (function (e) {
                        var t = u[e] || o,
                            a = t(e);
                        r.isUndefined(a) && t !== l || (n[e] = a)
                    })), n
                }
            },
            3103: function (e, t, n) {
                "use strict";
                var r = n(5517);
                e.exports = function (e, t, n) {
                    var a = n.config.validateStatus;
                    n.status && a && !a(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                }
            },
            3492: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = n(7258);
                e.exports = function (e, t, n) {
                    var o = this || a;
                    return r.forEach(n, (function (n) {
                        e = n.call(o, e, t)
                    })), e
                }
            },
            7258: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = n(1738),
                    o = n(3503),
                    i = n(2486),
                    s = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function l(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var u = {
                    transitional: i,
                    adapter: function () {
                        var e;
                        return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) && (e = n(7739)), e
                    }(),
                    transformRequest: [function (e, t) {
                        return a(t, "Accept"), a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (l(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (l(t, "application/json"), function (e, t, n) {
                            if (r.isString(e)) try {
                                return (t || JSON.parse)(e), r.trim(e)
                            } catch (a) {
                                if ("SyntaxError" !== a.name) throw a
                            }
                            return (n || JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function (e) {
                        var t = this.transitional || u.transitional,
                            n = t && t.silentJSONParsing,
                            a = t && t.forcedJSONParsing,
                            i = !n && "json" === this.responseType;
                        if (i || a && r.isString(e) && e.length) try {
                            return JSON.parse(e)
                        } catch (s) {
                            if (i) {
                                if ("SyntaxError" === s.name) throw o(s, this, "E_JSON_PARSE");
                                throw s
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function (e) {
                    u.headers[e] = {}
                })), r.forEach(["post", "put", "patch"], (function (e) {
                    u.headers[e] = r.merge(s)
                })), e.exports = u
            },
            2486: function (e) {
                "use strict";
                e.exports = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                }
            },
            9434: function (e) {
                e.exports = {
                    version: "0.26.1"
                }
            },
            3476: function (e) {
                "use strict";
                e.exports = function (e, t) {
                    return function () {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            },
            5585: function (e, t, n) {
                "use strict";
                var r = n(8058);

                function a(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function (e, t, n) {
                    if (!t) return e;
                    var o;
                    if (n) o = n(t);
                    else if (r.isURLSearchParams(t)) o = t.toString();
                    else {
                        var i = [];
                        r.forEach(t, (function (e, t) {
                            null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function (e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
                            })))
                        })), o = i.join("&")
                    }
                    if (o) {
                        var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
                    }
                    return e
                }
            },
            4264: function (e) {
                "use strict";
                e.exports = function (e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            2609: function (e, t, n) {
                "use strict";
                var r = n(8058);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function (e, t, n, a, o, i) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(a) && s.push("path=" + a), r.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ")
                    },
                    read: function (e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function (e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function () {},
                    read: function () {
                        return null
                    },
                    remove: function () {}
                }
            },
            696: function (e) {
                "use strict";
                e.exports = function (e) {
                    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                }
            },
            7810: function (e, t, n) {
                "use strict";
                var r = n(8058);
                e.exports = function (e) {
                    return r.isObject(e) && !0 === e.isAxiosError
                }
            },
            6705: function (e, t, n) {
                "use strict";
                var r = n(8058);
                e.exports = r.isStandardBrowserEnv() ? function () {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function a(e) {
                        var r = e;
                        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = a(window.location.href),
                        function (t) {
                            var n = r.isString(t) ? a(t) : t;
                            return n.protocol === e.protocol && n.host === e.host
                        }
                }() : function () {
                    return !0
                }
            },
            1738: function (e, t, n) {
                "use strict";
                var r = n(8058);
                e.exports = function (e, t) {
                    r.forEach(e, (function (n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    }))
                }
            },
            8168: function (e, t, n) {
                "use strict";
                var r = n(8058),
                    a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function (e) {
                    var t, n, o, i = {};
                    return e ? (r.forEach(e.split("\n"), (function (e) {
                        if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                            if (i[t] && a.indexOf(t) >= 0) return;
                            i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
                        }
                    })), i) : i
                }
            },
            6600: function (e) {
                "use strict";
                e.exports = function (e) {
                    return function (t) {
                        return e.apply(null, t)
                    }
                }
            },
            6613: function (e, t, n) {
                "use strict";
                var r = n(9434).version,
                    a = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (e, t) {
                    a[e] = function (n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                var o = {};
                a.transitional = function (e, t, n) {
                    function a(e, t) {
                        return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return function (n, r, i) {
                        if (!1 === e) throw new Error(a(r, " has been removed" + (t ? " in " + t : "")));
                        return t && !o[r] && (o[r] = !0, console.warn(a(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, i)
                    }
                }, e.exports = {
                    assertOptions: function (e, t, n) {
                        if ("object" !== typeof e) throw new TypeError("options must be an object");
                        for (var r = Object.keys(e), a = r.length; a-- > 0;) {
                            var o = r[a],
                                i = t[o];
                            if (i) {
                                var s = e[o],
                                    l = void 0 === s || i(s, o, e);
                                if (!0 !== l) throw new TypeError("option " + o + " must be " + l)
                            } else if (!0 !== n) throw Error("Unknown option " + o)
                        }
                    },
                    validators: a
                }
            },
            8058: function (e, t, n) {
                "use strict";
                var r = n(3476),
                    a = Object.prototype.toString;

                function o(e) {
                    return Array.isArray(e)
                }

                function i(e) {
                    return "undefined" === typeof e
                }

                function s(e) {
                    return "[object ArrayBuffer]" === a.call(e)
                }

                function l(e) {
                    return null !== e && "object" === typeof e
                }

                function u(e) {
                    if ("[object Object]" !== a.call(e)) return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }

                function c(e) {
                    return "[object Function]" === a.call(e)
                }

                function f(e, t) {
                    if (null !== e && "undefined" !== typeof e)
                        if ("object" !== typeof e && (e = [e]), o(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
                }
                e.exports = {
                    isArray: o,
                    isArrayBuffer: s,
                    isBuffer: function (e) {
                        return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function (e) {
                        return "[object FormData]" === a.call(e)
                    },
                    isArrayBufferView: function (e) {
                        return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && s(e.buffer)
                    },
                    isString: function (e) {
                        return "string" === typeof e
                    },
                    isNumber: function (e) {
                        return "number" === typeof e
                    },
                    isObject: l,
                    isPlainObject: u,
                    isUndefined: i,
                    isDate: function (e) {
                        return "[object Date]" === a.call(e)
                    },
                    isFile: function (e) {
                        return "[object File]" === a.call(e)
                    },
                    isBlob: function (e) {
                        return "[object Blob]" === a.call(e)
                    },
                    isFunction: c,
                    isStream: function (e) {
                        return l(e) && c(e.pipe)
                    },
                    isURLSearchParams: function (e) {
                        return "[object URLSearchParams]" === a.call(e)
                    },
                    isStandardBrowserEnv: function () {
                        return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                    },
                    forEach: f,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            u(t[r]) && u(n) ? t[r] = e(t[r], n) : u(n) ? t[r] = e({}, n) : o(n) ? t[r] = n.slice() : t[r] = n
                        }
                        for (var r = 0, a = arguments.length; r < a; r++) f(arguments[r], n);
                        return t
                    },
                    extend: function (e, t, n) {
                        return f(t, (function (t, a) {
                            e[a] = n && "function" === typeof t ? r(t, n) : t
                        })), e
                    },
                    trim: function (e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    },
                    stripBOM: function (e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                    }
                }
            },
            964: function (e) {
                e.exports = "object" == typeof self ? self.FormData : window.FormData
            },
            888: function (e, t, n) {
                "use strict";
                var r = n(9047);

                function a() {}

                function o() {}
                o.resetWarningCache = a, e.exports = function () {
                    function e(e, t, n, a, o, i) {
                        if (i !== r) {
                            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw s.name = "Invariant Violation", s
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: o,
                        resetWarningCache: a
                    };
                    return n.PropTypes = n, n
                }
            },
            2007: function (e, t, n) {
                e.exports = n(888)()
            },
            9047: function (e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            4463: function (e, t, n) {
                "use strict";
                var r = n(2791),
                    a = n(5296);

                function o(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var i = new Set,
                    s = {};

                function l(e, t) {
                    u(e, t), u(e + "Capture", t)
                }

                function u(e, t) {
                    for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e])
                }
                var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = Object.prototype.hasOwnProperty,
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    h = {};

                function m(e, t, n, r, a, o, i) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
                }
                var v = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                    v[e] = new m(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function (e) {
                    var t = e[0];
                    v[t] = new m(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                    v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                    v[e] = new m(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                    v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                    v[e] = new m(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function (e) {
                    v[e] = new m(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function (e) {
                    v[e] = new m(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function (e) {
                    v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var g = /[\-:]([a-z])/g;

                function b(e) {
                    return e[1].toUpperCase()
                }

                function y(e, t, n, r) {
                    var a = v.hasOwnProperty(t) ? v[t] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function (e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function (e) {
                        return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                    var t = e.replace(g, b);
                    v[t] = new m(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                    var t = e.replace(g, b);
                    v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                    var t = e.replace(g, b);
                    v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                    v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                    v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = Symbol.for("react.element"),
                    k = Symbol.for("react.portal"),
                    S = Symbol.for("react.fragment"),
                    E = Symbol.for("react.strict_mode"),
                    O = Symbol.for("react.profiler"),
                    j = Symbol.for("react.provider"),
                    P = Symbol.for("react.context"),
                    C = Symbol.for("react.forward_ref"),
                    _ = Symbol.for("react.suspense"),
                    N = Symbol.for("react.suspense_list"),
                    A = Symbol.for("react.memo"),
                    T = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var L = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var R = Symbol.iterator;

                function F(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = R && e[R] || e["@@iterator"]) ? e : null
                }
                var M, z = Object.assign;

                function I(e) {
                    if (void 0 === M) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        M = t && t[1] || ""
                    }
                    return "\n" + M + e
                }
                var D = !1;

                function U(e, t) {
                    if (!e || D) return "";
                    D = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function () {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function () {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (u) {
                                    var r = u
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (u) {
                                    r = u
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (u) {
                                r = u
                            }
                            e()
                        }
                    } catch (u) {
                        if (u && r && "string" === typeof u.stack) {
                            for (var a = u.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, s = o.length - 1; 1 <= i && 0 <= s && a[i] !== o[s];) s--;
                            for (; 1 <= i && 0 <= s; i--, s--)
                                if (a[i] !== o[s]) {
                                    if (1 !== i || 1 !== s)
                                        do {
                                            if (i--, 0 > --s || a[i] !== o[s]) {
                                                var l = "\n" + a[i].replace(" at new ", " at ");
                                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                            }
                                        } while (1 <= i && 0 <= s);
                                    break
                                }
                        }
                    } finally {
                        D = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? I(e) : ""
                }

                function B(e) {
                    switch (e.tag) {
                        case 5:
                            return I(e.type);
                        case 16:
                            return I("Lazy");
                        case 13:
                            return I("Suspense");
                        case 19:
                            return I("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = U(e.type, !1);
                        case 11:
                            return e = U(e.type.render, !1);
                        case 1:
                            return e = U(e.type, !0);
                        default:
                            return ""
                    }
                }

                function H(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case S:
                            return "Fragment";
                        case k:
                            return "Portal";
                        case O:
                            return "Profiler";
                        case E:
                            return "StrictMode";
                        case _:
                            return "Suspense";
                        case N:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case P:
                            return (e.displayName || "Context") + ".Consumer";
                        case j:
                            return (e._context.displayName || "Context") + ".Provider";
                        case C:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case A:
                            return null !== (t = e.displayName || null) ? t : H(e.type) || "Memo";
                        case T:
                            t = e._payload, e = e._init;
                            try {
                                return H(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function W(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return H(t);
                        case 8:
                            return t === E ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function q(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function V(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function $(e) {
                    e._valueTracker || (e._valueTracker = function (e) {
                        var t = V(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var a = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function () {
                                    return a.call(this)
                                },
                                set: function (e) {
                                    r = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function () {
                                    return r
                                },
                                setValue: function (e) {
                                    r = "" + e
                                },
                                stopTracking: function () {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function Y(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function Q(e) {
                    if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function K(e, t) {
                    var n = t.checked;
                    return z({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function G(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = q(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function X(e, t) {
                    null != (t = t.checked) && y(e, "checked", t, !1)
                }

                function J(e, t) {
                    X(e, t);
                    var n = q(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, q(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function Z(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && Q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return z({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(o(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(o(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: q(n)
                    }
                }

                function oe(e, t) {
                    var n = q(t.value),
                        r = q(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ie(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function se(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function le(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ue, ce, fe = (ce = function (e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function () {
                        return ce(e, t)
                    }))
                } : ce);

                function de(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
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
                    },
                    he = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function ve(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = me(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(pe).forEach((function (e) {
                    he.forEach((function (t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var ge = z({
                    menuitem: !0
                }, {
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
                });

                function be(e, t) {
                    if (t) {
                        if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(o(62))
                    }
                }

                function ye(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
                            return !0
                    }
                }
                var we = null;

                function xe(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var ke = null,
                    Se = null,
                    Ee = null;

                function Oe(e) {
                    if (e = ya(e)) {
                        if ("function" !== typeof ke) throw Error(o(280));
                        var t = e.stateNode;
                        t && (t = xa(t), ke(e.stateNode, e.type, t))
                    }
                }

                function je(e) {
                    Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
                }

                function Pe() {
                    if (Se) {
                        var e = Se,
                            t = Ee;
                        if (Ee = Se = null, Oe(e), t)
                            for (e = 0; e < t.length; e++) Oe(t[e])
                    }
                }

                function Ce(e, t) {
                    return e(t)
                }

                function _e() {}
                var Ne = !1;

                function Ae(e, t, n) {
                    if (Ne) return e(t, n);
                    Ne = !0;
                    try {
                        return Ce(e, t, n)
                    } finally {
                        Ne = !1, (null !== Se || null !== Ee) && (_e(), Pe())
                    }
                }

                function Te(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = xa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
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
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var Le = !1;
                if (c) try {
                    var Re = {};
                    Object.defineProperty(Re, "passive", {
                        get: function () {
                            Le = !0
                        }
                    }), window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re)
                } catch (ce) {
                    Le = !1
                }

                function Fe(e, t, n, r, a, o, i, s, l) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var Me = !1,
                    ze = null,
                    Ie = !1,
                    De = null,
                    Ue = {
                        onError: function (e) {
                            Me = !0, ze = e
                        }
                    };

                function Be(e, t, n, r, a, o, i, s, l) {
                    Me = !1, ze = null, Fe.apply(Ue, arguments)
                }

                function He(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function We(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function qe(e) {
                    if (He(e) !== e) throw Error(o(188))
                }

                function Ve(e) {
                    return null !== (e = function (e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = He(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var i = a.alternate;
                            if (null === i) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === i.child) {
                                for (i = a.child; i;) {
                                    if (i === n) return qe(a), e;
                                    if (i === r) return qe(a), t;
                                    i = i.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = a, r = i;
                            else {
                                for (var s = !1, l = a.child; l;) {
                                    if (l === n) {
                                        s = !0, n = a, r = i;
                                        break
                                    }
                                    if (l === r) {
                                        s = !0, r = a, n = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s) {
                                    for (l = i.child; l;) {
                                        if (l === n) {
                                            s = !0, n = i, r = a;
                                            break
                                        }
                                        if (l === r) {
                                            s = !0, r = i, n = a;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? $e(e) : null
                }

                function $e(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = $e(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ye = a.unstable_scheduleCallback,
                    Qe = a.unstable_cancelCallback,
                    Ke = a.unstable_shouldYield,
                    Ge = a.unstable_requestPaint,
                    Xe = a.unstable_now,
                    Je = a.unstable_getCurrentPriorityLevel,
                    Ze = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    ot = null;
                var it = Math.clz32 ? Math.clz32 : function (e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / lt | 0) | 0
                    },
                    st = Math.log,
                    lt = Math.LN2;
                var ut = 64,
                    ct = 4194304;

                function ft(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function dt(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        o = e.pingedLanes,
                        i = 268435455 & n;
                    if (0 !== i) {
                        var s = i & ~a;
                        0 !== s ? r = ft(s) : 0 !== (o &= i) && (r = ft(o))
                    } else 0 !== (i = n & ~a) ? r = ft(i) : 0 !== o && (r = ft(o));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 !== (4194240 & o))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
                    return r
                }

                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function ht(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function mt() {
                    var e = ut;
                    return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
                }

                function vt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function gt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
                }

                function bt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - it(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var yt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var xt, kt, St, Et, Ot, jt = !1,
                    Pt = [],
                    Ct = null,
                    _t = null,
                    Nt = null,
                    At = new Map,
                    Tt = new Map,
                    Lt = [],
                    Rt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Ft(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Ct = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            _t = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Nt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            At.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Tt.delete(t.pointerId)
                    }
                }

                function Mt(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: o,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = ya(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function zt(e) {
                    var t = ba(e.target);
                    if (null !== t) {
                        var n = He(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = We(n))) return e.blockedOn = t, void Ot(e.priority, (function () {
                                    St(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function It(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ya(n)) && kt(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function Dt(e, t, n) {
                    It(e) && n.delete(t)
                }

                function Ut() {
                    jt = !1, null !== Ct && It(Ct) && (Ct = null), null !== _t && It(_t) && (_t = null), null !== Nt && It(Nt) && (Nt = null), At.forEach(Dt), Tt.forEach(Dt)
                }

                function Bt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, jt || (jt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)))
                }

                function Ht(e) {
                    function t(t) {
                        return Bt(t, e)
                    }
                    if (0 < Pt.length) {
                        Bt(Pt[0], e);
                        for (var n = 1; n < Pt.length; n++) {
                            var r = Pt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Ct && Bt(Ct, e), null !== _t && Bt(_t, e), null !== Nt && Bt(Nt, e), At.forEach(t), Tt.forEach(t), n = 0; n < Lt.length; n++)(r = Lt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn;) zt(n), null === n.blockedOn && Lt.shift()
                }
                var Wt = w.ReactCurrentBatchConfig,
                    qt = !0;

                function Vt(e, t, n, r) {
                    var a = yt,
                        o = Wt.transition;
                    Wt.transition = null;
                    try {
                        yt = 1, Yt(e, t, n, r)
                    } finally {
                        yt = a, Wt.transition = o
                    }
                }

                function $t(e, t, n, r) {
                    var a = yt,
                        o = Wt.transition;
                    Wt.transition = null;
                    try {
                        yt = 4, Yt(e, t, n, r)
                    } finally {
                        yt = a, Wt.transition = o
                    }
                }

                function Yt(e, t, n, r) {
                    if (qt) {
                        var a = Kt(e, t, n, r);
                        if (null === a) qr(e, t, r, Qt, n), Ft(e, r);
                        else if (function (e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return Ct = Mt(Ct, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return _t = Mt(_t, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return Nt = Mt(Nt, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var o = a.pointerId;
                                        return At.set(o, Mt(At.get(o) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return o = a.pointerId, Tt.set(o, Mt(Tt.get(o) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (Ft(e, r), 4 & t && -1 < Rt.indexOf(e)) {
                            for (; null !== a;) {
                                var o = ya(a);
                                if (null !== o && xt(o), null === (o = Kt(e, t, n, r)) && qr(e, t, r, Qt, n), o === a) break;
                                a = o
                            }
                            null !== a && r.stopPropagation()
                        } else qr(e, t, r, null, n)
                    }
                }
                var Qt = null;

                function Kt(e, t, n, r) {
                    if (Qt = null, null !== (e = ba(e = xe(r))))
                        if (null === (t = He(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = We(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Qt = e, null
                }

                function Gt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Je()) {
                                case Ze:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                            default:
                                return 16
                    }
                }
                var Xt = null,
                    Jt = null,
                    Zt = null;

                function en() {
                    if (Zt) return Zt;
                    var e, t, n = Jt,
                        r = n.length,
                        a = "value" in Xt ? Xt.value : Xt.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
                    return Zt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function an(e) {
                    function t(t, n, r, a, o) {
                        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return z(t.prototype, {
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function () {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function () {},
                        isPersistent: nn
                    }), t
                }
                var on, sn, ln, un = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = an(un),
                    fn = z({}, un, {
                        view: 0,
                        detail: 0
                    }),
                    dn = an(fn),
                    pn = z({}, fn, {
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
                        getModifierState: On,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function (e) {
                            return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (on = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = on = 0, ln = e), on)
                        },
                        movementY: function (e) {
                            return "movementY" in e ? e.movementY : sn
                        }
                    }),
                    hn = an(pn),
                    mn = an(z({}, pn, {
                        dataTransfer: 0
                    })),
                    vn = an(z({}, fn, {
                        relatedTarget: 0
                    })),
                    gn = an(z({}, un, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    bn = z({}, un, {
                        clipboardData: function (e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    yn = an(bn),
                    wn = an(z({}, un, {
                        data: 0
                    })),
                    xn = {
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
                    },
                    kn = {
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
                    },
                    Sn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function En(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
                }

                function On() {
                    return En
                }
                var jn = z({}, fn, {
                        key: function (e) {
                            if (e.key) {
                                var t = xn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: On,
                        charCode: function (e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function (e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function (e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Pn = an(jn),
                    Cn = an(z({}, pn, {
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
                    })),
                    _n = an(z({}, fn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: On
                    })),
                    Nn = an(z({}, un, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    An = z({}, pn, {
                        deltaX: function (e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function (e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Tn = an(An),
                    Ln = [9, 13, 27, 32],
                    Rn = c && "CompositionEvent" in window,
                    Fn = null;
                c && "documentMode" in document && (Fn = document.documentMode);
                var Mn = c && "TextEvent" in window && !Fn,
                    zn = c && (!Rn || Fn && 8 < Fn && 11 >= Fn),
                    In = String.fromCharCode(32),
                    Dn = !1;

                function Un(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Ln.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Bn(e) {
                    return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
                }
                var Hn = !1;
                var Wn = {
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

                function qn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Wn[e.type] : "textarea" === t
                }

                function Vn(e, t, n, r) {
                    je(r), 0 < (t = $r(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var $n = null,
                    Yn = null;

                function Qn(e) {
                    Ir(e, 0)
                }

                function Kn(e) {
                    if (Y(wa(e))) return e
                }

                function Gn(e, t) {
                    if ("change" === e) return t
                }
                var Xn = !1;
                if (c) {
                    var Jn;
                    if (c) {
                        var Zn = "oninput" in document;
                        if (!Zn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                        }
                        Jn = Zn
                    } else Jn = !1;
                    Xn = Jn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    $n && ($n.detachEvent("onpropertychange", nr), Yn = $n = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Kn(Yn)) {
                        var t = [];
                        Vn(t, Yn, e, xe(e)), Ae(Qn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Yn = n, ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kn(Yn)
                }

                function or(e, t) {
                    if ("click" === e) return Kn(t)
                }

                function ir(e, t) {
                    if ("input" === e || "change" === e) return Kn(t)
                }
                var sr = "function" === typeof Object.is ? Object.is : function (e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function lr(e, t) {
                    if (sr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!f.call(t, a) || !sr(e[a], t[a])) return !1
                    }
                    return !0
                }

                function ur(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = ur(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = ur(r)
                    }
                }

                function fr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function dr() {
                    for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = Q((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function hr(e) {
                    var t = dr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length,
                                o = Math.min(r.start, a);
                            r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
                            var i = cr(n, r);
                            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = c && "documentMode" in document && 11 >= document.documentMode,
                    vr = null,
                    gr = null,
                    br = null,
                    yr = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    yr || null == vr || vr !== Q(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, br && lr(br, r) || (br = r, 0 < (r = $r(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = vr)))
                }

                function xr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var kr = {
                        animationend: xr("Animation", "AnimationEnd"),
                        animationiteration: xr("Animation", "AnimationIteration"),
                        animationstart: xr("Animation", "AnimationStart"),
                        transitionend: xr("Transition", "TransitionEnd")
                    },
                    Sr = {},
                    Er = {};

                function Or(e) {
                    if (Sr[e]) return Sr[e];
                    if (!kr[e]) return e;
                    var t, n = kr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Er) return Sr[e] = n[t];
                    return e
                }
                c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
                var jr = Or("animationend"),
                    Pr = Or("animationiteration"),
                    Cr = Or("animationstart"),
                    _r = Or("transitionend"),
                    Nr = new Map,
                    Ar = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Tr(e, t) {
                    Nr.set(e, t), l(t, [e])
                }
                for (var Lr = 0; Lr < Ar.length; Lr++) {
                    var Rr = Ar[Lr];
                    Tr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)))
                }
                Tr(jr, "onAnimationEnd"), Tr(Pr, "onAnimationIteration"), Tr(Cr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(_r, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));

                function zr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function (e, t, n, r, a, i, s, l, u) {
                            if (Be.apply(this, arguments), Me) {
                                if (!Me) throw Error(o(198));
                                var c = ze;
                                Me = !1, ze = null, Ie || (Ie = !0, De = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Ir(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var s = r[i],
                                        l = s.instance,
                                        u = s.currentTarget;
                                    if (s = s.listener, l !== o && a.isPropagationStopped()) break e;
                                    zr(a, s, u), o = l
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (l = (s = r[i]).instance, u = s.currentTarget, s = s.listener, l !== o && a.isPropagationStopped()) break e;
                                        zr(a, s, u), o = l
                                    }
                        }
                    }
                    if (Ie) throw e = De, Ie = !1, De = null, e
                }

                function Dr(e, t) {
                    var n = t[ma];
                    void 0 === n && (n = t[ma] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Wr(t, e, 2, !1), n.add(r))
                }

                function Ur(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Wr(n, e, r, t)
                }
                var Br = "_reactListening" + Math.random().toString(36).slice(2);

                function Hr(e) {
                    if (!e[Br]) {
                        e[Br] = !0, i.forEach((function (t) {
                            "selectionchange" !== t && (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Br] || (t[Br] = !0, Ur("selectionchange", !1, t))
                    }
                }

                function Wr(e, t, n, r) {
                    switch (Gt(t)) {
                        case 1:
                            var a = Vt;
                            break;
                        case 4:
                            a = $t;
                            break;
                        default:
                            a = Yt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Le || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function qr(e, t, n, r, a) {
                    var o = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var s = r.stateNode.containerInfo;
                            if (s === a || 8 === s.nodeType && s.parentNode === a) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var l = i.tag;
                                    if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === a || 8 === l.nodeType && l.parentNode === a)) return;
                                    i = i.return
                                }
                            for (; null !== s;) {
                                if (null === (i = ba(s))) return;
                                if (5 === (l = i.tag) || 6 === l) {
                                    r = o = i;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Ae((function () {
                        var r = o,
                            a = xe(n),
                            i = [];
                        e: {
                            var s = Nr.get(e);
                            if (void 0 !== s) {
                                var l = cn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = Pn;
                                        break;
                                    case "focusin":
                                        u = "focus", l = vn;
                                        break;
                                    case "focusout":
                                        u = "blur", l = vn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = vn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = hn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = mn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = _n;
                                        break;
                                    case jr:
                                    case Pr:
                                    case Cr:
                                        l = gn;
                                        break;
                                    case _r:
                                        l = Nn;
                                        break;
                                    case "scroll":
                                        l = dn;
                                        break;
                                    case "wheel":
                                        l = Tn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = yn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = Cn
                                }
                                var c = 0 !== (4 & t),
                                    f = !c && "scroll" === e,
                                    d = c ? null !== s ? s + "Capture" : null : s;
                                c = [];
                                for (var p, h = r; null !== h;) {
                                    var m = (p = h).stateNode;
                                    if (5 === p.tag && null !== m && (p = m, null !== d && (null != (m = Te(h, d)) && c.push(Vr(h, m, p)))), f) break;
                                    h = h.return
                                }
                                0 < c.length && (s = new l(s, u, null, n, a), i.push({
                                    event: s,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !ba(u) && !u[ha]) && (l || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ba(u) : null) && (u !== (f = He(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
                                if (c = hn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Cn, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == l ? s : wa(l), p = null == u ? s : wa(u), (s = new c(m, h + "leave", l, n, a)).target = f, s.relatedTarget = p, m = null, ba(a) === r && ((c = new c(d, h + "enter", u, n, a)).target = p, c.relatedTarget = f, m = c), f = m, l && u) e: {
                                    for (d = u, h = 0, p = c = l; p; p = Yr(p)) h++;
                                    for (p = 0, m = d; m; m = Yr(m)) p++;
                                    for (; 0 < h - p;) c = Yr(c),
                                    h--;
                                    for (; 0 < p - h;) d = Yr(d),
                                    p--;
                                    for (; h--;) {
                                        if (c === d || null !== d && c === d.alternate) break e;
                                        c = Yr(c), d = Yr(d)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== l && Qr(i, s, l, c, !1), null !== u && null !== f && Qr(i, f, u, c, !0)
                            }
                            if ("select" === (l = (s = r ? wa(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var v = Gn;
                            else if (qn(s))
                                if (Xn) v = ir;
                                else {
                                    v = ar;
                                    var g = rr
                                }
                            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (v = or);
                            switch (v && (v = v(e, r)) ? Vn(i, v, n, a) : (g && g(e, s, r), "focusout" === e && (g = s._wrapperState) && g.controlled && "number" === s.type && ee(s, "number", s.value)), g = r ? wa(r) : window, e) {
                                case "focusin":
                                    (qn(g) || "true" === g.contentEditable) && (vr = g, gr = r, br = null);
                                    break;
                                case "focusout":
                                    br = gr = vr = null;
                                    break;
                                case "mousedown":
                                    yr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    yr = !1, wr(i, n, a);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    wr(i, n, a)
                            }
                            var b;
                            if (Rn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var y = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        y = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        y = "onCompositionUpdate";
                                        break e
                                }
                                y = void 0
                            }
                            else Hn ? Un(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
                            y && (zn && "ko" !== n.locale && (Hn || "onCompositionStart" !== y ? "onCompositionEnd" === y && Hn && (b = en()) : (Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent, Hn = !0)), 0 < (g = $r(r, y)).length && (y = new wn(y, e, null, n, a), i.push({
                                event: y,
                                listeners: g
                            }), b ? y.data = b : null !== (b = Bn(n)) && (y.data = b))), (b = Mn ? function (e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Bn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Dn = !0, In);
                                    case "textInput":
                                        return (e = t.data) === In && Dn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function (e, t) {
                                if (Hn) return "compositionend" === e || !Rn && Un(e, t) ? (e = en(), Zt = Jt = Xt = null, Hn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return zn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = $r(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), i.push({
                                event: a,
                                listeners: r
                            }), a.data = b))
                        }
                        Ir(i, t)
                    }))
                }

                function Vr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function $r(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            o = a.stateNode;
                        5 === a.tag && null !== o && (a = o, null != (o = Te(e, n)) && r.unshift(Vr(e, o, a)), null != (o = Te(e, t)) && r.push(Vr(e, o, a))), e = e.return
                    }
                    return r
                }

                function Yr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Qr(e, t, n, r, a) {
                    for (var o = t._reactName, i = []; null !== n && n !== r;) {
                        var s = n,
                            l = s.alternate,
                            u = s.stateNode;
                        if (null !== l && l === r) break;
                        5 === s.tag && null !== u && (s = u, a ? null != (l = Te(n, o)) && i.unshift(Vr(n, l, s)) : a || null != (l = Te(n, o)) && i.push(Vr(n, l, s))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }
                var Kr = /\r\n?/g,
                    Gr = /\u0000|\uFFFD/g;

                function Xr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Kr, "\n").replace(Gr, "")
                }

                function Jr(e, t, n) {
                    if (t = Xr(t), Xr(e) !== t && n) throw Error(o(425))
                }

                function Zr() {}
                var ea = null,
                    ta = null;

                function na(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                    aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    oa = "function" === typeof Promise ? Promise : void 0,
                    ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof oa ? function (e) {
                        return oa.resolve(null).then(e).catch(sa)
                    } : ra;

                function sa(e) {
                    setTimeout((function () {
                        throw e
                    }))
                }

                function la(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void Ht(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = a
                    } while (n);
                    Ht(t)
                }

                function ua(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function ca(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var fa = Math.random().toString(36).slice(2),
                    da = "__reactFiber$" + fa,
                    pa = "__reactProps$" + fa,
                    ha = "__reactContainer$" + fa,
                    ma = "__reactEvents$" + fa,
                    va = "__reactListeners$" + fa,
                    ga = "__reactHandles$" + fa;

                function ba(e) {
                    var t = e[da];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ha] || n[da]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ca(e); null !== e;) {
                                    if (n = e[da]) return n;
                                    e = ca(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ya(e) {
                    return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function wa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function xa(e) {
                    return e[pa] || null
                }
                var ka = [],
                    Sa = -1;

                function Ea(e) {
                    return {
                        current: e
                    }
                }

                function Oa(e) {
                    0 > Sa || (e.current = ka[Sa], ka[Sa] = null, Sa--)
                }

                function ja(e, t) {
                    Sa++, ka[Sa] = e.current, e.current = t
                }
                var Pa = {},
                    Ca = Ea(Pa),
                    _a = Ea(!1),
                    Na = Pa;

                function Aa(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Pa;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, o = {};
                    for (a in n) o[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function Ta(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function La() {
                    Oa(_a), Oa(Ca)
                }

                function Ra(e, t, n) {
                    if (Ca.current !== Pa) throw Error(o(168));
                    ja(Ca, t), ja(_a, n)
                }

                function Fa(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
                    return z({}, n, r)
                }

                function Ma(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, Na = Ca.current, ja(Ca, e), ja(_a, _a.current), !0
                }

                function za(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(o(169));
                    n ? (e = Fa(e, t, Na), r.__reactInternalMemoizedMergedChildContext = e, Oa(_a), Oa(Ca), ja(Ca, e)) : Oa(_a), ja(_a, n)
                }
                var Ia = null,
                    Da = !1,
                    Ua = !1;

                function Ba(e) {
                    null === Ia ? Ia = [e] : Ia.push(e)
                }

                function Ha() {
                    if (!Ua && null !== Ia) {
                        Ua = !0;
                        var e = 0,
                            t = yt;
                        try {
                            var n = Ia;
                            for (yt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Ia = null, Da = !1
                        } catch (a) {
                            throw null !== Ia && (Ia = Ia.slice(e + 1)), Ye(Ze, Ha), a
                        } finally {
                            yt = t, Ua = !1
                        }
                    }
                    return null
                }
                var Wa = [],
                    qa = 0,
                    Va = null,
                    $a = 0,
                    Ya = [],
                    Qa = 0,
                    Ka = null,
                    Ga = 1,
                    Xa = "";

                function Ja(e, t) {
                    Wa[qa++] = $a, Wa[qa++] = Va, Va = e, $a = t
                }

                function Za(e, t, n) {
                    Ya[Qa++] = Ga, Ya[Qa++] = Xa, Ya[Qa++] = Ka, Ka = e;
                    var r = Ga;
                    e = Xa;
                    var a = 32 - it(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var o = 32 - it(t) + a;
                    if (30 < o) {
                        var i = a - a % 5;
                        o = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Ga = 1 << 32 - it(t) + a | n << a | r, Xa = o + e
                    } else Ga = 1 << o | n << a | r, Xa = e
                }

                function eo(e) {
                    null !== e.return && (Ja(e, 1), Za(e, 1, 0))
                }

                function to(e) {
                    for (; e === Va;) Va = Wa[--qa], Wa[qa] = null, $a = Wa[--qa], Wa[qa] = null;
                    for (; e === Ka;) Ka = Ya[--Qa], Ya[Qa] = null, Xa = Ya[--Qa], Ya[Qa] = null, Ga = Ya[--Qa], Ya[Qa] = null
                }
                var no = null,
                    ro = null,
                    ao = !1,
                    oo = null;

                function io(e, t) {
                    var n = Au(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function so(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = ua(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ka ? {
                                id: Ga,
                                overflow: Xa
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Au(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
                        default:
                            return !1
                    }
                }

                function lo(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function uo(e) {
                    if (ao) {
                        var t = ro;
                        if (t) {
                            var n = t;
                            if (!so(e, t)) {
                                if (lo(e)) throw Error(o(418));
                                t = ua(n.nextSibling);
                                var r = no;
                                t && so(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e)
                            }
                        } else {
                            if (lo(e)) throw Error(o(418));
                            e.flags = -4097 & e.flags | 2, ao = !1, no = e
                        }
                    }
                }

                function co(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    no = e
                }

                function fo(e) {
                    if (e !== no) return !1;
                    if (!ao) return co(e), ao = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
                        if (lo(e)) throw po(), Error(o(418));
                        for (; t;) io(e, t), t = ua(t.nextSibling)
                    }
                    if (co(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ro = ua(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ro = null
                        }
                    } else ro = no ? ua(e.stateNode.nextSibling) : null;
                    return !0
                }

                function po() {
                    for (var e = ro; e;) e = ua(e.nextSibling)
                }

                function ho() {
                    ro = no = null, ao = !1
                }

                function mo(e) {
                    null === oo ? oo = [e] : oo.push(e)
                }
                var vo = w.ReactCurrentBatchConfig;

                function go(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = z({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var bo = Ea(null),
                    yo = null,
                    wo = null,
                    xo = null;

                function ko() {
                    xo = wo = yo = null
                }

                function So(e) {
                    var t = bo.current;
                    Oa(bo), e._currentValue = t
                }

                function Eo(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Oo(e, t) {
                    yo = e, xo = wo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (ws = !0), e.firstContext = null)
                }

                function jo(e) {
                    var t = e._currentValue;
                    if (xo !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === wo) {
                            if (null === yo) throw Error(o(308));
                            wo = e, yo.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else wo = wo.next = e;
                    return t
                }
                var Po = null;

                function Co(e) {
                    null === Po ? Po = [e] : Po.push(e)
                }

                function _o(e, t, n, r) {
                    var a = t.interleaved;
                    return null === a ? (n.next = n, Co(t)) : (n.next = a.next, a.next = n), t.interleaved = n, No(e, r)
                }

                function No(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Ao = !1;

                function To(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Lo(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Ro(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Fo(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Cl)) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, No(e, n)
                    }
                    return null === (a = r.interleaved) ? (t.next = t, Co(r)) : (t.next = a.next, a.next = t), r.interleaved = t, No(e, n)
                }

                function Mo(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
                    }
                }

                function zo(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === o ? a = o = i : o = o.next = i, n = n.next
                            } while (null !== n);
                            null === o ? a = o = t : o = o.next = t
                        } else a = o = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: o,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Io(e, t, n, r) {
                    var a = e.updateQueue;
                    Ao = !1;
                    var o = a.firstBaseUpdate,
                        i = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var l = s,
                            u = l.next;
                        l.next = null, null === i ? o = u : i.next = u, i = l;
                        var c = e.alternate;
                        null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== i && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l))
                    }
                    if (null !== o) {
                        var f = a.baseState;
                        for (i = 0, c = u = l = null, s = o;;) {
                            var d = s.lane,
                                p = s.eventTime;
                            if ((r & d) === d) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        m = s;
                                    switch (d = t, p = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof (h = m.payload)) {
                                                f = h.call(p, f, d);
                                                break e
                                            }
                                            f = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null === (d = "function" === typeof (h = m.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
                                            f = z({}, f, d);
                                            break e;
                                        case 2:
                                            Ao = !0
                                    }
                                }
                                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [s] : d.push(s))
                            } else p = {
                                eventTime: p,
                                lane: d,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === c ? (u = c = p, l = f) : c = c.next = p, i |= d;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (d = s).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null
                            }
                        }
                        if (null === c && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do {
                                i |= a.lane, a = a.next
                            } while (a !== t)
                        } else null === o && (a.shared.lanes = 0);
                        Ml |= i, e.lanes = i, e.memoizedState = f
                    }
                }

                function Do(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" !== typeof a) throw Error(o(191, a));
                                a.call(r)
                            }
                        }
                }
                var Uo = (new r.Component).refs;

                function Bo(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : z({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var Ho = {
                    isMounted: function (e) {
                        return !!(e = e._reactInternals) && He(e) === e
                    },
                    enqueueSetState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            a = tu(e),
                            o = Ro(r, a);
                        o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Fo(e, o, a)) && (nu(t, e, a, r), Mo(t, e, a))
                    },
                    enqueueReplaceState: function (e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            a = tu(e),
                            o = Ro(r, a);
                        o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Fo(e, o, a)) && (nu(t, e, a, r), Mo(t, e, a))
                    },
                    enqueueForceUpdate: function (e, t) {
                        e = e._reactInternals;
                        var n = eu(),
                            r = tu(e),
                            a = Ro(n, r);
                        a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Fo(e, a, r)) && (nu(t, e, r, n), Mo(t, e, r))
                    }
                };

                function Wo(e, t, n, r, a, o, i) {
                    return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(a, o))
                }

                function qo(e, t, n) {
                    var r = !1,
                        a = Pa,
                        o = t.contextType;
                    return "object" === typeof o && null !== o ? o = jo(o) : (a = Ta(t) ? Na : Ca.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Aa(e, a) : Pa), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ho, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function Vo(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ho.enqueueReplaceState(t, t.state, null)
                }

                function $o(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = Uo, To(e);
                    var o = t.contextType;
                    "object" === typeof o && null !== o ? a.context = jo(o) : (o = Ta(t) ? Na : Ca.current, a.context = Aa(e, o)), a.state = e.memoizedState, "function" === typeof (o = t.getDerivedStateFromProps) && (Bo(e, t, o, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Ho.enqueueReplaceState(a, a.state, null), Io(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function Yo(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(o(147, e));
                            var a = r,
                                i = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
                                var t = a.refs;
                                t === Uo && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
                            }, t._stringRef = i, t)
                        }
                        if ("string" !== typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function Qo(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function Ko(e) {
                    return (0, e._init)(e._payload)
                }

                function Go(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = Lu(e, t)).index = 0, e.sibling = null, e
                    }

                    function i(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = zu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var o = n.type;
                        return o === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === T && Ko(o) === t.type) ? ((r = a(t, n.props)).ref = Yo(e, t, n), r.return = e, r) : ((r = Ru(n.type, n.key, n.props, null, e.mode, r)).ref = Yo(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Iu(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? ((t = Fu(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = zu("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = Ru(t.type, t.key, t.props, null, e.mode, n)).ref = Yo(e, null, t), n.return = e, n;
                                case k:
                                    return (t = Iu(t, e.mode, n)).return = e, t;
                                case T:
                                    return d(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || F(t)) return (t = Fu(t, e.mode, n, null)).return = e, t;
                            Qo(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case k:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case T:
                                    return p(e, t, (a = n._init)(n._payload), r)
                            }
                            if (te(n) || F(n)) return null !== a ? null : f(e, t, n, r, null);
                            Qo(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case k:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case T:
                                    return h(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (te(r) || F(r)) return f(t, e = e.get(n) || null, r, a, null);
                            Qo(t, r)
                        }
                        return null
                    }

                    function m(a, o, s, l) {
                        for (var u = null, c = null, f = o, m = o = 0, v = null; null !== f && m < s.length; m++) {
                            f.index > m ? (v = f, f = null) : v = f.sibling;
                            var g = p(a, f, s[m], l);
                            if (null === g) {
                                null === f && (f = v);
                                break
                            }
                            e && f && null === g.alternate && t(a, f), o = i(g, o, m), null === c ? u = g : c.sibling = g, c = g, f = v
                        }
                        if (m === s.length) return n(a, f), ao && Ja(a, m), u;
                        if (null === f) {
                            for (; m < s.length; m++) null !== (f = d(a, s[m], l)) && (o = i(f, o, m), null === c ? u = f : c.sibling = f, c = f);
                            return ao && Ja(a, m), u
                        }
                        for (f = r(a, f); m < s.length; m++) null !== (v = h(f, a, m, s[m], l)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), o = i(v, o, m), null === c ? u = v : c.sibling = v, c = v);
                        return e && f.forEach((function (e) {
                            return t(a, e)
                        })), ao && Ja(a, m), u
                    }

                    function v(a, s, l, u) {
                        var c = F(l);
                        if ("function" !== typeof c) throw Error(o(150));
                        if (null == (l = c.call(l))) throw Error(o(151));
                        for (var f = c = null, m = s, v = s = 0, g = null, b = l.next(); null !== m && !b.done; v++, b = l.next()) {
                            m.index > v ? (g = m, m = null) : g = m.sibling;
                            var y = p(a, m, b.value, u);
                            if (null === y) {
                                null === m && (m = g);
                                break
                            }
                            e && m && null === y.alternate && t(a, m), s = i(y, s, v), null === f ? c = y : f.sibling = y, f = y, m = g
                        }
                        if (b.done) return n(a, m), ao && Ja(a, v), c;
                        if (null === m) {
                            for (; !b.done; v++, b = l.next()) null !== (b = d(a, b.value, u)) && (s = i(b, s, v), null === f ? c = b : f.sibling = b, f = b);
                            return ao && Ja(a, v), c
                        }
                        for (m = r(a, m); !b.done; v++, b = l.next()) null !== (b = h(m, a, v, b.value, u)) && (e && null !== b.alternate && m.delete(null === b.key ? v : b.key), s = i(b, s, v), null === f ? c = b : f.sibling = b, f = b);
                        return e && m.forEach((function (e) {
                            return t(a, e)
                        })), ao && Ja(a, v), c
                    }
                    return function e(r, o, i, l) {
                        if ("object" === typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case x:
                                    e: {
                                        for (var u = i.key, c = o; null !== c;) {
                                            if (c.key === u) {
                                                if ((u = i.type) === S) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (o = a(c, i.props.children)).return = r, r = o;
                                                        break e
                                                    }
                                                } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === T && Ko(u) === c.type) {
                                                    n(r, c.sibling), (o = a(c, i.props)).ref = Yo(r, c, i), o.return = r, r = o;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        i.type === S ? ((o = Fu(i.props.children, r.mode, l, i.key)).return = r, r = o) : ((l = Ru(i.type, i.key, i.props, null, r.mode, l)).ref = Yo(r, o, i), l.return = r, r = l)
                                    }
                                    return s(r);
                                case k:
                                    e: {
                                        for (c = i.key; null !== o;) {
                                            if (o.key === c) {
                                                if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
                                                    n(r, o.sibling), (o = a(o, i.children || [])).return = r, r = o;
                                                    break e
                                                }
                                                n(r, o);
                                                break
                                            }
                                            t(r, o), o = o.sibling
                                        }(o = Iu(i, r.mode, l)).return = r,
                                        r = o
                                    }
                                    return s(r);
                                case T:
                                    return e(r, o, (c = i._init)(i._payload), l)
                            }
                            if (te(i)) return m(r, o, i, l);
                            if (F(i)) return v(r, o, i, l);
                            Qo(r, i)
                        }
                        return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, i)).return = r, r = o) : (n(r, o), (o = zu(i, r.mode, l)).return = r, r = o), s(r)) : n(r, o)
                    }
                }
                var Xo = Go(!0),
                    Jo = Go(!1),
                    Zo = {},
                    ei = Ea(Zo),
                    ti = Ea(Zo),
                    ni = Ea(Zo);

                function ri(e) {
                    if (e === Zo) throw Error(o(174));
                    return e
                }

                function ai(e, t) {
                    switch (ja(ni, t), ja(ti, e), ja(ei, Zo), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                            break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Oa(ei), ja(ei, t)
                }

                function oi() {
                    Oa(ei), Oa(ti), Oa(ni)
                }

                function ii(e) {
                    ri(ni.current);
                    var t = ri(ei.current),
                        n = le(t, e.type);
                    t !== n && (ja(ti, e), ja(ei, n))
                }

                function si(e) {
                    ti.current === e && (Oa(ei), Oa(ti))
                }
                var li = Ea(0);

                function ui(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var ci = [];

                function fi() {
                    for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
                    ci.length = 0
                }
                var di = w.ReactCurrentDispatcher,
                    pi = w.ReactCurrentBatchConfig,
                    hi = 0,
                    mi = null,
                    vi = null,
                    gi = null,
                    bi = !1,
                    yi = !1,
                    wi = 0,
                    xi = 0;

                function ki() {
                    throw Error(o(321))
                }

                function Si(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!sr(e[n], t[n])) return !1;
                    return !0
                }

                function Ei(e, t, n, r, a, i) {
                    if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = null === e || null === e.memoizedState ? ss : ls, e = n(r, a), yi) {
                        i = 0;
                        do {
                            if (yi = !1, wi = 0, 25 <= i) throw Error(o(301));
                            i += 1, gi = vi = null, t.updateQueue = null, di.current = us, e = n(r, a)
                        } while (yi)
                    }
                    if (di.current = is, t = null !== vi && null !== vi.next, hi = 0, gi = vi = mi = null, bi = !1, t) throw Error(o(300));
                    return e
                }

                function Oi() {
                    var e = 0 !== wi;
                    return wi = 0, e
                }

                function ji() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === gi ? mi.memoizedState = gi = e : gi = gi.next = e, gi
                }

                function Pi() {
                    if (null === vi) {
                        var e = mi.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = vi.next;
                    var t = null === gi ? mi.memoizedState : gi.next;
                    if (null !== t) gi = t, vi = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (vi = e).memoizedState,
                            baseState: vi.baseState,
                            baseQueue: vi.baseQueue,
                            queue: vi.queue,
                            next: null
                        }, null === gi ? mi.memoizedState = gi = e : gi = gi.next = e
                    }
                    return gi
                }

                function Ci(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function _i(e) {
                    var t = Pi(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = vi,
                        a = r.baseQueue,
                        i = n.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = i.next, i.next = s
                        }
                        r.baseQueue = a = i, n.pending = null
                    }
                    if (null !== a) {
                        i = a.next, r = r.baseState;
                        var l = s = null,
                            u = null,
                            c = i;
                        do {
                            var f = c.lane;
                            if ((hi & f) === f) null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var d = {
                                    lane: f,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === u ? (l = u = d, s = r) : u = u.next = d, mi.lanes |= f, Ml |= f
                            }
                            c = c.next
                        } while (null !== c && c !== i);
                        null === u ? s = r : u.next = l, sr(r, t.memoizedState) || (ws = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            i = a.lane, mi.lanes |= i, Ml |= i, a = a.next
                        } while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Ni(e) {
                    var t = Pi(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        i = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var s = a = a.next;
                        do {
                            i = e(i, s.action), s = s.next
                        } while (s !== a);
                        sr(i, t.memoizedState) || (ws = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function Ai() {}

                function Ti(e, t) {
                    var n = mi,
                        r = Pi(),
                        a = t(),
                        i = !sr(r.memoizedState, a);
                    if (i && (r.memoizedState = a, ws = !0), r = r.queue, qi(Fi.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
                        if (n.flags |= 2048, Di(9, Ri.bind(null, n, r, a, t), void 0, null), null === _l) throw Error(o(349));
                        0 !== (30 & hi) || Li(n, t, a)
                    }
                    return a
                }

                function Li(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = mi.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Ri(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Mi(t) && zi(e)
                }

                function Fi(e, t, n) {
                    return n((function () {
                        Mi(t) && zi(e)
                    }))
                }

                function Mi(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !sr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function zi(e) {
                    var t = No(e, 1);
                    null !== t && nu(t, e, 1, -1)
                }

                function Ii(e) {
                    var t = ji();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: Ci,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = ns.bind(null, mi, e), [t.memoizedState, e]
                }

                function Di(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = mi.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Ui() {
                    return Pi().memoizedState
                }

                function Bi(e, t, n, r) {
                    var a = ji();
                    mi.flags |= e, a.memoizedState = Di(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Hi(e, t, n, r) {
                    var a = Pi();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== vi) {
                        var i = vi.memoizedState;
                        if (o = i.destroy, null !== r && Si(r, i.deps)) return void(a.memoizedState = Di(t, n, o, r))
                    }
                    mi.flags |= e, a.memoizedState = Di(1 | t, n, o, r)
                }

                function Wi(e, t) {
                    return Bi(8390656, 8, e, t)
                }

                function qi(e, t) {
                    return Hi(2048, 8, e, t)
                }

                function Vi(e, t) {
                    return Hi(4, 2, e, t)
                }

                function $i(e, t) {
                    return Hi(4, 4, e, t)
                }

                function Yi(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function () {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
                        t.current = null
                    }) : void 0
                }

                function Qi(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Hi(4, 4, Yi.bind(null, t, e), n)
                }

                function Ki() {}

                function Gi(e, t) {
                    var n = Pi();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Xi(e, t) {
                    var n = Pi();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Ji(e, t, n) {
                    return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, ws = !0), e.memoizedState = n) : (sr(n, t) || (n = mt(), mi.lanes |= n, Ml |= n, e.baseState = !0), t)
                }

                function Zi(e, t) {
                    var n = yt;
                    yt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = pi.transition;
                    pi.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        yt = n, pi.transition = r
                    }
                }

                function es() {
                    return Pi().memoizedState
                }

                function ts(e, t, n) {
                    var r = tu(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, rs(e)) as(t, n);
                    else if (null !== (n = _o(e, t, n, r))) {
                        nu(n, e, r, eu()), os(n, t, r)
                    }
                }

                function ns(e, t, n) {
                    var r = tu(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (rs(e)) as(t, a);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                            var i = t.lastRenderedState,
                                s = o(i, n);
                            if (a.hasEagerState = !0, a.eagerState = s, sr(s, i)) {
                                var l = t.interleaved;
                                return null === l ? (a.next = a, Co(t)) : (a.next = l.next, l.next = a), void(t.interleaved = a)
                            }
                        } catch (u) {}
                        null !== (n = _o(e, t, a, r)) && (nu(n, e, r, a = eu()), os(n, t, r))
                    }
                }

                function rs(e) {
                    var t = e.alternate;
                    return e === mi || null !== t && t === mi
                }

                function as(e, t) {
                    yi = bi = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function os(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, bt(e, n)
                    }
                }
                var is = {
                        readContext: jo,
                        useCallback: ki,
                        useContext: ki,
                        useEffect: ki,
                        useImperativeHandle: ki,
                        useInsertionEffect: ki,
                        useLayoutEffect: ki,
                        useMemo: ki,
                        useReducer: ki,
                        useRef: ki,
                        useState: ki,
                        useDebugValue: ki,
                        useDeferredValue: ki,
                        useTransition: ki,
                        useMutableSource: ki,
                        useSyncExternalStore: ki,
                        useId: ki,
                        unstable_isNewReconciler: !1
                    },
                    ss = {
                        readContext: jo,
                        useCallback: function (e, t) {
                            return ji().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: jo,
                        useEffect: Wi,
                        useImperativeHandle: function (e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Bi(4194308, 4, Yi.bind(null, t, e), n)
                        },
                        useLayoutEffect: function (e, t) {
                            return Bi(4194308, 4, e, t)
                        },
                        useInsertionEffect: function (e, t) {
                            return Bi(4, 2, e, t)
                        },
                        useMemo: function (e, t) {
                            var n = ji();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function (e, t, n) {
                            var r = ji();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = ts.bind(null, mi, e), [r.memoizedState, e]
                        },
                        useRef: function (e) {
                            return e = {
                                current: e
                            }, ji().memoizedState = e
                        },
                        useState: Ii,
                        useDebugValue: Ki,
                        useDeferredValue: function (e) {
                            return ji().memoizedState = e
                        },
                        useTransition: function () {
                            var e = Ii(!1),
                                t = e[0];
                            return e = Zi.bind(null, e[1]), ji().memoizedState = e, [t, e]
                        },
                        useMutableSource: function () {},
                        useSyncExternalStore: function (e, t, n) {
                            var r = mi,
                                a = ji();
                            if (ao) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === _l) throw Error(o(349));
                                0 !== (30 & hi) || Li(r, t, n)
                            }
                            a.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = i, Wi(Fi.bind(null, r, i, e), [e]), r.flags |= 2048, Di(9, Ri.bind(null, r, i, n, t), void 0, null), n
                        },
                        useId: function () {
                            var e = ji(),
                                t = _l.identifierPrefix;
                            if (ao) {
                                var n = Xa;
                                t = ":" + t + "R" + (n = (Ga & ~(1 << 32 - it(Ga) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    ls = {
                        readContext: jo,
                        useCallback: Gi,
                        useContext: jo,
                        useEffect: qi,
                        useImperativeHandle: Qi,
                        useInsertionEffect: Vi,
                        useLayoutEffect: $i,
                        useMemo: Xi,
                        useReducer: _i,
                        useRef: Ui,
                        useState: function () {
                            return _i(Ci)
                        },
                        useDebugValue: Ki,
                        useDeferredValue: function (e) {
                            return Ji(Pi(), vi.memoizedState, e)
                        },
                        useTransition: function () {
                            return [_i(Ci)[0], Pi().memoizedState]
                        },
                        useMutableSource: Ai,
                        useSyncExternalStore: Ti,
                        useId: es,
                        unstable_isNewReconciler: !1
                    },
                    us = {
                        readContext: jo,
                        useCallback: Gi,
                        useContext: jo,
                        useEffect: qi,
                        useImperativeHandle: Qi,
                        useInsertionEffect: Vi,
                        useLayoutEffect: $i,
                        useMemo: Xi,
                        useReducer: Ni,
                        useRef: Ui,
                        useState: function () {
                            return Ni(Ci)
                        },
                        useDebugValue: Ki,
                        useDeferredValue: function (e) {
                            var t = Pi();
                            return null === vi ? t.memoizedState = e : Ji(t, vi.memoizedState, e)
                        },
                        useTransition: function () {
                            return [Ni(Ci)[0], Pi().memoizedState]
                        },
                        useMutableSource: Ai,
                        useSyncExternalStore: Ti,
                        useId: es,
                        unstable_isNewReconciler: !1
                    };

                function cs(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += B(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (o) {
                        a = "\nError generating stack: " + o.message + "\n" + o.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a,
                        digest: null
                    }
                }

                function fs(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function ds(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function () {
                            throw n
                        }))
                    }
                }
                var ps = "function" === typeof WeakMap ? WeakMap : Map;

                function hs(e, t, n) {
                    (n = Ro(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function () {
                        ql || (ql = !0, Vl = r), ds(0, t)
                    }, n
                }

                function ms(e, t, n) {
                    (n = Ro(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = t.value;
                        n.payload = function () {
                            return r(a)
                        }, n.callback = function () {
                            ds(0, t)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function () {
                        ds(0, t), "function" !== typeof r && (null === $l ? $l = new Set([this]) : $l.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function vs(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new ps;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = Ou.bind(null, e, t, n), t.then(e, e))
                }

                function gs(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function bs(e, t, n, r, a) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ro(-1, 1)).tag = 2, Fo(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
                }
                var ys = w.ReactCurrentOwner,
                    ws = !1;

                function xs(e, t, n, r) {
                    t.child = null === e ? Jo(t, null, n, r) : Xo(t, e.child, n, r)
                }

                function ks(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    return Oo(t, a), r = Ei(e, t, n, r, o, a), n = Oi(), null === e || ws ? (ao && n && eo(t), t.flags |= 1, xs(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qs(e, t, a))
                }

                function Ss(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" !== typeof o || Tu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ru(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Es(e, t, o, r, a))
                    }
                    if (o = e.child, 0 === (e.lanes & a)) {
                        var i = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : lr)(i, r) && e.ref === t.ref) return qs(e, t, a)
                    }
                    return t.flags |= 1, (e = Lu(o, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Es(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (lr(o, r) && e.ref === t.ref) {
                            if (ws = !1, t.pendingProps = r = o, 0 === (e.lanes & a)) return t.lanes = e.lanes, qs(e, t, a);
                            0 !== (131072 & e.flags) && (ws = !0)
                        }
                    }
                    return Ps(e, t, n, r, a)
                }

                function Os(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, ja(Ll, Tl), Tl |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, ja(Ll, Tl), Tl |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== o ? o.baseLanes : n, ja(Ll, Tl), Tl |= r
                        }
                    else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ja(Ll, Tl), Tl |= r;
                    return xs(e, t, a, n), t.child
                }

                function js(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Ps(e, t, n, r, a) {
                    var o = Ta(n) ? Na : Ca.current;
                    return o = Aa(t, o), Oo(t, a), n = Ei(e, t, n, r, o, a), r = Oi(), null === e || ws ? (ao && r && eo(t), t.flags |= 1, xs(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qs(e, t, a))
                }

                function Cs(e, t, n, r, a) {
                    if (Ta(n)) {
                        var o = !0;
                        Ma(t)
                    } else o = !1;
                    if (Oo(t, a), null === t.stateNode) Ws(e, t), qo(t, n, r), $o(t, n, r, a), r = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            s = t.memoizedProps;
                        i.props = s;
                        var l = i.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = jo(u) : u = Aa(t, u = Ta(n) ? Na : Ca.current);
                        var c = n.getDerivedStateFromProps,
                            f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                        f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (s !== r || l !== u) && Vo(t, i, r, u), Ao = !1;
                        var d = t.memoizedState;
                        i.state = d, Io(t, r, i, a), l = t.memoizedState, s !== r || d !== l || _a.current || Ao ? ("function" === typeof c && (Bo(t, n, c, r), l = t.memoizedState), (s = Ao || Wo(t, n, s, r, d, l, u)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = s) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        i = t.stateNode, Lo(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : go(t.type, s), i.props = u, f = t.pendingProps, d = i.context, "object" === typeof (l = n.contextType) && null !== l ? l = jo(l) : l = Aa(t, l = Ta(n) ? Na : Ca.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (s !== f || d !== l) && Vo(t, i, r, l), Ao = !1, d = t.memoizedState, i.state = d, Io(t, r, i, a);
                        var h = t.memoizedState;
                        s !== f || d !== h || _a.current || Ao ? ("function" === typeof p && (Bo(t, n, p, r), h = t.memoizedState), (u = Ao || Wo(t, n, u, r, d, h, l) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, l), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, l)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = l, r = u) : ("function" !== typeof i.componentDidUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return _s(e, t, n, r, o, a)
                }

                function _s(e, t, n, r, a, o) {
                    js(e, t);
                    var i = 0 !== (128 & t.flags);
                    if (!r && !i) return a && za(t, n, !1), qs(e, t, o);
                    r = t.stateNode, ys.current = t;
                    var s = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && i ? (t.child = Xo(t, e.child, null, o), t.child = Xo(t, null, s, o)) : xs(e, t, s, o), t.memoizedState = r.state, a && za(t, n, !0), t.child
                }

                function Ns(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Ra(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ra(0, t.context, !1), ai(e, t.containerInfo)
                }

                function As(e, t, n, r, a) {
                    return ho(), mo(a), t.flags |= 256, xs(e, t, n, r), t.child
                }
                var Ts, Ls, Rs, Fs = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Ms(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function zs(e, t, n) {
                    var r, a = t.pendingProps,
                        i = li.current,
                        s = !1,
                        l = 0 !== (128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), ja(li, 1 & i), null === e) return uo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = a.children, e = a.fallback, s ? (a = t.mode, s = t.child, l = {
                        mode: "hidden",
                        children: l
                    }, 0 === (1 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Mu(l, a, 0, null), e = Fu(e, a, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Ms(n), t.memoizedState = Fs, e) : Is(t, l));
                    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, a, i, s) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Ds(e, t, s, r = fs(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Mu({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (i = Fu(i, a, s, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Xo(t, e.child, null, s), t.child.memoizedState = Ms(s), t.memoizedState = Fs, i);
                        if (0 === (1 & t.mode)) return Ds(e, t, s, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var l = r.dgst;
                            return r = l, Ds(e, t, s, r = fs(i = Error(o(419)), r, void 0))
                        }
                        if (l = 0 !== (s & e.childLanes), ws || l) {
                            if (null !== (r = _l)) {
                                switch (s & -s) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, No(e, a), nu(r, e, a, -1))
                            }
                            return mu(), Ds(e, t, s, r = fs(Error(o(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Pu.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ro = ua(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (Ya[Qa++] = Ga, Ya[Qa++] = Xa, Ya[Qa++] = Ka, Ga = e.id, Xa = e.overflow, Ka = t), t = Is(t, r.children), t.flags |= 4096, t)
                    }(e, t, l, a, r, i, n);
                    if (s) {
                        s = a.fallback, l = t.mode, r = (i = e.child).sibling;
                        var u = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 0 === (1 & l) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = u, t.deletions = null) : (a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? s = Lu(r, s) : (s = Fu(s, l, n, null)).flags |= 2, s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, l = null === (l = e.child.memoizedState) ? Ms(n) : {
                            baseLanes: l.baseLanes | n,
                            cachePool: null,
                            transitions: l.transitions
                        }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Fs, a
                    }
                    return e = (s = e.child).sibling, a = Lu(s, {
                        mode: "visible",
                        children: a.children
                    }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
                }

                function Is(e, t) {
                    return (t = Mu({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Ds(e, t, n, r) {
                    return null !== r && mo(r), Xo(t, e.child, null, n), (e = Is(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Us(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Eo(e.return, t, n)
                }

                function Bs(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
                }

                function Hs(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if (xs(e, t, r.children, n), 0 !== (2 & (r = li.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                            else if (19 === e.tag) Us(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (ja(li, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === ui(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bs(t, !1, a, n, o);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === ui(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            Bs(t, !0, n, null, o);
                            break;
                        case "together":
                            Bs(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Ws(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function qs(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Ml |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Lu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Lu(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Vs(e, t) {
                    if (!ao) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function $s(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Ys(e, t, n) {
                    var r = t.pendingProps;
                    switch (to(t), t.tag) {
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
                            return $s(t), null;
                        case 1:
                        case 17:
                            return Ta(t.type) && La(), $s(t), null;
                        case 3:
                            return r = t.stateNode, oi(), Oa(_a), Oa(Ca), fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (iu(oo), oo = null))), $s(t), null;
                        case 5:
                            si(t);
                            var a = ri(ni.current);
                            if (n = t.type, null !== e && null != t.stateNode) Ls(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return $s(t), null
                                }
                                if (e = ri(ei.current), fo(t)) {
                                    r = t.stateNode, n = t.type;
                                    var i = t.memoizedProps;
                                    switch (r[da] = t, r[pa] = i, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Dr("cancel", r), Dr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Dr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Fr.length; a++) Dr(Fr[a], r);
                                            break;
                                        case "source":
                                            Dr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Dr("error", r), Dr("load", r);
                                            break;
                                        case "details":
                                            Dr("toggle", r);
                                            break;
                                        case "input":
                                            G(r, i), Dr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, Dr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, i), Dr("invalid", r)
                                    }
                                    for (var l in be(n, i), a = null, i)
                                        if (i.hasOwnProperty(l)) {
                                            var u = i[l];
                                            "children" === l ? "string" === typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Jr(r.textContent, u, e), a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Jr(r.textContent, u, e), a = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Dr("scroll", r)
                                        } switch (n) {
                                        case "input":
                                            $(r), Z(r, i, !0);
                                            break;
                                        case "textarea":
                                            $(r), ie(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof i.onClick && (r.onclick = Zr)
                                    }
                                    r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    l = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {
                                        is: r.is
                                    }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[da] = t, e[pa] = r, Ts(e, t), t.stateNode = e;
                                    e: {
                                        switch (l = ye(n, r), n) {
                                            case "dialog":
                                                Dr("cancel", e), Dr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Dr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < Fr.length; a++) Dr(Fr[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Dr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Dr("error", e), Dr("load", e), a = r;
                                                break;
                                            case "details":
                                                Dr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                G(e, r), a = K(e, r), Dr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = z({}, r, {
                                                    value: void 0
                                                }), Dr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Dr("invalid", e)
                                        }
                                        for (i in be(n, a), u = a)
                                            if (u.hasOwnProperty(i)) {
                                                var c = u[i];
                                                "style" === i ? ve(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (s.hasOwnProperty(i) ? null != c && "onScroll" === i && Dr("scroll", e) : null != c && y(e, i, c, l))
                                            } switch (n) {
                                            case "input":
                                                $(e), Z(e, r, !1);
                                                break;
                                            case "textarea":
                                                $(e), ie(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + q(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof a.onClick && (e.onclick = Zr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return $s(t), null;
                        case 6:
                            if (e && null != t.stateNode) Rs(0, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                                if (n = ri(ni.current), ri(ei.current), fo(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (i = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                                        case 3:
                                            Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    i && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r
                            }
                            return $s(t), null;
                        case 13:
                            if (Oa(li), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(), ho(), t.flags |= 98560, i = !1;
                                else if (i = fo(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!i) throw Error(o(318));
                                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
                                        i[da] = t
                                    } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    $s(t), i = !1
                                } else null !== oo && (iu(oo), oo = null), i = !0;
                                if (!i) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & li.current) ? 0 === Rl && (Rl = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), $s(t), null);
                        case 4:
                            return oi(), null === e && Hr(t.stateNode.containerInfo), $s(t), null;
                        case 10:
                            return So(t.type._context), $s(t), null;
                        case 19:
                            if (Oa(li), null === (i = t.memoizedState)) return $s(t), null;
                            if (r = 0 !== (128 & t.flags), null === (l = i.rendering))
                                if (r) Vs(i, !1);
                                else {
                                    if (0 !== Rl || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (l = ui(e))) {
                                                for (t.flags |= 128, Vs(i, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (l = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return ja(li, 1 & li.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== i.tail && Xe() > Hl && (t.flags |= 128, r = !0, Vs(i, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ui(l))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Vs(i, !0), null === i.tail && "hidden" === i.tailMode && !l.alternate && !ao) return $s(t), null
                                    } else 2 * Xe() - i.renderingStartTime > Hl && 1073741824 !== n && (t.flags |= 128, r = !0, Vs(i, !1), t.lanes = 4194304);
                                i.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = i.last) ? n.sibling = l : t.child = l, i.last = l)
                            }
                            return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Xe(), t.sibling = null, n = li.current, ja(li, r ? 1 & n | 2 : 1 & n), t) : ($s(t), null);
                        case 22:
                        case 23:
                            return fu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Tl) && ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : $s(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(o(156, t.tag))
                }

                function Qs(e, t) {
                    switch (to(t), t.tag) {
                        case 1:
                            return Ta(t.type) && La(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return oi(), Oa(_a), Oa(Ca), fi(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return si(t), null;
                        case 13:
                            if (Oa(li), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(o(340));
                                ho()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Oa(li), null;
                        case 4:
                            return oi(), null;
                        case 10:
                            return So(t.type._context), null;
                        case 22:
                        case 23:
                            return fu(), null;
                        default:
                            return null
                    }
                }
                Ts = function (e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ls = function (e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, ri(ei.current);
                        var o, i = null;
                        switch (n) {
                            case "input":
                                a = K(e, a), r = K(e, r), i = [];
                                break;
                            case "select":
                                a = z({}, a, {
                                    value: void 0
                                }), r = z({}, r, {
                                    value: void 0
                                }), i = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), i = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                        }
                        for (c in be(n, r), n = null, a)
                            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                                if ("style" === c) {
                                    var l = a[c];
                                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                        for (c in r) {
                            var u = r[c];
                            if (l = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                                if ("style" === c)
                                    if (l) {
                                        for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                                        for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                                    } else n || (i || (i = []), i.push(c, n)), n = u;
                            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (i = i || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Dr("scroll", e), i || l === u || (i = [])) : (i = i || []).push(c, u))
                        }
                        n && (i = i || []).push("style", n);
                        var c = i;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Rs = function (e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Ks = !1,
                    Gs = !1,
                    Xs = "function" === typeof WeakSet ? WeakSet : Set,
                    Js = null;

                function Zs(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            Eu(e, t, r)
                        } else n.current = null
                }

                function el(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        Eu(e, t, r)
                    }
                }
                var tl = !1;

                function nl(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var o = a.destroy;
                                a.destroy = void 0, void 0 !== o && el(t, n, o)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function rl(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function al(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function ol(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, ol(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[ma], delete t[va], delete t[ga])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function il(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function sl(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || il(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function ll(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (ll(e, t, n), e = e.sibling; null !== e;) ll(e, t, n), e = e.sibling
                }

                function ul(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
                }
                var cl = null,
                    fl = !1;

                function dl(e, t, n) {
                    for (n = n.child; null !== n;) pl(e, t, n), n = n.sibling
                }

                function pl(e, t, n) {
                    if (ot && "function" === typeof ot.onCommitFiberUnmount) try {
                        ot.onCommitFiberUnmount(at, n)
                    } catch (s) {}
                    switch (n.tag) {
                        case 5:
                            Gs || Zs(n, t);
                        case 6:
                            var r = cl,
                                a = fl;
                            cl = null, dl(e, t, n), fl = a, null !== (cl = r) && (fl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cl.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cl && (fl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? la(e.parentNode, n) : 1 === e.nodeType && la(e, n), Ht(e)) : la(cl, n.stateNode));
                            break;
                        case 4:
                            r = cl, a = fl, cl = n.stateNode.containerInfo, fl = !0, dl(e, t, n), cl = r, fl = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Gs && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var o = a,
                                        i = o.destroy;
                                    o = o.tag, void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && el(n, t, i), a = a.next
                                } while (a !== r)
                            }
                            dl(e, t, n);
                            break;
                        case 1:
                            if (!Gs && (Zs(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (s) {
                                Eu(n, t, s)
                            }
                            dl(e, t, n);
                            break;
                        case 21:
                            dl(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Gs = (r = Gs) || null !== n.memoizedState, dl(e, t, n), Gs = r) : dl(e, t, n);
                            break;
                        default:
                            dl(e, t, n)
                    }
                }

                function hl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Xs), t.forEach((function (t) {
                            var r = Cu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function ml(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var i = e,
                                    s = t,
                                    l = s;
                                e: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            cl = l.stateNode, fl = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cl = l.stateNode.containerInfo, fl = !0;
                                            break e
                                    }
                                    l = l.return
                                }
                                if (null === cl) throw Error(o(160));
                                pl(i, s, a), cl = null, fl = !1;
                                var u = a.alternate;
                                null !== u && (u.return = null), a.return = null
                            } catch (c) {
                                Eu(a, t, c)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) vl(t, e), t = t.sibling
                }

                function vl(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (ml(t, e), gl(e), 4 & r) {
                                try {
                                    nl(3, e, e.return), rl(3, e)
                                } catch (v) {
                                    Eu(e, e.return, v)
                                }
                                try {
                                    nl(5, e, e.return)
                                } catch (v) {
                                    Eu(e, e.return, v)
                                }
                            }
                            break;
                        case 1:
                            ml(t, e), gl(e), 512 & r && null !== n && Zs(n, n.return);
                            break;
                        case 5:
                            if (ml(t, e), gl(e), 512 & r && null !== n && Zs(n, n.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    de(a, "")
                                } catch (v) {
                                    Eu(e, e.return, v)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var i = e.memoizedProps,
                                    s = null !== n ? n.memoizedProps : i,
                                    l = e.type,
                                    u = e.updateQueue;
                                if (e.updateQueue = null, null !== u) try {
                                    "input" === l && "radio" === i.type && null != i.name && X(a, i), ye(l, s);
                                    var c = ye(l, i);
                                    for (s = 0; s < u.length; s += 2) {
                                        var f = u[s],
                                            d = u[s + 1];
                                        "style" === f ? ve(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : y(a, f, d, c)
                                    }
                                    switch (l) {
                                        case "input":
                                            J(a, i);
                                            break;
                                        case "textarea":
                                            oe(a, i);
                                            break;
                                        case "select":
                                            var p = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!i.multiple;
                                            var h = i.value;
                                            null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                    a[pa] = i
                                } catch (v) {
                                    Eu(e, e.return, v)
                                }
                            }
                            break;
                        case 6:
                            if (ml(t, e), gl(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                a = e.stateNode, i = e.memoizedProps;
                                try {
                                    a.nodeValue = i
                                } catch (v) {
                                    Eu(e, e.return, v)
                                }
                            }
                            break;
                        case 3:
                            if (ml(t, e), gl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Ht(t.containerInfo)
                            } catch (v) {
                                Eu(e, e.return, v)
                            }
                            break;
                        case 4:
                        default:
                            ml(t, e), gl(e);
                            break;
                        case 13:
                            ml(t, e), gl(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Bl = Xe())), 4 & r && hl(e);
                            break;
                        case 22:
                            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gs = (c = Gs) || f, ml(t, e), Gs = c) : ml(t, e), gl(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                                    for (Js = e, f = e.child; null !== f;) {
                                        for (d = Js = f; null !== Js;) {
                                            switch (h = (p = Js).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nl(4, p, p.return);
                                                    break;
                                                case 1:
                                                    Zs(p, p.return);
                                                    var m = p.stateNode;
                                                    if ("function" === typeof m.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                        } catch (v) {
                                                            Eu(r, n, v)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Zs(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        xl(d);
                                                        continue
                                                    }
                                            }
                                            null !== h ? (h.return = p, Js = h) : xl(d)
                                        }
                                        f = f.sibling
                                    }
                                e: for (f = null, d = e;;) {
                                    if (5 === d.tag) {
                                        if (null === f) {
                                            f = d;
                                            try {
                                                a = d.stateNode, c ? "function" === typeof (i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (l = d.stateNode, s = void 0 !== (u = d.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
                                            } catch (v) {
                                                Eu(e, e.return, v)
                                            }
                                        }
                                    } else if (6 === d.tag) {
                                        if (null === f) try {
                                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                        } catch (v) {
                                            Eu(e, e.return, v)
                                        }
                                    } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                        d.child.return = d, d = d.child;
                                        continue
                                    }
                                    if (d === e) break e;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === e) break e;
                                        f === d && (f = null), d = d.return
                                    }
                                    f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                                }
                            }
                            break;
                        case 19:
                            ml(t, e), gl(e), 4 & r && hl(e);
                        case 21:
                    }
                }

                function gl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (il(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(o(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (de(a, ""), r.flags &= -33), ul(e, sl(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var i = r.stateNode.containerInfo;
                                    ll(e, sl(e), i);
                                    break;
                                default:
                                    throw Error(o(161))
                            }
                        }
                        catch (s) {
                            Eu(e, e.return, s)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function bl(e, t, n) {
                    Js = e, yl(e, t, n)
                }

                function yl(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Js;) {
                        var a = Js,
                            o = a.child;
                        if (22 === a.tag && r) {
                            var i = null !== a.memoizedState || Ks;
                            if (!i) {
                                var s = a.alternate,
                                    l = null !== s && null !== s.memoizedState || Gs;
                                s = Ks;
                                var u = Gs;
                                if (Ks = i, (Gs = l) && !u)
                                    for (Js = a; null !== Js;) l = (i = Js).child, 22 === i.tag && null !== i.memoizedState ? kl(a) : null !== l ? (l.return = i, Js = l) : kl(a);
                                for (; null !== o;) Js = o, yl(o, t, n), o = o.sibling;
                                Js = a, Ks = s, Gs = u
                            }
                            wl(e)
                        } else 0 !== (8772 & a.subtreeFlags) && null !== o ? (o.return = a, Js = o) : wl(e)
                    }
                }

                function wl(e) {
                    for (; null !== Js;) {
                        var t = Js;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Gs || rl(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Gs)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : go(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            } var i = t.updateQueue;
                                        null !== i && Do(t, i, r);
                                        break;
                                    case 3:
                                        var s = t.updateQueue;
                                        if (null !== s) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Do(t, s, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = l;
                                            var u = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    u.src && (n.src = u.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var f = c.memoizedState;
                                                if (null !== f) {
                                                    var d = f.dehydrated;
                                                    null !== d && Ht(d)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(o(163))
                                }
                                Gs || 512 & t.flags && al(t)
                            } catch (p) {
                                Eu(t, t.return, p)
                            }
                        }
                        if (t === e) {
                            Js = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Js = n;
                            break
                        }
                        Js = t.return
                    }
                }

                function xl(e) {
                    for (; null !== Js;) {
                        var t = Js;
                        if (t === e) {
                            Js = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Js = n;
                            break
                        }
                        Js = t.return
                    }
                }

                function kl(e) {
                    for (; null !== Js;) {
                        var t = Js;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        rl(4, t)
                                    } catch (l) {
                                        Eu(t, n, l)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (l) {
                                            Eu(t, a, l)
                                        }
                                    }
                                    var o = t.return;
                                    try {
                                        al(t)
                                    } catch (l) {
                                        Eu(t, o, l)
                                    }
                                    break;
                                case 5:
                                    var i = t.return;
                                    try {
                                        al(t)
                                    } catch (l) {
                                        Eu(t, i, l)
                                    }
                            }
                        } catch (l) {
                            Eu(t, t.return, l)
                        }
                        if (t === e) {
                            Js = null;
                            break
                        }
                        var s = t.sibling;
                        if (null !== s) {
                            s.return = t.return, Js = s;
                            break
                        }
                        Js = t.return
                    }
                }
                var Sl, El = Math.ceil,
                    Ol = w.ReactCurrentDispatcher,
                    jl = w.ReactCurrentOwner,
                    Pl = w.ReactCurrentBatchConfig,
                    Cl = 0,
                    _l = null,
                    Nl = null,
                    Al = 0,
                    Tl = 0,
                    Ll = Ea(0),
                    Rl = 0,
                    Fl = null,
                    Ml = 0,
                    zl = 0,
                    Il = 0,
                    Dl = null,
                    Ul = null,
                    Bl = 0,
                    Hl = 1 / 0,
                    Wl = null,
                    ql = !1,
                    Vl = null,
                    $l = null,
                    Yl = !1,
                    Ql = null,
                    Kl = 0,
                    Gl = 0,
                    Xl = null,
                    Jl = -1,
                    Zl = 0;

                function eu() {
                    return 0 !== (6 & Cl) ? Xe() : -1 !== Jl ? Jl : Jl = Xe()
                }

                function tu(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Cl) && 0 !== Al ? Al & -Al : null !== vo.transition ? (0 === Zl && (Zl = mt()), Zl) : 0 !== (e = yt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type)
                }

                function nu(e, t, n, r) {
                    if (50 < Gl) throw Gl = 0, Xl = null, Error(o(185));
                    gt(e, n, r), 0 !== (2 & Cl) && e === _l || (e === _l && (0 === (2 & Cl) && (zl |= n), 4 === Rl && su(e, Al)), ru(e, r), 1 === n && 0 === Cl && 0 === (1 & t.mode) && (Hl = Xe() + 500, Da && Ha()))
                }

                function ru(e, t) {
                    var n = e.callbackNode;
                    ! function (e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
                            var i = 31 - it(o),
                                s = 1 << i,
                                l = a[i]; - 1 === l ? 0 !== (s & n) && 0 === (s & r) || (a[i] = pt(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s
                        }
                    }(e, t);
                    var r = dt(e, e === _l ? Al : 0);
                    if (0 === r) null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Qe(n), 1 === t) 0 === e.tag ? function (e) {
                            Da = !0, Ba(e)
                        }(lu.bind(null, e)) : Ba(lu.bind(null, e)), ia((function () {
                            0 === (6 & Cl) && Ha()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Ze;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = _u(n, au.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function au(e, t) {
                    if (Jl = -1, Zl = 0, 0 !== (6 & Cl)) throw Error(o(327));
                    var n = e.callbackNode;
                    if (ku() && e.callbackNode !== n) return null;
                    var r = dt(e, e === _l ? Al : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
                    else {
                        t = r;
                        var a = Cl;
                        Cl |= 2;
                        var i = hu();
                        for (_l === e && Al === t || (Wl = null, Hl = Xe() + 500, du(e, t));;) try {
                            bu();
                            break
                        } catch (l) {
                            pu(e, l)
                        }
                        ko(), Ol.current = i, Cl = a, null !== Nl ? t = 0 : (_l = null, Al = 0, t = Rl)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (a = ht(e)) && (r = a, t = ou(e, a))), 1 === t) throw n = Fl, du(e, 0), su(e, r), ru(e, Xe()), n;
                        if (6 === t) su(e, r);
                        else {
                            if (a = e.current.alternate, 0 === (30 & r) && ! function (e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        o = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!sr(o(), a)) return !1
                                                    } catch (s) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (t = vu(e, r)) && (0 !== (i = ht(e)) && (r = i, t = ou(e, i))), 1 === t)) throw n = Fl, du(e, 0), su(e, r), ru(e, Xe()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                case 5:
                                    xu(e, Ul, Wl);
                                    break;
                                case 3:
                                    if (su(e, r), (130023424 & r) === r && 10 < (t = Bl + 500 - Xe())) {
                                        if (0 !== dt(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            eu(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(xu.bind(null, e, Ul, Wl), t);
                                        break
                                    }
                                    xu(e, Ul, Wl);
                                    break;
                                case 4:
                                    if (su(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, a = -1; 0 < r;) {
                                        var s = 31 - it(r);
                                        i = 1 << s, (s = t[s]) > a && (a = s), r &= ~i
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * El(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(xu.bind(null, e, Ul, Wl), r);
                                        break
                                    }
                                    xu(e, Ul, Wl);
                                    break;
                                default:
                                    throw Error(o(329))
                            }
                        }
                    }
                    return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null
                }

                function ou(e, t) {
                    var n = Dl;
                    return e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256), 2 !== (e = vu(e, t)) && (t = Ul, Ul = n, null !== t && iu(t)), e
                }

                function iu(e) {
                    null === Ul ? Ul = e : Ul.push.apply(Ul, e)
                }

                function su(e, t) {
                    for (t &= ~Il, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - it(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function lu(e) {
                    if (0 !== (6 & Cl)) throw Error(o(327));
                    ku();
                    var t = dt(e, 0);
                    if (0 === (1 & t)) return ru(e, Xe()), null;
                    var n = vu(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = ht(e);
                        0 !== r && (t = r, n = ou(e, r))
                    }
                    if (1 === n) throw n = Fl, du(e, 0), su(e, t), ru(e, Xe()), n;
                    if (6 === n) throw Error(o(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xu(e, Ul, Wl), ru(e, Xe()), null
                }

                function uu(e, t) {
                    var n = Cl;
                    Cl |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Cl = n) && (Hl = Xe() + 500, Da && Ha())
                    }
                }

                function cu(e) {
                    null !== Ql && 0 === Ql.tag && 0 === (6 & Cl) && ku();
                    var t = Cl;
                    Cl |= 1;
                    var n = Pl.transition,
                        r = yt;
                    try {
                        if (Pl.transition = null, yt = 1, e) return e()
                    } finally {
                        yt = r, Pl.transition = n, 0 === (6 & (Cl = t)) && Ha()
                    }
                }

                function fu() {
                    Tl = Ll.current, Oa(Ll)
                }

                function du(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Nl)
                        for (n = Nl.return; null !== n;) {
                            var r = n;
                            switch (to(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && La();
                                    break;
                                case 3:
                                    oi(), Oa(_a), Oa(Ca), fi();
                                    break;
                                case 5:
                                    si(r);
                                    break;
                                case 4:
                                    oi();
                                    break;
                                case 13:
                                case 19:
                                    Oa(li);
                                    break;
                                case 10:
                                    So(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fu()
                            }
                            n = n.return
                        }
                    if (_l = e, Nl = e = Lu(e.current, null), Al = Tl = t, Rl = 0, Fl = null, Il = zl = Ml = 0, Ul = Dl = null, null !== Po) {
                        for (t = 0; t < Po.length; t++)
                            if (null !== (r = (n = Po[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    o = n.pending;
                                if (null !== o) {
                                    var i = o.next;
                                    o.next = a, r.next = i
                                }
                                n.pending = r
                            } Po = null
                    }
                    return e
                }

                function pu(e, t) {
                    for (;;) {
                        var n = Nl;
                        try {
                            if (ko(), di.current = is, bi) {
                                for (var r = mi.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                bi = !1
                            }
                            if (hi = 0, gi = vi = mi = null, yi = !1, wi = 0, jl.current = null, null === n || null === n.return) {
                                Rl = 1, Fl = t, Nl = null;
                                break
                            }
                            e: {
                                var i = e,
                                    s = n.return,
                                    l = n,
                                    u = t;
                                if (t = Al, l.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                    var c = u,
                                        f = l,
                                        d = f.tag;
                                    if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                                        var p = f.alternate;
                                        p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                    }
                                    var h = gs(s);
                                    if (null !== h) {
                                        h.flags &= -257, bs(h, s, l, 0, t), 1 & h.mode && vs(i, c, t), u = c;
                                        var m = (t = h).updateQueue;
                                        if (null === m) {
                                            var v = new Set;
                                            v.add(u), t.updateQueue = v
                                        } else m.add(u);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        vs(i, c, t), mu();
                                        break e
                                    }
                                    u = Error(o(426))
                                } else if (ao && 1 & l.mode) {
                                    var g = gs(s);
                                    if (null !== g) {
                                        0 === (65536 & g.flags) && (g.flags |= 256), bs(g, s, l, 0, t), mo(cs(u, l));
                                        break e
                                    }
                                }
                                i = u = cs(u, l),
                                4 !== Rl && (Rl = 2),
                                null === Dl ? Dl = [i] : Dl.push(i),
                                i = s;do {
                                    switch (i.tag) {
                                        case 3:
                                            i.flags |= 65536, t &= -t, i.lanes |= t, zo(i, hs(0, u, t));
                                            break e;
                                        case 1:
                                            l = u;
                                            var b = i.type,
                                                y = i.stateNode;
                                            if (0 === (128 & i.flags) && ("function" === typeof b.getDerivedStateFromError || null !== y && "function" === typeof y.componentDidCatch && (null === $l || !$l.has(y)))) {
                                                i.flags |= 65536, t &= -t, i.lanes |= t, zo(i, ms(i, l, t));
                                                break e
                                            }
                                    }
                                    i = i.return
                                } while (null !== i)
                            }
                            wu(n)
                        } catch (w) {
                            t = w, Nl === n && null !== n && (Nl = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function hu() {
                    var e = Ol.current;
                    return Ol.current = is, null === e ? is : e
                }

                function mu() {
                    0 !== Rl && 3 !== Rl && 2 !== Rl || (Rl = 4), null === _l || 0 === (268435455 & Ml) && 0 === (268435455 & zl) || su(_l, Al)
                }

                function vu(e, t) {
                    var n = Cl;
                    Cl |= 2;
                    var r = hu();
                    for (_l === e && Al === t || (Wl = null, du(e, t));;) try {
                        gu();
                        break
                    } catch (a) {
                        pu(e, a)
                    }
                    if (ko(), Cl = n, Ol.current = r, null !== Nl) throw Error(o(261));
                    return _l = null, Al = 0, Rl
                }

                function gu() {
                    for (; null !== Nl;) yu(Nl)
                }

                function bu() {
                    for (; null !== Nl && !Ke();) yu(Nl)
                }

                function yu(e) {
                    var t = Sl(e.alternate, e, Tl);
                    e.memoizedProps = e.pendingProps, null === t ? wu(e) : Nl = t, jl.current = null
                }

                function wu(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Ys(n, t, Tl))) return void(Nl = n)
                        } else {
                            if (null !== (n = Qs(n, t))) return n.flags &= 32767, void(Nl = n);
                            if (null === e) return Rl = 6, void(Nl = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Nl = t);
                        Nl = t = e
                    } while (null !== t);
                    0 === Rl && (Rl = 5)
                }

                function xu(e, t, n) {
                    var r = yt,
                        a = Pl.transition;
                    try {
                        Pl.transition = null, yt = 1,
                            function (e, t, n, r) {
                                do {
                                    ku()
                                } while (null !== Ql);
                                if (0 !== (6 & Cl)) throw Error(o(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var i = n.lanes | n.childLanes;
                                if (function (e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var a = 31 - it(n),
                                                o = 1 << a;
                                            t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o
                                        }
                                    }(e, i), e === _l && (Nl = _l = null, Al = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yl || (Yl = !0, _u(tt, (function () {
                                        return ku(), null
                                    }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                                    i = Pl.transition, Pl.transition = null;
                                    var s = yt;
                                    yt = 1;
                                    var l = Cl;
                                    Cl |= 4, jl.current = null,
                                        function (e, t) {
                                            if (ea = qt, pr(e = dr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            i = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, i.nodeType
                                                        } catch (x) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var s = 0,
                                                            l = -1,
                                                            u = -1,
                                                            c = 0,
                                                            f = 0,
                                                            d = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (l = s + a), d !== i || 0 !== r && 3 !== d.nodeType || (u = s + r), 3 === d.nodeType && (s += d.nodeValue.length), null !== (h = d.firstChild);) p = d, d = h;
                                                            for (;;) {
                                                                if (d === e) break t;
                                                                if (p === n && ++c === a && (l = s), p === i && ++f === r && (u = s), null !== (h = d.nextSibling)) break;
                                                                p = (d = p).parentNode
                                                            }
                                                            d = h
                                                        }
                                                        n = -1 === l || -1 === u ? null : {
                                                            start: l,
                                                            end: u
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ta = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, qt = !1, Js = t; null !== Js;)
                                                if (e = (t = Js).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Js = e;
                                                else
                                                    for (; null !== Js;) {
                                                        t = Js;
                                                        try {
                                                            var m = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var v = m.memoizedProps,
                                                                            g = m.memoizedState,
                                                                            b = t.stateNode,
                                                                            y = b.getSnapshotBeforeUpdate(t.elementType === t.type ? v : go(t.type, v), g);
                                                                        b.__reactInternalSnapshotBeforeUpdate = y
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(o(163))
                                                            }
                                                        } catch (x) {
                                                            Eu(t, t.return, x)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Js = e;
                                                            break
                                                        }
                                                        Js = t.return
                                                    }
                                            m = tl, tl = !1
                                        }(e, n), vl(n, e), hr(ta), qt = !!ea, ta = ea = null, e.current = n, bl(n, e, a), Ge(), Cl = l, yt = s, Pl.transition = i
                                } else e.current = n;
                                if (Yl && (Yl = !1, Ql = e, Kl = a), i = e.pendingLanes, 0 === i && ($l = null), function (e) {
                                        if (ot && "function" === typeof ot.onCommitFiberRoot) try {
                                            ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), ru(e, Xe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((a = t[n]).value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if (ql) throw ql = !1, e = Vl, Vl = null, e;
                                0 !== (1 & Kl) && 0 !== e.tag && ku(), i = e.pendingLanes, 0 !== (1 & i) ? e === Xl ? Gl++ : (Gl = 0, Xl = e) : Gl = 0, Ha()
                            }(e, t, n, r)
                    } finally {
                        Pl.transition = a, yt = r
                    }
                    return null
                }

                function ku() {
                    if (null !== Ql) {
                        var e = wt(Kl),
                            t = Pl.transition,
                            n = yt;
                        try {
                            if (Pl.transition = null, yt = 16 > e ? 16 : e, null === Ql) var r = !1;
                            else {
                                if (e = Ql, Ql = null, Kl = 0, 0 !== (6 & Cl)) throw Error(o(331));
                                var a = Cl;
                                for (Cl |= 4, Js = e.current; null !== Js;) {
                                    var i = Js,
                                        s = i.child;
                                    if (0 !== (16 & Js.flags)) {
                                        var l = i.deletions;
                                        if (null !== l) {
                                            for (var u = 0; u < l.length; u++) {
                                                var c = l[u];
                                                for (Js = c; null !== Js;) {
                                                    var f = Js;
                                                    switch (f.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nl(8, f, i)
                                                    }
                                                    var d = f.child;
                                                    if (null !== d) d.return = f, Js = d;
                                                    else
                                                        for (; null !== Js;) {
                                                            var p = (f = Js).sibling,
                                                                h = f.return;
                                                            if (ol(f), f === c) {
                                                                Js = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = h, Js = p;
                                                                break
                                                            }
                                                            Js = h
                                                        }
                                                }
                                            }
                                            var m = i.alternate;
                                            if (null !== m) {
                                                var v = m.child;
                                                if (null !== v) {
                                                    m.child = null;
                                                    do {
                                                        var g = v.sibling;
                                                        v.sibling = null, v = g
                                                    } while (null !== v)
                                                }
                                            }
                                            Js = i
                                        }
                                    }
                                    if (0 !== (2064 & i.subtreeFlags) && null !== s) s.return = i, Js = s;
                                    else e: for (; null !== Js;) {
                                        if (0 !== (2048 & (i = Js).flags)) switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nl(9, i, i.return)
                                        }
                                        var b = i.sibling;
                                        if (null !== b) {
                                            b.return = i.return, Js = b;
                                            break e
                                        }
                                        Js = i.return
                                    }
                                }
                                var y = e.current;
                                for (Js = y; null !== Js;) {
                                    var w = (s = Js).child;
                                    if (0 !== (2064 & s.subtreeFlags) && null !== w) w.return = s, Js = w;
                                    else e: for (s = y; null !== Js;) {
                                        if (0 !== (2048 & (l = Js).flags)) try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rl(9, l)
                                            }
                                        } catch (k) {
                                            Eu(l, l.return, k)
                                        }
                                        if (l === s) {
                                            Js = null;
                                            break e
                                        }
                                        var x = l.sibling;
                                        if (null !== x) {
                                            x.return = l.return, Js = x;
                                            break e
                                        }
                                        Js = l.return
                                    }
                                }
                                if (Cl = a, Ha(), ot && "function" === typeof ot.onPostCommitFiberRoot) try {
                                    ot.onPostCommitFiberRoot(at, e)
                                } catch (k) {}
                                r = !0
                            }
                            return r
                        } finally {
                            yt = n, Pl.transition = t
                        }
                    }
                    return !1
                }

                function Su(e, t, n) {
                    e = Fo(e, t = hs(0, t = cs(n, t), 1), 1), t = eu(), null !== e && (gt(e, 1, t), ru(e, t))
                }

                function Eu(e, t, n) {
                    if (3 === e.tag) Su(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Su(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === $l || !$l.has(r))) {
                                    t = Fo(t, e = ms(t, e = cs(n, e), 1), 1), e = eu(), null !== t && (gt(t, 1, e), ru(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Ou(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = eu(), e.pingedLanes |= e.suspendedLanes & n, _l === e && (Al & n) === n && (4 === Rl || 3 === Rl && (130023424 & Al) === Al && 500 > Xe() - Bl ? du(e, 0) : Il |= n), ru(e, t)
                }

                function ju(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = eu();
                    null !== (e = No(e, t)) && (gt(e, t, n), ru(e, n))
                }

                function Pu(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), ju(e, n)
                }

                function Cu(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), ju(e, n)
                }

                function _u(e, t) {
                    return Ye(e, t)
                }

                function Nu(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Au(e, t, n, r) {
                    return new Nu(e, t, n, r)
                }

                function Tu(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Lu(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Au(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Ru(e, t, n, r, a, i) {
                    var s = 2;
                    if (r = e, "function" === typeof e) Tu(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case S:
                            return Fu(n.children, a, i, t);
                        case E:
                            s = 8, a |= 8;
                            break;
                        case O:
                            return (e = Au(12, n, t, 2 | a)).elementType = O, e.lanes = i, e;
                        case _:
                            return (e = Au(13, n, t, a)).elementType = _, e.lanes = i, e;
                        case N:
                            return (e = Au(19, n, t, a)).elementType = N, e.lanes = i, e;
                        case L:
                            return Mu(n, a, i, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case j:
                                    s = 10;
                                    break e;
                                case P:
                                    s = 9;
                                    break e;
                                case C:
                                    s = 11;
                                    break e;
                                case A:
                                    s = 14;
                                    break e;
                                case T:
                                    s = 16, r = null;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Au(s, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
                }

                function Fu(e, t, n, r) {
                    return (e = Au(7, e, r, t)).lanes = n, e
                }

                function Mu(e, t, n, r) {
                    return (e = Au(22, e, r, t)).elementType = L, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function zu(e, t, n) {
                    return (e = Au(6, e, null, t)).lanes = n, e
                }

                function Iu(e, t, n) {
                    return (t = Au(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Du(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function Uu(e, t, n, r, a, o, i, s, l) {
                    return e = new Du(e, t, n, s, l), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Au(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, To(o), e
                }

                function Bu(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function Hu(e) {
                    if (!e) return Pa;
                    e: {
                        if (He(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Ta(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(o(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Ta(n)) return Fa(e, n, t)
                    }
                    return t
                }

                function Wu(e, t, n, r, a, o, i, s, l) {
                    return (e = Uu(n, r, !0, e, 0, o, 0, s, l)).context = Hu(null), n = e.current, (o = Ro(r = eu(), a = tu(n))).callback = void 0 !== t && null !== t ? t : null, Fo(n, o, a), e.current.lanes = a, gt(e, a, r), ru(e, r), e
                }

                function qu(e, t, n, r) {
                    var a = t.current,
                        o = eu(),
                        i = tu(a);
                    return n = Hu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ro(o, i)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Fo(a, t, i)) && (nu(e, a, i, o), Mo(e, a, i)), i
                }

                function Vu(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function $u(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Yu(e, t) {
                    $u(e, t), (e = e.alternate) && $u(e, t)
                }
                Sl = function (e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || _a.current) ws = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return ws = !1,
                                function (e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ns(t), ho();
                                            break;
                                        case 5:
                                            ii(t);
                                            break;
                                        case 1:
                                            Ta(t.type) && Ma(t);
                                            break;
                                        case 4:
                                            ai(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                a = t.memoizedProps.value;
                                            ja(bo, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (ja(li, 1 & li.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? zs(e, t, n) : (ja(li, 1 & li.current), null !== (e = qs(e, t, n)) ? e.sibling : null);
                                            ja(li, 1 & li.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Hs(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), ja(li, li.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, Os(e, t, n)
                                    }
                                    return qs(e, t, n)
                                }(e, t, n);
                            ws = 0 !== (131072 & e.flags)
                        }
                    else ws = !1, ao && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Ws(e, t), e = t.pendingProps;
                            var a = Aa(t, Ca.current);
                            Oo(t, n), a = Ei(null, t, r, e, a, n);
                            var i = Oi();
                            return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ta(r) ? (i = !0, Ma(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, To(t), a.updater = Ho, t.stateNode = a, a._reactInternals = t, $o(t, r, e, n), t = _s(null, t, r, !0, i, n)) : (t.tag = 0, ao && i && eo(t), xs(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Ws(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) {
                                    if ("function" === typeof e) return Tu(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === C) return 11;
                                        if (e === A) return 14
                                    }
                                    return 2
                                }(r), e = go(r, e), a) {
                                    case 0:
                                        t = Ps(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Cs(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = ks(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Ss(null, t, r, go(r.type, e), n);
                                        break e
                                }
                                throw Error(o(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Ps(e, t, r, a = t.elementType === r ? a : go(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, Cs(e, t, r, a = t.elementType === r ? a : go(r, a), n);
                        case 3:
                            e: {
                                if (Ns(t), null === e) throw Error(o(387));r = t.pendingProps,
                                a = (i = t.memoizedState).element,
                                Lo(e, t),
                                Io(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = As(e, t, r, n, a = cs(Error(o(423)), t));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = As(e, t, r, n, a = cs(Error(o(424)), t));
                                        break e
                                    }
                                    for (ro = ua(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Jo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (ho(), r === a) {
                                        t = qs(e, t, n);
                                        break e
                                    }
                                    xs(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return ii(t), null === e && uo(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, s = a.children, na(r, a) ? s = null : null !== i && na(r, i) && (t.flags |= 32), js(e, t), xs(e, t, s, n), t.child;
                        case 6:
                            return null === e && uo(t), null;
                        case 13:
                            return zs(e, t, n);
                        case 4:
                            return ai(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xo(t, null, r, n) : xs(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, ks(e, t, r, a = t.elementType === r ? a : go(r, a), n);
                        case 7:
                            return xs(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return xs(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, s = a.value, ja(bo, r._currentValue), r._currentValue = s, null !== i)
                                    if (sr(i.value, s)) {
                                        if (i.children === a.children && !_a.current) {
                                            t = qs(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                            var l = i.dependencies;
                                            if (null !== l) {
                                                s = i.child;
                                                for (var u = l.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === i.tag) {
                                                            (u = Ro(-1, n & -n)).tag = 2;
                                                            var c = i.updateQueue;
                                                            if (null !== c) {
                                                                var f = (c = c.shared).pending;
                                                                null === f ? u.next = u : (u.next = f.next, f.next = u), c.pending = u
                                                            }
                                                        }
                                                        i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Eo(i.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === i.tag) s = i.type === t.type ? null : i.child;
                                            else if (18 === i.tag) {
                                                if (null === (s = i.return)) throw Error(o(341));
                                                s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), Eo(s, n, t), s = i.sibling
                                            } else s = i.child;
                                            if (null !== s) s.return = i;
                                            else
                                                for (s = i; null !== s;) {
                                                    if (s === t) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (i = s.sibling)) {
                                                        i.return = s.return, s = i;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            i = s
                                        }
                                xs(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, Oo(t, n), r = r(a = jo(a)), t.flags |= 1, xs(e, t, r, n), t.child;
                        case 14:
                            return a = go(r = t.type, t.pendingProps), Ss(e, t, r, a = go(r.type, a), n);
                        case 15:
                            return Es(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : go(r, a), Ws(e, t), t.tag = 1, Ta(r) ? (e = !0, Ma(t)) : e = !1, Oo(t, n), qo(t, r, a), $o(t, r, a, n), _s(null, t, r, !0, e, n);
                        case 19:
                            return Hs(e, t, n);
                        case 22:
                            return Os(e, t, n)
                    }
                    throw Error(o(156, t.tag))
                };
                var Qu = "function" === typeof reportError ? reportError : function (e) {
                    console.error(e)
                };

                function Ku(e) {
                    this._internalRoot = e
                }

                function Gu(e) {
                    this._internalRoot = e
                }

                function Xu(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Ju(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Zu() {}

                function ec(e, t, n, r, a) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var i = o;
                        if ("function" === typeof a) {
                            var s = a;
                            a = function () {
                                var e = Vu(i);
                                s.call(e)
                            }
                        }
                        qu(t, i, e, a)
                    } else i = function (e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var o = r;
                                r = function () {
                                    var e = Vu(i);
                                    o.call(e)
                                }
                            }
                            var i = Wu(t, r, e, 0, null, !1, 0, "", Zu);
                            return e._reactRootContainer = i, e[ha] = i.current, Hr(8 === e.nodeType ? e.parentNode : e), cu(), i
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" === typeof r) {
                            var s = r;
                            r = function () {
                                var e = Vu(l);
                                s.call(e)
                            }
                        }
                        var l = Uu(e, 0, !1, null, 0, !1, 0, "", Zu);
                        return e._reactRootContainer = l, e[ha] = l.current, Hr(8 === e.nodeType ? e.parentNode : e), cu((function () {
                            qu(t, l, n, r)
                        })), l
                    }(n, t, e, a, r);
                    return Vu(i)
                }
                Gu.prototype.render = Ku.prototype.render = function (e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    qu(e, t, null, null)
                }, Gu.prototype.unmount = Ku.prototype.unmount = function () {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cu((function () {
                            qu(null, e, null, null)
                        })), t[ha] = null
                    }
                }, Gu.prototype.unstable_scheduleHydration = function (e) {
                    if (e) {
                        var t = Et();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Lt.length && 0 !== t && t < Lt[n].priority; n++);
                        Lt.splice(n, 0, e), 0 === n && zt(e)
                    }
                }, xt = function (e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ft(t.pendingLanes);
                                0 !== n && (bt(t, 1 | n), ru(t, Xe()), 0 === (6 & Cl) && (Hl = Xe() + 500, Ha()))
                            }
                            break;
                        case 13:
                            cu((function () {
                                var t = No(e, 1);
                                if (null !== t) {
                                    var n = eu();
                                    nu(t, e, 1, n)
                                }
                            })), Yu(e, 1)
                    }
                }, kt = function (e) {
                    if (13 === e.tag) {
                        var t = No(e, 134217728);
                        if (null !== t) nu(t, e, 134217728, eu());
                        Yu(e, 134217728)
                    }
                }, St = function (e) {
                    if (13 === e.tag) {
                        var t = tu(e),
                            n = No(e, t);
                        if (null !== n) nu(n, e, t, eu());
                        Yu(e, t)
                    }
                }, Et = function () {
                    return yt
                }, Ot = function (e, t) {
                    var n = yt;
                    try {
                        return yt = e, t()
                    } finally {
                        yt = n
                    }
                }, ke = function (e, t, n) {
                    switch (t) {
                        case "input":
                            if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = xa(r);
                                        if (!a) throw Error(o(90));
                                        Y(r), J(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            oe(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Ce = uu, _e = cu;
                var tc = {
                        usingClientEntryPoint: !1,
                        Events: [ya, wa, xa, je, Pe, uu]
                    },
                    nc = {
                        findFiberByHostInstance: ba,
                        bundleType: 0,
                        version: "18.2.0",
                        rendererPackageName: "react-dom"
                    },
                    rc = {
                        bundleType: nc.bundleType,
                        version: nc.version,
                        rendererPackageName: nc.rendererPackageName,
                        rendererConfig: nc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = Ve(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nc.findFiberByHostInstance || function () {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ac.isDisabled && ac.supportsFiber) try {
                        at = ac.inject(rc), ot = ac
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Xu(t)) throw Error(o(200));
                    return Bu(e, t, null, n)
                }, t.createRoot = function (e, t) {
                    if (!Xu(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        a = Qu;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Uu(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Hr(8 === e.nodeType ? e.parentNode : e), new Ku(t)
                }, t.findDOMNode = function (e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = null === (e = Ve(t)) ? null : e.stateNode
                }, t.flushSync = function (e) {
                    return cu(e)
                }, t.hydrate = function (e, t, n) {
                    if (!Ju(t)) throw Error(o(200));
                    return ec(null, e, t, !0, n)
                }, t.hydrateRoot = function (e, t, n) {
                    if (!Xu(e)) throw Error(o(405));
                    var r = null != n && n.hydratedSources || null,
                        a = !1,
                        i = "",
                        s = Qu;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Wu(t, null, e, 1, null != n ? n : null, a, 0, i, s), e[ha] = t.current, Hr(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                    return new Gu(t)
                }, t.render = function (e, t, n) {
                    if (!Ju(t)) throw Error(o(200));
                    return ec(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function (e) {
                    if (!Ju(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (cu((function () {
                        ec(null, null, e, !1, (function () {
                            e._reactRootContainer = null, e[ha] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = uu, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                    if (!Ju(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return ec(e, t, n, !1, r)
                }, t.version = "18.2.0-next-9e3b772b8-20220608"
            },
            1250: function (e, t, n) {
                "use strict";
                var r = n(4164);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            4164: function (e, t, n) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(4463)
            },
            6374: function (e, t, n) {
                "use strict";
                var r = n(2791),
                    a = Symbol.for("react.element"),
                    o = Symbol.for("react.fragment"),
                    i = Object.prototype.hasOwnProperty,
                    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var r, o = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: u,
                        ref: c,
                        props: o,
                        _owner: s.current
                    }
                }
                t.Fragment = o, t.jsx = u, t.jsxs = u
            },
            9117: function (e, t) {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    i = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    f = Symbol.for("react.memo"),
                    d = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var h = {
                        isMounted: function () {
                            return !1
                        },
                        enqueueForceUpdate: function () {},
                        enqueueReplaceState: function () {},
                        enqueueSetState: function () {}
                    },
                    m = Object.assign,
                    v = {};

                function g(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || h
                }

                function b() {}

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || h
                }
                g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, g.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, b.prototype = g.prototype;
                var w = y.prototype = new b;
                w.constructor = y, m(w, g.prototype), w.isPureReactComponent = !0;
                var x = Array.isArray,
                    k = Object.prototype.hasOwnProperty,
                    S = {
                        current: null
                    },
                    E = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function O(e, t, r) {
                    var a, o = {},
                        i = null,
                        s = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
                    var l = arguments.length - 2;
                    if (1 === l) o.children = r;
                    else if (1 < l) {
                        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        o.children = u
                    }
                    if (e && e.defaultProps)
                        for (a in l = e.defaultProps) void 0 === o[a] && (o[a] = l[a]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: i,
                        ref: s,
                        props: o,
                        _owner: S.current
                    }
                }

                function j(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var P = /\/+/g;

                function C(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function (e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function (e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function _(e, t, a, o, i) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var l = !1;
                    if (null === e) l = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    l = !0
                            }
                    }
                    if (l) return i = i(l = e), e = "" === o ? "." + C(l, 0) : o, x(i) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), _(i, t, a, "", (function (e) {
                        return e
                    }))) : null != i && (j(i) && (i = function (e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, a + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(P, "$&/") + "/") + e)), t.push(i)), 1;
                    if (l = 0, o = "" === o ? "." : o + ":", x(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = o + C(s = e[u], u);
                            l += _(s, t, a, c, i)
                        } else if (c = function (e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(s = e.next()).done;) l += _(s = s.value, t, a, c = o + C(s, u++), i);
                        else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return l
                }

                function N(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return _(e, r, "", "", (function (e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function A(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function (t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function (t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var T = {
                        current: null
                    },
                    L = {
                        transition: null
                    },
                    R = {
                        ReactCurrentDispatcher: T,
                        ReactCurrentBatchConfig: L,
                        ReactCurrentOwner: S
                    };
                t.Children = {
                    map: N,
                    forEach: function (e, t, n) {
                        N(e, (function () {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function (e) {
                        var t = 0;
                        return N(e, (function () {
                            t++
                        })), t
                    },
                    toArray: function (e) {
                        return N(e, (function (e) {
                            return e
                        })) || []
                    },
                    only: function (e) {
                        if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = g, t.Fragment = a, t.Profiler = i, t.PureComponent = y, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, t.cloneElement = function (e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = m({}, e.props),
                        o = e.key,
                        i = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (i = t.ref, s = S.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                        for (u in t) k.call(t, u) && !E.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                    }
                    var u = arguments.length - 2;
                    if (1 === u) a.children = r;
                    else if (1 < u) {
                        l = Array(u);
                        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                        a.children = l
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: o,
                        ref: i,
                        props: a,
                        _owner: s
                    }
                }, t.createContext = function (e) {
                    return (e = {
                        $$typeof: l,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: s,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = O, t.createFactory = function (e) {
                    var t = O.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function () {
                    return {
                        current: null
                    }
                }, t.forwardRef = function (e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = j, t.lazy = function (e) {
                    return {
                        $$typeof: d,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: A
                    }
                }, t.memo = function (e, t) {
                    return {
                        $$typeof: f,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function (e) {
                    var t = L.transition;
                    L.transition = {};
                    try {
                        e()
                    } finally {
                        L.transition = t
                    }
                }, t.unstable_act = function () {
                    throw Error("act(...) is not supported in production builds of React.")
                }, t.useCallback = function (e, t) {
                    return T.current.useCallback(e, t)
                }, t.useContext = function (e) {
                    return T.current.useContext(e)
                }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
                    return T.current.useDeferredValue(e)
                }, t.useEffect = function (e, t) {
                    return T.current.useEffect(e, t)
                }, t.useId = function () {
                    return T.current.useId()
                }, t.useImperativeHandle = function (e, t, n) {
                    return T.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function (e, t) {
                    return T.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function (e, t) {
                    return T.current.useLayoutEffect(e, t)
                }, t.useMemo = function (e, t) {
                    return T.current.useMemo(e, t)
                }, t.useReducer = function (e, t, n) {
                    return T.current.useReducer(e, t, n)
                }, t.useRef = function (e) {
                    return T.current.useRef(e)
                }, t.useState = function (e) {
                    return T.current.useState(e)
                }, t.useSyncExternalStore = function (e, t, n) {
                    return T.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function () {
                    return T.current.useTransition()
                }, t.version = "18.2.0"
            },
            2791: function (e, t, n) {
                "use strict";
                e.exports = n(9117)
            },
            184: function (e, t, n) {
                "use strict";
                e.exports = n(6374)
            },
            6813: function (e, t) {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                u = s + 1,
                                c = e[u];
                            if (0 > o(l, n)) u < a && 0 > o(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
                            else {
                                if (!(u < a && 0 > o(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function () {
                        return i.now()
                    }
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function () {
                        return s.now() - l
                    }
                }
                var u = [],
                    c = [],
                    f = 1,
                    d = null,
                    p = 3,
                    h = !1,
                    m = !1,
                    v = !1,
                    g = "function" === typeof setTimeout ? setTimeout : null,
                    b = "function" === typeof clearTimeout ? clearTimeout : null,
                    y = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function x(e) {
                    if (v = !1, w(e), !m)
                        if (null !== r(u)) m = !0, L(k);
                        else {
                            var t = r(c);
                            null !== t && R(x, t.startTime - e)
                        }
                }

                function k(e, n) {
                    m = !1, v && (v = !1, b(j), j = -1), h = !0;
                    var o = p;
                    try {
                        for (w(n), d = r(u); null !== d && (!(d.expirationTime > n) || e && !_());) {
                            var i = d.callback;
                            if ("function" === typeof i) {
                                d.callback = null, p = d.priorityLevel;
                                var s = i(d.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? d.callback = s : d === r(u) && a(u), w(n)
                            } else a(u);
                            d = r(u)
                        }
                        if (null !== d) var l = !0;
                        else {
                            var f = r(c);
                            null !== f && R(x, f.startTime - n), l = !1
                        }
                        return l
                    } finally {
                        d = null, p = o, h = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var S, E = !1,
                    O = null,
                    j = -1,
                    P = 5,
                    C = -1;

                function _() {
                    return !(t.unstable_now() - C < P)
                }

                function N() {
                    if (null !== O) {
                        var e = t.unstable_now();
                        C = e;
                        var n = !0;
                        try {
                            n = O(!0, e)
                        } finally {
                            n ? S() : (E = !1, O = null)
                        }
                    } else E = !1
                }
                if ("function" === typeof y) S = function () {
                    y(N)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var A = new MessageChannel,
                        T = A.port2;
                    A.port1.onmessage = N, S = function () {
                        T.postMessage(null)
                    }
                } else S = function () {
                    g(N, 0)
                };

                function L(e) {
                    O = e, E || (E = !0, S())
                }

                function R(e, n) {
                    j = g((function () {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                    e.callback = null
                }, t.unstable_continueExecution = function () {
                    m || h || (m = !0, L(k))
                }, t.unstable_forceFrameRate = function (e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function () {
                    return p
                }, t.unstable_getFirstCallbackNode = function () {
                    return r(u)
                }, t.unstable_next = function (e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = function () {}, t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function (e, a, o) {
                    var i = t.unstable_now();
                    switch ("object" === typeof o && null !== o ? o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i : o = i, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: f++,
                        callback: a,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: s = o + s,
                        sortIndex: -1
                    }, o > i ? (e.sortIndex = o, n(c, e), null === r(u) && e === r(c) && (v ? (b(j), j = -1) : v = !0, R(x, o - i))) : (e.sortIndex = s, n(u, e), m || h || (m = !0, L(k))), e
                }, t.unstable_shouldYield = _, t.unstable_wrapCallback = function (e) {
                    var t = p;
                    return function () {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            5296: function (e, t, n) {
                "use strict";
                e.exports = n(6813)
            },
            6115: function (e) {
                e.exports = function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6690: function (e) {
                e.exports = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            3515: function (e, t, n) {
                var r = n(6015),
                    a = n(9617);

                function o(t, n, i) {
                    return a() ? (e.exports = o = Reflect.construct.bind(), e.exports.__esModule = !0, e.exports.default = e.exports) : (e.exports = o = function (e, t, n) {
                        var a = [null];
                        a.push.apply(a, t);
                        var o = new(Function.bind.apply(e, a));
                        return n && r(o, n.prototype), o
                    }, e.exports.__esModule = !0, e.exports.default = e.exports), o.apply(null, arguments)
                }
                e.exports = o, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            9728: function (e, t, n) {
                var r = n(4062);

                function a(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, r(a.key), a)
                    }
                }
                e.exports = function (e, t, n) {
                    return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6389: function (e, t, n) {
                var r = n(3808),
                    a = n(9617),
                    o = n(4993);
                e.exports = function (e) {
                    var t = a();
                    return function () {
                        var n, a = r(e);
                        if (t) {
                            var i = r(this).constructor;
                            n = Reflect.construct(a, arguments, i)
                        } else n = a.apply(this, arguments);
                        return o(this, n)
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            3808: function (e) {
                function t(n) {
                    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            1655: function (e, t, n) {
                var r = n(6015);
                e.exports = function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && r(e, t)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6035: function (e) {
                e.exports = function (e) {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            9617: function (e) {
                e.exports = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            4993: function (e, t, n) {
                var r = n(8698).default,
                    a = n(6115);
                e.exports = function (e, t) {
                    if (t && ("object" === r(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return a(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            7061: function (e, t, n) {
                var r = n(8698).default;

                function a() {
                    "use strict";
                    e.exports = a = function () {
                        return t
                    }, e.exports.__esModule = !0, e.exports.default = e.exports;
                    var t = {},
                        n = Object.prototype,
                        o = n.hasOwnProperty,
                        i = Object.defineProperty || function (e, t, n) {
                            e[t] = n.value
                        },
                        s = "function" == typeof Symbol ? Symbol : {},
                        l = s.iterator || "@@iterator",
                        u = s.asyncIterator || "@@asyncIterator",
                        c = s.toStringTag || "@@toStringTag";

                    function f(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        f({}, "")
                    } catch (A) {
                        f = function (e, t, n) {
                            return e[t] = n
                        }
                    }

                    function d(e, t, n, r) {
                        var a = t && t.prototype instanceof m ? t : m,
                            o = Object.create(a.prototype),
                            s = new C(r || []);
                        return i(o, "_invoke", {
                            value: E(e, n, s)
                        }), o
                    }

                    function p(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (A) {
                            return {
                                type: "throw",
                                arg: A
                            }
                        }
                    }
                    t.wrap = d;
                    var h = {};

                    function m() {}

                    function v() {}

                    function g() {}
                    var b = {};
                    f(b, l, (function () {
                        return this
                    }));
                    var y = Object.getPrototypeOf,
                        w = y && y(y(_([])));
                    w && w !== n && o.call(w, l) && (b = w);
                    var x = g.prototype = m.prototype = Object.create(b);

                    function k(e) {
                        ["next", "throw", "return"].forEach((function (t) {
                            f(e, t, (function (e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function S(e, t) {
                        function n(a, i, s, l) {
                            var u = p(e[a], e, i);
                            if ("throw" !== u.type) {
                                var c = u.arg,
                                    f = c.value;
                                return f && "object" == r(f) && o.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                                    n("next", e, s, l)
                                }), (function (e) {
                                    n("throw", e, s, l)
                                })) : t.resolve(f).then((function (e) {
                                    c.value = e, s(c)
                                }), (function (e) {
                                    return n("throw", e, s, l)
                                }))
                            }
                            l(u.arg)
                        }
                        var a;
                        i(this, "_invoke", {
                            value: function (e, r) {
                                function o() {
                                    return new t((function (t, a) {
                                        n(e, r, t, a)
                                    }))
                                }
                                return a = a ? a.then(o, o) : o()
                            }
                        })
                    }

                    function E(e, t, n) {
                        var r = "suspendedStart";
                        return function (a, o) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === a) throw o;
                                return N()
                            }
                            for (n.method = a, n.arg = o;;) {
                                var i = n.delegate;
                                if (i) {
                                    var s = O(i, n);
                                    if (s) {
                                        if (s === h) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var l = p(e, t, n);
                                if ("normal" === l.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                            }
                        }
                    }

                    function O(e, t) {
                        var n = t.method,
                            r = e.iterator[n];
                        if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, O(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
                        var a = p(r, e.iterator, t.arg);
                        if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, h;
                        var o = a.arg;
                        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                    }

                    function j(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function P(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function C(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(j, this), this.reset(!0)
                    }

                    function _(e) {
                        if (e) {
                            var t = e[l];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var n = -1,
                                    r = function t() {
                                        for (; ++n < e.length;)
                                            if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return r.next = r
                            }
                        }
                        return {
                            next: N
                        }
                    }

                    function N() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return v.prototype = g, i(x, "constructor", {
                        value: g,
                        configurable: !0
                    }), i(g, "constructor", {
                        value: v,
                        configurable: !0
                    }), v.displayName = f(g, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                    }, t.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, f(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e
                    }, t.awrap = function (e) {
                        return {
                            __await: e
                        }
                    }, k(S.prototype), f(S.prototype, u, (function () {
                        return this
                    })), t.AsyncIterator = S, t.async = function (e, n, r, a, o) {
                        void 0 === o && (o = Promise);
                        var i = new S(d(e, n, r, a), o);
                        return t.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, k(x), f(x, c, "Generator"), f(x, l, (function () {
                        return this
                    })), f(x, "toString", (function () {
                        return "[object Generator]"
                    })), t.keys = function (e) {
                        var t = Object(e),
                            n = [];
                        for (var r in t) n.push(r);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var r = n.pop();
                                    if (r in t) return e.value = r, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, t.values = _, C.prototype = {
                        constructor: C,
                        reset: function (e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(P), !e)
                                for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var t = this;

                            function n(n, r) {
                                return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var a = this.tryEntries[r],
                                    i = a.completion;
                                if ("root" === a.tryLoc) return n("end");
                                if (a.tryLoc <= this.prev) {
                                    var s = o.call(a, "catchLoc"),
                                        l = o.call(a, "finallyLoc");
                                    if (s && l) {
                                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n];
                                if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var a = r;
                                    break
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(i)
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), h
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var a = r.arg;
                                        P(n)
                                    }
                                    return a
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function (e, t, n) {
                            return this.delegate = {
                                iterator: _(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = void 0), h
                        }
                    }, t
                }
                e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            6015: function (e) {
                function t(n, r) {
                    return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, r)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            5036: function (e, t, n) {
                var r = n(8698).default;
                e.exports = function (e, t) {
                    if ("object" !== r(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, t || "default");
                        if ("object" !== r(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            4062: function (e, t, n) {
                var r = n(8698).default,
                    a = n(5036);
                e.exports = function (e) {
                    var t = a(e, "string");
                    return "symbol" === r(t) ? t : String(t)
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            8698: function (e) {
                function t(n) {
                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            3496: function (e, t, n) {
                var r = n(3808),
                    a = n(6015),
                    o = n(6035),
                    i = n(3515);

                function s(t) {
                    var n = "function" === typeof Map ? new Map : void 0;
                    return e.exports = s = function (e) {
                        if (null === e || !o(e)) return e;
                        if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                        if ("undefined" !== typeof n) {
                            if (n.has(e)) return n.get(e);
                            n.set(e, t)
                        }

                        function t() {
                            return i(e, arguments, r(this).constructor)
                        }
                        return t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), a(t, e)
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, s(t)
                }
                e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            2811: function (e) {
                "use strict";
                e.exports = JSON.parse('{"name":"openai","version":"3.1.0","description":"Node.js library for the OpenAI API","repository":{"type":"git","url":"git@github.com:openai/openai-node.git"},"keywords":["openai","open","ai","gpt-3","gpt3"],"author":"OpenAI","license":"MIT","main":"./dist/index.js","types":"./dist/index.d.ts","scripts":{"build":"tsc --outDir dist/"},"dependencies":{"axios":"^0.26.0","form-data":"^4.0.0"},"devDependencies":{"@types/node":"^12.11.5","typescript":"^3.6.4"}}')
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.m = e, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        },
        function () {
            var e, t = Object.getPrototypeOf ? function (e) {
                return Object.getPrototypeOf(e)
            } : function (e) {
                return e.__proto__
            };
            n.t = function (r, a) {
                if (1 & a && (r = this(r)), 8 & a) return r;
                if ("object" === typeof r && r) {
                    if (4 & a && r.__esModule) return r;
                    if (16 & a && "function" === typeof r.then) return r
                }
                var o = Object.create(null);
                n.r(o);
                var i = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var s = 2 & a && r;
                    "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((function (e) {
                    i[e] = function () {
                        return r[e]
                    }
                }));
                return i.default = function () {
                    return r
                }, n.d(o, i), o
            }
        }(), n.d = function (e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.f = {}, n.e = function (e) {
            return Promise.all(Object.keys(n.f).reduce((function (t, r) {
                return n.f[r](e, t), t
            }), []))
        }, n.u = function (e) {
            return "static/js/" + e + ".c93ae902.chunk.js"
        }, n.miniCssF = function (e) {}, n.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function () {
            var e = {},
                t = "chatgpt:";
            n.l = function (r, a, o, i) {
                if (e[r]) e[r].push(a);
                else {
                    var s, l;
                    if (void 0 !== o)
                        for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                            var f = u[c];
                            if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
                                s = f;
                                break
                            }
                        }
                    s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, n.nc && s.setAttribute("nonce", n.nc), s.setAttribute("data-webpack", t + o), s.src = r), e[r] = [a];
                    var d = function (t, n) {
                            s.onerror = s.onload = null, clearTimeout(p);
                            var a = e[r];
                            if (delete e[r], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((function (e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        p = setTimeout(d.bind(null, void 0, {
                            type: "timeout",
                            target: s
                        }), 12e4);
                    s.onerror = d.bind(null, s.onerror), s.onload = d.bind(null, s.onload), l && document.head.appendChild(s)
                }
            }
        }(), n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/",
        function () {
            var e = {
                179: 0
            };
            n.f.j = function (t, r) {
                var a = n.o(e, t) ? e[t] : void 0;
                if (0 !== a)
                    if (a) r.push(a[2]);
                    else {
                        var o = new Promise((function (n, r) {
                            a = e[t] = [n, r]
                        }));
                        r.push(a[2] = o);
                        var i = n.p + n.u(t),
                            s = new Error;
                        n.l(i, (function (r) {
                            if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                var o = r && ("load" === r.type ? "missing" : r.type),
                                    i = r && r.target && r.target.src;
                                s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", s.name = "ChunkLoadError", s.type = o, s.request = i, a[1](s)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function (t, r) {
                    var a, o, i = r[0],
                        s = r[1],
                        l = r[2],
                        u = 0;
                    if (i.some((function (t) {
                            return 0 !== e[t]
                        }))) {
                        for (a in s) n.o(s, a) && (n.m[a] = s[a]);
                        if (l) l(n)
                    }
                    for (t && t(r); u < i.length; u++) o = i[u], n.o(e, o) && e[o] && e[o][0](), e[o] = 0
                },
                r = self.webpackChunkchatgpt = self.webpackChunkchatgpt || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(),
        function () {
            "use strict";
            var e, t = n(2791),
                r = n.t(t, 2),
                a = n(1250);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                if (e) {
                    if ("string" === typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                }
            }

            function s(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o, i, s = [],
                            l = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                        } catch (c) {
                            u = !0, a = c
                        } finally {
                            try {
                                if (!l && null != n.return && (i = n.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return s
                    }
                }(e, t) || i(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                return function (e) {
                    if (Array.isArray(e)) return o(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || i(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function f(e) {
                var t = function (e, t) {
                    if ("object" !== c(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== c(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === c(t) ? t : String(t)
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, f(r.key), r)
                }
            }

            function p(e, t, n) {
                return t && d(e.prototype, t), n && d(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function h(e, t) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function m(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && h(e, t)
            }

            function v(e) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, v(e)
            }

            function g() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function b(e, t) {
                if (t && ("object" === c(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function y(e) {
                var t = g();
                return function () {
                    var n, r = v(e);
                    if (t) {
                        var a = v(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }

            function w(e, t, n) {
                return w = g() ? Reflect.construct.bind() : function (e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var a = new(Function.bind.apply(e, r));
                    return n && h(a, n.prototype), a
                }, w.apply(null, arguments)
            }

            function x(e) {
                var t = "function" === typeof Map ? new Map : void 0;
                return x = function (e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return w(e, arguments, v(this).constructor)
                    }
                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), h(r, e)
                }, x(e)
            }

            function k() {
                return k = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, k.apply(this, arguments)
            }! function (e) {
                e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
            }(e || (e = {}));
            var S, E = "popstate";

            function O(e, t) {
                if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
            }

            function j(e) {
                return {
                    usr: e.state,
                    key: e.key
                }
            }

            function P(e, t, n, r) {
                return void 0 === n && (n = null), k({
                    pathname: "string" === typeof e ? e : e.pathname,
                    search: "",
                    hash: ""
                }, "string" === typeof t ? _(t) : t, {
                    state: n,
                    key: t && t.key || r || Math.random().toString(36).substr(2, 8)
                })
            }

            function C(e) {
                var t = e.pathname,
                    n = void 0 === t ? "/" : t,
                    r = e.search,
                    a = void 0 === r ? "" : r,
                    o = e.hash,
                    i = void 0 === o ? "" : o;
                return a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n
            }

            function _(e) {
                var t = {};
                if (e) {
                    var n = e.indexOf("#");
                    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                    var r = e.indexOf("?");
                    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
                }
                return t
            }

            function N(e) {
                var t = "undefined" !== typeof window && "undefined" !== typeof window.location && "null" !== window.location.origin ? window.location.origin : window.location.href,
                    n = "string" === typeof e ? e : C(e);
                return O(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }

            function A(t, n, r, a) {
                void 0 === a && (a = {});
                var o = a,
                    i = o.window,
                    s = void 0 === i ? document.defaultView : i,
                    l = o.v5Compat,
                    u = void 0 !== l && l,
                    c = s.history,
                    f = e.Pop,
                    d = null;

                function p() {
                    f = e.Pop, d && d({
                        action: f,
                        location: h.location
                    })
                }
                var h = {
                    get action() {
                        return f
                    },
                    get location() {
                        return t(s, c)
                    },
                    listen: function (e) {
                        if (d) throw new Error("A history only accepts one active listener");
                        return s.addEventListener(E, p), d = e,
                            function () {
                                s.removeEventListener(E, p), d = null
                            }
                    },
                    createHref: function (e) {
                        return n(s, e)
                    },
                    encodeLocation: function (e) {
                        var t = N("string" === typeof e ? e : C(e));
                        return {
                            pathname: t.pathname,
                            search: t.search,
                            hash: t.hash
                        }
                    },
                    push: function (t, n) {
                        f = e.Push;
                        var a = P(h.location, t, n);
                        r && r(a, t);
                        var o = j(a),
                            i = h.createHref(a);
                        try {
                            c.pushState(o, "", i)
                        } catch (l) {
                            s.location.assign(i)
                        }
                        u && d && d({
                            action: f,
                            location: h.location
                        })
                    },
                    replace: function (t, n) {
                        f = e.Replace;
                        var a = P(h.location, t, n);
                        r && r(a, t);
                        var o = j(a),
                            i = h.createHref(a);
                        c.replaceState(o, "", i), u && d && d({
                            action: f,
                            location: h.location
                        })
                    },
                    go: function (e) {
                        return c.go(e)
                    }
                };
                return h
            }

            function T(e, t, n) {
                void 0 === n && (n = "/");
                var r = U(("string" === typeof t ? _(t) : t).pathname || "/", n);
                if (null == r) return null;
                var a = L(e);
                ! function (e) {
                    e.sort((function (e, t) {
                        return e.score !== t.score ? t.score - e.score : function (e, t) {
                            var n = e.length === t.length && e.slice(0, -1).every((function (e, n) {
                                return e === t[n]
                            }));
                            return n ? e[e.length - 1] - t[t.length - 1] : 0
                        }(e.routesMeta.map((function (e) {
                            return e.childrenIndex
                        })), t.routesMeta.map((function (e) {
                            return e.childrenIndex
                        })))
                    }))
                }(a);
                for (var o = null, i = 0; null == o && i < a.length; ++i) o = z(a[i], D(r));
                return o
            }

            function L(e, t, n, r) {
                return void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""), e.forEach((function (e, a) {
                    var o = {
                        relativePath: e.path || "",
                        caseSensitive: !0 === e.caseSensitive,
                        childrenIndex: a,
                        route: e
                    };
                    o.relativePath.startsWith("/") && (O(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
                    var i = V([r, o.relativePath]),
                        s = n.concat(o);
                    e.children && e.children.length > 0 && (O(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), L(e.children, t, s, i)), (null != e.path || e.index) && t.push({
                        path: i,
                        score: M(i, e.index),
                        routesMeta: s
                    })
                })), t
            }! function (e) {
                e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
            }(S || (S = {}));
            var R = /^:\w+$/,
                F = function (e) {
                    return "*" === e
                };

            function M(e, t) {
                var n = e.split("/"),
                    r = n.length;
                return n.some(F) && (r += -2), t && (r += 2), n.filter((function (e) {
                    return !F(e)
                })).reduce((function (e, t) {
                    return e + (R.test(t) ? 3 : "" === t ? 1 : 10)
                }), r)
            }

            function z(e, t) {
                for (var n = e.routesMeta, r = {}, a = "/", o = [], i = 0; i < n.length; ++i) {
                    var s = n[i],
                        l = i === n.length - 1,
                        u = "/" === a ? t : t.slice(a.length) || "/",
                        c = I({
                            path: s.relativePath,
                            caseSensitive: s.caseSensitive,
                            end: l
                        }, u);
                    if (!c) return null;
                    Object.assign(r, c.params);
                    var f = s.route;
                    o.push({
                        params: r,
                        pathname: V([a, c.pathname]),
                        pathnameBase: $(V([a, c.pathnameBase])),
                        route: f
                    }), "/" !== c.pathnameBase && (a = V([a, c.pathnameBase]))
                }
                return o
            }

            function I(e, t) {
                "string" === typeof e && (e = {
                    path: e,
                    caseSensitive: !1,
                    end: !0
                });
                var n = function (e, t, n) {
                        void 0 === t && (t = !1);
                        void 0 === n && (n = !0);
                        B("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                        var r = [],
                            a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (function (e, t) {
                                return r.push(t), "([^\\/]+)"
                            }));
                        e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                        var o = new RegExp(a, t ? void 0 : "i");
                        return [o, r]
                    }(e.path, e.caseSensitive, e.end),
                    r = s(n, 2),
                    a = r[0],
                    o = r[1],
                    i = t.match(a);
                if (!i) return null;
                var l = i[0],
                    u = l.replace(/(.)\/+$/, "$1"),
                    c = i.slice(1),
                    f = o.reduce((function (e, t, n) {
                        if ("*" === t) {
                            var r = c[n] || "";
                            u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1")
                        }
                        return e[t] = function (e, t) {
                            try {
                                return decodeURIComponent(e)
                            } catch (n) {
                                return B(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                            }
                        }(c[n] || "", t), e
                    }), {});
                return {
                    params: f,
                    pathname: l,
                    pathnameBase: u,
                    pattern: e
                }
            }

            function D(e) {
                try {
                    return decodeURI(e)
                } catch (t) {
                    return B(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
                }
            }

            function U(e, t) {
                if ("/" === t) return e;
                if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                var n = t.endsWith("/") ? t.length - 1 : t.length,
                    r = e.charAt(n);
                return r && "/" !== r ? null : e.slice(n) || "/"
            }

            function B(e, t) {
                if (!e) {
                    "undefined" !== typeof console && console.warn(t);
                    try {
                        throw new Error(t)
                    } catch (n) {}
                }
            }

            function H(e, t, n, r) {
                return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
            }

            function W(e) {
                return e.filter((function (e, t) {
                    return 0 === t || e.route.path && e.route.path.length > 0
                }))
            }

            function q(e, t, n, r) {
                var a;
                void 0 === r && (r = !1), "string" === typeof e ? a = _(e) : (O(!(a = k({}, e)).pathname || !a.pathname.includes("?"), H("?", "pathname", "search", a)), O(!a.pathname || !a.pathname.includes("#"), H("#", "pathname", "hash", a)), O(!a.search || !a.search.includes("#"), H("#", "search", "hash", a)));
                var o, i = "" === e || "" === a.pathname,
                    s = i ? "/" : a.pathname;
                if (r || null == s) o = n;
                else {
                    var l = t.length - 1;
                    if (s.startsWith("..")) {
                        for (var u = s.split("/");
                            ".." === u[0];) u.shift(), l -= 1;
                        a.pathname = u.join("/")
                    }
                    o = l >= 0 ? t[l] : "/"
                }
                var c = function (e, t) {
                        void 0 === t && (t = "/");
                        var n = "string" === typeof e ? _(e) : e,
                            r = n.pathname,
                            a = n.search,
                            o = void 0 === a ? "" : a,
                            i = n.hash,
                            s = void 0 === i ? "" : i,
                            l = r ? r.startsWith("/") ? r : function (e, t) {
                                var n = t.replace(/\/+$/, "").split("/");
                                return e.split("/").forEach((function (e) {
                                    ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                                })), n.length > 1 ? n.join("/") : "/"
                            }(r, t) : t;
                        return {
                            pathname: l,
                            search: Y(o),
                            hash: Q(s)
                        }
                    }(a, o),
                    f = s && "/" !== s && s.endsWith("/"),
                    d = (i || "." === s) && n.endsWith("/");
                return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"), c
            }
            var V = function (e) {
                    return e.join("/").replace(/\/\/+/g, "/")
                },
                $ = function (e) {
                    return e.replace(/\/+$/, "").replace(/^\/*/, "/")
                },
                Y = function (e) {
                    return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
                },
                Q = function (e) {
                    return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
                },
                K = function (e) {
                    m(n, e);
                    var t = y(n);

                    function n() {
                        return u(this, n), t.apply(this, arguments)
                    }
                    return p(n)
                }(x(Error));
            var G = p((function e(t, n, r, a) {
                u(this, e), void 0 === a && (a = !1), this.status = t, this.statusText = n || "", this.internal = a, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
            }));

            function X(e) {
                return e instanceof G
            }
            var J = ["post", "put", "patch", "delete"],
                Z = (new Set(J), ["get"].concat(J));
            new Set(Z), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;

            function ee() {
                return ee = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, ee.apply(this, arguments)
            }
            var te = "function" === typeof Object.is ? Object.is : function (e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                ne = t.useState,
                re = t.useEffect,
                ae = t.useLayoutEffect,
                oe = t.useDebugValue;

            function ie(e) {
                var t = e.getSnapshot,
                    n = e.value;
                try {
                    var r = t();
                    return !te(n, r)
                } catch (a) {
                    return !0
                }
            }
            "undefined" === typeof window || "undefined" === typeof window.document || window.document.createElement, r.useSyncExternalStore;
            var se = t.createContext(null);
            var le = t.createContext(null);
            var ue = t.createContext(null);
            var ce = t.createContext(null);
            var fe = t.createContext(null);
            var de = t.createContext(null);
            var pe = t.createContext({
                outlet: null,
                matches: []
            });
            var he = t.createContext(null);

            function me() {
                return null != t.useContext(de)
            }

            function ve() {
                return me() || O(!1), t.useContext(de).location
            }

            function ge() {
                me() || O(!1);
                var e = t.useContext(fe),
                    n = e.basename,
                    r = e.navigator,
                    a = t.useContext(pe).matches,
                    o = ve().pathname,
                    i = JSON.stringify(W(a).map((function (e) {
                        return e.pathnameBase
                    }))),
                    s = t.useRef(!1);
                return t.useEffect((function () {
                    s.current = !0
                })), t.useCallback((function (e, t) {
                    if (void 0 === t && (t = {}), s.current)
                        if ("number" !== typeof e) {
                            var a = q(e, JSON.parse(i), o, "path" === t.relative);
                            "/" !== n && (a.pathname = "/" === a.pathname ? n : V([n, a.pathname])), (t.replace ? r.replace : r.push)(a, t.state, t)
                        } else r.go(e)
                }), [n, r, i, o])
            }

            function be(e, n) {
                var r = (void 0 === n ? {} : n).relative,
                    a = t.useContext(pe).matches,
                    o = ve().pathname,
                    i = JSON.stringify(W(a).map((function (e) {
                        return e.pathnameBase
                    })));
                return t.useMemo((function () {
                    return q(e, JSON.parse(i), o, "path" === r)
                }), [e, i, o, r])
            }

            function ye() {
                var e = function () {
                        var e, n = t.useContext(he),
                            r = Oe(xe.UseRouteError),
                            a = t.useContext(pe),
                            o = a.matches[a.matches.length - 1];
                        if (n) return n;
                        return a || O(!1), !o.route.id && O(!1), null == (e = r.errors) ? void 0 : e[o.route.id]
                    }(),
                    n = X(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                    r = e instanceof Error ? e.stack : null,
                    a = "rgba(200,200,200, 0.5)",
                    o = {
                        padding: "0.5rem",
                        backgroundColor: a
                    },
                    i = {
                        padding: "2px 4px",
                        backgroundColor: a
                    };
                return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unhandled Thrown Error!"), t.createElement("h3", {
                    style: {
                        fontStyle: "italic"
                    }
                }, n), r ? t.createElement("pre", {
                    style: o
                }, r) : null, t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"), t.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xa0", t.createElement("code", {
                    style: i
                }, "errorElement"), " props on\xa0", t.createElement("code", {
                    style: i
                }, "<Route>")))
            }
            var we, xe, ke = function (e) {
                m(r, e);
                var n = y(r);

                function r(e) {
                    var t;
                    return u(this, r), (t = n.call(this, e)).state = {
                        location: e.location,
                        error: e.error
                    }, t
                }
                return p(r, [{
                    key: "componentDidCatch",
                    value: function (e, t) {
                        console.error("React Router caught the following error during render", e, t)
                    }
                }, {
                    key: "render",
                    value: function () {
                        return this.state.error ? t.createElement(he.Provider, {
                            value: this.state.error,
                            children: this.props.component
                        }) : this.props.children
                    }
                }], [{
                    key: "getDerivedStateFromError",
                    value: function (e) {
                        return {
                            error: e
                        }
                    }
                }, {
                    key: "getDerivedStateFromProps",
                    value: function (e, t) {
                        return t.location !== e.location ? {
                            error: e.error,
                            location: e.location
                        } : {
                            error: e.error || t.error,
                            location: t.location
                        }
                    }
                }]), r
            }(t.Component);

            function Se(e) {
                var n = e.routeContext,
                    r = e.match,
                    a = e.children,
                    o = t.useContext(se);
                return o && r.route.errorElement && (o._deepestRenderedBoundaryId = r.route.id), t.createElement(pe.Provider, {
                    value: n
                }, a)
            }

            function Ee(e, n, r) {
                if (void 0 === n && (n = []), null == e) {
                    if (null == r || !r.errors) return null;
                    e = r.matches
                }
                var a = e,
                    o = null == r ? void 0 : r.errors;
                if (null != o) {
                    var i = a.findIndex((function (e) {
                        return e.route.id && (null == o ? void 0 : o[e.route.id])
                    }));
                    i >= 0 || O(!1), a = a.slice(0, Math.min(a.length, i + 1))
                }
                return a.reduceRight((function (e, i, s) {
                    var l = i.route.id ? null == o ? void 0 : o[i.route.id] : null,
                        u = r ? i.route.errorElement || t.createElement(ye, null) : null,
                        c = function () {
                            return t.createElement(Se, {
                                match: i,
                                routeContext: {
                                    outlet: e,
                                    matches: n.concat(a.slice(0, s + 1))
                                }
                            }, l ? u : void 0 !== i.route.element ? i.route.element : e)
                        };
                    return r && (i.route.errorElement || 0 === s) ? t.createElement(ke, {
                        location: r.location,
                        component: u,
                        error: l,
                        children: c()
                    }) : c()
                }), null)
            }

            function Oe(e) {
                var n = t.useContext(ue);
                return n || O(!1), n
            }! function (e) {
                e.UseRevalidator = "useRevalidator"
            }(we || (we = {})),
            function (e) {
                e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
            }(xe || (xe = {}));
            var je;

            function Pe(e) {
                O(!1)
            }

            function Ce(n) {
                var r = n.basename,
                    a = void 0 === r ? "/" : r,
                    o = n.children,
                    i = void 0 === o ? null : o,
                    s = n.location,
                    l = n.navigationType,
                    u = void 0 === l ? e.Pop : l,
                    c = n.navigator,
                    f = n.static,
                    d = void 0 !== f && f;
                me() && O(!1);
                var p = a.replace(/^\/*/, "/"),
                    h = t.useMemo((function () {
                        return {
                            basename: p,
                            navigator: c,
                            static: d
                        }
                    }), [p, c, d]);
                "string" === typeof s && (s = _(s));
                var m = s,
                    v = m.pathname,
                    g = void 0 === v ? "/" : v,
                    b = m.search,
                    y = void 0 === b ? "" : b,
                    w = m.hash,
                    x = void 0 === w ? "" : w,
                    k = m.state,
                    S = void 0 === k ? null : k,
                    E = m.key,
                    j = void 0 === E ? "default" : E,
                    P = t.useMemo((function () {
                        var e = U(g, p);
                        return null == e ? null : {
                            pathname: e,
                            search: y,
                            hash: x,
                            state: S,
                            key: j
                        }
                    }), [p, g, y, x, S, j]);
                return null == P ? null : t.createElement(fe.Provider, {
                    value: h
                }, t.createElement(de.Provider, {
                    children: i,
                    value: {
                        location: P,
                        navigationType: u
                    }
                }))
            }

            function _e(n) {
                var r = n.children,
                    a = n.location,
                    o = t.useContext(le);
                return function (n, r) {
                    me() || O(!1);
                    var a, o = t.useContext(fe).navigator,
                        i = t.useContext(ue),
                        s = t.useContext(pe).matches,
                        l = s[s.length - 1],
                        u = l ? l.params : {},
                        c = (l && l.pathname, l ? l.pathnameBase : "/"),
                        f = (l && l.route, ve());
                    if (r) {
                        var d, p = "string" === typeof r ? _(r) : r;
                        "/" === c || (null == (d = p.pathname) ? void 0 : d.startsWith(c)) || O(!1), a = p
                    } else a = f;
                    var h = a.pathname || "/",
                        m = T(n, {
                            pathname: "/" === c ? h : h.slice(c.length) || "/"
                        }),
                        v = Ee(m && m.map((function (e) {
                            return Object.assign({}, e, {
                                params: Object.assign({}, u, e.params),
                                pathname: V([c, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
                                pathnameBase: "/" === e.pathnameBase ? c : V([c, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                            })
                        })), s, i || void 0);
                    return r && v ? t.createElement(de.Provider, {
                        value: {
                            location: ee({
                                pathname: "/",
                                search: "",
                                hash: "",
                                state: null,
                                key: "default"
                            }, a),
                            navigationType: e.Pop
                        }
                    }, v) : v
                }(o && !r ? o.router.routes : Ae(r), a)
            }! function (e) {
                e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
            }(je || (je = {}));
            var Ne = new Promise((function () {}));
            t.Component;

            function Ae(e, n) {
                void 0 === n && (n = []);
                var r = [];
                return t.Children.forEach(e, (function (e, a) {
                    if (t.isValidElement(e))
                        if (e.type !== t.Fragment) {
                            e.type !== Pe && O(!1), e.props.index && e.props.children && O(!1);
                            var o = [].concat(l(n), [a]),
                                i = {
                                    id: e.props.id || o.join("-"),
                                    caseSensitive: e.props.caseSensitive,
                                    element: e.props.element,
                                    index: e.props.index,
                                    path: e.props.path,
                                    loader: e.props.loader,
                                    action: e.props.action,
                                    errorElement: e.props.errorElement,
                                    hasErrorBoundary: null != e.props.errorElement,
                                    shouldRevalidate: e.props.shouldRevalidate,
                                    handle: e.props.handle
                                };
                            e.props.children && (i.children = Ae(e.props.children, o)), r.push(i)
                        } else r.push.apply(r, Ae(e.props.children, n))
                })), r
            }

            function Te() {
                return Te = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, Te.apply(this, arguments)
            }

            function Le(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }
            var Re = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
                Fe = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

            function Me(e) {
                var n, r = e.basename,
                    a = e.children,
                    o = e.window,
                    i = t.useRef();
                null == i.current && (i.current = (void 0 === (n = {
                    window: o,
                    v5Compat: !0
                }) && (n = {}), A((function (e, t) {
                    var n = e.location;
                    return P("", {
                        pathname: n.pathname,
                        search: n.search,
                        hash: n.hash
                    }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                }), (function (e, t) {
                    return "string" === typeof t ? t : C(t)
                }), null, n)));
                var l = i.current,
                    u = s(t.useState({
                        action: l.action,
                        location: l.location
                    }), 2),
                    c = u[0],
                    f = u[1];
                return t.useLayoutEffect((function () {
                    return l.listen(f)
                }), [l]), t.createElement(Ce, {
                    basename: r,
                    children: a,
                    location: c.location,
                    navigationType: c.action,
                    navigator: l
                })
            }
            var ze = t.forwardRef((function (e, n) {
                var r = e.onClick,
                    a = e.relative,
                    o = e.reloadDocument,
                    i = e.replace,
                    s = e.state,
                    l = e.target,
                    u = e.to,
                    c = e.preventScrollReset,
                    f = Le(e, Re),
                    d = function (e, n) {
                        var r = (void 0 === n ? {} : n).relative;
                        me() || O(!1);
                        var a = t.useContext(fe),
                            o = a.basename,
                            i = a.navigator,
                            s = be(e, {
                                relative: r
                            }),
                            l = s.hash,
                            u = s.pathname,
                            c = s.search,
                            f = u;
                        return "/" !== o && (f = "/" === u ? o : V([o, u])), i.createHref({
                            pathname: f,
                            search: c,
                            hash: l
                        })
                    }(u, {
                        relative: a
                    }),
                    p = function (e, n) {
                        var r = void 0 === n ? {} : n,
                            a = r.target,
                            o = r.replace,
                            i = r.state,
                            s = r.preventScrollReset,
                            l = r.relative,
                            u = ge(),
                            c = ve(),
                            f = be(e, {
                                relative: l
                            });
                        return t.useCallback((function (t) {
                            if (function (e, t) {
                                    return 0 === e.button && (!t || "_self" === t) && ! function (e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                    }(e)
                                }(t, a)) {
                                t.preventDefault();
                                var n = void 0 !== o ? o : C(c) === C(f);
                                u(e, {
                                    replace: n,
                                    state: i,
                                    preventScrollReset: s,
                                    relative: l
                                })
                            }
                        }), [c, u, f, o, i, a, e, s, l])
                    }(u, {
                        replace: i,
                        state: s,
                        target: l,
                        preventScrollReset: c,
                        relative: a
                    });
                return t.createElement("a", Te({}, f, {
                    href: d,
                    onClick: o ? r : function (e) {
                        r && r(e), e.defaultPrevented || p(e)
                    },
                    ref: n,
                    target: l
                }))
            }));
            var Ie = t.forwardRef((function (e, n) {
                var r = e["aria-current"],
                    a = void 0 === r ? "page" : r,
                    o = e.caseSensitive,
                    i = void 0 !== o && o,
                    s = e.className,
                    l = void 0 === s ? "" : s,
                    u = e.end,
                    c = void 0 !== u && u,
                    f = e.style,
                    d = e.to,
                    p = e.children,
                    h = Le(e, Fe),
                    m = be(d, {
                        relative: h.relative
                    }),
                    v = ve(),
                    g = t.useContext(ue),
                    b = t.useContext(fe).navigator,
                    y = b.encodeLocation ? b.encodeLocation(m).pathname : m.pathname,
                    w = v.pathname,
                    x = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
                i || (w = w.toLowerCase(), x = x ? x.toLowerCase() : null, y = y.toLowerCase());
                var k, S = w === y || !c && w.startsWith(y) && "/" === w.charAt(y.length),
                    E = null != x && (x === y || !c && x.startsWith(y) && "/" === x.charAt(y.length)),
                    O = S ? a : void 0;
                k = "function" === typeof l ? l({
                    isActive: S,
                    isPending: E
                }) : [l, S ? "active" : null, E ? "pending" : null].filter(Boolean).join(" ");
                var j = "function" === typeof f ? f({
                    isActive: S,
                    isPending: E
                }) : f;
                return t.createElement(ze, Te({}, h, {
                    "aria-current": O,
                    className: k,
                    ref: n,
                    style: j,
                    to: d
                }), "function" === typeof p ? p({
                    isActive: S,
                    isPending: E
                }) : p)
            }));
            var De, Ue;
            (function (e) {
                e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
            })(De || (De = {})),
            function (e) {
                e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
            }(Ue || (Ue = {}));

            function Be() {
                Be = function () {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = Object.defineProperty || function (e, t, n) {
                        e[t] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    o = a.iterator || "@@iterator",
                    i = a.asyncIterator || "@@asyncIterator",
                    s = a.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (_) {
                    l = function (e, t, n) {
                        return e[t] = n
                    }
                }

                function u(e, t, n, a) {
                    var o = t && t.prototype instanceof p ? t : p,
                        i = Object.create(o.prototype),
                        s = new j(a || []);
                    return r(i, "_invoke", {
                        value: k(e, n, s)
                    }), i
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (_) {
                        return {
                            type: "throw",
                            arg: _
                        }
                    }
                }
                e.wrap = u;
                var d = {};

                function p() {}

                function h() {}

                function m() {}
                var v = {};
                l(v, o, (function () {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    b = g && g(g(P([])));
                b && b !== t && n.call(b, o) && (v = b);
                var y = m.prototype = p.prototype = Object.create(v);

                function w(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        l(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    function a(r, o, i, s) {
                        var l = f(e[r], e, o);
                        if ("throw" !== l.type) {
                            var u = l.arg,
                                d = u.value;
                            return d && "object" == c(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function (e) {
                                a("next", e, i, s)
                            }), (function (e) {
                                a("throw", e, i, s)
                            })) : t.resolve(d).then((function (e) {
                                u.value = e, i(u)
                            }), (function (e) {
                                return a("throw", e, i, s)
                            }))
                        }
                        s(l.arg)
                    }
                    var o;
                    r(this, "_invoke", {
                        value: function (e, n) {
                            function r() {
                                return new t((function (t, r) {
                                    a(e, n, t, r)
                                }))
                            }
                            return o = o ? o.then(r, r) : r()
                        }
                    })
                }

                function k(e, t, n) {
                    var r = "suspendedStart";
                    return function (a, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw o;
                            return C()
                        }
                        for (n.method = a, n.arg = o;;) {
                            var i = n.delegate;
                            if (i) {
                                var s = S(i, n);
                                if (s) {
                                    if (s === d) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var l = f(e, t, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function S(e, t) {
                    var n = t.method,
                        r = e.iterator[n];
                    if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                    var a = f(r, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, d;
                    var o = a.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function O(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function j(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(E, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                a = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = m, r(y, "constructor", {
                    value: m,
                    configurable: !0
                }), r(m, "constructor", {
                    value: h,
                    configurable: !0
                }), h.displayName = l(m, s, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, w(x.prototype), l(x.prototype, i, (function () {
                    return this
                })), e.AsyncIterator = x, e.async = function (t, n, r, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new x(u(t, n, r, a), o);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                        return e.done ? e.value : i.next()
                    }))
                }, w(y), l(y, s, "Generator"), l(y, o, (function () {
                    return this
                })), l(y, "toString", (function () {
                    return "[object Generator]"
                })), e.keys = function (e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = P, j.prototype = {
                    constructor: j,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function r(n, r) {
                            return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    l = n.call(o, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(i)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), d
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    O(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, t, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function He(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        l = s.value
                } catch (u) {
                    return void n(u)
                }
                s.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function We(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            He(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            He(o, r, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function qe() {
                return qe = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, qe.apply(this, arguments)
            }
            var Ve = t.useLayoutEffect,
                $e = function (e, t) {
                    "function" !== typeof e ? e.current = t : e(t)
                },
                Ye = function (e, n) {
                    var r = (0, t.useRef)();
                    return (0, t.useCallback)((function (t) {
                        e.current = t, r.current && $e(r.current, null), r.current = n, n && $e(n, t)
                    }), [n])
                },
                Qe = {
                    "min-height": "0",
                    "max-height": "none",
                    height: "0",
                    visibility: "hidden",
                    overflow: "hidden",
                    position: "absolute",
                    "z-index": "-1000",
                    top: "0",
                    right: "0"
                },
                Ke = function (e) {
                    Object.keys(Qe).forEach((function (t) {
                        e.style.setProperty(t, Qe[t], "important")
                    }))
                },
                Ge = null;
            var Xe = function () {},
                Je = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
                Ze = !!document.documentElement.currentStyle,
                et = function (e) {
                    var n = function (e) {
                        var n = t.useRef(e);
                        return Ve((function () {
                            n.current = e
                        })), n
                    }(e);
                    (0, t.useLayoutEffect)((function () {
                        var e = function (e) {
                            n.current(e)
                        };
                        return window.addEventListener("resize", e),
                            function () {
                                window.removeEventListener("resize", e)
                            }
                    }), [])
                },
                tt = function (e, n) {
                    var r = e.cacheMeasurements,
                        a = e.maxRows,
                        o = e.minRows,
                        i = e.onChange,
                        s = void 0 === i ? Xe : i,
                        l = e.onHeightChange,
                        u = void 0 === l ? Xe : l,
                        c = function (e, t) {
                            if (null == e) return {};
                            var n, r, a = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a
                        }(e, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
                    var f = void 0 !== c.value,
                        d = (0, t.useRef)(null),
                        p = Ye(d, n),
                        h = (0, t.useRef)(0),
                        m = (0, t.useRef)(),
                        v = function () {
                            var e = d.current,
                                t = r && m.current ? m.current : function (e) {
                                    var t = window.getComputedStyle(e);
                                    if (null === t) return null;
                                    var n, r = (n = t, Je.reduce((function (e, t) {
                                            return e[t] = n[t], e
                                        }), {})),
                                        a = r.boxSizing;
                                    return "" === a ? null : (Ze && "border-box" === a && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px"), {
                                        sizingStyle: r,
                                        paddingSize: parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
                                        borderSize: parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth)
                                    })
                                }(e);
                            if (t) {
                                m.current = t;
                                var n = function (e, t, n, r) {
                                        void 0 === n && (n = 1), void 0 === r && (r = 1 / 0), Ge || ((Ge = document.createElement("textarea")).setAttribute("tabindex", "-1"), Ge.setAttribute("aria-hidden", "true"), Ke(Ge)), null === Ge.parentNode && document.body.appendChild(Ge);
                                        var a = e.paddingSize,
                                            o = e.borderSize,
                                            i = e.sizingStyle,
                                            s = i.boxSizing;
                                        Object.keys(i).forEach((function (e) {
                                            var t = e;
                                            Ge.style[t] = i[t]
                                        })), Ke(Ge), Ge.value = t;
                                        var l = function (e, t) {
                                            var n = e.scrollHeight;
                                            return "border-box" === t.sizingStyle.boxSizing ? n + t.borderSize : n - t.paddingSize
                                        }(Ge, e);
                                        Ge.value = "x";
                                        var u = Ge.scrollHeight - a,
                                            c = u * n;
                                        "border-box" === s && (c = c + a + o), l = Math.max(c, l);
                                        var f = u * r;
                                        return "border-box" === s && (f = f + a + o), [l = Math.min(f, l), u]
                                    }(t, e.value || e.placeholder || "x", o, a),
                                    i = n[0],
                                    s = n[1];
                                h.current !== i && (h.current = i, e.style.setProperty("height", i + "px", "important"), u(i, {
                                    rowHeight: s
                                }))
                            }
                        };
                    return (0, t.useLayoutEffect)(v), et(v), (0, t.createElement)("textarea", qe({}, c, {
                        onChange: function (e) {
                            f || v(), s(e)
                        },
                        ref: p
                    }))
                },
                nt = (0, t.forwardRef)(tt),
                rt = n(184),
                at = n(1115),
                ot = function () {
                    var e = s((0, t.useState)(""), 2),
                        n = e[0],
                        r = e[1],
                        a = s((0, t.useState)(!1), 2),
                        o = a[0],
                        i = a[1],
                        u = s((0, t.useState)([{
                            user: "gpt",
                            message: "Hi! i am Gojo Satoru, What can i help you?",
                            avatar: "gojosatoru.png"
                        }]), 2),
                        c = u[0],
                        f = u[1],
                        d = new at.Configuration({
                            apiKey: "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"
                        }),
                        p = new at.OpenAIApi(d),
                        h = function () {
                            var e = We(Be().mark((function e() {
                                var t, a;
                                return Be().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = [].concat(l(c), [{
                                                user: "me",
                                                message: n
                                            }]), f(t), r(""), i(!0), window.document.body.scrollIntoView({
                                                behavior: "smooth",
                                                block: "end"
                                            }), e.next = 7, p.createCompletion({
                                                prompt: n,
                                                model: "text-davinci-003",
                                                temperature: .9,
                                                max_tokens: 2048
                                            });
                                        case 7:
                                            a = e.sent, i(!1), f([].concat(l(t), [{
                                                user: "gpt",
                                                message: "".concat(a.data.choices[0].text)
                                            }]));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, rt.jsx)(rt.Fragment, {
                        children: (0, rt.jsxs)("div", {
                            className: "min-h-screen flex flex-col justify-start",
                            children: [(0, rt.jsxs)("div", {
                                children: [c.map((function (e, t) {
                                    return (0, rt.jsxs)(rt.Fragment, {
                                        children: ["me" === e.user && (0, rt.jsxs)("div", {
                                            className: "flex p-5 rounded-lg mb-5 bg-blue-300 border-2 border-black",
                                            style: {
                                                boxShadow: "0.4rem 0.4rem 0 #222"
                                            },
                                            children: [(0, rt.jsx)("img", {
                                                src: "avatar2.png",
                                                className: "w-8 h-6 mr-2 -ml-1",
                                                alt: "user"
                                            }), (0, rt.jsx)("div", {
                                                children: (0, rt.jsx)("span", {
                                                    className: "text-black mt-5",
                                                    children: e.message
                                                })
                                            })]
                                        }, t), "gpt" === e.user && (0, rt.jsxs)("div", {
                                            className: "flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black",
                                            style: {
                                                boxShadow: "0.4rem 0.4rem 0 #222"
                                            },
                                            children: [(0, rt.jsx)("img", {
                                                src: "openai-dark.png",
                                                className: "w-6 h-6 mr-3",
                                                alt: "gpt"
                                            }), (0, rt.jsx)("div", {
                                                children: (0, rt.jsx)("span", {
                                                    className: "text-black",
                                                    children: e.message
                                                })
                                            })]
                                        }, t)]
                                    })
                                })), o && (0, rt.jsx)("div", {
                                    className: "relative",
                                    children: (0, rt.jsxs)("div", {
                                        className: "flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black",
                                        style: {
                                            boxShadow: "0.4rem 0.4rem 0 #222"
                                        },
                                        children: [(0, rt.jsx)("img", {
                                            src: "openai-dark.png",
                                            className: "w-6 h-6 mr-3",
                                            alt: "gpt"
                                        }), (0, rt.jsx)("div", {
                                            class: "col-3",
                                            children: (0, rt.jsx)("div", {
                                                class: "snippet",
                                                "data-title": "dot-pulse",
                                                children: (0, rt.jsx)("div", {
                                                    class: "stage",
                                                    children: (0, rt.jsx)("div", {
                                                        class: "dot-pulse"
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), (0, rt.jsxs)("div", {
                                className: "mt-auto flex sticky bottom-5",
                                children: [(0, rt.jsx)("div", {
                                    className: "flex absolute bottom-0 right-0 md:pb-2.5 px-4 py-2.5 rounded-tr-md rounded-br-md ".concat(n && "bg-black text-white px-4 py-2.5"),
                                    children: (0, rt.jsx)("button", {
                                        className: "".concat(!n && "cursor-not-allowed"),
                                        type: "submit",
                                        onClick: h,
                                        children: "Send"
                                    })
                                }), (0, rt.jsx)(nt, {
                                    className: "w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none",
                                    placeholder: "Enter your question here!.",
                                    style: {
                                        boxShadow: "0.4rem 0.4rem 0 #222"
                                    },
                                    maxRows: 5,
                                    value: n,
                                    onChange: function (e) {
                                        return r(e.target.value)
                                    }
                                })]
                            })]
                        })
                    })
                },
                it = function (e) {
                    return (0, rt.jsxs)(t.Fragment, {
                        children: [(0, rt.jsxs)("div", {
                            className: "mt-2 text-center",
                            children: [(0, rt.jsxs)("h1", {
                                className: "font-medium text-sm md:text-xl underline underline-offset-8 text-dark",
                                children: ["JUJUTSU KAIZEN", e.title]
                            }), (0, rt.jsx)("p", {
                                className: "text-xs md:text-base mt-3 text-dark",
                                children: e.description
                            })]
                        }), (0, rt.jsx)(ot, {})]
                    })
                },
                st = n(4802);

            function lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lt(Object(n), !0).forEach((function (t) {
                        dt(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ct(e) {
                return ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ct(e)
            }

            function ft(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function dt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function pt(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                    } catch (l) {
                        s = !0, a = l
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return o
                }(e, t) || mt(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ht(e) {
                return function (e) {
                    if (Array.isArray(e)) return vt(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || mt(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function mt(e, t) {
                if (e) {
                    if ("string" === typeof e) return vt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vt(e, t) : void 0
                }
            }

            function vt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var gt = function () {},
                bt = {},
                yt = {},
                wt = null,
                xt = {
                    mark: gt,
                    measure: gt
                };
            try {
                "undefined" !== typeof window && (bt = window), "undefined" !== typeof document && (yt = document), "undefined" !== typeof MutationObserver && (wt = MutationObserver), "undefined" !== typeof performance && (xt = performance)
            } catch (to) {}
            var kt, St, Et, Ot, jt, Pt = (bt.navigator || {}).userAgent,
                Ct = void 0 === Pt ? "" : Pt,
                _t = bt,
                Nt = yt,
                At = wt,
                Tt = xt,
                Lt = (_t.document, !!Nt.documentElement && !!Nt.head && "function" === typeof Nt.addEventListener && "function" === typeof Nt.createElement),
                Rt = ~Ct.indexOf("MSIE") || ~Ct.indexOf("Trident/"),
                Ft = "___FONT_AWESOME___",
                Mt = "svg-inline--fa",
                zt = "data-fa-i2svg",
                It = "data-fa-pseudo-element",
                Dt = "data-prefix",
                Ut = "data-icon",
                Bt = "fontawesome-i2svg",
                Ht = ["HTML", "HEAD", "STYLE", "SCRIPT"],
                Wt = function () {
                    try {
                        return !0
                    } catch (to) {
                        return !1
                    }
                }(),
                qt = "classic",
                Vt = "sharp",
                $t = [qt, Vt];

            function Yt(e) {
                return new Proxy(e, {
                    get: function (e, t) {
                        return t in e ? e[t] : e[qt]
                    }
                })
            }
            var Qt = Yt((dt(kt = {}, qt, {
                    fa: "solid",
                    fas: "solid",
                    "fa-solid": "solid",
                    far: "regular",
                    "fa-regular": "regular",
                    fal: "light",
                    "fa-light": "light",
                    fat: "thin",
                    "fa-thin": "thin",
                    fad: "duotone",
                    "fa-duotone": "duotone",
                    fab: "brands",
                    "fa-brands": "brands",
                    fak: "kit",
                    "fa-kit": "kit"
                }), dt(kt, Vt, {
                    fa: "solid",
                    fass: "solid",
                    "fa-solid": "solid"
                }), kt)),
                Kt = Yt((dt(St = {}, qt, {
                    solid: "fas",
                    regular: "far",
                    light: "fal",
                    thin: "fat",
                    duotone: "fad",
                    brands: "fab",
                    kit: "fak"
                }), dt(St, Vt, {
                    solid: "fass"
                }), St)),
                Gt = Yt((dt(Et = {}, qt, {
                    fab: "fa-brands",
                    fad: "fa-duotone",
                    fak: "fa-kit",
                    fal: "fa-light",
                    far: "fa-regular",
                    fas: "fa-solid",
                    fat: "fa-thin"
                }), dt(Et, Vt, {
                    fass: "fa-solid"
                }), Et)),
                Xt = Yt((dt(Ot = {}, qt, {
                    "fa-brands": "fab",
                    "fa-duotone": "fad",
                    "fa-kit": "fak",
                    "fa-light": "fal",
                    "fa-regular": "far",
                    "fa-solid": "fas",
                    "fa-thin": "fat"
                }), dt(Ot, Vt, {
                    "fa-solid": "fass"
                }), Ot)),
                Jt = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
                Zt = "fa-layers-text",
                en = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
                tn = Yt((dt(jt = {}, qt, {
                    900: "fas",
                    400: "far",
                    normal: "far",
                    300: "fal",
                    100: "fat"
                }), dt(jt, Vt, {
                    900: "fass"
                }), jt)),
                nn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                rn = nn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                an = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
                on = "duotone-group",
                sn = "swap-opacity",
                ln = "primary",
                un = "secondary",
                cn = new Set;
            Object.keys(Kt[qt]).map(cn.add.bind(cn)), Object.keys(Kt[Vt]).map(cn.add.bind(cn));
            var fn = [].concat($t, ht(cn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", on, sn, ln, un]).concat(nn.map((function (e) {
                    return "".concat(e, "x")
                }))).concat(rn.map((function (e) {
                    return "w-".concat(e)
                }))),
                dn = _t.FontAwesomeConfig || {};
            if (Nt && "function" === typeof Nt.querySelector) {
                [
                    ["data-family-prefix", "familyPrefix"],
                    ["data-css-prefix", "cssPrefix"],
                    ["data-family-default", "familyDefault"],
                    ["data-style-default", "styleDefault"],
                    ["data-replacement-class", "replacementClass"],
                    ["data-auto-replace-svg", "autoReplaceSvg"],
                    ["data-auto-add-css", "autoAddCss"],
                    ["data-auto-a11y", "autoA11y"],
                    ["data-search-pseudo-elements", "searchPseudoElements"],
                    ["data-observe-mutations", "observeMutations"],
                    ["data-mutate-approach", "mutateApproach"],
                    ["data-keep-original-source", "keepOriginalSource"],
                    ["data-measure-performance", "measurePerformance"],
                    ["data-show-missing-icons", "showMissingIcons"]
                ].forEach((function (e) {
                    var t = pt(e, 2),
                        n = t[0],
                        r = t[1],
                        a = function (e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function (e) {
                            var t = Nt.querySelector("script[" + e + "]");
                            if (t) return t.getAttribute(e)
                        }(n));
                    void 0 !== a && null !== a && (dn[r] = a)
                }))
            }
            var pn = {
                styleDefault: "solid",
                familyDefault: "classic",
                cssPrefix: "fa",
                replacementClass: Mt,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            };
            dn.familyPrefix && (dn.cssPrefix = dn.familyPrefix);
            var hn = ut(ut({}, pn), dn);
            hn.autoReplaceSvg || (hn.observeMutations = !1);
            var mn = {};
            Object.keys(pn).forEach((function (e) {
                Object.defineProperty(mn, e, {
                    enumerable: !0,
                    set: function (t) {
                        hn[e] = t, vn.forEach((function (e) {
                            return e(mn)
                        }))
                    },
                    get: function () {
                        return hn[e]
                    }
                })
            })), Object.defineProperty(mn, "familyPrefix", {
                enumerable: !0,
                set: function (e) {
                    hn.cssPrefix = e, vn.forEach((function (e) {
                        return e(mn)
                    }))
                },
                get: function () {
                    return hn.cssPrefix
                }
            }), _t.FontAwesomeConfig = mn;
            var vn = [];
            var gn = 16,
                bn = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

            function yn() {
                for (var e = 12, t = ""; e-- > 0;) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                return t
            }

            function wn(e) {
                for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
                return t
            }

            function xn(e) {
                return e.classList ? wn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((function (e) {
                    return e
                }))
            }

            function kn(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function Sn(e) {
                return Object.keys(e || {}).reduce((function (t, n) {
                    return t + "".concat(n, ": ").concat(e[n].trim(), ";")
                }), "")
            }

            function En(e) {
                return e.size !== bn.size || e.x !== bn.x || e.y !== bn.y || e.rotate !== bn.rotate || e.flipX || e.flipY
            }

            function On() {
                var e = "fa",
                    t = Mt,
                    n = mn.cssPrefix,
                    r = mn.replacementClass,
                    a = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
                if (n !== e || r !== t) {
                    var o = new RegExp("\\.".concat(e, "\\-"), "g"),
                        i = new RegExp("\\--".concat(e, "\\-"), "g"),
                        s = new RegExp("\\.".concat(t), "g");
                    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r))
                }
                return a
            }
            var jn = !1;

            function Pn() {
                mn.autoAddCss && !jn && (! function (e) {
                    if (e && Lt) {
                        var t = Nt.createElement("style");
                        t.setAttribute("type", "text/css"), t.innerHTML = e;
                        for (var n = Nt.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                            var o = n[a],
                                i = (o.tagName || "").toUpperCase();
                            ["STYLE", "LINK"].indexOf(i) > -1 && (r = o)
                        }
                        Nt.head.insertBefore(t, r)
                    }
                }(On()), jn = !0)
            }
            var Cn = {
                    mixout: function () {
                        return {
                            dom: {
                                css: On,
                                insertCss: Pn
                            }
                        }
                    },
                    hooks: function () {
                        return {
                            beforeDOMElementCreation: function () {
                                Pn()
                            },
                            beforeI2svg: function () {
                                Pn()
                            }
                        }
                    }
                },
                _n = _t || {};
            _n[Ft] || (_n[Ft] = {}), _n[Ft].styles || (_n[Ft].styles = {}), _n[Ft].hooks || (_n[Ft].hooks = {}), _n[Ft].shims || (_n[Ft].shims = []);
            var Nn = _n[Ft],
                An = [],
                Tn = !1;

            function Ln(e) {
                Lt && (Tn ? setTimeout(e, 0) : An.push(e))
            }

            function Rn(e) {
                var t = e.tag,
                    n = e.attributes,
                    r = void 0 === n ? {} : n,
                    a = e.children,
                    o = void 0 === a ? [] : a;
                return "string" === typeof e ? kn(e) : "<".concat(t, " ").concat(function (e) {
                    return Object.keys(e || {}).reduce((function (t, n) {
                        return t + "".concat(n, '="').concat(kn(e[n]), '" ')
                    }), "").trim()
                }(r), ">").concat(o.map(Rn).join(""), "</").concat(t, ">")
            }

            function Fn(e, t, n) {
                if (e && e[t] && e[t][n]) return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
            }
            Lt && ((Tn = (Nt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Nt.readyState)) || Nt.addEventListener("DOMContentLoaded", (function e() {
                Nt.removeEventListener("DOMContentLoaded", e), Tn = 1, An.map((function (e) {
                    return e()
                }))
            })));
            var Mn = function (e, t, n, r) {
                var a, o, i, s = Object.keys(e),
                    l = s.length,
                    u = void 0 !== r ? function (e, t) {
                        return function (n, r, a, o) {
                            return e.call(t, n, r, a, o)
                        }
                    }(t, r) : t;
                for (void 0 === n ? (a = 1, i = e[s[0]]) : (a = 0, i = n); a < l; a++) i = u(i, e[o = s[a]], o, e);
                return i
            };

            function zn(e) {
                var t = function (e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var a = e.charCodeAt(n++);
                        if (a >= 55296 && a <= 56319 && n < r) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & a) << 10) + (1023 & o) + 65536) : (t.push(a), n--)
                        } else t.push(a)
                    }
                    return t
                }(e);
                return 1 === t.length ? t[0].toString(16) : null
            }

            function In(e) {
                return Object.keys(e).reduce((function (t, n) {
                    var r = e[n];
                    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t
                }), {})
            }

            function Dn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.skipHooks,
                    a = void 0 !== r && r,
                    o = In(t);
                "function" !== typeof Nn.hooks.addPack || a ? Nn.styles[e] = ut(ut({}, Nn.styles[e] || {}), o) : Nn.hooks.addPack(e, In(t)), "fas" === e && Dn("fa", t)
            }
            var Un, Bn, Hn, Wn = Nn.styles,
                qn = Nn.shims,
                Vn = (dt(Un = {}, qt, Object.values(Gt[qt])), dt(Un, Vt, Object.values(Gt[Vt])), Un),
                $n = null,
                Yn = {},
                Qn = {},
                Kn = {},
                Gn = {},
                Xn = {},
                Jn = (dt(Bn = {}, qt, Object.keys(Qt[qt])), dt(Bn, Vt, Object.keys(Qt[Vt])), Bn);

            function Zn(e, t) {
                var n, r = t.split("-"),
                    a = r[0],
                    o = r.slice(1).join("-");
                return a !== e || "" === o || (n = o, ~fn.indexOf(n)) ? null : o
            }
            var er, tr = function () {
                var e = function (e) {
                    return Mn(Wn, (function (t, n, r) {
                        return t[r] = Mn(n, e, {}), t
                    }), {})
                };
                Yn = e((function (e, t, n) {
                    (t[3] && (e[t[3]] = n), t[2]) && t[2].filter((function (e) {
                        return "number" === typeof e
                    })).forEach((function (t) {
                        e[t.toString(16)] = n
                    }));
                    return e
                })), Qn = e((function (e, t, n) {
                    (e[n] = n, t[2]) && t[2].filter((function (e) {
                        return "string" === typeof e
                    })).forEach((function (t) {
                        e[t] = n
                    }));
                    return e
                })), Xn = e((function (e, t, n) {
                    var r = t[2];
                    return e[n] = n, r.forEach((function (t) {
                        e[t] = n
                    })), e
                }));
                var t = "far" in Wn || mn.autoFetchSvg,
                    n = Mn(qn, (function (e, n) {
                        var r = n[0],
                            a = n[1],
                            o = n[2];
                        return "far" !== a || t || (a = "fas"), "string" === typeof r && (e.names[r] = {
                            prefix: a,
                            iconName: o
                        }), "number" === typeof r && (e.unicodes[r.toString(16)] = {
                            prefix: a,
                            iconName: o
                        }), e
                    }), {
                        names: {},
                        unicodes: {}
                    });
                Kn = n.names, Gn = n.unicodes, $n = ir(mn.styleDefault, {
                    family: mn.familyDefault
                })
            };

            function nr(e, t) {
                return (Yn[e] || {})[t]
            }

            function rr(e, t) {
                return (Xn[e] || {})[t]
            }

            function ar(e) {
                return Kn[e] || {
                    prefix: null,
                    iconName: null
                }
            }

            function or() {
                return $n
            }
            er = function (e) {
                $n = ir(e.styleDefault, {
                    family: mn.familyDefault
                })
            }, vn.push(er), tr();

            function ir(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.family,
                    r = void 0 === n ? qt : n,
                    a = Qt[r][e],
                    o = Kt[r][e] || Kt[r][a],
                    i = e in Nn.styles ? e : null;
                return o || i || null
            }
            var sr = (dt(Hn = {}, qt, Object.keys(Gt[qt])), dt(Hn, Vt, Object.keys(Gt[Vt])), Hn);

            function lr(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = n.skipLookups,
                    a = void 0 !== r && r,
                    o = (dt(t = {}, qt, "".concat(mn.cssPrefix, "-").concat(qt)), dt(t, Vt, "".concat(mn.cssPrefix, "-").concat(Vt)), t),
                    i = null,
                    s = qt;
                (e.includes(o[qt]) || e.some((function (e) {
                    return sr[qt].includes(e)
                }))) && (s = qt), (e.includes(o[Vt]) || e.some((function (e) {
                    return sr[Vt].includes(e)
                }))) && (s = Vt);
                var l = e.reduce((function (e, t) {
                    var n = Zn(mn.cssPrefix, t);
                    if (Wn[t] ? (t = Vn[s].includes(t) ? Xt[s][t] : t, i = t, e.prefix = t) : Jn[s].indexOf(t) > -1 ? (i = t, e.prefix = ir(t, {
                            family: s
                        })) : n ? e.iconName = n : t !== mn.replacementClass && t !== o[qt] && t !== o[Vt] && e.rest.push(t), !a && e.prefix && e.iconName) {
                        var r = "fa" === i ? ar(e.iconName) : {},
                            l = rr(e.prefix, e.iconName);
                        r.prefix && (i = null), e.iconName = r.iconName || l || e.iconName, e.prefix = r.prefix || e.prefix, "far" !== e.prefix || Wn.far || !Wn.fas || mn.autoFetchSvg || (e.prefix = "fas")
                    }
                    return e
                }), {
                    prefix: null,
                    iconName: null,
                    rest: []
                });
                return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), l.prefix || s !== Vt || !Wn.fass && !mn.autoFetchSvg || (l.prefix = "fass", l.iconName = rr(l.prefix, l.iconName) || l.iconName), "fa" !== l.prefix && "fa" !== i || (l.prefix = or() || "fas"), l
            }
            var ur = function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.definitions = {}
                    }
                    var t, n, r;
                    return t = e, n = [{
                        key: "add",
                        value: function () {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var a = n.reduce(this._pullDefinitions, {});
                            Object.keys(a).forEach((function (t) {
                                e.definitions[t] = ut(ut({}, e.definitions[t] || {}), a[t]), Dn(t, a[t]);
                                var n = Gt[qt][t];
                                n && Dn(n, a[t]), tr()
                            }))
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function (e, t) {
                            var n = t.prefix && t.iconName && t.icon ? {
                                0: t
                            } : t;
                            return Object.keys(n).map((function (t) {
                                var r = n[t],
                                    a = r.prefix,
                                    o = r.iconName,
                                    i = r.icon,
                                    s = i[2];
                                e[a] || (e[a] = {}), s.length > 0 && s.forEach((function (t) {
                                    "string" === typeof t && (e[a][t] = i)
                                })), e[a][o] = i
                            })), e
                        }
                    }], n && ft(t.prototype, n), r && ft(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                cr = [],
                fr = {},
                dr = {},
                pr = Object.keys(dr);

            function hr(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var o = fr[e] || [];
                return o.forEach((function (e) {
                    t = e.apply(null, [t].concat(r))
                })), t
            }

            function mr(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var a = fr[e] || [];
                a.forEach((function (e) {
                    e.apply(null, n)
                }))
            }

            function vr() {
                var e = arguments[0],
                    t = Array.prototype.slice.call(arguments, 1);
                return dr[e] ? dr[e].apply(null, t) : void 0
            }

            function gr(e) {
                "fa" === e.prefix && (e.prefix = "fas");
                var t = e.iconName,
                    n = e.prefix || or();
                if (t) return t = rr(n, t) || t, Fn(br.definitions, n, t) || Fn(Nn.styles, n, t)
            }
            var br = new ur,
                yr = {
                    i2svg: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Lt ? (mr("beforeI2svg", e), vr("pseudoElements2svg", e), vr("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.")
                    },
                    watch: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.autoReplaceSvgRoot;
                        !1 === mn.autoReplaceSvg && (mn.autoReplaceSvg = !0), mn.observeMutations = !0, Ln((function () {
                            kr({
                                autoReplaceSvgRoot: t
                            }), mr("watch", e)
                        }))
                    }
                },
                wr = {
                    icon: function (e) {
                        if (null === e) return null;
                        if ("object" === ct(e) && e.prefix && e.iconName) return {
                            prefix: e.prefix,
                            iconName: rr(e.prefix, e.iconName) || e.iconName
                        };
                        if (Array.isArray(e) && 2 === e.length) {
                            var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                                n = ir(e[0]);
                            return {
                                prefix: n,
                                iconName: rr(n, t) || t
                            }
                        }
                        if ("string" === typeof e && (e.indexOf("".concat(mn.cssPrefix, "-")) > -1 || e.match(Jt))) {
                            var r = lr(e.split(" "), {
                                skipLookups: !0
                            });
                            return {
                                prefix: r.prefix || or(),
                                iconName: rr(r.prefix, r.iconName) || r.iconName
                            }
                        }
                        if ("string" === typeof e) {
                            var a = or();
                            return {
                                prefix: a,
                                iconName: rr(a, e) || e
                            }
                        }
                    }
                },
                xr = {
                    noAuto: function () {
                        mn.autoReplaceSvg = !1, mn.observeMutations = !1, mr("noAuto")
                    },
                    config: mn,
                    dom: yr,
                    parse: wr,
                    library: br,
                    findIconDefinition: gr,
                    toHtml: Rn
                },
                kr = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.autoReplaceSvgRoot,
                        n = void 0 === t ? Nt : t;
                    (Object.keys(Nn.styles).length > 0 || mn.autoFetchSvg) && Lt && mn.autoReplaceSvg && xr.dom.i2svg({
                        node: n
                    })
                };

            function Sr(e, t) {
                return Object.defineProperty(e, "abstract", {
                    get: t
                }), Object.defineProperty(e, "html", {
                    get: function () {
                        return e.abstract.map((function (e) {
                            return Rn(e)
                        }))
                    }
                }), Object.defineProperty(e, "node", {
                    get: function () {
                        if (Lt) {
                            var t = Nt.createElement("div");
                            return t.innerHTML = e.html, t.children
                        }
                    }
                }), e
            }

            function Er(e) {
                var t = e.icons,
                    n = t.main,
                    r = t.mask,
                    a = e.prefix,
                    o = e.iconName,
                    i = e.transform,
                    s = e.symbol,
                    l = e.title,
                    u = e.maskId,
                    c = e.titleId,
                    f = e.extra,
                    d = e.watchable,
                    p = void 0 !== d && d,
                    h = r.found ? r : n,
                    m = h.width,
                    v = h.height,
                    g = "fak" === a,
                    b = [mn.replacementClass, o ? "".concat(mn.cssPrefix, "-").concat(o) : ""].filter((function (e) {
                        return -1 === f.classes.indexOf(e)
                    })).filter((function (e) {
                        return "" !== e || !!e
                    })).concat(f.classes).join(" "),
                    y = {
                        children: [],
                        attributes: ut(ut({}, f.attributes), {}, {
                            "data-prefix": a,
                            "data-icon": o,
                            class: b,
                            role: f.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(m, " ").concat(v)
                        })
                    },
                    w = g && !~f.classes.indexOf("fa-fw") ? {
                        width: "".concat(m / v * 16 * .0625, "em")
                    } : {};
                p && (y.attributes[zt] = ""), l && (y.children.push({
                    tag: "title",
                    attributes: {
                        id: y.attributes["aria-labelledby"] || "title-".concat(c || yn())
                    },
                    children: [l]
                }), delete y.attributes.title);
                var x = ut(ut({}, y), {}, {
                        prefix: a,
                        iconName: o,
                        main: n,
                        mask: r,
                        maskId: u,
                        transform: i,
                        symbol: s,
                        styles: ut(ut({}, w), f.styles)
                    }),
                    k = r.found && n.found ? vr("generateAbstractMask", x) || {
                        children: [],
                        attributes: {}
                    } : vr("generateAbstractIcon", x) || {
                        children: [],
                        attributes: {}
                    },
                    S = k.children,
                    E = k.attributes;
                return x.children = S, x.attributes = E, s ? function (e) {
                    var t = e.prefix,
                        n = e.iconName,
                        r = e.children,
                        a = e.attributes,
                        o = e.symbol,
                        i = !0 === o ? "".concat(t, "-").concat(mn.cssPrefix, "-").concat(n) : o;
                    return [{
                        tag: "svg",
                        attributes: {
                            style: "display: none;"
                        },
                        children: [{
                            tag: "symbol",
                            attributes: ut(ut({}, a), {}, {
                                id: i
                            }),
                            children: r
                        }]
                    }]
                }(x) : function (e) {
                    var t = e.children,
                        n = e.main,
                        r = e.mask,
                        a = e.attributes,
                        o = e.styles,
                        i = e.transform;
                    if (En(i) && n.found && !r.found) {
                        var s = {
                            x: n.width / n.height / 2,
                            y: .5
                        };
                        a.style = Sn(ut(ut({}, o), {}, {
                            "transform-origin": "".concat(s.x + i.x / 16, "em ").concat(s.y + i.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: a,
                        children: t
                    }]
                }(x)
            }

            function Or(e) {
                var t = e.content,
                    n = e.width,
                    r = e.height,
                    a = e.transform,
                    o = e.title,
                    i = e.extra,
                    s = e.watchable,
                    l = void 0 !== s && s,
                    u = ut(ut(ut({}, i.attributes), o ? {
                        title: o
                    } : {}), {}, {
                        class: i.classes.join(" ")
                    });
                l && (u[zt] = "");
                var c = ut({}, i.styles);
                En(a) && (c.transform = function (e) {
                    var t = e.transform,
                        n = e.width,
                        r = void 0 === n ? 16 : n,
                        a = e.height,
                        o = void 0 === a ? 16 : a,
                        i = e.startCentered,
                        s = void 0 !== i && i,
                        l = "";
                    return l += s && Rt ? "translate(".concat(t.x / gn - r / 2, "em, ").concat(t.y / gn - o / 2, "em) ") : s ? "translate(calc(-50% + ".concat(t.x / gn, "em), calc(-50% + ").concat(t.y / gn, "em)) ") : "translate(".concat(t.x / gn, "em, ").concat(t.y / gn, "em) "), l += "scale(".concat(t.size / gn * (t.flipX ? -1 : 1), ", ").concat(t.size / gn * (t.flipY ? -1 : 1), ") "), l + "rotate(".concat(t.rotate, "deg) ")
                }({
                    transform: a,
                    startCentered: !0,
                    width: n,
                    height: r
                }), c["-webkit-transform"] = c.transform);
                var f = Sn(c);
                f.length > 0 && (u.style = f);
                var d = [];
                return d.push({
                    tag: "span",
                    attributes: u,
                    children: [t]
                }), o && d.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [o]
                }), d
            }

            function jr(e) {
                var t = e.content,
                    n = e.title,
                    r = e.extra,
                    a = ut(ut(ut({}, r.attributes), n ? {
                        title: n
                    } : {}), {}, {
                        class: r.classes.join(" ")
                    }),
                    o = Sn(r.styles);
                o.length > 0 && (a.style = o);
                var i = [];
                return i.push({
                    tag: "span",
                    attributes: a,
                    children: [t]
                }), n && i.push({
                    tag: "span",
                    attributes: {
                        class: "sr-only"
                    },
                    children: [n]
                }), i
            }
            var Pr = Nn.styles;

            function Cr(e) {
                var t = e[0],
                    n = e[1],
                    r = pt(e.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: n,
                    icon: Array.isArray(r) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(mn.cssPrefix, "-").concat(on)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(mn.cssPrefix, "-").concat(un),
                                fill: "currentColor",
                                d: r[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(mn.cssPrefix, "-").concat(ln),
                                fill: "currentColor",
                                d: r[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: r
                        }
                    }
                }
            }
            var _r = {
                found: !1,
                width: 512,
                height: 512
            };

            function Nr(e, t) {
                var n = t;
                return "fa" === t && null !== mn.styleDefault && (t = or()), new Promise((function (r, a) {
                    vr("missingIconAbstract");
                    if ("fa" === n) {
                        var o = ar(e) || {};
                        e = o.iconName || e, t = o.prefix || t
                    }
                    if (e && t && Pr[t] && Pr[t][e]) return r(Cr(Pr[t][e]));
                    ! function (e, t) {
                        Wt || mn.showMissingIcons || !e || console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
                    }(e, t), r(ut(ut({}, _r), {}, {
                        icon: mn.showMissingIcons && e && vr("missingIconAbstract") || {}
                    }))
                }))
            }
            var Ar = function () {},
                Tr = mn.measurePerformance && Tt && Tt.mark && Tt.measure ? Tt : {
                    mark: Ar,
                    measure: Ar
                },
                Lr = 'FA "6.2.1"',
                Rr = function (e) {
                    Tr.mark("".concat(Lr, " ").concat(e, " ends")), Tr.measure("".concat(Lr, " ").concat(e), "".concat(Lr, " ").concat(e, " begins"), "".concat(Lr, " ").concat(e, " ends"))
                },
                Fr = function (e) {
                    return Tr.mark("".concat(Lr, " ").concat(e, " begins")),
                        function () {
                            return Rr(e)
                        }
                },
                Mr = function () {};

            function zr(e) {
                return "string" === typeof (e.getAttribute ? e.getAttribute(zt) : null)
            }

            function Ir(e) {
                return Nt.createElementNS("http://www.w3.org/2000/svg", e)
            }

            function Dr(e) {
                return Nt.createElement(e)
            }

            function Ur(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.ceFn,
                    r = void 0 === n ? "svg" === e.tag ? Ir : Dr : n;
                if ("string" === typeof e) return Nt.createTextNode(e);
                var a = r(e.tag);
                Object.keys(e.attributes || []).forEach((function (t) {
                    a.setAttribute(t, e.attributes[t])
                }));
                var o = e.children || [];
                return o.forEach((function (e) {
                    a.appendChild(Ur(e, {
                        ceFn: r
                    }))
                })), a
            }
            var Br = {
                replace: function (e) {
                    var t = e[0];
                    if (t.parentNode)
                        if (e[1].forEach((function (e) {
                                t.parentNode.insertBefore(Ur(e), t)
                            })), null === t.getAttribute(zt) && mn.keepOriginalSource) {
                            var n = Nt.createComment(function (e) {
                                var t = " ".concat(e.outerHTML, " ");
                                return "".concat(t, "Font Awesome fontawesome.com ")
                            }(t));
                            t.parentNode.replaceChild(n, t)
                        } else t.remove()
                },
                nest: function (e) {
                    var t = e[0],
                        n = e[1];
                    if (~xn(t).indexOf(mn.replacementClass)) return Br.replace(e);
                    var r = new RegExp("".concat(mn.cssPrefix, "-.*"));
                    if (delete n[0].attributes.id, n[0].attributes.class) {
                        var a = n[0].attributes.class.split(" ").reduce((function (e, t) {
                            return t === mn.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e
                        }), {
                            toNode: [],
                            toSvg: []
                        });
                        n[0].attributes.class = a.toSvg.join(" "), 0 === a.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "))
                    }
                    var o = n.map((function (e) {
                        return Rn(e)
                    })).join("\n");
                    t.setAttribute(zt, ""), t.innerHTML = o
                }
            };

            function Hr(e) {
                e()
            }

            function Wr(e, t) {
                var n = "function" === typeof t ? t : Mr;
                if (0 === e.length) n();
                else {
                    var r = Hr;
                    "async" === mn.mutateApproach && (r = _t.requestAnimationFrame || Hr), r((function () {
                        var t = !0 === mn.autoReplaceSvg ? Br.replace : Br[mn.autoReplaceSvg] || Br.replace,
                            r = Fr("mutate");
                        e.map(t), r(), n()
                    }))
                }
            }
            var qr = !1;

            function Vr() {
                qr = !0
            }

            function $r() {
                qr = !1
            }
            var Yr = null;

            function Qr(e) {
                if (At && mn.observeMutations) {
                    var t = e.treeCallback,
                        n = void 0 === t ? Mr : t,
                        r = e.nodeCallback,
                        a = void 0 === r ? Mr : r,
                        o = e.pseudoElementsCallback,
                        i = void 0 === o ? Mr : o,
                        s = e.observeMutationsRoot,
                        l = void 0 === s ? Nt : s;
                    Yr = new At((function (e) {
                        if (!qr) {
                            var t = or();
                            wn(e).forEach((function (e) {
                                if ("childList" === e.type && e.addedNodes.length > 0 && !zr(e.addedNodes[0]) && (mn.searchPseudoElements && i(e.target), n(e.target)), "attributes" === e.type && e.target.parentNode && mn.searchPseudoElements && i(e.target.parentNode), "attributes" === e.type && zr(e.target) && ~an.indexOf(e.attributeName))
                                    if ("class" === e.attributeName && function (e) {
                                            var t = e.getAttribute ? e.getAttribute(Dt) : null,
                                                n = e.getAttribute ? e.getAttribute(Ut) : null;
                                            return t && n
                                        }(e.target)) {
                                        var r = lr(xn(e.target)),
                                            o = r.prefix,
                                            s = r.iconName;
                                        e.target.setAttribute(Dt, o || t), s && e.target.setAttribute(Ut, s)
                                    } else(l = e.target) && l.classList && l.classList.contains && l.classList.contains(mn.replacementClass) && a(e.target);
                                var l
                            }))
                        }
                    })), Lt && Yr.observe(l, {
                        childList: !0,
                        attributes: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            }

            function Kr(e) {
                var t = e.getAttribute("style"),
                    n = [];
                return t && (n = t.split(";").reduce((function (e, t) {
                    var n = t.split(":"),
                        r = n[0],
                        a = n.slice(1);
                    return r && a.length > 0 && (e[r] = a.join(":").trim()), e
                }), {})), n
            }

            function Gr(e) {
                var t = e.getAttribute("data-prefix"),
                    n = e.getAttribute("data-icon"),
                    r = void 0 !== e.innerText ? e.innerText.trim() : "",
                    a = lr(xn(e));
                return a.prefix || (a.prefix = or()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = function (e, t) {
                    return (Qn[e] || {})[t]
                }(a.prefix, e.innerText) || nr(a.prefix, zn(e.innerText))), !a.iconName && mn.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a
            }

            function Xr(e) {
                var t = wn(e.attributes).reduce((function (e, t) {
                        return "class" !== e.name && "style" !== e.name && (e[t.name] = t.value), e
                    }), {}),
                    n = e.getAttribute("title"),
                    r = e.getAttribute("data-fa-title-id");
                return mn.autoA11y && (n ? t["aria-labelledby"] = "".concat(mn.replacementClass, "-title-").concat(r || yn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t
            }

            function Jr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        styleParser: !0
                    },
                    n = Gr(e),
                    r = n.iconName,
                    a = n.prefix,
                    o = n.rest,
                    i = Xr(e),
                    s = hr("parseNodeAttributes", {}, e),
                    l = t.styleParser ? Kr(e) : [];
                return ut({
                    iconName: r,
                    title: e.getAttribute("title"),
                    titleId: e.getAttribute("data-fa-title-id"),
                    prefix: a,
                    transform: bn,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: !1,
                    extra: {
                        classes: o,
                        styles: l,
                        attributes: i
                    }
                }, s)
            }
            var Zr = Nn.styles;

            function ea(e) {
                var t = "nest" === mn.autoReplaceSvg ? Jr(e, {
                    styleParser: !1
                }) : Jr(e);
                return ~t.extra.classes.indexOf(Zt) ? vr("generateLayersText", e, t) : vr("generateSvgReplacementMutation", e, t)
            }
            var ta = new Set;

            function na(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!Lt) return Promise.resolve();
                var n = Nt.documentElement.classList,
                    r = function (e) {
                        return n.add("".concat(Bt, "-").concat(e))
                    },
                    a = function (e) {
                        return n.remove("".concat(Bt, "-").concat(e))
                    },
                    o = mn.autoFetchSvg ? ta : $t.map((function (e) {
                        return "fa-".concat(e)
                    })).concat(Object.keys(Zr));
                o.includes("fa") || o.push("fa");
                var i = [".".concat(Zt, ":not([").concat(zt, "])")].concat(o.map((function (e) {
                    return ".".concat(e, ":not([").concat(zt, "])")
                }))).join(", ");
                if (0 === i.length) return Promise.resolve();
                var s = [];
                try {
                    s = wn(e.querySelectorAll(i))
                } catch (to) {}
                if (!(s.length > 0)) return Promise.resolve();
                r("pending"), a("complete");
                var l = Fr("onTree"),
                    u = s.reduce((function (e, t) {
                        try {
                            var n = ea(t);
                            n && e.push(n)
                        } catch (to) {
                            Wt || "MissingIcon" === to.name && console.error(to)
                        }
                        return e
                    }), []);
                return new Promise((function (e, n) {
                    Promise.all(u).then((function (n) {
                        Wr(n, (function () {
                            r("active"), r("complete"), a("pending"), "function" === typeof t && t(), l(), e()
                        }))
                    })).catch((function (e) {
                        l(), n(e)
                    }))
                }))
            }

            function ra(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                ea(e).then((function (e) {
                    e && Wr([e], t)
                }))
            }
            $t.map((function (e) {
                ta.add("fa-".concat(e))
            })), Object.keys(Qt[qt]).map(ta.add.bind(ta)), Object.keys(Qt[Vt]).map(ta.add.bind(ta)), ta = ht(ta);
            var aa = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.transform,
                        r = void 0 === n ? bn : n,
                        a = t.symbol,
                        o = void 0 !== a && a,
                        i = t.mask,
                        s = void 0 === i ? null : i,
                        l = t.maskId,
                        u = void 0 === l ? null : l,
                        c = t.title,
                        f = void 0 === c ? null : c,
                        d = t.titleId,
                        p = void 0 === d ? null : d,
                        h = t.classes,
                        m = void 0 === h ? [] : h,
                        v = t.attributes,
                        g = void 0 === v ? {} : v,
                        b = t.styles,
                        y = void 0 === b ? {} : b;
                    if (e) {
                        var w = e.prefix,
                            x = e.iconName,
                            k = e.icon;
                        return Sr(ut({
                            type: "icon"
                        }, e), (function () {
                            return mr("beforeDOMElementCreation", {
                                iconDefinition: e,
                                params: t
                            }), mn.autoA11y && (f ? g["aria-labelledby"] = "".concat(mn.replacementClass, "-title-").concat(p || yn()) : (g["aria-hidden"] = "true", g.focusable = "false")), Er({
                                icons: {
                                    main: Cr(k),
                                    mask: s ? Cr(s.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: w,
                                iconName: x,
                                transform: ut(ut({}, bn), r),
                                symbol: o,
                                title: f,
                                maskId: u,
                                titleId: p,
                                extra: {
                                    attributes: g,
                                    styles: y,
                                    classes: m
                                }
                            })
                        }))
                    }
                },
                oa = {
                    mixout: function () {
                        return {
                            icon: (e = aa, function (t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = (t || {}).icon ? t : gr(t || {}),
                                    a = n.mask;
                                return a && (a = (a || {}).icon ? a : gr(a || {})), e(r, ut(ut({}, n), {}, {
                                    mask: a
                                }))
                            })
                        };
                        var e
                    },
                    hooks: function () {
                        return {
                            mutationObserverCallbacks: function (e) {
                                return e.treeCallback = na, e.nodeCallback = ra, e
                            }
                        }
                    },
                    provides: function (e) {
                        e.i2svg = function (e) {
                            var t = e.node,
                                n = void 0 === t ? Nt : t,
                                r = e.callback;
                            return na(n, void 0 === r ? function () {} : r)
                        }, e.generateSvgReplacementMutation = function (e, t) {
                            var n = t.iconName,
                                r = t.title,
                                a = t.titleId,
                                o = t.prefix,
                                i = t.transform,
                                s = t.symbol,
                                l = t.mask,
                                u = t.maskId,
                                c = t.extra;
                            return new Promise((function (t, f) {
                                Promise.all([Nr(n, o), l.iconName ? Nr(l.iconName, l.prefix) : Promise.resolve({
                                    found: !1,
                                    width: 512,
                                    height: 512,
                                    icon: {}
                                })]).then((function (l) {
                                    var f = pt(l, 2),
                                        d = f[0],
                                        p = f[1];
                                    t([e, Er({
                                        icons: {
                                            main: d,
                                            mask: p
                                        },
                                        prefix: o,
                                        iconName: n,
                                        transform: i,
                                        symbol: s,
                                        maskId: u,
                                        title: r,
                                        titleId: a,
                                        extra: c,
                                        watchable: !0
                                    })])
                                })).catch(f)
                            }))
                        }, e.generateAbstractIcon = function (e) {
                            var t, n = e.children,
                                r = e.attributes,
                                a = e.main,
                                o = e.transform,
                                i = Sn(e.styles);
                            return i.length > 0 && (r.style = i), En(o) && (t = vr("generateAbstractTransformGrouping", {
                                main: a,
                                transform: o,
                                containerWidth: a.width,
                                iconWidth: a.width
                            })), n.push(t || a.icon), {
                                children: n,
                                attributes: r
                            }
                        }
                    }
                },
                ia = {
                    mixout: function () {
                        return {
                            layer: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.classes,
                                    r = void 0 === n ? [] : n;
                                return Sr({
                                    type: "layer"
                                }, (function () {
                                    mr("beforeDOMElementCreation", {
                                        assembler: e,
                                        params: t
                                    });
                                    var n = [];
                                    return e((function (e) {
                                        Array.isArray(e) ? e.map((function (e) {
                                            n = n.concat(e.abstract)
                                        })) : n = n.concat(e.abstract)
                                    })), [{
                                        tag: "span",
                                        attributes: {
                                            class: ["".concat(mn.cssPrefix, "-layers")].concat(ht(r)).join(" ")
                                        },
                                        children: n
                                    }]
                                }))
                            }
                        }
                    }
                },
                sa = {
                    mixout: function () {
                        return {
                            counter: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.title,
                                    r = void 0 === n ? null : n,
                                    a = t.classes,
                                    o = void 0 === a ? [] : a,
                                    i = t.attributes,
                                    s = void 0 === i ? {} : i,
                                    l = t.styles,
                                    u = void 0 === l ? {} : l;
                                return Sr({
                                    type: "counter",
                                    content: e
                                }, (function () {
                                    return mr("beforeDOMElementCreation", {
                                        content: e,
                                        params: t
                                    }), jr({
                                        content: e.toString(),
                                        title: r,
                                        extra: {
                                            attributes: s,
                                            styles: u,
                                            classes: ["".concat(mn.cssPrefix, "-layers-counter")].concat(ht(o))
                                        }
                                    })
                                }))
                            }
                        }
                    }
                },
                la = {
                    mixout: function () {
                        return {
                            text: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = t.transform,
                                    r = void 0 === n ? bn : n,
                                    a = t.title,
                                    o = void 0 === a ? null : a,
                                    i = t.classes,
                                    s = void 0 === i ? [] : i,
                                    l = t.attributes,
                                    u = void 0 === l ? {} : l,
                                    c = t.styles,
                                    f = void 0 === c ? {} : c;
                                return Sr({
                                    type: "text",
                                    content: e
                                }, (function () {
                                    return mr("beforeDOMElementCreation", {
                                        content: e,
                                        params: t
                                    }), Or({
                                        content: e,
                                        transform: ut(ut({}, bn), r),
                                        title: o,
                                        extra: {
                                            attributes: u,
                                            styles: f,
                                            classes: ["".concat(mn.cssPrefix, "-layers-text")].concat(ht(s))
                                        }
                                    })
                                }))
                            }
                        }
                    },
                    provides: function (e) {
                        e.generateLayersText = function (e, t) {
                            var n = t.title,
                                r = t.transform,
                                a = t.extra,
                                o = null,
                                i = null;
                            if (Rt) {
                                var s = parseInt(getComputedStyle(e).fontSize, 10),
                                    l = e.getBoundingClientRect();
                                o = l.width / s, i = l.height / s
                            }
                            return mn.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([e, Or({
                                content: e.innerHTML,
                                width: o,
                                height: i,
                                transform: r,
                                title: n,
                                extra: a,
                                watchable: !0
                            })])
                        }
                    }
                },
                ua = new RegExp('"', "ug"),
                ca = [1105920, 1112319];

            function fa(e, t) {
                var n = "".concat("data-fa-pseudo-element-pending").concat(t.replace(":", "-"));
                return new Promise((function (r, a) {
                    if (null !== e.getAttribute(n)) return r();
                    var o = wn(e.children).filter((function (e) {
                            return e.getAttribute(It) === t
                        }))[0],
                        i = _t.getComputedStyle(e, t),
                        s = i.getPropertyValue("font-family").match(en),
                        l = i.getPropertyValue("font-weight"),
                        u = i.getPropertyValue("content");
                    if (o && !s) return e.removeChild(o), r();
                    if (s && "none" !== u && "" !== u) {
                        var c = i.getPropertyValue("content"),
                            f = ~["Sharp"].indexOf(s[2]) ? Vt : qt,
                            d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? Kt[f][s[2].toLowerCase()] : tn[f][l],
                            p = function (e) {
                                var t = e.replace(ua, ""),
                                    n = function (e, t) {
                                        var n, r = e.length,
                                            a = e.charCodeAt(t);
                                        return a >= 55296 && a <= 56319 && r > t + 1 && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? 1024 * (a - 55296) + n - 56320 + 65536 : a
                                    }(t, 0),
                                    r = n >= ca[0] && n <= ca[1],
                                    a = 2 === t.length && t[0] === t[1];
                                return {
                                    value: zn(a ? t[0] : t),
                                    isSecondary: r || a
                                }
                            }(c),
                            h = p.value,
                            m = p.isSecondary,
                            v = s[0].startsWith("FontAwesome"),
                            g = nr(d, h),
                            b = g;
                        if (v) {
                            var y = function (e) {
                                var t = Gn[e],
                                    n = nr("fas", e);
                                return t || (n ? {
                                    prefix: "fas",
                                    iconName: n
                                } : null) || {
                                    prefix: null,
                                    iconName: null
                                }
                            }(h);
                            y.iconName && y.prefix && (g = y.iconName, d = y.prefix)
                        }
                        if (!g || m || o && o.getAttribute(Dt) === d && o.getAttribute(Ut) === b) r();
                        else {
                            e.setAttribute(n, b), o && e.removeChild(o);
                            var w = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: bn,
                                    symbol: !1,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: []
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {}
                                    }
                                },
                                x = w.extra;
                            x.attributes[It] = t, Nr(g, d).then((function (a) {
                                var o = Er(ut(ut({}, w), {}, {
                                        icons: {
                                            main: a,
                                            mask: {
                                                prefix: null,
                                                iconName: null,
                                                rest: []
                                            }
                                        },
                                        prefix: d,
                                        iconName: b,
                                        extra: x,
                                        watchable: !0
                                    })),
                                    i = Nt.createElement("svg");
                                "::before" === t ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.outerHTML = o.map((function (e) {
                                    return Rn(e)
                                })).join("\n"), e.removeAttribute(n), r()
                            })).catch(a)
                        }
                    } else r()
                }))
            }

            function da(e) {
                return Promise.all([fa(e, "::before"), fa(e, "::after")])
            }

            function pa(e) {
                return e.parentNode !== document.head && !~Ht.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(It) && (!e.parentNode || "svg" !== e.parentNode.tagName)
            }

            function ha(e) {
                if (Lt) return new Promise((function (t, n) {
                    var r = wn(e.querySelectorAll("*")).filter(pa).map(da),
                        a = Fr("searchPseudoElements");
                    Vr(), Promise.all(r).then((function () {
                        a(), $r(), t()
                    })).catch((function () {
                        a(), $r(), n()
                    }))
                }))
            }
            var ma = !1,
                va = function (e) {
                    return e.toLowerCase().split(" ").reduce((function (e, t) {
                        var n = t.toLowerCase().split("-"),
                            r = n[0],
                            a = n.slice(1).join("-");
                        if (r && "h" === a) return e.flipX = !0, e;
                        if (r && "v" === a) return e.flipY = !0, e;
                        if (a = parseFloat(a), isNaN(a)) return e;
                        switch (r) {
                            case "grow":
                                e.size = e.size + a;
                                break;
                            case "shrink":
                                e.size = e.size - a;
                                break;
                            case "left":
                                e.x = e.x - a;
                                break;
                            case "right":
                                e.x = e.x + a;
                                break;
                            case "up":
                                e.y = e.y - a;
                                break;
                            case "down":
                                e.y = e.y + a;
                                break;
                            case "rotate":
                                e.rotate = e.rotate + a
                        }
                        return e
                    }), {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: !1,
                        flipY: !1,
                        rotate: 0
                    })
                },
                ga = {
                    mixout: function () {
                        return {
                            parse: {
                                transform: function (e) {
                                    return va(e)
                                }
                            }
                        }
                    },
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (e, t) {
                                var n = t.getAttribute("data-fa-transform");
                                return n && (e.transform = va(n)), e
                            }
                        }
                    },
                    provides: function (e) {
                        e.generateAbstractTransformGrouping = function (e) {
                            var t = e.main,
                                n = e.transform,
                                r = e.containerWidth,
                                a = e.iconWidth,
                                o = {
                                    transform: "translate(".concat(r / 2, " 256)")
                                },
                                i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                                s = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
                                l = "rotate(".concat(n.rotate, " 0 0)"),
                                u = {
                                    outer: o,
                                    inner: {
                                        transform: "".concat(i, " ").concat(s, " ").concat(l)
                                    },
                                    path: {
                                        transform: "translate(".concat(a / 2 * -1, " -256)")
                                    }
                                };
                            return {
                                tag: "g",
                                attributes: ut({}, u.outer),
                                children: [{
                                    tag: "g",
                                    attributes: ut({}, u.inner),
                                    children: [{
                                        tag: t.icon.tag,
                                        children: t.icon.children,
                                        attributes: ut(ut({}, t.icon.attributes), u.path)
                                    }]
                                }]
                            }
                        }
                    }
                },
                ba = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

            function ya(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
            }
            var wa = {
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (e, t) {
                                var n = t.getAttribute("data-fa-mask"),
                                    r = n ? lr(n.split(" ").map((function (e) {
                                        return e.trim()
                                    }))) : {
                                        prefix: null,
                                        iconName: null,
                                        rest: []
                                    };
                                return r.prefix || (r.prefix = or()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e
                            }
                        }
                    },
                    provides: function (e) {
                        e.generateAbstractMask = function (e) {
                            var t, n = e.children,
                                r = e.attributes,
                                a = e.main,
                                o = e.mask,
                                i = e.maskId,
                                s = e.transform,
                                l = a.width,
                                u = a.icon,
                                c = o.width,
                                f = o.icon,
                                d = function (e) {
                                    var t = e.transform,
                                        n = e.containerWidth,
                                        r = e.iconWidth,
                                        a = {
                                            transform: "translate(".concat(n / 2, " 256)")
                                        },
                                        o = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                                        i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
                                        s = "rotate(".concat(t.rotate, " 0 0)");
                                    return {
                                        outer: a,
                                        inner: {
                                            transform: "".concat(o, " ").concat(i, " ").concat(s)
                                        },
                                        path: {
                                            transform: "translate(".concat(r / 2 * -1, " -256)")
                                        }
                                    }
                                }({
                                    transform: s,
                                    containerWidth: c,
                                    iconWidth: l
                                }),
                                p = {
                                    tag: "rect",
                                    attributes: ut(ut({}, ba), {}, {
                                        fill: "white"
                                    })
                                },
                                h = u.children ? {
                                    children: u.children.map(ya)
                                } : {},
                                m = {
                                    tag: "g",
                                    attributes: ut({}, d.inner),
                                    children: [ya(ut({
                                        tag: u.tag,
                                        attributes: ut(ut({}, u.attributes), d.path)
                                    }, h))]
                                },
                                v = {
                                    tag: "g",
                                    attributes: ut({}, d.outer),
                                    children: [m]
                                },
                                g = "mask-".concat(i || yn()),
                                b = "clip-".concat(i || yn()),
                                y = {
                                    tag: "mask",
                                    attributes: ut(ut({}, ba), {}, {
                                        id: g,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [p, v]
                                },
                                w = {
                                    tag: "defs",
                                    children: [{
                                        tag: "clipPath",
                                        attributes: {
                                            id: b
                                        },
                                        children: (t = f, "g" === t.tag ? t.children : [t])
                                    }, y]
                                };
                            return n.push(w, {
                                tag: "rect",
                                attributes: ut({
                                    fill: "currentColor",
                                    "clip-path": "url(#".concat(b, ")"),
                                    mask: "url(#".concat(g, ")")
                                }, ba)
                            }), {
                                children: n,
                                attributes: r
                            }
                        }
                    }
                },
                xa = {
                    provides: function (e) {
                        var t = !1;
                        _t.matchMedia && (t = _t.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function () {
                            var e = [],
                                n = {
                                    fill: "currentColor"
                                },
                                r = {
                                    attributeType: "XML",
                                    repeatCount: "indefinite",
                                    dur: "2s"
                                };
                            e.push({
                                tag: "path",
                                attributes: ut(ut({}, n), {}, {
                                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                                })
                            });
                            var a = ut(ut({}, r), {}, {
                                    attributeName: "opacity"
                                }),
                                o = {
                                    tag: "circle",
                                    attributes: ut(ut({}, n), {}, {
                                        cx: "256",
                                        cy: "364",
                                        r: "28"
                                    }),
                                    children: []
                                };
                            return t || o.children.push({
                                tag: "animate",
                                attributes: ut(ut({}, r), {}, {
                                    attributeName: "r",
                                    values: "28;14;28;28;14;28;"
                                })
                            }, {
                                tag: "animate",
                                attributes: ut(ut({}, a), {}, {
                                    values: "1;0;1;1;0;1;"
                                })
                            }), e.push(o), e.push({
                                tag: "path",
                                attributes: ut(ut({}, n), {}, {
                                    opacity: "1",
                                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                                }),
                                children: t ? [] : [{
                                    tag: "animate",
                                    attributes: ut(ut({}, a), {}, {
                                        values: "1;0;0;0;0;1;"
                                    })
                                }]
                            }), t || e.push({
                                tag: "path",
                                attributes: ut(ut({}, n), {}, {
                                    opacity: "0",
                                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                                }),
                                children: [{
                                    tag: "animate",
                                    attributes: ut(ut({}, a), {}, {
                                        values: "0;0;1;1;0;0;"
                                    })
                                }]
                            }), {
                                tag: "g",
                                attributes: {
                                    class: "missing"
                                },
                                children: e
                            }
                        }
                    }
                };
            ! function (e, t) {
                var n = t.mixoutsTo;
                cr = e, fr = {}, Object.keys(dr).forEach((function (e) {
                    -1 === pr.indexOf(e) && delete dr[e]
                })), cr.forEach((function (e) {
                    var t = e.mixout ? e.mixout() : {};
                    if (Object.keys(t).forEach((function (e) {
                            "function" === typeof t[e] && (n[e] = t[e]), "object" === ct(t[e]) && Object.keys(t[e]).forEach((function (r) {
                                n[e] || (n[e] = {}), n[e][r] = t[e][r]
                            }))
                        })), e.hooks) {
                        var r = e.hooks();
                        Object.keys(r).forEach((function (e) {
                            fr[e] || (fr[e] = []), fr[e].push(r[e])
                        }))
                    }
                    e.provides && e.provides(dr)
                }))
            }([Cn, oa, ia, sa, la, {
                hooks: function () {
                    return {
                        mutationObserverCallbacks: function (e) {
                            return e.pseudoElementsCallback = ha, e
                        }
                    }
                },
                provides: function (e) {
                    e.pseudoElements2svg = function (e) {
                        var t = e.node,
                            n = void 0 === t ? Nt : t;
                        mn.searchPseudoElements && ha(n)
                    }
                }
            }, {
                mixout: function () {
                    return {
                        dom: {
                            unwatch: function () {
                                Vr(), ma = !0
                            }
                        }
                    }
                },
                hooks: function () {
                    return {
                        bootstrap: function () {
                            Qr(hr("mutationObserverCallbacks", {}))
                        },
                        noAuto: function () {
                            Yr && Yr.disconnect()
                        },
                        watch: function (e) {
                            var t = e.observeMutationsRoot;
                            ma ? $r() : Qr(hr("mutationObserverCallbacks", {
                                observeMutationsRoot: t
                            }))
                        }
                    }
                }
            }, ga, wa, xa, {
                hooks: function () {
                    return {
                        parseNodeAttributes: function (e, t) {
                            var n = t.getAttribute("data-fa-symbol"),
                                r = null !== n && ("" === n || n);
                            return e.symbol = r, e
                        }
                    }
                }
            }], {
                mixoutsTo: xr
            });
            var ka = xr.parse,
                Sa = xr.icon,
                Ea = n(2007),
                Oa = n.n(Ea);

            function ja(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ja(Object(n), !0).forEach((function (t) {
                        _a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Ca(e) {
                return Ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Ca(e)
            }

            function _a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Na(e, t) {
                if (null == e) return {};
                var n, r, a = function (e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function Aa(e) {
                return function (e) {
                    if (Array.isArray(e)) return Ta(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Ta(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ta(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ta(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function La(e) {
                return t = e, (t -= 0) === t ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function (e, t) {
                    return t ? t.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1);
                var t
            }
            var Ra = ["style"];

            function Fa(e) {
                return e.split(";").map((function (e) {
                    return e.trim()
                })).filter((function (e) {
                    return e
                })).reduce((function (e, t) {
                    var n, r = t.indexOf(":"),
                        a = La(t.slice(0, r)),
                        o = t.slice(r + 1).trim();
                    return a.startsWith("webkit") ? e[(n = a, n.charAt(0).toUpperCase() + n.slice(1))] = o : e[a] = o, e
                }), {})
            }
            var Ma = !1;
            try {
                Ma = !0
            } catch (to) {}

            function za(e) {
                return e && "object" === Ca(e) && e.prefix && e.iconName && e.icon ? e : ka.icon ? ka.icon(e) : null === e ? null : e && "object" === Ca(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" === typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function Ia(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _a({}, e, t) : {}
            }
            var Da = t.forwardRef((function (e, t) {
                var n = e.icon,
                    r = e.mask,
                    a = e.symbol,
                    o = e.className,
                    i = e.title,
                    s = e.titleId,
                    l = e.maskId,
                    u = za(n),
                    c = Ia("classes", [].concat(Aa(function (e) {
                        var t, n = e.beat,
                            r = e.fade,
                            a = e.beatFade,
                            o = e.bounce,
                            i = e.shake,
                            s = e.flash,
                            l = e.spin,
                            u = e.spinPulse,
                            c = e.spinReverse,
                            f = e.pulse,
                            d = e.fixedWidth,
                            p = e.inverse,
                            h = e.border,
                            m = e.listItem,
                            v = e.flip,
                            g = e.size,
                            b = e.rotation,
                            y = e.pull,
                            w = (_a(t = {
                                "fa-beat": n,
                                "fa-fade": r,
                                "fa-beat-fade": a,
                                "fa-bounce": o,
                                "fa-shake": i,
                                "fa-flash": s,
                                "fa-spin": l,
                                "fa-spin-reverse": c,
                                "fa-spin-pulse": u,
                                "fa-pulse": f,
                                "fa-fw": d,
                                "fa-inverse": p,
                                "fa-border": h,
                                "fa-li": m,
                                "fa-flip": !0 === v,
                                "fa-flip-horizontal": "horizontal" === v || "both" === v,
                                "fa-flip-vertical": "vertical" === v || "both" === v
                            }, "fa-".concat(g), "undefined" !== typeof g && null !== g), _a(t, "fa-rotate-".concat(b), "undefined" !== typeof b && null !== b && 0 !== b), _a(t, "fa-pull-".concat(y), "undefined" !== typeof y && null !== y), _a(t, "fa-swap-opacity", e.swapOpacity), t);
                        return Object.keys(w).map((function (e) {
                            return w[e] ? e : null
                        })).filter((function (e) {
                            return e
                        }))
                    }(e)), Aa(o.split(" ")))),
                    f = Ia("transform", "string" === typeof e.transform ? ka.transform(e.transform) : e.transform),
                    d = Ia("mask", za(r)),
                    p = Sa(u, Pa(Pa(Pa(Pa({}, c), f), d), {}, {
                        symbol: a,
                        title: i,
                        titleId: s,
                        maskId: l
                    }));
                if (!p) return function () {
                    var e;
                    !Ma && console && "function" === typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", u), null;
                var h = p.abstract,
                    m = {
                        ref: t
                    };
                return Object.keys(e).forEach((function (t) {
                    Da.defaultProps.hasOwnProperty(t) || (m[t] = e[t])
                })), Ua(h[0], m)
            }));
            Da.displayName = "FontAwesomeIcon", Da.propTypes = {
                beat: Oa().bool,
                border: Oa().bool,
                beatFade: Oa().bool,
                bounce: Oa().bool,
                className: Oa().string,
                fade: Oa().bool,
                flash: Oa().bool,
                mask: Oa().oneOfType([Oa().object, Oa().array, Oa().string]),
                maskId: Oa().string,
                fixedWidth: Oa().bool,
                inverse: Oa().bool,
                flip: Oa().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: Oa().oneOfType([Oa().object, Oa().array, Oa().string]),
                listItem: Oa().bool,
                pull: Oa().oneOf(["right", "left"]),
                pulse: Oa().bool,
                rotation: Oa().oneOf([0, 90, 180, 270]),
                shake: Oa().bool,
                size: Oa().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: Oa().bool,
                spinPulse: Oa().bool,
                spinReverse: Oa().bool,
                symbol: Oa().oneOfType([Oa().bool, Oa().string]),
                title: Oa().string,
                titleId: Oa().string,
                transform: Oa().oneOfType([Oa().string, Oa().object]),
                swapOpacity: Oa().bool
            }, Da.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                maskId: null,
                fixedWidth: !1,
                inverse: !1,
                flip: !1,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                spinPulse: !1,
                spinReverse: !1,
                beat: !1,
                fade: !1,
                beatFade: !1,
                bounce: !1,
                shake: !1,
                symbol: !1,
                title: "",
                titleId: null,
                transform: null,
                swapOpacity: !1
            };
            var Ua = function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if ("string" === typeof n) return n;
                    var a = (n.children || []).map((function (n) {
                            return e(t, n)
                        })),
                        o = Object.keys(n.attributes || {}).reduce((function (e, t) {
                            var r = n.attributes[t];
                            switch (t) {
                                case "class":
                                    e.attrs.className = r, delete n.attributes.class;
                                    break;
                                case "style":
                                    e.attrs.style = Fa(r);
                                    break;
                                default:
                                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[La(t)] = r
                            }
                            return e
                        }), {
                            attrs: {}
                        }),
                        i = r.style,
                        s = void 0 === i ? {} : i,
                        l = Na(r, Ra);
                    return o.attrs.style = Pa(Pa({}, o.attrs.style), s), t.apply(void 0, [n.tag, Pa(Pa({}, o.attrs), l)].concat(Aa(a)))
                }.bind(null, t.createElement),
                Ba = {
                    prefix: "fas",
                    iconName: "download",
                    icon: [512, 512, [], "f019", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"]
                },
                Ha = {
                    prefix: "fas",
                    iconName: "xmark",
                    icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
                },
                Wa = Ha,
                qa = function (e) {
                    var n = e.onClose,
                        r = e.visible,
                        a = e.url,
                        o = e.prompt,
                        i = s((0, t.useState)(!1), 2),
                        l = i[0],
                        u = i[1];
                    if ((0, t.useEffect)((function () {
                            var e = window.matchMedia("(max-width: 600px)");
                            u(e.matches);
                            var t = function (e) {
                                return u(e.matches)
                            };
                            return e.addEventListener("change", t),
                                function () {
                                    return e.removeEventListener("change", t)
                                }
                        }), []), !r) return null;
                    var c = function () {
                        (0, st.saveAs)(a, o)
                    };
                    return (0, rt.jsx)(rt.Fragment, {
                        children: (0, rt.jsxs)("div", {
                            className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center",
                            children: [!l && (0, rt.jsxs)("div", {
                                className: "absolute right-0 top-12 flex flex-col mr-80",
                                children: [(0, rt.jsx)("button", {
                                    type: "button",
                                    className: "text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 border-2 border-black",
                                    style: {
                                        boxShadow: "0.2rem 0.2rem 0 #222"
                                    },
                                    onClick: c,
                                    children: (0, rt.jsx)(Da, {
                                        icon: Ba
                                    })
                                }), (0, rt.jsx)("button", {
                                    onClick: n,
                                    type: "button",
                                    className: "focus:ring-4 focus:outline-none rounded-md text-sm font-medium px-5 py-2.5 focus:z-10 bg-red-600 text-white hover:bg-red-700 focus:ring-red-700 border-2 border-black",
                                    style: {
                                        boxShadow: "0.2rem 0.2rem 0 #222"
                                    },
                                    children: (0, rt.jsx)(Da, {
                                        icon: Wa
                                    })
                                })]
                            }), l && (0, rt.jsxs)("div", {
                                className: "absolute bottom-20 md:bottom-40 space-x-2 rounded-b dark:border-gray-600",
                                children: [(0, rt.jsx)("button", {
                                    type: "button",
                                    className: "text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 border-2 border-black",
                                    style: {
                                        boxShadow: "0.2rem 0.2rem 0 #000"
                                    },
                                    onClick: c,
                                    children: (0, rt.jsx)(Da, {
                                        icon: Ba
                                    })
                                }), (0, rt.jsx)("button", {
                                    onClick: n,
                                    type: "button",
                                    className: "focus:ring-4 focus:outline-none rounded-md text-sm font-medium px-5 py-2.5 focus:z-10 bg-red-600 text-white hover:bg-red-700 focus:ring-red-700 border-2 border-black",
                                    style: {
                                        boxShadow: "0.2rem 0.2rem 0 #000"
                                    },
                                    children: (0, rt.jsx)(Da, {
                                        icon: Wa
                                    })
                                })]
                            }), (0, rt.jsx)("img", {
                                className: "max-w-lg rounded-lg w-11/12 md:w-full border-2 border-black",
                                src: a,
                                style: {
                                    boxShadow: "0.4rem 0.4rem 0 #222"
                                }
                            })]
                        })
                    })
                },
                Va = function () {
                    var e = s((0, t.useState)(""), 2),
                        n = e[0],
                        r = e[1],
                        a = s((0, t.useState)(!1), 2),
                        o = a[0],
                        i = a[1],
                        u = s((0, t.useState)([]), 2),
                        c = u[0],
                        f = u[1],
                        d = s((0, t.useState)(!1), 2),
                        p = d[0],
                        h = d[1],
                        m = s((0, t.useState)(null), 2),
                        v = m[0],
                        g = m[1],
                        b = function () {
                            return h(!1)
                        },
                        y = new at.Configuration({
                            apiKey: "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"
                        }),
                        w = new at.OpenAIApi(y),
                        x = function () {
                            var e = We(Be().mark((function e() {
                                var t, a;
                                return Be().wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = [].concat(l(c), [{
                                                user: "me",
                                                message: n
                                            }]), f(t), r(""), i(!0), window.document.body.scrollIntoView({
                                                behavior: "smooth",
                                                block: "end"
                                            }), e.next = 7, w.createImage({
                                                prompt: n,
                                                n: 1,
                                                size: "1024x1024"
                                            });
                                        case 7:
                                            a = e.sent, i(!1), f([].concat(l(t), [{
                                                user: "dall-e",
                                                message: a.data.data
                                            }]));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, rt.jsx)(rt.Fragment, {
                        children: (0, rt.jsxs)("div", {
                            className: "min-h-screen flex flex-col justify-start",
                            children: [(0, rt.jsxs)("div", {
                                className: "",
                                children: [c.map((function (e, r) {
                                    return (0, rt.jsxs)(rt.Fragment, {
                                        children: ["me" === e.user && (0, rt.jsxs)("div", {
                                            className: "flex p-5 rounded-lg mt-5 mb-5 bg-blue-300 border-2 border-black",
                                            style: {
                                                boxShadow: "0.4rem 0.4rem 0 #222"
                                            },
                                            children: [(0, rt.jsx)("img", {
                                                src: "avatar2.png",
                                                className: "w-8 h-6 mr-2 -ml-1",
                                                alt: "user"
                                            }), (0, rt.jsx)("div", {
                                                children: (0, rt.jsx)("span", {
                                                    className: "text-black",
                                                    children: e.message
                                                })
                                            })]
                                        }, r), "dall-e" === e.user && (0, rt.jsxs)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-5 gap-4 mb-5",
                                            children: [e.message.map((function (e, n) {
                                                return (0, rt.jsx)(t.Fragment, {
                                                    children: (0, rt.jsx)("button", {
                                                        onClick: function () {
                                                            h(!0), g(e.url)
                                                        },
                                                        children: (0, rt.jsx)("img", {
                                                            className: "max-w-lg rounded-sm w-full h-48 md:hover:h-44 border-2 border-black",
                                                            style: {
                                                                boxShadow: "0.4rem 0.4rem 0 #222"
                                                            },
                                                            src: e.url,
                                                            alt: "".concat(n)
                                                        })
                                                    })
                                                }, n)
                                            })), (0, rt.jsx)(qa, {
                                                onClose: b,
                                                visible: p,
                                                url: v,
                                                name: n
                                            })]
                                        })]
                                    })
                                })), o && (0, rt.jsx)("div", {
                                    className: "relative",
                                    children: (0, rt.jsxs)("div", {
                                        className: "flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black",
                                        style: {
                                            boxShadow: "0.4rem 0.4rem 0 #222"
                                        },
                                        children: [(0, rt.jsx)("img", {
                                            src: "openai-dark.png",
                                            className: "w-6 h-6 mr-3 rounded-lg",
                                            alt: "gpt"
                                        }), (0, rt.jsx)("div", {
                                            className: "col-3",
                                            children: (0, rt.jsx)("div", {
                                                className: "snippet",
                                                "data-title": "dot-pulse",
                                                children: (0, rt.jsx)("div", {
                                                    className: "stage",
                                                    children: (0, rt.jsx)("div", {
                                                        className: "dot-pulse"
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), !p && (0, rt.jsxs)("div", {
                                className: "mt-auto flex flex-col sticky bottom-5 justify-start align-start",
                                children: [(0, rt.jsxs)("div", {
                                    className: "mb-2 text-gray-600 text-xs md:text-sm",
                                    children: ["Start with a detailed description", (0, rt.jsx)("button", {
                                        className: "ml-1 border-2 border-black px-2.5 py-1 rounded-md text-black bg-green-400 hover:bg-green-500 text-xs",
                                        style: {
                                            boxShadow: "0.2rem 0.2rem 0 #222"
                                        },
                                        onClick: function () {
                                            var e = ["3D render of a cute tropical fish in an aquarium on a dark blue background, digital art", "synthwave sports car", "a stained glass window depicting a robot", "an oil painting by Matisse of a humanoid robot playing chess", "a painting of a fox in the style of Starry Night", "teddy bears shopping for groceries in Japan, ukiyo-e", "an expressive oil painting of a basketball player dunking, depicted as an explosion of a nebula", "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art", "a surrealist dream-like oil painting by Salvador Dal\xed of a cat playing checkers", "panda mad scientist mixing sparkling chemicals, digital art", "crayon drawing of several cute colorful monsters with ice cream cone bodies on dark blue paper", "3D render of a small pink balloon dog in a light pink room", "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background", "a cat submarine chimera, digital art", "a bowl of soup that is also a portal to another dimension, digital art", "photograph of an astronaut riding a horse", "a pencil and watercolor drawing of a bright city in the future with flying cars", "a stained glass window depicting a hamburger and french fries", "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art", "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background", "An astronaut riding a horse in a photorealistic style", "Teddy bears mixing sparkling chemicals as mad scientists as a 1990s Saturday morning cartoon", "A bowl of soup that is a portal to another dimension as digital art", "Teddy bears shopping for groceries in the style of ukiyo-e", "An astronaut lounging in a tropical resort in space in a in a vaporwave style", "An astronaut playing basketball with cats in space as a children's book illustration"],
                                                t = Math.floor(Math.random() * e.length);
                                            r(e[t])
                                        },
                                        children: "Surprise me"
                                    })]
                                }), (0, rt.jsx)("div", {
                                    className: "flex absolute bottom-0 right-0 md:pb-2.5 px-4 py-2.5 rounded-tr-md rounded-br-md ".concat(n && "bg-black text-white px-4 py-2.5"),
                                    children: (0, rt.jsx)("button", {
                                        className: "".concat(!n && "cursor-not-allowed"),
                                        type: "submit",
                                        onClick: x,
                                        children: "Generate"
                                    })
                                }), (0, rt.jsx)(nt, {
                                    className: "w-full border-2 border-black rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none",
                                    placeholder: "Enter your message here",
                                    style: {
                                        boxShadow: "0.8rem 0.8rem 0 #222"
                                    },
                                    maxRows: 1,
                                    value: n,
                                    onChange: function (e) {
                                        return r(e.target.value)
                                    }
                                })]
                            })]
                        })
                    })
                },
                $a = function (e) {
                    return (0, rt.jsxs)(t.Fragment, {
                        children: [(0, rt.jsxs)("div", {
                            className: "mt-2 text-center",
                            children: [(0, rt.jsxs)("h1", {
                                className: "font-medium text-sm md:text-xl underline underline-offset-8 text-black",
                                children: ["OpenAI - ", e.title]
                            }), (0, rt.jsx)("p", {
                                className: "text-xs md:text-base mt-3 text-black",
                                children: e.description
                            })]
                        }), (0, rt.jsx)(Va, {})]
                    })
                },
                Ya = function (e) {
                    var n = e.children;
                    return (0, rt.jsx)(t.Fragment, {
                        children: n
                    })
                },
                Qa = function () {
                    var e = s((0, t.useState)(!1), 2),
                        n = (e[0], e[1]),
                        r = s((0, t.useState)(null), 2),
                        a = (r[0], r[1]),
                        o = s((0, t.useState)(!0), 2);
                    o[0], o[1];
                    (0, t.useEffect)((function () {
                        var e = window.matchMedia("(max-width: 600px)");
                        a(!e.matches);
                        var t = function (e) {
                            return n(e.matches)
                        };
                        return e.addEventListener("change", t),
                            function () {
                                return e.removeEventListener("change", t)
                            }
                    }), [])
                },
                Ka = function () {
                    return (0, rt.jsx)("a", {
                        href: "https://github.com/",
                        className: "github-corner",
                        tabIndex: "-1",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, rt.jsxs)("svg", {
                            width: "80",
                            height: "80",
                            viewBox: "0 0 250 250",
                            style: {
                                position: "absolute",
                                top: 0,
                                right: 0,
                                border: 0,
                                fill: "#1A1C1E",
                                color: "#fff"
                            },
                            children: [(0, rt.jsx)("path", {
                                d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
                            }), (0, rt.jsx)("path", {
                                d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                                fill: "currentColor",
                                style: {
                                    transformOrigin: "130px 106px"
                                },
                                className: "octo-arm"
                            }), (0, rt.jsx)("path", {
                                d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                                fill: "currentColor",
                                className: "octo-body"
                            })]
                        })
                    })
                },
                Ga = function (e) {
                    return (0, rt.jsxs)("div", {
                        className: "mt-10 md:pr-24 md:pl-24",
                        children: [(0, rt.jsx)("h1", {
                            className: "font-medium text-2xl md:text-7xl text-dark",
                            children: e.title
                        }), (0, rt.jsx)("p", {
                            className: "text-xs md:text-base text-gray-600 pt-3",
                            children: e.description
                        }), (0, rt.jsx)(Ie, {
                            to: "/chatgpt",
                            children: (0, rt.jsx)("button", {
                                type: "button",
                                className: "mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-dark",
                                style: {
                                    boxShadow: "0.4rem 0.4rem 0 #222"
                                },
                                children: "Talk To Gojo"
                            })
                        })]
                    })
                },
                Xa = function () {
                    return (0, rt.jsx)(rt.Fragment, {
                        children: (0, rt.jsx)("div", {
                            className: "p-2 mt-2",
                            children: [{
                                question: "What can this website do?",
                                li: !1,
                                answer: "This website allows us to communicate with AI created by the OpenAI organization",
                                color: "#D0E2DB"
                            }, {
                                question: "What can AI do on this website?",
                                li: !0,
                                answer: [{
                                    list_answer: "ChatGPT - Interacts with AI in a conversational way."
                                }, {
                                    list_answer: "Dall\xb7E 2 - Create original, realistic images and art from a text description"
                                }],
                                color: "#8BD3DD"
                            }, {
                                question: "What technology is used on this website?",
                                li: !1,
                                answer: "This website is built using ReactJS, Tailwind CSS, OpenAI API",
                                color: "#FAAE2B"
                            }, {
                                question: "How to Get API Key?",
                                answer: "You must first register on the openai website, then click the profile menu and select View API keys",
                                color: "#FE98A3"
                            }].map((function (e, t) {
                                return (0, rt.jsxs)("div", {
                                    className: "mb-5 mt-5",
                                    children: [(0, rt.jsx)("div", {
                                        className: "border-2 border-black px-3 py-2 rounded-lg",
                                        style: {
                                            boxShadow: "0.4rem 0.4rem 0 #222",
                                            backgroundColor: e.color
                                        },
                                        children: (0, rt.jsx)("h1", {
                                            className: "text-black text-base md:text-2xl",
                                            children: e.question
                                        })
                                    }), (0, rt.jsx)("div", {
                                        className: "mt-3 text-gray-600 text-xs md:text-base",
                                        children: e.li ? (0, rt.jsx)(rt.Fragment, {
                                            children: (0, rt.jsx)("ul", {
                                                style: {
                                                    listStyleType: "circle"
                                                },
                                                children: e.answer.map((function (e, t) {
                                                    return (0, rt.jsx)("li", {
                                                        children: e.list_answer
                                                    }, t)
                                                }))
                                            })
                                        }) : (0, rt.jsx)(rt.Fragment, {
                                            children: (0, rt.jsx)("span", {
                                                children: e.answer
                                            })
                                        })
                                    })]
                                }, t)
                            }))
                        })
                    })
                },
                Ja = function () {
                    return (0, rt.jsx)(rt.Fragment, {
                        children: (0, rt.jsx)("div", {
                            className: "p-2 mt-2",
                            children: [{
                                name: "ChatGPT",
                                source: "https://user-images.githubusercontent.com/64394320/210139372-824284d8-6170-4308-95f2-02d0f272fa67.mp4",
                                color: "#FAAE2B"
                            }, {
                                name: "Dall\xb7E 2",
                                source: "https://user-images.githubusercontent.com/64394320/210139754-bf37f019-1dac-49ae-9f9f-56b2e618c575.mp4",
                                color: "#FE98A3"
                            }].map((function (e, t) {
                                return (0, rt.jsx)(rt.Fragment, {
                                    children: (0, rt.jsx)("div", {
                                        className: "mb-5 mt-5",
                                        children: (0, rt.jsx)("div", {
                                            className: "border-2 border-black px-3 py-2 rounded-lg",
                                            style: {
                                                boxShadow: "0.4rem 0.4rem 0 #222",
                                                backgroundColor: e.color
                                            },
                                            children: (0, rt.jsxs)("div", {
                                                className: "window",
                                                children: [(0, rt.jsxs)("div", {
                                                    class: "titlebar",
                                                    children: [(0, rt.jsxs)("div", {
                                                        class: "buttons",
                                                        children: [(0, rt.jsx)("div", {
                                                            class: "close w-2.5 h-2.5 md:w-3.5 md:h-3.5"
                                                        }), (0, rt.jsx)("div", {
                                                            class: "minimize w-2.5 h-2.5 md:w-3.5 md:h-3.5"
                                                        }), (0, rt.jsx)("div", {
                                                            class: "zoom w-2.5 h-2.5 md:w-3.5 md:h-3.5"
                                                        })]
                                                    }), (0, rt.jsx)("span", {
                                                        className: "text-xs md:text-base",
                                                        children: e.name
                                                    })]
                                                }), (0, rt.jsx)("div", {
                                                    className: "content mt-2",
                                                    children: (0, rt.jsxs)("video", {
                                                        className: "w-full max-w-full h-auto",
                                                        controls: !0,
                                                        children: [(0, rt.jsx)("source", {
                                                            src: e.source,
                                                            type: "video/mp4"
                                                        }), "Your browser does not support the video tag."]
                                                    })
                                                })]
                                            })
                                        })
                                    }, t)
                                })
                            }))
                        })
                    })
                },
                Za = function () {
                    return (0, rt.jsx)(Ya, {
                        children: (0, rt.jsxs)(Me, {
                            children: [(0, rt.jsx)(Ka, {}), (0, rt.jsxs)("div", {
                                className: "flex",
                                children: [(0, rt.jsx)(Qa, {}), (0, rt.jsx)("main", {
                                    className: "p-7 flex-1",
                                    children: (0, rt.jsxs)(_e, {
                                        children: [(0, rt.jsx)(Pe, {
                                            path: "/",
                                            element: (0, rt.jsx)(Ga, {
                                                title: "Let's have a chat inside my Domain.",
                                                description: "Jujutsu Kaisen is an Artificial intelligence Where you can chat with Gojo Satoru."
                                            })
                                        }), (0, rt.jsx)(Pe, {
                                            path: "/chatgpt",
                                            element: (0, rt.jsx)(it, {
                                                title: "",
                                                description: "Domain Expansion - Unlimited Void"
                                            })
                                        }), (0, rt.jsx)(Pe, {
                                            path: "/dall-e",
                                            element: (0, rt.jsx)($a, {
                                                title: "Dall\xb7E 2",
                                                description: "Create original, realistic images and art from a text description"
                                            })
                                        }), (0, rt.jsx)(Pe, {
                                            path: "/question",
                                            element: (0, rt.jsx)(Xa, {})
                                        }), (0, rt.jsx)(Pe, {
                                            path: "/demo",
                                            element: (0, rt.jsx)(Ja, {})
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                eo = function (e) {
                    e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function (t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            a = t.getFCP,
                            o = t.getLCP,
                            i = t.getTTFB;
                        n(e), r(e), a(e), o(e), i(e)
                    }))
                };
            a.createRoot(document.getElementById("root")).render((0, rt.jsx)(t.StrictMode, {
                children: (0, rt.jsx)(Za, {})
            })), eo()
        }()
}();
//# sourceMappingURL=main.312a6539.js.map