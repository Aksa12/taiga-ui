(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jQdB:function(t,e,n){"use strict";n.r(e),n.d(e,"TuiDetails",(function(){return a})),n.d(e,"TuiDetailsContent",(function(){return s})),n.d(e,"TuiSummary",(function(){return o}));var r=n("jgtz");const a=r.Node.create({name:"details",addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({opened:{default:!0,keepOnSplit:!1,parseHTML:t=>"true"===t.getAttribute("data-opened"),renderHTML:t=>({"data-opened":t.opened})}}),content:"summary detailsContent",group:"block",allowGapCursor:!0,isolating:!0,parseHTML:()=>[{tag:"details"}],renderHTML({HTMLAttributes:t}){return["div",{class:"details-wrapper details-wrapper_rendered"},["details",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0],["button",{class:"details-arrow"}]]},addNodeView:()=>({node:t})=>{const e=document.createElement("div"),n=document.createElement("details"),r=document.createElement("button");return e.className="details-wrapper",r.className="details-arrow",n.open=t.attrs.opened,r.addEventListener("click",()=>{n.open=!n.open,t.attrs.opened=n.open}),e.append(n,r),{dom:e,contentDOM:n}},addCommands(){return{setDetails:()=>({commands:t,state:e})=>t.insertContent(`<details data-opened="true"><summary><p></p></summary><div data-type="details-content"><p>${e.selection.$head.parent.textContent}</p></div></details><p></p>`),removeDetails:()=>({state:t,dispatch:e})=>function(t,e,n){const r=t.selection.$anchor;for(let a=r.depth;a>0;a--)if(r.node(a).type.name===n)return e&&e(t.tr.delete(r.before(a),r.after(a)).scrollIntoView()),!0;return!1}(t,e,this.name)}}}),s=r.Node.create({name:"detailsContent",content:"block+",group:"block",allowGapCursor:!0,parseHTML:()=>[{tag:'div[data-type="details-content"]'}],renderHTML({HTMLAttributes:t}){return["div",Object(r.mergeAttributes)(this.options.HTMLAttributes,t,{"data-type":"details-content"}),0]}}),o=r.Node.create({name:"summary",addOptions:()=>({HTMLAttributes:{}}),content:"text*",group:"block",parseHTML:()=>[{tag:"summary"}],renderHTML({HTMLAttributes:t}){return["summary",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]}})}}]);