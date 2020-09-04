"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.addFavorite=exports.postFavorite=exports.addLeaders=exports.leadersFailed=exports.leadersLoading=exports.fetchLeaders=exports.addPromos=exports.promosFailed=exports.promosLoading=exports.fetchPromos=exports.addDishes=exports.dishesFailed=exports.dishesLoading=exports.fetchDishes=exports.addComments=exports.commentsFailed=exports.fetchComments=void 0;var ActionTypes=_interopRequireWildcard(require("./ActionTypes"));var _baseUrl=require("../shared/baseUrl");var fetchComments=function fetchComments(){return function(dispatch){return fetch(_baseUrl.baseUrl+'comments').then(function(response){if(response.ok){return response;}else{var error=new Error('Error '+response.status+': '+response.status);error.response=response;throw error;}},function(error){var errMess=new Error(error.message);throw errMess;}).then(function(response){return response.json();}).then(function(comments){return dispatch(addComments(comments));})["catch"](function(error){return dispatch(commentsFailed(error));});};};exports.fetchComments=fetchComments;var commentsFailed=function commentsFailed(errmess){return{type:ActionTypes.COMMENTS_FAILED,payload:errmess};};exports.commentsFailed=commentsFailed;var addComments=function addComments(comments){return{type:ActionTypes.ADD_COMMENTS,payload:comments};};exports.addComments=addComments;var fetchDishes=function fetchDishes(){return function(dispatch){dispatch(dishesLoading());return fetch(_baseUrl.baseUrl+'dishes').then(function(response){if(response.ok){return response;}else{var error=new Error('Error '+response.status+': '+response.status);error.response=response;throw error;}},function(error){var errMess=new Error(error.message);throw errMess;}).then(function(response){return response.json();}).then(function(dishes){return dispatch(addDishes(dishes));})["catch"](function(error){return dispatch(dishesFailed(error));});};};exports.fetchDishes=fetchDishes;var dishesLoading=function dishesLoading(){return{type:ActionTypes.DISHES_LOADING};};exports.dishesLoading=dishesLoading;var dishesFailed=function dishesFailed(errmess){return{type:ActionTypes.DISHES_FAILED,payload:errmess};};exports.dishesFailed=dishesFailed;var addDishes=function addDishes(dishes){return{type:ActionTypes.ADD_DISHES,payload:dishes};};exports.addDishes=addDishes;var fetchPromos=function fetchPromos(){return function(dispatch){dispatch(promosLoading());return fetch(_baseUrl.baseUrl+'promotions').then(function(response){if(response.ok){return response;}else{var error=new Error('Error '+response.status+': '+response.status);error.response=response;throw error;}},function(error){var errMess=new Error(error.message);throw errMess;}).then(function(response){return response.json();}).then(function(promos){return dispatch(addPromos(promos));})["catch"](function(error){return dispatch(promosFailed(error));});};};exports.fetchPromos=fetchPromos;var promosLoading=function promosLoading(){return{type:ActionTypes.PROMOS_LOADING};};exports.promosLoading=promosLoading;var promosFailed=function promosFailed(errmess){return{type:ActionTypes.PROMOS_FAILED,payload:errmess};};exports.promosFailed=promosFailed;var addPromos=function addPromos(promos){return{type:ActionTypes.ADD_PROMOS,payload:promos};};exports.addPromos=addPromos;var fetchLeaders=function fetchLeaders(){return function(dispatch){dispatch(leadersLoading());return fetch(_baseUrl.baseUrl+'leaders').then(function(response){if(response.ok){return response;}else{var error=new Error('Error '+response.status+': '+response.status);error.response=response;throw error;}},function(error){var errMess=new Error(error.message);throw errMess;}).then(function(response){return response.json();}).then(function(leaders){return dispatch(addLeaders(leaders));})["catch"](function(error){return dispatch(leadersFailed(error));});};};exports.fetchLeaders=fetchLeaders;var leadersLoading=function leadersLoading(){return{type:ActionTypes.LEADERS_LOADING};};exports.leadersLoading=leadersLoading;var leadersFailed=function leadersFailed(errmess){return{type:ActionTypes.LEADERS_FAILED,payload:errmess};};exports.leadersFailed=leadersFailed;var addLeaders=function addLeaders(leaders){return{type:ActionTypes.ADD_LEADERS,payload:leaders};};exports.addLeaders=addLeaders;var postFavorite=function postFavorite(dishId){return function(dispatch){setTimeout(function(){dispatch(addFavorite(dishId));},2000);};};exports.postFavorite=postFavorite;var addFavorite=function addFavorite(dishId){return{type:ActionTypes.ADD_FAVORITE,payload:dishId};};exports.addFavorite=addFavorite;