"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9791],{39791:function(t,e,r){r.r(e);var n=r(15009),a=r.n(n),s=r(99289),i=r.n(s),o=r(5574),c=r.n(o),l=r(5958),u=r(64119),d=r(11774),f=r(92340),m=r(59530),h=r(45360),x=r(15867),g=r(92783),p=r(9669),k=r.n(p),y=r(27484),b=r.n(y),w=r(70178),_=r.n(w),S=r(62435),O=(r(15933),r(86074));b().extend(_());e.default=function(){var t=h.ZP.useMessage(),e=c()(t,2),r=e[0],n=e[1],s=(0,S.useState)(!1),o=c()(s,2),p=o[0],y=o[1],w=(0,m.useDispatch)(),_=(0,m.useSelector)((function(t){return t.bridgelog.dataSourceIn})),j=(0,m.useSelector)((function(t){return t.bridgelog.dataSourceOut})),T=(0,m.useSelector)((function(t){return t.bridgelog.inSymFilters})),v=(0,m.useSelector)((function(t){return t.bridgelog.outSymFilters})),I=(0,m.useSelector)((function(t){return t.bridgelog.inFromFilters})),q=(0,m.useSelector)((function(t){return t.bridgelog.outFromFilters})),F=(0,m.useSelector)((function(t){return t.bridgelog.inToFilters})),C=(0,m.useSelector)((function(t){return t.bridgelog.outToFilters})),R=(0,m.useIntl)(),E=R.formatMessage({id:"bridgelog.intlFrom"}),M=R.formatMessage({id:"bridgelog.intlTo"}),N=R.formatMessage({id:"bridgelog.intlQuantity"}),B=R.formatMessage({id:"bridgelog.intlTime"}),P=R.formatMessage({id:"bridgelog.intlState"}),X=R.formatMessage({id:"bridgelog.intlTransId"}),A=R.formatMessage({id:"bridgelog.intlCompleted"}),D=R.formatMessage({id:"bridgelog.intlProcessing"}),Z=R.formatMessage({id:"bridgelog.intlFail"}),z=R.formatMessage({id:"bridgelog.intlBridgeIn"}),Q=R.formatMessage({id:"bridgelog.intlBridgeOut"}),U=R.formatMessage({id:"bridgelog.intlUpdate"}),W=(0,S.useState)("bridgeIn"),G=c()(W,2),H=G[0],J=G[1],K=(0,S.useCallback)((function(t){return t.hasOwnProperty("oid")?"EOS":t.hasOwnProperty("tick")?"ORDI":t.hasOwnProperty("fromAddress")&&t.hasOwnProperty("toAddress")?"TRX":!t.hasOwnProperty("fromAddress")&&t.hasOwnProperty("address")?"BTC":void 0}),[]),L=(0,S.useCallback)((function(t){return t.hasOwnProperty("oid")?"EOS":t.hasOwnProperty("address")&&t.address.startsWith("T")?"TRX":t.hasOwnProperty("address")?"BTC":void 0}),[]),V=(0,S.useCallback)(i()(a()().mark((function t(){var e,n,s,i,o,c,d,f,m,h;return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=[],n=[],s=[],i=[],o=[],c=[],d=[],f=[],t.next=11,k().get("https://api.dfs.land/dfschain/bridgeinlog");case 11:return m=t.sent.data,t.next=14,k().get("https://api.dfs.land/dfschain/bridgeoutlog");case 14:h=t.sent.data,m.forEach((function(t,r){switch(K(t)){case"EOS":e.push({key:r,from:t.user,to:t.to,txid:t.in_trx_digest,quantity:t.quantity,state:t.state,create_time:b().utc(t.create_time).local().format(),sym:t.quantity.split(" ")[1],network:"EOS"});break;case"ORDI":case"BTC":e.push({key:r,from:t.address,to:t.user,txid:t.trxid,quantity:t.quantity,state:t.state,create_time:b().utc(t.create_time).local().format(),sym:t.quantity.split(" ")[1],network:"BTC"});break;case"TRX":e.push({key:r,from:t.toAddress,to:t.user,txid:t.trxid,quantity:t.quantity,state:t.state,create_time:b().utc(t.create_time).local().format(),sym:t.quantity.split(" ")[1],network:"TRX"})}})),h.forEach((function(t,e){switch(L(t)){case"EOS":n.push({key:e,from:t.user,to:t.to,txid:t.out_trx_digest,quantity:t.quantity,state:t.state,create_time:b().utc(t.create_time).local().format(),sym:t.quantity.split(" ")[1],network:"EOS"});break;case"BTC":n.push({key:e,from:t.user,to:t.address,txid:t.trxid,quantity:t.quantity,state:t.state,create_time:b().utc(t.create_time).local().format(),sym:t.quantity.split(" ")[1],network:"BTC"});break;case"TRX":n.push({key:e,from:t.user,to:t.address,txid:t.trxid,quantity:t.quantity,state:t.state,create_time:b().utc(t.create_time).local().format(),sym:t.quantity.split(" ")[1],network:"TRX"})}})),e.forEach((function(t){s.includes(t.sym)||s.push(t.sym);var e=t.from.length>13?t.from.slice(0,6)+"..."+t.from.slice(-6):t.from;o.includes(e)||o.push(e),d.includes(t.to)||d.push(t.to)})),n.forEach((function(t){i.includes(t.sym)||i.push(t.sym),c.includes(t.from)||c.push(t.from);var e=t.to.length>13?t.to.slice(0,6)+"..."+t.to.slice(-6):t.to;f.includes(e)||f.push(e)})),w(l.N.setInSymFilters(s.sort())),w(l.N.setOutSymFilters(i.sort())),w(l.N.setInFromFilters(o.sort())),w(l.N.setOutFromFilters(c.sort())),w(l.N.setInToFilters(d.sort())),w(l.N.setOutToFilters(f.sort())),w(l.N.setDataSourceIn(e)),w(l.N.setDataSourceOut(n)),y(!1),t.next=34;break;case 30:t.prev=30,t.t0=t.catch(0),y(!1),(0,u.Tv)(t.t0,r);case 34:case"end":return t.stop()}}),t,null,[[0,30]])}))),[A,D,Z,K,r]),Y=(0,S.useCallback)(i()(a()().mark((function t(){return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(!0),V();case 2:case"end":return t.stop()}}),t)}))),[V]);(0,S.useEffect)((function(){_.length&&j.length?y(!1):y(!0),V()}),[]);var $=(0,S.useMemo)((function(){return[{title:"#",dataIndex:"key",key:"key",render:function(t,e){return(0,O.jsx)("span",{children:e.key+1})}},{title:"".concat(N),dataIndex:"quantity",key:"quantity",filters:T.map((function(t){return{text:t,value:t}})),onFilter:function(t,e){return t===e.quantity.split(" ")[1]},render:function(t,e){return(0,O.jsx)("span",{children:e.quantity})}},{title:"".concat(E),dataIndex:"from",key:"from",filters:I.map((function(t){return{text:t,value:t}})),onFilter:function(t,e){return t===(e.from.length>13?e.from.slice(0,6)+"..."+e.from.slice(-6):e.from)},render:function(t,e){var r,n="";switch(e.network){case"EOS":n="https://bloks.io/account/"+e.from,r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.from});break;case"BTC":n="https://www.oklink.com/cn/btc/address/"+e.from,r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.from.slice(0,6)+"..."+e.from.slice(-6)});break;case"TRX":n="https://www.oklink.com/cn/trx/address/"+e.from,r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.from.slice(0,6)+"..."+e.from.slice(-6)})}return(0,O.jsx)("span",{children:r})}},{title:"".concat(M),dataIndex:"to",key:"to",filters:F.map((function(t){return{text:t,value:t}})),onFilter:function(t,e){return t===e.to},render:function(t,e){return(0,O.jsx)("span",{children:e.to})}},{title:"".concat(B),dataIndex:"create_time",key:"create_time",sorter:function(t,e){return b().utc(t.create_time).unix()-b().utc(e.create_time).unix()},render:function(t,e){return(0,O.jsx)("span",{children:e.create_time})}},{title:"".concat(P),dataIndex:"state",key:"state",render:function(t,e){var r="";return r=4===e.state?A:1===e.state?D:Z,(0,O.jsx)("span",{children:r})}},{title:"".concat(X),dataIndex:"txid",key:"txid",render:function(t,e){var r,n="";switch(e.network){case"EOS":n="https://bloks.io/transaction/"+e.txid;break;case"BTC":n="https://www.oklink.com/cn/btc/tx/"+e.txid;break;case"TRX":n="https://www.oklink.com/cn/trx/tx/"+e.txid}return r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.txid.slice(0,6)+"..."+e.txid.slice(-6)}),(0,O.jsx)("span",{children:r})}}]}),[A,D,Z,T,I,F]),tt=(0,S.useMemo)((function(){return[{title:"#",dataIndex:"key",key:"key",render:function(t,e){return(0,O.jsx)("span",{children:e.key+1})}},{title:"".concat(N),dataIndex:"quantity",key:"quantity",filters:v.map((function(t){return{text:t,value:t}})),onFilter:function(t,e){return t===e.quantity.split(" ")[1]},render:function(t,e){return(0,O.jsx)("span",{children:e.quantity})}},{title:"".concat(E),dataIndex:"from",key:"from",filters:q.map((function(t){return{text:t,value:t}})),onFilter:function(t,e){return t===e.from},render:function(t,e){return(0,O.jsx)("span",{children:e.from})}},{title:"".concat(M),dataIndex:"to",key:"to",filters:C.map((function(t){return{text:t,value:t}})),onFilter:function(t,e){return t===(e.to.length>13?e.to.slice(0,6)+"..."+e.to.slice(-6):e.to)},render:function(t,e){var r,n="";switch(e.network){case"EOS":n="https://bloks.io/account/"+e.to,r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.to});break;case"BTC":n="https://www.oklink.com/cn/btc/address/"+e.to,r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.to.slice(0,6)+"..."+e.to.slice(-6)});break;case"TRX":n="https://www.oklink.com/cn/trx/address/"+e.to,r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.to.slice(0,6)+"..."+e.to.slice(-6)})}return(0,O.jsx)("span",{children:r})}},{title:"".concat(B),dataIndex:"create_time",key:"create_time",sorter:function(t,e){return b().utc(t.create_time).unix()-b().utc(e.create_time).unix()},render:function(t,e){return(0,O.jsx)("span",{children:e.create_time})}},{title:"".concat(P),dataIndex:"state",key:"state",render:function(t,e){var r="";return r=4===e.state?A:1===e.state?D:Z,(0,O.jsx)("span",{children:r})}},{title:"".concat(X),dataIndex:"txid",key:"txid",render:function(t,e){var r,n="";switch(e.network){case"EOS":n="https://bloks.io/transaction/"+e.txid;break;case"BTC":n="https://www.oklink.com/cn/btc/tx/"+e.txid;break;case"TRX":n="https://www.oklink.com/cn/trx/tx/"+e.txid}return r=(0,O.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:e.txid.slice(0,6)+"..."+e.txid.slice(-6)}),(0,O.jsx)("span",{children:r})}}]}),[A,D,Z,v,q,C]);return(0,O.jsxs)(d._z,{className:"bridgelog",ghost:!0,children:[(0,O.jsx)(x.ZP,{style:{position:"absolute",right:"15px",top:"15px"},onClick:Y,children:U}),(0,O.jsx)(g.Z,{block:!0,options:[{label:(0,O.jsx)("span",{className:"font-semibold",children:z}),value:"bridgeIn"},{label:(0,O.jsx)("span",{className:"font-semibold",children:Q}),value:"bridgeOut"}],size:"large",onChange:J,value:H}),"bridgeIn"===H?(0,O.jsx)(f.Z,{className:"mb-3 mt-1",scroll:{x:!0},size:"small",columns:$,dataSource:_,defaultData:[],search:!1,options:!1,pagination:!1,tableAlertRender:!1,tableAlertOptionRender:!1,loading:p}):(0,O.jsx)(f.Z,{className:"mb-3 mt-1",scroll:{x:!0},size:"small",columns:tt,dataSource:j,defaultData:[],search:!1,options:!1,pagination:!1,tableAlertRender:!1,tableAlertOptionRender:!1,loading:p}),n]})}},15933:function(){}}]);