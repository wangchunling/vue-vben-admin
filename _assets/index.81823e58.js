let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i,o,j as s,k as n,w as a}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import{A as r}from"./index.11699fd0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.04e4416d.js";import"./UpOutlined.0ffab499.js";import"./LeftOutlined.3325f905.js";import"./index.f53f7db4.js";import{b as d,S as m}from"./index.de879313.js";import"./index.5c04e818.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./resizeEvent.f9055435.js";import"./domUtils.55f014ea.js";import"./useExpose.71ee03b4.js";import"./animation.85d10296.js";import"./index.1dbdd6e1.js";import p from"./TargetContent.96c38b4f.js";var l=t({components:{LazyContainer:d,TargetContent:p,Skeleton:m,Alert:r},setup:()=>({})});const f={class:"p-4 lazy-base-demo"},c={class:"lazy-base-demo-wrap"},j=n("h1",null,"向下滚动",-1),x={class:"lazy-base-demo-box"};l.render=function(e,t,r,d,m,p){const l=i("Alert"),u=i("TargetContent"),b=i("Skeleton"),g=i("LazyContainer");return o(),s("div",f,[n(l,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),n("div",c,[j,n("div",x,[n(g,null,{skeleton:a((()=>[n(b,{rows:10})])),default:a((()=>[n(u)])),_:1})])])])};export default l;