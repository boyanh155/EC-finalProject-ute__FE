/*! For license information please see 9.c80b5974.chunk.js.LICENSE.txt */
(this.webpackJsonpprojectec=this.webpackJsonpprojectec||[]).push([[9],{288:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return f}));var n=a(22),r=a.n(n),c=a(45),o=a(23),i=a.n(o),s=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://vapi.vnappmob.com/api/province");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://vapi.vnappmob.com/api/province/district/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Availability"),console.log(t,a),e.next=4,i.a.post("http://localhost:5000/api/book/availability",t,{headers:a});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("Reserved"),console.log(t,a),e.next=4,i.a.post("http://localhost:5000/api/book/availability/reserve",t,{headers:a});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},299:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(22),c=a.n(r),o=a(45),i=a(9),s=a(0),u=(a(329),a(299),a(292)),l=(a(23),a(294)),f=a(1);t.default=function(e){e.props;var t=Object(s.useState)([]),a=Object(i.a)(t,2),r=(a[0],a[1]),p=Object(s.useState)({table:{name:null,id:null},date:new Date,time:null,location:"Any Location",size:"Standard"}),b=Object(i.a)(p,2),d=b[0],j=b[1],h=Object(s.useState)({name:"",phone:"",email:""}),v=Object(i.a)(h,2),O=(v[0],v[1],Object(s.useState)(["Any Location","Floor 1","Floor 2","Ground"])),m=(Object(i.a)(O,1)[0],Object(s.useState)(["Vip","Standard"])),g=(Object(i.a)(m,1)[0],Object(s.useState)(["9AM","10AM","11AM","1AM","2AM","3AM","4AM","5AM"])),S=(Object(i.a)(g,1)[0],Object(s.useState)([{idStaff:"01",nameStaff:"Nguyen Thai Hung 01",role:"leader"},{idStaff:"02",nameStaff:"Nguyen Thai Hung 02",role:"staff"},{idStaff:"03",nameStaff:"Nguyen Thai Hung 03",role:"staff"},{idStaff:"04",nameStaff:"Nguyen Thai Hung 04",role:"admin"},{idStaff:"01",nameStaff:"Le Hoang Loc 01",role:"leader"},{idStaff:"02",nameStaff:"Le Hoang Loc 02",role:"staff"},{idStaff:"03",nameStaff:"Le Hoang Loc 03",role:"staff"},{idStaff:"04",nameStaff:"Le Hoang Loc 04",role:"admin"}])),y=(Object(i.a)(S,1)[0],function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"][d.date.getMonth()]+" "+d.date.getDate()+" "+d.date.getFullYear(),t=d.time>12?t+12+":00":t+":00";return console.log(t),new Date(e+" "+t)}),x=Object(s.useState)(!1),w=Object(i.a)(x,2),A=w[0],k=(w[1],{"Content-Type":"application/json"});Object(s.useEffect)((function(){d.time&&d.date&&Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y(),a={date:t},e.next=4,Object(l.c)(a,k).then((function(e){console.log(e);var t=e.tables.filter((function(e){(!d.size||d.size===e.capacity)("Any Location "===d.location||e.location===d.location)}));r(t)})).catch((function(e){console.log("Cant post reservation : ".concat(e.message))}));case 4:case"end":return e.stop()}}),e)})))()}),[d.time,d.date,d.size,d.location]);return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.l,{noGutters:!0,className:"text-center align-items-center pizza-cta",children:Object(f.jsxs)(u.b,{children:[Object(f.jsx)("p",{className:"looking-for-table book-table-bt",children:Object(f.jsx)("span",{children:d.table.id?"Confirm Reservation":"Book a table"})}),Object(f.jsx)("p",{className:"selected-table",children:d.table.id?"You are booking table"+d.table.name:null}),A?Object(f.jsx)("p",{className:"reservation-error",children:"*Please fill out all of the details"}):null]})}),d.table.id?null:Object(f.jsx)("div",{className:"reservation-stuff",children:Object(f.jsx)(u.l,{noGutters:!0,className:"text-center align-items-center",children:Object(f.jsx)(u.b,{xs:"12",sm:"3",children:Object(f.jsx)("input",{type:"date",required:"required",className:"booking-dropdown",value:d.date.toISOString().split("T")[0],onChange:function(e){if(isNaN(new Date(new Date(e.target.value)))){console.log("Invalid date");var t=Object(n.a)(Object(n.a)({},d),{},{table:Object(n.a)({},d.table),date:new Date});j(t)}else{var a=Object(n.a)(Object(n.a)({},d),{},{table:Object(n.a)({},d.table),date:new Date(e.target.value)});j(a)}}})})})})]})}},329:function(e,t,a){}}]);
//# sourceMappingURL=9.c80b5974.chunk.js.map