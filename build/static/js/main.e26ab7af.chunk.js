(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(45)},22:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(14),o=t.n(c),u=(t(22),t(15)),i=t(1),s=t.n(i),l=t(3),f=t(6),p=t(4),m=function(e){var n=e.setFilter;return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",a.a.createElement("input",{onChange:function(e){return n(e.target.value)}}))))},d=function(e){var n=e.setNewName,t=e.newName,r=e.setNewNumber,c=e.newNumber,o=e.addNewPerson;return a.a.createElement("form",null,a.a.createElement("div",null,"nimi: ",a.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:t})),a.a.createElement("div",null,"numero: ",a.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:c})),a.a.createElement("div",null,a.a.createElement("button",{onClick:o,type:"submit"},"lis\xe4\xe4")))},v=function(e){var n=e.persons,t=e.deletePerson;return a.a.createElement("div",null,n.map(function(e,n){return a.a.createElement("div",{key:"person-".concat(e.id,"-index-").concat(n)},"".concat(e.name," ").concat(e.number||""),a.a.createElement("button",{onClick:function(){return t(e.id)}},"Poista"))}))},E=t(5),b=t.n(E),w="".concat("https://evening-mountain-35162.herokuapp.com","/api/persons"),h={getPersons:function(){var e=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(w).catch(function(e){return console.log("Error GET /persons",e),e.response});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(l.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return e.next=3,b.a.post(w,n).catch(function(e){return console.log("Error POST /persons",e),e.response});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(l.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return e.next=3,b.a.delete("".concat(w,"/").concat(n)).catch(function(e){return console.log("ERROR DELETE /persons".concat(n),e.response),e.response});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),updatePerson:function(){var e=Object(l.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return e.next=3,b.a.put("".concat(w,"/").concat(n.id),n).catch(function(e){return console.log("ERROR PUT /persons/".concat(n.id),e),e.response});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},O=(t(44),function(e){var n=e.notifications;return a.a.createElement("ul",null,n.map(function(e,n){return a.a.createElement("li",{key:"notification-".concat(e.message,"-").concat(n),className:"notification-".concat(e.type)},e.message)}))});O.ERROR="error",O.SUCCESS="success";var j=O,k=function(){return a.a.createElement("div",null,a.a.createElement("h6",null,"Enviroment info (".concat("production",")")),a.a.createElement("p",null,"API_URL: ".concat("https://evening-mountain-35162.herokuapp.com")))},g=function(){var e=Object(r.useState)([]),n=Object(p.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),i=Object(p.a)(o,2),E=i[0],b=i[1],w=Object(r.useState)(""),O=Object(p.a)(w,2),g=O[0],x=O[1],P=Object(r.useState)(""),N=Object(p.a)(P,2),S=N[0],R=N[1],y=Object(r.useState)([]),C=Object(p.a)(y,2),L=C[0],T=C[1],U=function(){b(""),x("")},D=function(e,n){var t={message:e,type:n},r=Object(f.a)(L).concat([t]);T(r),setTimeout(function(){!function(e){var n=Object(f.a)(e);n.pop(),T(n)}(r)},3e3)},F=function(){var e=Object(l.a)(s.a.mark(function e(){var n,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getPersons();case 2:n=e.sent,t=n.data,c(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark(function e(n){var r,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.find(function(e){return e.id===n}),!window.confirm("Poistetaanko henkil\xf6 ".concat(r.name,"?"))){e.next=9;break}return a=t.filter(function(e){return e.id!==n}),c(a),e.next=6,h.deletePerson(n);case 6:(o=e.sent)&&200===o.status&&D("".concat(r.name," poistettiin."),j.SUCCESS),o&&404===o.status&&D("Henkil\xf6 ".concat(r.name," oli jo poistettu."),j.ERROR);case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){F()},[]);var J=S.length>0&&t.filter(function(e){return e.name.toLowerCase().includes(S.toLowerCase())})||t;return a.a.createElement("div",null,a.a.createElement(j,{notifications:L}),a.a.createElement("h2",null,"Puhelinluettelo"),a.a.createElement(m,{setFilter:R}),a.a.createElement(d,{setNewName:b,newName:E,setNewNumber:x,newNumber:g,addNewPerson:function(e){e.preventDefault();var n=t.find(function(e){return e.name===E});if(n){if(window.confirm("".concat(E," on jo luettelossa. Korvataanko vanha numero uudella?"))){var r=Object(u.a)({},n,{number:g}),a=t.map(function(e){return e.id===r.id?r:e});c(a),h.updatePerson(r),U()}}else{var o=Object(f.a)(t),i={name:E,number:g};o.push(i),c(o),h.createPerson(i),U(),D("Lis\xe4ttiin ".concat(i.name,"."),j.SUCCESS)}}}),a.a.createElement("h2",null,"Numerot"),a.a.createElement(v,{deletePerson:I,persons:J}),a.a.createElement(k,null))};o.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e26ab7af.chunk.js.map