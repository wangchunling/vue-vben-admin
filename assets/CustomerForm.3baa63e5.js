import{d as e,b3 as s,b_ as o,g as r,h as t,o as i,i as a,w as n,j as l}from"./index.1913eb94.js";import{_ as d}from"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import{a as p}from"./index.bdf910cd.js";import"./index.f94b9e9e.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import{u as m}from"./useForm.7ec6aae7.js";import{_ as u}from"./index.de3a5f99.js";import"./usePageContext.c6a4ca7d.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:r})=>s(o,{placeholder:"请输入",value:e[r],onChange:s=>{e[r]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var f=e({components:{BasicForm:d,CollapseContainer:p,PageWrapper:u},setup(){const{createMessage:e}=r(),[s,{setProps:o}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});f.render=function(e,s,o,r,d,p){const m=t("a-input"),u=t("BasicForm"),c=t("CollapseContainer"),f=t("PageWrapper");return i(),a(f,{title:"自定义组件示例"},{default:n((()=>[l(c,{title:"自定义表单"},{default:n((()=>[l(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n((({model:e,field:s})=>[l(m,{value:e[s],"onUpdate:value":o=>e[s]=o,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;