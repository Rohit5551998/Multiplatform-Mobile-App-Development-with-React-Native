"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.favorites=void 0;var ActionTypes=_interopRequireWildcard(require("./ActionTypes"));var favorites=function favorites(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case ActionTypes.ADD_FAVORITE:if(state.some(function(el){return el===action.payload;}))return state;else return state.concat(action.payload);default:return state;}};exports.favorites=favorites;