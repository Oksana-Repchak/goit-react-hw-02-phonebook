(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2P4wC",input:"ContactForm_input__aTzwJ",button:"ContactForm_button__1OUSa"}},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(11),i=n.n(o),s=(n(19),n(3)),u=n(6),l=n(7),b=n(9),m=n(8),d=n(12),h=n.n(d),j=n(13),f=n(2),p=n.n(f),v=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.contactValidation=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts,r=c.reduce((function(t,e){return[].concat(Object(s.a)(t),[e.name])}),[]),o=c.reduce((function(t,e){return[].concat(Object(s.a)(t),[e.number])}),[]);return r.includes(n)||o.includes(a)?(alert("".concat(n).concat(a," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.setState({name:"",number:""}),t.contactValidation()||t.props.onSubmit(a,c)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,placeholder:"\u0421ontact name",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:this.state.number,placeholder:"\u0421ontact number",onChange:this.handleChange,className:p.a.input})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})}}]),n}(c.Component);function O(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})}var C=n(4),x=n.n(C);function _(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:x.a.item,children:[Object(a.jsxs)("p",{className:x.a.text,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:x.a.button,children:"Delete"})]},e)}))})}var g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:h.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))},t.makeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.visibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(v,{onSubmit:this.addContact,contacts:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O,{value:e,onChange:this.makeFilter}),Object(a.jsx)(_,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__2DnTn",item:"ContactList_item__2yyd9",text:"ContactList_text__1NYoS",button:"ContactList_button__3TrVr"}}},[[28,1,2]]]);
//# sourceMappingURL=main.6fff9d6d.chunk.js.map