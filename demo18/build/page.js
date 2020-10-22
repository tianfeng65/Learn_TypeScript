define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var element = document.createElement('div');
            element.innerText = 'this is header';
            document.body.appendChild(element);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var element = document.createElement('div');
            element.innerText = 'this is content';
            document.body.appendChild(element);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var element = document.createElement('div');
            element.innerText = 'this is footer';
            document.body.appendChild(element);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
