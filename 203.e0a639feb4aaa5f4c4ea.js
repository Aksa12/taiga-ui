(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{jpvk:function(t,s,e){"use strict";e.r(s),e.d(s,"Subscript",(function(){return n})),e.d(s,"default",(function(){return n}));var r=e("jgtz");const n=r.Mark.create({name:"subscript",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"sub"},{style:"vertical-align",getAttrs:t=>"sub"===t&&null}],renderHTML({HTMLAttributes:t}){return["sub",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setSubscript:()=>({commands:t})=>t.setMark(this.name),toggleSubscript:()=>({commands:t})=>t.toggleMark(this.name),unsetSubscript:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-,":()=>this.editor.commands.toggleSubscript()}}})}}]);