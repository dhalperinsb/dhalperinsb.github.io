(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(53)},36:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),l=a.n(s);a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(56),o=a(55),c=a(54),u=r.a.createContext(null),m=a(4),d=a(5),p=a(7),h=a(6),b=a(8),v=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(v.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},f=v,g=a(9),j=a(16),y=a.n(j),O=(a(43),a(45),{apiKey:"AIzaSyDb_j6itPMVYfbMxqnnVILH7DhaZ9gC_fQ",authDomain:"matrix-28700.firebaseapp.com",databaseURL:"https://matrix-28700.firebaseio.com",projectId:"matrix-28700",storageBucket:"matrix-28700.appspot.com",messagingSenderId:"986070651383"}),w=function e(){var t=this;Object(m.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged(function(n){n?t.user(n.uid).once("value").then(function(t){var a=t.val();a.roles||(a.roles=[]),n=Object(g.a)({uid:n.uid,email:n.email},a),e(n)}):a()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.project=function(e){return t.db.ref("projects/".concat(e))},this.projects=function(){return t.db.ref("projects")},this.action=function(e){return t.db.ref("actions/".concat(e))},this.actions=function(){return t.db.ref("actions")},y.a.initializeApp(O),this.serverValue=y.a.database.ServerValue,this.emailAuthProvider=y.a.auth.EmailAuthProvider,this.auth=y.a.auth(),this.db=y.a.database()},C=function(e){var t=function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(b.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(u.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return E(t)},N=a(57),k=a(11),x="/home",P=function(e){return function(t){var a=function(a){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(b.a)(n,a),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(a){e(a)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(u.Consumer,null,function(n){return e(n)?r.a.createElement(t,Object.assign({authUser:n},a.props)):null})}}]),n}(r.a.Component);return Object(k.a)(N.a,E)(a)}},S=E(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),T="ADMIN",V=function(e){var t=e.authUser;return r.a.createElement("div",{style:{backgroundColor:"lightblue",display:"flex"}},t.roles.includes(T)&&r.a.createElement("div",{style:{flex:1}},r.a.createElement(c.a,{to:"/actions"},"Actions")),t.roles.includes(T)&&r.a.createElement("div",{style:{flex:1}},r.a.createElement(c.a,{to:"/projects"},"Projects")),t.roles.includes(T)&&r.a.createElement("div",{style:{flex:1}},r.a.createElement(c.a,{to:"/admin"},"Admin")),r.a.createElement("div",{style:{flex:1}},r.a.createElement(S,null)))},U=function(){return r.a.createElement(u.Consumer,null,function(e){return e?r.a.createElement(V,{authUser:e}):r.a.createElement("div",null,"\xa0")})},A=a(12),D=a(3),I=Object.freeze({NEW:0,EDITING:1,VIEWING:2}),W={pid:"new",name:"",url:""},R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(g.a)({},W,{status:null===e.project?I.NEW:I.VIEWING},e.project),a.save=a.save.bind(Object(D.a)(Object(D.a)(a))),a.edit=a.edit.bind(Object(D.a)(Object(D.a)(a))),a.cancel=a.cancel.bind(Object(D.a)(Object(D.a)(a))),a.delete=a.delete.bind(Object(D.a)(Object(D.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"save",value:function(e){var t=this;this.state.status===I.NEW?this.props.firebase.projects().push({name:this.state.name,url:this.state.url}).then(function(){t.setState(Object(g.a)({},W))}):this.props.firebase.project(this.state.pid).update({name:this.state.name,url:this.state.url}).then(function(){t.setState({status:I.VIEWING})})}},{key:"edit",value:function(e){this.setState({status:I.EDITING})}},{key:"cancel",value:function(e){this.setState(Object(g.a)({status:I.VIEWING},this.props.project))}},{key:"delete",value:function(e){e.preventDefault(),this.props.firebase.project(this.props.project.pid).remove()}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.url,n=e.status,s=e.pid,l=""===t||""===a;return r.a.createElement("div",{className:"rTableRow",key:s},r.a.createElement("div",{className:"rTableCell"},n!==I.NEW&&r.a.createElement("span",null,r.a.createElement("strong",null,s)," ",r.a.createElement("br",null)),n===I.VIEWING?r.a.createElement("strong",null,t):r.a.createElement("input",{name:"name",value:t,onChange:this.onChange,type:"text",style:{width:"300px"},placeholder:"Project Name"})),r.a.createElement("div",{className:"rTableCell"},n===I.VIEWING?r.a.createElement("strong",null,a):r.a.createElement("input",{name:"url",value:a,onChange:this.onChange,type:"text",style:{width:"500px"},placeholder:"Project Url"})),r.a.createElement("div",{className:"rTableCell"},n===I.VIEWING?r.a.createElement("button",{type:"button",onClick:this.edit},"Edit"):r.a.createElement("span",null,r.a.createElement("button",{type:"button",disabled:l,onClick:this.save},"Save"),this.state.status===I.EDITING&&r.a.createElement("button",{type:"button",onClick:this.cancel},"Cancel"))),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("span",null,this.state.status!==I.NEW?r.a.createElement("button",{type:"button",className:"link-button",onClick:this.delete},"Delete"):r.a.createElement("span",null,"\xa0"))))}}]),t}(n.Component),H=E(R),M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,projects:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.projects().on("value",function(t){var a=t.val()||[],n=Object.keys(a).map(function(e){return Object(g.a)({},a[e],{pid:e})});e.setState({projects:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.projects().off()}},{key:"render",value:function(){var e=this.state,t=e.projects,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"Matrix Projects - API endpoints"),a&&r.a.createElement("div",null,"Loading ..."),!a&&r.a.createElement("div",{className:"rTable"},r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Id/Name")),r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"URL")),r.a.createElement("div",{className:"rTableHead"},"\xa0"),r.a.createElement("div",{className:"rTableHead"},"\xa0")),t.map(function(e){return r.a.createElement(H,{key:e.pid,project:e})}),r.a.createElement(H,{project:null})))}}]),t}(n.Component),L=Object(k.a)(E,P(function(e){return e&&e.roles.includes(T)}))(M),G=(r.a.createContext(null),[]),B="GET",F=["GET","PUT","POST","DELETE"],J=function(){function e(t){Object(m.a)(this,e),this.url=t.url,this.authHeader=t.user?window.btoa(t.user+":"+t.password):null}return Object(d.a)(e,[{key:"perform",value:function(e){var t=e.method||B,a={method:t,headers:Object(g.a)({},G)};this.authHeader&&(a.headers.Authorization="Basic "+this.authHeader);var n=this.url;switch(e.path&&(n.endsWith("/")||e.path.startsWith("/")||(n+="/"),n+=this.insertVariables(e.path,e.variables)),t){case"GET":case"PUT":n.endsWith("?")||(n+="?"),n+=this.encodeParameters(e.parameters,e.variables);break;case"POST":case"DELETE":a.body=this.encodeParameters(e.parameters,e.variables);break;default:return Promise.reject("Bad method ".concat(t))}return fetch(n,a).then(function(e){return e.ok?e.json():Promise.reject("Failed connection with status ".concat(e.statusText))}).catch(function(e){return console.log("Fetch problem: "+e.message),Promise.reject(e.message)})}},{key:"encodeParameters",value:function(e,t){for(var a="",n=0;n<e.length;n++){var r=e[n];a+=r.name+"="+encodeURIComponent(this.insertVariables(r.value,t))+"&"}return a}},{key:"insertVariables",value:function(e,t){var a=/\${([^}]+)}/g,n="",r=0;return function(){var s=a.exec(e);if(s){var l=t.find(function(e){return s[1]===e.name});n+=e.substring(r,s.index)+(l?l.value:""),r=a.lastIndex}}(),n+=e.substring(r)}}]),e}(),z=a(21),Y=function(){return{name:"",description:"",path:"",method:F[0],variables:[],parameters:[]}},$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){var t=e.target.value,n=e.target.name;if(n.startsWith("param")){var r=n.substring(n.indexOf("-")+1),s=parseInt(n.substring(5));a.props.action.parameters[s][r]=t}else if(n.startsWith("var")){var l=n.substring(n.indexOf("-")+1),i=parseInt(n.substring(3));a.props.action.variables[i][l]=t}else n.startsWith("newParam")||n.startsWith("newVar")?a.setState(Object(A.a)({},n,t)):a.props.action[n]=t;"path"!==n&&-1===n.search(/^param.*-value/)||a.updateVariablesUsed(),a.setState({tainted:!0}),a.props.messenger()},e.action.aid||Object.assign(e.action,Y()),a.state={tainted:!1,newParamName:"",newParamValue:"",newVarName:"",newVarValue:"",newVarDescription:"",showingDetails:!0},a.save=a.save.bind(Object(D.a)(Object(D.a)(a))),a.update=a.update.bind(Object(D.a)(Object(D.a)(a))),a.delete=a.delete.bind(Object(D.a)(Object(D.a)(a))),a.deleteVariable=a.deleteVariable.bind(Object(D.a)(Object(D.a)(a))),a.addVariable=a.addVariable.bind(Object(D.a)(Object(D.a)(a))),a.deleteParam=a.deleteParam.bind(Object(D.a)(Object(D.a)(a))),a.addParam=a.addParam.bind(Object(D.a)(Object(D.a)(a))),a.toggleDetails=a.toggleDetails.bind(Object(D.a)(Object(D.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"deleteParam",value:function(e){var t=e.target.name,a=parseInt(t.substring(5)),n=this.props.action.parameters[a].name;this.props.action.parameters.splice(a,1),this.updateVariablesUsed(),this.setState({tainted:!0}),this.props.messenger("Parameter ".concat(n," deleted"))}},{key:"addParam",value:function(){this.props.action.parameters.push({name:this.state.newParamName,value:this.state.newParamValue}),this.updateVariablesUsed(),this.setState({tainted:!0,newParamName:"",newParamValue:""}),this.props.messenger("Parameter ".concat(this.state.newParamName," added"))}},{key:"deleteVariable",value:function(e){var t=e.target.name,a=parseInt(t.substring(3)),n=this.props.action.variables[a].name;this.props.action.variables.splice(a,1),this.setState({tainted:!0}),this.props.messenger("Variable ".concat(n," deleted"))}},{key:"addVariable",value:function(){this.props.action.variables.push({name:this.state.newVarName,value:this.state.newVarValue,description:this.state.newVarDescription}),this.setState({tainted:!0,newVarName:"",newVarValue:"",newVarDescription:""})}},{key:"toggleDetails",value:function(){this.setState({showingDetails:!this.state.showingDetails})}},{key:"updateVariablesUsed",value:function(){var e=[],t=/\${([^}]+)}/g,a=Object(z.a)(this.props.action.parameters);a.push(this.props.action.path);for(var n=0;n<a.length;n++){var r="string"===typeof a[n]?"path":"Parameter "+a[n].name,s="string"===typeof a[n]?a[n]:a[n].value,l=[];do{(l=t.exec(s))&&(e[l[1]]=r)}while(l)}for(var i=0;i<this.props.action.variables.length;i++){var o=this.props.action.variables[i];o.inUse=e.hasOwnProperty(o.name),delete e[o.name]}for(var c in e)e.hasOwnProperty(c)&&this.props.action.variables.push({name:c,value:"",description:"Used in ".concat(e[c]),inUse:!0})}},{key:"save",value:function(){this.props.messenger();var e=Object(g.a)({},this.props.action);delete e.aid,this.props.action.aid=this.props.firebase.actions().push(e).key,this.setState({tainted:!1}),this.props.messenger("New Action Saved.")}},{key:"update",value:function(){var e=this;this.props.messenger();var t=Object(g.a)({},this.props.action);delete t.aid,this.props.firebase.action(this.props.action.aid).update(t).then(function(){e.setState({tainted:!1}),e.props.messenger("Action Updated.")})}},{key:"delete",value:function(e){var t=this;this.props.firebase.action(this.props.action.aid).remove().then(function(){Object.assign(t.props.action,Y()),t.props.action.aid=null,t.setState({tainted:!1}),t.props.messenger("Action Deleted.")}),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.props.action,a=t.aid,n=t.name,s=t.description,l=t.variables,i=t.path,o=t.method,c=t.parameters,u=this.state,m=u.newParamName,d=u.newParamValue,p=u.newVarName,h=u.newVarValue,b=u.newVarDescription,v=u.showingDetails,E=""===n||""===s;return r.a.createElement("div",null,a?r.a.createElement("div",{style:{marginTop:"6px"}},r.a.createElement("strong",null,"Action id:".concat(a)),r.a.createElement("button",{type:"button",disabled:E||!this.state.tainted,onClick:this.update},"Update"),r.a.createElement("button",{type:"button",className:"link-button",style:{paddingLeft:"12px"},onClick:this.delete},"Delete Action")):r.a.createElement("div",null,r.a.createElement("strong",null,"New Action"),r.a.createElement("button",{type:"button",disabled:E,onClick:this.save},"Save")),r.a.createElement("div",null,r.a.createElement("span",{style:{width:"150px",display:"inline-block"}},r.a.createElement("strong",null,"Name")),r.a.createElement("input",{name:"name",value:n,onChange:this.onChange,type:"text",style:{width:"300px"},placeholder:"Action Name"}),a&&r.a.createElement("button",{type:"button",disabled:E,onClick:this.save},"Save as New")),r.a.createElement("div",{style:{verticalAlign:"top",marginTop:"7px"}},r.a.createElement("span",{style:{width:"150px",verticalAlign:"top",display:"inline-block"}},r.a.createElement("strong",null,"Description")),r.a.createElement("textarea",{name:"description",value:s,onChange:this.onChange,style:{width:"600px",height:"60px"},placeholder:"Description"})),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement("strong",null,"Variables"),r.a.createElement("div",{className:"rTable"},r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Name")),r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Value")),r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Description"))),l.map(function(t,a){return r.a.createElement("div",{className:"rTableRow",key:a},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("strong",null,t.name),!t.inUse&&r.a.createElement("span",null,"- Not Used -",r.a.createElement("button",{name:"var".concat(a,"-delete"),type:"button",className:"link-button",onClick:e.deleteVariable},"X"))),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("textarea",{name:"var".concat(a,"-value"),value:t.value,onChange:e.onChange,style:{width:"500px",height:"60px"},placeholder:"value"})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("textarea",{name:"var".concat(a,"-description"),value:t.description,onChange:e.onChange,style:{width:"300px",height:"50px"},placeholder:"Description"})))}),r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("input",{name:"newVarName",value:p,onChange:this.onChange,type:"text",placeholder:"New Variable Name"}),r.a.createElement("button",{type:"button",disabled:""===p,onClick:this.addVariable},"Add")),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("textarea",{name:"newVarValue",value:h,onChange:this.onChange,style:{width:"500px",height:"60px"},placeholder:"Value"})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("textarea",{name:"newVarDescription",value:b,onChange:this.onChange,style:{width:"300px",height:"50px"},placeholder:"description"}))))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("span",{style:{width:"150px",display:"inline-block"}},r.a.createElement("strong",null,"Path")),r.a.createElement("input",{name:"path",value:i,onChange:this.onChange,style:{width:"300px"},type:"text",placeholder:"path"})),r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement("strong",null,"Action Details"),v,r.a.createElement("button",{type:"button",className:"link-button",onClick:this.toggleDetails,style:{marginLeft:"5px"}},v?"hide":"show"),v&&r.a.createElement("div",{style:{border:"1px solid gray",padding:"5px"}},r.a.createElement("div",{id:"details"},r.a.createElement("label",null,"Request Method:",r.a.createElement("select",{name:"method",value:o,onChange:this.onChange},F.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",null,r.a.createElement("strong",null,"Parameters"),r.a.createElement("div",{className:"rTable"},r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Name")),r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Value")),r.a.createElement("div",{className:"rTableHead"},"\xa0")),c.map(function(t,a){return r.a.createElement("div",{className:"rTableRow",key:a},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("input",{name:"param".concat(a,"-name"),value:t.name,onChange:e.onChange,style:{width:"200px"},type:"text",placeholder:"Parameter Name"})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("textarea",{name:"param".concat(a,"-value"),value:t.value,onChange:e.onChange,style:{width:"500px",height:"60px"},placeholder:"Value"})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("button",{name:"param".concat(a,"-delete"),type:"button",className:"link-button",onClick:e.deleteParam},"X")))}),r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("input",{name:"newParamName",value:m,onChange:this.onChange,type:"text",style:{width:"200px"},placeholder:"New Parameter Name"})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("textarea",{name:"newParamValue",value:d,onChange:this.onChange,style:{width:"500px",height:"60px"},placeholder:"Value"})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("button",{type:"button",disabled:""===m,onClick:this.addParam},"Add"))))))))}}]),t}(n.Component),q=E($),X={pid:null,url:null,user:"",password:""},_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){var t=e.target.value,n=e.target.name;a.props.auth[n]=t;var r=a.props.auth.pid;null!==r&&(a.state.auths[r][n]=t,a.props.messenger())},a.state={projects:[],auths:[],loading:!1},e.auth.hasOwnProperty("pid")||Object.assign(e.auth,X),a.selectProject=a.selectProject.bind(Object(D.a)(Object(D.a)(a))),a.onChange=a.onChange.bind(Object(D.a)(Object(D.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.projects().on("value",function(t){var a=t.val()||[],n=Object.keys(a).map(function(e){return Object(g.a)({},a[e],{pid:e})});e.setState({projects:n,loading:!1}),null!==e.props.auth.pid&&a.hasOwnProperty(e.props.auth.pid)||e.setProject(n[0].pid,n[0].url)})}},{key:"componentWillUnmount",value:function(){this.props.firebase.projects().off()}},{key:"setProject",value:function(e,t){this.state.auths[e]||(this.state.auths[e]={user:this.props.auth.user,password:this.props.auth.password,pid:e,url:t});Object.assign(this.props.auth,this.state.auths[e])}},{key:"selectProject",value:function(e){var t=e.target.value,a=this.state.projects.find(function(e){return e.pid===t});this.setProject(t,a.url),this.props.messenger("Project set to "+a.name)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.projects,n=this.props.auth,s=n.user,l=n.password,i=n.project;return r.a.createElement("div",null,t&&r.a.createElement("div",null,"Loading ..."),!t&&r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("strong",null,"Select Project:"),r.a.createElement("select",{value:i,onChange:this.selectProject},a.map(function(e){return r.a.createElement("option",{key:e.pid,value:e.pid},e.name)}))),r.a.createElement("div",{style:{marginTop:"7px",marginLeft:"4px"}},r.a.createElement("strong",null,"Credentials")),r.a.createElement("div",{className:"rTable"},r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("strong",null,"User")),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("input",{name:"user",value:s,onChange:this.onChange,type:"text",style:{width:"200px"},placeholder:"User"}))),r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("strong",null,"Password")),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("input",{name:"password",value:l,onChange:this.onChange,type:"password",placeholder:"Password"}))))))}}]),t}(n.Component),K=E(_),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).messenger=function(e){a.setState({message:e}),e||a.setState({results:null})},a.state={loading:!1,actions:[],aid:null,auth:[],action:[],message:null,results:null},a.loadAction=a.loadAction.bind(Object(D.a)(Object(D.a)(a))),a.execute=a.execute.bind(Object(D.a)(Object(D.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.actions().on("value",function(t){var a=t.val()||[],n=Object.keys(a).map(function(e){return Object(g.a)({},a[e],{aid:e})});e.setState({actions:n.sort(function(e,t){return e.name.localeCompare(t.name)}),loading:!1,result:null})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.actions().off()}},{key:"loadAction",value:function(e){var t=e.target.value,a="-NEW-"===t?{aid:null}:this.state.actions.find(function(e){return e.aid===t});this.setState({action:Object(g.a)({},Y(),a)}),this.messenger("-NEW-"===t?"New action":"Loaded action id="+t),e.target.value=null}},{key:"execute",value:function(){var e=this;new J(this.state.auth).perform(this.state.action).then(function(t){e.setState({results:t}),e.messenger("Action executed.")}).catch(function(t){e.setState({results:"ERROR on call: "+t}),e.messenger("Action execution error.")})}},{key:"render",value:function(){var e=this.state,t=e.actions,a=e.loading,n=e.results;return r.a.createElement("div",null,r.a.createElement("h1",null,"Actions"),r.a.createElement("h2",null,"Matrix actions - create and take actions"),r.a.createElement("p",{className:"message-area",style:{minHeight:"20px",padding:"7px",border:this.state.message?"1px solid black":"transparent"}},this.state.message&&this.state.message),a&&r.a.createElement("div",null,"Loading ..."),!a&&r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("button",{type:"button",onClick:this.execute},"Execute")),r.a.createElement("hr",null),r.a.createElement(K,{auth:this.state.auth,messenger:this.messenger}),r.a.createElement("hr",null),t.length>0&&r.a.createElement("div",{style:{width:"300px",paddingBottom:"5px",marginBottom:"10px",borderBottom:"1px gray dotted"}},"Load an Action:",r.a.createElement("select",{className:"field-select",value:"",onChange:this.loadAction},r.a.createElement("option",{value:"",disabled:"disabled"}),r.a.createElement("option",{value:"-NEW-"},"--NEW--"),t.map(function(e){return r.a.createElement("option",{key:e.aid,value:e.aid},e.name)}))),r.a.createElement(q,{action:this.state.action,messenger:this.messenger}),n&&r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Results"),r.a.createElement("pre",null,JSON.stringify(n,void 0,2)))))}}]),t}(n.Component),Z=Object(k.a)(E,P(function(e){return e&&e.roles.includes(T)}))(Q),ee={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},te="auth/email-already-in-use",ae="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,s=t.passwordOne,l=t.isAdmin,i=[];l&&i.push(T),a.props.firebase.doCreateUserWithEmailAndPassword(r,s).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r,roles:i})}).then(function(){a.setState(Object(g.a)({},ee)),a.props.history.push(x)}).catch(function(e){e.code===te&&(e.message=ae),a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onChangeCheckbox=function(e){a.setState(Object(A.a)({},e.target.name,e.target.checked))},a.state=Object(g.a)({},ee),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,s=e.passwordTwo,l=e.error,i=n!==s||""===n||""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:s,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),l&&r.a.createElement("p",null,l.message))}}]),t}(n.Component),re=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(c.a,{to:"/signup"},"Sign Up"))},se=Object(k.a)(N.a,E)(ne),le=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(se,null))},ie={email:"",error:null},oe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(g.a)({},ie))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(g.a)({},ie),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),ce=function(){return r.a.createElement("p",null,r.a.createElement(c.a,{to:"/pw-forget"},"Forgot Password?"))},ue=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(me,null))},me=E(oe),de={email:"",password:"",error:null},pe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(g.a)({},de)),a.props.history.push(x)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.state=Object(g.a)({},de),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,s=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",null,r.a.createElement("span",{style:{width:"100px",display:"inline-block"}},r.a.createElement("strong",null,"User")),r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",style:{width:"200px"},placeholder:"Email Address"})),r.a.createElement("div",{style:{paddingTop:"5px"}},r.a.createElement("span",{style:{width:"100px",display:"inline-block"}},r.a.createElement("strong",null,"Password")),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"})),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement("div",null,r.a.createElement("button",{disabled:s,type:"submit"},"Sign In"))),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),he=Object(k.a)(N.a,E)(pe),be=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(he,null),r.a.createElement(ce,null),r.a.createElement(re,null))},ve=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){t&&t.roles.includes(T)&&e.props.history.push("/actions")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Matrix API Connector"),r.a.createElement("p",null,"Your account must be enabled for you to perform any actions."))}}]),t}(n.Component),Ee=Object(k.a)(E,P(function(e){return!!e}))(ve),fe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleEvent=function(){a.setState({loading:!0});var e=a.state.isAdmin?a.props.user.roles.filter(function(e){return e!==T}):[].concat(Object(z.a)(a.props.user.roles),[T]);a.props.firebase.user(a.props.user.uid).update({roles:e}).then(function(){a.props.user.roles=e,a.setState({isAdmin:e.includes(T),loading:!1})})},a.state={loading:!1,isAdmin:e.user.roles.includes(T)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("button",{onClick:this.handleEvent,disabled:this.state.loading},this.state.isAdmin?"Disable":"Enable"))}}]),t}(n.Component),ge=E(fe),je=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleEvent=function(e){e.preventDefault(),a.props.firebase.user(a.props.user.uid).remove()},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(u.Consumer,null,function(t){return t&&t.uid!==e.props.user.uid?r.a.createElement("button",{type:"button",className:"link-button",onClick:e.handleEvent},"Delete User"):r.a.createElement("span",null,"\xa0")})}}]),t}(n.Component),ye=Object(k.a)(E)(je),Oe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(g.a)({roles:[]},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.users,n=t.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),n&&r.a.createElement("div",null,"Loading ..."),!n&&r.a.createElement("div",{className:"rTable"},r.a.createElement("div",{className:"rTableRow"},r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Id/Email")),r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Username")),r.a.createElement("div",{className:"rTableHead"},r.a.createElement("strong",null,"Enabled")),r.a.createElement("div",{className:"rTableHead"},"\xa0"),r.a.createElement("div",{className:"rTableHead"},"\xa0")),a.map(function(t){return r.a.createElement("div",{className:"rTableRow",key:t.uid},r.a.createElement("div",{className:"rTableCell"},r.a.createElement("strong",null,t.uid),r.a.createElement("br",null),r.a.createElement("strong",null,t.email)),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("strong",null,t.username)),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("strong",null,t.roles.includes(T)?"Yes":"No"),t.uid!==e.props.authUser.uid&&r.a.createElement(ge,{user:t})),r.a.createElement("div",{className:"rTableCell"},r.a.createElement("button",{type:"button",onClick:e.onSendPasswordResetEmail},"Send Password Reset")),r.a.createElement("div",{className:"rTableCell"},r.a.createElement(ye,{user:t})))})))}}]),t}(n.Component),we=E(Oe),Ce=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"Only Admin function is administering users."),r.a.createElement(we,{authUser:this.props.authUser}))}}]),t}(n.Component),Ne=Object(k.a)(P(function(e){return e&&e.roles.includes(T)}))(Ce),ke=C(function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("hr",null),r.a.createElement(o.a,{path:"/",exact:!0,component:be}),r.a.createElement(o.a,{path:x,component:Ee}),r.a.createElement(o.a,{exact:!0,path:"/actions",component:Z}),r.a.createElement(o.a,{exact:!0,path:"/projects",component:L}),r.a.createElement(o.a,{path:"/signup",component:le}),r.a.createElement(o.a,{path:"/signin",component:be}),r.a.createElement(o.a,{path:"/pw-forget",component:ue}),r.a.createElement(o.a,{path:"/admin",component:Ne})))});l.a.render(r.a.createElement(f.Provider,{value:new w},r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.172ba02a.chunk.js.map