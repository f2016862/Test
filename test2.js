parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
   
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
        unlayer.registerPropertyEditor({ name: "my_color_picker", Widget: t });
        var l = function (t) {
          var l = t.values;
          return e.createElement(
            "div",
            { style: { color: l.textColor } },
            "I am a custom tool."
          );
        };
        unlayer.registerTool({
          name: "my_tool",
          label: "My Tool",
          icon: "fa-smile",
          supportedDisplayModes: ["web", "email"],
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
            Viewer: l,
            exporters: {
              web: function (e) {
                return "<div>I am a custom tool.</div>";
              },
              email: function (e) {
                return "<div>I am a custom tool.</div>";
              },
            },
            head: { css: function (e) {}, js: function (e) {} },
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
