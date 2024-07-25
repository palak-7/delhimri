/*----------------------------------------------
    Index Of All Plugin Hera
------------------------------------------------

    @version         : 1.0.0
    @Template Name   : Charitfix
    @Template author : initTheme

  :: wow                      :: Slick nav [ Mobile menu ]
  :: Select-2                 :: Nicescroll 
  :: Tilt.js                  :: 

----------------------------------------------------
    End-of Plugin
----------------------------------------------------*/

/*-----------------------------------
    WOW
-----------------------------------*/
!function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}.call(this);

/*-----------------------------------
    Slick nav [ Mobile menu ]
-----------------------------------*/
!(function (e, t, n) {
  function a(t, n) {
    (this.element = t),
      (this.settings = e.extend({}, i, n)),
      this.settings.duplicate ||
        n.hasOwnProperty("removeIds") ||
        (this.settings.removeIds = !1),
      (this._defaults = i),
      (this._name = s),
      this.init();
  }
  var i = {
      label: "MENU",
      duplicate: !0,
      duration: 200,
      easingOpen: "swing",
      easingClose: "swing",
      closedSymbol: "&#9658;",
      openedSymbol: "&#9660;",
      prependTo: "body",
      appendTo: "",
      parentTag: "a",
      closeOnClick: !1,
      allowParentLinks: !1,
      nestedParentLinks: !0,
      showChildren: !1,
      removeIds: !0,
      removeClasses: !1,
      removeStyles: !1,
      brand: "",
      animations: "jquery",
      init: function () {},
      beforeOpen: function () {},
      beforeClose: function () {},
      afterOpen: function () {},
      afterClose: function () {},
    },
    s = "slicknav",
    o = "slicknav",
    l = {
      DOWN: 40,
      ENTER: 13,
      ESCAPE: 27,
      LEFT: 37,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    };
  (a.prototype.init = function () {
    var n,
      a,
      i = this,
      s = e(this.element),
      r = this.settings;
    if (
      (r.duplicate ? (i.mobileNav = s.clone()) : (i.mobileNav = s),
      r.removeIds &&
        (i.mobileNav.removeAttr("id"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("id");
        })),
      r.removeClasses &&
        (i.mobileNav.removeAttr("class"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("class");
        })),
      r.removeStyles &&
        (i.mobileNav.removeAttr("style"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("style");
        })),
      (n = o + "_icon"),
      "" === r.label && (n += " " + o + "_no-text"),
      "a" == r.parentTag && (r.parentTag = 'a href="javascript:void(0)"'),
      i.mobileNav.attr("class", o + "_nav"),
      (a = e('<div class="' + o + '_menu"></div>')),
      "" !== r.brand)
    ) {
      var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
      e(a).append(c);
    }
    (i.btn = e(
      [
        "<" +
          r.parentTag +
          ' aria-haspopup="true" role="button" tabindex="0" class="' +
          o +
          "_btn " +
          o +
          '_collapsed">',
        '<span class="' + o + '_menutxt">' + r.label + "</span>",
        '<span class="' + n + '">',
        '<span class="' + o + '_icon-bar"></span>',
        '<span class="' + o + '_icon-bar"></span>',
        '<span class="' + o + '_icon-bar"></span>',
        "</span>",
        "</" + r.parentTag + ">",
      ].join("")
    )),
      e(a).append(i.btn),
      "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a),
      a.append(i.mobileNav);
    var p = i.mobileNav.find("li");
    e(p).each(function () {
      var t = e(this),
        n = {};
      if (
        ((n.children = t.children("ul").attr("role", "menu")),
        t.data("menu", n),
        n.children.length > 0)
      ) {
        var a = t.contents(),
          s = !1,
          l = [];
        e(a).each(function () {
          return e(this).is("ul")
            ? !1
            : (l.push(this), void (e(this).is("a") && (s = !0)));
        });
        var c = e(
          "<" +
            r.parentTag +
            ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
            o +
            '_item"/>'
        );
        if (r.allowParentLinks && !r.nestedParentLinks && s)
          e(l)
            .wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>')
            .parent();
        else {
          var p = e(l).wrapAll(c).parent();
          p.addClass(o + "_row");
        }
        r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"),
          t.addClass(o + "_parent");
        var d = e(
          '<span class="' +
            o +
            '_arrow">' +
            (r.showChildren ? r.openedSymbol : r.closedSymbol) +
            "</span>"
        );
        r.allowParentLinks &&
          !r.nestedParentLinks &&
          s &&
          (d = d.wrap(c).parent()),
          e(l).last().after(d);
      } else 0 === t.children().length && t.addClass(o + "_txtnode");
      t
        .children("a")
        .attr("role", "menuitem")
        .click(function (t) {
          r.closeOnClick &&
            !e(t.target)
              .parent()
              .closest("li")
              .hasClass(o + "_parent") &&
            e(i.btn).click();
        }),
        r.closeOnClick &&
          r.allowParentLinks &&
          (t
            .children("a")
            .children("a")
            .click(function (t) {
              e(i.btn).click();
            }),
          t
            .find("." + o + "_parent-link a:not(." + o + "_item)")
            .click(function (t) {
              e(i.btn).click();
            }));
    }),
      e(p).each(function () {
        var t = e(this).data("menu");
        r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
      }),
      i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
      i.mobileNav.attr("role", "menu"),
      e(t).mousedown(function () {
        i._outlines(!1);
      }),
      e(t).keyup(function () {
        i._outlines(!0);
      }),
      e(i.btn).click(function (e) {
        e.preventDefault(), i._menuToggle();
      }),
      i.mobileNav.on("click", "." + o + "_item", function (t) {
        t.preventDefault(), i._itemClick(e(this));
      }),
      e(i.btn).keydown(function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case l.ENTER:
          case l.SPACE:
          case l.DOWN:
            t.preventDefault(),
              (n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open")) ||
                i._menuToggle(),
              e(i.btn).next().find('[role="menuitem"]').first().focus();
        }
      }),
      i.mobileNav.on("keydown", "." + o + "_item", function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case l.ENTER:
            t.preventDefault(), i._itemClick(e(t.target));
            break;
          case l.RIGHT:
            t.preventDefault(),
              e(t.target)
                .parent()
                .hasClass(o + "_collapsed") && i._itemClick(e(t.target)),
              e(t.target).next().find('[role="menuitem"]').first().focus();
        }
      }),
      i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case l.DOWN:
            t.preventDefault();
            var a = e(t.target)
                .parent()
                .parent()
                .children()
                .children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              r = s + 1;
            a.length <= r && (r = 0);
            var c = a.eq(r);
            c.focus();
            break;
          case l.UP:
            t.preventDefault();
            var a = e(t.target)
                .parent()
                .parent()
                .children()
                .children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              c = a.eq(s - 1);
            c.focus();
            break;
          case l.LEFT:
            if (
              (t.preventDefault(),
              e(t.target)
                .parent()
                .parent()
                .parent()
                .hasClass(o + "_open"))
            ) {
              var p = e(t.target).parent().parent().prev();
              p.focus(), i._itemClick(p);
            } else
              e(t.target)
                .parent()
                .parent()
                .hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
            break;
          case l.ESCAPE:
            t.preventDefault(), i._menuToggle(), e(i.btn).focus();
        }
      }),
      r.allowParentLinks &&
        r.nestedParentLinks &&
        e("." + o + "_item a").click(function (e) {
          e.stopImmediatePropagation();
        });
  }),
    (a.prototype._menuToggle = function (e) {
      var t = this,
        n = t.btn,
        a = t.mobileNav;
      n.hasClass(o + "_collapsed")
        ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open"))
        : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")),
        n.addClass(o + "_animating"),
        t._visibilityToggle(a, n.parent(), !0, n);
    }),
    (a.prototype._itemClick = function (e) {
      var t = this,
        n = t.settings,
        a = e.data("menu");
      a ||
        ((a = {}),
        (a.arrow = e.children("." + o + "_arrow")),
        (a.ul = e.next("ul")),
        (a.parent = e.parent()),
        a.parent.hasClass(o + "_parent-link") &&
          ((a.parent = e.parent().parent()), (a.ul = e.parent().next("ul"))),
        e.data("menu", a)),
        a.parent.hasClass(o + "_collapsed")
          ? (a.arrow.html(n.openedSymbol),
            a.parent.removeClass(o + "_collapsed"),
            a.parent.addClass(o + "_open"),
            a.parent.addClass(o + "_animating"),
            t._visibilityToggle(a.ul, a.parent, !0, e))
          : (a.arrow.html(n.closedSymbol),
            a.parent.addClass(o + "_collapsed"),
            a.parent.removeClass(o + "_open"),
            a.parent.addClass(o + "_animating"),
            t._visibilityToggle(a.ul, a.parent, !0, e));
    }),
    (a.prototype._visibilityToggle = function (t, n, a, i, s) {
      function l(t, n) {
        e(t).removeClass(o + "_animating"),
          e(n).removeClass(o + "_animating"),
          s || p.afterOpen(t);
      }
      function r(n, a) {
        t.attr("aria-hidden", "true"),
          d.attr("tabindex", "-1"),
          c._setVisAttr(t, !0),
          t.hide(),
          e(n).removeClass(o + "_animating"),
          e(a).removeClass(o + "_animating"),
          s ? "init" == n && p.init() : p.afterClose(n);
      }
      var c = this,
        p = c.settings,
        d = c._getActionItems(t),
        u = 0;
      a && (u = p.duration),
        t.hasClass(o + "_hidden")
          ? (t.removeClass(o + "_hidden"),
            s || p.beforeOpen(i),
            "jquery" === p.animations
              ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
                  l(i, n);
                })
              : "velocity" === p.animations &&
                t.velocity("finish").velocity("slideDown", {
                  duration: u,
                  easing: p.easingOpen,
                  complete: function () {
                    l(i, n);
                  },
                }),
            t.attr("aria-hidden", "false"),
            d.attr("tabindex", "0"),
            c._setVisAttr(t, !1))
          : (t.addClass(o + "_hidden"),
            s || p.beforeClose(i),
            "jquery" === p.animations
              ? t
                  .stop(!0, !0)
                  .slideUp(u, this.settings.easingClose, function () {
                    r(i, n);
                  })
              : "velocity" === p.animations &&
                t.velocity("finish").velocity("slideUp", {
                  duration: u,
                  easing: p.easingClose,
                  complete: function () {
                    r(i, n);
                  },
                }));
    }),
    (a.prototype._setVisAttr = function (t, n) {
      var a = this,
        i = t
          .children("li")
          .children("ul")
          .not("." + o + "_hidden");
      n
        ? i.each(function () {
            var t = e(this);
            t.attr("aria-hidden", "true");
            var i = a._getActionItems(t);
            i.attr("tabindex", "-1"), a._setVisAttr(t, n);
          })
        : i.each(function () {
            var t = e(this);
            t.attr("aria-hidden", "false");
            var i = a._getActionItems(t);
            i.attr("tabindex", "0"), a._setVisAttr(t, n);
          });
    }),
    (a.prototype._getActionItems = function (e) {
      var t = e.data("menu");
      if (!t) {
        t = {};
        var n = e.children("li"),
          a = n.find("a");
        (t.links = a.add(n.find("." + o + "_item"))), e.data("menu", t);
      }
      return t.links;
    }),
    (a.prototype._outlines = function (t) {
      t
        ? e("." + o + "_item, ." + o + "_btn").css("outline", "")
        : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
    }),
    (a.prototype.toggle = function () {
      var e = this;
      e._menuToggle();
    }),
    (a.prototype.open = function () {
      var e = this;
      e.btn.hasClass(o + "_collapsed") && e._menuToggle();
    }),
    (a.prototype.close = function () {
      var e = this;
      e.btn.hasClass(o + "_open") && e._menuToggle();
    }),
    (e.fn[s] = function (t) {
      var n = arguments;
      if (void 0 === t || "object" == typeof t)
        return this.each(function () {
          e.data(this, "plugin_" + s) ||
            e.data(this, "plugin_" + s, new a(this, t));
        });
      if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
        var i;
        return (
          this.each(function () {
            var o = e.data(this, "plugin_" + s);
            o instanceof a &&
              "function" == typeof o[t] &&
              (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
          }),
          void 0 !== i ? i : this
        );
      }
    });
})(jQuery, document, window);

/*-----------------------------------
    Select  02 
-----------------------------------*/
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : jQuery);
})(function (a) {
  var b = (function () {
      if (a && a.fn && a.fn.select2 && a.fn.select2.amd)
        var b = a.fn.select2.amd;
      var b;
      return (
        (function () {
          if (!b || !b.requirejs) {
            b ? (c = b) : (b = {});
            var a, c, d;
            !(function (b) {
              function e(a, b) {
                return u.call(a, b);
              }
              function f(a, b) {
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n = b && b.split("/"),
                  o = s.map,
                  p = (o && o["*"]) || {};
                if (a && "." === a.charAt(0))
                  if (b) {
                    for (
                      a = a.split("/"),
                        g = a.length - 1,
                        s.nodeIdCompat &&
                          w.test(a[g]) &&
                          (a[g] = a[g].replace(w, "")),
                        a = n.slice(0, n.length - 1).concat(a),
                        k = 0;
                      k < a.length;
                      k += 1
                    )
                      if (((m = a[k]), "." === m)) a.splice(k, 1), (k -= 1);
                      else if (".." === m) {
                        if (1 === k && (".." === a[2] || ".." === a[0])) break;
                        k > 0 && (a.splice(k - 1, 2), (k -= 2));
                      }
                    a = a.join("/");
                  } else 0 === a.indexOf("./") && (a = a.substring(2));
                if ((n || p) && o) {
                  for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                    if (((d = c.slice(0, k).join("/")), n))
                      for (l = n.length; l > 0; l -= 1)
                        if (
                          ((e = o[n.slice(0, l).join("/")]), e && (e = e[d]))
                        ) {
                          (f = e), (h = k);
                          break;
                        }
                    if (f) break;
                    !i && p && p[d] && ((i = p[d]), (j = k));
                  }
                  !f && i && ((f = i), (h = j)),
                    f && (c.splice(0, h, f), (a = c.join("/")));
                }
                return a;
              }
              function g(a, c) {
                return function () {
                  var d = v.call(arguments, 0);
                  return (
                    "string" != typeof d[0] && 1 === d.length && d.push(null),
                    n.apply(b, d.concat([a, c]))
                  );
                };
              }
              function h(a) {
                return function (b) {
                  return f(b, a);
                };
              }
              function i(a) {
                return function (b) {
                  q[a] = b;
                };
              }
              function j(a) {
                if (e(r, a)) {
                  var c = r[a];
                  delete r[a], (t[a] = !0), m.apply(b, c);
                }
                if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                return q[a];
              }
              function k(a) {
                var b,
                  c = a ? a.indexOf("!") : -1;
                return (
                  c > -1 &&
                    ((b = a.substring(0, c)),
                    (a = a.substring(c + 1, a.length))),
                  [b, a]
                );
              }
              function l(a) {
                return function () {
                  return (s && s.config && s.config[a]) || {};
                };
              }
              var m,
                n,
                o,
                p,
                q = {},
                r = {},
                s = {},
                t = {},
                u = Object.prototype.hasOwnProperty,
                v = [].slice,
                w = /\.js$/;
              (o = function (a, b) {
                var c,
                  d = k(a),
                  e = d[0];
                return (
                  (a = d[1]),
                  e && ((e = f(e, b)), (c = j(e))),
                  e
                    ? (a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b))
                    : ((a = f(a, b)),
                      (d = k(a)),
                      (e = d[0]),
                      (a = d[1]),
                      e && (c = j(e))),
                  { f: e ? e + "!" + a : a, n: a, pr: e, p: c }
                );
              }),
                (p = {
                  require: function (a) {
                    return g(a);
                  },
                  exports: function (a) {
                    var b = q[a];
                    return "undefined" != typeof b ? b : (q[a] = {});
                  },
                  module: function (a) {
                    return { id: a, uri: "", exports: q[a], config: l(a) };
                  },
                }),
                (m = function (a, c, d, f) {
                  var h,
                    k,
                    l,
                    m,
                    n,
                    s,
                    u = [],
                    v = typeof d;
                  if (((f = f || a), "undefined" === v || "function" === v)) {
                    for (
                      c =
                        !c.length && d.length
                          ? ["require", "exports", "module"]
                          : c,
                        n = 0;
                      n < c.length;
                      n += 1
                    )
                      if (((m = o(c[n], f)), (k = m.f), "require" === k))
                        u[n] = p.require(a);
                      else if ("exports" === k) (u[n] = p.exports(a)), (s = !0);
                      else if ("module" === k) h = u[n] = p.module(a);
                      else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                      else {
                        if (!m.p) throw new Error(a + " missing " + k);
                        m.p.load(m.n, g(f, !0), i(k), {}), (u[n] = q[k]);
                      }
                    (l = d ? d.apply(q[a], u) : void 0),
                      a &&
                        (h && h.exports !== b && h.exports !== q[a]
                          ? (q[a] = h.exports)
                          : (l === b && s) || (q[a] = l));
                  } else a && (q[a] = d);
                }),
                (a =
                  c =
                  n =
                    function (a, c, d, e, f) {
                      if ("string" == typeof a)
                        return p[a] ? p[a](c) : j(o(a, c).f);
                      if (!a.splice) {
                        if (((s = a), s.deps && n(s.deps, s.callback), !c))
                          return;
                        c.splice ? ((a = c), (c = d), (d = null)) : (a = b);
                      }
                      return (
                        (c = c || function () {}),
                        "function" == typeof d && ((d = e), (e = f)),
                        e
                          ? m(b, a, c, d)
                          : setTimeout(function () {
                              m(b, a, c, d);
                            }, 4),
                        n
                      );
                    }),
                (n.config = function (a) {
                  return n(a);
                }),
                (a._defined = q),
                (d = function (a, b, c) {
                  if ("string" != typeof a)
                    throw new Error(
                      "See almond README: incorrect module build, no module name"
                    );
                  b.splice || ((c = b), (b = [])),
                    e(q, a) || e(r, a) || (r[a] = [a, b, c]);
                }),
                (d.amd = { jQuery: !0 });
            })(),
              (b.requirejs = a),
              (b.require = c),
              (b.define = d);
          }
        })(),
        b.define("almond", function () {}),
        b.define("jquery", [], function () {
          var b = a || $;
          return (
            null == b &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            b
          );
        }),
        b.define("select2/utils", ["jquery"], function (a) {
          function b(a) {
            var b = a.prototype,
              c = [];
            for (var d in b) {
              var e = b[d];
              "function" == typeof e && "constructor" !== d && c.push(d);
            }
            return c;
          }
          var c = {};
          (c.Extend = function (a, b) {
            function c() {
              this.constructor = a;
            }
            var d = {}.hasOwnProperty;
            for (var e in b) d.call(b, e) && (a[e] = b[e]);
            return (
              (c.prototype = b.prototype),
              (a.prototype = new c()),
              (a.__super__ = b.prototype),
              a
            );
          }),
            (c.Decorate = function (a, c) {
              function d() {
                var b = Array.prototype.unshift,
                  d = c.prototype.constructor.length,
                  e = a.prototype.constructor;
                d > 0 &&
                  (b.call(arguments, a.prototype.constructor),
                  (e = c.prototype.constructor)),
                  e.apply(this, arguments);
              }
              function e() {
                this.constructor = d;
              }
              var f = b(c),
                g = b(a);
              (c.displayName = a.displayName), (d.prototype = new e());
              for (var h = 0; h < g.length; h++) {
                var i = g[h];
                d.prototype[i] = a.prototype[i];
              }
              for (
                var j = function (a) {
                    var b = function () {};
                    (a in d.prototype) && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function () {
                      var a = Array.prototype.unshift;
                      return a.call(arguments, b), e.apply(this, arguments);
                    };
                  },
                  k = 0;
                k < f.length;
                k++
              ) {
                var l = f[k];
                d.prototype[l] = j(l);
              }
              return d;
            });
          var d = function () {
            this.listeners = {};
          };
          return (
            (d.prototype.on = function (a, b) {
              (this.listeners = this.listeners || {}),
                a in this.listeners
                  ? this.listeners[a].push(b)
                  : (this.listeners[a] = [b]);
            }),
            (d.prototype.trigger = function (a) {
              var b = Array.prototype.slice,
                c = b.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == c && (c = []),
                0 === c.length && c.push({}),
                (c[0]._type = a),
                a in this.listeners &&
                  this.invoke(this.listeners[a], b.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (d.prototype.invoke = function (a, b) {
              for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b);
            }),
            (c.Observable = d),
            (c.generateChars = function (a) {
              for (var b = "", c = 0; a > c; c++) {
                var d = Math.floor(36 * Math.random());
                b += d.toString(36);
              }
              return b;
            }),
            (c.bind = function (a, b) {
              return function () {
                a.apply(b, arguments);
              };
            }),
            (c._convertData = function (a) {
              for (var b in a) {
                var c = b.split("-"),
                  d = a;
                if (1 !== c.length) {
                  for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    (f = f.substring(0, 1).toLowerCase() + f.substring(1)),
                      f in d || (d[f] = {}),
                      e == c.length - 1 && (d[f] = a[b]),
                      (d = d[f]);
                  }
                  delete a[b];
                }
              }
              return a;
            }),
            (c.hasScroll = function (b, c) {
              var d = a(c),
                e = c.style.overflowX,
                f = c.style.overflowY;
              return e !== f || ("hidden" !== f && "visible" !== f)
                ? "scroll" === e || "scroll" === f
                  ? !0
                  : d.innerHeight() < c.scrollHeight ||
                    d.innerWidth() < c.scrollWidth
                : !1;
            }),
            (c.escapeMarkup = function (a) {
              var b = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof a
                ? a
                : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a];
                  });
            }),
            (c.appendMany = function (b, c) {
              if ("1.7" === a.fn.jquery.substr(0, 3)) {
                var d = a();
                a.map(c, function (a) {
                  d = d.add(a);
                }),
                  (c = d);
              }
              b.append(c);
            }),
            c
          );
        }),
        b.define("select2/results", ["jquery", "./utils"], function (a, b) {
          function c(a, b, d) {
            (this.$element = a),
              (this.data = d),
              (this.options = b),
              c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function () {
              var b = a(
                '<ul class="select2-results__options" role="tree"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  b.attr("aria-multiselectable", "true"),
                (this.$results = b),
                b
              );
            }),
            (c.prototype.clear = function () {
              this.$results.empty();
            }),
            (c.prototype.displayMessage = function (b) {
              var c = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var d = a(
                  '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
                ),
                e = this.options.get("translations").get(b.message);
              d.append(c(e(b.args))),
                (d[0].className += " select2-results__message"),
                this.$results.append(d);
            }),
            (c.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (c.prototype.append = function (a) {
              this.hideLoading();
              var b = [];
              if (null == a.results || 0 === a.results.length)
                return void (
                  0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" })
                );
              a.results = this.sort(a.results);
              for (var c = 0; c < a.results.length; c++) {
                var d = a.results[c],
                  e = this.option(d);
                b.push(e);
              }
              this.$results.append(b);
            }),
            (c.prototype.position = function (a, b) {
              var c = b.find(".select2-results");
              c.append(a);
            }),
            (c.prototype.sort = function (a) {
              var b = this.options.get("sorter");
              return b(a);
            }),
            (c.prototype.highlightFirstItem = function () {
              var a = this.$results.find(
                  ".select2-results__option[aria-selected]"
                ),
                b = a.filter("[aria-selected=true]");
              b.length > 0
                ? b.first().trigger("mouseenter")
                : a.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (c.prototype.setClasses = function () {
              var b = this;
              this.data.current(function (c) {
                var d = a.map(c, function (a) {
                    return a.id.toString();
                  }),
                  e = b.$results.find(
                    ".select2-results__option[aria-selected]"
                  );
                e.each(function () {
                  var b = a(this),
                    c = a.data(this, "data"),
                    e = "" + c.id;
                  (null != c.element && c.element.selected) ||
                  (null == c.element && a.inArray(e, d) > -1)
                    ? b.attr("aria-selected", "true")
                    : b.attr("aria-selected", "false");
                });
              });
            }),
            (c.prototype.showLoading = function (a) {
              this.hideLoading();
              var b = this.options.get("translations").get("searching"),
                c = { disabled: !0, loading: !0, text: b(a) },
                d = this.option(c);
              (d.className += " loading-results"), this.$results.prepend(d);
            }),
            (c.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (c.prototype.option = function (b) {
              var c = document.createElement("li");
              c.className = "select2-results__option";
              var d = { role: "treeitem", "aria-selected": "false" };
              b.disabled &&
                (delete d["aria-selected"], (d["aria-disabled"] = "true")),
                null == b.id && delete d["aria-selected"],
                null != b._resultId && (c.id = b._resultId),
                b.title && (c.title = b.title),
                b.children &&
                  ((d.role = "group"),
                  (d["aria-label"] = b.text),
                  delete d["aria-selected"]);
              for (var e in d) {
                var f = d[e];
                c.setAttribute(e, f);
              }
              if (b.children) {
                var g = a(c),
                  h = document.createElement("strong");
                h.className = "select2-results__group";
                a(h);
                this.template(b, h);
                for (var i = [], j = 0; j < b.children.length; j++) {
                  var k = b.children[j],
                    l = this.option(k);
                  i.push(l);
                }
                var m = a("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                });
                m.append(i), g.append(h), g.append(m);
              } else this.template(b, c);
              return a.data(c, "data", b), c;
            }),
            (c.prototype.bind = function (b, c) {
              var d = this,
                e = b.id + "-results";
              this.$results.attr("id", e),
                b.on("results:all", function (a) {
                  d.clear(),
                    d.append(a.data),
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }),
                b.on("results:append", function (a) {
                  d.append(a.data), b.isOpen() && d.setClasses();
                }),
                b.on("query", function (a) {
                  d.hideMessages(), d.showLoading(a);
                }),
                b.on("select", function () {
                  b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }),
                b.on("unselect", function () {
                  b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }),
                b.on("open", function () {
                  d.$results.attr("aria-expanded", "true"),
                    d.$results.attr("aria-hidden", "false"),
                    d.setClasses(),
                    d.ensureHighlightVisible();
                }),
                b.on("close", function () {
                  d.$results.attr("aria-expanded", "false"),
                    d.$results.attr("aria-hidden", "true"),
                    d.$results.removeAttr("aria-activedescendant");
                }),
                b.on("results:toggle", function () {
                  var a = d.getHighlightedResults();
                  0 !== a.length && a.trigger("mouseup");
                }),
                b.on("results:select", function () {
                  var a = d.getHighlightedResults();
                  if (0 !== a.length) {
                    var b = a.data("data");
                    "true" == a.attr("aria-selected")
                      ? d.trigger("close", {})
                      : d.trigger("select", { data: b });
                  }
                }),
                b.on("results:previous", function () {
                  var a = d.getHighlightedResults(),
                    b = d.$results.find("[aria-selected]"),
                    c = b.index(a);
                  if (0 !== c) {
                    var e = c - 1;
                    0 === a.length && (e = 0);
                    var f = b.eq(e);
                    f.trigger("mouseenter");
                    var g = d.$results.offset().top,
                      h = f.offset().top,
                      i = d.$results.scrollTop() + (h - g);
                    0 === e
                      ? d.$results.scrollTop(0)
                      : 0 > h - g && d.$results.scrollTop(i);
                  }
                }),
                b.on("results:next", function () {
                  var a = d.getHighlightedResults(),
                    b = d.$results.find("[aria-selected]"),
                    c = b.index(a),
                    e = c + 1;
                  if (!(e >= b.length)) {
                    var f = b.eq(e);
                    f.trigger("mouseenter");
                    var g =
                        d.$results.offset().top + d.$results.outerHeight(!1),
                      h = f.offset().top + f.outerHeight(!1),
                      i = d.$results.scrollTop() + h - g;
                    0 === e
                      ? d.$results.scrollTop(0)
                      : h > g && d.$results.scrollTop(i);
                  }
                }),
                b.on("results:focus", function (a) {
                  a.element.addClass("select2-results__option--highlighted");
                }),
                b.on("results:message", function (a) {
                  d.displayMessage(a);
                }),
                a.fn.mousewheel &&
                  this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(),
                      c = d.$results.get(0).scrollHeight - b + a.deltaY,
                      e = a.deltaY > 0 && b - a.deltaY <= 0,
                      f = a.deltaY < 0 && c <= d.$results.height();
                    e
                      ? (d.$results.scrollTop(0),
                        a.preventDefault(),
                        a.stopPropagation())
                      : f &&
                        (d.$results.scrollTop(
                          d.$results.get(0).scrollHeight - d.$results.height()
                        ),
                        a.preventDefault(),
                        a.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option[aria-selected]",
                  function (b) {
                    var c = a(this),
                      e = c.data("data");
                    return "true" === c.attr("aria-selected")
                      ? void (d.options.get("multiple")
                          ? d.trigger("unselect", { originalEvent: b, data: e })
                          : d.trigger("close", {}))
                      : void d.trigger("select", { originalEvent: b, data: e });
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option[aria-selected]",
                  function (b) {
                    var c = a(this).data("data");
                    d
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted"),
                      d.trigger("results:focus", { data: c, element: a(this) });
                  }
                );
            }),
            (c.prototype.getHighlightedResults = function () {
              var a = this.$results.find(
                ".select2-results__option--highlighted"
              );
              return a;
            }),
            (c.prototype.destroy = function () {
              this.$results.remove();
            }),
            (c.prototype.ensureHighlightVisible = function () {
              var a = this.getHighlightedResults();
              if (0 !== a.length) {
                var b = this.$results.find("[aria-selected]"),
                  c = b.index(a),
                  d = this.$results.offset().top,
                  e = a.offset().top,
                  f = this.$results.scrollTop() + (e - d),
                  g = e - d;
                (f -= 2 * a.outerHeight(!1)),
                  2 >= c
                    ? this.$results.scrollTop(0)
                    : (g > this.$results.outerHeight() || 0 > g) &&
                      this.$results.scrollTop(f);
              }
            }),
            (c.prototype.template = function (b, c) {
              var d = this.options.get("templateResult"),
                e = this.options.get("escapeMarkup"),
                f = d(b, c);
              null == f
                ? (c.style.display = "none")
                : "string" == typeof f
                ? (c.innerHTML = e(f))
                : a(c).append(f);
            }),
            c
          );
        }),
        b.define("select2/keys", [], function () {
          var a = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
          return a;
        }),
        b.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (a, b, c) {
            function d(a, b) {
              (this.$element = a),
                (this.options = b),
                d.__super__.constructor.call(this);
            }
            return (
              b.Extend(d, b.Observable),
              (d.prototype.render = function () {
                var b = a(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != this.$element.data("old-tabindex")
                    ? (this._tabindex = this.$element.data("old-tabindex"))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  b.attr("title", this.$element.attr("title")),
                  b.attr("tabindex", this._tabindex),
                  (this.$selection = b),
                  b
                );
              }),
              (d.prototype.bind = function (a, b) {
                var d = this,
                  e = (a.id + "-container", a.id + "-results");
                (this.container = a),
                  this.$selection.on("focus", function (a) {
                    d.trigger("focus", a);
                  }),
                  this.$selection.on("blur", function (a) {
                    d._handleBlur(a);
                  }),
                  this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a),
                      a.which === c.SPACE && a.preventDefault();
                  }),
                  a.on("results:focus", function (a) {
                    d.$selection.attr(
                      "aria-activedescendant",
                      a.data._resultId
                    );
                  }),
                  a.on("selection:update", function (a) {
                    d.update(a.data);
                  }),
                  a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"),
                      d.$selection.attr("aria-owns", e),
                      d._attachCloseHandler(a);
                  }),
                  a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"),
                      d.$selection.removeAttr("aria-activedescendant"),
                      d.$selection.removeAttr("aria-owns"),
                      d.$selection.focus(),
                      d._detachCloseHandler(a);
                  }),
                  a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex);
                  }),
                  a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1");
                  });
              }),
              (d.prototype._handleBlur = function (b) {
                var c = this;
                window.setTimeout(function () {
                  document.activeElement == c.$selection[0] ||
                    a.contains(c.$selection[0], document.activeElement) ||
                    c.trigger("blur", b);
                }, 1);
              }),
              (d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                  var c = a(b.target),
                    d = c.closest(".select2"),
                    e = a(".select2.select2-container--open");
                  e.each(function () {
                    var b = a(this);
                    if (this != d[0]) {
                      var c = b.data("element");
                      c.select2("close");
                    }
                  });
                });
              }),
              (d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id);
              }),
              (d.prototype.position = function (a, b) {
                var c = b.find(".selection");
                c.append(a);
              }),
              (d.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (d.prototype.update = function (a) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              d
            );
          }
        ),
        b.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (a, b, c, d) {
            function e() {
              e.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(e, b),
              (e.prototype.render = function () {
                var a = e.__super__.render.call(this);
                return (
                  a.addClass("select2-selection--single"),
                  a.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  a
                );
              }),
              (e.prototype.bind = function (a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", d),
                  this.$selection.attr("aria-labelledby", d),
                  this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", { originalEvent: a });
                  }),
                  this.$selection.on("focus", function (a) {}),
                  this.$selection.on("blur", function (a) {}),
                  a.on("focus", function (b) {
                    a.isOpen() || c.$selection.focus();
                  }),
                  a.on("selection:update", function (a) {
                    c.update(a.data);
                  });
              }),
              (e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
              }),
              (e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                  d = this.options.get("escapeMarkup");
                return d(c(a, b));
              }),
              (e.prototype.selectionContainer = function () {
                return a("<span></span>");
              }),
              (e.prototype.update = function (a) {
                if (0 === a.length) return void this.clear();
                var b = a[0],
                  c = this.$selection.find(".select2-selection__rendered"),
                  d = this.display(b, c);
                c.empty().append(d), c.prop("title", b.title || b.text);
              }),
              e
            );
          }
        ),
        b.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (a, b, c) {
            function d(a, b) {
              d.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(d, b),
              (d.prototype.render = function () {
                var a = d.__super__.render.call(this);
                return (
                  a.addClass("select2-selection--multiple"),
                  a.html('<ul class="select2-selection__rendered"></ul>'),
                  a
                );
              }),
              (d.prototype.bind = function (b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments),
                  this.$selection.on("click", function (a) {
                    e.trigger("toggle", { originalEvent: a });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (b) {
                      if (!e.options.get("disabled")) {
                        var c = a(this),
                          d = c.parent(),
                          f = d.data("data");
                        e.trigger("unselect", { originalEvent: b, data: f });
                      }
                    }
                  );
              }),
              (d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
              }),
              (d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                  d = this.options.get("escapeMarkup");
                return d(c(a, b));
              }),
              (d.prototype.selectionContainer = function () {
                var b = a(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                );
                return b;
              }),
              (d.prototype.update = function (a) {
                if ((this.clear(), 0 !== a.length)) {
                  for (var b = [], d = 0; d < a.length; d++) {
                    var e = a[d],
                      f = this.selectionContainer(),
                      g = this.display(e, f);
                    f.append(g),
                      f.prop("title", e.title || e.text),
                      f.data("data", e),
                      b.push(f);
                  }
                  var h = this.$selection.find(".select2-selection__rendered");
                  c.appendMany(h, b);
                }
              }),
              d
            );
          }
        ),
        b.define("select2/selection/placeholder", ["../utils"], function (a) {
          function b(a, b, c) {
            (this.placeholder = this.normalizePlaceholder(
              c.get("placeholder")
            )),
              a.call(this, b, c);
          }
          return (
            (b.prototype.normalizePlaceholder = function (a, b) {
              return "string" == typeof b && (b = { id: "", text: b }), b;
            }),
            (b.prototype.createPlaceholder = function (a, b) {
              var c = this.selectionContainer();
              return (
                c.html(this.display(b)),
                c
                  .addClass("select2-selection__placeholder")
                  .removeClass("select2-selection__choice"),
                c
              );
            }),
            (b.prototype.update = function (a, b) {
              var c = 1 == b.length && b[0].id != this.placeholder.id,
                d = b.length > 1;
              if (d || c) return a.call(this, b);
              this.clear();
              var e = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(e);
            }),
            b
          );
        }),
        b.define(
          "select2/selection/allowClear",
          ["jquery", "../keys"],
          function (a, b) {
            function c() {}
            return (
              (c.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (a) {
                      d._handleClear(a);
                    }
                  ),
                  b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b);
                  });
              }),
              (c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                  var c = this.$selection.find(".select2-selection__clear");
                  if (0 !== c.length) {
                    b.stopPropagation();
                    for (var d = c.data("data"), e = 0; e < d.length; e++) {
                      var f = { data: d[e] };
                      if ((this.trigger("unselect", f), f.prevented)) return;
                    }
                    this.$element.val(this.placeholder.id).trigger("change"),
                      this.trigger("toggle", {});
                  }
                }
              }),
              (c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() ||
                  ((c.which == b.DELETE || c.which == b.BACKSPACE) &&
                    this._handleClear(c));
              }),
              (c.prototype.update = function (b, c) {
                if (
                  (b.call(this, c),
                  !(
                    this.$selection.find(".select2-selection__placeholder")
                      .length > 0 || 0 === c.length
                  ))
                ) {
                  var d = a(
                    '<span class="select2-selection__clear">&times;</span>'
                  );
                  d.data("data", c),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .prepend(d);
                }
              }),
              c
            );
          }
        ),
        b.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (a, b, c) {
            function d(a, b, c) {
              a.call(this, b, c);
            }
            return (
              (d.prototype.render = function (b) {
                var c = a(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = c), (this.$search = c.find("input"));
                var d = b.call(this);
                return this._transferTabIndex(), d;
              }),
              (d.prototype.bind = function (a, b, d) {
                var e = this;
                a.call(this, b, d),
                  b.on("open", function () {
                    e.$search.trigger("focus");
                  }),
                  b.on("close", function () {
                    e.$search.val(""),
                      e.$search.removeAttr("aria-activedescendant"),
                      e.$search.trigger("focus");
                  }),
                  b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex();
                  }),
                  b.on("disable", function () {
                    e.$search.prop("disabled", !0);
                  }),
                  b.on("focus", function (a) {
                    e.$search.trigger("focus");
                  }),
                  b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id);
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (a) {
                      e.trigger("focus", a);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (a) {
                      e._handleBlur(a);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (a) {
                      a.stopPropagation(),
                        e.trigger("keypress", a),
                        (e._keyUpPrevented = a.isDefaultPrevented());
                      var b = a.which;
                      if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(
                          ".select2-selection__choice"
                        );
                        if (d.length > 0) {
                          var f = d.data("data");
                          e.searchRemoveChoice(f), a.preventDefault();
                        }
                      }
                    }
                  );
                var f = document.documentMode,
                  g = f && 11 >= f;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (a) {
                    return g
                      ? void e.$selection.off("input.search input.searchcheck")
                      : void e.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (a) {
                      if (g && "input" === a.type)
                        return void e.$selection.off(
                          "input.search input.searchcheck"
                        );
                      var b = a.which;
                      b != c.SHIFT &&
                        b != c.CTRL &&
                        b != c.ALT &&
                        b != c.TAB &&
                        e.handleSearch(a);
                    }
                  );
              }),
              (d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text);
              }),
              (d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  a.call(this, b),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(this.$searchContainer),
                  this.resizeSearch(),
                  c && this.$search.focus();
              }),
              (d.prototype.handleSearch = function () {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var a = this.$search.val();
                  this.trigger("query", { term: a });
                }
                this._keyUpPrevented = !1;
              }),
              (d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", { data: b }),
                  this.$search.val(b.text),
                  this.handleSearch();
              }),
              (d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder"))
                  a = this.$selection
                    .find(".select2-selection__rendered")
                    .innerWidth();
                else {
                  var b = this.$search.val().length + 1;
                  a = 0.75 * b + "em";
                }
                this.$search.css("width", a);
              }),
              d
            );
          }
        ),
        b.define("select2/selection/eventRelay", ["jquery"], function (a) {
          function b() {}
          return (
            (b.prototype.bind = function (b, c, d) {
              var e = this,
                f = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                ],
                g = ["opening", "closing", "selecting", "unselecting"];
              b.call(this, c, d),
                c.on("*", function (b, c) {
                  if (-1 !== a.inArray(b, f)) {
                    c = c || {};
                    var d = a.Event("select2:" + b, { params: c });
                    e.$element.trigger(d),
                      -1 !== a.inArray(b, g) &&
                        (c.prevented = d.isDefaultPrevented());
                  }
                });
            }),
            b
          );
        }),
        b.define("select2/translation", ["jquery", "require"], function (a, b) {
          function c(a) {
            this.dict = a || {};
          }
          return (
            (c.prototype.all = function () {
              return this.dict;
            }),
            (c.prototype.get = function (a) {
              return this.dict[a];
            }),
            (c.prototype.extend = function (b) {
              this.dict = a.extend({}, b.all(), this.dict);
            }),
            (c._cache = {}),
            (c.loadPath = function (a) {
              if (!(a in c._cache)) {
                var d = b(a);
                c._cache[a] = d;
              }
              return new c(c._cache[a]);
            }),
            c
          );
        }),
        b.define("select2/diacritics", [], function () {
          var a = {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ω: "ω",
            ς: "σ",
          };
          return a;
        }),
        b.define("select2/data/base", ["../utils"], function (a) {
          function b(a, c) {
            b.__super__.constructor.call(this);
          }
          return (
            a.Extend(b, a.Observable),
            (b.prototype.current = function (a) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (b.prototype.query = function (a, b) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (b.prototype.bind = function (a, b) {}),
            (b.prototype.destroy = function () {}),
            (b.prototype.generateResultId = function (b, c) {
              var d = b.id + "-result-";
              return (
                (d += a.generateChars(4)),
                (d +=
                  null != c.id
                    ? "-" + c.id.toString()
                    : "-" + a.generateChars(4))
              );
            }),
            b
          );
        }),
        b.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              (this.$element = a),
                (this.options = b),
                d.__super__.constructor.call(this);
            }
            return (
              b.Extend(d, a),
              (d.prototype.current = function (a) {
                var b = [],
                  d = this;
                this.$element.find(":selected").each(function () {
                  var a = c(this),
                    e = d.item(a);
                  b.push(e);
                }),
                  a(b);
              }),
              (d.prototype.select = function (a) {
                var b = this;
                if (((a.selected = !0), c(a.element).is("option")))
                  return (
                    (a.element.selected = !0),
                    void this.$element.trigger("change")
                  );
                if (this.$element.prop("multiple"))
                  this.current(function (d) {
                    var e = [];
                    (a = [a]), a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                      var g = a[f].id;
                      -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                  });
                else {
                  var d = a.id;
                  this.$element.val(d), this.$element.trigger("change");
                }
              }),
              (d.prototype.unselect = function (a) {
                var b = this;
                if (this.$element.prop("multiple"))
                  return (
                    (a.selected = !1),
                    c(a.element).is("option")
                      ? ((a.element.selected = !1),
                        void this.$element.trigger("change"))
                      : void this.current(function (d) {
                          for (var e = [], f = 0; f < d.length; f++) {
                            var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                          }
                          b.$element.val(e), b.$element.trigger("change");
                        })
                  );
              }),
              (d.prototype.bind = function (a, b) {
                var c = this;
                (this.container = a),
                  a.on("select", function (a) {
                    c.select(a.data);
                  }),
                  a.on("unselect", function (a) {
                    c.unselect(a.data);
                  });
              }),
              (d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  c.removeData(this, "data");
                });
              }),
              (d.prototype.query = function (a, b) {
                var d = [],
                  e = this,
                  f = this.$element.children();
                f.each(function () {
                  var b = c(this);
                  if (b.is("option") || b.is("optgroup")) {
                    var f = e.item(b),
                      g = e.matches(a, f);
                    null !== g && d.push(g);
                  }
                }),
                  b({ results: d });
              }),
              (d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a);
              }),
              (d.prototype.option = function (a) {
                var b;
                a.children
                  ? ((b = document.createElement("optgroup")),
                    (b.label = a.text))
                  : ((b = document.createElement("option")),
                    void 0 !== b.textContent
                      ? (b.textContent = a.text)
                      : (b.innerText = a.text)),
                  a.id && (b.value = a.id),
                  a.disabled && (b.disabled = !0),
                  a.selected && (b.selected = !0),
                  a.title && (b.title = a.title);
                var d = c(b),
                  e = this._normalizeItem(a);
                return (e.element = b), c.data(b, "data", e), d;
              }),
              (d.prototype.item = function (a) {
                var b = {};
                if (((b = c.data(a[0], "data")), null != b)) return b;
                if (a.is("option"))
                  b = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title"),
                  };
                else if (a.is("optgroup")) {
                  b = {
                    text: a.prop("label"),
                    children: [],
                    title: a.prop("title"),
                  };
                  for (
                    var d = a.children("option"), e = [], f = 0;
                    f < d.length;
                    f++
                  ) {
                    var g = c(d[f]),
                      h = this.item(g);
                    e.push(h);
                  }
                  b.children = e;
                }
                return (
                  (b = this._normalizeItem(b)),
                  (b.element = a[0]),
                  c.data(a[0], "data", b),
                  b
                );
              }),
              (d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = { id: a, text: a }),
                  (a = c.extend({}, { text: "" }, a));
                var b = { selected: !1, disabled: !1 };
                return (
                  null != a.id && (a.id = a.id.toString()),
                  null != a.text && (a.text = a.text.toString()),
                  null == a._resultId &&
                    a.id &&
                    null != this.container &&
                    (a._resultId = this.generateResultId(this.container, a)),
                  c.extend({}, b, a)
                );
              }),
              (d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");
                return c(a, b);
              }),
              d
            );
          }
        ),
        b.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              var c = b.get("data") || [];
              d.__super__.constructor.call(this, a, b),
                this.addOptions(this.convertToOptions(c));
            }
            return (
              b.Extend(d, a),
              (d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                  return c.value == a.id.toString();
                });
                0 === b.length && ((b = this.option(a)), this.addOptions(b)),
                  d.__super__.select.call(this, a);
              }),
              (d.prototype.convertToOptions = function (a) {
                function d(a) {
                  return function () {
                    return c(this).val() == a.id;
                  };
                }
                for (
                  var e = this,
                    f = this.$element.find("option"),
                    g = f
                      .map(function () {
                        return e.item(c(this)).id;
                      })
                      .get(),
                    h = [],
                    i = 0;
                  i < a.length;
                  i++
                ) {
                  var j = this._normalizeItem(a[i]);
                  if (c.inArray(j.id, g) >= 0) {
                    var k = f.filter(d(j)),
                      l = this.item(k),
                      m = c.extend(!0, {}, j, l),
                      n = this.option(m);
                    k.replaceWith(n);
                  } else {
                    var o = this.option(j);
                    if (j.children) {
                      var p = this.convertToOptions(j.children);
                      b.appendMany(o, p);
                    }
                    h.push(o);
                  }
                }
                return h;
              }),
              d
            );
          }
        ),
        b.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              (this.ajaxOptions = this._applyDefaults(b.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                d.__super__.constructor.call(this, a, b);
            }
            return (
              b.Extend(d, a),
              (d.prototype._applyDefaults = function (a) {
                var b = {
                  data: function (a) {
                    return c.extend({}, a, { q: a.term });
                  },
                  transport: function (a, b, d) {
                    var e = c.ajax(a);
                    return e.then(b), e.fail(d), e;
                  },
                };
                return c.extend({}, b, a, !0);
              }),
              (d.prototype.processResults = function (a) {
                return a;
              }),
              (d.prototype.query = function (a, b) {
                function d() {
                  var d = f.transport(
                    f,
                    function (d) {
                      var f = e.processResults(d, a);
                      e.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((f && f.results && c.isArray(f.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        b(f);
                    },
                    function () {
                      (d.status && "0" === d.status) ||
                        e.trigger("results:message", {
                          message: "errorLoading",
                        });
                    }
                  );
                  e._request = d;
                }
                var e = this;
                null != this._request &&
                  (c.isFunction(this._request.abort) && this._request.abort(),
                  (this._request = null));
                var f = c.extend({ type: "GET" }, this.ajaxOptions);
                "function" == typeof f.url &&
                  (f.url = f.url.call(this.$element, a)),
                  "function" == typeof f.data &&
                    (f.data = f.data.call(this.$element, a)),
                  this.ajaxOptions.delay && null != a.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        d,
                        this.ajaxOptions.delay
                      )))
                    : d();
              }),
              d
            );
          }
        ),
        b.define("select2/data/tags", ["jquery"], function (a) {
          function b(b, c, d) {
            var e = d.get("tags"),
              f = d.get("createTag");
            void 0 !== f && (this.createTag = f);
            var g = d.get("insertTag");
            if (
              (void 0 !== g && (this.insertTag = g),
              b.call(this, c, d),
              a.isArray(e))
            )
              for (var h = 0; h < e.length; h++) {
                var i = e[h],
                  j = this._normalizeItem(i),
                  k = this.option(j);
                this.$element.append(k);
              }
          }
          return (
            (b.prototype.query = function (a, b, c) {
              function d(a, f) {
                for (var g = a.results, h = 0; h < g.length; h++) {
                  var i = g[h],
                    j = null != i.children && !d({ results: i.children }, !0),
                    k = i.text === b.term;
                  if (k || j) return f ? !1 : ((a.data = g), void c(a));
                }
                if (f) return !0;
                var l = e.createTag(b);
                if (null != l) {
                  var m = e.option(l);
                  m.attr("data-select2-tag", !0),
                    e.addOptions([m]),
                    e.insertTag(g, l);
                }
                (a.results = g), c(a);
              }
              var e = this;
              return (
                this._removeOldTags(),
                null == b.term || null != b.page
                  ? void a.call(this, b, c)
                  : void a.call(this, b, d)
              );
            }),
            (b.prototype.createTag = function (b, c) {
              var d = a.trim(c.term);
              return "" === d ? null : { id: d, text: d };
            }),
            (b.prototype.insertTag = function (a, b, c) {
              b.unshift(c);
            }),
            (b.prototype._removeOldTags = function (b) {
              var c =
                (this._lastTag, this.$element.find("option[data-select2-tag]"));
              c.each(function () {
                this.selected || a(this).remove();
              });
            }),
            b
          );
        }),
        b.define("select2/data/tokenizer", ["jquery"], function (a) {
          function b(a, b, c) {
            var d = c.get("tokenizer");
            void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
          }
          return (
            (b.prototype.bind = function (a, b, c) {
              a.call(this, b, c),
                (this.$search =
                  b.dropdown.$search ||
                  b.selection.$search ||
                  c.find(".select2-search__field"));
            }),
            (b.prototype.query = function (b, c, d) {
              function e(b) {
                var c = g._normalizeItem(b),
                  d = g.$element.find("option").filter(function () {
                    return a(this).val() === c.id;
                  });
                if (!d.length) {
                  var e = g.option(c);
                  e.attr("data-select2-tag", !0),
                    g._removeOldTags(),
                    g.addOptions([e]);
                }
                f(c);
              }
              function f(a) {
                g.trigger("select", { data: a });
              }
              var g = this;
              c.term = c.term || "";
              var h = this.tokenizer(c, this.options, e);
              h.term !== c.term &&
                (this.$search.length &&
                  (this.$search.val(h.term), this.$search.focus()),
                (c.term = h.term)),
                b.call(this, c, d);
            }),
            (b.prototype.tokenizer = function (b, c, d, e) {
              for (
                var f = d.get("tokenSeparators") || [],
                  g = c.term,
                  h = 0,
                  i =
                    this.createTag ||
                    function (a) {
                      return { id: a.term, text: a.term };
                    };
                h < g.length;

              ) {
                var j = g[h];
                if (-1 !== a.inArray(j, f)) {
                  var k = g.substr(0, h),
                    l = a.extend({}, c, { term: k }),
                    m = i(l);
                  null != m
                    ? (e(m), (g = g.substr(h + 1) || ""), (h = 0))
                    : h++;
                } else h++;
              }
              return { term: g };
            }),
            b
          );
        }),
        b.define("select2/data/minimumInputLength", [], function () {
          function a(a, b, c) {
            (this.minimumInputLength = c.get("minimumInputLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              return (
                (b.term = b.term || ""),
                b.term.length < this.minimumInputLength
                  ? void this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: b.term,
                        params: b,
                      },
                    })
                  : void a.call(this, b, c)
              );
            }),
            a
          );
        }),
        b.define("select2/data/maximumInputLength", [], function () {
          function a(a, b, c) {
            (this.maximumInputLength = c.get("maximumInputLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              return (
                (b.term = b.term || ""),
                this.maximumInputLength > 0 &&
                b.term.length > this.maximumInputLength
                  ? void this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: b.term,
                        params: b,
                      },
                    })
                  : void a.call(this, b, c)
              );
            }),
            a
          );
        }),
        b.define("select2/data/maximumSelectionLength", [], function () {
          function a(a, b, c) {
            (this.maximumSelectionLength = c.get("maximumSelectionLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              var d = this;
              this.current(function (e) {
                var f = null != e ? e.length : 0;
                return d.maximumSelectionLength > 0 &&
                  f >= d.maximumSelectionLength
                  ? void d.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: d.maximumSelectionLength },
                    })
                  : void a.call(d, b, c);
              });
            }),
            a
          );
        }),
        b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
          function c(a, b) {
            (this.$element = a),
              (this.options = b),
              c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function () {
              var b = a(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                b.attr("dir", this.options.get("dir")), (this.$dropdown = b), b
              );
            }),
            (c.prototype.bind = function () {}),
            (c.prototype.position = function (a, b) {}),
            (c.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            c
          );
        }),
        b.define(
          "select2/dropdown/search",
          ["jquery", "../utils"],
          function (a, b) {
            function c() {}
            return (
              (c.prototype.render = function (b) {
                var c = b.call(this),
                  d = a(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                  );
                return (
                  (this.$searchContainer = d),
                  (this.$search = d.find("input")),
                  c.prepend(d),
                  c
                );
              }),
              (c.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d),
                  this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a),
                      (e._keyUpPrevented = a.isDefaultPrevented());
                  }),
                  this.$search.on("input", function (b) {
                    a(this).off("keyup");
                  }),
                  this.$search.on("keyup input", function (a) {
                    e.handleSearch(a);
                  }),
                  c.on("open", function () {
                    e.$search.attr("tabindex", 0),
                      e.$search.focus(),
                      window.setTimeout(function () {
                        e.$search.focus();
                      }, 0);
                  }),
                  c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("");
                  }),
                  c.on("focus", function () {
                    c.isOpen() && e.$search.focus();
                  }),
                  c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                      var b = e.showSearch(a);
                      b
                        ? e.$searchContainer.removeClass("select2-search--hide")
                        : e.$searchContainer.addClass("select2-search--hide");
                    }
                  });
              }),
              (c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                  var b = this.$search.val();
                  this.trigger("query", { term: b });
                }
                this._keyUpPrevented = !1;
              }),
              (c.prototype.showSearch = function (a, b) {
                return !0;
              }),
              c
            );
          }
        ),
        b.define("select2/dropdown/hidePlaceholder", [], function () {
          function a(a, b, c, d) {
            (this.placeholder = this.normalizePlaceholder(
              c.get("placeholder")
            )),
              a.call(this, b, c, d);
          }
          return (
            (a.prototype.append = function (a, b) {
              (b.results = this.removePlaceholder(b.results)), a.call(this, b);
            }),
            (a.prototype.normalizePlaceholder = function (a, b) {
              return "string" == typeof b && (b = { id: "", text: b }), b;
            }),
            (a.prototype.removePlaceholder = function (a, b) {
              for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                this.placeholder.id === e.id && c.splice(d, 1);
              }
              return c;
            }),
            a
          );
        }),
        b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
          function b(a, b, c, d) {
            (this.lastParams = {}),
              a.call(this, b, c, d),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (b.prototype.append = function (a, b) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                a.call(this, b),
                this.showLoadingMore(b) &&
                  this.$results.append(this.$loadingMore);
            }),
            (b.prototype.bind = function (b, c, d) {
              var e = this;
              b.call(this, c, d),
                c.on("query", function (a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                c.on("query:append", function (a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                this.$results.on("scroll", function () {
                  var b = a.contains(
                    document.documentElement,
                    e.$loadingMore[0]
                  );
                  if (!e.loading && b) {
                    var c =
                        e.$results.offset().top + e.$results.outerHeight(!1),
                      d =
                        e.$loadingMore.offset().top +
                        e.$loadingMore.outerHeight(!1);
                    c + 50 >= d && e.loadMore();
                  }
                });
            }),
            (b.prototype.loadMore = function () {
              this.loading = !0;
              var b = a.extend({}, { page: 1 }, this.lastParams);
              b.page++, this.trigger("query:append", b);
            }),
            (b.prototype.showLoadingMore = function (a, b) {
              return b.pagination && b.pagination.more;
            }),
            (b.prototype.createLoadingMore = function () {
              var b = a(
                  '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                ),
                c = this.options.get("translations").get("loadingMore");
              return b.html(c(this.lastParams)), b;
            }),
            b
          );
        }),
        b.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (a, b) {
            function c(b, c, d) {
              (this.$dropdownParent =
                d.get("dropdownParent") || a(document.body)),
                b.call(this, c, d);
            }
            return (
              (c.prototype.bind = function (a, b, c) {
                var d = this,
                  e = !1;
                a.call(this, b, c),
                  b.on("open", function () {
                    d._showDropdown(),
                      d._attachPositioningHandler(b),
                      e ||
                        ((e = !0),
                        b.on("results:all", function () {
                          d._positionDropdown(), d._resizeDropdown();
                        }),
                        b.on("results:append", function () {
                          d._positionDropdown(), d._resizeDropdown();
                        }));
                  }),
                  b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                  }),
                  this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation();
                  });
              }),
              (c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove();
              }),
              (c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")),
                  b.removeClass("select2"),
                  b.addClass("select2-container--open"),
                  b.css({ position: "absolute", top: -999999 }),
                  (this.$container = c);
              }),
              (c.prototype.render = function (b) {
                var c = a("<span></span>"),
                  d = b.call(this);
                return c.append(d), (this.$dropdownContainer = c), c;
              }),
              (c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach();
              }),
              (c.prototype._attachPositioningHandler = function (c, d) {
                var e = this,
                  f = "scroll.select2." + d.id,
                  g = "resize.select2." + d.id,
                  h = "orientationchange.select2." + d.id,
                  i = this.$container.parents().filter(b.hasScroll);
                i.each(function () {
                  a(this).data("select2-scroll-position", {
                    x: a(this).scrollLeft(),
                    y: a(this).scrollTop(),
                  });
                }),
                  i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y);
                  }),
                  a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown();
                  });
              }),
              (c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id,
                  f = "resize.select2." + d.id,
                  g = "orientationchange.select2." + d.id,
                  h = this.$container.parents().filter(b.hasScroll);
                h.off(e), a(window).off(e + " " + f + " " + g);
              }),
              (c.prototype._positionDropdown = function () {
                var b = a(window),
                  c = this.$dropdown.hasClass("select2-dropdown--above"),
                  d = this.$dropdown.hasClass("select2-dropdown--below"),
                  e = null,
                  f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = { height: this.$container.outerHeight(!1) };
                (g.top = f.top), (g.bottom = f.top + g.height);
                var h = { height: this.$dropdown.outerHeight(!1) },
                  i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height(),
                  },
                  j = i.top < f.top - h.height,
                  k = i.bottom > f.bottom + h.height,
                  l = { left: f.left, top: g.bottom },
                  m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                (l.top -= n.top),
                  (l.left -= n.left),
                  c || d || (e = "below"),
                  k || !j || c ? !j && k && c && (e = "below") : (e = "above"),
                  ("above" == e || (c && "below" !== e)) &&
                    (l.top = g.top - n.top - h.height),
                  null != e &&
                    (this.$dropdown
                      .removeClass(
                        "select2-dropdown--below select2-dropdown--above"
                      )
                      .addClass("select2-dropdown--" + e),
                    this.$container
                      .removeClass(
                        "select2-container--below select2-container--above"
                      )
                      .addClass("select2-container--" + e)),
                  this.$dropdownContainer.css(l);
              }),
              (c.prototype._resizeDropdown = function () {
                var a = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((a.minWidth = a.width),
                  (a.position = "relative"),
                  (a.width = "auto")),
                  this.$dropdown.css(a);
              }),
              (c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              c
            );
          }
        ),
        b.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function a(b) {
            for (var c = 0, d = 0; d < b.length; d++) {
              var e = b[d];
              e.children ? (c += a(e.children)) : c++;
            }
            return c;
          }
          function b(a, b, c, d) {
            (this.minimumResultsForSearch = c.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              a.call(this, b, c, d);
          }
          return (
            (b.prototype.showSearch = function (b, c) {
              return a(c.data.results) < this.minimumResultsForSearch
                ? !1
                : b.call(this, c);
            }),
            b
          );
        }),
        b.define("select2/dropdown/selectOnClose", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on("close", function (a) {
                  d._handleSelectOnClose(a);
                });
            }),
            (a.prototype._handleSelectOnClose = function (a, b) {
              if (b && null != b.originalSelect2Event) {
                var c = b.originalSelect2Event;
                if ("select" === c._type || "unselect" === c._type) return;
              }
              var d = this.getHighlightedResults();
              if (!(d.length < 1)) {
                var e = d.data("data");
                (null != e.element && e.element.selected) ||
                  (null == e.element && e.selected) ||
                  this.trigger("select", { data: e });
              }
            }),
            a
          );
        }),
        b.define("select2/dropdown/closeOnSelect", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on("select", function (a) {
                  d._selectTriggered(a);
                }),
                b.on("unselect", function (a) {
                  d._selectTriggered(a);
                });
            }),
            (a.prototype._selectTriggered = function (a, b) {
              var c = b.originalEvent;
              (c && c.ctrlKey) ||
                this.trigger("close", {
                  originalEvent: c,
                  originalSelect2Event: b,
                });
            }),
            a
          );
        }),
        b.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (a) {
              var b = a.input.length - a.maximum,
                c = "Please delete " + b + " character";
              return 1 != b && (c += "s"), c;
            },
            inputTooShort: function (a) {
              var b = a.minimum - a.input.length,
                c = "Please enter " + b + " or more characters";
              return c;
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (a) {
              var b = "You can only select " + a.maximum + " item";
              return 1 != a.maximum && (b += "s"), b;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
          };
        }),
        b.define(
          "select2/defaults",
          [
            "jquery",
            "require",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./i18n/en",
          ],
          function (
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C
          ) {
            function D() {
              this.reset();
            }
            (D.prototype.apply = function (l) {
              if (
                ((l = a.extend(!0, {}, this.defaults, l)),
                null == l.dataAdapter)
              ) {
                if (
                  (null != l.ajax
                    ? (l.dataAdapter = o)
                    : null != l.data
                    ? (l.dataAdapter = n)
                    : (l.dataAdapter = m),
                  l.minimumInputLength > 0 &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, r)),
                  l.maximumInputLength > 0 &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, s)),
                  l.maximumSelectionLength > 0 &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, t)),
                  l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)),
                  (null != l.tokenSeparators || null != l.tokenizer) &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, q)),
                  null != l.query)
                ) {
                  var C = b(l.amdBase + "compat/query");
                  l.dataAdapter = j.Decorate(l.dataAdapter, C);
                }
                if (null != l.initSelection) {
                  var D = b(l.amdBase + "compat/initSelection");
                  l.dataAdapter = j.Decorate(l.dataAdapter, D);
                }
              }
              if (
                (null == l.resultsAdapter &&
                  ((l.resultsAdapter = c),
                  null != l.ajax &&
                    (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)),
                  null != l.placeholder &&
                    (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)),
                  l.selectOnClose &&
                    (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))),
                null == l.dropdownAdapter)
              ) {
                if (l.multiple) l.dropdownAdapter = u;
                else {
                  var E = j.Decorate(u, v);
                  l.dropdownAdapter = E;
                }
                if (
                  (0 !== l.minimumResultsForSearch &&
                    (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)),
                  l.closeOnSelect &&
                    (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)),
                  null != l.dropdownCssClass ||
                    null != l.dropdownCss ||
                    null != l.adaptDropdownCssClass)
                ) {
                  var F = b(l.amdBase + "compat/dropdownCss");
                  l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                }
                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
              }
              if (null == l.selectionAdapter) {
                if (
                  (l.multiple
                    ? (l.selectionAdapter = e)
                    : (l.selectionAdapter = d),
                  null != l.placeholder &&
                    (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)),
                  l.allowClear &&
                    (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)),
                  l.multiple &&
                    (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)),
                  null != l.containerCssClass ||
                    null != l.containerCss ||
                    null != l.adaptContainerCssClass)
                ) {
                  var G = b(l.amdBase + "compat/containerCss");
                  l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                }
                l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
              }
              if ("string" == typeof l.language)
                if (l.language.indexOf("-") > 0) {
                  var H = l.language.split("-"),
                    I = H[0];
                  l.language = [l.language, I];
                } else l.language = [l.language];
              if (a.isArray(l.language)) {
                var J = new k();
                l.language.push("en");
                for (var K = l.language, L = 0; L < K.length; L++) {
                  var M = K[L],
                    N = {};
                  try {
                    N = k.loadPath(M);
                  } catch (O) {
                    try {
                      (M = this.defaults.amdLanguageBase + M),
                        (N = k.loadPath(M));
                    } catch (P) {
                      l.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            M +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                      continue;
                    }
                  }
                  J.extend(N);
                }
                l.translations = J;
              } else {
                var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                  R = new k(l.language);
                R.extend(Q), (l.translations = R);
              }
              return l;
            }),
              (D.prototype.reset = function () {
                function b(a) {
                  function b(a) {
                    return l[a] || a;
                  }
                  return a.replace(/[^\u0000-\u007E]/g, b);
                }
                function c(d, e) {
                  if ("" === a.trim(d.term)) return e;
                  if (e.children && e.children.length > 0) {
                    for (
                      var f = a.extend(!0, {}, e), g = e.children.length - 1;
                      g >= 0;
                      g--
                    ) {
                      var h = e.children[g],
                        i = c(d, h);
                      null == i && f.children.splice(g, 1);
                    }
                    return f.children.length > 0 ? f : c(d, f);
                  }
                  var j = b(e.text).toUpperCase(),
                    k = b(d.term).toUpperCase();
                  return j.indexOf(k) > -1 ? e : null;
                }
                this.defaults = {
                  amdBase: "./",
                  amdLanguageBase: "./i18n/",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: j.escapeMarkup,
                  language: C,
                  matcher: c,
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  sorter: function (a) {
                    return a;
                  },
                  templateResult: function (a) {
                    return a.text;
                  },
                  templateSelection: function (a) {
                    return a.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (D.prototype.set = function (b, c) {
                var d = a.camelCase(b),
                  e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f);
              });
            var E = new D();
            return E;
          }
        ),
        b.define(
          "select2/options",
          ["require", "jquery", "./defaults", "./utils"],
          function (a, b, c, d) {
            function e(b, e) {
              if (
                ((this.options = b),
                null != e && this.fromElement(e),
                (this.options = c.apply(this.options)),
                e && e.is("input"))
              ) {
                var f = a(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = d.Decorate(
                  this.options.dataAdapter,
                  f
                );
              }
            }
            return (
              (e.prototype.fromElement = function (a) {
                var c = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = a.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = a.prop("disabled")),
                  null == this.options.language &&
                    (a.prop("lang")
                      ? (this.options.language = a.prop("lang").toLowerCase())
                      : a.closest("[lang]").prop("lang") &&
                        (this.options.language = a
                          .closest("[lang]")
                          .prop("lang"))),
                  null == this.options.dir &&
                    (a.prop("dir")
                      ? (this.options.dir = a.prop("dir"))
                      : a.closest("[dir]").prop("dir")
                      ? (this.options.dir = a.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  a.prop("disabled", this.options.disabled),
                  a.prop("multiple", this.options.multiple),
                  a.data("select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    a.data("data", a.data("select2Tags")),
                    a.data("tags", !0)),
                  a.data("ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    a.attr("ajax--url", a.data("ajaxUrl")),
                    a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e =
                  b.fn.jquery &&
                  "1." == b.fn.jquery.substr(0, 2) &&
                  a[0].dataset
                    ? b.extend(!0, {}, a[0].dataset, a.data())
                    : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)
                  b.inArray(g, c) > -1 ||
                    (b.isPlainObject(this.options[g])
                      ? b.extend(this.options[g], f[g])
                      : (this.options[g] = f[g]));
                return this;
              }),
              (e.prototype.get = function (a) {
                return this.options[a];
              }),
              (e.prototype.set = function (a, b) {
                this.options[a] = b;
              }),
              e
            );
          }
        ),
        b.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (a, b, c, d) {
            var e = function (a, c) {
              null != a.data("select2") && a.data("select2").destroy(),
                (this.$element = a),
                (this.id = this._generateId(a)),
                (c = c || {}),
                (this.options = new b(c, a)),
                e.__super__.constructor.call(this);
              var d = a.attr("tabindex") || 0;
              a.data("old-tabindex", d), a.attr("tabindex", "-1");
              var f = this.options.get("dataAdapter");
              this.dataAdapter = new f(a, this.options);
              var g = this.render();
              this._placeContainer(g);
              var h = this.options.get("selectionAdapter");
              (this.selection = new h(a, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, g);
              var i = this.options.get("dropdownAdapter");
              (this.dropdown = new i(a, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, g);
              var j = this.options.get("resultsAdapter");
              (this.results = new j(a, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var k = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (a) {
                  k.trigger("selection:update", { data: a });
                }),
                a.addClass("select2-hidden-accessible"),
                a.attr("aria-hidden", "true"),
                this._syncAttributes(),
                a.data("select2", this);
            };
            return (
              c.Extend(e, c.Observable),
              (e.prototype._generateId = function (a) {
                var b = "";
                return (
                  (b =
                    null != a.attr("id")
                      ? a.attr("id")
                      : null != a.attr("name")
                      ? a.attr("name") + "-" + c.generateChars(2)
                      : c.generateChars(4)),
                  (b = b.replace(/(:|\.|\[|\]|,)/g, "")),
                  (b = "select2-" + b)
                );
              }),
              (e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != b && a.css("width", b);
              }),
              (e.prototype._resolveWidth = function (a, b) {
                var c =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                  var d = this._resolveWidth(a, "style");
                  return null != d ? d : this._resolveWidth(a, "element");
                }
                if ("element" == b) {
                  var e = a.outerWidth(!1);
                  return 0 >= e ? "auto" : e + "px";
                }
                if ("style" == b) {
                  var f = a.attr("style");
                  if ("string" != typeof f) return null;
                  for (
                    var g = f.split(";"), h = 0, i = g.length;
                    i > h;
                    h += 1
                  ) {
                    var j = g[h].replace(/\s/g, ""),
                      k = j.match(c);
                    if (null !== k && k.length >= 1) return k[1];
                  }
                  return null;
                }
                return b;
              }),
              (e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (e.prototype._registerDomEvents = function () {
                var b = this;
                this.$element.on("change.select2", function () {
                  b.dataAdapter.current(function (a) {
                    b.trigger("selection:update", { data: a });
                  });
                }),
                  this.$element.on("focus.select2", function (a) {
                    b.trigger("focus", a);
                  }),
                  (this._syncA = c.bind(this._syncAttributes, this)),
                  (this._syncS = c.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent &&
                    this.$element[0].attachEvent(
                      "onpropertychange",
                      this._syncA
                    );
                var d =
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver;
                null != d
                  ? ((this._observer = new d(function (c) {
                      a.each(c, b._syncA), a.each(c, b._syncS);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1,
                    }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener(
                      "DOMAttrModified",
                      b._syncA,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeInserted",
                      b._syncS,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeRemoved",
                      b._syncS,
                      !1
                    ));
              }),
              (e.prototype._registerDataEvents = function () {
                var a = this;
                this.dataAdapter.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerSelectionEvents = function () {
                var b = this,
                  c = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  b.toggleDropdown();
                }),
                  this.selection.on("focus", function (a) {
                    b.focus(a);
                  }),
                  this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                  });
              }),
              (e.prototype._registerDropdownEvents = function () {
                var a = this;
                this.dropdown.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerResultsEvents = function () {
                var a = this;
                this.results.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerEvents = function () {
                var a = this;
                this.on("open", function () {
                  a.$container.addClass("select2-container--open");
                }),
                  this.on("close", function () {
                    a.$container.removeClass("select2-container--open");
                  }),
                  this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled");
                  }),
                  this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled");
                  }),
                  this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus");
                  }),
                  this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}),
                      this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", { data: c, query: b });
                      });
                  }),
                  this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                      a.trigger("results:append", { data: c, query: b });
                    });
                  }),
                  this.on("keypress", function (b) {
                    var c = b.which;
                    a.isOpen()
                      ? c === d.ESC || c === d.TAB || (c === d.UP && b.altKey)
                        ? (a.close(), b.preventDefault())
                        : c === d.ENTER
                        ? (a.trigger("results:select", {}), b.preventDefault())
                        : c === d.SPACE && b.ctrlKey
                        ? (a.trigger("results:toggle", {}), b.preventDefault())
                        : c === d.UP
                        ? (a.trigger("results:previous", {}),
                          b.preventDefault())
                        : c === d.DOWN &&
                          (a.trigger("results:next", {}), b.preventDefault())
                      : (c === d.ENTER ||
                          c === d.SPACE ||
                          (c === d.DOWN && b.altKey)) &&
                        (a.open(), b.preventDefault());
                  });
              }),
              (e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.options.get("disabled")
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (e.prototype._syncSubtree = function (a, b) {
                var c = !1,
                  d = this;
                if (
                  !a ||
                  !a.target ||
                  "OPTION" === a.target.nodeName ||
                  "OPTGROUP" === a.target.nodeName
                ) {
                  if (b)
                    if (b.addedNodes && b.addedNodes.length > 0)
                      for (var e = 0; e < b.addedNodes.length; e++) {
                        var f = b.addedNodes[e];
                        f.selected && (c = !0);
                      }
                    else
                      b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                  else c = !0;
                  c &&
                    this.dataAdapter.current(function (a) {
                      d.trigger("selection:update", { data: a });
                    });
                }
              }),
              (e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger,
                  d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                  };
                if ((void 0 === b && (b = {}), a in d)) {
                  var f = d[a],
                    g = { prevented: !1, name: a, args: b };
                  if ((c.call(this, f, g), g.prevented))
                    return void (b.prevented = !0);
                }
                c.call(this, a, b);
              }),
              (e.prototype.toggleDropdown = function () {
                this.options.get("disabled") ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {});
              }),
              (e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {});
              }),
              (e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
              }),
              (e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
              }),
              (e.prototype.focus = function (a) {
                this.hasFocus() ||
                  (this.$container.addClass("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (e.prototype.enable = function (a) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null == a || 0 === a.length) && (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b);
              }),
              (e.prototype.data = function () {
                this.options.get("debug") &&
                  arguments.length > 0 &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var a = [];
                return (
                  this.dataAdapter.current(function (b) {
                    a = b;
                  }),
                  a
                );
              }),
              (e.prototype.val = function (b) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == b || 0 === b.length)
                )
                  return this.$element.val();
                var c = b[0];
                a.isArray(c) &&
                  (c = a.map(c, function (a) {
                    return a.toString();
                  })),
                  this.$element.val(c).trigger("change");
              }),
              (e.prototype.destroy = function () {
                this.$container.remove(),
                  this.$element[0].detachEvent &&
                    this.$element[0].detachEvent(
                      "onpropertychange",
                      this._syncA
                    ),
                  null != this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this.$element[0].removeEventListener &&
                      (this.$element[0].removeEventListener(
                        "DOMAttrModified",
                        this._syncA,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeInserted",
                        this._syncS,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeRemoved",
                        this._syncS,
                        !1
                      )),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    this.$element.data("old-tabindex")
                  ),
                  this.$element.removeClass("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (e.prototype.render = function () {
                var b = a(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  b.attr("dir", this.options.get("dir")),
                  (this.$container = b),
                  this.$container.addClass(
                    "select2-container--" + this.options.get("theme")
                  ),
                  b.data("element", this.$element),
                  b
                );
              }),
              e
            );
          }
        ),
        b.define("select2/compat/utils", ["jquery"], function (a) {
          function b(b, c, d) {
            var e,
              f,
              g = [];
            (e = a.trim(b.attr("class"))),
              e &&
                ((e = "" + e),
                a(e.split(/\s+/)).each(function () {
                  0 === this.indexOf("select2-") && g.push(this);
                })),
              (e = a.trim(c.attr("class"))),
              e &&
                ((e = "" + e),
                a(e.split(/\s+/)).each(function () {
                  0 !== this.indexOf("select2-") &&
                    ((f = d(this)), null != f && g.push(f));
                })),
              b.attr("class", g.join(" "));
          }
          return { syncCssClasses: b };
        }),
        b.define(
          "select2/compat/containerCss",
          ["jquery", "./utils"],
          function (a, b) {
            function c(a) {
              return null;
            }
            function d() {}
            return (
              (d.prototype.render = function (d) {
                var e = d.call(this),
                  f = this.options.get("containerCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptContainerCssClass");
                if (((g = g || c), -1 !== f.indexOf(":all:"))) {
                  f = f.replace(":all:", "");
                  var h = g;
                  g = function (a) {
                    var b = h(a);
                    return null != b ? b + " " + a : a;
                  };
                }
                var i = this.options.get("containerCss") || {};
                return (
                  a.isFunction(i) && (i = i(this.$element)),
                  b.syncCssClasses(e, this.$element, g),
                  e.css(i),
                  e.addClass(f),
                  e
                );
              }),
              d
            );
          }
        ),
        b.define(
          "select2/compat/dropdownCss",
          ["jquery", "./utils"],
          function (a, b) {
            function c(a) {
              return null;
            }
            function d() {}
            return (
              (d.prototype.render = function (d) {
                var e = d.call(this),
                  f = this.options.get("dropdownCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptDropdownCssClass");
                if (((g = g || c), -1 !== f.indexOf(":all:"))) {
                  f = f.replace(":all:", "");
                  var h = g;
                  g = function (a) {
                    var b = h(a);
                    return null != b ? b + " " + a : a;
                  };
                }
                var i = this.options.get("dropdownCss") || {};
                return (
                  a.isFunction(i) && (i = i(this.$element)),
                  b.syncCssClasses(e, this.$element, g),
                  e.css(i),
                  e.addClass(f),
                  e
                );
              }),
              d
            );
          }
        ),
        b.define("select2/compat/initSelection", ["jquery"], function (a) {
          function b(a, b, c) {
            c.get("debug") &&
              window.console &&
              console.warn &&
              console.warn(
                "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
              ),
              (this.initSelection = c.get("initSelection")),
              (this._isInitialized = !1),
              a.call(this, b, c);
          }
          return (
            (b.prototype.current = function (b, c) {
              var d = this;
              return this._isInitialized
                ? void b.call(this, c)
                : void this.initSelection.call(
                    null,
                    this.$element,
                    function (b) {
                      (d._isInitialized = !0), a.isArray(b) || (b = [b]), c(b);
                    }
                  );
            }),
            b
          );
        }),
        b.define("select2/compat/inputData", ["jquery"], function (a) {
          function b(a, b, c) {
            (this._currentData = []),
              (this._valueSeparator = c.get("valueSeparator") || ","),
              "hidden" === b.prop("type") &&
                c.get("debug") &&
                console &&
                console.warn &&
                console.warn(
                  "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."
                ),
              a.call(this, b, c);
          }
          return (
            (b.prototype.current = function (b, c) {
              function d(b, c) {
                var e = [];
                return (
                  b.selected || -1 !== a.inArray(b.id, c)
                    ? ((b.selected = !0), e.push(b))
                    : (b.selected = !1),
                  b.children && e.push.apply(e, d(b.children, c)),
                  e
                );
              }
              for (var e = [], f = 0; f < this._currentData.length; f++) {
                var g = this._currentData[f];
                e.push.apply(
                  e,
                  d(g, this.$element.val().split(this._valueSeparator))
                );
              }
              c(e);
            }),
            (b.prototype.select = function (b, c) {
              if (this.options.get("multiple")) {
                var d = this.$element.val();
                (d += this._valueSeparator + c.id),
                  this.$element.val(d),
                  this.$element.trigger("change");
              } else
                this.current(function (b) {
                  a.map(b, function (a) {
                    a.selected = !1;
                  });
                }),
                  this.$element.val(c.id),
                  this.$element.trigger("change");
            }),
            (b.prototype.unselect = function (a, b) {
              var c = this;
              (b.selected = !1),
                this.current(function (a) {
                  for (var d = [], e = 0; e < a.length; e++) {
                    var f = a[e];
                    b.id != f.id && d.push(f.id);
                  }
                  c.$element.val(d.join(c._valueSeparator)),
                    c.$element.trigger("change");
                });
            }),
            (b.prototype.query = function (a, b, c) {
              for (var d = [], e = 0; e < this._currentData.length; e++) {
                var f = this._currentData[e],
                  g = this.matches(b, f);
                null !== g && d.push(g);
              }
              c({ results: d });
            }),
            (b.prototype.addOptions = function (b, c) {
              var d = a.map(c, function (b) {
                return a.data(b[0], "data");
              });
              this._currentData.push.apply(this._currentData, d);
            }),
            b
          );
        }),
        b.define("select2/compat/matcher", ["jquery"], function (a) {
          function b(b) {
            function c(c, d) {
              var e = a.extend(!0, {}, d);
              if (null == c.term || "" === a.trim(c.term)) return e;
              if (d.children) {
                for (var f = d.children.length - 1; f >= 0; f--) {
                  var g = d.children[f],
                    h = b(c.term, g.text, g);
                  h || e.children.splice(f, 1);
                }
                if (e.children.length > 0) return e;
              }
              return b(c.term, d.text, d) ? e : null;
            }
            return c;
          }
          return b;
        }),
        b.define("select2/compat/query", [], function () {
          function a(a, b, c) {
            c.get("debug") &&
              window.console &&
              console.warn &&
              console.warn(
                "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
              ),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              b.callback = c;
              var d = this.options.get("query");
              d.call(null, b);
            }),
            a
          );
        }),
        b.define("select2/dropdown/attachContainer", [], function () {
          function a(a, b, c) {
            a.call(this, b, c);
          }
          return (
            (a.prototype.position = function (a, b, c) {
              var d = c.find(".dropdown-wrapper");
              d.append(b),
                b.addClass("select2-dropdown--below"),
                c.addClass("select2-container--below");
            }),
            a
          );
        }),
        b.define("select2/dropdown/stopPropagation", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              a.call(this, b, c);
              var d = [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ];
              this.$dropdown.on(d.join(" "), function (a) {
                a.stopPropagation();
              });
            }),
            a
          );
        }),
        b.define("select2/selection/stopPropagation", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              a.call(this, b, c);
              var d = [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ];
              this.$selection.on(d.join(" "), function (a) {
                a.stopPropagation();
              });
            }),
            a
          );
        }),
        (function (c) {
          "function" == typeof b.define && b.define.amd
            ? b.define("jquery-mousewheel", ["jquery"], c)
            : "object" == typeof exports
            ? (module.exports = c)
            : c(a);
        })(function (a) {
          function b(b) {
            var g = b || window.event,
              h = i.call(arguments, 1),
              j = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0;
            if (
              ((b = a.event.fix(g)),
              (b.type = "mousewheel"),
              "detail" in g && (m = -1 * g.detail),
              "wheelDelta" in g && (m = g.wheelDelta),
              "wheelDeltaY" in g && (m = g.wheelDeltaY),
              "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
              "axis" in g &&
                g.axis === g.HORIZONTAL_AXIS &&
                ((l = -1 * m), (m = 0)),
              (j = 0 === m ? l : m),
              "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
              "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
              0 !== m || 0 !== l)
            ) {
              if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                (j *= q), (m *= q), (l *= q);
              } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                (j *= r), (m *= r), (l *= r);
              }
              if (
                ((n = Math.max(Math.abs(m), Math.abs(l))),
                (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
                d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
                (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
                (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
                (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
                k.settings.normalizeOffset && this.getBoundingClientRect)
              ) {
                var s = this.getBoundingClientRect();
                (o = b.clientX - s.left), (p = b.clientY - s.top);
              }
              return (
                (b.deltaX = l),
                (b.deltaY = m),
                (b.deltaFactor = f),
                (b.offsetX = o),
                (b.offsetY = p),
                (b.deltaMode = 0),
                h.unshift(b, j, l, m),
                e && clearTimeout(e),
                (e = setTimeout(c, 200)),
                (a.event.dispatch || a.event.handle).apply(this, h)
              );
            }
          }
          function c() {
            f = null;
          }
          function d(a, b) {
            return (
              k.settings.adjustOldDeltas &&
              "mousewheel" === a.type &&
              b % 120 === 0
            );
          }
          var e,
            f,
            g = [
              "wheel",
              "mousewheel",
              "DOMMouseScroll",
              "MozMousePixelScroll",
            ],
            h =
              "onwheel" in document || document.documentMode >= 9
                ? ["wheel"]
                : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
          if (a.event.fixHooks)
            for (var j = g.length; j; )
              a.event.fixHooks[g[--j]] = a.event.mouseHooks;
          var k = (a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
              if (this.addEventListener)
                for (var c = h.length; c; )
                  this.addEventListener(h[--c], b, !1);
              else this.onmousewheel = b;
              a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
                a.data(this, "mousewheel-page-height", k.getPageHeight(this));
            },
            teardown: function () {
              if (this.removeEventListener)
                for (var c = h.length; c; )
                  this.removeEventListener(h[--c], b, !1);
              else this.onmousewheel = null;
              a.removeData(this, "mousewheel-line-height"),
                a.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (b) {
              var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
              return (
                d.length || (d = a("body")),
                parseInt(d.css("fontSize"), 10) ||
                  parseInt(c.css("fontSize"), 10) ||
                  16
              );
            },
            getPageHeight: function (b) {
              return a(b).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
          });
          a.fn.extend({
            mousewheel: function (a) {
              return a
                ? this.bind("mousewheel", a)
                : this.trigger("mousewheel");
            },
            unmousewheel: function (a) {
              return this.unbind("mousewheel", a);
            },
          });
        }),
        b.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
          ],
          function (a, b, c, d) {
            if (null == a.fn.select2) {
              var e = ["open", "close", "destroy"];
              a.fn.select2 = function (b) {
                if (((b = b || {}), "object" == typeof b))
                  return (
                    this.each(function () {
                      var d = a.extend(!0, {}, b);
                      new c(a(this), d);
                    }),
                    this
                  );
                if ("string" == typeof b) {
                  var d,
                    f = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var c = a(this).data("select2");
                      null == c &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            b +
                            "') method was called on an element that is not using Select2."
                        ),
                        (d = c[b].apply(c, f));
                    }),
                    a.inArray(b, e) > -1 ? this : d
                  );
                }
                throw new Error("Invalid arguments for Select2: " + b);
              };
            }
            return (
              null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
            );
          }
        ),
        { define: b.define, require: b.require }
      );
    })(),
    c = b.require("jquery.select2");
  return (a.fn.select2.amd = b), c;
});

/*-----------------------------------
   Tilt.js
-----------------------------------*/
("use strict");
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
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
      };
!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" ===
        ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
      module.exports
    ? (module.exports = function (i, s) {
        return (
          void 0 === s &&
            (s =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(i)),
          t(s),
          s
        );
      })
    : t(jQuery);
})(function (t) {
  return (
    (t.fn.tilt = function (i) {
      var s = function () {
          this.ticking ||
            (requestAnimationFrame(g.bind(this)), (this.ticking = !0));
        },
        e = function () {
          var i = this;
          t(this).on("mousemove", o),
            t(this).on("mouseenter", a),
            this.settings.reset && t(this).on("mouseleave", l),
            this.settings.glare && t(window).on("resize", d.bind(i));
        },
        n = function () {
          var i = this;
          void 0 !== this.timeout && clearTimeout(this.timeout),
            t(this).css({
              transition: this.settings.speed + "ms " + this.settings.easing,
            }),
            this.settings.glare &&
              this.glareElement.css({
                transition:
                  "opacity " +
                  this.settings.speed +
                  "ms " +
                  this.settings.easing,
              }),
            (this.timeout = setTimeout(function () {
              t(i).css({ transition: "" }),
                i.settings.glare && i.glareElement.css({ transition: "" });
            }, this.settings.speed));
        },
        a = function (i) {
          (this.ticking = !1),
            t(this).css({ "will-change": "transform" }),
            n.call(this),
            t(this).trigger("tilt.mouseEnter");
        },
        r = function (i) {
          return (
            "undefined" == typeof i &&
              (i = {
                pageX: t(this).offset().left + t(this).outerWidth() / 2,
                pageY: t(this).offset().top + t(this).outerHeight() / 2,
              }),
            { x: i.pageX, y: i.pageY }
          );
        },
        o = function (t) {
          (this.mousePositions = r(t)), s.call(this);
        },
        l = function () {
          n.call(this),
            (this.reset = !0),
            s.call(this),
            t(this).trigger("tilt.mouseLeave");
        },
        h = function () {
          var i = t(this).outerWidth(),
            s = t(this).outerHeight(),
            e = t(this).offset().left,
            n = t(this).offset().top,
            a = (this.mousePositions.x - e) / i,
            r = (this.mousePositions.y - n) / s,
            o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(
              2
            ),
            l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(
              2
            ),
            h =
              Math.atan2(
                this.mousePositions.x - (e + i / 2),
                -(this.mousePositions.y - (n + s / 2))
              ) *
              (180 / Math.PI);
          return {
            tiltX: o,
            tiltY: l,
            percentageX: 100 * a,
            percentageY: 100 * r,
            angle: h,
          };
        },
        g = function () {
          return (
            (this.transforms = h.call(this)),
            this.reset
              ? ((this.reset = !1),
                t(this).css(
                  "transform",
                  "perspective(" +
                    this.settings.perspective +
                    "px) rotateX(0deg) rotateY(0deg)"
                ),
                void (
                  this.settings.glare &&
                  (this.glareElement.css(
                    "transform",
                    "rotate(180deg) translate(-50%, -50%)"
                  ),
                  this.glareElement.css("opacity", "0"))
                ))
              : (t(this).css(
                  "transform",
                  "perspective(" +
                    this.settings.perspective +
                    "px) rotateX(" +
                    ("x" === this.settings.disableAxis
                      ? 0
                      : this.transforms.tiltY) +
                    "deg) rotateY(" +
                    ("y" === this.settings.disableAxis
                      ? 0
                      : this.transforms.tiltX) +
                    "deg) scale3d(" +
                    this.settings.scale +
                    "," +
                    this.settings.scale +
                    "," +
                    this.settings.scale +
                    ")"
                ),
                this.settings.glare &&
                  (this.glareElement.css(
                    "transform",
                    "rotate(" +
                      this.transforms.angle +
                      "deg) translate(-50%, -50%)"
                  ),
                  this.glareElement.css(
                    "opacity",
                    "" +
                      (this.transforms.percentageY * this.settings.maxGlare) /
                        100
                  )),
                t(this).trigger("change", [this.transforms]),
                void (this.ticking = !1))
          );
        },
        c = function () {
          var i = this.settings.glarePrerender;
          if (
            (i ||
              t(this).append(
                '<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'
              ),
            (this.glareElementWrapper = t(this).find(".js-tilt-glare")),
            (this.glareElement = t(this).find(".js-tilt-glare-inner")),
            !i)
          ) {
            var s = {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            };
            this.glareElementWrapper
              .css(s)
              .css({ overflow: "hidden", "pointer-events": "none" }),
              this.glareElement.css({
                position: "absolute",
                top: "50%",
                left: "50%",
                "background-image":
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                width: "" + 2 * t(this).outerWidth(),
                height: "" + 2 * t(this).outerWidth(),
                transform: "rotate(180deg) translate(-50%, -50%)",
                "transform-origin": "0% 0%",
                opacity: "0",
              });
          }
        },
        d = function () {
          this.glareElement.css({
            width: "" + 2 * t(this).outerWidth(),
            height: "" + 2 * t(this).outerWidth(),
          });
        };
      return (
        (t.fn.tilt.destroy = function () {
          t(this).each(function () {
            t(this).find(".js-tilt-glare").remove(),
              t(this).css({ "will-change": "", transform: "" }),
              t(this).off("mousemove mouseenter mouseleave");
          });
        }),
        (t.fn.tilt.getValues = function () {
          var i = [];
          return (
            t(this).each(function () {
              (this.mousePositions = r.call(this)), i.push(h.call(this));
            }),
            i
          );
        }),
        (t.fn.tilt.reset = function () {
          t(this).each(function () {
            var i = this;
            (this.mousePositions = r.call(this)),
              (this.settings = t(this).data("settings")),
              l.call(this),
              setTimeout(function () {
                i.reset = !1;
              }, this.settings.transition);
          });
        }),
        this.each(function () {
          var s = this;
          (this.settings = t.extend(
            {
              maxTilt: t(this).is("[data-tilt-max]")
                ? t(this).data("tilt-max")
                : 20,
              perspective: t(this).is("[data-tilt-perspective]")
                ? t(this).data("tilt-perspective")
                : 300,
              easing: t(this).is("[data-tilt-easing]")
                ? t(this).data("tilt-easing")
                : "cubic-bezier(.03,.98,.52,.99)",
              scale: t(this).is("[data-tilt-scale]")
                ? t(this).data("tilt-scale")
                : "1",
              speed: t(this).is("[data-tilt-speed]")
                ? t(this).data("tilt-speed")
                : "400",
              transition:
                !t(this).is("[data-tilt-transition]") ||
                t(this).data("tilt-transition"),
              disableAxis: t(this).is("[data-tilt-disable-axis]")
                ? t(this).data("tilt-disable-axis")
                : null,
              axis: t(this).is("[data-tilt-axis]")
                ? t(this).data("tilt-axis")
                : null,
              reset:
                !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
              glare:
                !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
              maxGlare: t(this).is("[data-tilt-maxglare]")
                ? t(this).data("tilt-maxglare")
                : 1,
            },
            i
          )),
            null !== this.settings.axis &&
              (console.warn(
                "Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"
              ),
              (this.settings.disableAxis = this.settings.axis)),
            (this.init = function () {
              t(s).data("settings", s.settings),
                s.settings.glare && c.call(s),
                e.call(s);
            }),
            this.init();
        })
      );
    }),
    t("[data-tilt]").tilt(),
    !0
  );
});

/*-----------------------------------s
  Slick Slider
-----------------------------------*/
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
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
        (n.initials = {
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
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
