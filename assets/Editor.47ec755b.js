import{d as e,b3 as s,g as t,h as i,o as a,i as r,w as o,j as n}from"./index.1913eb94.js";import{_ as d}from"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import{a as m}from"./index.bdf910cd.js";import"./index.f94b9e9e.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import{_ as l}from"./index.de3a5f99.js";import"./usePageContext.c6a4ca7d.js";import{M as u}from"./index.944e7635.js";const p=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>s(u,{value:e[t],onChange:s=>{e[t]=s}})}];var c=e({components:{BasicForm:d,CollapseContainer:m,PageWrapper:l},setup(){const{createMessage:e}=t();return{schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))}}}});c.render=function(e,s,t,d,m,l){const u=i("BasicForm"),p=i("CollapseContainer"),c=i("PageWrapper");return a(),r(c,{title:"MarkDown组件嵌入Form示例"},{default:o((()=>[n(p,{title:"MarkDown表单"},{default:o((()=>[n(u,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default c;