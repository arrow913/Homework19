(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),m=a.n(o),l=a(4),i=a(5),s=a(9),c=a(10),u=a(11),N=a(12),p=a(13);a(7);var f=function(e){return r.a.createElement("div",null,e.employeeList.length?r.a.createElement("ul",{className:"list-group"},e.employeeList.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("div",{id:"name"},r.a.createElement("b",null,e.firstName," ",e.lastName)," (",e.type,")"),r.a.createElement("div",{id:"other"},r.a.createElement("i",null,"Contact:")," ",e.email," "))}))):r.a.createElement("h2",null,"Sorry No Employee by that name"))},d=a(3);var y=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("h3",null,"Enter first name below and click alphaphetize to view the full list again!"),r.a.createElement("div",{class:"entertext"},r.a.createElement("form",{className:"form"},r.a.createElement("input",{value:e.firstName,name:"firstName",onChange:e.handleInputChange,type:"text",placeholder:"lowercase only!"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.handleFormSubmit},"Submit"))))},g=function(e){Object(N.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sorted:d,firstName:"",lastName:""},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(s.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault();var a=Object(l.a)(Array,Object(i.a)(d));console.log(a);var n=a.filter((function(t){return console.log(t.firstName),console.log(e.state.firstName),console.log(t.firstName.includes(e.state.firstName)),t.firstName.includes(e.state.firstName)||t.lastName.includes(e.state.firstName)}));console.log(n),e.setState({sorted:n}),e.setState({firstName:"",lastName:""})},e.sortName=function(){var t=Object(l.a)(Array,Object(i.a)(d));console.log(t);var a=t.sort((function(e,t){return console.log(e.firstName,t.firstName),console.log(t.firstName-e.firstName),e.firstName>t.firstName?1:t.firstName>e.firstName?-1:0}));console.log(a),e.setState({sorted:a})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{stylle:"text-align: center"},r.a.createElement(y,{firstName:this.state.firstName,lastName:this.state.lastName,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),r.a.createElement("button",{onClick:this.sortName},"Alphabetize Name"),r.a.createElement(f,{employeeList:this.state.sorted}))}}]),a}(n.Component);m.a.render(r.a.createElement(g,null),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('[{"id":1,"img":"../public/img/sponge.png","firstName":"spongebob","lastName":"squarepants","email":"spongebob@cartoon.com","type":"Sponge"},{"id":2,"firstName":"krabs","lastName":"krabs","email":"krabs@cartoon.com","type":"Crab"},{"id":3,"firstName":"squidward","lastName":"squiddy","email":"squiward@cartoon.com","type":"Squid"},{"id":4,"firstName":"dexter","lastName":"genius","email":"dexter@cartoon.com","type":"Human"},{"id":5,"firstName":"courage","lastName":"dog","email":"courage@cartoon.com","type":"Dog"},{"id":6,"firstName":"doug","lastName":"funnie","email":"doug@cartoon.com","type":"Human"},{"id":7,"firstName":"bugs","lastName":"bunny","email":"bugs@cartoon.com","type":"Bunny"},{"id":8,"firstName":"johnny","lastName":"bravo","email":"johnny@cartoon.com","type":"Human"},{"id":9,"firstName":"tommy","lastName":"pickles","email":"tommy@cartoon.com","type":"Human"},{"id":10,"firstName":"rocko","lastName":"man","email":"rocko@cartoon.com","type":"Human"},{"id":11,"firstName":"captain","lastName":"planet","email":"captain@cartoon.com","type":"Human"},{"id":12,"firstName":"ickis","lastName":"monster","email":"ickis@cartoon.com","type":"Monster"}]')},7:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.10f8b76b.chunk.js.map