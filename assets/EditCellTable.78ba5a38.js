import{d as e,h as t,o as i,i as d,j as n}from"./index.1913eb94.js";import"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import"./index.bdf910cd.js";import"./CheckOutlined.c53a211d.js";import"./index.f94b9e9e.js";import{_ as o,a}from"./index.db3d08b6.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./SettingOutlined.e940c981.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import"./useForm.7ec6aae7.js";import"./useSortable.a3f8f546.js";import"./useExpose.1d20c03d.js";import{u as s}from"./useTable.6cfc8531.js";import{o as r}from"./select.2f54d236.js";import{d as l}from"./table.4ea4bfd7.js";const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:r},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var p=e({components:{BasicTable:o,EditTableHeaderIcon:a},setup(){const[e]=s({title:"可编辑单元格示例",api:l,columns:m,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const c={class:"p-4"};p.render=function(e,o,a,s,r,l){const m=t("BasicTable");return i(),d("div",c,[n(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default p;