"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = mui.react.Button,
    Panel = mui.react.Panel,
    Appbar = mui.react.Appbar,
    Divider = mui.react.Divider,
    Table = mui.react.Table,
    Form = mui.react.Form,
    Input = mui.react.Input,
    Row = mui.react.Row,
    Col = mui.react.Col,
    Checkbox = mui.react.Checkbox,
    Container = mui.react.Container;

var Items = function (_React$Component) {
  _inherits(Items, _React$Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Items.prototype.render = function render() {
    var name = this.props.product.stocked ? this.props.product.name : React.createElement(
      "span",
      { style: { color: 'red' } },
      this.props.product.name
    );
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        name
      ),
      React.createElement(
        "td",
        null,
        this.props.product.price
      )
    );
  };

  return Items;
}(React.Component);

var TitleBar = function (_React$Component2) {
  _inherits(TitleBar, _React$Component2);

  function TitleBar() {
    _classCallCheck(this, TitleBar);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  TitleBar.prototype.render = function render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        { colSpan: "2" },
        this.props.category
      )
    );
  };

  return TitleBar;
}(React.Component);

var StockBoard = function (_React$Component3) {
  _inherits(StockBoard, _React$Component3);

  function StockBoard() {
    _classCallCheck(this, StockBoard);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  StockBoard.prototype.render = function render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.category !== lastCategory) {
        rows.push(React.createElement(TitleBar, { category: product.category, key: product.category }));
      }
      rows.push(React.createElement(Items, { product: product, key: product.name }));
      lastCategory = product.category;
    });
    return React.createElement(
      "table",
      { "class": "mui-table--bordered" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Name"
          ),
          React.createElement(
            "th",
            null,
            "Price"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        rows
      )
    );
  };

  return StockBoard;
}(React.Component);

var SearchBar = function (_React$Component4) {
  _inherits(SearchBar, _React$Component4);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  SearchBar.prototype.render = function render() {
    return React.createElement(
      Form,
      { inline: true },
      React.createElement(Input, { hint: "Search here" }),
      React.createElement(
        Button,
        { color: "accent", variant: "raised" },
        "Search"
      ),
      React.createElement(Checkbox, { name: "inputA1", label: "Only show product in stock", defaultChecked: false })
    );
  };

  return SearchBar;
}(React.Component);

var ProductList = function (_React$Component5) {
  _inherits(ProductList, _React$Component5);

  function ProductList() {
    _classCallCheck(this, ProductList);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  ProductList.prototype.render = function render() {
    return React.createElement(
      Panel,
      null,
      React.createElement(SearchBar, null),
      React.createElement(Divider, null),
      React.createElement(
        Container,
        null,
        React.createElement(StockBoard, { products: PRODUCTS })
      )
    );
  };

  return ProductList;
}(React.Component);

var AppBar = function (_React$Component6) {
  _inherits(AppBar, _React$Component6);

  function AppBar() {
    _classCallCheck(this, AppBar);

    return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
  }

  AppBar.prototype.render = function render() {
    var s1 = { verticalAlign: 'middle' };
    return React.createElement(
      Appbar,
      { className: "mui--appbar-height", style: s1 },
      React.createElement(
        "div",
        { className: "mui--text-headline" },
        "Product List"
      )
    );
  };

  return AppBar;
}(React.Component);

function App() {
  return React.createElement(
    Container,
    null,
    React.createElement(
      Row,
      null,
      React.createElement(Col, { md: "4" }),
      React.createElement(
        Col,
        { md: "4" },
        React.createElement(ProductList, null)
      ),
      React.createElement(Col, { md: "4" })
    )
  );
}

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

ReactDOM.render(React.createElement(AppBar, null), document.getElementById('bar'));

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));