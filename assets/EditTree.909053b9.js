import{j as e,a0 as t,a1 as r,d as a,bf as n,h as i,o,i as s,w as l}from"./index.c9b191ae.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import{a as c}from"./index.34b4eaee.js";import"./RightOutlined.ce1a9cb6.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import{_ as u}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import{B as f,t as d}from"./data.8b028283.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(a,n){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){p(e,t,r[t])}))}return e}({},a,n.attrs);return e(r,t(i,{icon:b}),null)};m.displayName="DeleteOutlined",m.inheritAttrs=!1;var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(a,n){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){g(e,t,r[t])}))}return e}({},a,n.attrs);return e(r,t(i,{icon:h}),null)};v.displayName="PlusOutlined",v.inheritAttrs=!1;var j=a({components:{BasicTree:f,CollapseContainer:c,PageWrapper:u},setup:()=>({treeData:d,actionList:[{render:e=>n(v,{class:"ml-2",onClick:()=>{}})},{render:()=>n(m)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const y={class:"flex"};j.render=function(t,r,a,n,c,u){const f=i("BasicTree"),d=i("CollapseContainer"),b=i("PageWrapper");return o(),s(b,{title:"Tree函数操作示例"},{default:l((()=>[e("div",y,[e(d,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:l((()=>[e(f,{treeData:t.treeData,actionList:t.actionList},null,8,["treeData","actionList"])])),_:1}),e(d,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:l((()=>[e(f,{treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default j;