parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    jbf7: [
      function (require, module, exports) {
        var e = window.unlayer.React,
          t = function (t) {
            t.label;
            var l = t.value,
              o = t.updateValue;
            t.data;
            return e.createElement(
              "div",
              null,
              e.createElement("div", null, "My React Color Picker"),
              e.createElement("input", {
                class: "color-value",
                defaultValue: l,
                onChange: function (e) {
                  return o(e.target.value);
                },
              }),
              e.createElement(
                "button",
                {
                  class: "red",
                  onClick: function () {
                    return o("#f00");
                  },
                },
                "Red"
              ),
              e.createElement(
                "button",
                {
                  class: "green",
                  onClick: function () {
                    return o("#0f0");
                  },
                },
                "Green"
              ),
              e.createElement(
                "button",
                {
                  class: "blue",
                  onClick: function () {
                    return o("#00f");
                  },
                },
                "Blue"
              )
            );
          };
        var html =
          `  <label className='review-form__rating-label' style={{ display: 'block' }}><input className'review-form__rating' name='review_rating' type='radio' defaultValue={3} style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, Sans-Serif', fontSize: 14, lineHeight: '1.5', margin: '0 auto 5px' }} />  <div className='review-form__rating-star' style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★★</div>  <div className='review-form__rating-sta' style={{ color: '#fec610', fontSize: 16, maxWidth: 65, textShadow: '0 0 1px rgba(0, 0, 0, 0.15)' }}>★</div> </label>`;
        unlayer.registerPropertyEditor({ name: "my_color_picker", Widget: t });
        var l = function (t) {
          var l = t.values;
          return e.createElement(
            "div",
            { style: { color: l.textColor } },
            html
          );
        };
        const CustomViewer = () => {
          return e.createViewer({
            render(values) {
              return `<div>I am a custom tool.</div>`;
            },
          });
        };
        unlayer.registerTool({
          name: "Products",
          label: " Products",
          icon: "fa-smile",
          supportedDisplayModes: ["web", "email"],
          usageLimit: 1,
          options: {
            default: { title: null },
            text: {
              title: "Text",
              position: 1,
              options: {
                textColor: {
                  label: "Color",
                  defaultValue: "#ff0000",
                  widget: "my_color_picker",
                },
              },
            },
          },
          values: {},
          renderer: {
            Viewer: unlayer.createViewer({
                render(values) {
                  return html;
                }
              }),
            exporters: {
              web: function (e) {
                return "<div>I am a custom  voollllllllllllll 1 tool.</div>";
              },
              email: function (e) {
                return "<div>I am a custom22222222222222222 tool.</div>";
              },
            },
            head: {
              css: function (e) {},
              js: function (e) {
                console.log("this is tool custom js");
              },
            },
          },
        });
      },
      {},
    ],
  },
  {},
  ["jbf7"],  
  null
);
//# sourceMappingURL=/custom.js.map
