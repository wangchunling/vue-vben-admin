import{d as e,r as a,e as o,g as t,h as s,o as r,i,w as n,j as p,m as l}from"./index.c9b191ae.js";import"./_stringToArray.f9d23805.js";import"./domUtils.43bacb00.js";import{a as u}from"./index.34b4eaee.js";import"./RightOutlined.ce1a9cb6.js";import"./useTimeout.306ef350.js";import"./index.ad8055f7.js";import"./animation.f174d9e2.js";import"./useScrollTo.ed4075e5.js";import{_ as d}from"./index.aec1bac9.js";import"./usePageContext.42b62d5d.js";import{u as c}from"./useCopyToClipboard.a8c61ee9.js";var m=e({name:"Copy",components:{CollapseContainer:u,PageWrapper:d},setup(){const e=a(""),{createMessage:s}=t(),{clipboardRef:r,copiedRef:i}=c();return{handleCopy:function(){const a=o(e);a?(r.value=a,o(i)&&s.warning("copy success！")):s.warning("请输入要拷贝的内容！")},value:e}}});const f={class:"flex justify-center"},j=l("Copy");m.render=function(e,a,o,t,l,u){const d=s("a-input"),c=s("a-button"),m=s("CollapseContainer"),C=s("PageWrapper");return r(),i(C,{title:"文本复制示例"},{default:n((()=>[p(m,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",f,[p(d,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),p(c,{type:"primary",onClick:e.handleCopy},{default:n((()=>[j])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default m;