(self.webpackChunk=self.webpackChunk||[]).push([[687],{98165:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(87462),a=n(62435),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},o=n(84089),i=function(e,t){return a.createElement(o.Z,(0,r.Z)({},e,{ref:t,icon:s}))};var c=a.forwardRef(i)},64317:function(e,t,n){"use strict";var r=n(1413),a=n(91),s=n(22270),o=n(62435),i=n(66758),c=n(56499),l=n(86074),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],f=function(e,t){var n=e.fieldProps,d=e.children,f=e.params,m=e.proFieldProps,p=e.mode,h=e.valueEnum,x=e.request,v=e.showSearch,b=e.options,g=(0,a.Z)(e,u),k=(0,o.useContext)(i.Z);return(0,l.jsx)(c.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,s.h)(h),request:x,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:b,mode:p,showSearch:v,getPopupContainer:k.getPopupContainer},n),ref:t,proFieldProps:m},g),{},{children:d}))},m=o.forwardRef((function(e,t){var n=e.fieldProps,u=e.children,f=e.params,m=e.proFieldProps,p=e.mode,h=e.valueEnum,x=e.request,v=e.options,b=(0,a.Z)(e,d),g=(0,r.Z)({options:v,mode:p||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},n),k=(0,o.useContext)(i.Z);return(0,l.jsx)(c.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,s.h)(h),request:x,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:k.getPopupContainer},g),ref:t,proFieldProps:m},b),{},{children:u}))})),p=o.forwardRef(f);p.SearchSelect=m,p.displayName="ProFormComponent",t.Z=p},55959:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(64599),a=n.n(r),s=n(15009),o=n.n(s),i=n(99289),c=n.n(i),l=n(5574),u=n.n(l),d=n(18008),f=n(64119),m=n(98165),p=n(11774),h=n(38345),x=n(97269),v=n(17186),b=n(64317),g=n(5966),k=n(59530),j=n(80507),y=n(45360),S=n(7134),w=n(2058),Z=n(15867),N=n(71230),P=n(15746),C=n(9669),F=n.n(C),M=n(62435),E=n(86074),q=function(){var e=(0,k.useDispatch)(),t=y.ZP.useMessage(),n=u()(t,2),r=n[0],s=n[1],i=(0,k.useSelector)((function(e){return e.global.session})),l=(0,k.useSelector)((function(e){return e.global.contractKit})),C=(0,k.useSelector)((function(e){return e.global.account})),q=(0,k.useSelector)((function(e){return e.transfer.valueEnum})),I=(0,M.useRef)(),T=(0,M.useState)(1),R=u()(T,2),z=R[0],A=R[1],L=(0,M.useState)(!1),O=u()(L,2),_=O[0],V=O[1],B=(0,k.useIntl)(),D=B.formatMessage({id:"transfer.intlCardTitle"}),$=B.formatMessage({id:"transfer.intlAmountZero"}),U=B.formatMessage({id:"common.intlTransferSuccess"}),W=B.formatMessage({id:"common.intlTransferFail"}),J=B.formatMessage({id:"common.intlInputException"}),K=B.formatMessage({id:"transfer.intlToken"}),Q=B.formatMessage({id:"transfer.intlQuantity"}),G=B.formatMessage({id:"transfer.intlTo"}),H=B.formatMessage({id:"transfer.intlMemo"}),X=B.formatMessage({id:"common.intlPleaseConnectWallet"}),Y=B.formatMessage({id:"common.intlPleaseConnectNetwork"}),ee=B.formatMessage({id:"common.intlInsufficientBalance"}),te=B.formatMessage({id:"transfer.intlImport"}),ne=B.formatMessage({id:"transfer.intlImportFail"}),re=B.formatMessage({id:"transfer.intlLackToken"}),ae=B.formatMessage({id:"transfer.intlImportSuccess"}),se=(0,M.useCallback)(function(){var t=c()(o()().mark((function t(n,a,s){var i,c,l,m,p,h,x,v,b,g,k,j,y,w,Z,N;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.load("swapswapswap");case 3:return i=t.sent,c=i.table("markets"),t.next=7,c.all();case 7:return l=t.sent,m={},p=[],l.forEach((function(e){var t=e.contract0.toString()+"-"+e.sym0.toString().split(",")[1]+"-"+e.sym0.toString().split(",")[0],n=e.contract1.toString()+"-"+e.sym1.toString().split(",")[1]+"-"+e.sym1.toString().split(",")[0];p.includes(t)||p.push(t),p.includes(n)||p.push(n)})),t.next=13,(0,f.zI)(F().get("https://api2.dfsmoon.com/v2/state/get_tokens?limit=1000&account=".concat(s),{timeout:2e3}));case 13:if(h=t.sent,x=u()(h,2),v=x[0],b=x[1],v||200!==b.status){t.next=21;break}b.data.tokens.forEach((function(e){var t=e.contract+"-"+e.symbol;if(e.amount){var n="https://dfs.land/assets/tokens/"+t+".png";m[t+"-"+e.precision+"-"+e.amount]=(0,E.jsxs)("div",{className:"flex items-center",children:[(0,E.jsx)(S.C,{className:"mr-2",size:"default",src:n}),(0,E.jsx)("span",{children:e.amount.toFixed(e.precision)+" "+e.symbol})]})}})),t.next=37;break;case 21:g=0;case 22:if(!(g<p.length)){t.next=37;break}return k=p[g].split("-")[0],j=p[g].split("-")[1],y=p[g].split("-")[2],w=k+"-"+j,t.next=29,n.client.v1.chain.get_currency_balance(k,s,j);case 29:if((Z=t.sent).length&&Z[0].value){t.next=32;break}return t.abrupt("continue",34);case 32:N="https://dfs.land/assets/tokens/"+w+".png",m[w+"-"+y+"-"+Z[0].value]=(0,E.jsxs)("div",{className:"flex items-center",children:[(0,E.jsx)(S.C,{className:"mr-2",size:"default",src:N}),(0,E.jsx)("span",{children:Z[0].toString()})]});case 34:g++,t.next=22;break;case 37:e(d.N.setValueEnum(m)),V(!1),t.next=45;break;case 41:t.prev=41,t.t0=t.catch(0),V(!1),(0,f.Tv)(t.t0,r);case 45:case"end":return t.stop()}}),t,null,[[0,41]])})));return function(e,n,r){return t.apply(this,arguments)}}(),[]),oe=(0,M.useCallback)(function(){var e=c()(o()().mark((function e(t){var n,s,c,d,m,p,h,x,v,b,g,k,y;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i&&i.broadcast){e.next=5;break}return r.error("".concat(X)),e.abrupt("return",!1);case 5:if(C){e.next=8;break}return r.error("".concat(Y)),e.abrupt("return",!1);case 8:n={},s=a()(t.transfer),e.prev=10,s.s();case 12:if((c=s.n()).done){e.next=23;break}if(d=c.value,m=Number(d.token.split("-")[2]),0,(p=Number(d.quantity)).toFixed(m)!==(0).toFixed(m)){e.next=20;break}return r.error("".concat($)),e.abrupt("return",!1);case 20:n.hasOwnProperty(d.token)?n[d.token]+=p:n[d.token]=p;case 21:e.next=12;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(10),s.e(e.t0);case 28:return e.prev=28,s.f(),e.finish(28);case 31:e.t1=o()().keys(n);case 32:if((e.t2=e.t1()).done){e.next=39;break}if(h=e.t2.value,!(n[h]>Number(h.split("-")[3]))){e.next=37;break}return r.error("".concat(ee)),e.abrupt("return",!1);case 37:e.next=32;break;case 39:return x=[],t.transfer.forEach((function(e){var t=e.memo,n=e.to,r=e.token.split("-")[0],a=e.token.split("-")[1],s=Number(e.token.split("-")[2]),o=j.xR.from(Number(e.quantity),j.xR.Symbol.fromParts(a,s));x.push({account:r,name:"transfer",authorization:[i.permissionLevel],data:{from:i.actor,to:n,quantity:o.toString(),memo:t}})})),v={actions:x},e.next=44,(0,f.zI)(i.transact(v));case 44:return b=e.sent,g=u()(b,2),k=g[0],y=g[1],k?r.error(k):y&&y.response?r.success("".concat(U)):r.error("".concat(W)),setTimeout((function(){se(i,l,C.accountName.toString())}),500),e.abrupt("return",!0);case 51:case"end":return e.stop()}}),e,null,[[10,25,28,31]])})));return function(t){return e.apply(this,arguments)}}(),[i,C,l,se]),ie=(0,M.useCallback)(function(){var e=c()(o()().mark((function e(t){var n,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],(s=new FileReader).readAsText(t.fileList[0].originFileObj),s.onload=function(){try{var e=JSON.parse(s.result);if(e){var t;if(!Object.keys(q).length)return void r.error("".concat(re));var o,i=Object.keys(q),c=a()(e);try{var l,u=function(){var e=o.value,t=i.find((function(t){return t.startsWith(e.contract)}));if(!t)return r.error("".concat(re)),{v:void 0};n.push({token:t,quantity:String(e.amount),to:e.to,memo:e.memo})};for(c.s();!(o=c.n()).done;)if(l=u())return l.v}catch(e){c.e(e)}finally{c.f()}A(n.length),null===(t=I.current)||void 0===t||t.setFieldValue("transfer",n),r.success("".concat(ae))}else r.error("".concat(ne))}catch(e){r.error("".concat(ne))}};case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[q]);return(0,M.useEffect)((function(){C&&i&&l&&!Object.keys(q).length&&!_&&(V(!0),se(i,l,C.accountName.toString()))}),[se,C,q,l,_]),(0,E.jsxs)(p._z,{className:"transfer",ghost:!0,children:[(0,E.jsx)(h.Z,{title:(0,E.jsx)("div",{className:"flex justify-between items-center",children:(0,E.jsxs)("div",{children:[(0,E.jsx)("span",{className:" font-semibold text-lg",children:D}),(0,E.jsx)(m.Z,{spin:_,className:"ml-[8px] hover:cursor-pointer",style:{color:"#1677ff"},onClick:function(){V(!0),se(i,l,C.accountName.toString())}})]})}),children:(0,E.jsx)(x.A,{formRef:I,onFinish:function(){var e=c()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onReset:function(){var e;null===(e=I.current)||void 0===e||e.resetFields(),A(1)},submitter:{render:function(e,t){return[t[1],(0,E.jsx)(w.Z,{accept:".*",maxCount:1,showUploadList:!1,onChange:ie,beforeUpload:function(){return!1},children:(0,E.jsx)(Z.ZP,{children:te})},"upload"),t[0],(0,E.jsx)("span",{className:" font-semibold",children:z},"count")]}},size:"large",children:(0,E.jsx)(v.u,{name:"transfer",min:1,creatorButtonProps:!1,alwaysShowItemLabel:!0,itemContainerRender:function(e){return(0,E.jsx)(h.Z,{bordered:!0,bodyStyle:{paddingInline:"12px",paddingBlock:"6px"},className:"mb-3",children:e})},initialValue:[{token:"",quantity:"",to:"",memo:""}],onAfterAdd:function(){return A(z+1)},onAfterRemove:function(){return A(z-1)},children:(0,E.jsxs)(N.Z,{gutter:10,children:[(0,E.jsx)(P.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"12"},xs:{span:"15"},children:(0,E.jsx)(b.Z,{name:"token",label:(0,E.jsx)("span",{className:" font-semibold",children:K}),placeholder:"ex: eosio.token",fieldProps:{autoFocus:!1},rules:[{required:!0,whitespace:!0,message:"".concat(J),pattern:/^.+$/}],valueEnum:q})}),(0,E.jsx)(P.Z,{lg:{span:"6"},md:{span:"8"},sm:{span:"12"},xs:{span:"9"},children:(0,E.jsx)(g.Z,{name:"quantity",label:(0,E.jsx)("span",{className:" font-semibold",children:Q}),placeholder:"ex: 100",fieldProps:{autoFocus:!1},rules:[{required:!0,whitespace:!0,message:"".concat(J),pattern:/^\d+(\.\d+)?$/}]})}),(0,E.jsx)(P.Z,{lg:{span:"6"},md:{span:"8"},sm:{span:"12"},xs:{span:"15"},children:(0,E.jsx)(g.Z,{name:"to",label:(0,E.jsx)("span",{className:" font-semibold",children:G}),placeholder:"ex: dfsdeveloper",fieldProps:{autoFocus:!1},rules:[{required:!0,whitespace:!0,message:"".concat(J),pattern:/^[a-z1-5.]{1,12}$/}]})}),(0,E.jsx)(P.Z,{lg:{span:"4"},md:{span:"24"},sm:{span:"12"},xs:{span:"9"},children:(0,E.jsx)(g.Z,{name:"memo",label:(0,E.jsx)("span",{className:" font-semibold",children:H}),placeholder:"ex: abc",fieldProps:{autoFocus:!1}})})]})})})}),(0,E.jsxs)("div",{className:"mt-4",children:[(0,E.jsx)("div",{className:"mb-2 font-semibold",children:"导入说明："}),(0,E.jsx)("div",{children:"1. 文件类型必需是普通的文本文件"}),(0,E.jsx)("div",{children:"2. 标点符号必须为英文的标点符号"}),(0,E.jsx)("div",{children:"3. 组数最后一个记录不能有逗号,"}),(0,E.jsx)("div",{className:"mb-2 mt-2  font-semibold",children:"参考内容如下："}),(0,E.jsx)("div",{children:"["}),(0,E.jsx)("div",{className:"pl-3",children:'{ "contract": "eosio.token-DFS", "to": "dfsdeveloper", "amount": 0.0001, "memo": "abc" },'}),(0,E.jsx)("div",{className:"pl-3",children:'{ "contract": "eosio.token-DFS", "to": "dfsdeveloper", "amount": 0.0001, "memo": "abc" },'}),(0,E.jsx)("div",{className:"pl-3",children:'{ "contract": "eosio.token-DFS", "to": "dfsdeveloper", "amount": 0.0001, "memo": "abc" }'}),(0,E.jsx)("div",{children:"]"})]}),s]})}},64599:function(e,t,n){var r=n(96263);e.exports=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);