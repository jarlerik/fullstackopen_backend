(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),u=(n(22),n(15)),s=n(1),i=n.n(s),l=n(3),f=n(6),p=n(4),m=function(e){var t=e.setFilter;return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",a.a.createElement("input",{onChange:function(e){return t(e.target.value)}}))))},d=function(e){var t=e.setNewName,n=e.newName,r=e.setNewNumber,c=e.newNumber,o=e.addNewPerson;return a.a.createElement("form",null,a.a.createElement("div",null,"nimi: ",a.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:n})),a.a.createElement("div",null,"numero: ",a.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:c})),a.a.createElement("div",null,a.a.createElement("button",{onClick:o,type:"submit"},"lis\xe4\xe4")))},v=function(e){var t=e.persons,n=e.deletePerson;return a.a.createElement("div",null,t&&t.map(function(e,t){return a.a.createElement("div",{key:"person-".concat(e.id,"-index-").concat(t)},"".concat(e.name," ").concat(e.number||""),a.a.createElement("button",{onClick:function(){return n(e.id)}},"Poista"))}))},b=n(5),E=n.n(b),w="".concat("http://localhost:3001","/api/persons"),h={getPersons:function(){var e=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(w).catch(function(e){return console.log("Error GET /persons",e),e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(l.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,E.a.post(w,t).catch(function(e){return console.log("Error POST /persons",e),e.response.data});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,E.a.delete("".concat(w,"/").concat(t)).catch(function(e){return console.log("ERROR DELETE /persons".concat(t),e.response),e.response});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updatePerson:function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,E.a.put("".concat(w,"/").concat(t.id),t).catch(function(e){return console.log("ERROR PUT /persons/".concat(t.id),e),e.response});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},O=(n(44),function(e){var t=e.notifications;return a.a.createElement("ul",null,t.map(function(e,t){return a.a.createElement("li",{key:"notification-".concat(e.message,"-").concat(t),className:"notification-".concat(e.type)},e.message)}))});O.ERROR="error",O.SUCCESS="success";var j=O,k=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),s=Object(p.a)(o,2),b=s[0],E=s[1],w=Object(r.useState)(""),O=Object(p.a)(w,2),k=O[0],x=O[1],g=Object(r.useState)(""),P=Object(p.a)(g,2),R=P[0],N=P[1],S=Object(r.useState)([]),y=Object(p.a)(S,2),C=y[0],T=y[1],L=function(){E(""),x("")},U=function(e,t){var n={message:e,type:t},r=Object(f.a)(C).concat([n]);T(r),setTimeout(function(){!function(e){var t=Object(f.a)(e);t.pop(),T(t)}(r)},3e3)},D=function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getPersons();case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,a,o,s,l,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r=n.find(function(e){return e.name===b}))){e.next=13;break}if(!window.confirm("".concat(b," on jo luettelossa. Korvataanko vanha numero uudella?"))){e.next=11;break}return a=Object(u.a)({},r,{number:k}),o=n.map(function(e){return e.id===a.id?a:e}),e.next=8,h.updatePerson(a);case 8:e.sent,c(o),L();case 11:e.next=19;break;case 13:return s={name:b,number:k},e.next=16,h.createPerson(s);case 16:l=e.sent,console.log("personServiceResponse:",l),200===l.status?((p=Object(f.a)(n)).push(s),c(p),L(),U("Lis\xe4ttiin ".concat(s.name,"."),j.SUCCESS)):U("".concat(l.error.message),j.ERROR);case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark(function e(t){var r,a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.find(function(e){return e.id===t}),!window.confirm("Poistetaanko henkil\xf6 ".concat(r.name,"?"))){e.next=9;break}return a=n.filter(function(e){return e.id!==t}),c(a),e.next=6,h.deletePerson(t);case 6:(o=e.sent)&&200===o.status&&U("".concat(r.name," poistettiin."),j.SUCCESS),o&&404===o.status&&U("Henkil\xf6 ".concat(r.name," oli jo poistettu."),j.ERROR);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){D()},[]);var B=R.length>0&&n.filter(function(e){return e.name.toLowerCase().includes(R.toLowerCase())})||n;return a.a.createElement("div",null,a.a.createElement(j,{notifications:C}),a.a.createElement("h2",null,"Puhelinluettelo"),a.a.createElement(m,{setFilter:N}),a.a.createElement(d,{setNewName:E,newName:b,setNewNumber:x,newNumber:k,addNewPerson:F}),a.a.createElement("h2",null,"Numerot"),a.a.createElement(v,{deletePerson:J,persons:B}))};o.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.da5c6988.chunk.js.map