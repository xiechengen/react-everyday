"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Billboard(props) {
  if (props.guess == false) {
    return React.createElement(
      "h1",
      null,
      "My guess is ",
      props.num
    );
  } else {
    return React.createElement(
      "h1",
      null,
      "My guess is Correct!"
    );
  }
}

var Guess = function (_React$Component) {
  _inherits(Guess, _React$Component);

  function Guess(props) {
    _classCallCheck(this, Guess);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { mid: 50, reset: false };
    _this.start = 0;
    _this.end = 100;
    _this.high = _this.high.bind(_this);
    _this.low = _this.low.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  Guess.prototype.high = function high() {
    this.end = this.state.mid;
    var newmid = Math.floor((this.start + this.end) / 2);
    console.log(newmid);
    this.setState({ mid: newmid, hit: 0 });
  };

  Guess.prototype.low = function low() {
    this.start = this.state.mid;
    var newmid = Math.floor((this.start + this.end) / 2);
    this.setState({ mid: newmid });
  };

  Guess.prototype.reset = function reset() {
    this.start = 0;
    this.end = 100;
    if (this.state.reset == false) {
      this.setState({ reset: true });
    } else {
      this.setState({ mid: 50, reset: false });
    }
  };

  Guess.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      "   ",
      React.createElement(Billboard, { guess: this.state.reset, num: this.state.mid }),
      React.createElement(
        "button",
        { onClick: this.high },
        "too high        "
      ),
      React.createElement(
        "button",
        { onClick: this.low },
        "too low        "
      ),
      React.createElement(
        "button",
        { onClick: this.reset },
        this.state.reset ? "Reset" : "Yes!",
        "       "
      ),
      "      "
    );
  };

  return Guess;
}(React.Component);

ReactDOM.render(React.createElement(Guess, null), document.getElementById('root'));