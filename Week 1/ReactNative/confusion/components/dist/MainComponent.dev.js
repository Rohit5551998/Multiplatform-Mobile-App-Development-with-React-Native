"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _MenuComponent=_interopRequireDefault(require("./MenuComponent"));var _DishdetailComponent=_interopRequireDefault(require("./DishdetailComponent"));var _reactNative=require("react-native");var _reactNavigation=require("react-navigation");var _reactNavigationStack=require("react-navigation-stack");var _jsxFileName="/home/rohit/Coursera/Web Dev/Multiplatform-Mobile-App-Development-with-React-Native/Week 1/ReactNative/confusion/components/MainComponent.js";var MenuNavigator=(0,_reactNavigationStack.createStackNavigator)({Menu:{screen:_MenuComponent["default"]},Dishdetail:{screen:_DishdetailComponent["default"]}},{initialRouteName:'Menu',defaultNavigationOptions:{headerStyle:{backgroundColor:'#512DA8'},headerTintColor:'#fff',headerTitleStyle:{color:'#fff'}}});var MenuContainer=(0,_reactNavigation.createAppContainer)(MenuNavigator);var Main=function(_Component){(0,_inherits2["default"])(Main,_Component);function Main(){(0,_classCallCheck2["default"])(this,Main);return(0,_possibleConstructorReturn2["default"])(this,(0,_getPrototypeOf2["default"])(Main).apply(this,arguments));}(0,_createClass2["default"])(Main,[{key:"render",value:function render(){return _react["default"].createElement(_reactNative.View,{style:{flex:1,paddingTop:_reactNative.Platform.OS==='ios'?0:Expo.Constants.statusBarHeight},__source:{fileName:_jsxFileName,lineNumber:30,columnNumber:13}},_react["default"].createElement(MenuContainer,{__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:17}}));}}]);return Main;}(_react.Component);var _default=Main;exports["default"]=_default;