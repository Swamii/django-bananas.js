"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Content = _interopRequireDefault(require("../Content"));

var _context = _interopRequireDefault(require("../context"));

var _TitleBar = _interopRequireDefault(require("../TitleBar"));

var _ChangePasswordForm = _interopRequireDefault(require("./ChangePasswordForm"));

var _SettingsForm = _interopRequireDefault(require("./SettingsForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  paper: {
    padding: theme.spacing(3),
    alignSelf: "flex-start"
  }
});

class MePage extends _react.default.Component {
  render() {
    var {
      admin
    } = this.context;
    var {
      data,
      classes
    } = this.props;
    var user = data.obj;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_TitleBar.default, {
      title: user.full_name
    }), _react.default.createElement(_Content.default, null, _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_core.Paper, {
      classes: {
        root: classes.paper
      },
      elevation: 1,
      square: true
    }, _react.default.createElement(_ChangePasswordForm.default, null)), admin.settings.settings.editable && _react.default.createElement(_core.Paper, {
      classes: {
        root: classes.paper
      },
      elevation: 1,
      square: true
    }, _react.default.createElement(_SettingsForm.default, {
      settings: admin.settings.settings,
      onChange: (setting, value) => {
        admin.settings.configure({
          [setting]: value
        });
      },
      onReset: () => {
        admin.settings.reset();
      }
    })))));
  }

}

_defineProperty(MePage, "propTypes", {
  classes: _propTypes.default.object.isRequired,
  data: _propTypes.default.object.isRequired
});

_defineProperty(MePage, "contextType", _context.default);

var _default = (0, _styles.withStyles)(styles)(MePage);

exports.default = _default;