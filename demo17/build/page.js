"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var element = document.createElement('div');
            element.innerText = 'this is header';
            document.body.appendChild(element);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var element = document.createElement('div');
            element.innerText = 'this is content';
            document.body.appendChild(element);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var element = document.createElement('div');
            element.innerText = 'this is footer';
            document.body.appendChild(element);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
