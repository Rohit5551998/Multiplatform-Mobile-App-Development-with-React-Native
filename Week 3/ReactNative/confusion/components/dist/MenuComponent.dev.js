"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeElements=require("react-native-elements");var _jsxFileName="/home/rohit/Coursera/Web Dev/Multiplatform-Mobile-App-Development-with-React-Native/Week 1/ReactNative/confusion/components/MenuComponent.js";function Menu(props){var renderMenuItem=function renderMenuItem(_ref){var item=_ref.item,index=_ref.index;return _react["default"].createElement(_reactNativeElements.ListItem,{key:index,title:item.name,subtitle:item.description,hideChevron:true,onPress:function onPress(){return props.onPress(item.id);},leftAvatar:{source:require("./images/uthappizza.png")},__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:13}});};return _react["default"].createElement(_reactNative.FlatList,{data:props.dishes,renderItem:renderMenuItem,keyExtractor:function keyExtractor(item){return item.id.toString();},__source:{fileName:_jsxFileName,lineNumber:21,columnNumber:9}});}var _default=Menu;exports["default"]=_default;