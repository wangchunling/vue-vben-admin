import{cA as a,d as s,B as e,co as t,a6 as o,aI as r,g as i,bD as d,bE as n,h as c,o as m,i as l,aL as p,j as u,m as f}from"./index.1913eb94.js";import{_ as j}from"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import{a as b}from"./index.bdf910cd.js";import"./index.f94b9e9e.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import{h}from"./header.3041aac3.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import{u as g}from"./useForm.7ec6aae7.js";import{b as _}from"./data.a32591d5.js";var x;(x||(x={})).ACCOUNT_INFO="/account/getAccountInfo";var C=s({components:{BasicForm:j,CollapseContainer:b,Button:e,Upload:t,Icon:o},setup(){const{createMessage:s}=i(),[e,{setFieldsValue:t}]=g({labelWidth:120,schemas:_,showActionButtonGroup:!1});return r((async()=>{const s=await a.request({url:x.ACCOUNT_INFO,method:"GET"});t(s)})),{headerImg:h,register:e,handleSubmit:()=>{s.success("更新成功！")}}}});const I=p("data-v-7482d48c");d("data-v-7482d48c");const v={class:"change-avatar"},F=u("div",{class:"mb-2"},"头像",-1),w=f("更换头像 "),A=f("更新基本信息");n();const B=I(((a,s,e,t,o,r)=>{const i=c("BasicForm"),d=c("a-col"),n=c("Icon"),p=c("Button"),f=c("Upload"),j=c("a-row"),b=c("CollapseContainer");return m(),l(b,{title:"基本设置",canExpan:!1},{default:I((()=>[u(j,{gutter:24},{default:I((()=>[u(d,{span:14},{default:I((()=>[u(i,{onRegister:a.register},null,8,["onRegister"])])),_:1}),u(d,{span:10},{default:I((()=>[u("div",v,[F,u("img",{width:"140",src:a.headerImg},null,8,["src"]),u(f,{showUploadList:!1},{default:I((()=>[u(p,{type:"ghost",class:"ml-5"},{default:I((()=>[u(n,{icon:"feather:upload"}),w])),_:1})])),_:1})])])),_:1})])),_:1}),u(p,{type:"primary",onClick:a.handleSubmit},{default:I((()=>[A])),_:1},8,["onClick"])])),_:1})}));C.render=B,C.__scopeId="data-v-7482d48c";export default C;