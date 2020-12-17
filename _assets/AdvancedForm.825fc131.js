import{a as e,i as o,o as l,j as n,k as s,w as p}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import{s as t}from"./index.a5bb273d.js";import"./colors.5745025a.js";import"./RightOutlined.0becd0a0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.dfac5dac.js";import"./index.5869ffa6.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import{C as i}from"./index.1e2d1a76.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import{u as a}from"./useForm.ba76dbfd.js";var r=e({components:{BasicForm:t,CollapseContainer:i},setup(){const[e]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const c={class:"m-4"};r.render=function(e,t,i,a,r,d){const m=o("BasicForm"),f=o("CollapseContainer");return l(),n("div",c,[s(f,{title:"基础收缩示例"},{default:p((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(f,{title:"超过3行自动收起",class:"mt-4"},{default:p((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default r;