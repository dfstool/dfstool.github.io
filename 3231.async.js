"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3231],{98165:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(87462),a=r(62435),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},o=r(84089),c=function(e,t){return a.createElement(o.Z,(0,n.Z)({},e,{ref:t,icon:s}))};var i=a.forwardRef(c)},64317:function(e,t,r){var n=r(1413),a=r(91),s=r(22270),o=r(62435),c=r(66758),i=r(56499),l=r(86074),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],f=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=function(e,t){var r=e.fieldProps,f=e.children,p=e.params,m=e.proFieldProps,d=e.mode,h=e.valueEnum,g=e.request,x=e.showSearch,v=e.options,b=(0,a.Z)(e,u),k=(0,o.useContext)(c.Z);return(0,l.jsx)(i.Z,(0,n.Z)((0,n.Z)({valueEnum:(0,s.h)(h),request:g,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:v,mode:d,showSearch:x,getPopupContainer:k.getPopupContainer},r),ref:t,proFieldProps:m},b),{},{children:f}))},m=o.forwardRef((function(e,t){var r=e.fieldProps,u=e.children,p=e.params,m=e.proFieldProps,d=e.mode,h=e.valueEnum,g=e.request,x=e.options,v=(0,a.Z)(e,f),b=(0,n.Z)({options:x,mode:d||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},r),k=(0,o.useContext)(c.Z);return(0,l.jsx)(i.Z,(0,n.Z)((0,n.Z)({valueEnum:(0,s.h)(h),request:g,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({getPopupContainer:k.getPopupContainer},b),ref:t,proFieldProps:m},v),{},{children:u}))})),d=o.forwardRef(p);d.SearchSelect=m,d.displayName="ProFormComponent",t.Z=d},13231:function(e,t,r){r.r(t);var n=r(15009),a=r.n(n),s=r(99289),o=r.n(s),c=r(5574),i=r.n(c),l=r(18008),u=r(64119),f=r(98165),p=r(11774),m=r(38345),d=r(97269),h=r(5966),g=r(64317),x=r(59530),v=r(80507),b=r(45360),k=r(7134),w=r(15867),C=r(9669),P=r.n(C),S=r(62435),Z=(r(82267),r(86074));t.default=function(){var e=(0,x.useDispatch)(),t=b.ZP.useMessage(),r=i()(t,2),n=r[0],s=r[1],c=(0,x.useSelector)((function(e){return e.global.session})),C=(0,x.useSelector)((function(e){return e.global.contractKit})),y=(0,x.useSelector)((function(e){return e.global.account})),j=(0,x.useSelector)((function(e){return e.transfer.valueEnum})),M=(0,S.useState)(!1),N=i()(M,2),F=N[0],E=N[1],z=(0,S.useRef)(),T=(0,x.useIntl)(),q=T.formatMessage({id:"common.intlCopy"}),I=T.formatMessage({id:"common.intlTransferSuccess"}),R=T.formatMessage({id:"common.intlTransferFail"}),V=T.formatMessage({id:"common.intlCopySuccess"}),A=T.formatMessage({id:"coffee.inputException"}),L=T.formatMessage({id:"coffee.account"}),_=T.formatMessage({id:"coffee.pleaseInputTokenNumber2"}),B=T.formatMessage({id:"coffee.cardTitle"}),$=T.formatMessage({id:"coffee.message"}),D=T.formatMessage({id:"coffee.leaveAMessage"}),K=T.formatMessage({id:"common.intlPleaseConnectWallet"}),O=T.formatMessage({id:"common.intlPleaseConnectNetwork"}),Q=T.formatMessage({id:"common.intlInsufficientBalance"}),W=T.formatMessage({id:"coffee.intlToken"}),G=T.formatMessage({id:"coffee.intlQuantity"}),H=(0,S.useCallback)(function(){var t=o()(a()().mark((function t(r,s,o){var c,f,p,m,d,h,g,x,v,b,w,C,S,y,j,M,N;return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.load("swapswapswap");case 3:return f=t.sent,p=f.table("markets"),t.next=7,p.all();case 7:return m=t.sent,d={},h=[],m.forEach((function(e){var t=e.contract0.toString()+"-"+e.sym0.toString().split(",")[1]+"-"+e.sym0.toString().split(",")[0],r=e.contract1.toString()+"-"+e.sym1.toString().split(",")[1]+"-"+e.sym1.toString().split(",")[0];h.includes(t)||h.push(t),h.includes(r)||h.push(r)})),t.next=13,(0,u.zI)(P().get("https://api2.dfsmoon.com/v2/state/get_tokens?limit=1000&account=".concat(o),{timeout:2e3}));case 13:if(g=t.sent,x=i()(g,2),v=x[0],b=x[1],v||200!==b.status){t.next=21;break}b.data.tokens.forEach((function(e){var t=e.contract+"-"+e.symbol;if(e.amount){var r="https://dfs.land/assets/tokens/"+t+".png";d[t+"-"+e.precision+"-"+e.amount]=(0,Z.jsxs)("div",{className:"flex items-center",children:[(0,Z.jsx)(k.C,{className:"mr-2",size:"default",src:r}),(0,Z.jsx)("span",{children:e.amount.toFixed(e.precision)+" "+e.symbol})]})}})),t.next=37;break;case 21:w=0;case 22:if(!(w<h.length)){t.next=37;break}return C=h[w].split("-")[0],S=h[w].split("-")[1],y=h[w].split("-")[2],j=C+"-"+S,t.next=29,r.client.v1.chain.get_currency_balance(C,o,S);case 29:if((M=t.sent).length&&M[0].value){t.next=32;break}return t.abrupt("continue",34);case 32:N="https://dfs.land/assets/tokens/"+j+".png",d[j+"-"+y+"-"+M[0].value]=(0,Z.jsxs)("div",{className:"flex items-center",children:[(0,Z.jsx)(k.C,{className:"mr-2",size:"default",src:N}),(0,Z.jsx)("span",{children:M[0].toString()})]});case 34:w++,t.next=22;break;case 37:null===(c=z.current)||void 0===c||c.setFieldValue("token",""),e(l.N.setValueEnum(d)),E(!1),t.next=46;break;case 42:t.prev=42,t.t0=t.catch(0),E(!1),(0,u.Tv)(t.t0,n);case 46:case"end":return t.stop()}}),t,null,[[0,42]])})));return function(e,r,n){return t.apply(this,arguments)}}(),[]),J=(0,S.useCallback)(function(){var e=o()(a()().mark((function e(t){var r,s,o,l,f,p,m,d,h,g,x,b,k;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c&&c.broadcast){e.next=5;break}return n.error("".concat(K)),e.abrupt("return");case 5:if(y){e.next=8;break}return n.error("".concat(O)),e.abrupt("return");case 8:if(r=t.token.split("-"),s=i()(r,4),o=s[0],l=s[1],f=s[2],p=s[3],!((m=Number(t.value))>Number(p))){e.next=13;break}return n.error("".concat(Q)),e.abrupt("return");case 13:return d=v.xR.from(m,v.xR.Symbol.fromParts(l,Number(f))),h={action:{account:o,name:"transfer",authorization:[c.permissionLevel],data:{from:c.actor,to:"dfsnetworkbp",quantity:d.toString(),memo:t.memo}}},e.next=17,(0,u.zI)(c.transact(h));case 17:return g=e.sent,x=i()(g,2),b=x[0],k=x[1],b?n.error(b):k&&k.response?n.success("".concat(I)):n.error("".concat(R)),setTimeout((function(){E(!0),H(c,C,y.accountName.toString())}),500),e.abrupt("return",!0);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[c,y,H,C]),U=(0,S.useCallback)(o()(a()().mark((function e(){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.navigator.clipboard.writeText("dfsnetworkbp");case 2:n.success("".concat(V));case 3:case"end":return e.stop()}}),e)}))),[]),X=(0,S.useCallback)((function(){return c&&c.broadcast?y?(E(!0),void H(c,C,y.accountName.toString())):(n.error("".concat(O)),!1):(n.error("".concat(K)),!1)}),[c,y,H,C]);return(0,S.useEffect)((function(){y&&c&&C&&!Object.keys(j).length&&!F&&(E(!0),H(c,C,y.accountName.toString()))}),[H,y,j,C,F]),(0,Z.jsxs)(p._z,{className:"coffee",ghost:!0,children:[(0,Z.jsx)("div",{className:"flex justify-center",children:(0,Z.jsx)(m.Z,{title:(0,Z.jsx)("div",{children:(0,Z.jsx)("span",{className:" font-semibold text-lg",children:B})}),style:{width:"450px"},children:(0,Z.jsxs)(d.A,{formRef:z,initialValues:{memo:"",token:"",to:"dfsnetworkbp"},onFinish:function(){var e=o()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),submitter:{render:function(e,t){return[t[1],t[0],(0,Z.jsx)(w.ZP,{onClick:U,children:q},"copy")]}},children:[(0,Z.jsx)(h.Z,{name:"to",label:L,fieldProps:{size:"large",autoFocus:!1,onChange:void 0,value:"dfsnetworkbp",allowClear:!1}}),(0,Z.jsx)(h.Z,{name:"memo",label:$,placeholder:D,fieldProps:{size:"large",autoFocus:!1}}),(0,Z.jsx)(g.Z,{name:"token",label:(0,Z.jsxs)("div",{children:[W,(0,Z.jsx)(f.Z,{spin:F,className:"ml-[8px] hover:cursor-pointer",style:{color:"#1677ff"},onClick:X})]}),valueEnum:j,placeholder:"",rules:[{required:!0,whitespace:!0,message:"".concat(A),pattern:/^.+$/}],fieldProps:{size:"large",autoFocus:!1}}),(0,Z.jsx)(h.Z,{name:"value",label:G,placeholder:_,rules:[{required:!0,message:"".concat(A),whitespace:!0,pattern:/^\d+(\.\d{1,8})?$/}],fieldProps:{size:"large",autoFocus:!1}})]})})}),s]})}},82267:function(){}}]);